import type { Metadata } from "next"
import ChineseMedicineForColdHandsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-cold-hands"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Cold Hands and Feet: Causes & Warming Foods"
const DESC = "Always cold? Chinese medicine says cold extremities may signal Yang Deficiency or poor Qi circulation. Learn the patterns and which warming foods may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Cold hands and feet in Chinese medicine. Patterns, causes, and warming foods.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Cold hands and feet? Chinese medicine may have answers." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-26", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Cold Hands", url: URL },
  ],
})

export default function ChineseMedicineForColdHandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForColdHandsArticle />
    </>
  )
}
