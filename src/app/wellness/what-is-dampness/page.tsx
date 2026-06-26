import type { Metadata } from "next"
import WhatIsDampnessArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "what-is-dampness"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "What Is Dampness in Chinese Medicine? Signs, Causes & Foods"
const DESC = "Feeling heavy, foggy, and sluggish? It may be dampness. Learn what dampness means in Chinese medicine, what causes it, and which foods may help clear it."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Dampness explained in plain English. Signs, causes, and drying foods.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "What is dampness in Chinese medicine? Signs and helpful foods.",
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
    { name: "What Is Dampness", url: URL },
  ],
})

export default function WhatIsDampnessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatIsDampnessArticle />
    </>
  )
}
