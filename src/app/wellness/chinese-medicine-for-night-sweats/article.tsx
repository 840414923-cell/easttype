import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForNightSweatsArticle() {
  const slug = "chinese-medicine-for-night-sweats"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Night Sweats</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Night Sweats: Causes &amp; Cooling Foods
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Night sweats in Chinese medicine usually point to Yin Deficiency with empty heat. The body&apos;s cooling reserve runs too low to keep warmth settled at night. As you sleep, that unanchored heat rises and breaks out as sweat. This is different from sweating during the day or from a hot room. Cooling and moistening foods such as black sesame, mulberry, and floating wheat may help rebuild the cooling reserve over time. If this sounds familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you check the pattern.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Night Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, night belongs to Yin. The body is meant to be cool, still, and inward during the hours of darkness. Fluids settle, the mind rests, and the warming force of the body quiets down. For this to happen smoothly, there must be enough Yin to anchor the warmth in place. Yin is the cooling, moistening, resting side of the body&apos;s balance. When it is sufficient, heat stays low and contained through the night.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When Yin becomes deficient, the warming force, known as Yang, loses its partner and its anchor. Instead of staying settled, Yang drifts upward and outward. During the day, activity keeps the system moving and the heat may not be noticeable. At night, when the body is still, that loose heat collects and presses outward. It breaks through the surface as sweat, often soaking the chest, back, or neck. Because the source is a shortage of cooling rather than a true fever, the sweat can come without a high temperature. This empty heat pattern is the most common Chinese medicine explanation for night sweats that have no obvious outside cause.
        </p>
        <p className="text-text2 leading-relaxed">
          This is distinct from daytime sweating. Sweating that comes with exertion or during meals may be associated with Qi Deficiency, where the body cannot hold fluids inside its boundaries. The timing, the amount, and the sensations that travel with the sweat help a practitioner tell the patterns apart. Sweating that arrives mainly after sleep, with warmth in the palms and soles and a dry mouth in the morning, leans toward Yin Deficiency. Sweating that appears through the day with tiredness and a pale face leans toward Qi Deficiency. You can read more in our guide on <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Patterns Behind Night Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Not every case of night sweating follows the same shape. Chinese medicine sorts these sweats by the organ system involved and by the company they keep. Paying attention to what else shows up with the sweat, the time it arrives, and the way the body feels before and after can point to the right direction. The table below maps the most common patterns. It is common for two of them to overlap, especially during perimenopause or during long periods of stress.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Sweat Characteristics</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart and Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Drenching sweat around chest and back</td>
                <td className="px-3 py-2">Palpitations, insomnia, vivid dreams</td>
                <td className="px-3 py-2">Nourish Heart and Kidney Yin</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Sweat with hot palms and soles</td>
                <td className="px-3 py-2">Lower back ache, dizziness, dry mouth</td>
                <td className="px-3 py-2">Nourish Kidney Yin</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Yin Deficiency with Fire</td>
                <td className="px-3 py-2">Sweat with intense heat sensation</td>
                <td className="px-3 py-2">Irritability, red face, dry throat</td>
                <td className="px-3 py-2">Clear heat and nourish Yin</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Qi Deficiency</td>
                <td className="px-3 py-2">Mild sweating day and night</td>
                <td className="px-3 py-2">Fatigue, pale face, shortness of breath</td>
                <td className="px-3 py-2">Tonify Qi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These patterns are starting points rather than fixed labels. If the heat-related signs above sound familiar, the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link> guide explains the constitution most often tied to this issue. For the related daytime symptom, read about <Link href="/symptoms/why-do-i-have-night-sweats" className="text-accent hover:underline">why night sweats happen</Link>. You can also learn about the related Heart pattern in our guide on <Link href="/wellness/heart-yin-deficiency" className="text-accent hover:underline">Heart Yin Deficiency</Link>, and about the close cousin of this symptom in <Link href="/wellness/chinese-medicine-for-hot-flashes" className="text-accent hover:underline">Chinese medicine for hot flashes</Link>. Our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see which pattern fits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes or Worsens Night Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several common habits and life stages can deepen the imbalance behind night sweats. Knowing them can lower how often the sweats arrive and how strong they feel. The four below come up most often in practice.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Spicy and Heating Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Chili, curry, lamb, and large amounts of ginger or cinnamon are strongly warming. When the cooling reserve is already thin, these foods can add fuel to the empty heat. A heavy spicy dinner is a frequent trigger for sweating in the middle of the night. Small amounts of warming spice may be fine for some people, but generous portions tend to push an already warm system past its limit.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Overwork</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Long working hours, poor sleep, and constant mental strain are said to consume Yin. The cooling reserve drains faster than it can rebuild. People who push hard for years without adequate rest often notice the sweats arrive in their thirties or forties. Building in real recovery time may help slow the loss.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Menopause and Aging</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Yin naturally thins with age, and the years around midlife tend to accelerate that decline. This is why night sweats and hot flashes cluster during perimenopause and the years after. The pattern is a normal shift for many people, though the severity varies widely.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with a thinner cooling reserve. They tend to run warm, have a dry mouth, and sweat more easily at night even when young. This is one of the body type tendencies described in Chinese medicine, and it explains why the same diet and lifestyle can affect people very differently.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods That May Help Night Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is one of the most accessible tools for working with night sweats. The principle is to choose foods that are cool or neutral in nature, moistening, and gentle on the system, while stepping back from anything that adds warmth. These foods have been used for generations to help rebuild the cooling reserve and reduce sweating at night. Regular small portions across the week tend to work better than a single large serving. It may take several weeks of steady use before the difference becomes clear, so patience matters. Choose two or three that fit your taste and include them often.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Floating wheat</td>
                <td className="px-3 py-2">Calms sweating and anchors heat; classic food for night sweats</td>
                <td className="px-3 py-2">Simmered into a light tea or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Nourishes Kidney Yin and moistens dryness</td>
                <td className="px-3 py-2">Ground into porridge or sprinkled on rice</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mulberry</td>
                <td className="px-3 py-2">Cools heat and nourishes Yin and Blood</td>
                <td className="px-3 py-2">Eaten fresh or dried as a snack</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus seed</td>
                <td className="px-3 py-2">Strengthens the Spleen and calms the mind</td>
                <td className="px-3 py-2">Cooked into congee or sweet soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lily bulb</td>
                <td className="px-3 py-2">Moistens the lungs and clears empty heat</td>
                <td className="px-3 py-2">Simmered with lotus seed in a sweet soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cooling and moistening; eases dryness</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">One of the strongest cooling foods; clears heat</td>
                <td className="px-3 py-2">Cooked as a thin soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Gently nourishes Yin and supports the Spleen and Kidney</td>
                <td className="px-3 py-2">Steamed, boiled in soup, or added to congee</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Nourishes Liver and Kidney Yin and Blood</td>
                <td className="px-3 py-2">Soaked in warm water or added to tea and congee</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Because night sweats and hot flashes often travel together, the same cooling foods may ease both. Pick a few that match your taste and your worst moments, then use them through the week rather than all at once.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because night sweats reflect too little cooling and too much loose heat, the items below may deepen the imbalance by adding warmth, drying fluids, or keeping the system running hot through the night.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot peppers, and heavy curries are strongly heating and may intensify night sweats.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered heating and drying in Chinese medicine; evening drinking is a frequent trigger for drenching sweats.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ginger in excess.</strong> Small amounts may aid digestion, but large doses are warming and may add to internal heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cinnamon and lamb.</strong> These are among the most warming foods and may worsen empty heat when used often.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee.</strong> Caffeine is stimulating and drying and may disturb the rest that the body needs to rebuild Yin.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Late heavy dinners.</strong> A large, rich meal forces digestion to run hot through the night and may set the stage for sweating.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits to Reduce Night Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits carry equal weight. The practices below focus on protecting sleep, keeping the body cool, and reducing the strain that slowly wears down the cooling reserve.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Sleep before 11 PM.</strong> The hours before midnight are seen as the most restorative for Yin. Going to bed early may help the cooling reserve rebuild night after night.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Keep the bedroom cool.</strong> A lower room temperature and light, breathable bedding may reduce drenching sweats and the broken sleep they cause.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid exercise within three hours of bed.</strong> Hard training late in the evening raises internal heat right when the body is trying to cool down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Manage stress through the day.</strong> Held-in tension may feed heat, so walking, breathing, or quiet rest before bed can ease the load.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Eat dinner early and light.</strong> Finishing the evening meal by 7 PM gives the system time to cool before sleep.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Stay hydrated with room-temperature water.</strong> Sip steadily rather than gulping ice water, which can shock a system already running dry.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Try a warm foot soak before bed.</strong> A short, warm soak may draw heat downward and away from the chest and head, easing night sweats.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Night sweats can also relate to conditions that need medical care. Infections such as tuberculosis, lymphoma and other cancers, an overactive thyroid, and certain medication side effects can all cause heavy sweating at night. Persistent drenching sweats, weight loss, fever, or sweats that disrupt sleep on a regular basis warrant evaluation by a qualified healthcare professional. Chinese medicine food therapy may complement conventional care, but it should never replace diagnosis or treatment from a licensed medical provider.
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
