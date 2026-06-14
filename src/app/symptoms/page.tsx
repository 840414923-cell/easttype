import type { Metadata } from "next"
import Link from "next/link"
import { SYMPTOMS, SYMPTOM_SLUGS } from "@/lib/symptoms-data"
import SymptomCta from "@/components/symptom-cta"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const TITLE = "What Your Symptoms Mean — Eastern Body Type Guide"
const DESC = "Explore common symptoms like fatigue, cold sensitivity, poor sleep, and bloating through Eastern wellness and body type patterns. Find out what your body may be telling you."
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

export default function SymptomsHubPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 leading-tight">
        Explore Common Wellness Symptoms
      </h1>
      <p className="text-text2 leading-relaxed mb-10 max-w-2xl">
        Many people struggle with recurring symptoms such as fatigue, poor sleep, cold sensitivity, bloating, and low energy. This resource hub explores these symptoms through the lens of Eastern wellness and constitutional body type patterns.
      </p>

      <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-6">
        Popular Symptom Guides
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {SYMPTOM_SLUGS.map((slug) => {
          const s = SYMPTOMS[slug]
          return (
            <Link
              key={slug}
              href={`/symptoms/${slug}`}
              className="group block border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg no-underline transition-all duration-300 hover:border-[rgba(201,163,85,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-accent uppercase tracking-[0.15em] font-semibold">{s.tag}</span>
                <span className="text-[10px] text-text2/50">·</span>
                <span className="text-[10px] text-text2/50">{s.readTime}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg text-text group-hover:text-accent transition-colors mb-2">
                {s.title.en}
              </h3>
              <p className="text-sm text-text2 leading-relaxed line-clamp-2">
                {s.metaDesc}
              </p>
            </Link>
          )
        })}
      </div>

      <SymptomCta />
    </main>
    </>
  )
}
