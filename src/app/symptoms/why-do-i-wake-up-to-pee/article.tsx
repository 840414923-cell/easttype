
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyWakeUpToPeeArticle() {
  const slug = "why-do-i-wake-up-to-pee"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Sleep</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Wake Up to Pee? The Bladder&apos;s Night Shift
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You set a glass of water on the nightstand, fall asleep, and then your bladder taps you on the shoulder at 1 AM. Then 3 AM. Then 5 AM. By morning you&apos;ve crossed the bedroom more times than you crossed the street all week. It&apos;s exhausting, and not just because of the lost sleep.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Waking up once to urinate might be normal, especially if you drank a lot before bed. But two, three, four times a night? That&apos;s not just an inconvenience. That&apos;s your body sending a message that something about its fluid management isn&apos;t working the way it should during the hours you&apos;re supposed to be resting.
        </p>
        <p className="text-text2 leading-relaxed">
          This is one of those things where Western medicine has a name for it (nocturia) but often doesn&apos;t have a satisfying answer when the obvious causes are ruled out. Eastern medicine approaches this differently, looking at how your body manages warmth and fluid at night.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What It Feels Like
        </h2>
        <ul className="space-y-2 mb-3">
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Waking up 2 or more times every night to urinate
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Large volumes of pale or clear urine each time
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Feeling cold while getting up, especially lower back and feet
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Difficulty falling back asleep after each trip
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Waking up groggy despite technically getting enough hours in bed
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Stuff First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Before diving into Eastern explanations, it&apos;s worth ruling out the straightforward causes. Drinking a lot of fluids close to bedtime is the most common reason. Alcohol and caffeine are both diuretics, meaning they tell your kidneys to produce more urine. If your evening routine includes a large tea, a beer, or a big glass of water, try cutting that out and see what happens.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For men, an enlarged prostate can press on the bladder and create the urge to go even when the bladder isn&apos;t full. For women, pelvic floor changes after pregnancy or during menopause can play a role. Urinary tract infections, diabetes, and certain blood pressure medications can also cause nighttime urination.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;ve checked all of those and everything comes back normal, the Eastern perspective offers a different lens for understanding what&apos;s going on.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains Nighttime Urination
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, the Kidneys are in charge of water metabolism and they govern the lower body. Specifically, Kidney Yang acts like a small heater in your lower abdomen that warms and processes fluids. When Kidney Yang is strong, it acts like a lid on a pot, keeping fluids contained and vaporized so your body can use them properly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Kidney Yang is low, think of a bucket with a slow leak at the bottom. Your body can&apos;t hold onto its fluids overnight. They drain downward and fill the bladder faster than they should. You wake up because the bladder signals it&apos;s full, even though you haven&apos;t been drinking. The fluid was already in your system; your body just couldn&apos;t retain and recycle it the way a healthy system does.
        </p>
        <p className="text-text2 leading-relaxed">
          This is why the urine is often pale or clear when Kidney Yang is involved. There isn&apos;t enough warmth to concentrate the fluid, so it passes through in a watery state. The pattern often comes with other cold signs: cold lower back, cold feet, a general feeling of wanting warmth.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Run This Pattern
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the one most commonly associated with nighttime urination. These people tend to feel cold overall, especially in the lower body. Their internal heater doesn&apos;t generate enough warmth to manage fluids properly at night, so the body lets them pass through instead of holding and recycling them. About 8% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) can also experience this, though the primary complaint is usually fatigue rather than temperature. Qi is the energy that holds things in place. When Qi is low, the body&apos;s ability to contain fluids may weaken, leading to leakage that shows up as frequent urination at night.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The simplest starting point: stop drinking fluids about 2 hours before bed. This isn&apos;t a cure, but it reduces the volume your kidneys need to process during the night and can cut down on trips. Sip small amounts if you&apos;re thirsty rather than downing a full glass.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Foods that strengthen Kidney Yang may help over time. Walnuts are a classic Kidney-nourishing food in TCM. A handful a day, chewed slowly, is a simple habit that many traditional practitioners recommend. Black sesame seeds are another one, often ground and mixed into warm porridge or soup. These aren&apos;t quick fixes. Think of them as small, consistent deposits into your body&apos;s warmth reserve.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Keep your lower back and feet warm at night. In TCM, the Kidney region is in the lower back, and cold seeping into this area at night can worsen the pattern. Wear socks to bed if your feet run cold. A hot water bottle on your lower back for 15 minutes before sleep can be surprisingly helpful.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid raw and cold foods in the evening. Salad, smoothies, iced drinks, and raw fruit in the evening force your body to work harder to warm them up, which drains Yang when it should be conserving energy for overnight repair.
        </p>
      </section>

      <section className="mb-10">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
            When to See a Doctor
          </h2>
          <p className="text-text2 leading-relaxed mb-3">
            Waking up to urinate twice a night on a regular basis is worth mentioning to your doctor, especially if it&apos;s a new pattern. This is not the same as an enlarged prostate, which needs proper medical evaluation. If you&apos;re a man over 40 and the urgency feels sudden or the stream is weak, get your prostate checked.
          </p>
          <p className="text-text2 leading-relaxed mb-3">
            If nighttime urination comes with pain, burning, blood in the urine, fever, or sudden onset, don&apos;t wait. These can be signs of infection or other conditions that need prompt treatment.
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
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">
            Cold Sensitivity Pattern →
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
