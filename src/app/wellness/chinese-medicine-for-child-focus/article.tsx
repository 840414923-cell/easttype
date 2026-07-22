
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"
import SaveToPinterest from "@/components/save-to-pinterest"

export default function ChildFocusArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine for Child Focus"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine for Child Focus: Spleen and Phlegm Patterns with Clarifying Foods That May Help"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Eastern body wisdom for families"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-text leading-relaxed">
          {"Chinese medicine identifies two distinct patterns behind a child who cannot sustain attention on schoolwork or chores. The first is Phlegm Clouding the Head, where dampness from a weak digestion rises upward and creates a foggy, heavy sensation that makes concentration difficult. The second is Spleen Qi Deficiency, where there is simply not enough steady energy to hold focus for more than a few minutes. A child with phlegm may seem physically present but mentally elsewhere, while a Spleen-deficient child runs out of steam by mid-afternoon. Foods that may help clear the fog and build steady energy include tangerine peel, poria mushroom, and Chinese yam, prepared as a light tea or soft porridge that is easy for a young digestive system to absorb."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Chinese Medicine Sees Child Focus"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In classical Chinese medicine, clear thinking depends on two things working together: a strong digestive middle that sends clean energy upward, and a clear head that can receive it. The Spleen, in TCM theory, turns food into Qi and sends clear Yang upward to the brain. When the Spleen is strong, a child's mind is sharp, their memory is steady, and they can hold attention on a task until it is done. When the Spleen is weak, something else goes up instead of clear Yang. Dampness, a heavy and sticky byproduct of incomplete digestion, rises toward the head and creates what traditional texts call 'phlegm clouding the clear orifices.'"}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"This is a physical metaphor with a practical observation behind it. A child who eats a diet heavy in dairy, sweets, and cold foods produces more dampness. That dampness makes the body feel heavy, the head feel foggy, and the tongue develop a thick coating. The child is not lazy or unintelligent. Their digestive system is producing a byproduct that interferes with clear thinking."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Traditional Chinese pediatrics separates this into two related patterns. Phlegm Clouding the Head is the dampness itself, creating the foggy, heavy, present-but-not-here quality that parents and teachers describe. Spleen Qi Deficiency is the underlying weakness, the reason the dampness formed in the first place. A child can have either one, but most have both. The traditional approach addresses them together: foods that dry and resolve phlegm, like tangerine peel and poria, paired with foods that strengthen the Spleen, like Chinese yam and jujube. The goal is to clear the fog while also fixing the leak that let it in."}
        </p>
      </section>

      <InlineQuizCta />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Child Focus Patterns in TCM"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Difficulty with focus and concentration in children is rarely about willpower. It usually traces to one of four patterns, often in combination. Matching your child's behavior to the closest pattern helps with food and routine choices."}
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
                { p: "Phlegm Clouding the Head", s: "Foggy thinking, heavy head, sticky mouth, thick tongue coat", m: "Dampness rises and blocks clear mental function", f: "Drying, aromatic foods: tangerine peel, poria" },
                { p: "Spleen Qi Deficiency", s: "Low energy, short attention span, poor appetite, pale face", m: "Not enough Qi generated to sustain focus", f: "Warm, sweet foods: Chinese yam, jujube" },
                { p: "Kidney Essence Deficiency (contributing)", s: "Slow to learn new things, poor memory, late milestones", m: "Kidney cannot nourish the brain adequately", f: "Gentle nourishing foods: walnut, black sesame" },
                { p: "Liver Qi Stagnation (contributing)", s: "Frustration when stuck, explosive giving-up, sighing", m: "Stuck Qi creates mental tension that blocks focus", f: "Gently moving foods: rose, mint" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Causes Focus Difficulties in Children"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"When a child cannot concentrate, the instinct is to look at the brain. Chinese medicine looks first at the digestion. Five everyday factors repeatedly weaken the Spleen, generate phlegm, and cloud a child's ability to hold attention."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"A phlegm-producing diet"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Dairy, sweets, and cold foods are the three biggest phlegm producers in TCM dietary theory. A child who drinks a large glass of cold milk every morning, eats yogurt at lunch, and has ice cream after dinner is generating dampness all day. The Spleen cannot keep up, and the excess rises toward the head. Many parents notice that focus improves within a week of reducing dairy, even before any other changes."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Irregular sleep that exhausts the Spleen"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"The Spleen, like every system in TCM theory, rebuilds during rest. A child who sleeps late or wakes frequently does not give the Spleen enough time to recover. Over a school term, the Spleen gradually weakens, dampness accumulates, and focus suffers. This is why focus issues often worsen as a semester progresses, not because the work gets harder but because the Spleen gets tireder."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Overscheduling and mental fatigue"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"In TCM, sustained mental effort consumes Spleen Qi directly. A child who goes from school to tutoring to music practice to homework, with no downtime, is draining the Spleen faster than it can refill. The traditional Chinese view is that children need unstructured rest, not just structured learning, for the Spleen to turn experience into lasting energy."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Insufficient physical movement"}</h3>
        <p className="text-text2 leading-relaxed mb-3">
          {"Qi moves when the body moves. A child who sits for most of the day, whether at a desk or on a couch, develops stagnant Qi. Stagnant Qi does not rise clearly to the head. Physical movement, especially outdoors, is one of the most effective ways to clear mental fog because it moves the whole system, not just the mind."}
        </p>

        <h3 className="font-semibold text-text text-base mt-6 mb-2">{"Lack of daily rhythm"}</h3>
        <p className="text-text2 leading-relaxed">
          {"The Spleen functions best with predictable meal times, sleep times, and study times. A child whose schedule shifts every day is asking the Spleen to be ready at any moment, which it cannot do. Consistency, even imperfect consistency, gives the Spleen a rhythm it can follow."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That May Help Clear Mental Fog"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods come from traditional Chinese dietary practice for children with phlegm and weak Spleen. Some dry the dampness, some strengthen the Spleen, and some do both. They are gentle enough for daily use and available at most Asian grocery stores."}
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
                { food: "Tangerine peel (Chen Pi)", prop: "Warm, pungent, bitter", help: "Resolves phlegm and moves Qi; the classic ingredient for mental fog", prep: "Simmer as tea or add to congee" },
                { food: "Poria (Fu Ling)", prop: "Neutral, bland", help: "Drains damp, strengthens Spleen, and quietly calms the mind", prep: "Add a few slices to congee or soup" },
                { food: "Chinese yam (Shan Yao)", prop: "Neutral, sweet", help: "Builds Spleen Qi for steady, sustainable focus energy", prep: "Peel and slice into congee" },
                { food: "Walnut (Hu Tao)", prop: "Warm, sweet", help: "Supports Kidney and brain; traditionally used for memory in school-age children", prep: "1-2 per day for ages 5 and up" },
                { food: "Black sesame (Hei Zhi Ma)", prop: "Neutral, sweet", help: "Nourishes Kidney Essence and supports brain function over time", prep: "Grind and sprinkle on porridge" },
                { food: "Jujube (red dates)", prop: "Warm, sweet", help: "Supports Spleen and Heart Blood for mental steadiness", prep: "Pit 2-3, add to tea or congee" },
                { food: "Millet (Xiao Mi)", prop: "Warm, sweet", help: "Supports Spleen and calms the mind; the most digestible grain for children", prep: "Cook as porridge with jujube" },
                { food: "Coix seed (Yi Yi Ren)", prop: "Cool, sweet", help: "Drains damp and strengthens Spleen; reduces phlegm at its source", prep: "Soak 2 hours, cook with rice as congee" },
                { food: "Radish (Bai Luo Bo)", prop: "Cool, pungent", help: "Moves Qi and clears phlegm from the chest and head", prep: "Cook in soup, avoid raw for young children" },
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods to Limit When Focus Is Foggy"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These foods are not harmful in small amounts. But for a child struggling with focus, they actively generate the dampness and sluggishness that cloud the mind. Limiting them during school weeks may make a noticeable difference."}
        </p>
        <ul className="space-y-2">
          {[
            "Excessive dairy, which is damp-forming and directly contributes to the phlegm that clouds thinking",
            "Concentrated sweets, which weaken the Spleen and generate more dampness over time",
            "Cold and raw foods in excess, which slow the Spleen and promote phlegm formation",
            "Heavy, greasy foods, which create sluggishness and a heavy sensation in the head",
            "Excessive fruit juice, which is both sweet and cold, a combination that generates dampness quickly",
            "Processed snacks with artificial additives, which the Spleen struggles to process and which contribute to internal clutter",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">·</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Daily Habits That Support Clear Thinking"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The Spleen responds to rhythm, warmth, and movement more than to any single food. These daily habits create the conditions in which focus can naturally improve."}
        </p>
        <ol className="space-y-3">
          {[
            { h: "Warm breakfast within an hour of waking.", d: "The Spleen is most receptive in the morning. A bowl of warm porridge signals the system to start generating Qi for the day ahead." },
            { h: "Twenty-minute focused task blocks.", d: "A tired Spleen can sustain attention for about 20 minutes. Break homework into short blocks with 5-minute movement breaks between them." },
            { h: "Hydrate with warm water, not cold.", d: "Cold water slows the Spleen. Room temperature or warm water keeps the digestive system moving and phlegm from forming." },
            { h: "A consistent homework time.", d: "The Spleen does its best work at the same hour each day. Pick a time when your child is naturally alert, usually mid-morning or after a snack." },
            { h: "Reduce dairy and sweets during school weeks.", d: "These are the two biggest phlegm producers. Even a temporary reduction can lighten the mental load within days." },
            { h: "Outdoor movement every day.", d: "Twenty minutes of running, climbing, or walking moves Qi through the whole body and clears stagnation from the head." },
            { h: "A light, early dinner.", d: "A heavy dinner keeps the Spleen working all night, which means less recovery time and foggier mornings. Keep evening meals simple and warm." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text2">
              <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
              <span className="leading-relaxed"><strong className="text-text">{item.h}</strong> {item.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Morning Routine: Tangerine Peel and Poria Clarifying Tea"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This is the tea that traditional Chinese families give children on school mornings when the head feels heavy and the mind is slow to start. It takes 20 minutes of gentle simmering and uses two core ingredients. Tangerine peel resolves phlegm, and poria drains dampness while strengthening the Spleen. Together they may help clear the fog so the Spleen can send clean energy upward for the day."}
        </p>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What you need"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"1 small piece dried tangerine peel (about 5cm, chenpi)"}</li>
            <li>{"1 tablespoon poria slices (fu ling)"}</li>
            <li>{"2 cups water"}</li>
            <li>{"2 pitted red dates (optional)"}</li>
            <li>{"Small piece of rock sugar (optional)"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"How to make it"}</h3>
          <ol className="space-y-1.5 text-sm text-text2">
            <li>{"1. Rinse the tangerine peel and poria slices briefly."}</li>
            <li>{"2. Combine tangerine peel, poria, red dates, and water in a small pot."}</li>
            <li>{"3. Bring to a boil, then reduce to low heat."}</li>
            <li>{"4. Simmer 15 to 20 minutes."}</li>
            <li>{"5. Add rock sugar to taste if using."}</li>
            <li>{"6. Strain into a cup. The tea will be slightly golden and mildly aromatic."}</li>
          </ol>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"When and how much"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"In the morning, before or with breakfast"}</li>
            <li>{"Half a small cup for ages 3-7, a full small cup for ages 8-12, a regular cup for teens"}</li>
            <li>{"Not for children under 3 without pediatrician guidance"}</li>
            <li>{"3 to 5 times per week during school terms"}</li>
          </ul>
        </div>

        <div className="bg-cream/20 border border-border/50 rounded-xl p-5">
          <h3 className="font-semibold text-accent text-sm mb-2">{"What to expect"}</h3>
          <ul className="space-y-1 text-sm text-text2">
            <li>{"First week: sometimes clearer mornings, less dragging at breakfast"}</li>
            <li>{"After 2 weeks: longer sustained attention on preferred tasks"}</li>
            <li>{"After 3-4 weeks: improved follow-through on multi-step instructions"}</li>
            <li>{"Continue through school terms, pause during breaks"}</li>
          </ul>
        </div>
      </section>

      <SaveToPinterest
        slug="chinese-medicine-for-child-focus"
        imageSrc="/images/pinterest/child-focus.jpg"
        alt="Chinese medicine for child focus - tangerine peel and poria clarifying tea recipe card"
        pinDescription="Tangerine peel and poria tea for child focus. A Chinese medicine recipe to resolve phlegm and strengthen the Spleen."
      />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This page describes traditional Chinese dietary philosophy. It is not medical advice and is not a substitute for evaluation by a licensed healthcare provider. Focus difficulties can have many causes, and some require professional assessment. Always consult your pediatrician if your child shows any of the following:"}
        </p>
        <ul className="space-y-1 text-sm text-text2">
          <li>{"Sudden dramatic decline in school performance"}</li>
          <li>{"Inability to focus on any preferred activity, not just schoolwork"}</li>
          <li>{"Seizures, staring spells, or unusual movements"}</li>
          <li>{"Regression in language or social skills"}</li>
          <li>{"Difficulty following simple one-step instructions at home"}</li>
          <li>{"Any concerns about hearing or vision that may mimic focus issues"}</li>
        </ul>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-for-child-focus"] ?? []} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Reading for Families"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-for-child-anxiety" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Anxiety: Heart and Kidney Patterns"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A scattered mind and an anxious mind often share a Spleen weakness. This page covers the Heart-Kidney side of the emotional cluster."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-tantrums" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Tantrums: Liver Fire and Soothing Foods"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Frustration and poor focus often travel together. When the Liver cannot flow, the Spleen cannot concentrate. This page explains the Liver side."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-child-phlegm" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Child Phlegm: Dampness Trapped in the Lungs"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The same dampness that clouds the head can also settle in the chest. This page covers the respiratory side of the same phlegm pattern."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-for-brain-fog" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Chinese Medicine for Brain Fog: The Adult Version"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"The adult version of the same Spleen-phlegm pattern. Useful for parents who recognize the same foggy-headed feeling in themselves."}</p>
          </Link>
          <Link href="/types/phlegm_damp" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The Phlegm Damp Body Type"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Children with persistent focus issues and a thick tongue coating may be showing a Phlegm Damp tendency. Understanding this constitution helps explain family patterns."}</p>
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
