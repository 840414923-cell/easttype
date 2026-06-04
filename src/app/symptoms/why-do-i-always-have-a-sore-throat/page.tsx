import type { Metadata } from "next"
import WhySoreThroatArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-always-have-a-sore-throat"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Always Have a Sore Throat? Eastern Body Type Insights"
const DESC = "Throat pain that keeps coming back? Your Eastern body type may explain recurring sore throats. Learn which TCM patterns are linked to chronic throat discomfort."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your throat always feels scratchy or raw? Your body type may explain why it never fully heals.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your throat always feels scratchy or raw? Your body type may explain why it never fully heals.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-04",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
    { name: TITLE, url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhySoreThroatArticle />
    </>
  )
}
