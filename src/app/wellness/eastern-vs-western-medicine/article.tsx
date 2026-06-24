import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function EasternVsWesternArticle() {
  const slug = "eastern-vs-western-medicine"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Eastern vs Western Medicine</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Eastern vs Western Medicine: Two Different Ways of Understanding Your Body
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read · Not rivals. Different tools for different problems.</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Western medicine identifies diseases and targets them with specific treatments: drugs, surgery, or therapy. Eastern medicine (Chinese medicine) identifies patterns of imbalance in the whole person and uses food, herbs, acupuncture, and lifestyle adjustments to restore balance. Western medicine excels at acute conditions, infections, and structural problems. Eastern medicine excels at chronic conditions, functional complaints, and symptoms that do not show up on lab tests. They work best together, not against each other.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you have ever left a doctor&apos;s office with normal test results but still felt something was wrong, you have encountered the gap that Eastern medicine tries to fill. It is not that Western medicine is wrong. It is answering a different question. Western medicine asks: &quot;What disease do you have?&quot; Eastern medicine asks: &quot;What pattern of imbalance is producing your symptoms?&quot;
        </p>
        <p className="text-text2 leading-relaxed">
          Both questions are valid. Both answers are useful. The frustration many people feel comes from expecting one system to answer both questions, when in reality each system is designed for a different type of problem.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The Core Difference: Disease vs Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          This is the single most important distinction, and understanding it makes everything else click into place.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium"></th>
                <th className="text-left py-2 pr-3 text-text font-medium">Western Medicine</th>
                <th className="text-left py-2 text-text font-medium">Eastern Medicine</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Central question</td><td className="py-2 pr-3 text-text2">What disease?</td><td className="py-2 text-text2">What pattern?</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Unit of analysis</td><td className="py-2 pr-3 text-text2">Organ, cell, molecule</td><td className="py-2 text-text2">Whole person</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Diagnostic tools</td><td className="py-2 pr-3 text-text2">Blood tests, imaging, biopsy</td><td className="py-2 text-text2">Pulse, tongue, symptom history</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Treatment approach</td><td className="py-2 pr-3 text-text2">Target the disease</td><td className="py-2 text-text2">Rebalance the pattern</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Strength</td><td className="py-2 pr-3 text-text2">Acute, structural, infectious</td><td className="py-2 text-text2">Chronic, functional, preventative</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Limitation</td><td className="py-2 pr-3 text-text2">Normal labs = no diagnosis</td><td className="py-2 text-text2">Not for emergencies</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Time to result</td><td className="py-2 pr-3 text-text2">Fast (drugs act quickly)</td><td className="py-2 text-text2">Gradual (food and habits build over weeks)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          Think of it this way: Western medicine is like a mechanic who fixes a broken part. Eastern medicine is like a gardener who adjusts the soil, water, and sunlight so the plant can thrive on its own. Both are necessary. A broken engine needs a mechanic. A wilting plant needs a gardener.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When Western Medicine Shines
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          There are situations where Western medicine is clearly the right choice. Nobody should try to treat a bacterial infection with ginger tea, or manage a heart attack with acupuncture. Western medicine has saved millions of lives through antibiotics, surgery, vaccines, and emergency care.
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Acute infections that need antibiotics",
            "Broken bones and structural injuries",
            "Heart attacks, strokes, and other emergencies",
            "Cancer diagnosis and treatment",
            "Severe allergic reactions (anaphylaxis)",
            "Surgical conditions (appendicitis, hernias)",
            "Conditions requiring imaging or lab monitoring",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text2">
              <span className="text-accent/70 text-xs mt-0.5">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-text2 leading-relaxed">
          The pattern here is clear: when there is a specific, identifiable problem that needs a targeted intervention, Western medicine is usually the fastest and most effective path.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When Eastern Medicine Helps Most
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Eastern medicine tends to be most helpful in situations where Western medicine says &quot;your tests are normal&quot; but you still feel unwell. These are functional complaints: things that are clearly happening in your body but do not show up as measurable abnormalities on standard tests.
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Chronic fatigue with no clear cause on lab work",
            "Digestive discomfort (bloating, irregular bowel movements) with normal endoscopy",
            "Sleep problems that persist despite normal sleep studies",
            "Mood and emotional patterns that do not meet criteria for a psychiatric diagnosis",
            "Recurring symptoms that come and go without a clear trigger",
            "Temperature sensitivity (always cold or always hot) with normal thyroid function",
            "Premenstrual or menopausal discomfort that is not severe enough for medication",
            "Preventive care: adjusting diet and lifestyle before disease develops",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text2">
              <span className="text-accent/70 text-xs mt-0.5">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-text2 leading-relaxed">
          The common thread: these are real symptoms that affect quality of life, but they exist in the gray zone between &quot;healthy&quot; and &quot;diagnosed disease.&quot; Eastern medicine does not need a disease label to help. It works with patterns, and patterns exist even when lab results look normal.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Why &quot;Normal Labs&quot; Does Not Mean &quot;Nothing Is Wrong&quot;
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          This is the most common frustration people bring to Eastern medicine. You feel tired, bloated, anxious, or cold. You get blood work done. Everything comes back normal. The doctor says you are fine. You are not fine.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The gap exists because Western medicine and Eastern medicine define &quot;healthy&quot; differently. Western medicine defines it as the absence of measurable disease. If your thyroid numbers are within range, your thyroid is fine, even if you feel freezing cold all the time. If your iron is not low enough to be anemia, your blood is fine, even if you feel dizzy standing up.
        </p>
        <p className="text-text2 leading-relaxed">
          Eastern medicine defines health as a state of balance. Not just &quot;not sick,&quot; but functioning well: energy is steady, digestion is comfortable, sleep is restful, mood is stable, temperature feels right. You can be far from that state and still have normal lab results. Eastern medicine recognizes this because it looks at functional patterns, not just structural problems. A car can pass inspection and still run poorly. Your body can pass a blood test and still feel off.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How They Can Work Together
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The most effective approach for many people is not choosing one system over the other, but using each for what it does best. Here are some practical combinations:
        </p>
        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Chronic Fatigue</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2"><span className="text-accent font-medium">Western: </span>Rule out thyroid issues, anemia, vitamin D deficiency, sleep apnea. Get the baseline tests.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eastern: </span>If tests are normal, explore qi deficiency. Adjust diet with warming, energy-building foods. Address sleep quality and daily rhythm.</p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Digestive Problems</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2"><span className="text-accent font-medium">Western: </span>Endoscopy, colonoscopy, H. pylori test, celiac screen. Rule out serious conditions.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eastern: </span>If structural problems are ruled out, address spleen qi deficiency or damp heat. Cook foods, eat warm meals, avoid cold drinks.</p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Anxiety and Mood</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2"><span className="text-accent font-medium">Western: </span>Rule out thyroid dysfunction, vitamin B12 deficiency, and hormonal imbalances. Consider therapy or medication if needed.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eastern: </span>Address liver qi stagnation with chrysanthemum tea, citrus, and regular meals. Reduce caffeine. Support the heart with lotus seeds and longan.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Eastern Medicine Is Not
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          There are some common misunderstandings about Eastern medicine that are worth clearing up:
        </p>
        <div className="space-y-3">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">It is not anti-science. </span><span className="text-text2">Chinese medicine is based on thousands of years of careful observation. The language and framework are different from modern science, but the observations are empirical. Modern research is increasingly studying Chinese medicine concepts: qi has parallels in cellular metabolism, meridians correlate with fascia planes, and tongue diagnosis shows correlations with gut microbiome patterns.</span></p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">It is not a replacement for Western medicine. </span><span className="text-text2">Eastern medicine works best as a complement, not a substitute. If you have a serious medical condition, see a doctor. If you have chronic low-grade symptoms that do not respond to conventional treatment, explore Eastern wellness approaches alongside your medical care.</span></p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">It is not one-size-fits-all. </span><span className="text-text2">The 9 body type system exists precisely because Eastern medicine recognizes that different people need different approaches. What helps a cold body type may harm a hot body type. The personalization is the point.</span></p>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Important Note</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational and educational purposes only and is not medical advice. Neither Eastern nor Western medicine should be followed blindly. Always consult qualified healthcare providers for medical concerns. If you are experiencing severe or urgent symptoms, seek emergency medical care immediately. Eastern wellness approaches may complement but should never replace professional medical treatment for serious conditions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Articles</h2>
        <div className="space-y-3">
          <Link href="/wellness/what-is-qi" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">What Is Qi (Chi) Energy? →</h3>
            <p className="text-text2/70 text-xs mt-1">The foundational concept that underpins Eastern medicine's approach.</p>
          </Link>
          <Link href="/wellness/chinese-medicine-body-types" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">The 9 Chinese Medicine Body Types →</h3>
            <p className="text-text2/70 text-xs mt-1">Eastern medicine's answer to personalized health guidance.</p>
          </Link>
          <Link href="/wellness/tcm-tongue-diagnosis" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Chinese Medicine Tongue Diagnosis →</h3>
            <p className="text-text2/70 text-xs mt-1">A diagnostic tool unique to Eastern medicine that takes 5 seconds.</p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
