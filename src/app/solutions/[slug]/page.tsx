import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SOLUTIONS, SOLUTION_LIST } from "@/lib/solutions-data"
import { HERBS } from "@/lib/herbs-data"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { notFound } from "next/navigation"

const SITE_URL = "https://www.myeasterntype.com"

export function generateStaticParams() {
  return SOLUTION_LIST.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = SOLUTIONS[slug]
  if (!solution) return {}

  const url = `${SITE_URL}/solutions/${solution.slug}`
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    openGraph: { title: solution.metaTitle, description: solution.metaDescription, url, type: "article", siteName: "EastType" },
    twitter: { card: "summary_large_image", title: solution.metaTitle, description: solution.metaDescription },
    alternates: { canonical: url },
  }
}

const FORMULA_COLORS: Record<string, string> = {
  "Phlegm Damp": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Spleen Qi Deficient": "bg-amber-100 text-amber-800 border-amber-200",
  "Qi Deficient": "bg-amber-100 text-amber-800 border-amber-200",
  "Qi Stagnant": "bg-purple-100 text-purple-800 border-purple-200",
  "Yin Deficient": "bg-rose-100 text-rose-800 border-rose-200",
  "Yang Deficient": "bg-sky-100 text-sky-800 border-sky-200",
  "Blood Deficient": "bg-red-100 text-red-800 border-red-200",
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = SOLUTIONS[slug]
  if (!solution) notFound()

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: solution.title,
    description: solution.metaDescription,
    url: `${SITE_URL}/solutions/${solution.slug}`,
    author: { "@type": "Organization", name: "EastType" },
    publisher: { "@type": "Organization", name: "EastType" },
  }

  const jsonLdBreadcrumb = buildBreadcrumbJsonLd([
    { name: "EastType", url: SITE_URL },
    { name: "Solutions", url: `${SITE_URL}/solutions` },
    { name: solution.title.split(":")[0], url: `${SITE_URL}/solutions/${solution.slug}` },
  ])

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const howToJsonLd = solution.formulas.map((f) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: f.nameEn,
    description: f.description,
    supply: f.ingredients.map((ing) => `${ing.amount} ${ing.nameEn} (${ing.nameZh})`),
    step: f.preparationSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      {howToJsonLd.map((h, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(h) }} />
      ))}

      <Nav />
      <main className="flex-1">
        <article className="max-w-5xl mx-auto px-6 py-12">

          {/* Breadcrumb */}
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <Link href="/solutions" className="hover:text-accent transition-colors no-underline text-text2/60">Solutions</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">{solution.title.split(":")[0]}</span>
          </nav>

          {/* Hero */}
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 leading-tight tracking-wide">
            {solution.title}
          </h1>

          <p className="text-text2 text-lg leading-relaxed mb-6 max-w-2xl">
            {solution.intro}
          </p>

          {/* Hero image placeholder */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-card-bg border border-[rgba(140,45,42,0.12)] mb-12">
            <Image
              src={solution.heroImage}
              alt={solution.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Quick comparison table */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-2 tracking-wide">
            Quick Comparison: Which Formula for Which Type?
          </h2>
          <p className="text-sm text-text2/60 mb-4">
            Not sure which formula to try? Start here.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[rgba(140,45,42,0.2)]">
                  <th className="text-left py-3 px-4 font-semibold text-text">Formula</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Best For</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Key Herbs</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Prep Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Taste</th>
                </tr>
              </thead>
              <tbody>
                {solution.formulas.map((f) => (
                  <tr key={f.slug} className="border-b border-[rgba(140,45,42,0.08)]">
                    <td className="py-3 px-4">
                      <a href={`#${f.slug}`} className="text-accent hover:underline font-medium">{f.nameEn.split(" & ")[0]}</a>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${FORMULA_COLORS[f.bodyType] || "bg-gray-100 text-gray-700"}`}>
                        {f.bodyType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text2">{f.ingredients.map((i) => i.nameEn.split(" (")[0]).join(", ")}</td>
                    <td className="py-3 px-4 text-text2">{f.prepTime}</td>
                    <td className="py-3 px-4 text-text2">{f.tasteProfile.split(".")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TCM vs Modern */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-2 tracking-wide">
            Why Chinese Medicine Sees Weight Differently
          </h2>
          <p className="text-text2 leading-relaxed mb-6">
            Western medicine and Chinese medicine are not opposites. They look at the same body from different angles. Understanding both perspectives helps you make better choices for your body.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[rgba(140,45,42,0.2)]">
                  <th className="text-left py-3 px-4 font-semibold text-text">Topic</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Western Medicine</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Chinese Medicine</th>
                </tr>
              </thead>
              <tbody>
                {solution.tcmVsModern.map((row, i) => (
                  <tr key={i} className="border-b border-[rgba(140,45,42,0.08)]">
                    <td className="py-3 px-4 font-medium text-text">{row.aspect}</td>
                    <td className="py-3 px-4 text-text2">{row.westernView}</td>
                    <td className="py-3 px-4 text-text2">{row.tcmView}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Body Type Explanations */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-2 tracking-wide">
            Three Body Types That Commonly Struggle With Weight
          </h2>
          <p className="text-text2 leading-relaxed mb-6">
            In Chinese medicine, there is no universal weight loss formula. The right approach depends on your body type. Here are the three most common patterns:
          </p>
          <div className="space-y-6 mb-12">
            {solution.bodyTypeExplanations.map((bt, i) => (
              <div key={i} className="rounded-xl border border-[rgba(140,45,42,0.12)] bg-card-bg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${FORMULA_COLORS[bt.bodyType] || "bg-gray-100 text-gray-700"}`}>
                    Type {i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-text tracking-wide">
                    {bt.bodyType}
                  </h3>
                  <Link
                    href={`/types/${bt.bodyTypeSlug}`}
                    className="text-xs text-accent hover:underline ml-auto"
                  >
                    Learn more {'>'}
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">TCM Perspective</p>
                    <p className="text-sm text-text2 leading-relaxed">{bt.tcmExplanation}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">Plain English</p>
                    <p className="text-sm text-text2 leading-relaxed">{bt.modernExplanation}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">Common Signs</p>
                  <div className="flex flex-wrap gap-2">
                    {bt.symptoms.map((s, j) => (
                      <span key={j} className="text-xs text-text2/70 bg-[rgba(140,45,42,0.05)] border border-[rgba(140,45,42,0.1)] px-2.5 py-1 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-[rgba(140,45,42,0.04)] rounded-lg p-3">
                  <p className="text-xs font-semibold text-accent mb-1">A Simple Analogy</p>
                  <p className="text-sm text-text2 italic leading-relaxed">{bt.metaphor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulas */}
          {solution.formulas.map((formula, idx) => (
            <section key={formula.slug} id={formula.slug} className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-accent/60">FORMULA {idx + 1}</span>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${FORMULA_COLORS[formula.bodyType] || "bg-gray-100 text-gray-700"}`}>
                  For: {formula.bodyType}
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-1 tracking-wide">
                {formula.nameEn}
              </h2>
              <p className="text-sm text-text2/60 mb-1">
                <span className="font-[family-name:var(--font-display)] text-text2/80">{formula.nameZh}</span>
                <span className="mx-2">|</span>
                <span className="italic">{formula.namePinyin}</span>
              </p>

              {/* Source */}
              <div className="bg-[rgba(140,45,42,0.04)] border border-[rgba(140,45,42,0.1)] rounded-lg px-4 py-2 mb-4">
                <p className="text-xs text-text2/60">
                  <span className="font-semibold text-accent">Classical Source: </span>
                  {formula.classicalSourceEn}
                </p>
              </div>

              {/* Formula image placeholder */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-card-bg border border-[rgba(140,45,42,0.12)] mb-6">
                <Image
                  src={formula.image}
                  alt={formula.nameEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Description */}
              <p className="text-text2 leading-relaxed mb-6">
                {formula.description}
              </p>

              {/* Ingredients */}
              <h3 className="font-semibold text-text mb-3 text-lg">Ingredients</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[rgba(140,45,42,0.2)]">
                      <th className="text-left py-2 px-3 font-semibold text-text">Ingredient</th>
                      <th className="text-left py-2 px-3 font-semibold text-text">Amount</th>
                      <th className="text-left py-2 px-3 font-semibold text-text">Role</th>
                      <th className="text-left py-2 px-3 font-semibold text-text">Why This Herb</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formula.ingredients.map((ing, i) => {
                      const herb = ing.herbSlug ? HERBS[ing.herbSlug] : undefined
                      return (
                      <tr key={i} className="border-b border-[rgba(140,45,42,0.08)]">
                        <td className="py-2 px-3">
                          {herb && herb.image ? (
                            <Link href={`/herbs/${ing.herbSlug}`} className="inline-flex items-center gap-2 group no-underline">
                              <span className="relative w-8 h-8 rounded-full overflow-hidden border border-[rgba(140,45,42,0.2)] flex-shrink-0">
                                <Image
                                  src={herb.image}
                                  alt={ing.nameEn}
                                  fill
                                  className="object-cover"
                                  sizes="32px"
                                />
                              </span>
                              <span className="font-medium text-text group-hover:text-accent transition-colors">{ing.nameEn}</span>
                              <span className="text-text2/50 text-xs">({ing.nameZh})</span>
                              <span className="text-accent/40 text-xs group-hover:text-accent transition-colors">{"\u2192"}</span>
                            </Link>
                          ) : (
                            <>
                              <span className="font-medium text-text">{ing.nameEn}</span>
                              <span className="text-text2/50 ml-1">({ing.nameZh})</span>
                              {ing.herbSlug && (
                                <Link href={`/herbs/${ing.herbSlug}`} className="ml-1 text-xs text-accent hover:underline">details</Link>
                              )}
                            </>
                          )}
                        </td>
                        <td className="py-2 px-3 text-text2">{ing.amount}</td>
                        <td className="py-2 px-3">
                          <span className="text-xs font-semibold text-accent/70">{ing.role}</span>
                        </td>
                        <td className="py-2 px-3 text-text2 text-sm">{ing.why}</td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Preparation */}
              <h3 className="font-semibold text-text mb-3 text-lg">How to Make It</h3>
              <ol className="space-y-2 mb-6">
                {formula.preparationSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text2 leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(140,45,42,0.1)] text-accent font-semibold text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Usage details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card-bg rounded-lg border border-[rgba(140,45,42,0.1)] p-4">
                  <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">How to Take</p>
                  <p className="text-sm text-text2 leading-relaxed">{formula.howToTake}</p>
                </div>
                <div className="bg-card-bg rounded-lg border border-[rgba(140,45,42,0.1)] p-4">
                  <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">How Long</p>
                  <p className="text-sm text-text2 leading-relaxed">{formula.duration}</p>
                </div>
                <div className="bg-card-bg rounded-lg border border-[rgba(140,45,42,0.1)] p-4">
                  <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">Taste</p>
                  <p className="text-sm text-text2 leading-relaxed">{formula.tasteProfile}</p>
                </div>
                <div className="bg-card-bg rounded-lg border border-[rgba(140,45,42,0.1)] p-4">
                  <p className="text-xs font-semibold text-text2/50 uppercase tracking-wider mb-1">Yield</p>
                  <p className="text-sm text-text2 leading-relaxed">{formula.yield} | Prep time: {formula.prepTime}</p>
                </div>
              </div>

              {/* Cautions */}
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 mb-8">
                <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">Who Should Avoid This</p>
                <ul className="space-y-1">
                  {formula.cautions.map((c, i) => (
                    <li key={i} className="text-sm text-red-900/80 leading-relaxed flex gap-2">
                      <span className="text-red-400 mt-0.5">!</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          {/* Quiz CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-[rgba(140,45,42,0.08)] to-[rgba(140,45,42,0.02)] border border-[rgba(140,45,42,0.2)] p-8 text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-3 tracking-wide">
              Which Formula Is Right for You?
            </h2>
            <p className="text-text2 leading-relaxed mb-6 max-w-xl mx-auto">
              Each formula targets a specific body type. Taking the 3-minute body type quiz is the fastest way to find your match and get personalized recommendations.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_20px_rgba(140,45,42,0.2)]"
            >
              Take the Free Body Type Quiz {'>'}
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-4 tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {solution.faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-[rgba(140,45,42,0.12)] bg-card-bg p-5">
                <h3 className="font-semibold text-text mb-2 text-base">{faq.q}</h3>
                <p className="text-sm text-text2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)] p-5">
            <p className="text-xs text-text2 leading-relaxed text-center">
              This content is for educational and informational purposes only and is not medical advice. The herbal formulas described here use food-grade ingredients traditionally consumed in Chinese culture. Always consult a qualified healthcare professional before starting any herbal regimen, especially if you are pregnant, nursing, taking medications, or managing a health condition. Individual results may vary.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
