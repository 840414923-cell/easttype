import type { Metadata } from "next"
import HeavySluggishArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "heavy-and-sluggish"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Always Bloated and Heavy? Your Body Type Holds Too Much Moisture"
const DESC = "The Heavy & Sluggish pattern links chronic bloating, heaviness, and daytime sleepiness to Phlegm Damp in Chinese medicine. Learn which foods and habits may help clear the fog."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Always bloated and heavy? The Heavy & Sluggish pattern explains why your body holds moisture like a sponge.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always bloated and heavy? Learn why your body holds moisture like a sponge.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-01",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
    { name: "Heavy & Sluggish", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeavySluggishArticle />
    </>
  )
}
