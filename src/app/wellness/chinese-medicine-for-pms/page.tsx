import type { Metadata } from "next"
import ChineseMedicineForPmsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-pms"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for PMS: Liver Qi, Blood, and Foods That May Help"
const DESC = "PMS in Chinese medicine may involve Liver Qi Stagnation, Blood Deficiency, or Cold in the uterus. Learn which foods may help ease premenstrual symptoms."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "PMS in TCM often involves Liver Qi Stagnation or Blood Deficiency. Learn which foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "PMS? Chinese medicine may have food strategies for menstrual health.",
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
    { name: "Chinese Medicine for PMS", url: URL },
  ],
})

export default function ChineseMedicineForPmsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForPmsArticle />
    </>
  )
}
