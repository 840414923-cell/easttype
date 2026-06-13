import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"
import type { SocialContent, TemplateType } from "./card-templates/social-content"

export interface PlatformCopy {
  title: string
  body: string
  hashtags: string[]
}

const BASE_HASHTAGS = [
  "#TCM", "#ChineseMedicine", "#BodyType", "#Wellness",
  "#HolisticHealth", "#NaturalHealth", "#EasternMedicine",
  "#ConstitutionType", "#EastType", "#SelfCare",
]

const TYPE_HASHTAG_MAP: Record<string, string[]> = {
  fact: ["#DidYouKnow", "#TCMFacts"],
  symptom: ["#Symptoms", "#WhyDoI", "#BodySignals"],
  food: ["#FoodTherapy", "#TCMDiet", "#FoodAsMedicine"],
  which: ["#WhichTypeAreYou", "#BodyTypes", "#FindYourType"],
  quote: ["#TCMQuotes", "#EasternWisdom", "#BodyWisdom"],
}

function typeHashtags(typeId: ConstitutionId): string[] {
  const t = TYPES[typeId]
  const nameWords = t.en.split(" ").join("")
  return [`#${nameWords}`, `#${t.zhPy.replace(/\s/g, "")}`, `#${typeId.replace(/_/g, "")}`]
}

export function generatePinterestCopy(content: SocialContent): PlatformCopy {
  const headline = content.headline.replace(/[?.!]$/, "").trim()
  const title = `${headline} \u2014 Discover Your Eastern Body Type | EastType`
  const body = `${content.headline} ${content.subtext} Take the free 5-minute body type quiz and discover which of the 9 Eastern constitutions matches yours. Get personalized food recommendations, daily routines, and wellness insights based on 3,000 years of TCM wisdom.`
  const hashtags = [...BASE_HASHTAGS, ...TYPE_HASHTAG_MAP[content.type] || []]
  if (content.bgType) hashtags.push(...typeHashtags(content.bgType))
  return { title, body, hashtags }
}

export function generateIGReelsCopy(content: SocialContent): PlatformCopy {
  const title = content.headline
  const body = `${content.subtext}\n\n${content.emoji}\n\nTake the free body type quiz \u2192 link in bio`
  const hashtags = [...BASE_HASHTAGS, ...TYPE_HASHTAG_MAP[content.type] || [], "#Reels", "#Viral"]
  if (content.bgType) hashtags.push(...typeHashtags(content.bgType))
  return { title, body, hashtags }
}

export function generateIGPostCopy(content: SocialContent): PlatformCopy {
  const title = content.headline
  const body = `${content.headline}\n\n${content.subtext}\n\n${content.emoji}\n\nDiscover your Eastern body type with our free 5-min quiz \u2192 myeasterntype.com`
  const hashtags = [...BASE_HASHTAGS, ...TYPE_HASHTAG_MAP[content.type] || []]
  if (content.bgType) hashtags.push(...typeHashtags(content.bgType))
  return { title, body, hashtags }
}

export function generateFBCopy(content: SocialContent): PlatformCopy {
  const title = content.headline
  const body = `${content.headline}\n\n${content.subtext}\n\nTake the free 5-minute body type quiz and discover which of the 9 Eastern constitutions matches yours \u2192 myeasterntype.com\n\n#EastType #TCM #BodyType`
  return { title, body, hashtags: [] }
}

export function generateCopy(content: SocialContent, platformId: string): PlatformCopy {
  switch (platformId) {
    case "pinterest": return generatePinterestCopy(content)
    case "ig-reels": return generateIGReelsCopy(content)
    case "ig-post": return generateIGPostCopy(content)
    case "fb-twitter": return generateFBCopy(content)
    default: return generatePinterestCopy(content)
  }
}
