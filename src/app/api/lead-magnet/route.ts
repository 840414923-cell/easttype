import { NextResponse, type NextRequest } from "next/server"
import { sendWelcomeEmail } from "@/lib/emails/welcome-email"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    let Redis: any
    try {
      const mod = await import("@upstash/redis")
      Redis = mod.Redis
    } catch (importErr: any) {
      return NextResponse.json({ error: `Import failed: ${importErr.message}` }, { status: 500 })
    }

    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN
    if (!url || !token) {
      return NextResponse.json({ error: "Redis not configured" }, { status: 500 })
    }

    const redis = new Redis({ url, token })

    const body = await request.json()
    const { email, source } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const normalizedEmail = email.trim().toLowerCase()

    const existed = await redis.sismember("lead:emails", normalizedEmail)
    const isNew = existed === 0

    await redis.sadd("lead:emails", normalizedEmail)

    await redis.set(
      `lead:${normalizedEmail}`,
      JSON.stringify({
        email: normalizedEmail,
        source: source || "exit-intent-popup",
        timestamp: new Date().toISOString(),
        welcomeSent: isNew ? "pending" : "existing",
      })
    )

    if (isNew) {
      const result = await sendWelcomeEmail(normalizedEmail)
      await redis.set(
        `lead:${normalizedEmail}`,
        JSON.stringify({
          email: normalizedEmail,
          source: source || "exit-intent-popup",
          timestamp: new Date().toISOString(),
          welcomeSent: result.success ? "sent" : "failed",
          welcomeError: result.success ? undefined : result.error,
        })
      )
    }

    return NextResponse.json({ success: true, welcomeEmail: isNew ? "sent" : "skipped" })
  } catch (err: any) {
    return NextResponse.json({ error: `${err?.message || err}` }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    let Redis: any
    try {
      const mod = await import("@upstash/redis")
      Redis = mod.Redis
    } catch {
      return NextResponse.json({ emails: [], count: 0 })
    }

    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN
    if (!url || !token) {
      return NextResponse.json({ emails: [], count: 0 })
    }

    const redis = new Redis({ url, token })

    const emails = await redis.smembers("lead:emails")
    const emailList: string[] = Array.isArray(emails) ? emails : []

    const records: any[] = []
    for (const email of emailList) {
      const data = await redis.get(`lead:${email}`)
      if (data) {
        records.push(typeof data === "string" ? JSON.parse(data) : data)
      }
    }

    records.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return NextResponse.json({ emails: records, count: records.length })
  } catch (err: any) {
    return NextResponse.json({ error: `${err?.message || err}` }, { status: 500 })
  }
}
