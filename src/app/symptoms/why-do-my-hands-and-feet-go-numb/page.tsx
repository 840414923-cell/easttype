import type { Metadata } from "next"
import WhyNumbArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-my-hands-and-feet-go-numb"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Numb Hands and Feet? Your Body Type Slows Your Circulation"
const DESC = "Numb or tingling hands and feet? Your Eastern body type may explain poor circulation. Learn which Eastern body types are linked to numbness and what may help restore warmth and flow."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Tingling, numbness, pins and needles? Your body type may explain it.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Tingling, numbness, pins and needles? Your body type may explain it." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-02",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [{ name: "EastType", url: "https://www.myeasterntype.com" }, { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" }, { name: TITLE, url: URL }],
})

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhyNumbArticle />
    </>
  )
}
