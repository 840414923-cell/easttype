
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function AlwaysBloatedArticle() {
  const slug = "always-bloated-after-eating"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Bloated After Eating</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Always Bloated After Eating? Your Spleen Might Be Asking for Help
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          If you feel like a balloon after every meal, even small ones, you know how frustrating this gets. You eat something healthy and feel stuffed for hours. You're scared to eat before going out because you don't want to deal with the uncomfortable fullness. Sound familiar?
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          I spent years thinking I just had a "sensitive stomach" or that certain foods didn't agree with me. I tried cutting out gluten, then dairy, then FODMAPs. Some things helped a little, but nothing really solved it. The bloating kept coming back like an uninvited guest who shows up at every meal.
        </p>
        <p className="text-text2 leading-relaxed">
          Eastern body wisdom looks at bloating differently from what you might expect. It's less about which specific food is the trigger and more about why your digestive system is struggling to process food in the first place. That shift in perspective made a huge difference for me, and it might for you too.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Common Reasons for Post-Meal Bloating
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The usual explanations you'll hear: food intolerances, eating too fast, too much salt, swallowed air, IBS, or SIBO. These are all valid possibilities, and it's worth checking with your doctor if bloating is severe, painful, or accompanied by weight loss or blood in your stool.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          But here's what doesn't get talked about enough: you can be "fine" on all the standard tests and still bloat after every single meal. Your digestive enzymes are normal. Your gut bacteria are supposedly fine. No food allergies detected. Yet there you are, unbuttoning your jeans at 2 PM because lunch is staging a protest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine would say the problem isn't what you're eating. It's that your digestive "engine" doesn't have enough power to process it efficiently. Food goes in, but your body can't break it down and move it through fast enough, so it sits there. And sits there. Producing gas, pressure, and that miserable stuffed feeling.
        </p>
        <p className="text-text2 leading-relaxed">
          Think of it like a washing machine that's lost its spin cycle. The clothes go in, the water goes in, but the machine just agitates weakly without ever really cleaning properly. That's what sluggish digestion looks like from the TCM perspective.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Understands Bloating: The Spleen and Dampness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, digestion is primarily the job of the Spleen (脾). Not your anatomical spleen, but a functional system that includes your stomach, intestines, and the entire process of turning food into energy. When the Spleen is strong, food goes in, gets processed efficiently, and you feel energized. When the Spleen is weak, food goes in, sits around, creates gas and heaviness, and you feel worse after eating instead of better.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The specific pattern behind most chronic bloating is Spleen Qi Deficiency. When Spleen Qi is low, your digestive fire is weak. It's like trying to cook a meal on a stove where only one burner works on low. Things take forever, and they don't cook evenly. Your body knows something isn't right, and it lets you know through bloating, gas, brain fog, and that heavy feeling in your gut.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Spleen Qi is weak for a while, something else tends to develop: Dampness (湿). Dampness is like water that accumulates in places it shouldn't. It makes everything feel heavy, slow, and stuck. In TCM, Dampness is often compared to a sponge that's soaked through and can't be wrung out. It's behind that bloated, puffy, heavy sensation that gets worse with certain foods and humid weather.
        </p>
        <p className="text-text2 leading-relaxed">
          Foods that create Dampness include dairy products, cold drinks, sweets, fried food, excessive fruit, and beer. If you've noticed that ice cream, beer, or a big plate of pasta makes your bloating noticeably worse, you're already experiencing the Dampness pattern in action. It's not in your head. Your body is having a very real response.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Most Prone to Bloating
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If you're always bloated, you might see yourself in one of these two body types.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) has a weak digestive engine overall. They bloat because their body simply doesn't have the energy to process food efficiently. They also tend to feel tired, have a soft voice, and sweat easily. For them, bloating is part of a bigger picture of low energy that affects the whole system.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the one most directly associated with bloating and heaviness. About 10% of people have this as their primary type. They tend to carry extra weight around the middle, feel heavy and sluggish, have oily skin, and notice that humid weather makes everything worse. Their body holds onto moisture like a waterlogged field that never quite dries out.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What You Can Do About It
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Let's start with the biggest lever: stop eating cold and raw foods. I know, salad feels healthy. But if you're bloating after meals, your digestive system is telling you it can't handle that much raw material right now. Cook your vegetables. Drink warm or room-temperature water. Skip the ice. Your Spleen will notice the difference almost immediately.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Foods that help drain Dampness and support the Spleen include adzuki beans, coix seed (Job's tears), winter melon, celery, and moderate amounts of green tea. On the warming side, ginger tea after meals can help get things moving. A small cup of warm ginger water 20 minutes before eating may also prime your digestive system for the meal ahead.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Eat smaller meals more frequently rather than three large meals. A weak Spleen handles small loads better than big ones. Think of it like a small engine pulling a cart. It can move the cart, just not when it's overloaded. Four smaller meals spread throughout the day might feel much better than three big ones.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Chew more. I know this sounds almost too simple, but Chinese medicine puts a lot of emphasis on the mouth being the first step of digestion. When you chew food thoroughly, you're doing a big chunk of the Spleen's work before the food even reaches your stomach. Put your fork down between bites. Actually taste your food. It's not just etiquette, it's medicine for a weak Spleen.
        </p>
        <p className="text-text2 leading-relaxed">
          A short walk after meals can help too. Not a power walk, just 10 to 15 minutes of gentle strolling. Movement helps your digestive system do its job. Sitting or lying down right after a big meal is one of the worst things you can do for a Spleen that's already struggling. Give gravity and gentle movement a chance to help.
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
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
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
          <Link href="/foods-for/when-youre-bloated" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>


      <SymptomCta />
    </main>
  )
}
