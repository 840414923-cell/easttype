import type { Metadata } from "next"
import UnmotivatedArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-unmotivated"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "No Motivation? Your Body Type Might Be the Reason"
const DESC = "No drive to do anything, even things you used to enjoy? Your Eastern body type may explain chronic low motivation. Learn which Eastern body types are linked to apathy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Can't get going no matter what? Your body type may explain why motivation feels out of reach.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Can't get going no matter what? Your body type may explain why motivation feels out of reach.",
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
      <UnmotivatedArticle />
    </>
  )
}