
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyChronicCoughArticle() {
  const slug = "why-do-i-have-a-chronic-cough"

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
        Why Do I Have a Chronic Cough? The Tickles That Set Up Residence
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          A cough here and there is normal. You get a cold, you cough for a week, it goes away. But when a cough moves in and refuses to leave, that&apos;s a different story. Weeks turn into months. You cough in the morning, you cough at night, you cough during meetings. People start to look at you with concern. You&apos;ve tried cough syrup, lozenges, maybe even antibiotics. Nothing sticks.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here&apos;s what&apos;s frustrating: the doctor says your lungs are clear. X-rays look fine. No infection. No allergy they can pinpoint. So why won&apos;t the cough stop? Chinese medicine looks at this differently. A chronic cough isn&apos;t just about the lungs. It can be a signal that your body&apos;s internal moisture or fluid management is off balance.
        </p>
        <p className="text-text2 leading-relaxed">
          The character of the cough tells a story. A dry, ticklish cough that produces nothing? That&apos;s one pattern. A wet cough with phlegm that keeps coming back? That&apos;s another. Understanding which one you have can point toward what your body actually needs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What a Chronic Cough Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "A dry, ticklish sensation in the throat that triggers coughing",
            "Cough that worsens at night or when lying down",
            "Little to no phlegm, or phlegm that&apos;s sticky and hard to clear",
            "A feeling of dryness in the throat and mouth",
            "Cough that lingers for weeks after a cold has resolved",
            "Throat irritation that gets worse with talking or dry air",
            "A wet cough with phlegm that seems never-ending",
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
          Before looking at Eastern frameworks, rule out the common culprits. Post-nasal drip from allergies or sinus issues is one of the biggest drivers of chronic cough. Acid reflux (GERD) can irritate the throat and trigger coughing, especially at night. Asthma sometimes shows up as just a cough, without the wheezing. Certain blood pressure medications called ACE inhibitors list chronic cough as a side effect.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Smoking or exposure to secondhand smoke is an obvious one. Chronic bronchitis, whooping cough in adults, and lingering infections can all produce a long-lasting cough. These are all worth investigating with your doctor.
        </p>
        <p className="text-text2 leading-relaxed">
          But what if you&apos;ve checked all of these and everything comes back normal? The cough persists even though there&apos;s no infection, no reflux, no allergy they can find. That&apos;s where Chinese medicine offers a different lens.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains a Chronic Cough
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, a chronic cough is usually understood through two main patterns. The first is dry cough from Yin Deficiency. Think of your respiratory tract like a delicate sponge that&apos;s supposed to stay moist. When Yin is low, that sponge dries out. The throat and airways lose their natural lubrication, and every breath feels like a tiny irritation. The body responds by coughing, trying to clear something that isn&apos;t really there. It&apos;s like a dry scratch on a record. The needle keeps catching because the surface is too dry.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The second pattern is a wet cough from Phlegm Damp accumulation. In this case, the body&apos;s fluid processing is sluggish. Fluids that should be transformed and moved along instead collect and thicken into phlegm. This phlegm rises into the lungs and triggers coughing as the body tries to expel it. But because the underlying fluid issue isn&apos;t resolved, the phlegm keeps forming.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          A common story goes like this: you get a cold. The cold clears up, the fever goes away, the runny nose stops. But the cough stays. Why? Because the cold may have damaged the Lung&apos;s Yin (its moistening layer), or the cold&apos;s dampness settled in and turned into lingering phlegm. The cold left, but the pattern it created didn&apos;t.
        </p>
        <p className="text-text2 leading-relaxed">
          The character of the cough tells the story. Dry and ticklish with little phlegm points toward Yin Deficiency. Wet and phlegmy with lots of mucus points toward Phlegm Damp. Some people have a mix of both, which is common after a prolonged illness.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind a Chronic Cough
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most often linked to chronic cough.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) tends to develop dry, ticklish coughs. These people often have a dry throat, dry mouth, and feel warm internally. Their cough gets worse at night or when talking a lot. The internal dryness means their airways lack the protective moisture layer they need. About 10% of people fall into this category. For them, the cough is like a plant that&apos;s been underwatered. The leaves get crispy and the soil cracks. The lungs need that moistening layer to stay calm.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) tends to develop wet, phlegmy coughs. These people may also feel heavy, sluggish, and produce a lot of mucus in general. Their body holds onto fluids instead of processing them efficiently. The excess fluid turns into phlegm, which settles in the lungs and triggers coughing as the body tries to clear it out.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Quiet the Cough
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          For the dry, ticklish cough, the goal is to restore moisture to the lungs and throat. One of the most well-known remedies in Chinese medicine is steamed pear with rock sugar. Take an Asian pear (the round, crisp kind), hollow out the core, fill it with rock sugar and a little honey, and steam it for 30 to 40 minutes. The pear itself is considered moistening, and the slow cooking makes those properties easier for your body to absorb. Many people notice their throat feels soother within a day or two of eating this regularly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Honey stirred into warm water can also help coat and soothe a dry throat. Lily bulb and tremella mushroom are two ingredients commonly used in TCM to nourish Lung Yin. You can find dried lily bulbs at Asian grocery stores and simmer them into a sweet soup with rock sugar.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For the wet, phlegmy cough, the approach shifts. You want to help your body process fluids better rather than add more moisture. Reducing dairy is one of the most impactful changes. In TCM, dairy is considered phlegm-generating. Cutting back on milk, cheese, and ice cream for two to three weeks may show you whether dairy is a trigger for your cough.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid raw and cold foods if you have a wet cough. These can slow down your Spleen&apos;s ability to transform fluids, which is the root cause of the phlegm. Warm, cooked foods are easier for your body to process. Ginger tea can help move phlegm and warm the digestion.
        </p>
        <p className="text-text2 leading-relaxed">
          Stay hydrated, but drink warm water. Cold water can shock the system and make the cough momentarily worse. Keep a thermos of warm water or tea nearby throughout the day. For both types of cough, getting enough rest and avoiding late nights can make a real difference, since sleep is when your body repairs and replenishes its resources.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your cough lasts more than 8 weeks, produces blood, is accompanied by unexplained weight loss, fever, shortness of breath, or chest pain, please consult a licensed healthcare provider. A chronic cough can be associated with serious conditions that require proper medical evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
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
          <Link href="/symptoms/why-do-i-always-have-a-sore-throat" className="text-sm text-accent no-underline hover:underline">
            Why Do I Always Have a Sore Throat?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-post-nasal-drip" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Post-Nasal Drip?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
