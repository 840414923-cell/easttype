import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForHairLossArticle() {
  const slug = "chinese-medicine-for-hair-loss"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Hair Loss</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Hair Loss: Kidney Essence, Blood, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Hair loss in Chinese medicine is most often traced to the Kidneys and the Blood. The Kidneys store Essence, which produces marrow and nourishes the hair. The Liver stores Blood, and Blood circulates to the scalp to feed each follicle. When Kidney Essence is depleted by overwork, aging, or chronic stress, or when Blood is low from poor digestion or heavy menstruation, the hair loses its nourishment and begins to thin and fall. Nourishing foods such as black sesame, goji berries, and walnuts may help rebuild the reserves that support healthy hair. This pattern can be associated with the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link>, and you can check your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Hair Loss
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the hair is considered an extension of the Blood and a reflection of Kidney Essence. The classical text says that the Kidneys manifest in the hair. When Kidney Essence is abundant, the hair is thick, glossy, and strong. When Essence runs low through aging, overwork, or chronic depletion, the hair thins, loses color, and falls. You can read more about this in our guide on <Link href="/wellness/what-is-jing" className="text-accent hover:underline">what Jing (Essence) is</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver also plays a central role. The Liver stores Blood, and Blood nourishes the scalp. When Blood is sufficient, each hair follicle receives a steady supply of nourishment. When Blood is deficient from poor diet, heavy periods, or chronic illness, the scalp is undernourished and hair falls. This pattern often overlaps with pale complexion, brittle nails, and dizziness. You can read more in our guide on <Link href="/wellness/blood-deficiency" className="text-accent hover:underline">Blood Deficiency</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          A third pattern is Blood Heat, where excess heat in the blood dries and damages the follicles, leading to sudden hair loss with an oily or inflamed scalp. A fourth pattern is Qi and Blood Stagnation, where poor circulation to the scalp starves the follicles. Each pattern calls for a different food direction. For a closer look, see our page on <Link href="/symptoms/why-is-my-hair-falling-out" className="text-accent hover:underline">why your hair may be falling out</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Hair Loss Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with hair loss in TCM fall into one of four patterns. Identifying the right pattern matters because the food direction that helps one can worsen another. Warming tonics that help Kidney Yang may add heat to a Blood Heat pattern, while cooling foods that help Blood Heat may not nourish a deficient pattern.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What Happens</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Kidney Essence Deficiency</td>
                <td className="px-3 py-2">Gradual thinning, premature graying, weak knees, poor memory</td>
                <td className="px-3 py-2">Deep reserves too low to nourish hair follicles</td>
                <td className="px-3 py-2">Tonify Kidney Essence</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Blood Deficiency</td>
                <td className="px-3 py-2">Dry brittle hair, pale face, dizziness, worse after menstruation</td>
                <td className="px-3 py-2">Blood too low to nourish the scalp</td>
                <td className="px-3 py-2">Nourish Blood with warm, sweet foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Blood Heat</td>
                <td className="px-3 py-2">Sudden hair loss, oily or red scalp, itchy head</td>
                <td className="px-3 py-2">Excess heat dries and damages follicles</td>
                <td className="px-3 py-2">Cool blood; clear heat</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Qi and Blood Stagnation</td>
                <td className="px-3 py-2">Patchy hair loss, tight scalp, stress-related</td>
                <td className="px-3 py-2">Poor circulation starves follicles of nourishment</td>
                <td className="px-3 py-2">Move Qi and Blood to the scalp</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If several of these patterns sound familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see which fits your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Hair Loss in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Hair loss rarely comes from one cause alone. It usually builds from a combination of constitution, lifestyle, diet, and emotional patterns.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Overwork and Aging</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Kidneys store Essence, which is the body&apos;s deepest reserve. Long-term overwork, insufficient sleep, and the natural aging process all deplete Essence. When Essence drops below a certain threshold, the hair is one of the first places it shows. This is why hair thinning and graying tend to accelerate after periods of intense stress or illness. You can read more in our guide on <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Poor Diet and Blood Deficiency</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Blood is produced by the Spleen from food. Irregular eating, cold drinks, and a diet low in nourishing foods lead to Blood Deficiency. Without enough Blood, the scalp does not receive adequate circulation and the hair follicles weaken. This pattern is especially common in women after heavy periods or pregnancy.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Emotional Strain</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Stress tightens the scalp and restricts blood flow to the follicles. In TCM terms, this is Qi and Blood Stagnation. When nourishment cannot reach the hair roots, the hair falls. This type of hair loss often coincides with tension headaches and a tight feeling in the scalp.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Damp-Heat on the Scalp</h3>
        <p className="text-text2 leading-relaxed">
          A diet high in greasy, spicy, and sweet foods generates damp-heat that can rise to the scalp. This creates an oily, inflamed environment that damages follicles and leads to hair loss with an itchy, red scalp. This is more common in younger people with seborrheic patterns.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for hair loss depends on the pattern. For Kidney Essence deficiency, the direction is to tonify deeply. For Blood Deficiency, the direction is to nourish Blood. For Blood Heat, the direction is to cool. For Stagnation, the direction is to move. The table below covers foods from all four directions.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Kidney Essence and Blood; classic hair food</td>
                <td className="px-3 py-2">Kidney and Blood Deficiency</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Tonifies Kidney Yang and warms the core</td>
                <td className="px-3 py-2">Kidney Essence Deficiency (cold type)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Liver Blood and Kidney Yin</td>
                <td className="px-3 py-2">Blood and Kidney Deficiency</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mulberries</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Nourishes Blood and Yin; dark color supports hair</td>
                <td className="px-3 py-2">Blood Deficiency with heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dong quai</td>
                <td className="px-3 py-2">Warm, sweet, pungent</td>
                <td className="px-3 py-2">Tonifies and moves Blood to the scalp</td>
                <td className="px-3 py-2">Blood Deficiency and Stagnation</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Kidney and supports Blood</td>
                <td className="px-3 py-2">Kidney Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Clears blood heat; cools inflamed scalp</td>
                <td className="px-3 py-2">Blood Heat</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Jujube dates</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Tonifies Spleen Qi and nourishes Blood</td>
                <td className="px-3 py-2">Blood Deficiency (digestive type)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Certain foods may worsen hair loss by depleting reserves, generating heat, or adding dampness to the scalp. Cutting back may slow the rate of loss and support the nourishing foods.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive sugar and sweets.</strong> These weaken the Spleen, reduce Blood production, and increase dampness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Greasy and fried foods.</strong> These generate damp-heat that can rise to the scalp and damage follicles.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive cold drinks.</strong> Cold shocks the Spleen and impairs Blood production.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Heating and damp-forming; regular drinking depletes Liver Blood over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive coffee.</strong> Stimulating and drying; it may mask fatigue while deepening Kidney depletion.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits shape whether the scalp receives enough nourishment and circulation to sustain healthy hair growth. These habits focus on preservation, circulation, and stress reduction.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Sleep before 11 PM.</strong> The body restores Essence and Blood during deep sleep. Late nights accelerate depletion and hair loss.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Massage the scalp daily.</strong> Gentle scalp massage with fingertips improves circulation and moves Qi and Blood to the follicles.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Manage stress.</strong> Chronic stress tightens the scalp and restricts blood flow. Daily walking or meditation may help.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Eat warm, nourishing meals.</strong> Soups with black sesame, goji, and walnuts support the Kidney and Blood.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Avoid tight hairstyles.</strong> Tension on hair roots restricts circulation and may worsen patchy loss.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Rinse with cool water.</strong> Hot water strips the scalp of natural oils. Cool or warm water is gentler on follicles.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Be patient.</strong> Hair grows slowly. Most food-based approaches need 3 to 6 months to show visible improvement.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Sudden or patchy hair loss, hair loss with scalp inflammation, or hair loss accompanied by other symptoms like fatigue, weight changes, or irregular periods should be evaluated by a qualified healthcare professional. Thyroid disorders, iron deficiency, hormonal imbalances, and autoimmune conditions can all cause hair loss and need proper medical diagnosis. Chinese medicine food therapy may complement but should never replace treatment from a licensed medical provider.
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
