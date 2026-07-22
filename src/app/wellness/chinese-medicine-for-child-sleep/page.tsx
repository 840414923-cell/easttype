import type { Metadata } from "next"
import ChildSleepArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-sleep"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Sleep: Heart Shen and Calming Foods That May Help"
const DESC = "In Chinese medicine, a child's restless sleep often points to Heart Yin not anchoring the Shen. Lily bulb, lotus seed, and jujube are gentle foods that may help calm a wakeful child at night."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children wake through the night, and the calming Chinese foods that may help the Heart settle the Shen.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Sleep",
    description: "Restless sleep in children often traces to Heart Yin. Gentle foods like lily bulb and lotus seed may help, plus a calming congee recipe for families.",
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

export default function ChildSleepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildSleepArticle />
    </>
  )
}
