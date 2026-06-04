import type { Metadata } from "next"
import WhyOilyFaceArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-face-so-oily"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Is My Face So Oily? Eastern Body Type Insights"
const DESC = "Shiny forehead by noon and blotting sheets don't help? Your Eastern body type may explain oily skin. Learn which TCM patterns are linked to excess facial oil."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Wash your face and it's oily again an hour later? Your body type may explain why your skin produces too much oil.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Wash your face and it's oily again an hour later? Your body type may explain why your skin produces too much oil.",
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
      <WhyOilyFaceArticle />
    </>
  )
}
