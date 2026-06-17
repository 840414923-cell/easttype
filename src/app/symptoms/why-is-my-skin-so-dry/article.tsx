
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyDrySkinArticle() {
  const slug = "why-is-my-skin-so-dry"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Dry Skin</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Skin So Dry? The Moisture That Disappeared
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You moisturize. You really do. Every morning, every night, sometimes in between. You've tried thick creams, thin serums, oils, balms. Nothing works for long. Two hours after applying, your skin feels tight again. Your elbows could sand wood. Your lips crack in winter no matter how much balm you use.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Skin care companies would have you believe you just haven't found the right product. But what if the problem isn't what you're putting on your skin? What if the problem is that your body isn't sending enough moisture to your skin in the first place?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a name for the body's internal moisturizing system. It's called Yin. When Yin is adequate, your skin stays hydrated from within. When Yin is low, no amount of external moisturizer can compensate for what's missing on the inside.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Yin-Deficiency Dry Skin Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "Skin feels dry and tight even with regular moisturizer",
            "Dryness is worse at night or in the evening",
            "Your mouth and throat often feel dry, especially overnight",
            "Eyes may feel dry or gritty",
            "Hair might be brittle or thinning",
            "Nails break easily or have ridges",
            "You tend to feel warm, especially in the afternoon and evening",
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
          The External Causes (Still Worth Addressing)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before looking inward, consider the obvious. Hot showers strip natural oils. Central heating and air conditioning dry the air. Harsh soaps and cleansers damage your skin barrier. Not drinking enough water is an actual cause of dry skin, not just something your doctor says.
        </p>
        <p className="text-text2 leading-relaxed">
          Winter is brutal for dry skin in any climate. As humidity drops, moisture evaporates from your skin faster. If your dry skin is seasonal and resolves in summer, it's probably environmental. If it persists year-round regardless of climate, humidity, or how much water you drink, the Eastern perspective becomes more relevant.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Chronic Dry Skin
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, Yin is your body's cooling, moistening, lubricating force. It's the water in the radiator, the oil in the engine, the moisture in the soil. When Yin is sufficient, your body keeps itself lubricated from the inside: eyes are moist, mouth is wet, skin is supple, joints move smoothly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Yin is deficient (Yin Deficiency), the body's internal moisture reserves are depleted. It's like a plant whose roots can't reach the water table. You can mist the leaves (apply moisturizer), but the plant stays thirsty because the real problem is underground.
        </p>
        <p className="text-text2 leading-relaxed">
          Yin Deficiency often comes with other signs: feeling warm at night, night sweats, a dry cough, and that classic "running hot" sensation. The dryness isn't limited to skin. It can affect the mouth, throat, eyes, and digestive tract too. The common thread is insufficient internal moisture across multiple systems.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind the Dryness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the classic "dry" constitution. About 10% of people fall into this category. They tend to run warm, especially in the afternoon and evening. They may have night sweats, a red or flushed face, and a thin body type. Their skin, hair, and mucous membranes all tend toward dryness.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">Yin Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Hydrate From Within
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Yin-nourishing foods are the primary tool. Pear is one of the best. Black sesame seeds, lily bulb, lotus seed, tremella mushroom, and cucumber are all traditionally used to support Yin. Mung bean soup and tofu are cooling and moistening. Eat these regularly rather than expecting a single meal to fix things.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid foods that generate internal heat and further deplete Yin. Spicy food, alcohol, deep-fried food, excessive coffee, and very dry roasted foods all contribute to the problem. These are like adding fuel to a fire that's already burning through your moisture reserves.
        </p>
        <p className="text-text2 leading-relaxed">
          Go to bed before 11 PM. In TCM, the hours before midnight are the most important for replenishing Yin. Late nights literally burn through your Yin reserves. Many people notice a dramatic improvement in dry skin simply from getting to bed earlier consistently.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your dry skin is severe, cracking, bleeding, or accompanied by a rash, itching, or skin color changes, please consult a dermatologist or licensed healthcare provider. Chronic dry skin can sometimes be a sign of thyroid dysfunction, eczema, or other conditions that need medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">Internal Heat Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">Why Do I Have Night Sweats?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">Why Do I Wake Up at 3AM?</Link>
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
          <Link href="/foods-for/when-your-skin-is-dry" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>


      <SymptomCta />
    </main>
  )
}
