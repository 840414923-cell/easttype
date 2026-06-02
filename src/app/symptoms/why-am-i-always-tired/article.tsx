
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysTiredArticle() {
  const slug = "why-am-i-always-tired"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Always Tired</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Tired? What Your Body Is Trying to Tell You
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          If you're always tired even after a full night's sleep, you're not alone. You've probably heard "get more sleep" or "exercise more" so many times it makes you want to scream. But what if the problem isn't how much you sleep? What if your body is just running low on something sleep can't fix?
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          I spent years thinking I was just "not a morning person" or "lazy." Turns out, my body was low on Qi — the energy that powers everything from digestion to thinking clearly. Once I understood this pattern, things started making sense in a way they never had before.
        </p>
        <p className="text-text2 leading-relaxed">
          This isn't about being dramatic. Chronic low energy affects your work, your relationships, your willingness to try new things. It quietly shrinks your life. Let's talk about what might actually be going on underneath.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What's Really Behind the Constant Tiredness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Let's be honest: being tired all the time isn't normal, even though it's common. The usual suspects are poor sleep, bad diet, too much screen time, or not enough exercise. And sure, those things matter. But many people fix all of those and still feel like a phone stuck on 5% battery. That's when it's worth looking deeper.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sometimes it's low iron, thyroid issues, or vitamin deficiencies. Your doctor can check those. But here's the thing a lot of people run into: the blood work comes back totally fine, and you're told everything looks normal. Great. But you still feel like garbage. That gap between "normal test results" and "I can barely get through the afternoon" is exactly where Eastern body wisdom has something useful to say.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine doesn't look at your blood. It looks at how your body functions — how well you digest, how warm your hands are, whether you sweat easily, how your voice sounds. These seemingly random details form a pattern, and that pattern tells a story about what your body needs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Views Chronic Fatigue
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, the most common pattern behind "always tired" is called Qi Deficiency (气虚). Qi is your body's vital energy — think of it as the fuel running every single function, from your heartbeat to your thoughts. When Qi is low, nothing breaks exactly, but everything runs slower and costs more effort.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here's a useful comparison. Imagine your body is a car. Western medicine checks the oil, the fuel, the spark plugs. If those test fine, the car is "healthy." Chinese medicine goes a step further and asks: but how does the engine feel when you drive it? Does it struggle on hills? Does it idle roughly? Those functional experiences matter, even if the diagnostics say everything is fine.
        </p>
        <p className="text-text2 leading-relaxed">
          Qi Deficiency is often linked to a few root causes: prolonged stress that wears you down over months, recovering from an illness that your body never fully bounced back from, eating too many cold and raw foods that force your digestive system to work overtime, or simply a constitutional tendency you were born with. The good news is that Qi can be supported and built up over time with the right approach.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Are Most Affected
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 distinct body types, and chronic fatigue shows up most often in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the primary one. About 15% of people fall into this pattern. The hallmark is feeling wiped out even after adequate rest. People with this type often have a soft voice, sweat easily, catch colds more often, and prefer sitting over standing. It's like their battery is genuinely smaller than other people's.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the second. These folks feel tired AND cold. Their internal heater is underpowered, so their body cuts circulation to the extremities to protect core warmth. If you're always tired and your hands are like ice cubes, this might be your pattern.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Simple Changes That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          You don't need to flip your life upside down. Small shifts can stack up surprisingly fast. The biggest one: switch from cold, raw foods to warm, cooked meals. Your digestive system in TCM is like a cooking pot. If you throw ice-cold ingredients in, the pot has to spend energy heating everything up before it can even start digesting. For someone already low on Qi, that's energy you simply can't afford to waste.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Try starting your day with a bowl of congee (rice porridge) instead of dry cereal or toast. Congee is the number one recovery food in Chinese households because it takes almost zero digestive effort and delivers steady nourishment. Add a cup of warm ginger tea with a few jujube dates on the side. Most people with Qi Deficiency notice a real difference within two weeks of this simple swap.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Go easy on caffeine. I know, I know. But TCM views coffee as borrowing energy from tomorrow to spend today. It doesn't create new Qi. It just stimulates what's already there. Over time, the debt catches up with you. If you can't quit entirely, try cutting back by half and replacing some cups with warm ginger tea or ginseng tea.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Move, but gently. Heavy workouts can actually drain Qi further if you're already depleted. Think walking, gentle yoga, tai chi, or even just 15 minutes of slow stretching. The goal is circulation, not exhaustion. You want to wake your body up, not beat it into submission.
        </p>
        <p className="text-text2 leading-relaxed">
          Get to bed before 11 PM. In TCM, the body clock matters. The hours before midnight are considered the most restorative for your Qi. Staying up past 11 consistently is like trying to fill a bucket with a hole in it. You can catch up later, but you'll never quite recover what you lost during those prime hours.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            Low Vitality Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Anxious?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
