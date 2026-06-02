"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function HighSensitivityArticle() {
  const slug = "high-sensitivity"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">High Sensitivity</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        High Sensitivity Pattern: When Your Body Reads the Room Too Well
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Some people walk into a room and immediately sense the mood. They react to strong smells before anyone else notices them. Their skin flushes or itches from things that seem perfectly harmless to others. They catch every cold that goes around and feel it more intensely than most. It&apos;s not that they&apos;re weak. It&apos;s that their body picks up signals others filter out.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, this heightened responsiveness is called the Sensitive constitution. It&apos;s not a flaw or a disorder. It&apos;s a different operating system, one that processes input with extraordinary intensity. The world feels louder, brighter, and more intense, and the body responds accordingly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the High Sensitivity Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You react strongly to smells, sounds, or textures that others barely notice",
            "You get sick more often and take longer to recover",
            "Your skin flushes, itches, or reacts easily to products or fabrics",
            "You absorb other people&apos;s moods and feel drained after social events",
            "You have allergies or sensitivities to multiple foods or substances",
            "You feel overwhelmed in crowded or chaotic environments",
            "You need more downtime than others to feel restored",
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
          Imagine a radio that picks up every station at once, and the volume is turned up higher than normal. You hear music, news, static, and conversations all overlapping. Some of it is useful. Some of it is beautiful. But a lot of it is just noise, and it can be exhausting to filter through.
        </p>
        <p className="text-text2 leading-relaxed">
          That&apos;s what having a Sensitive constitution feels like. Your body picks up signals that others naturally tune out. Strong scents, emotional undercurrents, subtle changes in the environment. This can be a gift. You notice things others miss. But it can also be overwhelming when there&apos;s too much input and not enough time to process it all.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this the Special Constitution (特禀质, pronounced &quot;teh-beeng-jer&quot;). It&apos;s one of the nine constitutional types recognized in TCM body constitution theory. People with this type have a protective barrier that is more permeable than average. Things get in more easily, and the body reacts more strongly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This pattern overlaps with what modern psychology calls Highly Sensitive People (HSP), but TCM includes physical symptoms alongside emotional ones. The allergies, the skin reactions, the frequent colds. These aren&apos;t separate issues. They&apos;re all expressions of the same underlying tendency toward heightened responsiveness. It&apos;s not a weakness. It&apos;s a different way of being in the world, one that requires different care.
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
                "Congee (rice porridge)",
                "Steamed vegetables",
                "Mild soups",
                "Warm cooked grains",
                "Gentle herbal teas",
                "Simple, easy-to-digest meals",
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
                "Known trigger foods (varies by person)",
                "Dairy (if sensitive)",
                "Excess sugar",
                "Very spicy foods",
                "Highly processed foods",
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
          Create predictable routines. Your nervous system does better when it knows what to expect. Regular meal times, consistent sleep schedules, and familiar rhythms can help reduce the background noise your body has to process. Structure isn&apos;t a constraint. For sensitive people, it can be a form of self-protection.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Drink warm water throughout the day. Cold drinks can be a shock to a sensitive system. Warm water is gentle and can be associated with helping your body maintain equilibrium. It&apos;s a small habit, but for people who react strongly to temperature changes, it can make a noticeable difference in how they feel.
        </p>
        <p className="text-text2 leading-relaxed">
          Give yourself recovery time after social events. If you absorb other people&apos;s emotions or feel drained by crowds, that&apos;s not a flaw. It&apos;s how your system works. Building in quiet time after intense interactions can help you reset. Setting boundaries around your energy isn&apos;t selfish. It&apos;s necessary maintenance for a body that processes the world more deeply than most.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. If you have severe allergies, frequent infections, or symptoms that significantly impact your daily life, please consult a licensed healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the High Sensitivity pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-get-sick-so-often" className="text-sm text-accent no-underline hover:underline">
            Why Do I Get Sick So Often?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-overthink-everything" className="text-sm text-accent no-underline hover:underline">
            Why Do I Overthink Everything?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">
            Stuck Energy Pattern →
          </Link>
          <span className="text-text2/40">·</span>
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
          <Link href="/types/sensitive" className="text-sm text-accent no-underline hover:underline">
            Sensitive Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
