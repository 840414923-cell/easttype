import type { Metadata } from "next"
import WellnessArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "anxiety-chinese-medicine"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Anxiety & Chinese Medicine: Why Your Mind Races While Your Body Stalls"
const DESC = "Chinese medicine explains anxiety as Qi Stagnation — your energy builds up but can't flow freely, causing chest tightness and mood swings. Learn the signs, causes, and which foods can help restore your energy flow naturally."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Western medicine treats anxiety as a brain chemistry problem. Chinese medicine sees it as an energy flow problem — the fuel is there but the pipes are blocked. Here's what that means and what to do about it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Western medicine treats anxiety as a brain chemistry problem. Chinese medicine sees it as an energy flow problem — the fuel is there but the pipes are blocked.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Wellness", url: "https://myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function AnxietyChineseMedicinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WellnessArticle />
    </>
  )
}
