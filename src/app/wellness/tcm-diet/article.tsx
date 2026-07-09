import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function TcmDietArticle() {
  const slug = "tcm-diet"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">TCM Diet</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        TCM Diet: A Complete Guide to Eating According to Chinese Medicine
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          A TCM diet is not about counting calories or avoiding carbs. It is about eating warm, cooked, seasonal foods matched to your body type and current health condition. The core principle is simple: the Spleen thrives on warmth and regularity. Cold, raw, and irregular eating weakens digestion over time. This guide covers the key principles anyone can start applying today.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          5 Core Principles of a TCM Diet
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          A TCM diet rests on a handful of ideas that are easy to grasp and harder to practice, mostly because they run against modern eating habits. None of them require special foods or expensive ingredients. They ask instead for attention to temperature, timing, and match. If you want the wider background first, our <Link href="/wellness/what-is-chinese-medicine" className="text-accent hover:underline">introduction to Chinese medicine</Link> explains where these principles come from.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat warm, cooked foods.</strong> The Spleen depends on digestive fire. Raw and ice-cold foods force the body to generate extra warmth before it can absorb anything, which is a quiet drain on energy. Cooked grains, soups, and steamed vegetables are the everyday foundation.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat with the seasons.</strong> The body&apos;s needs shift through the year. Cooling foods in summer help clear heat, while warming foods in winter protect the deeper reserves. Eating watermelon in January or heavy lamb stew in a heatwave works against the body&apos;s rhythm.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Match food to your body type.</strong> Hot types do better with yin-nourishing, cooling foods; cold types need warming foods. Eating well for someone else&apos;s constitution may leave yours worse off. Our overview of <Link href="/wellness/chinese-medicine-body-types" className="text-accent hover:underline">Chinese medicine body types</Link> explains the main groups.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Eat at regular times.</strong> In the TCM body clock, 7 to 9 AM is the Stomach and Spleen peak, when digestion is strongest. A warm breakfast in that window may be absorbed more efficiently than the same food eaten later. Consistent meal times train the system to expect fuel.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Stop at 70 percent full.</strong> Leaving a little room eases the digestive workload and prevents the heavy, sluggish feeling that follows large meals. Eating until stuffed is one of the fastest ways to blunt Spleen function over time.</span></li>
        </ol>
        <p className="text-text2 leading-relaxed mt-4">
          Read together, these five principles point to one idea: make digestion easy. The Spleen does not need exotic superfoods. It needs warmth, regularity, and a manageable workload. Most people who shift toward this way of eating notice steadier energy and less bloating within a couple of weeks, simply because the digestive system is no longer fighting cold, irregularity, and excess at every meal. You do not have to apply all five at once. Starting with warm breakfasts and regular meal times is often enough to feel a difference.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Food Temperature Categories
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Every food in Chinese medicine carries a temperature property, which is not about how hot or cold it is on the plate but about its effect on the body once absorbed. Ginger is warming whether you eat it raw or cooked; watermelon is cooling even at room temperature. Balancing these properties to your condition is one of the most practical skills in a TCM diet. The five categories below cover the spectrum.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Temperature</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Examples</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Hot</td>
                <td className="px-3 py-2">Lamb, ginger, cinnamon, black pepper</td>
                <td className="px-3 py-2">Cold-type people, deep winter</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Warm</td>
                <td className="px-3 py-2">Chicken, leeks, walnuts, dates</td>
                <td className="px-3 py-2">Most people, cooler seasons</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Neutral</td>
                <td className="px-3 py-2">Rice, carrot, potato, Chinese yam</td>
                <td className="px-3 py-2">Everyone, daily staple foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cool</td>
                <td className="px-3 py-2">Pear, cucumber, mint</td>
                <td className="px-3 py-2">Hot-type people, summer</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Cold</td>
                <td className="px-3 py-2">Watermelon, mung beans, bitter gourd</td>
                <td className="px-3 py-2">Heat conditions only, short-term use</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          As a rule, neutral and warm foods form the safe center of a daily diet, while the extremes are used with purpose. Hot foods are medicine for cold patterns, and cold foods are medicine for heat patterns. Eating heavily from the cold end day after day, especially raw and iced, tends to weaken digestion over time even in robust people. To see how these forces balance each other, our page on <Link href="/wellness/yin-and-yang" className="text-accent hover:underline">yin and yang</Link> is a good companion.
        </p>
        <p className="text-text2 leading-relaxed">
          A practical way to use this table is to think in ratios rather than bans. A mostly warm-and-neutral diet leaves room for the occasional cooling food in summer, just as a warming stew is welcome in winter. The trouble begins when the cold end becomes the default, as it tends to in modern routines built around iced drinks, raw snacks, and refrigerated meals. Shifting the balance toward warm and neutral, even without removing anything entirely, is usually enough to notice a change.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The TCM Plate
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          A balanced TCM meal is built around a warm grain, surrounded by cooked vegetables and a moderate portion of protein, with a warming flavor to support digestion. The proportions below are a rough guide rather than a strict rule, but they capture the shape of a meal that the Spleen handles well. Notice how little room it leaves for cold, raw, or heavily processed items.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Component</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Proportion</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Warm grain</td>
                <td className="px-3 py-2">40%</td>
                <td className="px-3 py-2">Rice, millet, congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cooked vegetables</td>
                <td className="px-3 py-2">30%</td>
                <td className="px-3 py-2">Seasonal, stir-fried or steamed</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Protein</td>
                <td className="px-3 py-2">20%</td>
                <td className="px-3 py-2">Moderate portion, fish, chicken, tofu</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Warming flavor</td>
                <td className="px-3 py-2">10%</td>
                <td className="px-3 py-2">Ginger tea, soup broth, small spice</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          Two features stand out compared with a typical Western plate. The grain share is larger and always warm, and the vegetable share is cooked rather than raw. Protein sits at a moderate fifth of the meal rather than the centerpiece. This shape keeps the digestive workload low while still providing enough fuel and building blocks. Soups and stews fit this template naturally, which is why they are so common in traditional Chinese home cooking: they warm, they pre-soften the food, and they leave the Spleen with little heavy lifting to do.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Emphasize
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          These foods form the backbone of a TCM-style diet. They are warm or neutral, easy to digest, and supportive of the Spleen. Most are inexpensive and available year-round, which is part of the point: this is an everyday way of eating, not a short cleanse.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Rice and millet:</strong> neutral grains that are gentle on digestion and form the base of congee.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Sweet potato:</strong> a Spleen-strengthening staple that is easy to steam or roast.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Chinese yam:</strong> supports both Spleen and Kidney, mild and food-like.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ginger:</strong> warms digestive fire and is useful in tea or cooking year-round.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Red dates (jujube):</strong> a sweet Qi tonic often added to tea or congee.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cooked seasonal vegetables:</strong> stir-fried or steamed rather than raw.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Bone broth:</strong> deeply nourishing and easy for a tired system to absorb.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Congee:</strong> soft rice porridge, the closest thing to pre-digested food.</span></li>
        </ul>
        <p className="text-text2 leading-relaxed mt-4">
          None of these items are exotic, and that is the point. A pantry stocked with rice, millet, ginger, dates, and seasonal vegetables is already a TCM pantry. The work is in how they are prepared: cooked rather than raw, warm rather than iced, eaten at a steady pace rather than on the run. When the everyday foods are doing the heavy lifting, herbs and supplements become a finishing touch instead of a crutch. Most people find that a warm breakfast of congee or porridge, repeated for two or three weeks, is where the shift becomes tangible.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          These foods are not forbidden, but they tend to cool, burden, or overstimulate the digestive system when eaten often. For someone with a weak Spleen, limiting them can make a noticeable difference in energy and comfort within a few weeks.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water:</strong> cold can extinguish digestive fire and slow the whole process down.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw salads:</strong> hard for a weak Spleen to break down, often leaving you more tired after eating.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive dairy:</strong> tends to generate dampness and a heavy, sluggish feeling.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods:</strong> generate internal heat and dampness that burden digestion.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar:</strong> gives a quick spike then a crash that can be associated with deeper fatigue.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods:</strong> useful in small amounts, but excess adds heat the body must clear.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol:</strong> warming and damp-generating in excess, a quiet drain on the Liver.</span></li>
        </ul>
        <p className="text-text2 leading-relaxed mt-4">
          Notice that nothing on this list needs to be banned outright. The issue is frequency and proportion. An iced drink on a hot day, a small raw salad alongside a warm meal, or an occasional sweet is rarely the problem. What wears the Spleen down is the daily default: iced coffee every morning, raw vegetables at every lunch, sugar at every snack. Reducing the frequency of these habits, rather than removing them entirely, is usually a sustainable first step that the body responds to within a few weeks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Seasonal Eating Guide
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Eating with the seasons is one of the oldest principles in Chinese food therapy. Each season carries a quality, and matching your food to it helps the body stay in step with its environment. The table below offers a starting framework; you do not need to follow it rigidly, only to lean in the right direction. For cooling options in summer, see our guide to <Link href="/wellness/cooling-foods-chinese-medicine" className="text-accent hover:underline">cooling foods</Link>, and for the cold months, our page on <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">foods that warm your body</Link>.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Season</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Focus</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Foods</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spring</td>
                <td className="px-3 py-2">Move Liver Qi</td>
                <td className="px-3 py-2">Greens, mint, lemon</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Summer</td>
                <td className="px-3 py-2">Cool heat</td>
                <td className="px-3 py-2">Mung beans, watermelon, cucumber</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Autumn</td>
                <td className="px-3 py-2">Moisten the Lung</td>
                <td className="px-3 py-2">Pear, white fungus, honey</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Winter</td>
                <td className="px-3 py-2">Warm the Kidney</td>
                <td className="px-3 py-2">Lamb, ginger, walnuts</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you are unsure how to match these ideas to your own constitution, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you find a starting point, and you can always refine it from there.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to Seek Professional Advice
        </h2>
        <p className="text-text2 leading-relaxed">
          A TCM diet is educational, not medical treatment. If you have a diagnosed condition, persistent digestive problems, or are managing pregnancy or medication, please consult a qualified practitioner and your doctor before making significant dietary changes. Chinese food therapy may complement medical care, but it does not replace diagnosis or treatment.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(200,16,46,0.03)] border border-[rgba(200,16,46,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
