"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysSleepyArticle() {
  const slug = "why-am-i-always-sleepy"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Always Sleepy</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Sleepy? The Fog That Won't Lift
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          If you're fighting to keep your eyes open by 2 PM every day, even though you slept fine the night before, you know how this goes. The eyelids get heavy. Your head feels like it's stuffed with cotton. You'd give almost anything for a 20-minute nap, and sometimes you sneak one in your car during lunch. This isn't laziness. Something in your body is making you drowsy, and it's worth figuring out what.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here's the thing that might surprise you: being sleepy all the time is different from being tired all the time. They feel similar, but in Chinese medicine, they come from different root patterns and need different approaches. Tired is your body saying "I'm out of gas." Sleepy is more like your body saying "something heavy is sitting on my engine." Same outcome, different cause.
        </p>
        <p className="text-text2 leading-relaxed">
          This distinction matters because the approach that helps with one won't necessarily help with the other. Taking a nap might temporarily fix the sleepy feeling, but if the root pattern is Dampness, you'll wake up feeling just as groggy. Let's dig into what's actually going on.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What's Behind the Constant Sleepiness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The obvious reasons first: not enough sleep, poor sleep quality, sleep apnea, certain medications, and blood sugar crashes from eating too many refined carbs. All real possibilities. Sleep apnea in particular is underdiagnosed and worth checking for if you snore, wake up gasping, or feel like you barely slept despite being in bed for 8 hours.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          But if you've addressed all of those and still feel like you're walking through molasses every afternoon, there might be something else happening. Some people find that no matter how much sleep they get, no matter how clean their diet is, the drowsiness persists. That's when looking at your body's constitutional patterns can open up a whole new set of options.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, chronic daytime sleepiness that doesn't respond to more sleep usually comes down to two patterns: Qi Deficiency (not enough energy to stay alert) or Phlegm Damp (a heavy, foggy, wet quality weighing down your mental clarity). Sometimes both are present, creating a double-whammy of low energy plus heavy fog.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Daytime Sleepiness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Let's start with Qi Deficiency, since it's the more straightforward one. Your body needs Qi to stay alert and functional. When Qi is low, your brain doesn't have enough fuel to maintain clear consciousness. It's like a laptop in power-saving mode. The screen dims, the processor slows down, and everything takes longer. You're not broken, just underpowered.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Now the more interesting one: Phlegm Damp (痰湿). This is where Chinese medicine gets really specific about sleepiness. Phlegm Damp is basically moisture that has accumulated and thickened in your body, creating a heavy, sticky quality. When Phlegm Damp affects your head, it literally clouds your thinking and makes you drowsy. Think of it like fog rolling in over a landscape. Everything is still there, but you can't see clearly, and the weight of it makes you want to close your eyes.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          What creates Phlegm Damp? Mostly diet and digestion. Eating too many Damp-producing foods (dairy, sweets, fried food, cold drinks, excessive fruit) when your digestion is already weak gives your body more moisture than it can process. Over time, that excess moisture thickens into Phlegm. Some people are constitutionally prone to this pattern, meaning their body naturally holds onto moisture more than others.
        </p>
        <p className="text-text2 leading-relaxed">
          Phlegm Damp sleepiness has a distinct quality. It's not just "I need more sleep." It's more like "I feel like my head is wrapped in a wet towel." There's a heaviness, a fogginess, a sense that your brain is wading through mud. You might also notice a coated tongue (especially thick and greasy), a feeling of fullness in your chest or stomach, and a general sense that everything takes more effort than it should.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Sleepiness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and daytime sleepiness shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is sleepy because they're running on empty. Their battery is small and drains fast. They need frequent recharging and don't have the energy reserves to stay sharp all day. About 15% of people have this pattern. They tend to be the ones who crash hard in the afternoon and need that midday pick-me-up just to function.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is sleepy because of the fog. They have energy, but it's buried under layers of moisture. These folks often carry weight around their middle, have oily skin, feel worse in humid weather, and experience that characteristic head-in-a-cloud feeling. About 10% of people fit this type. Coffee doesn't really help them because the problem isn't low stimulation, it's that the stimulation can't get through the fog.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Clearing the Fog: Practical Steps
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is your main pattern, the approach is about building energy. Warm, cooked, easily digestible foods are your friend. Congee (rice porridge), sweet potato, jujube dates, ginger tea, and chicken broth are all solid choices. Avoid cold, raw foods that drain what little energy you have. Get to bed before 11 PM, and add gentle movement like walking or tai chi rather than exhausting workouts.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Phlegm Damp is more your issue, the focus shifts to draining moisture. Adzuki beans, coix seed (Job's tears), winter melon, celery, and modest amounts of green tea are traditionally used to help the body process and release excess dampness. You also want to seriously limit the foods that create more: dairy, sweets, fried food, beer, and excessive fruit. It's not about deprivation. It's about giving your body less moisture to deal with while it clears the backlog.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          One practical habit that helps both patterns: start your day with warm water, not coffee. I know, coffee feels like the only thing keeping you going. But caffeine is a short-term fix that may worsen both Qi Deficiency and Phlegm Damp over time. Warm water in the morning wakes up your digestive system gently. Add a slice of ginger if you have Qi Deficiency, or a small handful of coix seed if Dampness is your main concern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid napping if you can, especially long ones. A 20-minute power nap might help temporarily, but longer naps can make the fogginess worse and create a cycle where you can't sleep at night, which makes you more drowsy the next day. If you absolutely need a nap, set an alarm for 20 minutes max and get up immediately when it goes off.
        </p>
        <p className="text-text2 leading-relaxed">
          Movement helps clear both low energy and fog, but the right kind matters. Intense workouts might wipe you out further. Try brisk walking, light jogging, or dancing to music you enjoy. The goal is to get your blood moving and your body warm without depleting yourself. For Phlegm Damp types, sweating a little through gentle exercise is one of the best ways to help your body process and release that excess moisture.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy & Sluggish Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
