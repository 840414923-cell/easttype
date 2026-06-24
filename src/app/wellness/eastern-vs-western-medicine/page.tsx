import type { Metadata } from "next"
import EasternVsWesternArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "eastern-vs-western-medicine"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Eastern vs Western Medicine: How They Approach Health Differently"
const DESC = "Western medicine treats the disease. Eastern medicine treats the person. Learn how these two systems differ in diagnosis, treatment philosophy, and when each one may be more useful. Free body type quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Two completely different approaches to understanding your body. Here's how Eastern and Western medicine compare, and when each may be more useful.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Two different approaches to understanding your body. How Eastern and Western medicine compare.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-24",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Eastern vs Western Medicine", url: URL },
  ],
})

export default function EasternVsWesternPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EasternVsWesternArticle />
    </>
  )
}
