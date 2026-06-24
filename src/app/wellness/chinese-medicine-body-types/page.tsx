import type { Metadata } from "next"
import BodyTypesArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-body-types"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "9 Chinese Medicine Body Types Explained (Free Quiz)"
const DESC = "Chinese medicine identifies 9 body constitutions — each with unique patterns in energy, digestion, sleep, and emotions. Learn all 9 types and find yours with our free quiz."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Ayurveda has 3 doshas. Eastern wellness has 9 body types. Here's what each one means and how to tell which one you are.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Ayurveda has 3 doshas. Eastern wellness has 9 body types. Here's what each one means.",
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
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
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
