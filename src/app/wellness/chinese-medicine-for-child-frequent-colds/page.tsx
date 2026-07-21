import type { Metadata } from "next"
import ChildFrequentColdsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-frequent-colds"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Frequent Colds: Weak Lung Qi and Foods That May Strengthen Defense"
const DESC = "In Chinese medicine, a child who catches every cold often has weak Lung Qi and thin Wei Qi. Astragalus, Chinese yam, and pear may help rebuild surface defense over several weeks of consistent use."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children catch every cold that goes around preschool, and the traditional Lung-supporting foods that may strengthen surface defense between colds.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Frequent Colds",
    description: "When a child catches every cold, weak Lung Qi is often the root. Astragalus, pear, and Chinese yam may help rebuild surface defense.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-21",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function ChildFrequentColdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildFrequentColdsArticle />
    </>
  )
}
