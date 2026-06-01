import type { Metadata } from "next"
import Article from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "acne-chinese-medicine"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Acne & Chinese Medicine: Why Breakouts Aren't Just a Skin Problem"
const DESC = "Chinese medicine sees acne as internal heat and dampness rising to the surface — not just clogged pores. Learn which body type is prone to breakouts and which foods calm the heat from the inside."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Acne is internal heat rising to the surface. Chinese medicine explains why and what to eat to calm it from the inside.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: { card: "summary_large_image", title: "Acne & Chinese Medicine", description: "Breakouts aren't just clogged pores. Chinese medicine sees internal heat rising to the surface." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
})

export default function AcnePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article />
    </>
  )
}
