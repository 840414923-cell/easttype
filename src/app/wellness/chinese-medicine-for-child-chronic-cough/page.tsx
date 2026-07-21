import type { Metadata } from "next"
import ChildChronicCoughArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-chronic-cough"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Chronic Cough: Phlegm Patterns and Foods That May Help"
const DESC = "In Chinese medicine, a child's chronic cough often comes from phlegm damp or lung dryness after repeated infections. Pear with rock sugar, loquat, and almond may gently calm the cough over two to three weeks."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why a child's cough lingers for weeks after a cold, and the traditional Chinese foods that may help phlegm damp and dry lung patterns settle.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Chronic Cough",
    description: "A cough that lingers for weeks is often phlegm or dry lungs, not infection. Traditional foods and habits that may help your child.",
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

export default function ChildChronicCoughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildChronicCoughArticle />
    </>
  )
}
