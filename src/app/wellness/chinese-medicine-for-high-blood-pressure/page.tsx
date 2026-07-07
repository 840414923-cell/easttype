import type { Metadata } from "next"
import ChineseMedicineForHighBloodPressureArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-high-blood-pressure"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for High Blood Pressure: Liver Yang & Foods That May Help"
const DESC = "High blood pressure in TCM often reflects Liver Yang Rising or Kidney Yin Deficiency. Learn how Chinese medicine explains hypertension and which foods and herbs may help calm the surge."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "High blood pressure may signal Liver Yang Rising in TCM. Learn which cooling foods and calming herbs may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "High blood pressure? Chinese medicine sees Liver Yang Rising and Kidney Yin patterns.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-07",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for High Blood Pressure", url: URL },
  ],
})

export default function ChineseMedicineForHighBloodPressurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForHighBloodPressureArticle />
    </>
  )
}
