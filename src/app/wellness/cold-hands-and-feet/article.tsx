"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ColdHandsArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Cold Hands & Feet"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Cold Hands and Feet? Chinese Medicine Explains Why"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Based on 3,000 years of Eastern body wisdom"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-3">{"TL;DR"}</h2>
        <ul className="text-sm text-text2 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Cold hands and feet with normal blood work usually signals Yang Deficiency in TCM"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Yang is your body's inner furnace — when it's weak, your body cuts heat to extremities to protect vital organs"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"Warming foods like ginger, cinnamon, and lamb can help rebuild Yang over time"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{"A simple morning ginger-cinnamon tea routine can make a noticeable difference"}</span>
          </li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"The Short Answer"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"In Traditional Chinese Medicine (TCM), chronically cold hands and feet — especially when your blood work is normal — is usually caused by Yang Deficiency (阳虚, pronounced \"yang-shoo\"). Yang is your body's warming, activating force. Think of it as your inner furnace. When Yang is low, your body prioritizes keeping your core warm and cuts off heat to your extremities."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This isn't just about feeling cold. Yang Deficiency affects your overall energy, digestion, and even how well you recover from illness. Most people with this pattern notice they're the first to reach for a sweater and the last to feel comfortable in air-conditioned spaces."}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Think of It Like This"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Your body is a house. Yang is the heating system. When the furnace is underpowered, it keeps the living room warm but the bedrooms stay freezing. No amount of blankets fixes a broken furnace — you need to turn up the heat from the inside."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Here's the thing: your body is smart. When Yang is running low, it makes a calculated decision. Your heart, lungs, kidneys, and other vital organs need warmth to function. So your body deliberately restricts blood flow to your hands and feet, sacrificing comfort to keep you alive. It's not a malfunction — it's a survival strategy that's working a little too well."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Yang Deficiency Feels Like Day to Day"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Living with Yang Deficiency isn't dramatic. It's a low-grade, persistent discomfort that most people just accept as \"how I am.\" You might wake up already feeling tired, even after a full night's sleep. Getting out of bed feels harder than it should. The morning shower is a negotiation — you stand under the hot water longer than anyone else in your household, dreading the moment you have to step out."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"Breakfast? You probably skip it or eat something light because your appetite hasn't really woken up yet. By mid-morning, your hands might be cold even though you're indoors. You keep a cardigan at your desk year-round. Colleagues joke about your personal heater collection."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Evenings bring their own challenges. You might find yourself reaching for socks in summer. Sleep is often restless — you wake up cold, or you've kicked off the covers because you got too hot, then wake up freezing an hour later. It's a cycle that leaves you feeling like you never quite rested."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{"Signs of Yang Deficiency"}</h2>
        <p className="text-text2 text-sm mb-4">{"Most people with this pattern recognize 3 or more:"}</p>
        <ul className="space-y-2">
          {[
            "Hands and feet are often cold, especially in winter",
            "You prefer hot food and drinks over cold ones",
            "You feel worse in cold or damp weather",
            "You urinate frequently, especially at night",
            "Lower back or knee soreness that worsens with cold",
            "You have a personal vendetta against whoever invented air conditioning",
            "Your digestion feels sluggish, especially after cold foods",
            "You catch colds easily and recover slowly",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Warming Foods for Yang Deficiency"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is one of the most accessible ways to support Yang. The principle is simple: warm foods help build warm energy. This doesn't mean eating everything piping hot — it's about the energetic nature of the food itself. Ginger, for example, is warming even when added to room-temperature dishes."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"✓ Warming Foods"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {["Ginger", "Cinnamon", "Lamb", "Onion & leek", "Walnuts", "Black pepper"].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{"✗ Cooling Foods"}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {["Ice water & cold drinks", "Raw vegetables", "Watermelon", "Excessive fruit", "Seaweed", "Green tea (excessive)"].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          {"You don't need to eliminate cooling foods entirely. Just be mindful of balance. If you're having a salad on a cold day, add some ginger dressing. Craving watermelon in summer? Have it at noon when Yang is naturally stronger, not in the evening."}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-accent/30 rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Simple Warming Morning Routine"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Small habits compound over time. Here's a gentle routine that many people find helpful. It takes about 5 minutes and costs almost nothing."}
        </p>
        <div className="bg-bg/50 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-accent mb-3">{"Ginger-Cinnamon Morning Tea"}</h3>
          <ul className="text-sm text-text2 space-y-2">
            <li className="flex gap-2">
              <span className="text-accent font-medium">1.</span>
              <span>{"Slice 3-4 thin pieces of fresh ginger (no need to peel)"}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">2.</span>
              <span>{"Add a small cinnamon stick or 1/4 tsp ground cinnamon"}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">3.</span>
              <span>{"Pour hot water over and steep for 5 minutes"}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">4.</span>
              <span>{"Optional: add a small piece of red date (jujube) for sweetness"}</span>
            </li>
          </ul>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          {"Drink this warm, not scalding hot, on an empty stomach if possible. Many people notice they feel warmer within 20-30 minutes. The effect is subtle but builds over weeks of consistent practice. If you have acid reflux or a \"hot\" constitution, check with a practitioner first."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-am-i-always-cold" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Always Cold"}</h3>
            <p className="text-text2 text-sm">{"Feeling cold even when others are comfortable is a key sign of Yang Deficiency"}</p>
          </Link>
          <Link href="/patterns/cold-sensitivity" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Cold Sensitivity"}</h3>
            <p className="text-text2 text-sm">{"Persistent sensitivity to cold environments often points to this pattern"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Related Conditions"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Yang Deficiency rarely shows up alone. It often overlaps with other patterns that share similar roots."}
        </p>
        <div className="space-y-3">
          <Link href="/wellness/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{"Why Am I Always Tired?"}</h3>
            <p className="text-xs text-text2">{"Fatigue is one of the most common companions of Yang Deficiency — your inner furnace can't generate enough energy"}</p>
          </Link>
          <Link href="/wellness/foods-that-warm-your-body" className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{"Foods That Warm Your Body"}</h3>
            <p className="text-xs text-text2">{"A deeper dive into warming ingredients and how to incorporate them into daily meals"}</p>
          </Link>
          <Link href="/wellness/insomnia-chinese-medicine" className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{"Insomnia & Chinese Medicine"}</h3>
            <p className="text-xs text-text2">{"Poor sleep and cold extremities often go together — both can stem from the same underlying imbalance"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {"This information is for wellness and self-awareness, not medical diagnosis. Cold extremities can also be caused by Raynaud's, thyroid issues, or circulatory problems. If your fingers turn white or blue, or if coldness is sudden and one-sided, consult a doctor immediately."}
        </p>
        <p className="text-sm text-text2 leading-relaxed">
          {"Also worth noting: if cold hands and feet appeared suddenly rather than gradually over years, or if they're accompanied by other symptoms like unexplained weight changes, hair loss, or skin color changes, that's worth getting checked out. Trust your instincts — you know your body best."}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["cold-hands-and-feet"]} />

      <SymptomCta />
    </main>
  )
}
