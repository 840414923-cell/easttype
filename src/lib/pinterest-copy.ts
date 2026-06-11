import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"

export interface PinterestCopy {
  title: string
  description: string
  hashtags: string[]
}

const BASE_HASHTAGS = [
  "#TCM", "#ChineseMedicine", "#BodyType", "#Wellness",
  "#HolisticHealth", "#NaturalHealth", "#EasternMedicine",
  "#ConstitutionType", "#EastType", "#SelfCare",
]

function typeHashtags(typeId: ConstitutionId): string[] {
  const t = TYPES[typeId]
  const nameWords = t.en.split(" ").join("")
  return [`#${nameWords}`, `#${t.zhPy.replace(/\s/g, "")}`, `#${typeId.replace(/_/g, "")}`]
}

export function generatePromoCopy(captionEn: string, typeId: ConstitutionId): PinterestCopy {
  const t = TYPES[typeId]
  const firstLine = captionEn.split("\n")[0].replace(/[?.!]$/, "").trim()
  const title = `${firstLine} — Discover Your Eastern Body Type | EastType`
  const description = `${captionEn.split("\n").join(" ")} Take the free 5-minute body type quiz and discover which of the 9 Eastern constitutions matches yours. Get personalized food recommendations, daily routines, and wellness insights based on 3,000 years of TCM wisdom.`
  const hashtags = [...BASE_HASHTAGS, ...typeHashtags(typeId)]
  return { title, description, hashtags }
}

export function generateFoodCopy(typeId: ConstitutionId, foods: string[]): PinterestCopy {
  const t = TYPES[typeId]
  const title = `Best Foods for ${t.en} (${t.zh}) — Eastern Body Type Diet Guide`
  const description = `If you're the ${t.en} type (${t.zh}), these foods may help restore your natural balance: ${foods.join(", ")}. Discover your full personalized food map with the free EastType body type quiz. Based on Traditional Chinese Medicine constitutional theory.`
  const hashtags = [...BASE_HASHTAGS, "#FoodTherapy", "#TCMDiet", ...typeHashtags(typeId)]
  return { title, description, hashtags }
}

export function generateSymptomCopy(symptom: string, types: string[]): PinterestCopy {
  const title = `${symptom} — What Your Body Is Trying to Tell You | EastType`
  const description = `Always asking yourself "${symptom.toLowerCase()}"? In Traditional Chinese Medicine, recurring symptoms point to deeper patterns. Your body might be one of these types: ${types.join(", ")}. Take the free quiz to find out which one you are.`
  const hashtags = [...BASE_HASHTAGS, "#Symptoms", "#WhyDoI", "#BodySignals"]
  return { title, description, hashtags }
}

export function generateDailyTipCopy(typeId: ConstitutionId, tip: string): PinterestCopy {
  const t = TYPES[typeId]
  const title = `Daily Wellness Tip for ${t.en} (${t.zh}) | EastType`
  const description = `${tip} This tip is specifically for the ${t.en} body type (${t.zh}). In TCM, each constitution has unique daily rhythms. Discover your full personalized schedule with the free EastType body type quiz.`
  const hashtags = [...BASE_HASHTAGS, "#DailyTip", "#WellnessRoutine", ...typeHashtags(typeId)]
  return { title, description, hashtags }
}

export function generateFactCopy(fact: string, tags: string[]): PinterestCopy {
  const title = `Did You Know? ${fact.split("?")[0]}? | EastType TCM Facts`
  const description = `${fact} Traditional Chinese Medicine has observed these patterns for over 3,000 years. Discover which of the 9 body constitutions matches yours with the free EastType quiz.`
  const tagHashtags = tags.map((t) => `#${t.charAt(0).toUpperCase() + t.slice(1)}`)
  const hashtags = [...BASE_HASHTAGS, "#DidYouKnow", "#TCMFacts", ...tagHashtags]
  return { title, description, hashtags }
}
