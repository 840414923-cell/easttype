import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChineseMedicineForAcneArticle() {
  const slug = "chinese-medicine-for-acne"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Acne</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Acne: How Internal Heat and Dampness May Affect Your Skin
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In traditional Chinese medicine, acne is often viewed as a sign of internal Heat and Damp-Heat rising to the face. The skin is seen as a mirror of what is happening inside the body, not as an isolated problem on the surface. Red, inflamed, and cystic breakouts may signal Damp-Heat, where sticky warmth becomes trapped and pushes outward through the skin. Greasy, slow-to-clear blemishes may involve Phlegm Damp. Hormonal acne along the jaw line may relate to Kidney and Liver patterns that shift with the menstrual cycle. Rather than focusing only on the surface, this approach looks at the internal environment that may be creating the breakout. Cooling foods such as mung beans, green tea, and cucumber may help address the root from within. You can see whether this fits your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Acne
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Traditional Chinese medicine sees the skin as a mirror of internal organ health. The Lungs govern the skin and body hair, and they open outward onto the surface. The Stomach and Large Intestine affect the face because their channels travel across the cheeks, around the mouth, and along the jaw. Heat, by its nature, tends to rise upward toward the head and face. This upward movement is one reason breakouts so often appear above the shoulders rather than lower on the body.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Unlike topical treatments that target the surface, Chinese medicine focuses on the internal environment that may be producing the inflammation in the first place. A pimple is read as the visible tip of a deeper pattern. When the body holds excess Heat, Dampness, or a combination of the two, that burden can be associated with eruptions on the face, chest, and back. Several organ systems often play a role at once. The Lungs open into the skin, so external warmth or a dry environment may first show up on the forehead and nose. The Stomach and intestines process what you eat, and when that processing overheats, the result may travel along the facial channels. The Liver keeps energy moving smoothly, and when frustration and stress block that flow, Liver Fire can flare upward into the face.
        </p>
        <p className="text-text2 leading-relaxed">
          It helps to keep this perspective in context. Chinese medicine food therapy and lifestyle adjustments may complement modern dermatology, which offers powerful tools for severe and scarring acne. The two approaches often work well together, since one looks at the internal pattern and the other at the surface and at infection control. Neither is meant to replace the other. If you are already working with a dermatologist, dietary changes can be layered in as supportive care rather than a substitute.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Acne Patterns in Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine rarely treats every breakout the same way. Instead, it sorts acne into patterns based on how the blemishes look, where they appear, and which other signs travel with them. The pattern is the internal story behind the breakout, and identifying it helps guide which foods and habits may be most useful. A single person can show a mix of patterns, and the dominant one may shift with the seasons, stress levels, or hormonal changes.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The four patterns below cover most of the acne seen in clinical practice. Lung Heat often appears in younger skin and on the upper face. Stomach Heat tends to track with digestion, breaking out around the mouth and chin. Damp-Heat is the pattern most people associate with oily, inflamed, pus-filled acne, and it is the one most closely linked to a damp and warm constitution. Blood Heat tends to produce darker, slower-healing lesions and a feeling of internal restlessness.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Acne Appearance</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Approach</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lung Heat</td>
                <td className="px-3 py-2">Red acne on the forehead and nose, often small and near the surface</td>
                <td className="px-3 py-2">Thirst, dry mouth, dry throat, possible sore throat</td>
                <td className="px-3 py-2">Clear Heat from the Lung and cool the skin</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Stomach Heat</td>
                <td className="px-3 py-2">Cystic acne around the mouth and chin, deep and inflamed</td>
                <td className="px-3 py-2">Bad breath, constipation, strong appetite, red gums</td>
                <td className="px-3 py-2">Clear Stomach fire and cool the digestive tract</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Damp-Heat</td>
                <td className="px-3 py-2">Inflamed, pus-filled acne on an oily and shiny base</td>
                <td className="px-3 py-2">Sticky or greasy stools, a heavy feeling, yellow tongue coating</td>
                <td className="px-3 py-2">Drain dampness and clear heat at once</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Blood Heat</td>
                <td className="px-3 py-2">Dark red, slow-healing acne that leaves marks</td>
                <td className="px-3 py-2">Irritability, restlessness, fast pulse, dark urine</td>
                <td className="px-3 py-2">Cool the Blood and reduce inflammation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Reading your own pattern takes some patience, since several signs usually need to appear together before a pattern is suggested. If most of your signs point in one direction, the matching food and lifestyle adjustments may be the most natural place to start. To see how your overall constitution lines up with these patterns, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Triggers Acne in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most acne triggers in Chinese medicine come down to adding Heat, adding Dampness, or blocking the smooth flow of energy so that Heat cannot vent properly. The factors below tend to work together rather than in isolation, which is one reason breakouts often follow a stressful week that also included several heavy meals.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Hot and Greasy Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Spicy dishes, fried food, barbecue, lamb, and alcohol are all warming or damp-forming in Chinese medicine terms. Eaten regularly, they add Heat and Dampness to the system, and that warmth naturally rises toward the face. Heavy, oily cooking concentrates heat during preparation, which may be one reason breakouts tend to follow a stretch of rich meals. A few lighter, cooler meals can give the system room to settle.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Emotional Stress</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Suppressed anger, frustration, and irritability can generate Liver Fire. When the Liver&apos;s energy cannot flow freely, it pushes upward, and the resulting heat may show up as acne on the sides of the face and along the jaw. Stress-driven breakouts often ease when the underlying tension is addressed through movement, rest, or breathing. You can read more in our guide on <Link href="/wellness/liver-fire" className="text-accent hover:underline">Liver Fire</Link>.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Hormonal Fluctuations</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Menstrual cycles and stretches of sustained stress affect the Liver and Kidney systems. In Chinese medicine, the jaw line and chin map closely to these organs, which may help explain why hormonal acne so often appears there in the days before a period. Tracking your breakouts alongside your cycle can make these links easier to see and can help you time your cooling foods and extra rest.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people simply run warmer and damper than others, and this baseline matters a great deal. The <Link href="/types/damp_heat" className="text-accent hover:underline">Damp Heat body type</Link> is the constitution most prone to acne, since it already carries the sticky warmth that breakouts feed on. Knowing your type can help you choose foods and habits that work with your nature rather than against it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods That May Help Acne
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the most direct everyday way to cool the internal environment that may be feeding breakouts. The guiding idea is simple: choose foods that are cool or cold in nature, lightly prepared, and easy to clear, while steering around anything that adds more Heat or Dampness. Steaming, light boiling, and serving foods at room temperature preserve the cooling effect, whereas deep-frying and heavy roasting push heat back in.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The foods below have a long history of use for clearing Heat and draining Dampness. Small regular portions tend to work better than occasional large ones, and they are most helpful when paired with the habits described later in this article. For breakouts, these foods aim at the root rather than the surface, which is why patience matters. If oily skin is part of the picture, you might also read <Link href="/symptoms/why-is-my-face-so-oily" className="text-accent hover:underline">why your face may be so oily</Link>.
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
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Clears heat and drains dampness; a staple for inflamed breakouts</td>
                <td className="px-3 py-2">Cooked as a thin soup or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Green tea</td>
                <td className="px-3 py-2">Cool, bitter and sweet</td>
                <td className="px-3 py-2">Clears heat; offers antioxidant support that may calm redness</td>
                <td className="px-3 py-2">Brewed light and drunk warm</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cucumber</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cooling and hydrating; eases the warmth that rises to the face</td>
                <td className="px-3 py-2">Eaten raw or lightly salted</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cools Lung heat and supports body fluids</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears heat and supports fluid balance</td>
                <td className="px-3 py-2">Sliced into soups or stir-fried briefly</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bitter gourd</td>
                <td className="px-3 py-2">Cold, bitter</td>
                <td className="px-3 py-2">Clears heat and drains dampness through its downward action</td>
                <td className="px-3 py-2">Blanched or stir-fried</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Winter melon</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Drains dampness and encourages fluids to pass through</td>
                <td className="px-3 py-2">Simmered in a light soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Peppermint tea</td>
                <td className="px-3 py-2">Cool, aromatic</td>
                <td className="px-3 py-2">Moves Qi and vents heat; may ease stress-linked breakouts</td>
                <td className="px-3 py-2">Steeped as a light tea</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Radish / daikon</td>
                <td className="px-3 py-2">Cool, pungent and sweet</td>
                <td className="px-3 py-2">Clears heat and aids digestion, easing Stomach fire</td>
                <td className="px-3 py-2">Cooked in soups or grated raw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Worsen Acne
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because acne is so often a pattern of too much Heat and Dampness, the foods below may worsen breakouts by adding fuel to exactly those forces. Cutting back for a few weeks can give the cooling foods room to work. You do not need to remove all of them forever, but reducing them during a flare-up may be one of the simplest changes you can make. If your breakouts keep returning despite good skincare, it may help to look at <Link href="/symptoms/why-do-i-keep-breaking-out" className="text-accent hover:underline">why you keep breaking out</Link>.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot pepper, and heavy curry are strongly heating and may intensify redness and inflammation.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Fried and greasy foods.</strong> Frying concentrates heat during cooking and adds damp-forming oils that the skin may struggle to clear.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive dairy.</strong> Considered damp-forming in Chinese medicine; it may thicken secretions and contribute to clogged pores.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar.</strong> Feeds damp-heat and may slow the healing of blemishes that are already present.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Generates heat and dampness, and regular drinking may prolong flare-ups.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Chocolate and excessive coffee.</strong> Stimulating and heating in TCM terms; they may push the system harder than it can clear.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Clearer Skin
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits shape how much Heat and Dampness the body has to clear in the first place. The habits below focus on steadiness, sleep, and giving the internal organs predictable conditions to work with. None of them require special products, only consistency. For related digestive patterns that often travel with acne, see our article on <Link href="/wellness/stomach-heat" className="text-accent hover:underline">Stomach Heat</Link>.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Drink warm water through the day.</strong> Warm water supports digestion and the steady movement of fluids. Ice-cold drinks can slow this process and are best kept to small amounts.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Keep your hands off your face.</strong> Touching and picking transfer heat and bacteria inward and can turn a small blemish into an inflamed, slow-healing one.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Be asleep before 11 PM.</strong> Chinese medicine associates the late evening with the Liver&apos;s resting and clearing window. Regular late nights may allow Liver Fire to build.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Move a little every day.</strong> Gentle, daily movement keeps energy flowing so that Heat can vent rather than accumulate as stress-driven breakouts.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Favor cooling foods in summer.</strong> In hot weather, the body handles cucumber, pear, and mung bean soup well, which can help offset seasonal warmth.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Keep pores clear.</strong> Avoid heavy, pore-blocking makeup during a flare-up, and cleanse gently rather than scrubbing the skin.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Stay regular.</strong> Constipation lets Stomach Heat build and rise toward the face, so keeping digestion moving may ease breakouts around the mouth and chin.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Dermatologist
        </h2>
        <p className="text-text2 leading-relaxed">
          Chinese medicine food therapy may complement, but should not replace, professional care for severe acne. Cystic, nodular, or scarring breakouts can cause lasting skin changes and may need medical treatment, including prescription options that go beyond what diet and lifestyle can do. If your acne is painful, widespread, leaving scars, or not responding to over-the-counter products after several weeks, please consult a licensed dermatologist. The internal approach described here works best as a steady background layer, while a dermatologist can address the surface, infection, and any risk of permanent scarring directly.
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
