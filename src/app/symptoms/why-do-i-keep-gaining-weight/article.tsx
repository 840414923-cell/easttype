"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyDoIKeepGainingWeightArticle() {
  const slug = "why-do-i-keep-gaining-weight"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Gaining Weight</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Keep Gaining Weight? The Soggy Metabolism
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You haven't changed your diet. You haven't stopped exercising (well, maybe a little). But the scale keeps creeping up, and the weight settles around your middle like it's found a comfortable home. Your clothes fit differently. You feel puffy. And no matter what you try, the number doesn't budge, or if it does, it comes right back.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here's something that might reframe the problem. What if the weight you're gaining isn't all fat? In Chinese medicine, a significant portion of unexplained weight gain can be understood as accumulated moisture, or what TCM calls Dampness. Your body is holding onto fluids and metabolic waste that it should be processing and eliminating. The result looks and feels like weight gain, but the mechanism is different from simply eating too many calories.
        </p>
        <p className="text-text2 leading-relaxed">
          This doesn't mean calories don't matter. They do. But for some body types, the metabolism is like a sink with a slow drain. You can turn down the faucet (eat less), but until you clear the drain, the water keeps rising.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Signs That Dampness May Be Involved
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Not all weight gain is Dampness-related. But if several of these sound familiar, it might be part of the picture:
        </p>
        <ul className="space-y-2">
          {[
            "Weight concentrates around your waist and abdomen",
            "You feel heavy and sluggish, especially in the morning",
            "Your digestion feels slow, like food sits in your stomach",
            "You're prone to bloating and water retention",
            "You feel worse in humid or damp weather",
            "Your skin might be oily or prone to breakouts",
            "You crave sweets, dairy, or fried food",
            "You feel sleepy or foggy after meals",
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
          The Western Basics (Still Important)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before exploring the Eastern angle, make sure you've considered the usual factors. Caloric surplus is still the fundamental mechanism of weight gain. If you're eating more than you burn, the excess gets stored. Age matters: metabolism naturally slows as you get older, even if your habits haven't changed. Hormonal changes (thyroid, cortisol, insulin resistance, perimenopause) can dramatically affect how your body stores fat.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Medications can also cause weight gain as a side effect. Antidepressants, corticosteroids, beta-blockers, and insulin are common culprits. If you've started a new medication and noticed weight changes, talk to your prescribing doctor.
        </p>
        <p className="text-text2 leading-relaxed">
          But here's the thing. Many people gain weight even when they're eating reasonably and staying active. The "calories in, calories out" model is technically correct but practically incomplete. It doesn't explain why two people eating the same diet can have completely different weight outcomes. That's where constitutional differences become relevant.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Stubborn Weight Gain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the most common pattern behind stubborn weight gain is Phlegm Damp (痰湿). Your Spleen is responsible for transforming food into usable energy and transporting fluids around your body. When the Spleen is weak, or when you overwhelm it with the wrong foods, the transformation doesn't happen cleanly. Instead of converting food into clear energy, you get a sticky, heavy residue that accumulates in your tissues.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of your metabolism as a kitchen. A well-functioning kitchen takes raw ingredients and turns them into meals efficiently. A Phlegm Damp kitchen is like one where the exhaust fan is broken and the drains are clogged. You can still cook, but grease builds up on every surface, smoke fills the room, and nothing cleans up properly. The harder you cook (the more you eat), the worse it gets.
        </p>
        <p className="text-text2 leading-relaxed">
          There's a secondary pattern too: Qi Deficiency. When your overall energy is low, your metabolism literally slows down. Your body goes into conservation mode, holding onto resources rather than burning them. This type of weight gain is less about moisture and more about a slow engine. Some people have both patterns simultaneously: a slow engine plus clogged drains.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Weight Gain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the most prone to weight gain. Their body holds moisture like a sponge. They tend to carry weight around their middle, have a sluggish digestion, feel worse in humid weather, and often have oily skin or a coated tongue. About 10% of people fall into this category. For them, the weight feels soft and puffy rather than firm and dense.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) gains weight more slowly but struggles to lose it. Their metabolism is simply underpowered. They also tend to have fatigue, a soft voice, easy sweating, and frequent colds. About 15% of people have this pattern. Their weight gain is less about holding moisture and more about the body conserving energy.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help (From an Eastern Perspective)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Phlegm Damp is the main issue, the approach is about draining moisture and supporting your Spleen. Foods traditionally used to drain dampness include adzuki beans, coix seed (Job's tears), winter melon, celery, and modest amounts of green tea. Hawthorn tea is a traditional choice for supporting fat metabolism. Tangerine peel tea helps move stagnant energy through the digestive system.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Equally important: cut back on the foods that create dampness in the first place. Dairy, sweets, fried food, cold drinks, beer, and excessive fruit all contribute to the moisture buildup. You don't have to eliminate them entirely. Just reducing them can start to shift the balance.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is behind your weight gain, the focus is on building energy. Warm, cooked, easy-to-digest foods support your Spleen without overwhelming it. Congee, sweet potato, jujube dates, and chicken broth are all good choices. Avoid cold and raw foods, which require more digestive energy to process.
        </p>
        <p className="text-text2 leading-relaxed">
          Movement helps both patterns, but the type matters. For Phlegm Damp types, exercise that makes you sweat a little (brisk walking, light jogging, dancing) helps the body release accumulated moisture. For Qi Deficient types, gentle movement like walking, tai chi, or stretching builds energy without depleting it. Intense workouts might actually make both patterns worse in the short term.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your weight gain is rapid, unexplained, or accompanied by other symptoms like fatigue, cold intolerance, hair loss, or changes in your menstrual cycle, please consult a licensed healthcare provider. These can be signs of thyroid dysfunction or other conditions that need medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy & Sluggish Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
