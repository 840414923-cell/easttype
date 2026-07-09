import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForMigrainesArticle() {
  const slug = "chinese-medicine-for-migraines"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Migraines</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Migraines: Liver Fire, Blood Deficiency, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Migraines in Chinese medicine are most often understood as Liver Fire or Liver Yang rising upward to disturb the head. The Liver governs the smooth flow of energy, and when frustration, stress, or repressed emotion cause that energy to stagnate and ignite, heat rises to the head and produces the throbbing, intense pain of a migraine. Other patterns include Blood Deficiency, where the head lacks nourishment, and Phlegm Dampness, where heavy accumulation clouds the head. Cooling foods such as chrysanthemum and mung beans may help clear liver heat, while nourishing foods like goji and black sesame may help blood-deficient types. This pattern can be associated with the <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant body type</Link>, and you can check your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Migraines
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the head is the meeting point of all Yang channels. When energy flows smoothly, the head is clear and comfortable. Migraines happen when energy rebels upward instead of flowing down. The most common pattern is Liver Fire rising. The Liver governs the smooth flow of energy and emotion. When frustration and stress cause that flow to stagnate, the stuck energy generates heat, and that heat rises to the head. This is why many migraines are triggered by emotional stress and feel throbbing, hot, and intense. You can read more about this mechanism in our guides on <Link href="/wellness/liver-fire" className="text-accent hover:underline">Liver Fire</Link> and <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A second pattern is Blood Deficiency. In TCM, Blood nourishes the head and anchors the mind. When Blood is low, the head does not receive enough nourishment, and the resulting headache tends to be dull, lingering, and worse after exertion or menstruation. This pattern often overlaps with dizziness and blurry vision. You can read more in our guide on <Link href="/wellness/blood-deficiency" className="text-accent hover:underline">Blood Deficiency</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          A third pattern is Phlegm Dampness obstructing the head. When the Spleen is too weak to transform fluids, dampness accumulates and rises as phlegm to cloud the head. This migraine feels heavy, foggy, and sluggish, often with nausea and a thick tongue coating. A fourth pattern is Kidney Essence Deficiency, where deep reserves run low and the head lacks foundational nourishment. Each pattern calls for a different food direction. For a closer look, see our page on <Link href="/symptoms/why-do-i-have-headaches" className="text-accent hover:underline">why headaches happen</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Migraine Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with migraines in TCM fall into one of four patterns. Identifying the right pattern matters because the food direction that helps one can worsen another. Cooling foods that help Liver Fire may not help a Blood Deficiency migraine, while tonifying foods that help deficiency may add fuel to a Fire pattern.
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
                <td className="px-3 py-2 font-medium text-text">Liver Fire Rising</td>
                <td className="px-3 py-2">Throbbing temporal pain, red face, irritability, bitter taste</td>
                <td className="px-3 py-2">Stagnant Liver Qi generates heat that rises to the head</td>
                <td className="px-3 py-2">Clear heat; cool the Liver</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Blood Deficiency</td>
                <td className="px-3 py-2">Dull lingering headache, dizziness, pale face, worse after period</td>
                <td className="px-3 py-2">Head lacks Blood nourishment</td>
                <td className="px-3 py-2">Nourish Blood with warm, sweet foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Phlegm Damp Obstruction</td>
                <td className="px-3 py-2">Heavy foggy headache, nausea, thick tongue coating</td>
                <td className="px-3 py-2">Damp accumulation clouds the head</td>
                <td className="px-3 py-2">Dry dampness; resolve phlegm</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Kidney Essence Deficiency</td>
                <td className="px-3 py-2">Deep aching headache, dizziness, weak knees, poor memory</td>
                <td className="px-3 py-2">Deep reserves too low to nourish the brain</td>
                <td className="px-3 py-2">Tonify Kidney Essence</td>
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
          What Causes Migraines in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Migraines rarely come from one cause alone. They usually build from a combination of emotional patterns, diet, lifestyle, and constitution.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Suppressed Anger</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver is most affected by anger and frustration. When these emotions are held in rather than expressed, Liver Qi stagnates and generates Fire that rises to the head. This is the most common trigger for stress-related migraines. You can read more about the emotional connection in our guide on <Link href="/symptoms/why-do-i-feel-anxious" className="text-accent hover:underline">why you feel anxious</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Irregular Eating and Poor Diet</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen produces Blood from food. Skipping meals, cold drinks, and excessive raw food weaken the Spleen and lead to Blood Deficiency headaches. Without enough Blood to nourish the head, migraines become more frequent and harder to shake.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Overwork and Exhaustion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Long-term overwork depletes Kidney Essence. The brain is nourished by Kidney Essence, and when it runs low, headaches with dizziness and memory issues appear. This pattern is common in people who have pushed through exhaustion for years.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Hormonal Changes</h3>
        <p className="text-text2 leading-relaxed">
          Menstruation, pregnancy, and menopause all affect Blood and Liver energy. Many women experience migraines before or during their period when Blood drops. You can read more about the menstrual connection in our guide on <Link href="/wellness/chinese-medicine-for-pms" className="text-accent hover:underline">Chinese medicine for PMS</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for migraines depends on the pattern. For Liver Fire, the direction is to cool and clear heat. For Blood Deficiency, the direction is to nourish. For Phlegm Damp, the direction is to dry and drain. The table below covers foods from all directions so you can choose based on your pattern.
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
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum tea</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears Liver heat and cools the head</td>
                <td className="px-3 py-2">Liver Fire Rising</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Strong cooling action; clears heat from the body</td>
                <td className="px-3 py-2">Liver Fire Rising</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Liver and Kidney Blood</td>
                <td className="px-3 py-2">Blood Deficiency</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Blood and Kidney Essence</td>
                <td className="px-3 py-2">Blood and Kidney Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears heat and supports Liver function</td>
                <td className="px-3 py-2">Liver Fire Rising</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Coix seed</td>
                <td className="px-3 py-2">Cool, sweet, bland</td>
                <td className="px-3 py-2">Drains dampness and clears mental fog</td>
                <td className="px-3 py-2">Phlegm Damp Obstruction</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears heat while supporting digestion</td>
                <td className="px-3 py-2">Liver Fire with digestive weakness</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Tonifies Spleen and Kidney gently</td>
                <td className="px-3 py-2">Kidney Essence Deficiency</td>
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
          Certain foods may trigger or worsen migraines by adding heat, generating dampness, or overstimulating the Liver. Cutting back during flare-ups may reduce frequency and intensity.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy and fried foods.</strong> These add fuel to Liver Fire and may trigger throbbing, hot migraines.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Heating and damp-forming; regular drinking may add fuel to both Fire and Phlegm patterns.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee.</strong> Stimulating and drying; it may trigger migraines in sensitive people and deepen depletion over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive chocolate.</strong> Contains compounds that may trigger migraines in some individuals.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold drinks.</strong> Weaken the Spleen and contribute to damp accumulation that clouds the head.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits shape how often migraines strike and how intensely they hit. These habits focus on prevention, stress management, and stable energy.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Identify and avoid trigger foods.</strong> Keep a headache diary for two weeks to find your personal triggers.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Practice stress management.</strong> Daily meditation or breathing exercises prevent Liver Qi stagnation that leads to Fire.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Get regular sleep.</strong> Irregular sleep disrupts the body&apos;s natural rhythm and can trigger migraines.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Stay hydrated.</strong> Dehydration is a common and easily preventable migraine trigger.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Exercise moderately.</strong> Gentle movement prevents stagnation; avoid intense exercise during an active migraine.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Apply cool compresses.</strong> For Liver Fire migraines, a cool cloth on the forehead may help draw heat down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Eat at regular times.</strong> Stable blood sugar supports Spleen function and prevents deficiency-related migraines.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Migraines that are sudden, severe, or different from your usual pattern need medical evaluation. Seek emergency care for the worst headache of your life, headache with fever or stiff neck, or headache after head injury. Frequent migraines that interfere with daily life should be evaluated by a neurologist. Chinese medicine food therapy may complement but should never replace treatment from a licensed medical provider.
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
