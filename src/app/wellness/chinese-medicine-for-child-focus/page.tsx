import type { Metadata } from "next"
import ChildFocusArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-focus"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Focus: Spleen and Phlegm Patterns with Clarifying Foods That May Help"
const DESC = "When a child cannot focus, Chinese medicine often sees phlegm clouding the head and Spleen weakness. Clarifying foods like tangerine peel, poria, and Chinese yam may help clear mental fog. Take our free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Clarifying Chinese medicine foods that may help improve a child's focus, with a tangerine peel and poria tea recipe and daily habits for foggy minds.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Focus",
    description: "Why some children cannot sustain attention, and the foods that may help clear mental fog. Plus a simple clarifying tea recipe for kids.",
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

export default function ChildFocusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildFocusArticle />
    </>
  )
}
