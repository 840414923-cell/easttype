import type { Metadata } from "next"
import Link from "next/link"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "Wellness Guides — Chinese Medicine for Modern Life"
const DESC = "Free wellness guides based on Traditional Chinese Medicine. Understand why you're always tired, always cold, can't sleep, and what to eat for your body type."
const URL = "https://www.myeasterntype.com/wellness"

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

const articles = [
  {
    slug: "chinese-medicine-body-types",
    title: "The 9 Chinese Medicine Body Types — A Complete Guide",
    excerpt: "Chinese medicine identifies 9 body constitutions — each with unique physical patterns, emotional tendencies, and ideal foods.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "chinese-medicine-foods-for-energy",
    title: "Chinese Medicine Foods for Energy: What to Eat When You're Always Tired",
    excerpt: "The right foods can rebuild your Qi. Warm, cooked, easy-to-digest meals are the foundation of energy recovery.",
    tag: "Nutrition",
    readTime: "7 min",
  },
  {
    slug: "foods-that-warm-your-body",
    title: "Foods That Warm Your Body From the Inside",
    excerpt: "Ginger, cinnamon, lamb, and other warming foods stoke your inner furnace. Essential for Yang Deficient types.",
    tag: "Nutrition",
    readTime: "7 min",
  },
]

const tagColors: Record<string, string> = {
  "Overview": "bg-accent/15 text-accent",
  "Qi Deficient": "bg-amber-900/20 text-amber-400",
  "Yang Deficient": "bg-sky-900/20 text-sky-400",
  "Yin Deficient": "bg-red-900/20 text-red-400",
  "Phlegm Damp": "bg-emerald-900/20 text-emerald-400",
  "Damp Heat": "bg-orange-900/20 text-orange-400",
  "Qi Stagnant": "bg-purple-900/20 text-purple-400",
  "Nutrition": "bg-lime-900/20 text-lime-400",
}

export default function WellnessIndexPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-3xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
          EastType
        </Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Wellness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Wellness Guides
      </h1>
      <p className="text-text2 text-base mb-10 leading-relaxed max-w-xl">
        Free guides based on Traditional Chinese Medicine. Understand your body&apos;s signals through 3,000 years of Eastern wisdom.
      </p>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/wellness/${article.slug}`}
            className="group block border border-border rounded-xl p-5 bg-cream/5 hover:bg-cream/10 hover:border-accent/30 transition-all duration-300 no-underline"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${tagColors[article.tag] || "bg-accent/15 text-accent"}`}>
                {article.tag}
              </span>
              <span className="text-[10px] text-text2/50">{article.readTime} read</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-lg text-text group-hover:text-accent transition-colors mb-1.5 leading-snug">
              {article.title}
            </h2>
            <p className="text-text2 text-sm leading-relaxed">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-text2 text-sm mb-4">
          Not sure which guide is for you? Discover your body type first.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_30px_rgba(201,163,85,0.2)]"
        >
          Take the Free Quiz →
        </Link>
      </div>
    </main>
    </>
  )
}
