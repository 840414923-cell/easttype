"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function AnxiousArticle() {
  const slug = "why-do-i-feel-anxious"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Anxiety</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Feel Anxious? What Your Body Is Trying to Tell You
      </h1>
      <p className="text-text2 text-sm mb-10">7 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You're anxious. You know that much. But when you try to pin down why, there's nothing obvious. Your job is fine. Your relationships are fine. Your doctor ran the tests and said you're perfectly healthy. You even tried therapy, and sure, it helped a bit. But that underlying hum of unease keeps coming back, like a song stuck in your head that you can't quite name.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          It's frustrating because you feel like you should be able to fix it. Everything is fine, right? So why does your chest feel tight? Why does your mind race at the worst moments? Why can't you just relax?
        </p>
        <p className="text-text2 leading-relaxed">
          What if the anxiety isn't just in your head? Traditional Chinese Medicine has a completely different way of looking at this. It doesn't see anxiety as a brain malfunction. It sees it as energy that's gotten stuck somewhere in your body, trying to move but unable to. And once you understand that frame, a lot of things start clicking into place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What's Really Going On
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, one of the most common patterns behind unexplained anxiety is something called Qi Stagnation. Qi is your body's basic life energy, the stuff that makes everything run. Normally it flows smoothly through your body along pathways called meridians. But sometimes it gets blocked.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a traffic jam inside your body. The fuel is there. The cars are running. But the road is blocked, so everything backs up. That's different from Qi Deficiency, where there isn't enough fuel in the first place. With Qi Stagnation, you actually have the energy. It just can't go anywhere.
        </p>
        <p className="text-text2 leading-relaxed">
          When energy builds up without an outlet, it creates internal pressure. That pressure shows up as chest tightness, a racing mind, irritability, and that general sense that something is off even though you can't name it. It's not that you're broken. It's that your body's energy system is congested.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Are Most Affected
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) makes up roughly 8% of the population. If you're this type, things tend to feel stuck. Your chest tightens when you're stressed. You sigh without meaning to. Your mood can swing from fine to irritated in a matter of minutes. Your mind races with plans and worries while your body feels like it's standing still, unable to act on any of it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This type is especially prone to anxiety because the stuck energy has nowhere to go but inward. The frustration builds, the chest tightens, the thoughts loop. It's a pattern that feeds on itself. And it can be made worse by suppressing emotions, sitting too much, or eating foods that further clog the system.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Simple Changes That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          What you drink matters. Rose tea is one of the oldest recommendations in Chinese medicine for moving stuck energy. It has a gentle, upward quality that helps ease emotional tension. Citrus teas, especially those made from dried tangerine peel (chenpi), can also help get things flowing again. Chamomile, peppermint, and chrysanthemum tea are all reasonable choices for calming the mind and encouraging smooth energy flow.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Some things are worth cutting back on. Excessive caffeine can amplify the internal pressure that Qi Stagnation already creates. Alcohol might feel like it takes the edge off, but it actually adds heat and dampness to the system, which can make the stagnation worse over time. Very spicy foods can have a similar effect, pushing energy upward and outward in a way that doesn't help the underlying blockage.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle movement can make a real difference. You don't need intense workouts. Walking, stretching, or even just standing up and moving around when you feel tension building can help get that stuck energy moving. The key is consistency over intensity. A 20-minute walk most days may do more for this pattern than an exhausting gym session once a week.
        </p>
        <p className="text-text2 leading-relaxed">
          And perhaps the most important one: find ways to express what you're feeling. Qi Stagnation feeds on suppression. Bottling things up is like putting a lid on a pot that's already boiling. It doesn't stop the boil. It just pressurizes it. Talk to someone. Write it down. Sing loudly in the car. Whatever gets it out of your body and into the world.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your anxiety is severe, interfering with your daily life, or accompanied by panic attacks, chest pain, or other concerning symptoms, please see a healthcare professional. There is no shame in getting help, and sometimes anxiety is connected to conditions that need proper medical attention, such as thyroid issues, vitamin deficiencies, or hormonal imbalances.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
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
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3 AM?
          </Link>
          <span className="text-text2/40">·</span>
          <span className="text-xs text-text2/50">(3 AM wakeups are linked to Liver Qi Stagnation)</span>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
