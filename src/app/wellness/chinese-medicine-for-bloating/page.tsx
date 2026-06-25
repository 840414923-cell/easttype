import type { Metadata } from "next"
import ChineseMedicineForBloatingArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-bloating"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Bloating: Spleen Qi & Gas Relief Foods"
const DESC = "Always bloated and uncomfortable? Chinese medicine views bloating as weak Spleen Qi or Liver Qi Stagnation. Learn which patterns cause gas and which warm foods may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Bloating in TCM often means weak Spleen Qi. Learn which warm foods may help reduce gas.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always bloated? Chinese medicine may have food-based answers.",
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
    { name: "Chinese Medicine for Bloating", url: URL },
  ],
})

export default function ChineseMedicineForBloatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForBloatingArticle />
    </>
  )
}
