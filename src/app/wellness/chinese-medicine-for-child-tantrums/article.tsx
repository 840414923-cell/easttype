
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildTantrumsArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Tantrums"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Tantrums: Liver Fire and Soothing Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"A child who flips from calm to furious in seconds, over a sock seam or the wrong color cup, is not showing bad character. In Chinese medicine, sudden anger and frustration in children are most often linked to the Liver. The Liver is responsible for the smooth flow of Qi and emotions. When that flow gets stuck or overheats, it erupts. Two patterns commonly appear. Liver Qi Stagnation looks like sighing, chest tightness, and mood swings that build slowly over days. Liver Fire is more intense: red face, loud voice, and explosive outbursts that pass quickly and leave the child drained. Cooling, gently moving foods such as rose, chrysanthemum, and celery may help the Liver release tension without adding more heat."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Child Tantrums"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Classical Chinese pediatric texts describe children with a phrase that translates to 'the Liver is excessive, the Spleen is insufficient.' The first half of that phrase explains tantrums. In TCM theory, the Liver is the organ responsible for the smooth flow of Qi throughout the body, and that includes the smooth flow of emotions. When the Liver flows well, a child feels frustration, processes it, and moves on. When the Liver's flow gets stuck, frustration builds like water behind a dam. When it overheats, the frustration turns to fire."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Children's Liver is described as 'excessive' because it runs hot and reacts quickly. This is a developmental reality, not a behavioral problem. A 4-year-old does not have the neural circuitry to regulate a full Liver Fire surge on their own. They need adults to create the conditions, through food, routine, and calm modeling, that let the Liver cool down naturally."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Two patterns dominate. Liver Qi Stagnation is the slow build: the child holds things in, sighs frequently, gets grumpier over several days, and then explodes over something small. The small trigger is not the cause; it is the last drop in an already full cup. Liver Fire is faster and hotter: the face flushes, the voice gets loud, and the outburst is intense but brief. After a Liver Fire episode, the child is often drained and sometimes tearful, which tells you the surge has passed. What families eat and how the day is structured can shift both patterns. The traditional approach is not to suppress the anger but to give the Liver a cooler, smoother channel to work with."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Tantrum Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Tantrums are rarely random. They usually follow one of four Liver-related patterns, sometimes in combination. Matching your child's behavior to the closest pattern helps with food and routine choices."}
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
                { p: "Liver Fire", s: "Red face, loud voice, explosive bursts, brief duration", m: "Liver Qi has overheated into Fire that rises fast", f: "Cooling foods: chrysanthemum, mung bean" },
                { p: "Liver Qi Stagnation", s: "Sighing, mood swings, chest tightness, slow build", m: "Liver cannot flow Qi smoothly, pressure accumulates", f: "Gently moving foods: rose, celery" },
                { p: "Stomach Heat (contributing)", s: "Thirsty, dry mouth, irritable after eating, strong breath", m: "Heat in the Stomach feeds into and amplifies Liver Fire", f: "Cooling, moistening foods: pear, lotus root" },
                { p: "Yin Deficiency with Empty Heat", s: "Tantrums worse in evening, night sweats, flushed cheeks", m: "Liver lacks cooling Yin, empty heat rises at night", f: "Nourishing Yin foods: black sesame, spinach" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Child Tantrums"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Most tantrums are not random misbehavior. They are the Liver's way of saying it cannot flow. Five everyday factors repeatedly trigger or worsen Liver Qi stagnation and Liver Fire in children."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Emotions without a vocabulary"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"A child who feels frustration but cannot name it has nowhere for that energy to go. The Liver, which moves emotions, gets stuck. Adults can say 'I am frustrated because my meeting ran late.' A 5-year-old feels the same frustration but may only have 'no' and a thrown shoe. The traditional Chinese view is that naming the feeling, even simply, gives the Liver Qi a channel to move through."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Blood sugar swings from irregular eating"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"A child who skips breakfast, grabs a sweet snack at 10, and crashes by noon is asking their Liver to handle wild energy fluctuations. In TCM theory, the Liver stores Blood and regulates its distribution. When blood sugar swings violently, the Liver works overtime and heats up. Regular, warm meal times are one of the simplest ways to reduce tantrum frequency."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Screen time that overheats the Liver"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Fast-paced visual input generates internal heat. The Liver, already running hot in children, gets hotter. Many parents notice that the worst tantrums come right after screen time ends, not during it. The screen held the child's attention artificially, and when it stops, the accumulated Liver heat has nowhere to go but out."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Family tension and emotional modeling"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Children mirror the Liver patterns of the adults around them. A household with frequent tension, rushing, and sharp words creates an environment where Liver Qi tightens in everyone. The child, with less capacity to regulate, is usually the first to show it. This is not blame. It is an observation that calming the household often calms the child."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Physical discomfort the child cannot articulate"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Constipation, teething pain, growing pains, tight shoes, a tag that scratches. The Liver meridian flows through every part of the body, and any physical stuckness can show up as emotional stuckness. Before assuming a tantrum is purely behavioral, it is worth checking whether something physical is contributing."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Soothe a Child's Liver"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods come from traditional Chinese dietary practice for children with a hot or stuck Liver. They are cooling, gently moving, and easy to find. Think of them as opening windows in a stuffy room. They do not force the Liver to calm down; they give it a path to release heat and tension naturally."}
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
                { food: "Rose buds (Mei Gui)", prop: "Warm, sweet", help: "Moves Liver Qi and eases emotional tension; the classic flower for stuck moods", prep: "Steep 3-5 dried buds as tea" },
                { food: "Chrysanthemum (Ju Hua)", prop: "Cool, sweet", help: "Clears Liver Fire and cools the head; children often like the mild floral taste", prep: "Steep 5-8 flowers in hot water" },
                { food: "Celery", prop: "Cool, sweet", help: "Clears heat and supports smooth Liver flow through the digestive system", prep: "Lightly stir-fry or cut small in soup" },
                { food: "Mung bean (Lu Dou)", prop: "Cool, sweet", help: "Clears heat and gently detoxifies; a summer staple in Chinese households", prep: "Cook as thin soup or congee" },
                { food: "Mint (Bo He)", prop: "Cool, pungent", help: "Vents heat outward and moves Qi; add at the end so the volatile oils survive", prep: "Add fresh leaves to tea after cooking" },
                { food: "Lotus root (Lian Ou)", prop: "Cool, sweet", help: "Clears heat and moistens without chilling the Spleen", prep: "Slice into soup or stir-fry" },
                { food: "Pear", prop: "Cool, sweet", help: "Moistens and clears heat; most children accept the sweetness readily", prep: "Steam or simmer as soup" },
                { food: "Spinach", prop: "Cool, sweet", help: "Nourishes Liver Blood and prevents the empty heat that comes from deficiency", prep: "Lightly cook, never raw for young children" },
                { food: "Cucumber", prop: "Cool, sweet", help: "Clears heat and supports hydration during intense phases", prep: "Small amounts at room temperature" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When the Liver Is Hot"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not bad in themselves. They are simply more likely to add heat or create stagnation in a Liver that is already running hot. Limiting them during intense phases may reduce both the frequency and intensity of outbursts."}
        </p>
        <ul className="space-y-2">
          {[
            "Fried and greasy foods, which generate heat and burden the Liver's smooth flow",
            "Excessive sweets, which create temporary heat followed by deeper irritation",
            "Spicy foods, which add fuel to Liver Fire directly",
            "Caffeine in chocolate and cola, which overstimulates and intensifies outbursts",
            "Very warming foods like lamb or heavy cinnamon during active phases",
            "Ice-cold drinks, which cause Qi to contract suddenly and worsen stagnation",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Help the Liver Flow"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food works best alongside rhythm and movement. The Liver responds powerfully to physical activity and predictable daily structure. These habits are what traditional Chinese pediatric advice returns to again and again."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Regular meal times.", d: "Blood sugar stability is the foundation. A child who eats at consistent times gives the Liver steady work instead of emergency swings." },
            { h: "Outdoor physical play for 30 minutes or more daily.", d: "Movement is the Liver's medicine. Running, climbing, and jumping move Qi through the whole body and prevent stagnation from building." },
            { h: "A cool-down corner, not a time-out.", d: "Stock it with cool water, a soft blanket, and a quiet activity. The goal is to give the Liver heat a place to dissipate, not to punish the child for having it." },
            { h: "A consistent daily rhythm.", d: "The Liver thrives on predictability. Irregular schedules create low-grade stress that accumulates as Qi stagnation over days." },
            { h: "Warm meals, not cold.", d: "Cold food and drinks contract the system. Warm food keeps Qi moving smoothly through the digestive tract and beyond." },
            { h: "Name the feeling before correcting the behavior.", d: "Saying 'you seem really frustrated' gives the Liver Qi a verbal channel to move through. This is not therapy; it is basic plumbing." },
            { h: "Limit screen time to under 1 hour daily.", d: "Fast visual input generates internal heat. The less screen time, the less fuel the Liver has to burn." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"An Afternoon Routine: Rose and Chrysanthemum Cooling Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the tea Chinese families make when a child comes home from school tight and edgy. It takes 10 minutes, uses two dried flowers, and serves as a transition between the intensity of the day and the calm of the evening. The rose moves stuck Qi, and the chrysanthemum cools the heat that has built up."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"3-5 dried rose buds"}</li>
            <li>{"5-8 dried chrysanthemum flowers"}</li>
            <li>{"2 cups water"}</li>
            <li>{"1-2 fresh mint leaves"}</li>
            <li>{"Small piece of rock sugar or half teaspoon honey (for children over 1)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Bring water to a boil in a small pot."}</li>
            <li>{"2. Add rose buds and chrysanthemum flowers."}</li>
            <li>{"3. Reduce heat and simmer 3 to 5 minutes."}</li>
            <li>{"4. Remove from heat and add fresh mint leaves."}</li>
            <li>{"5. Let steep 2 more minutes, covered."}</li>
            <li>{"6. Strain into a cup and sweeten lightly if needed."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"Mid-afternoon, after school or between activities"}</li>
            <li>{"Half a small cup for ages 3-7, a full small cup for ages 8-12, a regular cup for teens"}</li>
            <li>{"Not for children under 3 without pediatrician guidance"}</li>
            <li>{"2 to 3 times per week during intense phases"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First few days: sometimes calmer afternoons"}</li>
            <li>{"After 1-2 weeks: fewer explosive moments, shorter recovery time"}</li>
            <li>{"After 3-4 weeks: more even mood across the day"}</li>
            <li>{"Reduce frequency as the pattern settles"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-tantrums"
        imageSrc="/images/pinterest/child-tantrums.jpg"
        alt="Chinese medicine for child tantrums - rose and chrysanthemum cooling tea recipe card"
        pinDescription="Rose and chrysanthemum tea for child tantrums. A Chinese medicine recipe to soothe Liver Qi and clear Liver Fire."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Tantrums are a normal part of development, but some signs warrant professional assessment. Always consult your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Aggression that causes injury to self or others"}</li>
          <li>{"Tantrums lasting more than 30 minutes on a regular basis"}</li>
          <li>{"Destruction of property during outbursts"}</li>
          <li>{"Tantrums in children over 8 that resemble toddler meltdowns"}</li>
          <li>{"Any mention of wanting to hurt themselves or others"}</li>
          <li>{"Head-banging or self-injury during outbursts"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-tantrums"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-anxiety" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Anxiety: Heart and Kidney Patterns"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Anxiety and tantrums often share an emotional root. When frustration turns inward, it becomes worry. This page covers the Heart-Kidney side of the same cluster."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-focus" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Focus: Spleen and Phlegm Patterns"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A child who cannot focus may be expressing frustration differently. The Liver and Spleen are closely linked in TCM theory."}</p>
          </Link>
          <Link href="/wellness/liver-fire" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Liver Fire: A Complete Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same pattern. Useful for parents who recognize their own short fuse in their child's outbursts."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-bloating" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Bloating: When the Liver Meets the Spleen"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Bloating in children often involves Liver Qi pressing on a weak Spleen. The same stuck-Liver pattern can show up as both tummy trouble and mood swings."}</p>
          </Link>
          <Link href="/types/qi_stagnant" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Qi Stagnant Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children with frequent tantrums may be showing a Qi Stagnant tendency. Understanding this constitution helps explain why some kids hold tension more than others."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />

      <p className="text-xs text-text2/50 mt-8 leading-relaxed">
        {"This page is for educational purposes only and describes traditional Chinese dietary philosophy. Always consult your pediatrician before making changes to your child's diet or routine."}
      </p>
    </main>
  )
}
