import type { FaqItem } from "./wellness-faqs"

export function buildArticleJsonLd(opts: {
  title: string
  description: string
  url: string
  datePublished: string
  faqs?: FaqItem[]
}) {
  const schemas: Record<string, unknown>[] = []

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: {
      "@type": "Organization",
      name: "EastType",
      url: "https://myeasterntype.com",
    },
    publisher: {
      "@type": "Organization",
      name: "EastType",
      url: "https://myeasterntype.com",
      logo: {
        "@type": "ImageObject",
        url: "https://myeasterntype.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url,
    },
  })

  if (opts.faqs && opts.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: opts.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q.en,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a.en,
        },
      })),
    })
  }

  return schemas
}

export function buildMedicalWebPageJsonLd(opts: {
  title: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: opts.title,
    description: opts.description,
    url: opts.url,
    about: {
      "@type": "MedicalCondition",
      name: "Traditional Chinese Medicine Constitution Type",
    },
    author: {
      "@type": "Organization",
      name: "EastType",
      url: "https://myeasterntype.com",
    },
    publisher: {
      "@type": "Organization",
      name: "EastType",
    },
    lastReviewed: "2026-06-01",
  }
}
