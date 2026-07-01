import type { Metadata } from "next"
import Link from "next/link"
import { SYMPTOMS, SYMPTOM_SLUGS } from "@/lib/symptoms-data"
import SymptomCta from "@/components/symptom-cta"
import { SymptomExplorer } from "./symptom-explorer"
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

export default function SymptomsHubPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
  ])

  const symptoms = SYMPTOM_SLUGS.map((slug) => {
    const s = SYMPTOMS[slug]
    return { slug: s.slug, title: s.title.en, tag: s.tag, readTime: s.readTime, metaDesc: s.metaDesc }
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Symptoms</span>
        </nav>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
          Explore Common Wellness Symptoms
        </h1>
        <p className="text-text2 leading-relaxed mb-8">
          Recurring symptoms like fatigue, poor sleep, cold sensitivity, and bloating may be connected to your body type. Search {SYMPTOM_SLUGS.length} guides below.
        </p>

        <SymptomExplorer symptoms={symptoms} categories={CATEGORY_GROUPS} />

        <div className="mt-12">
          <SymptomCta />
        </div>
      </main>
    </>
  )
}
