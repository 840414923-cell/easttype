import type { Metadata } from "next"
import KidneyYinDeficiencyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "kidney-yin-deficiency"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Kidney Yin Deficiency Symptoms in Chinese Medicine: Causes & Foods"
const DESC = "Night sweats, hot flashes, dry mouth, and low back pain at night may signal Kidney Yin Deficiency. Learn the signs, what causes it, and which foods may help restore cooling energy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Night sweats, dry throat, and feeling hot in the afternoon may point to Kidney Yin Deficiency. Learn which cooling foods can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Waking up with night sweats? It may be Kidney Yin Deficiency. Learn the signs and which foods may help.",
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
    { name: "Kidney Yin Deficiency", url: URL },
  ],
})

export default function KidneyYinDeficiencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KidneyYinDeficiencyArticle />
    </>
  )
}
