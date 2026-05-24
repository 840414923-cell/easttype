"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { LIKERT_OPTIONS, calculate27Scores, getPrimaryAndSecondary } from "@/lib/quiz-27"
import { QUIZ_15, QUIZ_15_INDICES, QUIZ_12, calculate15Scores } from "@/lib/quiz-15"
import { useLocale } from "@/components/locale-provider"
import type { LocaleCode } from "@/lib/i18n/types"
import type { ConstitutionId } from "@/lib/types"
import MidReveal from "@/components/mid-reveal"

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
type Phase = "sex" | "phase1" | "mid-reveal" | "phase2" | "completion"

const GENDER_WEIGHTS: Record<Sex, Partial<Record<ConstitutionId, number>>> = {
  female: { blood_stasis: 1.1, qi_stagnant: 1.1, qi_deficient: 1.1 },
  male: { yang_deficient: 1.1, phlegm_damp: 1.1 },
}

function buildFullScores(
  phase1Answers: number[],
  phase2Answers: number[],
): number[] {
  const full27: number[] = new Array(27).fill(0)
  QUIZ_15_INDICES.forEach((origIdx, i) => {
    if (i < phase1Answers.length) full27[origIdx] = phase1Answers[i]
  })
  phase2Answers.forEach((val, i) => {
    const origIdx = [1, 2, 4, 8, 11, 14, 17, 19, 20, 22, 25, 26][i]
    if (origIdx !== undefined) full27[origIdx] = val
  })
  return full27
}

export default function QuizPage() {
  const router = useRouter()
  const { locale, localeCode } = useLocale()
  const l = (obj: Record<string, string>) =>
    localeCode === "en" ? obj.en : localeCode === "zh-TW" ? obj["zh-TW"] : obj.ja
  const t = (en: string, zh: string, ja: string) =>
    localeCode === "en" ? en : localeCode === "zh-TW" ? zh : ja

  const [sex, setSex] = useState<Sex | null>(null)
  const [phase, setPhase] = useState<Phase>("sex")
  const [currentQ, setCurrentQ] = useState(0)
  const [phase1Answers, setPhase1Answers] = useState<number[]>([])
  const [phase2Answers, setPhase2Answers] = useState<number[]>([])
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [midRevealScores, setMidRevealScores] = useState<Record<ConstitutionId, number> | null>(null)
  const [midRevealPrimary, setMidRevealPrimary] = useState<ConstitutionId | null>(null)

  const isPhase1 = phase === "phase1"
  const isPhase2 = phase === "phase2"
  const questions = isPhase1 ? QUIZ_15 : isPhase2 ? QUIZ_12 : QUIZ_15
  const totalQuestions = questions.length
  const answers = isPhase1 ? phase1Answers : phase2Answers
  const progress = ((currentQ + 1) / totalQuestions) * 100
  const currentQuestion = questions[currentQ]

  const phaseLabel = isPhase1
    ? t("Quick Scan · ~3 min", "快速掃描 · 約 3 分鐘", "クイックスキャン · 約3分")
    : t("Deep Analysis · ~2 min", "深度分析 · 約 2 分鐘", "ディープアナリシス · 約2分")

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
      p.set("lang", localeCode)
      if (sex) p.set("sex", sex)
      router.push(`/result?${p.toString()}`)
    },
    [sex, localeCode, router],
  )

  const handleSexSelect = useCallback((s: Sex) => {
    setSex(s)
    setPhase("phase1")
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
      setCurrentQ(0)
      setPhase("phase2")
    },
    [],
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
      setSex(null)
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
        <Nav locale={locale} />
        <CompletionAnimation localeCode={localeCode} />
      </>
    )
  }

  if (phase === "mid-reveal" && midRevealScores && midRevealPrimary) {
    return (
      <>
        <Nav locale={locale} />
        <MidReveal
          scores={midRevealScores}
          primaryId={midRevealPrimary}
          localeCode={localeCode}
          locale={locale}
          onComplete={handleMidRevealComplete}
          onSkip={handleMidRevealSkip}
        />
      </>
    )
  }

  if (phase === "sex") {
    return (
      <>
        <Nav locale={locale} />
        <div className="max-w-lg mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            {t("Step 1 of 2", "第 1 步，共 2 步", "ステップ 1/2")}
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-center mb-4 leading-snug">
            {t("What's your biological sex?", "你的生理性別是？", "生物学的な性別は？")}
          </h1>
          <p className="text-text2 text-center mb-12 leading-relaxed max-w-sm">
            {t(
              "This helps us account for gender-specific patterns in Chinese medicine. Your data stays private.",
              "這幫助我們考量中醫中性別特有的體質傾向。你的資料完全保密。",
              "中医における性別特有の体質パターンを考慮するために使用します。データは完全にプライベートです。"
            )}
          </p>
          <div className="flex gap-4 w-full max-w-xs">
            <button
              onClick={() => handleSexSelect("female")}
              className="flex-1 py-4 rounded-2xl border-[1.5px] border-card-border bg-card-bg text-text cursor-pointer transition-all duration-250 hover:border-[rgba(201,169,110,0.3)] hover:bg-card-hover hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-2">♀</div>
              <div className="font-semibold text-base">
                {t("Female", "女性", "女性")}
              </div>
            </button>
            <button
              onClick={() => handleSexSelect("male")}
              className="flex-1 py-4 rounded-2xl border-[1.5px] border-card-border bg-card-bg text-text cursor-pointer transition-all duration-250 hover:border-[rgba(201,169,110,0.3)] hover:bg-card-hover hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-2">♂</div>
              <div className="font-semibold text-base">
                {t("Male", "男性", "男性")}
              </div>
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Nav
        locale={locale}
        right={
          <div className="flex items-center gap-4">
            <span className="text-xs text-text2">
              {phaseLabel}
            </span>
            <Link href="/" className="text-sm text-text2 hover:text-accent px-4 py-2 no-underline transition-colors">
              {locale.ui.exit}
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
              {t("Quick Scan", "快速掃描", "クイックスキャン")}
            </div>
          )}
          {isPhase2 && (
            <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4 text-center">
              {t("Deep Analysis", "深度分析", "ディープアナリシス")}
            </div>
          )}

          {/* Fixed-height question area — answer options stay in place */}
          <div className="h-[110px] sm:h-[90px] flex items-center justify-center mb-4 px-2">
            <h2 className="font-[family-name:var(--font-display)] text-[17px] sm:text-xl leading-[1.45] text-center">
              {l(currentQuestion.q)}
            </h2>
          </div>

          <Collapsible label={t("Why this question?", "為什麼問這個？", "なぜこの質問？")}>
            <div className="flex items-start gap-2">
              <span className="text-accent text-xs mt-0.5 flex-shrink-0">&#9670;</span>
              <p className="text-sm text-text2 leading-relaxed">
                {l(currentQuestion.theory)}
              </p>
            </div>
          </Collapsible>

          <Collapsible label={t("Think of it this way...", "換個方式想...", "こう考えてみて...")}>
            <p className="text-sm text-text2 leading-relaxed italic opacity-80">
              {l(currentQuestion.bridge)}
            </p>
          </Collapsible>

          <div className="flex flex-col gap-3">
            {LIKERT_OPTIONS.map((opt) => {
              const label = localeCode === "en" ? opt.en : localeCode === "zh-TW" ? opt["zh-TW"] : opt.ja
              return (
                <button
                  key={opt.value}
                  onClick={() => handleLikert(opt.value)}
                  disabled={isTransitioning}
                  className={`w-full text-left p-4 rounded-2xl border-[1.5px] cursor-pointer transition-colors duration-200 flex items-center gap-4 min-h-[56px] ${
                    selectedValue === opt.value
                      ? "border-accent bg-[rgba(201,169,110,0.15)] text-accent"
                      : "border-card-border bg-card-bg text-text hover:border-[rgba(201,169,110,0.3)] hover:bg-card-hover"
                  } disabled:cursor-default`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-semibold opacity-60">
                    {opt.value}
                  </span>
                  <span className="text-base">
                    {label}
                  </span>
                </button>
              )
            })}
	          </div>

          {/* Disclaimer */}
          <p className="text-[9px] text-text2/60 text-center mt-4 leading-relaxed">
            {t(
              "For wellness & self-awareness only. Not medical advice.",
              "僅供養生與自我覺察。非醫療建議。",
              "ウェルネスと自己認識のためのみ。医療アドバイスではありません。"
            )}
          </p>
        </div>
      </div>
    </>
  )
}

