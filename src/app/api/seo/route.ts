import { NextRequest, NextResponse } from "next/server"

const SITEMAP_URL = "https://www.myeasterntype.com/sitemap.xml"

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization")
  if (auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const urls: string[] = body.urls || []

    if (urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 })
    }

    const result = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GOOGLE_INDEXING_TOKEN || ""}`,
        },
        body: JSON.stringify({
          url: urls[0],
          type: "URL_UPDATED",
        }),
      },
    )

    if (!result.ok) {
      const errText = await result.text()
      return NextResponse.json(
        { error: "Google API error", detail: errText, hint: "If no GOOGLE_INDEXING_TOKEN, use ping method instead" },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, pushed: urls.length })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization")
  if (auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    const res = await fetch(pingUrl, { method: "GET" })
    const ok = res.ok

    return NextResponse.json({
      method: "sitemap_ping",
      sitemap: SITEMAP_URL,
      pingUrl,
      success: ok,
      status: res.status,
      message: ok
        ? "Sitemap pinged Google successfully. Google will recrawl your sitemap."
        : "Ping failed. Try submitting manually at https://www.google.com/ping?sitemap=YOUR_URL",
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
