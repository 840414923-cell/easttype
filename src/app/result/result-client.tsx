"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { TYPES } from "@/lib/constitution-data"
import { TYPE_VIRAL } from "@/lib/type-viral"
import { FREE_LAYER } from "@/lib/free-layer-data"
import type { ConstitutionId } from "@/lib/types"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ShareCardImage } from "@/components/share-card"
import { CreemCheckout } from "@creem_io/nextjs"
import { track, getGaClientId } from "@/lib/analytics"

const CREEM_PRODUCT_BASIC = process.env.NEXT_PUBLIC_CREEM_PRODUCT_BASIC!
const CREEM_PRODUCT_PRO = process.env.NEXT_PUBLIC_CREEM_PRODUCT_PRO!

function ResultContent({ proToken, basicToken }: { proToken: string; basicToken: string }) {
  const params = useSearchParams()
  const router = useRouter()
  const primaryId = (params.get("primary") ?? "balanced") as ConstitutionId
  const secondaryId = params.get("secondary") as ConstitutionId | null
  const sex = params.get("sex") as "female" | "male" | null
  const [inviteCode, setInviteCode] = useState("")
  const [inviteStatus, setInviteStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [inviteError, setInviteError] = useState("")
  const t = TYPES[primaryId] ?? TYPES.balanced
  const secondary = secondaryId ? TYPES[secondaryId] : null
  const viral = TYPE_VIRAL[primaryId] ?? TYPE_VIRAL.balanced

  useEffect(() => {
    track("result_viewed", { primary_type: primaryId, sex: sex ?? "unknown" })
  }, [primaryId, sex])

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
  const proSuccessUrl = `${successBase}&plan=pro&token=${proToken}`
  const basicSuccessUrl = `${successBase}&plan=basic&token=${basicToken}`

  const ProCta = ({ className = "" }: { className?: string }) => (
    <CreemCheckout
      productId={CREEM_PRODUCT_PRO}
      successUrl={proSuccessUrl}
      metadata={{ type: primaryId, sex: sex ?? "female", plan: "pro", _ga: getGaClientId() ?? "" }}
    >
      <div
        className={`flex flex-col items-center justify-center w-full py-4 px-3 rounded-2xl font-[family-name:var(--font-body)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(140,45,42,0.4)] shadow-[0_0_25px_rgba(140,45,42,0.15)] border-2 border-[rgba(255,255,255,0.15)] ${className}`}
        style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
        onClick={() => track("checkout_started", { plan: "pro", value: 24.99, currency: "USD" })}
      >
        <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">Recommended</span>
        <span className="text-base font-bold mt-0.5">Full Kit — $24.99</span>
      </div>
    </CreemCheckout>
  )
  const BasicCta = ({ className = "" }: { className?: string }) => (
    <CreemCheckout
      productId={CREEM_PRODUCT_BASIC}
      successUrl={basicSuccessUrl}
      metadata={{ type: primaryId, sex: sex ?? "female", plan: "basic", _ga: getGaClientId() ?? "" }}
    >
      <div
        className={`flex flex-col items-center justify-center w-full py-4 px-3 rounded-2xl font-[family-name:var(--font-body)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(140,45,42,0.2)] border-2 border-[rgba(140,45,42,0.35)] bg-[rgba(140,45,42,0.06)] ${className}`}
        onClick={() => track("checkout_started", { plan: "basic", value: 9.99, currency: "USD" })}
      >
        <span className="text-[10px] font-semibold uppercase tracking-wide text-text2/50">Starter</span>
        <span className="text-base font-bold mt-0.5 text-accent">Body Profile — $9.99</span>
      </div>
    </CreemCheckout>
  )

  async function handleInviteRedeem() {
    if (!inviteCode.trim()) return
    setInviteStatus("loading")
    setInviteError("")
    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: inviteCode.trim(), type: primaryId, sex: sex ?? "unknown" }),
      })
      const data = await res.json()
      if (!res.ok) {
        setInviteStatus("error")
        setInviteError(data.error || "Invalid code")
        return
      }
      setInviteStatus("success")
      const reportUrl = `/report-v2?type=${primaryId}${sex ? `&sex=${sex}` : ""}`
      setTimeout(() => router.push(reportUrl), 800)
    } catch {
      setInviteStatus("error")
      setInviteError("Something went wrong")
    }
  }

  return (
    <>
      <Nav
        right={
          <Link href="/quiz" className="inline-flex items-center justify-center px-4 py-2 rounded font-[family-name:var(--font-body)] text-xs font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_20px_rgba(140,45,42,0.2)]">
            {"Retake Quiz"}
          </Link>
        }
      />

      <div className="max-w-md mx-auto px-5 py-6">

        {/* ━━ 1. Type Reveal — the "aha" moment ━━ */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(140,45,42,0.06)] border border-[rgba(140,45,42,0.12)] rounded-full px-3.5 py-1 text-[10px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            {"YOUR BODY TYPE"}
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

        {/* ━━ 2. Symptom resonance ━━ */}
        <div className="mb-6">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Your body may often feel</h2>
          <ul className="space-y-1.5">
            {FREE_LAYER[primaryId].signals.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text2">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ━━ 3. Simple summary ━━ */}
        <p className="text-sm text-text2 leading-relaxed mb-6">{FREE_LAYER[primaryId].simpleSummary}</p>

        {/* ━━ 4. Share Card — "I got something" achievement ━━ */}
        <div className="mb-3">
          <ShareCardImage typeId={primaryId} />
        </div>
        <div className="flex justify-center gap-1.5 flex-wrap mb-6">
          {["twitter", "facebook", "whatsapp", "line", "copy"].map((p) => (
            <button
              key={p}
              onClick={() => handleShare(p)}
              className="px-3 py-1.5 rounded border border-[rgba(140,45,42,0.1)] bg-card-bg text-[11px] font-medium cursor-pointer transition-all duration-200 hover:border-[rgba(140,45,42,0.25)] text-text2 hover:text-text"
            >
              {p === "twitter" ? "Twitter / X"
                : p === "facebook" ? "Facebook"
                : p === "whatsapp" ? "WhatsApp"
                : p === "line" ? "LINE"
                : "Copy Link"}
            </button>
          ))}
        </div>

        {/* ━━ 6. Gentle paywall transition ━━ */}
        <div className="text-center mb-5">
          <p className="text-sm text-text leading-relaxed">
            {"That's the surface. Your full pattern goes deeper — and there's a lot you can do with it."}
          </p>
        </div>

        {/* ━━ Report sample ━━ */}
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
            </div>
          </div>
        </div>

        {/* ━━ Pricing comparison table ━━ */}
        <div className="mb-5">
          <div className="rounded-xl border border-[rgba(140,45,42,0.15)] overflow-hidden">
            <div className="grid grid-cols-3 text-center bg-card-bg">
              <div className="py-2 px-2 text-[11px] font-semibold text-text2 border-b border-card-border" />
              <div className="py-2 px-2 text-[11px] font-semibold text-text border-b border-card-border">
                <div>{"Basic"}</div>
                <div className="text-accent font-bold">$9.99</div>
              </div>
              <div className="py-2 px-2 text-[11px] font-semibold border-b border-card-border bg-[rgba(140,45,42,0.04)]">
                <div className="text-accent">{"Pro"}</div>
                <div className="gold-gradient-text font-bold">$24.99</div>
              </div>
            </div>
            {[
              ["Full type explanation", true, true],
              ["Personal food map (25+ foods)", true, true],
              ["Daily rhythm + checklist", true, true],
              ["Starter recipe", true, true],
              ["Seasonal protocol (4 seasons)", false, true],
              ["Deep pattern origin story", false, true],
              ["Dangerous food combinations", false, true],
              ["Seasonal drink recipes", false, true],
              ["Acupoint massage guide", false, true],
              ["Multiple TCM recipes", false, true],
              ["30-day lifestyle plan", false, true],
            ].map(([feature, basic, pro], i) => (
              <div key={i} className={`grid grid-cols-3 text-center ${i % 2 === 0 ? "bg-card-bg" : ""}`}>
                <div className="py-1.5 px-2 text-[11px] text-text2 text-left border-b border-card-border/50">{feature as string}</div>
                <div className="py-1.5 px-2 border-b border-card-border/50 text-accent">{basic ? "✓" : "—"}</div>
                <div className="py-1.5 px-2 border-b border-card-border/50 bg-[rgba(140,45,42,0.02)] text-accent">{pro ? "✓" : "—"}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <ProCta />
            <BasicCta />
          </div>

          {/* ━━ Invite Code ━━ */}
          <div className="mt-4 pt-4 border-t border-card-border/30">
            <button
              onClick={() => {
                const el = document.getElementById("invite-section")
                if (el) el.classList.toggle("hidden")
              }}
              className="w-full text-center text-xs text-text2 cursor-pointer hover:text-accent transition-colors"
            >
              {"Have an invite code?"}
            </button>
            <div id="invite-section" className="hidden mt-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === "Enter" && handleInviteRedeem()}
                  placeholder="ET-XXXXXXXX"
                  maxLength={11}
                  disabled={inviteStatus === "loading" || inviteStatus === "success"}
                  className="flex-1 px-3 py-2 rounded bg-[rgba(140,45,42,0.05)] text-text2 border border-[rgba(140,45,42,0.15)] outline-none focus:border-accent/40 font-mono text-sm placeholder:text-text2/30"
                />
                <button
                  onClick={handleInviteRedeem}
                  disabled={inviteStatus === "loading" || inviteStatus === "success" || !inviteCode.trim()}
                  className="px-4 py-2 rounded bg-[rgba(140,45,42,0.1)] text-accent text-sm font-semibold cursor-pointer hover:bg-[rgba(140,45,42,0.2)] transition-colors disabled:opacity-40"
                >
                  {inviteStatus === "loading" ? "..." : inviteStatus === "success" ? "✓" : "Unlock"}
                </button>
              </div>
              {inviteStatus === "error" && (
                <p className="text-red-400 text-xs mt-1.5">{inviteError}</p>
              )}
              {inviteStatus === "success" && (
                <p className="text-green-400 text-xs mt-1.5">Code accepted! Redirecting to your report...</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-2 text-[10px] text-text2">
            <span>{"🔒 Secure checkout"}</span>
            <span>·</span>
            <span>{"⚡ Instant delivery"}</span>
            <span>·</span>
            <span>{"30-day money-back guarantee"}</span>
          </div>
        </div>

        {/* ━━ Disclaimer ━━ */}
        <div className="mb-5 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
          <p className="text-[10px] text-text2 leading-relaxed text-center">
            {"This assessment is for wellness and self-awareness purposes only. It does not constitute medical diagnosis or treatment. Always consult a qualified healthcare professional for medical concerns."}
          </p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default function ResultPage({ proToken, basicToken }: { proToken: string; basicToken: string }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-text2">
          {"Loading your result..."}
        </div>
      }
    >
      <ResultContent proToken={proToken} basicToken={basicToken} />
    </Suspense>
  )
}
