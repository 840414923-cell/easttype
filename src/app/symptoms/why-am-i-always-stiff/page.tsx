import type { Metadata } from "next"
import WhyAlwaysStiffArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-stiff"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Am I Always Stiff? Eastern Body Type Insights"
const DESC = "Waking up stiff and barely able to move? Your Eastern body type may explain chronic stiffness. Learn which TCM patterns are linked to rigid muscles and joints."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your body feels like it was poured from concrete overnight? Your body type may explain the stiffness.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your body feels like it was poured from concrete overnight? Your body type may explain the stiffness.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-04",
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
      <WhyAlwaysStiffArticle />
    </>
  )
}
