import type { Metadata } from "next"
import ChineseMedicineForNightSweatsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-night-sweats"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Night Sweats: Causes & Cooling Foods"
const DESC = "Waking up drenched in sweat? Chinese medicine says night sweats may signal Yin Deficiency. Learn the patterns, causes, and which cooling foods may help reduce overnight sweating."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Night sweats in Chinese medicine. Yin Deficiency, empty heat, and cooling foods.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Night sweats? Chinese medicine may have cooling food answers." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-26", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Night Sweats", url: URL },
  ],
})

export default function ChineseMedicineForNightSweatsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForNightSweatsArticle />
    </>
  )
}
