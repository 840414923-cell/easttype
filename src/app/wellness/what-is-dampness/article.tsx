import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function WhatIsDampnessArticle() {
  const slug = "what-is-dampness"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">What Is Dampness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        What Is Dampness in Chinese Medicine? Signs, Causes &amp; Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read · Overview</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Dampness is one of the most important concepts in Chinese medicine. It refers to fluid your body cannot properly metabolize. Instead of being processed and eliminated, that fluid accumulates and creates heavy, sticky, sluggish feelings. Common signs may include brain fog, bloating, sticky stools, weight that resists effort to lose, and a thick tongue coating. In most cases the Spleen sits at the root, because it is the organ responsible for moving and separating fluids in the first place.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you often wake feeling heavy, foggy, and slow to get going, or if your body seems to hold onto weight and water no matter what you do, Chinese medicine has a word for that cluster of feelings. It calls it dampness. The term sounds odd in English, but the image behind it is simple and surprisingly useful: think of muddy water sitting inside a system that should run clear.
        </p>
        <p className="text-text2 leading-relaxed">
          This guide explains what dampness means in Chinese medicine, where it comes from, how it tends to show up in the body, and which foods and habits may help clear it. It is written to stand on its own, and it also connects to a related pattern. When dampness settles specifically around a weak Spleen, the result is Spleen Dampness, which we cover in its own <Link href="/wellness/spleen-dampness" className="text-accent hover:underline">detailed guide</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Dampness in TCM?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine recognizes six external pathogens, the climatic forces that can disturb the body from outside: wind, cold, heat, dampness, dryness, and summer heat. Dampness is the heavy, sticky, slow-moving member of that group. It can arrive from outside the body, through humid weather, damp housing, or working in wet conditions, or it can be generated from within when the Spleen is too weak to process fluids efficiently.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Internal dampness is the form most people encounter today. It is produced when digestion cannot keep up with what is taken in, and the fluids that should be circulated or excreted instead pool and stagnate. You might picture it as a layer of muddy water moving slowly through the system, leaving everything bogged down and unclear. Where dampness settles, that area tends to feel heavy, dense, or swollen.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Dampness has qualities you can almost feel from the inside. It is heavy, sticky, sluggish, and notoriously hard to resolve. Unlike heat or cold, which tend to move quickly in and out, dampness lingers for weeks or months. It also tends to sink, which is one reason damp-related problems often show up in the lower body, in the legs, the lower abdomen, or the pelvic region.
        </p>
        <p className="text-text2 leading-relaxed">
          Dampness rarely stays in one pure form. Over time it can combine with heat to produce Damp Heat, which adds redness, irritation, strong odors, and inflammation. It can also combine with cold to produce Cold Damp, which adds chill, pallor, and aching. Knowing whether your dampness leans hot or cold matters, because the foods and habits that help are not the same. At its root, though, most internal dampness traces back to a Spleen that is struggling to do its job. The <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> guide explains why that organ is so central.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of dampness share a common quality. They feel heavy, sluggish, and sticky rather than sharp or urgent. You may not notice every sign below, and some may come and go. Even a few that appear consistently may suggest the pattern is present. The table outlines the most common signs, what they tend to feel like from the inside, and why Chinese medicine links them to dampness.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Sign</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What It Feels Like</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Why It Happens</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heavy body and limbs</td>
                <td className="px-3 py-2">Arms and legs feel weighted, hard to get moving</td>
                <td className="px-3 py-2">Dampness is heavy by nature and weighs the body down</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Brain fog and cloudy thinking</td>
                <td className="px-3 py-2">Mind feels muddy, hard to focus or recall</td>
                <td className="px-3 py-2">Dampness blocks the clear energy that should rise to the head</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sticky or sluggish stools</td>
                <td className="px-3 py-2">Bowel movements that feel sticky and are hard to wipe clean</td>
                <td className="px-3 py-2">Fluids are not being separated cleanly during digestion</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bloating and fullness</td>
                <td className="px-3 py-2">Stomach feels swollen and slow to empty</td>
                <td className="px-3 py-2">Dampness blocks the middle, slowing the whole digestive process</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Weight that is hard to lose</td>
                <td className="px-3 py-2">Stubborn pounds that resist diet and exercise</td>
                <td className="px-3 py-2">Dampness and phlegm add dense, heavy mass that does not clear easily</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Thick greasy tongue coating</td>
                <td className="px-3 py-2">A white, pasty layer covering the tongue</td>
                <td className="px-3 py-2">The coating mirrors the state of the digestive fluids below</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Cloudy urine</td>
                <td className="px-3 py-2">Urine that looks dark, cloudy, or strong</td>
                <td className="px-3 py-2">Fluids are not being processed and separated clearly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed mb-4">
          These signs can overlap with other patterns, so it helps to look at the full picture rather than any single symptom. When swelling and puffiness stand out, our guide on <Link href="/symptoms/why-do-i-have-water-retention" className="text-accent hover:underline">why you may have water retention</Link> looks at fluid buildup from a TCM view. When stubborn pounds are the most frustrating sign, the page on <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-accent hover:underline">why you keep gaining weight</Link> treats dampness as one possible contributor. And when heavy limbs and cloudy thinking dominate, the <Link href="/symptoms/why-do-i-have-brain-fog" className="text-accent hover:underline">brain fog guide</Link> covers what that fogginess may mean.
        </p>
        <p className="text-text2 text-sm leading-relaxed">
          To see how these signs fit your overall constitution, the <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> may help place the damp pattern in context.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Dampness?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several factors can produce dampness, and most people have a mix of more than one. The categories below cover the majority of cases.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Dietary Causes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Diet is usually the single biggest factor. The Spleen favors warmth and simplicity, and it struggles when overloaded with damp-forming foods. Eating large amounts of dairy, refined sugar, fried foods, ice-cold drinks, raw items, and excessive fruit can overwhelm the system faster than it can recover. Alcohol is also strongly damp-forming in Chinese medicine. When these foods dominate daily intake, fluids settle as dampness that pools inside the body.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Environmental Causes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          External dampness comes from the world around you. Living in a humid climate, working in damp or underground spaces, or keeping a home that stays wet and poorly ventilated can all introduce or worsen the pattern. In these cases the dampness arrives through the skin and the breath before the Spleen is even at fault.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Lifestyle Causes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          How you live matters as much as what you eat. Sitting for most of the day, rarely working up a sweat, skipping meals, and eating at irregular hours all slow the movement of fluids. The body is built to circulate and clear water through activity, and sweat is one of the main routes dampness leaves. A sedentary routine lets it build up undisturbed.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">A Weak Spleen</h3>
        <p className="text-text2 leading-relaxed">
          Sometimes the root issue is the Spleen itself. If your Spleen Qi is already deficient, it cannot process fluids well even when the diet is reasonable. Dampness then accumulates simply because the system lacks the power to move it through. This is why dampness and Spleen weakness so often appear together, and why supporting the underlying organ matters as much as drying the dampness itself.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Clear Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the first-line approach for clearing dampness in Chinese medicine. The guiding principle is to choose foods that are warm, light, and known for their draining or drying qualities. These foods encourage the body to move fluids out rather than hold onto them. They are generally best eaten cooked and warm, since raw and cold preparations can add to the very dampness you are trying to clear.
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
                <td className="px-3 py-2 font-medium text-text">Adzuki beans</td>
                <td className="px-3 py-2">Considered one of the strongest damp-draining foods in TCM</td>
                <td className="px-3 py-2">Boiled into soup or tea</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Coix seed (yi yi ren)</td>
                <td className="px-3 py-2">Drains dampness while gently supporting the Spleen</td>
                <td className="px-3 py-2">Cooked into porridge or soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Winter melon (dong gua)</td>
                <td className="px-3 py-2">A gentle diuretic that helps move excess fluids</td>
                <td className="px-3 py-2">Simmered in a light soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lotus leaf tea</td>
                <td className="px-3 py-2">Traditionally used to drain dampness and lighten the body</td>
                <td className="px-3 py-2">Dried leaf steeped in hot water</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Barley tea</td>
                <td className="px-3 py-2">A mild draining effect that is gentle on digestion</td>
                <td className="px-3 py-2">Roasted grain steeped in hot water</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">White radish (daikon)</td>
                <td className="px-3 py-2">Clears stagnation and lightens digestion</td>
                <td className="px-3 py-2">Cooked in soups or stews</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Drains dampness and keeps energy moving</td>
                <td className="px-3 py-2">Stir-fried or added to soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Supports the Spleen so it can process fluids again</td>
                <td className="px-3 py-2">Steamed or boiled in congee</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Ginger tea</td>
                <td className="px-3 py-2">Warms the Spleen and helps it handle fluids</td>
                <td className="px-3 py-2">Fresh slices steeped in hot water</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Over weeks of consistent use, these foods may help reduce that heavy, waterlogged feeling. They work best when the damp-forming foods in the next section are reduced at the same time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That Create Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          For someone trying to clear dampness, the foods below are considered the most damp-forming in Chinese medicine. Limiting them can make the drying foods above far more effective.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Dairy products.</strong> Milk, cheese, cream, and ice cream are seen as the most damp-forming category. They are heavy, cold, and slow to process.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar and sweets.</strong> Concentrated sugar burdens the Spleen and may thicken the body&apos;s fluids over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold drinks and ice water.</strong> Cold weakens the Spleen&apos;s processing power and slows the circulation of fluids.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Greasy, heavy items are slow to break down and may add both dampness and heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive raw foods and salads.</strong> Raw items require extra energy to warm and process before they can be used.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Strongly damp-forming in TCM theory, especially beer and sweet liquors.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits to Clear Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices work best alongside habits that keep fluids moving. The daily practices below may help clear dampness over time.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Exercise to generate sweat.</strong> Dampness leaves the body partly through sweat, so regular movement that warms you up may be one of the most direct tools.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat warm, cooked foods.</strong> Warm meals support the Spleen and avoid the cold, raw items that add to the problem.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Avoid ice water.</strong> Choose room-temperature or warm drinks, especially around meals.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Ventilate your living space.</strong> External dampness can reinforce internal dampness, so open windows or run a dehumidifier when humidity runs high.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Keep regular meal times.</strong> Eating at consistent hours gives the Spleen a steady, predictable workload it can keep up with.</span></li>
        </ol>
        <p className="text-text2 text-sm leading-relaxed mt-4">
          To see how the damp pattern fits your overall constitution, the <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> may help you identify whether it matches your body.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of dampness overlap with several medical conditions. Persistent edema, unexplained weight gain, chronic fatigue, and brain fog can be associated with hypothyroidism, metabolic issues, kidney or lymphatic problems, and other conditions that need proper diagnosis. If your symptoms are severe, worsening, or accompanied by shortness of breath, chest tightness, or rapid changes in weight, please consult a healthcare professional. Chinese medicine food therapy may complement, but never replaces, professional medical care for serious conditions.
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
