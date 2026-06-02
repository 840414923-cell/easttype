"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function ColdSensitivityArticle() {
  const slug = "cold-sensitivity"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Cold Sensitivity</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Cold Sensitivity Pattern: Why Your Inner Furnace Is Underpowered
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You're wearing a jacket indoors. Your hands are ice cubes. You sleep with socks on even in summer. Everyone else says the room is fine, and you're starting to wonder if something is wrong with you.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here's the thing: your blood work is probably fine. Your thyroid is normal. Your circulation tests come back clear. But you're still cold. All the time. That gap between "normal test results" and "I'm freezing" is exactly where Eastern body wisdom has something useful to say.
        </p>
        <p className="text-text2 leading-relaxed">
          In Traditional Chinese Medicine, this pattern of chronic cold sensitivity is called Yang Deficiency. In everyday language, we call it the Cold Sensitivity pattern. Your body has a heating system, but it's running on low power.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Cold Sensitivity Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "Your hands and feet are often cold, especially in winter",
            "You prefer hot food and drinks over cold ones",
            "You feel worse in cold or damp weather",
            "You urinate frequently, especially at night",
            "Your lower back or knees feel sore and worse with cold",
            "You have slow digestion and feel heavy after meals",
            "You have a personal vendetta against whoever invented air conditioning",
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
          Your body is a house. Yang is the heating system. When the furnace is underpowered, it keeps the living room warm but the bedrooms stay freezing. No amount of blankets fixes a broken furnace. You need to turn up the heat from the inside.
        </p>
        <p className="text-text2 leading-relaxed">
          This is why putting on more layers or turning up the thermostat helps temporarily but never solves the problem. The cold is coming from inside, not outside. You need to stoke your internal furnace, and food is the fuel.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Yang Deficiency (阳虚, pronounced "yang-shoo"). Yang is your body's warming, activating force — your internal furnace. When Yang is low, your body prioritizes keeping your core organs warm and cuts circulation to your extremities. That's why your hands and feet get cold first.
        </p>
        <p className="text-text2 leading-relaxed">
          Yang Deficiency can develop from prolonged exposure to cold environments, eating too many cold and raw foods over time, recovering from illness that depleted your reserves, or a constitutional tendency you were born with. Like Qi, Yang can be supported and strengthened through warming foods and lifestyle habits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Warming Foods That May Help (and Cooling Foods to Limit)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Warming Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Ginger",
                "Cinnamon",
                "Lamb",
                "Beef",
                "Onion and leek",
                "Walnuts",
                "Black pepper",
                "Roasted nuts",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Cooling Foods to Limit
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Ice water and cold drinks",
                "Raw vegetables",
                "Watermelon",
                "Excessive fruit",
                "Seaweed",
                "Excessive green tea",
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
          Start adding warming ingredients to your meals. A slice of fresh ginger in hot water is the simplest starting point. Add cinnamon to your oatmeal. Use black pepper liberally. These small additions stack up over time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid cold and raw foods as much as possible. If you love salads, try lightly stir-frying or blanching your vegetables instead. The difference in how your body processes warm food versus cold food is significant when you're already running low on Yang.
        </p>
        <p className="text-text2 leading-relaxed">
          Warm baths and foot soaks are not just pampering in TCM — they're practical tools. Soaking your feet in warm water with a handful of ginger slices for 15 minutes before bed can help stoke your Yang energy overnight.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. Cold extremities can also be caused by Raynaud's, thyroid issues, or circulatory problems. If your fingers turn white or blue, or if coldness is sudden and one-sided, consult a licensed healthcare provider immediately.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Cold Sensitivity pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Cold?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3AM?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-my-hands-and-feet-go-numb" className="text-sm text-accent no-underline hover:underline">
            Why Do My Hands and Feet Go Numb?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            Low Vitality Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
