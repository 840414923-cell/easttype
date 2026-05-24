export type ConstitutionId =
  | "balanced"
  | "qi_deficient"
  | "yang_deficient"
  | "yin_deficient"
  | "phlegm_damp"
  | "damp_heat"
  | "blood_stasis"
  | "qi_stagnant"
  | "sensitive"

export interface ConstitutionType {
  id: ConstitutionId
  zh: string
  zhPy: string
  en: string
  line: string
  color: string
  pct: string
  celebs: string
}

export interface QuizOption {
  text: string
  s: Partial<Record<ConstitutionId, number>>
}

export interface QuizQuestion {
  q: string
  opts: QuizOption[]
}

export interface QuizResult {
  primary: ConstitutionId
  secondary: ConstitutionId | null
  scores: Record<ConstitutionId, number>
}
