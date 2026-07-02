import type { Metadata } from "next"
import BloodDeficiencyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "blood-deficiency"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Blood Deficiency Symptoms: Signs, Causes & Nourishing Foods"
const DESC = "Pale skin, dizziness, brittle nails, dry hair, and poor sleep may signal Blood Deficiency. Learn the signs, what causes it, and which iron-rich foods may help nourish your Blood in TCM."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Pale complexion, dizziness, and numbness may point to Blood Deficiency. Learn which foods can help nourish Blood.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Pale, dizzy, and tired? It may be Blood Deficiency in Chinese medicine. Learn the signs and nourishing foods.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-25",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Blood Deficiency", url: URL },
  ],
})

export default function BloodDeficiencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BloodDeficiencyArticle />
    </>
  )
}
