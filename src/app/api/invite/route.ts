import { NextResponse } from "next/server"
import { redeemInviteCode } from "@/lib/kv"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { code, type, sex } = body

    if (!code || typeof code !== "string") {
      return NextResponse.json({ error: "Code is required" }, { status: 400 })
    }

    const normalizedCode = code.trim().toUpperCase()

    if (!normalizedCode.startsWith("ET-") || normalizedCode.length !== 11) {
      return NextResponse.json({ error: "Invalid code format" }, { status: 400 })
    }

    const result = await redeemInviteCode(
      normalizedCode,
      type ?? "unknown",
      sex ?? "unknown"
    )

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[invite/verify] Error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
