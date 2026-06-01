import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "EastType — Discover Your Chinese Medicine Body Type | Free 5-Min Quiz",
  description:
    "Chinese medicine identified 9 body types centuries ago. Discover yours with our free quiz — get personalized food maps, seasonal guides, and a 28-day recipe plan. Based on 3,000 years of Eastern wisdom.",
  openGraph: {
    title: "EastType — What's Your Eastern Body Type?",
    description:
      "9 body types. 1 free quiz. Personalized food maps and TCM recipe plans. Discover the diet your body has been waiting for.",
    type: "website",
    url: "https://myeasterntype.com",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "EastType — What's Your Eastern Body Type?",
    description:
      "Chinese medicine has 9 body types. Discover yours in ~5 minutes with our free quiz.",
  },
  alternates: {
    canonical: "https://myeasterntype.com",
  },
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EastType",
  url: "https://myeasterntype.com",
  logo: "https://myeasterntype.com/favicon.svg",
  description: "Discover your Chinese medicine body type with a free 5-minute quiz. Personalized food maps, seasonal guides, and TCM recipe plans.",
  sameAs: [],
}

const WEB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EastType",
  url: "https://myeasterntype.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://myeasterntype.com/quiz",
    queryInput: "required name=search_string",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([ORG_SCHEMA, WEB_SCHEMA]) }}
      />
      <HomeClient />
    </>
  )
}