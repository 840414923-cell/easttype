"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

function SuccessContent() {
  const params = useSearchParams()

  const plan = params.get("plan") ?? "basic"
  const type = params.get("type") ?? "balanced"
  const sex = params.get("sex") ?? "female"
  const isPro = plan === "pro"

  const reportUrl = `/report-v2?type=${type}&sex=${sex}${isPro ? "&plan=pro" : ""}`
  const priceLabel = isPro ? "$12.99" : "$4.99"

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-md mx-auto px-6 py-20 text-center">
        <div className="text-5xl mb-4">&#10003;</div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3 gold-gradient-text">
          Payment Successful!
        </h1>
        <p className="text-text2 mb-4 leading-relaxed">
          {isPro
            ? "Your Full Transformation Kit is ready. Let's start your wellness journey."
            : "Your Body Profile Report is ready. Let's explore your constitution."}
        </p>
        <div className="text-sm text-text2 mb-6">
          You paid {priceLabel} USD (one-time). A receipt has been sent to your email.
        </div>
        <Link
          href={reportUrl}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-[family-name:var(--font-body)] text-base font-bold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_40px_rgba(201,163,85,0.3)] hover:-translate-y-0.5"
        >
          View My Report →
        </Link>
        <p className="text-xs text-text2 mt-8">
          Questions? 840414923@qq.com · 30-day money-back guarantee
        </p>
      </main>
      <Footer />
    </>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-text2">
          Loading...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
