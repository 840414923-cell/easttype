import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function WhatIsBloodArticle() {
  const slug = "what-is-blood"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">What Is Blood in Chinese Medicine</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        What Is Blood in Chinese Medicine? Xue, Nourishment, and the Mind-Body Connection
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, Blood (Xue) is far more than the red fluid in your veins. It is the substance that nourishes every tissue, moistens the body, and most importantly, anchors the mind. When Blood is abundant and flowing, the mind is calm, sleep comes easily, and the body feels strong. When Blood is deficient, you might feel dizzy, anxious, or unable to sleep even though you are exhausted. The Spleen produces Blood from food, and the Liver stores it. To see how Blood fits alongside your vital energy, read our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is</Link>, and find out which constitution fits you with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Blood Means in Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          When you hear the word Blood in Chinese medicine, it does not mean exactly what your doctor means when they order a blood test. The TCM concept is broader. It includes the physical blood that moves through your vessels, but it also covers the work that blood performs for the whole body: nourishing every tissue, moistening the skin and eyes, and anchoring the mind so it can rest.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Chinese character 血 (xue) carries this wider meaning. When a practitioner talks about nourishing Blood, they are not only thinking about iron levels. They are also reading your complexion, asking whether your sleep is deep, checking whether your hands and feet stay warm, and noting whether your mind feels settled. All of these are treated as signs that Blood is doing its job well.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A useful image is to think of Blood as the oil in an engine. Without enough of it, parts run dry, friction builds, and everything overheats. With enough, the system runs smooth and quiet. Blood does something similar for the body. It keeps the tissues supple, the mind calm, and the whole system operating without strain.
        </p>
        <p className="text-text2 leading-relaxed">
          When Blood runs low, a recognizable cluster of signs tends to appear together: a pale face, brittle nails, dizziness, dry eyes, and restless sleep. We go into these markers and their causes in detail in our guide on <Link href="/wellness/blood-deficiency" className="text-accent hover:underline">Blood Deficiency</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Blood Is Made
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Blood does not appear on its own. It is produced every day from the food you eat, and several organs have to cooperate to keep the process running. Understanding the steps helps explain why digestion and diet matter so much for healthy Blood.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">The Spleen extracts nutrients.</strong> Everything you eat and drink is broken down by the Spleen and Stomach into a refined essence called Gu Qi, which is the raw material for everything that follows.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">The Heart and Lungs refine it.</strong> Gu Qi is sent upward, where the Lungs add fresh air and the Heart adds warmth. Together they turn the pale essence into red Blood.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">The Liver stores and regulates.</strong> Once Blood is made, the Liver holds the reserve and releases it as needed, sending Blood out to the muscles during activity and drawing it back to the organs during rest.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">The Spleen keeps it in the vessels.</strong> The Spleen also has a holding job. It keeps Blood inside the vessels, which is why a weak Spleen can show up as easy bruising, heavy periods, or tiny red spots under the skin.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Blood and Qi: A Partnership
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Blood never works alone. Its closest partner is Qi, the vital energy that moves everything in the body. A classical saying puts their relationship plainly: Qi is the commander of Blood, and Blood is the mother of Qi.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          What this means in practice is that the two rely on each other in a continuous loop. Qi pushes Blood through the vessels, so when Qi is weak, circulation slows and the hands and feet turn cold. Blood carries the nutrients that produce Qi, so when Blood is thin, Qi has nothing to feed on and starts to fade.
        </p>
        <p className="text-text2 leading-relaxed">
          Because the cycle is so tightly linked, Qi Deficiency and Blood Deficiency often show up together. Someone with a weak Spleen may produce less of both at once, which is why low energy and pale, restless symptoms can arrive hand in hand. You can read more about the energy side of this pairing in our page on the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link>, and revisit the core definition in our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Blood and the Mind (Shen)
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          One of the more surprising ideas in Chinese medicine is that Blood has a job in the mind. The Heart is said to house the Shen, which can be translated as spirit or mind, and Blood is what keeps the Shen settled in its home.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When Blood is sufficient, the mind feels calm and rooted. Thoughts flow without racing, sleep arrives without struggle, and dreams stay quiet. You wake feeling rested rather than drained.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When Blood is deficient, the mind has nothing to anchor it, so it begins to wander. This wandering can be associated with anxiety that has no clear cause, overthinking that loops late into the night, waking sharply around 3 AM, and vivid or disturbing dreams. This is the reason Blood nourishing foods are often suggested for people whose sleep and mood have gone off track. If early morning waking is your main concern, our page on <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-accent hover:underline">why you might wake at 3 AM</Link> goes deeper.
        </p>
        <p className="text-text2 leading-relaxed">
          This link between Blood and the mind also explains why stress, overwork, and worry can leave you feeling mentally frayed and physically depleted at the same time. The mind and the body are not separate systems in TCM. They draw from the same reserves.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs of Healthy vs Deficient Blood
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because Blood shows its state through visible signs, you can often get a rough sense of how your Blood is doing by looking at a few simple markers. The table below contrasts the signs of abundant Blood with the signs that tend to accompany deficiency.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Healthy Blood</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Blood Deficiency</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Rosy, lustrous complexion</td>
                <td className="px-3 py-2">Pale or sallow face</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pink lips and tongue</td>
                <td className="px-3 py-2">Pale lips, pale tongue</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Strong, smooth nails</td>
                <td className="px-3 py-2">Brittle, ridged nails</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bright eyes, clear vision</td>
                <td className="px-3 py-2">Dry eyes, blurry vision, floaters</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Calm mind, deep sleep</td>
                <td className="px-3 py-2">Anxiety, insomnia, vivid dreams</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Regular, comfortable periods</td>
                <td className="px-3 py-2">Light, delayed, or missing periods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Warm hands and feet</td>
                <td className="px-3 py-2">Numbness in the limbs</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Good memory and focus</td>
                <td className="px-3 py-2">Poor concentration, forgetfulness</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you recognize several of the deficiency signs above, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see how Blood fits into your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That Nourish Blood
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine food practice, certain foods have long been valued for their affinity with Blood. Many are red, dark, or naturally rich in the building blocks the body uses to make Blood. None of them are magic, and a single food will not rebuild depleted reserves overnight. Over weeks and months, however, a steady intake of these foods may help the body replenish Blood, especially when paired with a Spleen that is strong enough to absorb them.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Red dates (jujube)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">The most classic Blood tonic in TCM</td>
                <td className="px-3 py-2">3 to 5 in tea or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Blood and Liver Yin</td>
                <td className="px-3 py-2">In tea, soups, or eaten directly</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Blood and Kidney Jing</td>
                <td className="px-3 py-2">Toasted, about 1 tbsp daily</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Dark leafy greens</td>
                <td className="px-3 py-2">Cool, sweet or bitter</td>
                <td className="px-3 py-2">Provide the raw material for Blood</td>
                <td className="px-3 py-2">Lightly cooked, not raw</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Longan fruit</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Nourishes Heart Blood and calms the mind</td>
                <td className="px-3 py-2">In tea or sweet soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Dong quai (angelica)</td>
                <td className="px-3 py-2">Warm, sweet and pungent</td>
                <td className="px-3 py-2">The premier Blood herb in TCM</td>
                <td className="px-3 py-2">In soups, in small amounts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Supports the Kidney and Blood together</td>
                <td className="px-3 py-2">In soup or stew</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Beetroot</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Naturally rich in Blood building nutrients</td>
                <td className="px-3 py-2">Roasted or added to soup</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That Can Weaken Blood
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Just as some foods build Blood, others quietly work against it. The foods below do not need to be banned, but eating them in large amounts over time may slow the production or quality of Blood, usually by tiring the Spleen or introducing heat and dryness.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw and cold foods.</strong> Large amounts of salad, iced drinks, and cold food tire the Spleen, which lowers its output of Blood.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very restrictive diets.</strong> The Spleen needs raw material to make Blood, and eating too little leaves it with nothing to work with.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive coffee.</strong> Coffee is drying in nature and can deplete the fluids that Blood depends on.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much alcohol.</strong> Alcohol introduces Damp Heat that can damage Blood over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Overwork and chronic stress.</strong> These consume Blood faster than the body can replace it, since the mind draws heavily on Blood reserves when under strain.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Mild signs of low Blood often respond to steady dietary changes over weeks and months. Certain symptoms, however, deserve prompt attention from a qualified healthcare professional. Please see a doctor if you notice signs of severe anemia such as extreme fatigue, shortness of breath, or chest pain, heavy or prolonged menstrual bleeding, unusual bruising or bleeding that will not stop, or chronic dizziness and fainting. These can be associated with conditions that require blood tests and proper medical evaluation. Chinese medicine food guidance may complement, but should never replace, care from a licensed medical provider.
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
