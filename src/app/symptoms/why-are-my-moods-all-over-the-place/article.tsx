
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAreMyMoodsAllOverArticle() {
  const slug = "why-are-my-moods-all-over-the-place"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Mood Swings</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Are My Moods All Over the Place? The Internal Pressure Cooker
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You're fine. Genuinely fine. Then someone says something slightly off and you're furious. Or tearful. Or both at the same time, which is confusing for everyone involved. An hour later you're fine again, wondering what just happened. Your partner walks on eggshells. Your friends have started saying "are you okay?" more often. You say yes, because in the moment you are. But the pattern keeps repeating.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Mood swings like this are exhausting. Not because any single swing is so terrible, but because you never know which version of yourself is going to show up. You start to distrust your own reactions. Was that a reasonable response, or was that the mood swing? You can't tell anymore.
        </p>
        <p className="text-text2 leading-relaxed">
          There are many reasons for mood swings, and hormones are usually the first suspect. But if you've had blood work done and everything checks out, or if the mood swings don't follow any obvious hormonal cycle, Chinese medicine offers a framework that goes beyond hormones and neurotransmitters. It looks at how your energy flows, and what happens when it doesn't.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What This Kind of Mood Instability Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this sounds like you, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Your mood can shift dramatically within minutes",
            "Small things trigger disproportionately big emotional reactions",
            "You often feel frustrated or irritated without a clear cause",
            "You suppress emotions during the day, then explode over nothing",
            "You sigh frequently and feel like something is stuck inside",
            "Your mood improves after crying, exercising, or venting",
            "You feel worse when you're stressed, sedentary, or emotionally bottled up",
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
          Rule Out the Obvious First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before looking at Eastern patterns, it's worth checking the basics. Hormonal fluctuations (PMS, perimenopause, thyroid dysfunction) are the most common cause of mood swings. If you haven't had your thyroid and reproductive hormones checked recently, that's a good starting point. Blood sugar instability can also cause mood swings: if your glucose crashes after a high-carb meal, irritability and mood drops often follow.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Chronic stress and burnout can make anyone emotionally volatile. Poor sleep amplifies every emotional response. Certain medications, including birth control and some antidepressants, can affect mood stability. If any of these apply, addressing them directly is the first step.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people have normal hormones, reasonable stress levels, decent sleep, and still feel emotionally unstable. That's where the Eastern perspective becomes relevant.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Mood Swings
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, emotional stability depends on smooth energy flow. The Liver is responsible for keeping your Qi (energy) moving freely throughout your body. When Liver Qi flows well, emotions move through you naturally: you feel something, you process it, you move on. When Liver Qi gets stuck, emotions build up like water behind a dam. The pressure increases until something triggers a release, and then it all comes out at once.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is Qi Stagnation, and it's the primary pattern behind mood swings that don't have a clear hormonal or medical cause. Think of it like a pressure cooker. If the steam can escape gradually through the valve, everything is fine. But if you seal the valve (by suppressing emotions, sitting too much, or never expressing yourself), pressure builds until it blows. The explosion is the mood swing. The release feels good for a moment, but then the cycle starts again.
        </p>
        <p className="text-text2 leading-relaxed">
          What makes Qi Stagnation worse? Emotional suppression (bottling things up), lack of physical movement, irregular eating patterns, and chronic stress. What makes it better? Movement, emotional expression, creative outlets, and foods that encourage smooth energy flow.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind the Mood Swings
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the one most prone to mood swings. About 8% of people fall into this category. Their energy tends to get stuck rather than flow freely. Common signs include chest tightness, frequent sighing, a feeling of something being stuck inside, and unpredictable emotional reactions that seem out of proportion to the trigger.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People with this pattern often describe themselves as "highly strung" or "wound tight." They're not necessarily anxious or depressed. They're just running on pressurized energy that needs to move. When it can't move, it finds other ways out: sudden anger, unexpected tears, irritability, or the overwhelming urge to just leave the room.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Stabilize Your Moods
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most effective thing for Qi Stagnation is movement. Not intense workouts that add more stress. Gentle, consistent movement that gets your whole body involved. Walking, dancing, stretching, swimming, or even just standing up and shaking out your limbs when you feel tension building. A 20-minute walk can do more for mood stability than an hour in the gym if Qi Stagnation is your pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Express yourself. This is not a platitude, it's a TCM prescription. Qi Stagnation feeds on suppression. Journaling, talking to a friend, creative hobbies, singing in the car, having that difficult conversation you've been avoiding. These aren't just "good advice," they're literally how you move stuck energy. People with this pattern often feel dramatically better after a good cry or an honest conversation.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Drink teas that encourage smooth energy flow. Rose tea is one of the oldest TCM recommendations for emotional tension. Tangerine peel tea (chenpi) helps move stagnant energy through the chest. Chamomile and peppermint are gentle options for everyday use.
        </p>
        <p className="text-text2 leading-relaxed">
          Watch your intake of things that increase internal pressure: excessive caffeine, alcohol, very spicy food, and heavy meals. These don't cause Qi Stagnation directly, but they add heat and pressure to a system that's already struggling to flow.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your mood swings are severe, affecting your relationships, or accompanied by periods of extremely low mood, thoughts of self-harm, or manic episodes, please consult a licensed healthcare provider. These may be signs of a mood disorder that requires professional support.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">
            Stuck Energy Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3AM?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
