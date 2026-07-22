
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildNightSweatsArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Child Night Sweats"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Night Sweats: Yin Deficiency and Moistening Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"A parent who finds a child's pajamas soaked at 2 AM, in a cool room and with no fever, is often seeing what Chinese medicine calls empty heat escaping at night. The pattern is Yin Deficiency with Empty Heat. Yin is the cooling, moistening side of the body, and when it runs low, the warmth that Yin usually holds down rises as a dry, restless heat that pushes sweat out through the pores. A second pattern sometimes joins it, Qi Deficiency, where the pores are simply too loose to hold fluids in and the child sweats from light effort or the first part of sleep. Moistening foods may help the body rebuild its cooling reserves. Black sesame gently builds Yin. Pear moistens and cools. White fungus adds deep moisture. A small cup of black sesame and pear soup, taken in the afternoon or early evening, may help reduce drenching sweats over two to three weeks."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees a Child's Night Sweats"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Night sweats in children worry parents in a particular way. The child is not sick. There is no fever. The room is cool. And yet, some nights, the pajamas are soaked through and the pillow is damp. Chinese medicine has a framework for exactly this picture."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sweat, in TCM theory, is the fluid of the Heart, and it is held inside by the balance of Yin and Qi. Yin is the body's cooling, moistening substance. It acts like a lid of moisture that keeps the internal fire low and steady. When a child's Yin runs low, that lid thins, and a dry, floating warmth called empty heat rises at night. The body pushes sweat outward to release it. This is different from the sweat of a fever, which is the body fighting something off. Empty heat sweat tends to arrive after the child has already fallen asleep, often in the first half of the night, and it stops on its own."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"A second mechanism involves Qi. Qi is what holds the pores closed. A child whose Qi is tired, after an illness or a growth spurt, may have pores that simply do not stay shut, and sweat leaks out. The two patterns can overlap. A useful distinction: sweat that comes with a warm, restless feeling points to Yin deficiency, while sweat that comes with tiredness and a pale face points more to Qi deficiency. Reading the difference matters, because the foods that moisten Yin and the foods that steady Qi are not quite the same."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Night Sweat Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Drenching night sweats in children usually fall into one of four patterns. The first two are by far the most common. Matching the closest pattern guides both food and habit choices."}
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
                { p: "Yin Deficiency with Empty Heat", s: "Soaked at night, warm feeling, dry mouth, red cheeks", m: "Cooling Yin is low, heat rises and pushes sweat out", f: "Black sesame paste, pear soup" },
                { p: "Qi Deficiency Sweating", s: "Sweats on light effort or early sleep, pale, tired", m: "Pores cannot hold fluids in", f: "Chinese yam and jujube porridge" },
                { p: "Damp Heat Sweating", s: "Sticky sweat, heavy feeling, clammy skin", m: "Heat and dampness steam out together", f: "Mung bean and coix seed water" },
                { p: "Heart Yin Deficiency", s: "Night sweat with restless sleep, vivid dreams", m: "Heart lacks moisture to anchor the mind", f: "Lily bulb and lotus seed congee" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Night Sweats in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"A child's night sweats rarely come from one source. They build from a Yin reserve that is running thin, a body that is still recovering, and daily habits that either help refill the reserve or keep draining it. Five causes appear again and again."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Rapid growth drawing on Yin reserves"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Growth asks a lot of a child's body. Bone, muscle, and blood all draw on Yin and essence as they build. During a stretch of fast growth, the cooling reserve can dip, and the body releases the extra warmth as night sweat. This is one reason night sweats often cluster around ages 4 to 6 and again in early puberty. Once growth steadies, the sweats often ease on their own."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Recovery from a feverish illness"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"A fever is, in TCM terms, a battle that burns through Yin. After the fever breaks, the body is genuinely drier and warmer than before, and for a week or two it may vent that leftover heat as night sweat. This is expected and usually self-limiting. Gentle moistening foods and extra rest help the body refill what the fever spent."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"An overheated diet"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Some children eat a lot of warming foods without anyone noticing. Lamb, cinnamon, ginger, roasted nuts, and fried foods all add warmth. In a child whose Yin is already a little thin, a steady diet of these can tip the balance and produce night sweats. This is one of the easiest causes to shift, because the fix is simply rotating in more cooling, moistening foods."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A hot bedroom and too many blankets"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sometimes the cause is genuinely external. A warm room, heavy pajamas, and too many blankets force a child's body to sweat simply to cool down. Before looking for a deeper pattern, it is worth checking the room temperature and sleepwear. If the sweats continue in a cool room with light cotton, an internal pattern is more likely."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Emotional tension and stress"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Children feel tension even when they cannot name it. A stressful week at school, conflict at home, or worry about something can stoke internal heat and disturb the Shen, which shows up at night as restless, sweaty sleep. The body holds the day's tension and releases it after the child falls asleep. Calm evenings matter as much as food here."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help With Night Sweats"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods share one quality: they add moisture and cooling without adding heat. Some build Yin directly, some clear empty heat, and some simply hold fluids in better. Match the food to the pattern your child shows."}
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
                { food: "Black sesame", prop: "Neutral, sweet", help: "Builds Yin and blood, gently moistens", prep: "Ground into paste, one small spoon" },
                { food: "Pear", prop: "Cool, sweet", help: "Moistens the Lungs, clears empty heat", prep: "Steamed or fresh, half for young kids" },
                { food: "White fungus (Yin er)", prop: "Neutral, sweet", help: "Deeply moistening, very gentle", prep: "Soup with red dates" },
                { food: "Lotus root", prop: "Cool", help: "Clears heat and adds moisture", prep: "Slow cooked in soup" },
                { food: "Mulberry", prop: "Cool, sweet", help: "Builds blood and Yin, gentle for children", prep: "Small handful, fresh or dried" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Supports the Spleen and Yin together", prep: "Porridge or steamed" },
                { food: "Duck", prop: "Neutral, sweet", help: "The most moistening meat in TCM theory", prep: "Slow cooked in broth" },
                { food: "Wheat", prop: "Cool, sweet", help: "Calms the mind and gently builds Yin", prep: "Cooked as porridge" },
                { food: "Warm soy milk", prop: "Neutral", help: "Mildly moistening, easy for children", prep: "Warm cup, unsweetened" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Night Sweats Are Present"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not bad. They are the ones most likely to add warmth to a body that is already venting heat at night. Pulling them back for a couple of weeks, while the Yin rebuilds, often makes a clear difference."}
        </p>
        <ul className="space-y-2">
          {[
            "Spicy foods at dinner, which add heat to a body already running warm at night",
            "Lamb and venison in excess, which are strongly warming meats",
            "Ginger and cinnamon in large amounts, fitting for cold patterns but not for empty heat",
            "Deep-fried foods, which are drying and heat-forming",
            "Cinnamon rolls and spiced baked goods in the evening",
            "Very hot drinks right before bed, which push warmth in when the body should be cooling",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help the Body Hold Its Moisture"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Moisture is rebuilt slowly, through the day, not all at once. These habits support the body's cooling and fluid-holding capacity without needing any special ingredients."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Keep the bedroom cool.", d: "Around 18 to 20 degrees Celsius is ideal. A cool room removes the external cause of sweating and lets the body's own temperature drop for sleep." },
            { h: "Dress for cool sleep.", d: "Light cotton pajamas breathe and let moisture pass through. Heavy fleece sleepwear traps heat and makes sweating worse." },
            { h: "Hydrate through the day.", d: "Small, steady sips of warm water from morning to late afternoon build moisture gradually. Gulping cold water at bedtime does the opposite." },
            { h: "Build in afternoon rest for recovering children.", d: "A child getting over an illness is running low on reserves. A short rest in the afternoon, even without sleeping, lets the body catch up." },
            { h: "Avoid vigorous play in the last hour.", d: "Running around before bed raises body heat right when it should be falling. Save active play for earlier in the day." },
            { h: "Offer cool, not cold, water sips.", d: "Cool water quenches without shocking the system. Ice water forces the body to spend warmth digesting it, which is the wrong direction at night." },
            { h: "Track which nights are worst.", d: "A simple note of the worst nights often reveals a pattern, like sweats after a hot dinner, a growth spurt, or a stressful school day." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Black Sesame and Pear Moistening Soup"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the soup most often shared with parents of sweaty sleepers. It is quick, gently sweet, and built around two of the strongest Yin-building foods in the kitchen. Given in the afternoon or early evening, it helps the body rebuild cooling moisture without warming it before bed."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1 ripe pear, cored and cubed"}</li>
            <li>{"1 tablespoon black sesame, lightly toasted and ground"}</li>
            <li>{"2 cups water"}</li>
            <li>{"1 dried red date (jujube), pitted"}</li>
            <li>{"Small pinch of rock sugar, optional"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Core and cube the pear, leaving the skin on for extra moisture."}</li>
            <li>{"2. Toast the black sesame in a dry pan for a minute until fragrant, then grind lightly."}</li>
            <li>{"3. Combine pear, water, and the red date in a small pot."}</li>
            <li>{"4. Bring to a boil, then reduce to low heat."}</li>
            <li>{"5. Simmer 15 to 20 minutes, until the pear is soft."}</li>
            <li>{"6. Stir in the ground black sesame."}</li>
            <li>{"7. Add a small pinch of rock sugar if your child needs it sweeter."}</li>
            <li>{"8. Serve warm, in small portions."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Afternoon or early evening, not right before bed"}</li>
            <li>{"Small cup for ages 3 to 7, half a bowl for ages 8 and up"}</li>
            <li>{"Serve warm, never cold"}</li>
            <li>{"3 times per week for 2 to 3 weeks"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First week: sweats may lighten and feel less drenching"}</li>
            <li>{"After 2 weeks: fewer soaked nights"}</li>
            <li>{"After 3 weeks: steadier temperature, less nighttime restlessness"}</li>
            <li>{"Long-term: continue 1 to 2 times weekly as a maintenance habit"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-night-sweats"
        imageSrc="/images/pinterest/child-night-sweats.jpg"
        alt="Chinese medicine for child night sweats - black sesame and pear moistening soup recipe card"
        pinDescription="Black sesame and pear soup for child night sweats. A Chinese medicine recipe to nourish Yin and clear empty heat."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Always consult your pediatrician about night sweats, and seek prompt care if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Sweating with a fever or a persistent low-grade fever"}</li>
          <li>{"Unexplained weight loss or poor growth"}</li>
          <li>{"Swollen lymph nodes, especially in the neck"}</li>
          <li>{"Sweating that soaks through clothing night after night despite a cool room"}</li>
          <li>{"A cough that accompanies the night sweats"}</li>
          <li>{"Fatigue or a clear drop in appetite"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-night-sweats"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-sleep" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Sleep"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Sweats and restless sleep often share a Yin deficiency root. This page covers the Heart Shen foods that may help a wakeful child settle."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-night-terrors" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Night Terrors"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"If the sweats come with sudden screaming and a look of pure fear, Heart Heat or Phlegm Heat may be the deeper pattern. A cooling food direction applies."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-night-sweats" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Night Sweats (Adult Guide)"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Yin deficiency pattern. Parents who wake drenched themselves often share the root, since Yin patterns tend to run in families."}</p>
          </Link>
          <Link href="/types/yin_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Yin Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A child who runs warm, sweats easily, and tends toward dryness may sit on the Yin deficient side. Seeing the family constitution helps explain why night sweats repeat across generations."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <footer className="text-xs text-text2/50 leading-relaxed border-t border-border/30 pt-6 mt-10">
        {"This article shares traditional Chinese dietary philosophy for families and is not medical advice. Always consult your pediatrician before making changes to your child's diet or routine."}
      </footer>
    </main>
  )
}
