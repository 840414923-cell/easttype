import type { Metadata } from "next"
import ChildStomachAcheArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-stomach-ache"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Stomach Ache: Cold in the Middle and Warming Foods That May Help"
const DESC = "In Chinese medicine, a child's recurring stomach ache often means Cold has settled in the digestive middle. Warm foods like jujube ginger millet porridge may help the Spleen regain its warmth over several weeks."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children complain of tummy pain every week, and the warm traditional foods that may help settle their middle.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Stomach Ache",
    description: "Recurring tummy pain in children often traces to Cold in the middle. Warm foods and daily habits that may help.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-20",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function ChildStomachAchePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildStomachAcheArticle />
    </>
  )
}
