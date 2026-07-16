import type { Metadata } from "next"
import ChineseMedicineForTinnitusArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-tinnitus"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Tinnitus: Kidney Health & Ear Ringing Foods"
const DESC = "Ringing in your ears that won't stop? Chinese medicine links chronic tinnitus to Kidney weakness and sudden ringing to Liver Fire. Learn which body patterns are involved and which foods may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Ear ringing in TCM often points to Kidney weakness or Liver Fire. Learn which foods may help ease tinnitus.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Ringing in your ears? Chinese medicine may have food-based answers.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-16",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Tinnitus", url: URL },
  ],
})

export default function ChineseMedicineForTinnitusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForTinnitusArticle />
    </>
  )
}
