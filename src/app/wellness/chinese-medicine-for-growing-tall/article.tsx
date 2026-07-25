
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function GrowingTallArticle() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Growing Tall"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Growing Tall: Kidney Essence and Growth Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"Growth in Chinese medicine is governed by the Kidney Essence, the inherited reserve that shapes bone, marrow, and physical development. Children draw on this reserve as they grow, and the Spleen supplies the daily fuel that lets the body act on that blueprint. When growth seems slow or energy lags behind peers, two patterns often appear together. Kidney Essence insufficiency may show up as a thin build, late milestones, or teeth and bone that seem fragile. Spleen Qi weakness adds poor appetite, low stamina, and trouble putting on substance even when eating well. Foods that may help support a child's natural growth potential include bone broth, walnut, black sesame, and Chinese yam, prepared warm and soft so a young digestive system can absorb them fully."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Growing Tall"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese medicine places growth in the hands of the Kidney. The Kidney stores Essence, called Jing, the inherited reserve that governs bone, marrow, brain development, and the physical maturation that unfolds from infancy through adolescence. This is not the anatomical kidney of Western medicine. It is a functional system that holds the body's deepest source material and sets the rhythm of how a child grows."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Essence comes in two forms. Pre-heaven Essence is what a child is born with, the inheritance from both parents, and it sets the upper range of what is possible. Post-heaven Essence is what the Spleen produces day by day from food, and it is what the body uses to refill the reserve and fuel ongoing growth. Chinese medicine cannot change the inherited portion. What it can do is support the post-heaven side, making sure the Spleen extracts enough nourishment to let a child reach their own natural growth potential rather than falling short of it because of weak digestion or poor fuel."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This is the key framing. Chinese dietary care for growth is not about making a child taller than their blueprint allows. It is about removing the obstacles, weak digestion, cold food, poor sleep, repeated illness, that keep a child from reaching the height and build their own Essence already codes for. The traditional foods for growth, bone broth, walnut, black sesame, Chinese yam, work by nourishing the Kidney reserve and strengthening the Spleen that supplies it. Consistent sleep matters too, because growth happens at night, and the Kidney refills during deep rest. The goal is steady, well-supported development on the child's own timeline, not a promise of extra inches."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Growth Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"When growth seems to lag, the cause usually matches one of four patterns, often in combination. Matching what you see in your child to the closest pattern helps with food and routine choices. Remember that growth is individual, and these patterns describe tendencies, not diagnoses."}
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
                { p: "Kidney Essence Deficiency", s: "Thin build, late milestones, fragile teeth, slow growth", m: "Kidney cannot fully supply Essence to bones and marrow", f: "Bone broth, walnut, black sesame" },
                { p: "Spleen Qi Deficiency", s: "Poor appetite, low energy, thin despite eating enough", m: "Spleen cannot extract enough nutrients for growth", f: "Chinese yam, jujube, millet" },
                { p: "Liver Blood Deficiency", s: "Dry skin, brittle nails, restless sleep, tight sinews", m: "Liver cannot nourish the tendons and sinews", f: "Goji, red dates in small amounts" },
                { p: "Kidney Yang Deficiency", s: "Cold, pale, loves warmth, slow and quiet growth", m: "Kidney lacks the warming fire that drives growth", f: "Chestnut, warm well-cooked foods" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Can Slow a Child's Growth"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"When growth seems to fall behind, the instinct is to look for a single cause. Chinese medicine usually sees a combination of small daily factors that keep the Spleen and Kidney from doing their work. Five show up repeatedly."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Insufficient warm, nourishing food"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Growth is the body's most demanding construction project. It needs steady, absorbable nourishment. A child who eats mostly cold, raw, or processed food gives the Spleen material it cannot easily turn into substance. Warm, cooked, protein-rich food is what the Spleen can actually use for building."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Poor sleep and irregular bedtimes"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Growth happens at night. The deepest phases of sleep are when the body does its repair and building work, and the Kidney reserve refills during this time. A child who sleeps late or whose sleep is broken by screens and stimulation misses the window when growth is most active. Consistent sleep before 9 PM is one of the most direct ways to support natural growth."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Repeated illness depleting reserves"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Every illness draws on the Kidney reserve. A child who catches one cold after another, common in the early school years, spends more on recovery than on growth. Over a year, the deficit shows up as slower development. The traditional approach is to rebuild with broth and soft foods after each illness before returning to a normal diet."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Weak digestion that cannot absorb"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"A child can eat well and still not grow if the Spleen cannot extract what the food offers. Loose stools, undigested food, bloating, and picky appetite are all signs that nourishment is passing through rather than being used. Strengthening the Spleen is often the missing piece, and it is why growth foods are always prepared warm and soft."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Lack of physical activity and outdoor time"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Bones respond to load and movement. Weight-bearing play like climbing, jumping, and running signals the body to keep building bone. Sunlight supports the natural processes that growth depends on. A child who sits for most of the day, even one who eats well, may not give the body the movement cues it needs to grow into its full potential."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Support Natural Growth"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods come from traditional Chinese dietary practice for children whose growth needs support. Some nourish the Kidney Essence directly, some strengthen the Spleen so nourishment reaches the bones, and all are gentle enough for regular use. They support the conditions for natural growth, not a guarantee of extra height."}
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
                { food: "Bone broth (beef or chicken)", prop: "Neutral, sweet", help: "Rich in minerals; traditionally used to nourish Kidney and support bones and joints", prep: "Slow-simmer 2 to 3 hours" },
                { food: "Walnut", prop: "Warm, sweet", help: "Supports Kidney Essence and brain development in school-age children", prep: "1-2 per day for ages 5 and up" },
                { food: "Black sesame", prop: "Neutral, sweet", help: "Nourishes Kidney and Liver; traditionally associated with strong bones and hair", prep: "Grind and sprinkle on porridge" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Builds Spleen Qi so nutrients are absorbed and reach the bones", prep: "Peel and slice into soup or porridge" },
                { food: "Chestnut", prop: "Warm, sweet", help: "Strengthens Kidney and Spleen; traditionally used for the legs and lower body", prep: "Roast or cook into soup" },
                { food: "Goji berry", prop: "Neutral, sweet", help: "Nourishes Liver Blood and Kidney Essence in small amounts", prep: "5-6 berries in tea or porridge" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Supports Spleen and Blood for steady nourishment during growth", prep: "Pit 2-3, add to soup" },
                { food: "Egg yolk", prop: "Neutral, sweet", help: "Easy protein and fat the Spleen can absorb for building", prep: "Soft-cooked, suitable from age 1" },
                { food: "Millet", prop: "Warm, sweet", help: "The most digestible grain; supports the Spleen that fuels growth", prep: "Cook as porridge with jujube" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit During Growth Years"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not dangerous, but during the years when growth is most active they either slow the Spleen or displace the nourishing food a child needs. Limiting them gives the body clearer building material to work with."}
        </p>
        <ul className="space-y-2">
          {[
            "Cold and raw foods in excess, which slow the Spleen and reduce how much nourishment is absorbed",
            "Concentrated sweets, which displace nourishing food and weaken the digestion that growth depends on",
            "Highly processed snacks that carry empty calories with little building value for bones and tissue",
            "Iced and carbonated drinks, which cool the digestive middle and blunt absorption",
            "Too much cold soy milk, which is cooling and can dampen the Spleen when drunk in large amounts",
            "Skipping meals, which leaves the body without building blocks at the times it needs them most",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Support Natural Growth"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Growth responds to rhythm, warmth, rest, and movement more than to any single food. These daily habits create the conditions in which a child can grow into their own natural potential."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Consistent sleep before 9 PM.", d: "Growth happens during deep sleep. A regular early bedtime is the single most direct way to support natural growth." },
            { h: "Warm, regular meals three times a day.", d: "The Spleen needs a steady supply of warm food to produce the nourishment growth draws on all day." },
            { h: "Outdoor activity for thirty minutes daily.", d: "Movement and sunlight give the body the cues and the raw materials it needs to build bone and tissue." },
            { h: "Weight-bearing play like climbing and jumping.", d: "Bones respond to load. Active play signals the body to keep building strength and structure." },
            { h: "A warm, protein-rich breakfast.", d: "Starting the day with warm nourishment sets the Spleen up to absorb and supply fuel for the whole day." },
            { h: "Limited screen time, especially before bed.", d: "Stimulation delays the deep sleep when growth is most active. Calm evenings protect the growth window." },
            { h: "Calm, low-stress mealtimes.", d: "Stress tightens the Liver and blocks the Spleen. Relaxed meals let the body absorb what growth needs." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Family Routine: Bone Broth and Walnut Growth Soup"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the soup traditional Chinese families give children during growth years, when the body is building steadily and the Kidney needs gentle support. It takes about 25 minutes once you have broth ready, and uses four core ingredients. Bone broth nourishes the Kidney and bones, walnut supports Essence and brain, Chinese yam strengthens the Spleen so the nourishment is absorbed, and jujube adds Spleen-supporting sweetness. It is a simple way to support a child's natural growth rhythm over the school term."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"2 cups bone broth, beef or chicken, pre-made or store-bought low-sodium"}</li>
            <li>{"3 walnuts, shelled"}</li>
            <li>{"2 slices fresh Chinese yam, peeled"}</li>
            <li>{"2 red dates (jujube), pitted"}</li>
            <li>{"Small pinch of salt at the end"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Warm the bone broth in a small pot."}</li>
            <li>{"2. Add the walnuts, Chinese yam slices, and red dates."}</li>
            <li>{"3. Bring to a gentle boil, then reduce to low heat."}</li>
            <li>{"4. Simmer 20 minutes, until the Chinese yam is soft."}</li>
            <li>{"5. Add a small pinch of salt."}</li>
            <li>{"6. For younger children, chop the walnuts finely or remove them and let the broth carry the nourishment."}</li>
            <li>{"7. Serve warm."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"At dinner, 3 to 4 times per week"}</li>
            <li>{"Half a small bowl for ages 3-7, a full small bowl for ages 8 and up"}</li>
            <li>{"Not for children under 3 without pediatrician guidance"}</li>
            <li>{"Always warm, never cold"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First weeks: often a steadier appetite and more consistent energy"}</li>
            <li>{"After a month: support for the body's natural growth rhythm over the school term"}</li>
            <li>{"Long-term: consistent nourishment that lets a child reach their own natural potential"}</li>
            <li>{"Note: growth is individual and inherited. This recipe supports the conditions for natural growth, not a guarantee of extra height."}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-growing-tall"
        imageSrc="/images/pinterest/growing-tall.jpg"
        alt="Chinese medicine for growing tall - bone broth and walnut growth soup recipe card"
        pinDescription="Bone broth and walnut soup for growing tall. A Chinese medicine recipe to support natural growth potential."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy and supports a child's natural growth potential. It is not medical advice and does not promise additional height. Always consult your pediatrician about any growth concern, and seek evaluation if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Height falling below the 3rd percentile, or dropping significantly on the growth chart"}</li>
          <li>{"No measurable growth over 6 to 12 months"}</li>
          <li>{"Signs of early or delayed puberty"}</li>
          <li>{"Persistent poor appetite or weight loss alongside slow growth"}</li>
          <li>{"Any developmental concern, including delayed milestones"}</li>
          <li>{"A family history of growth or hormone conditions"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-growing-tall"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-low-energy" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Low Energy: Spleen Qi and Kidney Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Slow growth and low energy often share the same Spleen and Kidney root. This page covers the energy side of the same cluster."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-bedwetting" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Bedwetting: Kidney Qi and Warming Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Growth and the holding function of Kidney Qi both depend on the same reserve. This page covers the Kidney Qi side of development."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-night-sweats" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Night Sweats: Yin Deficiency and Empty Heat"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Night sweats can signal that the Kidney Yin reserve is being spent. This page covers the Yin side of the same Kidney cluster."}</p>
          </Link>
          <Link href="/wellness/what-is-jing" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"What Is Jing? Kidney Essence Explained"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult explainer for the Kidney Essence concept behind growth, written for parents who want the deeper background."}</p>
          </Link>
          <Link href="/types/yin_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Yin Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children who are slow to build substance may reflect a Yin/Essence tendency in the family. Understanding this constitution helps explain family patterns."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <p className="text-xs text-text2/50 mt-8 leading-relaxed">
        {"This page is for educational purposes only and describes traditional Chinese dietary philosophy. It supports natural growth potential and is not a substitute for medical evaluation. Always consult your pediatrician about your child's growth."}
      </p>
    </main>
  )
}
