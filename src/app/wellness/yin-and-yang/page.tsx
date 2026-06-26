import type { Metadata } from "next"
import YinAndYangArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "yin-and-yang"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Yin and Yang in Chinese Medicine: Balance, Foods & Body Types"
const DESC = "What is yin and yang? Learn how this ancient Chinese medicine concept explains why you feel hot or cold, tired or wired, and which foods may help restore your natural balance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Yin and yang explained in plain English. Learn how it affects your body and which foods match your type.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Yin and Yang in Chinese medicine: what it means for your body and health.",
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
    { name: "Yin and Yang", url: URL },
  ],
})

export default function YinAndYangPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <YinAndYangArticle />
    </>
  )
}
