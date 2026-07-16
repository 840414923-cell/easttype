import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForPmsArticle() {
  const slug = "chinese-medicine-for-pms"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for PMS</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for PMS: Liver Qi, Blood, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          PMS in Chinese medicine is most often understood as Liver Qi Stagnation. The Liver governs the smooth flow of energy and emotion, and it is the organ most sensitive to stress and frustration. Before menstruation, energy and blood gather in the lower abdomen, and if Liver Qi is already stuck, this gathering creates pressure that manifests as irritability, breast tenderness, bloating, and mood swings. Other patterns include Blood Deficiency, where the body lacks the reserves to handle the premenstrual drop in blood, and Cold in the Uterus, which causes cramping and dark clots. Moving foods like rose tea and tangerine peel may help stuck patterns, while nourishing foods like jujube and dong quai may help deficient ones. This pattern can be associated with the <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant body type</Link>, and you can check your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views PMS
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the menstrual cycle is a mirror of overall health. The Liver governs the smooth flow of energy and blood, and it is responsible for ensuring that the premenstrual shift from building to releasing happens smoothly. When Liver Qi is stuck from stress, frustration, or repressed emotion, the premenstrual gathering of energy creates pressure rather than smooth flow. This pressure manifests as the classic PMS symptoms: irritability, breast tenderness, mood swings, and bloating. You can read more about this mechanism in our guide on <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A second pattern is Blood Deficiency. The body needs sufficient Blood to both build the uterine lining and sustain emotional stability. When Blood is low from poor diet, heavy periods, or chronic depletion, the premenstrual drop in blood leaves the mind unanchored. This shows up as anxiety, dizziness, insomnia, and fatigue before the period. You can read more in our guide on <Link href="/wellness/blood-deficiency" className="text-accent hover:underline">Blood Deficiency</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          A third pattern is Cold in the Uterus, where exposure to cold, cold food, or cold environments causes the blood to congeal. This leads to cramping, dark clots, and a feeling of cold in the lower abdomen. A fourth pattern is Kidney Deficiency, where deep reserves are too low to support the hormonal shift, leading to back pain, fatigue, and emotional fragility before the period. Each pattern calls for a different food direction. For a closer look, see our page on <Link href="/symptoms/why-do-i-have-pms" className="text-accent hover:underline">why you have PMS</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          PMS Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most women with PMS in TCM fall into one of four patterns. Identifying the right pattern matters because the food direction that helps one can worsen another. Moving foods that help Liver Qi Stagnation may be too draining for Blood Deficiency, while rich tonics that help deficiency may add stagnation.
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
                <td className="px-3 py-2">Irritability, breast tenderness, mood swings, bloating, sighing</td>
                <td className="px-3 py-2">Stuck Liver energy creates pressure before menstruation</td>
                <td className="px-3 py-2">Move Qi; soothe the Liver</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Blood Deficiency</td>
                <td className="px-3 py-2">Anxiety, dizziness, insomnia, fatigue, pale face before period</td>
                <td className="px-3 py-2">Body lacks Blood reserves for the premenstrual shift</td>
                <td className="px-3 py-2">Nourish Blood with warm, sweet foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cold in the Uterus</td>
                <td className="px-3 py-2">Cramping, dark clots, cold lower abdomen, better with warmth</td>
                <td className="px-3 py-2">Cold congeals blood in the uterus</td>
                <td className="px-3 py-2">Warm the uterus; move cold blood</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Kidney Deficiency</td>
                <td className="px-3 py-2">Back pain, fatigue, emotional fragility, low libido before period</td>
                <td className="px-3 py-2">Deep reserves too low to support the hormonal shift</td>
                <td className="px-3 py-2">Tonify Kidney Yin or Yang</td>
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
          What Causes PMS in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          PMS rarely comes from one cause alone. It usually builds from a combination of emotional patterns, diet, lifestyle, and constitution.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Suppressed Emotion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver is most affected by anger, frustration, and repression. When these emotions are held in, Liver Qi stagnates. Before menstruation, the body&apos;s energy naturally gathers in the lower abdomen, and if Liver Qi is already stuck, this creates the pressure and tension that define PMS. You can read more in our guide on <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Poor Diet and Blood Deficiency</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Blood is produced by the Spleen from food. Irregular eating, cold drinks, and a diet low in nourishing foods lead to Blood Deficiency. Before the period, blood naturally moves downward, and if reserves are already low, the mind and body feel the shortage as anxiety, dizziness, and fatigue.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Exposure to Cold</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Cold food, cold drinks, swimming in cold water, or sitting on cold surfaces can introduce cold into the uterus. Cold congeals blood, leading to cramping, clots, and a feeling of coldness in the lower abdomen. This pattern is often seen in women who consume iced drinks regularly.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Overwork and Depletion</h3>
        <p className="text-text2 leading-relaxed">
          Long-term overwork, insufficient sleep, and multiple pregnancies without adequate recovery deplete Kidney reserves. When Kidney energy is low, the body struggles to manage the hormonal shift before menstruation, leading to back pain, exhaustion, and emotional fragility. You can read more in our guide on <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for PMS depends on the pattern. For Liver Qi Stagnation, the direction is to move energy. For Blood Deficiency, the direction is to nourish. For Cold in the Uterus, the direction is to warm. For Kidney Deficiency, the direction is to tonify. The table below covers foods from all four directions.
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
                <td className="px-3 py-2">Moves Qi and reduces breast tenderness and bloating</td>
                <td className="px-3 py-2">Liver Qi Stagnation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dong quai</td>
                <td className="px-3 py-2">Warm, sweet, pungent</td>
                <td className="px-3 py-2">Tonifies and moves Blood; classic women&apos;s herb</td>
                <td className="px-3 py-2">Blood Deficiency</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Jujube dates</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Tonifies Spleen Qi and nourishes Blood</td>
                <td className="px-3 py-2">Blood Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Ginger brown sugar tea</td>
                <td className="px-3 py-2">Warm, sweet, pungent</td>
                <td className="px-3 py-2">Warms the uterus and moves cold blood</td>
                <td className="px-3 py-2">Cold in the Uterus</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Liver Blood and Kidney Yin</td>
                <td className="px-3 py-2">Blood and Kidney Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Kidney and Blood</td>
                <td className="px-3 py-2">Kidney Deficiency</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Longan aril</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Nourishes Heart Blood and calms the spirit</td>
                <td className="px-3 py-2">Blood Deficiency with anxiety</td>
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
          Certain foods may worsen PMS symptoms by adding stagnation, depleting Blood, or introducing cold to the uterus. Cutting back in the week before your period may reduce symptom intensity.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks.</strong> Cold congeals blood and worsens cramping. Warm drinks are always preferred before and during your period.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive caffeine.</strong> Coffee is stimulating and drying; it may worsen irritability and breast tenderness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Heating and damp-forming; it may worsen both Liver stagnation and emotional volatility.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw food.</strong> Raw salads and cold foods weaken the Spleen and reduce Blood production.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive sugar.</strong> Sugar feeds dampness and mood swings, creating energy spikes and crashes.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits in the week before your period can significantly reduce PMS severity. These habits focus on movement, warmth, rhythm, and emotional expression.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Walk daily in the week before your period.</strong> Gentle movement is the most effective way to move stuck Liver Qi and reduce premenstrual tension.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Drink warm water and ginger tea.</strong> Warmth supports blood flow and prevents cold from congealing in the uterus.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Express emotions rather than holding them in.</strong> Journaling or talking with a friend prevents Liver Qi stagnation that worsens PMS.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Eat warm, cooked meals at regular times.</strong> This supports the Spleen and stabilizes Blood production.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Apply warmth to the lower abdomen.</strong> A hot water bottle or warm pad may ease cramping and support blood flow.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Reduce stress before your period.</strong> If possible, lighten your schedule in the days before menstruation.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Track your cycle.</strong> Knowing when symptoms are coming helps you prepare with the right foods and habits.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Severe PMS that interferes with daily life, PMS with severe depression or anxiety, or PMS that does not respond to dietary changes should be evaluated by a qualified healthcare professional. PMDD (Premenstrual Dysphoric Disorder) is a more severe form of PMS that may need medical treatment. Extremely painful periods, heavy bleeding, or irregular cycles may indicate underlying conditions such as endometriosis, fibroids, or PCOS. You can read more in our guide on <Link href="/wellness/chinese-medicine-for-pcos" className="text-accent hover:underline">Chinese medicine for PCOS</Link>. Chinese medicine food therapy may complement but should never replace treatment from a licensed medical provider.
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
