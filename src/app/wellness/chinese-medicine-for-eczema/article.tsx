import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForEczemaArticle() {
  const slug = "chinese-medicine-for-eczema"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Eczema</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Eczema: Damp Heat, Blood Deficiency, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Eczema in Chinese medicine is most often understood as Damp Heat trapped in the skin. When the body cannot clear dampness and heat through normal channels, they push outward through the skin, creating the red, oozing, itchy patches that define acute eczema. In chronic cases, the repeated flare-ups deplete Blood, leading to dry, cracked skin that itches more at night. Cooling and damp-draining foods such as mung beans and coix seed may help acute patterns, while nourishing foods like black sesame and goji may help chronic dry patterns. This pattern can be associated with the <Link href="/types/damp_heat" className="text-accent hover:underline">Damp Heat body type</Link>, and you can check your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Eczema
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the skin is a mirror of internal health, not an isolated surface problem. The Lungs govern the skin, the Spleen governs fluid metabolism, and the Heart governs blood. When any of these systems are out of balance, the skin reflects it. The most common pattern behind eczema is Damp Heat. When the Spleen is too weak to transform fluids, dampness accumulates and combines with heat from poor diet or emotional stress. This sticky, hot mixture pushes outward through the skin, producing red, inflamed, weeping lesions. You can read more about this mechanism in our guide on <Link href="/wellness/spleen-dampness" className="text-accent hover:underline">Spleen Dampness</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A second pattern is Blood Deficiency with Wind. In TCM, Blood nourishes and moistens the skin. When Blood is depleted by chronic illness, poor diet, or repeated flare-ups, the skin becomes dry, flaky, and intensely itchy. The itching tends to worsen at night when the body is at rest and the lack of nourishment becomes more noticeable. This pattern often overlaps with pale complexion and brittle nails. You can read more in our guides on <Link href="/wellness/blood-deficiency" className="text-accent hover:underline">Blood Deficiency</Link> and <Link href="/symptoms/why-is-my-skin-so-dry" className="text-accent hover:underline">why your skin may be so dry</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          A third pattern is Spleen Deficiency with Dampness, where weak digestion allows dampness to accumulate without the intense heat. This produces eczema that is more swollen, oozing, and sluggish rather than red and hot. A fourth pattern is Kidney Yin Deficiency, where deep cooling reserves run low and the skin becomes chronically dry and thin. Each pattern calls for a different food direction. For a closer look, see our page on <Link href="/symptoms/why-do-i-have-eczema" className="text-accent hover:underline">why eczema happens</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Eczema Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with eczema in TCM fall into one of four patterns. Identifying the right pattern matters because the food direction that helps one can worsen another. Cooling foods that help acute Damp Heat may not help a chronic dry pattern, while rich nourishing foods that help Blood Deficiency may add dampness to an acute flare.
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
                <td className="px-3 py-2 font-medium text-text">Damp Heat</td>
                <td className="px-3 py-2">Red, oozing, hot lesions, intense itching, worse in summer</td>
                <td className="px-3 py-2">Sticky heat pushes outward through the skin</td>
                <td className="px-3 py-2">Clear heat; drain dampness</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Blood Deficiency with Wind</td>
                <td className="px-3 py-2">Dry, flaky, cracked skin, itching worse at night</td>
                <td className="px-3 py-2">Blood too low to nourish and moisten the skin</td>
                <td className="px-3 py-2">Nourish Blood; moisten the skin</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Deficiency with Damp</td>
                <td className="px-3 py-2">Swollen, oozing, sluggish lesions, fatigue, loose stools</td>
                <td className="px-3 py-2">Weak digestion allows dampness to accumulate</td>
                <td className="px-3 py-2">Strengthen Spleen; drain damp gently</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Chronic dry thin skin, worse with age, night itching</td>
                <td className="px-3 py-2">Deep cooling reserves too low to moisten skin</td>
                <td className="px-3 py-2">Nourish Kidney Yin; moisten deeply</td>
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
          What Causes Eczema in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Eczema rarely comes from one cause alone. It usually builds from a combination of diet, digestive weakness, emotional stress, and constitution.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Damp-Heat Diet</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Spicy food, alcohol, fried dishes, and excessive sweets generate dampness and heat in the digestive system. When the Spleen cannot process this load, the damp-heat mixture is pushed outward through the skin as eczema. This is the most common cause of acute flare-ups.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Weak Digestion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen transforms food and fluids. When it is weak from irregular eating, cold drinks, or overwork, fluids accumulate as dampness rather than being processed and eliminated. This dampness shows up on the skin as oozing, swollen lesions.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Stress and Emotion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver governs the smooth flow of energy. When stress and frustration stagnate Liver energy, it generates heat that combines with existing dampness to create the red, inflamed quality of eczema flare-ups. You can read more in our guide on <Link href="/wellness/liver-fire" className="text-accent hover:underline">Liver Fire</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Depletion from Chronic Illness</h3>
        <p className="text-text2 leading-relaxed">
          Long-term eczema, repeated courses of steroids, or chronic illness deplete Blood and Yin. When the body lacks the nourishment to maintain the skin barrier, eczema shifts from the acute red, oozing pattern to the chronic dry, itchy pattern that is harder to treat topically.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for eczema depends on the pattern and stage. For acute Damp Heat, the direction is to cool and drain. For chronic Blood Deficiency, the direction is to nourish and moisten. For Spleen Deficiency, the direction is to strengthen digestion. The table below covers foods from all directions.
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
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Clears heat and detoxifies the skin</td>
                <td className="px-3 py-2">Damp Heat (acute)</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Coix seed</td>
                <td className="px-3 py-2">Cool, sweet, bland</td>
                <td className="px-3 py-2">Drains dampness and clears skin heat</td>
                <td className="px-3 py-2">Damp Heat, Spleen Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Blood and moistens dry skin</td>
                <td className="px-3 py-2">Blood Deficiency (chronic)</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Liver Blood and Kidney Yin</td>
                <td className="px-3 py-2">Blood and Yin Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cools heat and moistens the skin</td>
                <td className="px-3 py-2">Damp Heat with dryness</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens Spleen without adding heat</td>
                <td className="px-3 py-2">Spleen Deficiency with Damp</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus seed</td>
                <td className="px-3 py-2">Neutral, sweet, astringent</td>
                <td className="px-3 py-2">Strengthens Spleen and reduces oozing</td>
                <td className="px-3 py-2">Spleen Deficiency with oozing</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Lily bulb</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Nourishes Lung Yin and moistens skin</td>
                <td className="px-3 py-2">Kidney Yin Deficiency</td>
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
          Certain foods may trigger or worsen eczema by adding heat, generating dampness, or irritating the skin from within. Cutting back during flare-ups may reduce redness and itching.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy and fried foods.</strong> These add fuel to Damp Heat and may trigger acute red, oozing flare-ups.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Heating and damp-forming; regular drinking may worsen both acute and chronic eczema.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy.</strong> Generates dampness and phlegm, which can worsen oozing and swelling patterns.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive sweets and sugar.</strong> Sugar feeds dampness and inflammation, prolonging flare-ups.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Shrimp and shellfish.</strong> In TCM, these are considered warming and damp-triggering foods that may aggravate skin conditions.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily skin habits and lifestyle shape how often eczema flares and how long it takes to settle. These habits focus on cooling, moistening, and reducing inflammation from the inside out.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Identify and avoid trigger foods.</strong> Keep a food-skin diary for two weeks to find your personal triggers.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Moisturize from within.</strong> Drink warm water throughout the day and include moistening foods like pear and lily bulb.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid hot showers.</strong> Hot water strips the skin barrier and worsens dryness. Use warm water and moisturize immediately after.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Manage stress.</strong> Stress stagnates Liver energy and generates heat that triggers flare-ups. Daily breathing exercises may help.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Eat warm, cooked foods.</strong> Cold and raw foods weaken the Spleen and increase dampness that shows up on the skin.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Sleep before 11 PM.</strong> The body repairs skin during rest. Late nights deplete Yin and worsen dry, itchy skin.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid scratching.</strong> Scratching damages the skin barrier and creates more heat and inflammation. Apply a cool compress instead.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Eczema that is widespread, infected, or not responding to dietary changes should be evaluated by a qualified healthcare professional. Signs of infection include increased pain, warmth, pus, or fever. Severe or chronic eczema may need prescription topical treatments. Chinese medicine food therapy may complement but should never replace treatment from a licensed medical provider or dermatologist.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
