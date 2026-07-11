import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { JOURNAL_ARTICLES } from "@/lib/journal-data"
import { buildArticleJsonLd } from "@/lib/json-ld"
import JournalArticleView from "@/components/journal-article"

const SITE = "https://www.myeasterntype.com"

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  const url = `${SITE}/journal/${article.slug}`
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      siteName: "EastType",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
    alternates: { canonical: url },
  }
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug)
  if (!article) return null

  const url = `${SITE}/journal/${article.slug}`

  const faqs = article.faqs?.map((f) => ({
    q: { en: f.q, "zh-TW": f.q, ja: f.q },
    a: { en: f.a, "zh-TW": f.a, ja: f.a },
  })) ?? []

  const jsonLd = buildArticleJsonLd({
    title: article.title,
    description: article.description,
    url,
    datePublished: article.date,
    faqs,
    breadcrumb: [
      { name: "EastType", url: SITE },
      { name: "Journal", url: `${SITE}/journal` },
      { name: article.title, url },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="flex-1">
        <JournalArticleView article={article} />
      </main>
      <Footer />
    </>
  )
}
