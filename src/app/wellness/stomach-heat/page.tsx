import type { Metadata } from "next"
import StomachHeatArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "stomach-heat"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Stomach Heat in Chinese Medicine: Signs, Causes & Cooling Foods"
const DESC = "Bad breath, acid reflux, mouth ulcers, and a big appetite may signal Stomach Heat. Learn the signs, what causes it, and which cooling foods may help bring your digestive fire back into balance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Burning sensation, bad breath, and constant hunger may point to Stomach Heat. Learn which cooling foods can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always hungry with bad breath? It may be Stomach Heat. Learn the signs and cooling foods that may help.",
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
    { name: "Stomach Heat", url: URL },
  ],
})

export default function StomachHeatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StomachHeatArticle />
    </>
  )
}
