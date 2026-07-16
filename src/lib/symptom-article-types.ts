export interface SymptomBodyType {
  name: string
  slug: string
  percentage?: string
  description: string
  keySigns: string[]
  matchHint?: string
}

export interface SymptomHelpCard {
  title: string
  description: string
}

export interface SymptomTcmVsModern {
  aspect: string
  westernView: string
  tcmView: string
}

export interface SymptomChecklist {
  title?: string
  items: string[]
  resultHint?: string
}

export interface SymptomRelatedSolution {
  slug: string
  title: string
  image: string
  prepNote?: string
}

export interface SymptomComparison {
  label: string
  answer: string
}

export interface SymptomArticleData {
  slug: string
  title: string
  tag: string
  readTime: string
  intro: string[]
  tcmExplanation: string[]
  metaphor?: string
  bodyTypes: SymptomBodyType[]
  tcmVsModern?: SymptomTcmVsModern[]
  whatMayHelp: SymptomHelpCard[]
  whenToSeeDoctor?: string
  relatedPattern?: { name: string; slug: string }
  relatedSymptoms: { slug: string; title: string; tag?: string }[]
  foodsForSlug?: string
  checklist?: SymptomChecklist
  relatedSolution?: SymptomRelatedSolution
  howIsItDifferent?: SymptomComparison[]
}
