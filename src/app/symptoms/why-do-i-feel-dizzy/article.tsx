
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function DizzyArticle() {
  const slug = "why-do-i-feel-dizzy"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Dizziness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Feel Dizzy? The Ground That Shifts Under Your Feet
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          The world spins. Or maybe it doesn&apos;t spin exactly, but it feels unsteady, like you&apos;re on a boat when you&apos;re standing on solid ground. You stand up too fast and have to grab the wall. You look down and feel like you might fall. It&apos;s disorienting and sometimes scary.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Dizziness is one of those symptoms that&apos;s hard to describe and even harder to pin down. It can feel like spinning, lightheadedness, unsteadiness, or a floating sensation. It can last seconds or hours. It can come and go or be constant. This variety makes it tricky to understand, but Chinese medicine has been making sense of dizziness for thousands of years.
        </p>
        <p className="text-text2 leading-relaxed">
          The key insight from TCM is that dizziness isn&apos;t random. The quality of the dizziness, when it happens, and what accompanies it all point to specific patterns that can be addressed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Dizziness Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Lightheadedness when standing up quickly",
            "A spinning sensation even when you&apos;re still",
            "Feeling unsteady or off-balance, especially when turning your head",
            "Dizziness that gets worse with fatigue or hunger",
            "A floating or swimming sensation in your head",
            "Worse in the morning or after not eating",
            "Accompanied by tiredness or weakness overall",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Dehydration is a common and easily fixed cause. Low blood sugar from skipping meals. Anemia, especially iron deficiency. Blood pressure issues, both too low and too high. Inner ear problems like BPPV (benign paroxysmal positional vertigo) or Meniere&apos;s disease.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Certain medications can cause dizziness, especially blood pressure medications, antidepressants, and sedatives. Anxiety and panic attacks can create a sensation of dizziness. Migraines can include dizziness as a symptom. Neck problems can sometimes cause what&apos;s called cervicogenic dizziness.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get their blood work checked, see an ENT, have their blood pressure monitored, and everything comes back normal. Yet they still feel unsteady. That&apos;s where Chinese medicine offers a different perspective on why the ground feels like it&apos;s shifting.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Dizziness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, dizziness is most often linked to Qi Deficiency or Yin Deficiency. Both patterns involve the head not getting what it needs to function properly, but the mechanism is different.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Deficiency creates dizziness because Qi is the force that pushes Blood upward. Your brain needs a steady supply of Blood to function. When Qi is weak, it can&apos;t push strongly enough. This is especially noticeable when you stand up quickly. Your body needs to adjust blood flow to your head, and if Qi is low, that adjustment happens too slowly. You feel lightheaded until the Qi catches up. This type of dizziness often comes with other signs of low energy: fatigue, weak voice, sweating easily, and feeling better after rest or eating.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin Deficiency creates dizziness through a different mechanism. In TCM, Yin has an anchoring quality. It holds things in place. When Yin is deficient, there&apos;s a tendency toward what&apos;s called &quot;internal wind&quot; — a kind of instability or movement that shouldn&apos;t be there. This can show up as a spinning sensation, a feeling of unsteadiness, or a sense that things are moving when they&apos;re not. This type of dizziness often comes with other signs of Yin deficiency: dry eyes, night sweats, feeling warm at night, or a sensation of heat in the palms and soles.
        </p>
        <p className="text-text2 leading-relaxed">
          The difference between these two patterns matters for treatment. Qi Deficiency needs building up. Yin Deficiency needs nourishing and cooling. The wrong approach can make things worse, which is why understanding your pattern is important.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Dizziness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and dizziness shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) experiences dizziness as lightheadedness, especially when standing up or when tired. They often feel weak overall, have a soft voice, sweat easily, and catch colds frequently. Their dizziness tends to improve with rest and eating. About 15% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) experiences dizziness more as a spinning or unsteady sensation. They tend to run warm, have dry skin or eyes, and may have trouble staying asleep. Their dizziness might be worse at night or after activity. About 10% of people have this pattern.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Steady the Ground
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is your pattern, focus on building energy. Warm, cooked, easy-to-digest meals are the foundation. Congee (rice porridge) is the classic recovery food in Chinese households because it takes almost no digestive effort and delivers steady nourishment. Add jujube dates for extra Qi support. Ginger tea can help warm the system and improve energy flow.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For Qi Deficient dizziness, how you move matters. Stand up slowly, especially when getting out of bed. Give your body time to adjust blood flow to your head. Avoid standing for long periods without moving. Regular, gentle movement like walking can help build Qi over time, but avoid exhausting yourself.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Yin Deficiency is behind your dizziness, the focus shifts to nourishing and moistening. Black sesame is one of the best foods for this pattern. Goji berries, lily bulb, and tremella mushroom are also traditional choices. Pear is excellent for moistening, especially cooked in a soup. Avoid spicy foods, alcohol, and coffee, which can deplete Yin further.
        </p>
        <p className="text-text2 leading-relaxed">
          For both patterns, regular meals are essential. Skipping meals can trigger dizziness in both types. For Qi Deficient types, it&apos;s because there&apos;s no fuel to push blood upward. For Yin Deficient types, it&apos;s because the body is being depleted without replenishment. Eating at consistent times, even small meals, can help prevent dizziness episodes.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your dizziness is severe, sudden, or accompanied by headache, vision changes, difficulty speaking, numbness, weakness, chest pain, or fainting, please seek immediate medical attention. These can sometimes be signs of conditions that need urgent care.
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
          <span className="text-text2/40">·</span>
          <Link href="/patterns/blood-stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Pattern →
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
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-get-sick-so-often" className="text-sm text-accent no-underline hover:underline">
            Why Do I Get Sick So Often?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
