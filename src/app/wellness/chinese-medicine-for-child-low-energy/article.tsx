
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildLowEnergyArticle() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Low Energy"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Low Energy: Spleen Qi and Kidney Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"When a child seems tired all the time despite sleeping enough, Chinese medicine often looks first at the Spleen, the digestive system that converts food into usable energy. Two patterns commonly appear. Spleen Qi Deficiency shows up as low stamina, a pale face, and a crash after meals, because the body cannot generate enough daily fuel. Kidney Qi Deficiency, a deeper pattern, adds late-afternoon heaviness, weak legs, and frequent clear urination, since the Kidney provides the baseline reserve that growth and activity draw on. Warm, easy-to-digest foods such as sweet potato, jujube dates, and Chinese yam may help the Spleen produce steadier energy, while small amounts of walnut gently support the Kidney reserve over several weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Child Low Energy"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, energy is not a single thing. It comes from two sources that work together. The Spleen, the functional system that turns food into Qi, produces the daily fuel a child uses for running, thinking, and growing. The Kidney, the deeper system that stores the inherited reserve called Essence, provides the baseline that keeps the body going when daily fuel runs low. A tired child is often running on an empty Spleen, a strained Kidney, or both."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Children are in a constant state of high demand. They are growing, learning, and moving at a pace that requires a lot of fuel. At the same time, their Spleen, the digestive engine that produces that fuel, is still maturing. This mismatch, high need with a still-developing supply line, is why young children run out of steam more easily than adults. The afternoon crash, the floppy tiredness after a meal, the child who cannot get off the couch after school, these are often signs that the Spleen has spent what it made for the day and has nothing left in reserve."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"The Kidney side matters too. Essence, the inherited reserve stored in the Kidney, is what the body draws on when the Spleen cannot keep up. Children draw heavily on this reserve during growth spurts, after illness, and during demanding school terms. If the Spleen is weak and the Kidney reserve is being spent faster than food can refill it, tiredness becomes a daily pattern rather than an occasional thing. The traditional approach is to strengthen the Spleen so it produces more daily Qi, and to gently nourish the Kidney so the reserve is not drained. Warm, sweet, easy-to-absorb foods do both jobs at once, which is why congee and soft porridge remain the foundation of Chinese pediatric dietary care."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Low Energy Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A child who is always tired is usually not dealing with one issue. The tiredness tends to match one of four patterns, sometimes two at once. Matching your child to the closest pattern helps with food and routine choices."}
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
                { p: "Spleen Qi Deficiency", s: "Tired after eating, pale, small appetite, loose stools", m: "Spleen cannot turn food into enough daily Qi", f: "Warm sweet foods: sweet potato, jujube, Chinese yam" },
                { p: "Kidney Qi Deficiency", s: "Late-afternoon fatigue, weak legs, frequent clear urine", m: "Kidney cannot supply the baseline reserve energy", f: "Warming foods: walnut, chestnut in small amounts" },
                { p: "Spleen Yang Deficiency", s: "Cold hands, pale face, loves warmth, tired and chilly", m: "Spleen lacks the fire to process and warm food", f: "Tiny amounts of ginger and cinnamon in cooking" },
                { p: "Heart Blood Deficiency", s: "Tired from mental effort, pale lips, poor sleep, forgetful", m: "Heart lacks the nourishment to sustain activity", f: "Red dates and longan in small amounts" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Low Energy in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Persistent tiredness in a child is rarely about laziness. It is usually the result of small daily mismatches between what a child's Spleen and Kidney can supply and what the day demands of them. Five factors show up again and again."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet heavy in cold and raw foods"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, cold food requires the body to spend warmth and energy digesting it. For a child whose Spleen is still developing, a daily cold smoothie or a bowl of raw salad pulls energy away from where it is needed. The Spleen works harder, produces less usable Qi, and the child feels more tired, not less. Warm, cooked food gives the Spleen a head start."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Irregular sleep and late bedtimes"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Spleen rebuilds during rest, and the Kidney reserve refills overnight. A child who sleeps late, or whose sleep is broken by screens and stimulation, does not give these systems time to recover. Over a school term, the deficit builds quietly until tiredness becomes the default state. Consistent sleep before 9 PM is one of the highest-leverage changes a family can make."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Recovery from repeated illness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Every cold, flu, or stomach bug draws on the Spleen and Kidney. A child who catches one illness after another, common in the first years of school, never fully rebuilds between bouts. The traditional approach after illness is a few days of congee, broth, and soft foods before returning to a normal diet, so the Spleen can recover rather than being pushed straight back to work."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Skipping breakfast or rushed mornings"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Spleen is most receptive to fuel in the morning. A child who skips breakfast, or who eats something cold and quick on the way out the door, starts the day with an empty tank. By mid-morning the body is already drawing on Kidney reserve, and by afternoon the child is spent. A warm breakfast within an hour of waking sets the energy curve for the whole day."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overscheduling without rest"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Sustained mental and physical effort consumes Qi directly. A child who goes from school to tutoring to sports to homework, with no downtime, is draining the Spleen faster than meals can refill it. The traditional Chinese view is that children need unstructured rest, not just structured activity, for the Spleen to turn the day's food into lasting energy. A short rest after school often matters more than another activity."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Build a Child's Energy"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods come from traditional Chinese dietary practice for children with low stamina. Some build Spleen Qi for daily fuel, some gently nourish the Kidney reserve, and most are everyday staples. Use them as a starting point and watch what your child actually enjoys and digests well."}
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
                { food: "Sweet potato", prop: "Neutral, sweet", help: "Steady warming energy that is easy for a tired Spleen to use", prep: "Roast or steam, then mash" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Supports Spleen Qi and Blood; a natural sweetness children like", prep: "Pit 2-3, add to porridge or tea" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Mildly builds Spleen Qi for steadier daily energy", prep: "Peel and slice into porridge or soup" },
                { food: "Millet", prop: "Warm, sweet", help: "The most digestible grain, gentle on a tired Spleen", prep: "Cook as porridge with jujube" },
                { food: "White rice", prop: "Neutral, sweet", help: "The base energy grain, easy for a child to absorb", prep: "Cook soft with extra water" },
                { food: "Pumpkin", prop: "Warm, sweet", help: "Soft, sweet, and supports the Spleen without effort", prep: "Steam or mash into porridge" },
                { food: "Walnut", prop: "Warm, sweet", help: "Gently supports the Kidney reserve for deeper, longer-lasting energy", prep: "1-2 per day for ages 5 and up" },
                { food: "Black sesame", prop: "Neutral, sweet", help: "Nourishes Kidney Essence and Blood to support the reserve", prep: "Grind and sprinkle on porridge" },
                { food: "Chicken or vegetable broth", prop: "Warm", help: "Easy to absorb and carries warmth straight to the middle", prep: "Slow-simmer with a slice of ginger" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Energy Is Low"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in small amounts, but for a tired child they either drain the Spleen or borrow energy the body cannot spare. Limiting them during low-energy stretches may make a real difference."}
        </p>
        <ul className="space-y-2">
          {[
            "Ice water and very cold drinks, which force the body to spend energy warming them before it can use them",
            "Excessive raw fruit, especially cold-natured ones like banana and citrus, in large daily amounts",
            "Concentrated sweets, which create a brief spike followed by a deeper crash that leaves the Spleen more depleted",
            "Deep-fried and heavy greasy foods, which exhaust a weak Spleen and produce sluggish dampness",
            "Too much dairy, considered damp-forming in TCM and energy-draining for a child who already feels heavy",
            "Caffeinated and energy drinks, which borrow from the Kidney reserve and leave the body with less later",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Support Steady Energy"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The Spleen and Kidney respond to rhythm, warmth, and rest more than to any single food. These small daily habits create the conditions in which energy can naturally build."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm porridge sets the energy curve for the whole day." },
            { h: "Consistent sleep and wake times.", d: "The Kidney reserve refills overnight on a predictable schedule. Late nights on weekends shift the whole week." },
            { h: "Outdoor play for twenty minutes daily.", d: "Movement and daylight move Qi through the body and support the natural rhythm that energy follows." },
            { h: "Small portions, more often if needed.", d: "A tired Spleen handles half a bowl better than a full one. Five small meals often beat three big ones for young children." },
            { h: "Largest meal at lunch, lighter dinner.", d: "Digestive strength peaks at midday. A heavy dinner keeps the Spleen working overnight and leaves less for recovery." },
            { h: "A short rest after school before homework.", d: "A tired child cannot focus. Ten minutes of quiet rest lets the Spleen catch up before the next demand." },
            { h: "No screens for an hour before bed.", d: "Stimulation delays the deep sleep the Kidney needs to refill the reserve. Calm evenings set up stronger mornings." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Sweet Potato and Jujube Energy Porridge"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the porridge traditional Chinese families lean on when a child seems drained and the Spleen needs gentle rebuilding. It takes about 50 minutes of mostly hands-off time and uses four everyday ingredients. Sweet potato gives steady warmth, jujube supports Spleen Qi and Blood, and rice provides the easily absorbed base. It is one of the simplest ways to help a tired child refuel."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/2 cup white rice, jasmine or short grain"}</li>
            <li>{"4 cups water"}</li>
            <li>{"1 small sweet potato, peeled and diced small"}</li>
            <li>{"3 red dates (jujube), pitted"}</li>
            <li>{"Tiny pinch of salt at the end"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the rice until the water runs clear."}</li>
            <li>{"2. Combine rice, water, sweet potato, and red dates in a pot."}</li>
            <li>{"3. Bring to a boil, then reduce to very low heat."}</li>
            <li>{"4. Simmer 40 to 50 minutes, stirring now and then so the rice does not stick."}</li>
            <li>{"5. The porridge is ready when the sweet potato is soft and the rice looks like a thick, smooth porridge."}</li>
            <li>{"6. Mash the sweet potato pieces slightly for younger children."}</li>
            <li>{"7. Add a tiny pinch of salt and serve warm."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Breakfast, or as an after-school snack"}</li>
            <li>{"Half a bowl for ages 2-5, a full bowl for ages 6 and up"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Daily for 1 week, then 3 to 4 times per week as maintenance"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First week: often slightly better morning energy"}</li>
            <li>{"After 2 weeks: fewer afternoon crashes and steadier stamina"}</li>
            <li>{"After 3 to 4 weeks: more consistent energy through the school day"}</li>
            <li>{"Long-term: continue 2 to 3 times per week as a maintenance habit"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-low-energy"
        imageSrc="/images/pinterest/child-low-energy.jpg"
        alt="Chinese medicine for child low energy - sweet potato and jujube energy porridge recipe card"
        pinDescription="Sweet potato and jujube porridge for child low energy. A Chinese medicine recipe to support Spleen Qi."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Tiredness in children can have many causes, some of which need medical attention. Always consult your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Unexplained weight loss or failure to grow"}</li>
          <li>{"Falling asleep during meals, play, or other activities"}</li>
          <li>{"Breathlessness or rapid breathing with mild exertion"}</li>
          <li>{"Pale, yellowish, or unusually flushed skin"}</li>
          <li>{"Persistent fatigue despite good sleep, warm food, and regular routine"}</li>
          <li>{"Any regression in skills, energy, or development"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-low-energy"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-growing-tall" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Growing Tall: Kidney Essence and Growth Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Low energy and slow growth often share a Kidney root. This page covers the growth side of the same Kidney-Spleen cluster."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-bedwetting" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Bedwetting: Kidney Qi and Warming Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A tired child and a child who wets the bed often share the same Kidney Qi weakness. This page covers the holding side of Kidney energy."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-digestion" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Digestion: Spleen-Supporting Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Energy starts with digestion. A weak Spleen cannot turn food into Qi, so low energy and weak digestion usually travel together."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-fatigue" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Fatigue: The Adult Version"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Spleen and Kidney patterns. Useful for parents who recognize the same tiredness in themselves."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Low energy in children often mirrors a Qi Deficient parent. Understanding your own constitution helps explain family patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <p className="text-xs text-text2/50 mt-8 leading-relaxed">
        {"This page is for educational purposes only and describes traditional Chinese dietary philosophy. Always consult your pediatrician before making changes to your child's diet or routine."}
      </p>
    </main>
  )
}
