import type { Metadata } from "next"
import WhyCantIFallAsleepArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-cant-i-fall-asleep"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Can't Fall Asleep? Your Body Type Won't Let You Shut Off"
const DESC = "Lying awake for hours? Your Eastern body type may explain why you can't fall asleep. Learn which Eastern body types are linked to trouble falling asleep and what may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Can't fall asleep even when you're exhausted? Your body type may hold the answer.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Can't fall asleep even when you're exhausted? Your body type may hold the answer.",
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
      <WhyCantIFallAsleepArticle />
    </>
  )
}
