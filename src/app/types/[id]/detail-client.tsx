"use client"

import { use } from "react"
import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"
import { TYPE_DETAILS } from "@/lib/type-details"

const VALID_IDS = new Set<string>(Object.keys(TYPES))

const WELLNESS_TITLES: Record<string, L> = {
  "why-am-i-always-tired": { en: "Why Am I Always Tired?", "zh-TW": "為什麼我總是累？", ja: "なぜいつも疲れている？" },
  "cold-hands-and-feet": { en: "Cold Hands and Feet", "zh-TW": "手腳冰冷", ja: "手足の冷え" },
  "night-sweats-chinese-medicine": { en: "Night Sweats in Chinese Medicine", "zh-TW": "中醫看夜間盜汗", ja: "中医学で寝汗" },
  "insomnia-chinese-medicine": { en: "Insomnia in Chinese Medicine", "zh-TW": "中醫看失眠", ja: "中医学で不眠" },
  "bloating-chinese-medicine": { en: "Bloating in Chinese Medicine", "zh-TW": "中醫看腹脹", ja: "中医学で膨満感" },
  "acne-chinese-medicine": { en: "Acne in Chinese Medicine", "zh-TW": "中醫看痘痘", ja: "中医学でニキビ" },
  "anxiety-chinese-medicine": { en: "Anxiety in Chinese Medicine", "zh-TW": "中醫看焦慮", ja: "中医学で不安" },
  "chinese-medicine-foods-for-energy": { en: "Foods for Energy", "zh-TW": "補氣食物", ja: "エネルギー食材" },
  "foods-that-warm-your-body": { en: "Foods That Warm Your Body", "zh-TW": "溫暖身體的食物", ja: "体を温める食材" },
  "chinese-medicine-body-types": { en: "9 Body Types Explained", "zh-TW": "9種體質完整指南", ja: "9つの体質ガイド" },
}

type L = { en: string; "zh-TW": string; ja: string }

