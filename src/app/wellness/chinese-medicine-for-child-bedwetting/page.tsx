import type { Metadata } from "next"
import ChildBedwettingArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-bedwetting"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Bedwetting: Kidney Qi and Warming Foods That May Help"
const DESC = "Bedwetting past the usual age is framed in TCM as Kidney Qi that cannot yet hold fluids overnight. Warming foods like walnut, chestnut, and Chinese yam may help support Kidney Qi. Always consult your pediatrician. Take our free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Gentle Chinese foods that may help support a child's Kidney Qi, with a walnut and chestnut warming tea recipe and daily habits for calmer nights.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Bedwetting",
    description: "How Chinese medicine views bedwetting, and the warming Kidney-supporting foods that may help. Plus a simple walnut and chestnut tea recipe for kids.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-25",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function ChildBedwettingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildBedwettingArticle />
    </>
  )
}
