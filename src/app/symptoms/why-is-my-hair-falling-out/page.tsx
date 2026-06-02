import type { Metadata } from "next"
import HairFallingOutArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-hair-falling-out"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Is My Hair Falling Out? Eastern Body Type Insights"
const DESC = "More hair in the brush than on your head? Your Eastern body type may explain hair thinning. Learn which TCM patterns are linked to hair loss."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Watching your hair thin and don't know why? Your body type may explain it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Watching your hair thin and don't know why? Your body type may explain it.",
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
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Symptoms", url: "https://myeasterntype.com/symptoms" },
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
      <HairFallingOutArticle />
    </>
  )
}