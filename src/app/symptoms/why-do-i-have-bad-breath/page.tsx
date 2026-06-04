import type { Metadata } from "next"
import WhyBadBreathArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-bad-breath"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Have Bad Breath? Eastern Body Type Insights"
const DESC = "Persistent bad breath that brushing doesn't fix? Your Eastern body type may explain halitosis. Learn which TCM patterns are linked to chronic bad breath."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Brushing doesn't help? Your body type may explain why bad breath keeps coming back.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Brushing doesn't help? Your body type may explain why bad breath keeps coming back.",
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
      <WhyBadBreathArticle />
    </>
  )
}
