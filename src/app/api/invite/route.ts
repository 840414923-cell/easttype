import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
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
    const { code, type, sex } = body

    if (!code || typeof code !== "string") {
      return NextResponse.json({ error: "Code is required" }, { status: 400 })
    }

    const normalizedCode = code.trim().toUpperCase()

    if (!normalizedCode.startsWith("ET-") || normalizedCode.length !== 11) {
      return NextResponse.json({ error: "Invalid code format" }, { status: 400 })
    }

    const key = `invite:${normalizedCode}`
    const data = await redis.get(key)

    if (!data) {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 })
    }

    const invite: any = typeof data === "string" ? JSON.parse(data) : data

    if (!invite || !invite.code) {
      return NextResponse.json({ error: "Invalid code data" }, { status: 400 })
    }

    if (invite.status === "used") {
      return NextResponse.json({ error: "This code has already been used" }, { status: 400 })
    }

    invite.status = "used"
    invite.usedByType = type ?? "unknown"
    invite.usedBySex = sex ?? "unknown"
    invite.usedAt = new Date().toISOString()

    await redis.set(key, JSON.stringify(invite))

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: `${err?.message || err}` }, { status: 500 })
  }
}
