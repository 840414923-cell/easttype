import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseHerbsForEnergyArticle() {
  const slug = "chinese-herbs-for-energy"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Herbs for Energy</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Herbs for Energy: Top Herbs to Fight Fatigue
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine offers several herbs that may help rebuild energy from within. Unlike caffeine, which borrows energy from tomorrow, these herbs aim to restore the body&apos;s own energy production over time. Key herbs include ginseng (Ren Shen), astragalus (Huang Qi), jujube dates (Da Zao), and goji berries (Gou Qi Zi). Some support Qi, others feed Blood or essence, and the right choice depends on your underlying pattern. Herbs work best alongside food therapy and steady habits, not as a replacement for either. Always consult a licensed practitioner before taking herbs, especially in concentrated form.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Why Chinese Herbs for Energy?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Western stimulants such as caffeine and sugar offer a familiar pattern: a sharp spike in alertness followed by an equally sharp drop a few hours later. Chinese herbs take a different path. Rather than stimulating the system, they aim to rebuild Spleen Qi and Kidney essence gradually, addressing why energy runs low in the first place. The approach is restorative, not stimulating.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, lasting energy comes from two sources. The Spleen produces day-to-day Qi from food, while the Kidney stores the deeper reserve you draw on over a lifetime. When either runs low, no amount of coffee creates new fuel. Herbs such as ginseng and astragalus are traditionally used to support these systems, helping the body generate energy more efficiently from the food and rest you already get.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This restorative path has a tradeoff: it is slow. Where caffeine works in minutes, tonic herbs often take weeks of consistent use before their effects become noticeable. Many people give up too early for this reason. The benefit, when it arrives, tends to be steadier and far less likely to crash. It may feel less like a surge and more like a higher floor under your daily energy.
        </p>
        <p className="text-text2 leading-relaxed">
          One point is worth stating plainly. Herbs are not meant to replace food therapy. A person eating cold, irregular meals while taking ginseng is working against the very system the herb is trying to support. Food comes first, herbs second. If your energy is persistently low, our guide to <Link href="/wellness/chinese-medicine-for-fatigue" className="text-accent hover:underline">Chinese medicine for fatigue</Link> explains how TCM frames the problem, and our page on <Link href="/symptoms/why-am-i-always-tired" className="text-accent hover:underline">why you are always tired</Link> traces the daily signs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Top Chinese Herbs for Energy
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The herbs below are the most commonly used energy tonics in Chinese medicine. Each has a different affinity: some for Qi, some for Blood, others for Kidney essence. Because they suit different patterns, none is universally the best choice. Most are taken as teas, added to soups, or cooked into congee rather than swallowed as isolated extracts.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Herb</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Chinese Name</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Caution</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Ginseng</td>
                <td className="px-3 py-2">Ren Shen</td>
                <td className="px-3 py-2">Deep energy rebuild, strongest Qi tonic</td>
                <td className="px-3 py-2">Thin slices in tea or soup</td>
                <td className="px-3 py-2">Avoid with cold, fever, or excess heat</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Astragalus</td>
                <td className="px-3 py-2">Huang Qi</td>
                <td className="px-3 py-2">Lifts Qi, supports immune function</td>
                <td className="px-3 py-2">Simmered in soup or tea</td>
                <td className="px-3 py-2">Gentle; avoid during acute illness</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Jujube Dates</td>
                <td className="px-3 py-2">Da Zao</td>
                <td className="px-3 py-2">Sweet Qi tonic, calms the mind</td>
                <td className="px-3 py-2">5 to 8 in tea, congee, or soup</td>
                <td className="px-3 py-2">Safe for daily use in moderation</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji Berries</td>
                <td className="px-3 py-2">Gou Qi Zi</td>
                <td className="px-3 py-2">Nourishes Liver and Kidney</td>
                <td className="px-3 py-2">Small handful in tea or as a snack</td>
                <td className="px-3 py-2">Safe for daily use in moderation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese Yam</td>
                <td className="px-3 py-2">Shan Yao</td>
                <td className="px-3 py-2">Supports Spleen and Kidney</td>
                <td className="px-3 py-2">Sliced and cooked in soup</td>
                <td className="px-3 py-2">Gentle and food-like</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Longan Fruit</td>
                <td className="px-3 py-2">Gui Yuan</td>
                <td className="px-3 py-2">Builds Blood, supports the Heart</td>
                <td className="px-3 py-2">In tea, congee, or as a snack</td>
                <td className="px-3 py-2">Warming; avoid in excess heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cordyceps</td>
                <td className="px-3 py-2">Dong Chong Xia Cao</td>
                <td className="px-3 py-2">Tonifies Lung and Kidney</td>
                <td className="px-3 py-2">Cooked in soup or as a capsule</td>
                <td className="px-3 py-2">Expensive; quality varies widely</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Licorice Root</td>
                <td className="px-3 py-2">Gan Cao</td>
                <td className="px-3 py-2">Harmonizes other herbs in a formula</td>
                <td className="px-3 py-2">Small amounts in tea or decoction</td>
                <td className="px-3 py-2">Avoid with hypertension or long use</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          A few practical notes are worth keeping in mind. Ginseng is the most powerful of these and also the most easily misused. It suits true deficiency and can be associated with overheating when taken by someone who already runs hot, or during a cold or fever. Astragalus is gentler and is often chosen for people whose low energy comes with frequent colds or a weak digestive system. Jujube dates and goji berries sit at the food-herb boundary: mild enough for daily use, strong enough to count.
        </p>
        <p className="text-text2 leading-relaxed">
          Cordyceps has become popular for its reputation with lung and kidney energy, though quality varies widely and much of what is sold today is cultivated rather than wild-harvested. For home cooking, <Link href="/herbs/cordyceps-flower-chong-cao-hua">Cordyceps Flower (chong cao hua)</Link> offers similar benefits at a fraction of the cost. Licorice root appears in many formulas in small amounts to harmonize the other ingredients, but it should not be taken in large doses over long periods, especially by anyone with high blood pressure. For people new to Chinese herbs, starting with the food-like tonics (jujube, goji, Chinese yam) before reaching for stronger ones is a reasonable approach. They offer a gentler entry and carry less risk of mismatch. To see where your energy pattern fits, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> may help.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Food-Based Energy Boosters
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Herbs are only one strand of Chinese energy therapy. Foods, used consistently, can be just as effective and are safer for daily use because they are gentler. Many of the classic Qi tonics began as ordinary kitchen staples before being recognized as medicinal, and the line between food and herb in this tradition is softer than it first appears.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Sweet potato is one of the most accessible. It strengthens the Spleen and is easy to digest whether steamed, roasted, or added to congee. Rice congee, a soft porridge made by simmering rice in extra water, is considered the closest thing to pre-digested food and is often the first recommendation for someone whose digestion is too tired to handle solid meals. Millet porridge plays a similar role and is lighter still.
        </p>
        <p className="text-text2 leading-relaxed">
          Chicken broth, slow-cooked with root vegetables, provides warmth and easily absorbed nourishment. Pumpkin supports the Spleen and makes a simple side. These foods share a quality the Spleen favors: they are warm, cooked, and soft. A person who rebuilds breakfast around congee or porridge with jujube dates and a slice of ginger is already practicing the core of Chinese food therapy for energy, without needing a single herb. Our <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what is qi</Link> guide explains why this approach centers on the Spleen.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Choose the Right Herb
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Matching an herb to your pattern matters more than choosing the strongest one. Taking a warming Kidney Yang tonic when the real problem is Yin Deficiency may make things worse, and the same herb that helps one person drain another. The four patterns below cover most cases of low energy.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Qi Deficiency
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Fatigue after eating, a soft voice, and easy fullness point here. Astragalus and jujube dates are the classic choices. Foods such as sweet potato and congee support the same direction. This is the most common pattern behind ordinary tiredness, and you can read more on our <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link> page.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Yang Deficiency
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          When tiredness comes with feeling cold, pale, and slow, Yang is the likely issue. Ginseng and cordyceps are the stronger tonics here, supported by warming foods like lamb and ginger. The internal furnace needs fuel and warmth, not stimulation.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Blood Deficiency
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Dizziness, paleness, dry skin, and fatigue that worsens with exertion suggest Blood is low. Longan fruit and goji berries are well suited, often paired with jujube dates. Nourishment, not stimulation, is the goal.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Yin Deficiency
        </h3>
        <p className="text-text2 leading-relaxed">
          A tired-but-wired feeling, night sweats, and a dry mouth point to Yin running low. Goji berries and Chinese yam are the gentler, moistening choices here. Warming tonics like ginseng are best avoided, since they may add heat the body cannot cool. If these patterns feel hard to separate, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> may help, and our guide to <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> goes deeper on the most common one.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Precautions
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese herbs are not substitutes for medical treatment. They are generally gentler than pharmaceuticals, but gentle does not mean harmless. Several points are worth keeping in mind before you begin.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Consult a licensed TCM practitioner before taking herbs, especially in concentrated extract form. A practitioner can confirm your pattern and check for mismatch. Some herbs interact with medications: ginseng may affect blood thinners and blood sugar drugs, licorice in excess may raise blood pressure, and several tonics are not appropriate during acute illness such as a cold or fever.
        </p>
        <p className="text-text2 leading-relaxed">
          Quality matters a great deal. Sourcing from reputable suppliers reduces the risk of contamination, misidentified species, or adulterated products. Wild-harvested and cultivated herbs can differ in strength and price. Avoid self-prescribing concentrated extracts, since what is gentle in a tea can be potent in a powder. Starting with whole herbs in food-like amounts is the safer entry point.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Persistent fatigue can signal real medical conditions. Chronic low energy may be associated with thyroid disorders, iron-deficiency anemia, vitamin deficiencies, sleep apnea, depression, and autoimmune disease. If your tiredness is severe, worsening, or comes with weight loss, fever, or shortness of breath, see a doctor for a proper evaluation. Chinese herbs may complement medical care, but they do not replace diagnosis or treatment.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
