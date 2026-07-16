import type { Metadata } from "next"
import WhatIsBloodArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "what-is-blood"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "What Is Blood in Chinese Medicine? Xue, Nourishment & the Mind"
const DESC = "In Chinese medicine, Blood (Xue) does more than flow through veins. It nourishes the body, moistens tissues, and anchors the mind. Learn how TCM views Blood and which foods nourish it."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "In Chinese medicine, Blood does more than flow through veins. It nourishes the body and anchors the mind.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "What is Blood in Chinese medicine? Far more than the red fluid in your veins.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-16",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "What Is Blood in Chinese Medicine", url: URL },
  ],
})

export default function WhatIsBloodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatIsBloodArticle />
    </>
  )
}
