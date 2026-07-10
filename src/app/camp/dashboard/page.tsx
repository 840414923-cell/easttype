"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { energyRecoveryCamp } from "@/lib/camp/energy-recovery/meta"
import { qiDeficientWeek1 } from "@/lib/camp/energy-recovery/qi-deficient-week1"
import { BODY_TYPE_LABELS } from "@/lib/camp/types"

export default function CampDashboard() {
  const [enrolled, setEnrolled] = useState(false)
  const [started, setStarted] = useState(false)
  const [startDate, setStartDate] = useState<string | null>(null)
  const [checkinData, setCheckinData] = useState<Record<number, { completed: number; mood: string }>>({})

  useEffect(() => {
    const enroll = localStorage.getItem("camp-enrolled")
    if (enroll) {
      setEnrolled(true)
      const start = localStorage.getItem("camp-start-date")
      if (start) {
        setStarted(true)
        setStartDate(start)
      }
    }
    // Load checkin data for all 7 days
    const data: Record<number, { completed: number; mood: string }> = {}
    for (let i = 1; i <= 7; i++) {
      const stored = localStorage.getItem(`camp-checkin-day-${i}`)
      if (stored) {
        const parsed = JSON.parse(stored)
        const completed = [parsed.breakfast, parsed.lunch, parsed.dinner, parsed.tea, parsed.lifestyle].filter(Boolean).length
        data[i] = { completed, mood: parsed.mood || "" }
      }
    }
    setCheckinData(data)
  }, [])

  const enroll = () => {
    localStorage.setItem("camp-enrolled", "true")
    localStorage.setItem("camp-body-type", "qi_deficient")
    localStorage.setItem("camp-plan-type", "with_quiz")
    setEnrolled(true)
  }

  const startCamp = () => {
    const today = new Date().toISOString().split("T")[0]
    localStorage.setItem("camp-start-date", today)
    setStarted(true)
    setStartDate(today)
  }

  const resetDemo = () => {
    localStorage.removeItem("camp-enrolled")
    localStorage.removeItem("camp-start-date")
    localStorage.removeItem("camp-body-type")
    localStorage.removeItem("camp-plan-type")
    for (let i = 1; i <= 7; i++) localStorage.removeItem(`camp-checkin-day-${i}`)
    setEnrolled(false)
    setStarted(false)
    setStartDate(null)
    setCheckinData({})
  }

  const typeInfo = BODY_TYPE_LABELS["qi_deficient"]

  // ===== Not enrolled yet =====
  if (!enrolled) {
    return (
      <>
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Almost There</p>
            <h1 className="font-[family-name:var(--font-display)] text-2xl text-text mb-3 tracking-tight">
              Join the Energy Recovery Camp
            </h1>
            <p className="text-text2 text-sm leading-relaxed max-w-md mx-auto">
              This is a demo of the camp experience. In the live version, you would complete payment here.
              For now, click below to enter the camp and explore the full flow.
            </p>
          </div>

          {/* Simulated pricing cards */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex-1 bg-[rgba(140,45,42,0.04)] rounded-xl p-5 border border-[rgba(140,45,42,0.1)]">
              <p className="text-xs text-text2/60 uppercase tracking-wider mb-1">Know Your Type</p>
              <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">$29.99</p>
              <p className="text-xs text-text2/50 mt-1">30-day access</p>
            </div>
            <div className="flex-1 bg-[rgba(140,45,42,0.08)] rounded-xl p-5 border-2 border-[rgba(140,45,42,0.2)]">
              <p className="text-xs text-accent uppercase tracking-wider mb-1">Includes Pro Quiz</p>
              <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">$59.99</p>
              <p className="text-xs text-text2/50 mt-1">For new users</p>
            </div>
          </div>

          <button
            onClick={enroll}
            className="group inline-flex items-center justify-center w-full px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
          >
            Enter Camp (Demo Mode)
            <span className="ml-2">{"\u2192"}</span>
          </button>

          <p className="text-center text-xs text-text2/40 mt-4">
            No payment required. This is for previewing the camp experience.
          </p>

          <div className="text-center mt-6">
            <Link href="/camp/energy-recovery" className="text-sm text-text2 hover:text-accent no-underline">
              {"\u2190"} Back to camp details
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // ===== Enrolled but not started =====
  if (!started) {
    return (
      <>
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ background: `${typeInfo.color}15` }}
            >
              <span className="text-2xl" style={{ color: typeInfo.color }}>{typeInfo.char}</span>
            </div>
            <p className="text-xs text-text2/50 uppercase tracking-wider mb-2">
              You are enrolled as <span style={{ color: typeInfo.color }}>{typeInfo.name}</span>
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-2xl text-text mb-3 tracking-tight">
              Welcome to Your Energy Recovery Camp
            </h1>
            <p className="text-text2 text-sm leading-relaxed max-w-md mx-auto">
              Before you begin, review your shopping list and gather the ingredients.
              When you are ready, pick a start date and begin Day 1.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(140,45,42,0.08)] text-accent text-sm font-bold flex-shrink-0">
                1
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-text mb-1">Review Shopping List</h3>
                <p className="text-xs text-text2 mb-3">Gather all ingredients and tea materials before starting.</p>
                <Link
                  href="/camp/energy-recovery/prep"
                  className="text-xs text-accent hover:underline font-semibold no-underline"
                >
                  View Shopping List {"\u2192"}
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(140,45,42,0.08)] text-accent text-sm font-bold flex-shrink-0">
                2
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-text mb-1">Pick Your Start Date</h3>
                <p className="text-xs text-text2 mb-3">Give yourself 2-3 days to shop and prepare.</p>
                <button
                  onClick={startCamp}
                  className="px-5 py-2 rounded-full text-xs font-semibold cursor-pointer no-underline transition-all hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
                >
                  Start Today
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(140,45,42,0.08)] text-accent text-sm font-bold flex-shrink-0">
                3
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-text mb-1">Begin Day 1</h3>
                <p className="text-xs text-text2">Once you start, Day 1 unlocks immediately. Complete it to begin your journey.</p>
              </div>
            </div>
          </div>

          <button onClick={resetDemo} className="text-xs text-text2/40 hover:text-text2 no-underline mx-auto block">
            Reset demo data
          </button>
        </main>
        <Footer />
      </>
    )
  }

  // ===== Active camp dashboard =====
  const totalCheckins = Object.values(checkinData).filter((d) => d.completed > 0).length
  const totalCompleted = Object.values(checkinData).reduce((sum, d) => sum + d.completed, 0)
  const maxPossible = 7 * 5
  const completionRate = Math.round((totalCompleted / maxPossible) * 100)

  // Calculate current day based on start date
  const daysSinceStart = startDate
    ? Math.floor((Date.now() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1
    : 1
  const currentDay = Math.min(Math.max(daysSinceStart, 1), 7)

  // Determine which week is unlocked
  const unlockedWeeks = energyRecoveryCamp.weeks.filter((w) => {
    const unlockDay = w.unlockDay
    if (unlockDay === 1) return true
    // Check if previous week's day 4 is checked in (simplified: unlock by day progress)
    return totalCheckins >= unlockDay - 1
  })

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs text-text2/50 uppercase tracking-wider mb-1">
              Day {currentDay} of 30 {"\u00B7"} Started {startDate}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-2xl text-text tracking-tight">
              Energy Recovery Camp
            </h1>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
            style={{ background: `${typeInfo.color}10`, color: typeInfo.color }}
          >
            <span>{typeInfo.char}</span>
            <span>{typeInfo.name}</span>
          </div>
        </div>

        {/* Progress overview */}
        <div className="bg-[var(--color-card-bg)] rounded-2xl border border-[rgba(140,45,42,0.12)] p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-text">Your Progress</h2>
            <span className="text-sm text-text2/60">{completionRate}% complete</span>
          </div>
          <div className="h-3 rounded-full bg-[rgba(140,45,42,0.08)] overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${completionRate}%`, background: `linear-gradient(90deg, ${typeInfo.color}, ${typeInfo.color}cc)` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">{totalCheckins}</p>
              <p className="text-xs text-text2/50">Days checked in</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">{totalCompleted}</p>
              <p className="text-xs text-text2/50">Tasks done</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">{7 - totalCheckins}</p>
              <p className="text-xs text-text2/50">Days remaining</p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex gap-3 mb-8">
          <Link
            href={`/camp/energy-recovery/day/${currentDay}`}
            className="flex-1 group inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm cursor-pointer no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
          >
            Continue Day {currentDay} {"\u2192"}
          </Link>
          <Link
            href="/camp/energy-recovery/prep"
            className="px-5 py-3 rounded-full text-sm font-semibold text-text2 border border-[rgba(140,45,42,0.15)] hover:border-[rgba(140,45,42,0.3)] transition-all no-underline"
          >
            Shopping List
          </Link>
        </div>

        {/* Weekly structure */}
        {energyRecoveryCamp.weeks.map((w) => {
          const isUnlocked = unlockedWeeks.some((uw) => uw.week === w.week)
          const weekDays = Array.from({ length: 7 }, (_, i) => (w.week - 1) * 7 + i + 1).slice(0, w.week === 1 ? 7 : 7)
          return (
            <div
              key={w.week}
              className={`rounded-2xl border p-6 mb-4 ${
                isUnlocked
                  ? "bg-[var(--color-card-bg)] border-[rgba(140,45,42,0.12)]"
                  : "bg-[var(--color-bg2)] border-[rgba(140,45,42,0.06)] opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                    Week {w.week}: {w.theme}
                  </p>
                  <p className="text-xs text-text2/60">
                    {isUnlocked ? "Unlocked" : `Unlocks after Day ${w.unlockDay} check-in`}
                  </p>
                </div>
                {!isUnlocked && (
                  <span className="text-xs text-text2/40">{"\u{1F512}"}</span>
                )}
              </div>

              {/* Day grid */}
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((dayNum) => {
                  const checkin = checkinData[dayNum]
                  const isComplete = checkin && checkin.completed === 5
                  const isPartial = checkin && checkin.completed > 0 && checkin.completed < 5
                  const isToday = dayNum === currentDay

                  return (
                    <Link
                      key={dayNum}
                      href={isUnlocked ? `/camp/energy-recovery/day/${dayNum}` : "#"}
                      className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs transition-all no-underline ${
                        isToday
                          ? "ring-2 ring-accent"
                          : ""
                      }`}
                      style={{
                        background: isComplete
                          ? typeInfo.color
                          : isPartial
                          ? `${typeInfo.color}20`
                          : isUnlocked
                          ? "var(--color-bg)"
                          : "var(--color-bg2)",
                        color: isComplete ? "#fff" : "var(--color-text2)",
                      }}
                    >
                      <span className="font-bold">{dayNum}</span>
                      {isComplete && <span className="text-[8px]">{"\u2713"}</span>}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Week 1 detailed content preview */}
        <div className="mt-8 mb-4">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-1 tracking-wide">
            Week 1: Your Daily Plans
          </h2>
          <p className="text-xs text-text2/50 mb-4">Tap any day to see the full plan and check in</p>
        </div>

        <div className="space-y-3 mb-8">
          {qiDeficientWeek1.map((plan) => {
            const checkin = checkinData[plan.day]
            const isComplete = checkin && checkin.completed === 5
            const isPartial = checkin && checkin.completed > 0 && checkin.completed < 5
            const isToday = plan.day === currentDay

            return (
              <Link
                key={plan.day}
                href={`/camp/energy-recovery/day/${plan.day}`}
                className={`block bg-[var(--color-card-bg)] rounded-xl border p-5 no-underline transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  isToday
                    ? "border-[rgba(140,45,42,0.35)] ring-1 ring-[rgba(140,45,42,0.15)]"
                    : "border-[rgba(140,45,42,0.12)]"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold flex-shrink-0"
                      style={{
                        background: isComplete ? typeInfo.color : `${typeInfo.color}15`,
                        color: isComplete ? "#fff" : typeInfo.color,
                      }}
                    >
                      {isComplete ? "\u2713" : plan.day}
                    </span>
                    <div>
                      <p className="text-xs text-text2/50">Day {plan.day}</p>
                      <p className="text-sm font-semibold text-text">{plan.dayFocus}</p>
                    </div>
                  </div>
                  {isToday && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-[rgba(140,45,42,0.08)] px-2 py-0.5 rounded-full">
                      Today
                    </span>
                  )}
                  {isPartial && (
                    <span className="text-[10px] text-text2/50">{checkin!.completed}/5 done</span>
                  )}
                </div>

                {/* Quick content preview */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent/40">{"\u{1F95E}"}</span>
                    <span className="text-text2 truncate">{plan.breakfast.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent/40">{"\u{1F372}"}</span>
                    <span className="text-text2 truncate">{plan.tea.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent/40">{"\u{1F96A}"}</span>
                    <span className="text-text2 truncate">{plan.lunch.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent/40">{"\u{1F4CD}"}</span>
                    <span className="text-text2 truncate">{plan.lifestyleTip.substring(0, 35)}...</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent/40">{"\u{1F374}"}</span>
                    <span className="text-text2 truncate">{plan.dinner.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent/40">{"\u26A0"}</span>
                    <span className="text-text2 truncate">Avoid: {plan.avoidList[0]}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Locked weeks preview */}
        {[2, 3, 4].map((weekNum) => {
          const weekInfo = energyRecoveryCamp.weeks.find((w) => w.week === weekNum)!
          const isUnlocked = unlockedWeeks.some((uw) => uw.week === weekNum)
          if (isUnlocked) return null
          return (
            <div key={weekNum} className="bg-[var(--color-bg2)] rounded-2xl border border-[rgba(140,45,42,0.06)] p-6 mb-3 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-text2/40">{"\u{1F512}"}</span>
                <div>
                  <p className="text-sm font-semibold text-text2">
                    Week {weekNum}: {weekInfo.theme}
                  </p>
                  <p className="text-xs text-text2/40 mt-0.5">
                    Unlocks after Day {weekInfo.unlockDay} check-in
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        {/* Reset */}
        <div className="text-center mt-8">
          <button onClick={resetDemo} className="text-xs text-text2/40 hover:text-text2 no-underline">
            Reset demo data
          </button>
        </div>
      </main>
      <Footer />
    </>
  )
}
