"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function LowVitalityArticle() {
  const slug = "low-vitality"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Low Vitality</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Low Vitality Pattern: Why Your Battery Never Reaches Full
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Some people wake up tired. They sleep 8 hours and still feel like they didn't sleep at all. They drag themselves through the morning, hit a wall around 2 PM, and by evening they're running on fumes. It's not laziness. It's not depression. Something deeper is going on.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, this cluster of symptoms — chronic fatigue, low energy, afternoon crashes, and low motivation — forms a pattern. It's not random. These symptoms show up together so often that Chinese medicine gave them a name: Qi Deficiency. In everyday language, we call it the Low Vitality pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Low Vitality Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You're tired even after a full night's sleep",
            "You hit a wall every afternoon around 2 to 3 PM",
            "Your motivation is low even for things you enjoy",
            "Your voice is soft and you talk less than you think",
            "You catch colds more easily than others around you",
            "You sweat easily, even with light activity",
            "You've drafted your resignation in your head by 10 AM every Monday",
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
          Imagine your body is a phone. Western medicine checks if the screen is broken. Chinese medicine checks the battery. The Low Vitality pattern means your battery is at 5%. The phone still works, but everything is slow, the screen dims, and it shuts down unexpectedly.
        </p>
        <p className="text-text2 leading-relaxed">
          No amount of closing apps fixes a small battery. You need to charge it properly, with the right charger, for long enough. In TCM terms, that means eating the right foods, getting enough rest, and avoiding things that drain your Qi further.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Qi Deficiency (气虚, pronounced "chee-shoo"). Qi is your body's vital energy — the fuel that powers everything from digestion to clear thinking. When Qi is low, nothing breaks exactly, but everything costs more energy than it should.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Deficiency often develops slowly. Months of stress, recovering from an illness that your body never fully bounced back from, eating too many cold and raw foods, or simply a constitutional tendency you were born with. The good news is that Qi can be rebuilt over time with the right approach.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Foods That May Help (and Harm)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Qi-Supporting Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Congee (rice porridge)",
                "Jujube dates (red dates)",
                "Sweet potato",
                "Ginger tea",
                "Goji berries",
                "Chicken broth",
                "Chinese yam",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Qi-Draining Foods
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Ice water and cold drinks",
                "Raw salads",
                "Excessive caffeine",
                "Cold smoothies",
                "Bitter melon",
                "Excessive raw food",
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
          Start your day with congee instead of dry cereal. Congee is the number one recovery food in Chinese households because it takes almost zero digestive effort and delivers steady nourishment. Add warm ginger tea with a few jujube dates on the side.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cut back on caffeine. TCM views coffee as borrowing energy from tomorrow to spend today. It doesn't create new Qi. Over time, the debt catches up. Try replacing some cups with warm ginger tea or ginseng tea.
        </p>
        <p className="text-text2 leading-relaxed">
          Move gently. Heavy workouts can drain Qi further if you're already depleted. Walking, gentle yoga, tai chi, or 15 minutes of slow stretching. The goal is circulation, not exhaustion.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. If your fatigue is severe, sudden, or accompanied by weight loss, fever, or night pain, please consult a licensed healthcare provider immediately.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Low Vitality pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-get-sick-so-often" className="text-sm text-accent no-underline hover:underline">
            Why Do I Get Sick So Often?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-unmotivated" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Unmotivated?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-dizzy" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Dizzy?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">
            Cold Sensitivity Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
