import type { Metadata } from "next"
import ChineseFaceMappingArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-face-mapping"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Face Mapping: What Your Face Says About Your Health"
const DESC = "Chinese face mapping reads facial zones, colors, and features to assess internal organ health. Learn what your forehead, nose, cheeks, and chin may reveal."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your face may be a map of your internal health. Chinese medicine has been reading facial signals for 2,000 years. Here is what each zone means.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your face may be a map of your internal health. Chinese medicine has been reading facial signals for 2,000 years.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-08",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Face Mapping", url: URL },
  ],
})

export default function ChineseFaceMappingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseFaceMappingArticle />
    </>
  )
}
