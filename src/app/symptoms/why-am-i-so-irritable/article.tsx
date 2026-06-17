
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function IrritableArticle() {
  const slug = "why-am-i-so-irritable"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Irritable</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I So Irritable? The Short Fuse That Keeps Getting Shorter
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Everything gets on your nerves. The way someone chews. The sound of a phone buzzing. A question that should be simple but feels like too much. You know your reaction is bigger than the situation, but knowing doesn&apos;t stop it. You snap, then feel bad, then snap again five minutes later.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People tell you to relax. Breathe. Let it go. And you&apos;ve tried. But the irritability isn&apos;t something you&apos;re choosing. It&apos;s a baseline state, like a radio that&apos;s always slightly too loud. You can turn it down for a while, but it creeps back up on its own.
        </p>
        <p className="text-text2 leading-relaxed">
          In Traditional Chinese Medicine, chronic irritability isn&apos;t a character flaw or a stress problem. It&apos;s an energy flow problem. Specifically, it&apos;s what happens when your body&apos;s energy gets stuck and starts pressing outward as emotional friction. The good news is that this is a pattern, and patterns can be shifted.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Irritability Actually Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is you, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Small things set you off that normally wouldn't bother you",
            "You feel a constant low-grade tension, like something is about to snap",
            "People walk on eggshells around you, and you know it but can't seem to stop",
            "Your patience is shortest with the people closest to you",
            "You wake up already irritated, before anything has even happened",
            "After snapping, you feel guilty but the irritation returns quickly",
            "Physical tension in your chest, shoulders, or jaw that never fully releases",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Common Explanations (And Why They Miss Something)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The standard explanation is stress. And yes, stress makes irritability worse. But it&apos;s not the whole story. Many people are stressed without being irritable, and many people are irritable without being particularly stressed. Something else is going on underneath.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other possibilities: poor sleep, caffeine, hormonal fluctuations (especially PMS), blood sugar instability, and certain medications. These are all real factors and worth addressing. Cutting back on coffee and getting better sleep can make a real difference.
        </p>
        <p className="text-text2 leading-relaxed">
          But some people do all of that and the short fuse remains. They sleep fine. They drink decaf. Their hormones test normal. And they still feel like a pot about to boil over. That&apos;s where the TCM perspective offers a different kind of answer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Irritability
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, chronic irritability is the hallmark of Liver Qi Stagnation. The Liver in Chinese medicine isn&apos;t just the organ that filters toxins. It&apos;s the system responsible for the smooth flow of energy and emotions throughout your body. When Liver Qi flows freely, emotions move through you naturally. You feel frustration, process it, and move on. When Liver Qi is stuck, emotions build up like pressure in a sealed container. Every small trigger releases more than it should because the pressure was already there.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a river. A healthy river flows smoothly. A dammed river builds up pressure behind the blockage. The irritability isn&apos;t about the twig that falls into the water. It&apos;s about the accumulated pressure from the dam. Remove the dam, and the twig wouldn&apos;t even be noticeable.
        </p>
        <p className="text-text2 leading-relaxed">
          What causes the dam? Emotional suppression (not expressing what you feel), lack of physical movement, irregular eating and sleeping patterns, and chronic stress. In TCM, the Liver is especially sensitive to unexpressed frustration and anger. The more you bottle up, the more stagnant the energy becomes, and the more irritable you feel. It&apos;s a feedback loop.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Short Fuse
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and chronic irritability shows up most prominently in one.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the primary match. About 8% of people fall into this pattern. Their energy tends to pool and stagnate rather than flow freely. The result is emotional pressure that builds and releases as irritability, mood swings, overthinking, or chest tightness. They sigh frequently, sometimes without realizing it, because their body is literally trying to move stuck energy.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help: Getting the Energy Moving
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most effective thing for irritability in TCM is movement. Not intense, punishing exercise. Smooth, rhythmic movement that gets your Qi circulating. A 20-minute walk works better than a hard gym session. Swimming, gentle yoga, dancing, cycling on flat ground. The key is consistency, not intensity. You want to open the channels, not create more stress.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Express what you&apos;re feeling. This doesn&apos;t mean venting at people. It means giving the stuck energy an outlet. Journal, talk to a friend, sing, create something. In TCM, unexpressed emotion is the number one cause of Liver Qi Stagnation. The emotion doesn&apos;t have to be expressed dramatically. It just has to move rather than stay stuck.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Drink rose tea or tangerine peel tea. Both are traditional TCM choices for promoting smooth Liver Qi flow. Rose tea specifically targets emotional stagnation. Tangerine peel (chenpi) helps move Qi in the digestive system, which is often sluggish when Liver Qi is stuck. Avoid excessive coffee and alcohol, which add heat and pressure to a system that&apos;s already pressurized.
        </p>
        <p className="text-text2 leading-relaxed">
          Eat regular meals at regular times. In TCM, the Liver depends on the Spleen for nourishment. Skipping meals or eating erratically weakens the Spleen, which means the Liver doesn&apos;t get what it needs to keep Qi flowing. This is why many people notice their irritability spikes when they&apos;re hungry or have skipped a meal. The fix isn&apos;t just eat more. It&apos;s eat regularly.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your irritability is severe, getting worse, or accompanied by rage, aggression, or thoughts of harming yourself or others, please consult a licensed healthcare provider. Chronic irritability can sometimes be connected to conditions that need proper medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">
            Stuck Energy Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-sm text-accent no-underline hover:underline">
            Why Are My Moods All Over the Place?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />

      <section className="mt-10 mb-4">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
            What Foods May Help
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            We put together a full food guide for this symptom, including what to eat, what to avoid, and a simple daily meal plan.
          </p>
          <Link href="/foods-for/when-youre-irritable" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>


      <SymptomCta />
    </main>
  )
}