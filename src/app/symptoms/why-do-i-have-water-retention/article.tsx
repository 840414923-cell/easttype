"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WaterRetentionArticle() {
  const slug = "why-do-i-have-water-retention"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Water Retention</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Water Retention? The Sponge That Won&apos;t Wring Out
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your rings are tight by afternoon. Your face looks puffy in the morning. Your legs feel heavy by the end of the day, and pressing your thumb into your shin leaves a dimple that takes a moment to disappear. You drink less water thinking it will help, but the puffiness stays. Your body is holding onto moisture it should be releasing, and cutting water intake doesn&apos;t fix the problem.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Water retention, puffiness, feeling heavy and swollen. In TCM, the Spleen is responsible for transforming and transporting fluids. When Spleen Qi is weak, fluids accumulate instead of being processed and eliminated. The body becomes like a sponge that absorbs water but can&apos;t be wrung out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Water Retention Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Puffy face or eyes, especially in the morning",
            "Rings that fit tightly by afternoon but are fine in the morning",
            "Heavy, tired legs that feel worse by end of day",
            "Dimple marks left on skin after pressing (pitting edema)",
            "Bloating that feels more like fluid than gas",
            "Weight that fluctuates by several pounds day to day",
            "Worse in humid weather or before menstruation",
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
          High salt intake. Heart failure or kidney disease (blood tests, ultrasound). Liver disease. Venous insufficiency. Lymphedema. Medications (blood pressure drugs, steroids). Hormonal fluctuations (PMS, pregnancy). Thyroid issues. If these are ruled out, TCM offers a framework based on fluid metabolism.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Blood tests can check kidney and liver function. An ultrasound can evaluate heart health. A physical exam can assess venous insufficiency or lymphedema.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get these tests and everything comes back normal. Yet they&apos;re still puffy and holding onto water. That&apos;s where Chinese medicine offers a different perspective on why the sponge won&apos;t wring out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Water Retention
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, water retention is a Spleen and Kidney problem. The Spleen transforms food and drink into usable energy and transports fluids to where they&apos;re needed. When Spleen Qi is weak, fluids don&apos;t get transformed. They sit in the tissues as dampness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Kidneys regulate water metabolism, deciding what to keep and what to release. When Kidney Yang is low, the body doesn&apos;t have enough heat to evaporate and move fluids, so they pool.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The analogy is a sponge that&apos;s been sitting in water. It&apos;s saturated. You can add more water and it just sits there. Wringing it out requires effort. In your body, the Spleen and Kidneys are supposed to do the wringing. When they&apos;re weak, the sponge stays wet.
        </p>
        <p className="text-text2 leading-relaxed">
          Spleen Qi deficiency often develops from poor diet, overthinking, or irregular eating habits. The Spleen likes warm, cooked food and regular meal times. Cold, raw foods and erratic eating patterns weaken it over time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Water Retention
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and water retention shows up most clearly in one of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the primary and obvious match. Their body holds onto moisture and metabolic waste. They feel heavy, sluggish, and worse in humid conditions. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The heaviness of Phlegm Damp isn&apos;t just physical. It can affect mental clarity too, creating a foggy, slow feeling. The body feels like it&apos;s carrying extra weight even when the scale doesn&apos;t show it.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Drain the Sponge
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Damp-draining foods may help the body release accumulated fluids. Adzuki beans (the most important one), coix seed, winter melon, celery, cucumber, and modest green tea are traditional choices.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm, cooked meals support the Spleen&apos;s fluid-processing function. Cold, raw foods force the Spleen to work harder. Think of the Spleen like a digestive fire. Cold food dampens the fire, while warm food keeps it burning steadily.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Reduce salt, dairy, sweets, fried food, and cold drinks. These either add moisture or slow drainage. Salt directly causes water retention. Dairy and sweets create dampness. Fried food is heavy and hard to process.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle movement helps circulate fluids. Walking, swimming, and gentle stretching all support lymphatic flow. Elevate legs at the end of the day if lower body swelling is an issue.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid sitting or standing for long periods without breaks. Movement is essential for fluid circulation. The calf muscles act as a pump for lymphatic fluid, so regular walking is particularly helpful for leg swelling.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Water retention can sometimes indicate serious conditions. If swelling is sudden, one-sided, accompanied by shortness of breath, chest pain, or significant weight gain, seek immediate medical attention. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy and Sluggish Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating?
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
