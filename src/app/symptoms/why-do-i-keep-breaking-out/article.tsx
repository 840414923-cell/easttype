
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function BreakingOutArticle() {
  const slug = "why-do-i-keep-breaking-out"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Breaking Out</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Keep Breaking Out? The Skin That&apos;s Telling a Deeper Story
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;ve tried the cleansers. The toners. The spot treatments. The expensive serums that promised clear skin in two weeks. Maybe you even saw improvement for a while, but the breakouts always come back. Same places, same timing, same frustration. If topical products could solve this, they would have solved it by now.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here&apos;s something that might surprise you: Chinese medicine has been treating skin conditions for over 2,000 years, and it doesn&apos;t start with what you put on your face. It starts with what&apos;s happening underneath. Your skin is a mirror. The breakouts are the reflection. The real problem is what&apos;s being reflected.
        </p>
        <p className="text-text2 leading-relaxed">
          This doesn&apos;t mean skincare doesn&apos;t matter. But if your internal landscape keeps generating the conditions for breakouts, no amount of external cleaning will keep the surface clear for long. You have to address what&apos;s feeding the fire.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Persistent Breakouts Actually Look Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this sounds like you, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Breakouts that return in the same areas, especially the chin, jawline, or forehead",
            "Acne that feels deep, swollen, or cystic rather than surface-level",
            "Skin that gets worse before your period or during humid weather",
            "An oily or heavy feeling on your face that cleanser can't fully remove",
            "Redness and inflammation that takes weeks to calm down",
            "Digestive issues like bloating or heaviness that seem to track with your skin",
            "A feeling that your skin and your digestion are somehow connected",
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
          The Usual Explanations (And Why They May Not Be Enough)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The standard approach to acne focuses on bacteria, oil production, and hormones. And those things matter. If your hormones are fluctuating, that&apos;s a real factor. If bacteria are overgrowing, that&apos;s a real target. Retinoids, benzoyl peroxide, and hormonal treatments can all help.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          But here&apos;s the gap. Many people use all of those correctly and still break out. Their hormone panels look fine. Their skincare routine is textbook. And yet the acne persists. That&apos;s because the standard framework treats acne as a surface problem with surface solutions. It doesn&apos;t ask why your body keeps producing the conditions for breakouts in the first place.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine asks a different question: not &quot;how do we kill the bacteria?&quot; but &quot;why is your body creating an environment where bacteria thrive?&quot; It&apos;s the difference between constantly wiping up spills and fixing the leaky pipe that&apos;s causing them.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Views Acne
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, persistent acne is almost always linked to two patterns working together: Dampness and Heat. Dampness is the heavy, sticky, oily quality that creates the environment for breakouts. It&apos;s what makes your skin feel greasy and your pores clogged. Heat is the red, inflamed, active quality that turns a clogged pore into a red, swollen, painful bump.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like this. Dampness is the fuel. Heat is the spark. When both are present, breakouts are inevitable. You can suppress the fire (topical treatments, antibiotics), but if the fuel keeps being generated internally, the next spark will start the next fire. The only lasting approach is to reduce both the fuel and the conditions that create the spark.
        </p>
        <p className="text-text2 leading-relaxed">
          Where the breakouts appear on your face can also tell TCM practitioners something about the internal source. Forehead breakouts may point to Heart Fire or stress. Chin and jawline breakouts are often linked to Kidney and reproductive system patterns, where hormonal fluctuations interact with internal Dampness. Cheek breakouts can be related to Lung and Spleen patterns, especially if they&apos;re accompanied by digestive issues. These location clues aren&apos;t definitive, but they offer additional information that Western approaches typically don&apos;t consider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Breakouts
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and persistent acne shows up most often in two.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the primary match. Their body holds onto moisture like a sponge, creating that oily, heavy feeling on the skin and in the digestive system. About 10% of people fall into this category. Their breakouts tend to be deep, swollen, and slow to resolve. Humid weather makes everything worse. Their skin and their digestion are often unhappy at the same time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) can also struggle with persistent breakouts, though the quality is different. Their skin doesn&apos;t renew efficiently because it&apos;s not getting enough energy. Breakouts may be less inflamed but more stubborn, lingering because the body lacks the Qi to clear them quickly. About 15% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help: Beyond the Surface
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Dampness is driving your breakouts, the dietary approach is about drying out the system from within. Foods that drain moisture include adzuki beans, coix seed (Job&apos;s tears), winter melon, celery, and modest amounts of green tea. Hawthorn tea and tangerine peel tea are traditional choices for cutting through internal stickiness. These won&apos;t replace your skincare, but they address the conditions that keep generating breakouts.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The foods to cut are the ones that add moisture and heat: dairy (the biggest Dampness generator in TCM), sugar, fried food, alcohol, and excessive fruit. Cold drinks and raw foods also contribute by weakening your Spleen, which is the organ responsible for processing Dampness. If your Spleen is weak, it can&apos;t drain moisture efficiently, and that moisture finds its way to your skin.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is part of your pattern, don&apos;t go overboard with cold, raw &quot;detox&quot; foods. A juice cleanse might sound like the answer for acne, but in TCM, cold raw foods weaken the very system you need to process Dampness. Instead, focus on warm, nourishing meals that support your Spleen: congee, soups, stews, and steamed vegetables. Build the Qi first, then address the Dampness.
        </p>
        <p className="text-text2 leading-relaxed">
          One simple practice: drink warm water throughout the day instead of cold. Warm water helps your Spleen function more efficiently and supports the processing of Dampness. It sounds too basic, but many people notice their skin looks less oily within a week of making this single change.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your acne is severe, cystic, scarring, or causing significant distress, please consult a dermatologist or licensed healthcare provider. Persistent skin issues can sometimes be connected to underlying conditions that need proper medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy &amp; Sluggish Pattern →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/damp-heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">
            Why Do I Keep Gaining Weight?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-crave-sweets" className="text-sm text-accent no-underline hover:underline">
            Why Do I Crave Sweets?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}