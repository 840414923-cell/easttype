import type { ConstitutionId } from "./types"
import { HERBS } from "./herbs-data"
import { SOLUTIONS } from "./solutions-data"
import { TYPE_DETAILS } from "./type-details"
import { SYMPTOM_ARTICLES } from "./symptom-articles-data"

export interface HerbRec {
  slug: string
  nameEn: string
  pinyin: string
  summary: string
  image?: string
}

export interface FormulaRec {
  solutionSlug: string
  solutionTitle: string
  formulaSlug: string
  formulaName: string
  formulaPinyin: string
}

export interface LinkRec {
  slug: string
  title: string
  url: string
}

export interface Recommendations {
  herbs: HerbRec[]
  formulas: FormulaRec[]
  symptoms: LinkRec[]
  wellness: LinkRec[]
}

const WELLNESS_TITLES: Record<string, string> = {
  "chinese-medicine-body-types": "The 9 Chinese Medicine Body Types",
  "chinese-medicine-foods-for-energy": "Chinese Medicine Foods for Energy",
  "foods-that-warm-your-body": "Foods That Warm Your Body",
  "why-am-i-always-tired": "Chinese Medicine for Fatigue",
  "cold-hands-and-feet": "Chinese Medicine for Cold Hands and Feet",
  "insomnia-chinese-medicine": "Chinese Medicine for Insomnia",
  "night-sweats-chinese-medicine": "Chinese Medicine for Night Sweats",
  "acne-chinese-medicine": "Chinese Medicine for Acne",
  "bloating-chinese-medicine": "Chinese Medicine for Bloating",
}

const WELLNESS_URL_OVERRIDES: Record<string, string> = {
  "cold-hands-and-feet": "/wellness/chinese-medicine-for-cold-hands",
  "insomnia-chinese-medicine": "/wellness/chinese-medicine-for-insomnia",
  "night-sweats-chinese-medicine": "/wellness/chinese-medicine-for-night-sweats",
  "acne-chinese-medicine": "/wellness/chinese-medicine-for-acne",
  "bloating-chinese-medicine": "/wellness/chinese-medicine-for-bloating",
  "why-am-i-always-tired": "/wellness/chinese-medicine-for-fatigue",
}

const FALLBACK_HERB_SLUGS = ["goji-gou-qi-zi", "jujube-da-zao", "chinese-yam-shan-yao"]

export function getRecommendations(typeId: ConstitutionId): Recommendations {
  const herbs: HerbRec[] = Object.values(HERBS)
    .filter((h) => h.bodyTypes.includes(typeId))
    .slice(0, 4)
    .map((h) => ({
      slug: h.slug,
      nameEn: h.nameEn,
      pinyin: h.pinyin,
      summary: h.summary,
      image: h.image,
    }))

  const fallbackHerbs: HerbRec[] =
    herbs.length === 0
      ? FALLBACK_HERB_SLUGS.filter((slug) => HERBS[slug]).map((slug) => ({
          slug: HERBS[slug].slug,
          nameEn: HERBS[slug].nameEn,
          pinyin: HERBS[slug].pinyin,
          summary: HERBS[slug].summary,
          image: HERBS[slug].image,
        }))
      : []

  const formulas: FormulaRec[] = []
  for (const solution of Object.values(SOLUTIONS)) {
    for (const formula of solution.formulas) {
      if (formula.bodyTypeSlug === typeId) {
        formulas.push({
          solutionSlug: solution.slug,
          solutionTitle: solution.title,
          formulaSlug: formula.slug,
          formulaName: formula.nameEn,
          formulaPinyin: formula.namePinyin,
        })
      }
    }
  }

  const detail = TYPE_DETAILS[typeId]

  const symptoms: LinkRec[] = (detail.relatedSymptoms ?? [])
    .filter((slug) => SYMPTOM_ARTICLES[slug])
    .slice(0, 4)
    .map((slug) => ({
      slug,
      title: SYMPTOM_ARTICLES[slug].title,
      url: `/symptoms/${slug}`,
    }))

  const wellness: LinkRec[] = (detail.relatedWellness ?? [])
    .slice(0, 2)
    .map((slug) => ({
      slug,
      title: WELLNESS_TITLES[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      url: WELLNESS_URL_OVERRIDES[slug] ?? `/wellness/${slug}`,
    }))

  return {
    herbs: herbs.length > 0 ? herbs : fallbackHerbs,
    formulas: formulas.slice(0, 2),
    symptoms,
    wellness,
  }
}
