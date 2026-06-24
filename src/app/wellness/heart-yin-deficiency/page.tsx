import type { Metadata } from "next"
import HeartYinDeficiencyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "heart-yin-deficiency"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Heart Yin Deficiency in Chinese Medicine: Signs, Causes & Foods"
const DESC = "Insomnia, palpitations, anxiety, and night sweats may signal Heart Yin Deficiency. Learn the signs, what causes it, and which foods may help calm your mind and nourish cooling energy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Can't sleep, racing heart, and anxiety at night may point to Heart Yin Deficiency. Learn which foods can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Palpitations and insomnia? It may be Heart Yin Deficiency. Learn the signs and calming foods.",
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
    { name: "Heart Yin Deficiency", url: URL },
  ],
})

export default function HeartYinDeficiencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeartYinDeficiencyArticle />
    </>
  )
}
