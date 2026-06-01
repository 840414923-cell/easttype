import type { Metadata } from "next"
import WellnessArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "insomnia-chinese-medicine"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "Insomnia & Chinese Medicine: Why You Can't Fall (or Stay) Asleep"
const DESC = "Chinese medicine explains insomnia as Yin Deficiency — your body's cooling force is low, so internal heat builds up at night. Learn the signs, causes, and which foods can help you sleep naturally."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Western medicine prescribes melatonin. Chinese medicine asks: why is your body generating excess heat at night? Here's what Yin Deficiency means and what to do about it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Western medicine prescribes melatonin. Chinese medicine asks: why is your body generating excess heat at night?",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
})

export default function InsomniaChineseMedicinePage() {
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
