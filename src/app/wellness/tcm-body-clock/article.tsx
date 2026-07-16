import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function TcmBodyClockArticle() {
  const slug = "tcm-body-clock"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">&rsaquo;</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">&rsaquo;</span>
        <span className="text-text2">TCM Body Clock</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        TCM Body Clock: The Chinese Medicine Organ Time Chart
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read &middot; A 2,000-year-old schedule your body still follows</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine divides the 24-hour day into twelve 2-hour blocks, each governed by a specific organ system. During its time block, that organ receives maximum energy flow for maintenance and repair. If you wake up at the same time every night, feel sluggish at particular hours, or crave food at odd times, your body clock may be out of sync. The most well-known example is waking between 1 AM and 3 AM, which corresponds to the Liver meridian.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          You wake up at 3 AM. Not 2:58, not 3:07, but 3:00 on the dot. Your partner tells you it is stress. Your doctor says it is blood sugar. Your fitness tracker blames deep sleep disruption. They might all be partially right, but Chinese medicine offers a different and surprisingly precise explanation.
        </p>
        <p className="text-text2 leading-relaxed">
          In traditional Chinese medicine, your body runs on a 24-hour internal schedule called the organ clock, or zi wu liu zhu. Each two-hour segment of the day is assigned to one of twelve organ systems. During its assigned window, that organ receives a surge of energy and performs its maintenance work. If the organ is struggling, the energy surge can wake you up, make you feel uncomfortable, or trigger symptoms at very specific times.
        </p>
        <p className="text-text2 leading-relaxed">
          This is not a metaphor. It is a practical diagnostic framework that Chinese medicine practitioners have used for over two millennia. And it connects directly to the body types and symptom patterns this site is built around.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 12 Organ Time Periods
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Here is the complete Chinese medicine body clock. Each row shows the time window, the organ that is most active, what that organ is doing, and what it might mean if you notice symptoms during that period.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Time</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Organ</th>
                <th className="text-left py-2 pr-3 text-text font-medium">What It Does</th>
                <th className="text-left py-2 text-text font-medium">If Disrupted</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">5 AM &ndash; 7 AM</td><td className="py-2 pr-3">Large Intestine</td><td className="py-2 pr-3 text-text2">Elimination, clearing waste</td><td className="py-2 text-text2">Constipation, sluggish mornings</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">7 AM &ndash; 9 AM</td><td className="py-2 pr-3">Stomach</td><td className="py-2 pr-3 text-text2">Digestion, receiving food</td><td className="py-2 text-text2">Nausea, no appetite, bloating</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">9 AM &ndash; 11 AM</td><td className="py-2 pr-3">Spleen</td><td className="py-2 pr-3 text-text2">Transforming food into energy</td><td className="py-2 text-text2">Fatigue, brain fog, sweet cravings</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">11 AM &ndash; 1 PM</td><td className="py-2 pr-3">Heart</td><td className="py-2 pr-3 text-text2">Circulation, emotional balance</td><td className="py-2 text-text2">Palpitations, anxiety, flushed face</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">1 PM &ndash; 3 PM</td><td className="py-2 pr-3">Small Intestine</td><td className="py-2 pr-3 text-text2">Sorting nutrients, separating waste</td><td className="py-2 text-text2">Indigestion, bloating after lunch</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">3 PM &ndash; 5 PM</td><td className="py-2 pr-3">Bladder</td><td className="py-2 pr-3 text-text2">Fluid storage and release</td><td className="py-2 text-text2">Frequent urination, lower back ache</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">5 PM &ndash; 7 PM</td><td className="py-2 pr-3">Kidney</td><td className="py-2 pr-3 text-text2">Storing vital essence, deep reserves</td><td className="py-2 text-text2">Exhaustion, fear, low willpower</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">7 PM &ndash; 9 PM</td><td className="py-2 pr-3">Pericardium</td><td className="py-2 pr-3 text-text2">Protecting the heart, emotional intimacy</td><td className="py-2 text-text2">Restlessness, mood swings</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">9 PM &ndash; 11 PM</td><td className="py-2 pr-3">Triple Burner</td><td className="py-2 pr-3 text-text2">Coordinating body temperature, fluid channels</td><td className="py-2 text-text2">Difficulty falling asleep, chills</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">11 PM &ndash; 1 AM</td><td className="py-2 pr-3">Gallbladder</td><td className="py-2 pr-3 text-text2">Decision processing, bile production</td><td className="py-2 text-text2">Insomnia, vivid dreams, indecision</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">1 AM &ndash; 3 AM</td><td className="py-2 pr-3">Liver</td><td className="py-2 pr-3 text-text2">Detoxification, blood storage, emotional processing</td><td className="py-2 text-text2">Waking up, racing thoughts, anger</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">3 AM &ndash; 5 AM</td><td className="py-2 pr-3">Lung</td><td className="py-2 pr-3 text-text2">Respiration, grief processing, immune defense</td><td className="py-2 text-text2">Coughing, shallow breathing, sadness</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Note: These are traditional associations, not medically verified organ schedules. Think of them as a framework for noticing patterns in your own body, not a diagnostic tool.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Why You Wake Up at Specific Times
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The most common question people ask about the body clock is: why do I always wake up at the same time? In Chinese medicine, the answer depends on which time window it is.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Waking between <strong className="text-text">1 AM and 3 AM</strong> is the most reported pattern. This is the Liver window. The Liver is responsible for the smooth flow of energy and emotions. If you have been stressed, frustrated, or holding in feelings, that stuck energy gets pushed to the surface during the Liver&apos;s peak hours. The result is sudden, complete wakefulness at 1 or 2 AM, often with a racing mind. This pattern is especially common in the <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant body type</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Waking between <strong className="text-text">3 AM and 5 AM</strong> belongs to the Lungs. In TCM, the Lungs process grief and sadness. If you are going through a loss, a transition, or carrying unprocessed sadness, you might find yourself staring at the ceiling during this window. Coughing or shallow breathing at this time can also signal that the Lung meridian is working overtime.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Waking between <strong className="text-text">11 PM and 1 AM</strong> is the Gallbladder window. The Gallbladder partners with the Liver and is associated with decision-making and courage. If you lie awake during this period with your mind churning over choices, your Gallbladder energy may be stuck. This often happens to people who avoid making a difficult decision during the day.
        </p>
        <p className="text-text2 leading-relaxed">
          If you wake at the same time every night, try noting the hour. It may give you a clue about which organ system is asking for attention. You can read more about the most common version in our detailed guide on <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-accent hover:underline">waking up at 3 AM</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Align Your Day With the Body Clock
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need to follow the body clock perfectly to benefit from it. Small timing adjustments can make a noticeable difference. Here are practical steps based on the traditional organ schedule:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-text2 leading-relaxed mb-4">
          <li>
            <strong className="text-text">Eat breakfast between 7 and 9 AM.</strong> The Stomach meridian is at full power during this window. Food eaten now is processed most efficiently. Skipping breakfast and eating later means your Stomach has to work harder with less energy.
          </li>
          <li>
            <strong className="text-text">Do focused mental work between 9 and 11 AM.</strong> The Spleen transforms food into energy and supports clear thinking. This is when your digestion is strongest and your mind is sharpest. Save complex tasks for this window.
          </li>
          <li>
            <strong className="text-text">Rest between 11 AM and 1 PM.</strong> The Heart meridian peaks here. In many traditional cultures, this is the time for a short nap or a calm, unhurried meal. Pushing hard during Heart hours can lead to palpitations and anxiety.
          </li>
          <li>
            <strong className="text-text">Drink water between 3 and 5 PM.</strong> The Bladder meridian is active, making this an efficient time for fluid processing. If you feel an afternoon slump, it may be dehydration rather than caffeine withdrawal.
          </li>
          <li>
            <strong className="text-text">Be asleep before 11 PM.</strong> The Gallbladder starts its work at 11 PM, and the Liver follows at 1 AM. If you are still scrolling your phone at midnight, these organs cannot do their repair work. This is the single most important timing rule in Chinese medicine.
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Eastern vs. Western Perspective
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Topic</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Western Medicine</th>
                <th className="text-left py-2 text-text font-medium">Chinese Medicine</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Basis</td><td className="py-2 pr-3 text-text2">Circadian rhythm research, melatonin cycles, cortisol curves</td><td className="py-2 text-text2">Organ clock mapped to 12 two-hour meridian windows</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Sleep timing</td><td className="py-2 pr-3 text-text2">7 to 9 hours, consistent schedule, dark room</td><td className="py-2 text-text2">Asleep before 11 PM to align with Gallbladder and Liver windows</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Waking at night</td><td className="py-2 pr-3 text-text2">Sleep architecture, cortisol spikes, blood sugar drops</td><td className="py-2 text-text2">Specific organ meridian struggling during its peak time slot</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Meal timing</td><td className="py-2 pr-3 text-text2">Calories and macros matter more than timing</td><td className="py-2 text-text2">Stomach strongest at 7 to 9 AM, eat largest meal then</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Approach</td><td className="py-2 pr-3 text-text2">Light exposure, sleep hygiene, melatonin supplements</td><td className="py-2 text-text2">Align eating, sleeping, and activity with organ schedule</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <p className="text-text2 text-sm leading-relaxed">
          <strong className="text-text">When to see a doctor:</strong> This article is for educational purposes only and is not medical advice. If your sleep disruption is new, severe, or accompanied by chest pain, shortness of breath, or significant mood changes, please consult a licensed healthcare provider. Chronic sleep issues can sometimes be associated with conditions that require medical treatment.
        </p>
      </div>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
