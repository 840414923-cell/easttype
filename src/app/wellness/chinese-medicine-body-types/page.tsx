import type { Metadata } from "next"
import BodyTypesArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-body-types"
const URL = `https://myeasterntype.com/wellness/${SLUG}`
const TITLE = "The 9 Chinese Medicine Body Types Explained"
const DESC = "Chinese medicine identifies 9 body constitutions — from Balanced to Sensitive. Each type has unique strengths, weaknesses, and ideal foods. Learn all 9 types and discover yours with a free quiz."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Ayurveda has 3 doshas. Chinese medicine has 9 body types. Here's what each one means and how to tell which one you are.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Ayurveda has 3 doshas. Chinese medicine has 9 body types. Here's what each one means.",
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

export default function BodyTypesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BodyTypesArticle />
    </>
  )
}
