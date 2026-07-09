"use client"

import { use } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"
import { TYPE_DETAILS } from "@/lib/type-details"
import { PATTERNS } from "@/lib/pattern-data"
import { SYMPTOMS } from "@/lib/symptoms-data"

const VALID_IDS = new Set<string>(Object.keys(TYPES))

const WELLNESS_TITLES: Record<string, { en: string; "zh-TW": string; ja: string }> = {
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

  if (!VALID_IDS.has(id)) {
    return (
      <>
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-text mb-4">
            Type Not Found
          </h1>
          <p className="text-text2 mb-8">
            This constitution type doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-accent text-bg rounded-full font-medium hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const typeId = id as ConstitutionId
  const type = TYPES[typeId]
  const detail = TYPE_DETAILS[typeId]
  const t = (text: L) => text.en

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
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
            {type.pct} of people share this type
          </p>
        </div>

        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
            What This Means
          </h2>
          <p className="text-text2 text-[1.05rem] leading-relaxed">
            {t(detail.essence)}
          </p>
        </section>

        <section className="mb-12 border-l-2 pl-6" style={{ borderColor: type.color }}>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
            Sound Familiar?
          </h2>
          <p className="text-text2 text-[1.05rem] leading-relaxed">
            {t(detail.bodyStory)}
          </p>
        </section>

        {detail.deepDive && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
              Going Deeper
            </h2>
            <div className="text-text2 text-[1.05rem] leading-relaxed space-y-4">
              {detail.deepDive.en.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-2">
            Is This You?
          </h2>
          <p className="text-text2 text-sm mb-6">
            Check how many resonate — most people with this type recognize 3 or more
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

        {detail.foodsToEat && detail.foodsToEat.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
              Foods That Support Your Type
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

        {detail.foodsToAvoid && detail.foodsToAvoid.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
              Foods to Minimize
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

        {detail.seasonalTip && (
          <section className="mb-12 border border-border rounded-xl p-6 bg-cream/20">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Seasonal Wisdom
            </h2>
            <p className="text-text2 text-[0.95rem] leading-relaxed">
              {t(detail.seasonalTip)}
            </p>
          </section>
        )}

        {detail.dailyTip && (
          <section className="mb-12 border border-border rounded-xl p-6 bg-cream/20">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              A Simple Daily Practice
            </h2>
            <p className="text-text2 text-[0.95rem] leading-relaxed">
              {t(detail.dailyTip)}
            </p>
          </section>
        )}

        {detail.faqs && detail.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-6">
              Common Questions
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

      {detail.relatedPatterns && detail.relatedPatterns.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Related Patterns
            </h2>
            <div className="space-y-3">
              {detail.relatedPatterns.map((slug) => {
                const pattern = PATTERNS[slug]
                if (!pattern) return null
                return (
                  <Link
                    key={slug}
                    href={`/patterns/${slug}`}
                    className="group block border border-border rounded-xl p-4 bg-cream/5 hover:bg-cream/10 hover:border-accent/30 transition-all duration-300 no-underline"
                  >
                    <span className="text-text group-hover:text-accent transition-colors text-sm font-medium">
                      {pattern.title.en} →
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {detail.relatedSymptoms && detail.relatedSymptoms.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Related Symptoms
            </h2>
            <div className="space-y-3">
              {detail.relatedSymptoms.map((slug) => {
                const symptom = SYMPTOMS[slug]
                if (!symptom) return null
                return (
                  <Link
                    key={slug}
                    href={`/symptoms/${slug}`}
                    className="group block border border-border rounded-xl p-4 bg-cream/5 hover:bg-cream/10 hover:border-accent/30 transition-all duration-300 no-underline"
                  >
                    <span className="text-text group-hover:text-accent transition-colors text-sm font-medium">
                      {symptom.title.en} →
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {detail.relatedWellness && detail.relatedWellness.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Related Articles
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
                      {title.en} →
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        <section className="text-center py-12 px-6 rounded-2xl border border-border bg-cream/30">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-3">
            Want to know for sure?
          </h2>
          <p className="text-text2 mb-6">
            Take the 5-minute quiz and get your personalized constitution report.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-10 py-3.5 rounded font-[family-name:var(--font-body)] text-lg font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_40px_rgba(140,45,42,0.25)] hover:-translate-y-0.5"
          >
            Take the Quiz →
          </Link>
        </section>

        <p className="text-center text-text2/60 text-xs mt-10">
          Based on traditional Chinese dietary philosophy. For informational purposes only — not medical advice.
        </p>
      </main>
      <Footer />
    </>
  )
}
