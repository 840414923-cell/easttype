import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForFatigueArticle() {
  const slug = "chinese-medicine-for-fatigue"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Fatigue</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Fatigue: Qi, Spleen &amp; Energy Foods
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, chronic fatigue is not simply &quot;not enough sleep.&quot; It often reflects Qi Deficiency, and Spleen Qi Deficiency in particular. The Spleen produces usable energy from food. When it is weak, no amount of rest resolves the tiredness. Common signs may include fatigue after eating, brain fog, a weak voice, bloating, and a pale complexion. Warm, nourishing foods such as congee, sweet potato, and jujube dates may help rebuild energy gradually over time.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Fatigue
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine does not group all tiredness under one label. It recognizes several distinct kinds of fatigue, each pointing to a different internal imbalance. The way fatigue feels, the time of day it peaks, and what accompanies it all offer clues about which organ system is struggling.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Qi Deficient fatigue tends to feel like a chronic, low-grade drain. A person might wake already tired, run out of steam by mid-afternoon, and find that rest gives only short-lived relief. The tiredness is steady rather than sudden, and it can be associated with a soft voice, loose stools, and a reluctance to speak much.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Yang Deficient fatigue layers coldness on top of exhaustion. People with this pattern often feel chilled, crave warmth, and notice their energy sinks further in cold weather or after cold foods. The underlying issue is that the body&apos;s metabolic fire is running too low to generate heat and forward drive.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Blood Deficient fatigue tends to come with dizziness, paleness, blurred vision, and dryness. Here the problem is not a lack of drive but a lack of nourishment. The tissues and the mind are underfed, which can produce tiredness that worsens with exertion, standing up quickly, or the days around a menstrual cycle.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Stagnant fatigue has a different quality altogether. It feels less like an empty battery and more like a blocked one. People describe waking up stiff, feeling heavy and tense, and sighing often. In this case the energy exists, but it cannot circulate freely, so the body feels exhausted even when the reserves are not truly low.
        </p>
        <p className="text-text2 leading-relaxed">
          The central question in TCM is therefore not &quot;how tired are you&quot; but &quot;where is the energy leak?&quot; Is the Spleen failing to produce enough energy from food? Is the Kidney reserve running low after years of overwork? Is the Liver failing to keep energy moving freely? Each answer points to a different path. If you sense your tiredness has a specific texture to it, our page on <Link href="/symptoms/why-am-i-always-tired" className="text-accent hover:underline">why you are always tired</Link> explores how these patterns show up in daily life.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Fatigue Patterns and Their Signs
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most persistent fatigue in Chinese medicine falls into one of several recognized patterns. Knowing which one matches your experience can help guide food and lifestyle choices. The four patterns below are among the most common. Their signs can overlap, so a single person may show features of more than one at the same time, especially after years of strain.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Type of Fatigue</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Core Issue</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Tired after eating</td>
                <td className="px-3 py-2">Bloating, brain fog, poor appetite</td>
                <td className="px-3 py-2">Spleen cannot produce energy from food</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Kidney Yang Deficiency</td>
                <td className="px-3 py-2">Deep exhaustion</td>
                <td className="px-3 py-2">Feeling cold, frequent urination, low back pain</td>
                <td className="px-3 py-2">Metabolic fire is low</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart Blood Deficiency</td>
                <td className="px-3 py-2">Tired with anxiety</td>
                <td className="px-3 py-2">Poor memory, insomnia, pale face</td>
                <td className="px-3 py-2">Not enough Blood to ground the mind</td>
              </tr>
              <tr className="bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Tired from tension</td>
                <td className="px-3 py-2">Irritability, sighing, feeling stuck</td>
                <td className="px-3 py-2">Energy is blocked, not depleted</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          A key distinction is whether energy is genuinely depleted or merely blocked. Spleen and Kidney patterns involve a real shortage of fuel. Liver Qi Stagnation, by contrast, involves energy that exists but cannot flow, which is why it tends to produce a tired yet wired feeling rather than simple exhaustion.
        </p>
        <p className="text-text2 text-sm leading-relaxed">
          If these descriptions resonate, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you confirm which constitution you lean toward. You can also read our detailed guides on <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> and <Link href="/wellness/kidney-yang-deficiency" className="text-accent hover:underline">Kidney Yang Deficiency</Link> for food lists that match each pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Chronic Fatigue in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine looks for the root cause behind a pattern rather than treating fatigue as an isolated symptom. Four causes appear again and again in cases of low energy, and most long-term tiredness traces back to some combination of them.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Irregular Eating and Cold Foods
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen thrives on warm, regular meals. Cold drinks straight from the fridge, large raw salads, and skipped breakfast all force the Spleen to work harder with less support. Over months and years, this slow drain can leave the digestive system too tired to extract energy efficiently from anything you eat. The result is a person who eats well on paper yet still feels undernourished.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Overwork and Insufficient Rest
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Working past the point of natural tiredness draws on the Kidney reserves, which in TCM are the body&apos;s deep battery. This is especially true for people who lean on coffee to push through the afternoon dip. Borrowed energy still has to be repaid, and over time the debt may show up as exhaustion that a single weekend of sleep can no longer fix.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Chronic Worry and Overthinking
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen is affected by excessive mental work. Studying, planning, and replaying worries all consume Spleen Qi. Students, overthinkers, and people in demanding knowledge roles may notice that mental strain and low physical energy tend to rise and fall together. When fuzzy thinking is part of your fatigue, our page on <Link href="/symptoms/why-do-i-have-brain-fog" className="text-accent hover:underline">why you have brain fog</Link> may offer useful context.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Constitutional Tendency
        </h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with lower baseline energy reserves. The Qi Deficient body type tends toward the patterns described above and may need steadier support with food, warmth, and a consistent daily rhythm. This is not a flaw, only a starting point that shapes how the body responds to strain. You can learn more on our <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link> page.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Rebuild Energy
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because fatigue has different roots in Chinese medicine, the foods that may help depend on your pattern. For most Qi and Yang deficient patterns, warm, cooked, easily digested foods are the starting point. Cold and raw foods are harder work for an already tired Spleen. The table below lists foods traditionally used to support energy. None are quick fixes; their effects build gradually with consistent use over weeks.
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
                <td className="px-3 py-2 font-medium text-text">Rice congee</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Pre-digested grain, easiest form to absorb</td>
                <td className="px-3 py-2">Simmer rice in extra water until soft</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sweet potato</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens Spleen, builds Qi</td>
                <td className="px-3 py-2">Steamed, roasted, or in congee</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese dates (jujube)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Classic Qi and Blood tonic</td>
                <td className="px-3 py-2">5 to 8 in tea, congee, or soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens Spleen and Kidney</td>
                <td className="px-3 py-2">Boiled in soup or steamed</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Ginger tea</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms digestive fire</td>
                <td className="px-3 py-2">Thin slices steeped in hot water</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chicken broth</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Deeply nourishing</td>
                <td className="px-3 py-2">Slow-cooked with root vegetables</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Supports Liver and Kidney</td>
                <td className="px-3 py-2">Small handful in tea or porridge</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pumpkin</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Supports Spleen</td>
                <td className="px-3 py-2">Roasted or steamed as a side</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Millet porridge</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Easily digested grain</td>
                <td className="px-3 py-2">Cooked soft as a breakfast base</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Drain Your Energy
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Just as some foods may support energy, others may quietly drain it, especially for someone whose Spleen is already weak. The items below tend to weaken digestion, overstimulate, or deplete reserves over time:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks:</strong> cold can extinguish digestive fire, forcing the Spleen to generate extra warmth just to process a meal.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw salads:</strong> raw vegetables are hard for a weak Spleen to break down, which may leave you more tired after eating them rather than refreshed.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much coffee:</strong> caffeine borrows energy from tomorrow rather than making new energy today, and over time it may deplete the Kidney reserves it leans on.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Large heavy meals late at night:</strong> the body does its deepest repair during sleep, and a full stomach can divert energy away from that work.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive sugar:</strong> refined sugar gives a quick spike followed by a crash, and that crash can be associated with deeper fatigue than before.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy or greasy foods:</strong> these tend to generate internal heat and dampness, which may burden digestion and leave you feeling sluggish.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Steady Energy
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only one side of the picture. Chinese medicine places equal weight on rhythm, warmth, and respecting the body&apos;s natural signals. The habits below may help protect and rebuild energy over time when practiced consistently rather than in bursts:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat breakfast between 7 and 9 AM.</strong> In the TCM body clock, this is the Stomach and Spleen peak time, when digestion is strongest. A warm breakfast in this window may be absorbed more efficiently than the same food eaten later.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Chew each bite 20 to 30 times.</strong> Thorough chewing does some of the Spleen&apos;s work in advance, easing the load on digestion so less energy is spent breaking food down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Eat at consistent times daily.</strong> A stable meal rhythm trains the Spleen to expect fuel and helps energy stay level through the day instead of spiking and dipping.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Rest when tired instead of pushing through.</strong> Pushing past natural tiredness draws on reserves that take much longer to rebuild, so a short rest early may save energy later.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Get morning sunlight.</strong> Early daylight supports Yang energy and may help set a steadier wake and sleep rhythm for the whole day.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Move gently with walking, stretching, or Tai Chi.</strong> Gentle movement encourages Qi to circulate without the depletion that exhausting cardio can cause in someone who is already low.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Reduce caffeine dependency gradually.</strong> Cutting back slowly, with warm food and rest as substitutes, may ease the Kidney strain that daily stimulants tend to create.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chronic fatigue can signal real medical conditions that food therapy alone cannot address. Lasting low energy can be associated with thyroid disorders, iron-deficiency anemia, vitamin D or B12 deficiency, sleep apnea, depression, and several autoimmune conditions. If your fatigue is severe, keeps getting worse, or comes with unintended weight loss, fever, or shortness of breath, please see a doctor for blood work and a full evaluation.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine may complement medical care, but it does not replace it. Getting a clear diagnosis first can help you combine the two approaches safely. If you are unsure where your tiredness fits, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> may help you understand your constitution alongside professional guidance.
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
