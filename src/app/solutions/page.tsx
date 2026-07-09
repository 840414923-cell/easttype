import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SOLUTION_LIST } from "@/lib/solutions-data"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "TCM Solutions: Herbal Formula Guides by Body Type"
const DESC = "Actionable Chinese medicine herbal formula guides for common health concerns. Each formula includes ingredients, preparation steps, and body type matching."
const URL = "https://www.myeasterntype.com/solutions"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website", siteName: "EastType" },
  alternates: { canonical: URL },
}

const jsonLd = buildBreadcrumbJsonLd([
  { name: "EastType", url: "https://www.myeasterntype.com" },
  { name: "Solutions", url: URL },
])

export default function SolutionsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">Solutions</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight tracking-wide">
            TCM Solutions
          </h1>
          <p className="text-text2 text-base mb-10 leading-relaxed max-w-2xl">
            Practical Chinese medicine formula guides for common health concerns. Each guide explains the root cause, provides ready-to-use herbal tea or soup recipes, and matches them to your body type.
          </p>

          <div className="grid gap-6">
            {SOLUTION_LIST.map((s, idx) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className={`group block rounded-2xl overflow-hidden border-2 border-[rgba(140,45,42,0.12)] hover:border-[rgba(140,45,42,0.4)] hover:shadow-[0_8px_30px_rgba(140,45,42,0.12)] transition-all duration-300 no-underline ${idx % 2 === 0 ? "bg-card-bg" : "bg-[var(--color-bg2)]"}`}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-2/5 aspect-[16/9] sm:aspect-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h2 className="font-[family-name:var(--font-display)] text-xl text-text group-hover:text-accent transition-colors tracking-wide mb-2">
                      {s.title}
                    </h2>
                    <p className="text-sm text-text2 leading-relaxed mb-4 line-clamp-3">
                      {s.intro}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.formulas.map((f) => (
                        <span key={f.slug} className="text-xs text-text2/70 bg-[rgba(140,45,42,0.05)] border border-[rgba(140,45,42,0.1)] px-2.5 py-1 rounded-md">
                          {f.nameEn.split(" & ")[0]} - {f.bodyType}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-text2 mb-4">
              Not sure which body type you are? Take the quiz first.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_20px_rgba(140,45,42,0.2)]"
            >
              Take the Free Quiz {'>'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
