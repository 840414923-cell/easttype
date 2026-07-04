import type { Metadata } from "next"
import SymptomArticle from "@/components/symptom-article"
import { SYMPTOM_ARTICLES } from "@/lib/symptom-articles-data"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-overthink-everything"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Can't Stop Overthinking? Your Body Type Won't Let Your Mind Rest"
const DESC = "Can't stop your racing thoughts? Your body type may be keeping your mind in overdrive. Learn which body types are linked to overthinking and mental restlessness."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Stuck in a mental loop you can't escape? Your body type might be keeping your mind in overdrive. Learn which body types are linked to overthinking.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Stuck in a mental loop you can't escape? Your body type might be keeping your mind in overdrive. Learn which body types are linked to overthinking.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-02",
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
