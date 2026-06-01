import type { Metadata } from "next"
import WhyAlwaysTiredArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-tired"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Am I Always Tired? Eastern Body Type Insights"
const DESC = "Always tired even after sleeping well? Learn why from a Traditional Chinese Medicine perspective — and which body type may be connected to your chronic fatigue."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Sleeping well but still exhausted? TCM says your body type may explain why.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Sleeping well but still exhausted? TCM says your body type may explain why.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-01",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Symptoms", url: "https://myeasterntype.com/symptoms" },
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
      <WhyAlwaysTiredArticle />
    </>
  )
}
