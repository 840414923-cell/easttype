import type { Metadata } from "next"
import ChineseMedicineForDigestionArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-digestion"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Digestion: Spleen Health & Gut Foods"
const DESC = "Bloating, gas, and discomfort after eating may signal weak Spleen Qi. Learn how Chinese medicine views digestion and which warm foods may help restore comfortable, regular digestion."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Digestive issues in TCM often point to the Spleen. Learn which warm foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Bloating and gut discomfort? Chinese medicine may have food-based answers.",
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
    { name: "Chinese Medicine for Digestion", url: URL },
  ],
})

export default function ChineseMedicineForDigestionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForDigestionArticle />
    </>
  )
}
