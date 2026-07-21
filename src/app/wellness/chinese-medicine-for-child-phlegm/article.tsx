
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildPhlegmArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Phlegm"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Phlegm: Dampness Trapped in the Lungs and Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"Some children always seem to have a rattle in their chest, a wet cough each morning, or a thick coating on the back of the tongue that never fully clears. In Chinese medicine, persistent phlegm is rarely a Lung problem alone. Two patterns usually combine. Spleen Qi Deficiency means the digestion is too weak to process fluids, so they collect and turn sticky. Lung Damp means that sticky fluid has settled in the chest where it cannot drain. Warm, drying foods such as tangerine peel tea, cooked radish, and coix seed porridge may help the Spleen clear the source so the Lungs have less to hold."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Phlegm in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"The phrase every Chinese pediatric grandparent knows is this: the Spleen is the source of phlegm, and the Lungs are the container that holds it. In Mandarin, 脾为生痰之源,肺为贮痰之器. The meaning is practical. The phlegm you hear in a child's chest is not made in the chest. It is made lower down, in the digestive middle, and then sent upward to be stored in the Lungs."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Think of the Spleen as a kitchen that turns food and drink into clean energy and clear fluids. When the kitchen runs well, every drop of water is processed and sent to where it is needed. When the kitchen is tired, or overloaded with cold, sweet, or heavy foods, it cannot process fluids completely. The leftover fluid becomes dampness, and dampness left too long thickens into phlegm."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"The Lungs sit above the Spleen, and in TCM theory they are described as a delicate vessel that receives fluids from below. When the Spleen sends up damp, sticky fluid instead of clean moisture, the Lungs hold it. That is the rattle you hear, the wet cough in the morning, the thick coating on the tongue. Clearing phlegm from the Lungs alone is like bailing water from a boat without fixing the leak. The Spleen has to stop producing the dampness first."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Children are especially prone to this pattern because their Spleen is, by nature, still immature. Chinese pediatric texts describe it as 脾常不足, the Spleen is constitutionally insufficient in childhood. A child's Spleen is still learning to manage the full volume of food and drink we ask it to handle, which is why the same damp-forming foods that an adult clears without notice can produce a wet cough in a four-year-old within days. The younger the child, the less margin the Spleen has for error."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Phlegm Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Phlegm in children is rarely one pattern. The table below covers the four most common forms. Matching your child's phlegm to the closest row helps with food and habit choices, because each type responds to a different direction."}
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
                { p: "Spleen Damp + Lung", s: "Morning phlegm, poor appetite, heavy limbs", m: "Spleen produces damp, Lungs store it", f: "Tangerine peel tea, coix seed porridge" },
                { p: "Heat-Phlegm", s: "Yellow, thick, sticky phlegm", m: "Heat bakes fluids into sticky phlegm", f: "Radish soup, pear water" },
                { p: "Cold-Phlegm", s: "Clear, watery, worse in cold weather", m: "Cold slows fluid circulation", f: "Ginger water, warm soups" },
                { p: "Residual Phlegm After Illness", s: "Phlegm persists after a cold is gone", m: "Spleen too weak to clear the last dampness", f: "Chinese yam porridge, jujube" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Phlegm in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Phlegm is rarely caused by one food or one cold. It builds from daily patterns that slowly tire the Spleen until the fluids it should process cleanly start to thicken and rise."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Spleen weakness (脾虚生痰)"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"A child's Spleen is still developing, and in TCM theory it is the weakest of the major systems through the early years. When it is tired, it cannot process fluids completely. The leftover fluid becomes dampness, and dampness thickens into phlegm. This is why two children eating the same meal can respond differently: the one with the stronger Spleen clears the fluid, and the one with the weaker Spleen stores it as phlegm."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet that creates dampness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Certain foods are damp-forming in TCM theory, meaning they leave a heavy, sticky byproduct the Spleen has to work overtime to clear. The main ones for children are dairy, including milk, cheese, and yogurt, along with sweets and candy, cold drinks straight from the fridge, and excessive fruit, especially banana and melon. A child who has all of these in one day is layering dampness faster than a tired Spleen can drain it."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Recurrent infections"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Each cold asks the Lungs to clear a wave of phlegm. When colds come one after another, the Lungs never fully finish the job before the next wave arrives. The Spleen, asked to keep producing clean fluids while also helping the Lungs recover, gets tireder with each round. The result is the child who seems to carry a rattle from one cold straight into the next."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Environment"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Damp weather and damp housing add external dampness on top of the internal kind. A child living in a humid climate, or in a home with damp walls and poor ventilation, is absorbing moisture from the outside while the Spleen is already struggling to manage it from the inside. The two sources compound."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Constitutional tendency"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Some children simply hold more dampness by constitution. They may have a parent with a Phlegm-Damp or Qi Deficient body type, and the tendency runs in families. These children are not unwell; they just need warmer, drier food and more careful fluid handling than a child whose Spleen naturally runs hot and dry."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Clear Phlegm"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they help the Spleen process fluids so the Lungs have less dampness to hold. Some dry. Some drain. Some warm the middle so the Spleen can do its own work. Five-year-old Ethan is a small example. He woke every morning with a chest rattle and a throat he had to clear before he could speak, and his tongue carried a thick white coating that never fully cleared. His family swapped cold milk for warm tangerine peel water at breakfast, added coix seed porridge at dinner, and pulled back on dairy and sweets. Over three weeks the morning rattle faded and the tongue coating thinned."}
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
                { food: "Tangerine Peel (Chenpi)", prop: "Warm, aromatic", help: "Moves Qi, dries dampness, a classic for phlegm in children", prep: "Pinch in warm water, daily" },
                { food: "White Radish", prop: "Cool, pungent", help: "Descends Lung Qi and dissolves phlegm", prep: "Soup or steamed, 2 to 3 times weekly" },
                { food: "Coix Seed (Job's Tears)", prop: "Cool, sweet", help: "Drains dampness and strengthens the Spleen", prep: "Cook into porridge, 3 times weekly" },
                { food: "Pear", prop: "Cool, sweet", help: "Moistens without adding phlegm, for dry-type cough", prep: "Steamed, for dry-type phlegm" },
                { food: "Ginger", prop: "Warm, pungent", help: "Warms the Spleen and dries cold phlegm", prep: "2 thin slices in warm water" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Strengthens the Spleen to stop phlegm at its source", prep: "Steamed or in porridge" },
                { food: "Winter Melon", prop: "Cool, sweet", help: "Drains dampness out through urination", prep: "Light soup" },
                { food: "Jujube Dates", prop: "Warm, sweet", help: "Supports the Spleen, indirectly reducing phlegm", prep: "2 to 3 dates in porridge" },
                { food: "Adzuki Bean", prop: "Neutral, sweet", help: "Drains dampness gently", prep: "Soup or porridge" },
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
        <p className="text-text2 text-xs leading-relaxed mt-3">
          {"Portions for children are small. A pinch of tangerine peel or two slices of ginger is enough for ages 3 to 6. Children's systems respond to gentler amounts than adults need, so start light and watch how your child responds."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit During a Phlegm Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not banned. They are simply the ones most likely to add dampness, cold, or stickiness to a system that is already holding too much fluid. Most families hear the morning rattle ease within a week of pulling them back."}
        </p>
        <ul className="space-y-2">
          {[
            "Dairy, including milk, cheese, and yogurt, which forms dampness in a tired Spleen",
            "Sweets and candy, which thicken fluids and slow the Spleen",
            "Cold drinks straight from the fridge, which slow the Spleen right when it needs to move",
            "Excessive fruit, especially banana and melon, which are damp-forming in quantity",
            "Fried food, which is heavy and sticky and stagnates in the middle",
            "Doughy bread and pastries, which sit heavy and add to the damp load",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help the Spleen Dry Dampness"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is half the work. The other half is giving the Spleen the warmth and rhythm it needs to stop producing dampness in the first place. The habits below are the ones that make the biggest difference for morning phlegm, because they all reduce the amount of fluid the Spleen has to process overnight."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm water first thing in the morning.", d: "A small cup of warm water on waking gently wakes the Spleen before any food arrives. Cold water on an empty stomach slows it for hours." },
            { h: "A light, warm dinner before 6 PM.", d: "The Spleen's fire is lowest in the evening. A heavy late dinner leaves unprocessed fluid to thicken overnight, which is why morning phlegm is so common." },
            { h: "Avoid cold drinks through the day.", d: "Cold slows the Spleen every time. Room temperature or warm drinks keep fluid processing steady." },
            { h: "Gentle outdoor walking after meals.", d: "Movement helps the Spleen move fluid downward. Ten minutes of walking after dinner does more for morning phlegm than any single food." },
            { h: "Sleep before 9 PM.", d: "The Spleen restores overnight. A child who sleeps late runs a tired Spleen the next day, and a tired Spleen makes more dampness." },
            { h: "A warm foot soak before bed.", d: "A five-minute foot soak in warm water draws dampness downward and warms the whole middle. It is a small ritual children often enjoy." },
            { h: "Avoid damp environments.", d: "If your home is humid, a dehumidifier in the bedroom helps. External dampness adds to the internal load the Spleen is already carrying." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Always consult your pediatrician, and seek prompt care if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Phlegm or a cough that lasts more than two weeks"}</li>
          <li>{"Phlegm with blood, or phlegm that is green and foul-smelling"}</li>
          <li>{"Difficulty breathing, wheezing, or breathing that is fast or labored"}</li>
          <li>{"A high fever, or a fever that does not come down"}</li>
          <li>{"Chest pain, or a child who is too breathless to speak or eat"}</li>
        </ul>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-phlegm"]} />

      <SaveToPinterest
        slug="chinese-medicine-for-child-phlegm"
        imageSrc="/images/pinterest/child-phlegm.png"
        alt="Chinese medicine for child phlegm - tangerine peel and coix seed for dampness trapped in the lungs"
        pinDescription="Always has phlegm? Dampness trapped in the lungs. Tangerine peel tea, radish, and coix seed porridge to help a child's Spleen clear phlegm at its source."
      />

      <InlineQuizCta />

      <SymptomCta />
    </main>
  )
}
