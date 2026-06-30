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
  bodyTypes: string[]
  foodPairings: string[]
  howToUse: string
  dosage: string
  cautions: string[]
  faqs: { q: string; a: string }[]
  image?: string
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
]
