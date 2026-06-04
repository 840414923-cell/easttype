
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyWakeUpTiredArticle() {
  const slug = "why-do-i-wake-up-tired"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Sleep</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Wake Up Tired? The Rest That Doesn&apos;t Restore
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You went to bed at a reasonable hour. You slept for eight, maybe nine hours. No interruptions, no alarm drama. And yet when you open your eyes, it feels like you barely slept at all. Your limbs are heavy. Your brain is foggy. The idea of getting out of bed feels like someone asked you to bench press your own body weight.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This isn&apos;t about being lazy. This isn&apos;t about not wanting to face the day. This is about a gap between the amount of rest you&apos;re getting and the amount of recovery your body is actually able to do with that rest. They&apos;re not the same thing, and that gap is where the exhaustion lives.
        </p>
        <p className="text-text2 leading-relaxed">
          It&apos;s a frustrating feeling because you&apos;re doing everything right on paper. You&apos;re in bed for enough hours. You&apos;re not staring at your phone until 2 AM (mostly). You&apos;re even trying the sleep hygiene tips. But the tiredness is still there every morning, like a deposit that never clears.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What It Feels Like
        </h2>
        <ul className="space-y-2 mb-3">
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Waking up groggy even after 7 to 9 hours of sleep
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Needing caffeine to function in the morning, every single day
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Feeling like sleep didn&apos;t &quot;do anything,&quot; as if you were just unconscious
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Heavy limbs, slow thinking, and low motivation in the first hours after waking
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            A pattern that persists for weeks or months regardless of bedtime
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Stuff First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Sleep apnea is the big one to rule out. If you snore loudly, wake up gasping, or your partner notices you stop breathing during the night, this needs medical attention. Sleep apnea prevents your body from reaching the deep sleep stages where real recovery happens. You might be in bed for eight hours but only getting a fraction of the restorative sleep you need.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Depression can also show up as unrefreshing sleep. It&apos;s not always sadness. Sometimes it&apos;s just a flat, heavy feeling where nothing restores you, including rest. Thyroid issues, iron deficiency, and vitamin D deficiency are other medical causes worth checking with blood work.
        </p>
        <p className="text-text2 leading-relaxed">
          Poor sleep hygiene is the lifestyle factor. Screens before bed, irregular sleep times, eating heavy meals late at night, caffeine too late in the day. If you&apos;ve cleaned all of that up and still wake up tired, something deeper might be going on with how your body processes rest.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains Unrefreshing Sleep
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, sleep is when your body repairs and restores itself, but it needs Qi (energy) to do that repair work. Qi is the fuel for every process in your body, including the overnight maintenance that sleep is supposed to provide. When Qi is low, your body goes through the motions of sleeping but can&apos;t do the deep repair work that makes sleep actually restorative.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like charging your phone with a damaged charging cable. The phone is plugged in for eight hours. The battery icon shows it&apos;s charging. But when you unplug it in the morning, the battery is only at 30%. The time was there. The connection was there. But the transfer wasn&apos;t happening efficiently because the cable couldn&apos;t carry the charge properly.
        </p>
        <p className="text-text2 leading-relaxed">
          TCM also emphasizes the timing of sleep. The body clock in Chinese medicine assigns specific organs to specific two-hour windows. The Gallbladder period runs from 11 PM to 1 AM, and the Liver period from 1 AM to 3 AM. These are considered the most important hours for deep restoration. If you&apos;re consistently going to bed after midnight, you might be missing the hours your body needs most, even if the total number of hours is technically enough.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Wake Up Exhausted
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the most common pattern associated with unrefreshing sleep. These people tend to feel tired throughout the day, speak softly, bruise easily, and sweat with minimal exertion. Their body simply doesn&apos;t have enough energy to do the repair work during sleep, so they wake up feeling like they never rested at all.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Roughly 12% of people fall into the Qi Deficient category. They often describe themselves as &quot;always running on low&quot; or &quot;never at full battery.&quot; The morning fatigue isn&apos;t about being lazy. It&apos;s about a system that can&apos;t convert rest into energy efficiently.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Warm, cooked meals are one of the simplest changes. In TCM, your digestive system is like a cooking pot. It needs warmth to process food efficiently. Cold, raw foods require more energy to break down, energy that a Qi Deficient person doesn&apos;t have to spare. Warm soups, stews, porridge, and cooked grains are easier on the system and leave more energy available for repair work.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Consistency matters more than most people realize. Going to bed and waking up at roughly the same time every day helps your body establish a rhythm. The TCM body clock works best with routine. If you&apos;re in bed by 10:30 PM most nights, your body learns to start its repair cycle at the right time. Irregular sleep times confuse the system, like a factory where the shift keeps changing randomly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle movement in the morning can help more than sleeping later. A short walk, some light stretching, or a few minutes of deep breathing. It&apos;s counterintuitive, but for Qi Deficient types, staying in bed longer often makes the grogginess worse. The body needs a gentle signal to start circulating energy, not more time lying still.
        </p>
        <p className="text-text2 leading-relaxed">
          Foods that support Qi include sweet potato, rice, oats, chicken, beef, and dates. These aren&apos;t exotic. They&apos;re the kind of warming, nourishing foods that traditional cultures have built meals around for centuries. The key is regular meals at consistent times, not skipping breakfast, and not eating too close to bedtime.
        </p>
      </section>

      <section className="mb-10">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
            When to See a Doctor
          </h2>
          <p className="text-text2 leading-relaxed mb-3">
            Morning fatigue that persists for weeks despite good sleep habits is worth investigating. Sleep apnea is the most important thing to rule out, and a sleep study can detect it. If you snore, wake up with headaches, or your partner notices breathing pauses, bring it up with your doctor.
          </p>
          <p className="text-text2 leading-relaxed mb-3">
            If the fatigue comes with other changes like weight gain, hair loss, feeling cold all the time, or low mood, a basic blood panel checking thyroid, iron, vitamin D, and B12 can identify treatable causes.
          </p>
          <p className="text-text2 leading-relaxed text-sm">
            This article is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            Low Vitality Pattern →
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
          <Link href="/symptoms/why-do-i-have-brain-fog" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Brain Fog?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
