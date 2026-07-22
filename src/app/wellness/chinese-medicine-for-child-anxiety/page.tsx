import type { Metadata } from "next"
import ChildAnxietyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-anxiety"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Anxiety: Heart and Kidney Patterns with Calming Foods That May Help"
const DESC = "In Chinese medicine, child anxiety is often linked to Heart-Kidney disharmony. Calming foods like lotus seed, longan, and lily bulb may help anchor your child's Shen and ease nighttime worry. Take our free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Gentle Chinese medicine foods that may help calm a child's anxiety, with a lotus seed and longan bedtime tea recipe and daily habits for worried kids.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Anxiety",
    description: "Why some children worry more than others, and the calming foods that may help. Plus a simple bedtime tea recipe families can make at home.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-22",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function ChildAnxietyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildAnxietyArticle />
    </>
  )
}
