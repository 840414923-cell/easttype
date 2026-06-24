import type { Metadata } from "next"
import HighSensitivityArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "high-sensitivity"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Allergies Won't Quit? Your Body Type Reacts to Everything"
const DESC = "The High Sensitivity pattern links allergies, strong reactions to smells and sounds, and emotional sensitivity to the Sensitive constitution in Chinese medicine. Learn which habits may help build resilience."

export const metadata: Metadata = {
  title: TITLE,
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
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
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
