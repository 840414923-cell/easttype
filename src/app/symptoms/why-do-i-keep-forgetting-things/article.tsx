
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyForgettingArticle() {
  const slug = "why-do-i-keep-forgetting-things"

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
        Why Do I Keep Forgetting Things? The Sieve Between Your Ears
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You walk into a room and forget why you went in there. You open your phone and can&apos;t remember what you were about to look up. Someone tells you something and thirty seconds later it&apos;s gone, like water poured through a sieve. You start writing things down, then forget where you put the list.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This isn&apos;t just about getting older. Plenty of people in their twenties and thirties describe the same thing. The forgetfulness isn&apos;t random either. It tends to get worse when you&apos;re tired, stressed, or not sleeping well. Which suggests it&apos;s connected to something deeper than just age.
        </p>
        <p className="text-text2 leading-relaxed">
          Traditional Chinese Medicine has a different lens for understanding memory. It connects forgetfulness to specific organ systems and energy patterns in the body. Not in a mystical way, but in a practical way that points to what your body might need to support clearer thinking.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Forgetfulness Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this sounds like you, you probably recognize some of these:
        </p>
        <ul className="space-y-2">
          {[
            "Walking into rooms and forgetting why you went in",
            "Losing your train of thought mid-sentence",
            "Forgetting names of people you know well",
            "Reading something and immediately unable to recall what it said",
            "Misplacing everyday items like keys or your phone",
            "Forgetting tasks you planned to do, even important ones",
            "Feeling like your brain is full but nothing is actually sticking",
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
          The Obvious Causes (Still Worth Mentioning)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Poor sleep is the number one non-medical cause of forgetfulness. When you don&apos;t sleep enough, your brain doesn&apos;t get the time it needs to consolidate memories from the day. Stress and anxiety eat up mental bandwidth, leaving less room for remembering things. Multitasking splits your attention so thin that nothing gets properly stored. Dehydration, poor nutrition, and too much screen time can all play a role.
        </p>
        <p className="text-text2 leading-relaxed">
          These are real factors. But some people sleep fine, eat well, and still feel like their memory has gotten worse. That&apos;s where looking at your body&apos;s energy pattern may offer a different explanation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Forgetfulness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the Kidneys govern the brain and memory. Think of Kidney energy as the deep battery reserve of your body. When Kidney Yin is strong, that battery is charged and your brain stays sharp. When Kidney Yin declines, whether from chronic stress, poor sleep, overwork, or just running on empty for too long, the battery drains. Memory is one of the first things that gets affected.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Heart also plays a role. In Chinese medicine, the Heart houses the mind, meaning it&apos;s responsible for clear thinking and mental clarity. When Heart Blood is insufficient, your mind doesn&apos;t get the nourishment it needs. Thoughts become fuzzy, concentration wavers, and information slips through instead of sticking.
        </p>
        <p className="text-text2 leading-relaxed">
          Think of it like a kitchen. The Kidneys are the pantry that stores ingredients. The Heart is the stove that cooks them into something usable. If the pantry is empty or the stove doesn&apos;t have enough fuel, you can&apos;t make a meal no matter how good the recipe is. Memory works the same way. You need both stores (Kidney Yin) and fuel (Heart Blood) for information to land and stay.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Forgetfulness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Two body types in TCM are especially prone to memory issues.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) often has a hard time holding onto information because their overall energy is low. The body prioritizes essential functions and memory isn&apos;t always top of the list when resources are scarce. About 15% of people fall into this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) tends to run hot and dry. Their internal reserves are low, and the mind can feel overactive but scattered, like a radio that picks up every station at once. They may also have trouble sleeping, which compounds the memory problem. About 8% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">Yin Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Nourish Kidney Yin and Heart Blood with food. Walnuts, black sesame seeds, goji berries, and dark leafy greens are all traditional choices for supporting the Kidney-Heart axis that underlies memory. You don&apos;t need to eat all of these at once. Pick two or three and add them to your regular rotation.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Prioritize sleep like your memory depends on it, because it does. The Kidneys recharge during deep sleep. If you&apos;re consistently getting less than seven hours, your memory is likely paying for it. Going to bed before 11pm is considered ideal in TCM because the body&apos;s repair cycle is strongest in the hours before midnight.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Do one thing at a time. Multitasking is the enemy of memory. When you split your attention, your brain doesn&apos;t properly encode what you&apos;re experiencing, so there&apos;s nothing to retrieve later. If you want to remember something, give it your full attention for even just ten seconds.
        </p>
        <p className="text-text2 leading-relaxed">
          Stay hydrated and eat warm, cooked foods. Cold, raw foods are harder on the Spleen, which in TCM supports the production of Blood. Warm soups, stews, and cooked grains are easier to digest and help your body make the Blood that nourishes your Heart and mind.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your forgetfulness is sudden, getting noticeably worse, affecting your ability to function, or accompanied by confusion, difficulty speaking, or personality changes, please consult a licensed healthcare provider. These can be associated with conditions that require proper medical evaluation.
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
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">Why Am I Always Tired?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
