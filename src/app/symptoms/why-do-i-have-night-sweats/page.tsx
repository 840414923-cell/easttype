import type { Metadata } from "next"
import NightSweatsArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-night-sweats"
const URL = `https://myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Have Night Sweats? Eastern Body Type Insights"
const DESC = "Waking up drenched in sweat? Traditional Chinese Medicine connects night sweats to specific body types. Learn what your body may be telling you."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Waking up drenched? TCM says your body type may explain night sweats.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Waking up drenched? TCM says your body type may explain night sweats.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-01",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "Symptoms", url: "https://myeasterntype.com/symptoms" },
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
      <NightSweatsArticle />
    </>
  )
}
