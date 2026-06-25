import type { Metadata } from "next"
import ChineseMedicineForPcosArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-pcos"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for PCOS: Dampness, Phlegm & Hormonal Balance"
const DESC = "Irregular periods, acne, and weight gain with PCOS may relate to Phlegm Dampness in Chinese medicine. Learn which patterns are involved and which foods may help support hormonal balance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "PCOS in Chinese medicine often involves dampness and phlegm patterns. Learn which foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "PCOS and Chinese medicine: patterns, dampness, and helpful foods.",
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
    { name: "Chinese Medicine for PCOS", url: URL },
  ],
})

export default function ChineseMedicineForPcosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForPcosArticle />
    </>
  )
}
