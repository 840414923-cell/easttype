
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyBreastTendernessArticle() {
  const slug = "why-do-i-have-breast-tenderness"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Breast Tenderness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Breast Tenderness? The Bruises That Arrive on Schedule
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          About a week before your period, it starts. Your breasts feel heavy, swollen, and sore. Taking off your bra at the end of the day is a relief. Sleeping on your stomach is out of the question. Sometimes the soreness radiates into your armpits. You can feel lumps that weren&apos;t there last week, which is terrifying the first few times it happens, until you realize they disappear after your period ends.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is cyclic breast tenderness, also called mastalgia, and it&apos;s one of the most common premenstrual symptoms. Somewhere between 50% and 80% of women experience it at some point. It arrives before your period and leaves after, as reliably as clockwork. Which is both reassuring (it&apos;s predictable) and frustrating (it keeps happening).
        </p>
        <p className="text-text2 leading-relaxed">
          First, the important reassurance: cyclic breast tenderness that comes and goes with your period is not the same thing as a breast lump that stays. If you find a lump that doesn&apos;t go away after your period, or any discharge, or skin changes, please see a doctor right away. What we&apos;re talking about here is the monthly soreness and swelling that resolves on its own. That&apos;s a different conversation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Cyclic Breast Tenderness Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your breast tenderness fits the Qi Stagnation pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Soreness and swelling starting 5-10 days before your period",
            "Both breasts affected, though one may be worse than the other",
            "Tenderness worse on the outer sides and upper areas",
            "Feeling of fullness, heaviness, or lumpiness that comes and goes",
            "Pain worsened by movement, pressure, or wearing a tight bra",
            "Symptoms that ease or disappear within a day or two after your period starts",
            "Tenderness that gets worse in months when you're more stressed",
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
          The Highway That Runs Through Your Breasts
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, the breasts sit right on two major energy pathways: the Liver meridian and the Stomach meridian. Think of meridians as highways that Qi travels along. The Liver meridian runs along the sides of the body and passes through the breasts. The Stomach meridian runs down the front of the body, straight through the center of the breasts. These aren&apos;t metaphorical. In TCM anatomy, these are the literal channels that supply energy to the breast tissue.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Before your period, Qi and Blood start gathering in the pelvis to prepare for menstruation. But they also build up in the breasts because of those meridian pathways. If your Qi is flowing smoothly, the extra energy passes through without causing problems. If your Qi is stagnating, the energy pools in the breasts like traffic backing up on a highway. The pooling creates pressure, and the pressure creates pain and swelling.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is the same traffic jam analogy that explains <Link href="/symptoms/why-do-i-have-period-cramps" className="text-accent hover:underline">period cramps</Link> and <Link href="/symptoms/why-do-i-have-pms" className="text-accent hover:underline">PMS</Link>. The root cause is the same: Qi that isn&apos;t moving freely. The difference is where the traffic jam happens to show up. For some women it&apos;s the uterus. For others it&apos;s the breasts. For many, it&apos;s both.
        </p>
        <p className="text-text2 leading-relaxed">
          The Liver is the organ system most responsible for this. When the Liver is stressed, frustrated, or overworked, it tightens. The meridians narrow. Qi can&apos;t pass through freely. And since the Liver meridian runs right through the breasts, that&apos;s often where the pressure shows up first. It&apos;s the upstream indicator. Breast tenderness is like the warning light on your dashboard, telling you that something upstream isn&apos;t flowing right.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Breast Tenderness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the primary and often only match here. These are people who carry tension in their bodies, tend to feel frustrated or stuck emotionally, sigh frequently, and have a hard time letting things go. Their energy system is prone to tightening rather than flowing, and the breasts are one of the most sensitive areas to that tightness because of their location on the Liver and Stomach meridians.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          About 15% of people fall into the Qi Stagnant category, and cyclic breast tenderness is one of its hallmark symptoms. If you also experience PMS mood swings, period cramps with a heavy bearing-down quality, or a feeling of tightness in your ribs and chest before your period, the pattern fits together.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Ease the Soreness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Rose tea, mentioned in other articles about Qi Stagnation, is a go-to here too. It gently moves Liver Qi and helps prevent the pooling that causes breast tenderness. Start drinking it daily in the week or two before your period, not just when the pain starts. Prevention is easier than relief when it comes to stagnation.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Reducing caffeine can make a noticeable difference for some women. Coffee, energy drinks, and strong tea can all contribute to Qi Stagnation and directly increase breast tenderness in some people. This doesn&apos;t mean you have to quit entirely. But if you&apos;re drinking three cups a day and your breasts are killing you before your period, try cutting back to one in the week before your period and see if it helps.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Reducing salt intake before your period can help with the swelling aspect. Salt causes water retention, and water retention adds to the feeling of fullness and heaviness in the breasts. Less salt in the week before your period means less fluid volume for the already-congested tissue to deal with.
        </p>
        <p className="text-text2 leading-relaxed">
          A supportive, non-restrictive bra matters more than most people think during the tender days. Not a compression sports bra that squishes everything down. Something that holds without squeezing. The goal is to reduce movement and gravity pulling on already-sensitive tissue, not to add more pressure to an area that&apos;s already congested.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Cyclic breast tenderness is common and usually benign. However, if you notice a lump that doesn&apos;t go away after your period, any nipple discharge (especially bloody), skin dimpling or redness, or pain that is only on one side and doesn&apos;t follow your cycle, please see a doctor promptly. This article is for informational purposes only and is not medical advice.
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
