import type { Metadata } from "next"
import IrritableArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-so-irritable"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Am I So Irritable? Eastern Body Type Insights"
const DESC = "Snapping at people for no reason? Your Eastern body type may explain chronic irritability. Learn which TCM patterns are linked to a short fuse."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Everything getting on your nerves? Your body type may explain why your patience is always running thin.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Everything getting on your nerves? Your body type may explain why your patience is always running thin.",
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
      <IrritableArticle />
    </>
  )
}