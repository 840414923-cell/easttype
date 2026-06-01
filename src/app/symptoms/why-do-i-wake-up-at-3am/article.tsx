"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyWakeAt3AmArticle() {
  const slug = "why-do-i-wake-up-at-3am"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Waking at 3 AM</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Wake Up at 3 AM? Your Liver Has Something to Say
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          If you're one of those people who checks the clock at 3 AM and thinks "great, this again," you're definitely not alone. This is weirdly specific and weirdly common. You fall asleep fine. You sleep well for a few hours. Then boom, wide awake at 2:45 or 3:15, staring at the ceiling, mind racing about everything from work deadlines to that embarrassing thing you said in 2016.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          I used to blame stress, or caffeine, or "just one of those things." But when it happens consistently at the same time window, night after night, it's not random. Chinese medicine has a surprisingly specific explanation for this, and it involves something called the body clock.
        </p>
        <p className="text-text2 leading-relaxed">
          Before we get into it: yes, waking at 3 AM can sometimes be related to blood sugar drops, sleep apnea, or other medical issues. If this is new, severe, or affecting your daily life, definitely check with your doctor first. But if you've been checked out and everything is "normal," keep reading. Eastern body wisdom has a genuinely interesting angle on this.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What's Causing the 3 AM Wake-Up Call
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The obvious culprits are stress, anxiety, late-night eating, too much screen time before bed, and that after-dinner espresso you knew you'd regret. All of these are real factors. But when the wake-up time is consistent, it's worth looking at something most people have never heard of: the TCM body clock.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Blood sugar is another common factor. Your blood sugar naturally dips in the middle of the night, and if it drops too low, your body releases cortisol and adrenaline to compensate, which wakes you up. This is especially common if you eat dinner early or have a high-sugar dinner. A small protein-rich snack before bed might help stabilize things.
        </p>
        <p className="text-text2 leading-relaxed">
          Hormonal shifts during perimenopause and menopause are also a major reason for middle-of-night waking. If you're in that life stage, the 3 AM wake-up might be part of a broader hormonal picture. That said, the TCM perspective below applies regardless of the initial trigger, because it focuses on what your body is doing with that energy once it wakes up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Body Clock: Why 3 AM Specifically
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Here's where it gets interesting. Chinese medicine maps the body's energy meridians to a 24-hour clock. Each 2-hour block is associated with a specific organ system. The Liver meridian gets the 1 AM to 3 AM slot. During this time, Liver energy is supposed to be doing its maintenance work: processing emotions, regulating blood flow, and planning for the next day.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When everything is balanced, you sleep right through it. But two things can disturb this peaceful process. First is Liver Qi Stagnation (肝气郁结). If you've been stressed, frustrated, irritable, or holding in emotions, your Liver Qi gets stuck instead of flowing. During its peak hours, that stuck energy creates a kind of internal commotion that wakes you up. It's like a traffic jam at rush hour. The Liver is trying to do its job, but nothing is moving.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The second is Liver Yin Deficiency (肝阴虚). Yin is the cooling, calming, resting part of your energy. When Liver Yin is low, there's not enough cooling force to keep the Liver quiet during its active period. It's like a fan that's supposed to keep a room comfortable, but the fan is broken, so the room gets hot and restless. This pattern is often linked to staying up late regularly, eating spicy or greasy food frequently, or long periods of mental overwork.
        </p>
        <p className="text-text2 leading-relaxed">
          Either way, the result is the same: your Liver meridian gets noisy at its designated time, and you wake up. The specific time is actually a gift because it tells you exactly which system is out of balance. It's your body's way of leaving a very precise sticky note on your forehead.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Are Most Prone to 3 AM Wake-Ups
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Two body types are most associated with this specific pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) runs hot and dry. These people often feel warm at night, experience night sweats, and have a restless mind that won't shut off. Their cooling system is under-resourced, so when the body's internal clock activates a meridian, there's not enough Yin to keep things calm. Waking between 1 and 3 AM is a classic sign of this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) carries tension and frustration. Things don't flow smoothly for them, whether it's emotions, digestion, or energy. They tend to sigh a lot, feel stuck in life, and have mood swings. When stress builds up, the Liver meridian takes the hit, and 3 AM becomes their recurring appointment with the ceiling.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Practical Steps to Sleep Through the Night
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          First, look at your evenings. Heavy meals, alcohol, and intense arguments close to bedtime are all fuel for Liver Qi Stagnation. Try to eat dinner at least 3 hours before bed and keep it relatively light. Save the big steak and wine for lunch, not dinner. Your Liver will thank you.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Try a cup of chrysanthemum tea or rose tea after dinner. Both are traditional choices for supporting Liver Qi flow. Chrysanthemum clears heat and calms the mind. Rose moves stuck energy and smooths emotions. Neither contains caffeine, so they won't keep you up. Sip slowly and let the process itself be a small wind-down ritual.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Get to bed before 11 PM. The Gallbladder meridian runs from 11 PM to 1 AM, and it works closely with the Liver. If you're still awake during this window, the Gallbladder can't do its job properly, which creates a knock-on effect for the Liver at 1 AM. Think of it as prep work: the Gallbladder clears the way so the Liver can work smoothly. If you're still scrolling your phone at midnight, the whole system gets backed up.
        </p>
        <p className="text-text2 leading-relaxed">
          If you do wake up, don't look at your phone. The blue light tells your brain it's morning, and the content (even if it's "relaxing") stimulates your mind further. Instead, try slow belly breathing. Put one hand on your belly and feel it rise and fall. Count to 4 on the inhale, 6 on the exhale. This simple breathing pattern activates your parasympathetic nervous system and can help quiet the Liver's midnight commotion.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            Internal Heat Pattern →
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
