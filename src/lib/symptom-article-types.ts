export interface SymptomBodyType {
  name: string
  slug: string
  percentage?: string
  description: string
  keySigns: string[]
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
  relatedSymptoms: { slug: string; title: string }[]
  foodsForSlug?: string
}
