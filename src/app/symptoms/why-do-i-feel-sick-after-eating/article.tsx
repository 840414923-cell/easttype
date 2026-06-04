
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhySickAfterEatingArticle() {
  const slug = "why-do-i-feel-sick-after-eating"

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
        Why Do I Feel Sick After Eating? The Welcome Mat Your Stomach Pulled In
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Eating is supposed to make you feel good. Fuel in, energy up. But for you, every meal feels like a negotiation with your body. You eat, and then you wait to see what happens. Nausea, heaviness, bloating, fatigue, brain fog. It&apos;s like your stomach rolled up the welcome mat and now every meal is an unwelcome guest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;ve probably tried eating less. Eating lighter. Skipping meals. Maybe you feel a little better when you don&apos;t eat much, but then you&apos;re hungry and low on energy, and the cycle starts again. The problem isn&apos;t how much you&apos;re eating. It&apos;s that your body can&apos;t handle what you&apos;re giving it, even in normal amounts.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a clear framework for this. It&apos;s not about eating less. It&apos;s about eating in a way that matches what your digestive system can actually process right now.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Feeling Sick After Eating Looks Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Nausea or queasiness that starts during or right after a meal",
            "Heavy, stuffed feeling even after a normal-sized portion",
            "Brain fog or drowsiness that hits within 30 minutes of eating",
            "Bloating and gas that build over the hour after eating",
            "Aversion to food or loss of appetite because eating feels bad",
            "Feeling worse after cold, raw, greasy, or heavy meals",
            "Needing to lie down after eating because your body feels drained",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Food intolerances and allergies are the first suspects. Lactose intolerance, gluten sensitivity, and FODMAP sensitivities can all make you feel sick after eating the wrong foods. Gallbladder issues can cause nausea and discomfort after fatty meals. Acid reflux and GERD can create a sick feeling after eating.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Gastroparesis, where the stomach empties too slowly, can cause a full, sick feeling after small amounts of food. Pancreatic issues, ulcers, and H. pylori infections are worth checking too. Some people react to food additives, preservatives, or histamine in foods.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s the thing: many people get tested for all of these and everything comes back normal. They can&apos;t point to a single food that&apos;s the problem because it seems like everything makes them feel unwell. That&apos;s where Chinese medicine offers a different lens.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Post-Meal Sickness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, the Spleen is the organ responsible for transforming food into energy. Not your anatomical spleen, but a functional system that covers your entire digestive process. When the Spleen is strong, you eat, food gets converted into usable energy, and you feel good. When the Spleen is weak, food goes in but doesn&apos;t get properly transformed.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Imagine your digestive system as an email inbox. When things are working well, emails come in, get processed, and filed away efficiently. But when the system is overwhelmed, emails just pile up unopened. Your inbox grows, your stress grows, and nothing gets done properly. That&apos;s what a weak Spleen looks like. Food comes in, but the body can&apos;t process it. The unprocessed food sits there, creating gas, heaviness, nausea, and fatigue.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The key insight is this: it&apos;s not the food that&apos;s the problem. It&apos;s the processing capacity. You could eat the healthiest meal in the world, but if your Spleen can&apos;t transform it, it still makes you feel sick. This is why elimination diets often provide only temporary relief. You keep removing foods, but you never address why your body can&apos;t handle them in the first place.
        </p>
        <p className="text-text2 leading-relaxed">
          Over time, a weak Spleen generates Phlegm Dampness. The unprocessed food residue accumulates like sediment in a slow-moving river. This Dampness adds a layer of heaviness and stagnation on top of the original weakness, making each meal feel worse than the last.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Post-Meal Sickness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and post-meal sickness shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the primary match. Their whole system runs on low energy, and digestion is one of the most energy-intensive things the body does. When your overall Qi is low, your body literally doesn&apos;t have the fuel to process meals efficiently. About 15% of people fall into this category. They tend to feel tired, have a soft voice, sweat easily, and notice that eating makes them sleepy instead of energized.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the second match. Their Spleen weakness has progressed to the point where Dampness has accumulated, creating that heavy, sluggish feeling after every meal. They tend to carry weight around the middle and feel worse in humid weather.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Make Meals Feel Better
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The biggest shift: don&apos;t eat less. Eat different. A weak Spleen doesn&apos;t need less food. It needs food that&apos;s easier to process. Think of it like a small engine. It can do the work, but not if you give it heavy fuel. Switch to lighter, easier-to-digest options and it runs fine.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Congee (rice porridge) is the TCM gold standard for a weak Spleen. It&apos;s warm, pre-cooked, and requires almost no digestive effort. Your body absorbs the nutrients without having to break anything down. Steamed vegetables, simple soups, and well-cooked grains like millet or sweet potato are all good choices.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Stop eating cold and raw foods. Salad, smoothies, iced drinks, and raw vegetables are the hardest things for a weak Spleen to handle. They require maximum digestive effort to warm up and break down. Switching to warm, cooked meals alone can make a big difference within a week or two.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Chew thoroughly. The mouth is the first stage of digestion in TCM. When you chew well, you&apos;re doing a big part of the Spleen&apos;s work before the food even reaches your stomach. Put your fork down between bites. Take your time.
        </p>
        <p className="text-text2 leading-relaxed">
          Finally, don&apos;t eat when you&apos;re stressed, upset, or rushing. Emotional tension directly impairs the Spleen&apos;s function. If you&apos;ve ever noticed that the same meal feels fine when you&apos;re relaxed but terrible when you&apos;re wound up, you&apos;ve experienced this firsthand. Sit down, breathe, and give your body a chance to actually receive the food.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If feeling sick after eating is severe, getting worse, or accompanied by unexplained weight loss, difficulty swallowing, persistent vomiting, or blood in your stool, please consult a licensed healthcare provider. These symptoms can sometimes indicate conditions that need medical evaluation.
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
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-nausea" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Nausea?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