function QuizLocaleSelect({ localeCode, setLocaleCode, localeKeys, locales }: {
  localeCode: string
  setLocaleCode: (code: any) => void
  localeKeys: string[]
  locales: Record<string, { label: string }>
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-[rgba(201,163,85,0.15)] bg-[rgba(201,163,85,0.05)] text-text2 hover:text-accent hover:border-[rgba(201,163,85,0.3)] cursor-pointer transition-all duration-200"
      >
        <span>🌐</span>
        <span className="font-medium">{locales[localeCode].label}</span>
        <span className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 min-w-[120px] py-1.5 rounded-xl border border-[rgba(201,163,85,0.15)] bg-[rgba(10,15,30,0.95)] backdrop-blur-xl shadow-lg shadow-black/30 z-50">
          {localeKeys.map((key) => (
            <button
              key={key}
              onClick={() => { setLocaleCode(key); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-xs cursor-pointer transition-colors ${
                localeCode === key
                  ? "text-accent font-semibold bg-[rgba(201,163,85,0.1)]"
                  : "text-text2 hover:text-accent hover:bg-[rgba(201,163,85,0.06)]"
              }`}
            >
              {locales[key].label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Nav({ locale, right }: { locale: { ui: { exit: string } }; right?: React.ReactNode }) {
  const { localeCode, setLocaleCode, localeKeys, locales } = useLocale()
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(10,15,30,0.92)] backdrop-blur-xl border-b border-border px-6 py-4 flex justify-between items-center">
      <Link href="/" className="font-[family-name:var(--font-display)] text-xl font-bold text-text no-underline tracking-wide">
        East<span className="text-accent">Type</span>
      </Link>
      <div className="flex items-center gap-3">
        <QuizLocaleSelect localeCode={localeCode} setLocaleCode={setLocaleCode} localeKeys={localeKeys} locales={locales} />
        {right ?? (
          <Link href="/" className="text-sm text-text2 hover:text-accent px-4 py-2 no-underline transition-colors">
            {locale.ui.exit}
          </Link>
        )}
      </div>
    </nav>
  )
}

function CompletionAnimation({ localeCode }: { localeCode: string }) {
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
            {localeCode === "en" ? "Analysis Complete" : localeCode === "zh-TW" ? "分析完成" : "分析完了"}
          </div>
          <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-text">
            {localeCode === "en" ? "27 Body Signals Collected" : localeCode === "zh-TW" ? "27 個身體訊號已收集" : "27の体のシグナルを収集完了"}
          </div>
        </div>

        <div className={`mt-4 transition-all duration-700 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
          <div className="text-sm text-text2 mt-2">
            {localeCode === "en" ? "Analyzing your constitution..." : localeCode === "zh-TW" ? "正在分析你的體質..." : "体質を分析中..."}
          </div>
        </div>
      </div>
    </div>
  )
}
