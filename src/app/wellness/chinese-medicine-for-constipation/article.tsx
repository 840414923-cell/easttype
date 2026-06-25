import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForConstipationArticle() {
  const slug = "chinese-medicine-for-constipation"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Constipation</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Constipation: Patterns &amp; Moistening Foods
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine does not treat all constipation the same way. Excess-type constipation, marked by hard, dry, infrequent stools with abdominal fullness, may involve Heat or Stomach Fire accumulating in the intestines. Deficient-type constipation, marked by straining with little result and tiredness afterward, may reflect Qi or Blood Deficiency, where the body lacks the pushing power to move waste along. The foods that may help depend entirely on which pattern you have. Moistening foods like sesame seeds, pear, and honey may support dry-type constipation, while warm, moving foods like radish and ginger may help stagnant-type constipation where bloating and tension are the main complaint.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Constipation
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the Large Intestine never works alone. It functions as part of a network with the Lungs and the Stomach, and normal elimination depends on three things working together. First, there must be sufficient moisture, supplied by Yin and Body Fluids, to keep the stool soft enough to pass. Second, there must be sufficient pushing power, supplied by Qi, to move waste downward and out. Third, there must be smooth energy flow, regulated largely by the Liver, so that tension and tightness do not block the passage.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When any one of these three is disrupted, constipation may result. Too little moisture dries the stool into hard pellets. Too little Qi leaves a person straining with little reward. Blocked energy flow produces a gut that feels tight, full, and reluctant to release. The Lungs also play a quiet role here, because in TCM theory the Lungs and Large Intestine are paired organs. A weak Lung system can sometimes show up as a sluggish bowel, which is why respiratory weakness and constipation occasionally appear together.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          TCM then sorts these disruptions into two broad families. Excess patterns involve too much of something, usually Heat or dryness, accumulating and blocking the intestine from above. The stool tends to be hard, dark, and dry, and the person may feel full, warm, and uncomfortable. Deficiency patterns involve too little of something, usually Qi, Blood, or fluids, so the intestine lacks what it needs to complete its job. The stool may be present but hard to push out, and the person may feel tired or weak rather than overheated.
        </p>
        <p className="text-text2 leading-relaxed">
          This excess-versus-deficiency distinction matters because the foods and habits that help one pattern may worsen another. A strongly cooling, moistening approach suited to Heat-type constipation may weaken a Qi-deficient digestive system. A warming, tonifying approach suited to Qi Deficiency may add more heat to an already hot, dry intestine. Knowing your pattern is the first step, and you can begin that exploration with our free <Link href="/quiz" className="text-accent hover:underline">body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Constipation Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most constipation in Chinese medicine falls into one of four recognized patterns. Each has a distinct character, and the patterns can overlap, so a single person may show features of two at once, especially after years of irregular habits. The table below outlines the most common ones and the approach each tends to call for.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Stool Characteristics</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Approach</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heat-type</td>
                <td className="px-3 py-2">Hard, dry lumps; dark</td>
                <td className="px-3 py-2">Strong thirst, foul breath, abdominal fullness</td>
                <td className="px-3 py-2">Clear Heat, moisten the intestine</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Qi Stagnation</td>
                <td className="px-3 py-2">Difficult even when soft</td>
                <td className="px-3 py-2">Bloating, tension, mood-related changes</td>
                <td className="px-3 py-2">Move Qi, ease the Liver</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Qi Deficiency</td>
                <td className="px-3 py-2">Straining, slow to pass</td>
                <td className="px-3 py-2">Fatigue afterward, pale complexion, weak voice</td>
                <td className="px-3 py-2">Tonify Qi, support the Spleen</td>
              </tr>
              <tr className="bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Fluid / Dryness Deficiency</td>
                <td className="px-3 py-2">Dry, rabbit-pellet stools</td>
                <td className="px-3 py-2">Dry skin and throat, low fluid intake</td>
                <td className="px-3 py-2">Moisten, build fluids</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          A few clues may help you tell these patterns apart. Excess-type patterns, Heat and Qi Stagnation, tend to produce a feeling of fullness, pressure, or warmth that builds up before a bowel movement. Deficient-type patterns, Qi Deficiency and Fluid Dryness, tend to leave a person feeling drained, dry, or weak instead.           If your constipation comes with a lot of tension, irritability, or stress, it may be related to <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>. If it comes with tiredness and weak digestion, it may point toward Spleen weakness, which we cover in our <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> guide. A weak pushing power behind the stool is also common in the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link>, where low overall energy shows up across several systems. And if your bowel habits swing the opposite way toward loose stools, our page on <Link href="/symptoms/why-do-i-have-diarrhea" className="text-accent hover:underline">why you have diarrhea</Link> explores that contrasting pattern.
        </p>
        <p className="text-text2 text-sm leading-relaxed">
          If you are unsure where your symptoms fit, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see the larger picture of your constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Constipation in TCM?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine looks for the underlying habit or strain that created the pattern, rather than treating constipation as an isolated problem. Four causes appear again and again, and most long-standing cases trace back to some combination of them.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Not Enough Warm Cooked Foods
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen and Stomach rely on warmth to process food and fluids efficiently. A diet heavy in cold drinks, raw salads, and iced foods may cool the digestive system and slow the whole tract over time. The intestines then lose the steady warmth and movement they need to pass waste. Warm, cooked meals are generally easier on a sluggish system and may help restore a more reliable rhythm.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Dehydration and Heat
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Spicy, greasy, and heavily roasted foods may generate internal Heat. That heat can dry out the intestines and reduce the moisture needed to keep stool soft. Alcohol and strong coffee have a similar drying effect on the body&apos;s fluids. When fluids run low, the stool hardens and becomes difficult to pass, which can be associated with the Heat-type pattern described above.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Lack of Movement
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Physical movement encourages Qi to circulate through the abdomen. A sedentary lifestyle, with long hours of sitting and little walking, may allow Qi to stagnate in the lower belly. Without gentle daily movement, the intestine loses some of its natural rhythm, and waste tends to sit rather than move.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Emotional Holding
        </h3>
        <p className="text-text2 leading-relaxed">
          In TCM, the Liver governs the smooth flow of Qi, and it is the organ most affected by frustration, stress, and suppressed emotion. Holding feelings in may tighten the gut and block the very flow that elimination depends on. This is why constipation can be associated with periods of stress, deadline pressure, or emotional tension that has not found an outlet.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because constipation has different roots, the foods that may help depend on your pattern. For dry-type and Heat-type patterns, moistening foods that add fluids to the intestine are the priority. For Qi-deficient patterns, the focus shifts to foods that gently strengthen the Spleen without adding cold or raw burden. The table below lists foods traditionally used to support regularity. None are quick fixes, and their effects build gradually with consistent use over weeks.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame seeds</td>
                <td className="px-3 py-2">Neutral, sweet; moistens</td>
                <td className="px-3 py-2">Dry-type / Fluid Deficiency</td>
                <td className="px-3 py-2">Ground into powder, added to porridge</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Honey</td>
                <td className="px-3 py-2">Neutral, moistens</td>
                <td className="px-3 py-2">Dry-type constipation</td>
                <td className="px-3 py-2">One teaspoon in warm water, mornings</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, moistening</td>
                <td className="px-3 py-2">Heat-type / Dry-type</td>
                <td className="px-3 py-2">Fresh, or poached when digestion is weak</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Banana</td>
                <td className="px-3 py-2">Slightly cold, moistens</td>
                <td className="px-3 py-2">Heat-type constipation</td>
                <td className="px-3 py-2">Ripe, one per day; avoid unripe</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spinach</td>
                <td className="px-3 py-2">Cool, moistening</td>
                <td className="px-3 py-2">Heat-type / Dry-type</td>
                <td className="px-3 py-2">Lightly cooked, not raw in excess</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sweet potato</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Qi Deficiency</td>
                <td className="px-3 py-2">Steamed or roasted; softens stool, tones Spleen</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Walnut</td>
                <td className="px-3 py-2">Warm, moistens intestines</td>
                <td className="px-3 py-2">Deficient / Dry-type</td>
                <td className="px-3 py-2">Small handful daily; warms Kidney</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sweet almond / almond oil</td>
                <td className="px-3 py-2">Neutral; lubricates</td>
                <td className="px-3 py-2">Dry-type constipation</td>
                <td className="px-3 py-2">A few nuts, or oil used in cooking</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Seaweed</td>
                <td className="px-3 py-2">Cold, softens</td>
                <td className="px-3 py-2">Heat-type with dryness</td>
                <td className="px-3 py-2">In soups; provides minerals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Just as some foods may support regularity, others may quietly worsen constipation, especially when fluids and warmth are already low. The items below tend to dry the intestines, add heat, or leave the stool hard and difficult to pass:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods:</strong> heavy chili and strong spices may generate Heat that dries out the intestines over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive dry roasted nuts:</strong> eaten without enough water, these may absorb moisture from the gut and worsen dryness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Astringent foods:</strong> persimmon and unripe banana are contracting in nature and may slow the passage of stool.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined white flour:</strong> baked goods made with refined flour provide little fiber and may leave the stool dry and compact.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive coffee:</strong> caffeine is diuretic and may reduce the fluids available to keep stool soft.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol:</strong> regular intake generates Heat and dryness, which can be associated with harder stools.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Regularity
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only one side of the picture. Chinese medicine places equal weight on rhythm, warmth, and gentle movement. The habits below may help restore a steadier rhythm when practiced consistently rather than in bursts:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Drink warm water first thing in the morning.</strong> A cup of warm water on waking may gently wake the digestive tract and signal the intestine to move.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat fiber-rich warm cooked foods.</strong> Vegetables, root crops, and whole grains, cooked rather than raw, provide fiber without cooling the Spleen.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Take a short walk after meals.</strong> Gentle movement after eating encourages Qi to circulate through the abdomen and may support steadier transit.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Set a daily toilet routine.</strong> Sitting at the same time each day, ideally in the morning, trains the body to expect a regular rhythm.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Massage your abdomen clockwise.</strong> Slow circular massage following the direction of the colon may encourage movement when the gut feels sluggish.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Reduce stress before meals.</strong> Eating in a tense state tightens the gut and may block the smooth flow Qi needs. A few slow breaths before eating may help.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid holding when the urge comes.</strong> Repeatedly ignoring the urge weakens the natural signal over time and may make constipation more persistent.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Certain signs need immediate medical attention rather than food therapy. These include blood in the stool, severe abdominal pain, a sudden change in bowel habits, and unexplained weight loss. Chronic constipation can also be associated with medical conditions such as irritable bowel syndrome, an underactive thyroid, or colorectal concerns. If your symptoms are severe, persistent, or worsening, please see a healthcare professional for a proper evaluation. Chinese medicine food therapy may complement but should never replace professional medical care for serious conditions. If you are unsure where your symptoms fit, our page on <Link href="/symptoms/why-am-i-always-constipated" className="text-accent hover:underline">why you are always constipated</Link> may offer useful context.
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
