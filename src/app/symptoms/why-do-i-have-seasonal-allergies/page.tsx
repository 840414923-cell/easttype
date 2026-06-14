import type { Metadata } from "next"
import WhySeasonalAllergiesArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-seasonal-allergies"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Seasonal Allergies Won't Quit? Your Body Type Overreacts"
const DESC = "Sneezing and congestion every spring or fall? Your Eastern body type may explain seasonal allergies. Learn which Eastern body types are linked to recurring allergy symptoms."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Every spring your body declares war on pollen? Your body type may explain why your immune system overreacts.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Every spring your body declares war on pollen? Your body type may explain why your immune system overreacts.",
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
      <WhySeasonalAllergiesArticle />
    </>
  )
}
