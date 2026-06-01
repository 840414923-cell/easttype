import type { Metadata } from "next"
import ColdHandsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "cold-hands-and-feet"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Cold Hands and Feet: Chinese Medicine Explains Why"
const DESC = "Always cold? Chinese medicine calls it Yang Deficiency — your inner furnace is underpowered. Learn the signs, warming foods, and why sunlight is literally medicine for your type."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your inner furnace is underpowered. Here's what Chinese medicine says about always being cold — and what to eat to warm up naturally.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your inner furnace is underpowered. Here's what Chinese medicine says about always being cold.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
})

export default function ColdHandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ColdHandsArticle />
    </>
  )
}
