import type { Metadata } from "next"
import ExcessiveSweatingArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-sweat-so-much"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Sweat So Much? Eastern Body Type Insights"
const DESC = "Sweating excessively even when it's not hot? Your Eastern body type may explain heavy sweating. Learn which TCM patterns are linked to excessive perspiration."
export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Sweating through your shirt when everyone else is fine? Your body type may explain why your internal thermostat is stuck on high.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Sweating through your shirt when everyone else is fine? Your body type may explain why your internal thermostat is stuck on high.",
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
    { name: "Excessive Sweating", url: URL },
  ],
})
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExcessiveSweatingArticle />
    </>
  )
}
