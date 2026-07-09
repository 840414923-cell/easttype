"use client"

import Link from "next/link"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import Reveal from "@/components/reveal"

const SYMPTOM_QUESTIONS = [
  "Why are you always tired?",
  "Why do you wake up at 3 AM?",
  "Why are you always cold?",
  "Why do you feel bloated?",
  "Why do you crave sweets?",
  "Why do you feel anxious?",
]

const STEPS = [
  { num: "01", char: "问", pinyin: "Wèn", title: "Ask", desc: "27 questions based on 3,000 years of TCM inquiry diagnosis." },
  { num: "02", char: "辨", pinyin: "Biàn", title: "Identify", desc: "9 body types mapped to your unique constitution." },
  { num: "03", char: "调", pinyin: "Tiáo", title: "Adjust", desc: "Personalized food, herbs, and lifestyle guidance." },
]

const BODY_TYPES = [
  { name: "Qi Deficient", nick: "The Gentle Breeze" },
  { name: "Yang Deficient", nick: "The Quiet Flame" },
  { name: "Yin Deficient", nick: "The Still Pool" },
  { name: "Qi Stagnant", nick: "The Held Breath" },
  { name: "Phlegm Damp", nick: "The Mossy Stone" },
  { name: "Damp Heat", nick: "The Summer Storm" },
  { name: "Blood Stasis", nick: "The Frozen River" },
  { name: "Sensitive", nick: "The Sensitive Bloom" },
  { name: "Balanced", nick: "The Clear Stream" },
]

const LIBRARY = [
  { num: "70", label: "Symptom Guides", items: ["Always Tired", "Wake at 3 AM", "Brain Fog", "Night Sweats", "Cold Hands", "Anxious", "Bloated", "Crave Sweets", "Dark Circles", "Joint Pain"], link: "/symptoms" },
  { num: "116", label: "Herb Profiles", items: ["Ginseng", "Goji", "Astragalus", "Dong Quai", "Rehmannia", "Chrysanthemum", "Licorice", "Reishi", "Turmeric", "Jasmine"], link: "/herbs" },
  { num: "53", label: "Wellness Articles", items: ["Spleen Qi Deficiency", "Kidney Yin Deficiency", "Liver Qi Stagnation", "Yin and Yang", "Five Elements", "What is Qi", "Meridians", "TCM Diet", "Body Clock", "Face Mapping"], link: "/wellness" },
]

