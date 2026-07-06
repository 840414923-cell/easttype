import type { Metadata } from "next"
import ChineseMedicineForEczemaArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-eczema"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Eczema: Damp Heat, Blood Deficiency, and Foods That May Help"
const DESC = "Eczema in Chinese medicine may involve Damp Heat, Blood Deficiency, or Wind. Learn which cooling and nourishing foods may help calm the skin from within."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Eczema in TCM often involves Damp Heat or Blood Deficiency. Learn which foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Eczema? Chinese medicine may have food strategies for skin health.",
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
    { name: "Chinese Medicine for Eczema", url: URL },
  ],
})

export default function ChineseMedicineForEczemaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForEczemaArticle />
    </>
  )
}
