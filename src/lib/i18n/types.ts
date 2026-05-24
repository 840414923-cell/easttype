export type LocaleCode = "en" | "zh-TW" | "ja"

export interface TypeViral {
  nickname: string
  cardHeadline: string
  tagSomeone: string
  predictions: [string, string, string]
}

export interface LocaleQuizQuestion {
  q: string
  opts: [string, string, string, string]
}

export interface LocaleData {
  code: LocaleCode
  label: string
  ui: {
    startQuiz: string
    discoverType: string
    free: string
    minutes: string
    noSignup: string
    bodyTypes: string
    yearsOfWisdom: string
    freeToDiscover: string
    exit: string
    home: string
    backToResults: string
    yourEasternType: string
    sharedByAbout: string
    ofPeople: string
    secondaryTendency: string
    fullReportIncludes: string
    unlockReport: string
    moneyBack: string
    shareInstagram: string
    shareTwitter: string
    shareFacebook: string
    shareWhatsApp: string
    shareLine: string
    copyLink: string
    linkCopied: string
    viewSampleReport: string
    takeFreeQuiz: string
    nineTypesTitle: string
    nineTypesSubtitle: string
    readyTitle: string
    readySubtitleBefore: string
    readySubtitleAfter: string
    footerDisclaimer: string
    footerCopyright: string
    loadingResult: string
    startNewQuiz: string
    planBasicName: string
    planBasicPrice: string
    planBasicDesc: string
    planBasicFeature1: string
    planBasicFeature2: string
    planBasicFeature3: string
    planBasicFeature4: string
    planBasicFeature5: string
    planProName: string
    planProPrice: string
    planProDesc: string
    planProFeature1: string
    planProFeature2: string
    planProFeature3: string
    planProFeature4: string
    planProFeature5: string
    planProFeature6: string
    planProBadge: string
    planCta: string
    planCtaPro: string
    planMostPopular: string
    midRevealBadge: string
    midRevealTitle: string
    midRevealSubtitle: string
    midRevealHook: string
    midRevealCta: string
    midRevealSkip: string
    midRevealAccuracy: string
    midRevealPhase1: string
    midRevealPhase2: string
    midRevealShareText: string
    midRevealShareCta: string
    midRevealQuestions1: string
    midRevealQuestions2: string
    midRevealCompletionTitle: string
    midRevealCompletionSubtitle: string
  }
  landing: {
    badge: string
    title1: string
    title2em: string
    subtitleBefore: string
    subtitleHighlight: string
    subtitleAfter: string
    readySubtitleBefore: string
    readySubtitleAfter: string
  }
  questions: LocaleQuizQuestion[]
  types: Record<string, TypeViral>
}
