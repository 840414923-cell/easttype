import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForColdHandsArticle() {
  const slug = "chinese-medicine-for-cold-hands"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Cold Hands</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Cold Hands and Feet: Causes &amp; Warming Foods
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Cold hands and feet are one of the most common complaints seen in Chinese medicine. When the internal warming force runs low, the body prioritizes the core organs and cuts warmth to the extremities. The most common pattern is Yang Deficiency: the internal furnace is underpowered. Warming foods such as lamb, ginger, cinnamon, and walnuts may help gradually rebuild the body&apos;s heating system over time, when matched to the right pattern.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Why Are Your Hands and Feet Cold?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, Yang is the warming, active force of the body. It is what pushes heat outward to the limbs and keeps the digestive and metabolic engines running. When Kidney Yang or Spleen Yang runs low, the body can no longer push warmth all the way to the hands and feet. Instead it conserves heat for the vital organs in the core, and the extremities are left to run cold.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This is why cold hands and feet, in the TCM view, are usually not a circulation problem in the Western sense but an energy distribution problem. The blood itself may flow normally. The issue is that the body is choosing, in effect, to keep its heat centralized rather than spending it on the fingers and toes. Once the core warming force is rebuilt, the warmth reaches the limbs again on its own.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This explanation differs from conditions like Raynaud&apos;s, which involves actual blood vessel spasms that cut flow to the fingers and toes, often with sharp color changes to white or blue. Raynaud&apos;s is a medical condition that needs a doctor&apos;s evaluation. The cold extremities described in TCM tend to be steadier and milder: hands that are always cool to the touch, feet that never warm up in bed, a general chill rather than sudden attacks. If your symptoms include numbness or color changes, our page on <Link href="/symptoms/why-do-my-hands-and-feet-go-numb" className="text-accent hover:underline">why your hands and feet go numb</Link> may be a better starting point.
        </p>
        <p className="text-text2 leading-relaxed">
          Either way, the first question is not how to force heat into the hands but why the body is withholding it. That question leads straight to the patterns below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Patterns Behind Cold Extremities
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine recognizes several distinct patterns behind cold hands and feet. They can overlap, but one usually leads, and the food direction that helps each is different. Matching your signs to a pattern is the single most useful step you can take, since warming foods help some patterns and do little for others. Our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you confirm which one fits.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Symptoms</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Kidney Yang Deficiency</td>
                <td className="px-3 py-2">Cold lower body</td>
                <td className="px-3 py-2">Frequent night urination, low back ache</td>
                <td className="px-3 py-2">Warm the Kidney</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Cold hands with fatigue after eating</td>
                <td className="px-3 py-2">Bloating, weak digestion</td>
                <td className="px-3 py-2">Strengthen the Spleen</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Qi and Blood Stagnation</td>
                <td className="px-3 py-2">Cold with color changes</td>
                <td className="px-3 py-2">Purple lips or nails, sharp cold</td>
                <td className="px-3 py-2">Move Qi and Blood</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Cold that comes with stress</td>
                <td className="px-3 py-2">Tension, sighing, tight chest</td>
                <td className="px-3 py-2">Move Liver Qi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          Kidney Yang Deficiency is the most common of these, especially in people who run cold their whole lives. You can read more about it in our guide to <Link href="/wellness/kidney-yang-deficiency" className="text-accent hover:underline">Kidney Yang Deficiency</Link>. The warming foods in this article suit it well, while the stagnation patterns respond better to movement and flow-promoting foods than to heavy tonics.
        </p>
        <p className="text-text2 leading-relaxed">
          It helps to remember that these patterns describe tendencies, not fixed labels. A person can carry a mainly deficient pattern for years and then layer a stagnation pattern on top during a stressful season, which is why coldness can suddenly feel worse even when nothing in the diet changed. Looking at the full picture, rather than only the coldness itself, usually points to the right food direction. If several signs overlap, a licensed practitioner can help sort out which pattern is leading.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Worsens Cold Hands and Feet
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several everyday habits quietly lower the body&apos;s warming force or block the heat that does exist from reaching the limbs. Most are easy to overlook because they feel normal in a modern routine.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Cold Foods and Drinks
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Ice water, iced coffee, and large raw salads all introduce cold the body must warm before it can use them. Over time this steady cooling demand can dull the Spleen and Kidney Yang, leaving less warmth available for the extremities. Room temperature or warm drinks are gentler on the system.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Lack of Movement
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Movement generates and circulates warmth. A largely sedentary day lets Qi settle and stagnate, so even adequate warmth fails to reach the fingers and toes. Gentle, regular activity tends to help more than occasional intense workouts.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Excessive Dieting
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The body needs fuel to produce heat. Under-eating, skipping meals, or following very restrictive diets can leave the system without enough raw material to run the internal furnace, and cold extremities are often one of the first signs.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Constitutional Tendency
        </h3>
        <p className="text-text2 leading-relaxed">
          Some people are simply born with a colder baseline. The Yang Deficient body type runs cool throughout life and is more sensitive to cold foods, cold weather, and cold seasons. This is not a flaw, only a starting point that shapes how the body responds. Learn more on our <Link href="/types/yang_deficient" className="text-accent hover:underline">Yang Deficient body type</Link> page.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Warming Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The foods below are traditionally used to warm the body and support Yang. None work overnight; their effects build over weeks of regular use, usually as part of cooked meals rather than raw snacks. They suit the deficiency patterns best. If your coldness comes from stagnation, lighter, flow-promoting foods may be a better fit than heavy warming ones.
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
                <td className="px-3 py-2 font-medium text-text">Lamb</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Strongly warms Kidney Yang</td>
                <td className="px-3 py-2">Slow-cooked stew or soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Ginger</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms digestive fire</td>
                <td className="px-3 py-2">Tea, or sliced in cooking</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cinnamon</td>
                <td className="px-3 py-2">Hot, sweet</td>
                <td className="px-3 py-2">Warms and drives Yang outward</td>
                <td className="px-3 py-2">Small amounts in tea or oats</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Tonifies Kidney Yang</td>
                <td className="px-3 py-2">Small handful as a snack</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Leeks</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms and supports Yang</td>
                <td className="px-3 py-2">Stir-fried or in soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chestnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Supports Kidney and Spleen</td>
                <td className="px-3 py-2">Roasted or in stew</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dried tangerine peel</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Moves Qi and warms</td>
                <td className="px-3 py-2">Steeped in tea or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Fennel</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms and eases cold digestion</td>
                <td className="px-3 py-2">In soup or as seed tea</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Shrimp</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Warms and supports Yang</td>
                <td className="px-3 py-2">Cooked in soup or stir-fry</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          A simple way to begin is to add one or two of these foods rather than all at once. Lamb and ginger stew is a classic cold-season choice, and a cup of ginger or cinnamon tea in the morning is an easy daily habit that costs very little. The warming effect tends to show up gradually as steadier warmth in the hands and feet over several weeks, not as a sudden heat after a single meal. Consistency matters more than quantity, which is why small regular amounts usually outperform occasional large ones.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Just as some foods warm, others cool the body further and can work against your efforts. For someone already running cold, limiting these can matter as much as adding warming foods. See our broader list in <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">foods that warm your body</Link> for the flip side.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water:</strong> the most direct way to cool the system and blunt digestive fire.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Watermelon:</strong> strongly cooling, best reserved for genuine summer heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cucumber:</strong> cooling and damp-forming when eaten in large amounts.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Mung beans:</strong> a strong heat-clearing food, useful for heat but not for cold patterns.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw foods:</strong> raw vegetables demand warmth the body must supply itself.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Citrus in winter:</strong> cooling by nature, which can add to a cold pattern in cold months.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Warmer Extremities
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only half the work. Warming habits help the body hold onto the heat it generates and push it toward the limbs. Practiced together, day after day, these small routines may make a clearer difference than any single food.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Drink only warm fluids.</strong> Swap iced drinks for warm water, tea, or broth so the body is not constantly reheating what it takes in.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat a warming breakfast.</strong> Congee, oats, or eggs with ginger give the day a warm start and support the Spleen at its peak time.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Exercise to generate heat.</strong> Brisk walking, Tai Chi, or gentle strength work moves Qi and warms the limbs from within.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Soak feet in warm water before bed.</strong> A 10 to 15 minute foot soak draws warmth downward and can ease the chill that keeps people awake.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Massage hands and feet.</strong> Rubbing the limbs encourages circulation and Qi to reach the extremities.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Keep the abdomen and lower back warm.</strong> These areas house the Spleen and Kidney; keeping them covered protects the core warming force.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Dress in layers.</strong> Trapping warmth close to the body leaves more to share with the hands and feet.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Cold extremities can sometimes point to medical conditions that food therapy alone cannot address. Persistent coldness may be associated with hypothyroidism, anemia, poor circulation from cardiovascular issues, or Raynaud&apos;s. If your coldness is severe, one-sided, comes with color changes or numbness, or appears suddenly, please see a doctor for evaluation. Our page on <Link href="/symptoms/why-am-i-always-cold" className="text-accent hover:underline">why you are always cold</Link> explores when it is worth investigating further.
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
