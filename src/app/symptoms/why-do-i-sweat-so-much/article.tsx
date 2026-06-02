
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function ExcessiveSweatingArticle() {
  const slug = "why-do-i-sweat-so-much"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Excessive Sweating</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Sweat So Much? The Thermostat That Won&apos;t Turn Down
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You walk up a slight hill and your shirt is damp. You eat a warm meal and sweat beads form on your forehead. You sit in a meeting and feel moisture collecting under your arms. It&apos;s not that you&apos;re working harder than everyone else. Your body&apos;s internal thermostat is just set differently.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard explanation is that some people just sweat more. Genetics, body size, fitness level. All true. But when sweating happens out of proportion to the situation, when you&apos;re sweating at rest or during mild activity, something beyond simple genetics may be at play.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine sees sweating as a function of the body&apos;s gatekeeping system. When that system is undercharged, the gates don&apos;t close properly, and the body releases moisture at the wrong times. The thermostat isn&apos;t broken. It&apos;s just missing the energy to regulate itself.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Excessive Sweating Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Sweating during mild exertion (walking, eating, light activity)",
            "Daytime sweating that&apos;s not proportional to heat or effort",
            "Night sweats that soak pajamas or sheets",
            "Waking up with damp hair or skin",
            "Sweating that interferes with daily activities or sleep",
            "Skin that feels clammy or moist most of the day",
            "Others commenting on how much you sweat",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Hyperhidrosis is a primary medical condition where the sweat glands are overactive. A dermatologist can diagnose this and discuss treatment options. Thyroid disorders, especially hyperthyroidism, can cause excessive sweating and can be checked with a simple blood test.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Anxiety and stress responses are common triggers. Medications, including antidepressants and blood pressure drugs, can cause sweating as a side effect. Hormonal changes during menopause or puberty are well-known causes. Obesity increases the body&apos;s heat load and can lead to more sweating. Infections and diabetes are also worth checking.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get their thyroid checked, review their medications, and everything comes back normal. Yet they&apos;re still sweating through shirts and waking up with damp sheets. That&apos;s where Chinese medicine offers a different perspective on why the thermostat won&apos;t turn down.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Excessive Sweating
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, sweating is regulated by Wei Qi, the defensive energy at the skin surface. Wei Qi acts like a gatekeeper. When Qi is strong, the gates open when appropriate, during exercise or in heat, and close when needed, during rest or in cool conditions. When Qi is deficient, the gates don&apos;t close properly. Minor triggers open them fully, causing sweating from small stimuli.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of a bouncer at a club who can&apos;t tell the difference between a VIP and a troublemaker. Everyone gets let in, and the club gets overcrowded. That&apos;s what Qi Deficiency does to your pores. They can&apos;t distinguish between a real reason to open, like exercise, and a false alarm, like eating a warm meal. The result is sweating at the wrong times.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin Deficiency creates night sweats. Without enough Yin, the cooling moisture principle, internal heat builds at night. Your body sweats to cool itself, like a car radiator that kicks on when the engine is running hot but the coolant is low. The sweating is the body&apos;s emergency cooling mechanism, not a gatekeeping failure.
        </p>
        <p className="text-text2 leading-relaxed">
          Some people have both patterns. They sweat during the day from Qi Deficiency and at night from Yin Deficiency. The thermostat is stuck on &quot;heat&quot; around the clock, but for two different reasons. Daytime sweating is the gatekeeper falling asleep. Nighttime sweating is the cooling system running dry.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Excessive Sweating
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and excessive sweating shows up most clearly in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the primary match for daytime sweating. Their defensive energy is low, so the pores can&apos;t regulate properly. These people often feel tired, speak softly, and sweat from minimal effort. They may also have a pale complexion and feel short of breath. About 12% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary match for night sweats. Their internal cooling is undercharged, so heat builds at night and the body sweats to release it. These people often feel warm internally, have a dry mouth, and may experience restlessness at night. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Some people have both patterns, sweating around the clock. The daytime sweating comes from Qi Deficiency and the nighttime sweating from Yin Deficiency. This combination is common in people who have been under prolonged stress or who have been running on empty for a long time.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Regulate the Thermostat
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Qi-building foods give the gatekeeper energy to close the pores properly. Congee, jujube dates, sweet potato, chicken broth, and ginger tea all support Qi. These foods are like recharging the bouncer so he can tell the difference between a real reason to open the doors and a false alarm.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin-nourishing foods rebuild the cooling system. Pear, black sesame, lily bulb, tremella mushroom, and lotus seed all support Yin. These foods help replenish the coolant so the radiator doesn&apos;t have to work overtime at night. For night sweats, these foods are especially helpful when eaten in the evening.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid triggers that generate heat or drain Qi. Spicy food, alcohol, coffee, and intense exercise all generate heat that the body tries to release through sweating. Room temperature water is better than ice-cold. Cold water shocks the system and makes it harder to regulate temperature, not easier. Light, breathable clothing helps too. Tight synthetic fabrics trap heat and moisture against the skin.
        </p>
        <p className="text-text2 leading-relaxed">
          Gentle movement is the right approach. Walking, stretching, and tai chi keep the body&apos;s systems running smoothly without draining Qi or generating excess heat. Heavy workouts drain Qi and generate more heat, which can make sweating worse. Think of it as maintaining a steady idle rather than revving the engine.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Excessive sweating can sometimes indicate serious conditions. If sweating is sudden, severe, accompanied by chest pain, fever, or unexplained weight loss, seek immediate medical attention. This article is for informational purposes only and is not medical advice.
        </p>
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
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
