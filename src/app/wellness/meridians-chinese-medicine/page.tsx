import type { Metadata } from "next"
import MeridiansChineseMedicineArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "meridians-chinese-medicine"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Meridians in Chinese Medicine: Energy Pathways Explained"
const DESC = "What are meridians? Learn how Chinese medicine maps energy pathways through your body, why they matter for health, and what happens when the flow is blocked."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Meridians explained in plain English. The 12 main channels and what they mean for your health.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Meridians in Chinese medicine: energy pathways and your health.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-26",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Meridians", url: URL },
  ],
})

export default function MeridiansChineseMedicinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MeridiansChineseMedicineArticle />
    </>
  )
}
