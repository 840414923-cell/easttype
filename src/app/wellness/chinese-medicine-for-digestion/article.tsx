import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForDigestionArticle() {
  const slug = "chinese-medicine-for-digestion"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Digestion</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Digestion: Spleen Health &amp; Gut Foods
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, digestion is the responsibility of the Spleen and Stomach, which work as a pair. The Stomach receives food, and the Spleen refines it into the energy and blood that fuel the rest of the body. When this pair works well, eating leaves you light and steady. When the system is weak, you may notice bloating, gas, fullness after small meals, irregular bowel movements, and a heavy tiredness that sets in shortly after eating. The most common pattern behind these signs is Spleen Qi Deficiency, where the digestive fire simply lacks the strength to process meals efficiently. Warm, cooked, easily digested foods like rice congee and ginger tea may help restore comfortable, regular digestion over time, while cool, raw, and icy foods tend to add to the burden.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Digestion
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen and Stomach form the center of Chinese medicine physiology. A classical teaching states that the Spleen and Stomach are the source of Qi and Blood. Every other organ depends on the fuel they produce from food. When they work well, energy is abundant, the mind feels clear, and the body repairs itself steadily. When they struggle, everything downstream may suffer, from sleep and mood to immunity and stamina.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This is different from Western gastroenterology, which tends to focus on measurable structures and chemistry: stomach acid levels, digestive enzymes, the gut microbiome, and inflammation markers. These are valuable tools. TCM looks at a different layer, the functional energy of digestion. It asks not only what is in the stomach, but whether the system has enough warmth and strength to break food down and distribute its nutrients.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          That functional energy is often described as digestive fire. A strong, steady fire cooks food thoroughly and leaves little residue. A weak fire leaves meals half processed, which may show up as bloating, loose stools, or fatigue after eating. A fire that runs too hot may instead produce burning, acid reflux, and a large appetite with little real satisfaction.
        </p>
        <p className="text-text2 leading-relaxed">
          Because the Spleen and Stomach sit at the center, Chinese medicine treats them as the foundation of long term health. Supporting them is rarely about a single herb or superfood. It is more often about consistent habits: warm meals, regular timing, calm eating, and foods matched to your constitution. If you want to see where your own digestion fits into the larger picture, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can be a useful starting point.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Common Digestive Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most digestion complaints in Chinese medicine fall into a handful of recognized patterns. Each pattern has a distinct personality, and they can overlap, so one person may show features of two at once, especially after years of irregular eating or stress. The table below outlines four of the most common patterns and the general food direction each tends to call for.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Symptoms</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Explanation</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Tiredness after eating, bloating, loose stools, weak appetite</td>
                <td className="px-3 py-2">The digestive fire lacks strength to process and move food</td>
                <td className="px-3 py-2">Strengthen the Spleen with warm, sweet, cooked foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Stomach Heat</td>
                <td className="px-3 py-2">Burning sensation, acid reflux, big appetite, bad breath, dry mouth</td>
                <td className="px-3 py-2">Excess heat dries fluids and speeds the stomach abnormally</td>
                <td className="px-3 py-2">Clear heat with cooling, moistening foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Dampness</td>
                <td className="px-3 py-2">Heavy sluggish feeling, sticky loose stools, brain fog, nausea</td>
                <td className="px-3 py-2">Moisture builds up because the Spleen cannot drain fluids well</td>
                <td className="px-3 py-2">Drain dampness with bland, lightly drying foods</td>
              </tr>
              <tr className="bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Liver Overacting on Spleen</td>
                <td className="px-3 py-2">Stress related bloating, alternating diarrhea and constipation, irritability</td>
                <td className="px-3 py-2">Tension blocks Liver flow, which then presses on the weaker Spleen</td>
                <td className="px-3 py-2">Soothe the Liver and support the Spleen together</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          A few clues may help you tell these apart. Cold-type patterns, like Spleen Qi Deficiency and Spleen Dampness, tend to feel better with warmth and worse with raw or cold foods. Heat-type patterns, like Stomach Heat, tend to feel worse with spicy and warming items. Stress-linked patterns often shift with your mood and schedule. For the most common of these, our <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> guide goes into deeper detail. If your bloating is stubborn and chronic, our page on <Link href="/symptoms/always-bloated-after-eating" className="text-accent hover:underline">why you are always bloated after eating</Link> explores the dampness angle. If burning and reflux dominate, the <Link href="/wellness/stomach-heat" className="text-accent hover:underline">Stomach Heat</Link> guide may fit better. And when stress clearly sets off your gut, the Liver Overacting pattern can be associated with Liver tension.
        </p>
        <p className="text-text2 text-sm leading-relaxed">
          If you are unsure where your symptoms fit, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see the larger picture of your constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Weakens Digestion
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine looks for the daily habit or strain that slowly wore the system down, rather than blaming a single cause. Four influences appear again and again, and most long standing cases trace back to some blend of them.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Cold and Raw Foods
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen and Stomach depend on warmth to function well. A steady intake of ice water, raw salads, smoothies straight from the fridge, and ice cream may gradually cool the digestive fire. The body then has to spend extra energy reheating cold food to body temperature before it can be processed, which over time may leave the system tired and sluggish.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Irregular Eating
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          Digestion runs best on rhythm. Skipping breakfast, eating lunch at random hours, late heavy dinners, and grabbing food while working all disrupt the natural cycle of the Spleen. When meal times shift constantly, the system never knows when to prepare, and efficiency drops. Eating while distracted or rushed may also mean food is barely chewed, which adds to the workload below.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Overthinking
        </h3>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM theory, the Spleen is the organ most affected by excessive mental work and worry. Long hours of intense concentration, constant worry, and mental looping can be associated with a noticeable drop in digestive strength. This is part of why students, researchers, and people in demanding desk jobs often report poor appetite and bloating during stressful stretches.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          Constitutional Tendency
        </h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with a naturally softer digestive system. This may show up early as a sensitive stomach in childhood, easy fullness, or low stamina compared with peers. This baseline lines up with the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link>, where low overall energy tends to appear across digestion, breathing, and stamina. If this sounds familiar, that page walks through the full pattern and the foods that tend to suit it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Support Digestion
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because weak digestion has a cold, tired quality in most cases, the foods that tend to help are warm, cooked, and simple. Think of these as easy to absorb, almost pre-digested, so the Spleen does not have to work hard. None are quick fixes, and their effects tend to build gradually with consistent use over weeks rather than days. The table below lists foods traditionally used to support comfortable digestion.
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
                <td className="px-3 py-2 font-medium text-text">Rice congee</td>
                <td className="px-3 py-2">Neutral, sweet; tonifies</td>
                <td className="px-3 py-2">Long simmered until soft, the easiest grain to absorb</td>
                <td className="px-3 py-2">Rice porridge cooked with extra water, plain or with ginger</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Ginger</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Warms digestive fire and may ease nausea</td>
                <td className="px-3 py-2">Fresh slices in tea, or grated into soups</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Neutral, sweet; tonifies</td>
                <td className="px-3 py-2">Strengthens the Spleen and Stomach gently</td>
                <td className="px-3 py-2">Steamed, in soups, or boiled into congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Millet</td>
                <td className="px-3 py-2">Neutral, slightly cool</td>
                <td className="px-3 py-2">Often called the easiest grain to digest</td>
                <td className="px-3 py-2">Cooked soft as a porridge or side</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sweet potato</td>
                <td className="px-3 py-2">Neutral, sweet; tonifies</td>
                <td className="px-3 py-2">Strengthens the Spleen and adds gentle fiber</td>
                <td className="px-3 py-2">Steamed or roasted until very soft</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Fennel</td>
                <td className="px-3 py-2">Warm, pungent; moves</td>
                <td className="px-3 py-2">Reduces gas, bloating, and cramping</td>
                <td className="px-3 py-2">Seeds brewed as tea, or bulb cooked in soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pumpkin</td>
                <td className="px-3 py-2">Warm, sweet; tonifies</td>
                <td className="px-3 py-2">Supports the Spleen and drains mild dampness</td>
                <td className="px-3 py-2">Steamed, roasted, or simmered in soups</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chicken broth</td>
                <td className="px-3 py-2">Neutral to warm; tonifies</td>
                <td className="px-3 py-2">Deeply nourishing and easy on a weak system</td>
                <td className="px-3 py-2">Long simmered with ginger and vegetables</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Cardamom</td>
                <td className="px-3 py-2">Warm, pungent; moves</td>
                <td className="px-3 py-2">Warms the middle and reduces bloating</td>
                <td className="px-3 py-2">Ground into congee, tea, or stews</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Disrupt Digestion
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Just as some foods may support a tired digestive system, others may quietly add to the burden, especially when warmth and strength are already low. The items below tend to cool the system, slow things down, or create extra work for the Spleen:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks:</strong> ice cold fluids may dampen digestive fire and slow processing, which can be associated with bloating after meals.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw vegetables:</strong> large raw salads require more energy to break down and may leave a cold, tired system feeling heavy.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy products, especially cold:</strong> cold milk, yogurt, and ice cream are damp forming in TCM and may worsen mucus and sluggishness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep fried foods:</strong> greasy, fried items are hard to process and may generate dampness and heat over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods:</strong> heavy chili and strong heat may irritate a sensitive stomach and feed Stomach Heat patterns.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much sugar:</strong> sweets are damp forming and may weaken the Spleen when eaten in excess.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Better Digestion
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only half the picture. Chinese medicine places equal weight on rhythm, warmth, and the state you are in when you eat. The habits below may help restore steadier digestion when practiced consistently rather than in bursts:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat at consistent times.</strong> Regular meal times train the Spleen to prepare, which may improve efficiency and reduce bloating.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Chew each bite 20 to 30 times.</strong> Thorough chewing begins digestion in the mouth and leaves far less work for the Stomach.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Stop at about 70 percent full.</strong> Leaving the table slightly hungry avoids overloading the system and may reduce that heavy post meal slump.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Avoid eating while stressed or working.</strong> A tense, distracted state pulls energy away from digestion and may leave food sitting heavy.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Take a brief walk after meals.</strong> Gentle movement after eating encourages Qi to circulate through the abdomen and may ease fullness.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Drink warm water with meals.</strong> Warm or room temperature drinks support the digestive fire, while ice water can slow things down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Keep your abdomen warm.</strong> A covered, warm midsection protects the Spleen and Stomach, especially in cold weather or air conditioned rooms.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Some signs need prompt medical evaluation rather than food therapy. Seek care for persistent bloating that does not improve, blood in the stool, severe abdominal pain, unexplained weight loss, or chronic diarrhea or constipation that lasts more than a few weeks. These can be associated with conditions that need proper diagnosis, including celiac disease, inflammatory bowel disease, ulcers, infections, and other serious concerns. Chinese medicine food therapy may complement but should never replace professional medical care. If your symptoms feel severe or are getting worse, please see a healthcare provider. For milder, nagging discomfort, our page on <Link href="/symptoms/why-do-i-feel-sick-after-eating" className="text-accent hover:underline">why you feel sick after eating</Link> may offer helpful context.
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
