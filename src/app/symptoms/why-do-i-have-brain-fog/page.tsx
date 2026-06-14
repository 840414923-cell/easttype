import type { Metadata } from "next"
import BrainFogArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-brain-fog"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Brain Fog? Your Body Type Might Be Clouding Your Mind"
const DESC = "Can't think clearly? Brain fog may be connected to your Eastern body type. Learn which Eastern wellness patterns are linked to mental fogginess and what may help clear it."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Head in a cloud? Your Eastern body type may explain why your thinking feels foggy.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Head in a cloud? Your Eastern body type may explain why your thinking feels foggy.",
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
      <BrainFogArticle />
    </>
  )
}
