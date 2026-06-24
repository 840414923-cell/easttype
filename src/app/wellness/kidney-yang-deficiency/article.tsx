import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function KidneyYangDeficiencyArticle() {
  const slug = "kidney-yang-deficiency"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Kidney Yang Deficiency</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Kidney Yang Deficiency in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">11 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Kidney Yang is the body&apos;s internal furnace, the warming spark that keeps metabolism moving and tissues properly heated. When Kidney Yang runs low, everything tends to slow down and run cold. Common signs may include feeling chilled, especially through the lower body and core, frequent clear urination that wakes you at night, a dull ache across the low back and knees, deep fatigue, a drop in libido, and loose stools that can appear first thing in the morning. This pattern overlaps heavily with the Yang Deficient body type. Warming foods such as lamb, walnuts, and cinnamon may help replenish the inner furnace over time. To see whether this matches your constitution, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Kidney Yang in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, the Kidney (肾, shèn) is considered the root of life. It stores essence (jing) and, within that storehouse, holds two complementary forces: Kidney Yin and Kidney Yang. Kidney Yin is the cooling, moistening, resting principle. Kidney Yang is its opposite, the warming, activating, moving force that powers nearly every function in the body. You can think of Kidney Yang as your metabolic thermostat, the spark that keeps digestion, circulation, and temperature regulation working as they should.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A useful image is a pot of water set over a small flame. Kidney Yang is that flame, and in classical texts it is often called the Ming Men fire, or Gate of Life fire. When the flame burns steadily, the water warms and circulates, the body feels comfortably warm, and energy is available for the day. When the flame grows weak, the water goes cold and still. Warmth stops reaching the hands and feet, fluids are no longer moved and processed properly, and the whole system may feel sluggish and heavy.
        </p>
        <p className="text-text2 leading-relaxed">
          This is quite different from the Western concept of the kidney. In Western medicine, the kidneys are two specific organs whose main job is filtering waste from the blood. The TCM Kidney is a far broader functional system that governs the lower back, the bones, the ears, the hair, reproduction, growth, and the gradual process of aging. When a Chinese medicine practitioner talks about warming the Kidney, they are not pointing at the two organs alone. They are describing an entire network of warming function. To see how this fits the wider picture of the body&apos;s vital energy, read our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi means in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Kidney Yang Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Kidney Yang Deficiency tend to share a single theme: cold combined with slowing and sinking. Where Kidney Yin Deficiency produces heat without a clear cause, Kidney Yang Deficiency produces cold that no amount of extra clothing seems to fix. The chill often concentrates in the lower body, in the low back, the knees, and the feet, because warmth is no longer being pushed downward and outward. At the same time, the body&apos;s ability to manage fluids weakens. Urine becomes frequent and pale, stools turn loose, and water may collect in the legs. You may recognize a few of these signs but not all of them. A pattern is usually suggested only when several appear together and persist over weeks or months.
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
                <td className="px-3 py-2 font-medium text-text">Feeling cold, lower body and core</td>
                <td className="px-3 py-2">A chill that lingers in the low back, knees, and feet even when wrapped up warmly</td>
                <td className="px-3 py-2">Kidney Yang no longer pushes warmth to the extremities and lower half</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Frequent night urination</td>
                <td className="px-3 py-2">Waking two or more times to pass large amounts of clear, pale urine</td>
                <td className="px-3 py-2">Weak Yang fails to process and hold fluids, so they drain overnight</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Low back ache and knee weakness</td>
                <td className="px-3 py-2">A dull, cold ache in the lower back and knees, worse after exertion or in cold</td>
                <td className="px-3 py-2">The Kidney governs the lower back and bones; depleted Yang weakens them</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chronic fatigue and desire to sleep</td>
                <td className="px-3 py-2">Heavy, dragging tiredness that does not lift fully after rest</td>
                <td className="px-3 py-2">Yang is the activating force; when it is low, the whole system runs slowly</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Low libido or sex drive</td>
                <td className="px-3 py-2">A drop in sexual interest or function, often paired with feeling generally cold</td>
                <td className="px-3 py-2">Kidney Yang fuels the warming, reproductive fire called Ming Men</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Loose stools, especially in the morning</td>
                <td className="px-3 py-2">Soft or watery bowel movements, often on waking or after a cold drink</td>
                <td className="px-3 py-2">The digestive fire depends on Kidney Yang; without it, food is undercooked</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Edema in the lower legs</td>
                <td className="px-3 py-2">Puffiness or ankle swelling that leaves a dent when pressed</td>
                <td className="px-3 py-2">Weak Yang cannot move fluids, so they pool in the lowest parts of the body</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Pale or swollen tongue</td>
                <td className="px-3 py-2">A tongue that looks pale, large, and soft, sometimes with tooth marks at the edge</td>
                <td className="px-3 py-2">A classic sign of Yang deficiency with fluid accumulation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Cold extremities and night-time urination are two of the most recognizable signs. If either sounds familiar, you can read more about <Link href="/symptoms/why-am-i-always-cold" className="text-accent hover:underline">why you might always feel cold</Link> and <Link href="/symptoms/why-do-i-wake-up-to-pee" className="text-accent hover:underline">why you may be waking to urinate at night</Link>. Because these signs rarely appear in isolation, the clearest next step is to check whether they fit your overall constitution. Try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> to see where you land.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Kidney Yang Deficiency?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Kidney Yang does not fade overnight. In most cases it erodes slowly, worn down by years of cold exposure, exhaustion, and the simple passage of time. More than one factor is usually at work, and the combination is what gradually thins the warming reserve.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Cold Exposure Over Time</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The body is constantly working to hold its core temperature. When cold keeps arriving faster than the body can push it out, Kidney Yang is called on again and again to generate warmth, and the reserve slowly thins. This can happen through living in a cold or damp climate, swimming in cold water on a regular basis, dressing lightly through winter, or eating large amounts of cold and raw foods year after year. Each cold meal and each cold dip is manageable on its own. Stacked over years, they may quietly draw down the warming reserve until the signs become hard to ignore.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Aging and Exhaustion</h3>
        <p className="text-text2 leading-relaxed mb-4">
          TCM teaches that Kidney Yang declines naturally as we age. The metabolic fire that felt effortless in your twenties tends to burn lower by middle age and lower still in later life. This natural decline can be accelerated by chronic illness, major surgery, prolonged overwork, and insufficient rest. When the body is repeatedly pushed past its limit, it borrows from the deep reserve, and repaying that debt takes far longer than spending it. People who describe themselves as running on empty for years are often pointing, without knowing it, at a depleted Kidney Yang.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with a naturally lower warming reserve. From childhood they may have felt the cold more than their peers, preferred warm drinks and extra layers, and recovered slowly from chills. This inborn tendency maps onto the <Link href="/types/yang_deficient" className="text-accent hover:underline">Yang Deficient body type</Link> in the nine-constitution framework. If you have always run cold rather than warm, your constitution may be the deeper reason, and the dietary and lifestyle guidance for this type is designed to protect what warmth you have.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Kidney Yang Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is one of the most direct ways Chinese medicine addresses Kidney Yang Deficiency. The guiding idea is simple: add warmth and remove cold. Warming foods are thought to gently stoke the Ming Men fire, while consistent small portions eaten regularly tend to work better than occasional large meals. Warm, cooked food is almost always preferable to cold or raw food for this pattern. For a broader look at the approach, see our guide to <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">foods that warm your body</Link>.
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
                <td className="px-3 py-2 font-medium text-text">Lamb</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Slow-cooked in stews or soups</td>
                <td className="px-3 py-2">Considered the strongest everyday Kidney Yang tonic among meats</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">A small handful daily, or cooked into congee</td>
                <td className="px-3 py-2">Tonifies Kidney Yang and supports the lower back and knees</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cinnamon bark (rou gui)</td>
                <td className="px-3 py-2">Hot, sweet</td>
                <td className="px-3 py-2">A pinch in tea, porridge, or warm milk</td>
                <td className="px-3 py-2">Warms the Kidney and encourages Yang to move outward</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Fennel</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Added to soups or roasted with vegetables</td>
                <td className="px-3 py-2">Warms the middle and eases cold, sluggish digestion</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Shrimp and prawns</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Lightly cooked in soups or stir-fries</td>
                <td className="px-3 py-2">Tonifies Kidney Yang and supports general vitality</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Leek and chives</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Cooked into stir-fries, eggs, or dumplings</td>
                <td className="px-3 py-2">A traditional Kidney Yang vegetable that warms the lower body</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Ginger (dried)</td>
                <td className="px-3 py-2">Hot, pungent</td>
                <td className="px-3 py-2">Brewed as tea or added to cooking</td>
                <td className="px-3 py-2">Dried ginger is notably more warming than fresh and warms the core</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chestnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Roasted, boiled, or cooked in stews</td>
                <td className="px-3 py-2">Strengthens Kidney Yang and supports the lower back</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Venison or beef</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Slow-cooked in stews with root vegetables</td>
                <td className="px-3 py-2">Deeply warming and building for depleted systems</td>
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
          Because Kidney Yang Deficiency is a pattern of too much cold and too little fire, the foods below may deepen the imbalance by adding cold, creating dampness, or asking the body to spend warmth it does not have. Limiting them is often as important as adding warming foods.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold drinks and ice water.</strong> These chill the digestive core and force the body to spend warmth reheating them from the inside.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw foods and salads.</strong> Raw produce requires more digestive fire than cooked food and may leave you feeling cold, heavy, or bloated.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Watermelon and cucumber.</strong> Both are strongly cooling in TCM terms and can lower internal temperature when eaten often.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Green tea in excess.</strong> Green tea is cooling by nature; a cup or two may be fine, but heavy daily intake may work against warming efforts.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Mung beans.</strong> Clearing and cooling, they are useful for heat patterns but poorly matched to a cold, slow system.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive fruit.</strong> Most fruit leans cooling, and large daily amounts may gradually reduce internal warmth over time.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Warm Kidney Yang
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Diet is only half the picture. The way you live day to day can either protect the warming reserve or quietly drain it. These habits focus on keeping heat in and encouraging Yang to move, since Yang responds well to gentle, consistent movement and poorly to exhaustion and chill. None of them require special equipment, only regular practice. If persistent tiredness is part of your picture, you may also find it helpful to read about <Link href="/symptoms/why-am-i-always-tired" className="text-accent hover:underline">why you might always feel tired</Link>.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Keep your lower back and abdomen warm.</strong> Wear an extra layer over your midsection and lower back in cold weather, since the Kidney region sits there and is easily chilled.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Soak your feet in warm water before bed.</strong> A nightly ten-minute soak draws warmth down into the lower body and may ease the chill that can disrupt sleep.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid cold drinks entirely.</strong> Choose warm or room-temperature fluids so your body does not waste fire reheating them from the inside.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Move gently but consistently.</strong> Yang tends to stir with movement, so regular walking, qigong, or light stretching may help it circulate; take care not to exhaust yourself.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Eat your largest meal at midday.</strong> Midday is peak Yang time, when digestion is strongest and best able to handle a heavier, warming meal.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Get morning sunlight.</strong> A few minutes of early sun on your back and face may help signal the body to wake, warm, and become active.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid swimming in cold water.</strong> Repeated cold exposure through swimming may steadily draw down the reserve; choose warm pools or warm up promptly afterward.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Kidney Yang Deficiency can be associated with several medical conditions, including hypothyroidism, chronic kidney disease, adrenal insufficiency, and certain forms of anemia. If your symptoms are severe, persistent, steadily worsening, or joined by sudden weight gain, marked swelling, or very low blood pressure, please see a qualified healthcare professional for a proper evaluation. Chinese medicine food therapy and lifestyle adjustments may complement conventional care, but they should not replace diagnosis or treatment from a licensed medical provider.
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