export default function HomeClient() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ═══ Hero ═══ */}
        <section className="bg-[var(--color-bg2)] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-10 items-center">
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="lotus-divider mb-6 justify-center lg:justify-start">
                  <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">EastType</span>
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-hero text-text mb-5">
                  What&apos;s Your Chinese Medicine Body Type?
                </h1>
                <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 mb-3 leading-relaxed">
                  {SYMPTOM_QUESTIONS.join("  \u00b7  ")}
                </p>
                <p className="text-text2/80 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Your body type has the answer. Take a free 5-minute quiz based on 3,000 years of Eastern body wisdom.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link
                    href="/quiz"
                    className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
                  >
                    Take the Free Quiz
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                  </Link>
                  <p className="text-xs text-text2/60">5 min &middot; No sign-up</p>
                </div>
              </div>

              {/* Hero image */}
              <div className="lg:col-span-3 relative aspect-[3/2] rounded-2xl overflow-hidden border border-[rgba(140,45,42,0.12)] shadow-lg">
                <Image
                  src="/images/home/hero-wellness.jpg"
                  alt="Woman meditating on a mountain at sunrise, embodying TCM wellness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Transition: 问辨调 stepper ═══ */}
        <section className="bg-[var(--color-bg2)] py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">How It Works</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 tracking-tight">
              The ancient art of asking your body
            </h2>
            <p className="text-text2 text-sm max-w-md mx-auto leading-relaxed mb-12">
              Chinese medicine uses four diagnostic methods. We modernized the most important one.
            </p>

            <div className="relative max-w-2xl mx-auto">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-accent/20" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1: Ask */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-card-bg)] border-2 border-accent/30 text-accent mb-4 relative z-10">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-accent/50 uppercase tracking-wider block mb-1">Step 01</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-1">Ask</h3>
                  <p className="text-text2 text-xs leading-relaxed max-w-[180px] mx-auto">27 questions based on 3,000 years of TCM inquiry diagnosis.</p>
                </div>

                {/* Step 2: Identify */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-card-bg)] border-2 border-accent/30 text-accent mb-4 relative z-10">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-accent/50 uppercase tracking-wider block mb-1">Step 02</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-1">Identify</h3>
                  <p className="text-text2 text-xs leading-relaxed max-w-[180px] mx-auto">9 body types mapped to your unique constitution.</p>
                </div>

                {/* Step 3: Adjust */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-card-bg)] border-2 border-accent/30 text-accent mb-4 relative z-10">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12 13" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-accent/50 uppercase tracking-wider block mb-1">Step 03</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-1">Adjust</h3>
                  <p className="text-text2 text-xs leading-relaxed max-w-[180px] mx-auto">Personalized food, herbs, and lifestyle guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 辨: 9 Body Types ═══ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">辨 &middot; Identify</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                9 body types, <span className="text-accent">1 is yours</span>
              </h2>
              <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Each type has distinct patterns in energy, temperature, digestion, and emotions. Which one sounds like you?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center mb-12">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden card-elevated">
                <Image
                  src="/images/home/body-types.png"
                  alt="Nine Chinese medicine body types"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-1 gap-3">
                {BODY_TYPES.map((bt, i) => (
                  <Link
                    key={i}
                    href={`/types/${["qi_deficient","yang_deficient","yin_deficient","qi_stagnant","phlegm_damp","damp_heat","blood_stasis","special_diathesis","balanced"][i]}`}
                    className="flex items-center gap-3 py-2.5 border-b border-border/50 hover:border-accent/40 transition-colors no-underline group"
                  >
                    <span className="text-sm font-bold text-text w-32 sm:w-40">{bt.name}</span>
                    <span className="text-xs text-text2 group-hover:text-accent transition-colors">{bt.nick}</span>
                    <span className="ml-auto text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">&#8594;</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/quiz"
                className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
              >
                Find Your Type
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ 调: Complete Wellness Library ═══ */}
        <section className="bg-[var(--color-bg2)] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">调 &middot; Adjust</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                A complete wellness library
              </h2>
              <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                249 guides backed by 3,000 years of Chinese medicine wisdom, organized for your body type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LIBRARY.map((cat, i) => (
                <Reveal key={cat.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="bg-[var(--color-card-bg)] rounded-2xl border border-border/50 overflow-hidden h-full">
                    <div className="p-6 border-b border-border/30">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-accent">{cat.num}</span>
                        <span className="text-sm text-text2">{cat.label}</span>
                      </div>
                    </div>
                    <div className="p-6 pt-4">
                      <ul className="space-y-2">
                        {cat.items.map((item, j) => (
                          <li key={j}>
                            <Link
                              href={cat.link}
                              className="text-sm text-text2 hover:text-accent transition-colors no-underline"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={cat.link}
                        className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline mt-4 no-underline"
                      >
                        Browse all {cat.num}
                        <span>&#8594;</span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Final CTA ═══ */}
        <section
          className="py-20 sm:py-28"
          style={{ background: "linear-gradient(135deg, #8C2D2A, #A63A3A)" }}
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-white mb-4 tracking-tight">
              Your body has been talking.
              <br />
              Are you ready to listen?
            </h2>
            <p className="text-white/80 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Take the free 5-minute quiz. Discover your Chinese medicine body type. Get personalized food therapy, daily rhythm, and seasonal guidance.
            </p>
            <Link
              href="/quiz"
              className="group inline-flex items-center justify-center px-10 py-4 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl bg-white text-[#A63A3A]"
            >
              Take the Free Quiz
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
            <p className="text-white/60 text-xs mt-3">5 min &middot; No sign-up &middot; Free results</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
