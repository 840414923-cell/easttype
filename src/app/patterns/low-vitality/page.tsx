import type { Metadata } from "next"
import LowVitalityArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "low-vitality"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Always Tired? Your Body Type Might Explain Why"
const DESC = "Sleep 8 hours and still exhausted? Your body type might be the reason. Discover which Eastern body pattern causes chronic fatigue and what you can eat to get your energy back."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Sleep 8 hours and still exhausted? Your body type might be the reason. Discover which Eastern pattern causes chronic fatigue.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Sleep 8 hours and still exhausted? Your body type might be the reason.",
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
