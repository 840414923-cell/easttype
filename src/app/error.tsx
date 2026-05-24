"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-4xl mb-4 text-accent">
        {l("Something went wrong", "出了點問題", "エラーが発生しました")}
      </h1>
      <p className="text-text2 mb-10">
        {l(
          "An unexpected error occurred. Please try again.",
          "發生了意外錯誤。請重試。",
          "予期しないエラーが発生しました。もう一度お試しください。"
        )}
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => unstable_retry()}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg"
        >
          {l("Try Again", "重試", "再試行")}
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold no-underline border border-accent text-accent transition-all duration-300 hover:bg-[rgba(201,169,110,0.1)]"
        >
          {l("Go Home", "回首頁", "ホームに戻る")}
        </Link>
      </div>
    </div>
  )
}
