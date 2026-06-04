
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyDiarrheaArticle() {
  const slug = "why-do-i-have-diarrhea"

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
        Why Do I Have Diarrhea? The Pipe That Flushes Too Fast
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          The urgent, barely-make-it-to-the-bathroom kind of bowel movement. The loose stools that show up every morning like clockwork. The feeling that everything you eat just runs right through you. If this sounds familiar, you know how much it disrupts your daily life.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The usual medical advice focuses on identifying a specific cause: a bacterial infection, a parasite, food poisoning, IBS, celiac disease, or inflammatory bowel disease. These are all real possibilities and worth investigating. But what if you&apos;ve been tested for everything and the results come back normal, yet the loose stools keep coming?
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine doesn&apos;t treat all diarrhea as the same problem. It sees two very different types with opposite qualities, and getting the type right matters because the wrong food approach can actually make things worse.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Diarrhea Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Loose or watery stools that happen frequently",
            "Urgent bowel movements, especially in the morning",
            "Feeling like you can never fully empty your bowels",
            "Stomach rumbling and cramping before a bowel movement",
            "Relief after going, but the pattern repeats the next day",
            "Worse after eating cold, raw, or greasy foods",
            "Sometimes accompanied by a cold feeling in your abdomen",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Food poisoning and infections (bacterial, viral, or parasitic) are the most common acute causes. Chronic causes include irritable bowel syndrome (IBS-D), inflammatory bowel disease (Crohn&apos;s, ulcerative colitis), celiac disease, lactose intolerance, and other food sensitivities.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Certain medications, especially antibiotics, metformin, and some blood pressure medications, can cause loose stools. Thyroid disorders, particularly hyperthyroidism, can speed up your digestion. Chronic stress and anxiety also play a role for many people.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;ve been evaluated for these and your doctor says everything checks out, but the diarrhea persists, Chinese medicine distinguishes between patterns that need completely opposite approaches. Getting the pattern right is the key.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Diarrhea
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          TCM sees chronic diarrhea as falling into two main categories, and they&apos;re basically opposites. Understanding which one you have changes everything about how you approach it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The first type is Cold diarrhea. This is the most common form. Your Spleen and Stomach lack the warmth and energy needed to process food properly. It&apos;s like a washing machine running on cold water: the clothes go in, the cycle runs, but nothing really gets cleaned because there&apos;s not enough heat to break things down. The stool tends to be watery, not particularly smelly, and worse in the morning or after eating cold foods. Your abdomen may feel cold to the touch, and you might prefer warm drinks and warm weather.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The second type is Heat diarrhea. Here, there&apos;s too much internal heat in the intestines, and your body is trying to flush it out quickly. Think of it like a pipe that&apos;s being flushed with hot water. Everything rushes through. The stool tends to be urgent, explosive, possibly burning, and foul-smelling. You might feel hot, sweaty, and uncomfortable, and this type often comes with a strong urge that can&apos;t wait.
        </p>
        <p className="text-text2 leading-relaxed">
          These two types need opposite approaches. Cooling foods that help Heat diarrhea can make Cold diarrhea worse. Warming foods that help Cold diarrhea can aggravate Heat diarrhea. This is why a one-size-fits-all approach to chronic loose stools so often fails.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Diarrhea
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and diarrhea shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the primary match for Cold diarrhea. Their internal furnace runs too low, which means their digestive system can&apos;t generate enough warmth to process food. Everything runs cold and slow, and what does pass through tends to be watery and poorly formed. They also tend to feel cold overall, especially their hands and feet, and prefer warm drinks and warm environments. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type (湿热质) is the match for Heat diarrhea. Heat and Dampness combine in their digestive system, creating the conditions for urgent, burning, uncomfortable bowel movements. They tend to run warm, feel sticky in humid weather, and may have skin breakouts or strong body odor alongside their digestive issues.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Slow Things Down
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          For Cold-type diarrhea, warmth is the answer. Drink warm water throughout the day, not ice water. Ice water is like pouring cold water on a fire that&apos;s already struggling to burn. Switching to warm or room-temperature drinks alone can make a noticeable difference. Ginger tea, cinnamon tea, and fennel tea all add warmth to the digestive system. Eat warm, cooked meals and avoid raw salads, cold sandwiches, and anything straight from the refrigerator.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Congee (rice porridge) is a staple recommendation here because it&apos;s warm, easy to digest, and gives your Spleen a break while still providing nourishment. Roasted root vegetables, steamed squash, and chicken soup are all good choices.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For Heat-type diarrhea, the approach shifts to cooling and draining. Mung bean soup, cucumber, celery, and bitter greens can help clear the excess heat. Avoid spicy food, alcohol, deep-fried food, and lamb, which all add fuel to the fire. Modest amounts of green tea may help drain dampness without being too harsh.
        </p>
        <p className="text-text2 leading-relaxed">
          For both types, eat smaller, more frequent meals. Your digestive system handles small loads better than large ones, regardless of whether the underlying pattern is Cold or Heat. And if you&apos;re not sure which type you have, warm water is a safe starting point. It won&apos;t fix everything, but it won&apos;t make either type worse.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your diarrhea is severe, bloody, accompanied by fever, unexplained weight loss, or lasts more than a few days, please consult a licensed healthcare provider. Chronic diarrhea can sometimes indicate conditions that need proper medical treatment.
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
