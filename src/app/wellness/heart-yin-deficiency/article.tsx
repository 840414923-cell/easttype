import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function HeartYinDeficiencyArticle() {
  const slug = "heart-yin-deficiency"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Heart Yin Deficiency</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Heart Yin Deficiency in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In TCM, the Heart (心) houses the mind, which is called the Shen. Heart Yin is the cooling, moistening blanket that keeps the mind calm and settled. When Heart Yin becomes depleted, a type of empty heat rises and disturbs the Shen. The result may include insomnia (especially difficulty falling asleep), palpitations, anxiety, vivid dreams, night sweats, and a red flushed face. This pattern can be associated with chronic stress, menopause, or prolonged emotional strain. Cooling and calming foods like lotus seed, lily bulb, and wheat may help quiet the mind and rebuild the cooling reserve. You can see whether this matches your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is the Heart in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the Heart (心, xīn) is described as the emperor of all the organs. It holds a place of authority because it governs blood and houses the Shen, a word that translates roughly as mind, spirit, or consciousness. The Western heart is understood mainly as a mechanical pump that circulates blood. The TCM Heart is broader. It governs not only circulation but also sleep, mental clarity, and emotional balance. When the Shen is settled, a person sleeps deeply, thinks clearly, and feels emotionally steady. When the Shen is disturbed, the mind races, sleep fragments, and anxiety builds.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Heart Yin is the cooling, moistening fluid that keeps the Heart from overheating. In TCM theory, the Heart contains a small flame of physiological fire, and this fire is healthy in moderation. It provides warmth and the spark of consciousness. Heart Yin acts as the water that holds this flame at a steady, gentle level. When Yin is sufficient, the flame burns calmly and the mind feels settled. When Heart Yin runs low, the flame flares upward. This is what Chinese medicine calls empty heat, or deficiency fire, rising to disturb the mind. It is the same mechanism behind the night sweats and flushing seen in Yin deficiency, now focused on the Heart and the spirit it guards.
        </p>
        <p className="text-text2 leading-relaxed">
          The emotion most closely linked to the Heart is joy. In balanced amounts, joy is healthy and enlivening. Excessive excitement, constant overstimulation, or prolonged emotional intensity can also disturb the Heart. This is why a period of emotional upheaval so often precedes the onset of insomnia and palpitations. The Heart is also said to open into the tongue, which is why practitioners examine it so closely. To understand the foundational energy that powers every organ, including the Heart, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi means in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Heart Yin Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Heart Yin Deficiency tend to cluster around the mind and the upper body. Because the Heart houses the Shen and governs sleep, the disturbance shows up most clearly at night and in the chest. You may recognize some of these signs but not all. A pattern is usually suggested when several appear together and persist over weeks rather than days.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          This pattern shares certain features with the broader Yin Deficient constitution, yet it has a distinct emphasis on the mind and sleep. Where Kidney Yin Deficiency tends to show up as lower body dryness and heat, Heart Yin Deficiency centers on a restless, overactive mind that refuses to settle at night. The table below outlines the most common signs, what they may feel like day to day, and how Chinese medicine explains each one.
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
                <td className="px-3 py-2 font-medium text-text">Insomnia (trouble falling asleep)</td>
                <td className="px-3 py-2">Lying awake an hour or more, mind racing, before sleep finally arrives</td>
                <td className="px-3 py-2">Empty heat disturbs the Shen, so the mind cannot settle into rest</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Palpitations</td>
                <td className="px-3 py-2">A racing, fluttering, or skipped-beat sensation in the chest</td>
                <td className="px-3 py-2">The Heart lacks the cooling Yin needed to steady its rhythm</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Anxiety and restlessness</td>
                <td className="px-3 py-2">A constant background of worry, jumpiness, or feeling on edge</td>
                <td className="px-3 py-2">A disturbed Shen creates an unsettled, restless mental state</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Vivid or disturbing dreams</td>
                <td className="px-3 py-2">Intense dreams most nights, waking unrefreshed, sometimes in a sweat</td>
                <td className="px-3 py-2">An unanchored Shen wanders during sleep instead of resting quietly</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Night sweats</td>
                <td className="px-3 py-2">Waking damp, especially across the chest and neck</td>
                <td className="px-3 py-2">Yin is too weak to hold fluids in once the body is at rest</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Red or flushed face (cheeks)</td>
                <td className="px-3 py-2">A pink or red flush, most visible on the cheekbones</td>
                <td className="px-3 py-2">Empty heat rises to the face, where it shows as redness</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Poor memory and mental fatigue</td>
                <td className="px-3 py-2">Foggy thinking, forgetfulness, and trouble concentrating</td>
                <td className="px-3 py-2">The mind lacks the steady nourishment that Heart Blood and Yin provide</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Difficulty falling asleep and racing thoughts at night are two of the most distinctive signs. If either sounds familiar, you may want to read more about <Link href="/symptoms/why-cant-i-fall-asleep" className="text-accent hover:underline">why you can&apos;t fall asleep</Link>, <Link href="/symptoms/why-do-i-feel-anxious" className="text-accent hover:underline">why you feel anxious</Link>, and <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-accent hover:underline">why you might wake at 3 AM</Link>. To see whether Heart Yin Deficiency matches your overall constitution, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Heart Yin Deficiency?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Heart Yin does not run low in a single day. It usually fades slowly through a combination of mental strain, hormonal change, and inherited tendency. The causes below are among the most common, and most people who develop this pattern can recognize more than one at work in their history.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Stress and Overthinking</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the Heart is closely tied to thought and emotion. Prolonged mental strain, constant worry, and endless overthinking draw directly on Heart Blood and Heart Yin. The modern rhythm of screens, deadlines, late-night work, and constant stimulation is particularly draining to this reserve. Each hour of late-night screen time or unresolved worry borrows a little more from the Heart&apos;s cooling account. Over months and years, the account runs dry, and the empty heat begins to rise and disturb the mind at exactly the hour it should be resting.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Aging and Hormonal Changes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Menopause is one of the most common triggers for Heart Yin Deficiency. As estrogen declines, the body&apos;s cooling and moistening reserves fall with it, and the classic signs of empty heat appear: hot flashes, night sweats, palpitations, and insomnia. The same hormonal shift that depletes Kidney Yin often depletes Heart Yin alongside it. The pattern can appear earlier in women with heavy menstrual cycles, after prolonged stress, or during perimenopause, when hormonal levels begin their gradual descent.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with a naturally smaller reserve of Heart Yin. As children they may have slept poorly, startled easily at sudden sounds, and struggled with vivid dreams or nightmares. This inborn tendency corresponds to the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link> in the nine-constitution framework. If you have always tilted toward heat, dryness, and a sensitive, restless mind, your constitution may be a factor worth exploring, since it sets the baseline from which stress and aging draw down over time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Heart Yin Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy offers one of the most accessible ways to support Heart Yin. The guiding principle is to choose foods that are cooling, calming, and gently nourishing to the mind, while avoiding anything that stokes more heat. Many of these foods have been used for generations in sweet soups and congees meant to settle the spirit and ease sleep. The foods below are traditional choices for this pattern. As with all food therapy, consistency matters more than quantity. Small amounts eaten regularly tend to work better than occasional large doses, and evening is often the most helpful time to enjoy them.
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
                <td className="px-3 py-2 font-medium text-text">Lotus seed (lian zi)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Simmered in sweet soup or congee with red dates</td>
                <td className="px-3 py-2">Calms the Heart and settles the Shen for deeper sleep</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lily bulb (bai he)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Added to congee, sweet soup, or lightly stir-fried</td>
                <td className="px-3 py-2">Directly nourishes Heart Yin and clears mild empty heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Wheat (floating wheat)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cooked into porridge or steeped as a light tea</td>
                <td className="px-3 py-2">Nourishes the Heart and calms the Shen; classic for night sweats</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Red date / jujube (hong zao)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Simmered in tea, congee, or soup</td>
                <td className="px-3 py-2">Nourishes Heart Blood, which supports the resting mind</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Longan fruit (gui yuan)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Eaten dried, or brewed in tea or sweet soup</td>
                <td className="px-3 py-2">Tonifies Heart Blood and calms the spirit</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries (gou qi zi)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">A small handful in tea, congee, or water</td>
                <td className="px-3 py-2">Gently nourishes Yin and Blood that support the Heart</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mulberry (sang shen)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten fresh or dried as a snack</td>
                <td className="px-3 py-2">Moistens Yin and helps clear mild heat</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Oyster</td>
                <td className="px-3 py-2">Cool, salty</td>
                <td className="px-3 py-2">Steamed or cooked in a light soup</td>
                <td className="px-3 py-2">Clears heat and may help anchor rising empty fire</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Bone marrow soup</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Slow-simmered with gentle root vegetables</td>
                <td className="px-3 py-2">Deeply nourishing and moistening to the cooling reserves</td>
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
          Because Heart Yin Deficiency is a pattern of excess heat and insufficient cooling moisture, the foods below may worsen the imbalance. They tend to add warmth, dry the body, or push an already tired system harder than it can sustain. Limiting them can help the calming foods do their work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee and caffeinated drinks.</strong> Caffeine stimulates Heart fire and stirs the Shen, making sleep and rest harder to reach.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered heating and damp-forming in Chinese medicine; regular drinking may deepen Yin depletion and trigger night sweats.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods.</strong> Chili, hot peppers, and heavy curry add direct heat and may intensify palpitations and flushing.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Chocolate in excess.</strong> It contains caffeine and is regarded as warming; large amounts may overstimulate the Heart.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Lamb and venison.</strong> These are among the most warming meats and may add to internal heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Fried and roasted foods.</strong> Frying and roasting concentrate heat and dryness, which works against the cooling goal.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Calm the Heart and Mind
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but the way you spend your evenings matters just as much for Heart Yin. Because this pattern centers on an overactive mind, the habits that help most are the ones that teach the nervous system to wind down. None of these require special equipment, only consistency practiced night after night.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Establish a screen-free wind-down routine.</strong> Put away phones, tablets, and bright screens for at least 60 minutes before bed so the Shen can begin to settle.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat dinner early and light.</strong> A heavy meal late at night generates heat during digestion exactly when the body should be cooling down for sleep.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Practice meditation or gentle breathing before sleep.</strong> Slow, soft breathing signals the nervous system to shift from activity to rest.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Avoid intense emotional conversations late at night.</strong> Difficult discussions stir the Heart and can keep the Shen awake long after the talk ends.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Get moderate exercise during the day.</strong> Movement earlier in the day supports circulation and sleep, but intense evening workouts may stoke Heart fire.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Keep the bedroom cool.</strong> A cooler room helps counter the empty heat that rises at night and makes falling asleep easier.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Try a warm foot soak before bed.</strong> A traditional remedy believed to draw excess heat down and away from the head, which may help quiet the mind.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Heart Yin Deficiency overlap with several medical conditions, including generalized anxiety disorder, cardiac arrhythmias, hyperthyroidism, menopausal symptoms, and primary sleep disorders. If your palpitations, insomnia, or anxiety are severe, persistent, getting worse, or accompanied by chest pain, fainting, or unexplained weight loss, please see a qualified healthcare professional for a proper evaluation. Chinese medicine food therapy and lifestyle adjustments may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
