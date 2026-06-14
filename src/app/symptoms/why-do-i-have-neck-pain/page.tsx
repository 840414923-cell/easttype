import type { Metadata } from "next"
import WhyNeckPainArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-neck-pain"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Chronic Neck Pain? Your Body Type Carries Tension There"
const DESC = "Stiff, aching neck with no injury? Your Eastern body type may explain chronic neck pain. Learn which Eastern body types are linked to neck tension and stiffness."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your neck feels like it's carrying the weight of the world? Your body type may explain why the tension lives there.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your neck feels like it's carrying the weight of the world? Your body type may explain why the tension lives there.",
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
      <WhyNeckPainArticle />
    </>
  )
}
