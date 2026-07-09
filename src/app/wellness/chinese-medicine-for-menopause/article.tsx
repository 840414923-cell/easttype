import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForMenopauseArticle() {
  const slug = "chinese-medicine-for-menopause"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Menopause</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Menopause: How TCM Views the Transition and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, menopause is viewed as a natural decline of Kidney Yin, the cooling and moistening energy that keeps the body&apos;s warmth in balance. As Yin thins over the years around midlife, internal heat has nothing to restrain it, and a state known as empty heat may rise. This can be associated with hot flashes, night sweats, dry skin, irritability, and difficulty staying asleep. Chinese medicine does not call menopause a disease. It treats it as a transition that every woman moves through, one that may be eased with the right foods, calmer routines, and time. Cooling and moistening foods such as black sesame seeds, goji berries, lotus seed, and lily bulb have been used for generations during this phase. To see whether your constitution matches this picture, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Menopause
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine has never described menopause as an illness that needs to be cured. Classical texts portray it as a predictable passage that arrives when Kidney Essence, known as jing, naturally thins with age. Jing is the deep reserve you inherit at birth and spend slowly across a lifetime. By midlife, that reserve is expected to ease downward, and the transition reflects this shift rather than any failure of the body.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Within the Kidney system, two forces work as a pair. Kidney Yang is the warming, activating principle, while Kidney Yin is the cooling, moistening counterpart. In the years surrounding menopause, Kidney Yin tends to be the first of the two to fade. As it thins, Yang loses its cooling partner. The warmth that Yin once held in check begins to drift upward and outward, producing the heat that so many women recognize as a hot flash or a flushed and restless night.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This relative surplus of warmth is what Chinese medicine calls empty heat, or deficiency heat. It is not a fever and it does not stem from an infection. It is simply the body&apos;s own heat, now unbalanced. The same mechanism helps explain why dryness so often accompanies menopause. Yin is responsible for lubricating tissues, so as it declines, the skin, eyes, mouth, and vaginal walls may all feel less moist.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine frames this entire process as manageable rather than broken. Food choices, calmer daily rhythms, enough rest, and patience are the traditional tools. The heat and dryness tend to soften as the body settles into its new equilibrium. Nothing in the TCM view asks a woman to silently endure severe symptoms, and the approaches below are designed to make the passage smoother.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Menopause Symptoms and Their TCM Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because menopause centers on a drop in cooling energy, the symptoms tend to gather around heat and dryness. The pattern is not identical in every woman, though. Chinese medicine distinguishes several variations depending on which organ systems are most involved. The table below maps the most common symptoms to their typical TCM patterns and the food direction each one suggests.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Sudden waves of warmth, often rising from the chest to the face, usually point to Kidney Yin Deficiency with empty heat drifting upward. Waking drenched in sweat tends to reflect Heart and Kidney Yin Deficiency, in which heat disturbs the spirit and fractures sleep. Emotional waves, a short temper, and a feeling of frustration may point to Liver Qi Stagnation with Liver Fire, a pattern that daily stress tends to intensify. Dryness, whether of the skin, hair, or vaginal walls, often reflects a broader deficiency of Yin and Blood, since both are responsible for nourishing and moistening tissues.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Symptom</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What Is Happening</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Approach</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Hot flashes</td>
                <td className="px-3 py-2">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Empty heat rises when Yin cannot anchor Yang</td>
                <td className="px-3 py-2">Cooling, moistening foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Night sweats</td>
                <td className="px-3 py-2">Heart and Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Heat disturbs sleep and forces fluids outward</td>
                <td className="px-3 py-2">Nourish Yin and calm the mind</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mood swings and irritability</td>
                <td className="px-3 py-2">Liver Qi Stagnation with Liver Fire</td>
                <td className="px-3 py-2">Stress compounds the transition and heat flares upward</td>
                <td className="px-3 py-2">Move Liver Qi and gently cool</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Dry skin and vaginal dryness</td>
                <td className="px-3 py-2">Yin and Blood Deficiency</td>
                <td className="px-3 py-2">Fluids and nourishment are low</td>
                <td className="px-3 py-2">Build Blood and Yin</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          The same heat that drives a hot flash can also appear as standalone episodes. You can read more about <Link href="/symptoms/why-do-i-have-hot-flashes" className="text-accent hover:underline">why you have hot flashes</Link> and <Link href="/symptoms/why-do-i-have-night-sweats" className="text-accent hover:underline">why you wake with night sweats</Link>. If several rows above sound familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see which pattern is closest to your constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Drives Menopause Symptoms
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Menopause symptoms do not arise from a single cause. Three factors tend to shape how a woman experiences the transition, and they often overlap within the same person.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Kidney Yin Decline</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The core mechanism is the gradual thinning of Kidney Yin. As this cooling reserve drops, the body&apos;s warming principle has less to hold it in check, and empty heat begins to surface. This is why hot flashes, night sweats, and a sense of internal heat are so common during this phase. The pace of decline varies from person to person, which is part of why two women can move through menopause so differently. For a deeper look at this pattern, see our guide on <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Liver Stress</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver in Chinese medicine is responsible for the smooth flow of Qi and emotions. When frustration, worry, or overwork build up, Liver Qi can stagnate and eventually turn into Liver Fire. This may show up as irritability, mood swings, a flushed face, or a short temper. Emotional stress tends to compound the transition, which is why calming the Liver is often just as important as cooling the heat itself.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some women enter midlife with a naturally smaller reserve of cooling energy. From earlier years they may have run warm, slept lightly, or sweated easily at night. This inborn tendency corresponds to the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link>, and women with this constitution often find the menopause transition more intense. Knowing your baseline can help explain why your experience differs from a friend&apos;s or a sister&apos;s.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Ease Menopause
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy sits at the center of the Chinese medicine approach to menopause. The guiding principle is to choose foods that are cooling, moistening, and gently nourishing, while stepping away from anything that adds more heat. These foods have been used for generations to help the body adjust to its new balance, and they work best as a steady habit rather than a short course. Regular small amounts tend to work better than occasional large servings, and pairing a few of them across the week is more useful than relying on any single item.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Symptom It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame seeds</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Hot flashes and dryness</td>
                <td className="px-3 py-2">Ground and stirred into porridge or rice</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Soy products and tofu</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Overall heat and dryness</td>
                <td className="px-3 py-2">Added to soups, stews, or stir-fries</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Dry eyes and low back ache</td>
                <td className="px-3 py-2">A small handful in tea, congee, or water</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus seed</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Night sweats and poor sleep</td>
                <td className="px-3 py-2">Cooked in soups or sweet porridge</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lily bulb</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Insomnia and irritability</td>
                <td className="px-3 py-2">Simmered in soup with lotus seed</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mulberries</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Dryness and fatigue</td>
                <td className="px-3 py-2">Eaten fresh or dried as a snack</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Dry mouth and throat</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Flushing and internal heat</td>
                <td className="px-3 py-2">Cooked as a thin soup or congee</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Low back ache and fatigue</td>
                <td className="px-3 py-2">Sliced into soups or steamed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Because Yin and Heart are closely linked in sleep, foods that calm the mind, such as lotus seed and lily bulb, may be especially useful when night sweats and insomnia are the main concern. A fuller discussion of this calming pattern appears in our guide on <Link href="/wellness/heart-yin-deficiency" className="text-accent hover:underline">Heart Yin Deficiency</Link>. The goal is not to eat every food on the list but to choose two or three that match your most bothersome symptoms and include them often.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because menopause is fundamentally a pattern of too much heat and too little moisture, the foods below may deepen the imbalance by adding warmth, drying the body, or pushing an already stretched system even harder.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot peppers, and heavy curry are strongly heating and may intensify hot flashes and dryness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered heating and damp-forming in Chinese medicine; regular drinking may trigger night sweats and accelerate the drain on cooling reserves.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee.</strong> Caffeine is stimulating and drying in TCM terms and may worsen both flushes and insomnia.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Lamb and excessive cinnamon or ginger.</strong> These are among the most warming foods and may add to internal heat when used often.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Frying concentrates heat and dryness, which suits a Yin-deficient system poorly.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very salty foods.</strong> Heavy salt can dry fluids and place extra strain on the Kidneys over time.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for a Smoother Transition
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but lifestyle carries equal weight during menopause. The habits below focus on cooling, resting, and reducing the constant strain that slowly wears down cooling reserves. None of them require special equipment, only consistency.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Sleep before 11 PM.</strong> In the TCM organ clock, the hours before midnight are considered critical for Yin restoration. Missing this window night after night may deepen hot flashes and night sweats.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Avoid saunas and hot yoga.</strong> These are intensely heating practices and may worsen the very pattern you are trying to ease.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Practice gentle movement.</strong> Tai Chi, qigong, slow walking, and restorative yoga support circulation without burning through cooling reserves the way hard training can.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Manage stress actively.</strong> Because Liver Qi stagnation feeds mood swings and heat, daily decompression through breathing, time in nature, or quiet rest may calm the transition.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Dress in layers.</strong> Lightweight, breathable fabrics let you shed heat quickly when a hot flash arrives, which can reduce the distress of the moment.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Stay hydrated with room-temperature water.</strong> Sip steadily through the day rather than gulping ice water, which can shock a system already running dry.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Reduce evening screen time.</strong> Bright light and constant input keep the mind active and delay the deep, cool rest that menopause symptoms tend to disrupt.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Menopause is natural, but some symptoms warrant medical attention. Severe hot flashes that disrupt daily life, persistent low mood or depression, signs of bone thinning, and any heavy or irregular bleeding should be evaluated by a qualified healthcare professional. Hormone therapy and other medical treatments may be appropriate depending on your history and risk factors. Chinese medicine food therapy and lifestyle changes may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
