import type { Metadata } from "next"
import ChildDigestionArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-digestion"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Digestion: Spleen-Supporting Foods That May Help"
const DESC = "In Chinese medicine, a child's Spleen is naturally immature until age 6 or 7. These warm, gentle foods, including rice congee with Chinese yam and jujube dates, may help support weak digestion in picky eaters and kids with frequent stomach trouble."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Gentle, traditional Chinese foods that may help strengthen a child's digestion, with a simple rice congee recipe and daily habits for families.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Digestion",
    description: "Why kids get tummy trouble, and the warm foods that may help. Plus a simple congee recipe families can make at home.",
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

export default function ChildDigestionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildDigestionArticle />
    </>
  )
}
