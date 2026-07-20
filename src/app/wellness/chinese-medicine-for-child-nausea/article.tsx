
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildNauseaArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Nausea"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Nausea: Why Stomach Energy Goes Up Instead of Down"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-text leading-relaxed">
          {"In Chinese medicine, the Stomach's energy is supposed to move downward. Food comes in, gets processed, and moves along. Nausea is what happens when that energy reverses and pushes upward. The technical term is Stomach Qi Reversal. Two patterns usually combine. Stomach Cold means the Stomach lacks the warmth to push food down, so it comes back up as nausea. Liver Qi Stagnation means emotional tension has tightened the middle so nothing can descend. Children with motion sickness, morning queasiness, or stress-related nausea often match both. Warm, redirecting foods such as ginger tangerine peel water, plain congee, and a tiny pinch of tangerine peel may help the Stomach find its downward direction again over one to two weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"The Direction of Digestion: Why It Matters"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Every organ in Chinese medicine has a direction. The Spleen sends energy upward. The Stomach sends food downward. This partnership is what keeps digestion running. The Spleen lifts the useful nutrients up to where they are needed. The Stomach keeps everything else moving down and out. When both directions work, there is no nausea, no bloating, no reflux."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Nausea is the clearest sign that the Stomach's downward direction has failed. Instead of sending food along, the Stomach's energy pushes back up. The child feels queasy. They may gag or vomit. They refuse food not because they are being difficult, but because their body is genuinely telling them that nothing should go in right now."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Children are prone to this reversal for two reasons. First, their Spleen and Stomach are still developing, which means less reserve energy to maintain the downward push. Second, children are emotionally reactive. The Liver and Stomach are closely connected in TCM theory. When a child is anxious about school, nervous about a car ride, or upset from an argument, Liver Qi tightens and can push the Stomach's energy upward. This is why so many children feel nauseous before school or during travel, even when there is nothing physically wrong with their stomach."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Nausea Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Nausea in children usually matches one of four patterns. The pattern tells you whether to warm, cool, relax, or dry the middle."}
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
                { p: "Stomach Cold", s: "Nausea better with warmth, pale face, clear urine, loves warm drinks", m: "Cold has weakened the Stomach's downward push", f: "Warming foods: ginger, jujube" },
                { p: "Stomach Heat", s: "Nausea with bad breath, thirst for cold, restless, red face", m: "Heat is pushing energy upward forcefully", f: "Cooling gentle foods: pear, lotus root" },
                { p: "Liver Qi Overacting on Stomach", s: "Nausea with stress, school anxiety, irritability, comes and goes with mood", m: "Emotional tension blocks the downward flow", f: "Aromatic relaxants: tangerine peel, mint" },
                { p: "Phlegm Damp Obstructing the Middle", s: "Nausea with heavy feeling, phlegm, sticky mouth, low energy", m: "Dampness has blocked the Stomach's pathway down", f: "Gently drying foods: tangerine peel, ginger" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Reverses a Child's Stomach Energy"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Stomach Qi Reversal is rarely random. It usually traces back to one of five daily patterns that push the Stomach's energy in the wrong direction."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Motion sickness and car rides"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The inner ear and the Stomach are more connected than they seem. Motion creates a mismatch between what the eyes see and what the body feels. That mismatch triggers the Stomach's energy to reverse. In TCM terms, the chaos of motion confuses the Stomach's downward direction. Children whose Stomach Qi is already weak feel this most intensely."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Skipping breakfast or eating too little"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Stomach needs something to push down. When a child skips breakfast, the Stomach is running empty. Its energy has nothing to work on, so it begins to reverse. Morning nausea in children who refuse breakfast is often this exact pattern. The solution is counterintuitive: they need to eat to stop the nausea, but they feel too nauseous to eat. Starting with a few sips of warm ginger water breaks the loop."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Emotional stress and school anxiety"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Liver and Stomach are neighbors in the energetic middle. When a child is anxious about a test, worried about friends, or dreading school, Liver Qi tightens and presses upward against the Stomach. The Stomach's energy follows the push and goes up instead of down. This is why so many children feel nauseous on Monday mornings but fine on weekends. The food is not the problem. The anxiety is."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overeating or eating too fast"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Stomach has a capacity. When a child eats past full, or eats so fast that the Stomach cannot keep up, the excess has nowhere to go. The downward pathway is jammed. The only direction left is up. Nausea after a heavy or rushed meal is the Stomach saying it cannot process what it has been given."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Post-illness weakness"}</h3>
        <p className="text-text2 leading-relaxed">
          {"After a stomach bug, a flu, or even a bad cold, the Stomach's energy is depleted. It does not have the strength to push food down. Nausea that lingers for a week or two after an illness is common in children. The traditional approach is to start with the gentlest possible foods, like thin rice congee or warm ginger water, and rebuild slowly before returning to a normal diet."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help the Stomach Move Down Again"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they help the Stomach's energy find its downward direction. Some warm. Some relax. Some give the Stomach something easy to practice on. None are strong herbs. All are gentle enough for daily use in children."}
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
                { food: "Fresh Ginger", prop: "Warm, pungent", help: "The primary food for redirecting Stomach energy downward", prep: "2 thin slices in warm water" },
                { food: "Tangerine Peel (Chen Pi)", prop: "Warm, aromatic", help: "Relaxes the middle and helps the Stomach descend", prep: "Small piece in tea" },
                { food: "Plain Rice Congee", prop: "Neutral, sweet", help: "Gives the Stomach something gentle to practice moving down", prep: "Cook with extra water into thin porridge" },
                { food: "Lotus Seed", prop: "Neutral, sweet", help: "Calms the Stomach; traditional for nausea with anxiety", prep: "Cook into thin porridge" },
                { food: "Mint", prop: "Cool, aromatic", help: "Diffuses Liver tension that triggers upward reversal", prep: "Single leaf in warm water" },
                { food: "White Radish", prop: "Cool, pungent", help: "Moves Qi downward; eases the full feeling before nausea", prep: "Cook thoroughly in soup" },
                { food: "Jujube (Red Dates)", prop: "Warm, sweet", help: "Supports the Spleen and Stomach with gentle warmth", prep: "2 to 3 pitted in tea" },
                { food: "Millet", prop: "Warm, sweet", help: "Easy to digest and warming; a gentle base for a weak Stomach", prep: "Cook into soft porridge" },
                { food: "Cardamom", prop: "Warm, aromatic", help: "Traditionally used for nausea and Stomach cold in small amounts", prep: "Tiny pinch in warm water" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During a Nausea Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in themselves. They are simply the ones most likely to push the Stomach's energy upward or overload a system that is already struggling to keep things moving down."}
        </p>
        <ul className="space-y-2">
          {[
            "Cold drinks and ice water, which reverse the Stomach's downward push",
            "Greasy, heavy foods, which sit in the Stomach and trigger upward reversal",
            "Very sweet foods, which create heat that pushes energy upward",
            "Raw foods, which are hard for a weak Stomach to process",
            "Citrus in excess, which can irritate a sensitive Stomach lining",
            "Strong spices, which overstimulate the Stomach in children",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Keep the Stomach Moving Down"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is half the work. The other half is giving the Stomach the conditions it needs to maintain its downward direction. These habits address the most common reversal triggers."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Small sips of warm water, not gulping.", d: "Gulping cold water shocks the Stomach and can trigger immediate reversal. Small sips of warm water support the downward flow." },
            { h: "Eat something small within an hour of waking.", d: "An empty Stomach has nothing to push down. A few sips of warm congee or a piece of warm toast gives it direction and breaks the morning nausea loop." },
            { h: "No reading or screens in the car.", d: "Visual mismatch is the main trigger for motion sickness. Looking out the front window instead of down at a screen or book reduces the conflict that reverses Stomach energy." },
            { h: "Sit upright for 20 minutes after eating.", d: "Lying down right after a meal gives the Stomach's energy nowhere to go but up. A short upright pause lets the initial digestion happen with gravity on its side." },
            { h: "Ginger water 30 minutes before car rides.", d: "For children with motion sickness, a few sips of warm ginger water before travel pre-warms the Stomach and strengthens its downward push." },
            { h: "Keep meals warm, soft, and simple during a nausea phase.", d: "The Stomach is already struggling. Cold, hard, or complex meals add to the workload. Warm, soft, and simple meals give it the best chance to succeed." },
            { h: "Address school anxiety separately from meals.", d: "If morning nausea is rooted in school stress, no food change alone will fix it. Talk to your child, talk to the teacher, and address the anxiety directly. The nausea will ease when the tension does." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Ginger Tangerine Peel Water"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the warm water Chinese families give a child before a car ride, on a stressful school morning, or during the first day of a stomach bug recovery. Ginger redirects the Stomach's energy downward. Tangerine peel relaxes the tight middle that triggered the upward push. The taste is warm and slightly aromatic, and most children accept it without complaint."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"2 thin slices fresh ginger, about the size of a coin"}</li>
            <li>{"1 small piece dried tangerine peel (Chen Pi), about 1 inch"}</li>
            <li>{"2 cups water"}</li>
            <li>{"Optional: 1/2 tsp honey (for children over age 1)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the tangerine peel briefly under cold water."}</li>
            <li>{"2. Slice the ginger thinly."}</li>
            <li>{"3. Combine ginger, tangerine peel, and water in a small pot."}</li>
            <li>{"4. Bring to a boil, then simmer for 5 minutes."}</li>
            <li>{"5. Remove from heat and let cool for 2 minutes."}</li>
            <li>{"6. Strain into a cup. Stir in honey if using."}</li>
            <li>{"7. Sip warm in small amounts."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"30 minutes before car rides or stressful mornings"}</li>
            <li>{"Or first thing in the morning on an empty stomach"}</li>
            <li>{"Small sips, half a cup for young children"}</li>
            <li>{"Always warm, never cold"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Same day: less nausea, fewer complaints"}</li>
            <li>{"After 3 to 5 days: more willing to eat breakfast"}</li>
            <li>{"After 2 weeks: steadier stomach through the day"}</li>
            <li>{"Use as needed for carsickness, school events, or travel"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-nausea"
        imageSrc="/images/pinterest/child-nausea.jpg"
        alt="Chinese medicine for child nausea - ginger tangerine peel water recipe card"
        pinDescription="Ginger tangerine peel water to settle a child's stomach and ease nausea. A Chinese medicine recipe for Stomach energy going up instead of down."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Talk to your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Persistent vomiting or inability to keep any fluids down"}</li>
          <li>{"Signs of dehydration: dry mouth, no tears, decreased urination"}</li>
          <li>{"Blood in vomit or vomit that looks like coffee grounds"}</li>
          <li>{"Severe abdominal pain along with nausea"}</li>
          <li>{"Nausea that persists for more than a few days without clear cause"}</li>
          <li>{"Weight loss or refusal to eat across multiple days"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-nausea"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-digestion" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Digestion: The Foundation"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Nausea is often rooted in the same Spleen weakness described here. This page covers the developmental theory and the warm foods that build the Spleen back up."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-stomach-ache" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Stomach Ache"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Nausea and stomach pain often appear together. When Cold settles in the middle, the Stomach cannot push food down, and pain and queasiness show up at once."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-nausea" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Nausea: The Adult Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Stomach Qi Reversal pattern. Useful for parents who recognize the same morning queasiness or stress nausea in themselves."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children prone to nausea often have a Qi Deficient parent. Understanding your own constitution helps explain why these patterns run in families."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
