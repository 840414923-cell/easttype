import type { Metadata } from "next"
import TcmDietArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "tcm-diet"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "TCM Diet: A Complete Guide to Eating According to Chinese Medicine"
const DESC = "What is a TCM diet? Learn the core principles of Chinese medicine eating: warm foods, seasonal eating, food temperatures, and how to match your diet to your body type."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Complete TCM diet guide. Core principles, food temperatures, and body type matching.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "TCM Diet: how to eat according to Chinese medicine." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-26", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "TCM Diet", url: URL },
  ],
})

export default function TcmDietPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TcmDietArticle />
    </>
  )
}
