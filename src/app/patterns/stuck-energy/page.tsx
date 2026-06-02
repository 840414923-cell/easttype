import type { Metadata } from "next"
import StuckEnergyArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "stuck-energy"
const URL = `https://myeasterntype.com/patterns/${SLUG}`
const TITLE = "Stuck Energy Pattern — Tight Chest, Frequent Sighing, Mood Swings"
const DESC = "The Stuck Energy pattern connects emotional tightness, frequent sighing, and mood swings to Qi Stagnation in Traditional Chinese Medicine. Learn which foods and habits may help your energy flow more freely."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Feel like something is stuck inside? The Stuck Energy pattern explains why your emotions and energy don't flow smoothly and what Eastern body wisdom says about getting things moving.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Feel like something is stuck inside? Learn why your energy doesn't flow smoothly.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-02",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Patterns", url: "https://myeasterntype.com/patterns" },
    { name: "Stuck Energy", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StuckEnergyArticle />
    </>
  )
}
