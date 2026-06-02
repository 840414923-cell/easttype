import type { Metadata } from "next"
import WhyAreMyMoodsAllOverArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-are-my-moods-all-over-the-place"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Are My Moods All Over the Place? Eastern Body Type Insights"
const DESC = "Mood swings that come out of nowhere? Your Eastern body type may explain unpredictable emotions. Learn which TCM patterns are linked to emotional instability and what may help."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Fine one minute, furious or tearful the next? Your body type may be behind it.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Fine one minute, furious or tearful the next? Your body type may be behind it.",
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
      <WhyAreMyMoodsAllOverArticle />
    </>
  )
}
