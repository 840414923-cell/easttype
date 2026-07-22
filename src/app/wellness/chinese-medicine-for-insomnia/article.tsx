import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForInsomniaArticle() {
  const slug = "chinese-medicine-for-insomnia"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Insomnia</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Insomnia: Why You Can&apos;t Sleep and What May Help
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine identifies several distinct patterns behind insomnia, and the right foods depend on which one fits. If you cannot fall asleep, the issue may be too much Heat or deficient Blood failing to anchor the mind. If you wake between 1 and 3 AM, the Liver may be involved. Waking around 3 to 5 AM may point to Lung or Heart patterns. Rather than sedating the brain, Chinese medicine focuses on identifying which internal imbalance is keeping the mind (Shen) restless, then addressing it with cooling foods, calming herbs, and daily rhythm adjustments. This approach does not replace professional care for serious sleep disorders but may help people whose insomnia stems from stress, aging, or constitutional tendencies.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Insomnia
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Western medicine, insomnia is typically categorized as difficulty falling asleep, difficulty staying asleep, or early morning awakening. Treatment often focuses on sleep hygiene, cognitive behavioral therapy, and medications that target the nervous system.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine takes a different starting point. The question is not just "can you sleep?" but "why is the mind unable to settle?" In TCM theory, the Heart houses the Shen, which can be translated as spirit or mind-consciousness. When the Shen is calm and anchored by sufficient Blood and Yin, sleep comes naturally. When the Shen is disturbed by Heat, deficient Blood, or stagnant energy, the mind stays active and sleep becomes difficult.
        </p>
        <p className="text-text2 leading-relaxed">
          This means that two people with identical complaints of insomnia may receive entirely different recommendations from a TCM practitioner. The treatment depends on the underlying pattern, not just the symptom. Understanding which pattern fits your situation may help you choose the right foods and habits to support better rest.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Four Common Insomnia Patterns in Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most cases of insomnia in Chinese medicine fall into one of four patterns. Identifying which one matches your experience is the first step toward choosing helpful foods and habits.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Typical Sleep Problem</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Core Issue</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Cannot fall asleep, mind racing</td>
                <td className="px-3 py-2">Palpitations, anxiety, night sweats</td>
                <td className="px-3 py-2">Cooling Yin is too low to settle the mind</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Liver Fire / Liver Qi Stagnation</td>
                <td className="px-3 py-2">Wake 1-3 AM, cannot get back to sleep</td>
                <td className="px-3 py-2">Irritability, bitter taste, tension headaches</td>
                <td className="px-3 py-2">Stuck energy ignites into rising heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart and Spleen Blood Deficiency</td>
                <td className="px-3 py-2">Light, broken sleep with excessive dreaming</td>
                <td className="px-3 py-2">Fatigue, poor memory, pale complexion</td>
                <td className="px-3 py-2">Not enough Blood to ground the mind</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Stomach Heat / Food Stagnation</td>
                <td className="px-3 py-2">Cannot settle, bloated or restless at night</td>
                <td className="px-3 py-2">Fullness, acid reflux, big appetite</td>
                <td className="px-3 py-2">Digestive fire keeps the body too active</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you recognize yourself in one of these patterns, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help confirm which constitution you lean toward. You can also read more about <Link href="/wellness/heart-yin-deficiency" className="text-accent hover:underline">Heart Yin Deficiency</Link> and <Link href="/wellness/liver-fire" className="text-accent hover:underline">Liver Fire</Link> for detailed food guides.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help You Sleep by Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because insomnia has different root causes in Chinese medicine, the helpful foods depend on your pattern. The table below maps common sleep-supporting foods to the patterns they may benefit most.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Best For Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus seed (lian zi)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Simmer into sweet soup before bed</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lily bulb (bai he)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Cook with lotus seed and rock sugar</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Red dates (jujube)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Blood Deficiency</td>
                <td className="px-3 py-2">5-8 in tea or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Longan fruit (gui yuan)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Blood Deficiency</td>
                <td className="px-3 py-2">10 dried fruits in warm water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Wheat (floating wheat)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Boil as tea for night sweats</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum tea</td>
                <td className="px-3 py-2">Cool, aromatic</td>
                <td className="px-3 py-2">Liver Fire</td>
                <td className="px-3 py-2">Drink in the evening, not too close to bed</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Millet porridge</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Spleen and Stomach</td>
                <td className="px-3 py-2">Small bowl 2 hours before bed</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mulberry</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Blood and Yin Deficiency</td>
                <td className="px-3 py-2">Fresh or dried as snack</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Liver and Kidney Yin</td>
                <td className="px-3 py-2">Small handful in tea</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods and Drinks to Limit Before Bed
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Some foods may worsen insomnia regardless of your TCM pattern by generating heat, stimulating the nervous system, or creating digestive burden at night:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee and caffeinated tea after noon</strong> — caffeine directly stimulates the Heart and keeps the Shen restless. The half-life of caffeine may extend 6-8 hours, so afternoon coffee can still affect sleep.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol before bed</strong> — while alcohol may help you fall asleep faster, it often causes waking in the second half of the night and reduces sleep depth. In TCM, alcohol generates Damp-Heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy dinners</strong> — spicy food adds internal Heat, which can keep the Liver and Heart overactive at night.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Large meals within 3 hours of bedtime</strong> — the Stomach working hard to digest is one of the most common sleep disruptors in TCM. A light dinner is consistently recommended.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Sugar and sweets in the evening</strong> — a spike and crash in blood sugar may cause waking around 2-3 AM.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Better Sleep in Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine emphasizes rhythm and timing as much as food. These habits align with the TCM organ clock and may support natural sleep cycles:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Be in bed by 11 PM.</strong> In the TCM organ clock, 11 PM to 1 AM is Gallbladder time and 1 to 3 AM is Liver time. These hours are when the body restores Blood and energy. Missing this window consistently may gradually deplete Yin and Blood.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat dinner early and keep it light.</strong> A heavy dinner keeps the Stomach active into the night. Aim to finish eating by 6 or 7 PM, and keep portions moderate.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Create a screen-free wind-down.</strong> At least 45 minutes before bed, shift away from phones and computers. The blue light and mental stimulation keep the Shen active. Read a physical book, stretch, or listen to calm music instead.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Soak your feet in warm water.</strong> A 10-15 minute warm foot soak before bed draws energy downward, away from the head. In TCM, this is a simple technique to "bring the fire down" and calm the mind.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Process emotions before lying down.</strong> If anger, worry, or excitement is held in the body, it will keep the Liver and Heart active. Journaling, talking, or even a few minutes of breathing can help release the day&apos;s tension.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Keep the bedroom cool and dark.</strong> Heart Yin needs a cool, quiet environment to settle. A room that is too warm or too bright keeps the Shen restless.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Try a calming tea routine.</strong> A small cup of warm chrysanthemum tea (for Liver Fire) or lotus seed soup (for Heart Yin) taken 30-45 minutes before bed may gently support the transition into sleep.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Which Body Type Is Most Prone to Insomnia?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Insomnia is not limited to one body type, but certain constitutions are more susceptible. The <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient type</Link> tends toward Heart and Kidney Yin Deficiency patterns, with night sweats and a restless mind. The <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant type</Link> more often develops Liver-based insomnia, waking between 1 and 3 AM with active thoughts.
        </p>
        <p className="text-text2 leading-relaxed">
          Understanding your body type can help you identify which foods and habits may work best for your specific pattern of sleep difficulty. Our <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link> covers sleep patterns as part of the assessment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Chronic insomnia can be a sign of medical conditions including sleep apnea, thyroid disorders, depression, anxiety disorders, and medication side effects. If your insomnia persists for more than a few weeks, is accompanied by loud snoring, daytime sleepiness, mood changes, or significantly impacts your daily functioning, please consult a healthcare provider. Chinese medicine food therapy and lifestyle adjustments may complement but should not replace professional medical evaluation and treatment for serious sleep disorders.
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
