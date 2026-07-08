import type { Metadata } from "next"
import TcmBodyClockArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "tcm-body-clock"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "TCM Body Clock: The Chinese Medicine Organ Time Chart"
const DESC = "The Chinese medicine body clock maps each 2-hour window to a specific organ. Learn why you wake at 3 AM, when to sleep, and how to align your daily rhythm with your organs."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your body has a 24-hour internal schedule. Chinese medicine mapped it 2,000 years ago. Here is the complete organ clock and what it means for your sleep, energy, and digestion.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your body has a 24-hour internal schedule. Chinese medicine mapped it 2,000 years ago.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-08",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "TCM Body Clock", url: URL },
  ],
})

export default function TcmBodyClockPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TcmBodyClockArticle />
    </>
  )
}
