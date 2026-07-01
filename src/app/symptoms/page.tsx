import type { Metadata } from "next"
import Link from "next/link"
import { SYMPTOMS, SYMPTOM_SLUGS } from "@/lib/symptoms-data"
import SymptomCta from "@/components/symptom-cta"
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
  { name: "Energy & Vitality", icon: "\u26A1", anchor: "energy", tags: ["Fatigue", "Energy", "Motivation"] },
  { name: "Sleep", icon: "\uD83C\uDF19", anchor: "sleep", tags: ["Sleep"] },
  { name: "Digestion & Appetite", icon: "\uD83C\uDF7D\uFE0F", anchor: "digestion", tags: ["Digestion", "Appetite", "Cravings"] },
  { name: "Skin, Hair & Nails", icon: "\u2728", anchor: "skin", tags: ["Skin", "Hair", "Nails"] },
  { name: "Mood & Mind", icon: "\uD83E\uDDE0", anchor: "mood", tags: ["Emotional", "Anxiety", "Mental Clarity", "Mental", "Cognitive", "Dizziness"] },
  { name: "Temperature & Sweating", icon: "\uD83C\uDF21\uFE0F", anchor: "temperature", tags: ["Cold Sensitivity", "Night Sweats", "Sweating", "Heat", "Temperature"] },
  { name: "Pain & Tension", icon: "\uD83D\uDCAA", anchor: "pain", tags: ["Pain", "Tension", "Mobility"] },
  { name: "Women's Health", icon: "\uD83C\uDF38", anchor: "womens", tags: ["Women's Health", "Hormonal"] },
  { name: "Immunity & Respiratory", icon: "\uD83D\uDEE1\uFE0F", anchor: "immunity", tags: ["Immunity", "Respiratory"] },
  { name: "Circulation, Fluids & Weight", icon: "\uD83D\uDCA7", anchor: "circulation", tags: ["Circulation", "Swelling", "Thirst", "Weight", "Metabolism", "Body"] },
  { name: "Head & Senses", icon: "\uD83D\uDC42", anchor: "senses", tags: ["Sensory", "Oral"] },
]

export default function SymptomsHubPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Symptoms</span>
        </nav>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 leading-tight">
          Explore Common Wellness Symptoms
        </h1>
        <p className="text-text2 leading-relaxed mb-8 max-w-2xl">
          Recurring symptoms like fatigue, poor sleep, cold sensitivity, and bloating may be connected to your body type. Browse {SYMPTOM_SLUGS.length} guides below.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORY_GROUPS.map((g) => {
            const count = SYMPTOM_SLUGS.filter((s) => SYMPTOMS[s] && g.tags.includes(SYMPTOMS[s].tag)).length
            if (count === 0) return null
            return (
              <a
                key={g.anchor}
                href={`#${g.anchor}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(201,163,85,0.2)] bg-card-bg text-sm text-text2 hover:border-[rgba(201,163,85,0.5)] hover:text-accent transition-all no-underline"
              >
                <span className="text-base">{g.icon}</span>
                <span>{g.name}</span>
                <span className="text-[11px] text-text2/50">{count}</span>
              </a>
            )
          })}
        </div>

        {CATEGORY_GROUPS.map((g) => {
          const symptoms = SYMPTOM_SLUGS
            .filter((s) => SYMPTOMS[s] && g.tags.includes(SYMPTOMS[s].tag))
            .map((s) => SYMPTOMS[s])
          if (symptoms.length === 0) return null

          return (
            <section key={g.anchor} id={g.anchor} className="mb-10 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{g.icon}</span>
                <h2 className="font-[family-name:var(--font-display)] text-xl text-text">{g.name}</h2>
                <span className="text-xs text-text2/50 bg-card-bg px-2 py-0.5 rounded-full">{symptoms.length}</span>
                <div className="flex-1 h-px bg-[rgba(201,163,85,0.12)]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {symptoms.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/symptoms/${s.slug}`}
                    className="group block border border-[rgba(201,163,85,0.1)] rounded-lg p-4 bg-card-bg no-underline transition-all duration-200 hover:border-[rgba(201,163,85,0.35)] hover:-translate-y-0.5"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-sm text-text group-hover:text-accent transition-colors mb-1 leading-snug">
                      {s.title.en}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-accent uppercase tracking-wider font-medium">{s.tag}</span>
                      <span className="text-[10px] text-text2/40">·</span>
                      <span className="text-[10px] text-text2/40">{s.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <SymptomCta />
      </main>
    </>
  )
}
