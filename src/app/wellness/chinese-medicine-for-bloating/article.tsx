import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForBloatingArticle() {
  const slug = "chinese-medicine-for-bloating"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Bloating</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Bloating: Spleen Qi, Liver Stagnation, and Foods That May Reduce Gas
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Bloating in Chinese medicine usually means the Spleen cannot properly process food and fluids, so gas builds up in the middle. Two common patterns stand out. Spleen Qi Deficiency brings bloating after eating, fatigue, and loose stools, while Liver Qi Stagnation brings bloating that fluctuates with mood and gets worse with stress. Warm, gently moving foods such as ginger tea, fennel, and well-cooked vegetables may help settle the gut and ease the pressure. This pattern can be associated with the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link>, and you can confirm your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Bloating
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine the Spleen is responsible for taking in food and drink and turning them into usable energy, and the Liver sits beside it to keep energy moving smoothly. Bloating usually happens when one or both of these systems slows down. The belly fills with gas that should have moved on, and the result is that swollen, tight, or heavy feeling that can last for hours.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When the Spleen is weak, food and fluids are not fully broken down. What is left sits in the middle and ferments, and fermentation produces gas. The belly feels full and heavy, often worse after eating or after cold drinks. This is the Spleen Qi Deficiency pattern, and it is one of the most common reasons for chronic bloating. You can read more about it in our guide on <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link>. It is also a frequent reason people feel unwell after meals, which we cover in our page on <Link href="/symptoms/why-do-i-feel-sick-after-eating" className="text-accent hover:underline">why you might feel sick after eating</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When the Liver is the problem, the story is different. The Liver likes to flow. Under stress, frustration, or worry, that flow tightens and stagnates. Because the Liver channels pass through the sides and across the abdomen, stuck energy often shows up as bloating that comes and goes with mood, sighing, tightness under the ribs, and gas that moves around rather than sitting heavy. This is Liver Qi Stagnation, and you can learn more in our page on <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>. Persistent bloating after meals has its own dedicated guide at <Link href="/symptoms/always-bloated-after-eating" className="text-accent hover:underline">always bloated after eating</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          A third contributor is dampness. When fluids are not moved efficiently, they pool and create a heavy, puffy kind of fullness. A fourth is plain food stagnation from overeating. All four produce a swollen belly, yet they call for different food directions. Warm, cooked, easily digested foods suit a weak Spleen, while moving, aromatic foods suit stuck Liver energy. The key is matching the food to the pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Bloating Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because bloating has several sources, it helps to know which pattern is driving yours. The foods that settle one pattern can leave another untouched, and some that warm a cold, weak Spleen can add pressure to a heat-driven gut. The table below describes the four main bloating patterns, the type of bloating each produces, other signs that tend to accompany it, and the food direction each one responds to.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Bloating Type</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Full and tired after eating, worse with cold foods</td>
                <td className="px-3 py-2">Fatigue, loose stools, poor appetite</td>
                <td className="px-3 py-2">Strengthen the Spleen with warm, cooked foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Bloating that shifts with mood and moves around</td>
                <td className="px-3 py-2">Sighing, tight ribs, irritability</td>
                <td className="px-3 py-2">Move Liver Qi with aromatic, warming foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dampness</td>
                <td className="px-3 py-2">Heavy, puffy, swollen belly</td>
                <td className="px-3 py-2">Sluggishness, sticky feeling, water retention</td>
                <td className="px-3 py-2">Drain dampness with light, plain foods</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Food Stagnation</td>
                <td className="px-3 py-2">Bloated after overeating, foul breath</td>
                <td className="px-3 py-2">Fullness, acid reflux, heavy feeling</td>
                <td className="px-3 py-2">Promote digestion; eat less per meal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you are unsure which pattern fits, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can point you toward your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Bloating
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Bloating is usually the end result of a few habits piling up over time. The most common triggers fall into five groups.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Cold and Raw Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM, the Spleen depends on warmth to process food. Large amounts of iced drinks, raw salads, cold sandwiches, and straight-from-the-fridge foods force the Spleen to heat them up first, which slowly wears it down. Cold food also tends to sit and ferment, producing gas.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Eating Too Fast</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Swallowing food quickly means swallowing air along with it. It also means the Stomach and Spleen get a sudden load with no time to prepare. Both raise the chance of stagnation and gas.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Eating While Stressed</h3>
        <p className="text-text2 leading-relaxed mb-4">
          When the nervous system is in tension, energy tightens around the gut. The Liver, sensitive to mood, stops flowing smoothly, and digestion slows. Meals eaten in a rush or during an argument often end in bloating.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Dairy and Sugar</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM, dairy is considered damp-forming, and concentrated sugar weakens the Spleen. Both can thicken fluids and slow movement, leaving a heavy, gassy feeling.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Irregular Meal Times</h3>
        <p className="text-text2 leading-relaxed">
          The digestive system does best with a predictable rhythm. Skipping meals and then eating heavily swings the Spleen between empty and overloaded, which tends to produce stagnation and bloating.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Reduce Bloating
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          For bloating, the food direction depends on the pattern, but most cases benefit from warm, cooked, gently moving foods that are easy on the Spleen and help energy flow. Aromatic spices that move Liver Qi, gentle vegetables that strengthen the Spleen, and starchy grains that are easy to break down all have a role. Small, regular meals matter as much as the foods themselves, since an overloaded Stomach will bloat no matter how ideal the ingredients. The eight foods below are among the most used for settling a bloated gut in Chinese medicine food therapy.
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
                <td className="px-3 py-2 font-medium text-text">Ginger</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms the Spleen and moves energy downward</td>
                <td className="px-3 py-2">Fresh in tea or added to cooking</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Fennel</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Moves Qi and eases gas in the gut</td>
                <td className="px-3 py-2">Seeds steeped as tea after meals</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens the Spleen while staying gentle</td>
                <td className="px-3 py-2">Boiled in soup or steamed</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Millet</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Easily digested grain that tones the Spleen</td>
                <td className="px-3 py-2">Cooked as a soft porridge</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cooked carrots</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthen digestion without adding gas</td>
                <td className="px-3 py-2">Steamed or boiled until soft</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cardamom</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Moves Qi, warms the middle, eases fullness</td>
                <td className="px-3 py-2">A pod in tea, congee, or rice</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Papaya</td>
                <td className="px-3 py-2">Neutral, sweet and sour</td>
                <td className="px-3 py-2">Supports digestion and soothes the gut</td>
                <td className="px-3 py-2">Eaten fresh, not cold</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">White radish (daikon)</td>
                <td className="px-3 py-2">Cool, pungent and sweet</td>
                <td className="px-3 py-2">Moves stagnant food downward, eases fullness</td>
                <td className="px-3 py-2">Cooked in soup or lightly boiled</td>
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
          For a tendency toward bloating, the foods below may worsen symptoms by cooling the digestive fire, adding dampness, or introducing extra gas. Reducing them for a few weeks may let the settling foods do their work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw cold vegetables.</strong> Salads from the fridge require a lot of Spleen energy to heat up, and they tend to ferment and create gas.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water.</strong> Cold directly slows the digestive fire; warm or room-temperature water is easier on the gut.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive unsoaked beans.</strong> Beans are nourishing but can be gas-forming; soak them well and cook thoroughly.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy.</strong> Milk, cheese, and ice cream are damp-forming in TCM and can thicken fluids in the gut.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Carbonated drinks.</strong> They literally add gas to a system that is already struggling to move it.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Chewing gum.</strong> It leads to swallowing air and can confuse the Stomach with sweet signals and no food.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The right foods work best when the habits around eating also support smooth digestion. These habits focus on warmth, rhythm, and giving the Spleen predictable, gentle conditions.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Chew thoroughly.</strong> Twenty to thirty chews per bite start digestion in the mouth and lighten the load on the Spleen.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat warm meals.</strong> Warm, cooked food is far easier to process than cold or raw food for a sensitive gut.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid eating while standing or rushing.</strong> Sitting down for a few minutes lets energy settle into the digestive organs.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Take a short walk after meals.</strong> Gentle movement helps the Stomach send contents downward instead of pooling.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Massage the abdomen clockwise.</strong> Following the path of the colon, a few minutes of gentle circular massage can help gas move along.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Eat at regular times.</strong> A steady rhythm trains the Spleen to prepare, which reduces stagnation.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid late dinners.</strong> Eating close to bedtime leaves food sitting and fermenting overnight.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Most occasional bloating is harmless and tied to a meal or a stressful day. Bloating that is persistent, painful, or getting worse should be checked by a qualified healthcare professional. Please see a doctor if bloating comes with blood in the stool, severe abdominal pain, persistent diarrhea or constipation, or unexplained weight loss. These signs can be associated with conditions such as celiac disease, inflammatory bowel disease, or ovarian issues that need proper diagnosis and treatment. Chinese medicine food therapy may complement, but should never replace, care from a licensed medical provider.
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
