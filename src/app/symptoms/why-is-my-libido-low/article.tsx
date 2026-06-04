import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyLibidoLowArticle() {
  const slug = "why-is-my-libido-low"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Energy</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Is My Libido Low? The Drive That Went on Strike
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s not that you don&apos;t want to want it. You do. The desire just isn&apos;t there anymore, like a radio that used to pick up the signal just fine but now only gets static. Your partner notices. You notice. And the more you think about it, the more pressure you feel, which makes the whole thing worse.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Nobody talks about this at dinner parties, but low libido is incredibly common. It&apos;s just not the kind of thing people bring up over appetizers. So you end up thinking you&apos;re the only one, which makes you feel even more broken. You&apos;re not broken. Your body is running low on something, and that something can be figured out.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine connects sexual desire to your body&apos;s deepest energy reserves. Not in a mystical way, but in a very practical &quot;your body won&apos;t spend energy on reproduction if it barely has enough to get through Tuesday&quot; kind of way. Let&apos;s unpack what that means for your specific body type.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Low Libido Actually Feels Like Beyond the Obvious
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your libido has quietly faded, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Rarely or never thinking about sex spontaneously",
            "Going through the motions without real desire or enthusiasm",
            "Feeling like your body just doesn&apos;t respond the way it used to",
            "Avoiding intimacy because it feels like another task on your to-do list",
            "Noticing that even when you try, it takes much longer to get aroused",
            "Feeling disconnected from your own body or sensuality",
            "Having the thought &quot;I could happily never have sex again&quot;",
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
          Stress is the big one. When your body is in survival mode, it shuts down non-essential functions, and reproduction is first on the chopping block. Chronic stress keeps cortisol high and suppresses the hormones that drive desire. Relationship issues are another obvious factor. Unresolved conflict, lack of emotional connection, or feeling unappreciated can tank libido faster than anything biological.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Medical causes: low testosterone (in both men and women), thyroid dysfunction, depression, anxiety, and certain medications (especially SSRIs and blood pressure medications). Hormonal changes from aging, childbirth, or menopause can also play a role. If you haven&apos;t had your hormones checked, that&apos;s a reasonable first step.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people have normal hormone levels, their relationship is fine, their stress is manageable, and the drive is still gone. It&apos;s like their body decided to go on energy-saving mode and forgot to turn the fun stuff back on. That&apos;s exactly where Chinese medicine has something to offer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Low Libido
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, sexual desire and function are governed by the Kidney system. The Kidneys store your deepest energy reserves, called Jing, which is essentially your body&apos;s savings account of vital essence. Jing is what you were born with and what you slowly spend over your lifetime. When Jing is abundant, you feel vital, your drive is strong, and your body functions well. When Jing is depleted, one of the first things to go is libido.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of your body as having an energy budget. At the top of the priority list are things like breathing, heartbeat, and keeping your organs running. In the middle are things like digestion, thinking, and moving. At the bottom of the list, the first thing your body cuts when money is tight, is sexual function. It&apos;s a luxury your body simply won&apos;t fund if it&apos;s worried about making rent.
        </p>
        <p className="text-text2 leading-relaxed">
          The two patterns most associated with low libido are Kidney Yang Deficiency and Kidney Qi Deficiency. Yang Deficiency means your internal fire is low. Everything runs cold and slow, including desire. Qi Deficiency means your overall energy is low. You&apos;re tired, running on fumes, and your body has no spare energy to allocate toward libido. In both cases, the solution isn&apos;t to push harder. It&apos;s to rebuild the reserves so your body feels safe enough to turn those systems back on.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Most Affected
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most commonly associated with low libido.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the primary match. Their body runs cold and slow. They&apos;re the people always reaching for a sweater, with cold hands and feet, low back soreness, and a general sense that their engine is idling too low. Low libido fits right into this picture. The internal fire that should fuel desire is barely lit. About 8% of people fall into this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) experiences low libido from pure exhaustion. They&apos;re tired all the time, their voice is soft, they sweat easily, and they just don&apos;t have the energy. Sex sounds nice in theory but feels like running a marathon in practice. Their body is saying &quot;I literally cannot&quot; and it means it. About 15% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Reignite the Spark
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Yang Deficiency is the pattern, warming and building are the focus. Lamb, shrimp, walnuts, chestnuts, black beans, and cinnamon are all traditional Kidney Yang tonics. A daily handful of walnuts and a cup of cinnamon tea is a simple starting point. Avoid cold foods and ice water, which literally cool down the internal fire you&apos;re trying to build.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is behind your low drive, energy building is the priority. Congee (rice porridge) with jujube dates and goji berries is a classic Kidney Qi tonic. Chicken broth, sweet potato, and warm cooked meals support overall energy production. The key is consistency. One good meal won&apos;t fix it. Two to three weeks of consistent warm, nourishing eating can make a real difference.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sleep is non-negotiable for Kidney health in TCM. Your body rebuilds its deepest reserves during sleep, especially the hours before midnight. Going to bed by 10:30 PM gives your body the recovery window it needs. If you&apos;re staying up past midnight regularly, you&apos;re spending tomorrow&apos;s energy today, and your libido is one of the first things that gets cut.
        </p>
        <p className="text-text2 leading-relaxed">
          Gentle movement helps, but the keyword is gentle. Heavy workouts drain Qi and Yang further if you&apos;re already depleted. Walking, tai chi, gentle yoga, and stretching build energy without depleting it. Think of it as charging your battery instead of draining it. Once the battery is charged enough, the body naturally starts directing energy toward functions it had put on hold, including desire.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your low libido is new, sudden, or accompanied by other symptoms like fatigue, weight changes, depression, hair loss, or hot flashes, please consult a licensed healthcare provider. Low libido can sometimes be associated with hormonal imbalances, thyroid conditions, depression, or other medical issues that need proper evaluation.
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
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Cold?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
