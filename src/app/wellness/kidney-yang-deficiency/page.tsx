import type { Metadata } from "next"
import KidneyYangDeficiencyArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "kidney-yang-deficiency"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Kidney Yang Deficiency in Chinese Medicine: Signs, Causes & Foods"
const DESC = "Always cold, low back pain, frequent urination at night, and fatigue may signal Kidney Yang Deficiency. Learn the signs, what causes it, and which warming foods may help restore your inner furnace."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Cold extremities, night urination, and low energy may point to Kidney Yang Deficiency. Learn which warming foods can help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always cold and tired? It may be Kidney Yang Deficiency. Learn the signs and warming foods that may help.",
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
    { name: "Kidney Yang Deficiency", url: URL },
  ],
})

export default function KidneyYangDeficiencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KidneyYangDeficiencyArticle />
    </>
  )
}
