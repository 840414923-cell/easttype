import Link from "next/link"
import { FOOD_COMBO_PAGES } from "@/lib/food-combo-data"
import { SYMPTOMS } from "@/lib/symptoms-data"
import type { FaqItem } from "@/lib/wellness-faqs"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"

export default function FoodComboArticle({ slug }: { slug: string }) {
  const page = FOOD_COMBO_PAGES[slug]
  if (!page) return null

  const relatedSymptom = SYMPTOMS[page.relatedSymptomSlug]

  const faqsAsItems: FaqItem[] = page.faqs.map((f) => ({
    q: { en: f.q, "zh-TW": "", ja: "" },
    a: { en: f.a, "zh-TW": "", ja: "" },
  }))

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-sm text-text2 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-accent transition-colors">EastType</Link>
        <span className="text-text2/40">›</span>
        <Link href="/foods-for" className="hover:text-accent transition-colors">Food Guides</Link>
        <span className="text-text2/40">›</span>
        <span className="text-text2">{page.h1.length > 40 ? page.h1.slice(0, 40) + "..." : page.h1}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 leading-tight">
        {page.h1}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {page.readTime} read · Eastern wellness food guide
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed text-[0.95rem]">
          {page.intro}
        </p>
      </section>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          {page.quickAnswer}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text font-medium">Food</th>
                <th className="text-left py-2 pr-4 text-text font-medium">Why It May Help</th>
                <th className="text-left py-2 text-text font-medium">Best For</th>
              </tr>
            </thead>
            <tbody>
              {page.foods.map((food, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text font-medium whitespace-nowrap">
                    {food.emoji} {food.name}
                  </td>
                  <td className="py-3 pr-4 text-text2 leading-relaxed">
                    {food.whyItHelps.length > 100
                      ? food.whyItHelps.slice(0, 100) + "..."
                      : food.whyItHelps}
                  </td>
                  <td className="py-3 text-text2 whitespace-nowrap">{food.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {page.foods.map((food, i) => (
          <div key={i} className="mb-8 pl-4 border-l-2 border-accent/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
              {food.emoji} {food.name}
            </h3>
            <p className="text-text2 leading-relaxed mb-3 text-[0.95rem]">
              {food.whyItHelps}
            </p>
            <p className="text-sm text-text2/80 leading-relaxed">
              <span className="text-accent font-medium">How to use: </span>
              {food.howToUse}
            </p>
            <p className="text-sm text-text2/80 leading-relaxed mt-1">
              <span className="text-accent font-medium">Best for: </span>
              {food.bestFor}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Make It Worse
        </h2>
        <div className="space-y-4">
          {page.avoidFoods.map((food, i) => (
            <div key={i} className="bg-red-50/30 border border-red-200/30 rounded-xl p-4">
              <p className="text-text font-medium mb-1 text-[0.95rem]">
                <span className="text-red-500/70 mr-2">✕</span>{food.name}
              </p>
              <p className="text-text2 text-sm leading-relaxed pl-6">{food.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          A Simple Day of Eating
        </h2>
        <div className="bg-cream/30 border border-border rounded-xl p-6 space-y-4">
          {page.dailyGuide.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-accent text-sm font-medium pt-0.5">
                {item.time}
              </div>
              <div className="text-text2 text-[0.95rem] leading-relaxed">
                {item.suggestion}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-3">
          {page.bonusTip.title}
        </h2>
        <p className="text-text2 leading-relaxed text-[0.95rem]">
          {page.bonusTip.content}
        </p>
      </section>

      <FaqSection faqs={faqsAsItems} />

      {relatedSymptom && (
        <section className="mt-10 mb-4">
          <div className="bg-cream/30 border border-border rounded-xl p-5">
            <p className="text-text2 text-sm leading-relaxed mb-3">
              Want to understand why this happens? Read our full guide on this symptom:
            </p>
            <Link
              href={`/symptoms/${relatedSymptom.slug}`}
              className="text-accent hover:underline text-[0.95rem] font-medium"
            >
              {relatedSymptom.title.en} →
            </Link>
          </div>
        </section>
      )}

      <SymptomCta />
    </main>
  )
}
