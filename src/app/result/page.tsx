"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { TYPES } from "@/lib/constitution-data"
import { useLocale } from "@/components/locale-provider"
import type { ConstitutionId } from "@/lib/types"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ShareCardImage } from "@/components/share-card"
import { CreemCheckout } from "@creem_io/nextjs"

const CREEM_PRODUCT_BASIC = process.env.NEXT_PUBLIC_CREEM_PRODUCT_BASIC!
const CREEM_PRODUCT_PRO = process.env.NEXT_PUBLIC_CREEM_PRODUCT_PRO!

function ResultContent() {
  const params = useSearchParams()
  const { locale } = useLocale()
  const primaryId = (params.get("primary") ?? "balanced") as ConstitutionId
  const secondaryId = params.get("secondary") as ConstitutionId | null
  const sex = params.get("sex") as "female" | "male" | null
  const t = TYPES[primaryId] ?? TYPES.balanced
  const secondary = secondaryId ? TYPES[secondaryId] : null
  const viral = locale.types[primaryId] ?? locale.types.balanced

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `${viral.cardHeadline} — ${t.en} | EastType`
    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      return
    }
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    }
    if (urls[platform]) { window.open(urls[platform]); return }
    if (platform === "native") { navigator.share({ title: "EastType", text, url }).catch(() => {}) }
  }

  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const typeName = locale.code === "en" ? t.en : locale.code === "zh-TW" ? t.zh.replace("质", "質") : t.zh

  const reportBase = `/report-v2?type=${primaryId}${sex ? `&sex=${sex}` : ""}`
  const successBase = `/success?type=${primaryId}${sex ? `&sex=${sex}` : ""}`

  // CTA buttons — Creem API checkout
  const ProCta = ({ className = "" }: { className?: string }) => (
    <CreemCheckout
      productId={CREEM_PRODUCT_PRO}
      successUrl={`${successBase}&plan=pro`}
      metadata={{ type: primaryId, sex: sex ?? "female", plan: "pro" }}
    >
      <div
        className={`flex items-center justify-center w-full py-3.5 rounded-lg font-[family-name:var(--font-body)] text-base font-bold cursor-pointer transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_40px_rgba(201,163,85,0.3)] hover:-translate-y-0.5 ${className}`}
      >
        {l("Get My Full Kit — $12.99 →", "取得進階套件 — $12.99 →", "フルキットを取得 — $12.99 →")}
      </div>
    </CreemCheckout>
  )
  const BasicCta = ({ className = "" }: { className?: string }) => (
    <CreemCheckout
      productId={CREEM_PRODUCT_BASIC}
      successUrl={`${successBase}&plan=basic`}
      metadata={{ type: primaryId, sex: sex ?? "female", plan: "basic" }}
    >
      <div
        className={`flex items-center justify-center w-full py-2.5 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer border border-accent/30 text-accent hover:bg-[rgba(201,163,85,0.06)] transition-all ${className}`}
      >
        {l("Get My Report — $4.99", "取得報告 — $4.99", "レポートを取得 — $4.99")}
      </div>
    </CreemCheckout>
  )

  return (
    <>
      <Nav
        right={
          <Link href="/quiz" className="text-sm text-text2 hover:text-accent px-3 py-2 no-underline transition-colors">
            {locale.ui.startNewQuiz}
          </Link>
        }
      />

      <div className="max-w-md mx-auto px-5 py-6">

        {/* ━━ 1. Type Reveal — the "aha" moment ━━ */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(201,163,85,0.06)] border border-[rgba(201,163,85,0.12)] rounded-full px-3.5 py-1 text-[10px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            {locale.ui.yourEasternType}
          </div>
          <h1
            className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight"
            style={{ color: t.color }}
          >
            {typeName}
          </h1>
          <div className="text-sm text-text2 mt-0.5">
            {locale.code === "en" ? `${t.zh} · ${t.zhPy}` : `${t.en} · ${t.zhPy}`}
          </div>
          <div className="text-[11px] text-text2 mt-1">
            <strong className="text-accent">{t.pct}</strong> {locale.ui.ofPeople}
            {secondary && (
              <> · {locale.ui.secondaryTendency} <strong className="text-accent">{secondary.en}</strong></>
            )}
          </div>
        </div>

        {/* ━━ 2. Share Card — "I got something" achievement ━━ */}
        <div className="mb-3">
          <ShareCardImage typeId={primaryId} />
        </div>
        <div className="flex justify-center gap-1.5 flex-wrap mb-6">
          {["twitter", "facebook", "whatsapp", "line", "copy"].map((p) => (
            <button
              key={p}
              onClick={() => handleShare(p)}
              className="px-3 py-1.5 rounded border border-[rgba(201,163,85,0.1)] bg-card-bg text-[11px] font-medium cursor-pointer transition-all duration-200 hover:border-[rgba(201,163,85,0.25)] text-text2 hover:text-text"
            >
              {p === "twitter" ? locale.ui.shareTwitter
                : p === "facebook" ? locale.ui.shareFacebook
                : p === "whatsapp" ? locale.ui.shareWhatsApp
                : p === "line" ? locale.ui.shareLine
                : locale.ui.copyLink}
            </button>
          ))}
        </div>

        {/* ━━ 3. PRICING — front and center ━━ */}

        {/* Pro — THE big card */}
        <div className="relative border-2 border-accent rounded-xl overflow-hidden mb-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,163,85,0.06)] to-transparent pointer-events-none" />
          <div className="relative p-5">
            {/* Badge */}
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg bg-gradient-to-r from-accent to-accent2 text-bg text-[10px] font-bold tracking-wide uppercase whitespace-nowrap">
              {locale.ui.planProBadge}
            </div>
            {/* Price */}
            <div className="text-center pt-4 mb-4">
              <div className="text-xs text-accent font-semibold mb-1">{locale.ui.planProName}</div>
              <div className="flex items-baseline justify-center gap-2">
                                <span className="font-[family-name:var(--font-display)] text-3xl font-bold gold-gradient-text">$12.99</span>
                <span className="text-xs text-text2">USD</span>
              </div>
              <div className="text-[11px] text-text2 mt-1">{l("Full Transformation Kit · One-time payment", "完整分析套件 · 一次性付款", "フルキット · 一回限りの支払い")}</div>
            </div>
            {/* All features — this IS the complete package */}
            <div className="space-y-1.5 mb-4">
              {[
                locale.ui.planProFeature1,
                locale.ui.planProFeature2,
                locale.ui.planProFeature3,
                locale.ui.planProFeature4,
                locale.ui.planProFeature5,
                locale.ui.planProFeature6,
              ].map((f, i) => (
                <div key={i} className="text-xs text-text flex items-start gap-2">
                  <span className="text-accent text-[10px] mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <ProCta />
            <div className="flex items-center justify-center gap-3 mt-2.5 text-[10px] text-text2">
              <span>{l("🔒 Secure checkout", "🔒 安全結帳", "🔒 安全な決済")}</span>
              <span>·</span>
              <span>{l("⚡ Instant delivery", "⚡ 即刻查看", "⚡ すぐに閲覧")}</span>
              <span>·</span>
              <span>{l("30-day money-back guarantee", "30天退款保證", "30日間返金保証")}</span>
            </div>
            <div className="text-center text-[10px] text-text2 mt-2">
              {l("One-time payment · No subscription · Questions? support@myeasterntype.com", "一次性付款 · 無订阅 · 有疑问？support@myeasterntype.com", "一回限りの支払い · サブスクなし · 質問？support@myeasterntype.com")}
            </div>
          </div>
        </div>

        {/* Basic — budget alternative */}
        <div className="border border-[rgba(201,163,85,0.15)] rounded-xl p-4 bg-card-bg mb-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-xs text-text2 mb-0.5">{locale.ui.planBasicName}</div>
              <div className="flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-text">$4.99</span>
                <span className="text-[10px] text-text2">USD</span>
              </div>
              <div className="text-[11px] text-text2 mt-0.5">{l("Body Profile Report · One-time payment", "體質報告 · 一次性付款", "ボディプロファイルレポート · 一回限りの支払い")}</div>
            </div>
            <div className="text-[10px] text-text2 text-right leading-snug">
              {l("Report only,<br/>no recipe plan", "僅報告，<br/>不含食譜計畫", "レポートのみ、<br/>レシピプランなし")}
            </div>
          </div>
          <div className="space-y-0.5 mb-3">
            {[locale.ui.planBasicFeature1, locale.ui.planBasicFeature2, locale.ui.planBasicFeature3].map((f, i) => (
              <div key={i} className="text-[11px] text-text2 flex items-start gap-1.5">
                <span className="text-accent/60 text-[9px] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <BasicCta />
        </div>

        <div className="text-center text-[10px] text-text2 mb-6">
          {locale.ui.moneyBack}
        </div>

        {/* ━━ 4. Loss aversion — "you're only seeing 20%" ━━ */}
        <div
          className="rounded-xl p-5 mb-5 text-center"
          style={{
            background: `linear-gradient(160deg, ${t.color}0D, ${t.color}05, transparent)`,
            border: `1.5px solid ${t.color}20`,
          }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-xl mb-2 leading-snug" style={{ color: t.color }}>
            {l(
              `Your ${t.en} body is trying to tell you something`,
              `你的${typeName}體質正在對你說話`,
              `${t.en}タイプの体があなたに伝えようとしていること`
            )}
          </h2>
          <p className="text-sm text-text2 leading-relaxed mb-3">
            {viral.predictions[0]}
          </p>
          <div className="pt-3 border-t" style={{ borderColor: `${t.color}15` }}>
            <p className="text-sm text-text leading-relaxed font-medium">
              {l(
                "You're only seeing 20% of the picture. Your full report reveals what to eat, when to rest, and how to thrive.",
                "你只看到了 20%。完整報告會告訴你該吃什麼、何時休息、如何養生。",
                "あなたが見ているのは全体の20%にすぎません。完全レポートは何を食べるか、いつ休むか、どう生きるかを明らかにします。"
              )}
            </p>
          </div>
        </div>

        {/* ━━ 5. Report sample — show concrete value ━━ */}
        <div className="mb-5">
          <div className="text-center mb-3">
            <span className="text-accent text-[10px] uppercase tracking-[0.2em]">
              {l("Inside your personalized report", "你的專屬報告裡面", "あなた専用レポートの中身")}
            </span>
          </div>
          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: `${t.color}20` }}
          >
            {/* Mock header */}
            <div className="px-4 py-3 border-b border-card-border" style={{ background: `linear-gradient(135deg, ${t.color}12, ${t.color}05)` }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-accent font-semibold tracking-wide">EASTTYPE · BODY PROFILE</div>
                  <div className="font-[family-name:var(--font-display)] text-base font-bold mt-0.5" style={{ color: t.color }}>
                    {typeName}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-text2">{l("Personalized", "專屬分析", "パーソナライズ")}</div>
                  <div className="text-[10px] text-accent font-semibold">{l("27 Signals", "27 訊號", "27シグナル")}</div>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="px-4 py-3 bg-card-bg space-y-2.5">
      <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs">&#127858;</span>
                  <span className="text-xs font-semibold text-text">{l("Your Nourishing Foods", "你的滋養食物", "滋養の食材")}</span>
                </div>
                <div className="text-[11px] text-text2 leading-relaxed">
                  {l(
                    `${t.en} bodies thrive on warm, cooked foods. Your top 3 nourishing ingredients: ginger, sweet potato, and cinnamon...`,
                    `${t.zh}體質最適合溫熱熟食。你的三大滋養食材：生薑、地瓜、肉桂……`,
                    `${t.en}タイプの体は温かい調理済みの食材に最も反応します。トップ3の滋養食材：生姜、さつまいも、シナモン…`
                  )}
                </div>
              </div>
              <div className="h-px bg-card-border" />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs">&#127749;</span>
                  <span className="text-xs font-semibold text-text">{l("Your Ideal Morning", "你的理想晨間", "理想の朝")}</span>
                </div>
                <div className="text-[11px] text-text2 leading-relaxed">
                  {l(
                    "6:30 AM — Wake naturally. 7:00 — Warm water with lemon. 7:30 — Slow stretching, no high-intensity cardio...",
                    "6:30 自然醒 · 7:00 溫檸檬水 · 7:30 慢伸展，避免高強度運動……",
                    "6:30 自然起床 · 7:00 レモン入りぬるま湯 · 7:30 ゆっくりストレッチ、高強度の有酸素運動は避ける…"
                  )}
                </div>
              </div>
              <div className="h-px bg-card-border" />
              <div className="text-center py-1">
                <span className="text-[10px] text-accent italic">
                  {l("· · · 20+ more pages inside · · ·", "· · · 還有 20+ 頁完整內容 · · ·", "· · · さらに20ページ以上 · · ·")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ━━ 6. Chapters overview ━━ */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { ch: "Ch.1", title: l("Who You Are", "你是誰", "あなたについて"), desc: l("Strengths, blind spots & your body's ancient language", "天賦、盲點和你身體的古老語言", "強み、盲点、体の古代言語") },
            { ch: "Ch.2", title: l("Your Food Map", "你的食物地圖", "フードマップ"), desc: l("Foods that nourish you + foods that drain you", "滋養你的食物 + 消耗你的食物", "滋養する食材 + エネルギーを奪う食材") },
            { ch: "Ch.3", title: l("Seasonal Guide", "季節指南", "季節ガイド"), desc: l("What your body needs right now, this season", "你的身體現在、這個季節需要什麼", "今の季節、体が求めているもの") },
            { ch: "Ch.4", title: l("28-Day Plan", "28天計畫", "28日プラン"), desc: l("Daily rhythm + recipes tailored to your type", "專屬作息 + 體質食譜", "1日のリズム + タイプ別レシピ") },
          ].map((item) => (
            <div key={item.ch} className="bg-card-bg border border-card-border rounded-lg p-3">
              <div className="text-accent text-[10px] font-semibold mb-0.5">{item.ch}</div>
              <div className="text-xs font-semibold">{item.title}</div>
              <div className="text-[10px] text-text2 mt-0.5 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* ━━ Disclaimer ━━ */}
        <div className="mb-5 px-4 py-3 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.1)]">
          <p className="text-[10px] text-text2 leading-relaxed text-center">
            {l(
              "This assessment is for wellness and self-awareness purposes only. It does not constitute medical diagnosis or treatment. Always consult a qualified healthcare professional for medical concerns.",
              "此評估僅供養生與自我覺察之用，不構成醫療診斷或治療。如有健康疑慮，請諮詢合格醫療專業人員。",
              "この評価はウェルネスと自己認識のためのみです。医療診断や治療を構成するものではありません。健康上の懸念については、常に資格のある医療専門家にご相談ください。"
            )}
          </p>
        </div>

        {/* ━━ 7. 4 Buying reasons — overcome objections ━━ */}
        <div className="space-y-3 mb-6">
          <h3 className="font-[family-name:var(--font-display)] text-base text-center tracking-wide">
            {l("Why this is worth it", "為什麼值得買", "価値がある理由")}
          </h3>

          {/* Reason 1: Authority — talk to a real TCM doctor */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#129658;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {l("Bring it to your TCM doctor", "拿去和你的中醫聊", "中医師に見せて話そう")}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {l(
                  "Your report uses the same framework as Traditional Chinese Medicine practitioners. Print it out, bring it to your next appointment — your doctor will know exactly what you're talking about.",
                  "你的報告使用的是和中醫師一樣的理論框架。列印出來，下次看診時帶去——你的醫生一看就懂。",
                  "レポートは伝統的な中国医学の practitioners と同じフレームワークを使用しています。印刷して次の診察に持参すれば、医師はすぐに理解してくれます。"
                )}
              </div>
            </div>
          </div>

          {/* Reason 2: 3000 years */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#128218;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {l("Based on 3,000 years of wisdom", "基於 3,000 年的東方智慧", "3,000年の東洋の知恵に基づく")}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {l(
                  "Not a trendy diet. This is the same framework used in wellness clinics across Asia today.",
                  "不是流行減肥法。這是中醫——和亞洲診所裡用的是同一套體系。",
                  "流行のダイエットではありません。アジアのクリニックで使われているものと同じフレームワークです。"
                )}
              </div>
            </div>
          </div>

          {/* Reason 3: Practical */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#127793;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {l("Use it tomorrow at the grocery store", "明天去超市就能用", "明日スーパーで使える")}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {l(
                  "Food lists, daily schedules, seasonal tips — practical tools, not abstract theory.",
                  "食物清單、每日作息、季節建議——都是實用工具，不是空泛理論。",
                  "食材リスト、1日のスケジュール、季節のヒント — 抽象的な理論ではなく実用的なツール。"
                )}
              </div>
            </div>
          </div>

          {/* Reason 4: Risk-free */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#128176;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {l("30-day money-back guarantee", "30天退款保證", "30日間返金保証")}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {l(
                  "If it doesn't resonate with you, get a full refund. No questions asked.",
                  "如果不適合你，全額退款，無需理由。",
                  "合わなければ全額返金。理由は問いません。"
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ━━ 8. Final emotional push + CTA ━━ */}
        <div
          className="rounded-xl p-5 text-center mb-4"
          style={{
            background: `linear-gradient(160deg, ${t.color}10, ${t.color}05, transparent)`,
            border: `1.5px solid ${t.color}25`,
          }}
        >
          <p className="font-[family-name:var(--font-display)] text-lg mb-1" style={{ color: t.color }}>
            {typeName}
          </p>
          <p className="text-sm text-text mb-4 leading-relaxed">
            {l(
              "Your body has been waiting 3,000 years for someone to finally listen.",
              "你的身體等了 3,000 年，終於有人願意聆聽了。",
              "あなたの体は3,000年、誰かが聞いてくれるのを待っていました。"
            )}
          </p>
          <ProCta className="mb-2" />
          <CreemCheckout
            productId={CREEM_PRODUCT_BASIC}
            successUrl={`${successBase}&plan=basic`}
            metadata={{ type: primaryId, sex: sex ?? "female", plan: "basic" }}
          >
            <div
              className="flex items-center justify-center w-full py-2.5 rounded font-[family-name:var(--font-body)] text-xs font-semibold cursor-pointer border border-accent/25 text-accent hover:bg-[rgba(201,163,85,0.05)]"
            >
              {l("Get My Report — $4.99", "取得報告 — $4.99", "レポートを取得 — $4.99")}
            </div>
          </CreemCheckout>
          <div className="text-[10px] text-text2 mt-2">{locale.ui.moneyBack}</div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default function ResultPage() {
  const { locale } = useLocale()
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-text2">
          {locale.ui.loadingResult}
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  )
}