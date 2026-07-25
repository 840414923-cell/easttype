
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildBedwettingArticle() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Bedwetting"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Bedwetting: Kidney Qi and Warming Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"Bedwetting past the usual age is framed in TCM as a question of Kidney Qi, the warming and holding energy that keeps fluids in their proper place during sleep. Most children outgrow it as the Kidney matures, but some need a little longer, and Chinese medicine offers gentle food support during that window. Two patterns usually appear. Kidney Qi Deficiency shows up as deep sleep that is hard to wake from, a pale face, cold limbs, and clear, frequent urine. Spleen Qi Deficiency often joins it, adding tiredness and loose stools, because a weak Spleen cannot support the Kidney. Warming foods such as walnut, chestnut, and Chinese yam may help support Kidney Qi over several weeks, while limiting evening fluids and cold foods eases the load overnight."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Child Bedwetting"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, the Kidney and the Bladder govern the body's fluids. The Kidney has a specific function that has no neat equivalent in Western anatomy: it holds fluids in their proper place. During the day, that holding is supported by activity and attention. At night, when the body rests, the Kidney Qi alone is responsible for keeping the bladder closed. If that Qi is still maturing, the holding slips, and bedwetting happens."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"This is a developmental view, not a blame frame. Classical pediatric texts describe the Kidney Qi as maturing gradually, with the holding function usually settling around age 6 or 7. Before that age, bedwetting is considered a normal part of development, not a problem to fix. After 6 or 7, if it continues, Chinese medicine sees it as the Kidney needing a little more time and support, rather than something being wrong. The traditional approach is gentle, warming foods, limited evening fluids, calm nights, and patience. It is not about scolding or training the child harder, because the child is not being careless. The Kidney simply has not finished maturing."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Two things make the holding harder. Cold is the main one. Cold food, cold drinks, and cold hands and feet all signal the Kidney that warmth is low, and the holding function weakens with it. Tiredness is the second. A child who is overtired sleeps too deeply for the Kidney to do its job, which is why bedwetting often happens on the most exhausting days. The traditional foods for this pattern, walnut, chestnut, Chinese yam, are all warming and gentle. They support Kidney Qi over weeks, not overnight. It is also important to rule out medical causes first, since bedwetting can sometimes signal a urinary infection or other issue that a pediatrician should evaluate. Chinese dietary care supports the body during the developmental window, it does not replace medical assessment."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Bedwetting Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Bedwetting that continues past the usual age usually matches one of four patterns. The first is by far the most common. Matching what you see in your child to the closest pattern helps with food and routine choices."}
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
                { p: "Kidney Qi Deficiency", s: "Bedwetting past age 6, deep hard-to-wake sleep, pale, cold limbs, clear urine", m: "Kidney Qi cannot hold fluids overnight", f: "Walnut, chestnut, warm cooked foods" },
                { p: "Spleen Qi Deficiency", s: "Tired, loose stools, bedwetting worse on tiring days", m: "Spleen cannot support the Kidney holding function", f: "Chinese yam, jujube, millet" },
                { p: "Kidney Yang Deficiency", s: "Very cold, pale, loves warmth, hard to wake, frequent night urine", m: "Kidney lacks the warming fire to hold fluids", f: "Tiny amounts of ginger, warm foods" },
                { p: "Bladder Damp-Heat", s: "Strong-smelling dark urine, restless sleep, less common in children", m: "Heat irritates the bladder and disrupts holding", f: "Light draining foods like coix seed" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Can Cause Bedwetting to Persist"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"When bedwetting continues past the usual age, parents often search for a single cause. Chinese medicine usually sees a combination of factors that keep the Kidney Qi from settling. Five show up repeatedly, and most are simple to address."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Immature Kidney Qi"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"This is the most common reason, and it is developmental, not a defect. The Kidney Qi matures on its own timeline, usually settling around age 6 or 7. Some children simply need a little longer, and gentle warming food and patience are the traditional response. Time is often the real medicine here."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet high in cold foods and drinks"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Cold is the Kidney's main enemy in TCM theory. Ice water, cold smoothies, chilled fruit, and raw salads all signal the body that warmth is low, and the Kidney holding function weakens with it. A child who runs cold and eats cold food all day goes to bed with a Kidney already working harder than it should."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Evening fluid intake too close to bedtime"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Kidney can only hold so much. A child who drinks a large glass of water, milk, or juice right before bed asks the Kidney to hold more than it can manage overnight. Shifting most fluids to the daytime, and stopping large drinks an hour or two before sleep, lightens the overnight load."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Deep sleep that is hard to wake from"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Some children sleep so deeply that the bladder's full signal does not reach the brain. Overtiredness makes this worse, which is why bedwetting often happens after the most exhausting days. Calm, consistent evenings and enough rest during the day help the sleep settle into a pattern the Kidney can work with."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Fatigue and overscheduling"}</h3>
        <p className="text-text2 leading-relaxed">
          {"A tired child has weaker Kidney Qi, the same way a tired adult has weaker willpower. Long school days, back-to-back activities, and late bedtimes all drain the Kidney reserve. Bedwetting that worsens during busy weeks is often the Kidney asking for a slower pace, not the child misbehaving."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Support Kidney Qi"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods come from traditional Chinese dietary practice for children whose Kidney Qi needs gentle support. They are warming, easy to digest, and gentle enough for regular use. They support the Kidney during the developmental window, they are not a quick fix."}
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
                { food: "Walnut", prop: "Warm, sweet", help: "Supports Kidney Qi and the warming, holding function", prep: "1-2 per day for ages 5 and up" },
                { food: "Chestnut", prop: "Warm, sweet", help: "Strengthens Kidney and Spleen; warms the lower body", prep: "Roast or cook into soup" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Supports the Spleen so it can assist the Kidney", prep: "Peel and slice into porridge" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Supports Spleen Qi to back up the Kidney", prep: "Pit 2-3, add to tea" },
                { food: "Black sesame", prop: "Neutral, sweet", help: "Nourishes Kidney Essence to support the deeper reserve", prep: "Grind and sprinkle on food" },
                { food: "Lotus seed", prop: "Neutral, sweet", help: "Calms the mind and supports the Kidney holding function", prep: "Soak, cook into porridge" },
                { food: "Warm rice porridge", prop: "Neutral, sweet", help: "A gentle warming evening meal that is easy to digest", prep: "Cook soft with extra water" },
                { food: "Chicken broth", prop: "Warm", help: "Warming and easy to absorb; carries warmth to the middle", prep: "Slow-simmer with a slice of ginger" },
                { food: "Goji berry", prop: "Neutral, sweet", help: "Nourishes Kidney and Liver in small amounts", prep: "5-6 berries in tea or porridge" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Bedwetting Persists"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in general, but for a child whose Kidney Qi is still maturing, they either cool the Kidney or add to the overnight fluid load. Limiting them during this window may help ease the pattern."}
        </p>
        <ul className="space-y-2">
          {[
            "Cold drinks and iced water, which directly weaken the warming Kidney Qi",
            "Large amounts of any fluid after dinner, which overload the Kidney overnight",
            "Watermelon and other cold-natured fruits at night, which add both cold and fluid",
            "Excessive dairy in the evening, which is damp-forming and cools the digestion",
            "Caffeinated and carbonated drinks, which irritate the bladder and add cold",
            "Very sweet foods, which weaken the Spleen that supports the Kidney",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Support Kidney Qi"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The Kidney responds to warmth, calm, and rhythm more than to any single food. These daily habits create the conditions in which the holding function can mature on its own timeline."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Limit fluids after dinner.", d: "Shift most drinking to the daytime and stop large drinks an hour or two before sleep to lighten the overnight load." },
            { h: "A warm bath before bed.", d: "Warmth supports the Kidney. A short warm bath in the evening signals the body that it is safe to settle and hold." },
            { h: "Consistent bedtime before 9 PM.", d: "The Kidney Qi settles on a predictable schedule. Late nights drain the reserve and make the holding harder." },
            { h: "A bathroom visit right before sleep.", d: "Empty the bladder last thing, so the Kidney has the smallest possible load to hold overnight." },
            { h: "Avoid cold foods and drinks during the day.", d: "Cold weakens the Kidney all day, not just at night. Warm meals and room-temperature drinks keep the Qi steady." },
            { h: "A warm breakfast to start the day.", d: "Starting warm sets the Spleen and Kidney up for the day and rebuilds what was spent overnight." },
            { h: "Calm, unhurried evenings.", d: "Overtired children sleep too deeply for the Kidney to hold. Quiet evenings lead to the kind of sleep the Kidney can work with." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Walnut and Chestnut Warming Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the warming tea traditional Chinese families give children when the Kidney Qi needs gentle support. It takes about 25 minutes of gentle simmering and uses two core ingredients. Walnut warms and supports the Kidney, chestnut strengthens the Kidney and Spleen, and a couple of red dates add Spleen-supporting sweetness. Give it in the afternoon rather than right before bed, so it warms the Kidney without adding to the overnight fluid load."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"3 walnuts, shelled"}</li>
            <li>{"3 chestnuts, peeled, or 1 tablespoon dried chestnut"}</li>
            <li>{"2 cups water"}</li>
            <li>{"2 red dates (jujube), pitted, optional"}</li>
            <li>{"Small piece of rock sugar, optional"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the walnuts and chestnuts briefly."}</li>
            <li>{"2. Combine walnuts, chestnuts, red dates, and water in a small pot."}</li>
            <li>{"3. Bring to a boil, then reduce to low heat."}</li>
            <li>{"4. Simmer 20 to 25 minutes."}</li>
            <li>{"5. Add rock sugar to taste if using."}</li>
            <li>{"6. Strain into a cup. For younger children, chop the walnuts and chestnuts finely or blend the tea lightly."}</li>
            <li>{"7. Serve warm."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"In the afternoon, not right before bed, to limit evening fluids"}</li>
            <li>{"Half a small cup for ages 3-7, a full small cup for ages 8 and up"}</li>
            <li>{"Not for children under 3 without pediatrician guidance"}</li>
            <li>{"3 to 4 times per week"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 2 weeks: sometimes calmer and warmer sleep"}</li>
            <li>{"After 3 to 4 weeks: gradual change in the overnight holding pattern"}</li>
            <li>{"After 1 to 2 months: support for the Kidney Qi as it matures"}</li>
            <li>{"Note: bedwetting is often outgrown with time. This recipe supports the body during that window, not overnight."}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-bedwetting"
        imageSrc="/images/pinterest/child-bedwetting.jpg"
        alt="Chinese medicine for child bedwetting - walnuts and chestnut warming tea recipe card"
        pinDescription="Walnut and chestnut tea for child bedwetting. A Chinese medicine recipe to support Kidney Qi."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy and offers gentle support during the developmental window. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Bedwetting can sometimes signal a medical issue that needs attention. Always consult your pediatrician, especially after age 7, and seek evaluation if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Pain or burning with urination"}</li>
          <li>{"A sudden return of bedwetting after being dry for months"}</li>
          <li>{"Excessive thirst or daytime wetting"}</li>
          <li>{"Dark, cloudy, or strong-smelling urine"}</li>
          <li>{"Fever, back pain, or abdominal pain"}</li>
          <li>{"Bedwetting that continues past age 7 despite consistent routines and warm food"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-bedwetting"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-low-energy" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Low Energy: Spleen Qi and Kidney Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bedwetting and low energy often share the same Kidney Qi weakness. This page covers the energy side of the same Kidney cluster."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-growing-tall" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Growing Tall: Kidney Essence and Growth Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Growth and the Kidney holding function both depend on the same reserve. This page covers the growth side of Kidney health."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-sleep" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Sleep: Heart Shen and Restful Nights"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bedwetting is a night issue, and calm sleep is part of the picture. This page covers the Heart Shen side of restful nights."}</p>
          </Link>
          <Link href="/wellness/kidney-yang-deficiency" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Kidney Yang Deficiency: The Adult Version"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same cold, low-warmth pattern. Useful for parents who run cold and recognize the same Kidney tendency in themselves."}</p>
          </Link>
          <Link href="/types/yang_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Yang Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children who run cold and wet the bed often reflect a Yang Deficient tendency in the family. Understanding this constitution helps explain family patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <p className="text-xs text-text2/50 mt-8 leading-relaxed">
        {"This page is for educational purposes only and describes traditional Chinese dietary philosophy. It supports the body during the developmental window and is not a substitute for medical evaluation. Always consult your pediatrician about bedwetting, especially after age 7."}
      </p>
    </main>
  )
}
