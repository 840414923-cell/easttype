
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function ChildDigestionArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Digestion"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Digestion: Spleen-Supporting Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-text leading-relaxed">
          {"In Chinese medicine, a child's Spleen, the organ pair that turns food into usable energy, is considered naturally immature until about age 6 or 7. That immaturity is a developmental stage, not a defect. Two patterns often show up in children with weak digestion. Spleen Qi Deficiency looks like small appetite, loose stools with undigested bits, and tiredness after meals. Spleen Yang Deficiency adds cold hands, pale face, and a tendency to feel chilly. Warm, easy-to-digest foods such as rice congee with Chinese yam, jujube dates, and gently cooked root vegetables may help the Spleen gradually strengthen over several weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Digestion"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese pediatric texts describe children with a memorable phrase: liver is excessive, spleen is insufficient. The Spleen, in TCM theory, is the functional system responsible for transforming food into Qi and Blood. It is not the same as the anatomical spleen in Western medicine. It is more of a digestive and absorptive system that also shapes how energy is distributed through the body."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"The insufficient Spleen idea has practical consequences. Young children are not small adults. Their digestive capacity is genuinely smaller relative to what they need. They are growing rapidly, which means they need a lot of fuel, but their ability to process that fuel is still maturing. That mismatch, high demand with low capacity, is what makes young children so vulnerable to tummy trouble, picky phases, and slow recovery after illness."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"A common traditional practice in Chinese households reflects this. For the first 100 days after introducing solid foods, families often lean on rice congee, soft, slow-cooked, almost pre-digested rice porridge. It is not because they lack other options. It is because congee asks very little of an immature Spleen while giving it a lot to work with. Around ages 6 to 7, the Spleen is said to be more settled. Digestion becomes more forgiving. This tracks loosely with what many parents observe: the picky toddler who eats three things becomes a 7-year-old who will try mostly anything. The picky phase was a real phase, and underneath it was a Spleen slowly growing into itself."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Digestion Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Weak digestion in children is rarely one thing. It usually shows up as one of four patterns, sometimes in combination. Identifying the closest match helps with food choices."}
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
                { p: "Spleen Qi Deficiency", s: "Small appetite, tired after eating, loose stools", m: "Cannot transform food into usable energy efficiently", f: "Warm, soft, well-cooked foods in small portions" },
                { p: "Spleen Yang Deficiency", s: "Same as Qi, plus cold hands, pale face, loves warmth", m: "Spleen lacks the fire to break food down", f: "Warming foods, small amounts of ginger and cinnamon" },
                { p: "Stomach Yin Deficiency", s: "Dry stools, picks at dry foods, dry mouth", m: "Stomach lacks the moisture to process food smoothly", f: "Lightly moistening foods like pear, lotus seed, millet" },
                { p: "Damp-Cold in the Middle", s: "Bloated, sticky loose stools, low appetite", m: "Cold has settled in the digestive middle, slowing everything", f: "Warming aromatics like fennel and tangerine peel" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Weak Digestion in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Most cases of weak digestion in children are not from any one thing. They are the result of small daily mismatches between what a child's Spleen can handle and what they are actually eating. Five patterns show up over and over."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Too many cold and raw foods"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, cold food requires the body to spend warmth digesting it. For an adult with a mature Spleen, that is no problem. For a 4-year-old whose Spleen is still developing, an ice-cold smoothie or raw salad pulls warmth away from where it is needed. The Spleen has to work overtime, and over time, it tires."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Irregular meal times"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Spleen, like most systems, likes rhythm. A child who eats at 7 AM one day and 10 AM the next is asking their digestive system to be ready at any moment. Children do well with predictable meal and snack times. Even a 30-minute difference, made consistently, can shift things."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overeating and forced eating"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The clean-your-plate approach is tough on a child's Spleen. The Spleen has a daily capacity. When a child is forced to eat past full, the extra food does not become extra energy. It becomes what TCM calls dampness, a heavy, sticky byproduct that further slows digestion. Picky eating is often the Spleen protecting itself."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Recovery from illness or antibiotics"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"After a stomach bug, a round of antibiotics, or even a long viral illness, a child's digestion is often stretched thin. Appetite drops, stools get weird, and parents worry. TCM views this as the Spleen rebuilding. Going straight back to a normal diet is often too much. The traditional approach is to start with congee, broth, and easily absorbed foods for a few days before reintroducing heavier meals."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Emotional stress at the table"}</h3>
        <p className="text-text2 leading-relaxed">
          {"The Spleen and the Liver are paired in TCM theory. When a child is anxious, scolded, or rushing through meals, the Liver Qi tightens and the Spleen cannot do its job. Mealtimes that involve arguing, screens, or pressure often produce children who genuinely feel sick afterward, and they are not faking."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Strengthen a Child's Spleen"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods are drawn from traditional Chinese dietary practice for children. They are gentle, warming, and easy to digest. None are exotic; most are everyday staples in many kitchens. Use them as a starting point and adjust based on what your child actually enjoys."}
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
                { food: "White rice (jasmine or short grain)", prop: "Neutral, sweet", help: "The most easily digested grain for an immature Spleen; the base of congee", prep: "Cook with extra water into soft porridge" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Mildly supports Spleen Qi; traditionally used for children's digestion and energy", prep: "Peel and slice into congee or soup" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Mildly supports Spleen and Blood; natural sweetness children like", prep: "Pit and add 2-3 to congee or tea" },
                { food: "Millet", prop: "Warm, sweet", help: "Considered the most digestible grain after rice; gentle on a tired Spleen", prep: "Cook as porridge with jujube" },
                { food: "Pumpkin", prop: "Warm, sweet", help: "Soft, sweet, easy to digest; supports the Spleen and gently drains damp", prep: "Steam or roast, mash into porridge" },
                { food: "Lotus seed", prop: "Neutral, sweet", help: "Calms digestion and supports the Spleen; traditionally used for loose stools", prep: "Soak, cook into congee" },
                { food: "Carrot", prop: "Neutral, sweet", help: "Gentle Spleen support; soft when cooked; easy for children to accept", prep: "Steam, mash, or cook into soup" },
                { food: "Sweet potato", prop: "Neutral, sweet", help: "Warming with steady energy; richer than rice, so use smaller amounts", prep: "Roast or steam, mash" },
                { food: "Chicken or vegetable broth", prop: "Warm", help: "Easy to absorb; carries warmth directly to the middle; a recovery staple", prep: "Slow-simmer with ginger, salt only at the end" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Digestion Is Weak"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not bad. They are simply harder for an immature Spleen to handle. Limiting them temporarily, while a child's digestion rebuilds, can make a real difference."}
        </p>
        <ul className="space-y-2">
          {[
            "Ice water and very cold drinks, which force the body to warm them up before processing",
            "Excessive raw fruit, especially cold-natured ones like banana and citrus, in large daily amounts",
            "Dairy in excess, since milk, cheese, and ice cream are considered damp-forming in TCM and further slow a weak Spleen",
            "Deep-fried foods, which are heavy and heat-forming, a difficult combination for children",
            "Concentrated sweets, which create temporary heat that leaves the Spleen more depleted",
            "Very spicy or strongly seasoned dishes that overstimulate the Stomach in ways children are not ready for",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Support Digestion"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These are the small, repeatable habits that traditional Chinese pediatric advice comes back to. None of them require special ingredients."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm congee or oatmeal signals the system to start digesting." },
            { h: "Small portions, more often if needed.", d: "A tired Spleen handles half a bowl better than a full one. Five small meals often work better than three big ones for young children." },
            { h: "Chew thoroughly.", d: "Twenty chews per bite is the traditional guidance. Digestion starts in the mouth, and rushed eating forces the Spleen to work harder." },
            { h: "No screens at the table.", d: "Digestion requires attention. Screens pull attention away, and digestion slows." },
            { h: "Light movement after meals.", d: "A 5 to 10 minute walk after eating helps the Spleen move food through. Lying down right after meals is one of the worst habits." },
            { h: "Keep ice out of drinks.", d: "Room temperature or warm water is the default. Cold drinks at meals are especially disruptive." },
            { h: "Largest meal at lunch, lighter dinner.", d: "Digestion is strongest at midday. A heavy dinner forces the Spleen to work all night, often disrupting sleep." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: The Morning Congee"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the routine behind the congee recipe that gets shared widely with parents. It is simple, takes about an hour of mostly hands-off time, and uses four core ingredients. It is one of the most reliable ways to start rebuilding a child's Spleen."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/2 cup white rice, jasmine or short grain"}</li>
            <li>{"5 cups water"}</li>
            <li>{"3 slices fresh Chinese yam (or 2 tablespoons dried)"}</li>
            <li>{"2 red dates (jujube), pitted"}</li>
            <li>{"Tiny pinch of salt at the end"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the rice until the water runs clear."}</li>
            <li>{"2. If using fresh Chinese yam, peel and slice into thin rounds."}</li>
            <li>{"3. Combine rice, water, Chinese yam, and red dates in a pot."}</li>
            <li>{"4. Bring to a boil, then reduce to very low heat."}</li>
            <li>{"5. Simmer 45 to 60 minutes, stirring occasionally so the rice does not stick."}</li>
            <li>{"6. The congee is ready when it looks like a smooth, thick porridge."}</li>
            <li>{"7. Skim out the red date skins if your child prefers. Add a tiny pinch of salt."}</li>
            <li>{"8. Serve warm, in small portions."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Breakfast, or one meal replacement per day for the first week"}</li>
            <li>{"Half a bowl for young children (ages 2-5), full bowl for older kids (6+)"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Continue daily for 1 week, then 2-3 times per week as maintenance"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 3-5 days: usually better appetite, fewer complaints of stomach pain"}</li>
            <li>{"After 1 week: stools typically more formed and regular"}</li>
            <li>{"After 2-3 weeks: steadier energy, fewer picky eating battles"}</li>
            <li>{"Long-term: continue 2-3 times per week as a maintenance habit"}</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Talk to your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Blood in the stool or black, tarry stools"}</li>
          <li>{"Persistent abdominal pain that wakes them at night"}</li>
          <li>{"Unexplained weight loss or failure to grow"}</li>
          <li>{"Repeated vomiting"}</li>
          <li>{"Chronic diarrhea lasting more than a few days"}</li>
          <li>{"Signs of dehydration"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-digestion"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/spleen-qi-deficiency" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Spleen Qi Deficiency: A Complete Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same pattern. Useful for parents who recognize the same signs in themselves, since digestion patterns often run in families."}</p>
          </Link>
          <Link href="/wellness/tcm-diet" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The TCM Diet: Foundational Foods for Every Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The core food framework behind Chinese dietary therapy, with the warm and easily digested staples that suit both children and tired adults."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-bloating" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Bloating: When the Spleen Cannot Keep Up"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bloating in children and adults often traces back to the same Spleen weakness. This page covers the adult side of the same pattern."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Weak digestion in children often mirrors a Qi Deficient parent. Understanding your own constitution helps explain family patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
