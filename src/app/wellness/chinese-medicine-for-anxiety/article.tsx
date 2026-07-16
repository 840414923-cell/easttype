import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForAnxietyArticle() {
  const slug = "chinese-medicine-for-anxiety"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Anxiety</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Anxiety: Patterns, Causes &amp; Calming Foods
      </h1>
      <p className="text-text2 text-sm mb-6">11 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine does not treat anxiety as one uniform condition. The underlying pattern matters. When anxiety comes with irritability, sighing, and chest tightness, it may point to Liver Qi Stagnation. When it arrives with palpitations, night sweats, and a racing mind at night, Heart Yin Deficiency may be involved. Each pattern calls for different foods and habits. Chinese medicine works to restore internal balance rather than suppress symptoms alone. This approach may complement, but does not replace, professional mental health care.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Anxiety
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, anxiety is not treated as a problem that lives only in the brain. It is understood as a sign that one or more organ systems have fallen out of balance. Three organs are central to how the mind feels calm or unsettled: the Heart, the Liver, and the Spleen.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Heart, in TCM theory, houses the Shen. The Shen can be described as the spirit or the seat of conscious awareness. When the Heart has enough Blood and Yin to anchor it, the Shen stays settled and the mind feels quiet. When the Heart is disturbed by Heat, or when it lacks the nourishment of Blood and Yin, the Shen may become restless. This restlessness can be experienced as anxiety, palpitations, or a mind that refuses to switch off.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver is responsible for the smooth flow of Qi and emotions. When Liver Qi moves freely, frustration, anger, and stress pass through and release. When Liver Qi stagnates, often from suppressed feelings or chronic pressure, the stuck energy creates a sense of tightness and tension. Many people describe this as pressure in the chest or a short temper that flares without warning.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen produces Blood from food. When the Spleen is strong, the Blood it makes helps ground the mind. When the Spleen is weakened by worry, overthinking, or irregular meals, Blood production may drop and the mind loses its anchor. This is one reason anxiety and constant rumination often travel together.
        </p>
        <p className="text-text2 leading-relaxed">
          This view differs from Western psychiatry, which tends to focus on neurotransmitters such as serotonin and dopamine. Chinese medicine instead asks which organ system is out of balance and why. Two people with nearly identical symptoms may receive very different guidance once their pattern is identified. If you sense that your thinking never slows down, our page on <Link href="/symptoms/why-do-i-overthink-everything" className="text-accent hover:underline">why you overthink everything</Link> explores this connection.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Three Common Anxiety Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most cases of anxiety in Chinese medicine fall into one of several recognizable patterns. Identifying which one fits your experience can help guide food and lifestyle choices. The four patterns below are among the most common. Their symptoms may overlap, so a single person can show features of more than one.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Symptoms</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What Triggers It</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Principle</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Irritability, sighing, chest tightness, PMS</td>
                <td className="px-3 py-2">Suppressed emotions, chronic stress</td>
                <td className="px-3 py-2">Soothe and move Liver Qi</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Palpitations, insomnia, racing mind</td>
                <td className="px-3 py-2">Overwork, aging, late nights</td>
                <td className="px-3 py-2">Nourish Heart Yin, clear empty heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart and Spleen Blood Deficiency</td>
                <td className="px-3 py-2">Worry, overthinking, fatigue, poor memory</td>
                <td className="px-3 py-2">Excessive mental work, poor diet</td>
                <td className="px-3 py-2">Tonify Blood, strengthen Spleen</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Fear, dizziness, tinnitus</td>
                <td className="px-3 py-2">Aging, chronic overwork, prolonged fear</td>
                <td className="px-3 py-2">Nourish Kidney Yin</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you recognize yourself in one of these patterns, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help confirm which constitution you lean toward. You can also read more about <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link> and <Link href="/wellness/heart-yin-deficiency" className="text-accent hover:underline">Heart Yin Deficiency</Link> for detailed food guides.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Anxiety in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine looks for the root cause of a pattern rather than focusing only on the symptom. Three factors repeatedly show up in anxiety cases: long-held stress and emotion, mental overuse, and the constitution you were born with.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Chronic Stress and Suppressed Emotions
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver is the organ most affected by emotional strain. Bottled-up frustration, resentment, and unspoken anger tend to stagnate Liver Qi over time. When energy cannot flow, it turns into pressure, which many people feel as chest tightness, a lump in the throat, or a short fuse. Unprocessed grief and prolonged worry can also deplete the Heart and Spleen, leaving the mind undernourished and prone to restless thoughts.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Overthinking and Mental Exhaustion
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen is weakened by excessive mental work. In TCM, the act of studying, planning, and worrying consumes Spleen Qi. As the Spleen grows tired, it produces less Blood, and the mind loses the grounding that Blood provides. This is why people in intense mental roles may notice that anxiety, poor focus, and digestive trouble appear together. Rest, regular meals, and warmth all help support a Spleen that has been overworked.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Constitutional Tendency
        </h3>
        <p className="text-text2 leading-relaxed">
          Some people are simply born more susceptible to anxiety patterns. The Qi Stagnant constitution, in particular, tends toward emotional sensitivity, mood swings, and tension held in the chest. This does not mean anxiety is fixed or inevitable, only that the body may need more consistent support with movement, expression, and the right foods. You can learn more on our <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant body type</Link> page.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Calm Anxiety
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because anxiety has different root causes in Chinese medicine, the foods that may help depend on your pattern. Warming, building foods suit Blood Deficiency, while cooling, moistening foods suit patterns with Heat and deficient Yin. The table below maps common calming foods to the patterns they may benefit most. None of these are quick fixes; their effects build gradually with consistent use over weeks.
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
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum tea</td>
                <td className="px-3 py-2">Cool, aromatic</td>
                <td className="px-3 py-2">Liver Fire / Qi Stagnation</td>
                <td className="px-3 py-2">Drink in the afternoon</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus seed (lian zi)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Simmer into a sweet soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lily bulb (bai he)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Heart calming</td>
                <td className="px-3 py-2">Cook with lotus seed and rock sugar</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Red dates (jujube)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Blood building</td>
                <td className="px-3 py-2">5 to 8 in tea or congee</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Wheat (floating wheat)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Heart calming, night sweats</td>
                <td className="px-3 py-2">Boil as a light tea</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Longan fruit (gui yuan)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Blood building</td>
                <td className="px-3 py-2">10 dried fruits in warm water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Liver and Kidney Yin</td>
                <td className="px-3 py-2">Small handful in tea</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Oyster</td>
                <td className="px-3 py-2">Cool, salty</td>
                <td className="px-3 py-2">Anchoring rising Yang</td>
                <td className="px-3 py-2">In soup or steamed</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Mulberry</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Blood and Yin Deficiency</td>
                <td className="px-3 py-2">Fresh or dried as a snack</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods and Habits to Limit
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Certain foods and habits may worsen anxiety regardless of your TCM pattern by adding heat, overstimulating the Heart, or weakening the Spleen:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee and other caffeine:</strong> caffeine directly stimulates the Heart and keeps the Shen restless. For someone with Heart Yin Deficiency, this can be associated with stronger palpitations and a more racing mind.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol:</strong> alcohol may feel relaxing at first, but in TCM it generates Damp-Heat and tends to worsen Liver stagnation over time, which can make mood swings sharper.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods:</strong> heavy chili and pepper add internal Heat, which may aggravate patterns that already run hot, such as Liver Fire.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Skipping meals:</strong> irregular eating weakens the Spleen, reduces Blood production, and can leave the mind less grounded through the day.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Late-night screens:</strong> the blue light and constant input keep the Shen active and may disturb the sleep that a restless mind depends on to recover.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice-cold drinks:</strong> cold weakens Spleen Yang and slows digestion, which over time can reduce the Blood that helps anchor the mind.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Practices That May Reduce Anxiety
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only one side of the picture. Chinese medicine places equal weight on rhythm, movement, and the release of emotion. The habits below may help move stagnant Qi, settle the Shen, and support the Spleen over time:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Express emotions constructively.</strong> Held-in feelings stagnate Liver Qi. Journaling, talking with someone you trust, or even voice notes to yourself can help frustration move through instead of settling as tension.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Walk outdoors daily.</strong> Gentle movement is one of the simplest ways to encourage Liver Qi to flow. A 20 to 30 minute walk outside, ideally near trees or water, may ease chest tightness and settle a busy mind.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Practice abdominal breathing for five minutes.</strong> Slow breathing into the lower belly anchors energy downward and away from the head. This may be especially useful when a racing mind keeps you tense.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Eat at regular times.</strong> A stable meal rhythm supports the Spleen and helps steady Blood production, which gives the mind a firmer anchor through the day.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Reduce screen time before bed.</strong> Stepping away from phones and computers at least 45 minutes before sleep helps calm the Shen and supports the rest that an anxious nervous system needs.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Try the acupressure point Heart 7 (Shenmen).</strong> This point sits on the wrist crease, on the little-finger side. Gentle pressure for one to two minutes on each wrist is a traditional technique to calm the mind and may help before sleep or during a tense moment.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Soak your feet in warm water before bed.</strong> A 10 to 15 minute foot soak draws energy downward, away from a busy head, and can support the transition into rest.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to Seek Professional Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Anxiety disorders are serious medical conditions, not a sign of weakness or poor willpower. If your anxiety is severe, persistent, or accompanied by panic attacks, depression, or thoughts of self-harm, please reach out to a qualified mental health professional or a trusted support line. Help is available and effective.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine food therapy and lifestyle adjustments may complement therapy or medication, but they should not replace professional care. If you are unsure where your symptoms fall, our overview on <Link href="/symptoms/why-do-i-feel-anxious" className="text-accent hover:underline">why you feel anxious</Link> may offer useful context, and our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you understand your constitution alongside professional guidance.
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
