"use client"

import Link from "next/link"
import Image from "next/image"
import { TYPES } from "@/lib/constitution-data"
import { TYPE_VIRAL } from "@/lib/type-viral"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const LL = {
  badge: "70 Symptom Guides · 9 Patterns · 9 Body Types",
  title1: "Why Are You Always Tired, Bloated, Anxious, or Struggling to Sleep?",
  subtitle: "Discover the body pattern behind recurring symptoms and get personalized wellness guidance.",
  cta: "Take the Free 5-Min Quiz",
  ctaSub: "Free · No Sign-up Required",
  ctaSecondary: "Quiz reviewed by licensed TCM hospital doctors",
  discoverTitle: "What You'll Discover",
  discover1: "Which body pattern drives your recurring symptoms",
  discover2: "Why certain symptoms keep coming back",
  discover3: "Foods that may suit your constitution",
  discover4: "Personalized wellness suggestions",
  discover5: "Practical lifestyle recommendations",
  symptomsTitle: "Common Symptoms People Explore",
  connectTitle: "How Eastern Wellness Connects the Dots",
  connectBody: "Recurring symptoms rarely happen in isolation. Eastern wellness looks for deeper patterns behind fatigue, poor sleep, digestive issues, and emotional imbalance. Those patterns often point to a broader body type tendency.",
  archetypeTitle: "Which Body Type Matches You?",
  archetypeLine1: "Traditional Eastern wellness identifies 9 constitutional patterns.",
  archetypeLine2: "Each type has unique tendencies in energy, digestion, sleep, emotional balance, and overall wellbeing.",
  seoTitle: "What Are Eastern Body Types?",
  seoP1: "Eastern wellness identifies 9 body types — each with unique patterns related to energy, digestion, sleep, emotional tendencies and overall wellbeing.",
  seoP2: "This assessment helps identify which pattern best reflects your current constitution and provides personalized wellness guidance.",
  faqTitle: "Frequently Asked Questions",
  faq1Q: "Is this a medical diagnosis?",
  faq1A: "No. This assessment is designed for educational and wellness purposes only.",
  faq2Q: "How long does it take?",
  faq2A: "Approximately 5 minutes.",
  faq3Q: "Do I need to create an account?",
  faq3A: "No.",
  faq4Q: "Can I retake the assessment?",
  faq4A: "Yes, anytime.",
  readySubtitleBefore: "27 questions. ~5 min. A food map your body has been waiting 3,000 years for.",
}

const COMMON_SYMPTOMS = [
  { slug: "why-am-i-always-tired", label: "Always Tired" },
  { slug: "why-do-i-have-brain-fog", label: "Brain Fog" },
  { slug: "why-do-i-feel-anxious", label: "Anxiety" },
  { slug: "why-do-i-have-night-sweats", label: "Night Sweats" },
  { slug: "why-do-i-have-acid-reflux", label: "Acid Reflux" },
  { slug: "why-do-i-keep-gaining-weight", label: "Weight Gain" },
  { slug: "why-cant-i-fall-asleep", label: "Poor Sleep" },
  { slug: "why-am-i-always-constipated", label: "Constipation" },
]

const PATTERN_CARDS = [
  { slug: "low-vitality", name: "Low Vitality", desc: "Chronic fatigue, low energy, and afternoon crashes that sleep doesn't fix." },
  { slug: "heavy-and-sluggish", name: "Heavy & Sluggish", desc: "Bloating, heaviness, and brain fog from moisture your body can't process." },
  { slug: "internal-heat", name: "Internal Heat", desc: "Night sweats, insomnia, and feeling hot when your cooling system is undercharged." },
  { slug: "stuck-energy", name: "Stuck Energy", desc: "Anxiety, mood swings, and chest tightness from energy that can't flow freely." },
]

