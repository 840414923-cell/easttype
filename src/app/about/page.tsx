import type { Metadata } from "next"
import AboutArticle from "./article"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "About EastType — Our Approach to Chinese Medicine"
const DESC = "EastType translates Chinese medicine body type theory into practical guidance. Learn about our methodology, content sources, and what this assessment can (and cannot) do."
const URL = "https://www.myeasterntype.com/about"

export const metadata: Metadata = {
  title: TITLE,
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
    image: "https://www.myeasterntype.com/og-image.png",
    author: { "@type": "Organization", name: "EastType" },
    publisher: {
      "@type": "Organization",
      name: "EastType",
      logo: { "@type": "ImageObject", url: "https://www.myeasterntype.com/favicon.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  },
  buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "About", url: URL },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EastType",
    url: "https://www.myeasterntype.com",
    logo: "https://www.myeasterntype.com/favicon.svg",
    description: "Chinese medicine body constitution assessment based on 3,000 years of body type wisdom",
    contactPoint: {
      "@type": "ContactPoint",
      email: "840414923@qq.com",
      contactType: "customer support",
    },
  },
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
