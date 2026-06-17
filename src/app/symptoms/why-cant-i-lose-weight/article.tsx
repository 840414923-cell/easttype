
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function LoseWeightArticle() {
  const slug = "why-cant-i-lose-weight"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Weight Loss</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Can&apos;t I Lose Weight? The Metabolism That Refuses to Budge
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;ve tried everything. You count calories. You cut carbs. You joined the gym and actually went for a few weeks. The scale moves down a pound, then back up two. It&apos;s like your body is actively fighting you, holding onto every gram like it&apos;s precious gold.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The frustrating part is watching other people eat whatever they want and stay thin. You eat a salad and gain weight. It doesn&apos;t seem fair, and honestly, it isn&apos;t. But it also isn&apos;t random. Your body isn&apos;t broken. It&apos;s following a pattern that Chinese medicine has been mapping for thousands of years.
        </p>
        <p className="text-text2 leading-relaxed">
          This isn&apos;t about willpower. If willpower were the problem, you&apos;d have solved it by now. This is about understanding why your metabolism is stuck in first gear when you&apos;re trying to drive on the highway.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Stubborn Weight Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "You lose weight initially but hit a plateau that won&apos;t budge",
            "Your body feels heavy and sluggish, especially in the morning",
            "You carry weight mostly around your midsection or lower body",
            "Exercise leaves you exhausted instead of energized",
            "You crave sweets, carbs, or heavy foods especially when stressed",
            "Your digestion feels slow or bloated after meals",
            "You feel worse on humid or damp days",
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
          Before diving into Eastern frameworks, make sure you&apos;ve ruled out the basics. Thyroid dysfunction, especially hypothyroidism, can slow metabolism significantly. Insulin resistance and metabolic syndrome can make weight loss nearly impossible through diet alone. PCOS is another common factor for women. Cortisol levels from chronic stress can cause weight to accumulate around the midsection.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Medications can also play a role. Antidepressants, corticosteroids, and some diabetes medications may affect weight. Sleep deprivation messes with hunger hormones. And yes, sometimes it really is about calories in versus calories out, but that equation is affected by all the factors above.
        </p>
        <p className="text-text2 leading-relaxed">
          But here&apos;s what frustrates many people: the blood work comes back normal. Thyroid is fine. Insulin is fine. Everything checks out. Yet the weight won&apos;t move. That&apos;s where Chinese medicine offers a different perspective on what&apos;s happening.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Stubborn Weight
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, stubborn weight is most often linked to two patterns: Phlegm Damp and Qi Deficiency. These aren&apos;t separate problems. They&apos;re often two sides of the same coin.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Phlegm Damp is like a slow drain in your body&apos;s metabolism. Your Spleen is supposed to transform food into clear energy and transport it where it&apos;s needed. When the Spleen is weak or overwhelmed, it can&apos;t process everything cleanly. Instead of becoming energy, some of what you eat turns into a sticky, heavy substance that Chinese medicine calls Dampness. Over time, Dampness thickens into Phlegm. This stuff accumulates, blocks your channels, and makes everything slower. Think of it like a clogged pipe. The water is there, but it can&apos;t flow.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Qi Deficiency is the other piece. Qi is the energy that powers every function in your body, including metabolism. When Qi is low, your body doesn&apos;t have enough fuel to run the metabolic engine at full capacity. You&apos;re eating less, but your body is processing it even slower. It&apos;s like trying to drive fast with one foot on the brake.
        </p>
        <p className="text-text2 leading-relaxed">
          The key insight here is that calorie counting doesn&apos;t address either of these patterns. You can eat 1,200 calories a day, but if your Spleen can&apos;t transform those calories into energy efficiently, you&apos;ll still feel heavy and stuck. The problem isn&apos;t the input. It&apos;s the processing.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Stubborn Weight
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and stubborn weight shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the classic pattern. Their body holds onto moisture and weight like a sponge. Everything feels heavy and slow. They often carry weight around the midsection, feel worse in humid weather, and notice their thinking gets foggy after heavy meals. About 10% of people fall into this category. For them, weight loss feels like pushing a boulder uphill because their body is actively holding onto what it has.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) struggles with weight for a different reason. Their metabolism is underpowered. They&apos;re often tired, sweat easily, and catch colds frequently. Their body doesn&apos;t have the energy to process food efficiently, so it stores more of it as reserve. About 15% of people have this pattern. They may not be as heavy as Phlegm Damp types, but they still can&apos;t seem to lose the weight they want to lose.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Get Things Moving
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Phlegm Damp is your pattern, focus on foods that drain moisture. Adzuki beans are one of the best. They&apos;ve been used for centuries to help the body release excess water and dampness. Coix seed (Job&apos;s tears) is another traditional choice. Winter melon, celery, and modest amounts of green tea can also help. Equally important is cutting back on foods that add dampness: dairy, sweets, fried foods, cold drinks, beer, and excessive fruit.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is behind your stuck metabolism, the focus shifts to building energy. Warm, cooked meals are essential. Congee (rice porridge), sweet potato, jujube dates, ginger tea, and chicken broth all support energy production. Cold and raw foods drain what little energy you have, so those are best minimized. You need to fuel the engine before you can expect it to run faster.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For both patterns, gentle movement is key. Not intense workouts that leave you exhausted. Walking, light jogging, swimming, or tai chi. The goal is to get your Qi circulating and help your body process the dampness. Even a 20-minute walk after meals can make a real difference in how your body processes what you just ate.
        </p>
        <p className="text-text2 leading-relaxed">
          Stop eating cold and raw foods. This is probably the single most important change for stubborn weight in TCM. Your digestive system is like a cooking pot. When you throw ice-cold ingredients in, the pot has to spend energy heating everything up before it can start digesting. For someone already struggling with metabolism, that&apos;s energy you can&apos;t afford to waste. Warm, cooked meals are easier to process and leave more energy available for metabolism.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If you&apos;re experiencing sudden unexplained weight gain, rapid weight loss without trying, or weight changes accompanied by other symptoms like fatigue, hair loss, or changes in appetite, please consult a licensed healthcare provider. These can sometimes be connected to conditions that need proper medical attention.
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
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">
            Why Do I Keep Gaining Weight?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-crave-sweets" className="text-sm text-accent no-underline hover:underline">
            Why Do I Crave Sweets?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />

      <section className="mt-10 mb-4">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
            What Foods May Help
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            We put together a full food guide for this symptom, including what to eat, what to avoid, and a simple daily meal plan.
          </p>
          <Link href="/foods-for/when-you-cant-lose-weight" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>


      <SymptomCta />
    </main>
  )
}
