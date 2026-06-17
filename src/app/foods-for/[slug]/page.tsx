import type { Metadata } from "next"
import { FOOD_COMBO_PAGES, FOOD_COMBO_SLUGS } from "@/lib/food-combo-data"
import type { FaqItem } from "@/lib/wellness-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"
import FoodComboArticle from "./article"

export function generateStaticParams() {
  return FOOD_COMBO_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = FOOD_COMBO_PAGES[slug]
  if (!page) return {}

  const url = `https://www.myeasterntype.com/foods-for/${slug}`

  return {
    title: page.metaTitle,
    description: page.metaDesc,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url,
      type: "article",
      siteName: "EastType",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDesc,
    },
    alternates: { canonical: url },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = FOOD_COMBO_PAGES[slug]
  if (!page) return null

  const url = `https://www.myeasterntype.com/foods-for/${slug}`

  const faqsAsItems: FaqItem[] = page.faqs.map((f) => ({
    q: { en: f.q, "zh-TW": "", ja: "" },
    a: { en: f.a, "zh-TW": "", ja: "" },
  }))

  const jsonLd = buildArticleJsonLd({
    title: page.metaTitle,
    description: page.metaDesc,
    url,
    datePublished: page.datePublished,
    faqs: faqsAsItems,
    breadcrumb: [
      { name: "EastType", url: "https://www.myeasterntype.com" },
      { name: "Food Guides", url: "https://www.myeasterntype.com/foods-for" },
      { name: page.h1, url },
    ],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FoodComboArticle slug={slug} />
    </>
  )
}
