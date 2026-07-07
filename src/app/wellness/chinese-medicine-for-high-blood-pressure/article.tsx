import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForHighBloodPressureArticle() {
  const slug = "chinese-medicine-for-high-blood-pressure"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for High Blood Pressure</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for High Blood Pressure: Liver Yang, Kidney Yin, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">11 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine does not have a word for hypertension, but it has treated the symptoms behind it for centuries: dizziness, headaches, flushed face, ringing in the ears, and chest tightness. The most common pattern is Liver Yang Rising, where stress and frustration push energy and blood upward toward the head. A second pattern is Kidney Yin Deficiency, where the cooling, grounding energy of the body wears thin with age or overwork and cannot anchor the rising Yang. A third involves phlegm and dampness accumulating from a weak digestion, which thickens the blood and slows its flow. Foods that cool the Liver, nourish Kidney Yin, and clear dampness may help support healthy blood pressure alongside medical care. This pattern can be associated with the <Link href="/types/damp_heat" className="text-accent hover:underline">Damp Heat body type</Link> or the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link>, and you can check your overall constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Blood Pressure
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Western medicine defines high blood pressure by numbers: a systolic reading above 130 or a diastolic above 80. Chinese medicine asks a different question. Instead of measuring pressure, it looks at how energy moves through the body. In a healthy state, energy ascends and descends in balanced rhythms. The Liver sends energy upward to support vision, planning, and decision-making. The Kidneys send cooling energy downward to anchor that rise. When this rhythm stays balanced, the head stays clear and the body feels calm.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          High blood pressure in TCM is most often a sign that this rhythm has broken down. Yang energy rises too strongly or Yin energy is too weak to hold it down, and the result is a surge of heat and pressure toward the head. This is why so many hypertension symptoms involve the upper body: headaches at the temples, red face, ringing in the ears, bloodshot eyes, and a feeling of pressure behind the eyes. The Liver is the organ most directly involved, which connects blood pressure to emotional stress, anger, and frustration. You can read more about this organ system in our guide on <Link href="/wellness/liver-fire" className="text-accent hover:underline">Liver Fire</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          It is worth stressing that Chinese medicine does not replace medication for diagnosed hypertension. Untreated high blood pressure can be associated with stroke, heart attack, and kidney damage. The foods and habits described here may complement, but should never substitute for, treatment prescribed by a qualified healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Three Main Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with elevated blood pressure fall into one of three patterns. Each produces a different profile of symptoms and responds to a different food direction. Identifying the right pattern matters because a food that calms one pattern may worsen another.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What Happens</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Liver Yang Rising</td>
                <td className="px-3 py-2">Headache at temples, red face, irritability, dizziness, ringing in ears</td>
                <td className="px-3 py-2">Stress and frustration push Liver energy and blood upward</td>
                <td className="px-3 py-2">Cool the Liver; calm and soothe energy flow</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Dry mouth, night sweats, lower back weakness, poor sleep, hot palms</td>
                <td className="px-3 py-2">Cooling Kidney energy is too low to anchor the rising Yang</td>
                <td className="px-3 py-2">Nourish Kidney Yin with moistening, cooling foods</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Phlegm and Blood Stasis</td>
                <td className="px-3 py-2">Heaviness in body, chest tightness, obesity, numbness, oily face</td>
                <td className="px-3 py-2">Weak digestion creates damp phlegm that thickens blood flow</td>
                <td className="px-3 py-2">Transform phlegm; move blood circulation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If several of these signs sound familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see which pattern fits your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Triggers Each Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Understanding the trigger helps you choose the right food direction. The same blood pressure reading can come from completely different root causes in TCM.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Liver Yang Rising</h3>
        <p className="text-text2 leading-relaxed mb-4">
          This pattern is the most common in middle-aged adults with demanding jobs and high stress. Chronic frustration, suppressed anger, and deadline pressure tighten the Liver energy until it pushes upward. People with this pattern often notice their blood pressure spikes during arguments or stressful meetings and settles on weekends. The face flushes easily, the temper runs short, and tension headaches cluster at the temples or behind the eyes. This pattern overlaps with <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Kidney Yin Deficiency</h3>
        <p className="text-text2 leading-relaxed mb-4">
          This pattern develops more slowly, often appearing after age 50 or in people who have overworked for years. Kidney Yin is the cooling, moistening reserve that anchors energy downward. When it runs low, Yang rises unchecked. People with this pattern may have blood pressure that stays elevated rather than spiking, along with dry mouth at night, lower back weakness, poor sleep, and a feeling of heat in the palms and soles. This connects to the <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link> pattern.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Phlegm and Blood Stasis</h3>
        <p className="text-text2 leading-relaxed">
          This pattern often accompanies obesity, high cholesterol, or metabolic syndrome. A weak Spleen cannot properly process fats and fluids, producing damp phlegm that thickens and slows the blood. People with this pattern feel heavy, sluggish, and may experience numbness or chest tightness. The face tends to look oily rather than red. Learn more in our guide on <Link href="/patterns/heavy-and-sluggish" className="text-accent hover:underline">Phlegm Damp patterns</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help by Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because high blood pressure has different root causes in TCM, the food direction depends on the pattern. The table below maps the most helpful foods to each pattern so you can choose based on your own signs.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Best For Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Liver Yang Rising</td>
                <td className="px-3 py-2">Fresh juice or stir-fried daily</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum tea</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Liver Yang Rising</td>
                <td className="px-3 py-2">Steep dried flowers in hot water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Liver Yang Rising</td>
                <td className="px-3 py-2">Cooked as thin soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Ground into powder, added to congee</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mulberry</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Eaten fresh or dried as snack</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sea cucumber (holothuria)</td>
                <td className="px-3 py-2">Warm, salty</td>
                <td className="px-3 py-2">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Cooked in nourishing soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Hawthorn (shan zha)</td>
                <td className="px-3 py-2">Warm, sour, sweet</td>
                <td className="px-3 py-2">Phlegm and Blood Stasis</td>
                <td className="px-3 py-2">Simmered as tea or in soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">White radish</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Phlegm and Blood Stasis</td>
                <td className="px-3 py-2">Cooked in soup or juiced</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Coix seed (yi yi ren)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Phlegm and Blood Stasis</td>
                <td className="px-3 py-2">Cooked in congee or soup</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Several of these foods overlap with <Link href="/herbs/shan-zha-shan-zha" className="text-accent hover:underline">Hawthorn (shan zha)</Link> and <Link href="/herbs/chrysanthemum-ju-hua" className="text-accent hover:underline">Chrysanthemum (ju hua)</Link>, which have long TCM histories for circulation and Liver heat.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Herbs That May Support Healthy Pressure
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM practice, several herbs are traditionally combined in formulas for blood pressure support. These should be used under professional guidance, but understanding them helps you see how TCM approaches the problem. The table below highlights the most relevant single herbs from the TCM pharmacopeia.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Herb</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Action</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text"><Link href="/herbs/tian-ma-tian-ma" className="text-accent hover:underline">Tian Ma (Gastrodia)</Link></td>
                <td className="px-3 py-2">Calms Liver Wind; relieves dizziness and headaches</td>
                <td className="px-3 py-2">Liver Yang Rising</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text"><Link href="/herbs/du-zhong-du-zhong" className="text-accent hover:underline">Du Zhong (Eucommia Bark)</Link></td>
                <td className="px-3 py-2">Tonifies Kidney Yang and Yin; supports lower back</td>
                <td className="px-3 py-2">Kidney Yin/Yang Deficiency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text"><Link href="/herbs/jue-ming-zi-jue-ming-zi" className="text-accent hover:underline">Jue Ming Zi (Cassia Seed)</Link></td>
                <td className="px-3 py-2">Clears Liver Heat; supports vision and bowel movement</td>
                <td className="px-3 py-2">Liver Yang Rising</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text"><Link href="/herbs/xia-ku-cao-xia-ku-cao" className="text-accent hover:underline">Xia Ku Cao (Prunella)</Link></td>
                <td className="px-3 py-2">Clears Liver Fire; reduces nodules and swelling</td>
                <td className="px-3 py-2">Liver Yang Rising</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text"><Link href="/herbs/szechwan-lovage-chuan-xiong" className="text-accent hover:underline">Chuan Xiong (Szechwan Lovage)</Link></td>
                <td className="px-3 py-2">Moves blood circulation; relieves pain</td>
                <td className="px-3 py-2">Phlegm and Blood Stasis</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These herbs are rarely used alone. A qualified TCM practitioner combines them in formulas tailored to your specific pattern. Never self-prescribe herbs for diagnosed hypertension.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit or Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because high blood pressure in TCM often involves too much heat rising and not enough cooling to anchor it, certain foods may worsen the imbalance by adding heat, drying Yin, or thickening phlegm.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excess salt.</strong> In TCM, salt is cold and can injure Kidney function when overused. It also retains fluids, which increases pressure.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Heating and damp-forming. Regular drinking adds fuel to Liver fire and worsens both Liver Yang Rising and Phlegm patterns.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy and fried foods.</strong> Chili, heavy curries, and deep-fried dishes generate internal heat that feeds the upward surge.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee in excess.</strong> Strong coffee stimulates the Liver and can raise tension and heart rate. Switch to chrysanthemum or <Link href="/herbs/jue-ming-zi-jue-ming-zi" className="text-accent hover:underline">cassia seed tea</Link> as a gentler alternative.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Fatty meats and processed foods.</strong> These create damp phlegm that thickens the blood and slows circulation.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Smoking.</strong> Tobacco introduces heat and toxins into the blood, contributing to blood stasis over time.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM, daily routines shape the internal landscape as much as food does. For blood pressure, the focus is on calming the Liver, anchoring energy, and keeping the body in a steady rhythm.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Walk daily for 30 minutes.</strong> Gentle movement moves Liver Qi and prevents stagnation. Brisk but not exhausting is ideal.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Sleep before 11 PM.</strong> In the TCM body clock, Liver time begins at 1 AM. Being asleep before then lets the Liver restore its blood and cool its fire.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Express emotions, do not suppress them.</strong> Held-in frustration tightens Liver energy. Talking, journaling, or physical movement may help release it.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice slow breathing.</strong> Ten minutes of slow, deep breathing activates the body&apos;s calming system and may reduce the tension that drives blood pressure up.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Reduce screen time before bed.</strong> Blue light and constant information feed Liver fire. Reading or stretching before bed cools the system.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Drink chrysanthemum or celery seed tea.</strong> These cooling teas gently clear Liver heat without the stimulation of caffeine.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Massage the feet and lower legs.</strong> In TCM, drawing energy downward helps anchor rising Yang. A warm foot soak before bed may also help.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Acupressure Points for Blood Pressure
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several acupressure points have a long history of use for calming the Liver and easing the symptoms associated with high blood pressure. These points can be stimulated at home with gentle finger pressure for 1-2 minutes each.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Point</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Location</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Action</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Tai Chong (LR3)</td>
                <td className="px-3 py-2">Top of the foot, between the big toe and second toe</td>
                <td className="px-3 py-2">Calms Liver Yang; relieves stress and headaches</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">He Gu (LI4)</td>
                <td className="px-3 py-2">Web between the thumb and index finger</td>
                <td className="px-3 py-2">Moves Qi; relieves head and face tension</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Yong Quan (KD1)</td>
                <td className="px-3 py-2">Sole of the foot, upper third at the center</td>
                <td className="px-3 py-2">Draws energy downward; anchors rising Yang</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Avoid pressing LI4 (He Gu) during pregnancy. If any point feels painful, reduce pressure or stop.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          High blood pressure is a serious medical condition. If you have been diagnosed with hypertension, or if your readings are consistently above 130/80, work with a qualified healthcare provider. TCM food therapy and acupressure may complement medical treatment but should never replace prescribed medication. Seek immediate medical attention if you experience severe headache, chest pain, vision changes, numbness on one side, difficulty speaking, or sudden dizziness. These can be signs of a hypertensive crisis. For ongoing management, monitor your blood pressure regularly and keep your doctor informed about any herbs or supplements you are considering.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(201,169,110,0.03)] border border-[rgba(201,169,110,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns, especially for conditions involving blood pressure.
        </p>
      </div>
    </main>
  )
}
