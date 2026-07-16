import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function CoolingFoodsArticle() {
  const slug = "cooling-foods-chinese-medicine"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Cooling Foods</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Cooling Foods in Chinese Medicine: What to Eat When Your Body Runs Hot
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read · The counterpart to warming foods</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, cooling foods help lower internal heat and restore moisture to the body. They are recommended for people who tend to feel hot, experience night sweats, have dry skin or mouth, break out frequently, or feel irritable in warm weather. Common cooling foods include mung beans, chrysanthemum tea, pear, lotus root, watermelon, and bitter melon. The existing warming foods page at <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">/wellness/foods-that-warm-your-body</Link> covers the opposite pattern.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you have read our guide on <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">warming foods for cold body types</Link>, this is the other half of the picture. Chinese medicine divides foods into warming, neutral, and cooling categories based on the effect they have on your internal temperature after digestion. Not the temperature of the food itself, but the thermal direction it sends your body once processed.
        </p>
        <p className="text-text2 leading-relaxed">
          Cooling foods are not about eating cold meals from the refrigerator. In fact, Chinese medicine generally recommends cooking cooling ingredients before eating them. The &quot;cooling&quot; refers to the internal effect: these foods may help reduce internal heat, support your body&apos;s moisture reserves, and calm an overactive system.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Need Cooling Foods
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Not everyone needs cooling foods. If your body tends toward cold, these foods may make you feel worse. But if you recognize several of the signs below, cooling foods may help bring you back toward balance.
        </p>
        <div className="bg-cream/30 border border-border rounded-xl p-5 mb-4">
          <h3 className="text-sm font-semibold text-accent mb-3">You may benefit from cooling foods if you experience:</h3>
          <ul className="space-y-2">
            {[
              "Night sweats or waking up hot",
              "Dry mouth or throat, especially at night",
              "Acne or skin breakouts that worsen in heat",
              "Irritability or short temper in warm weather",
              "Acid reflux or a burning sensation in your stomach",
              "Red eyes or sensitivity to light",
              "Constipation with hard, dry stools",
              "A red tongue tip or a tongue with no coating",
              "Feeling restless or unable to settle at night",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text2">
                <span className="text-accent/70 text-xs mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These signs often point to Yin Deficiency or Damp Heat patterns in Chinese medicine. You can confirm your body type with our <Link href="/quiz" className="text-accent hover:underline">free 5-minute quiz</Link>, or explore the <Link href="/types/yin_deficient" className="text-accent hover:underline">Volcanic Spring (Yin Deficient)</Link> and <Link href="/types/damp_heat" className="text-accent hover:underline">Summer Storm (Damp Heat)</Link> body type descriptions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The Cooling Foods List
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Here are the most commonly recommended cooling foods in Chinese medicine, grouped by category, with preparation suggestions.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Food</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Cooling Effect</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Best For</th>
                <th className="text-left py-2 text-text font-medium">How to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Mung beans</td><td className="py-2 pr-3 text-text2">Clears heat, drains dampness</td><td className="py-2 pr-3 text-text2">Damp Heat, skin breakouts</td><td className="py-2 text-text2">Boil into soup, 30 min simmer</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Chrysanthemum</td><td className="py-2 pr-3 text-text2">Clears heat, calms Liver</td><td className="py-2 pr-3 text-text2">Irritability, headaches</td><td className="py-2 text-text2">Steep 8-10 flowers, 5 min</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Pear</td><td className="py-2 pr-3 text-text2">Moistens, cools lungs</td><td className="py-2 pr-3 text-text2">Dry cough, dry skin</td><td className="py-2 text-text2">Steam with rock sugar, or eat raw</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Lotus root</td><td className="py-2 pr-3 text-text2">Clears heat, stops bleeding</td><td className="py-2 pr-3 text-text2">Acid reflux, nosebleeds</td><td className="py-2 text-text2">Slice into soup, or juice fresh</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Bitter melon</td><td className="py-2 pr-3 text-text2">Strong heat clearer</td><td className="py-2 pr-3 text-text2">Damp Heat, summer heat</td><td className="py-2 text-text2">Stir-fry with egg, or boil soup</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Tremella mushroom</td><td className="py-2 pr-3 text-text2">Moistens, nourishes Yin</td><td className="py-2 pr-3 text-text2">Dry skin, night sweats</td><td className="py-2 text-text2">Cook with goji and rock sugar</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Watermelon</td><td className="py-2 pr-3 text-text2">Clears summer heat</td><td className="py-2 pr-3 text-text2">Hot weather discomfort</td><td className="py-2 text-text2">Eat fresh, moderate portion</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Cucumber</td><td className="py-2 pr-3 text-text2">Mild cooling, diuretic</td><td className="py-2 pr-3 text-text2">Mild heat, puffiness</td><td className="py-2 text-text2">Add to salads, but cook if digestion weak</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Winter melon</td><td className="py-2 pr-3 text-text2">Drains heat and dampness</td><td className="py-2 pr-3 text-text2">Water retention, acne</td><td className="py-2 text-text2">Slice into soup with ginger</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Mint</td><td className="py-2 pr-3 text-text2">Disperses heat, moves qi</td><td className="py-2 pr-3 text-text2">Headache, irritability</td><td className="py-2 text-text2">Steep as tea, or add to dishes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods by Symptom
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Different symptoms benefit from different cooling foods. Here is a quick lookup:
        </p>
        <div className="space-y-3">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Night sweats: </span><span className="text-text2">Tremella soup, pear, lily bulb, lotus seed. These moisten from within and may help your cooling system hold water overnight.</span></p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Acne or skin breakouts: </span><span className="text-text2">Mung beans, winter melon, bitter melon, chrysanthemum tea. These clear heat and drain the dampness that pushes through skin.</span></p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Acid reflux: </span><span className="text-text2">Mung bean soup, lotus root, oatmeal, banana. These cool the stomach and help energy move downward instead of upward.</span></p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Irritability in heat: </span><span className="text-text2">Chrysanthemum tea, mint tea, lemon water, rose tea. These cool and move stuck energy, especially Liver heat.</span></p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Dry mouth and throat: </span><span className="text-text2">Pear, tremella, lily bulb, honey in warm water. These replenish the moisture that internal heat has evaporated.</span></p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Avoid When You Run Hot
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Adding cooling foods helps, but removing heating foods matters just as much. These are the common culprits that add fuel to internal heat:
        </p>
        <div className="space-y-3">
          <div className="bg-red-50/30 border border-red-200/30 rounded-xl p-4">
            <p className="text-text font-medium text-sm mb-1"><span className="text-red-500/70 mr-2">✕</span>Spicy food (chili, hot peppers, wasabi)</p>
            <p className="text-text2 text-sm leading-relaxed pl-6">Directly adds heat. Even a small amount may trigger sweating, reflux, or breakouts in heat-prone people.</p>
          </div>
          <div className="bg-red-50/30 border border-red-200/30 rounded-xl p-4">
            <p className="text-text font-medium text-sm mb-1"><span className="text-red-500/70 mr-2">✕</span>Excessive coffee</p>
            <p className="text-text2 text-sm leading-relaxed pl-6">Coffee is heating and diuretic. It pulls moisture out while pushing heat up. For heat types, green tea or chrysanthemum tea is a better morning drink.</p>
          </div>
          <div className="bg-red-50/30 border border-red-200/30 rounded-xl p-4">
            <p className="text-text font-medium text-sm mb-1"><span className="text-red-500/70 mr-2">✕</span>Alcohol</p>
            <p className="text-text2 text-sm leading-relaxed pl-6">Alcohol is heating and damp-forming. It may feel relaxing in the moment but worsens both heat and dampness the next day.</p>
          </div>
          <div className="bg-red-50/30 border border-red-200/30 rounded-xl p-4">
            <p className="text-text font-medium text-sm mb-1"><span className="text-red-500/70 mr-2">✕</span>Heavy greasy meals, especially at night</p>
            <p className="text-text2 text-sm leading-relaxed pl-6">Grease creates dampness, and dampness traps heat. Late heavy meals are the worst because your body processes them at the same time it should be cooling down for sleep.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          A Simple Day of Cooling Eating
        </h2>
        <div className="bg-cream/30 border border-border rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-20 text-accent text-sm font-medium pt-0.5">Morning</div>
            <div className="text-text2 text-[0.95rem] leading-relaxed">Oatmeal with pear slices and a drizzle of honey. Cup of chrysanthemum tea instead of coffee.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-20 text-accent text-sm font-medium pt-0.5">Lunch</div>
            <div className="text-text2 text-[0.95rem] leading-relaxed">Mung bean soup with rice and steamed fish. Add a side of cooked cucumber or winter melon.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-20 text-accent text-sm font-medium pt-0.5">Afternoon</div>
            <div className="text-text2 text-[0.95rem] leading-relaxed">Mint tea or lotus seed soup. A small handful of watermelon if in season.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-20 text-accent text-sm font-medium pt-0.5">Dinner</div>
            <div className="text-text2 text-[0.95rem] leading-relaxed">Light vegetable soup with lotus root and tremella. Avoid heavy protein. Finish eating by 7pm.</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling vs Warming: How to Know Which You Need
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The simplest test is your own body temperature preference. If you gravitate toward open windows, cool drinks, and light clothing, your body is likely running warm. If you are always reaching for a sweater and hot tea, you are likely running cold. Most people have a clear tendency in one direction.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Question</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Warming Foods</th>
                <th className="text-left py-2 text-text font-medium">Cooling Foods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Hands and feet usually?</td><td className="py-2 pr-3 text-text2">Cold</td><td className="py-2 text-text2">Warm or sweaty</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Preferred drink temperature?</td><td className="py-2 pr-3 text-text2">Hot</td><td className="py-2 text-text2">Cold or room temp</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Skin tendency?</td><td className="py-2 pr-3 text-text2">Pale</td><td className="py-2 text-text2">Red or flushed</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Night discomfort?</td><td className="py-2 pr-3 text-text2">Cold, wants blankets</td><td className="py-2 text-text2">Hot, kicks off covers</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Tongue color?</td><td className="py-2 pr-3 text-text2">Pale with white coat</td><td className="py-2 text-text2">Red with yellow or no coat</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you answered mostly on the right side, this cooling foods guide is for you. If mostly on the left, see our <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">warming foods guide</Link> instead. If you are somewhere in the middle, your body type may be a mix, and a balanced approach with seasonal adjustments works best.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Important Note</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This guide is for informational and educational purposes only and is not medical advice. If your symptoms are severe, persistent, or worsening, please consult a licensed healthcare provider. Cooling foods may complement but should not replace professional medical treatment. People with cold body types should use cooling foods cautiously, as they may worsen cold symptoms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Articles</h2>
        <div className="space-y-3">
          <Link href="/wellness/foods-that-warm-your-body" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Foods That Warm Your Body →</h3>
            <p className="text-text2/70 text-xs mt-1">The opposite guide: warming foods for people who run cold.</p>
          </Link>
          <Link href="/wellness/what-is-qi" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">What Is Qi (Chi) Energy? →</h3>
            <p className="text-text2/70 text-xs mt-1">Understanding qi helps explain why cooling and warming foods have different effects.</p>
          </Link>
          <Link href="/foods-for/when-you-have-acid-reflux" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Foods for Acid Reflux {'->'}</h3>
            <p className="text-text2/70 text-xs mt-1">A detailed food guide for one of the most common heat-related symptoms.</p>
          </Link>
          <Link href="/wellness/kidney-yin-deficiency" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Kidney Yin Deficiency {'->'}</h3>
            <p className="text-text2/70 text-xs mt-1">Why the body runs hot at night, and the cooling foods that may help restore balance.</p>
          </Link>
        </div>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
