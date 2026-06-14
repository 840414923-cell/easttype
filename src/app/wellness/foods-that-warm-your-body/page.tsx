import type { Metadata } from "next"
import WellnessArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "foods-that-warm-your-body"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Foods That Warm Your Body: An Eastern Wellness Guide"
const DESC = "Yang Deficiency means your inner furnace is underpowered. Learn which warming foods — ginger, cinnamon, lamb — can stoke your fire, and which cold foods make it worse."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Cold hands, frequent urination, aversion to cold? In Eastern wellness, that's Yang Deficiency — and warming foods are the medicine. Here's what to eat and what to avoid.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Cold hands, frequent urination, aversion to cold? That's Yang Deficiency. Warming foods are the medicine.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-05-15",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function FoodsThatWarmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WellnessArticle />
    </>
  )
}
