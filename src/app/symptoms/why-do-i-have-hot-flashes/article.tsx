"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function HotFlashesArticle() {
  const slug = "why-do-i-have-hot-flashes"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Hot Flashes</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Hot Flashes? The Heat That Rises Without Warning
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;re sitting at your desk, perfectly comfortable, when suddenly a wave of heat rises from your chest to your face. Your skin flushes, you start sweating, and within minutes it passes. Then you&apos;re cold. This cycle repeats, sometimes dozens of times a day. It&apos;s not a fever. It&apos;s not anxiety. It&apos;s your body&apos;s internal thermostat misfiring.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sudden waves of heat rushing through the body. In TCM, hot flashes are Yang rising uncontrollably because Yin can&apos;t anchor it down. When Yin (cooling force) is deficient, the heating energy surges upward through the chest, face, and neck. Not just menopause. Any age, any gender.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Hot Flashes Feel Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Sudden waves of heat rising through the chest and face",
            "Flushing or redness in the face and neck during a flash",
            "Sweating that follows the heat, then chills after",
            "Hot flashes worse in the evening or at night",
            "Waking up drenched in sweat after a hot flash",
            "Heat that comes and goes without any external trigger",
            "Feeling irritable or restless during and after a flash",
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
          Menopause and perimenopause (most common). Hyperthyroidism. Certain medications (antidepressants, opioids). Anxiety and panic attacks. Carcinoid syndrome. Alcohol and spicy food reactions. Infections. If blood tests and hormone panels are normal, TCM offers a different framework.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. A simple hormone panel can identify menopause-related changes. Thyroid function tests can rule out hyperthyroidism. Review any medications with your doctor.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get their hormones checked, review their medications, and everything comes back normal. Yet they&apos;re still having hot flashes. That&apos;s where Chinese medicine offers a different perspective on why the heat keeps rising.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Hot Flashes
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, hot flashes are a Yin-Yang imbalance. Yin is the cooling, anchoring, moistening force. Yang is the heating, rising, activating force. Normally, Yin holds Yang down like a lid on a pot. When Yin is deficient, the lid is too light. Yang surges upward as heat, creating the flash.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When the surge passes, you may feel cold because the heat has left and the underlying Yin deficiency means there&apos;s no warmth reserve either. The analogy is a pot boiling over. There isn&apos;t enough liquid (Yin) to absorb the heat (Yang), so the steam bursts through unpredictably.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Damp Heat can also cause heat surges, but they feel different: sticky, oppressive, and accompanied by heaviness rather than the dry, sudden quality of Yin-deficient hot flashes. The distinction matters because the approach for each is different.
        </p>
        <p className="text-text2 leading-relaxed">
          Yin Deficiency often develops over time. Staying up late regularly depletes Yin. Chronic stress burns through Yin. Eating too many spicy or heating foods can damage Yin. As we age, Yin naturally declines. Women often experience Yin Deficiency during and after menopause, but men can experience it too.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Hot Flashes
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and hot flashes show up most clearly in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary match. Their cooling system is undercharged, so internal heat builds and surges periodically. These people run warm internally, often have dry skin, dry eyes, and may experience night sweats alongside hot flashes. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type (湿热质) is the second match. Their heat is sticky and oppressive rather than sudden and dry. Hot flashes may be accompanied by acne, acid reflux, or feeling hot and sticky. The heat feels heavier and more lingering.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Cool the Heat
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Yin-nourishing foods may help rebuild the cooling system that prevents heat surges. Pear, black sesame, lily bulb, tremella mushroom, and lotus seed are traditional choices. These support the body&apos;s moistening functions over time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling teas like chrysanthemum tea and peppermint tea can provide relief during a flash. Keep them on hand and sip when you feel the heat rising.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Go to bed before 11 PM. Yin replenishes during sleep, especially before midnight. Staying up late is like making withdrawals from a bank account that&apos;s already low. You can&apos;t build Yin if you keep burning through it at night.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid heat generators: spicy food, alcohol, coffee, lamb, deep-fried food. These add fuel to the internal fire. Dress in layers so you can adjust during a flash. Keep the bedroom cool.
        </p>
        <p className="text-text2 leading-relaxed">
          Small, frequent meals instead of large ones. Heavy meals generate more internal heat and can trigger flashes in some people.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Hot flashes can sometimes indicate serious conditions. If they&apos;re severe, frequent, accompanied by palpitations, dizziness, or unexplained weight loss, consult a doctor. This article is for informational purposes only and is not medical advice.
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
          <Link href="/symptoms/why-am-i-always-thirsty" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Thirsty?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
