
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function AcidRefluxArticle() {
  const slug = "why-do-i-have-acid-reflux"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Acid Reflux</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Acid Reflux? The Fire That Rises When It Shouldn&apos;t
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          That burning sensation that creeps up your chest after meals. The sour taste that wakes you at 2 AM. The feeling that something is stuck in your throat even when nothing is there. If you deal with acid reflux, you know exactly how miserable it can be.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard explanation is simple: stomach acid is escaping upward when it should stay down. Take a proton pump inhibitor, reduce the acid, problem solved. Except for many people, it isn&apos;t solved. The medication helps for a while, then stops working. Or you become dependent on it. Or you address the acid but still feel that burning, uncomfortable sensation.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine looks at reflux differently. It&apos;s not just about too much acid. It&apos;s about why things are moving upward when they should be moving downward. That&apos;s a question of direction, not just quantity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Acid Reflux Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Burning sensation in your chest, especially after eating",
            "Sour or bitter taste in your mouth, particularly in the morning",
            "Feeling like food is stuck in your throat or chest",
            "Waking up at night with burning or choking sensation",
            "Worse symptoms after spicy, fried, or heavy meals",
            "Worse symptoms when lying down or bending over",
            "Chronic cough or hoarse voice that doesn&apos;t seem related to a cold",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. A hiatal hernia, where part of your stomach pushes up through your diaphragm, can cause chronic reflux. Being overweight puts pressure on your stomach. Pregnancy does the same. Certain foods are well-known triggers: spicy foods, tomatoes, citrus, chocolate, caffeine, alcohol, and fatty or fried foods.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Eating habits matter too. Large meals, eating too quickly, lying down right after eating, and late-night snacking all contribute. Some medications, including certain blood pressure medications and muscle relaxers, can weaken the lower esophageal sphincter.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s what many people experience: they avoid all the trigger foods, eat smaller meals, don&apos;t eat late, and still have reflux. Or they take medication that reduces acid but still feel that upward movement, that burning, that discomfort. That&apos;s where Chinese medicine offers a different perspective.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Reflux
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, the Stomach is supposed to send food downward. That&apos;s its natural direction. The Spleen sends nutrients up, the Stomach sends waste down. This is called the &quot;descending function of the Stomach.&quot; When reflux happens, this descending function has been disrupted. Things are going up when they should be going down.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The most common pattern behind reflux is Stomach Heat combined with Dampness. Heat in TCM has a natural upward tendency. Think about how fire rises. When there&apos;s excess Heat in the Stomach, it wants to rise. Normally, your body&apos;s downward energy keeps it in check. But when Dampness is present, it creates a kind of sludge that allows the Heat to push upward more easily. It&apos;s like a greasy fire that won&apos;t stay contained.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This explains why reflux often feels worse after heavy, greasy meals. The Dampness from the food creates the conditions for Heat to rise. It also explains why late-night eating is problematic. Your body&apos;s energy naturally moves inward and downward at night. If you&apos;ve just added Heat and Dampness to your Stomach right before bed, that energy has nowhere to go but up when you lie down.
        </p>
        <p className="text-text2 leading-relaxed">
          The key insight here is that reflux isn&apos;t always about too much acid. Sometimes it&apos;s about the direction of movement. You can have normal acid levels but still have reflux if the downward function of your Stomach is compromised. This is why reducing acid doesn&apos;t always solve the problem.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Reflux
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and reflux shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is prone to reflux because their body holds onto moisture. This internal dampness creates the conditions for Heat to rise. They often feel heavy after meals, carry weight around the middle, and notice their reflux is worse after greasy or heavy foods. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type is a variation where Heat and Dampness have combined into a single pattern. These people run warm, feel sticky and uncomfortable in humid weather, and may have skin issues or strong body odor alongside their reflux. Their reflux tends to be more intense, with a stronger burning sensation.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Cool the Fire
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most important change is timing. Don&apos;t eat within 3 hours of bedtime. This gives your Stomach time to empty before you lie down. If you must eat late, keep it very light and avoid anything greasy, spicy, or heavy. Congee (rice porridge) is a good option because it&apos;s easy to digest and doesn&apos;t create much Heat or Dampness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cooling foods can help balance the Heat. Mung bean soup, winter melon, cucumber, and celery are traditional choices. Avoid foods that add Heat: spicy foods, alcohol, coffee, lamb, beef, and deep-fried foods. These are like adding fuel to a fire that&apos;s already trying to escape upward.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For the Dampness component, foods that drain moisture can help. Adzuki beans, coix seed, and modest amounts of green tea support your body&apos;s ability to process the sludge that allows Heat to rise. Cut back on dairy, sweets, and greasy foods, which add to the Dampness.
        </p>
        <p className="text-text2 leading-relaxed">
          Sleep position matters too. Elevating the head of your bed by 6 to 8 inches can help gravity keep stomach contents where they belong. This isn&apos;t just using extra pillows, which can bend you at the waist and actually increase pressure. The whole upper body needs to be elevated. Some people find relief sleeping on their left side, which positions the stomach in a way that makes upward flow less likely.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your reflux is severe, getting worse, or accompanied by difficulty swallowing, unintentional weight loss, chest pain, or black or bloody stools, please consult a licensed healthcare provider. Chronic reflux can sometimes lead to complications that need proper medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy & Sluggish Pattern →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/damp-heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-brain-fog" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Brain Fog?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
