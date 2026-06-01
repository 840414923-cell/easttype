import type { Metadata } from "next"
import Article from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "bloating-chinese-medicine"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Bloating & Chinese Medicine: Why You Feel Heavy After Eating"
const DESC = "Always bloated? Chinese medicine calls it Damp accumulation — your body holds moisture like a sponge. Learn the signs, causes, and which foods reduce bloating naturally."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your body holds moisture like a sponge. Here's what Chinese medicine says about chronic bloating and how to reduce it with food.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: { card: "summary_large_image", title: "Bloating & Chinese Medicine", description: "Always bloated? Your body holds moisture like a sponge." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
})

export default function BloatingPage() {
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
