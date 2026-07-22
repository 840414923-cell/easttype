
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildAnxietyArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Anxiety"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Anxiety: Heart and Kidney Patterns with Calming Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"The child who lies awake at night with a racing mind, or who asks the same worry question twenty times, may be showing a pattern Chinese medicine calls Heart-Kidney disharmony. The Heart, in TCM theory, houses the Shen, or mind, and the Kidney anchors it from below. When that anchor is weak, the mind floats upward into restless worry. Two patterns often overlap. Heart-Kidney Imbalance looks like trouble falling asleep, vivid dreams, and frequent startle responses. Heart Yin Deficiency adds a flushed face, night sweating, and a dry mouth. Foods that may gently support this relationship include lotus seed, longan, and lily bulb, prepared as a mild tea or congee that a child can sip before bed."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Child Anxiety"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Chinese medicine, the Heart is more than a pump. It houses the Shen, which translates loosely as the mind or spirit. When a child's Heart-Shen is settled, they fall asleep easily, handle small disappointments without melting down, and recover from surprises quickly. When the Shen is restless, the child cannot turn off their thoughts at night, asks repetitive worry questions, and startles at sounds that never bothered them before."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Kidney sits below the Heart in TCM theory and provides a cooling, anchoring energy that keeps the Heart's fire from flaring upward. This relationship is called Heart-Kidney communication, or xin shen jiao in Chinese. Think of it as a kite and the person holding the string. The Heart is the kite, rising and moving. The Kidney is the anchor, keeping the kite from flying away. In young children, that anchor is still developing. Their Kidney energy, while abundant in essence, has not yet built the depth that comes with age and steady nourishment."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This is why child anxiety often looks different from adult anxiety. An adult's worry may involve complex loops tied to work or relationships. A child's anxiety is often simpler and more physical: they cannot sleep, their stomach hurts before school, they cling at drop-off. The traditional Chinese approach does not pathologize this. It sees a developmental gap between a sensitive Heart and a Kidney that has not yet learned to hold it steady. The Spleen plays a supporting role because it produces Blood, which nourishes the Heart. A child with weak digestion may not generate enough Blood to keep the Heart settled, which is why anxious children often have picky appetites."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Anxiety Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Anxiety in children is rarely one clean pattern. It usually involves the Heart at the center with one or two contributing organ systems. Identifying the closest match helps with food and routine choices."}
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
                { p: "Heart-Kidney Imbalance", s: "Trouble falling asleep, vivid dreams, startle response", m: "Kidney cannot anchor Heart Shen, mind floats upward", f: "Nourishing, calming foods: lotus seed, longan" },
                { p: "Heart Yin Deficiency", s: "Flushed cheeks, night sweats, dry mouth, restlessness", m: "Heart lacks cooling moisture, heat rises at night", f: "Moistening foods: lily bulb, wheat" },
                { p: "Spleen Qi Deficiency (contributing)", s: "Small appetite, worry loops, fatigue after meals", m: "Spleen cannot produce enough Blood to anchor the Heart", f: "Warm, sweet foods: jujube, Chinese yam" },
                { p: "Liver Qi Stagnation (contributing)", s: "Sighing, chest tightness, mood swings before bed", m: "Stuck Qi restricts the smooth flow of emotions", f: "Gently moving foods: rose, mint" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Child Anxiety"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Most childhood anxiety is not from a single source. It builds from small, daily mismatches between what a child's developing Heart-Kidney system can handle and what their environment demands. Five factors show up repeatedly in traditional Chinese pediatric observation."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"An overstimulating daily environment"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Modern childhood is loud and fast. Screens, notifications, crowded classrooms, and packed schedules all ask the Heart-Shen to process more input than it was designed for. In TCM theory, excessive stimulation scatters the Shen upward. A child who has been at a busy birthday party, then watched an hour of fast-paced video, then tried to sleep, is being asked to settle a mind that has been buzzing for hours. The Kidney simply cannot anchor that much upward energy in one evening."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Constitutional Heart sensitivity"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Some children are born with a naturally sensitive Shen. They notice sounds others miss, feel other people's moods acutely, and startle more easily. In TCM, this is a constitutional tendency, not a flaw. These children often become deeply perceptive adults. But in childhood, their Heart needs more gentle support. Traditional Chinese families recognize this pattern and offer calming foods and early bedtimes without making the child feel broken."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Late bedtimes and insufficient sleep"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Kidney rebuilds its anchoring energy during deep sleep, particularly in the hours before midnight. A child who consistently goes to bed after 9 PM may not get enough of that early-night rest. Over weeks and months, the Kidney's reserves thin out, and the Heart-Shen has less and less to hold onto. Anxiety that worsens over a school term is often linked to this slow, steady erosion of sleep."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Weak digestion failing to nourish the Heart"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Spleen produces Blood, and Blood nourishes the Heart. A child who eats irregularly, prefers cold snacks, or skips meals may not generate enough Blood to keep the Heart settled. This pattern often shows up as anxiety paired with pale complexion, picky eating, and fatigue. Supporting the Spleen with warm, regular meals is one of the most overlooked approaches to calming an anxious child."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Pressure beyond the child's developmental stage"}</h3>
        <p className="text-text2 leading-relaxed">
          {"Academic expectations, competitive sports, and social dynamics can exceed what a child's developing system can process. In TCM, prolonged mental effort consumes Heart Blood and Spleen Qi. A 7-year-old doing two hours of homework is using energy reserves that should be going to growth. The result is often a child who seems fine until bedtime, when the accumulated strain surfaces as worry and restlessness."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Calm a Child's Heart"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods come from traditional Chinese dietary practice for children with sensitive Hearts. They are gentle, nourishing, and easy to prepare. Most are available at Asian grocery stores or online. Use them as a starting point and notice how your child responds over two to three weeks."}
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
                { food: "Lotus seed (Lian Zi)", prop: "Neutral, sweet, astringent", help: "Calms the Heart and supports Kidney communication; traditionally used for children's sleep worry", prep: "Soak 1 hour, simmer into congee or mild tea" },
                { food: "Longan (Gui Yuan)", prop: "Warm, sweet", help: "Nourishes Heart Blood and gently calms the Shen", prep: "3-5 dried pieces in warm water or congee" },
                { food: "Lily bulb (Bai He)", prop: "Cool, sweet", help: "Moistens Heart Yin and clears empty heat that rises at night", prep: "Boil with rock sugar as a light dessert" },
                { food: "Wheat (Xiao Mai)", prop: "Cool, sweet", help: "Nourishes the Heart and calms restlessness; a classic TCM food for worry", prep: "Cook as porridge or add to soups" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Supports Spleen and Heart Blood so the Shen has something to rest on", prep: "Pit 2-3, add to tea or congee" },
                { food: "Poria (Fu Ling)", prop: "Neutral, bland", help: "Supports the Spleen and quietly calms the Heart without sedating", prep: "Add a few slices to congee or soup" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Supports Spleen and Kidney together, building the anchor from below", prep: "Peel and slice into congee" },
                { food: "Mulberry (Sang Shen)", prop: "Cool, sweet", help: "Nourishes Blood and Yin; children often like the taste", prep: "Small handful fresh or as jam" },
                { food: "Goji berry (Gou Qi Zi)", prop: "Neutral, sweet", help: "Nourishes Liver and Kidney, supporting the deeper anchor", prep: "5-6 berries in tea or congee" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Anxiety Is Present"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not forbidden. They are simply more likely to scatter the Shen or add heat to a Heart that is already restless. Limiting them during anxious phases may make a noticeable difference."}
        </p>
        <ul className="space-y-2">
          {[
            "Caffeine in cola, chocolate, and certain teas, which directly stimulates the Heart and scatters the Shen",
            "Very spicy foods, which add internal heat and can worsen restlessness at night",
            "Concentrated sweets, which cause energy spikes followed by crashes that amplify worry",
            "Ice-cold drinks, which contract the system and disrupt the calm downward flow of Qi",
            "Heavy, greasy late-night meals, which keep the body digesting when it should be settling",
            "Excessively heating foods like lamb or heavy ginger in the evening, which can push Heart fire upward",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Support a Settled Heart"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is one piece. The daily rhythm around sleep, screens, and emotional processing matters just as much for an anxious child. These are the habits traditional Chinese pediatric advice emphasizes."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Consistent bedtime before 9 PM.", d: "The Kidney rebuilds its anchoring energy during early-night sleep. A regular bedtime trains the system to settle at the same hour each day." },
            { h: "A warm foot soak before bed.", d: "Drawing warmth to the feet pulls energy downward, away from the busy Heart and head. Five minutes is enough for young children." },
            { h: "Gentle belly breathing for two minutes.", d: "Slow breathing into the belly signals the nervous system to settle. Practice it together as part of the bedtime routine." },
            { h: "A worry box ritual.", d: "Have your child draw or name their worries, then place them in a small box. The symbolic act of closing the lid can help the Shen release." },
            { h: "Warm, soft dinner at least two hours before bed.", d: "A heavy or cold dinner forces the Spleen to work when the body should be winding down. Keep evening meals simple and warm." },
            { h: "Screen-free wind-down for 30 to 60 minutes.", d: "Screens scatter the Shen upward. Replacing them with quiet reading or soft music gives the Heart a chance to gather itself." },
            { h: "Morning sunlight for 10 minutes.", d: "Natural morning light sets the body's daily rhythm, which supports deeper and more restorative sleep that night." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Bedtime Routine: Lotus Seed and Longan Calming Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the tea that traditional Chinese families reach for when a child cannot settle at night. It takes about 40 minutes of mostly hands-off simmering and uses four gentle ingredients. The goal is not to sedate the child but to give the Heart and Kidney something warm and nourishing to work with."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1 tablespoon dried lotus seeds"}</li>
            <li>{"3-5 dried longan pieces"}</li>
            <li>{"2 cups water"}</li>
            <li>{"2 pitted red dates (optional)"}</li>
            <li>{"Tiny piece of rock sugar (optional)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Soak dried lotus seeds in warm water for at least 1 hour."}</li>
            <li>{"2. Combine lotus seeds, longan, red dates, and water in a small pot."}</li>
            <li>{"3. Bring to a boil, then reduce to low heat."}</li>
            <li>{"4. Simmer 25 to 30 minutes until the lotus seeds are soft."}</li>
            <li>{"5. Add rock sugar to taste if using."}</li>
            <li>{"6. Strain into a cup and let cool slightly before serving."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"30 to 60 minutes before bed"}</li>
            <li>{"Half a small cup for ages 3-7, a full small cup for ages 8-12, a regular cup for teens"}</li>
            <li>{"Not recommended for children under 3 without pediatrician guidance"}</li>
            <li>{"3 to 4 times per week, not every night"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First week: usually easier time settling at bedtime"}</li>
            <li>{"After 2 weeks: fewer middle-of-night wakings"}</li>
            <li>{"After 3-4 weeks: less repetitive worry questioning during the day"}</li>
            <li>{"Continue as needed, with occasional breaks"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-anxiety"
        imageSrc="/images/pinterest/child-anxiety.jpg"
        alt="Chinese medicine for child anxiety - lotus seed and longan calming soup recipe card"
        pinDescription="Lotus seed and longan soup for child anxiety. A gentle Chinese medicine recipe to bridge Heart and Kidney communication."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Child anxiety can have many causes, and some require professional support. Always consult your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Panic attacks with racing heart, shaking, or difficulty breathing"}</li>
          <li>{"Refusing to attend school for more than a few days"}</li>
          <li>{"Significant weight loss or refusal to eat"}</li>
          <li>{"Any mention of self-harm or not wanting to be here"}</li>
          <li>{"Anxiety that prevents sleep for multiple consecutive nights"}</li>
          <li>{"Signs of obsessive behaviors or compulsive rituals"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-anxiety"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-tantrums" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Tantrums: Liver Fire and Soothing Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"When anxiety shifts into explosive outbursts, the Liver is usually involved. This page covers the emotional cluster from the other side."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-focus" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Focus: Spleen and Phlegm Patterns"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A scattered mind and an anxious mind often share a Spleen weakness. This page explains the phlegm and focus connection."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-anxiety" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Anxiety: The Adult Version"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Heart-Kidney patterns. Useful for parents who recognize the same tendencies in themselves."}</p>
          </Link>
          <Link href="/wellness/heart-yin-deficiency" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Heart Yin Deficiency: A Complete Guide"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The deeper TCM explanation for the flushed, restless, dry-mouth pattern that often underlies nighttime worry in both children and adults."}</p>
          </Link>
          <Link href="/types/yin_deficient" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Yin Deficient Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Anxious children with night sweats and flushed cheeks may be showing a Yin Deficient tendency. Understanding this constitution helps explain family patterns."}</p>
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
