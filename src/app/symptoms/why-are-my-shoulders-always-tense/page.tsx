import type { Metadata } from "next"
import WhyTenseShouldersArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-are-my-shoulders-always-tense"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Are My Shoulders Always Tense? Eastern Body Type Insights"
const DESC = "Shoulders constantly knotted and tight? Your Eastern body type may explain chronic shoulder tension. Learn which TCM patterns are linked to upper body tightness."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your shoulders live somewhere near your ears? Your body type may explain why they never relax.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your shoulders live somewhere near your ears? Your body type may explain why they never relax.",
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
      <WhyTenseShouldersArticle />
    </>
  )
}
