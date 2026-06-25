import type { Metadata } from "next"
import ChineseMedicineForHotFlashesArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-hot-flashes"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Hot Flashes: Cooling Yin & Reducing Heat"
const DESC = "Sudden heat, flushing, and sweating may signal declining Kidney Yin. Learn how Chinese medicine explains hot flashes and which cooling foods may help bring your internal temperature back into balance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Hot flashes in Chinese medicine point to Yin Deficiency and empty heat. Learn which cooling foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Hot flashes? Chinese medicine may have cooling food strategies.",
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
    { name: "Chinese Medicine for Hot Flashes", url: URL },
  ],
})

export default function ChineseMedicineForHotFlashesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForHotFlashesArticle />
    </>
  )
}
