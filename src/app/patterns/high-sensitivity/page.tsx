import type { Metadata } from "next"
import HighSensitivityArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "high-sensitivity"
const URL = `https://myeasterntype.com/patterns/${SLUG}`
const TITLE = "High Sensitivity Pattern — Allergies, Strong Reactions, Emotional Sensitivity"
const DESC = "The High Sensitivity pattern links allergies, strong reactions to smells and sounds, and emotional sensitivity to the Sensitive constitution in Traditional Chinese Medicine. Learn which habits may help build resilience."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Feeling everything more intensely than others? The High Sensitivity pattern explains why your body reacts to the world differently.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Feeling everything more intensely than others? The High Sensitivity pattern explains why your body reacts to the world differently.",
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
    { name: "High Sensitivity", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HighSensitivityArticle />
    </>
  )
}
