"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

function SuccessContent() {
  const params = useSearchParams()
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const plan = params.get("plan") ?? "basic"
  const type = params.get("type") ?? "balanced"
  const sex = params.get("sex") ?? "female"
  const isPro = plan === "pro"

  const reportUrl = `/report-v2?type=${type}&sex=${sex}${isPro ? "&plan=pro" : ""}`
  const priceLabel = isPro ? l("$12.99", "$12.99", "$12.99") : l("$4.99", "$4.99", "$4.99")

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-md mx-auto px-6 py-20 text-center">
        <div className="text-5xl mb-4">&#10003;</div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3 gold-gradient-text">
          {l("Payment Successful!", "付款成功！", "お支払い完了！")}
        </h1>
        <p className="text-text2 mb-4 leading-relaxed">
          {isPro
            ? l(
                "Your Full Transformation Kit is ready. Let's start your wellness journey.",
                "你的完整分析報告已準備就緒。讓我們開始你的養生之旅。",
                "フルキットの準備ができました。ウェルネスの旅を始めましょう。"
              )
            : l(
                "Your Body Profile Report is ready. Let's explore your constitution.",
                "你的體質報告已準備就緒。讓我們探索你的體質。",
                "ボディプロファイルレポートの準備ができました。体質を探索しましょう。"
              )}
        </p>
        <div className="text-sm text-text2 mb-6">
          {l(
            `You paid ${priceLabel} USD (one-time). A receipt has been sent to your email.`,
            `你已支付 ${priceLabel} 美元（一次性）。收据已发送至你的邮箱。`,
            `${priceLabel} USD（一回限り）をお支払いいただきました。 receipt がメールに送信されました。`
          )}
        </div>
        <Link
          href={reportUrl}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-[family-name:var(--font-body)] text-base font-bold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_40px_rgba(201,163,85,0.3)] hover:-translate-y-0.5"
        >
          {l("View My Report →", "查看報告 →", "レポートを見る →")}
        </Link>
        <p className="text-xs text-text2 mt-8">
          {l("Questions? 840414923@qq.com · 30-day money-back guarantee", "有疑问？840414923@qq.com · 30天退款保证", "質問は 840414923@qq.com · 30日間返金保証")}
        </p>
      </main>
      <Footer />
    </>
  )
}

export default function SuccessPage() {
  const { locale } = useLocale()
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-text2">
          {locale.code === "en" ? "Loading..." : locale.code === "zh-TW" ? "載入中..." : "読み込み中..."}
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}