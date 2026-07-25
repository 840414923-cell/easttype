
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildEczemaArticle() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Eczema"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Eczema: Damp Heat and Cooling Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"When red, itchy, weepy patches keep returning on a child's skin, Chinese medicine does not start with the skin. It looks underneath, at an internal pattern called damp heat. The Spleen, in TCM theory, is supposed to transform fluids. When it is weak, fluids collect, stagnate, and turn warm. That warm dampness looks for an exit, and in children it often vents through the skin as red, oozy, itchy patches. Two patterns tend to overlap. Damp Heat shows up as bright red, weepy, hot patches that worsen in summer and with fried foods. Spleen Weakness with Damp shows up as paler, drier patches with poor appetite and loose stools. Cooling, draining foods such as mung bean and coix seed porridge, celery soup, and winter melon may help clear the internal pattern over several weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Eczema in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Chinese medicine does not classify eczema as a skin problem. The red, itchy, sometimes weepy patches that appear on a child's cheeks, elbows, or behind the knees are read as a surface echo of something happening underneath. The classical phrase is the skin is the mirror of the inside. Where Western dermatology often focuses on the visible patch itself, TCM asks which internal pattern is venting through it."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"In children, the most common internal pattern behind recurring itchy patches is called damp heat. The Spleen, the digestive and fluid-transforming system in TCM theory, is supposed to take in food and drink, extract the useful part, and pass the rest downward. When the Spleen is immature or tired, some of that fluid does not get transformed. It sits in the body as dampness, a heavy, sticky, slow-moving residue. Over time, that dampness warms up. Warm dampness behaves like a simmering pot with the lid on. It looks for a vent, and in children, whose skin is thin and permeable, it often finds one."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This is why eczema in children often flares in summer, after a bout of rich or fried food, or during a phase of poor appetite and loose stools. The skin is not breaking down on its own. It is the exit route the body is using to clear something it cannot process from the inside. The traditional approach is therefore not aimed at the skin. It is aimed at the Spleen and at the damp heat underneath. Cooling, draining foods, eaten consistently over weeks, gradually reduce the load, and the patches often calm as the internal pattern clears. None of this replaces conventional dermatologic care. It is a complementary lens that many families find useful alongside the plan from their pediatrician."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Damp Heat Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Recurring itchy patches in children almost always involve more than one pattern. Damp heat sits on top of a Spleen weakness, and the two reinforce each other. The table below covers the four combinations parents see most often. Match your child's signs to find the closest food direction."}
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
                { p: "Damp Heat", s: "Bright red, weepy, hot patches that worsen in summer", m: "Untransformed fluid has warmed and is venting outward", f: "Cooling and draining: mung bean, coix seed, celery" },
                { p: "Spleen Weakness with Damp", s: "Paler patches, poor appetite, loose stools, tired", m: "Spleen cannot transform fluids, dampness collects", f: "Gentle Spleen tonics: millet, jujube, Chinese yam" },
                { p: "Blood Dryness", s: "Dry, flaky, itchy patches with scratch marks, worse in winter", m: "Long standing damp heat has consumed the moisture in Blood", f: "Moistening foods: lily bulb, white fungus, pear" },
                { p: "Wind Heat", s: "Sudden itchy red patches that move around the body", m: "Surface heat paired with wind that moves through the skin", f: "Light cooling teas: chrysanthemum, mint in small amounts" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Damp Heat in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Damp heat does not appear from nowhere. It builds from a combination of developmental immaturity, daily food choices, and environmental load that slowly overwhelms the Spleen until untransformed fluid starts to warm and vent through the skin. Five threads show up again and again."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"An immature Spleen"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese pediatric texts describe children with a memorable phrase: liver is excessive, spleen is insufficient. The Spleen, in TCM theory, is the functional system responsible for transforming food and drink into Qi and Blood. It is not the same as the anatomical spleen in Western medicine. It is more of a digestive and fluid-handling system. In young children that system is genuinely still maturing. Its capacity to transform fluids is smaller than what it will become, which means dampness collects more easily. This is why itchy patches are so common between ages 1 and 5. The Spleen is growing into its job, and in the meantime, any extra load shows up as dampness."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet that loads damp and heat together"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Some foods generate damp. Some generate heat. Some do both at once, and those are the worst offenders for a child whose Spleen is already tired. Fried foods, greasy snacks, heavy cheeses, ice cream, chocolate in quantity, and concentrated sweets all sit in this category. They are heavy to transform and they warm as they sit. A child who eats these daily is adding fuel to the damp heat pot every afternoon. The patches often flare within 24 to 48 hours of a heavy meal. The fix is not to ban every treat. It is to keep the damp and heat forming foods as occasional, small portions, and to pair them with cooling, draining foods like cucumber, winter melon, or mung bean soup on the same day."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Heat in the environment"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Summer heat and humidity are external forms of damp heat in TCM theory. A child whose Spleen is already carrying internal dampness will often flare during a humid week in July, even if their diet has not changed. The external damp heat joins the internal damp heat, and the body looks for an exit. The same child may clear up completely during a dry cool week in September. The pattern is not random. It is the skin responding to the weather. Families who recognize this can prepare: lighter, more cooling meals during humid weeks, lighter clothing, and a fan in the bedroom to keep air moving at night."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overloading the Spleen during illness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"After a stomach bug, a round of antibiotics, or a long viral illness, a child's Spleen is often stretched thin. Appetite drops, stools change, and parents worry. The traditional view is that the Spleen is rebuilding. Going straight back to a normal diet, especially a rich one, often produces a flare of itchy skin within a week. The untransformed fluid from the heavier meals has nowhere to go but outward. The traditional approach is to start with congee, broth, and easily absorbed foods for several days before reintroducing richer meals. This window is often missed, and it is one of the most common triggers parents do not connect to the flare."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Family history and constitutional tendency"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Some children are simply born with a Spleen that handles dampness less efficiently. If one or both parents had childhood eczema, allergies, or asthma, the child is more likely to show a similar pattern. In TCM theory, this is read as a constitutional tendency, not a fixed destiny. The body type sets the starting point. What the family does with food, sleep, and daily habits shapes how strongly that tendency expresses itself over the years. A child with a damp heat constitution who eats light, cooling food and sleeps well may move through summer with mild flare ups. The same child on a diet of fried snacks and ice cream may struggle all season. Knowing your child's body type helps explain why their pattern looks the way it does."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Clear Damp Heat in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The foods below all either cool heat, drain dampness, or gently support the Spleen so it can transform fluids on its own. Some do two of these at once. None are quick fixes. Used two to three times a week over a month, they tend to reduce the redness, weeping, and itch of damp heat flares in children whose Spleen has been running below capacity. Age guidance: mung bean and coix seed are for ages 2 and up, in small portions. Lotus seed and Chinese yam are gentle enough for ages 1 and up. Avoid cooling foods in large amounts during a stomach bug or loose stools, as they can worsen those symptoms temporarily."}
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
                { food: "Mung Bean (Lu Dou)", prop: "Cool, sweet", help: "The classic food for clearing heat and draining dampness through urine", prep: "Small bowl of thin porridge, 1 to 2 times weekly. Ages 2+" },
                { food: "Coix Seed (Yi Yi Ren)", prop: "Cool, bland", help: "Drains dampness, mildly supports the Spleen, cools heat", prep: "Soak 2 hours, cook into porridge with mung bean. Ages 2+" },
                { food: "Winter Melon (Dong Gua)", prop: "Cool, sweet", help: "Drains damp heat through urine; gentle enough for regular use", prep: "Light soup, weekly. Save the skin to boil in the broth" },
                { food: "Celery (Qin Cai)", prop: "Cool, sweet", help: "Clears heat, mildly drains damp, supports the Liver", prep: "Lightly cooked in soup, not raw for young children" },
                { food: "Cucumber (Huang Gua)", prop: "Cool, sweet", help: "Light cooling food; useful in summer flare weeks", prep: "Small amounts, peeled. Cook lightly for under 3" },
                { food: "Lotus Seed (Lian Zi)", prop: "Neutral, sweet", help: "Strengthens the Spleen and calms digestion, helps it transform fluids", prep: "Soak, cook into congee. Ages 1+" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Strengthens Spleen Qi; the foundation food for rebuilding fluid handling", prep: "Steamed or in porridge, 2 to 3 times weekly. Ages 1+" },
                { food: "Millet (Xiao Mi)", prop: "Neutral, sweet", help: "Strengthens the Spleen base; easy for a tired system to absorb", prep: "Soft porridge, daily if accepted. Ages 1+" },
                { food: "Pear (Li)", prop: "Cool, sweet", help: "Moistens and cools; useful when damp heat has dried into Blood dryness", prep: "Steamed with rock sugar. Puree for under 3" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During a Flare"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These are not forbidden foods. They are the foods most likely to add damp, add heat, or burden a tired Spleen at exactly the wrong moment. Pulling back on them during a flare week often makes a visible difference within five to seven days."}
        </p>
        <ul className="space-y-2">
          {[
            "Fried and greasy foods, which add damp and heat at the same time",
            "Ice cream and frozen dairy treats, which are cold and damp forming together",
            "Heavy cheeses and excess milk, considered damp forming in TCM",
            "Concentrated sweets and chocolate in quantity, which generate internal heat",
            "Spicy foods, which add heat and worsen redness and itching",
            "Tropical fruit in large amounts during a flare, especially mango and lychee, which are warm and damp forming",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help Clear Damp Heat"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"What a child eats matters. What a child does between meals matters just as much. These seven habits cover the openings through which damp and heat most often build in a child whose Spleen is running below capacity."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm, simple breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm millet or rice congee signals the system to start transforming fluids. A cold breakfast, especially cold milk on an empty stomach, sets the day up for dampness from the first hour." },
            { h: "Small portions, more often if needed.", d: "A tired Spleen handles half a bowl better than a full one. Five small meals often work better than three big ones for young children, especially during a flare week when the system is already loaded." },
            { h: "Lighter meals during humid weeks.", d: "External damp heat joins internal damp heat. When the weather is hot and humid, switch to cooling soups, steamed vegetables, and mung bean porridge, and pull back on fried and heavy foods until the weather clears." },
            { h: "Keep the bedroom cool and air moving.", d: "A child sleeping in a hot, humid, still room sweats lightly all night, which adds heat to the surface and worsens itching. A fan, light cotton bedding, and a cooler bedroom help the surface settle overnight." },
            { h: "Short warm showers, not hot baths.", d: "Hot water feels good on itchy skin in the moment, but it worsens redness and dryness over the next few hours. Short, warm showers, followed by a gentle unscented moisturizer while the skin is still damp, are kinder to the surface." },
            { h: "Sleep before 9 PM.", d: "The Spleen and the Liver rebuild during the early part of the night. A child who sleeps before 9 PM gets the deepest restoration. A child who sleeps at 10 PM or later is running on borrowed Qi by the end of the week, and flares often arrive right around then." },
            { h: "A daily warm drink, not iced.", d: "Room temperature or warm water, or a small cup of mild chrysanthemum tea in summer, keeps the Spleen warm enough to transform fluids. Iced drinks cool the Spleen and slow fluid handling, which is the opposite of what a damp heat pattern needs." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
        <p className="text-text2 leading-relaxed mt-5">
          {"A note on what this looks like in practice. Leo, age 4, had red weepy patches behind his knees every summer since he was 2. His mother began giving him a small bowl of mung bean and coix seed porridge twice a week in May, swapped his afternoon ice cream for cucumber slices, and added a fan to his bedroom. By mid-July, the patches behind his knees were paler and less itchy. By August, he was sleeping through the night without scratching. The Spleen had been given lighter work and a cooler environment, and the internal damp heat had slowly cleared. This is not a quick fix. It is what consistent food and habit support looks like over a season."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Mung Bean and Coix Seed Cooling Porridge"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the routine behind the porridge that gets shared widely with parents whose children flare every summer. It is simple, takes about an hour of mostly hands-off time, and uses two core ingredients. It is one of the most reliable ways to start clearing internal damp heat in the quiet weeks before flare season."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1/4 cup mung beans, rinsed"}</li>
            <li>{"2 tablespoons coix seed (yi yi ren), soaked 2 hours"}</li>
            <li>{"4 cups water"}</li>
            <li>{"Optional: 1 teaspoon rock sugar or a tiny pinch of salt"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the mung beans until the water runs clear."}</li>
            <li>{"2. Drain the soaked coix seed."}</li>
            <li>{"3. Combine mung beans, coix seed, and water in a pot."}</li>
            <li>{"4. Bring to a boil, then reduce to very low heat."}</li>
            <li>{"5. Simmer 45 to 60 minutes, stirring occasionally, until the mung beans split and the coix seed is soft."}</li>
            <li>{"6. The porridge is ready when it looks like a thin, pale green soup."}</li>
            <li>{"7. Add rock sugar or a tiny pinch of salt to taste. Let it cool to warm before serving."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Twice a week, in the quiet weeks before summer and during flare season"}</li>
            <li>{"Half a small bowl for ages 2 to 5, a full small bowl for ages 6 and up"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Pause during a stomach bug, loose stools, or any illness with chills"}</li>
            <li>{"Continue for 4 to 6 weeks, then reduce to once a week as maintenance"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First week: usually no visible change on the skin, the internal pattern is still shifting"}</li>
            <li>{"After 2 weeks: patches often less weepy and less hot to the touch"}</li>
            <li>{"After 4 weeks: itch often reduced, especially at night, and patches paler"}</li>
            <li>{"Long-term: use seasonally, twice a week before and during flare season, then pause"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-eczema"
        imageSrc="/images/pinterest/child-eczema.jpg"
        alt="Chinese medicine for child eczema - mung bean and coix seed cooling porridge recipe card"
        pinDescription="Mung bean and coix seed porridge for child eczema. A Chinese medicine recipe to clear damp heat."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider, including a pediatric dermatologist or allergist when appropriate. Eczema in children can sometimes signal an underlying issue that needs conventional care, including prescription topical care, allergy testing, or infection management. Always consult your pediatrician, and contact them promptly if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Signs of skin infection, such as spreading redness, warmth, swelling, pus, or honey colored crusting"}</li>
          <li>{"Fever along with a skin flare"}</li>
          <li>{"Patches that crack, bleed, or do not improve after several days"}</li>
          <li>{"Itching severe enough to disrupt sleep for several nights"}</li>
          <li>{"A suspected allergic reaction to a new food, especially with swelling or breathing difficulty"}</li>
          <li>{"Patches that spread rapidly across the body, especially in an infant under 1"}</li>
          <li>{"Eczema that interferes with eating, drinking, or normal movement"}</li>
        </ul>
        <p className="text-sm text-text2 leading-relaxed mt-3">
          {"Always consult your pediatrician before introducing any new food, including mung bean and coix seed, to a child's diet, especially for children under 2 or children with chronic conditions."}
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-eczema"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-allergies" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Allergies: Wei Qi and Lung-Supporting Foods That May Help"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Allergic skin patterns and allergic nose patterns often travel together. This page covers the Lung and Wei Qi side of the same reactive surface."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-immune-system" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Immune System: Lung, Spleen and Kidney Foods That May Help"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Recurring skin flares often reflect a thinner overall defense. This page covers the full three-layer immune picture, including the Kidney reserve that eczema pages do not reach."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-phlegm" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Phlegm: Dampness Trapped in the Lungs"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Phlegm and eczema share the same damp root. This page covers the respiratory side of the dampness pattern that vents through the skin."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-eczema" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Eczema: An Adult Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same internal damp heat pattern. Useful for parents who recognize the same signs in themselves, since skin patterns often run in families."}</p>
          </Link>
          <Link href="/types/damp_heat" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Damp Heat Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children with recurring eczema often fit the Damp Heat constitution. Understanding your child's body type helps explain why their skin flares the way it does."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
