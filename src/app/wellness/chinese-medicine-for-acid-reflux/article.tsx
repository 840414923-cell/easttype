import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForAcidRefluxArticle() {
  const slug = "chinese-medicine-for-acid-reflux"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Acid Reflux</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Acid Reflux: Stomach Heat, Liver Fire, and Cooling Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Acid reflux in Chinese medicine is most often understood as Stomach Heat or Liver Fire pushing stomach acid upward when it should flow down. The Stomach is meant to send its contents and energy in a downward direction. When heat reverses that flow, acid rises into the chest and throat. Common signs may include a burning feeling behind the breastbone, a sour or bitter taste, sour burps, a dry mouth, and bad breath. Cooling, moistening foods such as mung beans, pear, and lotus root may help calm stomach fire and ease the upward push. This pattern can be associated with the <Link href="/types/damp_heat" className="text-accent hover:underline">Damp Heat body type</Link>, and you can check your overall constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Acid Reflux
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, every organ has a preferred direction for its energy. The Stomach is meant to send things down. The Spleen, its partner, is meant to send the refined essence of food upward. When this teamwork stays in rhythm, digestion is quiet and comfortable. Acid reflux is what happens when the Stomach loses its downward momentum and its contents rebel upward instead. The acid, bile, and partly digested food that should keep moving down come back up, bringing the burning and sourness that define reflux.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Several patterns can push things the wrong way. The most common is Stomach Heat, where the digestive fire grows too intense, speeds up, and forces contents upward. This often comes from a diet heavy in spicy, greasy, or roasted foods, alcohol, and strong coffee. You can read more about this overlap in our guide on <Link href="/wellness/stomach-heat" className="text-accent hover:underline">Stomach Heat</Link>. A second common pattern is Liver Qi invading the Stomach. In TCM theory the Liver is responsible for the smooth flow of energy and emotion. When frustration, anger, or chronic stress tighten that flow, Liver energy pushes sideways into the Stomach and disrupts its downward movement. This Liver-driven reflux is closely related to <Link href="/wellness/liver-fire" className="text-accent hover:underline">Liver Fire</Link>, and people with this pattern often notice their reflux flares after emotional tension.
        </p>
        <p className="text-text2 leading-relaxed">
          A third pattern is food stagnation, which arises when the system is asked to process more than it can handle at once. Large meals, eating too quickly, or eating late at night can leave food sitting and fermenting in the middle, and the pressure has to escape somewhere, often upward. Each of these patterns produces reflux, yet each calls for a different food direction. Cooling foods suit Stomach Heat, soothing foods suit Liver-driven reflux, and light, easily digested meals suit food stagnation. For a closer look at why this happens, see our page on <Link href="/symptoms/why-do-i-have-acid-reflux" className="text-accent hover:underline">why acid reflux happens</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Acid Reflux Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with reflux fall into one of four patterns, though some people show features of two at once. Working out which pattern fits your reflux matters, because the food direction that helps one pattern can worsen another. Warming spices that settle cold patterns, for example, may add fuel to a Stomach Heat pattern. The table below lays out the four main patterns, their key signs, what is happening internally, and the food direction each one tends to respond to.
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
                <td className="px-3 py-2 font-medium text-text">Stomach Heat</td>
                <td className="px-3 py-2">Burning chest, sour burps, dry mouth, strong thirst, bad breath</td>
                <td className="px-3 py-2">Excess fire inflames the Stomach and forces acid upward</td>
                <td className="px-3 py-2">Clear heat; cool and moisten</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Liver Invading Stomach</td>
                <td className="px-3 py-2">Reflux worse with stress, irritability, chest tightness, sighing</td>
                <td className="px-3 py-2">Tight Liver energy pushes sideways into the Stomach</td>
                <td className="px-3 py-2">Soothe the Liver and restore downward flow</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Food Stagnation</td>
                <td className="px-3 py-2">Reflux after overeating, fullness, foul breath, heavy feeling</td>
                <td className="px-3 py-2">Food sits undigested and creates upward pressure</td>
                <td className="px-3 py-2">Promote digestion; eat less, eat earlier</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Mild chronic reflux, fatigue after meals, loose stools, poor appetite</td>
                <td className="px-3 py-2">Weak digestion lets food and fluids settle and rebel</td>
                <td className="px-3 py-2">Strengthen the Spleen with warm, cooked foods</td>
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
          What Causes Acid Reflux in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Acid reflux rarely comes from one habit alone. It usually builds from a combination of diet, emotion, and timing. The most common triggers are described below.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Spicy and Greasy Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Chili, heavy curries, deep-fried dishes, and roasted meats add constant fuel to the digestive fire. Eaten regularly, they can push Stomach Heat past what the system can clear, and the excess heat tends to rise toward the throat.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Alcohol and Coffee</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Both alcohol and strong coffee are heating and drying in TCM terms. Alcohol also generates dampness, which can combine with heat to form Damp Heat. Coffee is stimulating and may loosen the valve that keeps acid down, the same valve Western medicine calls the lower esophageal sphincter.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Eating Too Fast or Too Much</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Rushing through meals or overloading the Stomach at once forces the system to work at full capacity. The resulting pressure has to go somewhere, and the easiest escape is upward. This kind of overload is a common thread in feeling unwell after eating, which you can read more about in our guide on <Link href="/symptoms/why-do-i-feel-sick-after-eating" className="text-accent hover:underline">why you might feel sick after eating</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Suppressed Anger</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Held-in frustration and chronic stress tighten the Liver energy, which then pushes into the Stomach. This Liver-driven reflux often flares during difficult periods at work or at home and tends to ease on calmer days.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Eating Late at Night</h3>
        <p className="text-text2 leading-relaxed">
          Late dinners force the Stomach to digest at the hour when the body should be cooling and resting. Lying down soon after makes it easier for acid to travel upward, which is why night-time reflux is so common.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the most direct route to calming Stomach Heat and easing the upward push of acid. The guiding idea is to choose foods that are cool or cold in nature, moistening, and gentle on the digestive tract, while stepping back from anything that adds more fuel. Small portions eaten regularly tend to work better than occasional large helpings. How you prepare these foods also matters: steaming, light boiling, and room-temperature serving preserve the cooling effect, while frying and heavy roasting add heat back in. The eight foods below have a long history of use for cooling and soothing an overheated Stomach.
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
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Strongest cooling action; supports fluid balance</td>
                <td className="px-3 py-2">Cooked as a thin soup or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cools heat and moistens the throat and chest</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears heat while supporting digestion</td>
                <td className="px-3 py-2">Sliced into soup or lightly stir-fried</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cucumber</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Hydrating and gently cooling; easy on the lining</td>
                <td className="px-3 py-2">Eaten raw or lightly salted</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Millet porridge</td>
                <td className="px-3 py-2">Cool to neutral, sweet</td>
                <td className="px-3 py-2">Soothes and coats an irritated Stomach</td>
                <td className="px-3 py-2">Cooked as a thin, soft porridge</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Banana</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Moistening and gentle on the lining</td>
                <td className="px-3 py-2">Eaten ripe, not green</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens digestion while staying gentle</td>
                <td className="px-3 py-2">Boiled in soup or steamed</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Papaya</td>
                <td className="px-3 py-2">Neutral, sweet and sour</td>
                <td className="px-3 py-2">Supports digestion and soothes the Stomach</td>
                <td className="px-3 py-2">Eaten fresh or lightly cooked</td>
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
          Because acid reflux in TCM is so often a pattern of too much heat and upward pressure, the foods below may worsen symptoms by adding heat, drying the system, or relaxing the valve that keeps acid down. Cutting back for a few weeks may give the cooling foods room to work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot peppers, and heavy curry are strongly heating and may intensify the burning and sourness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Heating and damp-forming in TCM; regular drinking may add fuel to the Stomach fire.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee.</strong> Stimulating and drying; it may also relax the lower esophageal sphincter and let acid rise.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Fried and greasy foods.</strong> These concentrate heat and sit heavy, increasing the upward pressure.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Citrus in excess.</strong> Sour fruits can add to acidity when the Stomach is already overheated.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Peppermint.</strong> Though it feels cooling, peppermint can relax the sphincter that holds acid down for some people.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits shape how much acid the Stomach has to deal with in the first place. These habits focus on steadiness, moderation, and keeping gravity on your side.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat smaller meals.</strong> Large meals stretch the Stomach and raise the pressure that pushes acid upward. Splitting a big dinner into two smaller ones may reduce flare-ups.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Finish dinner at least three hours before bed.</strong> An emptier Stomach is far less likely to reflux once you lie down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Eat slowly and chew well.</strong> Thorough chewing means less work for the Stomach and less chance of stagnation and upward pressure.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Avoid lying down right after eating.</strong> Staying upright for two to three hours lets gravity keep contents moving down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Settle stress before meals.</strong> A few slow breaths before eating may calm the Liver-Stomach connection that drives stress reflux.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Raise the head of the bed.</strong> Lifting the head a few inches can ease night-time reflux without extra medication.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Skip tight clothing around the waist.</strong> Belts and tight waistbands press on the Stomach and can nudge acid upward.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Occasional reflux after a heavy meal is common. Reflux that comes back often, wakes you at night, or resists changes in diet should be evaluated by a qualified healthcare professional. Frequent acid exposure can be associated with GERD, inflammation of the esophagus, Barrett&apos;s esophagus, or ulcers, all of which need proper diagnosis and medical care. Chronic reflux that lasts for weeks warrants an endoscopy to check the lining of the esophagus. Chinese medicine food therapy may complement, but should never replace, treatment from a licensed medical provider.
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
