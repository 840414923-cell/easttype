import type { Metadata } from "next"
import ChildEczemaArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-eczema"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Eczema: Damp Heat and Cooling Foods That May Help"
const DESC = "In Chinese medicine, child eczema is read as an internal damp heat pattern, not a skin problem. When the Spleen cannot transform fluids, dampness collects, warms, and vents through the skin. Cooling, draining foods such as mung bean and coix seed porridge may help clear the pattern over several weeks."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children flare with red, itchy patches every summer, and how Chinese medicine reads it as internal damp heat, with a simple mung bean and coix seed cooling porridge recipe families can make at home.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Eczema",
    description: "Damp heat and Spleen weakness explained for parents, plus a simple mung bean and coix seed cooling porridge recipe families can make at home.",
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

export default function ChildEczemaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildEczemaArticle />
    </>
  )
}
