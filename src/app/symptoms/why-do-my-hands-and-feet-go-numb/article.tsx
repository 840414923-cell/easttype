"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyNumbArticle() {
  const slug = "why-do-my-hands-and-feet-go-numb"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Numbness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do My Hands and Feet Go Numb? When Your Extremities Check Out
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          It starts as tingling. Pins and needles. Your foot falls asleep when you've been sitting in the same position for too long, except you weren't sitting that long. Your hand goes numb while you're holding your phone. You wake up with fingers that feel like they belong to someone else.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Numbness in the hands and feet is one of those symptoms that's easy to dismiss until it starts happening regularly. You shake it off, literally, and the feeling comes back. But why does it happen in the first place? And why does it happen to you more than other people?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a clear explanation for this. Numbness in the extremities is often connected to two things: insufficient warmth reaching the ends of your body, and insufficient blood and energy circulation. Both trace back to specific constitutional patterns.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What This Kind of Numbness Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "Tingling or pins-and-needles in fingers or toes",
            "Hands or feet that feel numb for no obvious reason",
            "Waking up with numb hands or arms",
            "Numbness that gets worse in cold weather",
            "Cold hands and feet that accompany the numbness",
            "A feeling that your extremities aren't fully 'there'",
            "Symptoms improve with warmth or movement",
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
          Important: Rule These Out First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Numbness in the extremities can have medical causes that need attention. If the numbness is one-sided, sudden, or accompanied by weakness, confusion, or difficulty speaking, seek emergency medical care immediately. These can be signs of a stroke.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other medical causes include carpal tunnel syndrome (especially if numbness is in your thumb, index, and middle fingers), peripheral neuropathy (common with diabetes), vitamin B12 deficiency, pinched nerves in the neck or back, and Raynaud's phenomenon. If you haven't been evaluated for these, it's worth checking with a doctor.
        </p>
        <p className="text-text2 leading-relaxed">
          If you've been cleared of these conditions and still experience regular numbness, the Eastern perspective may offer useful insight.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Numbness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, numbness occurs when Qi and Blood don't reach an area adequately. It's like a house where the heating pipes are too narrow. The boiler works fine, but the rooms at the end of the line never get properly warm. Your hands and feet are the farthest points from your core, and they're the first to lose circulation when energy is low.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yang Deficiency is the primary pattern. Yang is your body's warming, activating force. When Yang is low, your body conserves heat by pulling it away from the extremities and concentrating it in the core. Less warmth means less circulation, less circulation means less sensation, and numbness or tingling is the result.
        </p>
        <p className="text-text2 leading-relaxed">
          Qi Deficiency can also contribute. When overall energy is low, the body doesn't have enough "pumping power" to push blood and energy all the way to your fingertips and toes. The numbness in this case comes with fatigue, a feeling of heaviness, and slow recovery from exertion.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Numbness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the most prone to numb extremities. Their internal heating system is underpowered, so the body constantly triages warmth away from hands and feet. Cold weather makes it worse. About 10% of people have this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) experiences numbness from low circulation pressure rather than cold. Their pump isn't strong enough to push blood to the ends. They may also have pale skin, a soft voice, and easy sweating. About 15% of people fit this type.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">Yang Deficient Type →</Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Restore Sensation
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          For Yang Deficiency-related numbness, warming foods are essential. Ginger, cinnamon, lamb, beef, black pepper, roasted nuts, and onion. Regular warm foot soaks with ginger or mugwort can directly improve circulation to the extremities. Dress warmly, especially around the wrists, ankles, and lower back.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For Qi Deficiency-related numbness, focus on building energy. Congee with jujube dates, sweet potato, and chicken broth support overall energy production. Gentle movement like walking or tai chi helps circulate Qi without depleting it.
        </p>
        <p className="text-text2 leading-relaxed">
          For both patterns: avoid cold drinks and raw foods, which your body has to expend energy warming up. Drink warm water or ginger tea throughout the day. And stay physically active enough to keep your circulation moving, but not so active that you deplete your energy reserves.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If numbness is sudden, one-sided, spreading, or accompanied by weakness, dizziness, or loss of coordination, seek immediate medical attention. Chronic numbness should be evaluated by a healthcare provider to rule out nerve damage or circulatory conditions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">Cold Sensitivity Pattern →</Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/blood-stasis" className="text-sm text-accent no-underline hover:underline">Blood Stasis Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">Why Am I Always Cold?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">Why Am I Always Tired?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
