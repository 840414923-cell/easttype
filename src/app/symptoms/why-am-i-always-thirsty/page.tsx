import type { Metadata } from "next"
import ThirstyArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-thirsty"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Always Thirsty? Your Body Type Can't Hold Onto Water"
const DESC = "Can't quench your thirst no matter how much you drink? Your Eastern body type may explain constant thirst. Learn which Eastern body types are linked to dry mouth."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Always reaching for water but never satisfied? Your body type may explain why.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always reaching for water but never satisfied? Your body type may explain why.",
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
      <ThirstyArticle />
    </>
  )
}
