import type { Metadata } from "next"
import WhyOverthinkArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-overthink-everything"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Overthink Everything? The Mind That Won't Put the Pen Down"
const DESC = "Can't stop replaying conversations in your head? Your Eastern body type may explain overthinking. Learn which TCM patterns are linked to racing thoughts and what may help quiet your mind."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: { title: TITLE, description: "Stuck in a mental loop you can't escape? Your body type may explain it.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Stuck in a mental loop you can't escape? Your body type may explain it." },
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
      <WhyOverthinkArticle />
    </>
  )
}
