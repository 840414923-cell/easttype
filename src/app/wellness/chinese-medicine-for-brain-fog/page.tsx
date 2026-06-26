import type { Metadata } from "next"
import ChineseMedicineForBrainFogArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-brain-fog"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Brain Fog: Causes & Clarity Foods"
const DESC = "Can't think clearly? Brain fog in Chinese medicine may mean Spleen Qi Deficiency or Dampness clouding the mind. Learn the patterns and which foods may help clear your head."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Brain fog in TCM: Spleen Qi, dampness, and foods that may help.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Brain fog? Chinese medicine may have food-based answers." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-26", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Brain Fog", url: URL },
  ],
})

export default function ChineseMedicineForBrainFogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForBrainFogArticle />
    </>
  )
}
