export interface SymptomPage {
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
}

export const SYMPTOMS: Record<string, SymptomPage> = {
  "why-am-i-always-tired": {
    slug: "why-am-i-always-tired",
    title: { en: "Why Am I Always Tired?", "zh-TW": "為什麼我總是累？", ja: "なぜいつも疲れている？" },
    metaTitle: "Why Am I Always Tired? Eastern Body Type Insights | EastType",
    metaDesc: "Always tired even after sleeping well? Learn why from a Traditional Chinese Medicine perspective — and which body type may be connected to your chronic fatigue.",
    ogDesc: "Sleeping well but still exhausted? TCM says your body type may explain why. Free 5-min assessment included.",
    h1: { en: "Why Am I Always Tired? What Your Body Type May Reveal", "zh-TW": "為什麼我總是累？你的體質可能透露什麼", ja: "なぜいつも疲れている？体質が明かすこと" },
    tag: "Fatigue",
    readTime: "8 min",
    relatedTypes: ["qi_deficient", "yang_deficient"],
    relatedSymptoms: ["why-am-i-always-sleepy", "why-do-i-have-low-energy"],
  },
  "why-am-i-always-cold": {
    slug: "why-am-i-always-cold",
    title: { en: "Why Am I Always Cold?", "zh-TW": "為什麼我總是冷？", ja: "なぜいつも寒い？" },
    metaTitle: "Why Am I Always Cold? Eastern Body Type Insights | EastType",
    metaDesc: "Always cold when others are comfortable? Learn which Eastern body type is associated with cold sensitivity and what warming foods may help.",
    ogDesc: "Cold hands and feet year-round? Your Eastern body type may explain it. Learn which foods can warm you from the inside.",
    h1: { en: "Why Am I Always Cold? What Your Body Type May Reveal", "zh-TW": "為什麼我總是冷？你的體質可能透露什麼", ja: "なぜいつも寒い？体質が明かすこと" },
    tag: "Cold Sensitivity",
    readTime: "8 min",
    relatedTypes: ["yang_deficient", "qi_deficient"],
    relatedSymptoms: ["why-am-i-always-tired", "why-do-i-wake-up-at-3am"],
  },
  "why-do-i-wake-up-at-3am": {
    slug: "why-do-i-wake-up-at-3am",
    title: { en: "Why Do I Wake Up at 3AM?", "zh-TW": "為什麼我凌晨三點會醒？", ja: "なぜ午前3時に目が覚める？" },
    metaTitle: "Why Do I Wake Up at 3AM? Eastern Body Type Insights | EastType",
    metaDesc: "Waking up at 3AM every night? Traditional Chinese Medicine connects this to specific body types. Learn what your sleep pattern may mean.",
    ogDesc: "3AM wakeups every night? TCM says your body type may be the reason. Find out which type and what may help.",
    h1: { en: "Why Do I Wake Up at 3AM? What Your Body Type May Reveal", "zh-TW": "為什麼我凌晨三點會醒？你的體質可能透露什麼", ja: "なぜ午前3時に目が覚める？体質が明かすこと" },
    tag: "Sleep",
    readTime: "7 min",
    relatedTypes: ["yin_deficient", "qi_stagnant"],
    relatedSymptoms: ["why-am-i-always-tired", "always-bloated-after-eating"],
  },
  "always-bloated-after-eating": {
    slug: "always-bloated-after-eating",
    title: { en: "Always Bloated After Eating", "zh-TW": "飯後總是脹氣", ja: "食後いつもお腹が張る" },
    metaTitle: "Always Bloated After Eating? Eastern Body Type Insights | EastType",
    metaDesc: "Bloated after every meal? Traditional Chinese Medicine links bloating to specific body types. Learn which foods may help reduce that heavy feeling.",
    ogDesc: "Bloated after meals? Your Eastern body type may explain it. Learn which foods are easier on your digestion.",
    h1: { en: "Always Bloated After Eating? What Your Body Type May Reveal", "zh-TW": "飯後總是脹氣？你的體質可能透露什麼", ja: "食後いつもお腹が張る？体質が明かすこと" },
    tag: "Digestion",
    readTime: "7 min",
    relatedTypes: ["qi_deficient", "phlegm_damp"],
    relatedSymptoms: ["why-am-i-always-tired", "why-am-i-always-sleepy"],
  },
  "why-am-i-always-sleepy": {
    slug: "why-am-i-always-sleepy",
    title: { en: "Why Am I Always Sleepy?", "zh-TW": "為什麼我總是想睡？", ja: "なぜいつも眠い？" },
    metaTitle: "Why Am I Always Sleepy? Eastern Body Type Insights | EastType",
    metaDesc: "Can't stay awake during the day? Your Eastern body type may explain daytime sleepiness. Learn which patterns are connected to low energy.",
    ogDesc: "Always sleepy no matter how much you sleep? Your body type may be the reason. Free assessment to find out.",
    h1: { en: "Why Am I Always Sleepy? What Your Body Type May Reveal", "zh-TW": "為什麼我總是想睡？你的體質可能透露什麼", ja: "なぜいつも眠い？体質が明かすこと" },
    tag: "Energy",
    readTime: "7 min",
    relatedTypes: ["qi_deficient", "phlegm_damp"],
    relatedSymptoms: ["why-am-i-always-tired", "always-bloated-after-eating"],
  },
  "why-do-i-have-night-sweats": {
    slug: "why-do-i-have-night-sweats",
    title: { en: "Why Do I Have Night Sweats?", "zh-TW": "為什麼我會盜汗？", ja: "なぜ寝汗をかく？" },
    metaTitle: "Why Do I Have Night Sweats? Eastern Body Type Insights | EastType",
    metaDesc: "Waking up drenched in sweat? Traditional Chinese Medicine connects night sweats to specific body types. Learn what your body may be telling you.",
    ogDesc: "Night sweats but no fever? TCM says your body type may explain it. Free assessment to find out.",
    h1: { en: "Why Do I Have Night Sweats? What Your Body Type May Reveal", "zh-TW": "為什麼我會盜汗？你的體質可能透露什麼", ja: "なぜ寝汗をかく？体質が明かすこと" },
    tag: "Night Sweats",
    readTime: "7 min",
    relatedTypes: ["yin_deficient"],
    relatedSymptoms: ["why-do-i-wake-up-at-3am"],
  },
  "why-do-i-feel-anxious": {
    slug: "why-do-i-feel-anxious",
    title: { en: "Why Do I Feel Anxious?", "zh-TW": "為什麼我總是焦慮？", ja: "なぜ不安を感じる？" },
    metaTitle: "Why Do I Feel Anxious? Eastern Body Type Insights | EastType",
    metaDesc: "Anxious all the time for no clear reason? Traditional Chinese Medicine connects chronic anxiety to specific body types. Learn what your body may be telling you.",
    ogDesc: "Anxious but nothing is wrong? TCM says your body type may explain it. Free assessment to find out.",
    h1: { en: "Why Do I Feel Anxious? What Your Body Type May Reveal", "zh-TW": "為什麼我總是焦慮？你的體質可能透露什麼", ja: "なぜ不安を感じる？体質が明かすこと" },
    tag: "Anxiety",
    readTime: "7 min",
    relatedTypes: ["qi_stagnant"],
    relatedSymptoms: ["why-do-i-wake-up-at-3am"],
  },
}

export const SYMPTOM_SLUGS = Object.keys(SYMPTOMS)
