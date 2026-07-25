import type { Metadata } from "next"
import ChildLowEnergyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-low-energy"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Low Energy: Spleen Qi and Kidney Foods That May Help"
const DESC = "When a child is always tired despite enough sleep, Chinese medicine often points to Spleen Qi weakness. Warm foods like sweet potato, jujube, and Chinese yam may help build steady energy. Take our free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Warm, gentle Chinese foods that may help a tired child build steadier energy, with a sweet potato and jujube porridge recipe and daily habits for families.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Low Energy",
    description: "Why some children seem tired all the time, and the warm Spleen-supporting foods that may help. Plus a simple energy porridge recipe for kids.",
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

export default function ChildLowEnergyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildLowEnergyArticle />
    </>
  )
}
