import type { Metadata } from "next"
import WhyCantFocusArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-cant-i-focus"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Can't Focus? Your Body Type Drains Your Attention"
const DESC = "Can't concentrate on anything for more than five minutes? Your Eastern body type may explain poor focus. Learn which Eastern body types are linked to concentration problems."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Reading the same paragraph three times? Your body type may explain why your attention keeps slipping.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Reading the same paragraph three times? Your body type may explain why your attention keeps slipping." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-04",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhyCantFocusArticle />
    </>
  )
}
