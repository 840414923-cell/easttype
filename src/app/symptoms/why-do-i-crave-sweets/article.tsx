"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyCraveSweetsArticle() {
  const slug = "why-do-i-crave-sweets"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Sugar Cravings</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Crave Sweets? The Sweet Tooth That Runs Deeper Than Willpower
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You tell yourself you'll cut back on sugar. And you mean it. But then 3 PM hits and the vending machine starts calling your name. Or you finish dinner and something feels missing. Not hunger exactly. More like an itch that only sweetness can scratch. You know it's not good for you. You know you'll feel worse after. But the craving doesn't care about your logic.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here's something that might change how you think about sugar cravings: they're not always about a lack of willpower. In Chinese medicine, craving sweets specifically (not just any food) is connected to a specific organ system and a specific pattern of imbalance. The sweet craving is your body asking for something it thinks it needs.
        </p>
        <p className="text-text2 leading-relaxed">
          Understanding why your body is asking for sweets is the first step toward giving it what it actually wants instead.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What This Kind of Craving Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "Strong desire for sweets after meals",
            "Afternoon energy crashes accompanied by sugar cravings",
            "Feeling that a meal isn't complete without dessert",
            "Cravings that get worse when you're stressed or tired",
            "You eat a full meal but still feel like something is missing",
            "Blood sugar crashes that make you shaky or irritable",
            "Attempts to quit sugar last 2-3 days before the craving wins",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Causes
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Blood sugar imbalance is the most common driver. If you eat a high-carb meal, your blood sugar spikes, insulin surges, and then blood sugar crashes, leaving you craving more sugar to bring it back up. This cycle can repeat multiple times a day. The fix is eating more protein and healthy fat with each meal to stabilize glucose.
        </p>
        <p className="text-text2 leading-relaxed">
          Stress eating is real. Cortisol triggers cravings for high-calorie, sweet foods because your body thinks it needs quick energy for a threat. If you crave sweets most when you're stressed, tired, or emotional, the pattern is clear.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Sweet Cravings
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, each of the five flavors corresponds to a specific organ system. The sweet flavor corresponds to the Spleen. When your Spleen is weak or overworked, it sends a signal that it needs sweet-flavored things to support itself. It's not a craving for sugar per se. It's a craving for the energetic quality of sweetness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The irony is that refined sugar actually weakens the Spleen further. The Spleen asks for help, you give it candy, and the candy makes the problem worse. It's like a thirsty person drinking salt water. It tastes like it's helping, but it's making the underlying dehydration worse.
        </p>
        <p className="text-text2 leading-relaxed">
          Phlegm Damp is the pattern that usually develops from this cycle. A weak Spleen plus too many sweets and heavy foods creates moisture buildup. The more dampness accumulates, the more sluggish your digestion becomes, and the more your body craves the quick energy of sugar. It's a feedback loop that feeds on itself.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Cravings
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the most prone to sugar cravings. Their Spleen is already struggling, and the sweet craving is its distress signal. About 10% of people have this pattern. They tend to carry weight around the middle, feel sluggish after meals, and notice that the more sugar they eat, the more they want.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) craves sweets for a different reason. Their overall energy is low, and sugar provides a quick (but temporary) boost. They reach for sweets because their body is desperate for fuel, not because their Spleen is specifically asking for it. About 15% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">Phlegm Damp Type →</Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Break the Cycle
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Instead of refined sugar, give your Spleen the sweet flavor it wants in a form that actually supports it. Sweet potato, squash, pumpkin, jujube dates, and rice are all naturally sweet and Spleen-nourishing. These satisfy the craving without creating the blood sugar spike and crash that refined sugar causes.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For Phlegm Damp types, add damp-draining foods alongside the natural sweets: adzuki beans, coix seed, and modest green tea. These help clear the moisture that's making your digestion sluggish.
        </p>
        <p className="text-text2 leading-relaxed">
          Eat warm, cooked meals. Cold and raw foods make the Spleen work harder, which triggers more sweet cravings. A bowl of warm congee with sweet potato and dates at breakfast can set up your whole day with fewer cravings. The warmth supports digestion, the natural sweetness satisfies the craving, and the complex carbohydrates provide steady energy instead of a spike and crash.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your sugar cravings are extreme, accompanied by excessive thirst or urination, or if you have a family history of diabetes, please consult a licensed healthcare provider for a blood glucose evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">Heavy & Sluggish Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">Always Bloated After Eating</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">Why Do I Keep Gaining Weight?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
