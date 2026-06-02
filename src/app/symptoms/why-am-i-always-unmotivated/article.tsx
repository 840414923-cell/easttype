
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function UnmotivatedArticle() {
  const slug = "why-am-i-always-unmotivated"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Unmotivated</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Unmotivated? The Engine That Won&apos;t Turn Over
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You know that feeling when you want to do something, anything, but your body just won&apos;t cooperate? It&apos;s not that you don&apos;t care. You do. You can picture the version of yourself that gets up early, exercises, starts projects. But somehow, between the wanting and the doing, there&apos;s a gap you can&apos;t cross.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People call it laziness. They say you just need more discipline. Try harder. Set alarms. Make lists. And maybe you&apos;ve tried all of that, and it works for about two days before you&apos;re right back where you started. Here&apos;s the thing nobody tells you: if it were just about discipline, the lists and alarms would work. The fact that they don&apos;t suggests something else is going on.
        </p>
        <p className="text-text2 leading-relaxed">
          Traditional Chinese Medicine has a different explanation for chronic low motivation, and it has nothing to do with willpower. It has to do with Qi, the energy that powers every function in your body, including the part that gets you off the couch.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Low Motivation Actually Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is you, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "You want to do things but can't seem to start, like your starter motor is broken",
            "You push through for work or family, but have nothing left for yourself",
            "Simple tasks feel disproportionately hard, like walking through waist-deep water",
            "You make plans but cancel them because the effort of going feels overwhelming",
            "Your to-do list sits untouched for days, not because you forgot, but because starting feels impossible",
            "You feel guilty about not doing more, which drains even more energy",
            "Weekends disappear into the couch and you can't explain where the time went",
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
          The Obvious Causes (Worth Checking First)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before looking at Eastern frameworks, check the basics. Depression is the most common medical cause of persistent low motivation, and it&apos;s worth talking to a professional if you also experience hopelessness, loss of interest in things you used to enjoy, or changes in appetite and sleep. ADHD can also show up as difficulty initiating tasks, especially ones that aren&apos;t immediately rewarding.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other possibilities: vitamin D deficiency (surprisingly common and directly linked to motivation), iron deficiency, thyroid issues, chronic sleep deprivation, burnout from prolonged stress, and side effects of certain medications. If you haven&apos;t had basic blood work done recently, that&apos;s a reasonable first step.
        </p>
        <p className="text-text2 leading-relaxed">
          But what if you&apos;ve checked all of that and everything comes back normal? What if you&apos;re not depressed, your vitamins are fine, your thyroid works, and you still can&apos;t get going? That&apos;s where the Eastern perspective offers something useful.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Low Motivation
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, motivation is powered by Qi. Qi is your body&apos;s vital energy, and it does more than keep your heart beating. It&apos;s the force that gets you out of bed, gives you the drive to pursue goals, and sustains effort through challenges. When Qi is low, motivation drops not because you don&apos;t care, but because your body literally doesn&apos;t have the energy to care. It&apos;s like a car with a dead battery. The engine is fine. The fuel is there. But nothing turns over.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This pattern is called Qi Deficiency (气虚), and it&apos;s one of the most common constitutional patterns in TCM. The tricky part is that Qi Deficiency creates a vicious cycle. Low motivation leads to inactivity, which leads to weaker Qi, which leads to even lower motivation. Breaking this cycle isn&apos;t about pushing harder. It&apos;s about giving your body the fuel it needs so that getting started doesn&apos;t feel like moving a mountain.
        </p>
        <p className="text-text2 leading-relaxed">
          There&apos;s a second pattern that contributes to low motivation: Yang Deficiency (阳虚). Yang is your body&apos;s warming, activating force. When Yang is low, everything feels like it takes more effort than it should. Cold hands, cold feet, craving warmth, and a general sense that your internal engine is idling too low. If you&apos;re unmotivated and always cold, Yang Deficiency may be part of the picture.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Flatline
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and low motivation shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the primary match. About 15% of people fall into this pattern. Their battery is genuinely smaller. They start the day with less charge and drain it faster. Simple tasks cost more energy than they should. It&apos;s not that they&apos;re lazy. It&apos;s that their body runs on a smaller fuel tank than other people&apos;s.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) experiences low motivation differently. Their body&apos;s internal heater is underpowered, so everything feels harder because it literally takes more energy to do anything when your body is running cold. These are the people who need three blankets at night and still feel chilly. About 10% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
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
          Getting the Engine to Turn Over
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The single biggest shift: change what you eat. Your digestive system in TCM is like a cooking pot. Cold, raw, and sugary foods force that pot to work overtime just to heat things up. For someone already low on Qi, that&apos;s energy being wasted on digestion instead of motivation. Switch to warm, cooked meals. Congee (rice porridge) with jujube dates and ginger for breakfast. Soups and stews for lunch and dinner. It sounds too simple to work, but most people notice a real difference within 2 to 3 weeks.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Move, but gently. This is counterintuitive because when you have zero motivation, exercise sounds impossible. But in TCM, movement generates Qi. You don&apos;t need a gym session. A 15-minute walk is enough. The goal isn&apos;t to burn calories. It&apos;s to get your Qi circulating. Once it starts moving, you may find that the motivation follows. Not the other way around.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If you run cold along with being unmotivated, add warming foods: ginger, cinnamon, lamb, beef, and black pepper. Warm foot soaks before bed can also help stoke your internal furnace. Avoid ice water, raw salads, and excessive fruit, which cool your body further.
        </p>
        <p className="text-text2 leading-relaxed">
          Go to bed before 11 PM. The hours before midnight are the most restorative for Qi in TCM. Staying up late consistently is like trying to charge your phone with a frayed cable. Some charge gets through, but never enough to reach full.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your low motivation is severe, getting worse, or accompanied by feelings of hopelessness, loss of interest in activities, or thoughts of self-harm, please consult a licensed healthcare provider. Chronic low motivation can sometimes be connected to conditions that need proper medical attention.
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
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-get-sick-so-often" className="text-sm text-accent no-underline hover:underline">
            Why Do I Get Sick So Often?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}