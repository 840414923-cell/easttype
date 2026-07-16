import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForPcosArticle() {
  const slug = "chinese-medicine-for-pcos"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for PCOS</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for PCOS: Dampness, Phlegm & Hormonal Balance
      </h1>
      <p className="text-text2 text-sm mb-6">11 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, PCOS is most often associated with a <Link href="/types/phlegm_damp" className="text-accent hover:underline">Phlegm Dampness pattern</Link>. The Spleen, which is responsible for metabolizing fluids, is too weak to keep up, and the unprocessed fluids settle as sticky deposits that may affect the reproductive system. The signs that show up most often are irregular or absent periods, weight that is hard to lose, acne along the jawline, and excess facial or body hair. Kidney and Liver patterns are usually involved as well, since the Kidney governs reproduction and the Liver keeps energy moving. Foods that drain dampness, such as adzuki beans and coix seed, along with foods that move Qi, such as celery and mint, may help support the body alongside medical treatment. TCM does not replace endocrinology care, but it may offer a useful complementary lens.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views PCOS
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Traditional Chinese medicine (TCM) does not use the term PCOS, which is a Western diagnostic category built around hormone panels, ovarian imaging, and clinical criteria. Instead, TCM reads the same symptom cluster in its own language. Irregular or delayed cycles, multiple small cysts, stubborn weight, oily skin, and acne together map closely onto a picture of Phlegm Dampness obstructing the lower body, often combined with Kidney deficiency and Liver Qi stagnation.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The mechanism usually starts with the Spleen. When Spleen Qi is weak, the body cannot fully process food and fluids into usable energy and clear waste. The leftover moisture turns into dampness, and dampness that sits long enough thickens into phlegm. Because dampness is heavy, it tends to sink and collect in the lower abdomen and pelvic region, which is exactly where the ovaries and uterus sit. This collection of sticky matter is one way TCM describes the cysts and cycle disruption that Western medicine labels PCOS.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Kidney enters the picture because it governs reproduction, growth, and the timing of the menstrual cycle in TCM theory. When Kidney Essence is low, cycles may run late or scanty, and ovulation may become unpredictable. The Liver contributes through its role in keeping Qi and blood moving smoothly. Stress, frustration, and emotional tension can tighten the Liver&apos;s flow, which then shows up as breast tenderness, mood swings, and cycle irregularity.
        </p>
        <p className="text-text2 leading-relaxed">
          It helps to be clear about what this framework is and is not. TCM is not a replacement for endocrinology or gynecology, and PCOS is a real metabolic and hormonal condition with long-term health implications. The Chinese medicine lens is complementary. It offers a way to think about why your body responds the way it does, and which foods and habits may gently support it alongside medical care. For a broader look at the most common dampness pattern, our <Link href="/wellness/spleen-dampness" className="text-accent hover:underline">Spleen Dampness guide</Link> covers the underlying mechanism in detail.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          PCOS Patterns in Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with PCOS do not fit a single tidy pattern. Real cases tend to blend two or three of the patterns below, with one usually dominant. Knowing which pattern leads your picture can help you choose foods and daily habits that work with your body instead of against it. The four patterns below cover the great majority of PCOS presentations in TCM practice.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Explanation</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Dampness</td>
                <td className="px-3 py-2">Weight gain, heavy sticky feeling, irregular periods, thick tongue coating</td>
                <td className="px-3 py-2">Weak digestion produces dampness that settles in the lower body</td>
                <td className="px-3 py-2">Drain dampness, strengthen the Spleen</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Kidney Deficiency</td>
                <td className="px-3 py-2">Late or scanty periods, low back ache, scanty flow, fatigue</td>
                <td className="px-3 py-2">The Kidney governs reproduction; weak Essence disrupts cycle timing</td>
                <td className="px-3 py-2">Support and back up the Kidney</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Liver Qi Stagnation</td>
                <td className="px-3 py-2">Breast tenderness, mood swings, jawline acne, sighing</td>
                <td className="px-3 py-2">Stress tightens the Liver&apos;s flow of Qi and blood</td>
                <td className="px-3 py-2">Move and soothe Liver Qi</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Damp-Heat</td>
                <td className="px-3 py-2">Inflamed acne, oily skin, heavy or early periods, thirst</td>
                <td className="px-3 py-2">Long-standing dampness combines with internal heat</td>
                <td className="px-3 py-2">Clear heat and drain dampness</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you are not sure which pattern matches you, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> takes about five minutes and places your signs within the nine-type system, which may help point you toward your dominant pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Contributes to PCOS in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          PCOS rarely has a single cause in the TCM view. Three organ systems usually work together to produce the pattern, and addressing any one of them may ease the load on the others. The sections below describe the three most common contributors. If you want to see how your own signs line up with the nine-type system, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> takes about five minutes.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Spleen Weakness and Dampness</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen is the digestive engine in TCM, and it is the organ most responsible for keeping fluids moving through the body. When it is strong, it separates the useful part of what you eat and drink from the waste, and the waste leaves cleanly. When it is weak, some of that fluid stalls and turns into dampness, which then thickens toward phlegm. Irregular eating habits, cold foods, heavy sweets, and worry or overthinking can all weaken the Spleen over time. The dampness it produces is heavy and tends to settle in the lower body, where it may obstruct the cycle.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Kidney Foundation</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Kidney stores Essence in TCM theory, and Essence is the deep reserve that governs growth, reproduction, and the timing of the menstrual cycle. If Kidney Essence is low, cycles may come late, run scanty, or skip months entirely, which is a familiar pattern in PCOS. Constitutional factors play a role here, as does long-term exhaustion. Strengthening the Kidney foundation with supportive foods and adequate rest may help steady cycle timing over the long run, though this is a gradual process measured in months rather than days.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Liver and Emotional Health</h3>
        <p className="text-text2 leading-relaxed">
          The Liver keeps Qi and blood flowing smoothly, and it has a direct role in regulating the menstrual cycle. Stress, frustration, and prolonged emotional tension can tighten that flow, producing what TCM calls Liver Qi Stagnation. This often shows up as premenstrual breast tenderness, mood swings, and acne that flares with stress. Protecting the Liver&apos;s flow through movement, rest, and stress management is one reason why daily habits matter as much as food in this pattern. Our <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation guide</Link> goes deeper on this relationship.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Support Hormonal Balance
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the everyday tool TCM uses for dampness-related patterns, and it works best when matched to your leading pattern. The general direction is to favor warm, cooked foods that drain dampness or move Qi, and to reduce the cold, sweet, and greasy items that add to the load. The foods below have a long history of use for this purpose. None of them are quick fixes, and none will regulate cycles on their own, but used regularly over weeks they may help the body handle fluids and energy more smoothly. If irregular cycles are a main concern, our guide on <Link href="/symptoms/why-is-my-period-irregular" className="text-accent hover:underline">why your period is irregular</Link> connects the dots with related patterns.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Adzuki beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Drain dampness, support fluid metabolism</td>
                <td className="px-3 py-2">Boiled into soups, teas, or sweet soups</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Coix seed (Job&apos;s tears)</td>
                <td className="px-3 py-2">Cool, bland</td>
                <td className="px-3 py-2">Drains dampness while strengthening the Spleen</td>
                <td className="px-3 py-2">Cooked into porridge or soups</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourish the Kidney, support the reproductive foundation</td>
                <td className="px-3 py-2">Slow-cooked in stews or porridge</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Supports both the Kidney and Spleen</td>
                <td className="px-3 py-2">Steamed, boiled, or added to porridge</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clear heat, may ease damp-heat acne</td>
                <td className="px-3 py-2">Simmered as soup, especially in warm weather</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Cool, pungent</td>
                <td className="px-3 py-2">Moves Qi, drains dampness</td>
                <td className="px-3 py-2">Lightly cooked in stir-fries or soups</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus seed</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Calms the mind, supports the Kidney and Spleen</td>
                <td className="px-3 py-2">Cooked into porridge or sweet soups</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Barley tea</td>
                <td className="px-3 py-2">Cool, bland</td>
                <td className="px-3 py-2">Drains dampness, gentle on digestion</td>
                <td className="px-3 py-2">Roasted grain steeped in hot water</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Winter melon</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Promotes fluid metabolism</td>
                <td className="px-3 py-2">Simmered in light soups</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If acne is one of your main concerns, the guide on <Link href="/symptoms/why-do-i-keep-breaking-out" className="text-accent hover:underline">why you keep breaking out</Link> links stubborn acne to several patterns, including damp-heat.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Some foods add dampness, heat, or cold to a system that is already struggling to process them. Limiting these may make the helpful foods above far more effective. You do not need to cut them out entirely, but reducing how often and how much you have may matter more than any single healthy food you add.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy products.</strong> Milk, cheese, cream, and ice cream are seen as the most damp-forming category in TCM, which is a central concern for a Phlegm Dampness picture.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar and sweets.</strong> Concentrated sugar burdens the Spleen and may feed the damp-heat that worsens acne.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold drinks and ice water.</strong> Cold weakens the Spleen&apos;s ability to process fluids and slows the circulation that would otherwise clear dampness.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried and greasy foods.</strong> Heavy and slow to break down, these may generate phlegm and add heat at the same time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw foods and salads.</strong> Raw items require extra Spleen energy to warm and process, which is energy a weak Spleen may not have.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered strongly damp-forming and warming in TCM theory, especially sweet liquors and beer.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Foods work best alongside habits that keep the system warm and moving. The daily practices below may support a dampness-prone constitution over time. None are drastic, but applied consistently they can shift how the body handles fluids, energy, and stress.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Exercise daily enough to sweat.</strong> Dampness leaves the body partly through sweat, so regular movement that warms you up may be one of the most direct tools for a Phlegm Dampness picture.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat warm, cooked meals at regular times.</strong> Warm food supports the Spleen, and a steady eating rhythm gives digestion less work to do.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid cold drinks.</strong> Warm or room-temperature water keeps the Spleen functioning, while ice water tends to slow it down.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Manage stress.</strong> Stress tightens the Liver&apos;s flow of Qi, which may show up as cycle disruption and premenstrual tension.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Get enough sleep, ideally before 11 PM.</strong> In TCM theory, 11 PM to 3 AM is when the Liver and Gallbladder rest and recover, which supports overall hormonal balance.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Try gentle abdominal massage.</strong> Light circular massage over the lower abdomen may encourage local circulation and is a traditional self-care practice.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Track your cycle.</strong> Noting flow, timing, and symptoms helps you see your own patterns, which can support both your doctor and any complementary care.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          PCOS is a hormonal and metabolic condition that requires proper medical diagnosis and ongoing management. It can be associated with a higher risk of type 2 diabetes, cardiovascular concerns, and fertility challenges, which is why working with an endocrinologist or gynecologist matters. Chinese medicine food therapy may complement that care, but it does not replace it. If your cycles are consistently irregular, if you are struggling to conceive, or if lifestyle changes are not helping, please consult a healthcare professional.
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
