"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

export default function SymptomCta() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <section className="mt-12 mb-4 border border-[rgba(201,163,85,0.2)] rounded-2xl p-8 text-center bg-[rgba(201,163,85,0.04)]">
      <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text mb-3 tracking-wide">
        {l("Discover Your Eastern Type", "發現你的東方體質", "あなたの東洋タイプを発見")}
      </h2>
      <p className="text-sm text-text2 leading-relaxed max-w-md mx-auto mb-6">
        {l(
          "Take our free 5-minute assessment to explore which body type best matches your current wellness patterns.",
          "免費5分鐘評估，探索哪種體質最符合你目前的健康狀態。",
          "無料の5分評価で、あなたの現在のウェルネスパターンに最も合う体質を探しましょう。"
        )}
      </p>
      <Link
        href="/quiz"
        className="group relative inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-base font-semibold cursor-pointer no-underline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,163,85,0.2)] bg-gradient-to-r from-accent to-accent2 text-bg"
      >
        {l("Take the Assessment", "開始測驗", "診断を受ける")}
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
      </Link>
    </section>
  )
}
