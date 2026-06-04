import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyMetabolismSlowArticle() {
  const slug = "why-is-my-metabolism-so-slow"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Metabolism</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Metabolism So Slow? The Engine Running in First Gear
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You eat a salad and feel like you gained two pounds. Your friend downs a burger and fries and doesn&apos;t gain an ounce. You&apos;ve cut calories, tried keto, gone vegan, intermittent fasted, and the scale barely moves. Or worse, it goes up. You start to wonder if your body is somehow defying the laws of physics.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s frustrating because the advice is always the same: eat less, move more. And you&apos;ve tried that. Multiple times. Each time you lose a little, stall out, and then gain back more than you lost. It feels like your metabolism is a dimmer switch that someone turned down and forgot where the knob is.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine doesn&apos;t think about metabolism in terms of calories in versus calories out. It thinks about it in terms of how well your body transforms food into energy versus how much of it gets stored as gunk. That gunk, in TCM language, is called Dampness, and it&apos;s the key to understanding why some metabolisms run fast and others crawl.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What a Slow Metabolism Actually Feels Like Day to Day
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your metabolism is sluggish, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Gaining weight easily even when eating small portions",
            "Feeling heavy, sluggish, and slow, especially after meals",
            "Difficulty losing weight despite consistent diet and exercise efforts",
            "Waking up feeling unrefreshed, like your body didn&apos;t recharge overnight",
            "Feeling cold often, especially in your hands and feet",
            "Bloated or puffy, especially in the face and midsection",
            "Brain fog or mental sluggishness that seems tied to how you eat",
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
          The Obvious Causes (Worth Checking First)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before looking at Eastern perspectives, make sure the basics are covered. Thyroid function is the most common medical cause of a genuinely slow metabolism. An underactive thyroid (hypothyroidism) directly reduces your metabolic rate. Get a full thyroid panel, not just TSH, because some issues don&apos;t show up on basic screening.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other factors: muscle mass (muscle burns more calories at rest than fat), age (metabolism naturally slows as we get older), sleep deprivation (disrupts hunger hormones and reduces metabolic rate), chronic stress (high cortisol promotes fat storage, especially around the belly), and certain medications. If you&apos;ve been yo-yo dieting for years, that can also slow your metabolism as your body learns to function on fewer calories.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people with normal thyroid results, decent sleep, and reasonable diets still struggle with a metabolism that feels stuck. The labs say everything is fine. The body says otherwise. That&apos;s where Chinese medicine offers a different framework for understanding what&apos;s happening.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains a Slow Metabolism
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, your metabolism is driven by the Spleen and Stomach system, powered by your overall Qi and Yang energy. The Spleen takes food in, transforms it into usable energy, and transports that energy to where it&apos;s needed. When this system works well, you eat food, your body extracts the good stuff, uses what it needs, and efficiently clears out the rest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When the Spleen is weak, the transformation doesn&apos;t happen cleanly. Instead of turning food into clear, usable energy, you get a byproduct. That byproduct is Phlegm Damp. Think of it like a factory where the machinery is old and inefficient. Raw material goes in, but instead of clean output, you get a lot of waste and sludge. That sludge builds up in your system, makes everything heavy and slow, and shows up as weight that won&apos;t budge, puffiness, and bloating.
        </p>
        <p className="text-text2 leading-relaxed">
          The second factor is Yang, your body&apos;s internal fire. Yang is what keeps your metabolism running at the right speed. When Yang is low, everything slows down. Your digestion slows, your circulation slows, your thinking slows. It&apos;s like turning down the flame under a pot of water. It still heats up, but it takes forever and never quite reaches a full boil. People with low Yang often feel cold, tired, and gain weight easily, especially around the midsection.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types With the Slowest Engines
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most associated with a slow metabolism.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the classic slow metabolism type. Their body holds onto moisture and weight like a sponge. They often carry extra weight around their middle, feel heavy and sluggish, get worse in humid weather, and notice their metabolism seems to get slower over time. About 10% of people fall into this pattern. Their body is like a kitchen where the drainage is clogged. Nothing moves through efficiently, and residue builds up.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) has a slow metabolism from pure lack of energy. Their body doesn&apos;t have enough fuel to run the metabolic engine at full speed. They feel tired, their digestion is weak, and their body conserves energy by slowing everything down. They gain weight not from excess, but from their body&apos;s inability to process even normal amounts of food efficiently. About 15% of people have this pattern.
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
          What May Help Speed Things Up
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Phlegm Damp is the main pattern, the approach is about drying out the system and getting things moving. Foods that help drain Dampness include adzuki beans, coix seed (Job&apos;s tears), winter melon, celery, and modest amounts of green tea. Hawthorn tea is a traditional choice for supporting fat metabolism. Equally important is cutting back on the foods that create more Dampness: dairy, sweets, fried food, cold drinks, and beer.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is behind your slow metabolism, the focus is on building energy rather than restricting calories. Paradoxically, eating too little can make a slow metabolism worse because your body goes into conservation mode. Instead, eat warm, nourishing, easy-to-digest meals. Congee, sweet potato, jujube dates, ginger tea, and bone broth all support the Spleen and build Qi. The goal is to give your body enough fuel that it feels safe increasing its metabolic rate.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stop drinking ice water. This one change can make a surprising difference. In TCM, cold drinks literally slow down your digestive fire, like throwing ice on a campfire. Room temperature or warm water keeps your internal engine running at a better speed. Add a slice of ginger or lemon if plain warm water doesn&apos;t appeal to you.
        </p>
        <p className="text-text2 leading-relaxed">
          Move your body, but don&apos;t punish it. Gentle, consistent movement like walking, light jogging, swimming, or dancing does more for a slow metabolism than intense workouts that leave you exhausted. When you push too hard, your body interprets it as stress and conserves energy. When you move gently and regularly, your body feels safe enough to speed things up.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your weight gain is rapid or unexplained, if you&apos;re gaining weight despite eating very little, or if you also experience fatigue, constipation, dry skin, hair loss, or feeling cold all the time, please consult a licensed healthcare provider. A slow metabolism can sometimes be associated with thyroid conditions, insulin resistance, or other medical issues that need proper evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy &amp; Sluggish Pattern →
          </Link>
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            Low Vitality Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-cant-i-lose-weight" className="text-sm text-accent no-underline hover:underline">
            Why Can&apos;t I Lose Weight?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">
            Why Do I Keep Gaining Weight?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
