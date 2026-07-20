
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function PickyEatingChildArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Picky Eating in Children"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Picky Eating in Children: A Chinese Medicine Guide for Tired Spleens"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-text leading-relaxed">
          {"If mealtime has become a daily negotiation, your child's Spleen is probably as exhausted as your patience. In Chinese medicine, picky eating is rarely character or discipline. It is almost always a Spleen that has learned to shut down. The pattern usually combines Spleen Qi Deficiency with Liver Qi Stagnation. The Spleen is tired from being overfed, under-chewed, or pushed past full. The Liver is tight from mealtime stress, screen conflicts, or rushing. Together they create a child who would rather not eat than risk another battle. Light appetite-stimulating foods such as hawthorn tea, tangerine peel water, fennel, and small warm bowls of millet porridge may gently reopen the Spleen over one to two weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Picky Eating"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Conventional advice on picky eating usually falls into one of two camps. Either it is a behavior problem that needs firmer limits, or it is a phase that should be ignored until they grow out of it. Chinese medicine offers a third view: picky eating is information. It is the Spleen saying it cannot handle more right now."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Two organ pairs are almost always involved. The Spleen is the digestive core, the part that turns food into usable energy. In young children it is naturally immature, which is covered in detail in our guide to Chinese medicine for child digestion. The Liver, in TCM theory, is responsible for the smooth flow of energy and emotions. When a child is tense, pressured, scolded, or overstimulated at meals, Liver Qi tightens. A tight Liver directly weakens the Spleen. The result is a child who is genuinely not hungry, even when they ate poorly at the last meal."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This explains why rewards, punishments, and bribery tend to backfire. They add emotional pressure. More pressure tightens the Liver. A tighter Liver further weakens the Spleen. The Spleen shuts down harder. The child eats less, the parent pushes more, and the loop tightens. Breaking the loop requires addressing both the Spleen and the Liver, not just the behavior at the table."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Picky Eating Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Picky eating shows up in slightly different forms. The pattern tells you where to focus."}
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
                { p: "Spleen Qi Deficiency", s: "Eats only 3 or 4 foods, low appetite, tired after eating", m: "Spleen cannot generate enough energy to handle variety", f: "Warm, soft, easy foods in small portions" },
                { p: "Liver Qi Stagnation", s: "Sensitive to pressure, picky plus irritable, holds food in mouth", m: "Emotional tightness has blocked smooth digestion", f: "Aromatic relaxants: tangerine peel, fennel, mint" },
                { p: "Spleen with Damp", s: "Heavy, lethargic, refuses oily or rich foods, sticky mouth feel", m: "Dampness has accumulated and is dulling the Spleen", f: "Gently drying foods: millet, radish, job's tears" },
                { p: "Stomach Heat", s: "Hungry but picky, prefers cold drinks, bad breath, restless", m: "Heat in the Stomach is spoiling appetite", f: "Cooling gentle foods: pear, lotus root, mung bean" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Picky Eating in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Most picky eating is not a single cause. It is a stack of small patterns that gradually train the Spleen to close."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A history of force-feeding"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"If a child has been pressured to finish plates, eat on a parent's timeline, or eat when not hungry, the Spleen learns to defend itself by shutting down. The result is a child who appears willful but is actually protecting an overworked system. Undoing this takes time and consistent non-pressure."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Too many intense flavors early"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sugar, salt, and processed flavors train a child's palate to expect high intensity. Mild, warm, plain foods like congee or steamed vegetables stop registering as food. The Spleen, asked to handle flavors stronger than it can process, refuses the mild foods it actually needs."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Sensory defensiveness, especially texture"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Some children are genuinely more sensitive to textures, smells, and mixed foods. In TCM terms this often reads as a Liver that is overly reactive. The fix is not exposure therapy with pressure. It is gentle, gradual exposure without emotional charge, paired with foods that calm the Liver."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Stressful or screen-filled meals"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Arguing, scolding, or eating while watching something all pull attention away from digestion. The Spleen cannot do its job without attention. Children who eat in front of tablets often stop eating mid-bite and do not notice. They are not misbehaving. Their nervous system has deprioritized digestion."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"The snack cycle, never truly hungry"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Grazing all day means the Spleen never has a clear stretch to rest and rebuild appetite. By real mealtime, the child is not hungry enough to want real food. They pick, get offered a snack an hour later, and the cycle continues. The Spleen learns to expect a steady trickle of easy calories, never a real meal."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Gently Reopen a Child's Appetite"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods are aromatic, warm, and traditionally used to wake up a tired Spleen. They are not magic. They work best when combined with the habit changes below, especially removing pressure from mealtimes."}
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
                { food: "Hawthorn (Shan Zha)", prop: "Warm, sour, sweet", help: "The classic TCM appetite stimulant; traditionally used when a child has eaten poorly for days", prep: "Steep 2-3 dried slices in hot water with a little rock sugar" },
                { food: "Tangerine peel (Chen Pi)", prop: "Warm, aromatic, bitter", help: "Moves Liver Qi, gently warms the Spleen; eases the tension that shuts appetite down", prep: "Steep a small piece in hot water, 5 minutes" },
                { food: "Fennel seed", prop: "Warm, aromatic, sweet", help: "Relaxes the digestive middle, gently aromatic for children", prep: "Tiny pinch steeped in warm water, or in soup" },
                { food: "Malt (Mai Ya)", prop: "Warm, sweet", help: "Traditionally used to help the Spleen break down starches; mild and child-friendly", prep: "Simmer in porridge or as a light tea" },
                { food: "Radish, cooked", prop: "Neutral, slightly warm", help: "Gently moves Qi, eases the heavy feeling that kills appetite", prep: "In soup or stir-fry, soft and well-cooked" },
                { food: "Millet porridge", prop: "Warm, sweet", help: "The grain that asks the least of a tired Spleen; a gentle base for any appetite-rebuilding routine", prep: "Cook 1 part millet to 6 parts water, soft" },
                { food: "Papaya", prop: "Neutral, sweet", help: "Contains natural enzymes; in TCM terms, gently supports Spleen function", prep: "Fresh, ripe, in small amounts" },
                { food: "Mint, very small amount", prop: "Cool, aromatic", help: "Diffuses Liver Qi stagnation; useful when irritability accompanies picky eating", prep: "Single leaf in warm water, not daily" },
                { food: "Sweet rice (glutinous rice)", prop: "Warm, sweet", help: "Warms and gently tonifies Spleen; small amounts mixed into regular rice", prep: "Replace 1/4 of rice with sweet rice in porridge" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During a Picky Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not banned. They are simply the ones most likely to train the palate away from real meals. Most families see a noticeable shift within two weeks of pulling them back."}
        </p>
        <ul className="space-y-2">
          {[
            "Sugary snacks, especially between meals, which kill appetite for real food",
            "Salty processed snacks like chips and crackers that overstimulate the palate",
            "Cow's milk right before meals, which fills small stomachs with low-variety calories",
            "Fruit juice and sweet drinks, which the body reads as food without the substance",
            "Heavy fried foods, which overwhelm a tired Spleen and suppress the next meal",
            "Cold drinks at the table, which slow Spleen function right when it is needed",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Rebuild Appetite"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These habits address the Liver side of the loop as much as the Spleen. Most parents see real change within two weeks of consistent practice."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Set clear meal and snack times, with nothing in between except water.", d: "Three meals and one or two planned snacks, no grazing. The Spleen rebuilds appetite when it actually gets hungry between meals." },
            { h: "The one-bite rule, not the clean-plate rule.", d: "One bite of each food, no pressure to finish. Removing pressure is one of the fastest ways to relax the Liver and reopen appetite." },
            { h: "Eat together, without screens.", d: "Even ten minutes of shared attention shifts the meal. Digestion requires attention. So does a relaxed nervous system." },
            { h: "Do not praise eating or punish not eating.", d: "Both turn food into a performance. The goal is a child who eats because they are hungry, not because the parent is happy." },
            { h: "Involve them in cooking, even in tiny ways.", d: "Stirring, washing, choosing between two vegetables. Children who touch food before mealtime are far more likely to try it at mealtime." },
            { h: "Get 20 to 30 minutes of outdoor play before meals.", d: "Movement moves Liver Qi. A child who has been sitting all day often has no appetite at dinner, even if their stomach is technically empty." },
            { h: "Serve one familiar alongside one new, no pressure.", d: "The familiar food is the safety. The new food is the exposure. Over weeks, repeated low-pressure exposure works far better than any single push." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Hawthorn and Tangerine Peel Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the tea Chinese families reach for when a child has been eating poorly for several days. It is mildly sour, gently sweet, and aromatic in a way that quietly signals the Spleen to wake up. Give it 30 to 60 minutes before a meal."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"2 to 3 dried hawthorn slices (Shan Zha)"}</li>
            <li>{"1 small piece dried tangerine peel (Chen Pi), about 1 inch"}</li>
            <li>{"2 cups water"}</li>
            <li>{"Optional: a small piece of rock sugar or 1/2 teaspoon honey (over age 1)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the hawthorn slices and tangerine peel."}</li>
            <li>{"2. Combine with water in a small pot."}</li>
            <li>{"3. Bring to a gentle boil, then reduce heat."}</li>
            <li>{"4. Simmer 5 to 8 minutes."}</li>
            <li>{"5. Strain into a cup. Add a small piece of rock sugar or honey if desired."}</li>
            <li>{"6. Serve warm, about half a cup for ages 3-6, full cup for older children."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Once a day, 30 to 60 minutes before lunch or dinner"}</li>
            <li>{"Small cup for young children, regular cup for older kids"}</li>
            <li>{"Warm, never cold"}</li>
            <li>{"Use for 5 to 7 days, then take a break. Daily use for long periods is not recommended."}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Often a more interested appetite at the next meal"}</li>
            <li>{"Over 3 to 5 days, slightly more willingness to try foods"}</li>
            <li>{"Over 1 to 2 weeks of consistent habit changes, fewer mealtime battles"}</li>
            <li>{"Long-term: appetite recovers when pressure is removed and rhythm is restored"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-picky-eating-child"
        imageSrc="/images/pinterest/picky-eating-child.jpg"
        alt="Chinese medicine for picky eating child — hawthorn tangerine peel tea recipe card"
        pinDescription="Hawthorn tangerine peel tea to gently reopen a picky child's appetite. A Chinese medicine approach to weak Spleen and mealtime stress."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"Picky eating in young children is common and usually improves with consistency and time. Talk to your pediatrician if any of the following are present:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Weight loss or dropping off their growth curve"}</li>
          <li>{"Eating fewer than 5 to 10 foods total for an extended period"}</li>
          <li>{"Difficulty swallowing, gagging, or vomiting with certain textures"}</li>
          <li>{"Signs of food allergy or intolerance (rash, hives, vomiting, diarrhea)"}</li>
          <li>{"Extreme distress around food that affects daily life"}</li>
          <li>{"Lack of hunger even after going many hours without eating"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-picky-eating-child"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-digestion" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Digestion: The Foundation"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Picky eating is almost always rooted in weak Spleen function. This page covers the developmental theory and the warm, soft foods that build the Spleen back up."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-constipation" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Constipation"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Picky eating and withholding stools often go together. When one improves, the other usually follows."}</p>
          </Link>
          <Link href="/wellness/liver-qi-stagnation" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Liver Qi Stagnation: Why Stress Slows Everything"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Liver pattern that drives mealtime stress in children. Useful for parents who recognize the loop in themselves."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Many picky children have a Qi Deficient parent. Understanding your own constitution can explain family patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
