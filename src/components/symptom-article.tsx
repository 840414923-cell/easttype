import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import type { SymptomArticleData } from "@/lib/symptom-article-types"

const TYPE_COLORS: Record<string, string> = {
  qi_deficient: "bg-amber-100 text-amber-800 border-amber-200",
  yang_deficient: "bg-blue-100 text-blue-800 border-blue-200",
  yin_deficient: "bg-emerald-100 text-emerald-800 border-emerald-200",
  qi_stagnant: "bg-purple-100 text-purple-800 border-purple-200",
  phlegm_damp: "bg-teal-100 text-teal-800 border-teal-200",
  damp_heat: "bg-orange-100 text-orange-800 border-orange-200",
  blood_stasis: "bg-rose-100 text-rose-800 border-rose-200",
  special_diathesis: "bg-indigo-100 text-indigo-800 border-indigo-200",
  balanced: "bg-green-100 text-green-800 border-green-200",
}

export default function SymptomArticle({ data }: { data: SymptomArticleData }) {
  const { slug } = data
  const faqs = SYMPTOM_FAQS[slug]

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">{data.title.split("?")[0]}?</span>
      </nav>

      {/* Title */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-[rgba(201,163,85,0.08)] px-2.5 py-1 rounded-full">
          {data.tag}
        </span>
        <span className="text-xs text-text2/50">{data.readTime} read</span>
      </div>
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {data.title}
      </h1>
      <p className="text-text2 text-sm mb-10">Based on 3,000 years of Eastern body wisdom</p>

      {/* Intro */}
      <section className="mb-10">
        {data.intro.map((p, i) => (
          <p key={i} className="text-text2 leading-relaxed mb-3">{p}</p>
        ))}
      </section>

      {/* Body Type Cards — darker bg block */}
      {data.bodyTypes.length > 0 && (
        <section className="mb-10 -mx-6 px-6 py-8 bg-[var(--color-bg2)] rounded-xl">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
            Which Body Types Are Most Affected
          </h2>
          <p className="text-text2 leading-relaxed mb-5">
            Chinese medicine identifies 9 distinct body types. This symptom shows up most often in the following:
          </p>
          <div className="space-y-4">
            {data.bodyTypes.map((bt, i) => (
              <div key={bt.slug} className="rounded-xl border border-[rgba(201,163,85,0.15)] bg-[var(--color-card-bg)] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${TYPE_COLORS[bt.slug] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                    Type {i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-text">{bt.name}</h3>
                  {bt.percentage && (
                    <span className="text-xs text-text2/50">{bt.percentage}</span>
                  )}
                  <Link
                    href={`/types/${bt.slug}`}
                    className="text-xs text-accent hover:underline ml-auto"
                  >
                    Learn more {'>'}
                  </Link>
                </div>
                <p className="text-sm text-text2 leading-relaxed mb-3">{bt.description}</p>
                <div>
                  <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-2">Common Signs</p>
                  <div className="flex flex-wrap gap-2">
                    {bt.keySigns.map((s, j) => (
                      <span key={j} className="text-xs text-text2/70 bg-[rgba(201,163,85,0.05)] border border-[rgba(201,163,85,0.1)] px-2.5 py-1 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Inline Quiz CTA */}
      <section className="mb-10 print:hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[rgba(201,163,85,0.15)] bg-[rgba(201,163,85,0.06)] p-5">
          <p className="text-sm text-text2 leading-relaxed flex-1 text-center sm:text-left">
            Curious which body type you are? Take the free 5-minute quiz.
          </p>
          <Link
            href="/quiz"
            className="flex-shrink-0 inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-accent to-accent2 text-bg"
          >
            Take the Free Quiz <span className="ml-1.5">&#8594;</span>
          </Link>
        </div>
      </section>

      {/* TCM Explanation */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Views This
        </h2>
        {data.tcmExplanation.map((p, i) => (
          <p key={i} className="text-text2 leading-relaxed mb-3">{p}</p>
        ))}
      </section>

      {/* Metaphor — accent bg block */}
      {data.metaphor && (
        <section className="mb-10">
          <div className="rounded-xl bg-gradient-to-br from-[rgba(201,163,85,0.1)] to-[rgba(201,163,85,0.03)] border border-[rgba(201,163,85,0.2)] p-6">
            <p className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">A Simple Analogy</p>
            <p className="text-sm text-text2 italic leading-relaxed">{data.metaphor}</p>
          </div>
        </section>
      )}

      {/* TCM vs Modern Table — darker bg block */}
      {data.tcmVsModern && data.tcmVsModern.length > 0 && (
        <section className="mb-10 -mx-6 px-6 py-8 bg-[var(--color-bg2)] rounded-xl">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
            Eastern vs. Western Perspective
          </h2>
          <p className="text-text2 text-sm mb-5">Two different lenses on the same symptom.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[rgba(201,163,85,0.25)]">
                  <th className="text-left py-3 px-4 font-semibold text-text">Topic</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Western Medicine</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Chinese Medicine</th>
                </tr>
              </thead>
              <tbody>
                {data.tcmVsModern.map((row, i) => (
                  <tr key={i} className="border-b border-[rgba(201,163,85,0.1)]">
                    <td className="py-3 px-4 font-medium text-text whitespace-nowrap">{row.aspect}</td>
                    <td className="py-3 px-4 text-text2">{row.westernView}</td>
                    <td className="py-3 px-4 text-text2">{row.tcmView}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* What May Help — light card grid */}
      {data.whatMayHelp.length > 0 && (
        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
            Simple Changes That May Help
          </h2>
          <p className="text-text2 leading-relaxed mb-5">
            You don't need to flip your life upside down. Small shifts can stack up surprisingly fast.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.whatMayHelp.map((item, i) => (
              <div key={i} className="rounded-lg border border-[rgba(201,163,85,0.12)] bg-[var(--color-card-bg)] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(201,163,85,0.12)] text-accent font-semibold text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-sm text-text">{item.title}</h3>
                </div>
                <p className="text-xs text-text2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* When to See a Doctor — warning bg */}
      {data.whenToSeeDoctor && (
        <section className="mb-10">
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-600 text-base">{'\u26A0'}</span>
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">When to See a Doctor</p>
            </div>
            <p className="text-sm text-amber-900/80 leading-relaxed">{data.whenToSeeDoctor}</p>
          </div>
        </section>
      )}

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {data.relatedPattern && (
            <Link
              href={`/patterns/${data.relatedPattern.slug}`}
              className="group block rounded-lg border border-[rgba(201,163,85,0.12)] bg-[var(--color-card-bg)] p-4 no-underline hover:border-[rgba(201,163,85,0.4)] transition-all"
            >
              <p className="text-xs text-text2/50 uppercase tracking-wider mb-1">Pattern</p>
              <p className="text-sm text-text group-hover:text-accent transition-colors">{data.relatedPattern.name} {'>'}</p>
            </Link>
          )}
          {data.relatedSymptoms.map((s) => (
            <Link
              key={s.slug}
              href={`/symptoms/${s.slug}`}
              className="group block rounded-lg border border-[rgba(201,163,85,0.12)] bg-[var(--color-card-bg)] p-4 no-underline hover:border-[rgba(201,163,85,0.4)] transition-all"
            >
              <p className="text-xs text-text2/50 uppercase tracking-wider mb-1">Related Symptom</p>
              <p className="text-sm text-text group-hover:text-accent transition-colors">{s.title} {'>'}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {faqs && <FaqSection faqs={faqs} />}

      {/* Food Guide Link — accent bg */}
      {data.foodsForSlug && (
        <section className="mt-10 mb-4">
          <div className="rounded-xl bg-gradient-to-br from-[rgba(201,163,85,0.1)] to-[rgba(201,163,85,0.03)] border border-[rgba(201,163,85,0.2)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
              What Foods May Help
            </h2>
            <p className="text-text2 text-sm leading-relaxed mb-3">
              We put together a full food guide for this symptom, including what to eat, what to avoid, and a simple daily meal plan.
            </p>
            <Link href={`/foods-for/${data.foodsForSlug}`} className="text-accent hover:underline text-[0.95rem] font-medium">
              See the food guide {'>'}
            </Link>
          </div>
        </section>
      )}

      <SymptomCta />

      {/* Disclaimer */}
      <div className="mt-8 rounded-xl bg-[var(--color-bg2)] border border-[rgba(201,163,85,0.08)] p-5">
        <p className="text-xs text-text2 leading-relaxed text-center">
          This content is for educational and informational purposes only and is not medical advice. Always consult a qualified healthcare professional before making changes to your diet or lifestyle, especially if you managing a health condition. Individual results may vary.
        </p>
      </div>
    </main>
  )
}
