import type { Metadata } from "next"
import AcidRefluxArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-acid-reflux"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Have Acid Reflux? Eastern Body Type Insights"
const DESC = "Burning in your chest after meals? Your Eastern body type may explain chronic acid reflux. Learn which TCM patterns are linked to heartburn."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "That burning feeling keeps coming back? Your body type may explain why reflux won't go away.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "That burning feeling keeps coming back? Your body type may explain why reflux won't go away.",
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
      <AcidRefluxArticle />
    </>
  )
}
