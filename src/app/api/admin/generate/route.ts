import { NextResponse } from "next/server"

export const runtime = "nodejs"

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error("Redis not configured")
  const { Redis } = require("@upstash/redis") as any
  return new Redis({ url, token })
}

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

function randomChars(len: number): string {
  let r = ""
  for (let i = 0; i < len; i++) r += CHARS.charAt(Math.floor(Math.random() * CHARS.length))
  return r
}

export async function POST(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")
    if (!adminPassword || token !== adminPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { channel, count } = body
    if (!channel || typeof channel !== "string") {
      return NextResponse.json({ error: "Channel is required" }, { status: 400 })
    }
    const num = Math.min(Math.max(Number(count) || 1, 1), 50)

    const redis = getRedis()
    const codes: string[] = []

    for (let i = 0; i < num; i++) {
      let code = ""
      let exists = true
      while (exists) {
        code = `ET-${randomChars(8)}`
        const existing = await redis.get(`invite:${code}`)
        exists = existing !== null
      }

      const invite = {
        code,
        channel,
        status: "unused",
        createdAt: new Date().toISOString(),
      }
      await redis.set(`invite:${code}`, JSON.stringify(invite))
      codes.push(code)
    }

    return NextResponse.json({ codes })
  } catch (err: any) {
    return NextResponse.json({ error: `${err?.message || err}` }, { status: 500 })
  }
}
