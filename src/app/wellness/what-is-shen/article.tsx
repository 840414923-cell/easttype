import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function WhatIsShenArticle() {
  const slug = "what-is-shen"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">What Is Shen</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        What Is Shen in Chinese Medicine? The Mind-Body Connection
      </h1>
      <p className="text-text2 text-sm mb-6">Overview</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Shen (神) is often translated as &quot;spirit&quot; or &quot;mind.&quot; In Chinese medicine, the Heart houses the Shen. When the Shen is calm and well-anchored, you sleep deeply, think clearly, and feel emotionally stable. When the Shen is disturbed, you may experience insomnia, anxiety, vivid dreams, palpitations, and restlessness. Nourishing Heart Blood and Heart Yin through food and lifestyle may help anchor the Shen so the mind can settle. You can explore whether this pattern fits your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Shen?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The Chinese character 神 (shén) carries a wide range of meaning. It can be rendered as spirit, mind, consciousness, or the animating presence that makes a person feel alive. In Chinese medicine, Shen is not a soul in the Western religious sense. It is closer to the integration (整合) of consciousness, mental clarity, and emotional presence. When you meet someone whose eyes sparkle, whose attention is steady and warm, and whose words feel coherent and grounded, you are looking at a settled Shen. When the Shen is fragile or scattered, that same presence grows thin and hard to reach.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine places the Shen in the Heart. The Heart (心, xīn) is described as the residence of the spirit, the organ whose job is to anchor consciousness so it can rest, focus, and respond to life with appropriate emotion. Because the Heart holds the Shen, almost every sign of Shen disturbance appears in places the Heart governs: sleep, the face, the tongue, and the rhythm of the pulse. A practitioner reading these signals is, in part, reading the state of the Shen.
        </p>
        <p className="text-text2 leading-relaxed">
          The Shen is visible through four traditional windows. The first is sleep quality. A settled Shen sleeps deeply and wakes refreshed. The second is eye brightness. The eyes of someone with strong Shen are clear and responsive. The third is mental clarity, the ability to hold attention and follow a thought without wandering. The fourth is emotional stability, the capacity to feel joy, sadness, and anger without losing the center. When the Shen is disturbed, one or more of these windows dims, and symptoms such as insomnia, anxiety, palpitations, or vivid dreams can appear. The most common underlying patterns are Heart Blood Deficiency, Heart Yin Deficiency, and Heart Fire. To understand the foundational energy that the Heart relies on, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi means in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs of Healthy vs Disturbed Shen
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because the Shen expresses itself through the body, a careful look at sleep, eyes, speech, and emotion can tell you a great deal about its state. The contrast below is not a diagnostic checklist. It is a map of tendencies. Most people move along this map depending on stress, sleep, season, and life stage. Reading where you sit right now can help you notice the early signs that the Shen needs more support.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Aspect</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Healthy Shen</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Disturbed Shen</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sleep</td>
                <td className="px-3 py-2">Deep, refreshing, easy to fall and stay asleep</td>
                <td className="px-3 py-2">Insomnia, frequent waking, vivid or disturbing dreams</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Eyes</td>
                <td className="px-3 py-2">Bright, clear, focused, responsive</td>
                <td className="px-3 py-2">Dull, restless, darting, or fatigued</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mental clarity</td>
                <td className="px-3 py-2">Sharp, present, able to follow a thought</td>
                <td className="px-3 py-2">Scattered, foggy, hard to concentrate</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Emotions</td>
                <td className="px-3 py-2">Stable, appropriate, easily settled</td>
                <td className="px-3 py-2">Anxious, irritable, emotionally labile</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Speech</td>
                <td className="px-3 py-2">Coherent, calm, well-paced</td>
                <td className="px-3 py-2">Rapid, rambling, or disorganized</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Face</td>
                <td className="px-3 py-2">Composed, alert, with natural color</td>
                <td className="px-3 py-2">Pale or flushed, restless expression</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you notice several of the disturbed Shen signs, you may also want to read about <Link href="/symptoms/why-cant-i-fall-asleep" className="text-accent hover:underline">why you can&apos;t fall asleep</Link> and <Link href="/symptoms/why-do-i-feel-anxious" className="text-accent hover:underline">why you feel anxious</Link>. To see whether your constitution leans toward a Shen-disturbing pattern, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Disturbs the Shen?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          A disturbed Shen rarely has a single cause. Most often it reflects an underlying pattern that has been quietly building for months or years. In Chinese medicine these patterns are described in terms of what the Heart is lacking or what it has too much of. The four patterns below are the most common reasons the Shen grows restless.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Heart Blood Deficiency</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Heart Blood is the dense, grounding substance that gives the Shen a place to rest, much like a soft bed gives the body somewhere to settle at night. When Heart Blood is insufficient, the Shen has nothing to anchor it. The mind grows light, restless, and prone to wandering. Poor sleep, dream-disturbed rest, dizziness, a pale face, and a thin memory can be associated with this pattern. Heart Blood Deficiency may follow heavy menstrual cycles, poor digestion, or long periods of worry and overthinking.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Heart Yin Deficiency</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Heart Yin is the cooling, moistening reserve that keeps the Heart from overheating. When Heart Yin runs low, a kind of empty heat rises and disturbs the Shen at exactly the hour it should rest. The result may be trouble falling asleep, night sweats, a flushed face, and a racing or fluttering sensation in the chest. This pattern often overlaps with menopause and long-standing emotional strain. You can read more in our dedicated guide to <Link href="/wellness/heart-yin-deficiency" className="text-accent hover:underline">Heart Yin Deficiency</Link>.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Heart Fire</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Heart Fire is a pattern of excess heat gathered in the Heart. It can build from prolonged stress, simmering frustration, or a diet heavy in heating foods and stimulants. The Shen is stirred rather than settled. The mouth may develop ulcers, the tongue tip may turn red, and sleep becomes shallow and agitated. The face often flushes and the mind feels buzzy and over-alert. Heart Fire is frequently the endpoint of Heart Yin Deficiency that has gone unaddressed for too long.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">External Shock or Trauma</h3>
        <p className="text-text2 leading-relaxed">
          Chinese medicine also recognizes that a sudden fright can dislodge the Shen. A car accident, a violent argument, the loss of someone close, or any event that overwhelms the system may leave the spirit unsettled for weeks or longer. In this case the disturbance did not arise from a slow depletion. It came from a single overwhelming moment. Time, rest, and gentle routines are usually central to recovery, often alongside supportive foods that rebuild Heart Blood and Heart Yin.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That Calm the Shen
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is one of the most approachable ways to support a settled Shen. The foods below have a long history in Chinese dietary therapy for calming the Heart and quieting the mind. Most are gently nourishing rather than aggressive, and many show up in traditional sweet soups meant to be eaten in the evening to ease the transition into sleep. As with any food therapy, regular small amounts tend to work better than occasional large ones, and evening is often the most supportive time to enjoy them.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus seed (lian zi)</td>
                <td className="px-3 py-2">Calms the Heart and anchors the Shen for deeper sleep</td>
                <td className="px-3 py-2">Simmered in a sweet soup or congee with red dates</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lily bulb (bai he)</td>
                <td className="px-3 py-2">Nourishes Heart Yin and gently clears empty heat</td>
                <td className="px-3 py-2">Stir-fried lightly or added to congee and sweet soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Red date / jujube (hong zao)</td>
                <td className="px-3 py-2">Tonifies Heart Blood and gives the Shen a place to rest</td>
                <td className="px-3 py-2">Brewed in tea or simmered into congee and soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Wheat (floating wheat)</td>
                <td className="px-3 py-2">Nourishes the Heart and helps still a restless mind</td>
                <td className="px-3 py-2">Cooked into porridge or steeped as a light tea</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Longan fruit (gui yuan)</td>
                <td className="px-3 py-2">Builds Heart Blood and calms the spirit</td>
                <td className="px-3 py-2">Eaten dried or brewed into tea and sweet soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Oyster</td>
                <td className="px-3 py-2">May help anchor rising heat and settle the Shen</td>
                <td className="px-3 py-2">Steamed or cooked in a light, clear soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mulberry (sang shen)</td>
                <td className="px-3 py-2">Moistens Yin and gently cools mild internal heat</td>
                <td className="px-3 py-2">Eaten fresh or dried as a small snack</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Goji berries (gou qi zi)</td>
                <td className="px-3 py-2">Gently nourishes Blood and Yin that support the Heart</td>
                <td className="px-3 py-2">A small handful in tea, congee, or warm water</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits to Protect Your Shen
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because the Shen responds so directly to rhythm and rest, the way you structure your day can be as important as what you eat. The habits below teach the nervous system to wind down and give the Heart a stable base. None of them require special tools, only a willingness to repeat them night after night until they become natural.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Keep a wind-down routine one hour before bed.</strong> A predictable sequence of dim light, quiet activity, and warmth tells the Shen that the day is ending.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Avoid intense emotional conversations late at night.</strong> Difficult talks stir the Heart and may keep the Shen awake long after the words have ended.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Reduce screens after 9 PM.</strong> Bright light and constant input scatter attention and push the mind into a state of shallow alertness.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice meditation or slow breathing.</strong> Long, soft exhalations signal the nervous system to shift from doing to resting.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Eat dinner early and light.</strong> A heavy meal late at night generates heat during digestion exactly when the body needs to cool down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Get morning sunlight.</strong> Ten to fifteen minutes of natural light in the morning helps set the body&apos;s sleep rhythm for the following night.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid overstimulation.</strong> Limit caffeine after midday and protect some quiet, unscheduled time each day so the mind has room to settle.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to Seek Help
        </h2>
        <p className="text-text2 leading-relaxed">
          Severe anxiety, panic attacks, hallucinations, or insomnia that significantly disrupts daily life calls for professional care. Shen disturbance in Chinese medicine can overlap with several medical conditions, including generalized anxiety disorder, depression, hyperthyroidism, cardiac arrhythmias, and primary sleep disorders. If your symptoms are intense, persistent, or getting worse, please see a qualified healthcare professional for a proper evaluation. Food therapy and lifestyle changes may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
