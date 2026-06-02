import type { FaqItem } from "./wellness-faqs"

const SITE = "https://www.myeasterntype.com"

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildArticleJsonLd(opts: {
  title: string
  description: string
  url: string
  datePublished: string
  faqs?: FaqItem[]
  breadcrumb?: { name: string; url: string }[]
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
    image: `${SITE}/og-image.png`,
    author: {
      "@type": "Organization",
      name: "EastType",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "EastType",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/favicon.svg`,
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

  if (opts.breadcrumb && opts.breadcrumb.length > 0) {
    schemas.push(buildBreadcrumbJsonLd(opts.breadcrumb))
  }

  return schemas
}
