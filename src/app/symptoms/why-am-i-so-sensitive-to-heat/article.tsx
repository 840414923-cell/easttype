
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhySensitiveToHeatArticle() {
  const slug = "why-am-i-so-sensitive-to-heat"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Temperature</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I So Sensitive to Heat? The AC That Broke Down
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Everyone else is comfortable. The office thermostat is set to a perfectly reasonable temperature. Your coworker is in a cardigan. You&apos;re sitting there feeling like someone cranked the oven on, wondering if you&apos;re the only one who thinks this room is boiling. You&apos;re not imagining it. Your body just processes heat differently.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Heat sensitivity isn&apos;t about being picky. It&apos;s about how your body regulates its internal temperature. Some people have a robust cooling system that handles warm weather, heated rooms, and summer afternoons without breaking a sweat. Others feel like their internal AC gave out years ago and nobody came to fix it.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;re the person who dreads summer, opens windows in winter, and can&apos;t sleep without the fan pointed directly at your face, there might be a reason rooted in how your body&apos;s energy is distributed. Eastern medicine has a framework for this, and it starts with understanding what keeps your body cool from the inside.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What It Feels Like
        </h2>
        <ul className="space-y-2 mb-3">
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Feeling uncomfortably warm in rooms where others are fine
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Sensitivity that gets worse in the afternoon and evening
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Dry mouth, dry skin, or feeling thirsty often alongside the warmth
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Restless sleep from feeling too warm, even with light bedding
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Flushed cheeks or a warm sensation in the palms and soles
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Stuff First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before looking at Eastern explanations, it&apos;s worth checking the standard medical causes. An overactive thyroid (hyperthyroidism) can make you heat-sensitive and is easily checked with a blood test. Perimenopause and menopause are common reasons women become heat-sensitive, often with hot flashes that come and go. High blood pressure can sometimes make you feel warmer than usual.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Certain medications, including antidepressants and blood pressure drugs, can affect how your body regulates temperature. Dehydration is another simple cause: if you&apos;re not drinking enough water, your body has less fluid available for sweating and cooling.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;ve ruled those out and you&apos;re still the person who melts while everyone else is fine, the Eastern perspective has a specific explanation that connects heat sensitivity to your body&apos;s internal cooling capacity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains Heat Sensitivity
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, Yin is the body&apos;s cooling system. It&apos;s the moistening, calming, temperature-regulating force. Yang is the warming, active force. They balance each other. When Yin is sufficient, your body stays cool under pressure. When Yin is low, your body&apos;s AC breaks down and heat builds up without enough cooling capacity to manage it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a house with central air. The AC unit (Yin) is supposed to run steadily in the background, keeping the temperature comfortable. When the AC is underpowered or the refrigerant is low, the house heats up, especially in the afternoon when the sun beats down hardest. The structure is fine. The furnace works. It&apos;s just that the cooling side can&apos;t keep up.
        </p>
        <p className="text-text2 leading-relaxed">
          This is different from hot flashes, which are sudden surges of heat that come and go. Heat sensitivity from Yin Deficiency is more of a steady state. You&apos;re just always running a little warmer than you should be, and it gets worse as the day goes on. In TCM, Yang energy peaks in the afternoon and evening. If Yin can&apos;t balance that peak, you feel it most during those hours.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Run Hot
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary pattern associated with heat sensitivity. Roughly 10% of people fall into this category. They tend to have a thin build, feel warm easily, and struggle with dryness in various forms: dry skin, dry throat, dry eyes. Their internal cooling reservoir is simply lower than what&apos;s needed to handle heat gracefully.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People with this body type often say they &quot;hate summer&quot; or &quot;can&apos;t do saunas.&quot; They prefer cool weather, air-conditioned rooms, and cold drinks. They may also notice that they feel their best in the morning when Yin is relatively stronger, and their worst in the late afternoon and evening when the heat builds.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling, moistening foods are the foundation. Cucumber, watermelon, mung bean soup, and mint tea are all traditional choices for supporting the body&apos;s Yin. These aren&apos;t random picks. Each has been observed over centuries to have a cooling effect on the body. Mung bean soup in particular is a summer staple in many Chinese households for exactly this reason.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Pears, lotus root, tofu, and lily bulb are other Yin-friendly foods. A simple habit: have a poached pear with a drizzle of honey in the evening. It&apos;s gentle, cooling, and easy to make.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          On the avoid list: spicy food, fried food, and alcohol. These all add heat to a system that&apos;s already struggling to cool down. That&apos;s not to say you can never have spicy food again. But if you notice your heat sensitivity gets worse the day after a spicy curry or a night of drinking, that&apos;s useful feedback about what your body does and doesn&apos;t need.
        </p>
        <p className="text-text2 leading-relaxed">
          Protect your sleep, especially the hours before midnight. In the TCM body clock, Yin is replenished during the early night. Late nights and screen time before bed deplete Yin further. Getting to bed by 10:30 or 11 PM consistently is one of the most impactful changes you can make for heat sensitivity.
        </p>
      </section>

      <section className="mb-10">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
            When to See a Doctor
          </h2>
          <p className="text-text2 leading-relaxed mb-3">
            Heat sensitivity that comes on suddenly or is accompanied by rapid heartbeat, unexplained weight loss, or anxiety should be evaluated by a doctor. An overactive thyroid is the most common medical cause and is easily checked.
          </p>
          <p className="text-text2 leading-relaxed mb-3">
            If heat sensitivity comes with hot flashes and you&apos;re in the perimenopausal age range, talk to your doctor about hormone-related options. There are effective medical approaches that can help.
          </p>
          <p className="text-text2 leading-relaxed text-sm">
            This article is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
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
          <Link href="/symptoms/why-do-i-have-hot-flashes" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Hot Flashes?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-thirsty" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Thirsty?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
