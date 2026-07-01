import type { Metadata } from "next"
import SymptomArticle from "@/components/symptom-article"
import { SYMPTOM_ARTICLES } from "@/lib/symptom-articles-data"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-post-nasal-drip"
const URL = "https://www.myeasterntype.com/symptoms/${SLUG}"
const TITLE = "Post-Nasal Drip? Your Body Type Won"
const DESC = "Constant need to clear your throat or feeling of mucus in the back of your throat? Your Eastern body type may explain post-nasal drip from an Chinese medicine perspective."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Always clearing your throat or feeling something drip down the back? Your body type may explain why the drainage never stops.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always clearing your throat or feeling something drip down the back? Your body type may explain why the drainage never stops.",
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
      <SymptomArticle data={SYMPTOM_ARTICLES[SLUG]} />
    </>
  )
}
