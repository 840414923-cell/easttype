import type { Metadata } from "next"
import WhyWakeAt3AmArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-wake-up-at-3am"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "Waking Up at 3AM Every Night? Your Body Type Is Running the Clock"
const DESC = "Waking up at 3AM every night? Eastern wellness connects this to specific body types. Learn what your sleep pattern may mean."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "3AM wakeups every night? Eastern wellness says your body type may be the reason.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "3AM wakeups every night? Eastern wellness says your body type may be the reason.",
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
      <WhyWakeAt3AmArticle />
    </>
  )
}
