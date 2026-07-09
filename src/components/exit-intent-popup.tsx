"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { GuidePdfContent } from "./guide-pdf-content"

const STORAGE_KEY = "et_popup_dismissed"
const STORAGE_EXPIRY_DAYS = 30

type PopupState = "hidden" | "form" | "submitting" | "success" | "downloading" | "error"

function shouldShowPopup(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return true
    const dismissedAt = parseInt(stored, 10)
    const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)
    return daysSince >= STORAGE_EXPIRY_DAYS
  } catch {
    return true
  }
}

function markDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
  } catch {
    /* noop */
  }
}

export function ExitIntentPopup() {
  const [state, setState] = useState<PopupState>("hidden")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const contentRef = useRef<HTMLDivElement>(null)
  const activatedRef = useRef(false)

  const showPopup = useCallback(() => {
    if (activatedRef.current) return
    if (typeof window === "undefined") return
    if (window.location.pathname.startsWith("/admin")) return
    if (window.location.pathname.startsWith("/quiz")) return
    if (!shouldShowPopup()) return

    activatedRef.current = true
    setState("form")
    markDismissed()
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const isMobile = window.matchMedia("(max-width: 768px)").matches
    let activated = false
    let scrollFired = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (!activated) return
      if (e.clientY <= 0 && e.relatedTarget === null) {
        showPopup()
      }
    }

    const handleScroll = () => {
      if (!activated || scrollFired) return
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const percent = scrolled / total
      if (percent >= 0.35) {
        scrollFired = true
        showPopup()
      }
    }

    const handleScrollUp = () => {
      if (!activated || scrollFired) return
      if (!isMobile) return
      const scrollDelta = lastScrollY - window.scrollY
      if (scrollDelta > 80 && window.scrollY > 300) {
        scrollFired = true
        showPopup()
      }
      lastScrollY = window.scrollY
    }

    let lastScrollY = window.scrollY
    const onScroll = () => {
      handleScroll()
      handleScrollUp()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    if (!isMobile) {
      document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    }

    const activationTimer = setTimeout(() => {
      activated = true
    }, 6000)

    const fallbackTimer = setTimeout(() => {
      showPopup()
    }, 30000)

    return () => {
      clearTimeout(activationTimer)
      clearTimeout(fallbackTimer)
      window.removeEventListener("scroll", onScroll)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [showPopup])

  const validateEmail = (value: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value.trim())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError("")

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setState("submitting")

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "exit-intent-popup" }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to submit")
      }

      setState("success")
    } catch {
      setState("error")
    }
  }

  const handleDownloadPdf = async () => {
    if (!contentRef.current) return

    setState("downloading")

    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

      const html2pdf = (await import("html2pdf.js")).default

      await html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: "10-foods-guide-easttype.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#FFFFFF",
            windowWidth: 820,
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["css", "legacy"] },
        })
        .from(contentRef.current)
        .save()

      setState("success")
    } catch {
      setState("error")
    }
  }

  const closePopup = () => {
    setState("hidden")
  }

  if (state === "hidden") {
    return <GuidePdfContent ref={contentRef} />
  }

  return (
    <>
      <GuidePdfContent ref={contentRef} />

      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{
          background: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.3s ease",
        }}
        onClick={closePopup}
      >
        <div
          className="relative w-full max-w-md animate-float-in"
          style={{
            background: "var(--color-bg2)",
            borderRadius: "16px",
            border: "1px solid rgba(140, 45, 42, 0.25)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(140, 45, 42, 0.08)",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer"
            style={{
              color: "var(--color-text2)",
              background: "rgba(255,255,255,0.05)",
            }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {(state === "form" || state === "submitting") && (
            <div className="p-8 text-center">
              <div
                className="text-xs font-bold tracking-[2px] uppercase mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                Free Guide
              </div>

              <div className="lotus-divider" style={{ margin: "0 auto 20px", maxWidth: "200px" }} />

              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text)",
                  lineHeight: 1.25,
                }}
              >
                10 Foods Your Body Type Will Love
              </h2>

              <p className="text-sm mb-6" style={{ color: "var(--color-text2)", lineHeight: 1.6 }}>
                A practical Chinese medicine guide with 10 ingredients, their body type matches, and simple daily habits.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError("")
                  }}
                  placeholder="Your email address"
                  disabled={state === "submitting"}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={{
                    background: "var(--color-card-bg)",
                    border: emailError
                      ? "1px solid #C75B3A"
                      : "1px solid var(--color-card-border)",
                    color: "var(--color-text)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = emailError
                      ? "#C75B3A"
                      : "var(--color-card-border)"
                  }}
                />

                {emailError && (
                  <p className="text-xs text-left" style={{ color: "#C75B3A" }}>
                    {emailError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full py-3 rounded-lg font-bold text-sm cursor-pointer transition-all"
                  style={{
                    background: "linear-gradient(135deg, var(--color-accent), var(--color-accent2))",
                    color: "var(--color-bg)",
                    opacity: state === "submitting" ? 0.7 : 1,
                  }}
                >
                  {state === "submitting" ? "Sending..." : "Get My Free Guide"}
                </button>
              </form>

              <p className="text-xs mt-4" style={{ color: "var(--color-text2)", opacity: 0.7 }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          )}

          {state === "success" && (
            <div className="p-8 text-center">
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(140, 45, 42, 0.15)",
                  border: "2px solid var(--color-accent)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5L10 17.5L19 7.5"
                    stroke="var(--color-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Your Guide Is Ready
              </h2>

              <p className="text-sm mb-6" style={{ color: "var(--color-text2)", lineHeight: 1.6 }}>
                Download your free 10 foods guide below.
              </p>

              <button
                onClick={handleDownloadPdf}
                className="w-full py-3 rounded-lg font-bold text-sm cursor-pointer transition-all mb-4"
                style={{
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-accent2))",
                  color: "var(--color-bg)",
                }}
              >
                Download Your Guide (PDF)
              </button>

              <div className="lotus-divider" style={{ maxWidth: "200px", margin: "16px auto" }} />

              <p className="text-sm mb-2" style={{ color: "var(--color-text2)" }}>
                Ready to find your body type?
              </p>
              <Link
                href="/quiz"
                onClick={closePopup}
                className="inline-block text-sm font-semibold cursor-pointer"
                style={{ color: "var(--color-accent)" }}
              >
                Take the free 5-minute quiz
              </Link>
            </div>
          )}

          {state === "downloading" && (
            <div className="p-8 text-center">
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(140, 45, 42, 0.15)",
                }}
              >
                <svg
                  className="animate-spin"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle cx="14" cy="14" r="11" stroke="rgba(140,45,42,0.2)" strokeWidth="3" />
                  <path
                    d="M25 14C25 8.47715 20.5228 4 15 4"
                    stroke="var(--color-accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm" style={{ color: "var(--color-text2)" }}>
                Preparing your PDF...
              </p>
            </div>
          )}

          {state === "error" && (
            <div className="p-8 text-center">
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(199, 91, 58, 0.15)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 7V13M12 17H12.01"
                    stroke="#C75B3A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Something Went Wrong
              </h2>

              <p className="text-sm mb-6" style={{ color: "var(--color-text2)" }}>
                Please try again or use a different email.
              </p>

              <button
                onClick={() => setState("form")}
                className="w-full py-3 rounded-lg font-bold text-sm cursor-pointer transition-all"
                style={{
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-accent2))",
                  color: "var(--color-bg)",
                }}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
