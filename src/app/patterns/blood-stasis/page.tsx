import type { Metadata } from "next"
import BloodStasisArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "blood-stasis"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Blood Stasis Pattern — Numbness, Headaches, Easy Bruising"
const DESC = "The Blood Stasis pattern links numbness, recurring headaches, and easy bruising to Blood Stagnation in Traditional Chinese Medicine. Learn which foods and habits may help get things moving."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Numb, bruising easily, or headaches that keep coming back? The Blood Stasis pattern explains why your circulation is sluggish.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Numb, bruising easily, or headaches that keep coming back? The Blood Stasis pattern explains why your circulation is sluggish.",
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
    { name: "Blood Stasis", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BloodStasisArticle />
    </>
  )
}
