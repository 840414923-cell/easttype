import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function LungQiDeficiencyArticle() {
  const slug = "lung-qi-deficiency"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Lung Qi Deficiency</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Lung Qi Deficiency in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Lung Qi governs breathing and protects the body&apos;s surface from external pathogens through Wei Qi, the defensive energy that circulates just beneath the skin. When Lung Qi is weak, you may catch colds easily, feel short of breath, have a weak or low voice, and sweat with minimal effort. This pattern overlaps with the Qi Deficient body type and can be associated with frequent respiratory complaints. Foods like pears, lily bulb, white fungus, and Chinese yam may help support Lung function over time when paired with warm, cooked meals and steady rest.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is the Lung in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Western medicine, the lungs are the pair of organs responsible for gas exchange, taking in oxygen and releasing carbon dioxide. In Chinese medicine, the Lung (肺, fei) carries a much wider meaning. It is described as the minister who manages Qi and sets the body&apos;s rhythm. The Lung governs breathing, and it also controls the body&apos;s surface, meaning the skin, the pores, and the layer of defensive energy called Wei Qi that guards against colds, flus, and other external pathogens.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When someone seems to catch every bug that goes around the office, weak Wei Qi is often part of the picture. The Lung also regulates the water pathways, keeping fluids moving downward and preventing them from settling in the wrong places. The Lung opens into the nose, which is why nasal congestion, sinus pressure, and a reduced sense of smell often link back to this organ in TCM thinking. The skin is sometimes called the third lung because it mirrors the health of the Lung&apos;s defensive function.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Beyond these physical roles, the Lung is tied to a specific emotion. Grief and sadness are the emotions most closely associated with the Lung. Periods of mourning, chronic sorrow, or long-held loss may affect Lung energy, just as strong Lung function helps a person process and release grief. Understanding the Lung this way helps explain why a TCM practitioner asks about your emotional life and your skin alongside your breathing. To go deeper on the core concept, read about <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Lung Qi Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Lung Qi Deficiency tend to cluster around breathing, immunity, and the body&apos;s surface. You may not notice all of these at once. Even three or four consistent signs may suggest this pattern. Many of these signs appear subtly at first and slowly become your normal over months or years.
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
                <td className="px-3 py-2 font-medium text-text">Frequent colds</td>
                <td className="px-3 py-2">More than three or four colds per year, slow to clear</td>
                <td className="px-3 py-2">Weak Wei Qi cannot block external pathogens</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Shortness of breath</td>
                <td className="px-3 py-2">Breathless on stairs or during light exertion</td>
                <td className="px-3 py-2">Lung lacks the Qi to drive full breathing</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Weak or low voice</td>
                <td className="px-3 py-2">Voice trails off, hard to project or speak up</td>
                <td className="px-3 py-2">Qi is too low to push sound with force</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Spontaneous sweating</td>
                <td className="px-3 py-2">Sweating with little or no exertion</td>
                <td className="px-3 py-2">Lung cannot hold the pores closed</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pale complexion</td>
                <td className="px-3 py-2">Face looks washed out, lacking color</td>
                <td className="px-3 py-2">Too little Qi to fill and brighten the face</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Reluctance to speak</td>
                <td className="px-3 py-2">Talking feels tiring, prefer to stay quiet</td>
                <td className="px-3 py-2">Speech consumes Qi the body is short on</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Allergic rhinitis or stuffy nose</td>
                <td className="px-3 py-2">Chronic congestion, sneezing, or runny nose</td>
                <td className="px-3 py-2">Lung opens into the nose and reflects its state</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If several of these sound familiar, Lung Qi Deficiency may be worth exploring. You might start with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> to see whether the Qi Deficient pattern matches your overall constitution. If catching every cold is your main worry, our guide on <Link href="/symptoms/why-do-i-get-sick-so-often" className="text-accent hover:underline">why you may get sick so often</Link> covers the immunity side in more detail.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Lung Qi Deficiency?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine groups the causes of Lung Qi Deficiency into a few main categories. Most people have a blend of more than one, and the pattern often builds slowly over years rather than appearing overnight.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Respiratory Issues</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Repeated respiratory infections, a lingering chronic cough, asthma, or allergies that never fully resolve can wear down Lung Qi over time. Each illness draws on the Lung&apos;s reserves, and when recovery is incomplete, the system starts the next cold from a lower baseline. Over months and years, this slow drain may leave the Lung running below capacity. If a cough that never goes away is part of your story, see our page on <Link href="/symptoms/why-do-i-have-a-chronic-cough" className="text-accent hover:underline">why you may have a chronic cough</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Grief and Emotional Drain</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM theory, grief is the emotion that most directly affects the Lung. Prolonged sadness, the loss of someone close, or grief that gets pushed down rather than processed may weaken Lung energy over time. This connection is not just poetic. Many people notice shallow breathing, chest tightness, or a heavier cold season during periods of mourning or emotional strain. Because the emotions and the body share the same energy budget, unprocessed grief may quietly tax the Lung. Anxiety that lives in the chest can follow a similar path, and our article on <Link href="/symptoms/why-do-i-feel-anxious" className="text-accent hover:underline">why you may feel anxious</Link> explores that relationship.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Weakness</h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with a naturally lower Lung reserve. This may show up early as frequent chest infections or asthma in childhood, a weak voice from a young age, or low stamina compared with peers. If you were the child who always had a winter cough or who struggled with cardio in school, your constitutional makeup might include a thinner Lung foundation. This tendency lines up with the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link> in the nine-type system, where low energy and easy sweating are central traits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Lung Qi Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for the Lung focuses on moistening, gently strengthening, and avoiding extremes of temperature. The Lung is a delicate organ in TCM thinking, sensitive to dryness and to cold. Warm, cooked, mildly sweet and neutral foods tend to suit it best. Hydration matters too, since the Lung likes to stay moist. These foods are traditional choices and may help support Lung function when eaten regularly as part of balanced meals.
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
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cooling, moistening</td>
                <td className="px-3 py-2">Steamed with honey, or in soup</td>
                <td className="px-3 py-2">Moistens the Lung and eases dry cough</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lily bulb (bai he)</td>
                <td className="px-3 py-2">Slightly cool, sweet</td>
                <td className="px-3 py-2">Simmered in congee or soup</td>
                <td className="px-3 py-2">Supports the Lung and calms the mind</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">White fungus (yin er)</td>
                <td className="px-3 py-2">Neutral, moistening</td>
                <td className="px-3 py-2">Sweet soup with rock sugar</td>
                <td className="px-3 py-2">Hydrates Lung, supports skin and pores</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Soups, stews, or steamed</td>
                <td className="px-3 py-2">Strengthens Lung and Spleen Qi together</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Honey</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Stirred into warm water</td>
                <td className="px-3 py-2">Moistens Lung, soothes dry throat</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sweet almond</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">In congee or mild tea</td>
                <td className="px-3 py-2">Moistens Lung, helps calm a cough</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Soups or stir-fried</td>
                <td className="px-3 py-2">Clears heat, supports Lung fluids</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries (wolfberries)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">In tea, congee, or soup</td>
                <td className="px-3 py-2">Gentle tonic for Lung and Liver</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Rice congee</td>
                <td className="px-3 py-2">Warm, neutral</td>
                <td className="px-3 py-2">Slow-cooked porridge</td>
                <td className="px-3 py-2">Easy to absorb, builds baseline Qi</td>
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
          For someone with Lung Qi Deficiency, the following foods may worsen symptoms by cooling the system, drying the Lung, or generating phlegm that the weak Lung then struggles to clear:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks.</strong> Cold temperatures may contract and weaken the Lung. Drink warm or room-temperature water instead, especially during cold seasons.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw cold foods in winter.</strong> Raw salads and chilled dishes force the body to spend energy warming them. Lightly cook vegetables during colder months.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive dairy.</strong> Milk, cheese, and cream are considered phlegm-forming in Chinese medicine and may increase congestion and mucus.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Greasy, oily foods are heavy to process and tend to create dampness and phlegm that burden the Lung.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much sugar.</strong> Concentrated sweets may weaken the Spleen, and since the Spleen supports the Lung, this can indirectly lower Lung Qi.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods.</strong> Heavy chili and pepper may scatter Qi and dry the Lung, which already dislikes dryness. Keep spice moderate.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Support Lung Health
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only one part of the picture. The Lung responds well to rhythm, warmth, and gentle movement. These daily habits may help restore Lung Qi over weeks and months:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Practice deep breathing daily.</strong> Slow abdominal breathing for five to ten minutes a day may strengthen Lung Qi. Breathe so that your belly rises on the inhale and falls on the exhale, keeping each breath long and smooth.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Protect your neck and upper chest.</strong> In TCM, wind and cold enter through the back of the neck. Wear a scarf in windy or cold weather to guard the area where Lung energy circulates.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Get moderate cardio exercise.</strong> Brisk walking, light jogging, or swimming at an easy pace trains the Lung without exhausting it. Stop before you feel completely winded.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Avoid smoke of all kinds.</strong> Smoking and secondhand smoke directly damage the Lung. Reducing exposure is one of the most meaningful steps you can take for Lung Qi.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Process grief rather than suppressing it.</strong> Since grief lives in the Lung, allowing yourself to feel and move through loss may protect Lung energy over the long term.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Eat warm, cooked foods.</strong> Soups, stews, and congee spare the Lung and Spleen from the extra work of heating cold food, leaving more energy for repair.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Humidify indoor air in winter.</strong> Dry heated air irritates the Lung. A humidifier or a bowl of water near a radiator may keep the air moist and the Lung comfortable.</span></li>
        </ol>
        <p className="text-text2 text-sm leading-relaxed mt-4">
          Building Lung Qi is a gradual process. If you are unsure where to start, the <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can point you to the foods and habits that best fit your constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Lung Qi Deficiency can overlap with several medical conditions, including asthma, chronic obstructive pulmonary disease, chronic bronchitis, immunodeficiency, and anemia. If your shortness of breath is sudden, severe, or worsening, if you cough up blood, or if you experience chest pain, please see a healthcare professional right away. Chinese medicine food therapy may complement but should never replace professional medical care for serious respiratory conditions.
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
