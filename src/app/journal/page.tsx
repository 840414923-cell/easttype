import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { JOURNAL_ARTICLES } from "@/lib/journal-data"
import JournalList from "./journal-list"

const SITE = "https://www.myeasterntype.com"

export const metadata: Metadata = {
  title: "EastType Journal - Weekly Eastern Wellness Insights",
  description: "Weekly articles exploring how Chinese medicine meets real life: seasonal changes, holidays, current events, and weather, all through the lens of body type.",
  alternates: { canonical: `${SITE}/journal` },
  openGraph: {
    title: "EastType Journal - Weekly Eastern Wellness Insights",
    description: "Weekly articles exploring how Chinese medicine meets real life: seasonal changes, holidays, current events, and weather.",
    url: `${SITE}/journal`,
    type: "website",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "EastType Journal - Weekly Eastern Wellness Insights",
    description: "Weekly articles exploring how Chinese medicine meets real life.",
  },
}

export default function JournalHubPage() {
  const sortedArticles = [...JOURNAL_ARTICLES].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">Journal</span>
          </nav>

          <h1 className="font-[family-name=var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
            EastType Journal
          </h1>
          <p className="text-text2 text-sm mb-2">
            Weekly Eastern wellness insights
          </p>
          <p className="text-text2 leading-relaxed mb-10 text-[0.95rem]">
            Each week we explore how Chinese medicine meets real life: seasonal changes, holidays, current events, and weather, all through the lens of your body type.
          </p>

          <JournalList articles={sortedArticles} />
        </div>
      </main>
      <Footer />
    </>
  )
}
