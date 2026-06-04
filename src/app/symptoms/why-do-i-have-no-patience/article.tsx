
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyNoPatienceArticle() {
  const slug = "why-do-i-have-no-patience"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Emotional</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have No Patience? The Fuse That&apos;s Always Short
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Slow walkers in front of you. A loading screen that takes five seconds too long. Someone who doesn&apos;t get to the point fast enough. The line at the coffee shop. The person ahead of you at the traffic light who doesn&apos;t move the instant it turns green. Everything feels like an obstacle. Everyone feels like they&apos;re in your way.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          You know it&apos;s not reasonable. The person walking slowly isn&apos;t doing it to annoy you. The loading screen isn&apos;t personal. But the frustration rises anyway, fast and hot, like a pilot light that&apos;s always on. You catch yourself snapping, then feel bad about it, then snap again ten minutes later. The patience tank is always near empty, and there&apos;s never a gas station when you need one.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, chronic impatience isn&apos;t a personality trait. It&apos;s an internal heat problem. Specifically, it&apos;s what happens when energy is stuck and creating friction, or when there&apos;s too much internal fire and not enough cooling water to keep it in check. Understanding the mechanism makes the solution a lot clearer than just &quot;try to be more patient.&quot;
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Impatience Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your daily experience, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "You feel physically tense waiting for anything, even short waits",
            "Other people's pace feels constantly too slow",
            "You interrupt or finish people's sentences because they're not moving fast enough",
            "Small delays feel like major setbacks",
            "Your first reaction to most inconveniences is anger, not annoyance",
            "You know your reactions are disproportionate but can't seem to dial them back",
            "You feel a constant sense of urgency, even when there's no deadline",
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
          The Common Explanations (That Don&apos;t Cover Everything)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Stress is the usual answer. And stress can absolutely drain your patience. When your nervous system is in overdrive, your tolerance for anything that slows you down drops to near zero. Caffeine makes it worse. Poor sleep makes it worse. A packed schedule with no breathing room makes it worse.
        </p>
        <p className="text-text2 leading-relaxed">
          But some people are impatient on vacation. Some are impatient after a full night&apos;s sleep. Some cut back on coffee and still feel that constant internal pressure to go faster. For these people, the impatience isn&apos;t coming from external stress. It&apos;s coming from an internal energy pattern that generates friction and heat all on its own.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Impatience
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, impatience is most often connected to Liver Qi Stagnation that has progressed to Liver Fire. When Liver Qi is stuck, it creates pressure. When that pressure builds long enough, it generates heat. That heat rises upward and manifests as a short temper, a quick temper, and an inability to tolerate delay. Think of a stove with the flame turned up too high. Everything burns. Nothing has time to cook properly. The heat is constant and the cook is always rushing.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The internal friction analogy works well here. When energy flows smoothly, there&apos;s no friction. When it&apos;s stuck, it grinds against itself, creating heat and irritation. Your body literally feels like it&apos;s vibrating with frustration, because the energy is pressing against blockages instead of moving through them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          There&apos;s a second layer too. In TCM, Yin is the cooling, calming, grounding force in the body. Yang is the heating, active, driving force. When Yin is depleted (from poor sleep, chronic stress, or overwork), there&apos;s nothing to keep Yang in check. The heat runs unchecked, and impatience is one of the first signs. This is why impatience often gets worse when you&apos;re tired. Sleep replenishes Yin. Skip sleep, and your internal fire has no water to cool it.
        </p>
        <p className="text-text2 leading-relaxed">
          In this model, impatience isn&apos;t about willpower or being a &quot;Type A&quot; personality. It&apos;s about an internal environment that&apos;s running too hot. Cool the system, and the fuse gets longer naturally.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind the Short Fuse
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the classic pattern for chronic impatience. About 8% of people fall into this group. Their energy tends to pool and stagnate, creating internal pressure that looks for release. Impatience is one of the most common expressions of that pressure.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People with this pattern often describe feeling like a pot about to boil over. They sigh frequently, feel tension in their chest and ribs, and notice that their mood shifts quickly. The stuck energy creates a constant low-grade irritability that flares up whenever something adds even a small amount of additional pressure.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">Qi Stagnant Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling foods can help take the edge off. Celery, cucumber, watermelon, mung bean soup, and green leafy vegetables are all traditionally used to clear heat from the Liver. Think of these as natural coolant for a system that&apos;s running too hot. You don&apos;t need to eat only these foods. Just add them to your regular meals.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid foods that add fuel to the fire. Spicy foods, fried foods, heavy alcohol use, and excessive coffee all generate more internal heat. If you&apos;re already running hot, these are like throwing gasoline on a bonfire. You don&apos;t have to cut them out completely. Just notice the difference on days when you have them versus days when you don&apos;t.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Get enough sleep. This is non-negotiable for impatience. Sleep replenishes Yin, and Yin is what keeps your internal fire from burning out of control. If you&apos;re consistently sleeping less than seven hours, your patience is paying for it whether you realize it or not.
        </p>
        <p className="text-text2 leading-relaxed">
          Move, but not aggressively. Intense, competitive exercise can actually make Liver Fire worse because it adds more heat and pressure to an already overheated system. Gentle, rhythmic movement like walking, swimming, or easy cycling is better for circulating stuck energy without cranking up the internal thermostat.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your impatience is accompanied by rage, aggression, thoughts of harming yourself or others, or if it&apos;s significantly affecting your relationships and daily life, please consult a licensed healthcare provider. Chronic anger and irritability can sometimes be associated with conditions that need proper medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">Stuck Energy Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-so-irritable" className="text-sm text-accent no-underline hover:underline">Why Am I So Irritable?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-sm text-accent no-underline hover:underline">Why Are My Moods All Over the Place?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
