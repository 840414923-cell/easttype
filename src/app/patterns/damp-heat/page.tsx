import type { Metadata } from "next"
import DampHeatArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "damp-heat"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Always Breaking Out? Your Body Type Runs Hot and Sticky"
const DESC = "The Damp Heat pattern links persistent acne, acid reflux, and irritability in humid weather to Damp Heat in Eastern wellness. Learn which cooling foods and habits may help clear the stickiness."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Hot, sticky, and breaking out? The Damp Heat pattern explains why your body feels like a sauna that can't cool down.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Hot, sticky, and breaking out? The Damp Heat pattern explains why your body feels like a sauna that can't cool down.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-02",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
    { name: "Damp Heat", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DampHeatArticle />
    </>
  )
}
