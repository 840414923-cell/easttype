import type { Metadata } from "next"
import Link from "next/link"
import { PATTERNS, PATTERN_SLUGS } from "@/lib/pattern-data"
import SymptomCta from "@/components/symptom-cta"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "Wellness Patterns — Connect Your Symptoms to Eastern Body Wisdom"
const DESC = "Explore wellness patterns that bridge everyday symptoms like fatigue, cold sensitivity, and poor sleep with Traditional Chinese Medicine body types. Understand what your body may be telling you."
const URL = "https://myeasterntype.com/patterns"

export const metadata: Metadata = {
  title: `${TITLE} | EastType`,
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
}

const jsonLd = buildBreadcrumbJsonLd([
  { name: "EastType", url: "https://myeasterntype.com" },
  { name: "Patterns", url: URL },
])

export default function PatternsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
            EastType
          </Link>
          <span className="mx-1.5">›</span>
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
          These patterns are based on 3,000 years of Traditional Chinese Medicine observation.
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

        <div className="bg-cream/30 border border-border rounded-xl p-5 mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
            How Patterns Connect to Your Body Type
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            Chinese medicine identifies 9 distinct body types. Each pattern on this page
            connects to one or more body types. Once you understand your pattern, the next step
            is discovering your full body type profile.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/symptoms" className="text-accent no-underline hover:underline">
              Browse Symptoms →
            </Link>
            <Link href="/wellness" className="text-accent no-underline hover:underline">
              Wellness Guides →
            </Link>
          </div>
        </div>

        <SymptomCta />
      </main>
    </>
  )
}
