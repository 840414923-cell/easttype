import type { Metadata } from "next"
import WhyForgettingArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-keep-forgetting-things"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Keep Forgetting Things? Your Body Type Might Be the Sieve"
const DESC = "Walking into rooms and forgetting why? Your Eastern body type may explain memory issues. Learn which Eastern body types are linked to forgetfulness."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Your brain feels like a sieve lately? Your body type may explain why nothing sticks.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Your brain feels like a sieve lately? Your body type may explain why nothing sticks." },
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
      <WhyForgettingArticle />
    </>
  )
}
