
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyBrittleNailsArticle() {
  const slug = "why-do-i-have-brittle-nails"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Nails</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Brittle Nails? The Twigs at Your Fingertips
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your nails split when you open a can. They peel in layers after a shower. They break before they ever get long enough to file into a nice shape. You&apos;ve tried nail strengtheners, cuticle oils, biotin supplements. Maybe some of them helped a little. But the fundamental fragility keeps coming back.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here&apos;s something most people don&apos;t know: in Chinese medicine, your nails are considered an extension of your Blood, and they&apos;re governed by the Liver. Not the liver organ in the Western sense, but the Liver system in TCM, which is responsible for storing Blood and keeping it flowing smoothly throughout your body.
        </p>
        <p className="text-text2 leading-relaxed">
          Think of your nails like the leaves of a tree. If the roots are healthy and the soil is rich, the leaves are vibrant and strong. If the roots are struggling or the soil is depleted, the leaves get brittle, spotted, and thin. Your nails are the leaves. Your Blood and Liver are the roots.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Brittle Nails Look Like
        </h2>
        <ul className="space-y-2">
          {[
            "Nails that split or peel in layers, especially after water exposure",
            "Tips that break or chip before growing past the fingertip",
            "Vertical ridges running from cuticle to tip",
            "Nails that feel thin, soft, or bendy rather than firm",
            "Slow nail growth or nails that seem to stop growing at a certain length",
            "Cuticles that are dry, cracked, or ragged no matter how much you moisturize",
            "White spots or discoloration that isn&apos;t related to trauma",
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
          The Obvious Causes (Check These First)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Frequent hand washing, harsh soaps, and chemical exposure (cleaning products, nail polish remover) all weaken nails. Working with water a lot, like washing dishes without gloves, makes nails soft and prone to tearing. Nutrient deficiencies, especially iron, biotin, and zinc, can contribute to nail weakness.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;ve addressed these external factors and your nails are still fragile, the Eastern perspective looks at what&apos;s happening inside. Specifically, whether your body has enough Blood and Qi to build strong nails in the first place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Nail Weakness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the saying is &quot;the Liver opens into the nails.&quot; This means the health of your nails reflects the health of your Liver Blood. When Blood is abundant and well-nourished, your nails are smooth, strong, and pink. When Blood is deficient, the nails don&apos;t get the building blocks they need. They become thin, brittle, ridged, and slow-growing.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          There are two main patterns behind this. Qi Deficiency is like having a construction crew that doesn&apos;t have enough energy to finish the job. The raw materials might be there, but the body lacks the Qi to transform them into strong nails. You might also feel tired, have a pale complexion, or bruise easily with this pattern.
        </p>
        <p className="text-text2 leading-relaxed">
          Yin Deficiency is more like the raw materials themselves being depleted. The body&apos;s reserves of cooling, moistening Yin are low, so everything gets dry and brittle. Nails, hair, skin, and mucous membranes all tend to be dry with this pattern. You might also feel warm at night, have a dry throat, or experience night sweats.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Types Behind Brittle Nails
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Two body types are most commonly associated with nail weakness. The Qi Deficient type lacks the energy to produce strong, healthy nails. They tend to feel tired, have a pale complexion, and may get short of breath easily. Their nails are soft and bend rather than snap.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type lacks the moistening, nourishing quality that keeps nails flexible and resilient. Their nails tend to be dry, ridged, and brittle. They may run warm, especially at night, and have other signs of dryness like dry skin or a dry throat.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">Yin Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Strengthen From Within
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Blood-nourishing foods are the foundation. Dark leafy greens like spinach and kale support Blood production. Black sesame seeds are a classic TCM food for nourishing Blood and strengthening hair and nails. Goji berries support Liver Blood. Bone broth, made from long-simmered bones, is one of the most Blood-nourishing foods in both Eastern and Western traditions.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is your pattern, add warm, easy-to-digest foods that build energy. Congee (rice porridge), sweet potato, pumpkin, and small amounts of lean protein. Avoid raw and cold foods, which tax the Spleen and make it harder to produce Qi and Blood.
        </p>
        <p className="text-text2 leading-relaxed">
          Sleep is critical for Blood production in TCM. The Liver rebuilds its Blood reserves between 11 PM and 3 AM. Consistently missing that window is like trying to refill a bucket with a hole in it. Getting to bed before 11 PM regularly is one of the most impactful changes you can make for nail health and Blood quality.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your nail changes are sudden, involve dark streaks, separation from the nail bed, or significant changes in nail shape or color, please consult a doctor. Brittle nails can sometimes be associated with thyroid conditions, iron deficiency anemia, or other medical issues that need proper diagnosis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">Low Vitality Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-is-my-hair-falling-out" className="text-sm text-accent no-underline hover:underline">Why Is My Hair Falling Out?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-is-my-skin-so-dry" className="text-sm text-accent no-underline hover:underline">Why Is My Skin So Dry?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
