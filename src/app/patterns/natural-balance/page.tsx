import type { Metadata } from "next"
import NaturalBalanceArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "natural-balance"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "The Body Type That Just Works (Is It Yours?)"
const DESC = "The Natural Balance pattern represents the baseline constitution in Eastern wellness. Learn what a balanced body feels like, how to recognize it, and how to protect it from drifting off course."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your body just works. No drama, no chronic complaints. The Natural Balance pattern is rarer than you think.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your body just works. Learn what keeps it that way.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-03",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
    { name: "Natural Balance", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NaturalBalanceArticle />
    </>
  )
}
