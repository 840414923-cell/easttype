
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

const SLUG = "chinese-medicine-for-child-chronic-cough"

export default function ChildChronicCoughArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Chronic Cough"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Chronic Cough: Phlegm Patterns and Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"A cough that stays for weeks after the fever breaks is rarely still an infection. In Chinese medicine, a lingering cough usually points to one of two patterns. Phlegm Damp is where the Spleen keeps producing mucus the Lungs cannot clear. Lung Yin Deficiency is where repeated coughing has dried the Lung tissue and left it ticklish and raw. A wet, rattling cough in the morning points to the first. A dry, ticklish cough at night points to the second. Traditional foods may help the body finish the job. Steamed pear with rock sugar moistens a dry Lung. Tangerine peel tea moves phlegm downward. Sweet almond powder in porridge calms the cough reflex. Most children settle within two to three weeks once the pattern is matched to the right foods."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Chronic Cough"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, the Lung is the delicate organ in charge of breathing, and it is also the first organ touched by outside air. Children have Lungs that are, in the traditional phrase, soft and not yet fully formed. They are more easily dried out, and slower to push out what should not be there."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Lung likes one direction: downward and outward. When it is healthy, air moves in and out cleanly, and any tiny bit of mucus rolls down and out. When the Lung is tired or dry, that downward movement stalls. A cough is the body's attempt to push something out that the Lung cannot move on its own."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Two questions help tell the patterns apart. First, is the cough wet or dry? A wet cough with a rattling sound, worse in the morning, usually means phlegm is sitting in the airway. The old saying goes that the Spleen is the source of phlegm and the Lung is its container. A dry, ticklish cough, worse at night, usually means the Lung itself has been dried out. Repeated infections and hard coughing wear down the Lung's moisture, so the tissue becomes raw and reactive. The second question is timing. A cough that flares at night often points to dryness or residual heat. A cough that is worst on waking points to phlegm that has collected overnight. Matching the cough to its pattern matters, because the foods that moisten a dry Lung can thicken phlegm, and the foods that dry phlegm can worsen a dry cough."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Chronic Cough Patterns in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A lingering cough is rarely one pattern. The table below covers the four most common combinations seen in children. Identifying the closest match helps with food and habit choices."}
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
                { p: "Phlegm Damp Cough", s: "Wet, rattling sound, worse in morning", m: "Spleen produces phlegm, Lungs store it", f: "Tangerine peel tea, radish soup" },
                { p: "Lung Yin Def", s: "Dry, ticklish, night cough, no phlegm", m: "Lungs dried out from repeated infections", f: "Pear with rock sugar, lily bulb" },
                { p: "Lung Qi Def", s: "Weak cough, low energy, catches colds easily", m: "Lungs too tired to push out phlegm", f: "Chinese yam porridge, jujube" },
                { p: "Residual Heat", s: "Cough after fever, slight fever feeling", m: "Heat trapped in Lungs", f: "Loquat syrup, mung bean water" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Chronic Cough in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A cough that will not settle is rarely caused by one thing. It builds from a weak Spleen, dry Lungs, a trace of trapped heat, and the daily foods and air that either help or hold the body back."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Phlegm from Spleen Weakness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM theory, the Spleen processes food and fluids. When a child's Spleen is weak, fluids are not moved cleanly and some turn into a sticky residue called phlegm damp. The phlegm is carried up to the Lung, where it collects in the airway. This is why a child with weak digestion often develops a wet cough that has nothing to do with a new cold. The cough is worst in the morning, when phlegm has pooled overnight. Strengthening the Spleen with warm, easy food matters as much as working on the Lung itself."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Dry Lungs from Repeated Infections"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"When a child catches one cold after another, or coughs hard for weeks, the Lung's moisture is worn away. The tissue becomes dry and reactive, so even clean air can tickle it. This is the pattern traditional texts call injury to Lung Yin. The cough is dry, ticklish, often worse at night, and may come with a hoarse voice or dry lips. Warming and phlegm-drying foods make this pattern worse, so the direction here is to moisten and soften."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"A small example shows how this works. Mia, six years old, came down with a cold in early spring. The fever and runny nose cleared in a week, but a dry, ticklish cough appeared every night and lasted three weeks. She coughed most around two in the morning, had no phlegm, and her voice sounded slightly hoarse. The picture fit Lung Yin Deficiency: the Lung had been dried out by the illness and the hard coughing that followed. Her family gave her steamed pear with rock sugar three evenings a week, moved her bedtime before nine, and kept a humidifier on at night. The night cough began to ease within five days and had largely settled within two weeks."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Residual Pathogen After Illness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sometimes a cough stays because a trace of heat was never fully cleared after a fever. The fever is gone and the child looks well, but a small amount of heat is still trapped in the Lung. The cough is dry with a slight hot feeling, maybe a dry throat, and tends to flare in the afternoon or evening. Loquat and mung bean water are the traditional choices here, because they gently clear the last bit of heat without chilling the stomach."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Diet That Worsens Phlegm"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"What a child eats and drinks can keep a cough going even when the body is trying to clear it. Dairy products, sweets, and cold drinks all tend to produce more phlegm damp in a child whose Spleen is already tired. A glass of cold milk or an ice cream on a phlegm cough day often means a rattlier cough the next morning. These foods are not forbidden, but pulling them back during a cough phase helps the body finish clearing what is already there."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Environmental Irritants"}</h3>
        <p className="text-text2 leading-relaxed">
          {"The Lung opens to the nose and is the organ most exposed to the outside air. Dry heated air in winter, dust, strong smells, and secondhand smoke all irritate the airway directly. A child whose cough only appears in a certain room or season is often reacting to the air itself. A simple humidifier at night, keeping the neck covered in cold wind, and keeping the child away from smoke can do as much as any food change."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they support the Lung's downward and moistening function without adding heavy phlegm. Some moisten a dry cough. Some move phlegm downward. Some gently clear residual heat. Match the food to the pattern, and adjust based on what your child accepts."}
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
                { food: "Pear with Rock Sugar", prop: "Cool", help: "Moistens Lung Yin, calms a dry cough", prep: "Steamed, 2 to 3 times weekly" },
                { food: "Loquat", prop: "Cool", help: "Clears Lung heat, calms the cough reflex", prep: "Fresh or syrup, 1 to 2 daily" },
                { food: "Almond (sweet)", prop: "Warm", help: "Calms cough, moistens the intestines", prep: "Powder stirred into porridge" },
                { food: "Tangerine Peel", prop: "Warm", help: "Moves Qi, gently dries phlegm", prep: "Small pinch in warm water" },
                { food: "White Fungus", prop: "Neutral", help: "Deeply moistens the Lung", prep: "Soup with red dates" },
                { food: "Lily Bulb", prop: "Cool", help: "Calms a night cough, moistens Yin", prep: "Cooked into porridge" },
                { food: "Radish", prop: "Cool", help: "Descends Lung Qi, clears phlegm", prep: "Soup or steamed until soft" },
                { food: "Chinese Yam", prop: "Neutral", help: "Strengthens Spleen and Lung together", prep: "Steamed or in porridge" },
                { food: "Honey (over 1 year)", prop: "Neutral", help: "Moistens and soothes the throat", prep: "Warm water, mornings only" },
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
        <p className="text-text2/80 text-xs mt-3 leading-relaxed">
          {"Honey is only safe for children over one year old. It must never be given to a baby under one, because of the risk of infant botulism. Always check with your pediatrician before adding honey."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit During a Cough Phase"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not banned. They are the ones most likely to thicken phlegm, dry the Lung further, or add heat to a system that is already irritated. Most families see a calmer cough within a week of pulling them back."}
        </p>
        <ul className="space-y-2">
          {[
            "Dairy products, which thicken phlegm in a child whose Spleen is already tired",
            "Sweets and candy, which slow the Spleen and feed phlegm production",
            "Cold drinks and ice water, which slow the Lung's downward movement",
            "Fried and greasy foods, which are heavy and add heat and dampness",
            "Bananas, in the phlegm damp pattern, as they can add dampness",
            "Peanuts, in the phlegm damp pattern, as they are oily and phlegm forming",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help the Lung Settle"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is half the work. The other half is giving the Lung the conditions it needs to repair. These habits address the most common stalling points in a lingering cough."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Offer warm water through the day.", d: "Small sips of warm water keep the Lung moist and help thin phlegm so it can move out. Cold water does the opposite and slows everything down." },
            { h: "Move bedtime before 9 PM.", d: "The Lung repairs at night. A child who sleeps early gives the tissue time to settle. Late nights can prolong a cough by days." },
            { h: "Keep the neck covered in cold wind.", d: "In TCM theory, cold enters the body through the back of the neck. A light scarf or collar prevents new cold from layering on top of an old cough." },
            { h: "Use steam inhalation for a dry cough.", d: "A few minutes of warm steam from a bowl, or a warm shower, moistens a dry Lung directly. This is most helpful for ticklish night coughs." },
            { h: "Try a gentle chest massage.", d: "A light downward stroke on the chest, with a little warm oil, can help move phlegm. Keep it soft and brief, never forceful." },
            { h: "Avoid hard exercise in cold air.", d: "Running around outdoors in cold weather pulls dry, cold air deep into the Lung and can trigger coughing for hours. Save active play for warmer parts of the day." },
            { h: "Run a humidifier at night.", d: "Dry heated air is one of the most common causes of a night cough that will not settle. Aim for around 50 percent humidity in the bedroom." },
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
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Always consult your pediatrician for a cough that concerns you, and seek prompt care if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"A cough that lasts longer than four weeks"}</li>
          <li>{"Coughing up blood or pink tinged mucus"}</li>
          <li>{"Fast, labored, or noisy breathing"}</li>
          <li>{"Unexplained weight loss or loss of appetite"}</li>
          <li>{"A high fever that returns"}</li>
          <li>{"A cough so severe it causes vomiting or stops sleep"}</li>
        </ul>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[SLUG]} />

      <SaveToPinterest
        slug={SLUG}
        imageSrc="/images/pinterest/child-chronic-cough.png"
        alt="Chinese medicine for child chronic cough - pear with rock sugar, loquat, and almond foods that may help"
        pinDescription="That cough won't leave? It's phlegm, not infection. Pear with rock sugar, loquat, and almond may help your child's lingering cough. A Chinese medicine guide for families."
      />

      <SymptomCta />

      <InlineQuizCta />
    </main>
  )
}
