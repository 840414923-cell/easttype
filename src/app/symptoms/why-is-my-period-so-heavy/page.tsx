import type { Metadata } from "next"
import SymptomArticle from "@/components/symptom-article"
import { SYMPTOM_ARTICLES } from "@/lib/symptom-articles-data"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-is-my-period-so-heavy"
const URL = "https://www.myeasterntype.com/symptoms/${SLUG}"
const TITLE = "Heavy Periods? Your Body Type Might Not Stop the Flow"
const DESC = "Soaking through pads or passing clots? Your Eastern body type may explain heavy menstrual bleeding. Learn which Eastern body types are linked to menorrhagia."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Bleeding through pads and passing clots every month? Your body type may explain why your period won",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Bleeding through pads and passing clots every month? Your body type may explain why your period won",
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
