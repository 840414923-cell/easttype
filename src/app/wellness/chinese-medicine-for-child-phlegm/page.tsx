import type { Metadata } from "next"
import ChildPhlegmArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-phlegm"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Phlegm: Dampness Trapped in the Lungs and Foods That May Help"
const DESC = "In Chinese medicine, a child's persistent phlegm often starts in the Spleen, not the Lungs. Tangerine peel, radish, and coix seed may help dry dampness and ease the morning rattle over two to three weeks."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why a child's chest always rattles, and the warm traditional foods that may help the Spleen stop producing dampness before it reaches the Lungs.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Phlegm",
    description: "A rattle in the chest often starts in the Spleen. Warm foods and daily habits that may help clear dampness.",
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

export default function ChildPhlegmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildPhlegmArticle />
    </>
  )
}
