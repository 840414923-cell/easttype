import type { Metadata } from "next"
import ChineseMedicineForHairLossArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-hair-loss"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Hair Loss: Kidney Essence, Blood, and Foods That May Help"
const DESC = "Hair loss in Chinese medicine may signal Kidney Essence depletion or Blood Deficiency. Learn which nourishing foods may help support healthy hair from within."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Hair loss in TCM often involves Kidney or Blood deficiency. Learn which foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Hair loss? Chinese medicine may have food strategies for hair health.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-06",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Hair Loss", url: URL },
  ],
})

export default function ChineseMedicineForHairLossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForHairLossArticle />
    </>
  )
}
