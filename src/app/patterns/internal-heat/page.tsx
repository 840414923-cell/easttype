import type { Metadata } from "next"
import InternalHeatArticle from "./article"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "internal-heat"
const URL = `https://www.myeasterntype.com/patterns/${SLUG}`
const TITLE = "Internal Heat Pattern — Night Sweats, Insomnia, Feeling Hot at Night"
const DESC = "The Internal Heat pattern links night sweats, insomnia, and feeling hot at night to Yin Deficiency in Traditional Chinese Medicine. Learn which cooling foods and habits may help restore balance."

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: "Waking up hot and sweaty? The Internal Heat pattern explains why your body's cooling system is undercharged.",
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Waking up hot and sweaty? Learn why your body's cooling system is undercharged.",
  },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE,
  description: DESC,
  url: URL,
  datePublished: "2026-06-01",
  faqs: PATTERN_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Patterns", url: "https://www.myeasterntype.com/patterns" },
    { name: "Internal Heat", url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InternalHeatArticle />
    </>
  )
}
