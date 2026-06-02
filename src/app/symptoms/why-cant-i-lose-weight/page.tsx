import type { Metadata } from "next"
import LoseWeightArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-cant-i-lose-weight"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Can't I Lose Weight? Eastern Body Type Insights"
const DESC = "Trying to lose weight but nothing works? Your Eastern body type may explain a sluggish metabolism. Learn which TCM patterns are linked to stubborn weight."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Dieting but the scale won't move? Your body type may explain why your metabolism is stuck.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Dieting but the scale won't move? Your body type may explain why your metabolism is stuck.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-02",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
    { name: TITLE, url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoseWeightArticle />
    </>
  )
}
