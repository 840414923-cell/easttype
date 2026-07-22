
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildSleepArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Sleep"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Sleep: Heart Shen and Calming Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"When a child cannot settle at night, Chinese medicine often looks first to the Heart and its Shen, the word for the spirit-mind that rests in Heart blood and Yin. Two patterns tend to appear. Heart Yin Deficiency shows up as restlessness, dry mouth, and waking between 1 and 3 AM, because there is not enough cooling moisture to hold the Shen down. Heart Blood Deficiency looks like a pale face, anxious dreams, and trouble falling asleep in the first place, since the Heart lacks the substance to house the mind. Gentle foods may help the Heart steady itself. Lily bulb moistens and calms. Lotus seed quiets the mind. Jujube dates quietly build Heart blood. A small bowl of lily and lotus congee, taken warm in the early evening, may help a wakeful child drift off more easily over a week or two."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Sleep"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, sleep is not simply the body switching off. It is the Shen, often translated as spirit or mind, settling back into the Heart to rest. For that to happen, the Heart needs enough blood to anchor the Shen and enough Yin to keep it cool. Picture the Shen as a small bird. Blood is the nest, and Yin is the shade that keeps the nest from getting too warm. When the nest is thin or the shade is missing, the bird flutters, and sleep turns shallow, broken, or full of dreams."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Children present a special case. Their bodies are growing fast, which means blood and Yin are constantly being drawn on for growth. A child who is eating poorly, recovering from an illness, or simply moving through a stretch of rapid growth may temporarily run short on the reserves the Heart relies on at night. This is one reason sleep often falls apart around growth spurts or after a string of colds. It is not bad behavior. It is a Heart running low on nesting material."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"The Heart also has a partner organ, the Kidney, which in TCM theory supplies the cooling water that keeps Heart fire in check. When a child's Kidney Yin is still maturing, the Heart can run slightly warm, and the Shen has trouble settling. Classical pediatric writing describes this as the Heart and Kidney not yet communicating smoothly. The practical takeaway is that a child's restless sleep usually points to a Heart that needs a little more substance, or a little more cool, to hold the Shen through the night."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Sleep Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Restless sleep in children is rarely one thing. It usually maps to one of four patterns, sometimes in combination. Finding the closest match guides the food direction."}
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
                { p: "Heart Yin Deficiency", s: "Restless, dry mouth, wakes 1 to 3 AM", m: "Not enough cooling moisture to anchor the Shen", f: "Lily bulb and lotus seed congee" },
                { p: "Heart Blood Deficiency", s: "Trouble falling asleep, pale face, anxious dreams", m: "Heart lacks the substance to house the mind", f: "Jujube and longan tea" },
                { p: "Heart Fire", s: "Very restless, red face, wakes crying, thirsty", m: "Heat agitating the Shen upward", f: "Lotus seed heart (lian zi xin) tea" },
                { p: "Spleen and Heart dual deficiency", s: "Worry at bedtime, poor appetite, light sleep", m: "Spleen cannot make enough blood for the Heart", f: "Chinese yam and jujube porridge" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Restless Sleep in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A child's sleep rarely breaks apart for one reason. It is usually a combination of a Heart that is low on reserves and daily habits that ask too much of those reserves. Five causes show up repeatedly."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Growth spurts and rapid development"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"During a growth spurt, a child's body pours resources into building bone, muscle, and blood. The Heart's share can dip temporarily, leaving less to anchor the Shen at night. Parents often notice sleep worsening a week or two before a child suddenly needs new shoes. Once the spurt passes, sleep usually settles on its own, and gentle blood-building foods may help bridge the gap."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Recovery from illness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"After a fever, a stomach bug, or a string of colds, a child's Yin and blood are genuinely thinner. The body has spent reserves fighting the illness. Night waking, vivid dreams, and clinginess at bedtime are common in the week or two after recovery. Warm, moistening foods and earlier nights give the Heart what it needs to refill."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overstimulation and screens before bed"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, the Shen responds to what the senses take in. Bright screens, loud games, and exciting stories in the last hour before bed stir the Shen upward exactly when it should be settling. A child who falls asleep watching a tablet often sleeps lightly and wakes often, because the Shen never fully descended into the Heart."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Irregular sleep schedule"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Heart, like the Spleen, likes rhythm. A child whose bedtime shifts by two hours from one night to the next has a Heart that cannot predict when to start winding down. Predictable bed and wake times, even on weekends, let the Shen settle more quickly because the body learns the signal."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet that overheats the Heart"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Spicy dinners, chocolate, and heavy sweets in the evening add warmth to a system that should be cooling down for sleep. A child whose Heart is already running slightly warm gets pushed over the edge, and the Shen cannot settle. A light, warm, early dinner is one of the simplest sleep supports available."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Calm a Child's Sleep"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they support the Heart's ability to hold the Shen, either by adding moisture, building blood, or gently clearing warmth. None are strong sedatives. They are gentle, food-level supports meant to be used over a week or two."}
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
                { food: "Lily bulb (Bai He)", prop: "Cool, sweet", help: "Moistens Heart and Lung Yin, calms the mind", prep: "Cook into congee with lotus seed" },
                { food: "Lotus seed (Lian Zi)", prop: "Neutral, sweet", help: "Quiets the mind and steadies the Spleen", prep: "Soak, cook into porridge" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Builds Heart blood, natural sweetness kids like", prep: "Pit 2 to 3, add to tea or congee" },
                { food: "Longan", prop: "Warm, sweet", help: "Supports Heart blood and calms the Shen", prep: "3 to 5 in warm water, skip if heat signs" },
                { food: "Whole wheat", prop: "Cool, sweet", help: "Traditionally used to calm the mind and steady sleep", prep: "Cook as porridge or in soup" },
                { food: "Mulberry", prop: "Cool, sweet", help: "Builds blood and Yin, gentle for children", prep: "Small handful, fresh or dried" },
                { food: "Egg yolk", prop: "Neutral, sweet", help: "Nourishes Heart blood and Yin", prep: "Soft boiled, half for young children" },
                { food: "Pork", prop: "Neutral, sweet", help: "Gently builds Yin without adding heat", prep: "Slow cooked in broth" },
                { food: "Chamomile", prop: "Cool", help: "Gentle calming flower, caffeine free", prep: "Weak infusion, small cup before bed" },
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
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit Near Bedtime"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in themselves. They are the ones most likely to warm or stir a Heart that should be cooling down for sleep. Pulling them back in the evening often makes a visible difference within a week."}
        </p>
        <ul className="space-y-2">
          {[
            "Chocolate and cocoa near bedtime, which are warming and mildly stimulating",
            "Sugary snacks after dinner, which create a brief heat spike followed by a crash that can wake the child",
            "Fried and heavy evening meals, which keep the Stomach working when it should be resting",
            "Caffeinated drinks, including some sodas and iced teas, that directly stir the Shen",
            "Very spicy dinners, which add heat to a Heart that is already running warm",
            "Ice-cold drinks at night, which shock the system and can wake a child fully",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help the Shen Settle"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is half the work. The other half is giving the Heart a clear signal that night is coming. These are the small, repeatable habits that traditional Chinese pediatric advice comes back to."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Set a wind-down hour.", d: "Screens off, lights dimmed, voices low. The Shen reads the room, and a calm room tells it to descend." },
            { h: "A warm foot soak before bed.", d: "Five minutes of warm water on the feet draws warmth down from the head, which is exactly what a restless Heart needs." },
            { h: "The same bedtime every night.", d: "The Heart likes rhythm. A predictable bedtime lets the body start the wind-down before you ask it to." },
            { h: "A small warm drink in the evening.", d: "Half a cup of warm milk or weak chamomile gives the Stomach something gentle to do and supports the settling process." },
            { h: "Keep the bedroom cool and dark.", d: "The Heart settles best in cool shade. A warm, bright room keeps the Shen floating near the surface." },
            { h: "A gentle belly rub.", d: "A slow clockwise rub on the belly with warm hands settles the middle, which supports the Heart above it." },
            { h: "No heavy meals within 2 hours of sleep.", d: "A Stomach still working on dinner keeps the whole system awake. Light and early is the rule for the evening meal." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Lily and Lotus Calming Congee"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the congee most often shared with parents of wakeful children. It is simple, mostly hands-off, and uses ingredients that gently build Heart Yin and blood. It is one of the most reliable ways to help a child's Heart settle over a week or two."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/2 cup white rice, jasmine or short grain"}</li>
            <li>{"5 cups water"}</li>
            <li>{"20g dried lily bulb (bai he)"}</li>
            <li>{"20g lotus seed, soaked for an hour"}</li>
            <li>{"2 red dates (jujube), pitted"}</li>
            <li>{"Tiny pinch of salt at the end"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the rice until the water runs clear."}</li>
            <li>{"2. Drain the soaked lotus seeds and split any with a green sprout (the sprout is bitter, save it for the night terrors tea)."}</li>
            <li>{"3. Combine rice, water, lily bulb, lotus seed, and red dates in a pot."}</li>
            <li>{"4. Bring to a boil, then reduce to very low heat."}</li>
            <li>{"5. Simmer 45 to 60 minutes, stirring now and then so the rice does not stick."}</li>
            <li>{"6. The congee is ready when it looks like a smooth, soft porridge."}</li>
            <li>{"7. Skim out the red date skins if your child prefers. Add a tiny pinch of salt."}</li>
            <li>{"8. Serve warm, in small portions."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Early evening, about 2 hours before bed"}</li>
            <li>{"Half a bowl for ages 3 to 7, a small bowl for ages 8 and up"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"3 to 4 times per week for 2 weeks"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First few nights: usually easier settling at bedtime"}</li>
            <li>{"After 1 week: fewer night wakings"}</li>
            <li>{"After 2 to 3 weeks: steadier sleep, less bedtime resistance"}</li>
            <li>{"Long-term: continue 2 times per week as a maintenance habit"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-sleep"
        imageSrc="/images/pinterest/child-sleep.jpg"
        alt="Chinese medicine for child sleep - heart calming lily and lotus seed soup recipe card"
        pinDescription="Lily bulb and lotus seed soup for child sleep. A gentle Chinese medicine recipe to calm a restless Heart Shen."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Always consult your pediatrician about your child's sleep, and seek prompt care if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Loud snoring or pauses in breathing during sleep"}</li>
          <li>{"Sleep that suddenly becomes much worse with no clear cause"}</li>
          <li>{"Gasping or stopping breathing for a moment at night"}</li>
          <li>{"Extreme daytime sleepiness or falling asleep at odd times"}</li>
          <li>{"Signs of pain that seem to wake the child"}</li>
          <li>{"Persistent sleep trouble lasting more than 2 to 3 weeks"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-sleep"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-night-sweats" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Night Sweats"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"If your child also wakes drenched in sweat, the two often share a Yin deficiency root. This page covers the moistening foods that may help."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-night-terrors" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Night Terrors"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"When the disruption looks more like sudden screaming than restlessness, Heart Heat or Phlegm Heat may be involved. A different food direction applies."}</p>
          </Link>
          <Link href="/wellness/heart-yin-deficiency" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Heart Yin Deficiency: A Complete Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same pattern. Parents who notice nightly wakefulness in themselves often share the Heart Yin signs, since these patterns run in families."}</p>
          </Link>
          <Link href="/wellness/what-is-shen" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"What Is Shen? The Mind-Spirit in Chinese Medicine"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The Shen is the TCM word for the spirit-mind housed by the Heart. Understanding it explains why Heart blood and Yin matter so much for sleep."}</p>
          </Link>
          <Link href="/types/yin_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Yin Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A child with restless sleep and a warm, dry quality may sit on the Yin deficient side. Knowing the family constitution helps explain why sleep patterns repeat across generations."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <footer className="text-xs text-text2/50 leading-relaxed border-t border-border/30 pt-6 mt-10">
        {"This article shares traditional Chinese dietary philosophy for families and is not medical advice. Always consult your pediatrician before making changes to your child's diet or sleep routine."}
      </footer>
    </main>
  )
}
