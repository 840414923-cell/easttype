import type { Metadata } from "next"
import WhyStomachPainArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-stomach-pain"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Stomach Pain With No Clear Cause? Your Body Type Sends Warning Signals"
const DESC = "Recurring stomach pain with no clear diagnosis? Your Eastern body type may explain it. Learn which Eastern body types are linked to chronic stomach ache."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your stomach hurts but the doctor says everything looks fine? Your body type may explain the pain.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your stomach hurts but the doctor says everything looks fine? Your body type may explain the pain.",
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
      <WhyStomachPainArticle />
    </>
  )
}
