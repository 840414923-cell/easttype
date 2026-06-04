
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyCelluliteArticle() {
  const slug = "why-do-i-have-cellulite"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Body</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Cellulite? The Dimples That Moved In and Stayed
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Cellulite. Those dimples on your thighs, hips, or buttocks that showed up one day and decided to stay permanently. You&apos;ve tried the creams. The dry brushing. The massages. Maybe even the expensive treatments. Some things made it look a little better for a few days, but the dimples always come back to the same spots.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here&apos;s the thing the beauty industry doesn&apos;t want to admit: cellulite is incredibly common. Up to 90% of women have it. It&apos;s not a disease. It&apos;s not a moral failing. And it&apos;s definitely not just about weight. Thin people have cellulite too. Athletes have cellulite. It&apos;s about how your body handles fluids and tissue structure, not the number on the scale.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine looks at cellulite through the lens of fluid metabolism. It&apos;s about how your body processes, moves, and eliminates moisture. If that system is sluggish, fluids accumulate in the tissues, and cellulite may be one of the visible results.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Cellulite Can Look Like
        </h2>
        <ul className="space-y-2">
          {[
            "Dimpled or puckered skin on thighs, hips, buttocks, or abdomen",
            "Texture that worsens when you pinch or compress the skin",
            "Areas that feel heavy, cool to the touch, or slightly puffy",
            "Gets more noticeable during your period or in humid weather",
            "Doesn&apos;t change much with weight loss or exercise",
            "Skin feels thick or dense in the affected areas",
            "You may also notice water retention in the same areas",
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
          The Standard Explanations (Partially Right)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The conventional view is that cellulite is caused by fat pushing through connective tissue beneath the skin. This is true at a structural level. Hormones, genetics, age, and skin thickness all play a role. Women get it more than men because of how female connective tissue is structured. All accurate.
        </p>
        <p className="text-text2 leading-relaxed">
          But this explanation doesn&apos;t account for why cellulite fluctuates. Why it gets worse during your period. Why it appeared after a period of poor eating or high stress. Why some people with very low body fat still have it. The structural explanation is like describing a house&apos;s plumbing by only looking at the pipes. Chinese medicine looks at what&apos;s flowing through them.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Views Cellulite
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, cellulite is most often associated with Phlegm Dampness accumulating under the skin. Think of your body&apos;s tissue like a sponge sitting in a puddle. When the sponge is healthy and dry, it&apos;s firm and smooth. When it&apos;s sitting in stagnant water, it gets heavy, puffy, and develops an uneven texture. Your connective tissue is the sponge. The stagnant fluid is the Phlegm Dampness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The organ responsible for fluid metabolism in TCM is the Spleen. When the Spleen is strong, it processes fluids efficiently, sending the useful parts where they&apos;re needed and eliminating the rest. When the Spleen is weak, fluids aren&apos;t processed properly. They accumulate, become thick and sticky, and settle into tissues. That&apos;s Phlegm Dampness.
        </p>
        <p className="text-text2 leading-relaxed">
          This is why cellulite isn&apos;t simply about body weight. It&apos;s about fluid metabolism. A thin person with a weak Spleen can have the same fluid accumulation as someone who carries more weight. The dimples are the visible sign of moisture that the body hasn&apos;t been able to process and move through.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind Cellulite
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type is the classic constitution for cellulite. Their body holds onto moisture like a sponge that&apos;s been left in the sink. They may feel heavy and sluggish, especially in humid weather. Their digestion tends to be slow, and they often crave sweets and rich foods, the very things that make the pattern worse.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">Phlegm Damp Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Move the Moisture
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The dietary approach is about reducing the foods that create dampness and adding foods that drain it. Cut back on dairy, which is one of the most dampness-generating food groups in TCM. Sugar feeds the sticky quality. Cold drinks weaken the Spleen. Fried and greasy foods add both dampness and heat.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Foods that may help drain dampness include adzuki beans, coix seed (Job&apos;s tears), winter melon, and modest amounts of green tea. Warming spices like ginger and cinnamon help the Spleen function better. The key is to eat warm, cooked foods rather than cold or raw foods, which your Spleen has to work harder to process.
        </p>
        <p className="text-text2 leading-relaxed">
          Dry brushing and cupping are physical approaches that may help. Dry brushing stimulates circulation and lymphatic flow in the affected areas. Cupping creates suction that pulls stagnant fluid toward the surface where the body can process it. These aren&apos;t permanent fixes on their own, but combined with dietary changes they can be part of a more complete approach. The real shift happens when you address why the moisture is accumulating in the first place.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. Cellulite is a normal and common condition. However, if you notice sudden changes in skin texture, significant swelling in one leg, pain, redness, or warmth in the affected areas, please consult a doctor. These can be associated with other conditions that need medical evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">Heavy &amp; Sluggish Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">Why Do I Keep Gaining Weight?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-water-retention" className="text-sm text-accent no-underline hover:underline">Why Do I Have Water Retention?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
