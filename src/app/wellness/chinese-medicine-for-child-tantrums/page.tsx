import type { Metadata } from "next"
import ChildTantrumsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-tantrums"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Tantrums: Liver Fire and Soothing Foods That May Help"
const DESC = "Chinese medicine for child tantrums links outbursts to Liver Fire and Liver Qi stagnation. Cooling foods like rose and chrysanthemum may help soothe your child's frustration. Take our free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Cooling Chinese medicine foods that may help soothe child tantrums, with a rose and chrysanthemum tea recipe and daily habits for frustrated kids.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Tantrums",
    description: "Why some kids explode over small things, and the cooling foods that may help. Plus a simple tea recipe for frustrated children.",
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

export default function ChildTantrumsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildTantrumsArticle />
    </>
  )
}
