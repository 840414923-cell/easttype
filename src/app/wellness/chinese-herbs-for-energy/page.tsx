import type { Metadata } from "next"
import ChineseHerbsForEnergyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-herbs-for-energy"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Herbs for Energy: Top Herbs to Fight Fatigue"
const DESC = "Always tired? Learn which Chinese herbs and foods may help rebuild your energy naturally. From ginseng to goji, discover TCM approaches to chronic fatigue."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Chinese herbs for energy explained. Learn which herbs may help fight fatigue.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Chinese herbs for energy and fatigue relief." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-26", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Herbs for Energy", url: URL },
  ],
})

export default function ChineseHerbsForEnergyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseHerbsForEnergyArticle />
    </>
  )
}