export default function HomeClient() {
  const typeList = Object.values(TYPES)

  return (
    <>
      <Nav />
      <main className="flex-1">

        <section className="relative max-w-4xl mx-auto px-6 pt-12 pb-6 text-center hero-radial dunhuang-border-top">

          <div className="inline-flex items-center gap-2 bg-[rgba(201,163,85,0.06)] border border-[rgba(201,163,85,0.15)] rounded-full px-5 py-2 text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-6">
            <span className="text-accent text-[8px]">◇</span>
            {LL.badge}
            <span className="text-accent text-[8px]">◇</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl mb-4 leading-[1.15] tracking-wide text-text max-w-3xl mx-auto">
            {LL.title1}
          </h1>

          <p className="text-base sm:text-lg text-text2 max-w-xl mx-auto mb-8 leading-relaxed tracking-wide">
            {LL.subtitle}
          </p>

          <div className="flex flex-col items-center gap-2 mb-6">
            <Link
              href="/quiz"
              className="group relative inline-flex items-center justify-center px-12 py-5 rounded-2xl font-[family-name:var(--font-body)] text-lg font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(201,163,85,0.4)] shadow-[0_0_30px_rgba(201,163,85,0.15)] border-2 border-[rgba(255,255,255,0.15)]"
              style={{ background: "linear-gradient(135deg, #C9A355, #E0C878, #C9A355)", color: "#1A1410" }}
            >
              {LL.cta}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
            <span className="text-sm text-text2 tracking-wide">
              {LL.ctaSub}
            </span>
            <span className="text-xs text-text2/70 tracking-wide">
              {LL.ctaSecondary}
            </span>
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-accent mb-3">
              {LL.discoverTitle}
            </h2>
            <ul className="space-y-2">
              {[
                LL.discover1,
                LL.discover2,
                LL.discover3,
                LL.discover4,
                LL.discover5,
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text2">
                  <span className="text-accent text-xs">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </section>

        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        <section className="max-w-4xl mx-auto px-6 py-8 sm:py-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide text-center mb-6">
            {LL.symptomsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {COMMON_SYMPTOMS.map((s) => (
              <Link
                key={s.slug}
                href={`/symptoms/${s.slug}`}
                className="block border border-[rgba(201,163,85,0.12)] rounded-xl px-4 py-3 bg-card-bg hover:border-[rgba(201,163,85,0.35)] transition-all duration-300 no-underline"
              >
                <span className="font-[family-name:var(--font-display)] text-sm text-text tracking-wide">{s.label}</span>
                <span className="block text-accent text-xs mt-1">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        <section className="max-w-3xl mx-auto px-6 py-8 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide mb-4">
              {LL.connectTitle}
            </h2>
            <p className="text-sm sm:text-base text-text2 leading-relaxed max-w-xl mx-auto">
              {LL.connectBody}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="text-center border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(201,163,85,0.25)] bg-[rgba(201,163,85,0.08)] text-accent font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                1
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2 tracking-wide">Symptoms</h3>
              <p className="text-xs text-text2 leading-relaxed">Fatigue, brain fog, bloating, anxiety, poor sleep</p>
            </div>
            <div className="text-center border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(201,163,85,0.25)] bg-[rgba(201,163,85,0.08)] text-accent font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                2
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2 tracking-wide">Patterns</h3>
              <p className="text-xs text-text2 leading-relaxed">Low Vitality, Internal Heat, Heavy &amp; Sluggish, Stuck Energy</p>
            </div>
            <div className="text-center border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(201,163,85,0.25)] bg-[rgba(201,163,85,0.08)] text-accent font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                3
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2 tracking-wide">Body Types</h3>
              <p className="text-xs text-text2 leading-relaxed">Qi Deficient, Yin Deficient, Phlegm Damp, and 6 more</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PATTERN_CARDS.map((p) => (
              <Link
                key={p.slug}
                href={`/patterns/${p.slug}`}
                className="block border border-[rgba(201,163,85,0.12)] rounded-xl px-4 py-3 bg-card-bg hover:border-[rgba(201,163,85,0.35)] transition-all duration-300 no-underline"
              >
                <span className="font-[family-name:var(--font-display)] text-sm text-text tracking-wide block mb-1">{p.name}</span>
                <span className="text-xs text-text2 leading-relaxed block">{p.desc}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/patterns" className="text-sm text-accent no-underline hover:underline tracking-wide">
              Explore All Patterns →
            </Link>
          </div>
        </section>

        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-6 sm:pb-10">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl mb-2 tracking-wide">
              {LL.archetypeTitle}
            </h2>
            <p className="text-text2 text-sm sm:text-base tracking-wide max-w-lg mx-auto">
              {LL.archetypeLine1}
              <br />
              <span className="text-text2/80">{LL.archetypeLine2}</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
            {typeList.map((t) => {
              const viral = TYPE_VIRAL[t.id]
              const imgSrc = `/types/${t.id}.webp`
              return (
                <Link
                  key={t.id}
                  href={`/types/${t.id}`}
                  className="group block"
                >
                  <div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(201,163,85,0.12)] bg-card-bg transition-all duration-500 group-hover:border-[rgba(201,163,85,0.4)] group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                    style={{
                      background: `linear-gradient(170deg, ${t.color}10 0%, var(--color-type-card-base) 40%, var(--color-type-card-base) 100%)`,
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={t.en}
                      width={400}
                      height={600}
                      className="w-full h-auto block opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      sizes="(max-width: 640px) 33vw, 200px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-type-card-base/90 via-type-card-base/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:hidden">
                      <span
                        className="font-[family-name:var(--font-display)] text-xs font-bold block mb-0.5 truncate"
                        style={{ color: t.color }}
                      >
                        {t.en}
                      </span>
                      <span
                        className="font-[family-name:var(--font-display)] text-xs font-bold"
                        style={{ color: t.color }}
                      >
                        {t.pct}
                      </span>
                      <span className="text-[7px] text-text2/60 ml-0.5">
                        of people
                      </span>
                    </div>

                    <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-4">
                      <div className="mb-1">
                        <span
                          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide"
                          style={{ color: t.color }}
                        >
                          {t.en}
                        </span>
                      </div>
                      <div className="text-[11px] text-text2 mb-1.5">
                        {t.zh} · {t.zhPy}
                      </div>
                      <div className="text-xs text-text/90 font-medium leading-snug mb-2 line-clamp-2">
                        {viral?.cardHeadline ?? ""}
                      </div>
                      <div>
                        <span
                          className="font-[family-name:var(--font-display)] text-lg font-bold"
                          style={{ color: t.color }}
                        >
                          {t.pct}
                        </span>
                        <span className="text-[10px] text-text2 ml-1">
                          of people
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        <section className="max-w-3xl mx-auto px-6 py-6 sm:py-8">
          <div className="text-center mb-5">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide">
              What&apos;s Inside Each Report
            </h2>
            <p className="text-text2 text-sm mt-1">
              Free quiz, then unlock the depth you want
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg flex flex-col">
              <div className="text-xs text-text2 font-semibold mb-2 uppercase tracking-wide">Quiz Result</div>
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-text mb-0.5">Free</div>
              <div className="text-[10px] text-text2 mb-4">No credit card needed</div>
              <ul className="text-[11px] text-text2 space-y-1.5 flex-1">
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Your primary + secondary type</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Shareable type card</li>
                <li className="flex items-start gap-1.5"><span className="text-text2/30 text-[9px] mt-0.5">&#10005;</span><span className="text-text2/50">No food map</span></li>
                <li className="flex items-start gap-1.5"><span className="text-text2/30 text-[9px] mt-0.5">&#10005;</span><span className="text-text2/50">No recipe plan</span></li>
              </ul>
            </div>

            <div className="border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg flex flex-col">
              <div className="text-xs text-text2 font-semibold mb-2 uppercase tracking-wide">Body Profile Report</div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-text">$4.99</span>
                <span className="text-xs text-text2">USD</span>
              </div>
              <div className="text-[10px] text-text2 mb-4">One-time payment</div>
              <ul className="text-[11px] text-text2 space-y-1.5 flex-1">
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Deep type explanation</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Personal Food Map (25+ foods)</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Seasonal guide + daily rhythm</li>
                <li className="flex items-start gap-1.5"><span className="text-text2/30 text-[9px] mt-0.5">&#10005;</span><span className="text-text2/50">No 28-day recipe plan</span></li>
              </ul>
            </div>

            <div className="border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg flex flex-col">
              <div className="text-xs text-text2 font-semibold mb-2 uppercase tracking-wide">Full Transformation Kit</div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-text">$12.99</span>
                <span className="text-xs text-text2">USD</span>
              </div>
              <div className="text-[10px] text-text2 mb-4">One-time payment</div>
              <ul className="text-[11px] text-text2 space-y-1.5 flex-1">
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Everything in Body Profile</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>28-day wellness recipe plan</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Weekly grocery lists</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>Seasonal adjustments</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-[10px] text-text2 mt-3">
            30-day money-back guarantee · Questions? 840414923@qq.com
          </div>
        </section>

        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        <section className="max-w-3xl mx-auto px-6 py-8 sm:py-12 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl mb-3 tracking-wide">
            Ready to Meet Yourself?
          </h2>
          <p className="text-text2 text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto tracking-wide">
            {LL.readySubtitleBefore}
          </p>
          <Link
            href="/quiz"
            className="group relative inline-flex items-center justify-center px-12 py-5 rounded-2xl font-[family-name:var(--font-body)] text-lg font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(201,163,85,0.4)] shadow-[0_0_30px_rgba(201,163,85,0.15)] border-2 border-[rgba(255,255,255,0.15)]"
            style={{ background: "linear-gradient(135deg, #C9A355, #E0C878, #C9A355)", color: "#1A1410" }}
          >
            Quick Quiz · ~5 min
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
          </Link>
          <span className="text-xs text-text2/70 mt-2 block">
            Free quiz · Detailed reports from $4.99 USD
          </span>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-8 sm:py-12">
          <div className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl tracking-wide mb-4 text-center">
              {LL.seoTitle}
            </h2>
            <div className="space-y-3 text-sm text-text2 leading-relaxed text-center max-w-xl mx-auto">
              <p>{LL.seoP1}</p>
              <p>{LL.seoP2}</p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl tracking-wide mb-6 text-center">
              {LL.faqTitle}
            </h2>
            <div className="space-y-3">
              {[
                { q: LL.faq1Q, a: LL.faq1A },
                { q: LL.faq2Q, a: LL.faq2A },
                { q: LL.faq3Q, a: LL.faq3A },
                { q: LL.faq4Q, a: LL.faq4A },
              ].map((faq) => (
                <details key={faq.q} className="group border border-[rgba(201,163,85,0.12)] rounded-xl bg-card-bg">
                  <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer text-sm text-text font-medium list-none">
                    {faq.q}
                    <span className="text-accent/50 text-xs transition-transform duration-200 group-open:rotate-180">▾</span>
                  </summary>
                  <div className="px-5 pb-3.5 text-sm text-text2 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
