import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function TcmTongueDiagnosisArticle() {
  const slug = "tcm-tongue-diagnosis"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Tongue Diagnosis</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine Tongue Diagnosis: What Your Tongue May Reveal About Your Health
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read · A 3,000-year-old health check that takes 5 seconds</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          In Chinese medicine, the tongue is considered a mirror of internal health. Practitioners examine four features: color (pale, red, or purple), coating (white, yellow, or none), shape (swollen, thin, or teeth-marked), and moisture (dry or wet). Each combination may point to a specific internal pattern, such as qi deficiency, internal heat, or dampness accumulation. Looking at your tongue in the morning, before eating or brushing, can give you clues about which body type you might be.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you have ever sat across from a Chinese medicine practitioner, you probably noticed that one of the first things they do is ask you to stick out your tongue. This is not a formality. In Chinese medicine, the tongue is one of the most revealing diagnostic tools available, and it costs nothing, takes seconds, and requires no equipment.
        </p>
        <p className="text-text2 leading-relaxed">
          The idea is straightforward: your internal organs are connected to your tongue through meridians and blood vessels. When something changes inside your body, whether it is a buildup of heat, a shortage of energy, or excess moisture, those changes show up on the surface of your tongue. Learning to read these signals is like having a dashboard indicator for your internal state.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Look at Your Tongue Properly
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Before you can read your tongue, you need to see it under the right conditions. Here is how Chinese medicine practitioners prepare for a tongue reading:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-text2 leading-relaxed mb-4">
          <li>Look in the morning, before eating, drinking, or brushing your teeth</li>
          <li>Use natural light if possible (fluorescent light distorts color)</li>
          <li>Stick your tongue out naturally, do not strain or extend it forcefully</li>
          <li>Observe for only 3 to 5 seconds, because the tongue changes color quickly when exposed to air</li>
          <li>Note the overall color, then the coating, then the shape and moisture</li>
        </ol>
        <p className="text-text2 leading-relaxed">
          Avoid looking at your tongue right after drinking coffee, eating colored foods (like beets or candy), or scraping your tongue. These all change the appearance and give false readings. The most accurate reading is first thing in the morning, before anything has touched your mouth.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 4 Features: What Each One Means
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-3">1. Tongue Color</h3>
            <p className="text-text2 leading-relaxed mb-4">
              A healthy tongue is light pink with a thin white coating. Deviations from this baseline may indicate specific patterns.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-3 text-text font-medium">Color</th>
                    <th className="text-left py-2 pr-3 text-text font-medium">What It May Mean</th>
                    <th className="text-left py-2 text-text font-medium">Related Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Pale</td><td className="py-2 pr-3 text-text2">Not enough blood or energy reaching the surface</td><td className="py-2 text-text2">Qi or Blood Deficiency</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Red</td><td className="py-2 pr-3 text-text2">Internal heat building up</td><td className="py-2 text-text2">Yin Deficiency or Heat</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Dark red or crimson</td><td className="py-2 pr-3 text-text2">Significant heat accumulating</td><td className="py-2 text-text2">Severe Heat pattern</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Purple or bluish</td><td className="py-2 pr-3 text-text2">Blood not moving freely</td><td className="py-2 text-text2">Blood Stasis</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Pale with red tip</td><td className="py-2 pr-3 text-text2">General deficiency with heat in the heart</td><td className="py-2 text-text2">Qi Deficiency + Heart Heat</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-3">2. Tongue Coating</h3>
            <p className="text-text2 leading-relaxed mb-4">
              The coating reflects the state of your digestive system and whether dampness or heat is present. A normal coating is thin, white, and evenly distributed.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-3 text-text font-medium">Coating</th>
                    <th className="text-left py-2 pr-3 text-text font-medium">What It May Mean</th>
                    <th className="text-left py-2 text-text font-medium">Related Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Thin white</td><td className="py-2 pr-3 text-text2">Normal, healthy digestion</td><td className="py-2 text-text2">Balanced</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Thick white</td><td className="py-2 pr-3 text-text2">Cold or dampness in the digestive system</td><td className="py-2 text-text2">Cold or Damp pattern</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Yellow</td><td className="py-2 pr-3 text-text2">Heat in the digestive system</td><td className="py-2 text-text2">Heat or Damp Heat</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">No coating (peeled)</td><td className="py-2 pr-3 text-text2">Internal moisture and protective lining are depleted</td><td className="py-2 text-text2">Yin Deficiency</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Greasy or sticky</td><td className="py-2 pr-3 text-text2">Dampness or phlegm accumulating</td><td className="py-2 text-text2">Phlegm Damp</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-3">3. Tongue Shape</h3>
            <p className="text-text2 leading-relaxed mb-4">
              The physical shape of your tongue, whether it appears swollen, thin, or marked, may reveal how well your body is managing fluids and energy.
            </p>
            <div className="space-y-3">
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Swollen or puffy: </span><span className="text-text2">May indicate that your Spleen is not effectively managing fluids, allowing dampness to accumulate. Often seen with Phlegm Damp or Qi Deficiency patterns.</span></p>
              </div>
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Teeth marks on the edges: </span><span className="text-text2">A swollen tongue pressing against the teeth leaves scalloped edges. This is one of the most common tongue signs and typically points to Spleen Qi Deficiency. The Spleen does not have enough energy to hold fluids in their proper place.</span></p>
              </div>
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Thin or small: </span><span className="text-text2">A tongue that appears smaller or thinner than normal may indicate that blood and moisture are insufficient. Often seen with Yin or Blood Deficiency patterns.</span></p>
              </div>
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Deviated (leans to one side): </span><span className="text-text2">In Chinese medicine, this is taken seriously as it may indicate internal wind or a more severe pattern. If you notice this, please consult a healthcare provider.</span></p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-3">4. Tongue Moisture</h3>
            <p className="text-text2 leading-relaxed mb-4">
              How wet or dry your tongue appears reflects the balance of fluids inside your body.
            </p>
            <div className="space-y-3">
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Too dry: </span><span className="text-text2">Internal moisture is depleted. Often seen with Yin Deficiency or after a fever. Your body is running low on the fluids that keep things lubricated.</span></p>
              </div>
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Too wet or overly glossy: </span><span className="text-text2">Fluids are present but not being managed well. Dampness is accumulating because the Spleen cannot process fluids efficiently.</span></p>
              </div>
              <div className="bg-cream/30 border border-border rounded-xl p-4">
                <p className="text-sm text-text leading-relaxed"><span className="text-accent font-medium">Slightly moist and glossy: </span><span className="text-text2">This is the healthy baseline. Enough fluid to keep tissues supple, not so much that it pools.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The Tongue Map: Different Zones, Different Organs
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine maps specific areas of the tongue to specific organ systems. This is not random. The tongue is connected to internal organs through meridians, and changes in a particular zone may reflect changes in the corresponding organ.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Tongue Zone</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Connected Organ</th>
                <th className="text-left py-2 text-text font-medium">What to Look For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Tip</td><td className="py-2 pr-3 text-text2">Heart</td><td className="py-2 text-text2">Red tip = Heart heat; pale tip = Heart qi deficiency</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Sides (left and right)</td><td className="py-2 pr-3 text-text2">Liver and Gallbladder</td><td className="py-2 text-text2">Red sides = Liver heat; teeth marks = Spleen not supporting Liver</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Center</td><td className="py-2 pr-3 text-text2">Spleen and Stomach</td><td className="py-2 text-text2">Thick coating = digestive dampness; no coating = Stomach yin depleted</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Root (back)</td><td className="py-2 pr-3 text-text2">Kidney</td><td className="py-2 text-text2">Thick coating at root = Kidney dampness; peeled root = Kidney yin low</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          When you look at your tongue, do not focus on just one feature. The most accurate reading comes from considering all four features together. A pale tongue with a thick white coating and teeth marks tells a different story than a pale tongue with no coating and a dry surface. The first suggests cold and dampness with qi deficiency. The second suggests yin deficiency with depleted internal moisture. Same pale color, entirely different pattern and entirely different food recommendations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Common Tongue Patterns and What to Eat
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Here are the most common tongue patterns and the food approaches that Chinese medicine recommends for each. If you see your tongue in one of these descriptions, the corresponding food guide may help bring it back toward a healthy pink.
        </p>
        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Pale, Swollen, Teeth Marks, White Coating</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">This is the classic picture of Spleen Qi Deficiency with dampness. The Spleen lacks the energy to process fluids, so they pool. The tongue swells and presses against the teeth.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eat: </span>warm, cooked foods like congee, sweet potato, ginger soup, and millet porridge. Avoid cold drinks, raw food, and dairy.</p>
            <p className="text-xs text-text2/70 mt-1">Related body type: <Link href="/types/qi_deficient" className="text-accent hover:underline">Gentle Breeze (Qi Deficient)</Link></p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Red, No Coating, Dry, Thin</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">Internal heat with depleted moisture. The body has been running too hot for too long, and the cooling system is running dry. The coating disappears because there is not enough fluid to sustain it.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eat: </span>cooling and moistening foods like tremella soup, pear, black sesame, mung bean soup, and chrysanthemum tea. Avoid spicy food, coffee, and alcohol.</p>
            <p className="text-xs text-text2/70 mt-1">Related body type: <Link href="/types/yin_deficient" className="text-accent hover:underline">Volcanic Spring (Yin Deficient)</Link></p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Pale, Thin, Little or No Coating</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">Blood is insufficient to nourish the tongue properly. The tongue appears thin because it lacks the fullness that adequate blood provides.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eat: </span>blood-nourishing foods like red dates, longan, black sesame, spinach, and bone broth. Avoid excessive raw and cold food that further depletes digestive energy.</p>
            <p className="text-xs text-text2/70 mt-1">Related body type: <Link href="/types/blood_stasis" className="text-accent hover:underline">Frozen Stream (Blood Stasis)</Link></p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Red Sides, Yellow Coating, Possibly Swollen</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">Liver heat with damp-heat in the digestive system. The sides of the tongue correspond to the Liver, and redness there suggests heat building up from stuck energy or rich food.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eat: </span>damp-draining and cooling foods like winter melon, mung beans, bitter melon, and chrysanthemum tea. Avoid greasy food, alcohol, and spicy dishes.</p>
            <p className="text-xs text-text2/70 mt-1">Related body type: <Link href="/types/damp_heat" className="text-accent hover:underline">Summer Storm (Damp Heat)</Link></p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Purple or Bluish, Possibly With Spots</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">Blood is not flowing freely. Stagnation in the circulation shows up as purple or dark patches. Small red or purple spots may indicate localized stagnation.</p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Eat: </span>circulation-supporting foods like hawthorn, black sesame, turmeric, and rose tea. Movement and warmth help. Avoid sitting for long periods and very cold food.</p>
            <p className="text-xs text-text2/70 mt-1">Related body type: <Link href="/types/blood_stasis" className="text-accent hover:underline">Frozen Stream (Blood Stasis)</Link></p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What a Healthy Tongue Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Before you start diagnosing yourself, it helps to know the baseline. A healthy tongue in Chinese medicine is:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text2 leading-relaxed mb-4">
          <li>Light pink in color, not pale and not red</li>
          <li>Covered with a thin, even white coating</li>
          <li>Normal size, not swollen or shrunken</li>
          <li>Free of teeth marks on the edges</li>
          <li>Slightly moist but not overly wet</li>
          <li>Without cracks, spots, or discoloration</li>
        </ul>
        <p className="text-text2 leading-relaxed">
          If your tongue looks like this, your internal systems are likely functioning well. If it does not, that is not a reason to panic. It is a signal that something may benefit from adjustment, and food is usually the first and simplest lever to pull.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          A Simple Morning Tongue Check
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You can build a simple health check into your morning routine. It takes less than 30 seconds:
        </p>
        <div className="bg-cream/30 border border-border rounded-xl p-6">
          <ol className="list-decimal list-inside space-y-3 text-text2 leading-relaxed">
            <li><span className="text-text font-medium">Wake up, before eating or drinking.</span> Look at your tongue in natural light.</li>
            <li><span className="text-text font-medium">Note the color.</span> Is it pink, pale, red, or purple?</li>
            <li><span className="text-text font-medium">Check the coating.</span> Is it thin white, thick white, yellow, or absent?</li>
            <li><span className="text-text font-medium">Look at the shape.</span> Any teeth marks? Swollen? Thin?</li>
            <li><span className="text-text font-medium">Feel the moisture.</span> Dry, wet, or just right?</li>
            <li><span className="text-text font-medium">Compare to yesterday.</span> Changes over time are more useful than a single reading.</li>
          </ol>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          Over a few weeks, you may start to notice patterns. After a few days of eating warming foods, a pale tongue may become more pink. After cutting back on dairy and sweets, a thick coating may become thinner. Your tongue is a real-time feedback tool, and it responds to what you eat faster than most people expect.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Important Note</h2>
        <p className="text-sm text-text2 leading-relaxed">
          Tongue reading is for personal wellness awareness and is not a substitute for professional medical diagnosis. Many tongue changes are harmless and temporary. If you notice sudden or concerning changes, such as persistent discoloration, lumps, sores that do not heal, or a tongue that appears deviated to one side, please consult a licensed healthcare provider. Tongue diagnosis should complement, not replace, regular medical check-ups.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Articles
        </h2>
        <div className="space-y-3">
          <Link href="/wellness/what-is-qi" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">What Is Qi (Chi) Energy? →</h3>
            <p className="text-text2/70 text-xs mt-1">Understanding qi helps explain why your tongue changes the way it does.</p>
          </Link>
          <Link href="/wellness/chinese-medicine-body-types" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">The 9 Chinese Medicine Body Types →</h3>
            <p className="text-text2/70 text-xs mt-1">Each body type tends to produce a distinct tongue pattern.</p>
          </Link>
          <Link href="/foods-for" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Food Guides by Symptom →</h3>
            <p className="text-text2/70 text-xs mt-1">What to eat based on your symptoms and tongue pattern.</p>
          </Link>
        </div>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />
    </main>
  )
}
