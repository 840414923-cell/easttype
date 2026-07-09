import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForBrainFogArticle() {
  const slug = "chinese-medicine-for-brain-fog"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Brain Fog</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Brain Fog: Causes &amp; Clarity Foods
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Brain fog in Chinese medicine usually means one of two things. Either the Spleen is too weak to make enough energy for the mind, or dampness is clouding the head. Both create that heavy, unclear, can&apos;t-focus feeling that settles over thinking. Foods that strengthen the Spleen, such as rice congee, sweet potato, and Chinese yam, and foods that drain dampness, such as adzuki beans and coix seed, may help lift the fog over time. If this sounds familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you check the pattern.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Brain Fog
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Clear thinking depends on two supplies in Chinese medicine. The first is Qi from the Spleen, the energy that powers the body and the mind. The second is Blood nourishment, especially from the Heart and Liver, which moistens and steadies the mind. When the Spleen is strong, mental energy stays even through the day. When Blood is sufficient, memory and focus hold steady. Brain fog often appears when one or both of these supplies run low.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen is the organ responsible for turning food and drink into usable energy. When it is overworked by cold food, irregular meals, heavy sugar, or constant worry, its output drops. The mind then runs on a thin fuel supply, and thinking turns sluggish. This is one half of the fog. The feeling that comes with it often includes tiredness after eating, bloating, and a soft or weak quality to the thoughts, as if the brain is running at half speed.
        </p>
        <p className="text-text2 leading-relaxed">
          The other half is dampness. Dampness is the murky residue that builds when the Spleen cannot process fluids cleanly. It is heavy, sticky, and slow. When it rises toward the head, it is described as clouding the mind. The metaphor is exact: a foggy head in dampness often feels heavy, muzzy, and wrapped in cotton, just like a humid day. This is different from a neurological condition. The fog is a functional drop in clarity, and it tends to shift with food, rest, and weather. For the background idea, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Patterns Behind Brain Fog
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Not every foggy head follows the same shape. Chinese medicine sorts brain fog by the quality of the fog and the company it keeps. The texture of the unclear feeling, what makes it better or worse, and the signs that travel with it can point to the right direction. The table below maps the most common patterns. Two of them may overlap, especially in people who eat irregularly and carry stress at the same time.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Fog Quality</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency</td>
                <td className="px-3 py-2">Fog worse after eating</td>
                <td className="px-3 py-2">Fatigue, bloating, soft stools</td>
                <td className="px-3 py-2">Strengthen the Spleen</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Dampness Clouding the Head</td>
                <td className="px-3 py-2">Heavy, muzzy, wrapped head</td>
                <td className="px-3 py-2">Sticky stools, thick tongue coat</td>
                <td className="px-3 py-2">Drain dampness</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart Blood Deficiency</td>
                <td className="px-3 py-2">Fog with poor memory</td>
                <td className="px-3 py-2">Pale face, insomnia, anxiety</td>
                <td className="px-3 py-2">Nourish Blood</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Kidney Essence Deficiency</td>
                <td className="px-3 py-2">Fog with age-related decline</td>
                <td className="px-3 py-2">Weak back, dizziness, ringing ears</td>
                <td className="px-3 py-2">Nourish the Kidney</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These patterns are starting points rather than fixed labels. If the tired, post-meal fog sounds familiar, the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link> guide explains the constitution most often tied to this issue. You can read more about <Link href="/symptoms/why-do-i-have-brain-fog" className="text-accent hover:underline">why brain fog happens</Link>, and explore the underlying patterns in our guides on <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> and <Link href="/wellness/what-is-dampness" className="text-accent hover:underline">what dampness is</Link>. Our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see which pattern fits your constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Worsens Brain Fog
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several everyday habits can deepen the patterns behind brain fog. Knowing them can lift the fog faster than any single food. The five below come up most often.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Sugar and Refined Carbs</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Sweets, pastries, and white flour create a fast spike and a steep crash. Each crash drops the brain&apos;s fuel supply for an hour or more, and the fog thickens right after. Repeated through the day, sugar trains the mind to run in short bursts followed by long flat stretches.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Cold Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Ice water, smoothies straight from the fridge, and raw salads are cold in temperature. The Spleen is said to work best with warmth. Cold food slows its function, and the energy supply to the mind drops in turn. Warm, cooked food is easier on this system.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Irregular Eating</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Skipping meals or eating at random times starves the brain of steady fuel. The Spleen also favors rhythm. When meals come at predictable hours, the mind tends to stay more even. Skipping breakfast is a common cause of a foggy late morning.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Overthinking</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine holds that excessive worry and mental strain consume Spleen energy. Long hours of anxious thinking can leave the head heavy and the thoughts slow, even when the diet is good. Brief breaks away from screens can ease this drain.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Lack of Movement</h3>
        <p className="text-text2 leading-relaxed">
          Gentle movement keeps Qi flowing. Long stretches of sitting slow that flow, and dampness tends to settle in a body that does not move. A short walk after a meal can be enough to keep the channels clear and the head lighter.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Clear Brain Fog
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is one of the most accessible tools for working with brain fog. The aim is twofold: strengthen the Spleen so it can produce steady mental fuel, and drain dampness so the head stays clear. These foods have been used for generations to support clear thinking. Regular small portions across the week tend to work better than a single large serving, and it may take several weeks of steady use before the difference becomes clear. Choose two or three that fit your taste and include them often.
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
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Nourish Kidney essence; traditional brain and memory food</td>
                <td className="px-3 py-2">Eaten raw or lightly toasted, a small handful daily</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Nourish Liver Blood and support the eyes and mind</td>
                <td className="px-3 py-2">Soaked in warm water or added to tea and congee</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Nourish the Kidney and Blood; steady brain support</td>
                <td className="px-3 py-2">Ground into porridge or sprinkled on rice</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Rice congee</td>
                <td className="px-3 py-2">Gentle, warm fuel that strengthens Spleen energy</td>
                <td className="px-3 py-2">Simmered slowly until soft, eaten warm</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sweet potato</td>
                <td className="px-3 py-2">Provides steady, slow energy for the mind</td>
                <td className="px-3 py-2">Steamed, roasted, or boiled in soup</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Strengthens the Spleen and supports the Kidney</td>
                <td className="px-3 py-2">Steamed, boiled in soup, or added to congee</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Green tea</td>
                <td className="px-3 py-2">Gentle mental lift without the crash of coffee</td>
                <td className="px-3 py-2">Brewed light and sipped warm</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mint tea</td>
                <td className="px-3 py-2">Moves stuck Qi and lifts a heavy, muzzy head</td>
                <td className="px-3 py-2">Steeped as a light tea, warm or cooled</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Adzuki beans</td>
                <td className="px-3 py-2">Drain dampness and ease a heavy feeling</td>
                <td className="px-3 py-2">Cooked into a thin soup or congee</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          The aim is not to eat everything on the list. Pick a few that fit your taste and your foggiest times of day, then use them through the week.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because brain fog reflects weak Spleen energy and a build-up of dampness, the items below may deepen the problem by overloading the system or chilling its function.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive sugar.</strong> Sweets and pastries cause a spike and crash that drops mental fuel for an hour or more.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Too much coffee.</strong> Caffeine offers a short lift followed by a deeper dip, and it can dry the system over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Heavy greasy meals.</strong> Fried and oily foods are hard to process and tend to generate dampness that clouds the head.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice cold drinks.</strong> Cold temperature slows the Spleen, so the energy supply to the mind drops.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Skipping meals.</strong> Missing meals starves the brain of steady fuel and weakens the rhythm the Spleen prefers.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits for Mental Clarity
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits carry equal weight. The practices below focus on giving the Spleen warmth, rhythm, and rest, so the mind receives steady fuel all day.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat breakfast before 9 AM.</strong> The Spleen is most active in the morning. A warm, simple breakfast sets steady mental fuel for the whole day.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Chew thoroughly.</strong> Digestion begins in the mouth. Chewing well eases the load on the Spleen and helps nutrients reach the mind.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Take short walks after meals.</strong> Gentle movement keeps Qi flowing and clears the heavy feeling that can follow eating.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Reduce sugar and processed carbs.</strong> Steady fuel from whole foods avoids the crash that thickens the fog in the afternoon.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Get morning sunlight.</strong> Light helps set the body&apos;s rhythm, which in turn supports steady energy and clearer thinking.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Practice single-tasking.</strong> Doing one thing at a time lowers mental strain and conserves the Spleen energy that worry would burn.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Stay hydrated with warm water.</strong> Sip warm or room-temperature water through the day to support steady function without chilling the Spleen.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Persistent brain fog may relate to conditions that need medical care. Thyroid disorders, vitamin B12 deficiency, sleep apnea, depression, and post-viral syndromes can all cause ongoing mental cloudiness and should be evaluated by a qualified healthcare professional. Sudden fog, confusion, or fog with other neurological signs needs prompt attention. Chinese medicine food therapy may complement conventional care, but it should never replace diagnosis or treatment from a licensed medical provider.
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
