import type { Metadata } from "next"
import SymptomArticle from "@/components/symptom-article"
import { SYMPTOM_ARTICLES } from "@/lib/symptom-articles-data"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-complexion-dull"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Dull Complexion? Your Body Type Affects Your Skin"
const DESC = "Skin that looks gray, tired, or lifeless no matter what you apply? Your Eastern body type may explain a dull complexion. Learn which Eastern body types are involved."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your face looks tired even when you're well-rested? Your body type might be dulling your natural glow. Learn which body types affect your complexion.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Your face looks tired even when you're well-rested? Your body type might be dulling your natural glow. Learn which body types affect your complexion.",
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
