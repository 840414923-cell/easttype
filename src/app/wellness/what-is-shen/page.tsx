import type { Metadata } from "next"
import WhatIsShenArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "what-is-shen"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "What Is Shen in Chinese Medicine? The Mind-Body Connection"
const DESC = "Shen is the Chinese medicine concept of spirit and consciousness. Learn how Shen affects your sleep, mood, and mental clarity, and what happens when it is disturbed."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Shen explained in plain English. How your spirit affects sleep, mood, and clarity.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "What is Shen? The Chinese medicine concept of mind and spirit.",
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
    { name: "What Is Shen", url: URL },
  ],
})

export default function WhatIsShenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatIsShenArticle />
    </>
  )
}
