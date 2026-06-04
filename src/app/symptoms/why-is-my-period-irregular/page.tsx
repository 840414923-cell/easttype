import type { Metadata } from "next"
import WhyPeriodIrregularArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-period-irregular"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Is My Period Irregular? Eastern Body Type Insights"
const DESC = "Skipping periods or unpredictable cycle length? Your Eastern body type may explain irregular menstruation. Learn which TCM patterns are linked to cycle disruption."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your cycle keeps shifting and you never know when it's coming? Your body type may explain why your period won't stick to a schedule.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your cycle keeps shifting and you never know when it's coming? Your body type may explain why.",
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
    { name: "Irregular Period", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhyPeriodIrregularArticle />
    </>
  )
}
