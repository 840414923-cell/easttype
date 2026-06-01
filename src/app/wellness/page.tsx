import type { Metadata } from "next"
import Link from "next/link"

const TITLE = "Wellness Guides — Chinese Medicine for Modern Life"
const DESC = "Free wellness guides based on Traditional Chinese Medicine. Understand why you're always tired, always cold, can't sleep, and what to eat for your body type."
const URL = "https://myeasterntype.com/wellness"

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
    slug: "why-am-i-always-tired",
    title: "Why Am I Always Tired? A Chinese Medicine Explanation",
    excerpt: "Chronic fatigue that doesn't improve with sleep is usually Qi Deficiency. Your battery is low, not broken.",
    tag: "Qi Deficient",
    readTime: "8 min",
  },
  {
    slug: "cold-hands-and-feet",
    title: "Cold Hands and Feet: Chinese Medicine Explains Why",
    excerpt: "Always cold? Your inner furnace is underpowered. This is Yang Deficiency, and warming foods can help.",
    tag: "Yang Deficient",
    readTime: "8 min",
  },
  {
    slug: "night-sweats-chinese-medicine",
    title: "Night Sweats in Chinese Medicine: What Your Body Is Saying",
    excerpt: "Waking up drenched? TCM attributes this to Yin Deficiency — your cooling system is running low.",
    tag: "Yin Deficient",
    readTime: "7 min",
  },
  {
    slug: "insomnia-chinese-medicine",
    title: "Insomnia in Chinese Medicine: Why You Can't Sleep",
    excerpt: "Can't turn off your brain at night? Night heat and racing thoughts often point to Yin Deficiency.",
    tag: "Yin Deficient",
    readTime: "7 min",
  },
  {
    slug: "bloating-chinese-medicine",
    title: "Bloating in Chinese Medicine: Why You Feel Heavy After Eating",
    excerpt: "Chronic bloating and heaviness usually mean Damp accumulation — your body holds moisture like a sponge.",
    tag: "Phlegm Damp",
    readTime: "7 min",
  },
  {
    slug: "acne-chinese-medicine",
    title: "Acne in Chinese Medicine: The Internal Heat Connection",
    excerpt: "Persistent acne, especially around the jawline, signals Damp Heat — sticky warmth pushing out through skin.",
    tag: "Damp Heat",
    readTime: "7 min",
  },
  {
    slug: "anxiety-chinese-medicine",
    title: "Anxiety in Chinese Medicine: When Energy Gets Stuck",
    excerpt: "Chest tightness and mood swings often signal Qi Stagnation — energy builds up but can't flow freely.",
    tag: "Qi Stagnant",
    readTime: "7 min",
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
  return (
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
  )
}