export default function TypeDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja
  const lang = locale.code === "zh-TW" ? "zh-TW" : locale.code === "ja" ? "ja" : "en"

  if (!VALID_IDS.has(id)) {
    return (
      <>
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-text mb-4">
            {l("Type Not Found", "找不到此體質", "体質が見つかりません")}
          </h1>
          <p className="text-text2 mb-8">
            {l(
              "This constitution type doesn't exist.",
              "此體質類型不存在。",
              "この体質タイプは存在しません。"
            )}
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-accent text-bg rounded-full font-medium hover:opacity-90 transition"
          >
            {l("Back to Home", "返回首頁", "ホームに戻る")}
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const typeId = id as ConstitutionId
  const type = TYPES[typeId]
  const detail = TYPE_DETAILS[typeId]
  const t = (text: L) => text[lang]

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${type.color}20`, color: type.color }}
          >
            {type.zh} · {type.zhPy}
          </div>
          <h1
            className="font-[family-name:var(--font-display)] text-5xl md:text-6xl mb-4"
            style={{ color: type.color }}
          >
            {type.en}
          </h1>
          <p className="text-text2 text-lg italic">
            &ldquo;{type.line}&rdquo;
          </p>
          <p className="text-text2 text-sm mt-2">
            {l(
              `${type.pct} of people share this type`,
              `約 ${type.pct} 的人屬於此體質`,
              `約 ${type.pct} の人がこの体質`
            )}
          </p>
        </div>

        {/* Essence */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
            {l("What This Means", "這代表什麼", "これが意味するもの")}
          </h2>
          <p className="text-text2 text-[1.05rem] leading-relaxed">
            {t(detail.essence)}
          </p>
        </section>

        {/* Body Story */}
        <section className="mb-12 border-l-2 pl-6" style={{ borderColor: type.color }}>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
            {l("Sound Familiar?", "聽起來像你？", "聞き覚えがある？")}
          </h2>
          <p className="text-text2 text-[1.05rem] leading-relaxed">
            {t(detail.bodyStory)}
          </p>
        </section>

        {/* Deep Dive */}
        {detail.deepDive && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
              {l("Going Deeper", "深入理解", "さらに深く")}
            </h2>
            <div className="text-text2 text-[1.05rem] leading-relaxed space-y-4">
              {detail.deepDive[lang].split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* Self-Check */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-2">
            {l("Is This You?", "這是你嗎？", "これ、あなた？")}
          </h2>
          <p className="text-text2 text-sm mb-6">
            {l(
              "Check how many resonate — most people with this type recognize 3 or more",
              "看看你有幾項共鳴 — 此體質的人通常認同3項以上",
              "いくつ当てはまるか — この体質の人は通常3つ以上共感"
            )}
          </p>
          <div className="space-y-3">
            {detail.selfCheck.map((item, i) => (
              <label
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-cream/50 cursor-pointer hover:bg-cream transition group"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 w-5 h-5 rounded accent-accent shrink-0"
                />
                <span className="text-text2 group-hover:text-text transition text-[0.95rem]">
                  {t(item)}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Foods to Eat */}
        {detail.foodsToEat && detail.foodsToEat.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
              {l("Foods That Support Your Type", "適合你的食物", "あなたのタイプに合う食材")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {detail.foodsToEat.map((food, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-cream/30"
                >
                  <span className="text-accent text-sm">✓</span>
                  <span className="text-text2 text-sm">{t(food)}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Foods to Avoid */}
        {detail.foodsToAvoid && detail.foodsToAvoid.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
              {l("Foods to Minimize", "盡量少吃的食物", "控えるべき食材")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {detail.foodsToAvoid.map((food, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-cream/30"
                >
                  <span className="text-red-400/70 text-sm">✗</span>
                  <span className="text-text2 text-sm">{t(food)}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Seasonal Tip */}
        {detail.seasonalTip && (
          <section className="mb-12 border border-border rounded-xl p-6 bg-cream/20">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Seasonal Wisdom", "季節養生", "季節の知恵")}
            </h2>
            <p className="text-text2 text-[0.95rem] leading-relaxed">
              {t(detail.seasonalTip)}
            </p>
          </section>
        )}

        {/* Daily Tip */}
        {detail.dailyTip && (
          <section className="mb-12 border border-border rounded-xl p-6 bg-cream/20">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("A Simple Daily Practice", "一個簡單的日常練習", "簡単な毎日の習慣")}
            </h2>
            <p className="text-text2 text-[0.95rem] leading-relaxed">
              {t(detail.dailyTip)}
            </p>
          </section>
        )}

        {/* FAQs */}
        {detail.faqs && detail.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-6">
              {l("Common Questions", "常見問題", "よくある質問")}
            </h2>
            <div className="space-y-4">
              {detail.faqs.map((faq, i) => (
                <details key={i} className="group border border-border rounded-xl bg-cream/20">
                  <summary className="flex items-center justify-between cursor-pointer p-4 text-text font-medium text-[0.95rem] leading-relaxed list-none">
                    <span>{t(faq.q)}</span>
                    <span className="text-accent/60 ml-3 shrink-0 transition-transform duration-200 group-open:rotate-45 text-lg">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-text2 text-sm leading-relaxed">
                    {t(faq.a)}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles */}
        {detail.relatedWellness && detail.relatedWellness.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              {l("Related Articles", "相關文章", "関連記事")}
            </h2>
            <div className="space-y-3">
              {detail.relatedWellness.map((slug) => {
                const title = WELLNESS_TITLES[slug]
                if (!title) return null
                return (
                  <Link
                    key={slug}
                    href={`/wellness/${slug}`}
                    className="group block border border-border rounded-xl p-4 bg-cream/5 hover:bg-cream/10 hover:border-accent/30 transition-all duration-300 no-underline"
                  >
                    <span className="text-text group-hover:text-accent transition-colors text-sm font-medium">
                      {t(title)} →
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center py-12 px-6 rounded-2xl border border-border bg-cream/30">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-3">
            {l(
              "Want to know for sure?",
              "想確認你的體質？",
              "自分の体質を確かめたい？"
            )}
          </h2>
          <p className="text-text2 mb-6">
            {l(
              "Take the 5-minute quiz and get your personalized constitution report.",
              "花5分鐘做測驗，取得你的個人體質報告。",
              "5分のクイズで、あなたの体質レポートを入手。"
            )}
          </p>
          <Link
            href="/quiz"
            className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg"
            style={{ backgroundColor: type.color }}
          >
            {l("Take the Quiz →", "開始測驗 →", "クイズを始める →")}
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-center text-text2/60 text-xs mt-10">
          {l(
            "Based on traditional Chinese dietary philosophy. For informational purposes only — not medical advice.",
            "基於東方傳統飲食哲學。僅供資訊參考 — 非醫療建議。",
            "東洋の伝統的な食哲学に基づく。情報提供のみ — 医療アドバイスではありません。"
          )}
        </p>
      </main>
      <Footer />
    </>
  )
}
