import type { Metadata } from "next"
import ChineseMedicineForFatigueArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-fatigue"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Fatigue: Qi, Spleen & Energy Foods"
const DESC = "Always tired even after sleep? Chinese medicine views chronic fatigue as Qi Deficiency or Spleen weakness. Learn which patterns cause low energy and which foods may help rebuild it."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Chronic fatigue in Chinese medicine may be Qi Deficiency. Learn which warm foods may help rebuild energy.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always tired? Chinese medicine may have answers. Learn the patterns and energy foods.",
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
    { name: "Chinese Medicine for Fatigue", url: URL },
  ],
})

export default function ChineseMedicineForFatiguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForFatigueArticle />
    </>
  )
}
