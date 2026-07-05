import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SYMPTOMS, SYMPTOM_SLUGS } from "@/lib/symptoms-data"
import SymptomCta from "@/components/symptom-cta"
import { SymptomExplorer } from "./symptom-explorer"
import { CategoryIcon } from "./category-icons"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "What Your Symptoms Mean: Eastern Body Type Guide"
const DESC = "Explore common symptoms like fatigue, cold sensitivity, poor sleep, and bloating through Chinese medicine and body type patterns. Find out what your body may be telling you."
const URL = "https://www.myeasterntype.com/symptoms"

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

const CATEGORY_GROUPS = [
  { name: "Energy & Vitality", anchor: "energy", tags: ["Fatigue", "Energy", "Motivation"] },
  { name: "Sleep", anchor: "sleep", tags: ["Sleep"] },
  { name: "Digestion & Appetite", anchor: "digestion", tags: ["Digestion", "Appetite", "Cravings"] },
  { name: "Skin, Hair & Nails", anchor: "skin", tags: ["Skin", "Hair", "Nails"] },
  { name: "Mood & Mind", anchor: "mood", tags: ["Emotional", "Anxiety", "Mental Clarity", "Mental", "Cognitive", "Dizziness"] },
  { name: "Temperature & Sweating", anchor: "temperature", tags: ["Cold Sensitivity", "Night Sweats", "Sweating", "Heat", "Temperature"] },
  { name: "Pain & Tension", anchor: "pain", tags: ["Pain", "Tension", "Mobility"] },
  { name: "Women's Health", anchor: "womens", tags: ["Women's Health", "Hormonal"] },
  { name: "Immunity & Respiratory", anchor: "immunity", tags: ["Immunity", "Respiratory"] },
  { name: "Circulation, Fluids & Weight", anchor: "circulation", tags: ["Circulation", "Swelling", "Thirst", "Weight", "Metabolism", "Body"] },
  { name: "Head & Senses", anchor: "senses", tags: ["Sensory", "Oral"] },
]

const FEATURED_SLUGS = [
  "why-am-i-always-tired",
  "why-do-i-feel-anxious",
  "why-cant-i-fall-asleep",
  "why-am-i-always-cold",
  "always-bloated-after-eating",
  "why-do-i-have-brain-fog",
]

const CATEGORY_ICON_MAP: Record<string, string> = {
  energy: "energy",
  sleep: "sleep",
  digestion: "digestion",
  skin: "skin",
  mood: "mood",
  temperature: "temperature",
  pain: "pain",
  womens: "womens",
  immunity: "immunity",
  circulation: "circulation",
  senses: "senses",
}

export default function SymptomsHubPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
  ])

  const symptoms = SYMPTOM_SLUGS.map((slug) => {
    const s = SYMPTOMS[slug]
    return { slug: s.slug, title: s.title.en, tag: s.tag, readTime: s.readTime, metaDesc: s.metaDesc }
  })

  const featured = FEATURED_SLUGS.map((slug) => {
    const s = SYMPTOMS[slug]
    return { slug: s.slug, title: s.title.en, tag: s.tag, readTime: s.readTime, metaDesc: s.metaDesc }
  })

  const categoryCounts = CATEGORY_GROUPS.map((c) => ({
    ...c,
    count: symptoms.filter((s) => c.tags.includes(s.tag)).length,
    icon: CATEGORY_ICON_MAP[c.anchor],
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-5xl mx-auto px-6 py-12">

        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Symptoms</span>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl mb-16 bg-gradient-to-br from-[rgba(201,163,85,0.08)] via-[rgba(201,163,85,0.04)] to-transparent border border-[rgba(201,163,85,0.1)]">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[rgba(201,163,85,0.06)] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="relative px-8 py-14 sm:px-14 sm:py-16">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[rgba(201,163,85,0.12)] text-accent text-xs font-medium uppercase tracking-wider mb-5">
                  Symptom Library
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl text-text mb-5 leading-tight">
                  What Your Symptoms May Be Telling You
                </h1>
                <p className="text-text2 leading-relaxed mb-8 max-w-xl text-base sm:text-lg">
                  Recurring symptoms like fatigue, poor sleep, and bloating may be connected to your Eastern body type. Explore {SYMPTOM_SLUGS.length} in-depth guides below.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-3xl text-accent font-semibold">{SYMPTOM_SLUGS.length}</div>
                    <div className="text-xs text-text2/60 uppercase tracking-wider mt-1">Symptom Guides</div>
                  </div>
                  <div className="w-px bg-[rgba(201,163,85,0.15)]" />
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-3xl text-accent font-semibold">{CATEGORY_GROUPS.length}</div>
                    <div className="text-xs text-text2/60 uppercase tracking-wider mt-1">Categories</div>
                  </div>
                  <div className="w-px bg-[rgba(201,163,85,0.15)]" />
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-3xl text-accent font-semibold">9</div>
                    <div className="text-xs text-text2/60 uppercase tracking-wider mt-1">Body Types</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <Image
                  src="/images/symptoms-hero.png"
                  alt="Eastern body type wellness illustration"
                  width={320}
                  height={320}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Symptoms */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text">
              Most Searched Symptoms
            </h2>
            <Link href="#all-symptoms" className="text-sm text-accent hover:underline whitespace-nowrap">
              View all {SYMPTOM_SLUGS.length}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((s) => (
              <Link
                key={s.slug}
                href={`/symptoms/${s.slug}`}
                className="group block no-underline rounded-2xl overflow-hidden border border-[rgba(201,163,85,0.12)] bg-card-bg hover:border-[rgba(201,163,85,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,163,85,0.08)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/images/symptoms/${s.slug}.png`}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-accent/80 uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-[rgba(201,163,85,0.08)]">{s.tag}</span>
                    <span className="text-[10px] text-text2/40">{s.readTime}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-base text-text group-hover:text-accent transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-text2/50 mt-2 line-clamp-2">{s.metaDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Category Grid */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categoryCounts.map((c) => (
              <a
                key={c.anchor}
                href="#all-symptoms"
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-[rgba(201,163,85,0.1)] bg-card-bg hover:border-[rgba(201,163,85,0.3)] hover:bg-[rgba(201,163,85,0.03)] transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(201,163,85,0.08)] flex items-center justify-center mb-3 group-hover:bg-[rgba(201,163,85,0.15)] transition-colors">
                  <CategoryIcon name={c.icon} className="w-6 h-6 text-accent" />
                </div>
                <span className="font-[family-name:var(--font-display)] text-sm text-text group-hover:text-accent transition-colors">
                  {c.name}
                </span>
                <span className="text-xs text-text2/40 mt-1">{c.count} guides</span>
              </a>
            ))}
          </div>
        </section>

        {/* Full List */}
        <section id="all-symptoms" className="scroll-mt-8 max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text mb-6">
            All Symptom Guides
          </h2>
          <SymptomExplorer symptoms={symptoms} categories={CATEGORY_GROUPS} />
        </section>

        <div className="mt-12">
          <SymptomCta />
        </div>
      </main>
    </>
  )
}
