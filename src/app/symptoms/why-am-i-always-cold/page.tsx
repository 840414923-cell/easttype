import type { Metadata } from "next"
import WhyAlwaysColdArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-cold"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Always Cold? Your Body Type Controls Your Internal Heat"
const DESC = "Always cold when others are comfortable? Learn which Eastern body type is associated with cold sensitivity and what warming foods may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Cold hands and feet year-round? Your Eastern body type may explain it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Cold hands and feet year-round? Your Eastern body type may explain it.",
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
      <WhyAlwaysColdArticle />
    </>
  )
}
