import type { Metadata } from "next"
import LiverFireArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "liver-fire"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Liver Fire in Chinese Medicine: Signs, Causes & Cooling Foods"
const DESC = "Red eyes, headaches, irritability, and bitter taste in the mouth may signal Liver Fire. Learn the signs, what causes it, and which cooling foods may help bring the heat down."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Bloodshot eyes, rage, and migraines may point to Liver Fire. Learn which foods can cool the flames.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Angry, red eyes, and headaches? It may be Liver Fire. Learn the signs and cooling approaches.",
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
    { name: "Liver Fire", url: URL },
  ],
})

export default function LiverFirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LiverFireArticle />
    </>
  )
}
