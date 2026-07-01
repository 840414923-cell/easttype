import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
  { name: "Energy & Vitality", anchor: "energy", image: "/images/symptoms/cat-energy.png", tags: ["Fatigue", "Energy", "Motivation"] },
  { name: "Sleep", anchor: "sleep", image: "/images/symptoms/cat-sleep.png", tags: ["Sleep"] },
  { name: "Digestion & Appetite", anchor: "digestion", image: "/images/symptoms/cat-digestion.png", tags: ["Digestion", "Appetite", "Cravings"] },
  { name: "Skin, Hair & Nails", anchor: "skin", image: "/images/symptoms/cat-skin.png", tags: ["Skin", "Hair", "Nails"] },
  { name: "Mood & Mind", anchor: "mood", image: "/images/symptoms/cat-mood.png", tags: ["Emotional", "Anxiety", "Mental Clarity", "Mental", "Cognitive", "Dizziness"] },
  { name: "Temperature & Sweating", anchor: "temperature", image: "/images/symptoms/cat-temperature.png", tags: ["Cold Sensitivity", "Night Sweats", "Sweating", "Heat", "Temperature"] },
  { name: "Pain & Tension", anchor: "pain", image: "/images/symptoms/cat-pain.png", tags: ["Pain", "Tension", "Mobility"] },
  { name: "Women's Health", anchor: "womens", image: "/images/symptoms/cat-womens.png", tags: ["Women's Health", "Hormonal"] },
  { name: "Immunity & Respiratory", anchor: "immunity", image: "/images/symptoms/cat-immunity.png", tags: ["Immunity", "Respiratory"] },
  { name: "Circulation, Fluids & Weight", anchor: "circulation", image: "/images/symptoms/cat-circulation.png", tags: ["Circulation", "Swelling", "Thirst", "Weight", "Metabolism", "Body"] },
  { name: "Head & Senses", anchor: "senses", image: "/images/symptoms/cat-senses.png", tags: ["Sensory", "Oral"] },
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
        <p className="text-text2 leading-relaxed mb-10 max-w-2xl">
          Recurring symptoms like fatigue, poor sleep, cold sensitivity, and bloating may be connected to your body type. Browse {SYMPTOM_SLUGS.length} guides across {CATEGORY_GROUPS.length} categories.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {CATEGORY_GROUPS.map((g) => {
            const count = SYMPTOM_SLUGS.filter((s) => SYMPTOMS[s] && g.tags.includes(SYMPTOMS[s].tag)).length
            if (count === 0) return null
            return (
              <a
                key={g.anchor}
                href={`#${g.anchor}`}
                className="group block no-underline"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[rgba(201,163,85,0.12)] mb-2">
                  <Image
                    src={g.image}
                    alt={g.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                    <span className="font-[family-name:var(--font-display)] text-sm text-white font-medium drop-shadow-lg">{g.name}</span>
                  </div>
                  <span className="absolute top-2 right-2 text-[10px] text-white/90 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded-full">{count}</span>
                </div>
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
            <section key={g.anchor} id={g.anchor} className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={g.image}
                    alt={g.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl text-text">{g.name}</h2>
                  <span className="text-xs text-text2/50">{symptoms.length} guides</span>
                </div>
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
