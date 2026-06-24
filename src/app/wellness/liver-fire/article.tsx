import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function LiverFireArticle() {
  const slug = "liver-fire"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Liver Fire</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Liver Fire in Chinese Medicine: Signs, Causes, and Cooling Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Liver Fire is what happens when Liver Qi Stagnation escalates into heat. When frustration and stress are held in the body long enough, the stuck energy ignites into fire. Signs may include red or bloodshot eyes, sharp headaches focused at the temples or the top of the head, intense irritability or sudden rage, a bitter taste in the mouth, dry mouth, ringing in the ears, and a flushed red face. This is a distinctly hot pattern, unlike the Liver Qi Stagnation it tends to grow out of. Cooling foods like celery, chrysanthemum tea, and mung beans may help bring the internal temperature down. You can check whether this matches your constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Liver Fire in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Traditional Chinese Medicine, the Liver (肝, gān) is responsible for keeping energy moving freely throughout the body. Its job is to ensure that Qi, the body&apos;s vital energy, flows smoothly to every organ and limb. When that flow becomes blocked, the condition is called Liver Qi Stagnation. Pressure begins to build behind the blockage, much like water damming up behind a wall. If that pressure is not relieved, it generates friction, and the friction produces heat. Once the heat grows strong enough, it crosses a threshold and becomes what is known as Liver Fire.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A useful image is a pressure cooker. Steam builds inside a sealed pot with no outlet. The heat and pressure rise together until the valve whistles. Liver Fire works in a similar way. The frustration, resentment, and stress that have no healthy outlet keep building until the system overheats. This is why the pattern so often follows months or years of chronic Liver Qi Stagnation that was never resolved.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          One of the defining features of Liver Fire is its direction. Heat in Chinese medicine naturally rises, and Liver Fire tends to flare upward toward the head and face. This is why the symptoms show up in the eyes, the head, the mouth, and the ears rather than lower in the body. Bloodshot eyes, a red face, a bitter taste, and ringing in the ears all reflect that upward surge of heat. Where Liver Qi Stagnation may show up as tightness in the ribs or mood swings, Liver Fire pushes those same problems higher and hotter.
        </p>
        <p className="text-text2 leading-relaxed">
          It is worth noting that this is not the same as liver disease in Western medicine. The TCM Liver is a functional system that governs energy flow, emotion, and the storage of blood, not a single filtering organ. Liver Fire is a pattern of excess heat that develops when Liver Qi Stagnation is left unresolved. To understand the pattern it comes from, see our guide on <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Liver Fire
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Liver Fire tend to share one quality: they feel hot, intense, and concentrated above the shoulders. Where Liver Qi Stagnation feels like pressure and tightness, Liver Fire feels like that pressure has caught fire. The symptoms below often appear together and may come on most strongly during stressful periods, after poor sleep, or following a stretch of anger that has been swallowed rather than expressed. You might recognize several of these signs without having all of them. A pattern is usually suggested when several cluster over weeks or months and do not ease on their own.
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
                <td className="px-3 py-2 font-medium text-text">Red or bloodshot eyes</td>
                <td className="px-3 py-2">Eyes that look red, dry, burning, or sensitive to light</td>
                <td className="px-3 py-2">The Liver opens into the eyes; rising fire inflames them</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sharp headache</td>
                <td className="px-3 py-2">Throbbing pain at the temples, behind the eyes, or the top of the head</td>
                <td className="px-3 py-2">Liver Fire rises along its channel to the head</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Intense irritability or anger outbursts</td>
                <td className="px-3 py-2">Short fuse, sudden rage, hard to calm down once provoked</td>
                <td className="px-3 py-2">The Liver governs emotion; fire turns frustration into rage</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bitter or sour taste in mouth</td>
                <td className="px-3 py-2">A bitter taste, often strongest in the morning on waking</td>
                <td className="px-3 py-2">Liver heat rises into the mouth and distorts taste</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Ringing in the ears</td>
                <td className="px-3 py-2">Loud, high-pitched ringing, like a sustained whine</td>
                <td className="px-3 py-2">Liver Fire flares upward through pathways linked to the ears</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Flushed or red face</td>
                <td className="px-3 py-2">Face that looks red and feels hot, especially when angry</td>
                <td className="px-3 py-2">Internal heat surfaces visibly through the face</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Insomnia with racing thoughts</td>
                <td className="px-3 py-2">Mind that will not switch off, often waking between 1 and 3 a.m.</td>
                <td className="px-3 py-2">Liver Fire disturbs the mind and Shen at the Liver&apos;s peak hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Red, bloodshot eyes paired with sharp headaches and a short fuse are among the most telling combinations for this pattern. If headaches are your main concern, you can read more about <Link href="/symptoms/why-do-i-have-headaches" className="text-accent hover:underline">why headaches happen</Link>, and if irritability is the dominant sign, see our page on <Link href="/symptoms/why-am-i-so-irritable" className="text-accent hover:underline">why you might be irritable</Link>. Waking between 1 and 3 a.m. is another common thread, and you can learn more at <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-accent hover:underline">why you might wake at 3 a.m.</Link>. To see whether Liver Fire matches your overall constitution, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Liver Fire?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Liver Fire rarely appears on its own. It almost always develops from a combination of emotional strain, dietary habits, and a person&apos;s underlying constitution. Most people who develop this pattern can point to more than one of the factors below, with chronic emotional stress usually leading the list.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Untreated Stress and Anger</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The most common cause by far. When Liver Qi Stagnation is left unresolved, the chronic pressure eventually ignites into fire. Bottled-up rage, prolonged workplace stress, and unhealthy relationships that allow no release all feed the flames. In Chinese medicine, anger is the emotion most closely tied to the Liver, and unexpressed anger is considered one of the most heat-generating forces in the body. The longer the frustration is held, the hotter the Liver system becomes. This is why Liver Fire often shows up in people who describe themselves as patient to a fault, who swallow their anger rather than let it out, until the pressure finally bursts into flame.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Dietary Heat</h3>
        <p className="text-text2 leading-relaxed mb-4">
          What you eat and drink can add fuel directly. Alcohol is considered one of the most heating substances in Chinese medicine, and regular drinking steadily raises internal heat across the Liver system. Spicy foods like chili, hot peppers, and heavy curries add warmth. Rich, greasy, and deep-fried meals burden the Liver with heavy processing. Coffee and energy drinks are stimulating and drying. When several of these are consumed regularly, they layer heat onto a system that may already be running hot from stress, and the threshold into Liver Fire can be crossed that much faster.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people simply run warmer than others. In the nine-body-type system, those with the <Link href="/types/damp_heat" className="text-accent hover:underline">Damp Heat body type</Link> are prone to accumulating heat and may be especially likely to develop Liver Fire when stress is added to the mix. A person&apos;s inherited constitution sets the baseline temperature, and lifestyle choices either keep that baseline steady or push it higher. Understanding your type can help explain why the same stress affects you differently than it does others.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods That May Help Liver Fire
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy for Liver Fire follows one guiding idea: choose foods that clear heat and cool the body, and avoid anything that adds fuel. Chrysanthemum tea is considered the classic remedy for this pattern, prized for its ability to cool Liver heat and soothe the eyes and head. Hydrating vegetables, bitter flavors, and light soups all play a role. The way you prepare these foods matters. Steaming, light boiling, and serving foods at room temperature preserve their cooling effect, while roasting and deep-frying add heat back in. Small amounts taken regularly tend to work better than large occasional doses. These foods have been used for generations to help clear Liver Fire, and consistency usually matters more than portion size.
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
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum tea (ju hua)</td>
                <td className="px-3 py-2">Cool, sweet, bitter</td>
                <td className="px-3 py-2">Brewed from dried flowers, sipped warm</td>
                <td className="px-3 py-2">The classic Liver Fire remedy; cools heat and soothes the eyes</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Cool, sweet, bitter</td>
                <td className="px-3 py-2">Eaten raw, in soups, or lightly stir-fried</td>
                <td className="px-3 py-2">Clears heat and supports the smooth flow of Liver energy</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Cooked as soup or thin congee</td>
                <td className="px-3 py-2">One of the strongest heat-clearing foods in the TCM pantry</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bitter gourd</td>
                <td className="px-3 py-2">Cold, bitter</td>
                <td className="px-3 py-2">Stir-fried, blanched, or added to soup</td>
                <td className="px-3 py-2">Bitter flavor directs fire downward and clears internal heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Sliced into soups or stir-fried with water</td>
                <td className="px-3 py-2">Clears heat and moistens without adding warmth</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
                <td className="px-3 py-2">Cools heat and generates fluids to offset dryness</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Seaweed and kelp</td>
                <td className="px-3 py-2">Cold, salty</td>
                <td className="px-3 py-2">Cooked in soups, stews, or salads</td>
                <td className="px-3 py-2">Softens hardness and clears accumulated heat</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cucumber</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Eaten raw or lightly salted</td>
                <td className="px-3 py-2">Hydrating and gently cooling; easy on the system</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Watermelon</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Eaten fresh, especially in summer</td>
                <td className="px-3 py-2">Drains heat through urine; very hydrating</td>
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
          Because Liver Fire is fundamentally a pattern of too much heat, the foods below may worsen the imbalance by adding warmth, drying the system, or pushing the internal temperature even higher. Limiting them for a few weeks may give the cooling foods room to work, and avoiding alcohol entirely during a flare is often worthwhile.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered the most heating substance for the Liver in TCM; regular drinking may add direct fuel to Liver Fire.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy food.</strong> Chili, hot pepper, and heavy curry are strongly heating and may intensify the headaches and irritability tied to this pattern.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Coffee and energy drinks.</strong> Stimulating and drying; they may keep the nervous system on edge and deepen the heat load.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Lamb and other hot meats.</strong> Among the most warming animal proteins; they may add to the internal heat.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Deep-fried foods.</strong> Frying concentrates heat and oil, producing heavy foods that burden a system already running hot.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive ginger and cinnamon.</strong> Helpful in small amounts for cold patterns, these warming spices may aggravate Liver Fire when overused.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Cool Liver Fire
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but Liver Fire is rooted in stress and pressure, so daily habits that release tension matter just as much. These habits focus on creating outlets, moving the body, and giving the Liver system ways to vent the heat it has built up. None require special equipment, only consistency and a willingness to let things out rather than hold them in.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Express emotions before they escalate.</strong> Since the Liver processes feeling, finding healthy outlets such as journaling, talking with a trusted friend, or working with a therapist may prevent frustration from settling into the body as heat.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Exercise vigorously enough to sweat.</strong> Working up a real sweat a few times a week may help release trapped heat through the skin and move stagnant Liver energy that would otherwise keep pressurizing.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Get outdoors into green spaces.</strong> In TCM, green is the color of the Liver. Walking among trees, parks, or gardens is thought to support this organ, and the fresh air and movement may encourage trapped heat to disperse.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice meditation or slow breathing.</strong> A few minutes of long, relaxed exhalations may calm the nervous system and lower the internal heat that constant stress generates.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Reduce screen time.</strong> The Liver opens into the eyes, and prolonged visual strain from screens is thought to draw on Liver energy. Giving your eyes regular breaks may ease that drain.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Eat lighter meals.</strong> Heavy, greasy meals add heat and slow the system down. Lighter, simpler meals are easier to process and place less strain on a Liver that is already overheated.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Avoid alcohol entirely during flares.</strong> Because alcohol is so heating for the Liver, cutting it out completely during a Liver Fire flare-up may help the cooling foods and habits do their work faster.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Liver Fire can overlap with several medical conditions, including hypertension (high blood pressure), migraines and other headache disorders, eye conditions such as conjunctivitis and glaucoma, anger management issues, and hyperthyroidism. If your symptoms are severe, persistent, getting worse, or accompanied by high blood pressure readings, vision changes, or chest pain, please see a qualified healthcare professional for a proper evaluation. Chinese medicine food therapy and lifestyle adjustments may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
