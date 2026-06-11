import { NextResponse } from "next/server"

export const runtime = "nodejs"

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error("Redis not configured")
  const { Redis } = require("@upstash/redis") as any
  return new Redis({ url, token })
}

export async function GET(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")
    if (!adminPassword || token !== adminPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const redis = getRedis()
    const keys: string[] = await redis.keys("invite:*")

    if (keys.length === 0) {
      return NextResponse.json({ codes: [], stats: {} })
    }

    const values: any[] = await redis.mget(...keys)
    const codes = values
      .filter((v: any) => v !== null)
      .map((v: any) => (typeof v === "string" ? JSON.parse(v) : v))

    const stats: Record<string, { total: number; used: number; unused: number }> = {}
    for (const c of codes) {
      if (!stats[c.channel]) stats[c.channel] = { total: 0, used: 0, unused: 0 }
      stats[c.channel].total++
      if (c.status === "used") stats[c.channel].used++
      else stats[c.channel].unused++
    }

    return NextResponse.json({ codes, stats })
  } catch (err: any) {
    return NextResponse.json({ error: `${err?.message || err}` }, { status: 500 })
  }
}
