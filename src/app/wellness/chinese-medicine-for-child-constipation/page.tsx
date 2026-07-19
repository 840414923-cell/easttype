import type { Metadata } from "next"
import ChildConstipationArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-constipation"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Constipation: Foods That May Help (and Why Bananas Often Backfire)"
const DESC = "Chinese medicine sees a child's intestines as a river that needs moisture and warmth. These gentle foods, like black sesame, cooked pear, and honey water, may help. Plus: why bananas often make childhood constipation worse."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why cold fruit can backfire, and the warm moistening foods that may help a constipated child get back into rhythm.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Constipation",
    description: "The warm, moistening foods that may help your child get back to regular. Plus why bananas often backfire.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-19",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function ChildConstipationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildConstipationArticle />
    </>
  )
}
