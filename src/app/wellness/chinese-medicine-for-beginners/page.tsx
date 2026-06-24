import type { Metadata } from "next"
import BeginnersGuideArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-beginners"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Beginners: A Practical Starter Guide"
const DESC = "New to Chinese medicine? Start here. Learn the 3 key concepts, 5 foods to know, a simple 7-day starter plan, and common beginner mistakes to avoid. No experience needed."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "A practical starter guide for Chinese medicine beginners: 3 core concepts, 5 must-know foods, a 7-day plan, and the mistakes most beginners make.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "New to Chinese medicine? This starter guide covers everything you need to begin.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-24",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Beginners", url: URL },
  ],
})

export default function ChineseMedicineForBeginnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BeginnersGuideArticle />
    </>
  )
}
