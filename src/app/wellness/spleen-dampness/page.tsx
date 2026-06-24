import type { Metadata } from "next"
import SpleenDampnessArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "spleen-dampness"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Spleen Dampness in Chinese Medicine: Signs, Causes & Foods"
const DESC = "Feeling heavy, sluggish, foggy, and bloated? It may be Spleen Dampness. Learn the signs, what causes dampness, and which foods may help dry it out and restore clear energy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Heavy limbs, brain fog, and sticky stools may point to Spleen Dampness. Learn which drying foods can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Feeling heavy and foggy? It may be Spleen Dampness. Learn the signs and drying foods that may help.",
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
    { name: "Spleen Dampness", url: URL },
  ],
})

export default function SpleenDampnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpleenDampnessArticle />
    </>
  )
}
