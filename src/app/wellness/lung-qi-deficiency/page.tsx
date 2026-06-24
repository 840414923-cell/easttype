import type { Metadata } from "next"
import LungQiDeficiencyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "lung-qi-deficiency"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Lung Qi Deficiency in Chinese Medicine: Signs, Causes & Foods"
const DESC = "Shortness of breath, weak voice, frequent colds, and easy sweating may signal Lung Qi Deficiency. Learn the signs, what causes it, and which foods may help strengthen your respiratory energy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Weak immunity, shortness of breath, and easy sweating may point to Lung Qi Deficiency. Learn which foods can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always catching colds and short of breath? It may be Lung Qi Deficiency. Learn the signs and helpful foods.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-25",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Lung Qi Deficiency", url: URL },
  ],
})

export default function LungQiDeficiencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LungQiDeficiencyArticle />
    </>
  )
}
