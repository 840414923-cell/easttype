import type { Metadata } from "next"
import WhyLibidoLowArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-libido-low"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Low Libido? Your Body Type Might Be the Reason"
const DESC = "Lost interest in intimacy and don't know why? Your Eastern body type may explain low libido. Learn which Eastern body types are linked to reduced desire and what may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Desire just disappeared one day and never came back? Your body type may explain why your drive went quiet.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Desire just disappeared one day and never came back? Your body type may explain why your drive went quiet.",
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
      <WhyLibidoLowArticle />
    </>
  )
}
