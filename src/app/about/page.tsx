import type { Metadata } from "next"
import AboutArticle from "./article"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "About EastType — Our Approach to Eastern Wellness"
const DESC = "EastType translates traditional Chinese medicine body constitution theory into practical wellness guidance. Learn about our methodology, content sources, and what this assessment can (and cannot) do."
const URL = "https://myeasterntype.com/about"

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  alternates: { canonical: URL },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESC,
    url: URL,
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    image: "https://myeasterntype.com/og-image.png",
    author: { "@type": "Organization", name: "EastType" },
    publisher: {
      "@type": "Organization",
      name: "EastType",
      logo: { "@type": "ImageObject", url: "https://myeasterntype.com/favicon.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  },
  buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://myeasterntype.com" },
    { name: "About", url: URL },
  ]),
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutArticle />
    </>
  )
}
