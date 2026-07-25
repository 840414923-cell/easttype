import type { Metadata } from "next"
import GrowingTallArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-growing-tall"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Growing Tall: Kidney Essence and Growth Foods That May Help"
const DESC = "In Chinese medicine, growth is governed by Kidney Essence, the inherited reserve that fuels bone and marrow. Warm foods like bone broth, walnut, and black sesame may help support a child's natural growth potential. Take our free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Gentle Chinese foods that may help support a child's natural growth potential, with a bone broth and walnut soup recipe and daily habits for steady development.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Growing Tall",
    description: "How Chinese medicine views growth, and the warming foods that may help support a child's natural growth potential. Plus a simple bone broth and walnut soup recipe.",
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

export default function GrowingTallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GrowingTallArticle />
    </>
  )
}
