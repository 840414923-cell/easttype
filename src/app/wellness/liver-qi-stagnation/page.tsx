import type { Metadata } from "next"
import LiverQiStagnationArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "liver-qi-stagnation"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Liver Qi Stagnation in Chinese Medicine: Signs, Causes & Relief"
const DESC = "Irritability, sighing, breast tenderness, and rib-side tightness may signal Liver Qi Stagnation. Learn the signs, what causes it, and which foods and habits may help restore smooth energy flow."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Frustration, sighing, and PMS symptoms may point to Liver Qi Stagnation. Learn which foods and movement can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always frustrated and sighing? It may be Liver Qi Stagnation. Learn the signs and natural approaches.",
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
    { name: "Liver Qi Stagnation", url: URL },
  ],
})

export default function LiverQiStagnationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LiverQiStagnationArticle />
    </>
  )
}
