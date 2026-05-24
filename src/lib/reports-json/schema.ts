export type LText = { en: string; "zh-TW": string; ja: string }

export interface FoodItem {
  name: LText
  nameZh: string
  aliases: string
  tcmAction: LText
  desc: LText
}

export interface DailyRhythmRow {
  time: string
  meridian: LText
  desc: LText
}

export interface RecipeIngredient {
  name: LText
  aliases: string
  amount: string
}

export interface Recipe {
  title: LText
  titleZh: string
  ingredients: RecipeIngredient[]
  tcmPrinciple: LText
  steps: LText[]
  tip: LText
}

export interface ReportBasic {
  ch1Identity: LText
  ch2FoodsLove: FoodItem[]
  ch2FoodsAvoid: LText[]
  ch3Seasonal: { highlight: LText; tips: LText[] }
  ch4DailyRhythm: DailyRhythmRow[]
  ch4Checklist: LText[]
  recipe: Recipe
}

export interface ProSeasonMap {
  spring: LText
  summer: LText
  autumn: LText
  winter: LText
}

export interface ProIngredient {
  name: LText
  aliases: string
  amount: string
}

export interface ProRecipe {
  title: LText
  titleZh: string
  ingredients: ProIngredient[]
  tcmPrinciple: LText
  steps: LText[]
  tip: LText
}

export interface ProScheduleRow {
  day: number
  wakeTime: string
  breakfast: string
  exercise: string
  water: string
  avoidCheck: string
  bedtime: string
  mood: string
}

export interface ProMonitorRow {
  day: number
  energy: string
  sleep: string
  digestion: string
  emotion: string
  bodyNote: string
  weight: string
}

export interface ReportPro {
  ch1Origin: LText
  ch1Emotion: LText
  ch2Combos: LText[]
  ch3SeasonDrinks: ProSeasonMap
  ch3SeasonNotes: ProSeasonMap
  ch4Acupoints: LText[]
  ch6Recipes: ProRecipe[]
  ch7Schedule: { headers: LText[]; rows: ProScheduleRow[]; footer: LText }
  ch8Monitor: { headers: LText[]; rows: ProMonitorRow[]; footer: LText }
}

export interface ReportSexPair {
  male: ReportBasic
  female: ReportBasic
}

export type Sex = "female" | "male"

import type { LocaleCode } from "../i18n/types"

export function t(text: LText, locale: LocaleCode): string {
  return text[locale] || text.en
}
