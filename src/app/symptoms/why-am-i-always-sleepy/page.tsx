import type { Metadata } from "next"
import WhyAlwaysSleepyArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-am-i-always-sleepy"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Why Am I Always Sleepy? When Sleep Never Feels Like Enough"
const DESC = "Can't stay awake during the day? Your Eastern body type may explain daytime sleepiness. Learn which patterns are connected to low energy."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Always sleepy no matter how much you sleep? Your body type may be the reason.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Always sleepy no matter how much you sleep? Your body type may be the reason.",
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
      <WhyAlwaysSleepyArticle />
    </>
  )
}
