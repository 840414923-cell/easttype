import type { Metadata } from "next"
import ColdSensitivityArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "cold-sensitivity"
const URL = `https://myeasterntype.com/patterns/${SLUG}`
const TITLE = "Cold Sensitivity Pattern — Cold Hands, Cold Feet, Always Freezing"
const DESC = "The Cold Sensitivity pattern links chronically cold hands and feet to Yang Deficiency in Traditional Chinese Medicine. Learn which warming foods and habits may help stoke your inner furnace."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Always cold when others are comfortable? The Cold Sensitivity pattern explains why your inner furnace is underpowered and how to warm up from the inside.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always cold when others are comfortable? Learn why your inner furnace is underpowered.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-01",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Patterns", url: "https://myeasterntype.com/patterns" },
    { name: "Cold Sensitivity", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ColdSensitivityArticle />
    </>
  )
}
