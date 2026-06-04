
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyNeckPainArticle() {
  const slug = "why-do-i-have-neck-pain"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Neck Pain</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Neck Pain? The Pillar That Carries Too Much
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your neck is the narrow bridge between your head and the rest of your body. It holds up a head that weighs roughly 10 pounds, and it does this while also letting you turn, tilt, and nod. When everything is working well, you don&apos;t think about it. When it&apos;s not, every movement reminds you.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Neck pain is one of those things that sneaks up on you. One morning you wake up and you can&apos;t turn your head to check your blind spot. You reach for your seatbelt and wince. You try to look at the ceiling and your neck protests like you asked it to do something unreasonable.
        </p>
        <p className="text-text2 leading-relaxed">
          The standard advice is to improve your posture, get a better pillow, and stretch more. Those things can help. But if your neck keeps tightening up no matter what you do, there may be something deeper going on. Chinese medicine has been treating neck pain for thousands of years, and it points to a pattern that posture alone doesn&apos;t explain.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Neck Pain From This Pattern Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Stiffness and aching at the base of your skull or sides of your neck",
            "Pain that gets worse with stress, frustration, or emotional tension",
            "Tightness that seems to creep up into your shoulders and head",
            "Neck that feels locked or rigid, especially in the morning",
            "Pain that improves with movement, warmth, or gentle massage",
            "Frequent urge to crack or stretch your neck for relief",
            "Headaches that start at the back of the head or temples",
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
          Before looking at Eastern patterns, rule out the basics. Poor posture from hunching over a phone or laptop is the most common culprit. Your neck wasn&apos;t designed to hold your head at a 45-degree angle for hours. A worn-out pillow or mattress that doesn&apos;t support your spine can also create chronic neck stiffness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Physical strain from heavy lifting, awkward sleeping positions, or sudden movements can trigger acute neck pain. Eye strain and tension from clenching your jaw during the day often show up as neck tightness too.
        </p>
        <p className="text-text2 leading-relaxed">
          But plenty of people fix their posture, buy the ergonomic pillow, and their neck still hurts. The tension keeps coming back like it has a mind of its own. That&apos;s where Chinese medicine offers a different lens.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Neck Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, chronic neck pain is most often linked to Qi Stagnation. Qi is the energy that flows through your body along pathways called meridians. When Qi flows freely, your muscles are supple and your neck moves without complaint. When Qi gets stuck, muscles tighten, and the tightness turns into pain.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of your neck as a narrow bridge between two cities. The head is one city, the body is the other. Traffic (Qi) needs to flow in both directions for everything to work. Now imagine what happens when there&apos;s a traffic jam at the narrowest point on the bridge. Cars pile up. Nothing moves. Pressure builds. The bridge itself starts to strain under the weight of it all.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          That&apos;s what happens in your neck. The Liver is responsible for keeping Qi moving smoothly throughout your body. When you&apos;re stressed, frustrated, or suppressing emotions, Liver Qi gets stuck. And because the neck is the narrowest passage between your head and torso, that&apos;s where the traffic jam shows up first. The Gallbladder meridian also runs through the sides of the neck, and it&apos;s sensitive to the same emotional pressures.
        </p>
        <p className="text-text2 leading-relaxed">
          This is why your neck might tighten up during a stressful week even if your posture is perfect. The problem isn&apos;t just mechanical. It&apos;s energetic. The tension in your neck may be the physical manifestation of energy that&apos;s gotten stuck trying to pass through the narrowest point in your body.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Neck Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, one stands out for chronic neck tension.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the classic neck pain type. Their energy gets stuck easily, especially under emotional pressure. They tend to hold tension in their neck and shoulders, sigh frequently, and feel frustrated or irritable when things don&apos;t go their way. Their neck pain often comes on during stressful periods and eases when they relax or express their feelings. About 8% of people fall into this category.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Ease the Tension
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Since the root is often Liver Qi that&apos;s gotten stuck, the goal is to get things moving again. Peppermint tea is a simple place to start. In TCM, peppermint has a cooling, moving quality that can help ease stuck Qi in the head and neck area. A cup in the afternoon, especially on stressful days, can be associated with a noticeable loosening of neck tension.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle neck rolls and shoulder shrugs throughout the day help more than an intense stretching session once a week. Think of it like keeping traffic flowing on the bridge. Small, frequent movements prevent the backup from building up in the first place. Roll your neck slowly in both directions five times, then shrug your shoulders up toward your ears and let them drop. Do this every couple of hours.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Green tea can support the Liver and help Qi flow more smoothly. Unlike coffee, which can add jittery tension, green tea has a gentler stimulating effect that supports the Liver&apos;s ability to keep energy moving. A cup or two a day, especially in the morning, may help.
        </p>
        <p className="text-text2 leading-relaxed">
          The emotional side matters too. If you&apos;re someone who holds in frustration or anger, that energy has to go somewhere. For Qi Stagnant types, it often goes straight to the neck. Finding healthy ways to express or process emotions, whether through journaling, talking to someone, or physical activity, can be associated with real improvement in neck pain that no amount of stretching alone seems to fix.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your neck pain is severe, follows an injury or accident, or is accompanied by numbness, tingling, or weakness in your arms or hands, please consult a licensed healthcare provider. Neck pain with fever, unexplained weight loss, or pain that radiates down your arm should also be evaluated by a doctor.
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
          <Link href="/symptoms/why-do-i-have-headaches" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Headaches?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-so-irritable" className="text-sm text-accent no-underline hover:underline">
            Why Am I So Irritable?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
