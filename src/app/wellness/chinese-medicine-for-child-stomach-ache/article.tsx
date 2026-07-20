
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildStomachAcheArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Stomach Ache"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Stomach Ache: Cold in the Middle and Warming Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-text leading-relaxed">
          {"When a child points to the area around their belly button and says it hurts, Chinese medicine often reads this as Cold in the Middle. The digestive middle, called the Middle Burner, is where the Spleen and Stomach turn food into energy. Cold slows that work the way cold thickens soup on a stove. Two patterns usually combine. Cold in the Middle brings diffuse belly button pain that eases with warmth, loose stools, and a pale face. Spleen Qi Deficiency adds low appetite and tiredness after eating. Warming foods such as jujube ginger millet porridge, cooked pumpkin, and a tiny pinch of fennel may gradually restore the Spleen's warmth over two to three weeks of consistent use."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Why Some Children Get Stomach Aches Again and Again"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Most children complain of a tummy ache at some point. The concern starts when it becomes a pattern: several times a week, often in the same spot, usually around the belly button. Western medicine calls this recurrent abdominal pain and often finds no structural cause. Chinese medicine calls it Cold in the Middle, and the cause is functional rather than structural."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Middle Burner is the central third of the body's three energetic zones. It houses the Spleen and Stomach, the organ pair responsible for receiving food, breaking it down, and distributing the resulting energy. This region runs warm by design. It needs a steady internal fire to process food. When that fire is weak, or when cold enters from outside, the middle cannot maintain its temperature. Food moves slowly. Fluids collect. The result is a vague, diffuse pain that a child points to rather than locates precisely."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Children are more vulnerable to this pattern than adults for a simple reason: their Spleen is still developing. Classical texts describe it as naturally insufficient until about age 6 or 7, a concept covered in detail in our guide to Chinese medicine for child digestion. A Spleen that is still maturing has less reserve warmth to draw on. One cold drink, one night with the belly uncovered, or one heavy meal of raw food can be enough to tip the balance. The same inputs would barely register in an adult with a mature Spleen."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Stomach Ache Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Recurring stomach pain in children usually matches one of four patterns. Sometimes two show up at once. The pattern tells you which foods and habits to focus on."}
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
                { p: "Cold in the Middle", s: "Belly button pain, better with warmth, loose stools, pale face", m: "Cold has slowed the digestive middle to a crawl", f: "Warming foods: ginger, jujube, millet" },
                { p: "Spleen Qi Deficiency with Cold", s: "Low appetite, tired after eating, picks at food, pain comes and goes", m: "Spleen lacks the energy to warm and move food", f: "Warm soft meals in small portions" },
                { p: "Spleen Yang Deficiency", s: "Cold hands, pale face, loves warm drinks, frequent clear urine", m: "Spleen lacks the fire to warm itself from within", f: "Warming foods with ginger and cinnamon" },
                { p: "Liver Qi Overacting on Spleen", s: "Pain with stress or school, comes and goes with mood", m: "Emotional tension disrupts the Spleen's rhythm", f: "Aromatic relaxants: tangerine peel, fennel" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Brings Cold Into a Child's Middle"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Cold in the Middle rarely comes from one event. It accumulates through small daily inputs that slowly lower the temperature of the digestive system."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Cold drinks and ice water"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The most direct route. An ice-cold drink lands in the stomach and the Spleen has to warm it before it can be processed. For a child whose Spleen is still developing, repeated cold drinks slowly chip away at the middle's reserve warmth. The pain often shows up hours later, not during the drink itself, which is why the connection is easy to miss."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Sleeping with the belly uncovered"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, the abdomen is where external cold most easily enters the body. A child who kicks off blankets at night, especially in air conditioning, may wake up with stomach pain that fades by midday. Over weeks, the repeated exposure settles cold deeper into the middle."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Cold-natured foods in excess"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Some foods are cold in temperature but warming in nature. Others are cold in nature regardless of how they are served. Banana, watermelon, and cucumber are naturally cooling. In summer, small amounts are fine. In winter, or for a child who already runs cold, a daily banana can gradually lower the middle's internal temperature without anyone noticing."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Eating while upset, rushed, or watching a screen"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Spleen and Liver are paired. When a child is anxious, scolded, or distracted by a tablet, Liver Qi tightens and presses on the Spleen. A tight Spleen cannot maintain its warmth. The stomach ache that follows is real, and the child is not making it up to avoid dinner."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Recovery from a stomach bug"}</h3>
        <p className="text-text2 leading-relaxed">
          {"After a gastrointestinal illness, the middle is emptied and vulnerable. Going straight back to a normal diet, especially if it includes cold or raw foods, allows cold to settle into a space that has no defense. The original illness resolves, but the stomach aches begin and linger for weeks."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Warm a Child's Middle"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods are traditionally used to rebuild warmth in the digestive middle. They work slowly, over two to three weeks of consistent use. None are strong herbs. All are gentle enough for daily use in children."}
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
                { food: "Millet (Xiao Mi)", prop: "Warm, sweet", help: "The most warming common grain; traditional base for childhood stomach warmth", prep: "Cook into soft porridge with jujube" },
                { food: "Jujube (Red Dates)", prop: "Warm, sweet", help: "Warms and gently tonifies the Spleen; natural sweetness children accept", prep: "Pit 3 to 4, add to porridge" },
                { food: "Fresh Ginger", prop: "Warm, pungent", help: "The primary kitchen herb for warming the middle and easing nausea", prep: "2 thin slices in porridge or tea" },
                { food: "Pumpkin", prop: "Warm, sweet", help: "Soft, warming, and easy to digest; gently supports the Spleen", prep: "Steam or mash into porridge" },
                { food: "Longan", prop: "Warm, sweet", help: "Gently warming; traditionally paired with jujube for Spleen warmth", prep: "3 to 4 in tea or porridge" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Mildly supports the Spleen without adding excess heat", prep: "Slice into porridge" },
                { food: "Chestnut", prop: "Warm, sweet", help: "Traditionally used for Spleen and Kidney warmth in colder months", prep: "Cook into soup or congee" },
                { food: "Fennel Seed", prop: "Warm, aromatic", help: "Warms the middle and eases gas-related pain around the belly button", prep: "Tiny pinch in warm water or soup" },
                { food: "Brown Sugar", prop: "Warm, sweet", help: "Gently warming; the traditional pairing with ginger in porridge", prep: "Small amount dissolved in porridge" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During a Stomach Ache Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in themselves. They simply introduce cold into a middle that is already struggling to stay warm. Limiting them for two to three weeks can make a noticeable difference."}
        </p>
        <ul className="space-y-2">
          {[
            "Ice water and very cold drinks, which carry cold directly to the middle",
            "Raw vegetables in bulk, which require the Spleen to generate extra warmth to break down",
            "Cold-natured fruits like banana and watermelon in large amounts, which lower internal temperature",
            "Ice cream and frozen yogurt, which combine cold temperature with damp-forming dairy",
            "Cold milk straight from the fridge, which shocks a sensitive middle",
            "Excessive citrus, which is cooling and can irritate a cold-sensitive stomach",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Keep the Middle Warm"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is half the work. The other half is keeping the middle warm through daily habits. These are the ones that matter most for children."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm porridge signals the system to start working at full warmth." },
            { h: "Keep the belly covered at night.", d: "A light cotton undershirt or onesie prevents cold from entering the abdomen during sleep, especially in air-conditioned rooms." },
            { h: "Warm or room-temperature water only.", d: "Cold water at meals is the fastest way to extinguish the middle's fire. Warm water is the default in traditional Chinese households for this reason." },
            { h: "Chew thoroughly.", d: "Twenty chews per bite. The mouth is the first stage of digestion, and thorough chewing reduces the work the Spleen has to do." },
            { h: "No cold snacks right after school.", d: "Many children come home hot and reach for cold juice or a popsicle. This is the worst moment for cold to enter. Offer warm soup or congee instead." },
            { h: "Gentle clockwise belly rub before bed.", d: "With warm hands, rub the belly in slow clockwise circles for two minutes. This follows the natural direction of the colon and may encourage movement." },
            { h: "Early, light dinner.", d: "The Spleen's fire is lowest in the evening. A heavy dinner forces it to work all night. Eat by 6 PM and keep the meal warm and simple." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Jujube Ginger Millet Porridge"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the porridge Chinese families turn to when a child has been complaining of belly pain for several days. Millet is the warmest common grain. Ginger drives warmth directly into the middle. Jujube adds gentle sweetness and Spleen support. The combination is simple, and most children accept it within a few tries."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/4 cup yellow millet"}</li>
            <li>{"4 cups water"}</li>
            <li>{"4 red dates (jujube), pitted"}</li>
            <li>{"2 thin slices fresh ginger"}</li>
            <li>{"Optional: tiny pinch of brown sugar"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse millet under cold water 2 to 3 times."}</li>
            <li>{"2. Add millet, water, ginger slices, and red dates to a pot."}</li>
            <li>{"3. Bring to a boil, then reduce to very low heat."}</li>
            <li>{"4. Simmer uncovered for 20 to 25 minutes, stirring occasionally."}</li>
            <li>{"5. When the millet is soft and porridge-like, remove the ginger slices."}</li>
            <li>{"6. Add a small pinch of brown sugar if desired."}</li>
            <li>{"7. Serve warm in small portions."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"As breakfast, 4 to 5 times per week during a tummy pain phase"}</li>
            <li>{"Half a bowl for young children (ages 2 to 5), full bowl for older kids (6+)"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Pull back on ice water, raw fruit, and dairy during this phase"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 3 to 5 days: fewer complaints of tummy pain"}</li>
            <li>{"After 1 week: less pain after eating, better appetite"}</li>
            <li>{"After 2 to 3 weeks: steadier digestion and more consistent energy"}</li>
            <li>{"Continue 2 to 3 times per week as maintenance once the pattern settles"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-stomach-ache"
        imageSrc="/images/pinterest/child-stomach-ache.jpg"
        alt="Chinese medicine for child stomach ache - jujube ginger millet porridge recipe card"
        pinDescription="Jujube ginger millet porridge to warm a child's middle and ease recurring tummy pain. A Chinese medicine recipe for Cold in the Spleen."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Talk to your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Pain that wakes them from sleep or is localized to the lower right side"}</li>
          <li>{"Pain that is severe, sudden, or different from their usual pattern"}</li>
          <li>{"Blood in the stool or black, tarry stools"}</li>
          <li>{"Repeated vomiting, fever, or weight loss"}</li>
          <li>{"Pain that does not improve with warmth, rest, or a bowel movement"}</li>
          <li>{"Signs of dehydration"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-stomach-ache"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-digestion" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Digestion: The Foundation"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Stomach aches often start with the same Spleen weakness described here. This page covers the developmental theory and the warm foods that build the Spleen back up."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-bloating" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Bloating"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bloating and stomach aches often appear together. When the Spleen cannot move food and air smoothly, both symptoms show up at once."}</p>
          </Link>
          <Link href="/wellness/foods-that-warm-your-body" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Foods That Warm Your Body"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same warming food list. Useful for parents who recognize the same cold-in-the-middle signs in themselves."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children with Cold in the Middle often have a Qi Deficient parent. Understanding your own constitution helps explain family patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
