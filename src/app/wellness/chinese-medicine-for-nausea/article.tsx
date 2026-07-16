import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForNauseaArticle() {
  const slug = "chinese-medicine-for-nausea"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Nausea</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Nausea: Stomach Qi, Dampness, and Foods That May Settle Your Stomach
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, nausea happens when Stomach Qi goes the wrong way. Normally Stomach energy descends, pushing food downward. When it rebels upward instead, you feel queasy. Several patterns can cause this. Stomach Cold brings nausea that feels better with warmth and worse with cold drinks. Spleen Qi Deficiency brings mild chronic nausea with fatigue after eating. Stomach Heat brings nausea with sour burps and a burning feeling. Liver Qi Stagnation invading the Stomach brings nausea triggered by stress or mood. Ginger is the single most used food in TCM for settling the stomach across all these patterns. This kind of imbalance can be associated with the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link>, and you can confirm your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Nausea
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The Stomach in Chinese medicine is like a descending escalator that occasionally goes in reverse. It receives whatever you eat and drink, and its job is to send that mixture steadily downward. Beside it, the Spleen extracts the nutrients and passes the waste along. When that downward flow reverses, the contents try to climb back up, and the body reads the upward push as nausea.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This is why TCM describes nausea as Stomach Qi rebelling upward rather than as a standalone problem. The queasiness itself is only a signal. Something underneath, whether cold, heat, weakness, or stress, has disrupted the natural descent. Until that underlying cause is addressed, the escalator keeps misfiring after every meal. You can read more about the system that supports this flow in our guide on <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The contrast with a Western view is worth noting. Western medicine tends to treat nausea as a symptom to suppress, often with medication that blocks the signal. Chinese medicine asks why the signal is firing in the first place. Is the Stomach too cold? Too hot? Too tired? Is a tense Liver pressing on it? The answers point to different food directions, and ginger is only the starting point.
        </p>
        <p className="text-text2 leading-relaxed">
          Another layer is Phlegm. When the Spleen cannot move fluids cleanly, some of them congeal into a sticky residue that TCM calls Phlegm. Phlegm collects in the Stomach and gives the upward rebellion something solid to push against, which is why some people feel a lump or a wave of stickiness right before the nausea hits. The <Link href="/symptoms/why-do-i-have-nausea" className="text-accent hover:underline">nausea symptom page</Link> walks through how this shows up day to day.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Nausea Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because the Stomach can rebel upward for several reasons, matching your nausea to the right pattern matters. A food that warms a cold Stomach can aggravate a hot one, and a strategy that builds strength in a tired Spleen will not help when the real culprit is a stressed Liver. The table below maps the four patterns most often behind chronic queasiness, the texture of nausea each one produces, the company it keeps, and the food direction it tends to respond to.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Nausea Type</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Stomach Cold</td>
                <td className="px-3 py-2">Nausea better with warmth, worse with cold</td>
                <td className="px-3 py-2">Pale complexion, preference for warm drinks</td>
                <td className="px-3 py-2">Warm the Stomach with ginger, warming foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Mild nausea after eating, fatigue</td>
                <td className="px-3 py-2">Poor appetite, loose stools, bloating</td>
                <td className="px-3 py-2">Strengthen Spleen with easily digested warm foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Stomach Heat</td>
                <td className="px-3 py-2">Nausea with sour reflux, burning</td>
                <td className="px-3 py-2">Dry mouth, thirst for cold drinks, bad breath</td>
                <td className="px-3 py-2">Clear Stomach heat with cooling foods</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Liver Invading Stomach</td>
                <td className="px-3 py-2">Nausea triggered by stress or anger</td>
                <td className="px-3 py-2">Chest tightness, irritability, mood swings</td>
                <td className="px-3 py-2">Soothe Liver, regulate Stomach Qi</td>
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
          What Causes or Worsens Nausea
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Nausea rarely arrives out of nowhere. It usually follows a pattern of habits that slowly wear down the Stomach's ability to descend. The triggers below are the ones that turn an occasional wave into a daily nuisance.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Cold and Raw Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Stomach runs on warmth. Iced drinks, chilled salads, and food straight from the refrigerator force it to heat everything back up before it can work, and that steady drain slowly weakens the digestive fire. Cold also sits heavy and tends to rise back up, which is why a glass of ice water can trigger queasiness within minutes.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Eating Too Fast or Too Much</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Gobbling a meal means the Stomach receives a large load all at once with no warning, and overloading it past its capacity leaves nowhere for the food to go but up. Both habits overwhelm the descending flow and invite rebellion.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Emotional Tension</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver is the organ most sensitive to mood in TCM, and it sits right beside the Stomach. When frustration, anger, or anxiety tighten the Liver, its energy tightens and presses sideways into the Stomach. The Stomach cannot descend against that pressure, so its Qi rebels upward instead. This is the classic Liver invading Stomach pattern behind stress nausea.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Irregular Meal Times</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Stomach, like the rest of the body, does well with a predictable rhythm. Skipping meals and then eating heavily throws its timing off. An empty Stomach left waiting can grow weak, and an overloaded one can grow resentful, and either state makes upward rebellion more likely.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Morning and Motion Triggers</h3>
        <p className="text-text2 leading-relaxed">
          Some nausea follows a rhythm of its own. Morning queasiness on rising can point to Phlegm or a tired Spleen that has been working overnight, while motion triggers and dizziness often involve a pattern TCM calls Phlegm dizziness. In both, the residue clouding the middle gives the upward Qi something to push.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          For nausea, the food direction usually leans warm, gently aromatic, and easy to break down. Ginger sits at the head of the list because it both warms the Stomach and coaxes its Qi back downward, which is why a cup of ginger tea can settle a wave of queasiness so quickly. Warming peels and seeds move sluggish energy, soft porridge gives a tired Stomach almost nothing to fight, and a few cool pungent leaves quietly relax a tense Liver. The eight foods below are among the most used for settling a rebellious Stomach in Chinese medicine food therapy.
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
                <td className="px-3 py-2">The classic stomach-settling food, warms and descends Stomach Qi</td>
                <td className="px-3 py-2">Fresh in tea, or crystallized</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Tangerine peel (chenpi)</td>
                <td className="px-3 py-2">Warm, pungent/bitter</td>
                <td className="px-3 py-2">Moves Qi, reduces fullness, settles stomach</td>
                <td className="px-3 py-2">Steep dried peel in hot water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cardamom</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms the middle, eases nausea and bloating</td>
                <td className="px-3 py-2">One pod in tea or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Rice porridge (congee)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Gentle on a sensitive stomach, easy to digest</td>
                <td className="px-3 py-2">Slow-cooked with extra water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sweet potato</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens Spleen, easy to digest</td>
                <td className="px-3 py-2">Steamed or in congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mint</td>
                <td className="px-3 py-2">Cool, pungent</td>
                <td className="px-3 py-2">Gently moves Liver Qi for stress-related nausea</td>
                <td className="px-3 py-2">Fresh leaves in warm water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Fennel seeds</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Reduces gas and settles digestion</td>
                <td className="px-3 py-2">Steep as tea after meals</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shanyao)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens Spleen and Stomach</td>
                <td className="px-3 py-2">In soup or steamed</td>
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
          For a tendency toward nausea, the foods below may worsen symptoms by reversing the Stomach's downward flow, adding dampness that weighs it down, or irritating patterns that already run hot. Easing off them for a few weeks can let the settling foods do their work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks.</strong> Cold directly reverses Stomach Qi flow and can trigger queasiness within minutes.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw salads and cold sandwiches.</strong> These are hard to break down when the Stomach is weak, and they tend to sit and rise back up.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Greasy fried foods.</strong> Heavy fats create dampness that slows digestion and gives the upward Qi more to push against.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy products.</strong> Milk and cheese are damp-forming in TCM and can thicken the fluids that feed nausea.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive sweets.</strong> Concentrated sugar weakens the Spleen that the Stomach depends on for support.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods.</strong> These can irritate Stomach Heat patterns and turn a mild burn into full queasiness.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Foods work best when the habits around eating give the Stomach a calm, warm, predictable environment to descend in. These habits focus on protecting the digestive fire and keeping the downward flow steady.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Sip warm water with ginger first thing in the morning.</strong> A warm cup on waking primes the Stomach to descend before any food arrives.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat small, frequent meals.</strong> A lighter load each time keeps the Stomach from rebelling under pressure.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Always choose warm, cooked foods.</strong> Warmth protects Stomach fire and saves the energy it would spend reheating cold food.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Chew thoroughly.</strong> Digestion starts in the mouth, and well-broken-down food gives the Stomach far less to fight.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Sit down and relax while eating.</strong> Stress tightens the Liver against the Stomach, so a calm meal keeps the downward channel open.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Avoid lying down right after meals.</strong> Staying upright lets gravity help the contents move down instead of back toward the chest.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Try acupressure on the inner wrist point.</strong> The P6 point, known as Neiguan in TCM, sits about three fingers above the wrist crease, and gentle pressure there is a traditional way to settle a wave of queasiness.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Most occasional nausea is harmless and tied to a heavy meal, a stressful morning, or a bumpy ride. Nausea that is persistent, severe, or getting worse should be checked by a qualified healthcare professional. Please see a doctor if nausea comes with persistent vomiting, blood in vomit, signs of severe dehydration such as dizziness and very little urine, unexplained weight loss, or nausea during pregnancy that makes eating or drinking difficult. These signs can be associated with conditions that need proper diagnosis and care. Chinese medicine food therapy may complement, but should never replace, care from a licensed medical provider.
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
