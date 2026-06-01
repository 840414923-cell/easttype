"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { TYPES } from "@/lib/constitution-data"
import { TYPE_VIRAL } from "@/lib/type-viral"
import type { ConstitutionId } from "@/lib/types"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ShareCardImage } from "@/components/share-card"
import { CreemCheckout } from "@creem_io/nextjs"

const CREEM_PRODUCT_BASIC = process.env.NEXT_PUBLIC_CREEM_PRODUCT_BASIC!
const CREEM_PRODUCT_PRO = process.env.NEXT_PUBLIC_CREEM_PRODUCT_PRO!

function ResultContent() {
  const params = useSearchParams()
  const primaryId = (params.get("primary") ?? "balanced") as ConstitutionId
  const secondaryId = params.get("secondary") as ConstitutionId | null
  const sex = params.get("sex") as "female" | "male" | null
  const t = TYPES[primaryId] ?? TYPES.balanced
  const secondary = secondaryId ? TYPES[secondaryId] : null
  const viral = TYPE_VIRAL[primaryId] ?? TYPE_VIRAL.balanced

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

  const typeName = t.en

  const reportBase = `/report-v2?type=${primaryId}${sex ? `&sex=${sex}` : ""}`
  const successBase = `/success?type=${primaryId}${sex ? `&sex=${sex}` : ""}`

  const ProCta = ({ className = "" }: { className?: string }) => (
    <CreemCheckout
      productId={CREEM_PRODUCT_PRO}
      successUrl={`${successBase}&plan=pro`}
      metadata={{ type: primaryId, sex: sex ?? "female", plan: "pro" }}
    >
      <div
        className={`flex items-center justify-center w-full py-3.5 rounded-lg font-[family-name:var(--font-body)] text-base font-bold cursor-pointer transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_40px_rgba(201,163,85,0.3)] hover:-translate-y-0.5 ${className}`}
      >
        {"Get My Full Kit — $12.99 →"}
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
        {"Get My Report — $4.99"}
      </div>
    </CreemCheckout>
  )

  return (
    <>
      <Nav
        right={
          <Link href="/quiz" className="text-sm text-text2 hover:text-accent px-3 py-2 no-underline transition-colors">
            {"Start New Quiz"}
          </Link>
        }
      />

      <div className="max-w-md mx-auto px-5 py-6">

        {/* ━━ 1. Type Reveal — the "aha" moment ━━ */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(201,163,85,0.06)] border border-[rgba(201,163,85,0.12)] rounded-full px-3.5 py-1 text-[10px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            {"YOUR EASTERN TYPE"}
          </div>
          <h1
            className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight"
            style={{ color: t.color }}
          >
            {typeName}
          </h1>
          <div className="text-sm text-text2 mt-0.5">
            {`${t.zh} · ${t.zhPy}`}
          </div>
          <div className="text-[11px] text-text2 mt-1">
            <strong className="text-accent">{t.pct}</strong> {"of people."}
            {secondary && (
              <> · {"You also have a secondary tendency toward"} <strong className="text-accent">{secondary.en}</strong></>
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
              {p === "twitter" ? "Twitter / X"
                : p === "facebook" ? "Facebook"
                : p === "whatsapp" ? "WhatsApp"
                : p === "line" ? "LINE"
                : "Copy Link"}
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
              {"MOST POPULAR"}
            </div>
            {/* Price */}
            <div className="text-center pt-4 mb-4">
              <div className="text-xs text-accent font-semibold mb-1">{"Full Transformation Kit"}</div>
              <div className="flex items-baseline justify-center gap-2">
                                <span className="font-[family-name:var(--font-display)] text-3xl font-bold gold-gradient-text">$12.99</span>
                <span className="text-xs text-text2">USD</span>
              </div>
              <div className="text-[11px] text-text2 mt-1">{"Full Transformation Kit · One-time payment"}</div>
            </div>
            {/* All features — this IS the complete package */}
            <div className="space-y-1.5 mb-4">
              {[
                "Everything in the Body Profile Report",
                "28 days of TCM-inspired recipes",
                "Weekly grocery lists & ingredient swaps",
                "Simple, easy-to-make daily meals",
                "Seasonal adjustments for each week",
                "Based on thousand-year TCM food therapy",
              ].map((f, i) => (
                <div key={i} className="text-xs text-text flex items-start gap-2">
                  <span className="text-accent text-[10px] mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <ProCta />
            <div className="flex items-center justify-center gap-3 mt-2.5 text-[10px] text-text2">
              <span>{"🔒 Secure checkout"}</span>
              <span>·</span>
              <span>{"⚡ Instant delivery"}</span>
              <span>·</span>
              <span>{"30-day money-back guarantee"}</span>
            </div>
            <div className="text-center text-[10px] text-text2 mt-2">
              {"One-time payment · No subscription · Questions? 840414923@qq.com"}
            </div>
          </div>
        </div>

        {/* Basic — budget alternative */}
        <div className="border border-[rgba(201,163,85,0.15)] rounded-xl p-4 bg-card-bg mb-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-xs text-text2 mb-0.5">{"Body Profile Report"}</div>
              <div className="flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-text">$4.99</span>
                <span className="text-[10px] text-text2">USD</span>
              </div>
              <div className="text-[11px] text-text2 mt-0.5">{"Body Profile Report · One-time payment"}</div>
            </div>
            <div className="text-[10px] text-text2 text-right leading-snug">
              {"Report only,<br/>no recipe plan"}
            </div>
          </div>
          <div className="space-y-0.5 mb-3">
            {[
              "Deep explanation of your body type",
              "Personal Food Map — 25+ foods that love you, 15+ to avoid",
              "Seasonal guidance tailored to your type",
            ].map((f, i) => (
              <div key={i} className="text-[11px] text-text2 flex items-start gap-1.5">
                <span className="text-accent/60 text-[9px] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <BasicCta />
        </div>

        <div className="text-center text-[10px] text-text2 mb-6">
          {"30-day money-back guarantee · Cancel anytime"}
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
            {`Your ${t.en} body is trying to tell you something`}
          </h2>
          <p className="text-sm text-text2 leading-relaxed mb-3">
            {viral.predictions[0]}
          </p>
          <div className="pt-3 border-t" style={{ borderColor: `${t.color}15` }}>
            <p className="text-sm text-text leading-relaxed font-medium">
              {"You're only seeing 20% of the picture. Your full report reveals what to eat, when to rest, and how to thrive."}
            </p>
          </div>
        </div>

        {/* ━━ 5. Report sample — show concrete value ━━ */}
        <div className="mb-5">
          <div className="text-center mb-3">
            <span className="text-accent text-[10px] uppercase tracking-[0.2em]">
              {"Inside your personalized report"}
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
                  <div className="text-[10px] text-text2">{"Personalized"}</div>
                  <div className="text-[10px] text-accent font-semibold">{"27 Signals"}</div>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="px-4 py-3 bg-card-bg space-y-2.5">
      <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs">&#127858;</span>
                  <span className="text-xs font-semibold text-text">{"Your Nourishing Foods"}</span>
                </div>
                <div className="text-[11px] text-text2 leading-relaxed">
                  {`${t.en} bodies thrive on warm, cooked foods. Your top 3 nourishing ingredients: ginger, sweet potato, and cinnamon...`}
                </div>
              </div>
              <div className="h-px bg-card-border" />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs">&#127749;</span>
                  <span className="text-xs font-semibold text-text">{"Your Ideal Morning"}</span>
                </div>
                <div className="text-[11px] text-text2 leading-relaxed">
                  {"6:30 AM — Wake naturally. 7:00 — Warm water with lemon. 7:30 — Slow stretching, no high-intensity cardio..."}
                </div>
              </div>
              <div className="h-px bg-card-border" />
              <div className="text-center py-1">
                <span className="text-[10px] text-accent italic">
                  {"· · · 20+ more pages inside · · ·"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ━━ 6. Chapters overview ━━ */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { ch: "Ch.1", title: "Who You Are", desc: "Strengths, blind spots & your body's ancient language" },
            { ch: "Ch.2", title: "Your Food Map", desc: "Foods that nourish you + foods that drain you" },
            { ch: "Ch.3", title: "Seasonal Guide", desc: "What your body needs right now, this season" },
            { ch: "Ch.4", title: "28-Day Plan", desc: "Daily rhythm + recipes tailored to your type" },
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
            {"This assessment is for wellness and self-awareness purposes only. It does not constitute medical diagnosis or treatment. Always consult a qualified healthcare professional for medical concerns."}
          </p>
        </div>

        {/* ━━ 7. 4 Buying reasons — overcome objections ━━ */}
        <div className="space-y-3 mb-6">
          <h3 className="font-[family-name:var(--font-display)] text-base text-center tracking-wide">
            {"Why this is worth it"}
          </h3>

          {/* Reason 1: Authority — talk to a real TCM doctor */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#129658;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {"Bring it to your TCM doctor"}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {"Your report uses the same framework as Traditional Chinese Medicine practitioners. Print it out, bring it to your next appointment — your doctor will know exactly what you're talking about."}
              </div>
            </div>
          </div>

          {/* Reason 2: 3000 years */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#128218;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {"Based on 3,000 years of wisdom"}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {"Not a trendy diet. This is the same framework used in wellness clinics across Asia today."}
              </div>
            </div>
          </div>

          {/* Reason 3: Practical */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#127793;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {"Use it tomorrow at the grocery store"}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {"Food lists, daily schedules, seasonal tips — practical tools, not abstract theory."}
              </div>
            </div>
          </div>

          {/* Reason 4: Risk-free */}
          <div className="bg-card-bg border border-card-border rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-lg mt-0.5 flex-shrink-0">&#128176;</span>
            <div>
              <div className="text-sm font-semibold text-text mb-0.5">
                {"30-day money-back guarantee"}
              </div>
              <div className="text-xs text-text2 leading-relaxed">
                {"If it doesn't resonate with you, get a full refund. No questions asked."}
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
            {"Your body has been waiting 3,000 years for someone to finally listen."}
          </p>
          <div className="mb-3">
            <div className="text-xs text-text2 mb-1">{"Starting from"}</div>
            <div className="flex items-baseline justify-center gap-4">
              <div>
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold gold-gradient-text">$12.99</span>
                <span className="text-xs text-text2 ml-1">USD</span>
                <div className="text-[10px] text-text2">{"Full Transformation Kit"}</div>
              </div>
              <div className="text-text2/30">|</div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-text">$4.99</span>
                <span className="text-xs text-text2 ml-1">USD</span>
                <div className="text-[10px] text-text2">{"Body Profile Report"}</div>
              </div>
            </div>
          </div>
          <ProCta className="mb-2" />
          <CreemCheckout
            productId={CREEM_PRODUCT_BASIC}
            successUrl={`${successBase}&plan=basic`}
            metadata={{ type: primaryId, sex: sex ?? "female", plan: "basic" }}
          >
            <div
              className="flex items-center justify-center w-full py-2.5 rounded font-[family-name:var(--font-body)] text-xs font-semibold cursor-pointer border border-accent/25 text-accent hover:bg-[rgba(201,163,85,0.05)]"
            >
              {"Get My Report — $4.99"}
            </div>
          </CreemCheckout>
          <div className="text-[10px] text-text2 mt-2">{"One-time payment · No subscription · 30-day money-back guarantee"}</div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-text2">
          {"Loading your result..."}
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  )
}
