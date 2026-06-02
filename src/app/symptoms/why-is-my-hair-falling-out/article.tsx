
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function HairFallingOutArticle() {
  const slug = "why-is-my-hair-falling-out"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Hair Falling Out</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Hair Falling Out? The Roots That Lost Their Grip
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You notice it in the shower drain. Then on your pillow. Then in your brush, which seems to collect more hair than your head these days. It&apos;s subtle at first, then not subtle at all. You start avoiding wind. You change your part. You look at old photos and wonder when it started.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Hair loss is one of those things people don&apos;t talk about enough, even though it&apos;s incredibly common. The standard response is either &quot;it&apos;s genetic&quot; or &quot;try minoxidil,&quot; which feels like being told your house is flooding and the only option is to mop faster. What if you could at least slow down the water?
        </p>
        <p className="text-text2 leading-relaxed">
          Traditional Chinese Medicine doesn&apos;t see hair as separate from the rest of your body. It sees hair as the visible tip of an internal system. When that system is well-nourished, hair grows thick and strong. When it&apos;s depleted, hair thins and falls. The question isn&apos;t just what&apos;s happening to your hair. It&apos;s what your body is no longer able to send to your scalp.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Hair Thinning Actually Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this sounds familiar, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "More hair in the drain, on your pillow, and in your brush than feels normal",
            "Your ponytail feels thinner or your part looks wider",
            "Hair that used to grow quickly now seems to stall at a certain length",
            "New growth that's fine, wispy, or breaks easily instead of growing thick",
            "A dry or itchy scalp that no shampoo seems to fix",
            "Shedding that comes in waves rather than a steady trickle",
            "The feeling that your hair and your overall vitality are declining together",
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
          The Standard Explanations (And Their Limits)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most common explanation is genetics, specifically androgenetic alopecia. This is real and well-documented. If hair loss runs in your family, you may have a genetic predisposition. But genetics loads the gun. Environment pulls the trigger. Two people with the same genetic profile can experience very different rates of hair loss depending on their internal health.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other common causes: thyroid dysfunction (both overactive and underactive), iron deficiency, severe stress (telogen effluvium), hormonal changes after pregnancy or during menopause, certain medications, and autoimmune conditions. These are all worth checking with your doctor.
        </p>
        <p className="text-text2 leading-relaxed">
          But what about the people whose blood work is normal, whose thyroid is fine, whose iron levels are adequate, and whose hair is still thinning? That&apos;s where Chinese medicine offers a framework that connects the dots differently.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Hair Loss
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, hair is considered the extension of Blood and the outward manifestation of Kidney energy. Kidney energy is your deepest reservoir of vitality, the energy you inherited from your parents and the energy you build through lifestyle. Blood in TCM includes the nourishing, moistening function that keeps tissues healthy and well-fed.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Blood is insufficient, the scalp doesn&apos;t get enough nourishment to support healthy hair growth. Think of it like a garden with poor soil. The plants are there, but they can&apos;t grow strong because the nutrients aren&apos;t reaching the roots. When Kidney energy is depleted, the deepest source of growth and renewal is compromised. Hair, which requires constant renewal, is one of the first things to show it.
        </p>
        <p className="text-text2 leading-relaxed">
          Two specific patterns are most commonly linked to hair thinning. Yin Deficiency means your body&apos;s cooling and moistening force is undercharged, which dries out the fluids that keep hair rooted. Qi Deficiency means the overall energy that pumps Blood to the scalp is too weak to deliver enough nourishment. Some people have both, which makes the thinning more pronounced.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Thinning
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and hair loss shows up most often in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary match. Their internal cooling system is undercharged, which dries out the fluids that nourish hair follicles, like leaving a plant too close to a heater. They may also experience night sweats, dry skin, and a dry mouth. About 10% of people have this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) experiences hair thinning because Blood circulation to the scalp is weak. The hair follicles are there, the nutrients are somewhere in the body, but the delivery system is too weak to get them where they need to go. About 15% of people have this pattern.
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
          Strengthening the Roots: What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Yin Deficiency is driving your hair loss, focus on foods that replenish the cooling, moistening force. Black sesame is the classic TCM food for hair, and it supports both Blood and Yin. Other helpful foods: goji berries, spinach, beetroot, bone broth, lotus seed, tremella mushroom, and pear. These help rebuild the nourishing environment your scalp needs.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid the foods that deplete Yin and generate internal heat: excessive spicy food, alcohol, very salty foods, and staying up past 11 PM consistently. Sleep is when Yin and Blood are replenished. Every late night is a withdrawal from your hair&apos;s savings account.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is contributing, focus on building energy. Warm, cooked meals like congee, sweet potato, and chicken broth. Add ginger and jujube dates to support Qi production. Gentle movement like walking or light stretching gets Qi circulating to your scalp. Avoid cold and raw foods that drain the energy your hair follicles need.
        </p>
        <p className="text-text2 leading-relaxed">
          For both patterns, scalp massage with warm fingertips can help. Five minutes before bed, gentle circular pressure, no pulling. Combined with warm oil (coconut or sesame), this simple practice directly stimulates circulation where your hair grows. Many people notice reduced shedding within a few weeks.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your hair loss is sudden, patchy, or accompanied by scalp pain, redness, or scaling, please consult a dermatologist or licensed healthcare provider. Hair loss can sometimes be connected to conditions that need proper medical attention.
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
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
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