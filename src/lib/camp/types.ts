export interface DailyMeal {
  name: string
  description: string
  westernVersion: string
  chineseVersion?: string
}

export interface DailyTea {
  name: string
  recipe: string
  benefit: string
}

export interface DailyPlan {
  day: number
  week: number
  weekTheme: string
  dayFocus: string
  breakfast: DailyMeal
  lunch: DailyMeal
  dinner: DailyMeal
  tea: DailyTea
  lifestyleTip: string
  avoidList: string[]
  bodyTypeTip: string
}

export interface WeekTheme {
  week: number
  theme: string
  description: string
  unlockDay: number
}

export interface ShoppingCategory {
  category: string
  store: string
  items: { name: string; amount: string; note?: string }[]
}

export interface CampMeta {
  slug: string
  title: string
  subtitle: string
  description: string
  duration: number
  bodyTypes: string[]
  priceWithQuiz: number
  priceWithoutQuiz: number
  heroImage: string
  weeks: WeekTheme[]
}

export interface CampEnrollment {
  id: string
  userId: string
  campSlug: string
  bodyType: string
  startDate: string | null
  status: "prep" | "active" | "completed" | "cancelled"
  currentDay: number
  planType: "with_quiz" | "without_quiz"
}

export interface DailyCheckin {
  id?: string
  userId: string
  campSlug: string
  dayNumber: number
  checkinDate: string
  breakfast: boolean
  lunch: boolean
  dinner: boolean
  tea: boolean
  lifestyle: boolean
  journal: string
  mood: "great" | "good" | "okay" | "low" | "bad" | null
}

export interface WeekSummary {
  week: number
  theme: string
  totalDays: number
  completedDays: number
  teaRate: number
  mealRate: number
  lifestyleRate: number
  moodTrend: string
  message: string
  nextWeekFocus: string
}

export const BODY_TYPE_LABELS: Record<string, { name: string; char: string; color: string }> = {
  qi_deficient: { name: "Qi Deficient", char: "气", color: "#B45309" },
  yang_deficient: { name: "Yang Deficient", char: "阳", color: "#C2410C" },
  yin_deficient: { name: "Yin Deficient", char: "阴", color: "#0369A1" },
  qi_stagnant: { name: "Qi Stagnant", char: "郁", color: "#6D28D9" },
  phlegm_damp: { name: "Phlegm Damp", char: "痰", color: "#047857" },
  damp_heat: { name: "Damp Heat", char: "湿", color: "#B91C1C" },
  blood_stasis: { name: "Blood Stasis", char: "瘀", color: "#BE123C" },
  special_diathesis: { name: "Sensitive", char: "特", color: "#4338CA" },
  balanced: { name: "Balanced", char: "平", color: "#15803D" },
}
