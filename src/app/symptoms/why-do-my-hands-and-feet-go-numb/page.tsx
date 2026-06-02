import type { Metadata } from "next"
import WhyNumbArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-my-hands-and-feet-go-numb"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do My Hands and Feet Go Numb? Eastern Body Type Insights"
const DESC = "Numb or tingling hands and feet? Your Eastern body type may explain poor circulation. Learn which TCM patterns are linked to numbness and what may help restore warmth and flow."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: { title: TITLE, description: "Tingling, numbness, pins and needles? Your body type may explain it.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Tingling, numbness, pins and needles? Your body type may explain it." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-02",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [{ name: "EastType", url: "https://myeasterntype.com" }, { name: "Symptoms", url: "https://myeasterntype.com/symptoms" }, { name: TITLE, url: URL }],
})

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhyNumbArticle />
    </>
  )
}
