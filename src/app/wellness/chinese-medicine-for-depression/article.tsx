import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForDepressionArticle() {
  const slug = "chinese-medicine-for-depression"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Depression</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Depression: Qi Stagnation, Spleen Deficiency, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Depression in Chinese medicine is not seen as a single brain disorder. It is viewed as a signal that the body&apos;s energy has become stuck, depleted, or clouded. The most common pattern is Liver Qi Stagnation, where frustration and suppressed emotion trap energy in the chest, creating a heavy, unmoving feeling. Other patterns include Spleen Qi and Blood Deficiency, where the body is too depleted to sustain emotional stability, and Kidney Yang Deficiency, where deep exhaustion drains the will to engage with life. Moving foods like rose tea and tangerine peel may help stuck patterns, while nourishing foods like jujube and longan may help depleted ones. This pattern can be associated with the <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant body type</Link>, and you can check your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Depression
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the mind and body are not separate. Emotions are produced by the organs, and each organ system carries a specific emotional quality. The Liver governs the smooth flow of energy and emotion. When that flow is blocked by frustration, repression, or chronic stress, energy gets stuck in the chest and the person feels heavy, tight, and unable to move forward emotionally. This is Liver Qi Stagnation, and it is the most common TCM pattern behind what Western medicine calls depression. You can read more about this mechanism in our guide on <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A second pattern is Spleen Qi and Blood Deficiency. The Spleen produces Qi and Blood from food. When the Spleen is weak, the body cannot generate enough energy to sustain emotional stability. The person feels flat, unmotivated, and unable to feel pleasure. This is the depression of depletion rather than stuckness. It often overlaps with chronic fatigue and poor digestion. If this sounds familiar, you can read more in our guide on <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          A third pattern is Kidney Yang Deficiency, where the deepest warming energy of the body runs low. The person loses the will to act, engage, and connect. This is often seen in long-term, deep-seated depression accompanied by coldness, low back weakness, and exhaustion. A fourth pattern is Phlegm Dampness obstructing the mind, where heavy, sticky accumulation clouds thinking and creates a sense of mental heaviness and fogginess. Each pattern calls for a different food and lifestyle direction. For a closer look at the emotional side, see our page on <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-accent hover:underline">why your moods may be all over the place</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Depression Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with depression in TCM fall into one of four patterns, though overlap is common. Identifying the right pattern matters because the food direction that helps one can worsen another. Warming tonics that help depleted patterns may add fuel to a stagnation pattern, while moving herbs that clear stuck energy may be too draining for someone already depleted.
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
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Chest tightness, sighing, irritability, mood swings, worse with stress</td>
                <td className="px-3 py-2">Stuck Liver energy traps emotion in the chest</td>
                <td className="px-3 py-2">Move Qi; soothe the Liver</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi and Blood Deficiency</td>
                <td className="px-3 py-2">Flat mood, fatigue, poor appetite, overthinking, pale complexion</td>
                <td className="px-3 py-2">Body too depleted to sustain emotional stability</td>
                <td className="px-3 py-2">Nourish Qi and Blood with warm, sweet foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Kidney Yang Deficiency</td>
                <td className="px-3 py-2">Loss of will, deep exhaustion, coldness, low back weakness</td>
                <td className="px-3 py-2">Deepest warming energy depleted; will and drive diminish</td>
                <td className="px-3 py-2">Warm and tonify Kidney Yang</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Phlegm Damp Obstruction</td>
                <td className="px-3 py-2">Mental heaviness, fog, inability to think clearly, sticky feeling</td>
                <td className="px-3 py-2">Heavy, sticky accumulation clouds the mind</td>
                <td className="px-3 py-2">Dry dampness; clear phlegm from the mind</td>
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
          What Causes Depression in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Depression rarely comes from one cause alone. It usually builds from a combination of emotional patterns, lifestyle, and constitution.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Suppressed Emotion and Chronic Stress</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver governs the smooth flow of emotion. When feelings are consistently held in rather than expressed, Liver energy tightens and stagnates. Over time, this stuck energy creates a heavy, weighted feeling in the chest that Western medicine may label as depression. This is the most common pattern in modern, high-pressure environments.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Poor Diet and Irregular Eating</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen needs regular, warm, cooked food to produce Qi and Blood. Cold drinks, raw food diets, skipped meals, and excessive sugar weaken the Spleen over time. When the Spleen cannot generate enough energy, the person feels flat and unmotivated. This depletion-type depression often comes with digestive symptoms.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Overwork and Exhaustion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Long-term overwork without adequate rest depletes Kidney Yang, the body&apos;s deepest warming reserve. The person loses the will to engage with life and feels cold, exhausted, and disconnected. This pattern is common in people who have pushed through exhaustion for years. You can read more in our guide on <Link href="/wellness/kidney-yang-deficiency" className="text-accent hover:underline">Kidney Yang Deficiency</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Damp-Forming Diet</h3>
        <p className="text-text2 leading-relaxed">
          Dairy, sweets, fried foods, and cold drinks generate dampness. When dampness accumulates, it clouds the mind and creates a heavy, foggy feeling that mimics depressive symptoms. This pattern often overlaps with weight gain and sluggishness.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for depression depends on the pattern. For stuck Liver Qi, the direction is to move energy with aromatic, pungent foods. For Spleen and Blood deficiency, the direction is to nourish with warm, sweet foods. For Kidney Yang deficiency, the direction is to warm and tonify. The table below covers foods from all three directions so you can choose based on your pattern.
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
                <td className="px-3 py-2 font-medium text-text">Rose tea</td>
                <td className="px-3 py-2">Warm, sweet, slightly bitter</td>
                <td className="px-3 py-2">Moves Liver Qi and eases emotional tension</td>
                <td className="px-3 py-2">Liver Qi Stagnation</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Aged tangerine peel</td>
                <td className="px-3 py-2">Warm, pungent, bitter</td>
                <td className="px-3 py-2">Moves Qi, reduces chest tightness, dries damp</td>
                <td className="px-3 py-2">Liver Qi Stagnation, Phlegm Damp</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Jujube dates</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Tonifies Spleen Qi and nourishes Blood</td>
                <td className="px-3 py-2">Spleen and Blood Deficiency</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Longan aril</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Nourishes Heart Blood and calms the spirit</td>
                <td className="px-3 py-2">Spleen and Blood Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Tonifies Kidney Yang and warms the core</td>
                <td className="px-3 py-2">Kidney Yang Deficiency</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Ginger</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms the middle and supports Spleen energy</td>
                <td className="px-3 py-2">Spleen and Kidney deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Coix seed</td>
                <td className="px-3 py-2">Cool, sweet, bland</td>
                <td className="px-3 py-2">Drains dampness and clears mental fog</td>
                <td className="px-3 py-2">Phlegm Damp Obstruction</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Mint tea</td>
                <td className="px-3 py-2">Cool, pungent</td>
                <td className="px-3 py-2">Vents trapped heat and moves Liver Qi gently</td>
                <td className="px-3 py-2">Liver Qi Stagnation with heat</td>
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
          Certain foods may worsen depressive patterns by adding stagnation, depleting the Spleen, or increasing dampness. Cutting back for a few weeks may give the helpful foods room to work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks.</strong> Cold shocks the Spleen and impairs its ability to produce energy. Warm drinks are always preferred in TCM.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw food.</strong> Raw salads and raw food diets require more Spleen energy to process than the system can spare when depleted.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy and sweets.</strong> These generate dampness and phlegm, which cloud the mind and worsen mental heaviness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> While it may temporarily lift mood, alcohol is heating and damp-forming, and worsens both stagnation and depletion over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive coffee.</strong> Coffee is stimulating and drying. It may mask fatigue briefly but deepens depletion over time.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits shape whether energy stays stuck or begins to flow. These habits focus on movement, expression, rhythm, and warmth.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Walk daily for 30 minutes.</strong> Gentle movement is the single most effective way to move stuck Liver Qi. Walking outdoors is ideal.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Express emotions rather than holding them in.</strong> Journaling, talking with a trusted friend, or creative expression prevents Liver Qi stagnation.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Eat warm, cooked meals at regular times.</strong> This supports the Spleen and stabilizes energy production.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Get morning sunlight.</strong> Morning light helps regulate the body&apos;s natural rhythm and supports Yang energy.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Avoid late-night screens.</strong> The blue light and mental stimulation keep the mind racing when it should be settling.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Practice deep breathing.</strong> Slow abdominal breathing moves Qi in the chest and eases the tightness that traps emotion.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Connect with others.</strong> Isolation deepens stagnation. Even small social interactions help move energy.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Depression is a serious condition that may require professional care. If you experience persistent low mood lasting more than two weeks, loss of interest in activities, thoughts of self-harm, or difficulty functioning in daily life, please consult a qualified mental health professional immediately. Chinese medicine food therapy may complement, but should never replace, treatment from a licensed medical provider or therapist. If you are in crisis, contact your local emergency services or a crisis helpline right away.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(200,16,46,0.03)] border border-[rgba(200,16,46,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
