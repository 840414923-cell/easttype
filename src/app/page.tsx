import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "EastType — Chinese Medicine Body Types & Wellness Quiz",
  description:
    "Why are you always tired, cold, or bloated? Your Chinese medicine body type has the answer. Take a free 5-min quiz and get personalized food maps and TCM wellness guides.",
  openGraph: {
    title: "Chinese Medicine Body Types: Why Are You Always Tired, Cold, or Bloated?",
    description:
      "Discover your Chinese medicine body type in 5 minutes. Personalized food maps and wellness guidance based on 3,000 years of TCM wisdom.",
    type: "website",
    url: "https://www.myeasterntype.com",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "EastType — What's Your Chinese Medicine Body Type?",
    description:
      "Why are you always tired, cold, or bloated? Take our free 5-minute quiz to discover your Chinese medicine body type.",
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
  description: "Discover your Chinese medicine body type with a free 5-minute quiz. Personalized food maps, seasonal guides, and TCM wellness recipe plans.",
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