import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { HERBS, HERB_CATEGORIES } from "@/lib/herbs-data"
import { HerbsList } from "./herbs-list"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "Chinese Medicine Herbs Database — 100 TCM Herbs Explained"
const DESC = "Search 100 essential Chinese medicine herbs. Learn properties, benefits, food pairings, and which body type each herb suits."
const URL = "https://www.myeasterntype.com/herbs"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  alternates: { canonical: URL },
}

const jsonLd = buildBreadcrumbJsonLd([
  { name: "EastType", url: "https://www.myeasterntype.com" },
  { name: "Herbs", url: URL },
])

export default function HerbsPage() {
  const herbs = Object.values(HERBS)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">Herbs</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight tracking-wide">
            Chinese Medicine Herbs Database
          </h1>
          <p className="text-text2 text-base mb-8 leading-relaxed max-w-2xl">
            100 essential Chinese medicine herbs explained in plain English. Learn each herb&apos;s properties, benefits, food pairings, and which body type it suits best.
          </p>

          <HerbsList herbs={herbs} />

          <div className="mt-12 text-center">
            <p className="text-sm text-text2 mb-4">
              Not sure which herbs suit you? Discover your body type first.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_20px_rgba(201,163,85,0.2)]"
            >
              Take the Free Quiz {'>'}
            </Link>
          </div>

          <div className="mt-8 px-4 py-3 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.1)]">
            <p className="text-[10px] text-text2 leading-relaxed text-center">
              This database is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional before using any herb.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
