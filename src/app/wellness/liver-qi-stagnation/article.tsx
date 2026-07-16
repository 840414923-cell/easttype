import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function LiverQiStagnationArticle() {
  const slug = "liver-qi-stagnation"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Liver Qi Stagnation</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Liver Qi Stagnation in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, the Liver (肝, gān) is responsible for the smooth, even flow of Qi, the body&apos;s vital energy, throughout every organ and limb. When Liver Qi becomes stuck, you tend to feel stuck as well: frustrated, irritable, and tense, often for no clear reason. The most recognizable physical signs include frequent sighing, a tight or aching sensation along the rib sides, breast tenderness in the days before a period, bloating that shifts with your mood, and menstrual cycles that arrive early, late, or with cramping. This is arguably the single most common pattern seen in modern, fast-paced, and stressed-out people. Foods and habits that encourage movement, such as mint tea, gentle daily walking, and time spent outdoors, may help restore a smoother flow of energy. You can check whether this matches your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is the Liver in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Traditional Chinese Medicine, the Liver is often described as the general of the body. Its central job is to ensure that Qi flows freely and reaches every corner of the system. When that flow is unhurried and balanced, emotions stay even, digestion works smoothly, and the menstrual cycle runs on a steady rhythm. The Liver is also said to store the blood and release it when needed, which is why it plays such a direct role in menstruation, physical endurance, and the recovery that happens during rest.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This picture is quite different from the Western liver, which is understood as a specific organ that filters toxins and metabolizes nutrients. The TCM Liver is a broader functional system. It governs the smooth flow of emotions, regulates the monthly release of blood, and supports digestion by passing energy along to the Stomach and Spleen. Because of this wide reach, a Liver that is not flowing well tends to create symptoms that show up across the body, not just in one place. The classic teaching holds that where there is free flow there is no pain, and where there is pain there is no free flow.
        </p>
        <p className="text-text2 leading-relaxed">
          When Liver Qi becomes stagnant, the effect can feel like a traffic jam in the body&apos;s energy system. Cars back up, tension builds, and nothing moves the way it should. That backed-up pressure may show up as emotional friction, tight muscles, digestive bloating, or painful periods. Liver Qi Stagnation is, at its core, a problem of movement. To understand the foundational energy that gets stuck in this pattern, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi means in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Liver Qi Stagnation
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Liver Qi Stagnation tend to share one thread: a sense of tightness, fullness, or pressure that worsens with stress and eases with relaxation or movement. The symptoms below often appear together, and they frequently fluctuate with mood, the time of day, or the phase of the menstrual cycle. You may notice some of these signs but not all. A pattern is usually suggested when several cluster over weeks or months.
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
                <td className="px-3 py-2 font-medium text-text">Frequent sighing</td>
                <td className="px-3 py-2">Unconsciously exhaling heavily throughout the day</td>
                <td className="px-3 py-2">The Liver vents stuck Qi through sighing; the body tries to release pressure</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Irritability or short temper</td>
                <td className="px-3 py-2">Quick frustration, snapping at others, hard to unwind</td>
                <td className="px-3 py-2">The Liver governs the smooth flow of emotion; stagnation creates inner friction</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Tightness or pain in the rib sides</td>
                <td className="px-3 py-2">Aching, fullness, or tension along the lower ribs</td>
                <td className="px-3 py-2">The Liver meridian travels through the ribcage; stuck Qi causes local distension</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Breast tenderness or swelling before period</td>
                <td className="px-3 py-2">Sore, swollen, or sensitive breasts in the days before menstruation</td>
                <td className="px-3 py-2">Stagnant Liver Qi gathers in the chest as the cycle approaches</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Irregular or painful periods</td>
                <td className="px-3 py-2">Cycles that vary in length, cramps, clots, often worsened by stress</td>
                <td className="px-3 py-2">The Liver stores blood and regulates its monthly release; stuck flow means pain</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Feeling of a lump in the throat (plum pit qi)</td>
                <td className="px-3 py-2">A sensation that something is caught in the throat that cannot be swallowed</td>
                <td className="px-3 py-2">Stagnant Qi and phlegm knot together in the throat channel</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Bloating that varies with mood</td>
                <td className="px-3 py-2">Abdominal distension that grows when tense and eases when relaxed</td>
                <td className="px-3 py-2">Stagnant Liver Qi overflows into the Spleen and Stomach, disrupting digestion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Irritability, rib-side tightness, and premenstrual breast tenderness are among the most telling signs of this pattern. If any of these sound familiar, you can read more about <Link href="/symptoms/why-am-i-so-irritable" className="text-accent hover:underline">why irritability happens</Link>, <Link href="/symptoms/why-do-i-have-breast-tenderness" className="text-accent hover:underline">why breast tenderness occurs</Link>, and <Link href="/symptoms/why-is-my-period-irregular" className="text-accent hover:underline">why your period might be irregular</Link>. To see whether Liver Qi Stagnation matches your overall constitution, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Liver Qi Stagnation?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine teaches that the Liver Qi flows freely when a person&apos;s life moves with a healthy rhythm of activity, expression, and rest. When that rhythm breaks down, energy begins to pool and stagnate. The pattern rarely has a single cause. Most people who develop Liver Qi Stagnation can trace it to a combination of the factors below, with emotional strain usually leading the list.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Emotional Stress and Suppressed Anger</h3>
        <p className="text-text2 leading-relaxed mb-4">
          TCM holds that the Liver processes emotions, and that anger, frustration, and resentment are the feelings most closely tied to this organ. Chronic stress, repressed frustration, and bottled-up feelings directly stagnate Liver Qi. When you regularly swallow what you feel, or when you live under pressure that allows no release, the smooth flow of energy stalls. This is why Liver Qi Stagnation is so widespread among people managing demanding jobs, difficult relationships, or situations where speaking up does not feel safe. The unspoken emotion, held day after day, becomes a physical kind of pressure in the system.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Irregular Eating and Lifestyle</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver relies on a steady, predictable routine to keep its energy flowing. Skipping meals, eating while anxious or rushed, and sleeping at irregular hours all disturb the rhythm the Liver depends on. Eating under stress is especially disruptive, because the tension you bring to the table follows the food into digestion. When meals are chaotic and sleep is inconsistent, the body loses the reliable pattern that helps Qi circulate, and stagnation can settle in over time.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Lack of Movement</h3>
        <p className="text-text2 leading-relaxed">
          The Liver is an organ that thrives on movement. Gentle physical activity keeps Qi circulating through the meridians and prevents energy from settling into pockets of tension. A sedentary lifestyle, especially one spent mostly seated and indoors, gives the Qi little reason to move, and stagnation tends to worsen. This is also why the pattern maps so neatly onto the <Link href="/types/qi_stagnant" className="text-accent hover:underline">Qi Stagnant body type</Link> in the nine-constitution framework, a type defined by inner tension, sensitivity to stress, and a tendency to hold rather than release.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Liver Qi Stagnation
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for Liver Qi Stagnation follows one guiding idea: choose foods that move energy. Where cooling foods suit patterns of heat, and warming foods suit patterns of cold, this pattern calls for items that gently encourage circulation and release. Pungent, light, and aromatic foods tend to do this work well, as do bitter and sour flavors that direct energy outward and downward. These foods have been used for generations to ease the tightness and frustration that come with stuck Qi. Small amounts taken regularly tend to work better than large occasional doses.
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
                <td className="px-3 py-2 font-medium text-text">Green tea</td>
                <td className="px-3 py-2">Cool, bitter, sweet</td>
                <td className="px-3 py-2">Brewed lightly, one to two cups a day</td>
                <td className="px-3 py-2">Gently clears heat and moves Qi without overstimulating</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mint tea</td>
                <td className="px-3 py-2">Cool, pungent</td>
                <td className="px-3 py-2">Steeped fresh or dried, especially after meals</td>
                <td className="px-3 py-2">A classic Liver Qi mover; vents frustration and eases bloating</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum tea</td>
                <td className="px-3 py-2">Cool, sweet, bitter</td>
                <td className="px-3 py-2">Brewed from dried flowers, sipped warm</td>
                <td className="px-3 py-2">Cools Liver heat and soothes the eyes and head</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lemon</td>
                <td className="px-3 py-2">Cool, sour</td>
                <td className="px-3 py-2">A squeeze in warm water, first thing in the morning</td>
                <td className="px-3 py-2">Sour flavor enters the Liver and helps direct Qi smoothly</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Vinegar (small amounts)</td>
                <td className="px-3 py-2">Warm, sour, bitter</td>
                <td className="px-3 py-2">A splash in dressings or drizzled over greens</td>
                <td className="px-3 py-2">Moves stagnant Qi and supports digestion</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Cool, sweet, bitter</td>
                <td className="px-3 py-2">Eaten raw, in soups, or stir-fried lightly</td>
                <td className="px-3 py-2">Clears heat and supports the smooth flow of energy</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Radish (daikon)</td>
                <td className="px-3 py-2">Cool, pungent, sweet</td>
                <td className="px-3 py-2">Simmered in soups or grated fresh</td>
                <td className="px-3 py-2">A traditional Qi mover that eases fullness and bloating</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Rose petals (rose tea)</td>
                <td className="px-3 py-2">Warm, sweet, slightly bitter</td>
                <td className="px-3 py-2">Brewed as tea from dried culinary petals</td>
                <td className="px-3 py-2">One of the most valued herbs for moving Liver Qi and easing tension</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Kelp and seaweed</td>
                <td className="px-3 py-2">Cold, salty</td>
                <td className="px-3 py-2">Cooked in soups, stews, or salads</td>
                <td className="px-3 py-2">Softens hardness and helps clear accumulated heat</td>
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
          Because Liver Qi Stagnation is a pattern of stuck, pressurized energy, certain foods may worsen it by adding heat, creating dampness, or tightening the system further. The items below are not strictly forbidden, but they may be worth limiting while the pattern is active.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Heavy, greasy foods.</strong> Fatty meats and rich dishes are slow to digest and may add dampness that further blocks the smooth flow of Qi.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive alcohol.</strong> Alcohol is heating and damp-forming in TCM and may intensify the frustration and tightness tied to this pattern.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much coffee.</strong> Caffeine is stimulating and may keep the nervous system on edge, which can deepen the tension that stagnates Liver Qi.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods.</strong> Heavy chili and hot peppers add internal heat that can turn simple stagnation into the hotter, more agitated pattern of Liver Fire.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Fried foods.</strong> Deep-frying concentrates heat and oil, producing heavy foods that slow digestion and may add to bloating.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice-cold drinks with meals.</strong> Very cold liquids can shock the digestive system and slow the very movement this pattern needs.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Move Liver Qi
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because Liver Qi Stagnation is, at heart, a problem of too little movement, the most effective remedies are often simple lifestyle shifts rather than elaborate remedies. These daily habits focus on encouraging flow: physical movement, emotional release, and a steady, regular rhythm. None of them require special equipment, only a willingness to release rather than hold.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Walk or move gently every day.</strong> Daily walking is considered the single most important habit for the Liver. Even twenty minutes of steady, easy movement may help circulate Qi that has been sitting still all day.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Express emotions constructively.</strong> Since the Liver processes feeling, finding healthy outlets such as talking, writing, or creative work may prevent frustration from settling into the body as tension.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Stretch the sides of the body.</strong> The Liver meridian runs through the ribs and flanks. Side stretches, gentle twists, and yoga poses that open the ribcage may directly ease the areas where Qi tends to pool.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Spend time in nature and green spaces.</strong> In TCM, green is the color of the Liver. Walking among trees, parks, or gardens is thought to support this organ, and the outdoor air and movement tend to encourage smoother energy flow.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Eat regular meals at consistent times.</strong> A predictable eating rhythm gives the Liver the steady routine it relies on, and it helps digestion run without the friction that erratic meals create.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Practice deep, slow breathing.</strong> The breath is one of the simplest ways to move Qi. A few minutes of long, relaxed exhalations may help vent the pressure that builds up as sighing and tension.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid eating when angry.</strong> Eating under stress brings that tension straight into digestion. Pausing to settle before a meal may keep the Liver from pushing its stagnation into the Stomach and Spleen.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Liver Qi Stagnation can overlap with several medical conditions, including anxiety and depression, gallbladder disease, hepatitis and other liver conditions, and premenstrual dysphoric disorder (PMDD). If your symptoms are severe, persistent, or getting worse, or if they come with significant pain, jaundice, or changes in mood that concern you, please see a qualified healthcare professional for a proper evaluation. Chinese medicine food therapy and lifestyle adjustments may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
