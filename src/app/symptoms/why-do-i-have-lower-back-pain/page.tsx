import type { Metadata } from "next"
import LowerBackPainArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-lower-back-pain"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Lower Back Pain? Your Body Type Weakens the Foundation"
const DESC = "Chronic lower back pain with no clear injury? Your Eastern body type may explain it. Learn which Eastern body types are linked to persistent lower back ache."
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Back hurts but nothing showed up on the scan? Your body type may explain why your lower back keeps aching.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Back hurts but nothing showed up on the scan? Your body type may explain why your lower back keeps aching.",
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
    { name: "Lower Back Pain", url: URL },
  ],
})
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LowerBackPainArticle />
    </>
  )
}
