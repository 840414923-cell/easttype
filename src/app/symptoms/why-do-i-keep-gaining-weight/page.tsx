import type { Metadata } from "next"
import WhyDoIKeepGainingWeightArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-keep-gaining-weight"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Keep Gaining Weight? Eastern Body Type Insights"
const DESC = "Gaining weight despite eating the same? Your Eastern body type may explain it. Learn which TCM patterns are linked to weight gain and what may help your metabolism."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Eating the same but the scale keeps climbing? Your body type may explain why.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Eating the same but the scale keeps climbing? Your body type may explain why.",
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
      <WhyDoIKeepGainingWeightArticle />
    </>
  )
}
