import type { Metadata } from "next"
import Link from "next/link"
import { FOOD_COMBO_PAGES, FOOD_COMBO_SLUGS } from "@/lib/food-combo-data"
import { SYMPTOMS } from "@/lib/symptoms-data"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const SITE = "https://www.myeasterntype.com"

export const metadata: Metadata = {
  title: "Food Guides: What to Eat for Common Symptoms | EastType",
  description:
    "Practical Chinese medicine food guides for fatigue, insomnia, bloating, anxiety, brain fog, and more. Learn which foods may help your body type and which to avoid.",
  alternates: { canonical: `${SITE}/foods-for` },
  openGraph: {
    title: "Food Guides: What to Eat for Common Symptoms | EastType",
    description:
      "Practical Chinese medicine food guides for fatigue, insomnia, bloating, anxiety, brain fog, and more.",
    url: `${SITE}/foods-for`,
    type: "website",
    siteName: "EastType",
  },
}

const jsonLd = buildBreadcrumbJsonLd([
  { name: "EastType", url: SITE },
  { name: "Food Guides", url: `${SITE}/foods-for` },
])

export default function FoodsForHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Food Guides</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4">
          What to Eat for Common Symptoms
        </h1>
        <p className="text-text2 leading-relaxed mb-12 text-[0.95rem]">
          Each guide covers specific foods that may help, which foods to avoid, a simple daily eating plan, and answers to common questions. Based on 3,000 years of Eastern body wisdom, adapted for modern kitchens.
        </p>

        <div className="grid gap-5">
          {FOOD_COMBO_SLUGS.map((slug) => {
            const page = FOOD_COMBO_PAGES[slug]
            const symptom = SYMPTOMS[page.relatedSymptomSlug]
            const tag = symptom?.tag ?? "Wellness"
            const excerpt = page.intro.split(".")[0] + "."

            return (
              <Link
                key={slug}
                href={`/foods-for/${slug}`}
                className="block bg-cream/20 border border-border rounded-xl p-6 hover:border-accent/40 hover:bg-cream/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                  <span className="text-xs text-text2">{page.readTime} read</span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2 leading-snug">
                  {page.h1}
                </h2>
                <p className="text-text2 text-sm leading-relaxed">
                  {excerpt}
                </p>
              </Link>
            )
          })}
        </div>

        <section className="mt-16 mb-4 border border-[rgba(200,16,46,0.2)] rounded-2xl p-8 text-center bg-[rgba(200,16,46,0.04)]">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text mb-3 tracking-wide">
            Not Sure Which Foods Are Right for You?
          </h2>
          <p className="text-sm text-text2 leading-relaxed max-w-md mx-auto mb-6">
            Your body type determines which foods help and which harm. Take our free 5-minute assessment to find out.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-gradient-to-r from-accent to-[#D4AF6A] text-bg px-7 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Take the Free Assessment <span className="ml-2">→</span>
          </Link>
        </section>
      </main>
    </>
  )
}
