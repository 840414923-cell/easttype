import type { Metadata } from "next"
import ChildImmuneSystemArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-immune-system"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Immune System: Lung, Spleen and Kidney Foods That May Help"
const DESC = "In Chinese medicine, a child's resistance is described as a three-layer defense: the Lungs guard the surface, the Spleen produces the daily supply, and the Kidneys hold the deepest reserve. Foods such as shiitake and goji soup, astragalus broth, and Chinese yam porridge may help rebuild the full depth of immunity over several months."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children catch everything and recover slowly, and how Chinese medicine reads it as a three-layer defense of Lung, Spleen, and Kidney, with a simple shiitake and goji immune soup recipe for families.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Immune System",
    description: "The Lung, Spleen, and Kidney layers of a child's defense, explained for parents, plus a simple shiitake and goji immune soup recipe families can make at home.",
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

export default function ChildImmuneSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildImmuneSystemArticle />
    </>
  )
}
