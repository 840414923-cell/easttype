import type { FaqItem } from "./wellness-faqs"

export interface PatternPage {
  slug: string
  title: { en: string; "zh-TW": string; ja: string }
  metaTitle: string
  metaDesc: string
  ogDesc: string
  h1: { en: string; "zh-TW": string; ja: string }
  tag: string
  readTime: string
  relatedTypes: string[]
  relatedSymptoms: string[]
  tcmConcept: string
}

export const PATTERNS: Record<string, PatternPage> = {
  "low-vitality": {
    slug: "low-vitality",
    title: { en: "Low Vitality Pattern", "zh-TW": "低活力體質", ja: "低活力パターン" },
    metaTitle: "Low Vitality Pattern — Always Tired, Low Energy, Exhausted | EastType",
    metaDesc: "The Low Vitality pattern connects chronic fatigue, low energy, and afternoon crashes to Qi Deficiency in Traditional Chinese Medicine. Learn which foods and habits may help restore your energy.",
    ogDesc: "Always running on empty? The Low Vitality pattern explains why your battery never charges to full. Learn the TCM approach to rebuilding energy.",
    h1: { en: "Low Vitality Pattern: Why Your Battery Never Reaches Full", "zh-TW": "低活力體質：為什麼你的電池永遠充不滿", ja: "低活力パターン：バッテリーが満タンにならない理由" },
    tag: "Qi Deficiency",
    readTime: "9 min",
    relatedTypes: ["qi_deficient"],
    relatedSymptoms: ["why-am-i-always-tired", "why-am-i-always-sleepy"],
    tcmConcept: "Qi Deficiency",
  },
  "cold-sensitivity": {
    slug: "cold-sensitivity",
    title: { en: "Cold Sensitivity Pattern", "zh-TW": "怕冷體質", ja: "冷え性パターン" },
    metaTitle: "Cold Sensitivity Pattern — Cold Hands, Cold Feet, Always Freezing | EastType",
    metaDesc: "The Cold Sensitivity pattern links chronically cold hands and feet to Yang Deficiency in Traditional Chinese Medicine. Learn which warming foods and habits may help stoke your inner furnace.",
    ogDesc: "Always cold when others are fine? The Cold Sensitivity pattern explains why your inner furnace is underpowered. Learn the TCM approach to warming up.",
    h1: { en: "Cold Sensitivity Pattern: Why Your Inner Furnace Is Underpowered", "zh-TW": "怕冷體質：為什麼你的內在火爐動力不足", ja: "冷え性パターン：内側の暖炉の出力が低い理由" },
    tag: "Yang Deficiency",
    readTime: "9 min",
    relatedTypes: ["yang_deficient"],
    relatedSymptoms: ["why-am-i-always-cold", "why-do-i-wake-up-at-3am"],
    tcmConcept: "Yang Deficiency",
  },
  "internal-heat": {
    slug: "internal-heat",
    title: { en: "Internal Heat Pattern", "zh-TW": "內熱體質", ja: "内熱パターン" },
    metaTitle: "Internal Heat Pattern — Night Sweats, Insomnia, Feeling Hot at Night | EastType",
    metaDesc: "The Internal Heat pattern links night sweats, insomnia, and feeling hot at night to Yin Deficiency in Traditional Chinese Medicine. Learn which cooling foods and habits may help restore balance.",
    ogDesc: "Waking up hot and sweaty? The Internal Heat pattern explains why your body's cooling system is undercharged. Learn the TCM approach to cooling down.",
    h1: { en: "Internal Heat Pattern: Why Your Body's Cooling System Is Undercharged", "zh-TW": "內熱體質：為什麼你的身體冷卻系統充電不足", ja: "内熱パターン：体の冷却システムが充電不足の理由" },
    tag: "Yin Deficiency",
    readTime: "9 min",
    relatedTypes: ["yin_deficient"],
    relatedSymptoms: ["why-do-i-wake-up-at-3am", "why-do-i-have-night-sweats", "why-cant-i-fall-asleep"],
    tcmConcept: "Yin Deficiency",
  },
  "heavy-and-sluggish": {
    slug: "heavy-and-sluggish",
    title: { en: "Heavy & Sluggish Pattern", "zh-TW": "沉重遲緩體質", ja: "重だるいパターン" },
    metaTitle: "Heavy & Sluggish Pattern — Bloating, Heaviness, Always Sleepy | EastType",
    metaDesc: "The Heavy & Sluggish pattern links chronic bloating, heaviness, and daytime sleepiness to Phlegm Damp in Traditional Chinese Medicine. Learn which foods and habits may help clear the fog.",
    ogDesc: "Always bloated and heavy? The Heavy & Sluggish pattern explains why your body holds moisture like a sponge. Learn the TCM approach to drying out.",
    h1: { en: "Heavy & Sluggish Pattern: Why Your Body Holds Moisture Like a Sponge", "zh-TW": "沉重遲緩體質：為什麼你的身體像海綿吸水", ja: "重だるいパターン：体がスポンジのように水分を抱え込む理由" },
    tag: "Phlegm Damp",
    readTime: "9 min",
    relatedTypes: ["phlegm_damp"],
    relatedSymptoms: ["always-bloated-after-eating", "why-am-i-always-sleepy", "why-do-i-have-brain-fog", "why-do-i-keep-gaining-weight"],
    tcmConcept: "Phlegm Damp",
  },
  "stuck-energy": {
    slug: "stuck-energy",
    title: { en: "Stuck Energy Pattern", "zh-TW": "", ja: "" },
    metaTitle: "Stuck Energy Pattern — Tight Chest, Frequent Sighing, Mood Swings | EastType",
    metaDesc: "The Stuck Energy pattern connects emotional tightness, frequent sighing, and mood swings to Qi Stagnation in Traditional Chinese Medicine. Learn which foods and habits may help your energy flow more freely.",
    ogDesc: "Feel like something is stuck inside? The Stuck Energy pattern explains why your emotions and energy don't flow smoothly and what Eastern body wisdom says about getting things moving.",
    h1: { en: "Stuck Energy Pattern: When Your Body Holds Its Breath", "zh-TW": "", ja: "" },
    tag: "Qi Stagnation",
    readTime: "9 min",
    relatedTypes: ["qi_stagnant"],
    relatedSymptoms: ["why-do-i-feel-anxious", "why-do-i-wake-up-at-3am", "why-are-my-moods-all-over-the-place"],
    tcmConcept: "Qi Stagnation",
  },
}

export const PATTERN_SLUGS = Object.keys(PATTERNS)
