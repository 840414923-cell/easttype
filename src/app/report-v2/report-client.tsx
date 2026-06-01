"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useState, useEffect } from "react"
import Link from "next/link"
import { TYPES } from "@/lib/constitution-data"
import { getJsonReport, getProJsonReport, t } from "@/lib/reports-json"
import type { Sex } from "@/lib/reports-json"
import type { ConstitutionId } from "@/lib/types"
import type { ReportBasic, ReportPro } from "@/lib/reports-json"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CreemCheckout } from "@creem_io/nextjs"

const CREEM_PRODUCT_PRO = process.env.NEXT_PUBLIC_CREEM_PRODUCT_PRO!

const SEASON_KEYS = ["spring", "summer", "autumn", "winter"] as const
const SEASON_LABELS: Record<string, Record<string, string>> = {
  en: { spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" },
  "zh-TW": { spring: "春季", summer: "夏季", autumn: "秋季", winter: "冬季" },
  ja: { spring: "春", summer: "夏", autumn: "秋", winter: "冬" },
}

function renderMdPlain(text: string) {
  return text
    .replace(/### (.*)/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .split("\n\n")
    .filter((b) => b.trim())
    .map((b) => b.trim())
    .join("\n\n")
}

const UI: Record<string, Record<string, string>> = {
  en: {
    constitution: "Constitution", chinese: "Chinese", nickname: "Nickname", sex: "Sex",
    female: "Female ♀", male: "Male ♂",
    printBtn: "Print", downloadBtn: "Save PDF",
    section1: "Constitution Identity", section2: "Food Therapy", section3: "Seasonal Protocol",
    section4: "Daily Schedule", section5: "Recipe",
    recommended: "Recommended Foods", foodsToLimit: "Foods to Limit",
    foodCol: "Food", tcmCol: "TCM Action", guideCol: "Guidance",
    seasonCol: "Season", protocolCol: "Protocol",
    timeCol: "Time", meridianCol: "Active Meridian", recCol: "Recommendation",
    dailyChecklist: "Daily Checklist",
    tcmPrinciple: "TCM Principle", ingredients: "Ingredients", instructions: "Instructions",
    amountCol: "Amount", wellnessTip: "Wellness Tip: ",
    proCh1Origin: "Origin Story", proCh1Emotion: "Emotional Blueprint",
    proCh2Combos: "Dangerous Combinations", proCh3Drinks: "Seasonal Drinks",
    proCh3Notes: "Seasonal Notes", proCh4Acupoints: "Acupoint Massage Guide",
    proCh6Recipes: "TCM Recipes", proCh7Schedule: "30-Day Lifestyle Plan",
    proCh8Monitor: "30-Day Body Monitor",
    proDayCol: "Day", proRecipeN: "Recipe",
    proUpgradeTitle: "Want the Full Transformation Plan?",
    proUpgradeDesc: "Upgrade to the Full Wellness Report for deep TCM theory, acupoint massage guide, 28-day soup plan, multiple recipes, and a complete lifestyle plan.",
    proUpgradeCta: "Upgrade to Full Report →",
    backToResult: "← Back to Results",
  },
  "zh-TW": {
    constitution: "體質", chinese: "中文名", nickname: "暱稱", sex: "性別",
    female: "女性 ♀", male: "男性 ♂",
    printBtn: "列印", downloadBtn: "下載 PDF",
    section1: "體質身份", section2: "食療方案", section3: "四季調理",
    section4: "每日經絡時刻表", section5: "食療食譜",
    recommended: "推薦食物", foodsToLimit: "宜少食",
    foodCol: "食物", tcmCol: "中醫功效", guideCol: "食用指導",
    seasonCol: "季節", protocolCol: "調理方案",
    timeCol: "時間", meridianCol: "當令經絡", recCol: "建議",
    dailyChecklist: "每日執行清單",
    tcmPrinciple: "中醫原理", ingredients: "食材", instructions: "做法",
    amountCol: "用量", wellnessTip: "實用建議：",
    proCh1Origin: "體質溯源", proCh1Emotion: "情緒藍圖",
    proCh2Combos: "危險飲食組合", proCh3Drinks: "四季茶飲",
    proCh3Notes: "四季提醒", proCh4Acupoints: "穴位按摩指南",
    proCh6Recipes: "中醫食譜", proCh7Schedule: "30天生活計畫",
    proCh8Monitor: "30天身體追蹤",
    proDayCol: "天", proRecipeN: "食譜",
    proUpgradeTitle: "想要完整蛻變計畫？",
    proUpgradeDesc: "升級至完整分析報告，獲得深入中醫理論、穴位按摩指南、28天湯品計畫、多道食譜，以及完整的生活調理方案。",
    proUpgradeCta: "升級至完整報告 →",
    backToResult: "← 返回結果",
  },
  ja: {
    constitution: "体質", chinese: "漢字名", nickname: "ニックネーム", sex: "性別",
    female: "女性 ♀", male: "男性 ♂",
    printBtn: "印刷", downloadBtn: "PDF保存",
    section1: "体質アイデンティティ", section2: "食養処方", section3: "四季の養生",
    section4: "一日の経絡スケジュール", section5: "おすすめレシピ",
    recommended: "おすすめの食材", foodsToLimit: "控えるべき食材",
    foodCol: "食材", tcmCol: "中医効果", guideCol: "食べ方",
    seasonCol: "季節", protocolCol: "養生法",
    timeCol: "時間", meridianCol: "活性経絡", recCol: "アドバイス",
    dailyChecklist: "毎日のチェックリスト",
    tcmPrinciple: "中医原理", ingredients: "材料", instructions: "作り方",
    amountCol: "分量", wellnessTip: "ワンポイント：",
    proCh1Origin: "体質ルーツ", proCh1Emotion: "感情ブループリント",
    proCh2Combos: "危険な食事の組み合わせ", proCh3Drinks: "季節のお茶",
    proCh3Notes: "季節の注意点", proCh4Acupoints: "ツボ按摩ガイド",
    proCh6Recipes: "中医レシピ", proCh7Schedule: "30日ライフスタイルプラン",
    proCh8Monitor: "30日ボディモニター",
    proDayCol: "日", proRecipeN: "レシピ",
    proUpgradeTitle: "完全な変容プランが欲しいですか？",
    proUpgradeDesc: "完全分析レポートにアップグレードして、深い中医理論、ツボ按摩ガイド、28日スーププラン、複数のレシピ、完全なライフスタイルプランを入手しましょう。",
    proUpgradeCta: "完全レポートにアップグレード →",
    backToResult: "← 結果に戻る",
  },
}

/* ── Mobile Reading View ── */

function MobileReading({ report, pro, lc, ui, ct, sex, typeId, isPro }: {
  report: ReportBasic; pro: ReportPro | null; lc: string;
  ui: Record<string, string>; ct: typeof TYPES.balanced; sex: Sex;
  typeId: ConstitutionId; isPro: boolean
}) {
  const seasonLabels = SEASON_LABELS[lc]
  const typeName = lc === "en" ? ct.en : lc === "zh-TW" ? ct.zh.replace("质", "質") : ct.zh

  return (
    <div className="px-5 py-6 space-y-8 text-text leading-relaxed max-w-full overflow-hidden">

      {/* Type header */}
      <div className="text-center pb-4 border-b border-card-border">
        <div className="text-accent text-xs uppercase tracking-wider mb-2">EastType · {isPro ? "Full Analysis" : "Body Profile"}</div>
        <h1 className="text-2xl font-bold mb-1" style={{ color: ct.color }}>{typeName}</h1>
        <div className="text-[15px] text-text2">{ct.zh} · {ct.zhPy} · {sex === "female" ? ui.female : ui.male}</div>
      </div>

      {/* Ch1: Identity / Origin */}
      {isPro && pro ? (
        <>
          <Section title={ui.proCh1Origin} color={ct.color}>
            <TextBlock>{renderMdPlain(t(pro.ch1Origin))}</TextBlock>
          </Section>
          <Section title={ui.proCh1Emotion} color={ct.color}>
            <TextBlock>{renderMdPlain(t(pro.ch1Emotion))}</TextBlock>
          </Section>
        </>
      ) : (
        <Section title={ui.section1} color={ct.color}>
          <TextBlock>{renderMdPlain(t(report.ch1Identity))}</TextBlock>
        </Section>
      )}

      {/* Ch2: Foods */}
      <Section title={ui.section2} color={ct.color}>
        <div className="text-accent text-xs font-bold uppercase tracking-wider mb-3">{ui.recommended}</div>
        <div className="space-y-3">
          {report.ch2FoodsLove.map((food, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-bold text-base">{t(food.name)}</span>
                <span className="text-[15px] text-text2">{food.nameZh}</span>
              </div>
              <div className="text-[15px] text-accent mb-1 break-words">{t(food.tcmAction)}</div>
              <div className="text-[15px] text-text2 break-words">{t(food.desc)}</div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="text-base font-bold mb-2" style={{ color: "#b85450" }}>{ui.foodsToLimit}</div>
          <div className="flex flex-wrap gap-2">
            {report.ch2FoodsAvoid.map((item, i) => (
              <span key={i} className="text-[15px] bg-card-bg border border-card-border rounded-full px-3 py-1 text-text2">
                ✕ {t(item)}
              </span>
            ))}
          </div>
        </div>
        {/* Pro combos */}
        {isPro && pro && (
          <div className="mt-4 space-y-3">
            {pro.ch2Combos.map((combo, i) => (
              <div key={i} className="border-l-2 pl-3" style={{ borderColor: "#b85450" }}>
                <TextBlock>{renderMdPlain(t(combo))}</TextBlock>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Ch3: Seasonal */}
      <Section title={ui.section3} color={ct.color}>
        <div className="bg-card-bg border border-card-border rounded-lg p-3 mb-4 border-l-2" style={{ borderLeftColor: ct.color }}>
          <TextBlock>{t(report.ch3Seasonal.highlight)}</TextBlock>
        </div>
        <div className="space-y-2">
          {report.ch3Seasonal.tips.map((tip, i) => {
            const txt = t(tip)
            const parts = txt.split("—")
            return (
              <div key={i} className="flex gap-2 text-[15px]">
                <span className="text-accent font-bold whitespace-nowrap">{parts[0]?.trim()}</span>
                <span className="text-text2">{parts.slice(1).join("—").trim()}</span>
              </div>
            )
          })}
        </div>
        {isPro && pro && (
          <>
            <div className="mt-4 text-accent text-xs font-bold uppercase tracking-wider">{ui.proCh3Drinks}</div>
            <div className="space-y-2 mt-2">
              {SEASON_KEYS.map((s) => (
                <div key={s} className="text-[15px]">
                  <span className="text-accent font-bold">{seasonLabels[s]}：</span>
                  <span className="text-text2">{t(pro.ch3SeasonDrinks[s])}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-accent text-xs font-bold uppercase tracking-wider">{ui.proCh3Notes}</div>
            <div className="space-y-2 mt-2">
              {SEASON_KEYS.map((s) => (
                <div key={s} className="text-[15px]">
                  <span className="text-accent font-bold">{seasonLabels[s]}：</span>
                  <span className="text-text2">{t(pro.ch3SeasonNotes[s])}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </Section>

      {/* Ch4: Daily Schedule */}
      <Section title={ui.section4} color={ct.color}>
        <div className="space-y-3">
          {report.ch4DailyRhythm.map((row, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent font-bold text-base">{row.time}</span>
                <span className="text-[15px] text-text2">{t(row.meridian)}</span>
              </div>
              <div className="text-[15px] text-text2">{t(row.desc).replace(/\*\*/g, "")}</div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{ui.dailyChecklist}</div>
          <div className="space-y-1.5">
            {report.ch4Checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-[15px] text-text2">
                <span className="text-accent">☐</span>
                <span>{t(item)}</span>
              </div>
            ))}
          </div>
        </div>
        {isPro && pro && (
          <div className="mt-4 space-y-3">
            {pro.ch4Acupoints.map((point, i) => (
              <div key={i} className="border-l-2 pl-3" style={{ borderColor: ct.color }}>
                <TextBlock>{renderMdPlain(t(point))}</TextBlock>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Ch5: Recipe(s) */}
      <Section title={ui.section5} color={ct.color}>
        <MobileRecipe recipe={report.recipe} lc={lc} ui={ui} />
        {isPro && pro && pro.ch6Recipes.map((recipe, i) => (
          <div key={i} className="mt-6">
            <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{ui.proRecipeN} {i + 1}</div>
            <MobileRecipe recipe={recipe} lc={lc} ui={ui} />
          </div>
        ))}
      </Section>

      {/* Pro: Schedule & Monitor */}
      {isPro && pro && (
        <>
          <Section title={ui.proCh7Schedule} color={ct.color}>
            <div className="space-y-2">
              {pro.ch7Schedule.rows.map((row) => (
                <div key={row.day} className="bg-card-bg border border-card-border rounded-lg p-3 text-[15px]">
                  <div className="text-accent font-bold mb-1">{ui.proDayCol} {row.day}</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-text2 text-[15px]">
                    <div>🌅 {row.wakeTime}</div>
                    <div>🍽 {row.breakfast}</div>
                    <div>🏃 {row.exercise}</div>
                    <div>💧 {row.water}</div>
                    <div>🚫 {row.avoidCheck}</div>
                    <div>🌙 {row.bedtime}</div>
                    <div>😊 {row.mood}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-accent italic mt-2">{t(pro.ch7Schedule.footer)}</div>
          </Section>
          <Section title={ui.proCh8Monitor} color={ct.color}>
            <div className="space-y-2">
              {pro.ch8Monitor.rows.map((row) => (
                <div key={row.day} className="bg-card-bg border border-card-border rounded-lg p-3 text-[15px]">
                  <div className="text-accent font-bold mb-1">{ui.proDayCol} {row.day}</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-text2 text-xs">
                    {pro.ch8Monitor.headers.map((h, hi) => (
                      <div key={hi}>{t(h)}: ___</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-accent italic mt-2">{t(pro.ch8Monitor.footer)}</div>
          </Section>
        </>
      )}

      {/* Upgrade banner for basic */}
      {!isPro && (
        <div className="border-2 border-dashed border-accent rounded-xl p-5 text-center bg-[rgba(201,163,85,0.04)]">
          <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{ui.proUpgradeTitle}</div>
          <p className="text-[15px] text-text2 mb-3">{ui.proUpgradeDesc}</p>
          <CreemCheckout
            productId={CREEM_PRODUCT_PRO}
            successUrl={`/success?type=${typeId}&sex=${sex}&plan=pro`}
            metadata={{ type: typeId, sex, plan: "pro" }}
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold cursor-pointer bg-gradient-to-r from-accent to-accent2 text-bg">
              {ui.proUpgradeCta}
            </div>
          </CreemCheckout>
        </div>
      )}
    </div>
  )
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1 h-5 rounded-full flex-shrink-0" style={{ background: color }} />
        <h2 className="text-lg font-bold tracking-wide">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function TextBlock({ children }: { children: string }) {
  return (
    <div className="text-[15px] text-text2 leading-relaxed whitespace-pre-line break-words">
      {children}
    </div>
  )
}

function MobileRecipe({ recipe, lc, ui }: { recipe: { title: { en: string; "zh-TW": string; ja: string }; titleZh: string; ingredients: { name: { en: string; "zh-TW": string; ja: string }; aliases: string; amount: string }[]; tcmPrinciple: { en: string; "zh-TW": string; ja: string }; steps: { en: string; "zh-TW": string; ja: string }[]; tip: { en: string; "zh-TW": string; ja: string } }; lc: string; ui: Record<string, string> }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-4">
      <div className="font-bold text-base mb-0.5">{t(recipe.title)}</div>
      <div className="text-[15px] text-accent mb-3">{recipe.titleZh}</div>
      <div className="text-xs text-text2 uppercase tracking-wider mb-1">{ui.tcmPrinciple}</div>
      <div className="text-[15px] text-text2 mb-3">{t(recipe.tcmPrinciple)}</div>
      <div className="text-xs text-text2 uppercase tracking-wider mb-1">{ui.ingredients}</div>
      <div className="space-y-1 mb-3">
        {recipe.ingredients.map((ing, i) => (
          <div key={i} className="flex justify-between text-[15px]">
            <span className="font-medium text-text">{t(ing.name)}</span>
            <span className="text-text2">{ing.amount}</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-text2 uppercase tracking-wider mb-1">{ui.instructions}</div>
      <ol className="space-y-1.5 mb-3">
        {recipe.steps.map((step, i) => (
          <li key={i} className="flex gap-2 text-[15px] text-text2">
            <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
            <span>{t(step)}</span>
          </li>
        ))}
      </ol>
      <div className="bg-bg rounded-lg px-3 py-2">
        <span className="text-[15px] font-bold text-accent">{ui.wellnessTip}</span>
        <span className="text-[15px] text-text2">{t(recipe.tip)}</span>
      </div>
    </div>
  )
}

function ReportV2Content() {
  const params = useSearchParams()
  const locale = { types: {} as Record<string, { nickname: string }> }
  const lc = "en"
  const ui = UI[lc]

  const typeId = (params.get("type") ?? "qi_deficient") as ConstitutionId
  const sex = (params.get("sex") ?? "female") as Sex
  const isPro = params.get("plan") === "pro"

  const ct = TYPES[typeId] ?? TYPES.qi_deficient

  const [report, setReport] = useState<ReportBasic | null>(null)
  const [proReport, setProReport] = useState<ReportPro | null>(null)

  useEffect(() => {
    getJsonReport(typeId, sex).then(setReport)
    if (isPro) getProJsonReport(typeId, sex).then(setProReport)
  }, [typeId, sex, isPro])

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text2">
        Loading report...
      </div>
    )
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text2">
        Report not found. <Link href="/quiz" className="text-accent ml-2">Take the quiz</Link>
      </div>
    )
  }

  // Build result page URL for back navigation
  const resultUrl = `/result?primary=${typeId}${sex ? `&sex=${sex}` : ""}${isPro ? "&plan=pro" : ""}&scores=balanced:0`

  const handleSavePdf = () => {
    const el = document.getElementById("report-a4")
    if (!el) return
    import("html2pdf.js").then((mod) => {
      const html2pdf = mod.default
      const opt = {
        margin: [10, 8, 10, 8],
        filename: `EastType-${ct.en.replace(/\s+/g, "-")}-Report.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      }
      html2pdf().set(opt as any).from(el).save()
    })
  }

  return (
    <>
      {/* Desktop Nav — full layout */}
      <div className="hidden sm:block">
        <Nav
          right={
            <div className="flex items-center gap-2">
              <Link href={resultUrl} className="text-sm text-text2 hover:text-accent px-2 py-1.5 no-underline transition-colors">
                {ui.backToResult}
              </Link>
              <button
                onClick={handleSavePdf}
                className="text-sm text-accent font-semibold px-3 py-1.5 cursor-pointer bg-transparent border border-accent rounded-full hover:bg-[rgba(201,169,110,0.1)]"
              >
                {ui.downloadBtn}
              </button>
            </div>
          }
        />
      </div>

      {/* Mobile Nav — minimal, just back + logo */}
      <div className="sm:hidden sticky top-0 z-50 bg-[rgba(26,20,16,0.95)] backdrop-blur-xl border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={resultUrl} className="text-accent text-sm no-underline">←</Link>
          <span className="font-[family-name:var(--font-display)] text-base font-bold text-text tracking-wide">
            East<span className="text-accent">Type</span>
          </span>
        </div>
        <button
          onClick={handleSavePdf}
          className="text-xs text-accent font-semibold px-3 py-1.5 cursor-pointer bg-transparent border border-accent/40 rounded-full"
        >
          {ui.downloadBtn}
        </button>
      </div>

      {/* ── Mobile reading view ── */}
      <div className="sm:hidden max-w-full overflow-x-hidden">
        <div className="max-w-lg mx-auto">
          <MobileReading
            report={report} pro={proReport} lc={lc} ui={ui}
            ct={ct} sex={sex} typeId={typeId} isPro={isPro}
          />
        </div>
      </div>

      {/* ── Desktop / PDF: A4 formatted report ── */}
      <div className="hidden sm:block overflow-x-auto">
        <A4Report
          report={report} pro={proReport} lc={lc} ui={ui}
          ct={ct} sex={sex} typeId={typeId} isPro={isPro}
          locale={locale}
        />
      </div>

      <Footer />
    </>
  )
}

/* ── A4 Report (desktop + PDF generation target) ── */

const HEADER_TEXT: Record<string, { institution: string; title: string; disclaimer1: string; disclaimer2: string; warning: string }> = {
  en: {
    institution: "EastType · Traditional Chinese Medicine",
    title: "BODY PROFILE REPORT",
    disclaimer1: "基於中醫千年經驗的體質分析",
    disclaimer2: "Based on over 3,000 years of Traditional Chinese Medicine wisdom.",
    warning: "This report is for health conditioning purposes only and does not constitute medical diagnosis or treatment.",
  },
  "zh-TW": {
    institution: "EastType · 傳統中醫",
    title: "體質報告",
    disclaimer1: "基於中醫千年經驗的體質分析",
    disclaimer2: "基於超過三千年傳統中醫藥的調理智慧。",
    warning: "本報告僅供健康調理參考，不構成醫療診斷或治療建議。",
  },
  ja: {
    institution: "EastType · 伝統中医学",
    title: "体質レポート",
    disclaimer1: "基於中醫千年經驗的體質分析",
    disclaimer2: "3000年以上の伝統中医学の調理の知恵に基づいています。",
    warning: "本レポートは健康調理の参考のみを目的としており、医療診断や治療を構成するものではありません。",
  },
}

const A4_UI: Record<string, Record<string, string>> = {
  en: {
    constitution: "Constitution", chinese: "Chinese", nickname: "Nickname", sex: "Sex",
    female: "Female ♀", male: "Male ♂",
    letterP1: "Thank you for completing the assessment with patience and honesty. This report is grounded in over three thousand years of Traditional Chinese Medicine wellness wisdom — a system that has observed, refined, and validated constitutional patterns across countless generations.",
    letterP2: "We encourage you to print this report and bring it to a conversation with a licensed TCM practitioner near you. Think of it as a starting point — not a final verdict — for exploring a healthier way of living that honors your unique constitution.",
    section1: "CONSTITUTION IDENTITY", section2: "FOOD THERAPY GUIDE", section3: "SEASONAL PROTOCOL",
    section4: "DAILY MERIDIAN SCHEDULE", section5: "RECOMMENDED RECIPE",
    foodCol: "Food", aliasCol: "Also Known As", tcmCol: "TCM Action", guideCol: "Guidance",
    recommended: "Recommended Foods", foodsToLimit: "Foods to Limit",
    seasonCol: "Season", protocolCol: "Protocol",
    timeCol: "Time", meridianCol: "Active Meridian", recCol: "Recommendation",
    dailyChecklist: "Daily Checklist", checkOff: "Check off as you go",
    tcmPrinciple: "TCM Principle", ingredients: "Ingredients", instructions: "Instructions",
    ingredientCol: "Ingredient", amountCol: "Amount",
    wellnessTip: "Wellness Tip: ",
    footer: "Based on Traditional Chinese Medicine constitutional theory · Health conditioning reference only, not medical advice",
    proTitle: "CONSTITUTION WELLNESS REPORT",
    proCh1Origin: "ORIGIN STORY", proCh1Emotion: "EMOTIONAL BLUEPRINT",
    proCh2Combos: "DANGEROUS COMBINATIONS", proCh3Drinks: "SEASONAL DRINKS",
    proCh3Notes: "SEASONAL NOTES", proCh4Acupoints: "ACUPOINT MASSAGE GUIDE",
    proCh6Recipes: "TCM RECIPES", proCh7Schedule: "30-DAY LIFESTYLE PLAN",
    proCh8Monitor: "30-DAY BODY MONITOR",
    proDayCol: "Day", proRecipeN: "Recipe",
    proUpgradeTitle: "Want the Full Transformation Plan?",
    proUpgradeDesc: "Upgrade to the Full Wellness Report for deep TCM theory, acupoint massage guide, 28-day soup plan (4 weeks), multiple recipes, and a complete lifestyle plan.",
    proUpgradeCta: "Upgrade to Full Report →",
    proLetterP1: "This is your Full Constitution Diagnostic Report — a comprehensive guide built on over 3,000 years of Traditional Chinese Medicine wellness wisdom. It includes deep TCM theory, acupoint massage, seasonal drinks, multiple recipes, and a complete 30-day lifestyle plan.",
    proLetterP2: "We recommend printing this report and keeping it where you can reference it daily. The 30-day plan and monitoring tracker are designed for active use — fill them in as you go. Consider sharing this with a licensed TCM practitioner for personalized guidance.",
  },
  "zh-TW": {
    constitution: "體質", chinese: "中文名", nickname: "暱稱", sex: "性別",
    female: "女性 ♀", male: "男性 ♂",
    letterP1: "感謝您耐心且認真地完成了這份測試。本報告根基於超過三千年的中醫調理智慧——這套體系經歷了無數世代的觀察、精煉與驗證，對不同體質的辨識累積了深厚的經驗。",
    letterP2: "我們鼓勵您將本報告列印出來，帶給您附近有執照的中醫師看一看，當作一個起點——而非最終定論——來探索更健康、更符合您獨特體質的生活方式。",
    section1: "體質身份", section2: "食療方案", section3: "四季調理",
    section4: "每日經絡時刻表", section5: "食療食譜",
    foodCol: "食物", aliasCol: "其他名稱", tcmCol: "中醫功效", guideCol: "食用指導",
    recommended: "推薦食物", foodsToLimit: "宜少食",
    seasonCol: "季節", protocolCol: "調理方案",
    timeCol: "時間", meridianCol: "當令經絡", recCol: "建議",
    dailyChecklist: "每日執行清單", checkOff: "逐項勾選",
    tcmPrinciple: "中醫原理", ingredients: "食材", instructions: "做法",
    ingredientCol: "食材", amountCol: "用量",
    wellnessTip: "實用建議：",
    footer: "基於傳統中醫體質學理論 · 僅供健康調理參考，不作為醫療診斷或治療依據",
    proTitle: "體質完整分析報告",
    proCh1Origin: "體質溯源", proCh1Emotion: "情緒藍圖",
    proCh2Combos: "危險飲食組合", proCh3Drinks: "四季茶飲",
    proCh3Notes: "四季提醒", proCh4Acupoints: "穴位按摩指南",
    proCh6Recipes: "中醫食譜", proCh7Schedule: "30天生活計畫",
    proCh8Monitor: "30天身體追蹤",
    proDayCol: "天", proRecipeN: "食譜",
    proUpgradeTitle: "想要完整蛻變計畫？",
    proUpgradeDesc: "升級至完整分析報告，獲得深入中醫理論、穴位按摩指南、28天湯品計畫、多道食譜，以及完整的生活調理方案。",
    proUpgradeCta: "升級至完整報告 →",
    proLetterP1: "這是您的完整體質分析報告——一份基於超過三千年中醫調理智慧的综合指南。包含深入的中醫理論、穴位按摩、四季茶飲、多道食譜，以及完整的30天生活計畫。",
    proLetterP2: "我們建議您將本報告列印出來，放在每天可以參考的地方。30天計畫和追蹤表是為了實際使用而設計的——請逐日填寫。您也可以與有執照的中醫師分享本報告，獲取個人化的調理建議。",
  },
  ja: {
    constitution: "体質", chinese: "漢字名", nickname: "ニックネーム", sex: "性別",
    female: "女性 ♀", male: "男性 ♂",
    letterP1: "忍耐強くテストを完了していただき、ありがとうございます。本レポートは、3000年以上の伝統中医学の調理の知恵に基づいています。この体系は、無数の世代にわたる観察、洗練、検証を経て、体質パターンの識別に深い経験を蓄積してきました。",
    letterP2: "このレポートを印刷して、お近くのライセンスを持つ中医師に見せることをお勧めします。最終的な結論ではなく、あなた独自の体質に合ったより健康的なライフスタイルを探求するための出発点としてご活用ください。",
    section1: "体質アイデンティティ", section2: "食療処方", section3: "四季の養生",
    section4: "一日の経絡スケジュール", section5: "処方レシピ",
    foodCol: "食材", aliasCol: "別名", tcmCol: "中医効果", guideCol: "食べ方",
    recommended: "おすすめの食材", foodsToLimit: "控えるべき食材",
    seasonCol: "季節", protocolCol: "養生法",
    timeCol: "時間", meridianCol: "活性経絡", recCol: "アドバイス",
    dailyChecklist: "毎日のチェックリスト", checkOff: "達成したらチェック",
    tcmPrinciple: "中医原理", ingredients: "材料", instructions: "作り方",
    ingredientCol: "材料", amountCol: "分量",
    wellnessTip: "ワンポイント：",
    footer: "伝統中医学の体質理論に基づく · 健康調理の参考のみであり、医療診断や治療を構成するものではありません",
    proTitle: "体質完全分析レポート",
    proCh1Origin: "体質ルーツ", proCh1Emotion: "感情ブループリント",
    proCh2Combos: "危険な食事の組み合わせ", proCh3Drinks: "季節のお茶",
    proCh3Notes: "季節の注意点", proCh4Acupoints: "ツボ按摩ガイド",
    proCh6Recipes: "中医レシピ", proCh7Schedule: "30日ライフスタイルプラン",
    proCh8Monitor: "30日ボディモニター",
    proDayCol: "日", proRecipeN: "レシピ",
    proUpgradeTitle: "完全な変容プランが欲しいですか？",
    proUpgradeDesc: "完全分析レポートにアップグレードして、深い中医理論、ツボ按摩ガイド、28日スーププラン、複数のレシピ、完全なライフスタイルプランを入手しましょう。",
    proUpgradeCta: "完全レポートにアップグレード →",
    proLetterP1: "これはあなたの完全体質分析レポートです。3000年以上の伝統中医学の調理の知恵に基づく総合ガイドで、深い中医理論、ツボ按摩、季節のお茶、複数のレシピ、完全な30日ライフスタイルプランが含まれています。",
    proLetterP2: "このレポートを印刷して、毎日参照できる場所に置くことをお勧めします。30日プランとモニタリングトラッカーは実際の使用のために設計されています — 毎日記入してください。ライセンスを持つ中医師と共有して、個別のアドバイスを受けるのも良いでしょう。",
  },
}

function renderMd(text: string) {
  return text
    .replace(/### (.*)/g, '<h3 class="text-xs font-bold uppercase tracking-wider mt-5 mb-2" style="color:#7a6535">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold" style="color:#1a1a1a">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim()
      if (!trimmed) return ""
      if (trimmed.startsWith("<h3")) return trimmed
      return `<p class="text-[13px] leading-[1.75] text-[#444] mb-3 break-words">${trimmed}</p>`
    })
    .join("\n")
}

function SectionHeader({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3 pb-1.5 border-b border-[#e0d8cc]">
      <span className="text-[10px] font-bold text-white bg-[#C9A96E] w-5 h-5 rounded flex items-center justify-center flex-shrink-0">{num}</span>
      <span className="text-sm font-bold text-[#1a1a1a] tracking-wide">{title}</span>
    </div>
  )
}

function A4RecipeCard({ recipe, lc, ui }: { recipe: { title: { en: string; "zh-TW": string; ja: string }; titleZh: string; ingredients: { name: { en: string; "zh-TW": string; ja: string }; aliases: string; amount: string }[]; tcmPrinciple: { en: string; "zh-TW": string; ja: string }; steps: { en: string; "zh-TW": string; ja: string }[]; tip: { en: string; "zh-TW": string; ja: string } }; lc: string; ui: Record<string, string> }) {
  return (
    <div className="border border-[#e0d8cc] rounded-lg overflow-hidden">
      <div className="bg-[#f8f6f2] px-4 py-2 border-b border-[#e0d8cc]">
        <div className="font-bold text-[15px] text-[#1a1a1a]">{t(recipe.title)}</div>
        <div className="text-[13px]" style={{ color: "#7a6535" }}>{recipe.titleZh}</div>
      </div>
      <div className="px-4 py-3 space-y-3">
        <div>
          <div className="text-[12px] font-bold text-[#999] uppercase tracking-wider mb-1">{ui.tcmPrinciple}</div>
          <p className="text-[13px] text-[#444] leading-[1.6]">{t(recipe.tcmPrinciple)}</p>
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#999] uppercase tracking-wider mb-1">{ui.ingredients}</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px] min-w-[300px]">
              <thead>
                <tr className="bg-[#f8f6f2]">
                  <th className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{ui.ingredientCol}</th>
                  <th className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{ui.aliasCol || "Also Known As"}</th>
                  <th className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a] w-28">{ui.amountCol}</th>
                </tr>
              </thead>
              <tbody>
                {recipe.ingredients.map((ing, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                    <td className="px-2 py-1 border border-[#e0d8cc] font-medium text-[#1a1a1a]">{t(ing.name)}</td>
                    <td className="px-2 py-1 border border-[#e0d8cc] text-[#888] text-[11px]">{ing.aliases}</td>
                    <td className="px-2 py-1 border border-[#e0d8cc] text-[#444] font-medium">{ing.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#999] uppercase tracking-wider mb-1">{ui.instructions}</div>
          <ol className="list-none p-0 space-y-1.5">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-[13px] text-[#444] leading-[1.6]">
                <span className="font-bold shrink-0 w-5 h-5 rounded-full bg-[#f8f6f2] border border-[#e0d8cc] flex items-center justify-center text-[11px]" style={{ color: "#7a6535" }}>{i + 1}</span>
                <span>{t(step)}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-[#f8f6f2] rounded px-3 py-1.5">
          <span className="text-[12px] font-bold" style={{ color: "#7a6535" }}>{ui.wellnessTip}</span>
          <span className="text-[12px] text-[#444]">{t(recipe.tip)}</span>
        </div>
      </div>
    </div>
  )
}

function A4Report({ report, pro, lc, ui, ct, sex, typeId, isPro, locale }: {
  report: ReportBasic; pro: ReportPro | null; lc: string;
  ui: Record<string, string>; ct: typeof TYPES.balanced; sex: Sex;
  typeId: ConstitutionId; isPro: boolean;
  locale: { types: Record<string, { nickname: string }> }
}) {
  const a4ui = A4_UI[lc]
  const hdr = HEADER_TEXT[lc]
  const seasonLabels = SEASON_LABELS[lc]
  const viral = locale.types[typeId]

  return (
    <div className="max-w-[210mm] mx-auto my-8 print:my-0 print:max-w-none">
      <div className="bg-white text-black shadow-2xl print:shadow-none rounded-lg overflow-hidden" id="report-a4">
        {/* Header */}
        <div className="border-b-2 border-[#C9A96E] px-12 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] text-[#999] tracking-[0.2em] uppercase mb-1">{hdr.institution}</div>
              <h1 className="text-lg font-bold text-[#1a1a1a] tracking-wide">{isPro ? a4ui.proTitle : hdr.title}</h1>
            </div>
            <div className="text-right text-[11px] text-[#999] max-w-[240px] leading-relaxed">
              <div className="mb-0.5">{hdr.disclaimer1}</div>
              <div>{hdr.disclaimer2}</div>
              <div className="mt-1 text-[#b85450]">{hdr.warning}</div>
            </div>
          </div>
        </div>
        {/* Meta */}
        <div className="px-12 py-4 bg-[#f8f6f2] border-b border-[#e8e0d4]">
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[13px]">
            <div className="flex gap-2"><span className="text-[#999] w-28 shrink-0">{a4ui.constitution}</span><span className="font-bold" style={{ color: ct.color }}>{ct.en}</span></div>
            <div className="flex gap-2"><span className="text-[#999] w-28 shrink-0">{a4ui.sex}</span><span className="font-bold">{sex === "female" ? a4ui.female : a4ui.male}</span></div>
            <div className="flex gap-2"><span className="text-[#999] w-28 shrink-0">{a4ui.chinese}</span><span className="font-bold">{ct.zh} ({ct.zhPy})</span></div>
            <div className="flex gap-2"><span className="text-[#999] w-28 shrink-0">{a4ui.nickname}</span><span className="font-bold">{viral?.nickname}</span></div>
          </div>
        </div>
        {/* Letter */}
        <div className="px-12 py-5 border-b border-[#e8e0d4]">
          <div className="text-[14px] leading-[1.8] text-[#444]">
            <p>{isPro ? a4ui.proLetterP1 : a4ui.letterP1}</p>
            <p className="mt-2">{isPro ? a4ui.proLetterP2 : a4ui.letterP2}</p>
          </div>
        </div>
        {/* Body */}
        <div className="px-12 py-6">
          {/* Basic Sections */}
          {!isPro && (
            <>
              <div className="mb-6"><SectionHeader num={1} title={a4ui.section1} /><div dangerouslySetInnerHTML={{ __html: renderMd(t(report.ch1Identity)) }} /></div>
              <div className="mb-6">
                <SectionHeader num={2} title={a4ui.section2} />
                <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider mb-2">{a4ui.recommended}</div>
                <div className="overflow-x-auto"><table className="w-full border-collapse text-[13px] mb-4 min-w-[500px]">
                  <thead><tr className="bg-[#f8f6f2]">{[a4ui.foodCol, a4ui.aliasCol, a4ui.tcmCol, a4ui.guideCol].map((h, i) => <th key={i} className="text-left px-3 py-1.5 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{h}</th>)}</tr></thead>
                  <tbody>{report.ch2FoodsLove.map((food, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                      <td className="px-3 py-1.5 border border-[#e0d8cc]"><span className="font-semibold">{t(food.name)}</span><br /><span className="text-[11px] text-[#999]">{food.nameZh}</span></td>
                      <td className="px-3 py-1.5 border border-[#e0d8cc] text-[11px] text-[#888]">{food.aliases}</td>
                      <td className="px-3 py-1.5 border border-[#e0d8cc] font-medium" style={{ color: "#7a6535" }}>{t(food.tcmAction)}</td>
                      <td className="px-3 py-1.5 border border-[#e0d8cc] text-[#444]">{t(food.desc)}</td>
                    </tr>
                  ))}</tbody>
                </table></div>
                <div className="text-[10px] font-bold text-[#b85450] uppercase tracking-wider mb-2">{a4ui.foodsToLimit}</div>
                <div className="border border-[#e0d8cc] rounded px-3 py-2"><ul className="list-none p-0 space-y-1">{report.ch2FoodsAvoid.map((item, i) => (
                  <li key={i} className="text-[13px] text-[#444] flex items-start gap-2"><span className="text-[#b85450] flex-shrink-0">✕</span><span>{t(item)}</span></li>
                ))}</ul></div>
              </div>
              <div className="mb-6"><SectionHeader num={3} title={a4ui.section3} />
                <div className="px-3 py-2 rounded bg-[#f8f6f2] mb-3 border-l-[3px] border-[#C9A96E]"><p className="text-[13px] leading-[1.6] text-[#1a1a1a] font-medium">{t(report.ch3Seasonal.highlight)}</p></div>
                <div className="overflow-x-auto"><table className="w-full border-collapse text-[13px] min-w-[400px]">
                  <thead><tr className="bg-[#f8f6f2]"><th className="text-left px-3 py-1.5 border border-[#e0d8cc] font-semibold text-[#1a1a1a] w-24">{a4ui.seasonCol}</th><th className="text-left px-3 py-1.5 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{a4ui.protocolCol}</th></tr></thead>
                  <tbody>{report.ch3Seasonal.tips.map((tip, i) => { const txt = t(tip); const season = txt.split("—")[0]?.trim() ?? ""; const body = txt.includes("—") ? txt.substring(txt.indexOf("—") + 1).trim() : txt; return (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}><td className="px-3 py-1.5 border border-[#e0d8cc] font-semibold" style={{ color: "#7a6535" }}>{season}</td><td className="px-3 py-1.5 border border-[#e0d8cc] text-[#444]" dangerouslySetInnerHTML={{ __html: body.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1a1a1a]">$1</strong>') }} /></tr>
                  )})}</tbody>
                </table></div>
              </div>
              <div className="mb-6"><SectionHeader num={4} title={a4ui.section4} />
                <div className="overflow-x-auto"><table className="w-full border-collapse text-[13px] min-w-[500px]">
                  <thead><tr className="bg-[#f8f6f2]">{[a4ui.timeCol, a4ui.meridianCol, a4ui.recCol].map((h, i) => <th key={i} className="text-left px-3 py-1.5 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{h}</th>)}</tr></thead>
                  <tbody>{report.ch4DailyRhythm.map((row, i) => (
                    <tr key={row.time} className={i % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                      <td className="px-3 py-1.5 border border-[#e0d8cc] font-semibold text-[#1a1a1a] whitespace-nowrap">{row.time}</td>
                      <td className="px-3 py-1.5 border border-[#e0d8cc] font-medium" style={{ color: "#7a6535" }}>{t(row.meridian)}</td>
                      <td className="px-3 py-1.5 border border-[#e0d8cc] text-[#444]" dangerouslySetInnerHTML={{ __html: t(row.desc).replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1a1a1a]">$1</strong>') }} />
                    </tr>
                  ))}</tbody>
                </table></div>
                <div className="mt-4 border border-[#e0d8cc] rounded-lg overflow-hidden">
                  <div className="bg-[#f8f6f2] px-4 py-2 border-b border-[#e0d8cc] flex justify-between"><span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-wider">{a4ui.dailyChecklist}</span><span className="text-[11px] text-[#999]">{a4ui.checkOff}</span></div>
                  <table className="w-full border-collapse text-[12px]"><tbody>{report.ch4Checklist.map((item, i) => (
                    <tr key={i} className={i < report.ch4Checklist.length - 1 ? "border-b border-[#eee8e0]" : ""}>
                      <td className="text-center px-2 py-2 border-r border-[#eee8e0]"><span className="inline-block w-3.5 h-3.5 border border-[#bbb] rounded-sm"></span></td>
                      <td className="text-center px-2 py-2 border-r border-[#eee8e0] text-[#bbb] text-[11px]">{i + 1}</td>
                      <td className="px-3 py-2 text-[#444]">{t(item)}</td>
                    </tr>
                  ))}</tbody></table>
                </div>
              </div>
              <div className="mb-6"><SectionHeader num={5} title={a4ui.section5} /><A4RecipeCard recipe={report.recipe} lc={lc} ui={a4ui} /></div>
            </>
          )}
          {/* Pro Sections */}
          {isPro && pro && (
            <>
              <div className="mb-6"><SectionHeader num={1} title={a4ui.proCh1Origin} /><div dangerouslySetInnerHTML={{ __html: renderMd(t(pro.ch1Origin)) }} /></div>
              <div className="mb-6"><SectionHeader num={2} title={a4ui.proCh1Emotion} /><div dangerouslySetInnerHTML={{ __html: renderMd(t(pro.ch1Emotion)) }} /></div>
              <div className="mb-6"><SectionHeader num={3} title={a4ui.proCh2Combos} /><div className="space-y-3">{pro.ch2Combos.map((combo, i) => (
                <div key={i} className="border border-[#e0d8cc] rounded px-4 py-2.5 border-l-[3px] border-l-[#b85450]"><div className="text-[13px] text-[#444] leading-[1.7]" dangerouslySetInnerHTML={{ __html: renderMd(t(combo)) }} /></div>
              ))}</div></div>
              <div className="mb-6"><SectionHeader num={4} title={a4ui.proCh3Drinks} /><div className="space-y-3">{SEASON_KEYS.map((s) => (
                <div key={s} className="flex gap-3"><span className="shrink-0 w-16 text-[12px] font-bold px-2 py-0.5 rounded bg-[#f8f6f2] text-center" style={{ color: "#7a6535" }}>{seasonLabels[s]}</span><p className="text-[13px] text-[#444] leading-[1.7]">{t(pro.ch3SeasonDrinks[s])}</p></div>
              ))}</div></div>
              <div className="mb-6"><SectionHeader num={5} title={a4ui.proCh3Notes} /><div className="space-y-3">{SEASON_KEYS.map((s) => (
                <div key={s} className="flex gap-3"><span className="shrink-0 w-16 text-[12px] font-bold px-2 py-0.5 rounded bg-[#f8f6f2] text-center" style={{ color: "#7a6535" }}>{seasonLabels[s]}</span><p className="text-[13px] text-[#444] leading-[1.7]">{t(pro.ch3SeasonNotes[s])}</p></div>
              ))}</div></div>
              <div className="mb-6"><SectionHeader num={6} title={a4ui.proCh4Acupoints} /><div className="space-y-3">{pro.ch4Acupoints.map((point, i) => (
                <div key={i} className="border border-[#e0d8cc] rounded px-4 py-2.5 border-l-[3px] border-l-[#C9A96E]"><div className="text-[13px] text-[#444] leading-[1.7]" dangerouslySetInnerHTML={{ __html: renderMd(t(point)) }} /></div>
              ))}</div></div>
              <div className="mb-6"><SectionHeader num={7} title={a4ui.proCh6Recipes} /><div className="space-y-4">{pro.ch6Recipes.map((recipe, i) => (
                <div key={i}><div className="text-[12px] font-bold text-[#C9A96E] uppercase tracking-wider mb-1.5">{a4ui.proRecipeN} {i + 1}</div><A4RecipeCard recipe={recipe} lc={lc} ui={a4ui} /></div>
              ))}</div></div>
              <div className="mb-6"><SectionHeader num={8} title={a4ui.proCh7Schedule} />
                <div className="overflow-x-auto"><table className="w-full border-collapse text-[11px]">
                  <thead><tr className="bg-[#f8f6f2]"><th className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a] w-8">{a4ui.proDayCol}</th>{pro.ch7Schedule.headers.map((h, i) => <th key={i} className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{t(h)}</th>)}</tr></thead>
                  <tbody>{pro.ch7Schedule.rows.map((row) => (
                    <tr key={row.day} className={row.day % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                      <td className="px-2 py-1 border border-[#e0d8cc] font-bold text-center">{row.day}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.wakeTime}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.breakfast}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.exercise}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.water}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.avoidCheck}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.bedtime}</td>
                      <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.mood}</td>
                    </tr>
                  ))}</tbody>
                </table></div>
                <div className="mt-2 text-[11px] text-[#7a6535] italic">{t(pro.ch7Schedule.footer)}</div>
              </div>
              <div className="mb-6"><SectionHeader num={9} title={a4ui.proCh8Monitor} />
                <div className="overflow-x-auto"><table className="w-full border-collapse text-[11px]">
                  <thead><tr className="bg-[#f8f6f2]"><th className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a] w-8">{a4ui.proDayCol}</th>{pro.ch8Monitor.headers.map((h, i) => <th key={i} className="text-left px-2 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">{t(h)}</th>)}</tr></thead>
                  <tbody>{pro.ch8Monitor.rows.map((row) => (
                    <tr key={row.day} className={row.day % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                      <td className="px-2 py-1.5 border border-[#e0d8cc] font-bold text-center">{row.day}</td>
                      {pro.ch8Monitor.headers.map((_, i) => <td key={i} className="px-2 py-1.5 border border-[#e0d8cc]"><span className="inline-block w-10 h-4"></span></td>)}
                    </tr>
                  ))}</tbody>
                </table></div>
                <div className="mt-2 text-[11px] text-[#7a6535] italic">{t(pro.ch8Monitor.footer)}</div>
              </div>
            </>
          )}
          {/* Upgrade for basic */}
          {!isPro && (
            <div className="print:hidden border-2 border-dashed border-[#C9A96E] rounded-lg px-6 py-4 mt-6 text-center bg-[#fdf9f3]">
              <div className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider mb-1">{a4ui.proUpgradeTitle}</div>
              <p className="text-[13px] text-[#444] mb-3 max-w-md mx-auto">{a4ui.proUpgradeDesc}</p>
              <CreemCheckout
                productId={CREEM_PRODUCT_PRO}
                successUrl={`/success?type=${typeId}&sex=${sex}&plan=pro`}
                metadata={{ type: typeId, sex, plan: "pro" }}
              >
                <div className="inline-flex items-center px-5 py-1.5 rounded text-[13px] font-semibold cursor-pointer bg-[#C9A96E] text-white">
                  {a4ui.proUpgradeCta}
                </div>
              </CreemCheckout>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="border-t border-[#e0d8cc] px-12 py-3 flex justify-between items-center text-[11px] text-[#bbb]">
          <div>EastType Constitution Report · {isPro ? "Full Diagnosis" : "Body Profile"}</div>
          <div>{a4ui.footer}</div>
        </div>
        <div className="bg-[#f8f6f2] px-12 py-1.5 text-center text-[11px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc]">www.myeasterntype.com</div>
      </div>
    </div>
  )
}

export default function ReportV2Page() {
  return (
    <Suspense
      fallback={<div className="min-h-screen flex items-center justify-center text-text2">Loading report...</div>}
    >
      <ReportV2Content />
    </Suspense>
  )
}
