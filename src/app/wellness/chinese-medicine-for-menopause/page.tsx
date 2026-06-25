import type { Metadata } from "next"
import ChineseMedicineForMenopauseArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-menopause"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Menopause: Cooling Heat & Nourishing Yin"
const DESC = "Hot flashes, night sweats, and mood swings during menopause may signal declining Kidney Yin. Learn how Chinese medicine views menopause and which cooling foods may help ease the transition."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Menopause in Chinese medicine is a natural decline of Kidney Yin. Learn which cooling foods may help.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Hot flashes and menopause? Chinese medicine may offer cooling food strategies.",
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
    { name: "Chinese Medicine for Menopause", url: URL },
  ],
})

export default function ChineseMedicineForMenopausePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChineseMedicineForMenopauseArticle />
    </>
  )
}
