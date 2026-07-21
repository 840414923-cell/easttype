
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildFrequentColdsArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Frequent Colds"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Frequent Colds: Weak Lung Qi and Foods That May Strengthen Defense"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"If your child catches every cold that goes around preschool, sometimes the same one twice in a month, Chinese medicine looks at the Lungs and at Wei Qi, the surface defense that screens out wind and chill. Two patterns tend to overlap. Lung Qi Deficiency shows up as shallow breathing, a soft voice, and colds that linger for weeks instead of clearing. Wei Qi Deficiency shows up as a child who catches a cold from the slightest draft or temperature shift. The Lungs govern the skin and pores, so when they are weak, the door is left open. Warm, gently tonifying foods such as astragalus chicken soup, steamed Chinese yam, and pear with rock sugar may help rebuild Lung Qi and Wei Qi over several weeks of consistent use."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Frequent Colds in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, the Lungs do more than breathe. They are described as the canopy of the body, the uppermost organ, and they govern the skin, the pores, and the body surface. This sounds strange at first. Why would the organ that breathes also be in charge of the skin? The classical answer is that the Lungs open outward. They control the opening and closing of the pores, which is the body's first contact with wind, cold, and dampness from the environment."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sitting just outside the surface is a layer of protective energy called Wei Qi, sometimes translated as defensive Qi. Think of it as the body's screen door. The Spleen produces it from food, the Lungs spread it outward, and it circulates to the skin. When Wei Qi is strong, a child can walk through a chilly playground or sit beside a sneezing classmate and catch nothing. When Wei Qi is thin, every draft becomes a cold."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Children are vulnerable here because their Lungs and Spleen are still maturing. A young child's Wei Qi layer is thin, like a screen with gaps. Each cold that lands further tires the Lungs and widens the next gap. This is why some children seem to catch colds in a continuous loop from October to April. The system never fully recovers before the next exposure arrives. The traditional approach is not to chase each cold with stronger intervention. It is to rebuild Lung Qi and Wei Qi in the gaps between colds, so the screen door closes properly again."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Frequent Colds Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Frequent colds in children almost always involve more than one pattern. The Lungs, the Spleen, and the surface defense interact, and weakness in one tends to weaken the others. The table below covers the four combinations parents see most often. Match your child's signs to find the right food direction."}
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
                { p: "Lung Qi Deficiency", s: "Colds every 3 to 4 weeks, shallow breathing, soft voice", m: "Lungs too weak to distribute defense to the surface", f: "Warm, moistening foods: pear soup, lily bulb" },
                { p: "Wei Qi Deficiency", s: "Catches cold from the slightest exposure or draft", m: "Surface defense underpowered and full of gaps", f: "Astragalus tea (mild), Chinese yam porridge" },
                { p: "Spleen and Lung Weak", s: "Colds with poor appetite and loose stools", m: "Spleen cannot produce enough Qi to supply the Lungs", f: "Millet porridge, jujube dates" },
                { p: "Yin Def with Residual Heat", s: "Dry cough after a cold, night sweats, dry throat", m: "Lungs dried out from repeated infections", f: "Pear with rock sugar, white fungus" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Frequent Colds in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Frequent colds rarely come from a single weakness. They build from a combination of developmental immaturity, daily diet, and environmental exposure that slowly tires the Lung system until it cannot keep the surface sealed."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"An immature Lung system"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese pediatric texts use a phrase that translates as the Lung is delicate. A child's Lungs are not finished at birth. They continue to develop through the early years, and during that window they are more easily injured by cold, dryness, and repeated infection. Each cold leaves a small mark on the Lung system. When the next cold arrives before the previous one has fully cleared, the Lung never returns to its baseline. The child enters a cycle in which each cold feels a little worse and lasts a little longer. This is why frequent colds in children under 6 are taken seriously in Chinese medicine. The aim is to break the cycle, not to suppress the current symptom."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Weak Wei Qi at the surface"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Wei Qi, the defensive energy that patrols the body surface, depends on the Lungs to spread it outward and the Spleen to produce it from food. If either organ is running below capacity, Wei Qi thins. A child with thin Wei Qi catches cold from exposures that another child shrugs off: a few minutes without a jacket, a wet shirt after running, an air-conditioned classroom in summer. The cold does not arrive because the virus is stronger. It arrives because the screen door was open. Rebuilding Wei Qi takes patience and cannot be done in the middle of an active cold. The work happens in the weeks between colds, with consistent food and habits, until the screen fills in."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A Spleen that cannot support the Lungs"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In the five-phase system that underpins Chinese medicine, the Spleen is described as the mother of the Lungs. The Spleen produces Qi and Blood from food, and the Lungs rely on that supply to do their work, including spreading Wei Qi to the surface. When the Spleen is tired from poor appetite, picky eating, or damp-forming foods, the supply line to the Lungs dries up, and the Lungs weaken secondarily. This is why a child whose colds always come with loose stools, low appetite, or a pale face is rarely just a Lung problem. The root is often the Spleen. Strengthening the Spleen with millet porridge, jujube dates, and Chinese yam indirectly supports the Lungs and is often more effective than focusing on the Lungs alone."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet that quietly cools the Lungs"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Cold and raw foods do more than slow the Spleen. In TCM theory, they also introduce cold into the Lung system through the digestive pathway. A child who lives on ice water, cold milk, raw fruit, and ice cream is loading the system with cold at the exact moment it is trying to keep the surface warm against drafts. Over months, this pattern cools and tires the Lungs. The child who seems to always have a runny nose in winter is often drinking cold milk every morning. The fix is not to eliminate fruit or dairy entirely. It is to serve them at room temperature or warmer, to cook fruit when possible, and to keep ice out of drinks during cold season. Small swaps, done consistently, change the internal temperature over time."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Environmental factors that add up"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Modern environments pose challenges that classical Chinese medicine could not have predicted. Air conditioning creates artificial wind-cold in the middle of summer, exactly when Wei Qi has relaxed and the pores are open. Dry heated air in winter dries the mucous membranes, which the Lungs rely on as a first line of defense. Daycare and preschool exposure means a young child meets every circulating virus in the first few years, often before the immune system has built any library. None of these factors can be fully removed. What families can do is offset them: a light scarf around the neck in air-conditioned rooms, a humidifier in the bedroom during heating season, and a hand washing routine the moment the child comes home. The goal is to reduce the number of colds per winter, not to eliminate exposure entirely."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Rebuild Lung Qi and Wei Qi"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The foods below all support the Lung system or the Spleen that supplies it. Some rebuild Wei Qi. Some moisten tissue that repeated colds have dried. Some warm the surface so cold cannot settle. None of these are quick fixes. Used two to three times a week over a month, they tend to reduce the frequency and duration of colds in children whose Lung Qi has been running low. Age guidance: astragalus is for ages 3 and up, not for under 3, and never during an active cold with fever. Pear puree is gentler for under 3 than large pieces."}
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
                { food: "Astragalus (Huang Qi)", prop: "Warm, sweet", help: "Tonifies Lung Qi and Wei Qi; the classic surface defense herb", prep: "3 slices in chicken soup, weekly. Ages 3+, not during fever" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Strengthens both Spleen and Lung; gentle enough for daily use", prep: "Steamed or in porridge, 2 to 3 times weekly" },
                { food: "Pear (Li)", prop: "Cool, sweet", help: "Moistens the Lungs, clears residual heat after a cold", prep: "Steamed with rock sugar. Puree for under 3" },
                { food: "White Fungus (Bai Mu Er)", prop: "Neutral, sweet", help: "Moistens Lung Yin; useful for dry cough after repeated colds", prep: "Soup with rock sugar, weekly" },
                { food: "Lily Bulb (Bai He)", prop: "Cool, sweet", help: "Calms a lingering cough and moistens dry Lung tissue", prep: "Porridge or mild soup, ages 2 and up" },
                { food: "Jujube Dates (Hong Zao)", prop: "Warm, sweet", help: "Supports the Spleen, which indirectly feeds Lung Qi", prep: "2 to 3 pitted dates in porridge" },
                { food: "Millet (Xiao Mi)", prop: "Neutral, sweet", help: "Strengthens the Spleen base that supplies Wei Qi", prep: "Soft porridge, daily if accepted" },
                { food: "Tangerine Peel (Chen Pi)", prop: "Warm, aromatic", help: "Moves Qi and gently reduces phlegm after a cold", prep: "Tiny pinch in warm tea or soup" },
                { food: "Silver Mushroom (Yin Er)", prop: "Neutral, sweet", help: "Moistens the Lungs; lighter than white fungus for daily soup", prep: "Soup with jujube dates, weekly" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During Cold Season"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These are not forbidden foods. They are the foods most likely to add cold, dry out the Lungs, or tire the Spleen at exactly the wrong moment. Pulling back on them during cold season often makes a visible difference within three to four weeks."}
        </p>
        <ul className="space-y-2">
          {[
            "Cold water with ice, which cools the Lung system from the inside",
            "Raw vegetables in large amounts, which ask the Spleen for extra warmth",
            "Ice cream and frozen treats, which introduce concentrated cold",
            "Excessive fruit, especially cold-natured tropical fruit in winter",
            "Fried and greasy foods, which produce phlegm and burden the Spleen",
            "Sugary drinks, which slow the Spleen and thicken fluids",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Protect a Child's Lung Qi"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"What a child eats matters. What a child does between meals matters just as much. These seven habits cover the openings through which cold most often enters a child with thin Wei Qi."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm water first thing in the morning.", d: "The Lungs and the digestive system have been still overnight. A half cup of warm water on waking gently wakes both. Cold water on an empty stomach does the opposite and is one of the most common hidden drivers of frequent colds in young children." },
            { h: "A light scarf around the neck in wind or air-conditioned rooms.", d: "In TCM theory, the back of the neck is where wind-cold enters the body. A thin cotton scarf in air-conditioned classrooms or on windy playgrounds is one of the simplest protections a family can add." },
            { h: "No cold drinks, especially on an empty stomach.", d: "Cold drinks cool the Spleen and the Lung system together. Room temperature or warm water, even in summer, keeps the internal temperature stable. This is the single easiest swap most families can make." },
            { h: "Gentle outdoor play, not exhausting sports.", d: "Light movement circulates Wei Qi to the surface. Exhausting sports sweat out the protective layer and leave the pores open to wind. For ages 3 to 7, free play outdoors is ideal. For ages 8 to 12, keep intense training out of cold, windy weather." },
            { h: "Sleep before 9 PM.", d: "The Lungs rebuild during the early part of the night. A child who sleeps before 9 PM gets the deepest restoration. A child who sleeps at 10 PM or later is running on borrowed Qi by the end of the week, and the first cold of the season usually arrives right around then." },
            { h: "A hand washing routine the moment they come home.", d: "Daycare and school exposure is unavoidable. What can be reduced is the time those viruses spend on the hands before reaching the face. Warm water and soap, the moment the child walks in, cuts a surprising number of colds over a season." },
            { h: "A humidifier in the bedroom during dry seasons.", d: "Dry heated air dries the mucous membranes, which the Lungs rely on as a first line of defense. A simple humidifier in the bedroom during winter keeps that barrier intact. Clean it weekly to avoid mold." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
        <p className="text-text2 leading-relaxed mt-5">
          {"A note on what this looks like in practice. Leo, age 4, caught a cold nearly every month through his first winter of preschool. His mother began adding three slices of astragalus to a weekly pot of chicken soup and moved his bedtime to before 9 PM. By the second month, the colds had stretched to every six weeks. By the third month, he went a full eight weeks without one. The Lungs had been given the gap they needed to rebuild. This is not a quick fix. It is what consistent surface support looks like over a season."}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Frequent colds in young children can sometimes signal an underlying issue that needs conventional care. Always consult your pediatrician, and contact them promptly if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Fever lasting three days or more, or any fever above 104 F (40 C)"}</li>
          <li>{"Fast, labored, or noisy breathing, or skin pulling in around the ribs"}</li>
          <li>{"Ear pain or tugging at the ears, which can signal an ear infection"}</li>
          <li>{"Symptoms that improve then suddenly worsen, which can signal a secondary infection"}</li>
          <li>{"A cough that lasts more than two weeks after the cold has cleared"}</li>
          <li>{"Unusual drowsiness, refusal to drink, or significantly fewer wet diapers"}</li>
          <li>{"Colds that always require antibiotics, more than six per year, or any cold in an infant under 3 months"}</li>
        </ul>
        <p className="text-sm text-text2 leading-relaxed mt-3">
          {"Always consult your pediatrician before introducing any new herb, including astragalus, to a child's diet, especially for children under 3 or children with chronic conditions."}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-frequent-colds"]} />

      <SaveToPinterest
        slug="chinese-medicine-for-child-frequent-colds"
        imageSrc="/images/pinterest/child-frequent-colds.png"
        alt="Chinese medicine for child frequent colds: astragalus chicken soup and Lung Qi supporting foods"
        pinDescription="Catches every cold going around? Astragalus chicken soup, steamed pear, and Chinese yam may help rebuild weak Lung Qi and surface defense between colds. A Chinese medicine guide for families."
      />

      <SymptomCta />

      <InlineQuizCta />
    </main>
  )
}
