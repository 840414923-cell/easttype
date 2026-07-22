import type { Metadata } from "next"
import ChildNightTerrorsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-night-terrors"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Night Terrors: Heart Heat and Calming Foods That May Help"
const DESC = "A child who screams in the night, eyes open but unreachable, may be showing Heart Heat or Phlegm Heat disturbing the Shen. Lotus heart, chrysanthemum, and mung bean are gentle cooling foods that may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children scream in the night and remember nothing, and the cooling Chinese foods that may help clear Heart Heat and calm the Shen.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Night Terrors",
    description: "Night terrors often trace to Heart Heat or Phlegm Heat. Lotus heart, chrysanthemum, and mung bean may help, plus a cooling tea recipe for families.",
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

export default function ChildNightTerrorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildNightTerrorsArticle />
    </>
  )
}
