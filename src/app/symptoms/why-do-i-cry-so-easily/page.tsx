import type { Metadata } from "next"
import WhyCryEasilyArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-cry-so-easily"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Do I Cry So Easily? The Faucet With No Off Switch"
const DESC = "Tears at commercials, songs, or small frustrations? Your Eastern body type may explain easy crying. Learn which TCM patterns are linked to emotional sensitivity."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: { title: TITLE, description: "A sad commercial and you're reaching for tissues? Your body type may explain why your tear ducts are always on standby.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "A sad commercial and you're reaching for tissues? Your body type may explain why your tear ducts are always on standby." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-04",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhyCryEasilyArticle />
    </>
  )
}
