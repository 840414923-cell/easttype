import type { Metadata } from "next"
import LowVitalityArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "low-vitality"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Qi Deficiency: Why You're Always Tired and What to Eat"
const DESC = "Sleep 8 hours and still exhausted? Qi Deficiency may be why. Learn the signs, which foods may help rebuild your energy, and how it links to your body type."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Sleep 8 hours and still exhausted? Qi Deficiency may be why. Learn the signs and which foods may help rebuild your energy.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Sleep 8 hours and still exhausted? Qi Deficiency may be why.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-01",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
    { name: "Low Vitality", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LowVitalityArticle />
    </>
  )
}
