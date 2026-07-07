"use client"

import Link from "next/link"
import Image from "next/image"
import type { ConstitutionId } from "@/lib/types"
import { getRecommendations } from "@/lib/recommendations"

export default function ExploreMore({ typeId }: { typeId: ConstitutionId }) {
  const recs = getRecommendations(typeId)
  const hasHerbs = recs.herbs.length > 0
  const hasFormulas = recs.formulas.length > 0
  const hasSymptoms = recs.symptoms.length > 0
  const hasWellness = recs.wellness.length > 0

  if (!hasHerbs && !hasFormulas && !hasSymptoms && !hasWellness) return null

  return (
    <section className="print:hidden bg-bg2 border-t border-border">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="text-center mb-8">
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-2">EastType</div>
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text tracking-wide">
            Explore More for Your Type
          </h2>
          <p className="text-sm text-text2 mt-2 leading-relaxed">
            Deepen your wellness journey with resources matched to your constitution.
          </p>
        </div>

        {hasHerbs && (
          <div className="mb-10">
            <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              Herbs for You
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {recs.herbs.map((herb) => (
                <Link
                  key={herb.slug}
                  href={`/herbs/${herb.slug}`}
                  className="group block bg-card-bg border border-card-border rounded-lg overflow-hidden no-underline transition-all duration-200 hover:border-accent hover:shadow-md"
                >
                  {herb.image && (
                    <div className="relative w-full h-24 bg-bg2 overflow-hidden">
                      <Image
                        src={herb.image}
                        alt={herb.nameEn}
                        fill
                        sizes="200px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      {herb.nameEn}
                    </div>
                    <div className="text-xs text-text2 mt-0.5 italic">{herb.pinyin}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {hasFormulas && (
          <div className="mb-10">
            <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              Herbal Tea Formulas
            </h3>
            <div className="space-y-2">
              {recs.formulas.map((f) => (
                <Link
                  key={f.formulaSlug}
                  href={`/solutions/${f.solutionSlug}#${f.formulaSlug}`}
                  className="group flex items-center justify-between bg-card-bg border border-card-border rounded-lg px-4 py-3 no-underline transition-all duration-200 hover:border-accent hover:bg-card-hover"
                >
                  <div>
                    <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      {f.formulaName}
                    </div>
                    <div className="text-xs text-text2 mt-0.5">{f.solutionTitle}</div>
                  </div>
                  <span className="text-accent text-sm transition-transform duration-200 group-hover:translate-x-1">
                    &#8594;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {hasSymptoms && (
          <div className="mb-10">
            <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              Related Symptoms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recs.symptoms.map((s) => (
                <Link
                  key={s.slug}
                  href={s.url}
                  className="group flex items-center gap-2 bg-card-bg border border-card-border rounded-lg px-4 py-2.5 no-underline transition-all duration-200 hover:border-accent hover:bg-card-hover"
                >
                  <span className="text-accent text-xs">&#9679;</span>
                  <span className="text-sm text-text2 group-hover:text-accent transition-colors line-clamp-2">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {hasWellness && (
          <div className="mb-6">
            <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-accent rounded-full" />
              Wellness Guides
            </h3>
            <div className="space-y-2">
              {recs.wellness.map((w) => (
                <Link
                  key={w.slug}
                  href={w.url}
                  className="group flex items-center justify-between bg-card-bg border border-card-border rounded-lg px-4 py-3 no-underline transition-all duration-200 hover:border-accent hover:bg-card-hover"
                >
                  <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                    {w.title}
                  </span>
                  <span className="text-accent text-sm transition-transform duration-200 group-hover:translate-x-1">
                    &#8594;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-8 pt-6 border-t border-border">
          <Link
            href="/herbs"
            className="inline-flex items-center gap-2 text-sm text-accent font-semibold no-underline hover:underline"
          >
            Browse All 113 Herbs <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
