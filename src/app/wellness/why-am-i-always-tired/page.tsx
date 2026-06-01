import type { Metadata } from "next"
import WellnessArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-tired"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Why Am I Always Tired? A Chinese Medicine Explanation"
const DESC = "Chinese medicine explains chronic fatigue as Qi Deficiency — your body's fuel is low. Learn the signs, causes, and which foods can help restore your energy naturally."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Western medicine says 'get more sleep.' Chinese medicine says 'your fuel is low.' Here's what that means and what to do about it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Western medicine says 'get more sleep.' Chinese medicine says 'your fuel is low.' Here's what that means.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Wellness", url: "https://myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function WhyAlwaysTiredPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WellnessArticle />
    </>
  )
}
