import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForWeightLossArticle() {
  const slug = "chinese-medicine-for-weight-loss"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Weight Loss</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Weight Loss: Body Types, Dampness, and Metabolism
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine does not view all weight gain the same way. The most common pattern is Spleen Dampness, where weak digestion creates heavy, sticky deposits that the body cannot easily clear. Other patterns can be associated with cold and sluggish function (Yang Deficiency) or with stress-driven eating and bloating that shifts with mood (Qi Stagnation). Each pattern may call for a different combination of warming, draining, or moving foods. Addressing the underlying pattern may support healthy weight management more effectively than generic calorie restriction alone. TCM does not promise rapid weight loss, and changes tend to appear gradually over weeks or months rather than overnight. If you are unsure which pattern fits you, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> may help point you in the right direction.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Weight Gain
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In traditional Chinese medicine (TCM), stubborn weight is often viewed as dampness and phlegm that the Spleen cannot fully process. The Spleen is the organ responsible for turning food and fluids into usable energy and clear waste. When it is strong, it separates the useful part of what you eat from the part that needs to leave. When it is weak, the unprocessed fluids accumulate and settle as dampness, which can thicken over time into phlegm.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This framework differs from the Western calorie model, which treats weight as a balance of energy in versus energy out. The TCM view asks a slightly different question. Not just how much you eat, but how well your body processes what you eat. A weak Spleen may store more of even a modest intake as damp mass, while a strong Spleen may move the same intake through without trouble.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Both perspectives can be useful, and they are not mutually exclusive. The calorie model helps with portion awareness, while the TCM model helps explain why two people with similar habits may respond very differently. It also helps explain why some weight feels heavy, soft, and puffy rather than firm. This heavy, fluid quality is a hallmark of damp-related weight in particular.
        </p>
        <p className="text-text2 leading-relaxed">
          A few points are worth stating plainly. TCM does not promise rapid weight loss. Food therapy in this tradition is gradual, and changes tend to show up slowly in how the body feels and functions rather than on a scale. The aim is steadier energy, lighter limbs, clearer thinking, and better digestion, with body composition shifting as a secondary effect. Anyone expecting quick results may be disappointed, and anyone looking for gentle, sustained change may find this approach better suited to their body.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Three Weight-Related Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine groups weight concerns into several broad patterns. The three below cover most of the people who struggle with stubborn weight, though real cases often blend more than one. Knowing your dominant pattern can help you choose foods and habits that fit your body rather than working against it.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Body Type</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Approach</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Dampness</td>
                <td className="px-3 py-2">Phlegm Damp</td>
                <td className="px-3 py-2">Heavy feeling, sluggishness, sticky stools, thick tongue coating</td>
                <td className="px-3 py-2">Drain dampness, strengthen the Spleen</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Spleen and Kidney Yang Deficiency</td>
                <td className="px-3 py-2">Yang Deficient</td>
                <td className="px-3 py-2">Cold hands and feet, pale complexion, slow digestion, cold-type weight</td>
                <td className="px-3 py-2">Warm the middle and warm the body</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Qi Stagnant</td>
                <td className="px-3 py-2">Emotional eating, bloating that rises and falls with mood, frequent sighing</td>
                <td className="px-3 py-2">Move energy, ease tension</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Each pattern is paired with a body type in our nine-type system, and the foods that help one pattern can sometimes work against another. To see which one matches your constitution, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> takes about five minutes and places your signs in context.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Why Some People Hold Weight More Easily
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Some people seem to hold onto weight no matter how carefully they eat. Chinese medicine offers a few reasons why this can happen, and they usually trace back to one of three underlying tendencies. If pounds feel stubborn despite reasonable habits, one of these may be involved.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Weak Spleen Function</h3>
        <p className="text-text2 leading-relaxed mb-4">
          When Spleen Qi is low, the body cannot metabolize fluids efficiently. The fluids that should be circulated or excreted instead pool and stagnate, creating dampness that accumulates as heavy mass. This is one reason two people can eat similar meals and respond differently. The stronger Spleen processes the same food cleanly, while the weaker one stores more of it as damp deposits. If weak digestion is part of your picture, our <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency guide</Link> covers the related signs and foods in more detail.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Cold and Slow Metabolism</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Yang Deficient types run cold, meaning their metabolic fire is low. In TCM terms, Yang is the warming, activating force that drives all function. When Yang is deficient, food is more likely to be stored than burned. These individuals often feel chilly, tire easily, and notice that cold drinks and raw foods leave them feeling worse rather than lighter. The cold can also slow the whole system, which may reinforce the feeling of heaviness.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Phlegm Damp body types are naturally prone to holding weight. Their constitution handles fluids more slowly from the start, so dampness builds more easily and takes longer to clear. This is not a flaw or a failure of willpower; it is a starting condition that can be supported with the right foods and habits. If this sounds like you, the <Link href="/types/phlegm_damp" className="text-accent hover:underline">Phlegm Damp body type</Link> page walks through the full set of signs and recommendations. If weight keeps creeping up regardless of effort, our guide on <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-accent hover:underline">why you keep gaining weight</Link> looks at several TCM contributors.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Support Healthy Weight
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the first-line tool in TCM for supporting healthy weight. The general principle is to favor warm, cooked foods that drain dampness, strengthen the Spleen, or move energy, and to reduce the cold and heavy items that add to the load. The foods listed below have a long history of use for this purpose. None of them are quick fixes, and none will melt weight on their own, but used regularly over weeks they may help the body process fluids and food more smoothly. For the related pattern of heavy, sticky deposits, our <Link href="/wellness/spleen-dampness" className="text-accent hover:underline">Spleen Dampness guide</Link> goes deeper on the drying approach.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Adzuki beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Drain dampness, support fluid metabolism</td>
                <td className="px-3 py-2">Boiled in soups, teas, or sweet soups</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Coix seed (Job&apos;s tears)</td>
                <td className="px-3 py-2">Cool, bland</td>
                <td className="px-3 py-2">Drains dampness while strengthening the Spleen</td>
                <td className="px-3 py-2">Cooked into porridge or soups</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Winter melon</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Promotes fluid metabolism, gentle diuretic</td>
                <td className="px-3 py-2">Simmered in light soups</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Green tea</td>
                <td className="px-3 py-2">Cool, bitter</td>
                <td className="px-3 py-2">Moves Qi, clears heat</td>
                <td className="px-3 py-2">Steeped warm, 1 to 3 cups a day</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Hawthorn</td>
                <td className="px-3 py-2">Warm, sour</td>
                <td className="px-3 py-2">Traditionally used to digest fats and heavy meals</td>
                <td className="px-3 py-2">Brewed as tea, often after meals</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus leaf</td>
                <td className="px-3 py-2">Cool, bitter</td>
                <td className="px-3 py-2">Reduces dampness, used historically for damp weight</td>
                <td className="px-3 py-2">Dried and steeped as tea</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens the Spleen, supports digestion</td>
                <td className="px-3 py-2">Steamed, boiled, or added to porridge</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Radish / daikon</td>
                <td className="px-3 py-2">Cool, pungent</td>
                <td className="px-3 py-2">Moves Qi, helps digest food</td>
                <td className="px-3 py-2">Cooked in soups, stews, or stir-fries</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Barley tea</td>
                <td className="px-3 py-2">Cool, bland</td>
                <td className="px-3 py-2">Drains dampness, gentle on digestion</td>
                <td className="px-3 py-2">Roasted grain steeped in hot water</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If pounds feel stuck despite your efforts, the guide on <Link href="/symptoms/why-cant-i-lose-weight" className="text-accent hover:underline">why you can&apos;t lose weight</Link> explores several TCM reasons beyond food alone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Worsen Dampness and Weight
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Some foods make the underlying patterns worse by adding dampness, cold, or stagnation. Limiting these can make the helpful foods above far more effective. You do not have to cut them out entirely, but reducing how often and how much you have may matter more than any single healthy food you add.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy products.</strong> Milk, cheese, cream, and ice cream are seen as the most damp-forming category in TCM. They are heavy, cold, and slow to process.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar and sweets.</strong> Concentrated sugar burdens the Spleen and may thicken the body&apos;s fluids over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold drinks and ice water.</strong> Cold weakens the Spleen&apos;s processing power and slows the circulation of fluids.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried and greasy foods.</strong> Heavy and slow to break down, these may add both dampness and heat to the system.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw foods and salads.</strong> Raw items require extra Spleen energy to warm and process before the body can use them.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Strongly damp-forming in TCM theory, especially beer and sweet liquors.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Healthy Metabolism
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Foods work best alongside habits that keep the system warm and moving. The daily practices below may support healthy metabolism over time. None of them are drastic, but applied consistently they can shift how the body handles fluids and food.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Exercise daily enough to sweat.</strong> Dampness leaves the body partly through sweat, so regular movement that warms you up may be one of the most direct tools available.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat all meals warm and cooked.</strong> Warm food supports the Spleen and avoids the cold, raw items that add to the damp load.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Never skip breakfast.</strong> In the TCM body clock, 7 to 9 AM is Stomach time and 9 to 11 AM is Spleen time, making breakfast the meal your digestion is most ready to receive.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Stop eating three hours before bed.</strong> Late food and drink are more likely to settle as dampness, since the body&apos;s fluid-processing power is lower at night.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Drink warm water, not cold.</strong> Warm or room-temperature water keeps the Spleen functioning, while ice water tends to slow it down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Sleep enough, ideally before 11 PM.</strong> In TCM theory, 11 PM to 3 AM is when the Liver and Gallbladder rest and recover, which supports overall metabolism.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Reduce emotional eating.</strong> Stress-driven eating often points to Liver Qi Stagnation. Addressing the stress through movement, breathing, or rest may ease the urge to snack.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Sudden or unexplained weight changes can be associated with thyroid conditions, hormonal imbalances, medication effects, or other medical issues that need proper diagnosis. If your weight is changing rapidly, if you have other symptoms such as fatigue, hair loss, or changes in appetite, or if lifestyle changes are not helping, please consult a healthcare professional. Chinese medicine food therapy may complement, but never replaces, professional medical care for serious conditions.
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
