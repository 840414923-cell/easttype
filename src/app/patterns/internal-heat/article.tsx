"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function InternalHeatArticle() {
  const slug = "internal-heat"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Internal Heat</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Internal Heat Pattern: Why Your Body's Cooling System Is Undercharged
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You wake up hot. Your pillow is damp. Your mouth is dry even though you drank water before bed. The room is a normal temperature, but your body feels like it's running a fever from the inside. Not menopause, not infection — just unexplained heat that shows up when the sun goes down.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Internal Heat Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You wake up sweaty even in cool rooms",
            "Your mouth and throat feel dry at night",
            "You feel hot when others are comfortable",
            "Your cheeks flush easily, especially in the evening",
            "You have trouble falling asleep because your mind is too active",
            "You prefer cold drinks and cool environments",
            "You've considered installing a personal fan at your desk... and your bed",
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
          Your body has an internal air conditioner. Yin is the coolant. When Yin is low, the AC runs but can't cool properly. The engine heats up, especially at night when external distractions fade and you notice the heat more. No amount of turning down the thermostat fixes a coolant leak.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Yin Deficiency (阴虚, pronounced "yin-shoo"). Yin is your body's cooling, moistening force. Yang is the heating, activating force. They need each other. When Yin drops, Yang has nothing to balance it, and heat builds up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Cooling Foods That May Help (and Heating Foods to Limit)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Cooling Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Pear",
                "Lily bulb",
                "Lotus seed",
                "Black sesame",
                "Tofu",
                "Mung bean soup",
                "Tremella mushroom",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Heating Foods to Limit
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Spicy food",
                "Alcohol",
                "Lamb",
                "Deep-fried food",
                "Excessive coffee",
                "Garlic in large amounts",
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
          Eat Yin-nourishing foods regularly. A bowl of mung bean soup, pear slices with honey, or a simple tofu dish — these are the kinds of everyday choices that may gently support your body's cooling system over time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid adding fuel to the fire. Spicy, fried, and caffeine-heavy foods and drinks may feel satisfying in the moment but tend to intensify internal heat. Cutting back doesn't mean cutting out — just being more intentional.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cool down before bed — but not with exercise. A short walk, light stretching, or a few minutes of slow breathing may help signal to your body that it's time to wind down. Vigorous workouts late at night tend to do the opposite.
        </p>
        <p className="text-text2 leading-relaxed">
          Go to bed before 11 PM. In TCM, the hours before midnight are considered especially important for replenishing Yin. Staying up late night after night may be one of the fastest ways to deplete it further.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. Night sweats and feeling hot at night can also be caused by thyroid conditions, infections, hormonal changes, or other medical issues. If your night sweats are severe, persistent, or accompanied by unexplained weight loss or fever, consult a licensed healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Internal Heat pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3AM?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-cant-i-fall-asleep" className="text-sm text-accent no-underline hover:underline">
            Why Can't I Fall Asleep?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
