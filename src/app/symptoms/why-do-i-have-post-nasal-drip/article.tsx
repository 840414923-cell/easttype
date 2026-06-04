
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyPostNasalDripArticle() {
  const slug = "why-do-i-have-post-nasal-drip"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Respiratory</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Post-Nasal Drip? The Drip That Never Stops
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You know that feeling. Something is sliding down the back of your throat. Not quite a sore throat, not quite a runny nose. Just a constant trickle that makes you want to clear your throat every few minutes. You&apos;ve probably become that person who subtly clears their throat during conversations without even realizing it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s not painful exactly, but it&apos;s relentless. You wake up with it, you go to sleep with it, and the in-between is filled with small throat clears and that low-grade annoyance of something being there that shouldn&apos;t be. Nasal sprays help temporarily. Antihistamines might dry it out for a while. But it always comes back.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, post-nasal drip is understood as a fluid management problem. Your body is producing fluids faster than it can process them, and the excess has nowhere to go but up and out, or in this case, down the back of your throat. It&apos;s like a gutter that&apos;s overflowing because the downpipe is blocked. The water has to go somewhere.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Post-Nasal Drip Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "A constant need to clear your throat or swallow",
            "Feeling of mucus draining down the back of your throat",
            "Waking up with a stuffy or congested feeling",
            "A mild, persistent cough triggered by the drip",
            "Bad breath or a sour taste from mucus in the throat",
            "Feeling like something is stuck in your throat",
            "Relief when eating warm foods that seems temporary",
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
          Before looking at Eastern frameworks, consider the usual suspects. Allergies are the most common cause of post-nasal drip. Dust mites, pet dander, pollen, and mold can all trigger excess mucus production. A doctor or allergist can help identify specific triggers.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sinus infections (sinusitis) can cause thick discharge that drains down the throat. Vasomotor rhinitis is a non-allergic form of chronic congestion that can produce the same dripping sensation. Deviated septum or nasal polyps might physically obstruct drainage. Acid reflux can irritate the throat and create a sensation that mimics post-nasal drip.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s the thing: many people get checked for allergies (negative), have their sinuses looked at (fine), try every nasal spray on the market, and still the drip continues. That&apos;s where the TCM perspective becomes relevant. If the plumbing is structurally fine but the water keeps overflowing, the issue isn&apos;t the pipes. It&apos;s how much water is being produced and how efficiently it&apos;s being drained.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains Post-Nasal Drip
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, post-nasal drip is most often linked to Spleen deficiency with Phlegm Damp accumulation. The Spleen in TCM isn&apos;t just the anatomical organ. It&apos;s the entire system responsible for transforming food and drink into usable energy and fluids. When the Spleen is weak or overburdened, it can&apos;t process fluids efficiently.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a water treatment plant that&apos;s running at half capacity. Fluids come in, but the system can&apos;t convert them all into clean, usable moisture. The excess has to go somewhere. In TCM, that excess becomes what&apos;s called &quot;dampness&quot; and eventually thickens into &quot;phlegm.&quot; This phlegm doesn&apos;t just stay in one place. It rises upward, following the natural tendency of dampness to float and accumulate in the upper body.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The gutter analogy works well here. Imagine a house where the gutters are fine but the downpipe is partially blocked. When it rains lightly, everything works. But during a steady downpour, the gutter overflows because the water can&apos;t drain fast enough. In your body, the &quot;downpipe&quot; is the Spleen&apos;s ability to transform fluids. When that&apos;s impaired, the &quot;gutter&quot; (your sinuses and throat) overflows with mucus.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is not the same as a sinus infection. A sinus infection typically produces thick, colored discharge (yellow or green), often with facial pain, fever, and a finite duration. Post-nasal drip from Spleen deficiency is chronic, the mucus is usually clear or thin, and there&apos;s no fever. It just keeps going, day after day, like a faucet that won&apos;t fully shut off.
        </p>
        <p className="text-text2 leading-relaxed">
          Certain foods make this pattern worse. Dairy is the biggest offender in TCM. Milk, cheese, ice cream, and yogurt are all considered phlegm-generating. For someone whose Spleen is already struggling with fluid management, adding dairy is like pouring more water into an already overflowing gutter. Other phlegm-generating foods include sugar, greasy or fried foods, and cold raw foods that the Spleen has to work extra hard to process.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Post-Nasal Drip
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, the Phlegm Damp type is most strongly associated with chronic post-nasal drip.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) tends to hold onto fluids. These people often feel heavy and sluggish, may carry extra weight especially around the midsection, and produce more mucus than average. Their body is like a sponge that&apos;s been left in water too long. It&apos;s saturated and can&apos;t absorb any more, so the excess leaks out wherever it can. About 6% of people have this as their primary body type.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For Phlegm Damp types, the post-nasal drip is often worse in the morning (after lying flat all night, phlegm has had time to accumulate) and after eating phlegm-generating foods. They may also notice that they feel physically heavier on days when the drip is bad, as if their whole system is waterlogged.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Stop the Drip
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The single most impactful change for many people is reducing dairy. In TCM, dairy generates phlegm. This doesn&apos;t mean you&apos;re allergic to dairy. It means that for someone with a Phlegm Damp tendency, dairy adds more burden to an already overwhelmed fluid processing system. Try cutting out milk, cheese, yogurt, and ice cream completely for two to three weeks and see if the drip improves. If it does, you&apos;ll know dairy is a trigger. You can then decide how much to reintroduce based on how your body responds.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid cold and raw foods. Salads, smoothies, ice water, and raw fruit all require the Spleen to work harder to warm and process them. When the Spleen is already struggling, these foods make things worse. Switch to warm, cooked foods. Soups, stews, steamed vegetables, and warm grains are all easier for the Spleen to handle.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Ginger tea can help move phlegm and warm the digestive system. Simmer a few slices of fresh ginger in hot water for 10 minutes. You can add a small amount of brown sugar if the taste is too sharp. Drink this in the morning or after meals.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Reduce sugar and greasy foods. Both contribute to dampness in the system. This doesn&apos;t mean a strict diet overhaul. It means being aware that these foods have a direct impact on how much mucus your body produces and cutting back where you can.
        </p>
        <p className="text-text2 leading-relaxed">
          Light movement after meals helps the Spleen function. A 15-minute walk after eating supports digestion and fluid transformation. It doesn&apos;t need to be intense exercise. Just gentle, consistent movement that tells your body it&apos;s time to process what you&apos;ve consumed.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your post-nasal drip is accompanied by thick, colored mucus (yellow or green), facial pain or pressure, fever, persistent bad breath, or if it occurs along with blood in your mucus, please consult a licensed healthcare provider. These can be signs of a sinus infection or other conditions that need medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy and Sluggish Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-a-chronic-cough" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have a Chronic Cough?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-seasonal-allergies" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Seasonal Allergies?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
