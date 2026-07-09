import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function SpleenDampnessArticle() {
  const slug = "spleen-dampness"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Spleen Dampness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Spleen Dampness in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Spleen Dampness occurs when the Spleen cannot properly metabolize fluids, and those fluids accumulate as dampness inside the body. This buildup can be associated with a lingering feeling of heaviness, fogginess, and stickiness. Common signs may include chronic fatigue that feels heavy rather than wired, brain fog, bloating, sticky or sluggish bowel movements, weight gain that resists effort to lose it, and mild swelling or edema. In Chinese medicine, dampness is often compared to a damp sponge left inside the body. It is heavy, sticky, and slow to clear. Certain foods, including adzuki beans, coix seed (yi yi ren), and winter melon, may help dry out that dampness and restore a sense of lightness. If these signs sound familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help place this pattern in context.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Dampness in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Dampness is one of the six external pathogens recognized in Chinese medicine, alongside wind, cold, heat, dryness, and summer heat. It can arrive from outside the body or be produced from within. External dampness comes from the environment. Humid weather, damp living spaces, and working in wet conditions can all introduce it. Internal dampness is different. It is generated when the Spleen is too weak to process and move fluids properly.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM theory, the Spleen is responsible for separating the clear from the turbid in everything you consume. When this function runs below capacity, the fluids that should be circulated or excreted instead pool and stagnate. That stagnant fluid is what Chinese medicine calls dampness. You might picture it as a layer of muddy water moving slowly through your system, leaving everything bogged down and unclear.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Dampness has qualities you can almost feel. It is heavy, sticky, sluggish, and notoriously hard to resolve. Unlike heat or cold, which tend to move quickly, dampness lingers. It also tends to sink, which is why damp-related problems often show up in the lower body, in the legs, lower abdomen, or pelvic region.
        </p>
        <p className="text-text2 leading-relaxed">
          Dampness rarely stays in one pure form. It can combine with heat to produce Damp Heat, which adds redness, irritation, and strong odors. It can also combine with cold to produce Cold Damp, which adds chill, pallor, and aching. Knowing whether your dampness leans hot or cold matters, because the foods that help are not the same. This page focuses on dampness in its general form and how it connects to Spleen function.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Spleen Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Spleen Dampness tend to share a common quality. They feel heavy, sluggish, and sticky rather than sharp or urgent. You may not notice every sign listed below, and some may come and go. Even a few that appear consistently may suggest this pattern is present. The table outlines the most common signs, what they may feel like from the inside, and how Chinese medicine explains the link.
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
                <td className="px-3 py-2 font-medium text-text">Heavy feeling in body and limbs</td>
                <td className="px-3 py-2">Arms and legs feel weighted, hard to get moving</td>
                <td className="px-3 py-2">Dampness is heavy by nature and weighs the body down</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Brain fog (cloudy thinking)</td>
                <td className="px-3 py-2">Mind feels muddy, hard to focus or recall</td>
                <td className="px-3 py-2">Dampness clouds the clear energy that should rise to the head</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chronic sticky stools</td>
                <td className="px-3 py-2">Bowel movements that feel sticky and are hard to wipe clean</td>
                <td className="px-3 py-2">Spleen cannot separate fluids, leaving them mixed in</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Feeling of fullness and bloating</td>
                <td className="px-3 py-2">Stomach feels swollen and slow to empty</td>
                <td className="px-3 py-2">Dampness blocks the middle, slowing digestion</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Weight gain or difficulty losing weight</td>
                <td className="px-3 py-2">Stubborn pounds that resist diet and exercise</td>
                <td className="px-3 py-2">Dampness and phlegm add dense, heavy mass</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Thick greasy tongue coating</td>
                <td className="px-3 py-2">A white, pasty layer covering the tongue</td>
                <td className="px-3 py-2">Tongue coating reflects the state of digestive fluids</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Cloudy or concentrated urine</td>
                <td className="px-3 py-2">Urine that looks dark, cloudy, or strong</td>
                <td className="px-3 py-2">Fluids are not being processed and separated clearly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed mb-4">
          These signs can overlap with other patterns, so it helps to look at the full picture rather than any single symptom. If swelling and puffiness are a prominent concern, our guide on <Link href="/symptoms/why-do-i-have-water-retention" className="text-accent hover:underline">why you may have water retention</Link> looks at the TCM view of fluid buildup. If stubborn pounds are the most frustrating sign, the page on <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-accent hover:underline">why you keep gaining weight</Link> explores dampness as one possible contributor. When heavy limbs and cloudy thinking dominate your experience, the <Link href="/symptoms/why-do-i-have-brain-fog" className="text-accent hover:underline">brain fog guide</Link> covers what that fogginess may mean from a TCM perspective.
        </p>
        <p className="text-text2 text-sm leading-relaxed">
          To see how these signs fit your overall constitution, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help identify whether the damp pattern matches your body.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Spleen Dampness?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several factors can produce Spleen Dampness, and most people have a mix of more than one. The three main categories below cover the majority of cases.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Dietary Causes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Diet is usually the single biggest factor. The Spleen favors warmth and simplicity, and it struggles when overloaded with damp-forming foods. Eating large amounts of dairy, refined sugar, fried foods, ice-cold drinks, raw foods, and excessive fruit can overwhelm the Spleen faster than it can recover. Alcohol is also strongly damp-forming in TCM theory. When these foods dominate daily intake, the Spleen cannot keep up, and the fluids it fails to process settle as dampness that pools in the body.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Environment and Lifestyle</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Where and how you live matters too. Spending long stretches in humid climates, sitting for most of the day, or working in damp or underground environments may introduce or worsen dampness. A lack of regular movement is a key contributor. The body is designed to circulate fluids through activity, and when you stay still for hours, that circulation slows. Sweat is one of the main routes dampness leaves the body, so a sedentary routine can allow dampness to build up undisturbed.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Weak Spleen Function</h3>
        <p className="text-text2 leading-relaxed">
          Sometimes the root issue is the Spleen itself. If your Spleen Qi is already deficient, it cannot process fluids well even when the diet is reasonable. Dampness then accumulates simply because the system lacks the power to move it through. This is why dampness and Spleen Qi Deficiency often appear together, and why supporting the underlying weakness matters. If this resonates, our <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency guide</Link> covers the signs and foods for that related pattern in more detail.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Dry Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the first-line approach for clearing dampness in Chinese medicine. The guiding principle is to choose foods that are warm, light, and known for their draining or drying properties. These foods encourage the body to move fluids out rather than hold onto them. They are generally best eaten cooked and warm, since raw and cold preparations can add to the very dampness you are trying to clear. The table lists some of the most commonly recommended options.
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
                <td className="px-3 py-2 font-medium text-text">Adzuki beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Boiled in soup or tea</td>
                <td className="px-3 py-2">Considered the strongest damp-draining food in TCM</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Coix seed (yi yi ren)</td>
                <td className="px-3 py-2">Cool, bland</td>
                <td className="px-3 py-2">Cooked in porridge or soup</td>
                <td className="px-3 py-2">Drains dampness while supporting the Spleen</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Winter melon (dong gua)</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Boiled in light soup</td>
                <td className="px-3 py-2">Gentle diuretic that helps move excess fluids</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese celery</td>
                <td className="px-3 py-2">Cool, aromatic</td>
                <td className="px-3 py-2">Stir-fried or in soup</td>
                <td className="px-3 py-2">Drains dampness and keeps energy moving</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Radish / daikon</td>
                <td className="px-3 py-2">Cool, pungent</td>
                <td className="px-3 py-2">Cooked in soups or stews</td>
                <td className="px-3 py-2">Clears stagnation and lightens digestion</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus leaf tea</td>
                <td className="px-3 py-2">Cool, bitter</td>
                <td className="px-3 py-2">Dried leaf steeped in hot water</td>
                <td className="px-3 py-2">Traditionally used to drain dampness and damp fat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Barley tea</td>
                <td className="px-3 py-2">Cool, bland</td>
                <td className="px-3 py-2">Roasted grain steeped in hot water</td>
                <td className="px-3 py-2">Mild draining effect that is gentle on digestion</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chen Pi (aged tangerine peel)</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Added to congee or tea</td>
                <td className="px-3 py-2">Dries dampness, moves energy, eases bloating</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Ginger tea</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Fresh slices steeped in hot water</td>
                <td className="px-3 py-2">Warms the Spleen so it can process fluids again</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Over weeks of consistent use, these foods may help reduce that heavy, waterlogged feeling. To confirm whether the damp pattern matches your constitution, the <Link href="/types/phlegm_damp" className="text-accent hover:underline">Phlegm Damp body type</Link> page explains how this pattern fits into the nine-type system.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit or Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          For someone dealing with Spleen Dampness, the foods below are considered the most damp-forming in Chinese medicine. Limiting them can make the drying foods above far more effective.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy products.</strong> Milk, cheese, cream, and ice cream are seen as the most damp-forming category. They are heavy, cold, and slow to process.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar and sweets.</strong> Concentrated sugar burdens the Spleen and may thicken the body&apos;s fluids.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold drinks and ice water.</strong> Cold weakens the Spleen&apos;s processing power and slows the circulation of fluids.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Greasy, heavy foods are slow to break down and may add both dampness and heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw foods and salads.</strong> Raw items require extra Spleen energy to warm and process before use.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Strongly damp-forming in TCM theory, especially beer and sweet liquors.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Clear Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices work best alongside habits that keep fluids moving. The daily practices below may help clear dampness over time.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Exercise daily to generate sweat.</strong> Dampness leaves the body partly through sweat, so moderate, regular movement that warms you up may be one of the most direct tools. Brisk walking, light jogging, or a gentle sport all count.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat all foods warm and cooked.</strong> Warm meals support the Spleen and avoid the cold, raw items that add to dampness.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid drinking ice water.</strong> Choose room-temperature or warm water instead, especially around meals.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Keep your living space dry and ventilated.</strong> External dampness can reinforce internal dampness, so use a dehumidifier or open windows when humidity runs high.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Move after meals.</strong> A short walk after eating supports the Spleen&apos;s job of processing food and fluids.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Limit evening snacking.</strong> The body&apos;s fluid-processing power is lower at night, so late food and drink are more likely to settle as dampness.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Try abdominal massage.</strong> Gentle circular rubbing around the navel, moving clockwise, may encourage digestion and the movement of fluids.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Spleen Dampness overlap with several medical conditions. Persistent edema, unexplained weight gain, chronic fatigue, and brain fog can be associated with hypothyroidism, metabolic syndrome, kidney or lymphatic issues, and other conditions that need proper diagnosis. If your symptoms are severe, worsening, or accompanied by shortness of breath, chest tightness, or rapid changes in weight, please consult a healthcare professional. Chinese medicine food therapy may complement, but never replaces, professional medical care for serious conditions.
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
