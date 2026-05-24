"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function NotFound() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-7xl mb-4 gold-gradient-text">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-6 text-text">
          {l("Page Not Found", "找不到頁面", "ページが見つかりません")}
        </h2>
        <p className="text-text2 mb-10">
          {l(
            "The page you're looking for doesn't exist or has been moved.",
            "你尋找的頁面不存在或已移動。",
            "お探しのページは存在しないか、移動されました。"
          )}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-[family-name:var(--font-body)] text-sm font-semibold no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg"
        >
          {l("Go Home", "回首頁", "ホームに戻る")}
        </Link>
      </main>
      <Footer />
    </>
  )
}
