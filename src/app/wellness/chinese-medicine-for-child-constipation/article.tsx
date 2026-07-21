
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildConstipationArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Constipation"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Constipation: Foods That May Help (and Why Bananas Often Backfire)"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"When a child has not had a proper bowel movement in three or more days, Chinese medicine looks first at fluid and warmth. The intestines behave like a river that needs both moisture and a gentle current to keep moving. Two patterns commonly show up in constipated children. Intestine Dry presents as hard, pebble-like stools with thirst and dry lips. Spleen Qi Deficiency with sluggishness shows as infrequent stools that are not necessarily hard, with tiredness and small appetite. Moistening foods such as black sesame, cooked pear, walnuts, and warm honey water may help. Cold raw fruit, bananas in particular for many children, often makes the situation worse over time."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Constipation"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Western pediatrics usually frames constipation as a fiber problem. Eat more whole grains, drink more water, the line goes. Sometimes that works. Sometimes it does not, and parents end up more frustrated, children more backed up, and bananas rotting on the counter."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Chinese medicine frames the intestines differently. They are not a tube that simply needs more bulk. They are an organ system that needs warmth to move, fluid to stay slippery, and a steady rhythm of eating and resting to stay regular. When any of those is off, the river slows. Stools sit, dry out, and get harder to pass. The cycle feeds itself."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This is why the common banana advice often misfires. Bananas are cold and sweet in TCM terms. For a child whose constipation is already a moisture-and-warmth problem, a daily cold banana is like adding ice to a slow-moving river. The fiber might be there, but the system still slows. Some children tolerate bananas fine. Many constipated children do not. The difference is the child's underlying pattern, not the banana itself."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Constipation Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Constipation is not one thing. The right food depends on which pattern is closest to your child's picture."}
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
                { p: "Intestine Dry", s: "Hard, pebble-like stools, dry lips, thirsty", m: "Intestines lack the moisture to keep stool soft and moving", f: "Moistening foods: sesame, pear, honey, walnut" },
                { p: "Spleen Qi Sluggishness", s: "Infrequent stools, not hard, tired, small appetite", m: "Spleen cannot generate enough downward current", f: "Warm tonics: millet, jujube, well-cooked root vegetables" },
                { p: "Stomach Heat", s: "Hard dry stools, bad breath, cranky, prefers cold drinks", m: "Heat has dried out the intestinal fluids", f: "Cooling moist foods: cooked pear, mung bean, lotus root" },
                { p: "Liver Qi Stagnation", s: "Stools that come in pellets, irritability, holds it in", m: "Stress has tightened the system that should be relaxed", f: "Aromatic relaxants: tangerine peel, fennel, mint" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Constipation in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Constipation in children rarely has a single cause. It is usually a stack of small daily mismatches that gradually slow the system down."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"The cold-fruit loop"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Bananas, raw pears, and big glasses of cold orange juice are often the first things well-meaning parents offer when a child is constipated. In TCM theory, all of these are cooling. For a child whose intestines already lack the warmth to move, more cold is the opposite of what helps. The fiber content matters less than the temperature pattern."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Not enough warm fluids"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Most children drink water cold or room temperature, when what their intestines actually want is warm. A cup of warm water in the morning, especially with a small spoon of honey, is one of the simplest traditional practices for keeping the intestinal river moving. Cold water slows it."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Withholding, often at school or daycare"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Many young children hold their stool at school because the bathroom feels unfamiliar or lacks privacy. Each time they hold, the stool dries out more, the next pass hurts, and the next time they hold longer. This is one of the most common patterns in children ages 3 to 6, and the solution is environmental, not dietary."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Heavy protein without enough warmth"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"A high-protein diet of cheese, meat, and eggs with few cooked vegetables or warm grains can be heavy on the Spleen. Without warmth to balance it, the system gets sluggish. This pattern shows up often in children who love dairy."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Antibiotics or recent illness"}</h3>
        <p className="text-text2 leading-relaxed">
          {"After antibiotics, a stomach bug, or a febrile illness, the digestive flora and the Spleen are both rebuilding. Constipation often shows up a week or two later, sometimes alternating with loose stools. The traditional approach is to focus on easy warm foods and avoid heavy raw fiber until things stabilize."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help a Constipated Child"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods emphasize moisture, warmth, and gentle movement. None of them are harsh laxatives. They are the kinds of foods a Chinese grandmother would quietly add to a constipated grandchild's day."}
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
                { food: "Black sesame seeds", prop: "Neutral, sweet", help: "Classic TCM moistening seed for the intestines; used for centuries for childhood constipation", prep: "Toast lightly, grind, stir a teaspoon into porridge" },
                { food: "Pine nut", prop: "Warm, sweet", help: "One of the most lubricating nuts in TCM; gentle and well-liked by children", prep: "Small handful as a snack, or stir into rice" },
                { food: "Pear, cooked", prop: "Cool, sweet", help: "Generates fluids, moistens Lungs and Intestines; cooking reduces the cold quality", prep: "Steam with a little rock sugar, 20 minutes" },
                { food: "Honey (over age 1)", prop: "Neutral, sweet", help: "Mildly moistening; gently encourages bowel movement", prep: "One small spoon in warm water, morning" },
                { food: "Walnut", prop: "Warm, sweet", help: "Moistens intestines and supports Kidney energy; useful for dry-type constipation", prep: "1 to 2 walnuts daily, chewed well" },
                { food: "Peach", prop: "Warm, sweet", help: "Moistening and gentle; in season, a few slices a day", prep: "Fresh, ripe, in small amounts" },
                { food: "Warm soy milk", prop: "Cool, sweet", help: "Plant-based moisture; warmer in temperature than cow's milk", prep: "Heat gently, no ice" },
                { food: "Sweet potato with sesame oil", prop: "Neutral, sweet", help: "Gentle bulk from sweet potato, lubrication from a few drops of toasted sesame oil", prep: "Steam and mash, drizzle a few drops of sesame oil" },
                { food: "Seaweed (wakame, kelp)", prop: "Cold, salty", help: "Softens and gently moves; useful when heat is part of the picture", prep: "In miso-style soup, small amounts" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit During a Constipation Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in themselves, but during an active constipation phase they tend to slow things further. Pull them back for two to three weeks and see what shifts."}
        </p>
        <ul className="space-y-2">
          {[
            "Bananas, especially cold or under-ripe ones, which many children tolerate poorly",
            "Astringent fruits like persimmon and guava, which can slow the intestines further",
            "Excessive dairy, especially cheese and yogurt in large daily amounts",
            "Dry crackers, toast, and dry bread without warm fluid alongside",
            "Apple sauce in large amounts, since the pectin can firm stools",
            "White rice in excess with no warm vegetables or broth",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Encourage Regularity"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is only one part of the picture. The body's rhythm of bathroom habits often matters more than what is on the plate."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm water with honey, first thing in the morning.", d: "For children over one year. A small spoon of honey in a cup of warm water on an empty stomach gently wakes the intestines." },
            { h: "Bathroom sit 5 to 10 minutes after breakfast.", d: "The body's natural gastrocolic reflex fires after a warm meal. Make this a no-pressure routine, not a forced production." },
            { h: "Clockwise abdominal massage.", d: "With warm hands, gently rub your child's belly in clockwise circles for 2 minutes before bed. This follows the natural direction of the colon." },
            { h: "Light movement before bathroom time.", d: "A few jumps, a walk around the living room, or a stretch sequence helps things move. Sitting still is not a friend of regularity." },
            { h: "Warm bath before bed.", d: "A warm bath relaxes the Liver Qi, which is often part of the holding pattern in withholding children." },
            { h: "Foot warmth, especially in cold-type constipation.", d: "Cold feet pull warmth away from the core. Warm socks or a brief foot soak before bed is a small traditional habit with a real effect." },
            { h: "Reduce withholding triggers at school and daycare.", d: "Talk to teachers about bathroom access and privacy. Many children stop holding as soon as the bathroom feels safe." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Black Sesame and Pear Porridge"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the recipe traditional Chinese families turn to when a child has gone three or four days without a proper stool. It is gentle, mildly sweet, and easy for children to accept."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/4 cup white rice"}</li>
            <li>{"4 cups water"}</li>
            <li>{"1 tablespoon black sesame seeds, lightly toasted and ground"}</li>
            <li>{"1 small ripe pear, peeled and diced"}</li>
            <li>{"Optional: 1/2 teaspoon honey (over age 1 only)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the rice. Combine with water in a pot."}</li>
            <li>{"2. Bring to a boil, then reduce to very low heat."}</li>
            <li>{"3. Simmer 30 minutes, stirring occasionally."}</li>
            <li>{"4. Add the diced pear and ground black sesame."}</li>
            <li>{"5. Simmer another 10 to 15 minutes until the rice is broken down and the porridge is soft."}</li>
            <li>{"6. Stir in a small amount of honey if using, just before serving."}</li>
            <li>{"7. Serve warm, in small portions."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Breakfast, or as the evening meal for 2 to 3 days"}</li>
            <li>{"Half a bowl for ages 2-5, full bowl for older kids"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Use for 3 to 5 days, then return to normal warm meals"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Usually a softer, easier stool within 12 to 24 hours"}</li>
            <li>{"Less straining and smaller pebble size over 2 to 3 days"}</li>
            <li>{"After 5 to 7 days of consistent habits, more regular rhythm"}</li>
            <li>{"Long-term: keep warm fluid as a daily habit, return to this porridge as needed"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-constipation"
        imageSrc="/images/pinterest/child-constipation.jpg"
        alt="Chinese medicine for child constipation — black sesame pear porridge recipe card"
        pinDescription="Black sesame pear porridge for child constipation. A gentle Chinese medicine remedy that moistens the intestines without cold fruit."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Talk to your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"No bowel movement for 5 or more days"}</li>
          <li>{"Severe abdominal pain, vomiting, or fever"}</li>
          <li>{"Blood in or around the stool"}</li>
          <li>{"Stool soiling in underwear (encopresis), which signals chronic retention"}</li>
          <li>{"Painful tears around the anus (fissures)"}</li>
          <li>{"Weight loss or refusal to eat"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-constipation"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-digestion" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Digestion: The Foundation"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Constipation is often a downstream sign of the same weak Spleen that drives general digestion trouble. Start here if your child also has picky eating or low appetite."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-constipation" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Constipation: The Adult Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same pattern. Parents with sluggish digestion often see the same signs in their children."}</p>
          </Link>
          <Link href="/wellness/what-is-qi" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"What Is Qi? The Energy That Moves Everything, Including the Bowels"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Constipation is often a Qi problem, not just a fiber problem. Understanding Qi makes the whole framework click."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A constitution prone to sluggishness, tiredness, and slow digestion. Runs in families."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
