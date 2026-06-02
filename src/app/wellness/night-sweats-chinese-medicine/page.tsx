import type { Metadata } from "next"
import NightSweatsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "night-sweats-chinese-medicine"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Night Sweats: A Chinese Medicine Explanation"
const DESC = "Waking up hot and sweaty? Chinese medicine calls it Yin Deficiency — your body's cooling system is undercharged. Learn the signs, causes, and cooling foods that help."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Your body's cooling system is undercharged. Here's what Chinese medicine says about night sweats and internal heat.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Waking up hot and sweaty? Chinese medicine says your cooling system is undercharged.",
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

export default function NightSweatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NightSweatsArticle />
    </>
  )
}
