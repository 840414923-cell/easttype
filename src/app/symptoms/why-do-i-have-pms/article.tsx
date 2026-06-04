import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyPmsArticle() {
  const slug = "why-do-i-have-pms"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Hormonal</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have PMS? The Monthly Rebellion Your Body Stages
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Every month, like clockwork, your body turns into someone you barely recognize. You&apos;re crying at dog food commercials. You&apos;re snapping at your partner for breathing too loudly. Your jeans don&apos;t fit. Your face is breaking out. And you&apos;re sitting there thinking, &quot;I know this is coming next month too, and there&apos;s nothing I can do about it.&quot;
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          PMS is so common that we&apos;ve almost normalized it. But feeling like a completely different person for a week every month isn&apos;t something you just have to live with. Some women breeze through their cycles. Others get knocked sideways. The difference isn&apos;t luck. It often comes down to what&apos;s happening internally, and Chinese medicine has been mapping those internal patterns for a very long time.
        </p>
        <p className="text-text2 leading-relaxed">
          This isn&apos;t about dismissing your experience as &quot;just hormones.&quot; It&apos;s about understanding why your body responds to its own hormonal shifts in such an extreme way, and what you can do about it beyond popping ibuprofen and waiting it out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What PMS Actually Feels Like Beyond the Textbook
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your PMS is more than just mild inconvenience, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Mood swings that flip between rage, tears, and despair within the same hour",
            "Breasts that feel swollen and tender a week before your period",
            "Bloating that makes you look three months pregnant",
            "Cravings for chocolate, carbs, or sweets that feel impossible to resist",
            "Insomnia or disrupted sleep in the days before your period",
            "Anxiety or a sense of dread that lifts the day your period starts",
            "Fatigue so heavy that getting through the afternoon feels like a marathon",
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
          Hormonal fluctuations are the direct trigger. Estrogen and progesterone rise and fall throughout your cycle, and in the days before your period, both drop sharply. That drop affects your mood, your digestion, your skin, and your energy. Some people are more sensitive to these shifts than others, and that sensitivity can be genetic.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other factors that can worsen PMS: stress (cortisol disrupts the estrogen-progesterone balance), lack of exercise, high sugar intake, too much caffeine, not enough sleep, and certain nutrient deficiencies (magnesium, B6, and calcium in particular). Thyroid issues and PCOS can also masquerade as severe PMS, so if your symptoms are extreme or getting worse, it&apos;s worth getting checked.
        </p>
        <p className="text-text2 leading-relaxed">
          But many women have normal hormone panels and still feel wrecked every month. The hormones are within range, the thyroid is fine, the ultrasound is clear. Yet the suffering is real. That gap between &quot;normal labs&quot; and &quot;I can barely function&quot; is exactly where Chinese medicine has something to say.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains PMS
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the Liver system is the star of the PMS show. Not the liver organ in the Western sense, but the Liver energy system that&apos;s responsible for the smooth flow of Qi and Blood throughout your body. When Liver Qi flows freely, everything moves well. Your emotions are even, your digestion works, your periods come and go without drama.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          But when Liver Qi gets stuck (a pattern called Liver Qi Stagnation), everything downstream gets backed up. Think of it like a traffic jam. Before your period, your body needs to move a lot of Blood and Qi downward and outward. If the Liver can&apos;t facilitate that flow, the energy gets trapped. It presses against your emotions (mood swings, irritability), your digestion (bloating, cravings), your breasts (tenderness, swelling), and your head (headaches, insomnia). It&apos;s like a pressure cooker that can&apos;t release steam.
        </p>
        <p className="text-text2 leading-relaxed">
          Stress is the biggest driver of Liver Qi Stagnation. Frustration, resentment, feeling stuck in any area of your life, these emotions literally jam up the Liver&apos;s ability to keep things flowing. That&apos;s why PMS often feels worse during stressful months and manageable during calm ones. Your emotional life and your menstrual cycle are connected in a very concrete way in TCM.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Most Affected by PMS
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, one is the classic PMS sufferer.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the primary match. These people are like tightly wound springs. They feel things deeply, tend to hold in frustration, and their energy doesn&apos;t flow smoothly. When their period approaches and the body needs extra flow, the already-stagnant Qi gets even more stuck. The result is intense premenstrual symptoms that clear up almost magically once the period starts and things finally get moving. About 8% of people fall into this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          These folks often have a tense feeling in their chest or ribs, sigh frequently, feel worse with stress, and notice that exercise or a good cry makes them feel temporarily better. That&apos;s because both movement and emotional release help stagnant Qi start flowing again.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Ease the Monthly Storm
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The number one strategy: keep things moving. Movement is the antidote to stagnation. A daily walk, gentle yoga, stretching, swimming, or dancing in your kitchen. It doesn&apos;t have to be intense. It just has to be consistent. Women who move regularly tend to have milder PMS because their Qi doesn&apos;t get as stuck.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In the week before your period, be extra kind to yourself. Reduce caffeine (it adds to the tension), eat warm, cooked foods (easier on digestion when it&apos;s already under stress), and try rose tea or chrysanthemum tea. Both are traditional choices for moving Liver Qi. Rose is particularly good for emotional stuckness. It&apos;s like a gentle nudge to your Liver system saying, &quot;Hey, it&apos;s okay to let things flow.&quot;
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid ice-cold foods and drinks. Cold causes contraction, and contraction is the opposite of flow. During the premenstrual week, stick to warm meals, warm drinks, and even a warm water bottle on your lower belly. The warmth physically helps things move and reduces cramping and clotting.
        </p>
        <p className="text-text2 leading-relaxed">
          Process emotions as they come. One of the most practical TCM insights about PMS is that unprocessed emotions contribute to Qi stagnation. Journaling, talking to a friend, therapy, or even just sitting with your feelings instead of pushing them down can make a real difference. The energy of unspoken frustration has to go somewhere, and if you don&apos;t express it, your body stores it.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your PMS is severe enough to interfere with work or relationships, if you experience suicidal thoughts before your period, if your cramps are debilitating, or if your bleeding is extremely heavy, please consult a licensed healthcare provider. Severe PMS may be associated with PMDD (Premenstrual Dysphoric Disorder) or other conditions that need medical attention.
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
      <SymptomCta />
    </main>
  )
}
