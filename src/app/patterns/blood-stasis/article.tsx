
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function BloodStasisArticle() {
  const slug = "blood-stasis"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">Patterns</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Blood Stasis</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Blood Stasis Pattern: When Everything Flows Just Not Fast Enough
      </h1>
      <p className="text-text2 text-sm mb-10">
        9 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Some people bruise at the slightest bump. Their hands and feet go numb even when they haven&apos;t been sitting in a weird position. They get dull, aching pains that linger in one spot. Their complexion has a dusky, almost purplish tint. Things are moving in their body, just not fast enough.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, this slowdown in circulation is called Blood Stasis. It&apos;s not that nothing moves. It&apos;s that things move too slowly, and the areas downstream don&apos;t get the nourishment they need while waste doesn&apos;t clear the way it should. The result is a body that feels sluggish, achy, and prone to spots that just never quite heal right.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What the Blood Stasis Pattern Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with this pattern recognize 3 or more of these signs:
        </p>
        <ul className="space-y-2">
          {[
            "You bruise easily and marks take a long time to fade",
            "You get dull, aching pain that stays in one spot",
            "Your hands or feet often feel numb or tingly",
            "You notice dark spots or patches on your skin",
            "Your complexion looks dusky or slightly purplish",
            "You feel better with warmth and movement",
            "Your menstrual flow is dark with clots (if applicable)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Think of It Like This
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Imagine a river that&apos;s still flowing but filled with silt. The water moves, but slowly. Debris collects along the banks. Areas downstream don&apos;t get enough fresh water, and the sediment builds up in stagnant pools. It&apos;s not a dam. It&apos;s not a drought. It&apos;s just a river that has lost its momentum.
        </p>
        <p className="text-text2 leading-relaxed">
          That&apos;s what Blood Stasis feels like inside your body. Your blood is circulating, but not with enough force to reach every corner. Areas that don&apos;t get enough fresh blood become numb, achy, or discolored. Waste products that should be swept away linger instead. The solution isn&apos;t to add more water to the river. It&apos;s to get the current moving again so everything flows the way it&apos;s supposed to.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM Concept Behind This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine calls this Blood Stasis (血瘀, pronounced &quot;shway-yoo&quot;). In TCM theory, blood is responsible for nourishing the tissues and organs. When blood flow becomes sluggish, the areas it should be feeding don&apos;t get what they need, and the waste it should be carrying away starts to accumulate.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Blood Stasis is different from Cold Sensitivity, though they can overlap. Cold Sensitivity is primarily about Yang deficiency, where the body lacks the warmth to function well. Blood Stasis is specifically about impaired movement. Warming things up can help, but what Blood Stasis really needs is circulation. This pattern can be associated with prolonged sitting, physical trauma, chronic illness, or emotional stuckness that gradually slows the body&apos;s internal currents.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Foods That May Help (and Harm)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              Flow-Supporting Foods
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Black pepper",
                "Ginger",
                "Turmeric",
                "Rose tea",
                "Hawthorn",
                "Vinegar",
                "Dark-colored foods (black beans, black sesame)",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              Stagnation-Worsening Foods
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Cold foods and drinks (ice water, frozen treats)",
                "Excessive raw food",
                "Heavy greasy meals",
                "Too much salt",
                "Highly processed foods",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Simple Changes That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Move your body regularly. This is the single most important thing you can do for Blood Stasis. Your circulation responds to movement. A daily 20-minute walk can be associated with significant improvement because it gets your blood flowing without overtaxing your system. You don&apos;t need to run a marathon. You just need to keep the river moving.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Add gentle stretching to your day. Stretching opens up the areas where blood tends to pool and stagnate, especially the shoulders, hips, and lower back. Even five minutes of gentle stretching in the morning can help get things flowing. Think of it as clearing the silt from the riverbanks so the water can move more freely.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid prolonged sitting. If you work at a desk, stand up and move around every 45 minutes or so. Sitting for long stretches is one of the most common causes of sluggish circulation. Your body was designed to move, and when it doesn&apos;t, things slow down. Small breaks throughout the day can make a real difference.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This information is for wellness and self-awareness, not medical diagnosis. If you experience sudden numbness, severe or worsening pain, or signs of poor circulation such as color changes in your extremities, please consult a licensed healthcare provider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <p className="text-text2 text-sm mb-3">
          These symptom guides explore specific signs connected to the Blood Stasis pattern:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-joint-pain" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Joint Pain?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-my-hands-and-feet-go-numb" className="text-sm text-accent no-underline hover:underline">
            Why Do My Hands and Feet Go Numb?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-headaches" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Headaches?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-dizzy" className="text-sm text-accent no-underline hover:underline">
            Why Do I Feel Dizzy?
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">
            Cold Sensitivity Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Body Type
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Type →
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
