"use client"

import { useState } from "react"
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

const SAMPLE_QUESTIONS = [
  "Do you feel tired even after a full night of sleep?",
  "Are your hands and feet often cold, even in warm weather?",
  "Do you tend to worry or overthink things?",
]

const BODY_TYPES = [
  { name: "Qi Deficient", slug: "qi_deficient", desc: "Like a phone that never charges past half", char: "气", pct: "8.3%" },
  { name: "Yang Deficient", slug: "yang_deficient", desc: "An inner heater that never turns on", char: "阳", pct: "7.5%" },
  { name: "Yin Deficient", slug: "yin_deficient", desc: "An engine running hot without coolant", char: "阴", pct: "8.2%" },
  { name: "Qi Stagnant", slug: "qi_stagnant", desc: "A traffic jam where energy should flow", char: "郁", pct: "8.7%" },
  { name: "Phlegm Damp", slug: "phlegm_damp", desc: "Walking through deep mud, everything heavy", char: "痰", pct: "6.3%" },
  { name: "Damp Heat", slug: "damp_heat", desc: "A humid summer day trapped inside", char: "湿", pct: "9.1%" },
  { name: "Blood Stasis", slug: "blood_stasis", desc: "A stream frozen still in places", char: "瘀", pct: "7.3%" },
  { name: "Sensitive", slug: "sensitive", desc: "An alarm system set a touch too high", char: "特", pct: "4.2%" },
  { name: "Balanced", slug: "balanced", desc: "A well-tuned instrument in perfect harmony", char: "平", pct: "32.8%" },
]

const TYPE_COLORS: Record<string, string> = {
  qi_deficient: "#B45309",
  yang_deficient: "#C2410C",
  yin_deficient: "#0369A1",
  qi_stagnant: "#6D28D9",
  phlegm_damp: "#047857",
  damp_heat: "#B91C1C",
  blood_stasis: "#BE123C",
  sensitive: "#4338CA",
  balanced: "#15803D",
}

const QUIZ_DIMENSIONS = ["Energy", "Temperature", "Digestion", "Sleep", "Emotions"]

const TESTIMONIALS = [
  { quote: "I always knew I ran cold, but I never understood why until I took the quiz. The food suggestions for my body type genuinely changed how I eat.", name: "Sarah M.", role: "Qi Deficient type", initial: "S" },
  { quote: "As someone who has tried every wellness trend, this was the first time something felt personalized to me rather than one-size-fits-all.", name: "James L.", role: "Yin Deficient type", initial: "J" },
  { quote: "The herb profiles are incredibly detailed. I showed my results to my acupuncturist and she confirmed everything matched.", name: "Emily R.", role: "Blood Stasis type", initial: "E" },
  { quote: "I finally understand why I feel heavy and sluggish after meals. Knowing my body type gave me a clear direction.", name: "Michael T.", role: "Phlegm Damp type", initial: "M" },
  { quote: "The quiz took 5 minutes and described me better than any doctor ever has. The lifestyle tips are practical and easy to follow.", name: "Anna K.", role: "Qi Stagnant type", initial: "A" },
  { quote: "I was skeptical about Chinese medicine, but the body type framework is so logical. It connected dots I never could.", name: "David W.", role: "Yang Deficient type", initial: "D" },
  { quote: "The seasonal eating guide for my type was a game changer. I no longer fight my body every winter.", name: "Lisa H.", role: "Damp Heat type", initial: "L" },
  { quote: "My acupuncturist was impressed by how accurate the assessment was. She uses the same framework in her practice.", name: "Robert C.", role: "Balanced type", initial: "R" },
]

