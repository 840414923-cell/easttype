import type { Metadata } from "next"
import FoodsForEnergyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-foods-for-energy"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine Foods for Energy: What to Eat When You're Always Tired"
const DESC = "Chinese medicine says fatigue is often a Qi problem — your body's fuel is low. These 10+ foods have been used for centuries to restore energy naturally. Plus: foods that secretly drain your energy."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: "Chinese Medicine Foods for Energy",
    description: "Always tired? Chinese medicine says your fuel is low. These traditional foods restore energy from the inside out.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine Foods for Energy",
    description: "Always tired? These traditional foods restore energy from the inside out.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Wellness", url: "https://myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function FoodsForEnergyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FoodsForEnergyArticle />
    </>
  )
}
