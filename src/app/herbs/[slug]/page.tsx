import type { Metadata } from "next"
import Link from "next/link"
import { HERBS } from "@/lib/herbs-data"
import { buildArticleJsonLd } from "@/lib/json-ld"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import SymptomCta from "@/components/symptom-cta"

export function generateStaticParams() {
  return Object.keys(HERBS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const herb = HERBS[params.slug]
  if (!herb) return {}
  const title = `${herb.nameEn} (${herb.nameZh}) — TCM Herb Properties & Uses`
  const desc = herb.summary
  const url = `https://www.myeasterntype.com/herbs/${herb.slug}`
  return {
    title,
    description: desc,
    openGraph: { title, description: desc, url, type: "article", siteName: "EastType" },
    twitter: { card: "summary_large_image", title, description: desc },
    alternates: { canonical: url },
  }
}

const TYPE_NAMES: Record<string, string> = {
  qi_deficient: "Qi Deficient",
  yang_deficient: "Yang Deficient",
  yin_deficient: "Yin Deficient",
  phlegm_damp: "Phlegm Damp",
  damp_heat: "Damp Heat",
  blood_stasis: "Blood Stasis",
  qi_stagnant: "Qi Stagnant",
  sensitive: "Sensitive",
  balanced: "Balanced",
}

export default function HerbDetailPage({ params }: { params: { slug: string } }) {
  const herb = HERBS[params.slug]
  if (!herb) return null

  const url = `https://www.myeasterntype.com/herbs/${herb.slug}`
  const title = `${herb.nameEn} (${herb.nameZh}) — TCM Herb Properties & Uses`

  const faqs = herb.faqs.map((f) => ({
    q: { en: f.q, "zh-TW": f.q, ja: f.q },
    a: { en: f.a, "zh-TW": f.a, ja: f.a },
  }))

  const jsonLd = buildArticleJsonLd({
    title,
    description: herb.summary,
    url,
    datePublished: "2026-06-29",
    faqs,
    breadcrumb: [
      { name: "EastType", url: "https://www.myeasterntype.com" },
      { name: "Herbs", url: "https://www.myeasterntype.com/herbs" },
      { name: herb.nameEn, url },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-6 py-12">
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <Link href="/herbs" className="hover:text-accent transition-colors no-underline text-text2/60">Herbs</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">{herb.nameEn}</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-2 leading-tight tracking-wide">
            {herb.nameEn}
          </h1>
          <p className="text-text2 text-sm mb-6">{herb.nameZh} &middot; {herb.pinyin}</p>

          <div className="bg-[rgba(168,135,64,0.06)] border border-[rgba(168,135,64,0.2)] rounded-xl p-5 mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
              Summary
            </h2>
            <p className="text-text leading-relaxed text-[0.95rem]">{herb.summary}</p>
          </div>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              TCM Properties
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody className="text-text2">
                  <tr className="border-b border-border/50">
                    <td className="px-3 py-2 font-medium text-text">Category</td>
                    <td className="px-3 py-2">{herb.category}</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-card-bg/30">
                    <td className="px-3 py-2 font-medium text-text">Temperature</td>
                    <td className="px-3 py-2">{herb.temperature}</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-3 py-2 font-medium text-text">Taste</td>
                    <td className="px-3 py-2">{herb.taste}</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-card-bg/30">
                    <td className="px-3 py-2 font-medium text-text">Channels Entered</td>
                    <td className="px-3 py-2">{herb.channels}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              What This Herb Does
            </h2>
            <ul className="space-y-2 text-text2">
              {herb.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'\u2022'}</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Which Body Types Benefit Most
            </h2>
            <div className="flex flex-wrap gap-2">
              {herb.bodyTypes.map((typeId) => (
                <Link
                  key={typeId}
                  href={`/types/${typeId}`}
                  className="inline-block px-3 py-1.5 rounded-lg border border-[rgba(168,135,64,0.2)] bg-card-bg text-sm text-text hover:border-[rgba(168,135,64,0.4)] transition-all no-underline"
                >
                  {TYPE_NAMES[typeId] || typeId}
                </Link>
              ))}
            </div>
            <p className="text-text2 text-sm mt-4">
              Not sure which type you are? <Link href="/quiz" className="text-accent hover:underline">Take the free 5-minute quiz</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              How to Use
            </h2>
            <p className="text-text2 leading-relaxed mb-4">{herb.howToUse}</p>
            <p className="text-text2 text-sm">
              <strong className="text-text">Dosage:</strong> {herb.dosage}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Food Pairings
            </h2>
            <div className="flex flex-wrap gap-2">
              {herb.foodPairings.map((food, i) => (
                <span key={i} className="inline-block px-3 py-1.5 rounded-lg bg-[rgba(168,135,64,0.06)] text-sm text-text2 border border-[rgba(168,135,64,0.1)]">
                  {food}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-[rgba(180,80,40,0.04)] border border-[rgba(180,80,40,0.15)] rounded-xl p-5">
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
                Cautions
              </h2>
              <ul className="space-y-2 text-text2">
                {herb.cautions.map((caution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600/70 mt-0.5">{'\u26A0'}</span>
                    <span>{caution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {herb.faqs.map((faq, i) => (
                <details key={i} className="group border border-[rgba(168,135,64,0.12)] rounded-xl bg-card-bg">
                  <summary className="flex items-center justify-between cursor-pointer p-4 text-text font-medium text-[0.95rem] leading-relaxed list-none">
                    {faq.q}
                    <span className="text-accent/50 ml-3 shrink-0 transition-transform duration-200 group-open:rotate-45 text-lg">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-text2 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <SymptomCta />

          <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.1)]">
            <p className="text-[10px] text-text2 leading-relaxed text-center">
              This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional before using any herb, especially if you are pregnant, nursing, or taking medication.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
