"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function ThirstyArticle() {
  const slug = "why-am-i-always-thirsty"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Thirst</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Thirsty? The Well That Never Fills
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You drink water all day. You keep a bottle on your desk, one in your bag, one by your bed. You wake up thirsty. You go to bed thirsty. No matter how much you drink, the dryness doesn&apos;t go away. It&apos;s like pouring water into a colander and wondering why nothing stays.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The obvious answer is that you&apos;re dehydrated. Drink more water, problem solved. But if you&apos;re already drinking plenty and still feel thirsty, something else is going on. Your body has water. It&apos;s just not using it properly.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a name for this pattern, and it&apos;s not about how much water you drink. It&apos;s about your body&apos;s ability to transform and distribute fluids. When that system isn&apos;t working right, you can drink gallons and still feel parched.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Constant Thirst Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Dry mouth and throat, especially at night or upon waking",
            "Drinking water but feeling thirsty again shortly after",
            "Dry skin, lips, or eyes that don&apos;t improve with moisturizer",
            "Waking up at night needing water",
            "Craving cold drinks over room temperature water",
            "Feeling warm internally, especially in the afternoon or evening",
            "Thirst that doesn&apos;t go away even after drinking a lot",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Diabetes is the most important one to check. Excessive thirst is a classic symptom of both type 1 and type 2 diabetes. A simple blood test can rule this out. Diabetes insipidus, a rare condition affecting water regulation, is another possibility.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Dehydration from not drinking enough, especially in hot weather or during exercise. High salt intake. Certain medications, including diuretics, anticholinergics, and some antidepressants. Sjogren&apos;s syndrome, an autoimmune condition that causes dry mouth and eyes. Anemia can sometimes cause thirst.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get their blood sugar checked, review their medications, and everything comes back normal. Yet they&apos;re still thirsty all the time. That&apos;s where Chinese medicine offers a different perspective on why the well never seems to fill.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Constant Thirst
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, constant thirst is most often linked to Yin Deficiency. Yin is the cooling, moistening, nourishing aspect of your body. It&apos;s what keeps your skin supple, your eyes lubricated, your mouth moist. When Yin is deficient, your body lacks the internal moisture it needs to feel satisfied.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here&apos;s the key insight: drinking water doesn&apos;t directly replenish Yin. Yin isn&apos;t just fluid. It&apos;s the body&apos;s capacity to hold, transform, and distribute fluids. Think of it like a sponge. A dry sponge can be placed in water, but if the sponge&apos;s structure is damaged, it won&apos;t absorb properly. The water is there, but the sponge stays dry. That&apos;s what Yin Deficiency is like. The water is there, but your body can&apos;t hold onto it or use it effectively.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin Deficiency often develops over time. Staying up late regularly depletes Yin. Chronic stress burns through Yin. Eating too many spicy or heating foods can damage Yin. As we age, Yin naturally declines. Women often experience Yin Deficiency during and after menopause. The pattern builds slowly, which is why many people don&apos;t notice it until it&apos;s significant.
        </p>
        <p className="text-text2 leading-relaxed">
          The colander analogy is useful here. You can keep pouring water into a colander, but it will never fill because the structure doesn&apos;t hold water. Yin is what gives your body the structure to hold onto fluids. Without enough Yin, you&apos;re essentially a colander, and all that water you&apos;re drinking just passes through without nourishing you.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Constant Thirst
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and constant thirst shows up most clearly in one of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the classic &quot;always thirsty&quot; pattern. These people run warm internally, often have dry skin, dry eyes, and a dry mouth that doesn&apos;t improve with drinking. They may have night sweats, wake up thirsty, and feel restless at night. Their thirst tends to be for cold drinks, and they often feel worse in the afternoon or evening when internal heat peaks. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The internal dryness of Yin Deficiency isn&apos;t just uncomfortable. It affects how you feel overall. Without enough moistening Yin, you might feel irritable, have trouble sleeping, or experience that wired-but-tired feeling where your body is exhausted but your mind won&apos;t settle.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Fill the Well
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most important change is getting to bed before 11 PM. In TCM, the hours before midnight are considered the most important for replenishing Yin. Staying up late is like making withdrawals from a bank account that&apos;s already low. You can&apos;t save your way to wealth if you keep spending, and you can&apos;t build Yin if you keep burning through it at night.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Foods that nourish Yin include pear (especially cooked), lily bulb, tremella mushroom (also called silver ear or snow fungus), lotus seed, and black sesame. These aren&apos;t random choices. Each has been observed over centuries to support the body&apos;s moistening functions. Tremella mushroom in particular is famous for its ability to support Yin and improve skin hydration from the inside.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid foods that deplete Yin or add heat. Spicy foods, alcohol, coffee, and lamb are the main ones. These are like adding fuel to a fire that&apos;s already drying you out. If you can&apos;t eliminate them entirely, at least reduce them significantly and avoid them in the evening when your body is trying to rebuild Yin.
        </p>
        <p className="text-text2 leading-relaxed">
          Drink warm water instead of cold. This might seem counterintuitive when you&apos;re thirsty and craving cold drinks. But cold water can actually impair your body&apos;s ability to transform and absorb fluids. Warm water is easier for your system to process and use. Think of it like watering a plant. Room temperature water is absorbed better than ice water, which can shock the roots.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your thirst is excessive, sudden, or accompanied by frequent urination, unexplained weight loss, fatigue, or blurred vision, please consult a licensed healthcare provider. These can be signs of diabetes or other conditions that need proper medical attention.
        </p>
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
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-cant-i-fall-asleep" className="text-sm text-accent no-underline hover:underline">
            Why Can&apos;t I Fall Asleep?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-is-my-skin-so-dry" className="text-sm text-accent no-underline hover:underline">
            Why Is My Skin So Dry?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
