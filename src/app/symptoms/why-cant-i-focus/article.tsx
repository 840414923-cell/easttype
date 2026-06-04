
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyCantFocusArticle() {
  const slug = "why-cant-i-focus"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Cognitive</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Can&apos;t I Focus? The Attention That Keeps Changing Channels
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You sit down to work and within two minutes your brain has switched to something else. You read the same paragraph three times and still don&apos;t know what it says. You start a task, get halfway through, realize you drifted, and have to start over. It&apos;s not that you don&apos;t care. It&apos;s that your attention has a mind of its own, and it keeps changing channels.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People assume you&apos;re lazy or distracted. You&apos;re not. You might be putting in more effort than the people who can focus easily, because you&apos;re constantly pulling yourself back on track. It&apos;s exhausting. By the end of the day, you feel like you ran a mental marathon but have nothing to show for it.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine looks at focus differently. It doesn&apos;t see poor concentration as a willpower problem. It sees it as an energy problem. Specifically, it sees it as the result of not having enough Qi to sustain mental focus. The fix isn&apos;t trying harder. It&apos;s giving your body what it needs to fuel your mind.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Poor Focus Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is you, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Reading something multiple times without absorbing it",
            "Starting tasks but rarely finishing them in one sitting",
            "Your mind wanders mid-conversation",
            "You need multiple cups of coffee just to feel functional",
            "Simple tasks take much longer than they should",
            "You feel mentally foggy, like thinking through mud",
            "You know what to do but can't sustain the attention to do it",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Causes (That Don&apos;t Tell the Whole Story)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Screens are the usual suspect. Constant notifications, social media, and information overload have shortened attention spans across the board. That&apos;s real. Sleep deprivation, poor diet, lack of exercise, and too much caffeine can all make focus worse. If you&apos;re dealing with a lot of stress or anxiety, your brain is already running background processes, leaving less available for whatever you&apos;re trying to concentrate on.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s the thing. Some people cut out social media, sleep well, eat right, exercise, and still can&apos;t focus. The problem isn&apos;t external. It&apos;s internal. Their body simply doesn&apos;t have the energy reserves to sustain concentrated mental effort. That&apos;s a different problem that requires a different approach.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Poor Focus
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, mental focus requires Qi, your body&apos;s basic energy. Think of Qi like the fuel in a car. When the tank is full, the car runs smoothly and can go the distance. When the tank is near empty, the engine sputters, stalls, and can&apos;t maintain speed. Your brain is no different. It needs a steady supply of Qi to stay focused.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Qi is deficient, it&apos;s like trying to keep a candle lit in a windstorm. The flame keeps flickering and going out. You can shield it with your hands (using willpower and effort), but eventually your hands get tired and the wind wins. The problem isn&apos;t the candle. It&apos;s that there&apos;s not enough shelter and not enough fuel.
        </p>
        <p className="text-text2 leading-relaxed">
          The Spleen in TCM is the organ responsible for transforming food into Qi and Blood. When Spleen Qi is weak, your body doesn&apos;t efficiently convert what you eat into usable energy. Your brain runs on fumes even if you&apos;re eating enough. This is why focus problems often come with physical symptoms too: feeling tired after meals, bloating, loose stools, or a general sense of heaviness.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind the Focus Problem
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the most likely to struggle with focus. About 15% of people fall into this pattern. Their overall energy runs low, and the body has to ration what it has. Physical tasks take priority over mental ones, so focus is one of the first things to go when Qi is scarce.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People with this pattern often describe themselves as &quot;running on empty.&quot; They need more sleep than others, feel tired after eating, and have a hard time pushing through mentally demanding tasks. It&apos;s not laziness. Their tank is genuinely smaller, and it empties faster.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Eat regular, warm meals. This is the foundation. The Spleen needs consistent, easy-to-digest food to produce Qi. Warm soups, stews, cooked grains, and root vegetables are ideal. Cold foods, raw salads, and iced drinks force the Spleen to work harder, which is the last thing it needs when it&apos;s already struggling. Think of it like a campfire. You feed it dry kindling steadily, not a bucket of ice water.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Light movement between tasks. You don&apos;t need a full workout. Just five minutes of stretching, a short walk, or even standing up and moving your arms can help circulate Qi to your brain. Sitting for hours on end pools energy in your lower body and leaves your head underfueled.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Ginseng tea in the morning can be supportive for Qi Deficient types. It&apos;s a gentle way to top up your energy without the jitters and crash that coffee brings. A cup of warm ginger tea with meals can also help the Spleen extract more energy from your food.
        </p>
        <p className="text-text2 leading-relaxed">
          Stop multitasking. It&apos;s not a productivity hack. It&apos;s a Qi drain. Every time you switch tasks, your brain burns energy refocusing. For someone who&apos;s already low on Qi, multitasking is like driving with one foot on the gas and one foot on the brake. Pick one thing. Do it. Then move to the next.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your inability to focus is severe, persistent, or significantly affecting your work, relationships, or daily life, please consult a licensed healthcare provider. Chronic focus problems can sometimes be associated with ADHD, thyroid issues, depression, or other conditions that require proper diagnosis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">Low Vitality Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-brain-fog" className="text-sm text-accent no-underline hover:underline">Why Do I Have Brain Fog?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-keep-forgetting-things" className="text-sm text-accent no-underline hover:underline">Why Do I Keep Forgetting Things?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
