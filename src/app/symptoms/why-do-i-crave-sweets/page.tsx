import type { Metadata } from "next"
import WhyCraveSweetsArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-crave-sweets"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Crave Sweets? Eastern Body Type Insights"
const DESC = "Can't stop craving sugar? Your Eastern body type may explain sweet cravings. Learn which TCM patterns are linked to sugar addiction and what may help reduce the urge."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: { title: TITLE, description: "Always reaching for something sweet? Your body type may explain why.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Always reaching for something sweet? Your body type may explain why." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-02",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [{ name: "EastType", url: "https://www.myeasterntype.com" }, { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" }, { name: TITLE, url: URL }],
})

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhyCraveSweetsArticle />
    </>
  )
}
