import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function StomachHeatArticle() {
  const slug = "stomach-heat"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Stomach Heat</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Stomach Heat in Chinese Medicine: Signs, Causes, and Cooling Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Stomach Heat occurs when the digestive fire burns too intensely. Instead of warm, steady processing, the Stomach overheats. The digestive fire, which normally helps break food down, grows excessive and scorches the body&apos;s fluids. Signs may include a burning sensation in the stomach, excessive hunger, foul bad breath, mouth ulcers or canker sores, acid reflux, a strong thirst for cold drinks, and red or swollen gums. This pattern can be associated with too much spicy food, alcohol, barbecue, and emotional stress held in the gut. Cooling foods like mung beans, cucumber, pear, and lotus root may help bring the digestive fire back into balance. You can check whether this fits your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Stomach Heat in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In traditional Chinese medicine, the Stomach (胃, wèi) works as a pair with the Spleen. The two organs divide the labor of digestion. The Stomach receives food and drink and breaks them down, much like a cooking pot set over a flame. The Spleen then takes what the Stomach has prepared and turns it into usable energy and blood. A certain amount of warmth in the Stomach is not only normal but necessary. This warmth, sometimes called Stomach fire or digestive fire, is what allows food to be cooked and processed rather than sitting cold and stagnant in the gut.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Problems appear when that fire burns too hot. When Stomach fire becomes excessive, it scorches the body&apos;s fluids and creates a state of internal inflammation. The Stomach dries out, and heat rises upward along the natural pathway of the Stomach channel, reaching the mouth, gums, and throat. This is why the most visible signs of Stomach Heat often show up above the diaphragm. Bad breath, mouth ulcers, bleeding gums, and a sore or burning throat are all expressions of that rising heat. Down in the digestive tract, the excess fire speeds up processing in an unhelpful way, producing ravenous hunger, a burning stomach, and reflux that pushes contents the wrong direction.
        </p>
        <p className="text-text2 leading-relaxed">
          Several factors may fan the flames. A diet heavy in spicy food, alcohol, coffee, and deep-fried or roasted dishes adds constant fuel. Eating very large meals, or going long stretches without food and then overeating, can also strain the system. Emotional stress, especially frustration and anger that is held in rather than expressed, may generate heat through the close relationship between the Liver and the Stomach. It helps to understand that Stomach Heat is not the same thing as stomach acid in Western medicine, even though acid reflux is one of the most common points of overlap. For a broader look at foods that address heat patterns, see our guide on <Link href="/wellness/cooling-foods-chinese-medicine" className="text-accent hover:underline">cooling foods in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Stomach Heat
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Stomach Heat tend to cluster around two themes. The first is heat that you can feel directly, or that shows up visibly in the mouth and gums. The second is a digestive system that runs too fast and too hot. You might recognize some of these signs without recognizing all of them. A pattern is usually suggested when several appear together and persist over weeks rather than coming and going in a day. The table below describes the most common signs, how each one may feel from the inside, and how Chinese medicine explains it.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Sign</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What It May Feel Like</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Explanation</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Burning stomach pain</td>
                <td className="px-3 py-2">A gnawing or scorching feeling, often before or after eating</td>
                <td className="px-3 py-2">Excess fire directly inflames the Stomach lining</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Excessive appetite (always hungry)</td>
                <td className="px-3 py-2">Feeling hungry again soon after a full meal</td>
                <td className="px-3 py-2">Fire digests food too fast, leaving you empty</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Bad breath (foul, hot)</td>
                <td className="px-3 py-2">Strong, unpleasant odor that brushing may not fix</td>
                <td className="px-3 py-2">Heat rises up the Stomach channel to the mouth</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mouth ulcers or canker sores</td>
                <td className="px-3 py-2">Painful sores on the tongue, gums, or inner cheeks</td>
                <td className="px-3 py-2">Stomach heat flares into the mouth and tongue</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Acid reflux / heartburn</td>
                <td className="px-3 py-2">Sour liquid rising, burning behind the breastbone</td>
                <td className="px-3 py-2">Heat pushes Stomach contents upward against their flow</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Thirst for cold drinks</td>
                <td className="px-3 py-2">Craving ice water or cold beverages, little relief from warm drinks</td>
                <td className="px-3 py-2">Fire scorches fluids, leaving the body dry and hot</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Red or swollen, bleeding gums</td>
                <td className="px-3 py-2">Gums that look red, feel tender, or bleed when brushing</td>
                <td className="px-3 py-2">The Stomach channel passes through the gums; heat inflames them</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          A burning stomach paired with bad breath and constant hunger is one of the more distinctive combinations. If acid reflux is your main concern, you can read more about <Link href="/symptoms/why-do-i-have-acid-reflux" className="text-accent hover:underline">why acid reflux happens</Link>, and if bad breath is the most noticeable sign, see our page on <Link href="/symptoms/why-do-i-have-bad-breath" className="text-accent hover:underline">why bad breath occurs</Link>. To see whether Stomach Heat matches your overall constitution, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Stomach Heat?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Stomach Heat rarely appears from a single cause. It usually builds up through a combination of dietary habits, emotional patterns, and irregular eating routines. Most people who develop this pattern can identify with more than one of the factors below. People with the <Link href="/types/damp_heat" className="text-accent hover:underline">Damp Heat body type</Link> may be especially prone to this pattern, since their constitution already runs warm.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Dietary Triggers</h3>
        <p className="text-text2 leading-relaxed mb-4">
          What you eat has the most direct influence on Stomach fire. Foods that are themselves hot and spicy act like kindling. Chili, black pepper, heavy curries, and roasted snacks add warmth to a system that may already be running hot. Alcohol and spirits are strongly heating in Chinese medicine terms. Coffee is stimulating and drying. Lamb and venison are among the most warming animal proteins. Deep-fried and barbecue foods concentrate heat during the cooking process. When several of these are eaten regularly, the Stomach fire gets steadily larger rather than dying down between meals. You can read more about this overlap in our article on <Link href="/symptoms/why-do-i-feel-sick-after-eating" className="text-accent hover:underline">why you might feel sick after eating</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Emotional Stress</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the Liver and the Stomach are close neighbors. Suppressed anger, chronic frustration, and irritability can cause the Liver&apos;s energy to push sideways into the Stomach, generating heat in the process. This is the Liver-Stomach connection, and it helps explain why digestive symptoms often flare during stressful periods. When frustration is held in the gut rather than released, the heat has nowhere to go and accumulates over time. The pattern can become self-reinforcing, since an overheated Stomach tends to make a person feel more irritable and restless.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Irregular Eating Patterns</h3>
        <p className="text-text2 leading-relaxed">
          The Stomach functions best with steady, predictable input. Eating very large meals overwhelms its capacity and creates excess heat as the system works overtime to process the load. Eating late at night forces digestion to happen when the body should be cooling down and resting. Skipping meals and then overeating swings the system from one extreme to the other. People who describe a habit of going too long without food and then eating heavily often point to this pattern as a trigger for their burning stomach and reflux.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods That May Help Stomach Heat
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the most direct way to address Stomach Heat. The guiding principle is simple: choose foods that are cool or cold in nature, moistening, and gentle on the digestive tract, while avoiding anything that adds more fuel to the fire. Mung beans are considered one of the strongest cooling foods in the Chinese medicine pantry. Hydrating fruits and vegetables, bitter greens, and light teas also play a role. The way you prepare these foods matters. Steaming, light boiling, and serving foods at room temperature preserve their cooling effect, while deep-frying or heavy roasting adds heat back in. The foods below have been used for generations to help clear Stomach Heat, and small amounts eaten regularly tend to work better than occasional large portions. For a wider view, see our guide on <Link href="/wellness/cooling-foods-chinese-medicine" className="text-accent hover:underline">cooling foods in Chinese medicine</Link>.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Why It May Help</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Cooked as soup or thin congee</td>
                <td className="px-3 py-2">Strongest heat-clearing food; supports fluid balance</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cucumber</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten raw or lightly salted</td>
                <td className="px-3 py-2">Hydrating and gently cooling; easy on the Stomach</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
                <td className="px-3 py-2">Cools heat and moistens the lungs and throat</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Sliced into soups or stir-fried with water</td>
                <td className="px-3 py-2">Clears heat and supports digestion; rich in moisture</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Watermelon</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Eaten fresh, especially in summer</td>
                <td className="px-3 py-2">Drains heat through urine; very hydrating</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bitter gourd</td>
                <td className="px-3 py-2">Cold, bitter</td>
                <td className="px-3 py-2">Stir-fried, blanched, or added to soup</td>
                <td className="px-3 py-2">Bitter flavor directs heat downward; clears Stomach fire</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Green tea</td>
                <td className="px-3 py-2">Cool, bitter and sweet</td>
                <td className="px-3 py-2">Brewed light, drunk warm not scalding</td>
                <td className="px-3 py-2">Gentle cooling; clears heat without over-drying</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Tomato</td>
                <td className="px-3 py-2">Cool, sweet and sour</td>
                <td className="px-3 py-2">Eaten raw, in soup, or lightly cooked</td>
                <td className="px-3 py-2">Cooling and moistening; supports Stomach fluids</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Millet congee</td>
                <td className="px-3 py-2">Cool to neutral, sweet</td>
                <td className="px-3 py-2">Cooked as a thin porridge</td>
                <td className="px-3 py-2">Cooling and easy to digest; soothes an overheated Stomach</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit or Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because Stomach Heat is fundamentally a pattern of too much warmth and too little moisture, the foods below may worsen the imbalance by adding heat, drying the system, or pushing the digestive fire even higher. Limiting them for a few weeks may give the cooling foods room to work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot peppers, and heavy curry are strongly heating and may intensify the burning sensation and bad breath.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol and spirits.</strong> Considered heating and damp-forming in Chinese medicine; regular drinking may add fuel to the Stomach fire.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee.</strong> Stimulating and drying in TCM terms; it may push the system harder than it can sustain and worsen reflux.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Lamb and venison.</strong> These are among the most warming animal proteins and may add to the internal heat load.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Frying concentrates heat and dryness, making these poorly suited to an overheated Stomach.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive ginger and cinnamon.</strong> Helpful in small amounts for cold patterns, these warming spices may aggravate Stomach Heat when overused.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Cool Stomach Heat
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits shape how much heat the Stomach has to deal with in the first place. These habits focus on steadiness, moderation, and giving the digestive system predictable conditions. None of them require special equipment, only consistency.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat regular meals and do not skip.</strong> The Stomach thrives on rhythm. Skipping meals and then overeating swings the fire between low and high, which tends to produce more heat than steady eating does.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Stop at 70 percent full.</strong> Leaving the pot a little room lets digestion happen without the Stomach having to overwork, which keeps the fire at a manageable level.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid eating within 3 hours of bedtime.</strong> Late meals generate heat during digestion exactly when the body should be cooling down, and they are a common reflux trigger.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Drink room-temperature water, not ice cold.</strong> Ice water may feel relieving in the moment but can shock the digestive system. Room-temperature water hydrates without disrupting the Stomach.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Reduce coffee and alcohol.</strong> Both are heating and drying. Cutting back for a few weeks may noticeably lower the internal heat load.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Eat more raw vegetables in summer.</strong> In hot weather, the body can handle the cooling effect of raw cucumber, tomato, and lettuce better, which can help offset seasonal heat.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Practice stress management before meals.</strong> A few slow breaths before eating can calm the Liver-Stomach connection and prevent stress-driven heat from entering digestion.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Stomach Heat overlap with several medical conditions, including gastroesophageal reflux disease (GERD), H. pylori infection, peptic ulcer, and gastritis. If your symptoms are severe, persistent, getting worse, or accompanied by unintended weight loss, difficulty swallowing, or dark stools, please see a qualified healthcare professional for a proper evaluation. Chinese medicine food therapy and lifestyle adjustments may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
