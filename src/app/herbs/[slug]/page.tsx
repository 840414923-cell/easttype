import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HERBS } from "@/lib/herbs-data"
import { buildArticleJsonLd } from "@/lib/json-ld"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import SymptomCta from "@/components/symptom-cta"

export function generateStaticParams() {
  return Object.keys(HERBS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const herb = HERBS[slug]
  if (!herb) return {}
  const title = `${herb.nameEn} (${herb.nameZh}) — TCM Herb Properties & Uses`
  const zhName = herb.nameZhTrad || herb.nameZh || herb.nameEn
  const desc = `${herb.nameEn} (${zhName}): ${herb.category}, ${herb.temperature}. ${herb.summary}`.substring(0, 155)
  const url = `https://www.myeasterntype.com/herbs/${herb.slug}`
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      url,
      type: "article",
      siteName: "EastType",
      ...(herb.image ? { images: [{ url: `https://www.myeasterntype.com${herb.image}`, width: 1200, height: 800, alt: herb.nameEn }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      ...(herb.image ? { images: [`https://www.myeasterntype.com${herb.image}`] } : {}),
    },
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

const SYMPTOM_LINKS: Record<string, string> = {
  "Energy Support": "/symptoms/why-am-i-always-tired",
  "Vitality": "/symptoms/why-am-i-always-unmotivated",
  "Cold Sensitivity": "/symptoms/why-am-i-always-cold",
  "Circulation": "/symptoms/why-do-i-have-poor-circulation",
  "Sleep Support": "/symptoms/why-cant-i-fall-asleep",
  "Anxiety Relief": "/symptoms/why-do-i-feel-anxious",
  "Stress Relief": "/symptoms/why-do-i-overthink-everything",
  "Mood Balance": "/symptoms/why-are-my-moods-all-over-the-place",
  "Mental Clarity": "/symptoms/why-do-i-have-brain-fog",
  "Cognitive Support": "/symptoms/why-cant-i-focus",
  "Digestion": "/symptoms/why-do-i-feel-sick-after-eating",
  "Digestive Health": "/symptoms/always-bloated-after-eating",
  "Digestive Comfort": "/symptoms/always-bloated-after-eating",
  "Digestive Warmth": "/symptoms/why-do-i-have-stomach-pain",
  "Stomach Comfort": "/symptoms/why-do-i-have-stomach-pain",
  "Nausea Relief": "/symptoms/why-do-i-have-nausea",
  "Weight Management": "/symptoms/why-cant-i-lose-weight",
  "Metabolic Support": "/symptoms/why-is-my-metabolism-so-slow",
  "Water Retention": "/symptoms/why-do-i-have-water-retention",
  "Skin Health": "/symptoms/why-do-i-keep-breaking-out",
  "Complexion": "/symptoms/why-is-my-complexion-dull",
  "Dry Skin Relief": "/symptoms/why-is-my-skin-so-dry",
  "Cough Relief": "/symptoms/why-do-i-have-a-chronic-cough",
  "Throat Relief": "/symptoms/why-do-i-always-have-a-sore-throat",
  "Sinus Relief": "/symptoms/why-do-i-have-post-nasal-drip",
  "Cold Relief": "/symptoms/why-do-i-get-sick-so-often",
  "Allergy Support": "/symptoms/why-do-i-have-seasonal-allergies",
  "Immune Support": "/symptoms/why-do-i-get-sick-so-often",
  "Headache Relief": "/symptoms/why-do-i-have-headaches",
  "Joint Support": "/symptoms/why-do-i-have-joint-pain",
  "Muscle Relaxation": "/symptoms/why-are-my-shoulders-always-tense",
  "Lower Back Support": "/symptoms/why-do-i-have-lower-back-pain",
  "Menstrual Support": "/symptoms/why-do-i-have-period-cramps",
  "Women's Health": "/symptoms/why-is-my-period-irregular",
  "Women Health": "/symptoms/why-is-my-period-irregular",
  "Urinary Health": "/symptoms/why-do-i-wake-up-to-pee",
  "Eye Health": "/symptoms/why-do-i-have-dark-circles",
  "Fresh Breath": "/symptoms/why-do-i-have-bad-breath",
  "Heart Health": "/symptoms/why-do-i-have-poor-circulation",
  "Liver Health": "/symptoms/why-am-i-so-irritable",
  "Respiratory Health": "/symptoms/why-do-i-have-a-chronic-cough",
  "Sugar Balance": "/symptoms/why-do-i-crave-sweets",
  "Thyroid Support": "/symptoms/why-is-my-metabolism-so-slow",
  "Hydration": "/symptoms/why-am-i-always-thirsty",
  "Heat Relief": "/symptoms/why-am-i-so-sensitive-to-heat",
  "Pain Relief": "/symptoms/why-do-i-have-joint-pain",
  "Wound Healing": "/symptoms/why-is-my-skin-so-dry",
  "Men's Health": "/symptoms/why-is-my-libido-low",
}

const WELLNESS_LINKS: Record<string, { title: string; description: string; slug: string }[]> = {
  "luo-han-guo-luo-han-guo": [
    { title: "Cooling Foods in Chinese Medicine", description: "A full guide to foods that clear heat and restore cooling balance.", slug: "cooling-foods-chinese-medicine" },
    { title: "Kidney Yin Deficiency", description: "Why the body runs hot at night, and the cooling foods that may help restore balance.", slug: "kidney-yin-deficiency" },
  ],
  "senna-leaf-fan-xie-ye": [
    { title: "Chinese Medicine for Constipation", description: "How TCM understands constipation and the foods that may support regularity.", slug: "chinese-medicine-for-constipation" },
  ],
}

const CATEGORY_COLOR: Record<string, string> = {
  "Qi Tonic": "bg-amber-900/10 text-amber-700",
  "Blood Tonic": "bg-red-900/10 text-red-700",
  "Yin Tonic": "bg-sky-900/10 text-sky-700",
  "Yang Tonic": "bg-orange-900/10 text-orange-700",
  "Warming Herb": "bg-orange-900/10 text-orange-700",
  "Cooling Herb": "bg-teal-900/10 text-teal-700",
  "Dampness Draining": "bg-emerald-900/10 text-emerald-700",
  "Qi Regulating": "bg-purple-900/10 text-purple-700",
}

export default async function HerbDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const herb = HERBS[slug]
  if (!herb) return null

  const url = `https://www.myeasterntype.com/herbs/${herb.slug}`

  const relatedHerbs = Object.values(HERBS)
    .filter((h) => h.slug !== herb.slug && (h.category === herb.category || h.bodyTypes.some((bt) => herb.bodyTypes.includes(bt))))
    .slice(0, 6)

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

          {herb.image && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(140,45,42,0.15)] mb-8">
              <Image
                src={herb.image}
                alt={herb.nameEn}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 672px"
                priority
              />
            </div>
          )}

          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${CATEGORY_COLOR[herb.category] || "bg-accent/10 text-accent"}`}>
              {herb.category}
            </span>
            <span className="text-[10px] text-text2/50">{herb.temperature}</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-2 leading-tight tracking-wide">
            {herb.nameEn}
          </h1>
          <p className="text-text2 text-sm mb-2">{herb.nameZh} &middot; {herb.pinyin}</p>
          {herb.botanicalName && (
            <p className="text-text2/50 text-xs italic mb-6">{herb.botanicalName}</p>
          )}

          <div className="bg-[rgba(140,45,42,0.06)] border border-[rgba(140,45,42,0.2)] rounded-xl p-5 mb-10">
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
                  {herb.botanicalName && (
                    <tr className="border-b border-[rgba(140,45,42,0.1)]">
                      <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Botanical Name</td>
                      <td className="px-3 py-3 italic">{herb.botanicalName}</td>
                    </tr>
                  )}
                  <tr className="border-b border-[rgba(140,45,42,0.1)]">
                    <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Category</td>
                    <td className="px-3 py-3">{herb.category}</td>
                  </tr>
                  <tr className="border-b border-[rgba(140,45,42,0.1)]">
                    <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Temperature</td>
                    <td className="px-3 py-3">{herb.temperature}</td>
                  </tr>
                  <tr className="border-b border-[rgba(140,45,42,0.1)]">
                    <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Taste</td>
                    <td className="px-3 py-3">{herb.taste}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Channels Entered</td>
                    <td className="px-3 py-3">{herb.channels}</td>
                  </tr>
                  {herb.classicalSource && (
                    <tr className="border-b border-[rgba(140,45,42,0.1)]">
                      <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Classical Source</td>
                      <td className="px-3 py-3 text-sm">{herb.classicalSource}</td>
                    </tr>
                  )}
                  {herb.safetyRating && (
                    <tr>
                      <td className="px-3 py-3 font-medium text-text bg-[rgba(140,45,42,0.03)]">Safety Rating</td>
                      <td className="px-3 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          herb.safetyRating === "Non-toxic" ? "bg-green-100 text-green-700" :
                          herb.safetyRating === "Use with caution" ? "bg-amber-100 text-amber-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {herb.safetyRating}
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              What This Herb Does
            </h2>
            {herb.therapeuticFocus && herb.therapeuticFocus.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {herb.therapeuticFocus.map((focus, i) => (
                  <span key={i} className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[rgba(140,45,42,0.08)] text-accent border border-[rgba(140,45,42,0.15)]">
                    {focus}
                  </span>
                ))}
              </div>
            )}
            {herb.actionDetails && herb.actionDetails.length > 0 ? (
              <div className="space-y-6">
                {herb.actionDetails.map((detail, i) => (
                  <div key={i} className="border-l-2 border-[rgba(140,45,42,0.2)] pl-4">
                    <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2 font-semibold">
                      {detail.action}
                    </h3>
                    <p className="text-text2 text-sm leading-relaxed">{detail.explanation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3 text-text2">
                {herb.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(140,45,42,0.1)] flex items-center justify-center text-accent text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{action}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {herb.commonlyUsedFor && herb.commonlyUsedFor.length > 0 && (
            <section className="mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
                Commonly Used For
              </h2>
              <div className="space-y-5">
                {herb.commonlyUsedFor.map((item, i) => (
                  <div key={i} className="bg-card-bg border border-[rgba(140,45,42,0.12)] rounded-xl p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-3 font-semibold">
                      {item.condition}
                    </h3>
                    <p className="text-text2 text-sm leading-relaxed mb-3">
                      <strong className="text-text">TCM Interpretation:</strong> {item.tcmInterpretation}
                    </p>
                    <p className="text-text2 text-sm leading-relaxed">
                      <strong className="text-text">Why {herb.nameEn} Helps:</strong> {item.whyItHelps}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Which Body Types Benefit Most
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {herb.bodyTypes.map((typeId) => (
                <Link
                  key={typeId}
                  href={`/types/${typeId}`}
                  className="inline-block px-4 py-2 rounded-lg border border-[rgba(140,45,42,0.2)] bg-card-bg text-sm text-text hover:border-[rgba(140,45,42,0.4)] hover:shadow-[0_2px_12px_rgba(140,45,42,0.06)] transition-all no-underline"
                >
                  {TYPE_NAMES[typeId] || typeId}
                </Link>
              ))}
            </div>
            <p className="text-text2 text-sm">
              Not sure which type you are? <Link href="/quiz" className="text-accent hover:underline">Take the free 5-minute quiz</Link>.
            </p>
          </section>

          {(() => {
            const symptomLinks = (herb.therapeuticFocus || [])
              .map((f) => ({ focus: f, slug: SYMPTOM_LINKS[f] }))
              .filter((s) => s.slug)
              .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
              .slice(0, 6)
            if (symptomLinks.length === 0) return null
            return (
              <section className="mb-10">
                <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
                  Related Symptom Guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {symptomLinks.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.slug}
                      className="flex items-center justify-between px-4 py-3 rounded-lg border border-[rgba(140,45,42,0.12)] bg-card-bg hover:border-[rgba(140,45,42,0.3)] transition-all no-underline"
                    >
                      <span className="text-sm text-text font-medium">{s.focus}</span>
                      <span className="text-accent text-xs">{'>'}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })()}

          {(() => {
            const wellnessLinks = WELLNESS_LINKS[herb.slug]
            if (!wellnessLinks || wellnessLinks.length === 0) return null
            return (
              <section className="mb-10">
                <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
                  Related Wellness Articles
                </h2>
                <div className="space-y-3">
                  {wellnessLinks.map((w) => (
                    <Link
                      key={w.slug}
                      href={`/wellness/${w.slug}`}
                      className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline"
                    >
                      <h3 className="text-text font-medium text-sm">{w.title} {'->'}</h3>
                      <p className="text-text2/70 text-xs mt-1">{w.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })()}

          <section className="mb-10">
            <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
              How to Use
            </h2>
            <p className="text-text2 leading-relaxed mb-4">{herb.howToUse}</p>
            <div className="bg-card-bg border border-[rgba(140,45,42,0.12)] rounded-xl px-4 py-3 mb-4">
              <p className="text-text2 text-sm">
                <strong className="text-text">Dosage:</strong> {herb.dosage}
              </p>
            </div>
            {herb.preparationNotes && (
              <div className="bg-[rgba(140,45,42,0.04)] border border-[rgba(140,45,42,0.1)] rounded-xl px-4 py-3">
                <p className="text-text2 text-sm leading-relaxed">
                  <strong className="text-text">Preparation Notes:</strong> {herb.preparationNotes}
                </p>
              </div>
            )}
          </section>

          {herb.dietaryAdvice && (
            <section className="mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
                Dietary Advice
              </h2>
              <div className="bg-[rgba(140,45,42,0.04)] border border-[rgba(140,45,42,0.12)] rounded-xl p-5">
                <p className="text-text2 text-sm leading-relaxed">{herb.dietaryAdvice}</p>
              </div>
            </section>
          )}

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Food Pairings
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {herb.foodPairings.map((food, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[rgba(140,45,42,0.04)] border border-[rgba(140,45,42,0.1)]">
                  <span className="text-accent text-xs">{'\u2022'}</span>
                  <span className="text-sm text-text2">{food}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-[rgba(180,80,40,0.03)] border border-[rgba(180,80,40,0.12)] rounded-xl p-5">
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
                Cautions
              </h2>
              <ul className="space-y-2.5 text-text2">
                {herb.cautions.map((caution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-600/60 mt-0.5 flex-shrink-0">{'\u26A0'}</span>
                    <span className="text-sm leading-relaxed">{caution}</span>
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
                <details key={i} className="group border border-[rgba(140,45,42,0.12)] rounded-xl bg-card-bg">
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

          <section className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
              Related Herbs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.values(HERBS)
                .filter((h) => h.slug !== herb.slug && h.category === herb.category)
                .slice(0, 6)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/herbs/${related.slug}`}
                    className="block border border-[rgba(140,45,42,0.12)] rounded-lg p-3 bg-card-bg hover:border-[rgba(140,45,42,0.3)] transition-all no-underline"
                  >
                    <span className="text-sm text-text font-medium block">{related.nameEn}</span>
                    <span className="text-[10px] text-text2/50">{related.nameZhTrad || related.nameZh}</span>
                  </Link>
                ))}
            </div>
            <div className="mt-4">
              <Link href="/herbs" className="text-sm text-accent hover:underline">
                Browse all herbs {'>'}
              </Link>
            </div>
          </section>

          <SymptomCta />

          <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
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
