"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Nav as SharedNav } from "@/components/nav"
import { LIKERT_OPTIONS, calculate27Scores, getPrimaryAndSecondary } from "@/lib/quiz-27"
import { QUIZ_15, QUIZ_15_INDICES, QUIZ_12, calculate15Scores } from "@/lib/quiz-15"
import type { ConstitutionId } from "@/lib/types"
import MidReveal from "@/components/mid-reveal"
import Reveal from "@/components/reveal"

function Collapsible({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-[rgba(201,169,110,0.05)] border border-[rgba(201,169,110,0.12)] cursor-pointer transition-colors hover:border-[rgba(201,169,110,0.25)] flex items-center justify-between gap-2"
      >
        <span className="text-xs text-accent tracking-wide">{label}</span>
        <span className={`text-accent text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>&#9662;</span>
      </button>
      {open && (
        <div className="px-4 py-3 mt-1.5 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.08)]">
          {children}
        </div>
      )}
    </div>
  )
}

type Sex = "female" | "male"
type Phase = "intro" | "sex" | "phase1" | "mid-reveal" | "phase2" | "completion"

const GENDER_WEIGHTS: Record<Sex, Partial<Record<ConstitutionId, number>>> = {
  female: { blood_stasis: 1.1, qi_stagnant: 1.1, qi_deficient: 1.1 },
  male: { yang_deficient: 1.1, phlegm_damp: 1.1 },
}

function buildFullScores(
  phase1Answers: number[],
  phase2Answers: number[],
): number[] {
  const full27: number[] = new Array(27).fill(-1)
  QUIZ_15_INDICES.forEach((origIdx, i) => {
    if (i < phase1Answers.length) full27[origIdx] = phase1Answers[i]
  })
  phase2Answers.forEach((val, i) => {
    const origIdx = [1, 2, 4, 8, 11, 14, 17, 19, 20, 22, 25, 26][i]
    if (origIdx !== undefined) full27[origIdx] = val
  })
  return full27
}

export default function QuizClient() {
  const router = useRouter()

  const [sex, setSex] = useState<Sex | null>(null)
  const [phase, setPhase] = useState<Phase>("intro")
  const [currentQ, setCurrentQ] = useState(0)
  const [phase1Answers, setPhase1Answers] = useState<number[]>([])
  const [phase2Answers, setPhase2Answers] = useState<number[]>([])
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [midRevealScores, setMidRevealScores] = useState<Record<ConstitutionId, number> | null>(null)
  const [midRevealPrimary, setMidRevealPrimary] = useState<ConstitutionId | null>(null)
  const [previewSlide, setPreviewSlide] = useState(0)

  const isPhase1 = phase === "phase1"
  const isPhase2 = phase === "phase2"
  const questions = isPhase1 ? QUIZ_15 : isPhase2 ? QUIZ_12 : QUIZ_15
  const totalQuestions = questions.length
  const answers = isPhase1 ? phase1Answers : phase2Answers
  const progress = ((currentQ + 1) / totalQuestions) * 100
  const currentQuestion = questions[currentQ]

  const phaseLabel = isPhase1
    ? "Quick Scan · ~3 min"
    : "Deep Analysis · ~2 min"

  const finishAndNavigate = useCallback(
    (fullAnswers: number[]) => {
      const rawScores = calculate27Scores(fullAnswers)
      const weighted: Record<ConstitutionId, number> = { ...rawScores }
      if (sex) {
        const w = GENDER_WEIGHTS[sex]
        for (const [k, mult] of Object.entries(w)) {
          if (mult) weighted[k as ConstitutionId] = Math.round(rawScores[k as ConstitutionId] * mult)
        }
      }
      const { primary, secondary } = getPrimaryAndSecondary(weighted)
      const p = new URLSearchParams()
      p.set("primary", primary)
      if (secondary) p.set("secondary", secondary)
      p.set("scores", Object.entries(weighted).map(([k, v]) => `${k}:${v}`).join(","))
      p.set("lang", "en")
      if (sex) p.set("sex", sex)
      router.push(`/result?${p.toString()}`)
    },
    [sex, router],
  )

  const handleSexSelect = useCallback((s: Sex) => {
    setSex(s)
    setPhase("phase1")
  }, [])

  const handleStart = useCallback(() => {
    setPhase("sex")
  }, [])

  const handleLikert = useCallback(
    (value: number) => {
      if (isTransitioning) return
      setSelectedValue(value)
      setIsTransitioning(true)

      const currentAnswers = isPhase1 ? phase1Answers : phase2Answers
      const newAnswers = [...currentAnswers, value]
      if (isPhase1) setPhase1Answers(newAnswers)
      else setPhase2Answers(newAnswers)

      const nextQ = currentQ + 1

      setTimeout(() => {
        if (nextQ < totalQuestions) {
          setCurrentQ(nextQ)
          setSelectedValue(null)
          setIsTransitioning(false)
        } else if (isPhase1) {
          const scores = calculate15Scores(newAnswers)
          const weighted15: Record<ConstitutionId, number> = { ...scores }
          if (sex) {
            const w = GENDER_WEIGHTS[sex]
            for (const [k, mult] of Object.entries(w)) {
              if (mult) weighted15[k as ConstitutionId] = Math.round(scores[k as ConstitutionId] * mult)
            }
          }
          const { primary } = getPrimaryAndSecondary(weighted15)
          setMidRevealScores(weighted15)
          setMidRevealPrimary(primary)
          setCurrentQ(0)
          setPhase("mid-reveal")
          setSelectedValue(null)
          setIsTransitioning(false)
        } else {
          setPhase("completion")
          setTimeout(() => {
            const fullAnswers = buildFullScores(phase1Answers, newAnswers)
            finishAndNavigate(fullAnswers)
          }, 3500)
        }
      }, 350)
    },
    [isTransitioning, isPhase1, phase1Answers, phase2Answers, currentQ, totalQuestions, sex, finishAndNavigate],
  )

  const handleMidRevealComplete = useCallback(
    (extraAnswers: number[]) => {
      setPhase2Answers(extraAnswers)
      setPhase("completion")
      setTimeout(() => {
        const fullAnswers = buildFullScores(phase1Answers, extraAnswers)
        finishAndNavigate(fullAnswers)
      }, 3500)
    },
    [phase1Answers, finishAndNavigate],
  )

  const handleMidRevealSkip = useCallback(() => {
    const fullAnswers = buildFullScores(phase1Answers, [])
    finishAndNavigate(fullAnswers)
  }, [phase1Answers, finishAndNavigate])

  const handleBack = useCallback(() => {
    if (isPhase1 && currentQ > 0 && !isTransitioning) {
      setCurrentQ(currentQ - 1)
      setSelectedValue(null)
      setPhase1Answers(phase1Answers.slice(0, -1))
    } else if (isPhase1 && currentQ === 0) {
      setPhase("sex")
      setPhase1Answers([])
      setSelectedValue(null)
    } else if (isPhase2 && currentQ > 0 && !isTransitioning) {
      setCurrentQ(currentQ - 1)
      setSelectedValue(null)
      setPhase2Answers(phase2Answers.slice(0, -1))
    }
  }, [phase, currentQ, isTransitioning, phase1Answers, phase2Answers, isPhase1, isPhase2])

  if (phase === "completion") {
    return (
      <>
        <SharedNav />
        <CompletionAnimation />
      </>
    )
  }

  if (phase === "mid-reveal" && midRevealScores && midRevealPrimary) {
    return (
      <>
        <SharedNav />
        <MidReveal
          scores={midRevealScores}
          primaryId={midRevealPrimary}
          onComplete={handleMidRevealComplete}
          onSkip={handleMidRevealSkip}
        />
      </>
    )
  }

  if (phase === "intro") {
    const tiers = [
      {
        name: "Free",
        price: "$0",
        features: [
          "Your body type identification",
          "Brief type description",
          "Top 5 recommended foods",
        ],
      },
      {
        name: "Body Profile",
        price: "$4.99",
        features: [
          "Everything in Free",
          "Constitution Identity analysis",
          "Food Therapy Guide (eat / limit)",
          "Seasonal Protocol (4 seasons)",
          "Daily Meridian Schedule",
          "Recommended Recipe",
          "Printable PDF",
        ],
      },
      {
        name: "Full Report",
        price: "$12.99",
        featured: true,
        features: [
          "Everything in Body Profile",
          "Origin Story & Emotional Blueprint",
          "Acupoint Massage Guide",
          "Multiple TCM Recipes",
          "30-Day Lifestyle Plan",
          "30-Day Body Monitor tracker",
          "Printable PDF",
        ],
      },
    ]

    return (
      <>
        <SharedNav />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14 mesh-hero">
          {/* Hero */}
          <div className="text-center mb-8">
            <div className="text-accent text-xs uppercase tracking-[0.2em] mb-3">
              EastType · Free Body Type Assessment
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-text mb-3 leading-tight">
              Discover Your Chinese Medicine Body Type
            </h1>
            <p className="text-sm text-text2 leading-relaxed max-w-lg mx-auto">
              9 body types. 27 questions. 5 minutes. Find out which constitution shapes your energy, digestion, sleep, and emotions.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-3">
            <button
              onClick={handleStart}
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl font-[family-name:var(--font-body)] text-base font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(201,163,85,0.3)] hover:shadow-[0_8px_30px_rgba(201,163,85,0.4)] bg-gradient-to-r from-accent to-accent2 text-bg"
            >
              Begin Free Assessment
              <span className="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-text2 mb-12">
            <span>5 min</span>
            <span className="text-border">|</span>
            <span>27 questions</span>
            <span className="text-border">|</span>
            <span>No signup</span>
          </div>

          {/* Pricing Tiers */}
          <Reveal>
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-lg text-text text-center mb-6">
              What You Can Unlock
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-xl p-5 border card-elevated ${
                    tier.featured
                      ? "border-accent bg-[rgba(201,163,85,0.06)]"
                      : "border-card-border bg-card-bg"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-bg text-[10px] font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="text-sm font-bold text-text mb-1">{tier.name}</div>
                  <div className="font-[family-name:var(--font-display)] text-2xl text-text mb-4">
                    {tier.price}
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-text2 leading-relaxed">
                        <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-text2 mt-4">
              Quiz is always free. Upgrade only after seeing your result.
            </p>
          </div>
          </Reveal>

          {/* Report Preview Carousel */}
          <Reveal delay={1}>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg text-text text-center mb-1">
              Report Preview
            </h2>
            <p className="text-center text-xs text-text2 mb-6">
              Hover to zoom. Swipe through real report pages.
            </p>

            {/* Carousel */}
            <div className="relative max-w-sm mx-auto">
              {/* Arrows */}
              <button
                onClick={() => setPreviewSlide((p) => (p - 1 + 5) % 5)}
                className="absolute left-[-12px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-card-bg border border-card-border flex items-center justify-center cursor-pointer transition-all hover:border-accent hover:text-accent text-text2"
                aria-label="Previous"
              >
                &#8249;
              </button>
              <button
                onClick={() => setPreviewSlide((p) => (p + 1) % 5)}
                className="absolute right-[-12px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-card-bg border border-card-border flex items-center justify-center cursor-pointer transition-all hover:border-accent hover:text-accent text-text2"
                aria-label="Next"
              >
                &#8250;
              </button>

              {/* Slides viewport */}
              <div className="overflow-visible py-8" style={{ perspective: "1000px" }}>
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${previewSlide * 100}%)` }}
                >
                  <div className="flex" style={{ width: "500%" }}>
                    {/* Slide 1: Constitution Identity */}
                    <div className="px-2" style={{ width: "20%" }}>
                      <div className="bg-white rounded-lg shadow-lg border border-[#e0d8cc] overflow-hidden transition-all duration-300 hover:scale-[1.4] hover:z-50 hover:shadow-2xl relative origin-center cursor-pointer">
                        <div className="bg-[#f8f6f2] px-5 py-3 border-b border-[#e0d8cc] flex items-center justify-between">
                          <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider">EastType</div>
                          <div className="text-[9px] text-[#bbb]">BODY PROFILE REPORT</div>
                        </div>
                        <div className="px-5 py-4">
                          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-3">Constitution Identity</div>
                          <div className="text-center mb-3 pb-3 border-b border-[#f0ebe3]">
                            <div className="text-[14px] font-bold text-[#1a1a1a]">The Gentle Breeze</div>
                            <div className="text-[10px] text-[#7a6535] mt-0.5">Qi Deficient</div>
                          </div>
                          <div className="space-y-1.5 text-[9px] text-[#444] leading-[1.6]">
                            <p>Your energy tank is elegantly smaller. You are a hybrid car, not a truck. Incredibly efficient, but with a smaller battery.</p>
                            <p>You likely prefer smaller gatherings, thoughtful conversation, and a good book over a night out.</p>
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-1.5">
                            <div className="border border-[#e0d8cc] rounded p-1.5">
                              <div className="text-[7px] font-bold text-[#C9A96E] uppercase">Strength</div>
                              <div className="text-[8px] text-[#444] mt-0.5">Deep perception</div>
                            </div>
                            <div className="border border-[#e0d8cc] rounded p-1.5">
                              <div className="text-[7px] font-bold text-[#C9A96E] uppercase">Drains Fast</div>
                              <div className="text-[8px] text-[#444] mt-0.5">Skipping meals</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f8f6f2] px-5 py-1.5 text-center text-[8px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc]">www.myeasterntype.com</div>
                      </div>
                    </div>

                    {/* Slide 2: Food Therapy */}
                    <div className="px-2" style={{ width: "20%" }}>
                      <div className="bg-white rounded-lg shadow-lg border border-[#e0d8cc] overflow-hidden transition-all duration-300 hover:scale-[1.4] hover:z-50 hover:shadow-2xl relative origin-center cursor-pointer">
                        <div className="bg-[#f8f6f2] px-5 py-3 border-b border-[#e0d8cc] flex items-center justify-between">
                          <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider">EastType</div>
                          <div className="text-[9px] text-[#bbb]">FOOD THERAPY</div>
                        </div>
                        <div className="px-5 py-4">
                          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-3">Recommended Foods</div>
                          <div className="space-y-1">
                            {[
                              { f: "Chinese Yam", a: "Tonifies Spleen & Lung Qi" },
                              { f: "Red Dates", a: "Nourishes Blood & Qi" },
                              { f: "Chicken", a: "Tonifies Qi & Blood" },
                              { f: "Millet", a: "Strengthens Spleen" },
                              { f: "Goji Berries", a: "Nourishes Liver Blood" },
                              { f: "Pumpkin", a: "Warms the Middle" },
                            ].map((row) => (
                              <div key={row.f} className="flex items-center justify-between text-[9px] py-1 border-b border-[#f0ebe3]">
                                <span className="font-semibold text-[#1a1a1a]">{row.f}</span>
                                <span className="text-[#7a6535] text-right">{row.a}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 text-[10px] font-bold text-[#b85450] uppercase tracking-wider mb-1">Foods to Limit</div>
                          <div className="text-[8px] text-[#666] leading-relaxed">Raw salads, ice-cold drinks, watermelon, bitter gourd, excessive peppermint</div>
                        </div>
                        <div className="bg-[#f8f6f2] px-5 py-1.5 text-center text-[8px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc]">www.myeasterntype.com</div>
                      </div>
                    </div>

                    {/* Slide 3: Daily Schedule */}
                    <div className="px-2" style={{ width: "20%" }}>
                      <div className="bg-white rounded-lg shadow-lg border border-[#e0d8cc] overflow-hidden transition-all duration-300 hover:scale-[1.4] hover:z-50 hover:shadow-2xl relative origin-center cursor-pointer">
                        <div className="bg-[#f8f6f2] px-5 py-3 border-b border-[#e0d8cc] flex items-center justify-between">
                          <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider">EastType</div>
                          <div className="text-[9px] text-[#bbb]">DAILY SCHEDULE</div>
                        </div>
                        <div className="px-5 py-4">
                          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-3">Meridian Rhythm</div>
                          <div className="space-y-1.5">
                            {[
                              { t: "7-8 AM", m: "Stomach", d: "Warm water with red dates" },
                              { t: "8-9 AM", m: "Spleen", d: "Congee with yam" },
                              { t: "9-11 AM", m: "Spleen (peak)", d: "Best focus window" },
                              { t: "1-3 PM", m: "Small Intestine", d: "Rest or nap" },
                              { t: "5-7 PM", m: "Kidney", d: "Early warm dinner" },
                              { t: "10 PM", m: "Bedtime", d: "Non-negotiable" },
                            ].map((row) => (
                              <div key={row.t} className="flex items-start gap-2 text-[9px]">
                                <span className="font-bold text-[#C9A96E] w-14 shrink-0">{row.t}</span>
                                <div>
                                  <span className="font-semibold text-[#1a1a1a]">{row.m}</span>
                                  <span className="text-[#666]"> — {row.d}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#f8f6f2] px-5 py-1.5 text-center text-[8px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc]">www.myeasterntype.com</div>
                      </div>
                    </div>

                    {/* Slide 4: Recipe */}
                    <div className="px-2" style={{ width: "20%" }}>
                      <div className="bg-white rounded-lg shadow-lg border border-[#e0d8cc] overflow-hidden transition-all duration-300 hover:scale-[1.4] hover:z-50 hover:shadow-2xl relative origin-center cursor-pointer">
                        <div className="bg-[#f8f6f2] px-5 py-3 border-b border-[#e0d8cc] flex items-center justify-between">
                          <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider">EastType</div>
                          <div className="text-[9px] text-[#bbb]">RECOMMENDED RECIPE</div>
                        </div>
                        <div className="px-5 py-4">
                          <div className="text-center mb-3 pb-2 border-b border-[#f0ebe3]">
                            <div className="text-[12px] font-bold text-[#1a1a1a]">Red Date &amp; Yam Recovery Congee</div>
                            <div className="text-[8px] text-[#7a6535] mt-0.5">Qi-Building Breakfast</div>
                          </div>
                          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Ingredients</div>
                          <div className="space-y-0.5">
                            {[
                              { n: "White Rice", a: "80 g" },
                              { n: "Chinese Yam (fresh)", a: "150 g" },
                              { n: "Red Dates", a: "8 pieces" },
                              { n: "Goji Berries", a: "10 g" },
                              { n: "Fresh Ginger", a: "1 slice" },
                              { n: "Water", a: "1200 ml" },
                            ].map((ing) => (
                              <div key={ing.n} className="flex justify-between text-[9px] py-0.5 border-b border-[#f5f2ed]">
                                <span className="text-[#1a1a1a]">{ing.n}</span>
                                <span className="text-[#7a6535]">{ing.a}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 text-[8px] text-[#666] leading-relaxed italic">
                            Combines four Qi-building ingredients: rice, yam, red dates, and ginger.
                          </div>
                        </div>
                        <div className="bg-[#f8f6f2] px-5 py-1.5 text-center text-[8px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc]">www.myeasterntype.com</div>
                      </div>
                    </div>

                    {/* Slide 5: 30-Day Plan (Pro) */}
                    <div className="px-2" style={{ width: "20%" }}>
                      <div className="bg-white rounded-lg shadow-lg border border-[#e0d8cc] overflow-hidden transition-all duration-300 hover:scale-[1.4] hover:z-50 hover:shadow-2xl relative origin-center cursor-pointer">
                        <div className="bg-[#f8f6f2] px-5 py-3 border-b border-[#e0d8cc] flex items-center justify-between">
                          <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider">EastType</div>
                          <div className="text-[9px] text-[#bbb]">30-DAY PLAN</div>
                        </div>
                        <div className="px-5 py-4">
                          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-3">Lifestyle Tracker</div>
                          <div className="overflow-hidden">
                            <table className="w-full text-[8px]">
                              <thead>
                                <tr className="bg-[#f8f6f2]">
                                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Day</th>
                                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Wake</th>
                                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Breakfast</th>
                                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Exercise</th>
                                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Bed</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  { d: 1, w: "7:00", b: "Congee", e: "Walk 20m", bed: "10:00" },
                                  { d: 2, w: "7:00", b: "Oatmeal", e: "Stretch", bed: "10:00" },
                                  { d: 3, w: "6:50", b: "Congee", e: "Tai Chi", bed: "9:50" },
                                  { d: 7, w: "7:00", b: "Congee", e: "Yoga", bed: "10:00" },
                                  { d: 14, w: "6:45", b: "Congee", e: "Walk 30m", bed: "9:45" },
                                  { d: 30, w: "6:30", b: "Congee", e: "Tai Chi", bed: "9:30" },
                                ].map((row) => (
                                  <tr key={row.d} className={row.d % 2 === 0 ? "bg-[#fcfaf7]" : "bg-white"}>
                                    <td className="px-1.5 py-1 border border-[#e0d8cc] font-bold text-center text-[#1a1a1a]">{row.d}</td>
                                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.w}</td>
                                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.b}</td>
                                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.e}</td>
                                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.bed}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-2 text-[8px] text-[#666] italic">Full plan includes daily targets for 30 days</div>
                          <div className="mt-2 inline-block px-2 py-0.5 rounded bg-[rgba(201,169,110,0.1)] text-[7px] font-bold text-[#C9A96E] uppercase tracking-wider">Full Report Only</div>
                        </div>
                        <div className="bg-[#f8f6f2] px-5 py-1.5 text-center text-[8px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc]">www.myeasterntype.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    onClick={() => setPreviewSlide(i)}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      i === previewSlide ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-border hover:bg-text2"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="text-center text-xs text-text2 mt-2">{previewSlide + 1} / 5</div>
            </div>
          </div>
          </Reveal>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <button
              onClick={handleStart}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl font-[family-name:var(--font-body)] text-sm font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 border-2 border-accent text-accent hover:bg-accent hover:text-bg"
            >
              Start Your Free Quiz
              <span className="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </button>
          </div>
        </div>
      </>
    )
  }

  if (phase === "sex") {
    return (
      <>
        <SharedNav />
        <div className="max-w-lg mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            Step 1 of 2
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-center mb-4 leading-snug">
            What&apos;s your biological sex?
          </h1>
          <p className="text-text2 text-center mb-12 leading-relaxed max-w-sm">
            TCM patterns differ between male and female bodies. This helps personalize your results. Your data stays on your device.
          </p>
          <div className="flex gap-4 w-full max-w-xs">
            <button
              onClick={() => handleSexSelect("female")}
              className="flex-1 py-4 rounded-2xl border-[1.5px] border-[rgba(201,163,85,0.25)] bg-card-bg text-text cursor-pointer transition-all duration-250 hover:border-[rgba(201,163,85,0.6)] hover:bg-[rgba(201,163,85,0.08)] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(201,163,85,0.15)]"
            >
              <div className="text-3xl mb-2">♀</div>
              <div className="font-semibold text-base">
                Female
              </div>
            </button>
            <button
              onClick={() => handleSexSelect("male")}
              className="flex-1 py-4 rounded-2xl border-[1.5px] border-[rgba(201,163,85,0.25)] bg-card-bg text-text cursor-pointer transition-all duration-250 hover:border-[rgba(201,163,85,0.6)] hover:bg-[rgba(201,163,85,0.08)] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(201,163,85,0.15)]"
            >
              <div className="text-3xl mb-2">♂</div>
              <div className="font-semibold text-base">
                Male
              </div>
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SharedNav
        right={
          <div className="flex items-center gap-4">
            <span className="text-xs text-text2">
              {phaseLabel}
            </span>
            <Link href="/" className="text-sm text-text2 hover:text-accent px-4 py-2 no-underline transition-colors">
              Exit
            </Link>
          </div>
        }
      />

      <div className="max-w-2xl mx-auto px-6 min-h-screen flex flex-col">
        <div className="flex items-center gap-4 mb-6 mt-5">
          <button
            onClick={handleBack}
            disabled={isTransitioning}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-card-border bg-card-bg cursor-pointer transition-all text-sm text-text2 hover:text-accent hover:border-[rgba(201,169,110,0.3)]"
          >
            &#8592;
          </button>
          <div className="flex-1 h-[3px] bg-border rounded overflow-hidden">
            <div
              className="h-full rounded transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #C9A96E, #E8D5A3)",
              }}
            />
          </div>
          <div className="text-xs text-text2 font-medium whitespace-nowrap">
            {currentQ + 1} / {totalQuestions}
          </div>
        </div>

        <div className="max-w-xl mx-auto w-full">
          {isPhase1 && (
            <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4 text-center">
              Quick Scan
            </div>
          )}
          {isPhase2 && (
            <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4 text-center">
              Deep Analysis
            </div>
          )}

          <div className="h-[110px] sm:h-[90px] flex items-center justify-center mb-4 px-2">
            <h2 className="font-[family-name:var(--font-display)] text-[17px] sm:text-xl leading-[1.45] text-center">
              {currentQuestion.q.en}
            </h2>
          </div>

          <Collapsible label="Why this question?">
            <div className="flex items-start gap-2">
              <span className="text-accent text-xs mt-0.5 flex-shrink-0">&#9670;</span>
              <p className="text-sm text-text2 leading-relaxed">
                {currentQuestion.theory.en}
              </p>
            </div>
          </Collapsible>

          <Collapsible label="Think of it this way...">
            <p className="text-sm text-text2 leading-relaxed italic opacity-80">
              {currentQuestion.bridge.en}
            </p>
          </Collapsible>

          <div className="flex flex-col gap-3">
            {LIKERT_OPTIONS.map((opt) => {
              const label = opt.en
              return (
                <button
                  key={opt.value}
                  onClick={() => handleLikert(opt.value)}
                  disabled={isTransitioning}
                  className={`w-full text-left p-4 rounded-2xl border-[1.5px] cursor-pointer transition-all duration-200 flex items-center gap-4 min-h-[56px] ${
                    selectedValue === opt.value
                      ? "border-accent bg-[rgba(201,169,110,0.15)] text-accent shadow-[0_0_20px_rgba(201,163,85,0.1)]"
                      : "border-[rgba(201,163,85,0.2)] bg-[rgba(201,163,85,0.04)] text-text hover:border-accent hover:bg-[rgba(201,163,85,0.1)] hover:shadow-[0_2px_12px_rgba(201,163,85,0.08)]"
                  } disabled:cursor-default`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center text-sm font-semibold text-accent/70">
                    {opt.value}
                  </span>
                  <span className="text-base">
                    {label}
                  </span>
                </button>
              )
            })}
          </div>

          <p className="text-[9px] text-text2/60 text-center mt-4 leading-relaxed">
            For wellness &amp; self-awareness only. Not medical advice.
          </p>
        </div>
      </div>
    </>
  )
}

function CompletionAnimation({ signalCount = 27 }: { signalCount?: number }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500)
    const t2 = setTimeout(() => setStep(2), 1500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center">
        <div className={`transition-all duration-1000 ${step >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent2/10 border border-accent/30 flex items-center justify-center">
            <span className="text-4xl text-accent">&#9670;</span>
          </div>
        </div>

        <div className={`mt-6 transition-all duration-700 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-2">
            Analysis Complete
          </div>
          <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-text">
            {signalCount} Body Signals Collected
          </div>
        </div>

        <div className={`mt-4 transition-all duration-700 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
          <div className="text-sm text-text2 mt-2">
            Analyzing your constitution...
          </div>
        </div>
      </div>
    </div>
  )
}
