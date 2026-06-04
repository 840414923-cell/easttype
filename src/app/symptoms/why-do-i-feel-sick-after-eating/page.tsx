import type { Metadata } from "next"
import WhySickAfterEatingArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-feel-sick-after-eating"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Feel Sick After Eating? Eastern Body Type Insights"
const DESC = "Feeling unwell after every meal? Your Eastern body type may explain post-meal sickness. Learn which TCM patterns are linked to feeling sick after eating."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Feel unwell after every meal? Your body type may explain why eating makes you feel worse, not better.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Feel unwell after every meal? Your body type may explain why eating makes you feel worse, not better.",
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
      <WhySickAfterEatingArticle />
    </>
  )
}
