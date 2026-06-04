
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyTinnitusArticle() {
  const slug = "why-do-i-have-tinnitus"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Sensory</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Tinnitus? The Bell Nobody Else Can Hear
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s there when you wake up. It&apos;s there when the room goes quiet. A ringing, a buzzing, a hissing, a tone that seems to come from inside your own head. You ask the person next to you if they hear it too. They don&apos;t. It&apos;s just you and this sound that nobody else can hear, playing on a loop like a broken alarm clock you can&apos;t find.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Tinnitus is frustrating because it&apos;s invisible. There&apos;s nothing to point to, nothing to show people. You look fine on the outside. But inside, there&apos;s this constant noise that makes it hard to concentrate, hard to relax, hard to fall asleep. It wears you down in a way that&apos;s hard to explain to someone who hasn&apos;t experienced it.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;ve been to an ENT and they didn&apos;t find anything alarming, you might have been told to &quot;learn to live with it.&quot; Eastern medicine takes a different view. The ears are connected to specific organ systems, and the type of sound you hear may point to a pattern that can be addressed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What It Feels Like
        </h2>
        <ul className="space-y-2 mb-3">
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Ringing, buzzing, hissing, or clicking in one or both ears
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Sound that gets louder in quiet environments or at night
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Difficulty concentrating or following conversations in noisy rooms
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Trouble falling asleep because the sound becomes more noticeable
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Low-pitched ringing that may come with dizziness or high-pitched ringing with irritability
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Stuff First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Loud noise exposure is the most common cause. Concerts, power tools, headphones cranked up too high, workplace noise. If you&apos;ve been around loud sounds regularly, that&apos;s the first suspect. Earwax buildup can also cause ringing by blocking the ear canal and changing pressure. Certain medications, including high doses of aspirin and some antibiotics, list tinnitus as a side effect.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Age-related hearing loss often comes with tinnitus. As the tiny hair cells in your inner ear degrade over time, your brain tries to fill in the missing frequencies, and you perceive that as ringing. High blood pressure, thyroid issues, and jaw problems (TMJ) can also be associated with ear ringing.
        </p>
        <p className="text-text2 leading-relaxed">
          If all of those have been checked and ruled out, or if the ringing seems connected to other symptoms like poor sleep, dry mouth, or feeling warm at night, the Eastern perspective offers a framework that connects these dots.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains Ear Ringing
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, the Kidneys &quot;open into the ears.&quot; This is a way of saying that ear health is connected to Kidney energy. When Kidney energy is robust, hearing tends to be sharp and the ears are quiet. When Kidney energy declines, the ears may produce phantom sounds, like a radio that picks up static when the signal weakens.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The type of sound matters. A low-pitched ringing or buzzing, like a distant hum, is often associated with Kidney Deficiency. Think of it as the system running low on resources and the ears picking up the static of that depletion. A high-pitched ringing or screeching, on the other hand, may be associated with Liver Fire, where excess heat rises to the head and creates noise. The low hum is about not having enough. The high screech is about too much heat pushing upward.
        </p>
        <p className="text-text2 leading-relaxed">
          The Kidney Yin Deficiency pattern is the one most often linked to chronic tinnitus. Yin is the cooling, moistening aspect of the body. When Yin is low, there isn&apos;t enough moisture to keep things quiet and settled. What TCM calls &quot;empty heat&quot; rises to the upper body, and the ears, being sensitive instruments, pick it up as sound. It&apos;s like a bell that rings because there&apos;s not enough cushioning to dampen the vibration.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Are Most Affected
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the most common pattern associated with chronic tinnitus. These people tend to run warm, feel dry (dry throat, dry skin, dry eyes), and have trouble with heat. Their internal cooling reservoir is lower than average, which can manifest as phantom sounds in the ears when there isn&apos;t enough Yin to keep the system quiet.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Roughly 10% of people fall into the Yin Deficient category. They often describe themselves as someone who &quot;runs hot&quot; or &quot;can&apos;t handle summer.&quot; The tinnitus they experience is usually the low, persistent type that gets worse at night or when they&apos;re tired.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Foods that nourish Kidney Yin may help quiet the static over time. Black sesame seeds are one of the most commonly recommended foods for ear-related complaints in TCM. Ground into a paste or sprinkled on food, they&apos;re an easy daily habit. Walnuts are another Kidney-supportive food, and they&apos;re conveniently shaped like a brain, which traditional practitioners see as a sign they support the head area.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Goji berries and bone broth are also classic Yin-nourishing foods. A bowl of bone broth soup a few times a week provides the kind of slow, deep nourishment that the Kidney system responds to. Goji berries can be added to tea, oatmeal, or eaten by the small handful.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          On the flip side, some foods may make tinnitus worse. Excessive salt, coffee, and alcohol all tend to deplete Yin and generate heat. If your ringing gets louder after a salty dinner or a few cups of coffee, that&apos;s useful information. It&apos;s telling you something about what your body doesn&apos;t need more of.
        </p>
        <p className="text-text2 leading-relaxed">
          Protect your sleep. Yin is replenished during rest, especially the hours before midnight. Poor sleep creates a vicious cycle: the ringing keeps you up, and the lack of sleep makes the ringing worse. Doing whatever you can to protect those early-night sleep hours may help break that cycle.
        </p>
      </section>

      <section className="mb-10">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
            When to See a Doctor
          </h2>
          <p className="text-text2 leading-relaxed mb-3">
            If tinnitus is only in one ear, comes on suddenly, or is accompanied by dizziness, hearing loss, or a feeling of fullness in the ear, see an ENT promptly. These can be signs of conditions that need medical evaluation, including Meniere&apos;s disease or acoustic neuroma.
          </p>
          <p className="text-text2 leading-relaxed mb-3">
            Pulsatile tinnitus, where the ringing pulses in time with your heartbeat, should also be evaluated by a doctor as it can be associated with blood vessel issues.
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
          <Link href="/symptoms/why-am-i-always-thirsty" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Thirsty?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
