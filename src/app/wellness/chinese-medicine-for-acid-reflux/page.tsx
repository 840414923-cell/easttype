import type { Metadata } from "next"
import ChineseMedicineForAcidRefluxArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-acid-reflux"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Acid Reflux: Stomach Heat & Cooling Foods"
const DESC = "Burning chest, sour taste, and regurgitation may signal Stomach Heat or Liver overacting on the Stomach. Learn how Chinese medicine explains acid reflux and which cooling foods may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Acid reflux in TCM often involves Stomach Heat. Learn which cooling foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Acid reflux? Chinese medicine may have cooling food strategies.",
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
    { name: "Chinese Medicine for Acid Reflux", url: URL },
  ],
})

export default function ChineseMedicineForAcidRefluxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForAcidRefluxArticle />
    </>
  )
}
