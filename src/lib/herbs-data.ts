import herbsJson from "./herbs-data.json"

export interface HerbData {
  slug: string
  nameEn: string
  nameZh: string
  nameZhTrad: string
  pinyin: string
  botanicalName: string
  category: string
  temperature: string
  taste: string
  channels: string
  summary: string
  actions: string[]
  actionDetails?: { action: string; explanation: string }[]
  bodyTypes: string[]
  commonlyUsedFor?: { condition: string; tcmInterpretation: string; whyItHelps: string }[]
  therapeuticFocus?: string[]
  foodPairings: string[]
  howToUse: string
  dosage: string
  preparationNotes?: string
  dietaryAdvice?: string
  cautions: string[]
  faqs: { q: string; a: string }[]
  image?: string
  classicalSource?: string
  safetyRating?: string
}

export const HERBS: Record<string, HerbData> = Object.fromEntries(
  (herbsJson as HerbData[]).map((h) => [h.slug, h])
)

export const HERB_CATEGORIES = [
  "All",
  "Qi Tonic",
  "Blood Tonic",
  "Yin Tonic",
  "Yang Tonic",
  "Warming Herb",
  "Cooling Herb",
  "Dampness Draining",
  "Qi Regulating",
  "Calming Herb",
  "Digestive Support",
]
