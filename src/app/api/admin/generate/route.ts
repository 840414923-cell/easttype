import { NextResponse } from "next/server"
import { generateCodes } from "@/lib/kv"

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

    const codes = await generateCodes(channel, num)

    return NextResponse.json({ codes })
  } catch (err) {
    console.error("[admin/generate] Error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
