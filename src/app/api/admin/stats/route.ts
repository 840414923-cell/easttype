import { NextResponse } from "next/server"
import { getAllCodes, getChannelStats } from "@/lib/kv"

export async function GET(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!adminPassword || token !== adminPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const [codes, stats] = await Promise.all([getAllCodes(), getChannelStats()])

    return NextResponse.json({ codes, stats })
  } catch (err) {
    console.error("[admin/stats] Error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
