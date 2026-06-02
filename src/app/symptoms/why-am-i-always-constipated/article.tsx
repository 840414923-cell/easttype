"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function ConstipatedArticle() {
  const slug = "why-am-i-always-constipated"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Constipation</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Constipated? The Pipe That Forgot How to Flow
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You eat your fiber. You drink your water. You&apos;ve tried probiotics, magnesium, prunes. You go, but it takes effort, and it&apos;s never quite enough. The advice is always the same: more fiber, more water, more exercise. But what if you&apos;re doing all of that and your digestion still moves at its own slow pace?
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Chronic constipation that fiber doesn&apos;t fix. In TCM, there are different types: dry-type (Yin Deficiency, hard pellets, needs moisture), sluggish-type (Qi Deficiency or Phlegm Damp, infrequent but normal texture, needs energy), and stress-type (Qi Stagnation, comes and goes with emotional state, needs flow).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Constipation Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Bowel movements fewer than every 2 to 3 days",
            "Straining or feeling incomplete after going",
            "Stools that are hard, dry, and pellet-like",
            "Alternating between constipation and normal days",
            "Bloating and heaviness that improves after a bowel movement",
            "Constipation that worsens during stressful periods",
            "Feeling like something is blocking the passage",
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
          Low fiber diet (but you&apos;re already eating fiber). Dehydration. Medications (opioids, iron supplements, antidepressants). Hypothyroidism. Irritable bowel syndrome (IBS-C). Pelvic floor dysfunction. Neurological conditions. Structural issues (hemorrhoids, fissures). If these are addressed and constipation persists, TCM distinguishes between different types that require different approaches.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. A thyroid panel can rule out hypothyroidism. Review any medications with your doctor. A physical exam can assess pelvic floor function.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people address these factors and constipation persists. That&apos;s where Chinese medicine offers a different perspective, one that distinguishes between several distinct patterns that each need a different approach.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Constipation
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          TCM sees constipation as several different patterns, not one condition. Dry-type constipation: Yin Deficiency means your intestines lack the moisture to lubricate stool passage. It&apos;s like a dried-out pipe. Adding more cargo (fiber) without adding lubrication (Yin) just creates more blockage.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sluggish-type constipation: Qi Deficiency or Phlegm Damp means your intestines lack the energy to move things along. The pipe is fine, but the pump is weak. More fiber adds bulk but doesn&apos;t fix the pump.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stress-type constipation: Liver Qi Stagnation means the energy that should coordinate smooth digestion gets stuck. The pipe works, but the control system is jammed. This type often comes and goes with emotional state.
        </p>
        <p className="text-text2 leading-relaxed">
          Knowing which type you have determines the approach. More fiber helps sluggish-type but can worsen dry-type. More water helps dry-type but doesn&apos;t fix the pump in sluggish-type. Understanding the pattern is key to addressing it effectively.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Constipation
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and constipation shows up in several of them, each with a different quality.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the primary match for sluggish constipation. Their digestion is slow and heavy, like everything is moving through mud. The stool may be normal texture but infrequent. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary match for dry constipation. Their intestines lack the moisture to move stool smoothly. The stool is typically hard, dry, and pellet-like. They may also experience dry skin, dry mouth, and night sweats.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the match for stress-related constipation that comes and goes with emotional state. When stressed or emotionally stuck, digestion stops. When relaxed, it flows. This type often benefits from movement and emotional expression.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Get Things Moving
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          For dry-type: pear, black sesame, honey, banana, and warm water first thing in the morning on an empty stomach. These add moisture and lubrication to the dried-out pipe.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For sluggish-type: sweet potato, steamed vegetables, and warm cooked meals. These give the digestive system easy-to-process fuel without overwhelming a weak pump.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For stress-type: rose tea, tangerine peel tea, and citrus to move Liver Qi. Regular movement and emotional expression help unjam the control system.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm water on an empty stomach in the morning triggers the digestive reflex and can help all three types. This simple habit signals to your body that it&apos;s time to get things moving.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid cold drinks and excessive raw food, which slow the digestive pump. Establish a regular bathroom routine, same time every day, preferably after breakfast when the digestive system is naturally active.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Constipation can sometimes indicate serious conditions. If it&apos;s new, severe, accompanied by blood in the stool, unexplained weight loss, or severe abdominal pain, seek medical attention. This article is for informational purposes only and is not medical advice.
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
          <Link href="/symptoms/why-do-i-have-acid-reflux" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Acid Reflux?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
