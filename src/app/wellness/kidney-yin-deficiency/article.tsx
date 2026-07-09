import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function KidneyYinDeficiencyArticle() {
  const slug = "kidney-yin-deficiency"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Kidney Yin Deficiency</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Kidney Yin Deficiency in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Kidney Yin Deficiency is one of the most common patterns identified in Chinese medicine. In TCM theory, the Kidneys store the body&apos;s deepest reserve of cooling, moistening energy, called Yin. When this reserve runs low, the body&apos;s natural warmth has nothing to balance it, and a type of internal heat builds up. The result may include night sweats, a dry mouth or throat, hot flashes that tend to peak in the late afternoon or evening, low back ache, and difficulty staying asleep. You may also notice a flushed face, ringing in the ears, or a restless, anxious mind. This pattern can be associated with aging, chronic overwork, and the hormonal shifts of menopause. Cooling, moistening foods like black sesame seeds, pears, and goji berries may help restore balance over time. You can check whether this matches your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Kidney Yin in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the Kidney (肾, shèn) is regarded as the root of life force. It stores what TCM calls essence (jing), the foundational reserve you inherit from your parents and replenish slowly through food and rest. Within the Kidney system there are two complementary forces: Kidney Yin and Kidney Yang. Kidney Yang is the warming, activating spark that keeps metabolism moving. Kidney Yin is the cooling, moistening counterpart. Think of Kidney Yin as your body&apos;s internal coolant system. It keeps tissues lubricated, tempers excess heat, and provides the resting, restoring quality that lets you recover from exertion.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When Kidney Yin becomes depleted, a specific phenomenon appears that Chinese medicine calls empty heat, or deficiency heat. Because Yin normally restrains and cools the body&apos;s Yang warmth, a drop in Yin allows that warmth to rise unchecked. The heat you feel is not coming from a fever or an external source. It is the body&apos;s own warmth, now unbalanced and unmoored. This is why people with Kidney Yin Deficiency often feel heat in the palms, soles, and chest, or experience flushing in the afternoon and evening, even though a thermometer reads normal.
        </p>
        <p className="text-text2 leading-relaxed">
          It is important to separate this concept from the Western kidney. In Western medicine, the kidneys are two specific organs that filter waste from the blood. The TCM Kidney is a broader functional system that governs the lower back, the bones, the ears, the hair, reproduction, growth, and aging. This understanding has developed through roughly two thousand years of careful clinical observation. To understand the foundational energy that powers all of this, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi means in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Kidney Yin Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Kidney Yin Deficiency tend to share a common theme: heat that appears without an obvious cause, paired with dryness and a sense of depletion. You may recognize some of these signs but not all. A pattern is usually suggested when several appear together over weeks or months.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Sign</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What It May Feel Like</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Explanation</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Night sweats</td>
                <td className="px-3 py-2">Waking drenched in sweat, especially between 3 and 5 AM</td>
                <td className="px-3 py-2">Yin is too weak to hold fluids in at night; heat escapes</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Hot flashes or flushing</td>
                <td className="px-3 py-2">Waves of heat, often worse in the late afternoon or evening</td>
                <td className="px-3 py-2">Empty heat rises when Yin cannot anchor Yang</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dry mouth and throat</td>
                <td className="px-3 py-2">Persistent thirst or scratchiness, worst at night</td>
                <td className="px-3 py-2">Kidney Yin fails to moisten the upper body</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Low back ache</td>
                <td className="px-3 py-2">Dull ache in the lower back, worse after exertion or at night</td>
                <td className="px-3 py-2">The Kidney governs the lower back; depletion weakens it</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Tinnitus or ringing in ears</td>
                <td className="px-3 py-2">High-pitched ringing, often subtle and chronic</td>
                <td className="px-3 py-2">The Kidney opens into the ears; less nourishment means noise</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Dizziness</td>
                <td className="px-3 py-2">Lightheadedness, especially when tired or standing quickly</td>
                <td className="px-3 py-2">The brain lacks the upward nourishment that Kidney Yin provides</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Five-palm heat</td>
                <td className="px-3 py-2">Warmth in the palms, soles, and center of the chest</td>
                <td className="px-3 py-2">A classic marker of empty heat from Yin depletion</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Waking around 3 AM</td>
                <td className="px-3 py-2">Difficulty staying asleep, often waking hot and restless</td>
                <td className="px-3 py-2">Yin should anchor the mind at night; depletion disrupts rest</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Night sweats and 3 AM waking are two of the most distinctive signs. If either sounds familiar, you can read more about <Link href="/symptoms/why-do-i-have-night-sweats" className="text-accent hover:underline">why night sweats happen</Link> and <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-accent hover:underline">why your body might wake you at 3 AM</Link>. To see whether Kidney Yin Deficiency matches your overall constitution, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Kidney Yin Deficiency?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine recognizes that Kidney Yin does not run low overnight. It usually fades through a combination of time, strain, and inherited tendency. Most people who develop this pattern can point to more than one of the factors below.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Aging and Natural Decline</h3>
        <p className="text-text2 leading-relaxed mb-4">
          TCM teaches that Kidney Yin declines naturally with age. Classic texts place a notable drop for women around age 40 and for men around age 48. This is why menopause is one of the most common triggers for Kidney Yin Deficiency. As ovarian function shifts and estrogen falls, many women experience the classic signs of empty heat, including hot flashes, night sweats, and dryness. The same pattern can appear in men as they age, though it tends to arrive more gradually. Aging simply draws down a reserve that took decades to build.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Overwork and Burnout</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The modern habit of working long hours, sleeping too little, and pushing through stress is deeply taxing to Yin. When you stay active and mentally engaged past the point of natural fatigue, your body borrows from its cooling reserves to keep going. Over months and years, this constant borrowing leaves the Yin account overdrawn. People who describe themselves as running on fumes, or who rely on caffeine to override tiredness, are often on this path without realizing it.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with a smaller reserve of Kidney Yin. From childhood they may have run warm, slept lightly, or sweated easily at night. This inborn tendency corresponds to the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link> in the nine-constitution framework. If you have always tilted toward heat and dryness rather than cold and damp, your constitution may be a factor worth exploring.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Kidney Yin Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is a cornerstone of the Chinese medicine approach to Kidney Yin Deficiency. The guiding principle is to choose foods that are cooling, moistening, and gently nourishing, while avoiding anything that adds more heat. These foods have been used for generations to help rebuild the cooling reserve. Consistency matters more than quantity. Small amounts eaten regularly tend to work better than occasional large doses.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Why It May Help</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame seeds</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Ground and stirred into porridge or rice</td>
                <td className="px-3 py-2">Classic Kidney Yin tonic; also supports hair and joints</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries (wolfberries)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">A small handful in tea, congee, or water</td>
                <td className="px-3 py-2">Moistens and gently nourishes Kidney and Liver Yin</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Sliced into soups or steamed</td>
                <td className="px-3 py-2">Strengthens Kidney and Spleen; moistening without being heavy</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Cooked in soups or stews</td>
                <td className="px-3 py-2">Associated with Kidney health; cooling and nourishing</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mulberries</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten fresh or dried as a snack</td>
                <td className="px-3 py-2">Moistens Yin and supports Kidney essence</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
                <td className="px-3 py-2">Cools heat and moistens the lungs and throat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus seeds</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Cooked in soups or sweet porridge</td>
                <td className="px-3 py-2">Calms the mind and supports Kidney astringence</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Duck</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Slow-cooked in soup with gentle seasonings</td>
                <td className="px-3 py-2">One of the few meats considered cooling and Yin-supportive</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cooked as soup or congee</td>
                <td className="px-3 py-2">Clears heat and supports fluid balance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit or Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because Kidney Yin Deficiency is fundamentally a pattern of too much heat and too little moisture, the foods below may worsen the imbalance by adding warmth, drying the body, or pushing the system even harder than it can sustain.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot peppers, and heavy curry are strongly heating and may intensify flushes and dryness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee and excess caffeine.</strong> Caffeine is stimulating and drying in TCM terms and may deepen the drain on cooling reserves.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered heating and damp-forming in Chinese medicine; regular drinking may accelerate Yin depletion and trigger night sweats.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Lamb and very warming meats.</strong> These are among the most heating animal foods and may add to internal warmth.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Frying concentrates heat and dryness, making these foods poorly suited to a Yin-deficient system.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive ginger and cinnamon.</strong> Helpful in small doses, these warming spices may aggravate empty heat when overused.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Support Kidney Yin
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but lifestyle plays an equally important role in rebuilding Kidney Yin. These daily habits focus on rest, cooling, and reducing the constant drain that slowly depletes the reserve. None of them require special equipment, only consistency.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Sleep before 11 PM.</strong> In the TCM organ clock, 11 PM to 3 AM is Liver and Gallbladder time, considered critical for Yin restoration. Missing this window night after night slowly erodes the reserve.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Stay hydrated with room-temperature water.</strong> Sip steadily through the day rather than gulping ice water, which can shock a system that is already running dry.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid saunas and hot yoga.</strong> These are intensely heating practices and may worsen the very pattern you are trying to resolve.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice gentle movement.</strong> Tai Chi, qigong, slow walking, and restorative stretching support circulation without burning through Yin the way intense training can.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Reduce screen time after 9 PM.</strong> Bright lights and constant input keep the mind active and delay the deep, cool rest that Kidney Yin depends on.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Eat dinner early and light.</strong> A heavy meal late at night generates heat during digestion exactly when the body should be cooling down for sleep.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Stop working through fatigue.</strong> Fatigue is a signal that reserves are low. Pushing past it repeatedly is one of the fastest ways to draw down Kidney Yin.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Kidney Yin Deficiency overlap with several medical conditions, including hyperthyroidism, perimenopause and menopause, chronic kidney disease, and certain autoimmune disorders. If your symptoms are severe, persistent, getting worse, or accompanied by unexplained weight loss, palpitations, or high blood pressure, please see a qualified healthcare professional for a proper evaluation. Chinese medicine food therapy and lifestyle adjustments may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
        </p>
      </section>

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
