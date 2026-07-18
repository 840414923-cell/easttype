import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function SanFuTcmArticle() {
  const slug = "san-fu-tcm"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">San Fu TCM</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        San Fu Days in TCM: Summer&apos;s Window for Winter Wellness
      </h1>
      <p className="text-text2 text-sm mb-6">11 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          San Fu (三伏) is the hottest 30 to 40 day stretch of summer, split into three periods known as First Fu, Middle Fu, and Last Fu. In Chinese medicine, this window matters because yang energy peaks at the body&apos;s surface while the deeper organs stay surprisingly cool. The traditional practice of &quot;winter disease, summer support&quot; (冬病夏治) uses this moment to address cold-type patterns such as winter coughs, cold limbs, and yang deficiency through specific warming foods, daily habits, and, in clinics, herbal patches placed on points of the back. This guide covers the principles anyone can apply at home.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is San Fu in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The phrase San Fu (三伏) literally means &quot;three hidden periods.&quot; It refers to the three stretches of days that fall between mid-July and mid-August in the western calendar, calculated each year through the traditional stem-branch cycle. The character Fu (伏) carries the sense of hiding or crouching, which describes how yin energy is forced beneath the surface by peak summer yang. The body mirrors this: warmth moves outward to the skin and limbs, while the inner organs remain cooler than at any other time of year.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Period</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Approximate Timing</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Length</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Focus</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">First Fu (初伏)</td>
                <td className="px-3 py-2">Mid-July</td>
                <td className="px-3 py-2">About 10 days</td>
                <td className="px-3 py-2">Settling into the practice; introducing warm foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Middle Fu (中伏)</td>
                <td className="px-3 py-2">Late July to early August</td>
                <td className="px-3 py-2">10 or 20 days</td>
                <td className="px-3 py-2">Peak of the window; the deepest support</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Last Fu (末伏)</td>
                <td className="px-3 py-2">Early to mid-August</td>
                <td className="px-3 py-2">About 10 days</td>
                <td className="px-3 py-2">Tapering; preparing for autumn&apos;s cooling</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          Because exact dates shift each year with the stem-branch calendar, it is more useful to think of San Fu as a roughly four-week window in the deepest part of summer rather than a fixed block of calendar days. The practice does not require pinpoint accuracy. What matters is consistency across the window.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Why Summer Matters for Winter Conditions
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          San Fu practice rests on an idea that can sound counterintuitive at first: the best time to support a cold-type pattern is the hottest part of summer. The reasoning comes from how yang moves through the year. In winter, yang retreats to the deepest layer of the body, leaving the surface cold and vulnerable. That is exactly when chronic cold-type conditions tend to flare: winter coughs, joint pain that worsens in chill, cold hands and feet, and frequent upper respiratory illness. Trying to push warmth in at that moment is difficult, because the body is already in its most contracted, inward state.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Summer turns this around. During San Fu, environmental yang is at its peak, the pores are more open, and the body&apos;s surface is receptive. Warming inputs in this window are thought to reach deeper than they would in winter, when the system is closed and defended. Over time, the idea goes, the support accumulated through one San Fu season may carry into the next winter, reducing the severity of cold-type flare-ups. The framework rests on the same logic that runs through all of Chinese medicine, which you can read more about in our guide to <Link href="/wellness/yin-and-yang" className="text-accent hover:underline">yin and yang</Link>.
        </p>
        <p className="text-text2 leading-relaxed">
          It is important to be precise about what this practice is and is not. It is a way of supporting the body&apos;s own rhythms with food and daily habits, working alongside whatever else you do for your health. It is not a treatment for diagnosed disease, and it does not replace medical care for asthma, arthritis, or any other named condition.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Who Benefits Most from San Fu Practice?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          San Fu is not a universal practice. For someone who runs hot, who tends toward inflammation, or who lives in a consistently warm climate, the same warming inputs can do more harm than good. The clearest match is for people whose patterns tilt toward cold. The table below summarizes the patterns that may benefit most.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Why San Fu May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Common Winter Signs</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Yang Deficiency</td>
                <td className="px-3 py-2">Inner warmth is already low; summer&apos;s external yang can be borrowed and stored</td>
                <td className="px-3 py-2">Cold limbs, pale face, frequent clear urination, low stamina</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cold-type respiratory sensitivity</td>
                <td className="px-3 py-2">Lungs are vulnerable to cold; warming in summer may reduce winter flare-ups</td>
                <td className="px-3 py-2">Recurrent winter cough, cold-induced asthma, frequent colds</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cold-type joint and back discomfort</td>
                <td className="px-3 py-2">Cold contracts and tightens; warmth loosens</td>
                <td className="px-3 py-2">Knee and lower-back pain worse in cold or damp weather</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Spleen Qi Deficiency with cold signs</td>
                <td className="px-3 py-2">Digestion runs cool and weak; light warming supports the Spleen</td>
                <td className="px-3 py-2">Loose stools, fatigue after eating, bloating eased by warmth</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If your pattern tends toward heat, with a red face, feeling hot at night, irritability, or a dry mouth, San Fu warming practice is likely not for you, and the cooling direction in our guide to <Link href="/wellness/cooling-foods-chinese-medicine" className="text-accent hover:underline">cooling foods</Link> will fit better. For cold-type readers, the <Link href="/types/yang_deficient" className="text-accent hover:underline">Yang Deficient body type</Link> page describes the pattern in more detail, and our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help if you are unsure where you fall.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods for the San Fu Period
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The food direction for San Fu is warming, but lightly so. Heavy, greasy, or strongly spicy food overburdens the system in the height of summer, when digestion is already pulled in different directions by the heat. The aim is gentle, consistent warmth: a cup of ginger tea in the morning, a small portion of lamb once a week, dates added to congee. This is also the window for two classical San Fu foods: three-bean soup and congee. The table below gives a starting framework.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Role in San Fu Practice</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Ginger</td>
                <td className="px-3 py-2">Warm</td>
                <td className="px-3 py-2">A morning cup supports digestion and light warming without overdoing it</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Lamb (small portion)</td>
                <td className="px-3 py-2">Warm</td>
                <td className="px-3 py-2">A traditional San Fu food in northern China; eaten in modest amounts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Red dates (jujube)</td>
                <td className="px-3 py-2">Warm</td>
                <td className="px-3 py-2">Added to congee or tea; supports the Spleen and quiets the mind</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Longan</td>
                <td className="px-3 py-2">Warm</td>
                <td className="px-3 py-2">Gentle warming, often paired with dates in tea</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Three-bean soup (mung, adzuki, black bean)</td>
                <td className="px-3 py-2">Neutral to slightly cool</td>
                <td className="px-3 py-2">A classic San Fu drink that clears damp-heat without over-cooling</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Congee (rice porridge)</td>
                <td className="px-3 py-2">Neutral</td>
                <td className="px-3 py-2">The everyday base; carries other ingredients and rests the Spleen</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Chinese yam</td>
                <td className="px-3 py-2">Neutral</td>
                <td className="px-3 py-2">Supports the Spleen and Kidney; mild and food-like</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed">
          Three-bean soup deserves a note of its own. It is one of the few San Fu foods that crosses the warm-cool line, and it does so on purpose. Mid-summer heat often generates damp-heat in the body, which pure warming would worsen. A bowl of three-bean soup clears that excess while the warming staples handle the deeper cold-type pattern. For the broader framework of how Chinese medicine thinks about food, our guide to a <Link href="/wellness/tcm-diet" className="text-accent hover:underline">TCM diet</Link> covers the principles, and our page on <Link href="/wellness/foods-that-warm-your-body" className="text-accent hover:underline">foods that warm your body</Link> lists more options.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits During San Fu
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Foods carry one part of the practice; the rest lives in small daily habits. These are the ones that matter most during the San Fu window.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Drink warm water, not iced.</strong> Cold drinks force the Spleen to generate extra warmth at the exact moment it should be resting. Warm water, ginger tea, or room-temperature drinks are easier on the system.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Sweat lightly, not heavily.</strong> A gentle sweat opens the pores and lets summer yang move through. Heavy sweating drains Qi and yin, which is the opposite of what San Fu practice aims to do.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Rest in the middle of the day.</strong> The TCM body clock places 11 AM to 1 PM as Heart time, when the body benefits most from stillness. A short rest in this window is doubly valuable during San Fu. See our guide to the <Link href="/wellness/tcm-body-clock" className="text-accent hover:underline">TCM body clock</Link> for the full rhythm.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Eat a warm breakfast between 7 and 9 AM.</strong> This is the Stomach and Spleen peak, when a warm meal may be absorbed more efficiently. Skip breakfast or have it cold, and the whole day&apos;s energy can sag.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Avoid direct air-conditioning on bare skin.</strong> Air-conditioning is the modern version of unseasonal cold. Aim the vent away, keep a light layer on, and never sleep directly under it.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Soak your feet in warm water before bed.</strong> A 10 to 15 minute foot soak draws warmth down, settles the mind, and prepares the body for sleep without the strain of cold sheets.</span></li>
        </ol>
        <p className="text-text2 leading-relaxed mt-4">
          None of these are dramatic interventions, and that is the point. San Fu practice works through small, repeated inputs over roughly four weeks, not through a single intense push. Someone who already struggles with the symptoms of the <Link href="/symptoms/why-am-i-always-cold" className="text-accent hover:underline">always feeling cold</Link> pattern may notice the shift most clearly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          San Fu Patches (San Fu Tie): What to Know
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The best-known clinic-based San Fu practice is the herbal patch, called San Fu Tie (三伏贴). Small pads of powdered herbs are placed on specific points of the back, usually along the Bladder meridian, and left in place for a short time. The herbs are warming and slightly irritating, and the goal is to drive warmth into points that correspond to the Lungs and other organs vulnerable to winter cold.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Two cautions are worth stating plainly. First, San Fu Tie is a clinical practice. The points, the herbs, and the duration all vary by person and pattern, and a trained practitioner makes those judgments. Home application without guidance can cause skin burns, miss the useful points entirely, or push the body in the wrong direction for its pattern. Second, the practice is not appropriate for everyone. People with heat patterns, active skin conditions, pregnancy, or certain chronic illnesses are usually advised to skip it.
        </p>
        <p className="text-text2 leading-relaxed">
          If you are curious about San Fu Tie, the right move is to find a licensed TCM practitioner and ask whether it fits your pattern. It is not something this guide can recommend doing at home.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What to Avoid During San Fu
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Several common summer habits work directly against San Fu practice. Most of them are things the modern routine makes easy, which is why they are worth naming.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and iced drinks.</strong> The fastest way to extinguish digestive fire at the moment it should be supported.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw salads and cold foods as the daily default.</strong> Hard on the Spleen in any season, harder in summer when the body is already managing internal shifts.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Direct air-conditioning, especially during sleep.</strong> Cold on bare skin while the pores are open is the modern equivalent of a winter chill in mid-summer.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Heavy sweating through intense workouts.</strong> Drains Qi and yin, which the practice is trying to build.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Overly spicy or greasy food.</strong> Generates damp-heat that the body then has to clear, undoing the warming benefit.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold showers and cold foot baths.</strong> The opposite of the warm foot soaks that support the practice.</span></li>
        </ul>
        <p className="text-text2 leading-relaxed mt-4">
          Notice that, as with the diet direction, nothing here is about absolute prohibition. An iced drink on a very hot day is rarely the issue. What works against San Fu is the daily default: iced coffee every morning, cold salads at every meal, the air-conditioning on full blast every night. Loosening those defaults for four weeks is most of the practice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to Seek Professional Advice
        </h2>
        <p className="text-text2 leading-relaxed">
          San Fu practice is educational and supportive, not a treatment for any diagnosed condition. If you have asthma, arthritis, autoimmune illness, are pregnant, or take prescription medication, please talk to both your doctor and a qualified TCM practitioner before changing your diet, starting new habits, or considering San Fu patches. Chinese food therapy and seasonal practices may complement medical care, but they do not replace diagnosis or treatment.
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
