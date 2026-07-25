
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildImmuneSystemArticle() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Immune System"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Immune System: Lung, Spleen and Kidney Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"Chinese medicine describes a child's overall resistance as a three-layer system: the Lungs guard the surface, the Spleen produces the daily supply of Qi, and the Kidneys hold the deepest reserve. When all three are working, a child recovers quickly from exposure and rarely stays unwell for long. When one layer is weak, the others compensate, then tire. Lung Qi Deficiency shows up as frequent colds and shallow breathing. Spleen Qi Deficiency shows up as poor appetite, loose stools, and slow recovery after illness. Kidney Essence Deficiency shows up as low stamina, late milestones, or slow growth. Foods that gently tonify each layer, such as shiitake and goji soup, astragalus broth, and Chinese yam porridge, may help rebuild the full depth of a child's defense over several months."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Immune System"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Chinese medicine does not use the word immune. It uses a more architectural image. A child's resistance is described as a three-layer defense, with each layer sitting deeper than the last. The outermost layer is the Lungs and the surface they govern, including the skin, the pores, and the mucous membranes of the nose and throat. The middle layer is the Spleen and the digestive system, which produces the daily supply of Qi from food. The deepest layer is the Kidneys, which hold the constitutional reserve, the inherited essence that a child is born with and slowly draws on through growth."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"A useful image is a walled garden. The Lungs are the wall and the gate. They meet the wind, the cold, the pollen, and the viruses first, and they decide what comes in. The Spleen is the kitchen just inside the gate, turning the day's food into the energy that keeps the wall standing and the gate guarded. The Kidneys are the cellar underneath, holding the long stores that the kitchen draws on when the daily supply runs short. When all three are working, a child meets a virus at the gate, the kitchen keeps the guards fed, and the cellar stays untouched. When the gate is weak, the kitchen works overtime. When the kitchen tires, the cellar starts to drain. A child who is always unwell is often running on the cellar."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This is why a single-organ approach often disappoints parents. A child who keeps catching colds is given Lung tonics, but if the Spleen is weak, the Lungs never get the fuel they need to rebuild. A child who recovers slowly is given Spleen tonics, but if the Kidney reserve is thin, the Spleen cannot produce more Qi than the cellar will release. The traditional approach is therefore layered. Strengthen the Lungs for surface defense. Strengthen the Spleen for daily supply. Strengthen the Kidneys for the deep reserve. Foods for each layer differ, and a child's pattern usually calls for two of the three at any given time. This page covers all three so families can match the foods to the child in front of them."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Immune Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A child who is often unwell rarely has just one weak layer. The Lungs, the Spleen, and the Kidneys interact, and weakness in one tends to draw on the others. The table below covers the four combinations parents see most often. Match your child's signs to find the closest food direction."}
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
                { p: "Lung Qi Deficiency", s: "Frequent colds, shallow breathing, soft voice, pale face", m: "Outer layer too thin to screen out wind and chill", f: "Astragalus tea, pear, lily bulb for the surface" },
                { p: "Spleen Qi Deficiency", s: "Poor appetite, loose stools, slow recovery after illness", m: "Middle layer cannot produce enough Qi to supply the rest", f: "Millet, jujube, Chinese yam for daily supply" },
                { p: "Kidney Essence Deficiency", s: "Low stamina, late milestones, slow growth, frequent bedwetting", m: "Deepest reserve thin, daily supply runs short faster", f: "Goji, black sesame, walnuts in small amounts" },
                { p: "Lung, Spleen and Kidney Weak", s: "Always unwell, slow to recover, tired, catches everything", m: "All three layers tired, the full depth of defense is depleted", f: "Layered foods: shiitake soup, astragalus broth, congee" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Weakens a Child's Immune System"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A child who is often unwell is rarely weak in one place. The three layers of defense tire together, and the cause is usually a combination of developmental immaturity, daily diet, sleep, and exposure. Five threads show up again and again."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"An immature three-layer system"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese pediatric texts describe children with a memorable phrase: liver is excessive, spleen is insufficient. The Lungs and the Kidneys are also considered immature at birth and continue to develop through the early years. The Lung layer is thin and permeable. The Spleen layer is still learning to transform fluids efficiently. The Kidney reserve, while set at birth, is small in absolute terms and is being slowly drawn on for growth. This means a young child's three-layer defense is genuinely thinner than an adult's, not because anything is wrong, but because it is still being built. Each cold, each poor sleep week, each damp week draws a little from the cellar. Over time, the cellar can run low enough that recovery between exposures stops happening fully."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A Spleen that cannot supply the layers"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In the five-phase system that underpins Chinese medicine, the Spleen is described as the mother of the Lungs and the source of after-essence that feeds the Kidneys. The Spleen produces Qi and Blood from food, and both the Lungs and the Kidneys rely on that supply. When the Spleen is tired from poor appetite, picky eating, cold and raw foods, or damp forming meals, the supply line to the other two layers dries up. The Lungs weaken first, because they need daily fuel. The Kidneys weaken more slowly, because they hold a reserve. This is why a child whose immune weakness always comes with loose stools, low appetite, or a pale face is rarely just a Lung problem. The root is often the Spleen. Strengthening the Spleen with millet porridge, jujube dates, and Chinese yam indirectly supports both the Lungs and the Kidneys, and is often more effective than focusing on either alone."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Sleep that does not reach the deep part of the night"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, the deepest restoration happens in the first third of the night, when the body is in its most yin state. This is when the Kidney reserve is said to be replenished and the Lungs rebuild. A child who falls asleep at 9 PM and sleeps deeply until morning gets the full restoration. A child who falls asleep at 10 PM or later, or who wakes frequently, gets only a partial one. Over weeks, the difference accumulates. The child who sleeps late is running on a thinner reserve by Friday, and the first cold of the season usually arrives right around then. Bedtime is not a moral issue. It is a recovery window, and it is one of the most reliable levers a family has for immune support."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet that overheats or overcools"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Two opposite extremes both tire the Spleen. Cold and raw foods, like ice water, cold milk, and uncooked salads, pull warmth away from the digestive middle and slow fluid transformation. Fried, spicy, and heavily sweetened foods generate internal heat that dries the mucous membranes and burdens the Spleen with damp heat byproducts. The child who lives on cold milk in the morning and fried snacks in the afternoon is loading the Spleen from both ends. The fix is not to eliminate any food entirely. It is to serve drinks warm, cook fruit when possible, and keep fried and iced foods as occasional treats rather than daily defaults. Small swaps, done consistently, change the internal temperature and the Spleen's capacity over time."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Exposure that outpaces recovery"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Modern environments pose challenges that classical Chinese medicine could not have predicted. Daycare and preschool exposure means a young child meets every circulating virus in the first few years, often before the three-layer defense has built any library. Air conditioning creates artificial wind-cold in summer. Dry heated air in winter dries the mucous membranes. None of these can be fully removed. What families can do is pace exposure: a quieter week after a cold, a hand washing routine the moment the child comes home, and a humidifier in the bedroom during heating season. The goal is to give the three layers enough recovery time between hits. A child who gets two quiet weeks between colds rebuilds. A child who gets two days does not."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Rebuild a Child's Three-Layer Defense"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The foods below each support one of the three layers, and several support more than one. Some tonify the Lung surface. Some rebuild the Spleen supply. Some gently nourish the Kidney reserve. None are quick fixes. Used two to three times a week over a month, they tend to reduce the frequency and duration of illness in children whose defense has been running low. Age guidance: astragalus is for ages 3 and up, not for under 3, and never during an active cold with fever. Shiitake and goji are gentle enough for ages 2 and up. Black sesame and walnuts are best for ages 3 and up because of texture and choking."}
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
                { food: "Shiitake Mushroom (Xiang Gu)", prop: "Neutral, sweet", help: "Gently supports the Spleen and the Lungs; a mild food tonic for everyday resistance", prep: "Dried shiitake in soup, 2 to 3 times weekly. Ages 2+" },
                { food: "Goji Berries (Gou Qi Zi)", prop: "Neutral, sweet", help: "Nourishes Liver and Kidney essence; supports the deep reserve behind immunity", prep: "5 to 6 berries in soup or tea. Ages 2+" },
                { food: "Astragalus (Huang Qi)", prop: "Warm, sweet", help: "Tonifies Lung Qi and Wei Qi; the classic surface defense herb", prep: "3 slices in broth or soup, weekly. Ages 3+, not during fever" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Strengthens Spleen, Lung, and Kidney at once; the most versatile child tonic", prep: "Steamed or in porridge, 2 to 3 times weekly. Ages 1+" },
                { food: "Jujube Dates (Hong Zao)", prop: "Warm, sweet", help: "Supports the Spleen and Blood, which indirectly feeds the Lung layer", prep: "2 to 3 pitted dates in porridge or tea" },
                { food: "Millet (Xiao Mi)", prop: "Neutral, sweet", help: "Strengthens the Spleen base; the foundation food for daily Qi supply", prep: "Soft porridge, daily if accepted. Ages 1+" },
                { food: "Black Sesame (Hei Zhi Ma)", prop: "Neutral, sweet", help: "Nourishes Kidney essence and Blood; supports the deepest layer", prep: "1 teaspoon ground into porridge. Ages 3+" },
                { food: "Walnut (Hu Tao Ren)", prop: "Warm, sweet", help: "Tonifies Kidney and Lung; traditional food for slow growth and weak lungs", prep: "1 to 2 finely chopped in porridge. Ages 3+" },
                { food: "Lily Bulb (Bai He)", prop: "Cool, sweet", help: "Moistens Lung Yin; useful for dry cough after repeated colds", prep: "Porridge or mild soup, ages 2 and up" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On When Immunity Is Low"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These are not forbidden foods. They are the foods most likely to tire the Spleen, cool the Lung system, or burden the Kidney reserve at exactly the wrong moment. Pulling back on them during cold season and recovery weeks often makes a visible difference within three to four weeks."}
        </p>
        <ul className="space-y-2">
          {[
            "Ice water and very cold drinks, which cool the Lung system and slow the Spleen",
            "Excessive raw fruit and salads, which ask the Spleen for extra warmth to process",
            "Deep-fried and greasy foods, which produce damp heat and burden the Spleen",
            "Concentrated sweets, which create temporary heat that leaves the system more depleted",
            "Dairy in excess, considered damp forming in TCM, which can thicken mucus during colds",
            "Very spicy foods, which overstimulate the surface and dry the mucous membranes",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Rebuild the Three Layers"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"What a child eats matters. What a child does between meals matters just as much. These seven habits cover the recovery windows and protection points that the three-layer defense relies on most."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Sleep before 9 PM.", d: "The deepest restoration happens in the first third of the night, when the Kidney reserve is replenished and the Lungs rebuild. A child who sleeps before 9 PM gets the full window. A child who sleeps at 10 PM or later is running on a thinner reserve by the end of the week." },
            { h: "Warm water first thing in the morning.", d: "The Lungs and the Spleen have been still overnight. A half cup of warm water on waking gently wakes both. Cold water on an empty stomach does the opposite and is one of the most common hidden drivers of weak immunity in young children." },
            { h: "A warm breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm congee or oatmeal signals the system to start producing Qi for the day. A cold breakfast skips that signal and leaves the Spleen playing catch up until lunch." },
            { h: "Small portions, more often if needed.", d: "A tired Spleen handles half a bowl better than a full one. Five small meals often work better than three big ones for young children, especially during a recovery week after illness." },
            { h: "A quiet recovery week after each cold.", d: "The three layers need time to refill after an illness. A child who goes straight back to daycare, sleepovers, and intense activity often catches the next virus before the previous one has fully cleared. A quieter week, with earlier bedtimes and gentler food, breaks the cycle." },
            { h: "A light scarf in wind or air-conditioned rooms.", d: "In TCM theory, the back of the neck is where wind-cold enters the body. A thin cotton scarf in air-conditioned classrooms or on windy playground days is one of the simplest protections a family can add for the Lung layer." },
            { h: "Outdoor play in daylight, not exhausting sports after dark.", d: "Gentle daylight movement circulates Wei Qi to the surface and supports the Kidney yang through warmth and natural light. Exhausting sports after dark sweat out the protective layer and leave the pores open to chill." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
        <p className="text-text2 leading-relaxed mt-5">
          {"A note on what this looks like in practice. Aiden, age 6, caught a cold nearly every month through his first year of school and recovered slowly each time. His mother began making a small pot of shiitake and goji soup twice a week, moved his bedtime to before 9 PM, and added a quieter recovery week after each cold instead of sending him straight back. By the second month, the colds had stretched to every six weeks. By the third month, he went a full eight weeks without one, and his recovery time had halved. The three layers had been given the food and the recovery time they needed to rebuild. This is not a quick fix. It is what consistent layered support looks like over a season."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Shiitake and Goji Immune Soup"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the routine behind the soup that gets shared widely with parents whose children seem to catch everything. It is simple, takes about 40 minutes of mostly hands-off time, and uses three core ingredients that together touch all three layers of the defense. It is one of the most reliable ways to start rebuilding a child's immune system in the quiet weeks before cold season."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"3 to 4 dried shiitake mushrooms, soaked and sliced"}</li>
            <li>{"1 tablespoon goji berries, rinsed"}</li>
            <li>{"3 cups vegetable or mild chicken broth"}</li>
            <li>{"Optional: 2 slices fresh Chinese yam"}</li>
            <li>{"Tiny pinch of salt at the end"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Soak the dried shiitake mushrooms in warm water for 20 minutes, then slice."}</li>
            <li>{"2. Rinse the goji berries briefly under cool water."}</li>
            <li>{"3. If using fresh Chinese yam, peel and slice into thin rounds."}</li>
            <li>{"4. Combine shiitake, goji berries, Chinese yam, and broth in a pot."}</li>
            <li>{"5. Bring to a gentle boil, then reduce to very low heat."}</li>
            <li>{"6. Simmer covered for 25 to 30 minutes."}</li>
            <li>{"7. Add a tiny pinch of salt at the end. Let it cool to warm before serving."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Twice a week, in the quiet weeks before cold season and during recovery weeks"}</li>
            <li>{"Half a small bowl for ages 2 to 5, a full small bowl for ages 6 and up"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Pause during an active cold with fever, and resume during the recovery week"}</li>
            <li>{"Continue for 4 to 6 weeks, then reduce to once a week as maintenance"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 2 weeks: usually no visible change, the layers are still rebuilding"}</li>
            <li>{"After 3 to 4 weeks: colds often shorter and recovery faster"}</li>
            <li>{"After 6 weeks: many children go longer between illnesses and tire less easily"}</li>
            <li>{"Long-term: use seasonally, twice a week before and during cold season, then pause"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-immune-system"
        imageSrc="/images/pinterest/child-immune-system.jpg"
        alt="Chinese medicine for child immune system - shiitake and goji immune soup recipe card"
        pinDescription="Shiitake and goji soup for child immune system. A Chinese medicine recipe to build defense."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Frequent or severe illness in children can sometimes signal an underlying issue that needs conventional care, including immune evaluation. Always consult your pediatrician, and contact them promptly if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Fever lasting three days or more, or any fever above 104 F (40 C)"}</li>
          <li>{"Fast, labored, or noisy breathing, or skin pulling in around the ribs"}</li>
          <li>{"Illness that does not improve after a week, or that improves then suddenly worsens"}</li>
          <li>{"More than six significant infections in a year, or any infection requiring IV antibiotics"}</li>
          <li>{"Failure to grow, unexplained weight loss, or persistent fatigue"}</li>
          <li>{"Repeated infections in an infant under 3 months"}</li>
          <li>{"Any illness in a child with a known immune condition"}</li>
        </ul>
        <p className="text-sm text-text2 leading-relaxed mt-3">
          {"Always consult your pediatrician before introducing any new herb or food, including astragalus and goji berries, to a child's diet, especially for children under 3 or children with chronic conditions."}
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-immune-system"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-frequent-colds" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Frequent Colds: Weak Lung Qi and Foods That May Strengthen Defense"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The Lung layer of the three-layer defense, in depth. This page covers the surface side of the same immunity picture, with the astragalus chicken soup recipe."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-allergies" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Allergies: Wei Qi and Lung-Supporting Foods That May Help"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Allergies are one expression of a thinner surface defense. This page covers the reactive side of the same Lung layer, with the astragalus and jujube tea recipe."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-eczema" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Eczema: Damp Heat and Cooling Foods That May Help"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Recurring skin flares often travel with frequent illness. This page covers the damp heat pattern that vents through the skin, with the mung bean and coix seed porridge recipe."}</p>
          </Link>
          <Link href="/wellness/spleen-qi-deficiency" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Spleen Qi Deficiency: A Complete Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The middle layer of the three-layer defense, in depth. The adult version of the same Spleen pattern that supplies the Lungs and the Kidneys in children."}</p>
          </Link>
          <Link href="/types/qi_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children who are often unwell often fit the Qi Deficient constitution. Understanding your child's body type helps explain why their three-layer defense runs the way it does."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
