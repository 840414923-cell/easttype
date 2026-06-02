
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function StuckEnergyArticle() {
  const slug = "stuck-energy"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Stuck Energy</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Stuck Energy Pattern: When Your Body Holds Its Breath
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Some people sigh all day and don't notice. Their chest feels tight for no clear reason. One moment they're fine, the next they're irritated or close to tears, and they can't explain why. It's not that anything terrible happened. It's more like something inside them can't move.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, this cluster of symptoms — emotional tightness, chest pressure, frequent sighing, and unpredictable moods — forms a recognizable pattern. Chinese medicine calls it Qi Stagnation. In everyday language, we call it the Stuck Energy pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Stuck Energy Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You sigh frequently, sometimes without realizing",
            "Your chest or ribs feel tight or restricted",
            "Your mood can shift suddenly and without warning",
            "You overthink things and have trouble letting go",
            "Your emotions feel intense but hard to express",
            "You feel better after a good cry, workout, or honest conversation",
            "You've written and deleted the same message more times than you'd like to admit",
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
          Imagine a river. Normally, water flows smoothly downstream. But when something blocks the river — a fallen tree, a buildup of debris — the water pools behind the blockage. Pressure builds. The river might overflow in one spot and run dry in another.
        </p>
        <p className="text-text2 leading-relaxed">
          That's what Qi Stagnation feels like inside your body. Your energy is there, but it can't move freely. It pools in your chest (tightness), backs up as emotional pressure (mood swings), and the areas downstream feel depleted. The fix isn't to add more water. It's to clear the blockage so things can flow again.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Qi Stagnation (气郁, pronounced "chee-yoo"). In TCM theory, the Liver is responsible for keeping energy and emotions flowing smoothly. When the Liver's function is disrupted — usually by chronic stress, emotional suppression, or irregular lifestyle — the flow gets stuck.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Stagnation is one of the most common patterns in modern life. Desk jobs, screen time, emotional bottling, and lack of movement all contribute. The pattern tends to worsen with stress and improve with emotional release, physical movement, and creative expression.
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
                "Green tea (moderate)",
                "Tangerine peel (chenpi)",
                "Rose tea",
                "Mint tea",
                "Kumquat",
                "Chamomile tea",
                "Whole grains",
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
                "Excessive alcohol",
                "Heavy greasy meals",
                "Too much coffee",
                "Spicy food in excess",
                "Cold raw foods in excess",
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
          Move your body. This is the single most effective thing you can do for Qi Stagnation. Walking, dancing, stretching, swimming — anything that gets your body moving helps get stuck energy flowing again. Even 15 minutes makes a difference.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Express yourself. TCM views emotional suppression as a major cause of Qi Stagnation. Journaling, talking to a friend, creative hobbies, singing, or even just letting yourself sigh loudly can help. The goal isn't to fix your emotions. It's to let them move through you instead of getting stuck.
        </p>
        <p className="text-text2 leading-relaxed">
          Drink warm teas between meals. Rose tea, mint tea, and chrysanthemum tea are all traditional choices for supporting smooth energy flow. They're gentle, pleasant, and easy to add to your routine.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. If your mood changes are severe, sudden, or affecting your daily functioning, please consult a licensed healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Stuck Energy pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3AM?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-sm text-accent no-underline hover:underline">
            Why Are My Moods All Over the Place?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-overthink-everything" className="text-sm text-accent no-underline hover:underline">
            Why Do I Overthink Everything?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-so-irritable" className="text-sm text-accent no-underline hover:underline">
            Why Am I So Irritable?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-headaches" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Headaches?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
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
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
