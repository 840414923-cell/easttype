import type { Metadata } from "next"
import ChineseMedicineForMigrainesArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-migraines"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Migraines: Liver Fire, Blood Deficiency, and Foods That May Help"
const DESC = "Migraines in Chinese medicine may involve Liver Fire rising upward, Blood Deficiency, or Phlegm. Learn which foods and habits may help reduce the frequency and intensity."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Migraines in TCM often involve Liver Fire or Blood Deficiency. Learn which foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Migraines? Chinese medicine may have food and lifestyle strategies.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-06",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Migraines", url: URL },
  ],
})

export default function ChineseMedicineForMigrainesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChineseMedicineForMigrainesArticle />
    </>
  )
}
