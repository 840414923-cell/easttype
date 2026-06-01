import type { Metadata } from "next"
import LowVitalityArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "low-vitality"
const URL = `https://myeasterntype.com/patterns/${SLUG}`
const TITLE = "Low Vitality Pattern — Always Tired, Low Energy, Exhausted"
const DESC = "The Low Vitality pattern connects chronic fatigue, low energy, and afternoon crashes to Qi Deficiency in Traditional Chinese Medicine. Learn which foods and habits may help restore your energy."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Always running on empty? The Low Vitality pattern explains why your battery never charges to full and what Eastern body wisdom says about rebuilding energy.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always running on empty? Learn why your battery never charges to full.",
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
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Patterns", url: "https://myeasterntype.com/patterns" },
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
