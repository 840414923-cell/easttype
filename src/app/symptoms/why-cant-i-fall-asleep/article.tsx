
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyCantIFallAsleepArticle() {
  const slug = "why-cant-i-fall-asleep"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Can't Fall Asleep</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Can't I Fall Asleep? The Nighttime Tug-of-War
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your body is exhausted. Your eyes have been heavy since 8 PM. You get into bed, close your eyes, and... nothing. Your brain fires up like you just had three espressos. The to-do list appears. That awkward conversation from 2017 replays. You check the clock. 11:30. Then midnight. Then 1 AM. By now you're doing the math: "If I fall asleep right now, I'll get five hours."
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is different from waking up at 3 AM. Waking up mid-sleep means something interrupted your rest. Not being able to fall asleep in the first place means something is preventing your body from transitioning from wake to sleep. In Chinese medicine, these are related but distinct problems with different root patterns.
        </p>
        <p className="text-text2 leading-relaxed">
          And unlike what your fitness tracker might suggest, the solution isn't always "better sleep hygiene." Sometimes the problem isn't your bedtime routine. It's what's happening inside your body that keeps the engine running when it should be idling.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Trouble Falling Asleep Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "You lie in bed for 30+ minutes before sleep comes",
            "Your mind races the moment your head hits the pillow",
            "You feel wired and tired at the same time",
            "You're exhausted all day but come alive at night",
            "Background noise or podcasts help because they drown out your thoughts",
            "You've memorized the ceiling cracks from all the staring",
            "Sleep eventually comes, but it takes so long that you never get enough",
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
          The Usual Suspects (Check These First)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before exploring Eastern frameworks, make sure you've covered the basics. Caffeine after noon is the most common culprit. Blue light from screens suppresses melatonin production. An irregular sleep schedule confuses your circadian rhythm. A bedroom that's too warm (above 68°F/20°C) makes it harder for your body temperature to drop, which is a biological signal for sleep onset.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Anxiety and stress are also major factors. If something specific is worrying you, your brain treats it as a threat and stays vigilant. This is normal and usually temporary. But if you've addressed all of these and still can't fall asleep, the Eastern perspective offers a different kind of explanation.
        </p>
        <p className="text-text2 leading-relaxed">
          Also worth noting: some medications, including certain antidepressants, asthma inhalers, and cold medicines containing pseudoephedrine, can interfere with sleep onset. If you started a new medication around the time your sleep problems began, that's worth discussing with your doctor.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains It
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, falling asleep requires Yin to become dominant over Yang. Yang is your active, alert, warm energy. Yin is your resting, cooling, quiet energy. During the day, Yang leads. At night, Yin should take over and pull you into sleep. Trouble falling asleep happens when Yang refuses to step aside.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          There are two main reasons this happens. The first is Yin Deficiency. When your Yin is low, there isn't enough of it to overpower Yang. It's like trying to cool down a room with an air conditioner that's too small. The AC is running, but the heat keeps winning. Your body wants to sleep, but the cooling system is underpowered, so you lie there with a restless, slightly overheated feeling.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The second is Qi Stagnation. When energy gets stuck in your body, it creates a sense of internal pressure and restlessness. You might feel it as chest tightness, frustration, or an inability to "switch off." The energy that should be flowing and settling is instead pooled and agitated. It's like trying to fall asleep in a room where someone keeps turning the lights on and off.
        </p>
        <p className="text-text2 leading-relaxed">
          Both patterns create that classic "wired and tired" feeling. Your body is exhausted (hence the tired), but your internal energy is still running hot or stuck (hence the wired).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Sleeplessness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the classic "can't fall asleep" type. They run warm, feel restless at night, and often have dry mouth or night sweats. Their internal cooling system is undercharged, so Yang stays active past bedtime. About 10% of people fall into this category. They tend to be the ones who feel most alert at 10 PM and can't understand why.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) has trouble falling asleep for a different reason. Their energy is stuck, not overheated. They lie in bed replaying conversations, planning tomorrow, or feeling frustrated about not sleeping. The mental loop is a symptom of energy that can't flow freely. About 8% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
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
          What May Help You Fall Asleep
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Yin Deficiency is your pattern, focus on cooling and moistening. Chrysanthemum tea, lily bulb soup, and pear are traditional choices. Avoid spicy food, alcohol, and heavy meals in the evening. These add heat to a system that's already running too warm. Your ideal dinner is light, warm (not hot), and eaten at least 3 hours before bed.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Stagnation is behind your sleeplessness, the approach is about getting energy to flow rather than cooling it down. A short evening walk can work wonders. Rose tea or chamomile tea after dinner helps ease the internal pressure. Writing down tomorrow's tasks before bed gives your brain permission to stop holding onto them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For both patterns, one habit consistently helps: get into bed before 11 PM. In TCM, the Gallbladder meridian is most active from 11 PM to 1 AM, and the Liver meridian from 1 AM to 3 AM. If you're not asleep before this window, the energy of these meridians can keep you awake. Many people find that simply getting into bed by 10:30 PM makes falling asleep dramatically easier, even if nothing else changes.
        </p>
        <p className="text-text2 leading-relaxed">
          Also: keep your bedroom cool. This isn't just TCM advice, it's basic biology. Your body needs to drop about 1°F to initiate sleep. A cool room (65-68°F / 18-20°C) helps this process. If you're Yin Deficient, this is especially important because your body is already running warm.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your sleep problems are severe, persistent, affecting your daily functioning, or accompanied by symptoms like chest pain, shortness of breath, or severe anxiety, please consult a licensed healthcare provider. Chronic insomnia can sometimes be connected to conditions that need proper medical attention.
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
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3AM?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />

      <section className="mt-10 mb-4">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
            What Foods May Help
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            We put together a full food guide for this symptom, including what to eat, what to avoid, and a simple daily meal plan.
          </p>
          <Link href="/foods-for/when-you-cant-fall-asleep" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>


      <SymptomCta />
    </main>
  )
}
