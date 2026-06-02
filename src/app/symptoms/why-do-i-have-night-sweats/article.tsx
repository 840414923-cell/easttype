
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function NightSweatsArticle() {
  const slug = "why-do-i-have-night-sweats"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Night Sweats</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Night Sweats? What Your Body Is Trying to Tell You
      </h1>
      <p className="text-text2 text-sm mb-10">7 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You wake up and the sheets are damp. Your pillow has a wet patch. Maybe your pajamas are stuck to your back. You haven't been running a fever. The room isn't that hot. You didn't just have a nightmare about showing up to a meeting unprepared. You're just... sweating. At 2 or 3 in the morning. Again.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is one of those symptoms that sits in an uncomfortable gray zone. Your doctor runs blood work, checks your thyroid, asks about menopause, and everything comes back normal. Which is reassuring in one sense and completely unhelpful in another, because you're still waking up in a puddle.
        </p>
        <p className="text-text2 leading-relaxed">
          Night sweats can be associated with a lot of things: hormonal changes, infections, certain medications, anxiety. If yours are new, severe, or accompanied by fever or weight loss, please talk to your doctor. But if you've been checked out and the answer is "we can't find anything wrong," there's a perspective from Eastern medicine that might make sense of what's happening.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What's Really Going On
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, night sweats are most often linked to a concept called Yin Deficiency. Yin is the cooling, moistening, resting part of your body's energy. It's what keeps things calm and contained. Yang is the warming, active part. They balance each other out, like the cold and hot taps on a faucet.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Yin is low, there isn't enough cooling force to keep internal heat in check, especially at night when Yang is supposed to retreat. The heat pushes outward, and your body sweats to try to cool itself down. Think of it like a car with a broken radiator. The engine runs fine for a while, but without enough coolant, it starts overheating, especially when it's been running all day.
        </p>
        <p className="text-text2 leading-relaxed">
          This is why night sweats from a TCM perspective often come with other signs: feeling warm at night, dry mouth, restless sleep, maybe a flushed face in the afternoon. These aren't random. They're all part of the same pattern of insufficient cooling capacity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Are Most Affected
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the one most associated with night sweats. Roughly 10% of people fall into this category. These are people who tend to run warm, feel dry (dry skin, dry throat, dry eyes), and have a thin build. They often describe themselves as someone who "can't handle heat" or "always feels thirsty." Their internal cooling reservoir is simply lower than average, so the body has less margin before heat starts pushing through.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other patterns can also play a role. Someone with Qi Deficiency might sweat from sheer exhaustion, where the body can't hold things in. But the classic "drenching sweat in the second half of the night" pattern points most often to Yin Deficiency.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Simple Changes That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Yin-nourishing foods are the foundation here. Pear, lily bulb, black sesame, tofu, and mung bean soup are all traditional choices for supporting the body's cooling and moistening functions. These aren't exotic ingredients in many Asian households, and they're easy to incorporate. A poached pear with rock sugar before bed is a simple old remedy that many people swear by.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          On the flip side, some foods may make things worse. Spicy food, alcohol, lamb, and excessive coffee can all add heat to a system that's already struggling to cool down. This doesn't mean you can never have curry or a glass of wine. It means being aware that these tend to nudge things in the wrong direction if night sweats are already an issue.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Getting to bed before 11 PM matters more than most people think. In the TCM body clock, the hours before midnight are considered the most important for replenishing Yin. Every hour of sleep before midnight is said to be worth two hours after. Whether that's literally true or not, the general principle lines up: your body does its deepest repair work in the early part of the night.
        </p>
        <p className="text-text2 leading-relaxed">
          Cooling down before sleep can also help. A lukewarm (not cold) shower, a few minutes of slow breathing, or even just washing your face with cool water. The idea is to give your body a signal that it's time to shift into rest mode. Screens off, lights low, temperature comfortable. Small signals that add up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Night sweats can sometimes signal something that needs medical attention. If the sweating is drenching, enough to soak through clothes and sheets regularly, that's worth getting checked. If it's persistent, lasting for weeks without a clear reason, see a doctor. If it comes with fever, unexplained weight loss, or swollen lymph nodes, don't wait. This article is about the common pattern where everything checks out fine and you're still sweating, but the responsible thing is to rule out the serious stuff first.
        </p>
        <p className="text-text2 leading-relaxed text-sm">
          This article is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            Internal Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3 AM?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
