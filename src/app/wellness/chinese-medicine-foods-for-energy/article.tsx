"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function FoodsForEnergyArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Foods for Energy"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Chinese Medicine Foods for Energy: What to Eat When You're Always Tired"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"9 min read · Based on 3,000 years of Eastern body wisdom"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-text leading-relaxed">
          {"TL;DR — Chinese medicine says fatigue isn't one thing. It's a pattern. Qi deficiency, Yang deficiency, Dampness — each needs different foods. Sweet potato, congee, jujube, and ginger are top Qi-builders. Cold drinks and raw salads drain energy if you're already running low. The right food for YOUR body type matters more than generic \"healthy\" eating. Take a body type quiz to find your match."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Why Chinese Medicine Approaches Energy Differently"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Western energy advice is usually: sleep more, drink water, exercise. Solid advice, honestly. But Chinese medicine asks a different question: WHY is your energy low? Because in TCM, fatigue isn't one thing — it's a pattern. And different patterns need different foods."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Think of it this way. Two people walk into a clinic both saying \"I'm exhausted.\" One feels cold all the time, craves warmth, and gets tired after eating. The other feels wired-but-tired, gets afternoon crashes, and wakes up at 3am. Same complaint. Totally different patterns. Same \"energy-boosting\" advice won't work for both."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"If your Qi (vital energy) is low, you need Qi-boosting foods. If your Yang (warming energy) is low, you need warming foods. If Dampness is weighing you down, you need foods that dry and drain. Eating the wrong foods for your pattern can actually make you MORE tired. It's like putting diesel in a gas engine — the fuel might be \"good,\" but it's wrong for the system."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Top 10 Qi-Boosting Foods (Backed by 3,000 Years of Use)"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"These foods have been used across generations — in home kitchens, in herbal formulas, in postpartum recovery meals. They're not exotic. Most of them are probably in your pantry right now. What makes them special is how they work WITH your digestion instead of against it."}
        </p>
        <div className="space-y-3">
          {[
            { food: "Sweet potato", why: "Gentle, easy to digest, steadily builds Qi without overstimulating. Roasted, steamed, in soup — it's hard to get wrong." },
            { food: "Rice porridge (congee)", why: "The #1 recovery food in Chinese households — easy on the stomach, deeply nourishing. When someone's sick, tired, or recovering, this is what gets made." },
            { food: "Chinese dates (jujube)", why: "Used in nearly every Qi tonic recipe — mildly sweet, builds blood and energy. Simmer them in tea, toss them in soup, or just snack on a few." },
            { food: "Ginger", why: "Warms the stomach, improves absorption of all other foods — the catalyst. A few slices in hot water is maybe the simplest Qi-boosting habit you can start today." },
            { food: "Goji berries", why: "Gentle Qi and Yin tonic — perfect for tired eyes and brain fog. Don't eat handfuls though; a small pinch in tea or soup is the traditional way." },
            { food: "Chicken broth", why: "Warm, protein-rich, easy to absorb — the original energy drink. Slow-simmered with ginger and jujube is the classic combination." },
            { food: "Shiitake mushrooms", why: "Strengthens the spleen (the organ that makes Qi from food). Dried shiitake has a more concentrated effect — soak and add to soups or stir-fries." },
            { food: "Yam (Chinese yam)", why: "Mild and stabilizing — builds Qi while calming the digestion. It's one of those foods that seems boring but quietly does a lot of good." },
            { food: "Millet", why: "The grain for tired people — easy to digest, warming, nourishing. Cook it as porridge with a few jujubes and you've got a proper Qi-building breakfast." },
            { food: "Beef (in small amounts)", why: "Rich in Qi-building nutrients — but don't overdo it, heavy meats can slow digestion. A few thin slices in noodle soup is the sweet spot." },
          ].map((item, i) => (
            <div key={i} className="bg-cream/20 border border-border/50 rounded-xl p-4">
              <span className="font-semibold text-accent text-sm">{item.food}</span>
              <p className="text-sm text-text2 mt-1 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That Drain Your Energy"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"These aren't \"bad\" foods — but if you're already low on Qi, they make things worse by forcing your body to spend energy it doesn't have:"}
        </p>
        <ul className="space-y-2">
          {[
            "Ice water and cold drinks — your body wastes Qi heating them up to body temperature. Room temperature or warm is just... easier on your system.",
            "Raw salads in excess — raw food requires more digestive energy than cooked food. A little is fine. A giant bowl every day might not be.",
            "Too much caffeine — borrows energy from tomorrow to spend today. That afternoon crash? That's the loan coming due.",
            "Cold smoothies — same problem as ice water, but disguised as healthy. Your body still has to warm it up. That takes energy you might not have.",
            "Excessive sugar — gives a quick spike then a deeper dip. In TCM terms, it creates temporary heat that leaves you more depleted afterward.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What It's Like When You Eat Wrong for Your Type"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Maybe this sounds familiar. You wake up already tired. You grab a smoothie because it's \"healthy\" — but an hour later you feel even more sluggish. Lunch is a big raw salad. You feel virtuous for about 20 minutes, then the brain fog rolls in and you can barely keep your eyes open at your desk."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"By 3pm you're reaching for coffee or something sweet. It works for a bit. Then you crash harder. Dinner is whatever's easy — maybe cold leftovers, maybe takeout. You go to bed feeling heavy and wake up feeling like you didn't sleep at all."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"The thing is, none of these foods are evil. But if you're running on low Qi — and a lot of people are — cold, raw, and sugary foods are like pouring water on a dim fire. You keep eating \"right\" by conventional standards and feeling worse. That disconnect is frustrating. Chinese medicine offers a reason: you're eating for someone else's body type, not yours."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Simple Energy Meal Plan: A Sample Day of Qi-Building Meals"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"This isn't a prescription — just a rough template for someone with Qi deficiency. Adjust based on what you actually like and what's available. The idea is warm, cooked, easy-to-digest meals throughout the day."}
        </p>
        <div className="space-y-3">
          {[
            { meal: "Morning", desc: "Warm water with a few slices of fresh ginger. Then millet porridge with 3-4 jujubes and a small handful of goji berries. Simple, warming, and your stomach will thank you." },
            { meal: "Mid-morning", desc: "A small sweet potato — steamed or roasted. Maybe a cup of warm jujube tea if you're feeling fancy. No snacking rules here, just eat when you're genuinely hungry." },
            { meal: "Lunch", desc: "Rice with chicken broth soup, shiitake mushrooms, and a few slices of beef. Add some cooked greens — bok choy or spinach. Try to eat slowly. Your digestion needs time as much as it needs the right food." },
            { meal: "Afternoon", desc: "Instead of coffee, try warm water with goji berries and jujube. If you need something more substantial, a small bowl of congee. The 3pm slump is real — but caffeine isn't the only answer." },
            { meal: "Dinner", desc: "Congee with Chinese yam and shiitake. Light, warm, easy to digest before bed. Keep dinner smaller than lunch if you can — your body repairs at night, and a heavy meal gets in the way." },
          ].map((item, i) => (
            <div key={i} className="bg-cream/20 border border-border/50 rounded-xl p-4">
              <span className="font-semibold text-accent text-sm">{item.meal}</span>
              <p className="text-sm text-text2 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"The Key Insight"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"Eating the right food for YOUR body type matters more than eating \"healthy\" food in general. A salad that energizes one person can exhaust another. Chinese medicine gives you a personalized map — not generic advice. And honestly? That map might not look like what Instagram wellness tells you. That's okay. Your body runs on its own logic."}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"Medical Disclaimer"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is based on traditional Chinese dietary philosophy and is provided for informational purposes only. It is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for medical concerns."}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-foods-for-energy"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Always Tired"}</h3>
            <p className="text-text2 text-sm">{"Chronic fatigue that doesn't improve with sleep often points to Qi Deficiency"}</p>
          </Link>
          <Link href="/patterns/low-vitality" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Low Vitality"}</h3>
            <p className="text-text2 text-sm">{"Low energy and weak stamina are hallmarks of the Low Vitality pattern"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Related Articles"}</h2>
        <div className="space-y-3">
          <Link href="/wellness/why-am-i-always-tired" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Why Am I Always Tired? A Chinese Medicine Perspective"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"Understand the root patterns behind chronic fatigue — and why more sleep alone might not fix it."}</p>
          </Link>
          <Link href="/wellness/foods-that-warm-your-body" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"Foods That Warm Your Body: A Guide for Cold Types"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"If cold hands and feet are your constant companion, these warming foods can help from the inside out."}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-body-types" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{"The 9 Chinese Medicine Body Types: Which One Are You?"}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{"A complete guide to the 9 body constitutions — the foundation for all personalized TCM dietary advice."}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