const LIBRARY = [
  { num: "70", label: "Symptom Guides", items: ["Always Tired", "Wake at 3 AM", "Brain Fog", "Night Sweats", "Cold Hands", "Anxious", "Bloated", "Crave Sweets", "Dark Circles", "Joint Pain"], link: "/symptoms" },
  { num: "132", label: "Herb Profiles", items: ["Ginseng", "Goji", "Astragalus", "Dong Quai", "Rehmannia", "Chrysanthemum", "Deer Antler", "Reishi", "Turmeric", "Jasmine"], link: "/herbs" },
  { num: "53", label: "Wellness Articles", items: ["Spleen Qi Deficiency", "Kidney Yin Deficiency", "Liver Qi Stagnation", "Yin and Yang", "Five Elements", "What is Qi", "Meridians", "TCM Diet", "Body Clock", "Face Mapping"], link: "/wellness" },
]

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "homepage" }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return <p className="text-white/80 text-sm">Check your inbox. Your body type guide is on its way.</p>
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 max-w-sm mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-3 rounded-full text-sm font-semibold bg-white text-[#A63A3A] hover:shadow-lg transition-all whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-white/60 text-xs mt-3 text-center">Something went wrong. Please try again.</p>
      )}
    </>
  )
}

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

        {/* ═══ Trust Bar ═══ */}
        <section className="border-y border-[rgba(140,45,42,0.1)] bg-[var(--color-bg)]">
          <div className="max-w-5xl mx-auto px-6 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-xs text-text2 font-medium">Based on China&apos;s National Standard (2009)</span>
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border/40" />
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-xs text-text2 font-medium">Reviewed by Licensed TCM Doctors</span>
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border/40" />
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-xs text-text2 font-medium">Rooted in 3,000 Years of Tradition</span>
              </span>
            </div>
          </div>
        </section>

        {/* ═══ Transition: 问辨调 stepper ═══ */}
        <section className="bg-[var(--color-bg)] py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">How It Works</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 tracking-tight">
              The ancient art of asking your body
            </h2>
            <p className="text-text2 text-sm max-w-md mx-auto leading-relaxed mb-12">
              Chinese medicine uses four diagnostic methods. We modernized the most important one.
            </p>

            <div className="relative">
              {/* Connecting line - 3x thicker, full accent color, full content width */}
              <div className="hidden md:block absolute top-7 left-[5%] right-[5%] h-[3px] bg-accent rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1: Ask */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-card-bg)] border-[6px] border-accent text-accent mb-4 relative z-10">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-accent/50 uppercase tracking-wider block mb-1">Step 01</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-1">Ask</h3>
                  <p className="text-text2 text-xs leading-relaxed max-w-[180px] mx-auto">27 questions adapted from TCM inquiry diagnosis.</p>
                </div>

                {/* Step 2: Identify */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-card-bg)] border-[6px] border-accent text-accent mb-4 relative z-10">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-accent/50 uppercase tracking-wider block mb-1">Step 02</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-1">Identify</h3>
                  <p className="text-text2 text-xs leading-relaxed max-w-[180px] mx-auto">9 constitutional types from China's national standard.</p>
                </div>

                {/* Step 3: Adjust */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-card-bg)] border-[6px] border-accent text-accent mb-4 relative z-10">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12 13" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-accent/50 uppercase tracking-wider block mb-1">Step 03</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-1">Adjust</h3>
                  <p className="text-text2 text-xs leading-relaxed max-w-[180px] mx-auto">Food, herbs, and lifestyle guidance for your type.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 问: Ask ═══ */}
        <section className="bg-[var(--color-bg2)] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">问 &middot; Ask</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 tracking-tight">
              Your body has been answering all along
            </h2>
            <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
              In traditional Chinese medicine, asking is one of four diagnostic methods. Our 27-question quiz adapts this ancient inquiry for the modern screen.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {QUIZ_DIMENSIONS.map((dim) => (
                <span key={dim} className="text-xs font-medium text-text2 bg-[var(--color-card-bg)] border border-border/50 px-3.5 py-1.5 rounded-full">{dim}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {SAMPLE_QUESTIONS.map((q, i) => (
                <div key={i} className="bg-[var(--color-card-bg)] rounded-xl border border-border/50 p-7 text-left relative overflow-hidden">
                  <span className="absolute -top-2 right-3 text-5xl text-accent/10 font-serif leading-none select-none">&ldquo;</span>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">Q{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-text text-base mt-3 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>

            <Link
              href="/quiz"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
            >
              Start the 5-Minute Quiz
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
          </div>
        </section>

        {/* ═══ 辨: Identify ═══ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">辨 &middot; Identify</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                9 body types, <span className="text-accent">1 is yours</span>
              </h2>
              <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Based on China&apos;s only official TCM body constitution standard (2009), rooted in the 2,000-year-old Yellow Emperor&apos;s Inner Canon. Which one sounds like you?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {BODY_TYPES.map((bt, i) => (
                <Link
                  key={bt.slug}
                  href={`/types/${bt.slug}`}
                  className="group block rounded-2xl border-2 border-[rgba(140,45,42,0.18)] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline"
                >
                  <div className="h-14 relative overflow-hidden">
                    <Image
                      src={`/images/home/types/${bt.slug}.jpg`}
                      alt={bt.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${TYPE_COLORS[bt.slug]}33, ${TYPE_COLORS[bt.slug]}11)` }}>
                      <span className="text-2xl font-[family-name:var(--font-display)] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">{bt.char}</span>
                    </div>
                  </div>
                  <div className="p-5 bg-[var(--color-card-bg)]">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-[family-name:var(--font-display)] text-3xl font-bold leading-none" style={{ color: TYPE_COLORS[bt.slug] }}>{bt.pct}</span>
                      <span className="text-[10px] text-text2/50 uppercase tracking-wider">of people</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-bold tracking-wider" style={{ color: TYPE_COLORS[bt.slug] }}>{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-text font-semibold">{bt.name}</h3>
                    </div>
                    <p className="text-text2 text-sm leading-relaxed">{bt.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-center text-xs text-text2/60 mt-6 mb-8">Based on population surveys. 7.6% have mixed body types.</p>

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

        {/* ═══ Section Transition ═══ */}
        <div className="h-[100px] flex items-center justify-center bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg2)]">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-accent/15" />
            <span className="text-2xl font-[family-name:var(--font-display)] text-accent/20">養</span>
            <span className="h-px w-16 bg-accent/15" />
          </div>
        </div>

        {/* ═══ 调: Adjust ═══ */}
        <section className="bg-[var(--color-bg2)] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">调 &middot; Adjust</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                Personalized guidance for your type
              </h2>
              <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                From food pairings and herb profiles to daily rhythms and seasonal habits, 252 guides rooted in 3,000 years of Chinese wellness tradition, all organized by your body type.
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

        {/* ═══ Testimonials ═══ */}
        <section className="py-20 sm:py-28 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Reader Stories</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 tracking-tight">
                Real people, real insights
              </h2>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 animate-marquee-x" style={{ width: "max-content" }}>
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="flex-shrink-0 w-[320px] bg-[var(--color-card-bg)] rounded-2xl border border-border/50 p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-accent text-sm">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-text2 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-text text-sm font-semibold">{t.name}</p>
                      <p className="text-text2/60 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
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
            <div className="mt-10 pt-8 border-t border-white/15 max-w-md mx-auto">
              <p className="text-white/60 text-xs mb-4 uppercase tracking-wider">Get our 9 body types guide + monthly insights</p>
              <NewsletterForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
