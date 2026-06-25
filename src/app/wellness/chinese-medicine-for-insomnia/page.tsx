import type { Metadata } from "next"
import ChineseMedicineForInsomniaArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-insomnia"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Insomnia: Why You Can&apos;t Sleep & What May Help"
const DESC = "Can&apos;t fall asleep? Waking at 3 AM? Chinese medicine offers a different lens on insomnia based on your body type. Learn which patterns cause sleep problems and which foods may help."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Struggling with insomnia? Chinese medicine identifies several sleep patterns. Learn which foods and habits may help you sleep better.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Can&apos;t sleep? Chinese medicine may have answers. Learn the patterns and helpful foods.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-25",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Chinese Medicine for Insomnia", url: URL },
  ],
})

export default function ChineseMedicineForInsomniaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForInsomniaArticle />
    </>
  )
}
