import type { Metadata } from "next"
import ChildAllergiesArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-allergies"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Allergies: Wei Qi and Lung-Supporting Foods That May Help"
const DESC = "In Chinese medicine, child allergies are read as a sign of weak Lung Qi and thin Wei Qi, the surface defense. Warm, gently tonifying foods such as astragalus and jujube tea, steamed Chinese yam, and lily bulb soup may help the surface defense settle over several weeks."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children react to every pollen season and dust cloud, and the warm, gentle Chinese foods that may help rebuild Lung Qi and Wei Qi, with a simple astragalus and jujube tea recipe for families.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Allergies",
    description: "Wei Qi and Lung Qi explained for parents, plus a simple astragalus and jujube defensive tea recipe families can make at home.",
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

export default function ChildAllergiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildAllergiesArticle />
    </>
  )
}
