import type { Metadata } from "next"
import CoolingFoodsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "cooling-foods-chinese-medicine"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Cooling Foods in Chinese Medicine: What to Eat When Your Body Runs Hot"
const DESC = "Night sweats, acne, acid reflux, irritability in heat? Chinese medicine calls this internal heat. Cooling foods like mung beans, chrysanthemum tea, and pear may help bring your body back to balance. Free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "When your body runs hot from the inside, cooling foods in Chinese medicine may help. Here are the specific foods and how to use them.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "When your body runs hot from the inside, cooling foods may help. A practical Chinese medicine food guide.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-24",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Cooling Foods", url: URL },
  ],
})

export default function CoolingFoodsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoolingFoodsArticle />
    </>
  )
}
