
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildAllergiesArticle() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Allergies"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Allergies: Wei Qi and Lung-Supporting Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"Allergies in children, the sneezing and itchy eyes that flare each spring or with dust and pet dander, are read in Chinese medicine as a sign that the surface defense is reacting to things it should ignore. Two patterns tend to overlap. Lung Qi Deficiency shows up as a soft voice, shallow breathing, and sneezing from the slightest draft. Wei Qi Deficiency shows up as a child who reacts to pollen, dust, or animal hair within minutes of exposure. The Lungs govern the skin, the pores, and the nose, so when they are weak, the boundary between inside and outside blurs. Warm, gently tonifying foods such as astragalus tea with jujube dates, steamed Chinese yam, and lily bulb soup may help the surface defense settle over several weeks of consistent use."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Allergies in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, the Lungs do more than breathe. They are described as the canopy of the body, the uppermost organ, and they govern the skin, the pores, and the nose. This is why allergic reactions, which show up at exactly those surfaces, are read as a Lung pattern first. The sneezing, the itchy eyes, the watery runny nose, the patches of dry skin that flare every spring, all sit on the boundary the Lungs are responsible for."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sitting just outside that boundary is a layer of protective energy called Wei Qi, sometimes translated as defensive Qi. The Spleen produces it from food, the Lungs spread it outward, and it circulates across the skin and the mucous membranes. A useful image is a screen door. When Wei Qi is well-formed, it lets fresh air in and keeps dust, pollen, and chill out. When Wei Qi is thin or reactive, the screen begins to flag everything as a threat, even harmless things like cat hair or tree pollen."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Children are vulnerable here because their Lungs and Spleen are still maturing. A young child's Wei Qi layer is thin, and each allergic flare further tires the system. The traditional approach is not to chase each reaction with stronger intervention. It is to rebuild Lung Qi and Wei Qi in the quiet weeks between flares, so the screen door learns again what to let through. This takes patience. Most families notice a real shift only after several weeks of consistent food and habit changes, not after a single cup of astragalus tea."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Allergy Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Allergies in children almost always involve more than one pattern. The Lungs, the surface defense, and the Spleen that supplies it interact, and weakness in one tends to weaken the others. The table below covers the four combinations parents see most often. Match your child's signs to find the closest food direction."}
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
                { p: "Lung Qi Deficiency", s: "Sneezes from drafts, soft voice, pale face, tires easily", m: "Lungs too weak to govern the surface and the nose", f: "Warm tonifying foods: astragalus tea, Chinese yam" },
                { p: "Wei Qi Deficiency", s: "Reacts to pollen, dust, or pet hair within minutes", m: "Surface defense underpowered and overreactive", f: "Mild Wei Qi tonics in small doses, never during a flare" },
                { p: "Lung Yin Deficiency", s: "Dry nose, dry cough with allergies, itchy skin at night", m: "Lung moisture depleted, surface brittle and reactive", f: "Moistening foods: pear, lily bulb, white fungus" },
                { p: "Spleen and Lung Weak", s: "Allergies with poor appetite and loose stools", m: "Spleen cannot produce enough Qi to supply the Lungs", f: "Millet porridge, jujube dates, Chinese yam congee" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Allergies in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Allergies rarely come from a single weakness. They build from a combination of developmental immaturity, daily diet, and environmental load that slowly tires the Lung system until the surface defense starts misfiring. Five threads show up again and again."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"An immature Lung and Wei Qi system"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese pediatric texts use a phrase that translates as the Lung is delicate. A child's Lungs are not finished at birth. They continue to develop through the early years, and during that window the Wei Qi layer is thin, more like a screen with gaps than a solid wall. Each allergic flare further tires the Lungs and widens the next gap. This is why some children seem to add a new allergy each spring. The system never fully settles before the next pollen season arrives. The traditional aim is to rebuild Lung Qi and Wei Qi in the quiet months, so the screen fills in before the next exposure."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A Spleen that cannot supply the surface"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In the five-phase system that underpins Chinese medicine, the Spleen is described as the mother of the Lungs. The Spleen produces Qi and Blood from food, and the Lungs rely on that supply to spread Wei Qi outward. When the Spleen is tired from poor appetite, picky eating, or damp-forming foods, the supply line to the Lungs dries up, and the surface defense thins secondarily. This is why a child whose allergies always come with loose stools, low appetite, or a pale face is rarely just a Lung problem. The root is often the Spleen. Strengthening the Spleen with millet porridge, jujube dates, and Chinese yam indirectly supports the Lungs and is often more effective than focusing on the Lungs alone."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A diet that overheats or overcools the system"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Two opposite extremes both weaken the Lungs. Cold and raw foods, like ice water, cold milk, and uncooked salads, pull warmth away from the digestive middle and cool the Lung system through the shared pathway. Fried, spicy, and heavily sweetened foods do the opposite. They generate internal heat that dries the mucous membranes and makes the surface brittle and reactive. The child who lives on cold milk in the morning and fried snacks in the afternoon is loading the Lung system from both ends. The fix is not to eliminate any food entirely. It is to serve drinks warm, cook fruit when possible, and keep fried and iced foods as occasional treats rather than daily defaults."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Environmental triggers that add up"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Modern environments pose challenges that classical Chinese medicine could not have predicted. Air conditioning creates artificial wind-cold in the middle of summer, exactly when Wei Qi has relaxed and the pores are open. Dry heated air in winter dries the mucous membranes, which the Lungs rely on as a first filter. Dust mites, pet dander, and pollen loads indoors are higher than they were a generation ago because homes are sealed for efficiency. None of these can be fully removed. What families can do is offset them: a light scarf in air-conditioned rooms, a humidifier in the bedroom during heating season, and a routine of washing the face and hands the moment the child comes inside. The goal is to reduce the daily load on the surface defense, not to eliminate exposure entirely."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Family history and constitutional tendency"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Some children are simply born with a thinner Wei Qi layer. If one or both parents had childhood allergies, asthma, or eczema, the child is more likely to show a similar pattern. In TCM theory, this is read as a constitutional tendency, not a fixed destiny. The body type, or constitution, sets the starting point. What the family does with food, sleep, and daily habits shapes how that tendency expresses itself over the years. A child with a sensitive constitution who eats warm, simple food and sleeps before 9 PM may move through pollen season with mild symptoms. The same child on a diet of cold milk and fried snacks may struggle every spring. Knowing your child's body type helps explain why their allergy pattern looks the way it does."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Settle a Child's Surface Defense"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The foods below all support the Lung system or the Spleen that supplies it. Some rebuild Wei Qi. Some moisten tissue that repeated flares have dried. Some gently calm an overreactive surface. None are quick fixes. Used two to three times a week over a month, they tend to reduce the frequency and intensity of allergic flares in children whose Lung Qi has been running low. Age guidance: astragalus is for ages 3 and up, not for under 3, and never during an active cold with fever or an acute allergic flare. Lily bulb and white fungus are gentle enough for ages 2 and up."}
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
                { food: "Astragalus (Huang Qi)", prop: "Warm, sweet", help: "Tonifies Lung Qi and Wei Qi; the classic surface defense herb", prep: "3 slices in tea or soup, weekly. Ages 3+, not during a flare" },
                { food: "Jujube Dates (Hong Zao)", prop: "Warm, sweet", help: "Supports the Spleen and Blood, which indirectly feeds Wei Qi", prep: "2 to 3 pitted dates in tea or porridge" },
                { food: "Chinese Yam (Shan Yao)", prop: "Neutral, sweet", help: "Strengthens both Spleen and Lung; gentle enough for daily use", prep: "Steamed or in porridge, 2 to 3 times weekly" },
                { food: "Lily Bulb (Bai He)", prop: "Cool, sweet", help: "Moistens Lung Yin, calms itchy reactive surfaces", prep: "Porridge or mild soup, ages 2 and up" },
                { food: "Pear (Li)", prop: "Cool, sweet", help: "Moistens the Lungs, clears residual heat after an allergic flare", prep: "Steamed with rock sugar. Puree for under 3" },
                { food: "White Fungus (Bai Mu Er)", prop: "Neutral, sweet", help: "Moistens Lung Yin; useful for dry, itchy allergy patterns", prep: "Soup with rock sugar, weekly" },
                { food: "Millet (Xiao Mi)", prop: "Neutral, sweet", help: "Strengthens the Spleen base that supplies Wei Qi", prep: "Soft porridge, daily if accepted" },
                { food: "Tangerine Peel (Chen Pi)", prop: "Warm, aromatic", help: "Moves Qi and gently reduces phlegm and congestion", prep: "Tiny pinch in warm tea or soup" },
                { food: "Goji Berries (Gou Qi Zi)", prop: "Neutral, sweet", help: "Mildly supports Liver and Kidney, the deeper reserves behind Wei Qi", prep: "5 to 6 berries in soup or tea. Ages 2 and up" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Pull Back On During Allergy Season"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These are not forbidden foods. They are the foods most likely to add cold, generate heat, or thicken fluids at exactly the wrong moment. Pulling back on them during pollen season often makes a visible difference within three to four weeks."}
        </p>
        <ul className="space-y-2">
          {[
            "Ice water and very cold drinks, which cool the Lung system from the inside",
            "Excessive raw fruit, especially cold-natured tropical fruit during flare weeks",
            "Deep-fried and greasy foods, which generate heat and thicken mucus",
            "Concentrated sweets, which create temporary heat that leaves the Spleen more depleted",
            "Dairy in excess, considered damp-forming in TCM, which may thicken nasal mucus during allergies",
            "Very spicy foods, which overstimulate the surface and worsen itching",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Protect a Child's Surface Defense"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"What a child eats matters. What a child does between meals matters just as much. These seven habits cover the openings through which allergens and chill most often reach a child with thin Wei Qi."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm water first thing in the morning.", d: "The Lungs and the digestive system have been still overnight. A half cup of warm water on waking gently wakes both. Cold water on an empty stomach does the opposite and is one of the most common hidden drivers of morning sneezing in young children." },
            { h: "A light scarf around the neck in wind or air-conditioned rooms.", d: "In TCM theory, the back of the neck is where wind enters the body. A thin cotton scarf in air-conditioned classrooms or on windy playground days is one of the simplest protections a family can add." },
            { h: "No cold drinks, especially on an empty stomach.", d: "Cold drinks cool the Spleen and the Lung system together. Room temperature or warm water, even in summer, keeps the internal temperature stable. This is the single easiest swap most families can make." },
            { h: "Keep bedroom air moist during dry seasons.", d: "Dry heated air dries the mucous membranes, which the Lungs rely on as a first filter against pollen and dust. A simple humidifier in the bedroom during winter and during peak pollen weeks keeps that barrier intact. Clean it weekly to avoid mold." },
            { h: "Sleep before 9 PM.", d: "The Lungs rebuild during the early part of the night. A child who sleeps before 9 PM gets the deepest restoration. A child who sleeps at 10 PM or later is running on borrowed Qi by the end of the week, and the first flare of the season often arrives right around then." },
            { h: "A warm breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm congee or oatmeal signals the system to start producing Qi, which the Lungs then spread outward as Wei Qi. A cold breakfast skips that signal." },
            { h: "Wash face and hands the moment they come inside.", d: "Pollen and dust settle on exposed skin and hands within minutes of outdoor play. Rinsing the face and washing the hands with warm water the moment a child walks in cuts a surprising amount of the daily allergen load over a season." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
        <p className="text-text2 leading-relaxed mt-5">
          {"A note on what this looks like in practice. Maya, age 5, sneezed through every April since she was 3. Her father began giving her a small cup of astragalus and jujube tea three mornings a week in February, moved her bedtime to before 9 PM, and added a thin scarf on windy playground days. By April, her sneezing was down to a few episodes a week instead of all morning. The Wei Qi had been given the gap it needed to rebuild before pollen arrived. This is not a quick fix. It is what consistent surface support looks like over a season."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Astragalus and Jujube Defensive Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the routine behind the tea that gets shared widely with parents whose children react to every pollen season. It is simple, takes about 25 minutes of mostly hands-off time, and uses three core ingredients. It is one of the most reliable ways to start rebuilding a child's Wei Qi in the quiet weeks before allergy season."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"3 to 4 slices dried astragalus root (about 3g)"}</li>
            <li>{"3 red dates (jujube), pitted"}</li>
            <li>{"2 cups water"}</li>
            <li>{"Optional: 1 tiny pinch of tangerine peel (chen pi)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the astragalus slices and red dates briefly under cool water."}</li>
            <li>{"2. Pit the red dates if not already pitted."}</li>
            <li>{"3. Place astragalus, red dates, and water in a small pot."}</li>
            <li>{"4. Bring to a gentle boil, then reduce to very low heat."}</li>
            <li>{"5. Simmer covered for 20 minutes."}</li>
            <li>{"6. Strain into a cup. The liquid should be pale amber."}</li>
            <li>{"7. Let it cool to a warm, drinkable temperature before serving."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Three mornings a week, in the quiet weeks before pollen season starts"}</li>
            <li>{"Half a small cup (about 60ml) for ages 3 to 5, a full small cup (about 120ml) for ages 6 and up"}</li>
            <li>{"Always warm, never cold"}</li>
            <li>{"Pause during an active cold with fever, and pause during an acute allergic flare"}</li>
            <li>{"Continue for 4 to 6 weeks, then take a 2 week break before resuming if needed"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First 2 weeks: usually no visible change, the system is still rebuilding"}</li>
            <li>{"After 3 to 4 weeks: sneezing episodes often shorter and less intense"}</li>
            <li>{"After 6 weeks: many children report fewer morning reactions and less itchy skin"}</li>
            <li>{"Long-term: use seasonally, 3 to 4 weeks before each pollen season, then pause"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-allergies"
        imageSrc="/images/pinterest/child-allergies.jpg"
        alt="Chinese medicine for child allergies - astragalus and jujube defensive tea recipe card"
        pinDescription="Astragalus and jujube tea for child allergies. A Chinese medicine recipe to support Wei Qi defense."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Allergies in children can sometimes signal an underlying issue that needs conventional care, including allergy testing or medication. Always consult your pediatrician, and contact them promptly if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Wheezing, shortness of breath, or any difficulty breathing"}</li>
          <li>{"Swelling of the lips, tongue, or face"}</li>
          <li>{"Hives that spread rapidly across the body"}</li>
          <li>{"A suspected allergic reaction to a new food, especially in a young child"}</li>
          <li>{"Symptoms that interfere with sleep, eating, or school for more than a few days"}</li>
          <li>{"Signs of a sinus infection, such as fever, thick discharge, or facial pain"}</li>
          <li>{"Allergies that worsen each year or that begin to trigger asthma-like symptoms"}</li>
        </ul>
        <p className="text-sm text-text2 leading-relaxed mt-3">
          {"Always consult your pediatrician before introducing any new herb, including astragalus, to a child's diet, especially for children under 3 or children with chronic conditions."}
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-allergies"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-frequent-colds" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Frequent Colds: Weak Lung Qi and Foods That May Strengthen Defense"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Allergies and frequent colds share the same Lung and Wei Qi root. This page covers the cold-catching side of the same surface weakness."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-eczema" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Eczema: Damp Heat and Cooling Foods That May Help"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Allergic skin patterns often travel with allergic nose patterns. This page covers the internal damp heat approach to itchy, weepy skin in children."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-immune-system" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Immune System: Lung, Spleen and Kidney Foods That May Help"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Allergies are one expression of a thinner overall defense. This page covers the full three-layer immune picture, including the Kidney reserve that allergies pages do not reach."}</p>
          </Link>
          <Link href="/wellness/lung-qi-deficiency" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Lung Qi Deficiency: A Complete Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same pattern. Useful for parents who recognize the same signs in themselves, since allergy patterns often run in families."}</p>
          </Link>
          <Link href="/types/sensitive" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Sensitive Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children with allergies often fit the Sensitive constitution. Understanding your child's body type helps explain why their surface defense reacts the way it does."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
