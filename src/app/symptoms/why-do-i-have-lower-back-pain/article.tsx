
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function LowerBackPainArticle() {
  const slug = "why-do-i-have-lower-back-pain"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Lower Back Pain</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Lower Back Pain? The Foundation That Lost Its Support
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You bend down to pick something up and your lower back protests. Not with a dramatic snap, but with a dull, persistent ache that makes you straighten up slowly and carefully. You&apos;ve been to the doctor, maybe even had an MRI. Everything looks normal. But your back keeps hurting anyway.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The obvious answer is that something structural must be wrong. A bulging disc, a pinched nerve, a muscle strain. And those are real possibilities worth checking. But when the scans come back clean and the pain persists, it&apos;s worth asking a different question. What if the problem isn&apos;t the structure, but the support system?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine views the lower back as the residence of the Kidneys, the root of the body&apos;s warming and cooling systems. When those systems are undercharged, the lower back loses its internal support. The spine is fine, but the foundation beneath it is running low on fuel.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Lower Back Pain Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Dull, aching pain in the lower back that builds throughout the day",
            "Worse after sitting or standing for long periods",
            "Feeling like your lower back is cold from the inside",
            "Stiffness in the morning that improves with movement",
            "Weakness in the legs alongside the back pain",
            "Pain that worsens in cold or damp weather",
            "Relief from warmth, ginger tea, or gentle movement",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Muscle strain from lifting or exercise is the most common cause. Herniated discs or spinal stenosis can be checked with an MRI. Kidney stones or infections can be evaluated with a blood test or ultrasound. These are important to rule out because they require specific medical treatment.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Osteoporosis or compression fractures can be seen on X-ray. Arthritis can be identified through blood markers and imaging. Sciatica, caused by nerve compression, can also be evaluated with MRI. If you have radiating pain down your legs, numbness, or weakness, these structural causes need to be checked first.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get their scans, blood tests, and exams, and everything comes back normal. Yet the lower back keeps aching. That&apos;s where Chinese medicine offers a different perspective on why the foundation feels unsupported.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Lower Back Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The lower back is the residence of the Kidneys in TCM. Kidney Yang is the internal heater. When Kidney Yang is deficient, the lower back lacks warmth, circulation is sluggish, and the area feels cold, achy, and vulnerable to cold weather. Think of it like a house with broken heating. The walls, your spine, are intact, but the furnace, Kidney Yang, isn&apos;t generating enough warmth.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Kidney Yin Deficiency creates a different kind of pain: tight, sore, and worse with overexertion. It&apos;s like the house has good heating but the plumbing is dry, so everything runs hot but brittle. The lower back feels tight rather than cold, and the ache is more pronounced after activity than during rest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Deficiency is a broader pattern. Your muscles are the scaffolding that supports the spine. When Qi is low, those muscles don&apos;t have enough energy to hold things in place properly. The spine itself is fine, but the muscular support around it is undercharged, leading to a feeling of weakness and achiness that builds throughout the day.
        </p>
        <p className="text-text2 leading-relaxed">
          These patterns often overlap. A person can have both Kidney Yang and Qi Deficiency, for example, which creates a lower back that feels cold, weak, and tired all at once. The specific combination determines the exact quality of the pain, but the root cause is the same: the internal support systems are running low.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Lower Back Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and lower back pain shows up most clearly in a few of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the primary match. Their internal heater is underpowered. The lower back feels cold, weak, and worse in winter. These people often have cold hands and feet alongside the back pain, and warmth provides noticeable relief. About 8% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the second match. Low overall energy means the muscles supporting the spine tire easily. The lower back aches after standing or sitting for long periods, and the pain builds gradually throughout the day. These people often feel generally tired alongside the back pain.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Some overlap exists with the Blood Stasis type (血瘀质) when the pain is fixed and stabbing rather than dull and aching. Blood Stasis means circulation is sluggish, so the lower back isn&apos;t getting fresh blood supply. The pain tends to be sharp and localized in one spot.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Support the Lower Back
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Warm, cooked foods are the foundation. Ginger tea, cinnamon, lamb, and black beans all support Kidney Yang. These foods are like adding fuel to the internal heater. When the furnace is running properly, the lower back gets the warmth and circulation it needs. Avoid ice-cold drinks and raw foods, which drain the heater and make the cold ache worse.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Bone broth supports the actual structure of the lower back. In TCM, bone is governed by the Kidneys, and bone broth is considered a direct nourisher of that system. A cup of bone broth daily, especially in colder months, can be associated with gradual improvement in lower back strength and warmth.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gentle movement is essential, but the right kind matters. Walking, tai chi, and swimming keep the lower back warm and circulating without draining Qi. Intense exercise, heavy lifting, and high-impact activities can deplete the very energy the lower back needs. Think of it as maintaining a low, steady flame rather than building a bonfire that burns out quickly.
        </p>
        <p className="text-text2 leading-relaxed">
          Warm compresses on the lower back provide direct relief and support circulation in the area. Sleep before 11 PM to let the body rebuild overnight. The hours before midnight are when the body&apos;s restorative processes are most active, and staying up late is like making withdrawals from an account that&apos;s already low.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Lower back pain can sometimes indicate serious conditions. If pain is severe, radiates down the legs, or is accompanied by numbness, weakness, or loss of bladder/bowel control, seek immediate medical attention. This article is for informational purposes only and is not medical advice.
        </p>
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
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Cold?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
