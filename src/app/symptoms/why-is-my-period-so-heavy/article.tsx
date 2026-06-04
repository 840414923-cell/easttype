
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyPeriodHeavyArticle() {
  const slug = "why-is-my-period-so-heavy"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Heavy Period</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Period So Heavy? The Flood That Won&apos;t Stop
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You go through pads or tampons faster than you can buy them. You double up, using both a pad and a tampon, and still sometimes leak through. You pass clots that look alarming. Your period lasts seven days, maybe more. By the end of it you feel drained, pale, and wiped out. And next month it happens again.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Heavy menstrual bleeding, or menorrhagia, is more than just an inconvenience. Losing that much blood month after month can lead to iron deficiency, fatigue, and a general feeling of being run down. The standard approach usually involves checking for fibroids, testing thyroid function, and sometimes prescribing hormonal birth control. These are all valid steps.
        </p>
        <p className="text-text2 leading-relaxed">
          But there are plenty of women who get checked, don&apos;t have fibroids, have normal thyroid panels, and are told that heavy periods are &quot;just how their body works.&quot; Chinese medicine offers a framework for understanding why the body is flooding, and it comes down to two things: blood that&apos;s stuck and energy that&apos;s too weak to hold things in place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Heavy Bleeding Looks Like in This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your heavy period fits a Blood Stasis or Qi Deficiency pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Soaking through a pad or tampon every 1-2 hours for several hours",
            "Passing blood clots, sometimes large ones",
            "Period lasting longer than 7 days",
            "Feeling exhausted, lightheaded, or pale during and after your period",
            "Bleeding that is dark red or purplish with a thick quality",
            "Cramping that eases after clots pass",
            "A feeling of heaviness or bearing-down in the pelvis",
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
          The Pipe That Can&apos;t Hold the Pressure
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, heavy periods are most often linked to two patterns: Blood Stasis and Qi Deficiency. They sound like opposites, but they work together in a way that creates the flooding effect.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Blood Stasis means that blood has become sluggish and isn&apos;t flowing freely. Instead of a smooth, even flow, the blood moves in a lumpy, uneven way. Think of it like a hose with mud in it. The water can&apos;t pass through smoothly, so pressure builds up behind the blockage. When the pressure gets high enough, a surge of water blasts through. In your uterus, that surge is the heavy bleeding and clotting. The blood is essentially being pushed out in a panic because it can&apos;t drain in a controlled, orderly way.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Deficiency is the other side of the coin. In Chinese medicine, Qi has a &quot;holding&quot; function. It keeps things in their proper place. Blood stays in the vessels, organs stay in position, fluids stay where they belong. When Qi is weak, it can&apos;t hold things as firmly. It&apos;s like a faucet with a worn-out washer. The water isn&apos;t gushing because of high pressure. It&apos;s gushing because the mechanism that should be containing it has gotten loose.
        </p>
        <p className="text-text2 leading-relaxed">
          Many women with heavy periods have a combination of both. The blood is sticky and slow (Stasis), and the energy that should be managing the flow is too weak to keep things controlled (Deficiency). The result is a period that floods rather than flows.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Heavy Bleeding
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Blood Stasis type (血瘀质) is the primary match. These people tend to have darker complexions, bruise easily, and may notice dark circles under the eyes. Their blood moves more slowly and tends to congeal, which is exactly what you see in the clots during a heavy period. The stagnation creates the pressure that forces blood out in large volume.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the second match. These people are often tired, soft-spoken, and tend to sweat easily with minimal exertion. Their holding energy is low, so once the period starts, there isn&apos;t enough Qi to moderate the flow. The blood just runs.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Moderate the Flow
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Hawthorn berry (shan zha) is one of the most commonly recommended foods in TCM for improving blood circulation and reducing stasis. It helps blood move more freely, which may reduce the pressure that causes flooding. You can find hawthorn tea or hawthorn slices at most Asian grocery stores. A cup a day in the week before your period is a simple place to start.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Dark beans and legumes, such as black beans and adzuki beans, are traditionally used to support blood health in TCM. Black bean soup with a little brown sugar is a simple remedy. These foods nourish the blood without adding the stagnation that richer, heavier foods can contribute to.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For the Qi Deficiency side of things, rest during your period is genuinely important. Not the &quot;push through and pretend you&apos;re fine&quot; kind. Actual rest. When Qi is already low, the period is drawing heavily on your reserves. Trying to maintain your normal pace during a heavy period is like trying to drive a car on fumes. It works for a while, but you&apos;re depleting yourself further.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid very cold food and drinks, as cold causes contraction and can make the stasis worse. Also avoid excessive sugar and greasy food, which can create Dampness and further clog up the system. Simple, warm, cooked food is your friend during and around your period.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Heavy periods can be caused by uterine fibroids, thyroid disorders, endometriosis, polyps, or bleeding disorders. If you&apos;re soaking through a pad or tampon every hour for more than two hours, if your period lasts more than 7 days regularly, or if you feel dizzy and faint during your period, please see a doctor. Iron deficiency anemia is a real consequence of chronic heavy bleeding and needs to be addressed. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/blood-stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-period-cramps" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Period Cramps?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-dizzy" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Dizzy?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
