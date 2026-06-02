"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyDoIGetSickArticle() {
  const slug = "why-do-i-get-sick-so-often"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Frequent Illness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Get Sick So Often? The Body That Forgot Its Shield
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          It starts with a sniffle. Then your colleague gets a cold and you get it too. Your kid brings something home from school and you're down for a week. Flu season? You don't avoid it, you collect it. By the time spring rolls around, you've lost count of how many times you've been sick this year.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other people seem to bounce back in two days. You need two weeks. And just when you think you're finally healthy, something else gets you. It feels like your immune system is always one step behind whatever's going around.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, frequent illness isn't just bad luck. It's a sign that your body's defensive energy is underpowered. And the fix isn't just washing your hands more often (though please keep doing that).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Frequent Illness Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "You catch 4+ colds per year (average is 2-3)",
            "Illnesses last longer than they seem to for others",
            "You often need antibiotics for things that others fight off naturally",
            "You feel run-down for weeks after being sick",
            "Cold sores, sinus infections, or ear infections are recurring visitors",
            "You feel like you're always 'about to get sick'",
            "Seasonal changes hit you harder than most people",
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
          Check These First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before exploring Eastern frameworks, rule out the basics. Chronic stress directly suppresses immune function. Poor sleep reduces your body's ability to fight off pathogens. Vitamin D deficiency (very common in northern climates) weakens immune defenses. Iron deficiency, zinc deficiency, and poor nutrition all make you more susceptible.
        </p>
        <p className="text-text2 leading-relaxed">
          Also consider your environment. Daycare workers, teachers, healthcare workers, and parents of young children are exposed to more pathogens simply by proximity. If you work from home and rarely see people but still get sick frequently, that's a different signal than someone surrounded by sniffling toddlers all day.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Frequent Illness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          TCM has a concept called Wei Qi, which is often translated as "defensive energy." Wei Qi circulates just beneath your skin and at your body's surface, acting like an invisible shield against external pathogens. When Wei Qi is strong, most bugs bounce off you. When it's weak, they walk right in.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Wei Qi is produced by your Lungs and distributed by your Spleen. Both organs need adequate Qi to generate enough defensive energy. If your overall Qi is low (Qi Deficiency), your Wei Qi is almost certainly low too. It's like a country that can't afford to maintain its border defenses. The walls are there, but the guards are understaffed.
        </p>
        <p className="text-text2 leading-relaxed">
          There's a secondary pattern too. If your Yang energy is low (Yang Deficiency), your body doesn't generate enough warmth to keep the defensive energy circulating properly. Cold pathogens have an easier time penetrating because your surface temperature is literally lower, and Wei Qi doesn't circulate as effectively in a cold system.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Frequent Illness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) gets sick because they simply don't have enough energy to mount a strong defense. They catch things easily and recover slowly. Every illness drains their already-low reserves, creating a cycle where the weaker they get, the more susceptible they become. About 15% of people have this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) runs cold, and cold systems don't circulate defensive energy well. They tend to get sick during weather changes, in air-conditioned rooms, or during the transition between seasons. Their illnesses often involve chills, clear mucus, and a general feeling of cold.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">Yang Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Strengthen Your Defenses
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Build Qi through food. Warm, cooked, nourishing meals are the foundation. Congee (rice porridge) with jujube dates and ginger is one of the most traditional Qi-building foods. Chicken broth, sweet potato, pumpkin, and rice are all gentle on your system and support energy production.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Yang Deficiency is part of your pattern, add warming foods: ginger, cinnamon, lamb, beef, black pepper, and roasted nuts. These foods help stoke the internal fire that keeps your defensive energy circulating.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Prioritize sleep during the recovery phase. Your body builds Qi while you rest, especially between 11 PM and 7 AM. Going back to normal activity too quickly after an illness is one of the fastest ways to catch the next one.
        </p>
        <p className="text-text2 leading-relaxed">
          Gentle, consistent movement supports Wei Qi. Tai chi, qigong, and walking are traditionally recommended for strengthening defensive energy. Intense exercise can actually deplete Qi if your reserves are already low. The key is regular, moderate movement that gets your blood flowing without exhausting you.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If you're getting sick more than 6 times per year, have infections that require repeated antibiotics, or experience recurring pneumonia or sinus infections, please consult a licensed healthcare provider. These can be signs of an underlying immune condition that needs medical evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">Low Vitality Pattern →</Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/high-sensitivity" className="text-sm text-accent no-underline hover:underline">High Sensitivity Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">Why Am I Always Tired?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">Why Am I Always Cold?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
