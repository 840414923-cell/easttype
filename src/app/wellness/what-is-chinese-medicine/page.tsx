import type { Metadata } from "next"
import WhatIsChineseMedicineArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "what-is-chinese-medicine"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "What Is Chinese Medicine? A Complete Beginner's Guide to TCM"
const DESC = "Chinese medicine is a 3,000-year-old system that treats the whole person, not just symptoms. Learn what TCM is, how it works, its 5 branches, and how it differs from Western medicine."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "What is Chinese medicine? A plain-English guide to TCM: what it is, how it works, the 5 branches (herbs, acupuncture, diet, qigong, tuina), body types, and when to use it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "A complete beginner's guide to Chinese medicine: what it is, how it works, and how to use it.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-24",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "What Is Chinese Medicine", url: URL },
  ],
})

export default function WhatIsChineseMedicinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhatIsChineseMedicineArticle />
    </>
  )
}
