
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyCryEasilyArticle() {
  const slug = "why-do-i-cry-so-easily"

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
        Why Do I Cry So Easily? The Faucet With No Off Switch
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          A sad commercial comes on and you&apos;re reaching for tissues. Someone says something slightly kind and your eyes well up. You get a little frustrated and before you know it, there are tears running down your face at your desk. It&apos;s not that you want to cry. The faucet just turns on by itself, and the off switch doesn&apos;t seem to work.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People tell you you&apos;re too sensitive. Maybe you&apos;ve started believing them. You try to hold it together in meetings, at dinner, in conversations that shouldn&apos;t be emotional. Sometimes you succeed. Often you don&apos;t. The tears come regardless of whether the situation calls for them.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, easy crying isn&apos;t a sign of weakness or being &quot;too emotional.&quot; It&apos;s often a sign that emotional energy is bottled up with nowhere to go, and tears are the pressure release valve. Understanding why the pressure is there in the first place can change how you see this entirely.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Easy Crying Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this sounds familiar, you probably recognize some of these:
        </p>
        <ul className="space-y-2">
          {[
            "Tearing up at commercials, movies, or songs that aren't even that sad",
            "Crying when you're frustrated, not just when you're sad",
            "Someone being kind to you makes you cry unexpectedly",
            "You apologize for crying even though you can't control it",
            "Tears come at inconvenient times: work, restaurants, casual conversations",
            "You feel like your emotions are closer to the surface than other people's",
            "It gets worse before your period or when you're tired",
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
          The Common Explanations (And Their Limits)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Hormones are the usual explanation, and they&apos;re a real factor. Many women notice increased crying in the days before their period, during pregnancy, or during perimenopause. That&apos;s genuine. Thyroid imbalances, certain medications, and vitamin deficiencies can also make you more emotionally reactive.
        </p>
        <p className="text-text2 leading-relaxed">
          But hormones don&apos;t explain everything. Some people cry easily throughout their entire cycle. Some men experience the same pattern. And many people with hormonal changes don&apos;t cry easily at all. There&apos;s something else going on, something related to how emotional energy moves through your body.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Easy Crying
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the Liver is in charge of the smooth flow of emotions. When Liver Qi is flowing well, emotions move through you naturally. You feel something, process it, and it passes. When Liver Qi is stagnant, emotions get bottled up. They don&apos;t process and move on. They accumulate, building pressure inside you like a closed pot of water coming to a boil.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Heart also plays a role. In TCM, the Heart is the seat of emotional experience. When the Heart is overactive or unsettled, emotional responses get amplified. A small sadness feels enormous. A tiny frustration feels overwhelming. It&apos;s not that the emotion is bigger. It&apos;s that your internal volume is turned up.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a pressure cooker. When everything is flowing properly, steam releases gradually through the valve. When the system is clogged, pressure builds until it escapes all at once, sometimes at the slightest touch. The tears aren&apos;t the problem. They&apos;re the release valve on a system that&apos;s too full. The question is why the system is so full in the first place.
        </p>
        <p className="text-text2 leading-relaxed">
          For many women, this gets noticeably worse before their period. In TCM, Blood moves downward during menstruation, and Liver Qi tends to rise upward when Blood isn&apos;t anchoring it. The result is more emotional pressure in the chest and head, which means more tears for what seems like no reason.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Tears
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Two body types are most associated with easy crying.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the primary one. About 8% of people have this pattern. Their energy tends to pool and get stuck rather than flow freely, creating emotional pressure that looks for any outlet it can find. Tears are one of the easiest exits. These people often sigh frequently, feel chest tightness, and describe a sensation of something being &quot;stuck&quot; in their chest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) can also cry easily, but for a different reason. Their system doesn&apos;t have enough energy to contain emotions properly. It&apos;s like a cup with low walls. Even a small amount of water overflows. They cry not because the pressure is high, but because their capacity to hold emotions is low.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">Qi Stagnant Type →</Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">Qi Deficient Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Move the energy before it builds up. Physical movement is one of the most effective ways to keep Liver Qi flowing. A daily walk, gentle stretching, dancing, swimming. It doesn&apos;t need to be intense. The point is to keep things circulating so emotional pressure doesn&apos;t accumulate in the first place.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Rose tea and chrysanthemum tea are traditional choices for smoothing Liver Qi and calming the Heart. Rose tea specifically targets emotional stuckness. Chrysanthemum clears heat from the Liver, which can help when the easy crying comes with frustration or irritability. A cup in the afternoon can make a noticeable difference.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Jujube dates (red dates) nourish Heart Blood and calm the mind. In TCM, they&apos;re one of the most commonly recommended foods for emotional stability. You can eat them as a snack, steep them in hot water as tea, or add them to soups. Five or six a day is a typical amount.
        </p>
        <p className="text-text2 leading-relaxed">
          Give yourself permission to cry. It sounds counterintuitive, but fighting the tears often makes the pattern worse. In TCM, suppressing emotions creates more stagnation, which creates more pressure, which creates more tears. Sometimes the fastest way through is to let it out without judgment and then look at what&apos;s building up the pressure underneath.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your crying is accompanied by persistent sadness, hopelessness, loss of interest in activities, or thoughts of self-harm, please reach out to a licensed mental health professional. These can be associated with depression or other conditions that deserve proper support and treatment.
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
          <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-sm text-accent no-underline hover:underline">Why Are My Moods All Over the Place?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">Why Do I Feel Anxious?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
