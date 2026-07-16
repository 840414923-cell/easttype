import type { Metadata } from "next"
import ChineseMedicineForNauseaArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-nausea"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Nausea: Stomach Qi & Ginger Relief Foods"
const DESC = "Always nauseous? Chinese medicine sees nausea as Stomach Qi rebelling upward instead of descending. Learn which patterns cause queasiness and which warm foods like ginger may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Nausea in TCM often means Stomach Qi is rebelling upward. Learn which warm foods like ginger may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always queasy? Chinese medicine may have food-based answers.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-16",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Nausea", url: URL },
  ],
})

export default function ChineseMedicineForNauseaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForNauseaArticle />
    </>
  )
}
