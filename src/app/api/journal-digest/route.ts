import { NextResponse } from "next/server"
import { Resend } from "resend"
import { JOURNAL_ARTICLES, type JournalArticle } from "@/lib/journal-data"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { Redis } = await import("@upstash/redis")
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })

    const allEmails = await redis.smembers("lead:emails")
    const emailList: string[] = Array.isArray(allEmails) ? allEmails : []

    const journalEmails: string[] = []
    for (const email of emailList) {
      const data = await redis.get(`lead:${email}`)
      if (data) {
        const record = typeof data === "string" ? JSON.parse(data) : data
        if (record.source === "journal") {
          journalEmails.push(email)
        }
      }
    }

    if (journalEmails.length === 0) {
      return NextResponse.json({ message: "No journal subscribers" })
    }

    const now = new Date()
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const monthlyArticles = JOURNAL_ARTICLES.filter((a) => {
      const d = new Date(a.date)
      return d.getMonth() === lastMonth.getMonth() && d.getFullYear() === lastMonth.getFullYear()
    })

    if (monthlyArticles.length === 0) {
      return NextResponse.json({
        message: "No articles last month",
        subscribers: journalEmails.length,
      })
    }

    const html = generateDigestHTML(monthlyArticles)
    const monthName = lastMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })

    const resend = new Resend(process.env.RESEND_API_KEY!)
    let sent = 0
    let failed = 0

    for (const email of journalEmails) {
      try {
        const { error } = await resend.emails.send({
          from: "EastType Journal <journal@myeasterntype.com>",
          to: email,
          subject: `Your EastType Journal Digest - ${monthName}`,
          html,
        })
        if (error) {
          failed++
        } else {
          sent++
        }
      } catch {
        failed++
      }
    }

    return NextResponse.json({
      sent,
      failed,
      total: journalEmails.length,
      articles: monthlyArticles.length,
      month: monthName,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || err }, { status: 500 })
  }
}

function generateDigestHTML(articles: JournalArticle[]): string {
  const articleCards = articles.map((a) => `
    <div style="background:#fff;border-radius:12px;padding:24px;margin-bottom:16px;border:1px solid #E8E0D0;">
      <p style="color:#999;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">${a.category}</p>
      <h2 style="margin:0 0 8px;">
        <a href="https://www.myeasterntype.com/journal/${a.slug}" style="color:#8C2D2A;text-decoration:none;font-size:18px;">
          ${a.title}
        </a>
      </h2>
      <p style="color:#666;font-size:14px;line-height:1.6;margin:0 0 12px;">${a.excerpt}</p>
      <a href="https://www.myeasterntype.com/journal/${a.slug}" style="color:#C9A355;font-size:13px;text-decoration:none;font-weight:600;">
        Read more ->
      </a>
    </div>
  `).join("")

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <h1 style="color:#8C2D2A;font-size:24px;margin:0 0 4px;">EastType Journal</h1>
    <p style="color:#999;font-size:13px;margin:0 0 32px;">Your monthly digest of Eastern wellness insights</p>
    
    ${articleCards}
    
    <div style="text-align:center;padding:32px 0 16px;">
      <a href="https://www.myeasterntype.com/quiz" style="background:#8C2D2A;color:#fff;padding:14px 36px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:bold;display:inline-block;">
        Take the Free Body Type Quiz
      </a>
    </div>
    
    <p style="color:#999;font-size:11px;text-align:center;margin-top:32px;line-height:1.6;">
      You are receiving this because you subscribed to EastType Journal.<br>
      <a href="https://www.myeasterntype.com/journal" style="color:#999;">Unsubscribe</a>
    </p>
  </div>
</body>
</html>`
}
