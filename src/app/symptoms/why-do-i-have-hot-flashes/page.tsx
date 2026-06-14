import type { Metadata } from "next"
import HotFlashesArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-hot-flashes"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Hot Flashes? Your Body Type Sends Heat Without Warning"
const DESC = "Sudden waves of heat rushing through your body? Your Eastern body type may explain hot flashes. Learn which Eastern body types are linked to heat surges."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Heat rising from nowhere and flushing your face? Your body type may explain why your internal thermostat keeps spiking.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Heat rising from nowhere and flushing your face? Your body type may explain why your internal thermostat keeps spiking.",
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
    { name: "Hot Flashes", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HotFlashesArticle />
    </>
  )
}
