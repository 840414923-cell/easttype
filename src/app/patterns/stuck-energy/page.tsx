import type { Metadata } from "next"
import StuckEnergyArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "stuck-energy"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Tight Chest, Mood Swings, Can't Relax? Your Body Type Might Explain Why"
const DESC = "Feel like something is stuck inside? Frequent sighing, mood swings, and chest tightness might be your body type talking. Discover which Eastern pattern causes stuck energy and what may help it flow again."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Feel like something is stuck inside? Mood swings and chest tightness might be your body type talking. Discover what may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Feel like something is stuck inside? Mood swings and chest tightness might be your body type.",
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
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
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
