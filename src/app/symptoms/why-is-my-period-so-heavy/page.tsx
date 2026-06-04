import type { Metadata } from "next"
import WhyPeriodHeavyArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-period-so-heavy"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Is My Period So Heavy? Eastern Body Type Insights"
const DESC = "Soaking through pads or passing clots? Your Eastern body type may explain heavy menstrual bleeding. Learn which TCM patterns are linked to menorrhagia."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Bleeding through pads and passing clots every month? Your body type may explain why your period won't stop flooding.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Bleeding through pads and passing clots every month? Your body type may explain the flood.",
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
    { name: "Heavy Period", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhyPeriodHeavyArticle />
    </>
  )
}
