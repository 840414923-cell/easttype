"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function AcneArticle() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span><span className="text-text2">{"Acne"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Acne & Chinese Medicine: Why Breakouts Start From the Inside"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"8 min read · Based on 3,000 years of Eastern body wisdom"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-text2 leading-relaxed text-sm">
          {"TL;DR — Persistent acne (especially jawline, lower face, back) is usually Damp Heat in Chinese medicine: sticky warmth trapped inside, pushing out through skin. Creams only paint the surface. Real improvement comes from cooling and draining the interior — through food, daily habits, and simple routines like mung bean soup. This article walks you through the signs, the foods, a 3-day heat-clearing routine, and when to see a doctor."}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"The Short Answer"}</h2>
        <p className="text-text2 leading-relaxed">
          {"Western dermatology treats acne as a surface problem: clogged pores, bacteria, excess oil. Chinese medicine asks: WHY is there excess oil and inflammation in the first place? In TCM, persistent acne — especially on the lower face, jawline, and back — is usually caused by Damp Heat (湿热, pronounced \"sheh-ruh\"). This means there's sticky warmth trapped inside your body, and it's pushing its way out through your skin."}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {"It's probably not just one thing, though. Damp Heat doesn't appear out of nowhere — it tends to build up slowly from a combination of diet, stress, and maybe even your environment. Some people seem more prone to it than others, and the reasons aren't always obvious. What Chinese medicine tries to do is look at the whole picture rather than zeroing in on a single cause."}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Think of It Like This"}</h2>
        <p className="text-text2 leading-relaxed">
          {"Your body is a house with a furnace (Yang) and a ventilation system (Yin). Damp Heat means the furnace is cranked up, but the vents are clogged with sticky humidity. The heat can't escape through the proper channels, so it bursts through the walls — that's your skin breaking out. Creams and washes only paint over the cracks. To really fix it, you need to turn down the furnace AND clear the vents."}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {"Now, this analogy isn't perfect — bodies are messier than houses. But it gives you a rough sense of why slapping cream on a breakout might help temporarily, yet the next one keeps coming back in the same spot. The source is still inside, doing its thing."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{"Signs of Damp Heat"}</h2>
        <p className="text-text2 text-sm mb-4">{"Most people with this pattern recognize 3 or more:"}</p>
        <ul className="space-y-2">
          {[
            "You feel hot and sticky, especially in warm or humid weather",
            "You're prone to acne, rashes, or skin redness",
            "You have a bitter or sticky taste in your mouth in the morning",
            "You feel irritable and impatient when it's hot",
            "You've been told 'you're a lot' at least 17 times in your life",
            "Your urine tends to be dark yellow with a strong smell",
            "You often feel heavy and sluggish, like your body is weighed down",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How Damp Heat Affects Daily Life"}</h2>
        <p className="text-text2 leading-relaxed">
          {"Damp Heat doesn't just show up on your face. It kind of seeps into everything — or at least, that's how a lot of people describe it. You might wake up already feeling like the day is too much, even before anything has happened. The afternoon slump hits harder, and it's not just sleepiness — it's more like your whole body is wading through something thick."}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {"Social situations can feel extra draining. When you're already running hot and sticky inside, being in a crowded room or a warm restaurant can push you over some invisible edge. You might snap at people without meaning to, then feel bad about it five minutes later. It's not that you're a difficult person — your internal thermostat is just stuck on 'too much.'"}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {"Sleep can be oddly restless too. You'd think being tired would make you sleep well, but Damp Heat has a way of keeping you half-awake, maybe sweating a little, maybe having vivid dreams that leave you more tired in the morning. It's frustrating — and that frustration itself might add more heat to the mix. A not-so-great cycle, if you think about it."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Foods That Clear Damp Heat"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Food is probably the most accessible lever you have. It's not a magic switch, but shifting your diet even a little toward cooling, draining foods can make a noticeable difference over a few weeks — or at least, that's what many practitioners have observed."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"✓ Heat-Clearing Foods"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {["Mung beans", "Bitter melon", "Cucumber", "Green tea", "Lotus root", "Watermelon"].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{"✗ Heat-Adding Foods"}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {["Spicy food (chili, pepper)", "Fried food", "Alcohol", "Excessive red meat", "Chocolate & sweets", "Excessive coffee"].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Simple Heat-Clearing Routine"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"You don't need to overhaul your entire life. Even small, consistent adjustments can help — though, to be honest, results vary from person to person. Here's a gentle 3-day routine you could try, just to see how your body responds."}
        </p>

        <div className="space-y-4">
          <div className="bg-cream/40 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-accent mb-2">{"Day 1 — Start Cooling"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              <li>{"Morning: Swap coffee for green tea (it's gentler and naturally cooling)"}</li>
              <li>{"Lunch: Add a side of cucumber or bitter melon to your meal"}</li>
              <li>{"Evening: Take a short walk after dinner — movement helps circulate stuck heat"}</li>
            </ul>
          </div>

          <div className="bg-cream/40 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-accent mb-2">{"Day 2 — Drain Dampness"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              <li>{"Morning: Drink a cup of warm water with a slice of fresh ginger (sounds counterintuitive, but ginger can actually help 'open' the vents)"}</li>
              <li>{"Meals: Keep things light — congee, steamed vegetables, maybe some lotus root soup"}</li>
              <li>{"Evening: Avoid heavy, fried, or spicy food — give your digestion a break"}</li>
            </ul>
          </div>

          <div className="bg-cream/40 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-accent mb-2">{"Day 3 — Mung Bean Soup Day"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              <li>{"Make a batch of mung bean soup (recipe below) and have a bowl with lunch and another in the evening"}</li>
              <li>{"Continue the light eating pattern from Day 2"}</li>
              <li>{"Before bed: soak your feet in warm water for 10 minutes — it sounds odd, but drawing heat downward can help"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-accent/8 border border-accent/20 rounded-xl p-5">
          <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"Mung Bean Soup Recipe"}</h3>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            {"This is about as simple as it gets. Mung beans are one of the most classic heat-clearing foods in Chinese medicine — they've been used this way for centuries, give or take."}
          </p>
          <ul className="text-sm text-text2 space-y-1.5 mb-3">
            <li>{"1 cup dried mung beans, rinsed"}</li>
            <li>{"6 cups water"}</li>
            <li>{"Rock sugar or honey to taste (optional — skip if you want it strictly cooling)"}</li>
          </ul>
          <p className="text-sm text-text2 leading-relaxed mb-1">
            {"Bring the beans and water to a boil, then reduce heat and simmer for about 40–50 minutes until the beans split open and the liquid turns slightly cloudy. Add sweetener if you like. Drink warm or at room temperature — iced isn't ideal because extreme cold can actually slow down the draining process, which seems a bit unfair but there it is."}
          </p>
          <p className="text-sm text-text2 leading-relaxed">
            {"Store leftovers in the fridge for up to 2 days. Some people say it tastes better the next day — your mileage may vary."}
          </p>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is for wellness and self-awareness, not medical diagnosis. Severe or cystic acne should be evaluated by a dermatologist. If acne is painful, leaving scars, or not responding to over-the-counter treatments, consult a licensed healthcare provider."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/patterns/internal-heat" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Internal Heat"}</h3>
            <p className="text-text2 text-sm">{"Damp Heat often involves internal heat buildup that pushes through the skin as breakouts"}</p>
          </Link>
          <Link href="/patterns/heavy-and-sluggish" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Heavy & Sluggish"}</h3>
            <p className="text-text2 text-sm">{"The heavy, sticky feeling of Dampness often accompanies acne breakouts"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Related Conditions"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Damp Heat rarely travels alone. If this sounds like you, you might also recognize yourself in these related patterns:"}
        </p>
        <div className="space-y-3">
          <Link href="/wellness/bloating-chinese-medicine" className="block bg-cream/40 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{"Bloating & Chinese Medicine"}</h3>
            <p className="text-xs text-text2">{"Dampness often shows up as bloating and digestive heaviness — another vent that's clogged."}</p>
          </Link>
          <Link href="/wellness/anxiety-chinese-medicine" className="block bg-cream/40 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{"Anxiety & Chinese Medicine"}</h3>
            <p className="text-xs text-text2">{"Heat can agitate the mind as much as the skin — irritability and restlessness often go hand in hand with breakouts."}</p>
          </Link>
          <Link href="/wellness/insomnia-chinese-medicine" className="block bg-cream/40 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{"Insomnia & Chinese Medicine"}</h3>
            <p className="text-xs text-text2">{"That restless, half-awake sleep we mentioned? It might be worth looking into the insomnia pattern too."}</p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["acne-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
