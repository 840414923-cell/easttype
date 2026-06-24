import type { Metadata } from "next"
import WhatIsQiArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "what-is-qi"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "What Is Qi (Chi) Energy? A Simple Guide to Chinese Medicine's Core Concept"
const DESC = "Qi (chi) is the vital energy that flows through your body in Chinese medicine. Learn what qi is, how it moves, signs of qi imbalance, and which foods support your qi. Free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Qi (pronounced 'chee') is the foundational concept of Chinese medicine. Here's what it means in plain English, how to tell if yours is low or stuck, and what to do about it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Qi (pronounced 'chee') is the foundational concept of Chinese medicine. Here's what it means in plain English.",
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
    { name: "What Is Qi", url: URL },
  ],
})

export default function WhatIsQiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhatIsQiArticle />
    </>
  )
}
