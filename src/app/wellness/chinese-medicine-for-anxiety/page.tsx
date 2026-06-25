import type { Metadata } from "next"
import ChineseMedicineForAnxietyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-anxiety"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Anxiety: Patterns, Causes & Calming Foods"
const DESC = "Racing thoughts, chest tightness, and constant worry may signal Liver Qi Stagnation or Heart Yin Deficiency. Learn how Chinese medicine views anxiety and which foods may help calm the mind."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Chinese medicine identifies several anxiety patterns. Learn which foods and habits may help calm your mind naturally.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Anxiety in Chinese medicine: patterns, foods, and habits that may help.",
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
    { name: "Chinese Medicine for Anxiety", url: URL },
  ],
})

export default function ChineseMedicineForAnxietyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForAnxietyArticle />
    </>
  )
}
