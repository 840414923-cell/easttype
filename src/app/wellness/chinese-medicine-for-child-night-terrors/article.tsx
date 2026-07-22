
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildNightTerrorsArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Night Terrors"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Night Terrors: Heart Heat and Calming Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"A child who sits up screaming, eyes wide open but not truly awake, then falls back asleep and remembers nothing in the morning, is showing a pattern Chinese medicine describes as heat disturbing the Shen. The Shen is the mind-spirit housed by the Heart, and when heat rises into the Heart at night, it shakes the Shen awake in a state of pure alarm. Two patterns usually sit behind this. Heart Heat comes with a red face, restless sleep, and a child who feels warm to the touch. Phlegm Heat adds a rattling sound in the throat, a heavy or sluggish quality by day, and is often rooted in a tired Spleen producing dampness that turns to heat. Gentle cooling foods may help clear the way. Lotus heart, the green sprout inside the seed, is the classic Heart cooling food. Chrysanthemum clears floating heat. Mung bean gently drains heat downward. A few sips of lotus heart and chrysanthemum tea, given in the late afternoon, may help reduce the frequency of night terrors over several weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Night Terrors"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese medical texts had a name for the child who cries out in terror at night and cannot be consoled. They described it as heat and phlegm disturbing the Heart, and they placed the root of the trouble in two places: the Heart itself, which houses the Shen, and the Spleen, which is supposed to keep phlegm from forming in the first place."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Shen, in this framework, is the aspect of the mind that rests quietly in the Heart's blood at night. For restful sleep, that blood must be cool and clear. When heat enters the Heart, the Shen is jolted, and the child behaves as though woken by a shock that is not really there. The eyes may be open, but the child is not fully conscious, and the episode usually ends with a return to deep sleep and no memory of it."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Where does the heat come from? In children, the most common sources are a Spleen that is too tired to move fluids, so they thicken into phlegm damp, and a diet that adds warmth on top. Phlegm and heat together are heavier than heat alone, and they tend to produce the most intense nighttime episodes. A child with phlegm heat often snores lightly, sweats around the head, and seems foggy or irritable during the day. The traditional approach is not to sedate the child. It is to clear the heat, settle the phlegm, and let the Shen find its quiet place again. Food is the gentlest tool for this, because the same channels that process food can carry heat out of the Heart."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Night Terror Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Night terrors in children usually map to one of four patterns. The first two account for most cases. Identifying the closest match helps choose the right cooling or settling foods."}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left py-2 pr-3 text-accent font-semibold">{"Pattern"}</th>
                <th className="text-left py-2 pr-3 text-accent font-semibold">{"Key Signs"}</th>
                <th className="text-left py-2 pr-3 text-accent font-semibold">{"Mechanism"}</th>
                <th className="text-left py-2 text-accent font-semibold">{"Food Direction"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { p: "Heart Heat", s: "Sudden screaming, red face, feels warm, restless", m: "Heat in the Heart shakes the Shen awake", f: "Lotus heart tea" },
                { p: "Phlegm Heat", s: "Screaming with throat sounds, snoring, foggy by day", m: "Spleen phlegm turns to heat and weighs on the Heart", f: "Mung bean and tangerine peel water" },
                { p: "Heart Yin Deficiency", s: "Milder wake-ups, dry mouth, restless, not full terror", m: "Yin too thin to anchor the Shen", f: "Lily bulb and lotus seed congee" },
                { p: "Food Retention Generating Heat", s: "Terror after a heavy late meal, sour breath, bloated", m: "Undigested food ferments into heat overnight", f: "Hawthorn and radish soup" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/30 align-top">
                  <td className="py-2 pr-3 font-medium text-text">{row.p}</td>
                  <td className="py-2 pr-3 text-text2">{row.s}</td>
                  <td className="py-2 pr-3 text-text2">{row.m}</td>
                  <td className="py-2 text-text2">{row.f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Night Terrors in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Night terrors rarely have a single cause. They usually appear when a Heart already running warm meets a daily habit that adds more heat, more phlegm, or too little rest. Five causes come up again and again."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Heavy meals close to bedtime"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, food that is not fully digested before sleep sits in the Stomach and ferments into heat. That heat rises into the Heart and disturbs the Shen. A child who eats a large or heavy dinner within an hour or two of bed is a classic setup for a night terror. The fix is simple: lighter dinner, earlier, and nothing substantial after."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Spleen weakness producing phlegm"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"When the Spleen is tired, it cannot move fluids cleanly, and some thicken into phlegm damp. That phlegm lingers in the airway and the chest, and when heat meets it, the combination is heavy and disturbing. A child who snores lightly, breathes through the mouth, or sounds congested without a cold is often carrying phlegm damp. Strengthening the Spleen matters as much as clearing the heat."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overtiredness and missed naps"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"It seems backwards, but an overtired child is more prone to night terrors, not less. In TCM terms, deep tiredness can let the body sink into a very deep sleep from which the Shen surfaces in a confused, partial way. A child who skips a needed nap or goes to bed exhausted is more likely to have an episode that night. Consistent, adequate rest is one of the strongest preventives."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Illness with residual heat"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"After a feverish illness, a trace of heat can linger in the body even once the child seems well. That residual heat often surfaces at night, and a stretch of night terrors in the week or two after a fever is common. Gentle heat-clearing foods and extra rest help the body finish clearing what the illness left behind."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overstimulating evenings"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Bright screens, scary stories, and exciting games in the last hour before bed stir the Shen upward and add heat to the system at exactly the wrong time. A child whose evenings are loud and bright is more likely to have the Shen jolt awake. A quiet, dim wind-down is not just nice to have. For a child prone to night terrors, it is part of the approach."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Clear Heat and Settle the Shen"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they gently carry heat downward or out, without chilling the Spleen. Some clear Heart heat directly, some move phlegm, and some simply keep the evening light. Used in small amounts for short stretches, they may help reduce the heat that disturbs the Shen."}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left py-2 pr-3 text-accent font-semibold">{"Food"}</th>
                <th className="text-left py-2 pr-3 text-accent font-semibold">{"TCM Property"}</th>
                <th className="text-left py-2 pr-3 text-accent font-semibold">{"How It May Help"}</th>
                <th className="text-left py-2 text-accent font-semibold">{"How to Prepare"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { food: "Lotus heart (Lian Zi Xin)", prop: "Bitter, cool", help: "The classic food for clearing Heart heat", prep: "2 to 3 in warm water, brief steep" },
                { food: "Chrysanthemum (Ju Hua)", prop: "Sweet, slightly cool", help: "Clears floating heat, calms the head", prep: "Weak infusion, small cup" },
                { food: "Mung bean", prop: "Cool, sweet", help: "Drains heat downward, gentle for children", prep: "Cooked into thin soup" },
                { food: "Bamboo shavings (Zhu Ru)", prop: "Cool", help: "Clears heat and phlegm together", prep: "Brief decoction, strained" },
                { food: "Tangerine peel (Chen Pi)", prop: "Warm, bitter", help: "Moves phlegm without adding much heat", prep: "Small pinch in warm water" },
                { food: "Pear", prop: "Cool, sweet", help: "Moistens and gently clears heat", prep: "Steamed or fresh" },
                { food: "Radish", prop: "Cool", help: "Descends Qi and helps clear stagnation", prep: "Light soup" },
                { food: "Hawthorn (Shan Zha)", prop: "Warm, sour", help: "Helps digest a heavy meal before bed", prep: "Small amount in warm water" },
                { food: "Apple", prop: "Neutral, sweet", help: "Gentle, cooling, easy for children", prep: "Steamed or fresh" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/30 align-top">
                  <td className="py-2 pr-3 font-medium text-text">{row.food}</td>
                  <td className="py-2 pr-3 text-text2">{row.prop}</td>
                  <td className="py-2 pr-3 text-text2">{row.help}</td>
                  <td className="py-2 text-text2">{row.prep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text2/80 text-xs mt-3 leading-relaxed">
          {"Lotus heart and bamboo shavings are clearing foods, not daily tonics. They are meant for short stretches of a few weeks, not everyday use. If your child dislikes the bitter taste, chrysanthemum alone is gentler and still useful."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Night Terrors Are Present"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are the ones most likely to add heat, phlegm, or stagnation to a system that is already producing night terrors. Pulling them back for two to three weeks, while the body clears, often reduces how often episodes happen."}
        </p>
        <ul className="space-y-2">
          {[
            "Heavy, greasy dinners, which ferment into heat overnight",
            "Too much red meat in the evening, which is warming",
            "Sweets and chocolate near bedtime, which feed heat and phlegm",
            "Very spicy foods that pour heat into the system",
            "Large portions within 2 hours of sleep, which leave food sitting and stagnating",
            "Warm-natured nuts in excess, like walnuts and chestnuts, late at night",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help Prevent Night Terrors"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Clearing heat with food is only half the work. The other half is removing the daily habits that keep adding heat and stimulation. These are the habits that traditional pediatric advice and modern observation both point to."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Finish dinner 2 to 3 hours before bed.", d: "An empty, settled Stomach means no food fermenting into heat overnight. This single change prevents more night terrors than any other." },
            { h: "Keep the evening quiet and low-stimulation.", d: "Dim lights, calm voices, gentle play. A quiet evening lets the heat in the system come down before sleep." },
            { h: "Screens off an hour before sleep.", d: "Bright screens stir the Shen and add a kind of mental heat. An hour of screen-free wind-down makes a real difference." },
            { h: "A consistent bedtime, even on weekends.", d: "Overtiredness triggers terrors, and an erratic schedule creates overtiredness. A steady bedtime protects against both." },
            { h: "Keep the bedroom cool, around 18 to 20 degrees.", d: "A cool room helps the Heart shed its daytime heat. A warm, stuffy room keeps heat trapped in the system." },
            { h: "A light evening walk instead of rough play.", d: "Gentle movement settles the Qi downward. Hard, exciting play sends Qi and heat upward, the wrong direction before bed." },
            { h: "A calming wind-down ritual, the same each night.", d: "The body learns the signal. The same few steps each evening tell the Shen it is safe to descend and rest." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Lotus Heart and Chrysanthemum Cooling Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the tea most often shared with parents of children prone to night terrors. It is light, clearing, and meant for the late afternoon, not right before bed. It is a clearing tea, not a sedative, and it works by reducing the heat that later disturbs the Shen."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"3 to 5 lotus hearts (lian zi xin), the green sprouts from inside lotus seeds"}</li>
            <li>{"3 to 4 dried chrysanthemum flowers"}</li>
            <li>{"1 cup water"}</li>
            <li>{"Optional: tiny pinch of rock sugar"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Bring the water to a boil, then let it sit off the heat for a minute."}</li>
            <li>{"2. Place the lotus hearts and chrysanthemum flowers in a small cup."}</li>
            <li>{"3. Pour the just-boiled water over them."}</li>
            <li>{"4. Cover and steep for 3 to 5 minutes, no longer or it turns too bitter."}</li>
            <li>{"5. Strain out the flowers and lotus hearts."}</li>
            <li>{"6. Add a tiny pinch of rock sugar if your child needs it."}</li>
            <li>{"7. Serve warm, in very small portions."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Late afternoon, never right before bed"}</li>
            <li>{"Quarter cup for ages 3 to 7, half a cup for ages 8 and up"}</li>
            <li>{"Serve warm, not cold"}</li>
            <li>{"2 to 3 times per week, not daily"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 1 to 2 weeks: the frequency of episodes may decrease"}</li>
            <li>{"After 2 to 3 weeks: milder episodes, quicker settling afterward"}</li>
            <li>{"After a month: often fewer nights affected overall"}</li>
            <li>{"Pause after 3 weeks and observe, do not use daily long term"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-night-terrors"
        imageSrc="/images/pinterest/child-night-terrors.jpg"
        alt="Chinese medicine for child night terrors - lotus heart and chrysanthemum cooling tea recipe card"
        pinDescription="Lotus heart and chrysanthemum tea for child night terrors. A Chinese medicine recipe to clear Heart Heat and calm the Shen."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Night terrors are common in children and most outgrow them, but always consult your pediatrician, and seek prompt care if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Episodes that happen many times per night"}</li>
          <li>{"Injury to the child or others during an episode"}</li>
          <li>{"Stiffening, jerking, or unusual movements during sleep"}</li>
          <li>{"Daytime behavior changes or new daytime fears"}</li>
          <li>{"Episodes that continue well beyond age 12"}</li>
          <li>{"Any episode where the child is hard to wake or stays unresponsive"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-night-terrors"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-sleep" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Sleep"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"General restless sleep and night terrors often share a Heart root. This page covers the broader Shen and Heart Yin foods that may help a wakeful child."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-night-sweats" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Night Sweats"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Heat, sweats, and terrors often travel together. If your child also wakes drenched, the Yin deficiency foods on this page may help clear the shared root."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-phlegm" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Phlegm"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"When night terrors come with throat sounds and snoring, Phlegm Heat is often involved. This page covers the Spleen and phlegm foods that address the deeper source."}</p>
          </Link>
          <Link href="/wellness/liver-fire" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Liver Fire: When Heat Rises in the Body"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Heart Heat and Liver Fire are close cousins in TCM theory. This adult guide explains how heat rises and disturbs the upper body, useful for parents who see the same pattern in themselves."}</p>
          </Link>
          <Link href="/types/damp_heat" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Damp Heat Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A child whose night terrors come with phlegm, a heavy quality, and a warm, sticky constitution may sit on the damp heat side. Knowing the family type helps explain recurring heat patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <footer className="text-xs text-text2/50 leading-relaxed border-t border-border/30 pt-6 mt-10">
        {"This article shares traditional Chinese dietary philosophy for families and is not medical advice. Always consult your pediatrician before making changes to your child's diet or routine."}
      </footer>
    </main>
  )
}
