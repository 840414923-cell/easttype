import { NextResponse, type NextRequest } from "next/server"

export const runtime = "nodejs"

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    let Redis: any
    try {
      const mod = await import("@upstash/redis")
      Redis = mod.Redis
    } catch {
      return NextResponse.json({ orders: [], count: 0 })
    }

    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN
    if (!url || !token) {
      return NextResponse.json({ orders: [], count: 0 })
    }

    const redis = new Redis({ url, token })

    let checkoutIds: string[] = []

    const allIds = await redis.smembers("purchase:all")
    if (allIds && Array.isArray(allIds) && allIds.length > 0) {
      checkoutIds = allIds
    }

    if (checkoutIds.length === 0) {
      const keys = await redis.keys("purchase:*")
      if (keys && Array.isArray(keys)) {
        checkoutIds = keys.filter((k: string) => !k.startsWith("purchase:email:"))
      }
    }

    const records: any[] = []
    for (const id of checkoutIds) {
      const data = await redis.get(`purchase:${id}`)
      if (data) {
        const parsed = typeof data === "string" ? JSON.parse(data) : data
        records.push({ id, ...parsed })
      }
    }

    records.sort((a: any, b: any) => {
      const da = new Date(a.createdAt || 0).getTime()
      const db = new Date(b.createdAt || 0).getTime()
      return db - da
    })

    return NextResponse.json({ orders: records, count: records.length })
  } catch (err: any) {
    return NextResponse.json({ error: `${err?.message || err}` }, { status: 500 })
  }
}
