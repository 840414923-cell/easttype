import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PATTERNS, PATTERN_SLUGS } from "@/lib/pattern-data"
import { TYPES, TYPE_IDS } from "@/lib/constitution-data"
import { TYPE_VIRAL } from "@/lib/type-viral"
import SymptomCta from "@/components/symptom-cta"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "Wellness Patterns — Connect Your Symptoms to Your Body Type"
const DESC = "Explore wellness patterns that bridge everyday symptoms like fatigue, cold sensitivity, and poor sleep with Eastern body types. Understand what your body may be telling you."
const URL = "https://www.myeasterntype.com/patterns"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "website",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  alternates: { canonical: URL },
}

const tagColors: Record<string, string> = {
  "Qi Deficiency": "bg-amber-900/20 text-amber-400",
  "Yang Deficiency": "bg-sky-900/20 text-sky-400",
  "Yin Deficiency": "bg-red-900/20 text-red-400",
  "Phlegm Damp": "bg-emerald-900/20 text-emerald-400",
  "Qi Stagnation": "bg-violet-900/20 text-violet-400",
  "Balanced": "bg-amber-900/20 text-amber-300",
}

const jsonLd = buildBreadcrumbJsonLd([
  { name: "EastType", url: "https://www.myeasterntype.com" },
  { name: "Patterns", url: URL },
])

export default function PatternsHubPage() {
  const typeList = Object.values(TYPES)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
            EastType
          </Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Patterns</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
          Wellness Patterns
        </h1>
        <p className="text-text2 leading-relaxed mb-4 max-w-2xl">
          Symptoms rarely exist in isolation. A wellness pattern is a cluster of related symptoms
          that point to a deeper underlying tendency in your body. Understanding your pattern
          can help you make sense of symptoms that seem unrelated.
        </p>
        <p className="text-text2 text-sm mb-10 leading-relaxed max-w-xl">
          These patterns are based on 3,000 years of Chinese medicine observation.
          They connect what you feel to what your body may need.
        </p>

        <div className="space-y-4 mb-8">
          {PATTERN_SLUGS.map((slug) => {
            const p = PATTERNS[slug]
            return (
              <Link
                key={slug}
                href={`/patterns/${slug}`}
                className="group block border border-border rounded-xl p-5 bg-cream/5 hover:bg-cream/10 hover:border-accent/30 transition-all duration-300 no-underline"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${tagColors[p.tag] || "bg-accent/15 text-accent"}`}>
                    {p.tag}
                  </span>
                  <span className="text-[10px] text-text2/50">{p.readTime} read</span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-lg text-text group-hover:text-accent transition-colors mb-1.5 leading-snug">
                  {p.title.en}
                </h2>
                <p className="text-text2 text-sm leading-relaxed">
                  {p.metaDesc}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 mb-10">
          <div className="text-center mb-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide mb-2">
              9 Body Types
            </h2>
            <p className="text-text2 text-sm max-w-lg mx-auto">
              Chinese medicine identifies 9 constitutional patterns. Each type has unique tendencies in energy, digestion, sleep, and emotional balance. Which one are you?
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
            {typeList.map((t) => {
              const viral = TYPE_VIRAL[t.id]
              const imgSrc = `/types/${t.id}.webp`
              return (
                <Link
                  key={t.id}
                  href={`/types/${t.id}`}
                  className="group block"
                >
                  <div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(140,45,42,0.15)] bg-card-bg transition-all duration-500 group-hover:border-[rgba(140,45,42,0.4)] group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(140,45,42,0.12)]"
                    style={{
                      background: `linear-gradient(170deg, ${t.color}10 0%, var(--color-card-bg) 40%, var(--color-card-bg) 100%)`,
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={t.en}
                      width={400}
                      height={600}
                      className="w-full h-auto block opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                      sizes="(max-width: 640px) 33vw, 200px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg/95 via-card-bg/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:hidden">
                      <span
                        className="font-[family-name:var(--font-display)] text-xs font-bold block mb-0.5 truncate"
                        style={{ color: t.color }}
                      >
                        {t.en}
                      </span>
                      <span
                        className="font-[family-name:var(--font-display)] text-xs font-bold"
                        style={{ color: t.color }}
                      >
                        {t.pct}
                      </span>
                      <span className="text-[7px] text-text2/60 ml-0.5">
                        of people
                      </span>
                    </div>

                    <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-4">
                      <div className="mb-1">
                        <span
                          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide"
                          style={{ color: t.color }}
                        >
                          {t.en}
                        </span>
                      </div>
                      <div className="text-[11px] text-text2 mb-1.5">
                        {t.zh} &middot; {t.zhPy}
                      </div>
                      <div className="text-xs text-text/90 font-medium leading-snug mb-2 line-clamp-2">
                        {viral?.cardHeadline ?? ""}
                      </div>
                      <div>
                        <span
                          className="font-[family-name:var(--font-display)] text-lg font-bold"
                          style={{ color: t.color }}
                        >
                          {t.pct}
                        </span>
                        <span className="text-[10px] text-text2 ml-1">
                          of people
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-6">
            <p className="text-text2 text-sm mb-4">
              Not sure which type you are? Take the free quiz to find out.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_4px_20px_rgba(140,45,42,0.2)]"
            >
              Take the Free Quiz {'>'}
            </Link>
          </div>
        </div>

        <SymptomCta />
      </main>
    </>
  )
}
