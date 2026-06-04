
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function NaturalBalanceArticle() {
  const slug = "natural-balance"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Natural Balance</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Natural Balance Pattern: The Body That Just Works
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You know those people who seem to glide through life without any health drama? They sleep through the night, wake up refreshed, eat whatever sounds good without consequences, and barely remember the last time they were sick. You might think they're just lucky. In Traditional Chinese Medicine, this isn't luck. It's a pattern with a name.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Natural Balance pattern is what Chinese medicine calls the baseline. Every other pattern out there, the fatigue, the cold hands, the bloating, the mood swings, they're all deviations from this starting point. If your body is a well-tuned instrument, this is what being perfectly in tune sounds like. Most people aren't, and that's okay. But understanding what balance actually looks like can help you figure out which direction you've drifted.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Natural Balance Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          People with this pattern tend to check most of these boxes without even trying:
        </p>
        <ul className="space-y-2">
          {[
            "You sleep well and wake up feeling rested most days",
            "Your appetite is steady and your digestion is uneventful (in a good way)",
            "You adapt to seasonal changes without getting sick every time the weather shifts",
            "Your mood is generally stable, not because you suppress things but because things genuinely roll off you",
            "You rarely get sick, and when you do, you bounce back quickly",
            "Your energy holds steady through the day without relying on caffeine or sugar",
            "Your complexion looks healthy without much effort",
            "You handle stress without it immediately showing up in your body",
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
          You know that friend whose car never breaks down? They don't baby it. They just do the regular oil changes, rotate the tires occasionally, and don't ignore weird sounds. The car runs great not because it's fancy, but because it gets consistent, boring maintenance.
        </p>
        <p className="text-text2 leading-relaxed">
          The Natural Balance pattern works the same way. Your body isn't superhuman. It just hasn't been neglected long enough to develop problems. The catch is that most balanced types eventually stop paying attention because nothing hurts. And that's exactly when things start to slip.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this the Balanced Constitution, or 平和质 (píng hé zhì). It's one of the nine constitutional types in TCM, and it's the reference point for all the others. When a Chinese medicine practitioner talks about Qi Deficiency or Damp Heat, they're describing a departure from this baseline.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here's the interesting part: only about 10% of people fall into this category. The other 90% have some degree of constitutional tendency that pushes them toward one pattern or another. That doesn't mean 90% of people are sick. It means most bodies have a preference, a direction they lean when they're under stress. Balanced types don't lean in any particular direction. Their system just adjusts.
        </p>
        <p className="text-text2 leading-relaxed">
          In TCM theory, this balance is associated with harmonious Qi and blood flow, proper functioning of all organ systems, and an even distribution of yin and yang. Nothing is too hot, too cold, too dry, or too damp. Everything sits in the middle, and the body self-corrects without you having to intervene.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Foods That Support Balance (and What to Watch)
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You don't need a restrictive diet. The goal here is maintenance, not correction. Think of it as keeping the car tuned rather than rebuilding the engine.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Balance-Supporting Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Seasonal vegetables and fruits",
                "Whole grains (rice, millet, oats)",
                "Lean proteins (chicken, fish, tofu)",
                "Warm soups and broths",
                "Mild teas like chrysanthemum or jasmine",
                "Sweet potato and root vegetables",
                "Moderate amounts of nuts and seeds",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Balance-Disrupting Foods
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Excessive sugar and sweets",
                "Heavy fast food and deep-fried items",
                "Too much cold or raw food in winter",
                "Over-reliance on caffeine",
                "Late-night heavy meals",
                "Excessive alcohol",
                "Highly processed snacks",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Simple Habits That Protect Your Balance
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The biggest risk for naturally balanced people is complacency. When nothing hurts, it's tempting to stop taking care of yourself. But balance isn't permanent. It's something you maintain, like a garden that needs regular tending even when the weeds haven't taken over yet.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          <span className="text-accent font-medium">Eat with the seasons.</span> Your body is already good at adapting, so work with it. In summer, lighter meals with more vegetables and fruit. In winter, warmer, heartier foods like soups and stews. Don't eat the same way in December that you do in July.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          <span className="text-accent font-medium">Keep moving.</span> You don't need an intense workout regimen. Walking, swimming, yoga, stretching, whatever you enjoy enough to do regularly. The point is circulation. Balanced constitutions can handle more variety in exercise than other types, so mix it up.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          <span className="text-accent font-medium">Protect your sleep.</span> This is the non-negotiable. Even balanced types can develop problems when sleep goes off the rails for extended periods. Aim for consistent sleep and wake times, not just enough hours. Your body loves rhythm.
        </p>
        <p className="text-text2 leading-relaxed">
          <span className="text-accent font-medium">Don't fix what isn't broken.</span> This is the one pattern where doing less is genuinely the right move. You don't need supplements, detoxes, or extreme diets. If you feel good, eat normally, move regularly, and sleep well, you're already doing it right. Save the interventions for when something actually feels off.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          When Balance Starts Slipping
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Balance doesn't usually crash overnight. It erodes. Small things start shifting. You notice your sleep isn't quite as deep. Your digestion feels a little off after meals you used to handle fine. You're more irritable than usual, or more tired in the afternoons than you remember being.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          These early warning signs can be associated with the beginning of a constitutional shift. In TCM terms, your body is starting to lean in a particular direction. Maybe toward Qi deficiency if you've been overworking, or toward Qi stagnation if you've been under a lot of emotional pressure. The good news is that catching it early makes it much easier to correct.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Pay attention to patterns that last more than a couple of weeks. One bad night of sleep is nothing. Two weeks of mediocre sleep is your body asking for a change. The people who stay balanced long-term are the ones who notice these small shifts and adjust before they become real problems.
        </p>
        <p className="text-text2 leading-relaxed">
          If you're noticing persistent changes in your energy, digestion, sleep, or mood, it might be worth exploring whether your body has started drifting toward one of the other patterns. That's not a bad thing. It's just information. And information is what helps you course-correct before things get uncomfortable.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          A Quick Note
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical advice. If you're experiencing new or concerning symptoms, even if you've always been healthy, please consult a licensed healthcare provider. Being "balanced" doesn't make you immune to medical conditions that need professional attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <p className="text-text2 text-sm mb-3">
          If your balance has started to slip, these patterns might sound familiar:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            Low Vitality Pattern →
          </Link>
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">
            Stuck Energy Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/balanced" className="text-sm text-accent no-underline hover:underline">
            Balanced Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
