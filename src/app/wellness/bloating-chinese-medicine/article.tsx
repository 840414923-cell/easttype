
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function BloatingArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span><span className="text-text2">{"Bloating"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Bloating: What Chinese Medicine Says About That Heavy Feeling"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Based on 3,000 years of Eastern body wisdom"}</p>

      <div className="mb-10 bg-accent/8 border border-accent/20 rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-3">{"TL;DR"}</h2>
        <ul className="text-text2 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Chronic bloating with heaviness = Damp accumulation in TCM"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Your digestive \"kitchen\" gets clogged — eating less won't fix it"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Key remedies: adzuki-coix tea, less cold/sweet foods, movement"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Common in Phlegm-Damp body type — take the quiz to learn more"}</span>
          </li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"The Short Answer"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"In Traditional Chinese Medicine (TCM), chronic bloating — especially when it's accompanied by a feeling of heaviness, sluggishness, or \"I ate three hours ago but still feel full\" — is usually caused by Damp accumulation (湿气, pronounced \"she-chee\"). Dampness is like a sponge inside your body: it soaks up moisture but can't wring it out. Your digestive system gets bogged down, and everything feels heavy and slow."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This isn't the same as gas from eating beans or drinking soda too fast. That kind of bloating passes. Damp-related bloating lingers. It's there when you wake up. It's there after a light meal. Sometimes it's even there when your stomach is technically empty. Sound familiar?"}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Think of It Like This"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Your digestive system is a kitchen. When it's running smoothly, food comes in, gets processed, and waste goes out. But Dampness is like a clogged drain — water keeps filling up, nothing drains properly, and the whole kitchen gets soggy. No amount of eating less fixes a clogged drain. You need to dry out the system."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Here's the thing though — the kitchen doesn't just process food. In TCM thinking, your Spleen (脾, pí) is the organ responsible for transforming what you eat into energy and transporting that energy throughout your body. When the Spleen gets overwhelmed by too much raw, cold, sweet, or heavy food, it slows down. The moisture that should be processed starts accumulating instead. That's Dampness."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{"Signs of Damp Accumulation"}</h2>
        <p className="text-text2 text-sm mb-4">{"Most people with this pattern recognize 3 or more:"}</p>
        <ul className="space-y-2">
          {[
            "You feel heavy and sluggish, especially in the morning",
            "You tend to gain weight easily and lose it slowly",
            "You feel sticky or humid inside, especially in damp weather",
            "You often have a coated tongue or phlegm in your throat",
            "Your love language is 'I made you food, now let's sit'",
            "Your mind feels foggy, especially after meals",
            "You crave sweets or carbs when stressed or tired",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How It Affects Daily Life"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Living with chronic bloating is... exhausting. Not in a dramatic way, but in a slow, grinding kind of way. You wake up already feeling behind. A normal lunch leaves you wanting a nap by 2pm. You might skip dinner because nothing sounds good, or because you're still \"full\" from lunch. Then by 9pm you're raiding the fridge because suddenly you're starving."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"Social situations get tricky too. You're at a restaurant, everyone's enjoying themselves, and you're calculating how many hours until you'll feel normal again if you eat that bowl of pasta. Maybe you've started declining dinner invitations. Maybe you've become the person who \"doesn't eat much\" and people think you're dieting, but really you just don't want to deal with the aftermath."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"The mental fog is real too. In TCM, Dampness can \"cloud the clear yang\" — basically, it makes your thinking sluggish. Ever notice how after a heavy meal, your brain feels as slow as your digestion? That's not just \"food coma.\" That's Dampness affecting your mental clarity."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That Reduce Dampness"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"The good news: you can eat your way out of this. Slowly. TCM isn't about dramatic cleanses or fasting. It's about consistent, small choices that gradually shift your body's balance."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"✓ Damp-Draining Foods"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {["Adzuki bean", "Coix seed (Job's tears)", "Winter melon", "Celery", "Green tea (moderate)", "Ginger tea"].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{"✗ Damp-Creating Foods"}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {["Dairy products", "Cold drinks & ice water", "Sweets & sugar", "Fried food", "Excessive fruit", "Beer & alcohol"].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 italic">
          {"Note: You don't have to eliminate these foods forever. Just reduce them while you're working on clearing the dampness. Think of it as temporary traffic control while the kitchen drain gets fixed."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Simple Damp-Draining Routine"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Let's be realistic — you probably don't have time to brew complicated herbal decoctions. Here's a routine that actually fits into modern life:"}
        </p>

        <div className="bg-cream/30 border border-border rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-text mb-3">{"Morning: Adzuki-Coix Tea"}</h3>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            {"The classic. 2 tablespoons each of adzuki beans and coix seeds (Job's tears), boiled in 4 cups of water for 30 minutes. Sip throughout the morning."}
          </p>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            {"Pro tip: Make a big batch on Sunday. Store in the fridge. Reheat a cup each morning. Some people even use a thermos — put the beans and seeds in with boiling water before bed, and by morning it's ready."}
          </p>
          <p className="text-text2 text-sm leading-relaxed">
            {"Why it works: Adzuki beans drain dampness and support the Spleen. Coix seeds do the same, plus they help with that heavy, sluggish feeling. Together, they're like a gentle drain cleaner for your system."}
          </p>
        </div>

        <div className="bg-cream/30 border border-border rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-text mb-3">{"After Meals: A Short Walk"}</h3>
          <p className="text-text2 text-sm leading-relaxed">
            {"This one's almost too simple, but it matters. In TCM, the Spleen needs movement to function well. A 10-15 minute walk after meals helps your digestion actually process what you ate instead of letting it sit there. No power walking necessary — just strolling is enough."}
          </p>
        </div>

        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h3 className="font-semibold text-text mb-3">{"Evening: Skip the Late Snack"}</h3>
          <p className="text-text2 text-sm leading-relaxed">
            {"Your Spleen is weakest in the evening. Eating late forces it to work overtime when it's already running low on energy. That late-night snack isn't just calories — it's creating more dampness that your body has to deal with tomorrow. Try herbal tea instead if you need something warm before bed."}
          </p>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This information is for wellness and self-awareness, not medical diagnosis. Persistent bloating can also be caused by food intolerances, IBS, celiac disease, or ovarian cysts. If bloating is severe, sudden, or accompanied by pain, weight loss, or blood in stool, consult a doctor immediately."}
        </p>
        <p className="text-sm text-text2 leading-relaxed">
          {"Also worth noting: if you've had bloating for years and all your medical tests come back \"normal,\" that doesn't mean nothing is wrong. It might just mean the issue is functional rather than structural — which is exactly where TCM approaches can help."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/always-bloated-after-eating" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Bloated"}</h3>
            <p className="text-text2 text-sm">{"Chronic bloating after meals is a classic sign of Damp accumulation"}</p>
          </Link>
          <Link href="/patterns/heavy-and-sluggish" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Heavy & Sluggish"}</h3>
            <p className="text-text2 text-sm">{"The heavy, sluggish feeling often accompanies chronic bloating from Dampness"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Related Conditions"}</h2>
        <p className="text-text2 text-sm mb-4">{"Dampness doesn't just cause bloating. It's connected to other common issues:"}</p>
        <div className="space-y-3">
          <Link href="/wellness/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Why Am I Always Tired?"}</h3>
            <p className="text-text2 text-sm">{"Dampness is one of the most common causes of chronic fatigue in TCM"}</p>
          </Link>
          <Link href="/wellness/acne-chinese-medicine" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Acne & Chinese Medicine"}</h3>
            <p className="text-text2 text-sm">{"Damp-Heat type acne often comes with bloating and oily skin"}</p>
          </Link>
          <Link href="/wellness/cold-hands-and-feet" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Cold Hands & Feet"}</h3>
            <p className="text-text2 text-sm">{"When Dampness blocks circulation, extremities don't get enough warmth"}</p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["bloating-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
