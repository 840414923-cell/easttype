import type { Metadata } from "next"
import WhyTinnitusArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-tinnitus"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Have Tinnitus? Eastern Body Type Insights"
const DESC = "Ringing or buzzing in your ears that won't stop? Your Eastern body type may explain tinnitus. Learn which TCM patterns are linked to ear ringing."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "That high-pitched ringing that nobody else can hear? Your body type may explain why your ears won't go quiet.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "That high-pitched ringing that nobody else can hear? Your body type may explain why your ears won't go quiet.",
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
      <WhyTinnitusArticle />
    </>
  )
}
