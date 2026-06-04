import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyDarkCirclesArticle() {
  const slug = "why-do-i-have-dark-circles"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Skin</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Dark Circles? The Shadows Sleep Can&apos;t Erase
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You sleep eight hours, drink water, use eye cream, and still look like you haven&apos;t slept in days. People ask if you&apos;re tired. You say no, but the mirror tells a different story. Dark circles under your eyes have become a permanent fixture, like luggage you never packed but can&apos;t seem to check.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The internet will tell you it&apos;s genetics, allergies, or thin skin. And sure, those things can play a role. But what if there&apos;s something deeper going on? Something about how your body is running on the inside that shows up right there, under your eyes, for everyone to see?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine reads the face like a dashboard. Dark circles under the eyes are like a warning light on that dashboard, and they&apos;ve been pointing to specific internal patterns for thousands of years. Let&apos;s unpack what those patterns might be.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Dark Circles Actually Feel Like Day to Day
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If dark circles are linked to an internal pattern, you may also notice some of these:
        </p>
        <ul className="space-y-2">
          {[
            "Looking permanently tired regardless of how much you slept",
            "The skin under your eyes has a bluish, purplish, or brownish tint",
            "Concealer helps but never fully covers it",
            "Dry or papery skin around the eye area",
            "Feeling like your eyes are dry or gritty, especially at night",
            "Waking up with puffy or swollen under-eyes",
            "The circles getting darker when you&apos;re stressed or run down",
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
          Before we go Eastern, let&apos;s cover the basics. Genetics play a real role. Some people simply have thinner skin or more visible blood vessels under their eyes, and no amount of sleep will change that. Allergies can cause blood vessels to dilate and create a dark tint. Nasal congestion restricts blood flow and creates pooling under the eyes. If you rub your eyes a lot, that friction can darken the skin over time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other factors: aging (skin thins as we get older), iron deficiency, vitamin K deficiency, dehydration, excessive sun exposure, smoking, and certain medications. If you haven&apos;t had blood work recently, checking iron and vitamin levels is a reasonable first step.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s what frustrates a lot of people: the blood work is fine, the allergies are managed, the sleep is good, and the dark circles are still there. That&apos;s when Chinese medicine has something useful to offer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Dark Circles
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the area under the eyes is connected to the Kidney system. Not the kidneys as the anatomical organs you&apos;re thinking of, but the Kidney system as an energy complex that governs your reserves, your aging process, your bones, your hair, and your fundamental vitality. When Kidney energy is depleted, it can show up as darkness under the eyes. Think of it like a battery indicator. When the battery is low, the indicator turns red. Dark circles are your body&apos;s version of that red battery icon.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The most common pattern is Kidney Yin Deficiency. Yin is the cooling, moistening, resting aspect of your body. When Yin is low, there&apos;s relative excess heat, and that heat can &quot;cook&quot; the fluids in the delicate under-eye area, leaving it dry, thin, and discolored. People with this pattern often also have trouble sleeping, dry skin, night sweats, and a feeling of being &quot;wired but tired.&quot;
        </p>
        <p className="text-text2 leading-relaxed">
          The second pattern is Spleen Qi Deficiency. The Spleen is in charge of transforming food into nourishment and keeping things in their proper place. When Spleen Qi is weak, fluids can pool where they shouldn&apos;t, including under the eyes. This creates the puffy, swollen look that makes dark circles even more visible. People with this pattern often feel tired, get bloated after eating, and have a pale complexion overall.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Shadows
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, dark circles show up most often in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary match. Their internal cooling system is underperforming, which leads to dry skin, poor sleep, and that characteristic darkness under the eyes. These people often run warm at night, wake up with a dry mouth, and feel like their body is burning through its reserves faster than it can replenish them. The dark circles are a visible sign of those depleted reserves.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) can also develop dark circles, but from a different angle. Their low energy means their body isn&apos;t circulating fluids efficiently, leading to puffiness and pooling under the eyes. The darkness here is often accompanied by paleness in the rest of the face, creating a stark contrast. These people feel tired, sweat easily, and catch colds more often than others.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Lighten the Shadows
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Kidney Yin Deficiency is the pattern, the focus is on nourishing your reserves. Foods that support Kidney Yin include black sesame seeds, black beans, walnuts, goji berries, mulberries, and bone broth. These aren&apos;t random recommendations. In TCM, dark-colored foods are often associated with the Kidney system. A simple daily habit: a small handful of black sesame seeds mixed with a bit of honey. It takes thirty seconds and many people notice a difference in their overall vitality within a few weeks.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Spleen Qi Deficiency is behind your dark circles, the approach shifts to strengthening digestion. Warm, cooked meals are essential. Congee (rice porridge), sweet potato, jujube dates, and lightly cooked vegetables all support Spleen function. Cut back on cold, raw, and sweet foods, which weaken the Spleen over time. The puffiness should gradually reduce as your digestion gets stronger.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sleep before 11 PM. In TCM, the hours before midnight are considered twice as restorative as the hours after. Staying up late directly depletes Kidney Yin and makes dark circles worse. If you&apos;re a night owl, try shifting your bedtime back by 15 minutes each week until you&apos;re under the covers before 11.
        </p>
        <p className="text-text2 leading-relaxed">
          Hydrate with warm water throughout the day. Cold water shocks your system and doesn&apos;t absorb as well. Warm water is easier on your body and supports the gentle, steady nourishment that both the Kidney and Spleen systems need. Think of watering a plant with room temperature water versus dumping ice water on it. The plant prefers gentle.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your dark circles appeared suddenly, are accompanied by swelling around the eyes, itching, redness, or changes in vision, please consult a licensed healthcare provider. Dark circles can sometimes be associated with allergies, thyroid conditions, or other medical issues that need proper evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            Internal Heat Pattern →
          </Link>
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
          <Link href="/symptoms/why-is-my-skin-so-dry" className="text-sm text-accent no-underline hover:underline">
            Why Is My Skin So Dry?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
