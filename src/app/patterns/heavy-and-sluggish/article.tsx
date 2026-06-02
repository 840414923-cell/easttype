"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function HeavySluggishArticle() {
  const slug = "heavy-and-sluggish"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Heavy & Sluggish</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Heavy & Sluggish Pattern: Why Your Body Holds Moisture Like a Sponge
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You feel heavy. Not sad-heavy — physically heavy. Like your body is made of wet clay. You're bloated after every meal, your brain is foggy, and no amount of sleep clears the sluggishness. Exercise doesn't help. Eating less doesn't help. Something about how your body processes what you consume is fundamentally off.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Heavy & Sluggish Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You feel bloated after most meals",
            "Your body feels heavy, like wading through water",
            "You're always sleepy, especially after eating",
            "You gain weight easily and it's hard to lose",
            "Your thinking feels foggy and unclear",
            "You prefer lying down over standing",
            "You've mentally renamed your favorite chair \"my permanent address\"",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Think of It Like This
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Your body is a sink. When the drain works, water flows through. When it's clogged, water pools, gets stagnant, and everything sitting in it gets soggy and heavy. The Heavy & Sluggish pattern is a clogged drain. The moisture is there, but your body can't move it out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Phlegm Damp (痰湿). Not literal phlegm. It's a way of describing moisture that accumulates because your body's "drainage system" — the Spleen and digestion — isn't processing efficiently. When the Spleen is sluggish, fluids don't get transformed and transported properly. They sit. They pool. They make everything feel heavy and slow.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Damp-Draining Foods That May Help (and Damp-Creating Foods to Limit)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Damp-Draining Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Adzuki beans",
                "Coix seed (Job's tears)",
                "Winter melon",
                "Celery",
                "Green tea (moderate)",
                "Ginger tea",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Damp-Creating Foods to Limit
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Dairy",
                "Cold drinks",
                "Sweets",
                "Fried food",
                "Excessive fruit",
                "Beer",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Simple Changes That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Swap cold drinks for warm ones. Cold fluids slow down your digestive system the same way cold water makes oil congeal in a pan. Warm water or ginger tea after meals may help your body process what you just ate.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cook vegetables instead of eating them raw. Raw food takes more digestive energy to break down. If your Spleen is already sluggish, raw salads may be adding to the burden. Lightly stir-fried or steamed vegetables are generally easier on the system.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Reduce dairy and sweets. Both tend to create dampness in the body according to TCM. You don't have to eliminate them entirely — just notice how you feel after cutting back for a week or two.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Walk after meals. Even 10 minutes of slow walking after eating may help your body move things along instead of letting them sit and stagnate.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid sleeping right after eating. Lying down with a full stomach is like tipping over that clogged sink — nothing drains properly. Wait at least an hour if you can.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. If your bloating is severe, persistent, or accompanied by pain, unexplained weight changes, or digestive issues that worsen over time, please consult a licensed healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Heavy & Sluggish pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-brain-fog" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Brain Fog?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">
            Why Do I Keep Gaining Weight?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
