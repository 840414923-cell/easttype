import type { Metadata } from "next"
import WhyAlwaysHungryArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-hungry"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Am I Always Hungry? Eastern Body Type Insights"
const DESC = "Never feel full no matter how much you eat? Your Eastern body type may explain constant hunger. Learn which TCM patterns are linked to an unsatisfiable appetite."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Just ate but already thinking about the next meal? Your body type may explain why your hunger never shuts off.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Just ate but already thinking about the next meal? Your body type may explain why your hunger never shuts off.",
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
      <WhyAlwaysHungryArticle />
    </>
  )
}
