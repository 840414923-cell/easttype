import type { Metadata } from "next"
import WhyChronicCoughArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-a-chronic-cough"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Chronic Cough Won't Stop? Your Body Type Keeps the Tickles"
const DESC = "A cough that lingers for weeks or months? Your Eastern body type may explain it. Learn which Eastern body types are linked to persistent coughing."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "That cough just won't go away no matter what you try? Your body type may explain why it keeps coming back.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "That cough just won't go away no matter what you try? Your body type may explain why it keeps coming back.",
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
      <WhyChronicCoughArticle />
    </>
  )
}
