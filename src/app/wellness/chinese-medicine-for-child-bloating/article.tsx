
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildBloatingArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Bloating"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Bloating: When the Spleen Cannot Move Food and Air"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"If your child's belly looks puffy or distended within thirty minutes of eating, Chinese medicine sees this as a Spleen that cannot move food and air smoothly. The Spleen's job is to process food and send it downward. When it is tired, food sits. Air collects. The belly puffs out. Two patterns usually combine. Spleen Qi Deficiency looks like a puffy belly after meals, gas, and heavy reluctance to finish. Liver Qi Stagnation adds belching, hiccups, and bloating that worsens with stress. Warm, easy-to-move foods such as carrot fennel rice soup, cooked radish, and a tiny pinch of tangerine peel may help the Spleen regain its rhythm over one to two weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Bloated Belly"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In a healthy digestive system, food moves. It enters the stomach, gets broken down, and travels downward through the intestines. Nothing sits for long. Bloating is what happens when that forward movement stalls. Food and air collect in the middle, and the belly puffs out like a balloon that cannot deflate."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Chinese medicine attributes this stalling to the Spleen. The Spleen, in TCM theory, is the functional system that turns food into energy and directs it downward. It is not the anatomical spleen. It is closer to the combined digestive and absorptive capacity of the stomach, small intestine, and pancreas. When the Spleen has enough Qi, food moves smoothly and air follows it down. When the Spleen is tired, the system slows. Food ferments. Gas forms. The belly distends."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"In Chinese households, the response to a child's bloated belly has been consistent for generations: stop the raw food, stop the cold drinks, and offer something warm, soft, and slightly aromatic. Carrot soup with a pinch of fennel. Millet porridge. Tangerine peel tea. These are not random choices. They all share one quality: they help the Spleen move things downward again. The tradition is built on watching what actually works when a belly is stuck."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Bloating Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Bloating in children is rarely one pattern. The table below covers the four most common combinations. Identifying the closest match helps with food and habit choices."}
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
                { p: "Spleen Qi Deficiency", s: "Puffy after meals, passes gas, reluctant to finish, tired", m: "Spleen cannot process and move food efficiently", f: "Warm, soft, small meals" },
                { p: "Liver Qi Stagnation", s: "Belching, hiccups, bloating worse with stress or school", m: "Emotional tension blocks the Spleen's downward flow", f: "Aromatic relaxants: tangerine peel, fennel" },
                { p: "Dampness in the Middle", s: "Sticky mouth, heavy limbs, sticky or loose stools", m: "Fluids have collected and are slowing everything down", f: "Gently drying foods: millet, radish, job's tears" },
                { p: "Cold in the Middle", s: "Puffy plus belly button pain, better with warmth", m: "Cold has slowed the digestive middle", f: "Warming foods: ginger, jujube" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes a Child's Belly to Bloat"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Bloating is rarely caused by one food. It builds from daily patterns that slowly tire the Spleen until it cannot keep up with the volume of food and air it is asked to move."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Eating too fast or while distracted"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"When a child eats quickly or while watching a screen, two things happen. They swallow more air, which adds to the gas already in the system. And they do not chew enough, which means the Spleen receives food in chunks it has to break down on its own. Both increase the workload on a system that may already be running behind."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Raw and cold foods that slow the Spleen"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Raw vegetables are nutritious, but they are also the hardest thing for a Spleen to process. The Spleen has to generate warmth to break them down. Cold drinks do the same thing from the opposite direction: they lower the temperature of the middle. A child who eats a cold salad with ice water is asking the Spleen to do its hardest work under its worst conditions."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Emotional tension at meals"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Liver and Spleen are paired. When a child is anxious about school, pressured at the table, or upset from an argument, Liver Qi tightens. A tight Liver blocks the Spleen's downward flow. The result is bloating that appears within minutes of starting a meal, often with belching or hiccups. The food is not the problem. The tension is."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Dairy in excess"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, dairy is damp-forming. That means it produces a heavy, sticky byproduct that further slows the Spleen. A child who drinks large amounts of milk, eats yogurt, and has cheese on the same day is layering dampness on a system that may already be struggling to move fluids. The belly puffs not from the dairy itself but from the dampness it leaves behind."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Late, heavy dinners"}</h3>
        <p className="text-text2 leading-relaxed">
          {"The Spleen's fire is lowest in the evening. A heavy dinner at 8 PM asks the system to do its hardest work at its weakest moment. Food sits overnight, ferments, and by morning the child wakes up still puffy. Shifting the largest meal to lunch and keeping dinner warm, light, and early is one of the fastest changes families can make."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help a Child's Spleen Move Again"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they help the Spleen move food and air downward. Some warm the middle. Some relax tension. Some gently drain dampness. Use them as a starting point and adjust based on what your child accepts."}
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
                { food: "Carrot", prop: "Neutral, sweet", help: "Gentle Spleen support; soft when cooked; easy for children to accept", prep: "Dice small into soup" },
                { food: "Fennel Seed", prop: "Warm, aromatic", help: "Relaxes the belly and moves gas downward", prep: "Tiny pinch, crushed, in soup" },
                { food: "White Radish (Daikon)", prop: "Cool, pungent", help: "Moves Qi downward; the classic TCM food for bloating", prep: "Cook thoroughly in soup" },
                { food: "Tangerine Peel (Chen Pi)", prop: "Warm, aromatic", help: "Moves Liver Qi and gently warms the Spleen", prep: "Small piece in tea or soup" },
                { food: "Millet", prop: "Warm, sweet", help: "Easy to digest; asks very little of a tired Spleen", prep: "Cook into soft porridge" },
                { food: "Job's Tears (Coix Seed)", prop: "Cool, sweet", help: "Gently drains dampness that contributes to puffiness", prep: "Cook into porridge" },
                { food: "White Rice", prop: "Neutral, sweet", help: "The base grain; easy to move through a tired Spleen", prep: "Extra water, soft texture" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Supports the Spleen without adding bulk or dampness", prep: "Slice into soup" },
                { food: "Ginger", prop: "Warm, pungent", help: "Warms the middle so the Spleen can move again", prep: "1 to 2 thin slices in soup" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During a Bloating Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not banned. They are simply the ones most likely to add air, dampness, or cold to a system that is already struggling to move. Most families see a visible difference within a week of pulling them back."}
        </p>
        <ul className="space-y-2">
          {[
            "Raw vegetables, which the Spleen has to work overtime to break down",
            "Dairy in excess, which forms dampness and further slows the Spleen",
            "Cold drinks at meals, which slow the Spleen right when it needs to move",
            "Fried and greasy foods, which are heavy and stagnate in the middle",
            "Beans and legumes in large amounts, which produce gas in a weak Spleen",
            "Carbonated drinks, which introduce more air into an already puffy system",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help the Spleen Move"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is half the work. The other half is giving the Spleen the conditions it needs to move food and air smoothly. These habits address the most common stalling points."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Eat slowly, chew twenty times per bite.", d: "The mouth is the first stage of digestion. Thorough chewing means the Spleen receives food it can actually move, not chunks it has to break down alone." },
            { h: "No screens at the table.", d: "Screens pull attention away from digestion. A child watching a tablet often swallows air without noticing and stops chewing halfway through each bite." },
            { h: "Small portions, more often if needed.", d: "A tired Spleen handles half a bowl better than a full one. Five small meals often work better than three big ones during a bloating phase." },
            { h: "Light movement after meals, not lying down.", d: "A 5 to 10 minute walk after eating helps the Spleen move food downward. Lying down right after meals is one of the most common causes of evening bloating." },
            { h: "Set consistent meal and snack times.", d: "The Spleen likes rhythm. A child who eats at the same times each day has a Spleen that is ready when food arrives. Irregular timing catches it off guard." },
            { h: "Warm water with meals, never cold.", d: "Warm water supports the Spleen's movement. Cold water stops it. This is the single easiest swap most families can make." },
            { h: "Dinner by 6 PM, light and warm.", d: "The Spleen's fire is lowest in the evening. An early, light, warm dinner gives the system time to process before sleep." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Carrot Fennel Rice Soup"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the soup Chinese families reach for when a child's belly is puffy after meals. Carrots are gentle and sweet. Fennel relaxes the middle and moves gas downward. Rice gives the Spleen an easy base to work with. The whole soup asks very little of a tired system."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/4 cup white rice"}</li>
            <li>{"1 medium carrot, peeled and diced small"}</li>
            <li>{"4 cups water or mild vegetable broth"}</li>
            <li>{"Tiny pinch of fennel seed, about 1/4 teaspoon"}</li>
            <li>{"Optional: 1/2 tsp mild soy sauce or a pinch of salt"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse rice until the water runs clear."}</li>
            <li>{"2. Crush fennel seed lightly using a mortar or the back of a spoon."}</li>
            <li>{"3. Combine rice, carrot, fennel, and water in a pot."}</li>
            <li>{"4. Bring to a boil, then reduce to low heat."}</li>
            <li>{"5. Simmer for 30 minutes, stirring occasionally."}</li>
            <li>{"6. When rice and carrot are very soft, add a pinch of salt or soy sauce."}</li>
            <li>{"7. Serve warm. Mash the carrot slightly for younger children."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"As a light dinner, 4 to 5 days in a row"}</li>
            <li>{"Half a bowl for ages 2 to 5, full bowl for older kids"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Avoid raw vegetables and cold drinks during this phase"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 3 days: visibly less puffiness after meals"}</li>
            <li>{"After 1 week: less gas, better appetite"}</li>
            <li>{"After 2 to 3 weeks: more settled digestion overall"}</li>
            <li>{"Continue 2 to 3 times per week as the child grows"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-bloating"
        imageSrc="/images/pinterest/child-bloating.jpg"
        alt="Chinese medicine for child bloating - carrot fennel rice soup recipe card"
        pinDescription="Carrot fennel rice soup to settle a child's bloated belly. A Chinese medicine recipe to help the Spleen move food and air again."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Talk to your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Severe or worsening abdominal pain"}</li>
          <li>{"Blood in the stool or black, tarry stools"}</li>
          <li>{"Persistent vomiting"}</li>
          <li>{"Unexplained weight loss or failure to grow"}</li>
          <li>{"Bloating that does not improve with diet changes"}</li>
          <li>{"A belly that is firm or tender to the touch"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-bloating"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-digestion" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Digestion: The Foundation"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bloating is almost always rooted in the same Spleen weakness described here. This page covers the developmental theory and the warm foods that build the Spleen back up."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-stomach-ache" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Stomach Ache"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bloating and stomach aches often appear together. When the Spleen cannot move food and cold settles in the middle, both symptoms show up at once."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-bloating" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Bloating: The Adult Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Spleen pattern. Useful for parents who recognize the same puffiness and sluggishness in themselves."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children who bloat easily often have a Qi Deficient parent. Understanding your own constitution helps explain family digestive patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
