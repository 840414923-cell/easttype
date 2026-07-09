import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function BloodDeficiencyArticle() {
  const slug = "blood-deficiency"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Blood Deficiency</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Blood Deficiency in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, Blood (血) is more than just the red liquid in your veins. It is the nourishing substance that moisturizes the body, grounds the mind, and supports every organ. When Blood is deficient, you may feel dizzy, pale, dry, and ungrounded. Common signs include pale lips and complexion, brittle nails, dry hair and skin, dizziness (especially when standing up quickly), numbness or tingling in the limbs, difficulty falling asleep, and poor memory. Blood-building foods like red dates, goji berries, black sesame, and bone broth may help restore reserves over time. To see whether Blood Deficiency matches your overall constitution, take our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Blood in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, Blood is produced by the Spleen from the essence of food and drink, stored by the Liver, and circulated throughout the body by the Heart. These three organs work as a team. The Spleen acts as the factory, turning what you eat into raw Blood. The Liver serves as the warehouse, holding reserves and releasing them when needed. The Heart functions as the engine, pumping Blood to every tissue.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Blood does far more than carry oxygen. It nourishes muscles, skin, and hair, giving them color, strength, and suppleness. It also anchors the mind, which TCM calls the Shen. When Blood is sufficient, the mind feels settled and sleep tends to be deep and undisturbed. When Blood is deficient, the mind has nothing to hold onto, so it wanders. This can appear as anxiety, repetitive overthinking, restless sleep, or vivid dreams that leave you tired the next day.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The TCM concept of Blood overlaps with, yet is broader than, the Western idea. It covers the oxygen-carrying role that a blood test measures, plus the nourishing and grounding functions that lab work does not capture. Two people can have normal iron panels, yet one may still show clear signs of Blood Deficiency because the functional, moisturizing quality of Blood runs low. This is why Chinese medicine and Western testing often complement each other rather than compete. Because Qi drives Blood and Blood nourishes Qi, the two are inseparable, a relationship explored in our guide to <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is in Chinese medicine</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          Women are more prone to Blood Deficiency than men. Each menstrual cycle draws on Blood reserves, and heavy periods can slowly deplete the balance over years. Pregnancy, childbirth, and breastfeeding place further demands on those reserves. This is one reason fatigue, paleness, and poor sleep may show up more often in women, particularly during the reproductive years and around menopause.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Blood Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Blood Deficiency tends to reveal itself through a cluster of signs involving color, moisture, sensation, and the mind. You may not notice all of them. Even three or four consistent signs may point to this pattern. These signs often develop slowly, so they can feel like your normal baseline rather than something wrong.
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
                <td className="px-3 py-2 font-medium text-text">Pale lips, face, and nail beds</td>
                <td className="px-3 py-2">Face and lips look washed out; nail beds stay pale when pressed</td>
                <td className="px-3 py-2">Blood does not reach the surface with enough color</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Dizziness or lightheadedness</td>
                <td className="px-3 py-2">Head spins or vision darkens, especially standing up fast</td>
                <td className="px-3 py-2">Not enough Blood rises to nourish the brain</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dry skin, dry hair, or brittle nails</td>
                <td className="px-3 py-2">Skin flakes, hair loses its shine, nails split easily</td>
                <td className="px-3 py-2">Blood fails to moisturize the tissues</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Numbness or tingling in hands and feet</td>
                <td className="px-3 py-2">Pins and needles, often worse at night</td>
                <td className="px-3 py-2">Blood does not nourish the peripheral nerves</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Difficulty falling asleep</td>
                <td className="px-3 py-2">Mind will not switch off; thoughts keep looping</td>
                <td className="px-3 py-2">Deficient Blood cannot anchor the mind (Shen)</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Poor memory or scattered thinking</td>
                <td className="px-3 py-2">Forget names, lose your train of thought, fuzzy focus</td>
                <td className="px-3 py-2">The brain lacks the nourishment Blood provides</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Muscle cramps or twitches</td>
                <td className="px-3 py-2">Cramps, often in the calves, especially at night</td>
                <td className="px-3 py-2">Liver Blood deficiency fails to soften the tendons</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed mb-2">
          Individual signs also have their own pages. If dizziness is your main concern, read about <Link href="/symptoms/why-do-i-feel-dizzy" className="text-accent hover:underline">why you may feel dizzy</Link>. For tingling limbs, see <Link href="/symptoms/why-do-my-hands-and-feet-go-numb" className="text-accent hover:underline">why your hands and feet may go numb</Link>, and for sleep trouble, <Link href="/symptoms/why-cant-i-fall-asleep" className="text-accent hover:underline">why you may not be able to fall asleep</Link>.
        </p>
        <p className="text-text2 text-sm leading-relaxed">
          If several of these signs sound familiar, Blood Deficiency may be worth exploring. Our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see how this pattern fits your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Blood Deficiency?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Blood Deficiency rarely has a single cause. It usually builds up from a combination of poor intake, weak processing, and steady loss.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Poor Diet and Weak Digestion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen makes Blood from food. If the diet lacks the building nutrients that Blood requires, or if the Spleen is too weak to absorb them, production falls. This pattern is common among people who eat irregularly, skip meals, or cut out entire food groups for long stretches. Because the Spleen thrives on warmth and regularity, a steady intake of cold, raw, or heavily processed food can quietly reduce how much nutrition your body actually extracts. The result is like under-fueling a factory: raw material comes in, but little usable product comes out. Digestive weakness is closely tied to <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link>, and the two patterns often appear together.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Blood Loss</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Losing blood directly lowers reserves. Heavy menstrual periods, childbirth, surgery, injuries, and bleeding ulcers can all contribute. Women who have heavy or prolonged periods are especially at risk, and the effect can accumulate cycle after cycle. Frequent blood donation can also play a role during periods when the body is already run down.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Overthinking</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM theory, the mind consumes Blood. Sustained mental work draws on the same reserves that nourish the body. Students facing exams, professionals who never mentally switch off, and anyone caught in repetitive worry gradually deplete Blood over months and years. The link runs both ways: overthinking can drain Blood, and deficient Blood can make the mind more restless, which feeds even more overthinking. Breaking that loop usually calls for rest, nourishing food, and attention to the Liver and Heart.
        </p>
        <p className="text-text2 leading-relaxed">
          Constitution plays a part too. Some people are born with a thinner nourishing reserve and run dry more easily, a tendency that overlaps with the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link> in the nine-constitution system.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Build Blood
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the first line of support in Chinese medicine for Blood Deficiency. The guiding idea is to eat warm, nourishing, protein-rich foods that are easy to absorb. Iron, B vitamins, and certain traditional tonics all play a role. Below are some of the foods most often recommended for building Blood. None is a quick fix; the benefit tends to come from regular inclusion over weeks and months.
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
                <td className="px-3 py-2 font-medium text-text">Red dates (jujube, da zao)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">3 to 5 in tea, congee, or soup</td>
                <td className="px-3 py-2">Classic Blood tonic; also supports the Spleen</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries (wolfberries)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Soaked in warm water or added to soup</td>
                <td className="px-3 py-2">Nourishes Liver Blood; supports the eyes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame seeds</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Toasted and sprinkled, or ground into paste</td>
                <td className="px-3 py-2">Builds Blood and moisturizes dryness</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bone broth / marrow soup</td>
                <td className="px-3 py-2">Warm, nourishing</td>
                <td className="px-3 py-2">Slow-simmered for several hours</td>
                <td className="px-3 py-2">Deeply nourishing and easy to absorb</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Dark leafy greens (spinach, nettle)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Lightly cooked, not raw</td>
                <td className="px-3 py-2">Rich in iron and chlorophyll</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Animal liver (chicken or beef)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Cooked thoroughly in small portions</td>
                <td className="px-3 py-2">Direct Blood builder, high in iron</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Longan fruit (gui yuan)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Dried in tea or a sweet dessert soup</td>
                <td className="px-3 py-2">Tonifies Heart Blood and calms the mind</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Cooked in soups or stews</td>
                <td className="px-3 py-2">Supports Kidney and Blood together</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Cherries</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Fresh in season, or cooked</td>
                <td className="px-3 py-2">Warms the middle and supports Blood</td>
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
          When you are working to build Blood, certain habits can get in the way by weakening digestion, drying fluids, or simply crowding out the nourishing foods your body needs:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice-cold drinks</strong> cool the Spleen and weaken its digestive fire, so fewer nutrients are extracted from your meals. Drink warm or room-temperature water instead.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw foods</strong> are hard for a weak Spleen to process, which reduces absorption of the iron and protein Blood requires.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very low-fat or very low-protein diets</strong> remove the raw materials Blood is made from. Building Blood needs adequate protein, iron, and healthy fats.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much coffee</strong> has a drying nature in TCM and may reduce fluids over time when consumed in large amounts.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol in excess</strong> taxes the Liver, the very organ responsible for storing Blood, and can slowly deplete reserves.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Overly restrictive or crash diets</strong> cut out the nutrients Blood depends on and can leave you paler and more tired than before.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Nourish Blood
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only part of the picture. Daily habits shape how well your body can build and hold onto Blood:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat protein at every meal.</strong> Blood depends on adequate protein, iron, and B vitamins. Aim for a consistent source at breakfast, lunch, and dinner rather than loading it all into one meal.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Include warm, iron-rich foods regularly.</strong> Soups made with bone broth, dark leafy greens, and small amounts of liver support steady production and are easy to absorb.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Get to bed before 11 PM.</strong> In the TCM body clock, the Liver stores and refreshes Blood during the night, so deep sleep during those hours matters more than total hours alone.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice gentle, non-exhausting exercise.</strong> Walking, stretching, and tai chi keep circulation moving without burning through the reserves you are trying to build.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Manage stress and reduce overthinking.</strong> Since the mind draws on Blood, mental rest is just as important as food. Short breaks, slow breathing, and time away from screens all help.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Avoid blood donation during recovery.</strong> If you already feel depleted, give your body time to rebuild reserves before donating again.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">For women, rest during your period.</strong> Track your cycle and treat menstruation as a time to slow down and nourish yourself rather than push through.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Blood Deficiency overlap with several medical conditions, including iron-deficiency anemia, vitamin B12 deficiency, thyroid disorders, peripheral neuropathy, and sleep disorders. If you feel dizzy, weak, numb, or short of breath, please get blood work done. Low iron, low ferritin, or abnormal blood counts need proper medical attention. Chinese medicine food therapy may complement professional care, but it should never replace diagnosis or treatment for a real medical condition. If your symptoms are severe, persistent, or getting worse, consult a qualified healthcare provider.
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
