import type { Metadata } from "next"
import WhyWakeUpToPeeArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-wake-up-to-pee"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Waking Up to Pee Every Night? Your Body Type Runs the Night Shift"
const DESC = "Getting up multiple times every night to urinate? Your Eastern body type may explain nocturia. Learn which Eastern body types are linked to frequent nighttime urination."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Two, three, four times a night? Your body type may explain why your bladder has a graveyard shift.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Two, three, four times a night? Your body type may explain why your bladder has a graveyard shift.",
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
      <WhyWakeUpToPeeArticle />
    </>
  )
}
