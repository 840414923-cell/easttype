import type { Metadata } from "next"
import FiveElementsTheoryArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "five-elements-theory"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Five Elements Theory in Chinese Medicine: Wood, Fire, Earth, Metal, Water"
const DESC = "The Five Elements theory explains how everything in nature connects. Learn what Wood, Fire, Earth, Metal, and Water mean in Chinese medicine and how they relate to your organs, emotions, and health."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Five Elements theory explained in plain English. Wood, Fire, Earth, Metal, Water and your health.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Five Elements in Chinese medicine: what each element means for your body.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-26",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Five Elements Theory", url: URL },
  ],
})

export default function FiveElementsTheoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FiveElementsTheoryArticle />
    </>
  )
}
