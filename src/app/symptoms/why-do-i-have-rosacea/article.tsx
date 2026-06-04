
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyRosaceaArticle() {
  const slug = "why-do-i-have-rosacea"

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
        Why Do I Have Rosacea? The Blush That Never Fades
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your cheeks flush red and it doesn&apos;t go away. Not a cute rosy glow. A persistent, blotchy redness that makes people ask if you&apos;re embarrassed, angry, or sunburned. You&apos;ve tried calming creams, gentle cleansers, and avoiding your triggers. Some days are better than others, but the baseline redness never fully disappears.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Rosacea is frustrating because the standard approach is mostly about management. Avoid triggers. Use prescription creams. Maybe try lasers. All valid strategies, but none of them answer the question of why your face keeps flushing in the first place. Why do some people get rosacea and others don&apos;t, even when they share the same triggers?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine approaches facial redness as a symptom of internal heat that&apos;s rising to the surface. Your face is like the roof of a house. If there&apos;s a fire in the kitchen, the smoke ends up at the top. TCM asks: where is the fire, and what&apos;s feeding it?
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Rosacea Can Look Like
        </h2>
        <ul className="space-y-2">
          {[
            "Persistent redness on cheeks, nose, forehead, or chin",
            "Flushing that comes and goes, often triggered by heat, food, or stress",
            "Small visible blood vessels or broken capillaries on the face",
            "Bumps or pimples that aren&apos;t quite acne",
            "A warm or burning sensation in the affected areas",
            "Skin that reacts to spicy food, alcohol, or hot drinks almost immediately",
            "Redness that gets worse over time rather than staying the same",
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
          The Common Triggers (And Why They Matter)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Spicy food, alcohol, hot beverages, sun exposure, stress, and extreme temperatures are the classic rosacea triggers. Most people with rosacea already know their personal list. Avoiding them helps reduce flare-ups, and that&apos;s worth doing.
        </p>
        <p className="text-text2 leading-relaxed">
          But avoidance is a defensive strategy. It reduces the sparks but doesn&apos;t address the underlying fire. Chinese medicine looks at why your body is so reactive to these triggers in the first place. If spicy food makes you flush but not your friend, the difference isn&apos;t the spice. It&apos;s the internal environment that&apos;s already running hot.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Views Facial Redness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, persistent facial redness is most often linked to Heat in the Blood or Damp Heat rising to the face. Think of your circulatory system like a pot of water on a stove. When the fire underneath is too strong, the water gets hot, starts bubbling, and eventually steam and bubbles rise to the surface. Your face is the surface where that internal heat becomes visible.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Blood Heat is the simpler pattern. The blood itself is running hot, which causes redness, warmth, and that flushing sensation. It&apos;s like having your internal thermostat set too high. The heat expands the blood vessels near the surface of your face, creating that persistent redness and the visible capillaries that come with chronic rosacea.
        </p>
        <p className="text-text2 leading-relaxed">
          Damp Heat is more complex. It&apos;s the same Heat, but with a sticky, heavy quality mixed in. This is the pot of thick soup boiling over. The redness might come with puffiness, oiliness, or small pimple-like bumps. Damp Heat rosacea can be associated with a sluggish Spleen that isn&apos;t processing fluids well. The difference matters because the dietary and lifestyle approach shifts depending on which pattern is dominant.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Types Behind the Redness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type is the most common constitution for rosacea in TCM. These people tend to run warm, have oily or combination skin, and may also deal with breakouts or digestive heaviness. Their body holds onto both heat and moisture, creating the perfect environment for facial redness and inflammation.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">Damp Heat Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Cool the Heat
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling foods are the foundation. Cucumber, watermelon, mung beans, lotus root, and chrysanthemum tea are all traditionally used to clear heat from the body. Mung bean soup in particular is a classic TCM remedy for Blood Heat. It&apos;s not a magic cure, but eaten regularly it may help reduce the internal temperature that&apos;s driving the redness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The foods to avoid are the ones that add fuel to the fire. Spicy food, alcohol, deep-fried food, lamb, and excessive coffee all generate internal heat. If you have Damp Heat, also reduce dairy and sugar, which contribute to the sticky quality that makes the pattern harder to clear.
        </p>
        <p className="text-text2 leading-relaxed">
          Managing stress is not optional here. In TCM, emotional stress and frustration generate Liver Heat, which feeds directly into facial redness. Regular gentle movement, breathing exercises, and anything that helps you process stress can be part of the picture. The goal isn&apos;t to eliminate all stress (good luck with that) but to give your body a way to discharge it rather than letting it build up as internal heat.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your facial redness is worsening, spreading, causing discomfort, or affecting your eyes, please consult a dermatologist or licensed healthcare provider. Rosacea can be associated with other conditions and may worsen over time without proper management. Eye involvement (ocular rosacea) needs medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/damp-heat" className="text-sm text-accent no-underline hover:underline">Damp Heat Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-keep-breaking-out" className="text-sm text-accent no-underline hover:underline">Why Do I Keep Breaking Out?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-is-my-face-so-oily" className="text-sm text-accent no-underline hover:underline">Why Is My Face So Oily?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
