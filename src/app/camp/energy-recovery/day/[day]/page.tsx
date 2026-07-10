"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { qiDeficientWeek1 } from "@/lib/camp/energy-recovery/qi-deficient-week1"
import { BODY_TYPE_LABELS } from "@/lib/camp/types"
import type { DailyPlan } from "@/lib/camp/types"

const ALL_DAYS: DailyPlan[] = [...qiDeficientWeek1]

export default function DayPage({ params }: { params: { day: string } }) {
  const dayNum = parseInt(params.day, 10)
  const plan = ALL_DAYS.find((d) => d.day === dayNum)

  const [checkin, setCheckin] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    tea: false,
    lifestyle: false,
    journal: "",
    mood: null as string | null,
  })

  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(`camp-checkin-day-${dayNum}`)
    if (stored) {
      setCheckin(JSON.parse(stored))
    }
  }, [dayNum])

  const toggle = (key: keyof typeof checkin) => {
    if (key === "journal" || key === "mood") return
    setCheckin((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const save = () => {
    localStorage.setItem(`camp-checkin-day-${dayNum}`, JSON.stringify(checkin))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  if (!plan) {
    return (
      <>
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto px-6 py-20 text-center">
          <p className="text-text2 mb-4">Day {dayNum} is not available yet.</p>
          <Link href="/camp/dashboard" className="text-accent hover:underline">Back to Dashboard</Link>
        </main>
        <Footer />
      </>
    )
  }

  const typeInfo = BODY_TYPE_LABELS["qi_deficient"]
  const completedCount = [checkin.breakfast, checkin.lunch, checkin.dinner, checkin.tea, checkin.lifestyle].filter(Boolean).length
  const prevDay = dayNum > 1 ? dayNum - 1 : null
  const nextDay = dayNum < 7 ? dayNum + 1 : null

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-text2/60 mb-6">
          <Link href="/camp/dashboard" className="hover:text-accent transition-colors no-underline text-text2/60">Dashboard</Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Day {dayNum}</span>
        </nav>

        {/* Day header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="flex items-center justify-center w-12 h-12 rounded-full text-lg font-bold"
              style={{ background: `${typeInfo.color}15`, color: typeInfo.color }}
            >
              {typeInfo.char}
            </span>
            <div>
              <p className="text-xs text-text2/50 uppercase tracking-wider">Day {plan.day} of 30</p>
              <h1 className="font-[family-name:var(--font-display)] text-2xl text-text tracking-tight">
                {plan.dayFocus}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex-1 h-2 rounded-full bg-[rgba(140,45,42,0.08)] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / 5) * 100}%`, background: typeInfo.color }}
              />
            </div>
            <span className="text-xs text-text2/60">{completedCount}/5 tasks</span>
          </div>
        </div>

        {/* Week theme */}
        <div className="bg-[rgba(140,45,42,0.04)] border border-[rgba(140,45,42,0.1)] rounded-xl p-4 mb-8">
          <p className="text-xs text-accent font-bold uppercase tracking-wider mb-1">
            Week {plan.week}: {plan.weekTheme}
          </p>
        </div>

        {/* Meals */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-4 tracking-wide">
            Today&apos;s Meals
          </h2>
          <div className="space-y-4">
            {[
              { key: "breakfast" as const, label: "Breakfast", meal: plan.breakfast },
              { key: "lunch" as const, label: "Lunch", meal: plan.lunch },
              { key: "dinner" as const, label: "Dinner", meal: plan.dinner },
            ].map(({ key, label, meal }) => (
              <div key={key} className="bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
                <button
                  onClick={() => toggle(key)}
                  className="flex items-center justify-between w-full mb-3 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded border-2 transition-all"
                      style={{
                        borderColor: checkin[key] ? typeInfo.color : "rgba(140,45,42,0.2)",
                        background: checkin[key] ? typeInfo.color : "transparent",
                        color: checkin[key] ? "#fff" : "transparent",
                      }}
                    >
                      {checkin[key] ? "\u2713" : ""}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{label}</span>
                  </div>
                </button>
                <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold mb-2">{meal.name}</h3>
                <p className="text-text2 text-sm leading-relaxed mb-3">{meal.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-xs font-bold text-accent/60 uppercase mt-0.5 w-16 flex-shrink-0">Western</span>
                    <p className="text-text2 leading-relaxed">{meal.westernVersion}</p>
                  </div>
                  {meal.chineseVersion && (
                    <div className="flex gap-2">
                      <span className="text-xs font-bold text-accent/60 uppercase mt-0.5 w-16 flex-shrink-0">Chinese</span>
                      <p className="text-text2/80 leading-relaxed">{meal.chineseVersion}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tea */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-4 tracking-wide">
            Today&apos;s Wellness Tea
          </h2>
          <div className="bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-[family-name:var(--font-display)] text-base text-text font-semibold">{plan.tea.name}</h3>
              <button onClick={() => toggle("tea")} className="cursor-pointer">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded border-2 transition-all"
                  style={{
                    borderColor: checkin.tea ? typeInfo.color : "rgba(140,45,42,0.2)",
                    background: checkin.tea ? typeInfo.color : "transparent",
                    color: checkin.tea ? "#fff" : "transparent",
                  }}
                >
                  {checkin.tea ? "\u2713" : ""}
                </span>
              </button>
            </div>
            <p className="text-text2 text-sm leading-relaxed mb-2">{plan.tea.recipe}</p>
            <p className="text-xs text-text2/60 italic">{plan.tea.benefit}</p>
          </div>
        </section>

        {/* Lifestyle */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-4 tracking-wide">
            Lifestyle Tip
          </h2>
          <div className="bg-[rgba(140,45,42,0.04)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
            <div className="flex items-start gap-3 mb-3">
              <button onClick={() => toggle("lifestyle")} className="cursor-pointer mt-0.5">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded border-2 transition-all"
                  style={{
                    borderColor: checkin.lifestyle ? typeInfo.color : "rgba(140,45,42,0.2)",
                    background: checkin.lifestyle ? typeInfo.color : "transparent",
                    color: checkin.lifestyle ? "#fff" : "transparent",
                  }}
                >
                  {checkin.lifestyle ? "\u2713" : ""}
                </span>
              </button>
              <p className="text-text text-sm leading-relaxed">{plan.lifestyleTip}</p>
            </div>
          </div>
        </section>

        {/* Avoid */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-4 tracking-wide">
            Avoid Today
          </h2>
          <div className="flex flex-wrap gap-2">
            {plan.avoidList.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-text2 bg-[rgba(180,80,40,0.06)] border border-[rgba(180,80,40,0.12)] px-3 py-1.5 rounded-lg">
                <span className="text-orange-600/50">{"\u26A0"}</span>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Body type tip */}
        <section className="mb-8">
          <div
            className="rounded-xl p-5"
            style={{ background: `${typeInfo.color}08`, border: `1px solid ${typeInfo.color}20` }}
          >
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: typeInfo.color }}>
              {typeInfo.name} Tip
            </p>
            <p className="text-text2 text-sm leading-relaxed">{plan.bodyTypeTip}</p>
          </div>
        </section>

        {/* Journal */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-4 tracking-wide">
            Daily Journal
          </h2>
          <div className="bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
            <p className="text-xs text-text2/60 mb-3">How are you feeling today?</p>
            <div className="flex gap-2 mb-4">
              {[
                { key: "great", label: "Great", emoji: "\u{1F60A}" },
                { key: "good", label: "Good", emoji: "\u{1F642}" },
                { key: "okay", label: "Okay", emoji: "\u{1F610}" },
                { key: "low", label: "Low", emoji: "\u{1F614}" },
                { key: "bad", label: "Bad", emoji: "\u{1F622}" },
              ].map((m) => (
                <button
                  key={m.key}
                  onClick={() => setCheckin((prev) => ({ ...prev, mood: m.key }))}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                    checkin.mood === m.key
                      ? "border-accent bg-[rgba(140,45,42,0.08)]"
                      : "border-[rgba(140,45,42,0.1)] hover:border-[rgba(140,45,42,0.3)]"
                  }`}
                >
                  <span className="text-lg">{m.emoji}</span>
                  <span className="text-xs text-text2">{m.label}</span>
                </button>
              ))}
            </div>
            <textarea
              value={checkin.journal}
              onChange={(e) => setCheckin((prev) => ({ ...prev, journal: e.target.value }))}
              placeholder="Any notes about your energy, sleep, digestion, or how the food felt today..."
              className="w-full h-24 px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[rgba(140,45,42,0.1)] text-text text-sm resize-none focus:outline-none focus:border-[rgba(140,45,42,0.3)]"
            />
          </div>
        </section>

        {/* Save */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={save}
            className="px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer no-underline transition-all hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
          >
            {saved ? "Saved!" : "Save Today&apos;s Progress"}
          </button>
          {completedCount === 5 && (
            <span className="text-sm text-green-600 font-semibold">All tasks complete! {"\u{1F389}"}</span>
          )}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-6 border-t border-[rgba(140,45,42,0.1)]">
          {prevDay ? (
            <Link
              href={`/camp/energy-recovery/day/${prevDay}`}
              className="text-sm text-text2 hover:text-accent transition-colors no-underline"
            >
              {"\u2190"} Day {prevDay}
            </Link>
          ) : (
            <span />
          )}
          {nextDay ? (
            <Link
              href={`/camp/energy-recovery/day/${nextDay}`}
              className="text-sm text-accent hover:underline font-semibold no-underline"
            >
              Day {nextDay} {"\u2192"}
            </Link>
          ) : (
            <span className="text-sm text-text2/50">Week 1 complete</span>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
