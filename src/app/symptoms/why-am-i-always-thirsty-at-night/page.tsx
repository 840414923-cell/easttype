import type { Metadata } from "next"
import NightThirstArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-thirsty-at-night"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Am I Always Thirsty at Night? The Dryness That Wakes You"
const DESC = "Waking up thirsty every night? Your Eastern body type may explain nighttime thirst. Learn which TCM patterns are linked to dry mouth that disrupts sleep."
export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Can't sleep because you're always reaching for water? Your body type may explain why nighttime thirst won't quit.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Can't sleep because you're always reaching for water? Your body type may explain why nighttime thirst won't quit.",
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
    { name: "Night Thirst", url: URL },
  ],
})
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NightThirstArticle />
    </>
  )
}
