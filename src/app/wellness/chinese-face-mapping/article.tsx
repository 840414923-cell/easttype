import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseFaceMappingArticle() {
  const slug = "chinese-face-mapping"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">&rsaquo;</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">&rsaquo;</span>
        <span className="text-text2">Chinese Face Mapping</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Face Mapping: What Your Face May Reveal About Your Health
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read &middot; A 2,000-year-old diagnostic tool you can use in your mirror</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese face mapping, called mian zhen, is a diagnostic method that reads facial zones, colors, and features to assess internal organ health. Each area of the face corresponds to a specific organ system. Breakouts, redness, puffiness, or color changes in a particular zone may reflect imbalances in the related organ. For example, forehead breakouts may point to digestive issues, while chin breakouts are often linked to hormonal cycles. This is a traditional assessment tool, not a medical diagnosis.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          You look in the mirror and see a pimple on your chin. Again. Same spot, every month, right before your period. Or maybe your forehead has been breaking out since you started that stressful job. Or the bridge of your nose has a faint redness that never quite goes away.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Western dermatology would say these are caused by bacteria, hormones, or clogged pores. That is true. But Chinese medicine asks a different question: why does the breakout appear in that specific spot? The answer, according to face mapping, is that each zone of your face is connected to a specific internal organ. When that organ is under stress or out of balance, the corresponding facial zone shows it.
        </p>
        <p className="text-text2 leading-relaxed">
          This is not about replacing your dermatologist. It is about adding a layer of information. Your face may be telling you something about what is happening inside your body, and Chinese medicine has been listening for over two thousand years.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The Face Zone Map
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese face mapping, the face is divided into zones, each corresponding to an organ system. Here is the complete map, what each zone reflects, and what symptoms in that zone might mean.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Face Zone</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Organ System</th>
                <th className="text-left py-2 text-text font-medium">What It May Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Forehead</td><td className="py-2 pr-3">Bladder, Digestive System</td><td className="py-2 text-text2">Stress, poor digestion, too much sugar, irregular sleep</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Temples and Brow</td><td className="py-2 pr-3">Gallbladder</td><td className="py-2 text-text2">Dehydration, sluggish lymph, unresolved frustration</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Between Brows</td><td className="py-2 pr-3">Liver</td><td className="py-2 text-text2">Alcohol, rich foods, repressed anger, food sensitivities</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Nose</td><td className="py-2 pr-3">Heart, Stomach</td><td className="py-2 text-text2">Stomach heat, poor circulation, high blood pressure indicators</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Left Cheek</td><td className="py-2 pr-3">Liver</td><td className="py-2 text-text2">Slow metabolism, sluggish liver function, toxins</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Right Cheek</td><td className="py-2 pr-3">Lungs</td><td className="py-2 text-text2">Respiratory issues, allergies, smoking, grief</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Cheeks (both)</td><td className="py-2 pr-3">Kidney, Lungs</td><td className="py-2 text-text2">Kidney depletion, hormonal changes, low immunity</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Mouth and Lips</td><td className="py-2 pr-3">Spleen, Stomach</td><td className="py-2 text-text2">Digestive weakness, cold sores, poor nutrient absorption</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Chin and Jawline</td><td className="py-2 pr-3">Kidney, Reproductive</td><td className="py-2 text-text2">Hormonal imbalance, menstrual cycle, kidney depletion</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Under Eyes</td><td className="py-2 pr-3">Kidney</td><td className="py-2 text-text2">Fluid retention, poor sleep, adrenal fatigue, fear</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Ears</td><td className="py-2 pr-3">Kidney</td><td className="py-2 text-text2">Depleted kidney energy, excessive fear, overwork</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These are traditional correlations, not confirmed medical links. Use them as conversation starters with your body, not as self-diagnosis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Facial Features May Reveal
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Beyond zones, Chinese face mapping also reads general features. Color, moisture, and texture across the entire face provide clues about your overall internal state.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Feature</th>
                <th className="text-left py-2 pr-3 text-text font-medium">What It May Mean</th>
                <th className="text-left py-2 text-text font-medium">Related Pattern</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Pale face</td><td className="py-2 pr-3 text-text2">Not enough blood or energy reaching the surface</td><td className="py-2 text-text2">Qi or Blood Deficiency</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Red face</td><td className="py-2 pr-3 text-text2">Internal heat rising upward</td><td className="py-2 text-text2">Liver Fire or Heart Heat</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Yellowish tinge</td><td className="py-2 pr-3 text-text2">Digestive system underperforming</td><td className="py-2 text-text2">Spleen Qi Deficiency</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Dark circles</td><td className="py-2 pr-3 text-text2">Kidney energy depleted, fluid retention</td><td className="py-2 text-text2">Kidney Deficiency</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Puffiness</td><td className="py-2 pr-3 text-text2">Fluid metabolism sluggish, dampness accumulating</td><td className="py-2 text-text2">Phlegm Damp or Spleen weakness</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Dry, flaky skin</td><td className="py-2 pr-3 text-text2">Not enough moisture reaching the surface</td><td className="py-2 text-text2">Blood or Yin Deficiency</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Oily skin</td><td className="py-2 pr-3 text-text2">Internal heat generating excess secretions</td><td className="py-2 text-text2">Damp Heat</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Read Your Own Face
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You can do a basic face reading at home. It takes about two minutes and requires only a mirror and natural light. Here is how:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-text2 leading-relaxed mb-4">
          <li>
            <strong className="text-text">Use natural light in the morning.</strong> Stand near a window after waking, before applying any products. Fluorescent light distorts color and makes readings unreliable.
          </li>
          <li>
            <strong className="text-text">Check your overall complexion first.</strong> Is your face pale, flushed, yellowish, or normal? Note the baseline color before looking at specific zones.
          </li>
          <li>
            <strong className="text-text">Scan zone by zone, top to bottom.</strong> Start at the forehead, move to the temples, between the brows, nose, cheeks, mouth, and chin. Look for breakouts, redness, dryness, or puffiness in each area.
          </li>
          <li>
            <strong className="text-text">Note which zones are reactive.</strong> If the same zone keeps breaking out or showing color changes, that is more meaningful than a one-time flare-up. Track patterns over a few weeks.
          </li>
          <li>
            <strong className="text-text">Cross-reference with the zone map above.</strong> If your chin breaks out before your period, that aligns with the reproductive and kidney zone. If your forehead flares during exam week, that aligns with the digestive and stress zone.
          </li>
          <li>
            <strong className="text-text">Take the body type quiz.</strong> Face mapping gives you clues, but your body type gives you the full picture. Different body types produce different facial patterns. <Link href="/quiz" className="text-accent hover:underline">Take the free quiz</Link> to find yours.
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Eastern vs. Western Perspective
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Topic</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Western Dermatology</th>
                <th className="text-left py-2 text-text font-medium">Chinese Face Mapping</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Cause of acne</td><td className="py-2 pr-3 text-text2">Bacteria, hormones, excess sebum, clogged pores</td><td className="py-2 text-text2">Internal organ imbalance showing through the corresponding face zone</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Location matters?</td><td className="py-2 pr-3 text-text2">Sometimes, hormonal acne tends to appear on jawline</td><td className="py-2 text-text2">Always, each zone maps to a specific organ system</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Approach</td><td className="py-2 pr-3 text-text2">Topical treatments, antibiotics, retinoids, hormone therapy</td><td className="py-2 text-text2">Address the underlying organ through diet, sleep, and herbs</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Skin color</td><td className="py-2 pr-3 text-text2">Evaluated for jaundice, anemia, or specific conditions</td><td className="py-2 text-text2">Read as a continuous indicator of internal balance</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Goal</td><td className="py-2 pr-3 text-text2">Clear skin through targeted skin treatments</td><td className="py-2 text-text2">Clear skin by resolving the internal imbalance underneath</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <p className="text-text2 text-sm leading-relaxed">
          <strong className="text-text">When to see a doctor:</strong> This article is for educational purposes only and is not medical advice. Face mapping cannot diagnose medical conditions. If you notice sudden skin changes, persistent rashes, unusual moles, or severe acne that does not respond to over-the-counter treatments, please consult a licensed dermatologist or healthcare provider. Some facial changes can be associated with underlying medical conditions that require proper evaluation.
        </p>
      </div>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
