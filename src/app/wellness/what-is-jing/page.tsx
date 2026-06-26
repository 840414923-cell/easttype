import type { Metadata } from "next"
import WhatIsJingArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "what-is-jing"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "What Is Jing in Chinese Medicine? Your Vital Essence Explained"
const DESC = "Jing is your deepest energy reserve in Chinese medicine. Learn what Jing essence is, how it affects aging and vitality, and which foods may help preserve it."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Jing explained in plain English. Your vital essence, aging, and longevity.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "What is Jing? Chinese medicine's concept of vital essence.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-26",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "What Is Jing", url: URL },
  ],
})

export default function WhatIsJingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatIsJingArticle />
    </>
  )
}
