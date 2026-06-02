"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function EczemaArticle() {
  const slug = "why-do-i-have-eczema"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Eczema</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Eczema? The Skin That Speaks in Flare-Ups
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You apply the cream. The eczema fades. You feel hopeful. Then two weeks later, it&apos;s back. Same spot, same itch, same frustration. You switch creams, try diet changes, eliminate stress. The eczema still returns. What if the problem isn&apos;t on the surface at all?
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard approach treats eczema as a skin problem. Apply something to the skin, suppress the inflammation, wait for it to return. But eczema that keeps coming back to the same places isn&apos;t just a surface issue. It&apos;s a signal that something inside is generating the conditions for flare-ups over and over.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine views eczema as an internal problem expressing itself through the skin. The redness, oozing, and itchiness aren&apos;t random. They&apos;re the visible signs of Damp Heat, a specific internal pattern where heat and moisture combine to create the perfect conditions for skin flare-ups.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Eczema Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Red, inflamed patches that itch intensely",
            "Oozing or weeping skin, especially during flare-ups",
            "Dry, scaly patches between flare-ups",
            "Eczema that returns to the same locations repeatedly",
            "Worse in hot, humid weather",
            "Itching that disrupts sleep",
            "Temporary improvement with steroid creams, but quick return after stopping",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Allergies, whether to food, pollen, or dust mites, are a common trigger for eczema. An allergist can perform patch testing or blood tests to identify specific triggers. Contact dermatitis from soaps, chemicals, or metals can also cause eczema-like reactions.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stress and emotional triggers are well-documented contributors. Genetic predisposition, especially atopic dermatitis, runs in families. Autoimmune conditions can manifest as skin inflammation. Hormonal fluctuations during the menstrual cycle or pregnancy can also trigger or worsen eczema.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people identify their triggers, avoid them, manage their stress, and eczema still returns. The creams suppress the surface, but the internal conditions keep generating flare-ups. That&apos;s where Chinese medicine offers a different perspective on why the skin keeps speaking in flare-ups.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Eczema
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, eczema is viewed through the Damp Heat lens. Dampness is the sticky, heavy, oozing quality. It&apos;s what makes eczema recurrent and stubborn. Heat is the redness, inflammation, and burning itch. These two forces combine to create the perfect conditions for skin flare-ups.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Creams cool the surface temporarily, but the internal Damp Heat keeps cooking. It&apos;s like putting ice on a stove burner. The ice melts, and the burner keeps generating heat. The flare-up returns because the source, the internal Damp Heat, was never addressed. The skin is the exhaust pipe, not the engine.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Damp Heat can be generated by several factors. A diet high in greasy, sweet, or spicy foods feeds both dampness and heat. Living in a hot, humid climate adds external dampness that the body struggles to process. Emotional stress and frustration can generate heat that gets trapped under the skin. When these factors combine, the body tries to release the excess through the skin, and eczema is the result.
        </p>
        <p className="text-text2 leading-relaxed">
          The recurrent nature of eczema is the dampness at work. Dampness is sticky and hard to clear. It lingers, settles into the same places, and returns when conditions are right. This is why eczema often reappears in the exact same spots. The dampness has settled there and never fully left.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Eczema
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and eczema shows up most clearly in a few of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type (湿热质) is the primary match. Their body runs hot and damp, creating ideal conditions for eczema. These people often feel warm, sticky, and uncomfortable in humid weather. Their skin tends to be oily and prone to various eruptions. About 8% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Sensitive type (特禀质) is the second match. Their body reacts to environmental triggers intensely, which can manifest as skin flare-ups. These people often have multiple sensitivities, whether to foods, pollens, or chemicals, and their skin reflects what their immune system is reacting to.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) can also experience eczema, but it tends to be dry and cracking rather than oozing. In this case, the eczema comes from internal dryness rather than dampness. The skin lacks the moisture it needs to stay supple, so it cracks and flakes.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/sensitive" className="text-sm text-accent no-underline hover:underline">
            Sensitive Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Calm the Skin
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Damp-draining foods are the first line of support. Mung bean soup, coix seed, celery, cucumber, and winter melon all help clear the internal conditions generating flare-ups. These foods work by supporting the body&apos;s natural drainage pathways, helping it process and eliminate the dampness that feeds eczema.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling foods can help manage the heat component. Pear, lotus root, bitter melon in moderation, and moderate amounts of green tea all support the body&apos;s cooling systems. The key word is moderation. Overdoing cooling foods can weaken digestion, which actually creates more dampness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Reduce triggers that fuel Damp Heat. Dairy, alcohol, spicy food, shellfish, and sweets are the main culprits. These foods add fuel to the internal fire and moisture that generates eczema. You don&apos;t have to eliminate them forever, but reducing them significantly during flare-ups can be associated with faster clearing.
        </p>
        <p className="text-text2 leading-relaxed">
          Gentle skincare matters too. Warm, not hot, showers avoid stripping the skin. Avoid harsh soaps that disrupt the skin&apos;s natural barrier. Moisturize with simple ingredients like coconut oil. In humid weather, wear breathable fabrics and use a dehumidifier indoors. Stress management through regular movement, creative expression, and breathing practices all help move stagnant Qi that can trigger flare-ups.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Eczema can sometimes indicate underlying conditions. If eczema is severe, widespread, accompanied by fever, or doesn&apos;t respond to basic care, consult a dermatologist. This article is for informational purposes only and is not medical advice.
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
          <Link href="/symptoms/why-is-my-skin-so-dry" className="text-sm text-accent no-underline hover:underline">
            Why Is My Skin So Dry?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
