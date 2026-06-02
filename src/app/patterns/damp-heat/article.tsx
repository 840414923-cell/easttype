"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function DampHeatArticle() {
  const slug = "damp-heat"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Damp Heat</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Damp Heat Pattern: When Your Body Becomes a Sticky Sauna
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Some people feel like they&apos;re always sweating through their clothes, even when the room is comfortable. Their skin breaks out no matter what they try. They get a burning sensation in their stomach after meals, and their mouth tastes bitter or sour more often than not. It&apos;s not just hot. It&apos;s hot and sticky at the same time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, this combination of heavy dampness and intense heat is called Damp Heat. Dampness brings that heavy, sticky, oily feeling. Heat brings redness, inflammation, and irritability. Together they create a pattern that can feel like your body is a greenhouse in the middle of summer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Damp Heat Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You break out frequently, especially on your face, chest, or back",
            "You feel hot and sticky, even when others seem comfortable",
            "You get acid reflux or a burning sensation after eating",
            "Your skin tends to be oily or prone to rashes",
            "You feel more irritable in humid or muggy weather",
            "Your mouth often tastes bitter or sour",
            "You feel heavy and sluggish, especially in warm weather",
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
          Imagine a greenhouse in the peak of summer. The air is hot and saturated with moisture. Everything inside grows fast, maybe too fast. Fungi thrive, mold appears overnight, and the air feels thick enough to touch. It&apos;s not just the heat that&apos;s the problem. It&apos;s the combination of heat and humidity together.
        </p>
        <p className="text-text2 leading-relaxed">
          That&apos;s what Damp Heat feels like inside your body. The heat makes things red, inflamed, and irritated. The dampness makes everything sticky, heavy, and slow to clear. Your skin breaks out because the dampness creates a breeding ground. Your digestion burns because the heat irritates your stomach lining. Things grow and fester when they should be clearing out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Damp Heat (湿热, pronounced &quot;shee-ruh&quot;). It&apos;s what happens when two pathogenic factors combine. Dampness is heavy, sticky, and tends to linger. Heat is active, drying, and moves upward. When they join forces, you get a pattern that is both sluggish and inflamed at the same time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Damp Heat is different from Internal Heat alone. Internal Heat is more like a dry furnace. Damp Heat is more like a steam room. The dampness makes the heat harder to clear, and the heat makes the dampness more active. This pattern can be associated with humid climates, a diet heavy in greasy and spicy foods, or chronic digestive issues that allow dampness to accumulate and then heat up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Foods That May Help (and Harm)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Flow-Supporting Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Mung bean soup",
                "Cucumber",
                "Bitter melon",
                "Celery",
                "Coix seed (Job&apos;s tears)",
                "Winter melon",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Stagnation-Worsening Foods
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Alcohol",
                "Spicy food",
                "Fried food",
                "Dairy (especially rich cheeses)",
                "Sweets and sugary drinks",
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
          Eat lighter meals when the humidity kicks in. Heavy, greasy, or deeply fried foods add more dampness to a system that&apos;s already struggling to clear it. Think simple, cooling, and easy to digest. A bowl of mung bean soup or a plate of steamed vegetables can do more for you than a rich curry on a muggy day.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid overeating. When you eat past the point of comfort, your digestive system generates extra heat and dampness trying to process the surplus. Smaller, more frequent meals may be easier on your system than three large ones. Give your body time to finish one job before handing it another.
        </p>
        <p className="text-text2 leading-relaxed">
          Drink cooling teas between meals. Chrysanthemum tea, mung bean tea, and lightly brewed green tea are traditional choices for clearing heat and supporting the drainage of dampness. They&apos;re gentle enough for daily use and can be associated with helping your body reset when the weather or your diet has been working against you.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. If you have persistent skin inflammation, severe acid reflux, or symptoms that worsen rapidly, please consult a licensed healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Damp Heat pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-keep-breaking-out" className="text-sm text-accent no-underline hover:underline">
            Why Do I Keep Breaking Out?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-acid-reflux" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Acid Reflux?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-thirsty" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Thirsty?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-hot-flashes" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Hot Flashes?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            Internal Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
