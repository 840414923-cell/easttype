
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyDullComplexionArticle() {
  const slug = "why-is-my-complexion-dull"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Skin</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Complexion Dull? The Light Behind the Glass That Dimmed
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You look in the mirror and your face looks... gray. Not sick, exactly. Not old, necessarily. Just dull. Like someone turned down the brightness. You&apos;ve tried brightening serums, vitamin C, exfoliation. They help for a day, maybe two, and then the flatness comes back. Your skin doesn&apos;t glow, no matter what you put on it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The skincare industry will tell you it&apos;s dead skin cells. Or dehydration. Or pollution. And those things can contribute. But if you&apos;re exfoliating regularly, moisturizing, and protecting your skin and it still looks tired, something deeper is going on.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine connects a dull complexion to Blood. Specifically, to Blood that isn&apos;t reaching your face in sufficient quantity or quality. Your face is like a room with a lamp inside. If the power is flowing, the lamp glows warmly through the glass. If the power is weak or the cord is kinked, the light dims. Face creams are like polishing the glass. They help, but they don&apos;t fix the power supply.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What a Dull Complexion Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "Skin looks flat, grayish, or lacks a natural glow even when well-rested",
            "Face appears pale or sallow, especially around the mouth and under the eyes",
            "No amount of skincare seems to restore the brightness",
            "Your complexion gets worse during your period or after illness",
            "Skin looks tired even when you&apos;ve slept well",
            "Lips and nail beds may also look pale",
            "You bruise easily or notice broken capillaries on your face",
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
          The External Factors (Address These Too)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Lack of sleep is the most obvious cause of a dull complexion, and it&apos;s real. When you don&apos;t sleep enough, circulation to the skin drops, and it shows. Dehydration makes skin look flat. Smoking constricts blood vessels and reduces blood flow to the face over time. Not removing makeup properly clogs pores and creates a dull film on the skin.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;re sleeping well, drinking water, and taking care of your skin but still look like you haven&apos;t seen sunlight in weeks, the Eastern perspective offers a different angle. It&apos;s about what&apos;s flowing (or not flowing) underneath.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains a Dull Complexion
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, a healthy complexion comes from abundant, well-circulating Blood reaching the face. Think of your circulatory system like the plumbing in a house. The water needs enough pressure (Qi) to reach the top floor (your face), and the pipes need to be clear (no stagnation) for the flow to be smooth. When either of those fails, the top floor doesn&apos;t get enough water, and things look dry and dim.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi is too weak to push Blood upward, your face doesn&apos;t get enough nourishment. This is the low water pressure problem. The Blood is there, but it can&apos;t reach where it needs to go. You might also feel tired, have a pale tongue, or get lightheaded when standing up.
        </p>
        <p className="text-text2 leading-relaxed">
          If Blood is stagnant, it&apos;s like clogged pipes. The Blood is present and the Qi is moving, but the flow is sluggish and stuck. Your complexion might look dull with a slightly purplish or dark undertone. You may also notice that your skin looks sallow or that you have dark circles that don&apos;t respond to sleep.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Types Behind a Dull Complexion
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Blood Stasis type is the most direct match. Their blood doesn&apos;t flow smoothly, creating that dull, slightly dark or purplish complexion. They may also have dark circles, a tendency toward bruises, and period pain with clots. The stagnation is the core issue.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type has a different problem. Their Qi is too weak to push Blood to the surface. Their complexion tends to be pale rather than dark. They feel tired, their voice might be soft, and they lack the general vitality that shows up as a healthy glow.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">Blood Stasis Type →</Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Restore the Glow
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Blood-nourishing foods are essential. Jujube dates (red dates) are one of the most popular Blood-building foods in TCM. Goji berries support Liver Blood. Dark leafy greens, beets, and black beans all contribute to Blood quality. These aren&apos;t quick fixes, but eaten regularly they may help build the internal reserves that show up as a healthy complexion.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If stagnation is the issue, gentle movement is key. You don&apos;t need intense exercise. Walking, gentle stretching, tai chi, or yoga all help get Blood moving. The principle is simple: movement moves Qi, and Qi moves Blood. Sitting at a desk for 8 hours is the enemy of circulation to your face.
        </p>
        <p className="text-text2 leading-relaxed">
          Face creams and serums aren&apos;t useless here, but they&apos;re surface-level. Think of them as polishing the glass on that lamp. It helps the light shine through more clearly, but only if the bulb is actually on. The real work is building and circulating the Blood that gives your face its color and vitality from within.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your complexion has changed suddenly, if the dullness is accompanied by fatigue, weight changes, or other symptoms, please consult a doctor. A persistently dull or pale complexion can sometimes be associated with anemia, thyroid issues, or other conditions that need medical evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">Stuck Energy Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-dark-circles" className="text-sm text-accent no-underline hover:underline">Why Do I Have Dark Circles?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-is-my-skin-so-dry" className="text-sm text-accent no-underline hover:underline">Why Is My Skin So Dry?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
