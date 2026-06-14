import type { Metadata } from "next"
import BreakingOutArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-keep-breaking-out"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Keep Breaking Out? Your Body Type Might Be Behind Your Skin"
const DESC = "Persistent acne that won't respond to skincare? Your Eastern body type may explain recurring breakouts. Learn which Eastern body types are linked to skin issues."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Tried every skincare product and still breaking out? Your body type may hold the answer.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Tried every skincare product and still breaking out? Your body type may hold the answer.",
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
      <BreakingOutArticle />
    </>
  )
}