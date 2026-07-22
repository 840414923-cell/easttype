import type { Metadata } from "next"
import ChildNightSweatsArticle from "./article"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "chinese-medicine-for-child-night-sweats"
const URL = `https://www.myeasterntype.com/wellness/${SLUG}`
const TITLE = "Chinese Medicine for Child Night Sweats: Yin Deficiency and Moistening Foods That May Help"
const DESC = "A child who wakes drenched in sweat may be showing Yin deficiency with empty heat. Black sesame, pear, and white fungus are gentle moistening foods that may help cool and steady the body at night."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Why some children soak through their pajamas at night, and the moistening Chinese foods that may help rebuild cooling Yin.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine for Child Night Sweats",
    description: "Drenched pajamas at 2 AM often point to Yin deficiency. Black sesame, pear, and white fungus may help, plus a moistening soup recipe for families.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-07-22",
  faqs: WELLNESS_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
    { name: TITLE, url: URL },
  ],
})

export default function ChildNightSweatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildNightSweatsArticle />
    </>
  )
}
