import type { Metadata } from "next"
import EczemaArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-eczema"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Have Eczema? Eastern Body Type Insights"
const DESC = "Eczema that keeps coming back no matter what you apply? Your Eastern body type may explain recurring eczema. Learn which TCM patterns are linked to skin flare-ups."
export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Cream after cream but the eczema keeps returning? Your body type may explain what your skin is trying to tell you.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Cream after cream but the eczema keeps returning? Your body type may explain what your skin is trying to tell you.",
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
    { name: "Eczema", url: URL },
  ],
})
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EczemaArticle />
    </>
  )
}
