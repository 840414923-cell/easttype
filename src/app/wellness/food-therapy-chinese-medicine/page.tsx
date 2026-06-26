import type { Metadata } from "next"
import FoodTherapyChineseMedicineArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "food-therapy-chinese-medicine"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Food Therapy in Chinese Medicine: Healing with Everyday Meals"
const DESC = "Food therapy is the first line of treatment in Chinese medicine. Learn the core principles, how foods are classified, and how to start using TCM food therapy in your daily life."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "Chinese medicine food therapy explained. Principles, food categories, and daily application.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "Food therapy in Chinese medicine: healing with everyday meals." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-26", faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: "Food Therapy", url: URL },
  ],
})

export default function FoodTherapyChineseMedicinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FoodTherapyChineseMedicineArticle />
    </>
  )
}
