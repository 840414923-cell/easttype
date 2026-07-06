import type { Metadata } from "next"
import ChineseMedicineForDepressionArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-depression"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Depression: Qi Stagnation, Spleen, and Foods That May Help"
const DESC = "Depression in Chinese medicine may involve stuck Liver Qi, Spleen deficiency, or Kidney Yang depletion. Learn which foods and habits may help lift the heaviness."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Depression in TCM often involves Liver Qi stagnation or Spleen deficiency. Learn which foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Depression? Chinese medicine may have food and lifestyle strategies.",
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
    { name: "Chinese Medicine for Depression", url: URL },
  ],
})

export default function ChineseMedicineForDepressionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForDepressionArticle />
    </>
  )
}
