
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function WhyAlwaysTiredArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
          {"EastType"}
        </Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">
          {"Wellness"}
        </Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Why Am I Always Tired?"}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Why Am I Always Tired? A Chinese Medicine Explanation"}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {"8 min read · Based on 3,000 years of Eastern body wisdom"}
      </p>

      {/* TL;DR - for AI and scanners */}
      <section className="mb-10 bg-accent/8 border border-accent/20 rounded-xl p-5">
        <p className="text-text/90 leading-relaxed text-[0.95rem]">
          {"If you're always tired even after sleeping well, Chinese medicine says it's usually Qi Deficiency (气虚) — your body's fuel tank is running low. The fix isn't more sleep. It's eating warm, cooked, Qi-building foods (congee, jujube dates, ginger) and avoiding cold, raw foods that drain the energy you already don't have. About 15% of people have this pattern."}
        </p>
      </section>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"The Short Answer"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Traditional Chinese Medicine (TCM), chronic fatigue that doesn't improve with sleep is usually caused by Qi Deficiency (气虚, pronounced \"chee-shoo\"). Qi is your body's vital energy — think of it as the fuel that powers every function. When Qi is low, everything still works, but everything costs more energy than it should."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This isn't the same as being tired from a bad night's sleep. That kind of tired fixes itself after a good rest. Qi Deficiency tired doesn't. You sleep 8 hours and wake up feeling like you barely slept at all. That's the key difference, and it's the one most doctors miss."}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Think of It Like This"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Imagine your body is a phone. Western medicine checks if the screen is broken. Chinese medicine checks the battery. Qi Deficiency means your battery is at 5% — the phone works, but everything is slow, the screen dims, and it shuts down unexpectedly."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Now here's the thing: you can't fix a 5% battery by leaving the phone on the charger for longer. The charger works fine — the battery itself has degraded. Chinese medicine's approach is to repair the battery, not just charge it longer. That's why sleeping more doesn't fix Qi Deficiency fatigue."}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {"Signs of Qi Deficiency — Do You Recognize These?"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Most people with this pattern recognize 3 or more:"}
        </p>
        <ul className="space-y-2">
          {[
            "You're tired even after a full night's sleep",
            "You prefer sitting over standing whenever possible",
            "Your voice is soft and you speak less than you think",
            "You catch colds more easily than others",
            "You sweat easily, even with light activity",
            "Your limbs feel heavy, like moving through water",
            "You get full quickly when eating — small appetite",
            "You feel like you've drafted your resignation by 10 AM every Monday",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text2/70 text-sm mt-4">
          {"If you checked 4 or more, there's a good chance Qi Deficiency is part of your pattern. Not sure? The free quiz at the end gives you a personalized reading across all 9 body types."}
        </p>
      </section>

      {/* What Western Medicine Misses */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"What Western Medicine Misses"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Western medicine typically runs blood tests. If your iron, thyroid, and B12 are normal, you're told 'you're fine' or diagnosed with chronic fatigue syndrome. But TCM looks at the pattern beneath the test results — your body's functional energy, not just its chemistry."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Here's a way to think about it: if your car is running sluggishly, a mechanic checks the oil, fuel, and spark plugs. If all those test fine, they might say 'nothing's wrong.' But an experienced mechanic might ask: when did you last change the fuel filter? That's closer to what TCM does — it looks at the systems that keep everything running, not just the parts that show up on a diagnostic test."}
        </p>
      </section>

      {/* Daily life impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"What Qi Deficiency Actually Feels Like Day to Day"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"It's not just 'being tired.' It colors everything. You start avoiding social plans because the effort feels overwhelming. You choose the elevator over two flights of stairs — and feel a little embarrassed about it. You have ideas and ambitions, but your body won't cooperate. People who don't have this pattern sometimes assume you're lazy. You're not. Your battery is just smaller."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Qi Deficiency also tends to creep up slowly. You don't wake up one day depleted. It builds over months or years — often starting after a prolonged period of stress, illness, or pushing too hard without recovering properly. Many people don't realize how low their Qi has gotten until they take a step back."}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Foods That Help (and Harm) Qi Deficiency"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"In TCM, food is the primary medicine for Qi Deficiency. Not supplements, not stimulants — actual food, prepared the right way. The rule of thumb: warm, cooked, and easy to digest. Your body spends less energy processing these foods, which means more energy left for you."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {"✓ Nourishing Foods"}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Sweet potato",
                "Rice porridge (congee)",
                "Ginger tea",
                "Chinese dates (jujube)",
                "Goji berries",
                "Chicken broth",
                "Millet porridge",
                "Shiitake mushrooms",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {"✗ Draining Foods"}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Raw salads (too cold)",
                "Ice water",
                "Excessive caffeine",
                "Cold smoothies",
                "Bitter melon",
                "Excessive raw foods",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2/70 text-sm mt-4">
          {"Notice the pattern? Cold and raw foods are the enemy of Qi. Your body has to spend energy warming them up before it can even start digesting. For someone already low on Qi, that's energy you simply can't afford to waste."}
        </p>
      </section>

      {/* Simple recipe */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"A Simple Qi-Building Morning Routine"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"You don't need to overhaul your entire diet. Start with this: swap your morning iced coffee for a cup of warm ginger-jujube tea. Boil 3 slices of fresh ginger and 5 jujube dates in water for 10 minutes. Sip slowly. It takes 10 minutes to make, and most people with Qi Deficiency notice a difference within a week or two. Not cured — but noticeably less depleted."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Then, if you can, add a small bowl of congee (rice porridge) for breakfast instead of dry toast or cereal. Congee is the #1 recovery food in Chinese households for a reason — it takes almost no energy to digest, and it delivers steady, slow-releasing nourishment. Think of it as slow-charging your battery instead of trying to quick-charge it."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Always Tired"}</h3>
            <p className="text-text2 text-sm">{"Fatigue that doesn't improve with sleep is the core symptom of Qi Deficiency"}</p>
          </Link>
          <Link href="/patterns/low-vitality" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Low Vitality"}</h3>
            <p className="text-text2 text-sm">{"Chronically low energy and weak stamina define this pattern"}</p>
          </Link>
        </div>
      </section>

      {/* Related conditions - internal links */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Conditions You Might Also Notice"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Qi Deficiency rarely travels alone. If you're always tired, you might also notice some of these patterns:"}
        </p>
        <ul className="space-y-2">
          {[
            { text: "Cold hands and feet — this is Qi Deficiency's cousin, Yang Deficiency. When Qi is low for long enough, the warming energy drops too.", href: "/wellness/cold-hands-and-feet" },
            { text: "Night sweats or feeling hot at night — that's Yin Deficiency, where the cooling system is low. Some people have both Qi and Yin deficiency.", href: "/wellness/night-sweats-chinese-medicine" },
            { text: "Bloating and heaviness after eating — that's Damp accumulation, which often develops when Qi is too low to process fluids properly.", href: "/wellness/bloating-chinese-medicine" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">→</span>
              <Link href={item.href} className="leading-relaxed hover:text-accent transition-colors no-underline text-text2">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {"When to See a Doctor"}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is for wellness and self-awareness, not medical diagnosis. If your fatigue is severe, sudden, or accompanied by weight loss, fever, or night pain, please consult a licensed healthcare provider immediately. TCM constitution identification complements — but never replaces — professional medical evaluation."}
        </p>
      </section>

      {/* FAQ */}
      <FaqSection faqs={WELLNESS_FAQS["why-am-i-always-tired"]} />

      <SymptomCta />
    </main>
  )
}
