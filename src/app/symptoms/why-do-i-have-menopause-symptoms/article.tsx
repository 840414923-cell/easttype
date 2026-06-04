
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyMenopauseSymptomsArticle() {
  const slug = "why-do-i-have-menopause-symptoms"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Menopause Symptoms</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Menopause Symptoms? The Thermostat That Lost Its Manual
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You used to be fine. A normal person with a normal body temperature who slept through the night and didn&apos;t think twice about it. Now you&apos;re hot, then cold, then hot again. You wake up at 3 AM in a sweat. Your skin feels dry and papery. Your mood swings without warning. Your joints ache. And everyone around you acts like this is just something you have to live with because you&apos;re &quot;at that age.&quot;
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Menopause is not a disease. Let&apos;s start there. It&apos;s a transition, a natural shift in the body&apos;s hormonal landscape that every woman goes through. But &quot;natural&quot; doesn&apos;t mean &quot;easy,&quot; and it doesn&apos;t mean you just have to suffer through it. Some women glide through menopause with barely a symptom. Others feel like their body has been hijacked. The difference often comes down to what your baseline looks like before menopause starts.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, menopause is understood as a natural decline in Yin. Yin is the cooling, moistening, anchoring force in the body. When Yin drops, the body loses its ability to regulate temperature, stay moist, and keep things calm. The symptoms you&apos;re feeling aren&apos;t random. They&apos;re all different expressions of the same underlying shift.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Menopause Symptoms Look Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your menopause symptoms fit a Yin Deficiency pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Hot flashes that come on suddenly, often worse in the afternoon or evening",
            "Night sweats that wake you up, sometimes drenching",
            "Dry skin, dry eyes, dry mouth, or vaginal dryness",
            "Mood changes: irritability, anxiety, or feeling emotionally fragile",
            "Difficulty falling or staying asleep",
            "Feeling warm internally even when the room is comfortable",
            "A sense that your internal thermostat is completely unreliable",
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
          The Bank Account Running Low
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, Yin and Yang are like a bank account and the spending that comes out of it. Yin is the savings. Yang is the spending. When you&apos;re young, the account is full. The body has plenty of cooling, moistening reserve to draw on. You can stay up late, eat spicy food, handle stress, and your body bounces back because there&apos;s plenty in the tank.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          As you get older, the account gradually depletes. This is normal and expected. Menopause is the point where the balance gets low enough that you start noticing the shortfall. Not enough Yin to cool the body? <Link href="/symptoms/why-do-i-have-hot-flashes" className="text-accent hover:underline">Hot flashes</Link>. Not enough Yin to keep things moist? Dryness everywhere. Not enough Yin to anchor the mind and emotions? Irritability and anxiety. Not enough Yin to keep the heat contained at night? <Link href="/symptoms/why-do-i-have-night-sweats" className="text-accent hover:underline">Night sweats</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s one problem with many faces. Western medicine would treat hot flashes, dryness, and mood changes as separate issues. TCM sees them as branches of the same tree. The root is Yin declining faster than the body can adapt.
        </p>
        <p className="text-text2 leading-relaxed">
          Some women start menopause with more Yin in reserve than others. If you&apos;ve spent decades burning the candle at both ends, running on stress, skipping sleep, and eating foods that deplete rather than nourish, you&apos;re going to hit the transition with less in the bank. If you&apos;ve been relatively balanced, the decline is gentler and the symptoms are milder. This isn&apos;t about blame. It&apos;s about understanding why two women the same age can have completely different menopause experiences.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Menopausal Discomfort
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary match. These are people who have always run a little warm, tend toward dryness, and have a thinner build. About 10% of the population falls into this category. When menopause hits, they feel it hardest because they were already operating with less cooling reserve than average. The hot flashes, the night sweats, the dry skin, it&apos;s all an amplification of what was already there.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the second factor. Menopause is a time of change, and change creates stress. Stress creates Qi Stagnation. Qi Stagnation makes everything worse. The emotional swings of menopause aren&apos;t just hormonal. They&apos;re also the Liver system tightening up under the pressure of a body that&apos;s changing faster than it can adapt. Managing stress during this transition isn&apos;t a luxury. It&apos;s part of the support.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help During the Transition
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling and moistening foods are the cornerstone of TCM support for menopause. Tofu, pear, black sesame, tremella mushroom, and lily bulb are all traditional Yin-nourishing foods. These aren&apos;t exotic supplements. They&apos;re regular foods that happen to support the body&apos;s cooling and moistening functions. A bowl of tremella soup with pear and rock sugar is a traditional remedy that women in China have been making for generations during this transition.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Black sesame seeds, ground and mixed into warm water or sprinkled on food, are another simple daily habit. They nourish the blood and support Yin. In many Asian households, black sesame soup is a standard recipe for women going through menopause. The wisdom is already in the food culture.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sleep becomes non-negotiable. Yin replenishes during rest, especially the hours before midnight. Going to bed at 11 PM is late in the TCM clock. Going to bed at midnight or later is actively depleting. If you&apos;ve been a night owl your whole life, menopause is when the bill comes due. Protecting your sleep hours is one of the most direct ways to support Yin.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid foods and habits that burn Yin: spicy food, alcohol, excessive caffeine, late nights, and prolonged stress. These are all withdrawals from the account at a time when deposits are harder to come by. The goal isn&apos;t to be perfect. It&apos;s to be intentional about not spending what you can&apos;t afford to lose.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Menopause is a natural transition, but severe symptoms should be discussed with a healthcare provider. If hot flashes are disrupting your daily life, if you&apos;re experiencing heavy bleeding after months without a period, if mood changes are affecting your relationships, or if you have concerns about bone density or heart health, please consult a doctor. Hormone therapy and other medical options are available and may be appropriate. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
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
          <Link href="/symptoms/why-do-i-have-hot-flashes" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Hot Flashes?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
