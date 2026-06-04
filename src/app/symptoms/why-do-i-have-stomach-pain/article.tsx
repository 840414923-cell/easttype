
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyStomachPainArticle() {
  const slug = "why-do-i-have-stomach-pain"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Stomach Pain</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Stomach Pain? The Alarm Bell Nobody Can Find
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your stomach hurts. You go to the doctor. They run tests. Blood work, maybe an ultrasound, maybe an endoscopy. Everything comes back normal. They tell you it&apos;s probably stress, or IBS, or something vague like that. You leave feeling like the pain wasn&apos;t validated. But the pain is still there.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is one of the most frustrating experiences in medicine. Your body is clearly sending an alarm, but nobody can find the fire. The scans are clean, the labs are fine, and yet your stomach keeps hurting. It&apos;s like a smoke detector that won&apos;t stop going off even though you can&apos;t see any smoke.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine approaches this differently. It doesn&apos;t need to see structural damage to take stomach pain seriously. In TCM, pain means something in your system isn&apos;t working the way it should, even if it hasn&apos;t progressed to the point where tests can measure it. The organ might not be diseased. But it might be functioning poorly. And that distinction matters a lot when you&apos;re the one living with the pain.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What This Kind of Stomach Pain Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Aching or cramping that comes and goes without a clear trigger",
            "Pain that shifts location in your belly rather than staying in one spot",
            "Stomach discomfort that gets worse when you&apos;re stressed or worried",
            "A feeling of fullness or heaviness even after small meals",
            "Pain that improves with warmth, gentle pressure, or a hot water bottle",
            "Bloating that accompanies the pain, especially in the afternoon",
            "Stomach that feels better after a bowel movement or passing gas",
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
          Before exploring Eastern patterns, make sure you&apos;ve ruled out the common causes. Food intolerances like lactose or gluten sensitivity can create recurring stomach pain. Acid reflux, ulcers, and gastritis are all treatable conditions your doctor can check for. H. pylori infection is another one that sometimes gets missed.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Medications, especially NSAIDs like ibuprofen, can irritate your stomach lining. Eating too fast, eating irregularly, or consuming very spicy or greasy foods can trigger pain in sensitive stomachs. Constipation can also create a backup that shows up as generalized stomach ache.
        </p>
        <p className="text-text2 leading-relaxed">
          But if you&apos;ve addressed all of these and your stomach still hurts, the standard medical toolkit starts to run thin. Doctors may call it functional dyspepsia or IBS, which basically means your stomach doesn&apos;t work right but they can&apos;t find the structural reason. That&apos;s exactly the space where Chinese medicine has something to offer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Stomach Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, recurring stomach pain with no structural cause is usually linked to one of two patterns: Qi Stagnation or Phlegm Damp. The quality of your pain tells you which one is more likely.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Stagnation in the stomach creates pain that feels gripping, cramping, or colicky. It moves around rather than staying in one place. It gets worse with stress, anger, or emotional upset, and it gets better when you burp, pass gas, or have a bowel movement. This is the Liver invading the Stomach in TCM terms. The Liver&apos;s energy is supposed to flow smoothly, but when it gets stuck from frustration or stress, it pushes sideways into the Stomach and disrupts its normal function. The result is pain that feels like something is gripping and twisting inside.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Phlegm Damp creates a different kind of stomach pain. It&apos;s heavy, dull, and achy rather than cramping. You might feel full after eating just a little bit, and the fullness sits there for hours. There&apos;s often nausea, bloating, and a feeling like something is just sitting in your stomach not digesting. Phlegm Damp is like sludge in the system. The Stomach and Spleen are supposed to transform food into energy, but when they&apos;re overwhelmed by too much damp food (dairy, sweets, fried things, cold drinks), they slow down and a sticky residue builds up.
        </p>
        <p className="text-text2 leading-relaxed">
          Both patterns involve emotions. Worry knots up the Spleen, and anger or frustration stagnates the Liver. Chinese medicine has always seen a direct link between your emotional state and your digestive function. The stomach doesn&apos;t just react to what you eat. It reacts to how you feel.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Stomach Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most associated with recurring stomach pain.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) tends to get the cramping, moving, stress-related stomach pain. Their emotions directly affect their digestion. They might notice their stomach hurts after an argument, during a stressful week, or when they&apos;re suppressing how they really feel. About 8% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) tends to get the heavy, dull, full kind of stomach pain. Their digestion is sluggish overall, and they often feel like food just sits in their stomach. They may carry extra weight, feel tired after eating, and crave sweet or rich foods that make the problem worse. About 6% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            Qi Stagnant Type →
          </Link>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Settle Your Stomach
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Congee, a simple rice porridge, is one of the most recommended foods in TCM for stomach problems. It&apos;s easy to digest, warm, and gentle on a system that&apos;s already struggling. Think of it as giving your stomach a break from hard work while still providing nourishment. You can add ginger, scallion, or a little lean meat for extra support.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Ginger tea is a staple for a reason. Fresh ginger warms the stomach, eases nausea, and helps move stuck Qi. Slice a few pieces of fresh ginger into hot water and sip it slowly, especially before meals or when you feel pain coming on. If your stomach pain is the cramping, stress-related type, ginger combined with some deep breathing may help take the edge off.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm, simple foods are your friend. This isn&apos;t the time for elaborate meals, raw salads, ice-cold drinks, or heavy greasy takeout. Soups, stews, steamed vegetables, and well-cooked grains give your Stomach and Spleen something easy to work with. In TCM, cold and raw foods make the digestive system work harder, which is the last thing it needs when it&apos;s already hurting.
        </p>
        <p className="text-text2 leading-relaxed">
          Eating at regular times matters more than you might think. Chinese medicine considers the Stomach&apos;s peak time to be in the morning, so a warm breakfast is especially important. Skipping meals and eating at random times disrupts the rhythm your digestive system relies on. Try eating three warm meals at roughly the same time every day for a week and notice whether the pain changes.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your stomach pain is severe, sudden, or getting worse, or if it&apos;s accompanied by unexplained weight loss, blood in your stool, persistent vomiting, difficulty swallowing, or jaundice, please seek medical attention promptly. These can be associated with conditions that require medical treatment.
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
          <Link href="/symptoms/why-do-i-have-acid-reflux" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Acid Reflux?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
