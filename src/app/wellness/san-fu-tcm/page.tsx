import type { Metadata } from "next"
import SanFuTcmArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "san-fu-tcm"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "San Fu Days in TCM: Summer's Window for Winter Wellness"
const DESC = "San Fu is the hottest 30 to 40 days of summer. In Chinese medicine, this window supports winter cold-type conditions through warming foods and specific daily habits."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "San Fu in TCM: why the hottest summer days matter for winter wellness, and how to apply the principles at home.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "San Fu Days in TCM: summer's window for winter wellness." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-07-18", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "San Fu TCM", url: URL },
  ],
})

export default function SanFuTcmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SanFuTcmArticle />
    </>
  )
}
