"use client"

import { useState, useEffect } from "react"
import type { ConstitutionId } from "@/lib/types"
import { TYPES } from "@/lib/constitution-data"
import { QUIZ_12, QUIZ_12_INDICES } from "@/lib/quiz-15"
import { LIKERT_OPTIONS } from "@/lib/quiz-27"
import type { LocaleCode } from "@/lib/i18n/types"

function Collapsible({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2.5 rounded bg-[rgba(201,163,85,0.05)] border border-[rgba(201,163,85,0.12)] cursor-pointer transition-colors hover:border-[rgba(201,163,85,0.25)] flex items-center justify-between gap-2"
      >
        <span className="text-xs text-accent tracking-wide">{label}</span>
        <span className={`text-accent text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>&#9662;</span>
      </button>
      {open && (
        <div className="px-4 py-3 mt-1.5 rounded bg-[rgba(201,163,85,0.03)] border border-[rgba(201,163,85,0.08)]">
          {children}
        </div>
      )}
    </div>
  )
}

const RADAR_AXES: ConstitutionId[] = [
  "qi_deficient", "yang_deficient", "yin_deficient",
  "phlegm_damp", "damp_heat", "blood_stasis",
  "qi_stagnant", "sensitive",
]

function t(localeCode: LocaleCode, en: string, zh: string, ja: string) {
  return localeCode === "en" ? en : localeCode === "zh-TW" ? zh : ja
}

interface RadarChartProps {
  scores: Record<ConstitutionId, number>
  primaryId: ConstitutionId
  animated: boolean
  localeCode: LocaleCode
}

function RadarChart({ scores, primaryId, animated, localeCode }: RadarChartProps) {
  const size = 220
  const cx = size / 2
  const cy = size / 2
  const radius = 80
  const n = RADAR_AXES.length
  const angleStep = (2 * Math.PI) / n
  const primaryColor = TYPES[primaryId].color

  const points = RADAR_AXES.map((id, i) => {
    const angle = angleStep * i - Math.PI / 2
    const val = Math.min(scores[id], 100) / 100
    const r = radius * val * (animated ? 1 : 0)
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      labelX: cx + (radius + 22) * Math.cos(angle),
      labelY: cy + (radius + 22) * Math.sin(angle),
      id,
    }
  })

  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ")

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto max-w-[220px] w-full">
      {[0.25, 0.5, 0.75, 1].map((ring) => (
        <polygon
          key={ring}
          points={RADAR_AXES.map((_, i) => {
            const angle = angleStep * i - Math.PI / 2
            const r = radius * ring
            return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
          }).join(" ")}
          fill="none"
          stroke="rgba(201,163,85,0.12)"
          strokeWidth="1"
        />
      ))}
      {RADAR_AXES.map((_, i) => {
        const angle = angleStep * i - Math.PI / 2
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={cx + radius * Math.cos(angle)}
            y2={cy + radius * Math.sin(angle)}
            stroke="rgba(201,163,85,0.08)"
            strokeWidth="1"
          />
        )
      })}
      <polygon
        points={polygon}
        fill={`${primaryColor}20`}
        stroke={primaryColor}
        strokeWidth="2"
        className={animated ? "transition-all duration-1000 ease-out" : ""}
      />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill={primaryColor} className={animated ? "transition-all duration-1000 ease-out" : ""} />
      ))}
      {points.map((p, i) => (
        <text
          key={`l${i}`}
          x={p.labelX}
          y={p.labelY}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-text2"
          fontSize="8"
          fontWeight="500"
        >
          {localeCode === "en"
            ? TYPES[p.id].en.length > 14
              ? TYPES[p.id].en.split(" ").slice(0, 2).join(" ")
              : TYPES[p.id].en
            : TYPES[p.id].zh}
        </text>
      ))}
    </svg>
  )
}

interface MidRevealProps {
  scores: Record<ConstitutionId, number>
  primaryId: ConstitutionId
  localeCode: LocaleCode
  locale: { types: Record<string, { nickname: string; cardHeadline: string; predictions: string[] }> }
  onComplete: (extraAnswers: number[]) => void
  onSkip: () => void
}

export default function MidReveal({ scores, primaryId, localeCode, locale, onComplete, onSkip }: MidRevealProps) {
  const [phase, setPhase] = useState<"reveal" | "quiz" | "done">("reveal")
  const [animated, setAnimated] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [extraAnswers, setExtraAnswers] = useState<number[]>([])
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const primaryType = TYPES[primaryId]
  const viral = locale.types[primaryId] ?? locale.types.balanced
  const remainingCount = QUIZ_12_INDICES.length

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleStartPhase2 = () => {
    setPhase("quiz")
    setAnimated(false)
  }

  const handleLikert = (value: number) => {
    if (isTransitioning) return
    setSelectedValue(value)
    setIsTransitioning(true)

    const newExtra = [...extraAnswers, value]
    setExtraAnswers(newExtra)

    const nextQ = currentQ + 1
    setTimeout(() => {
      if (nextQ < remainingCount) {
        setCurrentQ(nextQ)
        setSelectedValue(null)
        setIsTransitioning(false)
      } else {
        onComplete(newExtra)
      }
    }, 350)
  }

  if (phase === "quiz") {
    const question = QUIZ_12[currentQ]
    const l = (obj: Record<string, string>) =>
      localeCode === "en" ? obj.en : localeCode === "zh-TW" ? obj["zh-TW"] : obj.ja
    const progress = ((currentQ + 1) / remainingCount) * 100

    return (
      <div className="max-w-2xl mx-auto px-6 min-h-screen flex flex-col">
        <div className="flex items-center gap-4 mb-6 mt-5">
          <button
            onClick={() => {
              if (currentQ > 0 && !isTransitioning) {
                setCurrentQ(currentQ - 1)
                setSelectedValue(null)
                setExtraAnswers(extraAnswers.slice(0, -1))
              }
            }}
            disabled={isTransitioning}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-card-border bg-card-bg cursor-pointer transition-all text-sm text-text2 hover:text-accent hover:border-[rgba(201,163,85,0.3)]"
          >
            &#8592;
          </button>
          <div className="flex-1 h-[3px] bg-border rounded overflow-hidden">
            <div
              className="h-full rounded transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #C9A355, #E0C878)",
              }}
            />
          </div>
          <div className="text-xs text-text2 font-medium whitespace-nowrap">
            {currentQ + 1} / {remainingCount}
          </div>
        </div>

        <div className="max-w-xl mx-auto w-full">
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-4 text-center">
            {t(localeCode, "Deep Analysis", "深度分析", "ディープアナリシス")}
          </div>
          <div className="h-[110px] sm:h-[90px] flex items-center justify-center mb-4 px-2">
            <h2 className="font-[family-name:var(--font-display)] text-[17px] sm:text-xl leading-[1.45] text-center">
              {l(question.q)}
            </h2>
          </div>
          <Collapsible label={t(localeCode, "Why this question?", "為什麼問這個？", "なぜこの質問？")}>
            <div className="flex items-start gap-2">
              <span className="text-accent text-xs mt-0.5 flex-shrink-0">&#9670;</span>
              <p className="text-sm text-text2 leading-relaxed">{l(question.theory)}</p>
            </div>
          </Collapsible>
          <Collapsible label={t(localeCode, "Think of it this way...", "換個方式想...", "こう考えてみて...")}>
            <p className="text-sm text-text2 leading-relaxed italic opacity-80">{l(question.bridge)}</p>
          </Collapsible>
          <div className="flex flex-col gap-3 mt-5">
            {LIKERT_OPTIONS.map((opt) => {
              const label = localeCode === "en" ? opt.en : localeCode === "zh-TW" ? opt["zh-TW"] : opt.ja
              return (
                <button
                  key={opt.value}
                  onClick={() => handleLikert(opt.value)}
                  disabled={isTransitioning}
                  className={`w-full text-left p-4 rounded border-[1.5px] cursor-pointer transition-colors duration-200 flex items-center gap-4 min-h-[56px] ${
                    selectedValue === opt.value
                      ? "border-accent bg-[rgba(201,163,85,0.15)] text-accent"
                      : "border-card-border bg-card-bg text-text hover:border-[rgba(201,163,85,0.3)] hover:bg-card-hover"
                  } disabled:cursor-default`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-semibold opacity-60">
                    {opt.value}
                  </span>
                  <span className="text-base">{label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const shareText = t(
    localeCode,
    `I just found out my Eastern body type is "${viral.nickname}"... and it explains EVERYTHING 🤯 Take the free quiz:`,
    `我剛測出我的東方體質是「${viral.nickname}」… 完全說中我了 🤯 免費測驗：`,
    `東洋の体質タイプは「${viral.nickname}」だった… 全部当てはまる 🤯 無料分析：`,
  )
  const shareUrl = typeof window !== "undefined" ? window.location.origin : ""

  return (
    <div className="max-w-lg mx-auto px-6 py-6 sm:py-12 min-h-screen flex flex-col items-center justify-center">
      {/* Animated header */}
      <div className={`transition-all duration-700 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="text-accent text-xs uppercase tracking-[0.2em] mb-2 text-center">
          {t(localeCode, "Preliminary Result", "初步結果", "一次結果")}
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl text-center mb-1 leading-snug">
          {t(localeCode, "We found your type", "我們找到你的體質了", "あなたのタイプが見つかりました")}
        </h1>
      </div>

      {/* Radar chart — compact */}
      <div className={`mt-4 transition-all duration-1000 delay-200 ${animated ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
        <RadarChart scores={scores} primaryId={primaryId} animated={animated} localeCode={localeCode} />
      </div>

      {/* Type card — merged with prediction */}
      <div className={`mt-4 w-full max-w-md transition-all duration-700 delay-400 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div
          className="rounded-xl border p-4 text-center"
          style={{
            borderColor: `${primaryType.color}30`,
            background: `linear-gradient(135deg, ${primaryType.color}10, ${primaryType.color}05)`,
          }}
        >
          <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl mb-0.5" style={{ color: primaryType.color }}>
            {primaryType.en}
          </div>
          <div className="text-sm font-semibold text-text mb-0.5">{viral.nickname}</div>
          <div className="text-xs text-text2 mb-2">{primaryType.zh} · {primaryType.zhPy}</div>
          <div className="text-sm italic text-text2 opacity-80 leading-relaxed">
            &ldquo;{primaryType.line}&rdquo;
          </div>
        </div>
      </div>

      {/* Hook — irresistible reason to continue */}
      <div className={`mt-3 w-full max-w-md transition-all duration-700 delay-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div
          className="rounded px-4 py-3 text-center"
          style={{
            borderLeft: `3px solid ${primaryType.color}`,
            background: `linear-gradient(90deg, ${primaryType.color}08, transparent)`,
          }}
        >
          <div className="text-sm text-text leading-relaxed">
            &ldquo;{viral.predictions[0]}&rdquo;
          </div>
          <div className="text-xs text-accent mt-1.5 font-medium">
            {t(localeCode, "This is only 70% accurate. Keep going?", "這只有 70% 準確。繼續嗎？", "これは70%の精度です。続けますか？")}
          </div>
        </div>
      </div>

      {/* CTA buttons */}
      <div className={`mt-5 w-full max-w-md transition-all duration-700 delay-600 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <button
          onClick={handleStartPhase2}
          className="w-full py-4 rounded bg-gradient-to-r from-accent to-accent2 text-bg font-semibold text-base cursor-pointer transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg"
        >
          {t(localeCode, "Unlock 95% Accuracy →", "解鎖 95% 準確率 →", "95%の精度をアンロック →")}
        </button>
        <div className="text-center text-xs text-text2 opacity-50 mt-1">
          {t(
            localeCode,
            `Answer ${remainingCount} more · ~2 min · Free`,
            `再答 ${remainingCount} 題 · 約 2 分鐘 · 免費`,
            `あと${remainingCount}問 · 約2分 · 無料`,
          )}
        </div>

        <button
          onClick={onSkip}
          className="w-full mt-3 py-2 text-text2 text-xs cursor-pointer hover:text-accent transition-colors bg-transparent border-none"
        >
          {t(localeCode, "Skip — show basic result", "跳過 — 顯示基本結果", "スキップ — 基本結果を見る")}
        </button>

        <div className="mt-3 flex justify-center">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text2 hover:text-accent transition-colors px-3 py-2 rounded border border-card-border bg-card-bg"
          >
            {t(localeCode, "Share the Mystery →", "分享這個懸念 →", "ミステリーをシェア →")}
          </a>
        </div>
      </div>
    </div>
  )
}
