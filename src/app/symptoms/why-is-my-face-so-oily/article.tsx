
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyOilyFaceArticle() {
  const slug = "why-is-my-face-so-oily"

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
        Why Is My Face So Oily? The Faucet That Won&apos;t Stop Dripping
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You wash your face in the morning and by noon your forehead could double as a mirror. You carry blotting sheets everywhere. You&apos;ve tried mattifying primers, clay masks, oil-free moisturizers. Your skin type says &quot;oily&quot; on every quiz you take, but none of those quizzes tell you why your face keeps producing oil like it&apos;s going out of style.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard advice is to strip the oil away. Stronger cleansers, more astringents, harsher toners. But here&apos;s the thing about that approach: your skin just produces more oil to compensate. You&apos;re turning up the faucet while trying to mop the floor. It doesn&apos;t work.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine looks at oily skin differently. Instead of asking &quot;how do we remove the oil?&quot; it asks &quot;why is your body producing so much of it in the first place?&quot; The oil on your face isn&apos;t random. It may be a sign that your internal fluid processing system is out of balance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Excessively Oily Skin Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "Forehead and nose get shiny within hours of washing",
            "Blotting sheets come away saturated by midday",
            "Makeup slides off or breaks apart by early afternoon",
            "Your face feels heavy or greasy even when you haven&apos;t applied anything",
            "Pores appear enlarged, especially around the nose and cheeks",
            "Breakouts tend to follow the oiliness, especially on the forehead and chin",
            "You wake up with an oily film on your face",
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
          The Obvious Causes (Still Worth Checking)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Humidity and hot weather make everyone oilier. That&apos;s normal. Using the wrong skincare products for your skin type, especially heavy creams on already oily skin, can make things worse. Stress increases cortisol, which ramps up sebum production. Not washing your face before bed lets oil and debris build up overnight.
        </p>
        <p className="text-text2 leading-relaxed">
          But if you&apos;ve addressed all of these and your face is still an oil slick by 2 PM, the Eastern perspective has a different explanation. One that starts inside your body, not on top of your skin.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Excess Facial Oil
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the organ responsible for processing fluids and keeping moisture where it belongs is the Spleen. Think of your Spleen as your body&apos;s water treatment plant. It takes in what you eat and drink, separates the useful parts from the waste, and distributes moisture to the right places. When it works well, your skin gets just enough hydration to stay supple without being greasy.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When the Spleen is weak or overwhelmed, it can&apos;t process fluids properly. The moisture doesn&apos;t get distributed correctly. Instead, it pools and stagnates, creating what TCM calls Dampness. This Dampness is heavy, sticky, and tends to rise upward, which is why it often shows up on your face as excess oil.
        </p>
        <p className="text-text2 leading-relaxed">
          When Heat combines with that Dampness, you get Damp Heat. This is like a pot of thick soup left on a rolling boil. The liquid is sticky (Dampness) and hot (Heat), and it bubbles up to the surface. On your face, that shows up as oil that feels warm, looks yellowish, and is often accompanied by redness or breakouts. The faucet analogy fits perfectly: your internal fluid system has too much pressure and the wrong kind of heat, so the overflow keeps pouring out onto your face.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind the Oil
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type is the classic constitution for oily skin. People with this pattern tend to run warm, feel heavy in their body, and have a greasy or oily quality to their skin and hair. Their digestion may feel sluggish, and they often crave the very foods that make the problem worse: rich, fried, sweet, and dairy-heavy meals.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">Damp Heat Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Balance the Oil
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Since Damp Heat is the main pattern, the goal is to drain dampness and clear heat. Foods that support this include green tea, chrysanthemum tea, celery, winter melon, and bitter greens like dandelion leaves. These are traditionally considered cooling and drying in TCM. Drinking warm (not cold) water throughout the day helps your Spleen process fluids more efficiently.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The biggest dietary triggers to reduce are dairy and sugar. In TCM, dairy is one of the most dampness-generating food groups. Sugar feeds heat. Together, they&apos;re like throwing gasoline on the Damp Heat fire. Fried foods and alcohol contribute too.
        </p>
        <p className="text-text2 leading-relaxed">
          One important tip: don&apos;t skip moisturizer. It sounds wrong for oily skin, but stripping your face of all moisture signals your body to produce even more oil to compensate. Use a light, water-based moisturizer instead of heavy creams. The goal is balanced hydration, not a dry desert.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your oily skin is accompanied by severe acne, cysts, painful inflammation, or sudden changes in your skin, please consult a dermatologist or licensed healthcare provider. Excessive oil production can sometimes be associated with hormonal imbalances or other underlying conditions that need medical evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/damp-heat" className="text-sm text-accent no-underline hover:underline">Damp Heat Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-keep-breaking-out" className="text-sm text-accent no-underline hover:underline">Why Do I Keep Breaking Out?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-is-my-skin-so-dry" className="text-sm text-accent no-underline hover:underline">Why Is My Skin So Dry?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
