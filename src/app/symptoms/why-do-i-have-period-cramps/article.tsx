
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyPeriodCrampsArticle() {
  const slug = "why-do-i-have-period-cramps"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Period Cramps</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Period Cramps? The Monthly Siege on Your Lower Belly
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You know the feeling. A few hours before your period starts, or right as it begins, a dull ache settles into your lower abdomen. Then it sharpens. Then it radiates to your lower back. Some months it&apos;s manageable. Other months you&apos;re curled up on the couch with a heating pad, canceling plans, wondering why this has to happen every single time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Period cramps, or dysmenorrhea if you want the clinical term, are one of the most common menstrual complaints. Up to 90% of women experience them at some point. For some it&apos;s a mild annoyance. For others it&apos;s genuinely debilitating, accompanied by nausea, headaches, and fatigue. The standard advice is usually ibuprofen and a hot water bottle. Helpful in the moment, but it doesn&apos;t answer the question of why your body keeps doing this.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a different way of thinking about menstrual pain. Not as a random event, but as a signal that something about the way energy and blood are moving through your body isn&apos;t quite smooth. The key word here is smooth. When things flow, there&apos;s no pain. When they get stuck, pain shows up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Period Cramps Feel Like in This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your cramps fit the Qi Stagnation or Blood Stasis pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Cramping pain in the lower abdomen before or during the first days of your period",
            "Pain that feels heavy, bearing-down, or like something is being squeezed",
            "Dark menstrual blood with clots, and the pain eases after clots pass",
            "Pain that gets worse with stress or emotional tension",
            "Breast tenderness or irritability before the cramps start",
            "Relief from warmth (heating pad, hot tea, warm bath)",
            "Pain that improves somewhat after the flow really gets going",
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
          The Traffic Jam in Your Lower Belly
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, period cramps are most often linked to two patterns: Qi Stagnation and Blood Stasis. Qi is the energy that moves everything in your body, including blood. When Qi flows freely, menstrual blood moves out smoothly and there&apos;s minimal discomfort. When Qi gets stuck, blood gets stuck too, and that stuck-ness creates pain.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a traffic jam. Your uterus is trying to shed its lining, which requires a steady flow of blood moving downward and outward. But if there&apos;s congestion upstream, the traffic backs up. Pressure builds. That pressure is pain. Once the blockage clears and the flow opens up, the pain eases. This is why many women find that their worst cramps happen on day one and then taper off. The &quot;jam&quot; is worst before the road clears.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stress is one of the biggest contributors to Qi Stagnation. The Liver system in TCM is responsible for keeping energy moving smoothly throughout the body, and it&apos;s highly sensitive to frustration, anger, and emotional tension. When you&apos;re stressed, the Liver tightens up, Qi slows down, and the first place that bottleneck shows up is often the pelvis. It&apos;s not in your head. It&apos;s a real mechanical consequence of how your body handles pressure.
        </p>
        <p className="text-text2 leading-relaxed">
          Cold is the other major factor. In Chinese medicine, cold causes contraction and slowing. If you&apos;re someone who eats a lot of cold food, drinks iced beverages, or sits on cold surfaces, that cold can settle into the uterus and make the blood move sluggishly. The clots you might see in your menstrual flow? That&apos;s blood that has congealed because it wasn&apos;t moving fast enough. Passing the clots relieves the pressure, which is why pain often eases after clots come out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How This Is Different From PMS
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Period cramps and <Link href="/symptoms/why-do-i-have-pms" className="text-accent hover:underline">PMS</Link> often get lumped together, but from an Eastern perspective they&apos;re related but not identical. PMS is about what happens before your period: mood swings, bloating, breast tenderness, food cravings. These are mostly Qi Stagnation symptoms showing up in the days leading up to the period. Cramps are about what happens during the period itself, when the stagnation has progressed to actual pain because blood needs to move but can&apos;t.
        </p>
        <p className="text-text2 leading-relaxed">
          You can have one without the other. Some women have terrible cramps but no mood symptoms. Others feel emotionally awful for a week before their period but have relatively pain-free flows. The underlying mechanism is similar, but where the stagnation shows up and how severe it gets depends on your individual pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Menstrual Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the most common match. These are people who are sensitive to stress, tend to hold tension in their bodies, and may experience mood swings or sighing frequently. Their energy tends to tighten rather than flow, and the menstrual period is when that tightness becomes most painful. About 15% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Blood Stasis type (血瘀质) is the second match. These people may have a darker complexion, experience easy bruising, and notice that their menstrual blood is darker with more clots. The blood itself is thicker and moves more slowly, creating a physical basis for pain during the period.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Ease the Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Ginger tea is one of the simplest and most effective remedies in the TCM toolkit for period cramps. Ginger warms the body, promotes circulation, and helps move stagnant blood. Slice fresh ginger, boil it for 10 minutes, and add a little brown sugar. Start drinking it a few days before your period is due.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warmth in general is your friend here. A hot water bottle on your lower abdomen isn&apos;t just comfort; from a TCM perspective it&apos;s actively helping to un-constrict the tissues and get blood flowing again. Warm baths, warm food, warm drinks. Avoid iced beverages, raw food, and sitting on cold surfaces during your period and the days before it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Movement can also help, even though it&apos;s the last thing you feel like doing. Gentle walking, stretching, or yoga can encourage Qi to circulate and prevent the stagnation from getting worse. The key word is gentle. This isn&apos;t the time for intense workouts, which can sometimes make cramps worse by redirecting blood flow away from the uterus.
        </p>
        <p className="text-text2 leading-relaxed">
          If stress is a major trigger for your cramps, and for many women it is, then addressing the stress in the weeks leading up to your period may matter more than what you do during the cramps themselves. The stagnation doesn&apos;t start on day one. It builds over the preceding weeks.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Severe period cramps can sometimes indicate conditions like endometriosis, fibroids, or adenomyosis. If your pain is getting worse over time, if pain medication doesn&apos;t help, if your cramps started suddenly after years of painless periods, or if the pain is severe enough to interfere with daily life, please consult a doctor. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
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
          <Link href="/symptoms/why-do-i-have-pms" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have PMS?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-sm text-accent no-underline hover:underline">
            Why Are My Moods All Over the Place?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
