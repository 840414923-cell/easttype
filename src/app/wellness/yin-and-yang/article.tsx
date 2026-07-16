import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function YinAndYangArticle() {
  const slug = "yin-and-yang"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Yin and Yang</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Yin and Yang in Chinese Medicine: Balance, Foods &amp; Body Types
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read · The original idea behind 3,000 years of Chinese wellness practice</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Yin and Yang is the most fundamental concept in Chinese medicine. Yin is cooling, moistening, calming, and resting. Yang is warming, activating, moving, and energizing. Health is the dynamic balance between them. When Yin is low, you may run hot and dry. When Yang is low, you may run cold and tired. Understanding your own Yin-Yang balance may help you choose the right foods and daily habits that fit your body. You can get a quick read on your pattern with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          The two small dots inside the classic circular symbol carry an idea that has shaped Chinese medicine, philosophy, and cooking for more than two thousand years. It is a simple pairing, but it does a lot of work. This guide explains what Yin and Yang actually mean, how they show up in your body, and how you might use them to make better everyday choices about food, rest, and movement.
        </p>
        <p className="text-text2 leading-relaxed">
          You do not need to study classical texts to use the idea. Most of it maps onto things you already notice: whether you feel hot or cold, wired or tired, dried out or comfortably moist. Those everyday signals are exactly what Yin and Yang describe.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Are Yin and Yang?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The familiar circle you have likely seen is called the taijitu. Inside it, a dark half and a light half curl around each other, and each half holds a small seed of the opposite color. That shape is the whole lesson in one image: nothing is purely one thing, and every quality carries a trace of its opposite within it.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Yin and Yang are complementary opposites. Yin is associated with night, cold, water, stillness, inward movement, and the feminine. Yang is associated with day, heat, fire, movement, outward direction, and the masculine. These pairings are descriptions of qualities, not fixed labels. A single object can be Yin in one comparison and Yang in another. Water, for instance, is Yang relative to ice but Yin relative to steam.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Neither Yin nor Yang is good or bad on its own. They need each other. A day needs night, a fire needs water nearby to keep from burning out of control, and rest needs activity to feel meaningful. The goal is never to maximize one and erase the other. The goal is balance.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A helpful metaphor is a pot of water on a fire. The water in the pot is Yin: cool, heavy, and still. The fire underneath is Yang: hot, light, and active. If the fire is too strong, the water boils away and the pot scorches. If the water is too much or the fire too weak, nothing ever gets warm. The right temperature comes only from the right relationship between the two.
        </p>
        <p className="text-text2 leading-relaxed">
          This is exactly how Chinese medicine thinks about the body. The body has a fire side and a water side, a warming engine and a cooling system, and most symptoms can be understood as one side pulling ahead of the other. To see how Yin and Yang connect to the body&apos;s vital energy, read our guide to <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what qi is</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Yin and Yang in Your Body
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, every part of you can be read along the Yin-Yang axis. Temperature, energy level, moisture, sleep cycles, the direction things move, and even which organs feel most stressed all reflect the balance between these two forces.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When the two are well matched, you wake warm but not overheated, you have energy during the day and rest deeply at night, and your skin and digestion stay comfortably moist. When one side drifts low, the body sends clear signals. A shortage of Yin tends to show up as too much heat and dryness, because there may not be enough cooling, moistening power to hold the warming side in check. A shortage of Yang tends to show up as cold and fatigue, because there may not be enough driving warmth to keep the engine running.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The table below maps the main qualities and how each side tends to feel when it runs low.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Aspect</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Yin Quality</th>
                <th className="text-left py-2 text-text font-medium">Yang Quality</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Temperature</td><td className="py-2 pr-3 text-text2">Cool</td><td className="py-2 text-text2">Warm</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Energy</td><td className="py-2 pr-3 text-text2">Resting</td><td className="py-2 text-text2">Active</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Moisture</td><td className="py-2 pr-3 text-text2">Moist</td><td className="py-2 text-text2">Dry</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Sleep</td><td className="py-2 pr-3 text-text2">Night</td><td className="py-2 text-text2">Day</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Direction</td><td className="py-2 pr-3 text-text2">Inward</td><td className="py-2 text-text2">Outward</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Organs</td><td className="py-2 pr-3 text-text2">Kidney, Liver, Spleen Yin</td><td className="py-2 text-text2">Heart, Stomach, Kidney Yang</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Common imbalance</td><td className="py-2 pr-3 text-text2">Yin Deficiency: hot, dry</td><td className="py-2 text-text2">Yang Deficiency: cold, tired</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          These are tendencies rather than hard rules. Your own balance may shift with the seasons, your stress load, and your stage of life, and a single reading is rarely the whole story.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs of Yin Deficiency vs Yang Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people do not have a perfectly even split. They lean one way or the other, and the lean tends to show up as a recognizable cluster of symptoms. Reading the cluster is often easier than reading any single symptom on its own.
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Yin Deficiency Signs</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              When Yin runs low, the body&apos;s cooling and moistening reserves thin out, and a kind of internal heat may fill the gap. You might notice night sweats, hot flashes that peak in the late afternoon or evening, a dry mouth or throat, difficulty staying asleep, and a restless, irritable edge to your mood. The face can flush easily, and the palms and soles may feel warm.
            </p>
            <p className="text-text2 text-sm leading-relaxed">
              These signs can be associated with chronic overwork, aging, and the hormonal shifts of menopause. For a deeper look, read our guide to <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Yang Deficiency Signs</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              When Yang runs low, the body&apos;s warming and activating power slows down. You may feel cold most of the time, especially in the hands, feet, and lower back, and you might tire easily even after light activity. The complexion can look pale, urination may become frequent and clear, and there is often a dull ache in the lower back or knees.
            </p>
            <p className="text-text2 text-sm leading-relaxed">
              These signs can be associated with chronic cold exposure, a long diet of raw and cold foods, and simply running on empty for too long. For more detail, see our guide to <Link href="/wellness/kidney-yang-deficiency" className="text-accent hover:underline">Kidney Yang Deficiency</Link>.
            </p>
          </div>
        </div>

        <p className="text-text2 leading-relaxed mt-4">
          If you are not sure which side you lean toward, the <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link> may help you identify your pattern and the foods that tend to suit it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Yin Foods and Yang Foods
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese dietary therapy sorts foods by the warming or cooling effect they tend to have once digested, not by their temperature on the plate. A baked lamb dish is still Yang even when served lukewarm, and watermelon is still Yin even at room temperature. The general rule is simple: if you run hot and dry, lean toward Yin foods; if you run cold and tired, lean toward Yang foods.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          No single food will fix a long-standing imbalance, but small steady shifts in your regular meals can be associated with gradual change over weeks and months.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Yin Foods (cooling)</th>
                <th className="text-left py-2 text-text font-medium">Yang Foods (warming)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Watermelon</td><td className="py-2 text-text2">Lamb</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Pear</td><td className="py-2 text-text2">Ginger</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Mung beans</td><td className="py-2 text-text2">Cinnamon</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Cucumber</td><td className="py-2 text-text2">Walnuts</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Lotus root</td><td className="py-2 text-text2">Leeks</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Tofu</td><td className="py-2 text-text2">Chestnuts</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Mulberry</td><td className="py-2 text-text2">Shrimp</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 text-text2">Mint tea</td><td className="py-2 text-text2">Fennel</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          For a longer list of cooling choices, see our guide to <Link href="/wellness/cooling-foods-chinese-medicine" className="text-accent hover:underline">cooling foods in Chinese medicine</Link>, and for warming options see <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">foods that warm your body</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Balance Yin and Yang Daily
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need a complicated routine. A few steady habits, applied most days, may help keep the two sides in a workable relationship.
        </p>
        <ol className="space-y-2 text-text2 leading-relaxed mb-4 pl-5 list-decimal">
          <li>Match food to the season. Lean toward cooling, Yin foods in summer and warming, Yang foods in winter.</li>
          <li>Match food to your own body. If you tend to run hot, build in more Yin foods; if you tend to run cold, build in more Yang foods.</li>
          <li>Rest when you are tired. Sleep and stillness are Yin activities, and skipping them slowly drains Yin over time.</li>
          <li>Move when you feel sluggish. Gentle, regular movement is a Yang activity that lifts a slow engine without burning it out.</li>
          <li>Try to sleep before 11 PM. Chinese medicine links late evening to the time the body rebuilds its Yin reserves.</li>
          <li>Avoid extremes of either direction. Too much cold, raw food may weaken Yang over time, and too much spicy food and alcohol may wear down Yin.</li>
          <li>Notice your own pattern and adjust. Small, steady corrections tend to work better than sudden overhauls.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Feeling too hot or too cold is often a matter of constitution and habit. Still, extreme or persistent heat or cold can sometimes point to a medical condition such as a thyroid disorder, a hormonal imbalance, or an infection. If your symptoms are intense, getting worse, or come with weight loss, fever, or fainting, please see a licensed healthcare provider. Chinese medicine ideas may support, but should never replace, professional medical care.
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"Medical Disclaimer"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is based on traditional Chinese philosophy and is provided for informational purposes only. It is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for medical concerns."}
        </p>
      </section>
    </main>
  )
}
