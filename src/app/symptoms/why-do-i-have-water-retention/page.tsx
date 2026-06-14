import type { Metadata } from "next"
import WaterRetentionArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-water-retention"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Puffy and Swollen? Your Body Type Holds Onto Moisture"
const DESC = "Puffy, swollen, or heavy from fluid buildup? Your Eastern body type may explain water retention. Learn which Eastern body types are linked to holding onto moisture."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Rings tight, face puffy, legs heavy? Your body type may explain why your body holds onto water it should be releasing.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Rings tight, face puffy, legs heavy? Your body type may explain why your body holds onto water it should be releasing.",
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
    { name: "Water Retention", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WaterRetentionArticle />
    </>
  )
}
