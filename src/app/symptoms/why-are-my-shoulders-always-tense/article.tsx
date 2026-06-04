
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyTenseShouldersArticle() {
  const slug = "why-are-my-shoulders-always-tense"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Tense Shoulders</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Are My Shoulders Always Tense? The Earrings You Never Asked For
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Somewhere along the way, your shoulders moved into your ears and decided to stay. You drop them down, and within minutes they&apos;ve crept back up. You get a massage, feel great for a day, and then the knots return like they never left. It&apos;s like wearing earrings made of tension that you can&apos;t take off.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Shoulder tension is so common that most people just accept it as part of life. They roll their eyes when someone tells them to relax their shoulders, because they&apos;ve tried, and it doesn&apos;t stick. The tightness comes back every single time.
        </p>
        <p className="text-text2 leading-relaxed">
          The thing about chronic shoulder tension is that stretching alone rarely fixes it for good. That&apos;s because the problem isn&apos;t just in your muscles. In Chinese medicine, the shoulders are a landing pad for stuck energy and unprocessed emotions. Until you address the root, the tension keeps coming home to the same spot.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Shoulder Tension Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Shoulders that creep up toward your ears throughout the day",
            "Knots or tight bands in your upper trapezius that never fully release",
            "Aching between your shoulder blades or at the top of your shoulders",
            "Tension that gets worse with stress, deadlines, or emotional pressure",
            "Feeling like you&apos;re carrying a heavy backpack you forgot you had on",
            "Pain that improves with massage or heat but comes right back",
            "Difficulty fully relaxing your shoulders even when lying down",
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
          The Obvious Causes (Worth Checking First)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Start with the basics before exploring deeper patterns. Poor ergonomics at your desk, hunching over a phone, or carrying heavy bags on one shoulder can all create chronic shoulder tension. If you work at a computer, your monitor might be too low, causing you to shrug your shoulders unconsciously all day.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Weak upper back muscles or tight chest muscles from sitting too much can pull your shoulders forward and up, creating a constant state of low-grade tension. Sleep position matters too. Sleeping on your side without proper pillow support can keep your shoulder in an awkward position all night.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s the thing. Plenty of people fix their desk setup, start stretching, strengthen their back, and their shoulders still creep up. The tension has a momentum of its own that goes beyond muscles and bones. That&apos;s where Chinese medicine has something useful to say.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Shoulder Tension
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, chronic shoulder tension is most often linked to Qi Stagnation, specifically in the Liver and Gallbladder meridians. These meridians run through the shoulders and the sides of the body, and they&apos;re the first to tighten up when your energy gets stuck.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Imagine wearing a backpack that you forgot you had on. You&apos;ve been carrying it so long that you don&apos;t even notice the weight anymore. But your body notices. Your shoulders have been pulling up against that weight for hours, days, weeks. The backpack is emotional weight. Suppressed frustration. Unexpressed feelings. Responsibilities you carry but never set down. Your shoulders are literally bracing against all of it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Liver is responsible for the smooth flow of Qi in Chinese medicine. When you&apos;re stressed, frustrated, or holding things in, Liver Qi gets stuck. And the Gallbladder meridian, which runs right through the tops of your shoulders and up the sides of your neck, acts like a barometer for this stuck energy. When Liver Qi stagnates, the Gallbladder meridian tightens, and your shoulders go right back up to your ears.
        </p>
        <p className="text-text2 leading-relaxed">
          This is why massage helps temporarily but doesn&apos;t last. You can knead the knots out, but if the Liver Qi is still stuck, the knots come back. It&apos;s like clearing a traffic jam without fixing the broken traffic light. The cars will just pile up again.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Shoulder Tension
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, one is especially prone to carrying tension in the shoulders.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the poster child for shoulder tension. Their energy gets stuck easily under emotional pressure, and the shoulders are where it lands most visibly. They tend to sigh often, feel chest tightness, and notice that their mood directly affects their body. Stress doesn&apos;t just bother their mind. It moves straight into their shoulders. About 8% of people have this as their primary type.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Drop the Shoulders
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Rose tea is one of the simplest traditional remedies for moving stuck Liver Qi. Unlike stretching, which addresses the muscles, rose tea works on the energy that&apos;s creating the tension in the first place. A cup in the afternoon, especially on days when you feel the tightness building, can be associated with a gradual softening of shoulder tension over time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stress management isn&apos;t optional for shoulder tension. It&apos;s the actual treatment. This doesn&apos;t mean you need to meditate for an hour a day. It means finding small ways to let the pressure out before it lands in your shoulders. A short walk, venting to a friend, writing down what&apos;s bothering you, even just taking five deep breaths when you notice your shoulders climbing. These aren&apos;t wellness buzzwords. For Qi Stagnant types, they&apos;re the medicine.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle shoulder rolls and arm circles throughout the day help keep Qi moving through the Gallbladder meridian. The key word is gentle. Intense stretching or aggressive foam rolling can actually create more tension if your body braces against it. Think slow, easy movements that feel good rather than painful.
        </p>
        <p className="text-text2 leading-relaxed">
          Warmth on the tops of your shoulders can help. A heating pad, a warm towel, or a hot shower directed at your shoulders for a few minutes. In TCM, cold causes contraction and warmth promotes flow. Heating the area while doing gentle movement can be associated with better results than either one alone.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your shoulder tension is accompanied by pain radiating down your arm, numbness or tingling in your hands, weakness on one side, or if the pain started after an injury, please consult a licensed healthcare provider. Persistent shoulder pain that doesn&apos;t improve with rest should also be evaluated.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
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
          <Link href="/symptoms/why-do-i-have-neck-pain" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Neck Pain?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
