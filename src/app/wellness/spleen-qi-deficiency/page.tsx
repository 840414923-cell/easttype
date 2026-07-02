import type { Metadata } from "next"
import SpleenQiDeficiencyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "spleen-qi-deficiency"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Spleen Qi Deficiency: Signs, Causes & Healing Foods"
const DESC = "Always tired after eating? Bloated? Brain fog? Chinese medicine calls this Spleen Qi Deficiency. Learn the signs, what causes it, and which foods may help restore your digestive energy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Fatigue after meals, bloating, loose stools, and poor focus may all point to Spleen Qi Deficiency. Learn which foods and habits can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always tired after eating? It may be Spleen Qi Deficiency. Learn the signs and which foods may help.",
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
    { name: "Spleen Qi Deficiency", url: URL },
  ],
})

export default function SpleenQiDeficiencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpleenQiDeficiencyArticle />
    </>
  )
}
