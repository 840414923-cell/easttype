import type { Metadata } from "next"
import PickyEatingChildArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-picky-eating-child"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Picky Eating in Children: A Chinese Medicine Guide for Tired Spleens"
const DESC = "Picky eating is rarely bad behavior. In Chinese medicine, it is usually a tired Spleen paired with a tight Liver from mealtime stress. These gentle aromatic foods and habit changes may help reopen a child's appetite over one to two weeks."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "A Chinese medicine view of picky eating as information, not misbehavior, plus the gentle foods and habit shifts that may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Picky Eating in Children: A Chinese Medicine Guide",
    description: "Why picky eating is usually a tired Spleen, and the gentle foods that may help.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-19",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function PickyEatingChildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PickyEatingChildArticle />
    </>
  )
}
