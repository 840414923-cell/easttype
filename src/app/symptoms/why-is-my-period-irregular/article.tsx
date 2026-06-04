
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyPeriodIrregularArticle() {
  const slug = "why-is-my-period-irregular"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Irregular Period</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Period Irregular? The Clock That Won&apos;t Keep Time
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Some women can set their calendar by their period. Every 28 days, like clockwork. You&apos;re not one of them. Your cycle might be 24 days one month, 38 the next, then you skip a month entirely. You buy pregnancy tests in bulk not because you&apos;re trying, but because you never really know. The uncertainty is its own kind of exhausting.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Irregular periods are incredibly common. Technically, a &quot;normal&quot; cycle is anywhere from 21 to 35 days, and some variation is expected. But when your cycle swings wildly, or when you skip months, or when the duration and flow change unpredictably, that&apos;s your body telling you that the system regulating your cycle isn&apos;t running smoothly.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, the menstrual cycle is governed by something called the Chong and Ren meridians, which are like the two main highways that supply the uterus with Qi and Blood. The Liver system acts as the traffic controller, making sure everything flows in the right direction at the right time. When any part of this system is disrupted, the cycle becomes unpredictable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Irregular Cycles Look Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your irregular period fits a Qi Stagnation or Yang Deficiency pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Cycle length varies by more than a week from month to month",
            "Skipping periods entirely, sometimes for months at a time",
            "Period arriving earlier when you're stressed or anxious",
            "Period arriving later or not at all when you feel emotionally stuck",
            "Light flow some months, unexpectedly heavy others",
            "Premenstrual mood changes that are worse during irregular cycles",
            "Feeling like your body never quite settles into a rhythm",
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
          The Clock Without a Steady Hand
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the Liver is the organ system responsible for smooth rhythm and timing in the body. It&apos;s sometimes called the &quot;general&quot; because it coordinates the movement of Qi throughout the system. When the Liver is functioning well, energy moves in a steady, predictable pattern. Your menstrual cycle is one of those patterns.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When the Liver gets stressed, Qi stagnates. Instead of a steady flow, the energy moves in fits and starts. Imagine a river that normally flows at a consistent pace. Now imagine someone keeps putting rocks in it. The water pools in some places, rushes through others, and the overall rhythm is lost. That&apos;s what Qi Stagnation does to your menstrual cycle. The timing becomes unreliable because the energy that drives it isn&apos;t flowing smoothly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stress, frustration, unexpressed anger, and emotional tension are the biggest culprits. Not because you&apos;re &quot;causing&quot; the irregularity with your emotions, but because the Liver system is physically sensitive to these states. It tightens up. The flow slows. Your period gets pushed around.
        </p>
        <p className="text-text2 leading-relaxed">
          Cold is the other piece. In TCM, Yang is the warming, activating energy. Yang Deficiency means the body doesn&apos;t have enough internal warmth to keep systems running at full speed. The uterus, in particular, needs warmth to function properly. When Yang is low, the whole reproductive system slows down, like a factory operating at half capacity because the furnace is broken. Cycles get delayed, flow gets lighter, and sometimes the period just doesn&apos;t come.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Irregular Cycles
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the primary match. These are people whose energy tightens under stress, creating the stop-and-start pattern that throws off the menstrual clock. They may also experience mood swings, a feeling of tightness in the chest, and a tendency to sigh frequently. About 15% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the second match. These people run cold. Cold hands, cold feet, prefer warm drinks, feel worse in winter. Their reproductive system is literally running too cold to maintain a regular cycle. Warming the body can sometimes help restore the rhythm.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Regulate the Cycle
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Rose tea is one of the most recommended herbs in TCM for moving stagnant Liver Qi. A few dried rosebuds steeped in hot water, sipped daily, may help keep the energy flowing smoothly. It&apos;s gentle, pleasant, and easy to incorporate into a routine. Fennel seeds are another traditional choice, often brewed as a tea to support the smooth movement of Qi in the lower abdomen.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warmth matters, especially for the Yang Deficient pattern. Warm food, warm drinks, warm clothing around your midsection. Avoid iced beverages, raw salads, and cold foods, especially in the week before your period is due. The body needs warmth to maintain the momentum of the cycle. Pouring cold into the system is like taking a clock and freezing the gears.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Managing stress is not optional advice here. It&apos;s the actual intervention. The Liver tightens under emotional pressure, and the menstrual cycle is often the first thing to show it. Whatever helps you process stress, whether that&apos;s exercise, journaling, talking to someone, or just building in quiet time, is directly supporting your cycle regularity from a TCM perspective.
        </p>
        <p className="text-text2 leading-relaxed">
          Regular meal times can also help. In TCM, the Spleen system (which is closely connected to the cycle) thrives on routine. Eating at consistent times, not skipping meals, and not eating too late at night can support the overall rhythm your body is trying to maintain.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Irregular periods can sometimes indicate PCOS, thyroid disorders, or other hormonal conditions. If your cycles are consistently longer than 35 days, if you frequently skip more than one period, or if the irregularity is new and accompanied by other symptoms like weight gain or excess hair growth, please see a doctor. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
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
          <Link href="/symptoms/why-do-i-have-pms" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have PMS?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-period-cramps" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Period Cramps?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
