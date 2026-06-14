import type { Metadata } from "next"
import ConstipatedArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-constipated"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Always Constipated? Your Body Type Slows Everything Down"
const DESC = "Chronic constipation that fiber doesn't fix? Your Eastern body type may explain it. Learn which Eastern body types are linked to sluggish bowel movements."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Eating fiber and drinking water but still blocked? Your body type may explain why your digestion can't get things moving.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Eating fiber and drinking water but still blocked? Your body type may explain why your digestion can't get things moving.",
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
    { name: "Constipation", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConstipatedArticle />
    </>
  )
}
