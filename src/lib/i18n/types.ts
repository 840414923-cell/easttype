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
    subtitle: string
    cta: string
    ctaSub: string
    ctaSecondary: string
    discoverTitle: string
    discover1: string
    discover2: string
    discover3: string
    discover4: string
    discover5: string
    archetypeTitle: string
    archetypeLine1: string
    archetypeLine2: string
    howTitle: string
    how1Title: string
    how1Desc: string
    how2Title: string
    how2Desc: string
    how3Title: string
    how3Desc: string
    previewTitle: string
    previewBadge: string
    previewType: string
    previewTrait1: string
    previewTrait2: string
    previewTrait3: string
    previewSug1: string
    previewSug2: string
    previewSug3: string
    previewSub: string
    seoTitle: string
    seoP1: string
    seoP2: string
    faqTitle: string
    faq1Q: string
    faq1A: string
    faq2Q: string
    faq2A: string
    faq3Q: string
    faq3A: string
    faq4Q: string
    faq4A: string
    readySubtitleBefore: string
    readySubtitleAfter: string
  }
  questions: LocaleQuizQuestion[]
  types: Record<string, TypeViral>
}
