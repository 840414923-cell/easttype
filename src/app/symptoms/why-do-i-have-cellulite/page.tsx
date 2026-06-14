import type { Metadata } from "next"
import WhyCelluliteArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-cellulite"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Stubborn Cellulite? Your Body Type Might Explain Those Dimples"
const DESC = "Stubborn cellulite that creams and exercise don't fix? Your Eastern body type may explain it. Learn which Eastern body types are linked to cellulite from an Eastern perspective."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Cellulite that won't budge no matter what you try? Your body type may explain why those dimples settled in.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Cellulite that won't budge no matter what you try? Your body type may explain why those dimples settled in.",
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
      <WhyCelluliteArticle />
    </>
  )
}
