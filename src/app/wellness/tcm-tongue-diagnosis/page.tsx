import type { Metadata } from "next"
import TcmTongueDiagnosisArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "tcm-tongue-diagnosis"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine Tongue Diagnosis Guide (What Your Tongue Reveals)"
const DESC = "Chinese medicine practitioners read your tongue to assess internal health. Learn what tongue color, coating, shape, and moisture may reveal about your body type. Free quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your tongue changes color and texture based on what's happening inside your body. Here's how Chinese medicine practitioners read those signals.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your tongue changes color and texture based on what's happening inside your body. Here's how Chinese medicine reads those signals.",
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
    { name: "Tongue Diagnosis", url: URL },
  ],
})

export default function TcmTongueDiagnosisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TcmTongueDiagnosisArticle />
    </>
  )
}
