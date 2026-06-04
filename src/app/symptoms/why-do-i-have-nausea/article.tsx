
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyNauseaArticle() {
  const slug = "why-do-i-have-nausea"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Digestion</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Nausea? The Stomach That Keeps Threatening to Strike
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          That wave of queasiness that hits you out of nowhere. The feeling that your stomach is about to go on strike, even though you ate hours ago. You know it&apos;s not food poisoning. You know you&apos;re not sick. But there it is again, that miserable rolling sensation that makes you want to lie down and not move.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Standard medicine usually looks for a specific cause: a virus, medication side effects, pregnancy, inner ear problems, or acid reflux. And these are all valid. But what happens when your doctor says everything looks fine and you still feel nauseous on a regular basis?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine approaches nausea from a different angle. Instead of asking what triggered it today, it asks why your stomach keeps threatening to rebel in the first place. The answer often comes down to a pattern that&apos;s been building for a while.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Nausea Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "A wave of queasiness that comes and goes without obvious triggers",
            "Feeling like you might throw up but rarely actually do",
            "Worse in the morning or after eating heavy meals",
            "Accompanied by a heavy, stuffed feeling in your stomach",
            "Sometimes worse in humid or damp weather",
            "A lingering sour or off taste in your mouth",
            "Relief that comes temporarily after burping or passing gas",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Pregnancy is the first thing to check if applicable. Medications like antibiotics, painkillers, and certain supplements can cause nausea. Inner ear problems like vertigo or labyrinthitis create a spinning sensation that triggers nausea. Acid reflux, gallbladder issues, and ulcers can all make you feel queasy.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Food intolerances, migraines, anxiety, and motion sickness are also common culprits. If you&apos;ve been checked for these and everything comes back normal, but the nausea keeps showing up like an unwanted subscription you can&apos;t cancel, that&apos;s where Chinese medicine offers another perspective.
        </p>
        <p className="text-text2 leading-relaxed">
          TCM looks at nausea not as a random event but as the result of a specific internal pattern that creates the conditions for your stomach to feel unsettled.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Nausea
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, the Stomach has one main job: receive food and send it downward. This is called the descending function. When things are working right, food goes in, gets processed, and moves down. Nausea is what happens when this downward movement gets disrupted. Something is causing the Stomach&apos;s energy to rebel upward instead of flowing down the way it should.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The most common culprit behind chronic nausea in TCM is Phlegm Dampness. Think of your digestive system like a kitchen sink. When the drain is clear, water flows through without a problem. But when the drain is slow, water starts to pool. Eventually, you get a backed-up sink where nothing moves and everything just sits there getting stagnant. That&apos;s what Phlegm Damp does to your Stomach. It creates a slow drain.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When the drain is slow, the Stomach&apos;s downward energy can&apos;t push through. The food and fluids that should be moving down start backing up, and that backing-up sensation is what you experience as nausea. It&apos;s not that your stomach is broken. It&apos;s that there&apos;s too much sludge in the way for it to do its job smoothly.
        </p>
        <p className="text-text2 leading-relaxed">
          Underneath the Dampness, there&apos;s usually Spleen weakness. The Spleen in TCM is the organ responsible for transforming food into energy. When it&apos;s weak, it can&apos;t process things efficiently, and the leftover waste turns into Dampness, which then clogs the system. It&apos;s a chain reaction: weak Spleen creates Dampness, Dampness blocks the Stomach, the Stomach rebels upward, and you feel nauseous.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Nausea
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and nausea shows up most in one specific type.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the primary match. Their body naturally holds onto moisture, which is exactly the slow-drain pattern we&apos;re talking about. They tend to feel heavy after meals, carry weight around the middle, and notice that their nausea gets worse after greasy, rich, or heavy foods. About 10% of people fall into this category. If you&apos;re this type, your nausea probably comes with a feeling of fullness and heaviness that lingers long after you&apos;ve eaten.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
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
          Ginger is the number one food in Chinese medicine for nausea, and it&apos;s not just folk wisdom. Modern research has caught up to what TCM has known for centuries. Ginger helps the Stomach&apos;s energy move downward instead of rebelling upward. You can make a simple ginger tea by slicing a few coins of fresh ginger and steeping them in hot water for 10 minutes. Sip it slowly before or after meals. If the taste is too strong, add a small amount of honey.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Since Phlegm Dampness is usually at the root, foods that drain moisture may help over time. Adzuki beans, coix seed (Job&apos;s tears), winter melon, and modest amounts of green tea support your body&apos;s ability to clear the sludge that&apos;s slowing down the drain. On the flip side, cutting back on dairy, sweets, greasy food, and cold drinks can stop adding to the blockage.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm, easily digested meals are your friend here. Congee (rice porridge), steamed vegetables, and simple soups give your Spleen a break and don&apos;t add more work to a system that&apos;s already struggling. Think of it like this: if your kitchen drain is slow, you wouldn&apos;t dump a bucket of grease down it. You&apos;d run warm water and give it time to clear.
        </p>
        <p className="text-text2 leading-relaxed">
          Eat smaller, more frequent meals rather than three big ones. A weak Spleen handles small portions much better than large ones. And avoid eating while stressed or rushed, since emotional tension can directly affect the Stomach&apos;s descending function.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your nausea is severe, persistent, accompanied by vomiting that won&apos;t stop, unexplained weight loss, severe abdominal pain, or blood in your vomit or stool, please consult a licensed healthcare provider. Chronic nausea can sometimes indicate conditions that need proper medical evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy &amp; Sluggish Pattern →
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
          <Link href="/symptoms/why-am-i-always-constipated" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Constipated?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
