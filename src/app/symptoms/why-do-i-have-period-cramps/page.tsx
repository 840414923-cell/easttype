import type { Metadata } from "next"
import WhyPeriodCrampsArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-period-cramps"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Have Period Cramps? Eastern Body Type Insights"
const DESC = "Painful period cramps every month? Your Eastern body type may explain dysmenorrhea. Learn which TCM patterns are linked to menstrual pain and what may help."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Monthly cramps that knock you out? Your body type may explain why your period brings pain and what Eastern medicine suggests.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Monthly cramps that knock you out? Your body type may explain why your period brings pain.",
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
    { name: "Period Cramps", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhyPeriodCrampsArticle />
    </>
  )
}
