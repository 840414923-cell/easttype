import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "EastType — Discover Your Chinese Medicine Body Type | Free 5-Min Quiz",
  description:
    "Why are you always tired, cold, or bloated? Discover your Eastern body type with a free 5-min quiz. Food maps and wellness guides based on 3,000 years of TCM.",
  openGraph: {
    title: "Why Are You Always Tired, Cold, Stressed, or Bloated?",
    description:
      "Discover your Eastern body type in 5 minutes. Personalized food maps and wellness guidance inspired by 3,000 years of TCM wisdom.",
    type: "website",
    url: "https://www.myeasterntype.com",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "EastType — What's Your Eastern Body Type?",
    description:
      "Why are you always tired, cold, or bloated? Take our free 5-minute quiz to discover your TCM body type.",
  },
  alternates: {
    canonical: "https://www.myeasterntype.com",
  },
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EastType",
  url: "https://www.myeasterntype.com",
  logo: "https://www.myeasterntype.com/favicon.svg",
  description: "Discover your Chinese medicine body type with a free 5-minute quiz. Personalized food maps, seasonal guides, and TCM recipe plans.",
  sameAs: [],
}

const WEB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EastType",
  url: "https://www.myeasterntype.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.myeasterntype.com/quiz",
    queryInput: "required name=search_string",
  },
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this a medical diagnosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This assessment is designed for educational and wellness purposes only.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 5 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No.",
      },
    },
    {
      "@type": "Question",
      name: "Can I retake the assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, anytime.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([ORG_SCHEMA, WEB_SCHEMA, FAQ_SCHEMA]) }}
      />
      <HomeClient />
    </>
  )
}