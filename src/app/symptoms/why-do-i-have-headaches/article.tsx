"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function HeadachesArticle() {
  const slug = "why-do-i-have-headaches"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Headaches</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Headaches? The Pressure That Has Nowhere to Go
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your head is pounding. Again. You reach for the ibuprofen, wonder if you&apos;re taking too much, and try to remember the last day you didn&apos;t have at least a low-grade headache. For some people, headaches are rare events. For others, they&apos;re constant companions that quietly shrink their life.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard approach is to treat the pain. Take something, wait for it to work, repeat when the pain returns. But if you&apos;re getting headaches regularly, something is causing them. The pain isn&apos;t the problem. It&apos;s a signal that something else is wrong.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has been treating headaches for thousands of years, and it doesn&apos;t see them as random events. It sees them as the result of specific patterns that can be understood and addressed. The location of your headache, the type of pain, when it happens, and what makes it better or worse all tell a story about what&apos;s going on inside.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Recurring Headaches Feel Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Pressure or tightness, often at the temples or back of the head",
            "Pain that gets worse with stress or emotional tension",
            "Headaches that come on gradually and linger for hours or days",
            "A feeling of a tight band around your head",
            "Pain that improves with movement or gentle pressure",
            "Headaches accompanied by irritability or frustration",
            "Worse after sitting still for long periods or holding tension in your shoulders",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Dehydration is a common and easily fixed cause. Eye strain from screens or uncorrected vision problems can trigger headaches. Poor posture, especially forward head posture from phone and computer use, creates tension in the neck that radiates upward.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sleep issues, both too little and too much, can trigger headaches. Caffeine withdrawal if you&apos;re a regular coffee drinker. Certain foods like aged cheese, processed meats, and alcohol. Hormonal changes around menstruation. Sinus congestion from allergies or infections.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people address all of these and still get headaches. Their hydration is fine. Their vision is corrected. Their posture is decent. Yet the headaches keep coming. That&apos;s where Chinese medicine offers a different perspective on what&apos;s creating that pressure in your head.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Headaches
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, recurring headaches are most often linked to Qi Stagnation or Yin Deficiency. These are different patterns with different qualities of pain, but they share a common theme: something is creating upward pressure in the head that has nowhere to go.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Stagnation is like a traffic jam in your body&apos;s energy system. Qi is supposed to flow smoothly through channels called meridians. When it gets blocked, pressure builds up. The Liver meridian is particularly important here. It&apos;s responsible for the smooth flow of Qi throughout your body, and it has a strong connection to the head. When Liver Qi gets stuck, often from stress, frustration, or suppressed emotions, that stuck energy creates upward pressure. The result is a headache that feels tight, pressing, or like a band around your head.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin Deficiency creates a different kind of headache. Yin is the cooling, moistening, anchoring energy in your body. When Yin is low, there&apos;s nothing to hold Yang down. Yang is the hot, active, upward-moving energy. Without enough Yin to anchor it, Yang rises to the head and creates a headache that feels more like burning, throbbing, or a sensation of heat in the head. This type often comes with other signs of dryness or heat: dry eyes, night sweats, or feeling warm at night.
        </p>
        <p className="text-text2 leading-relaxed">
          The location of your headache tells a practitioner a lot. Pain at the temples often relates to the Liver meridian. Pain at the back of the head often relates to the Bladder or Kidney meridians. Pain at the top of the head can relate to the Liver. Pain on the forehead often relates to the Stomach. This is why Chinese medicine treatment for headaches isn&apos;t one-size-fits-all. The pattern determines the approach.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Headaches
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and recurring headaches show up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the classic tension headache type. Their energy gets stuck easily, especially under stress. They often feel chest tightness, sigh frequently, and have mood swings. Their headaches tend to come on gradually, feel tight or pressing, and get worse with emotional stress. About 8% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) experiences headaches differently. Their headaches often feel more intense, burning or throbbing, and may be worse at night or after activity. They tend to run warm overall, have dry skin or eyes, and may have trouble staying asleep. About 10% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Release the Pressure
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Stagnation is your pattern, the focus is on getting energy to flow. Rose tea is one of the best choices for this. It has a gentle, moving quality that helps ease the stuck energy that creates headache pressure. Chrysanthemum tea is another traditional choice, especially for headaches at the temples. Tangerine peel tea can also help move Qi.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle movement is essential for Qi Stagnation headaches. Not intense exercise, which can sometimes make things worse. Walking, stretching, yoga, or tai chi. The key is to get your body moving and your energy circulating. Many people find that a 20-minute walk can stop a headache that&apos;s just starting.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Yin Deficiency is behind your headaches, the approach shifts to nourishing and cooling. Foods that support Yin include black sesame, goji berries, lily bulb, and pear. Avoid spicy foods, alcohol, and coffee, which add heat to a system that&apos;s already running warm. Getting to bed before 11 PM is especially important for Yin Deficient types, as the hours before midnight are considered the most restorative for Yin.
        </p>
        <p className="text-text2 leading-relaxed">
          For both patterns, regular meals matter. Skipping meals or eating irregularly can trigger headaches in both patterns, but for different reasons. For Qi Stagnant types, it adds stress to the system. For Yin Deficient types, it depletes the resources that are already running low. Eating at consistent times, even if the meals are small, can help prevent headaches before they start.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your headaches are severe, sudden, or different from your usual pattern, or if they&apos;re accompanied by fever, stiff neck, confusion, vision changes, numbness, or weakness, please seek immediate medical attention. These can sometimes be signs of conditions that need urgent care.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">
            Stuck Energy Pattern →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/blood-stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Pattern →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/damp-heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-so-irritable" className="text-sm text-accent no-underline hover:underline">
            Why Am I So Irritable?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-overthink-everything" className="text-sm text-accent no-underline hover:underline">
            Why Do I Overthink Everything?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
