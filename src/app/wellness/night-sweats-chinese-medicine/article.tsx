
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function NightSweatsArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Night Sweats"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Night Sweats: What Chinese Medicine Says About Waking Up Hot"}
      </h1>
      <p className="text-text2 text-sm mb-10">{"8 min read · Based on 3,000 years of Eastern body wisdom"}</p>

      <section className="mb-10 bg-accent/8 border border-accent/20 rounded-xl p-5">
        <p className="text-text/90 leading-relaxed text-[0.95rem]">
          {"If you wake up sweaty and hot — but your room isn't — Chinese medicine says it's usually Yin Deficiency (阴虚). Your body's cooling system is running low. The fix isn't just turning down the thermostat. It's eating moistening, cooling foods (pear, lily bulb, mung bean soup) and avoiding spicy, heating foods that add fuel to the fire. About 10-15% of people have this pattern, and it tends to show up more after 40."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"The Short Answer"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Traditional Chinese Medicine (TCM), night sweats — especially when they're not caused by room temperature, menopause, or infection — are usually a sign of Yin Deficiency (阴虚, pronounced \"een-shoo\"). Yin is your body's cooling, moistening force. When Yin is low, there's not enough \"water\" to balance the \"fire,\" so internal heat builds up, especially at night when Yang energy should be resting."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Here's what confuses a lot of people: you might feel perfectly fine during the day. Maybe even a little cold. But when night comes and your body should be cooling down, something misfires. The heat that was absorbed during the day has nowhere to go. So it pushes out through your skin — as sweat."}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Think of It Like This"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Your body is an engine. Yang is the gas pedal, Yin is the coolant. If your coolant is low, the engine overheats — not because you're pressing the gas too hard, but because there's nothing to absorb the heat. That's why you wake up at 3 AM feeling like a slow-burning ember: the daytime heat hasn't been absorbed and released."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Most people find this analogy helpful because it explains something counterintuitive: you can have \"internal heat\" while feeling cold on the surface. The heat is trapped inside, and at night, when your body tries to rest, it escapes the only way it can — through sweating."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{"Signs of Yin Deficiency"}</h2>
        <p className="text-text2 text-sm mb-4">{"Most people with this pattern recognize 3 or more:"}</p>
        <ul className="space-y-2">
          {[
            "You feel warm or flushed, especially in the afternoon and evening",
            "Your mouth and throat feel dry, even after drinking water",
            "You have trouble staying asleep — you wake up in the night",
            "You prefer cold food and drinks over hot ones",
            "Your skin or eyes sometimes feel dry and irritated",
            "Your best ideas come at midnight and your worst decisions come at noon",
            "You feel restless or anxious in the evening, like your mind won't quiet down",
            "Your palms and soles sometimes feel hot for no reason",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text2/70 text-sm mt-4">
          {"If you checked 4 or more, there's a good chance Yin Deficiency is part of your pattern. The free quiz at the end gives you a personalized reading across all 9 body types."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"What Yin Deficiency Actually Feels Like Day to Day"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"It's not just about night sweats. Yin Deficiency colors your whole day, often in ways you might not connect. You might notice that you get irritable in the late afternoon, when your internal heat peaks. Or that you crave cold drinks constantly, even in winter. Some people with this pattern find they're most creative at night but completely foggy in the morning — that's the \"fire\" burning bright when it should be dimming."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Sleep becomes a particular struggle. You fall asleep fine, but then you wake up around 2 or 3 AM — hot, sweaty, mind racing. The sweat isn't the kind you get from exercise or a hot room. It's more like a damp film on your skin. You might have to change your pajamas or even your sheets. And when you finally get back to sleep, you wake up feeling like you barely rested."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Yin Deficiency tends to develop slowly, often over years. It's common after periods of prolonged stress, after having children, or simply as we age. In TCM theory, Yin naturally declines with age — which is why night sweats and hot flashes become more common after 40, even outside of menopause."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Cooling Foods for Yin Deficiency"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"In TCM, food is your first line of defense. Not supplements, not herbs — everyday food, chosen wisely. The principle is simple: add moistening, cooling foods; reduce heating, drying ones. You're not just eating for nutrition. You're eating to restore the water-to-fire ratio in your body."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"✓ Nourishing (Moistening) Foods"}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {["Pear", "Lily bulb", "Black sesame", "Tofu", "Mung bean soup", "Honey water (room temp)", "Tremella mushroom", "Lotus root"].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{"✗ Heating Foods to Limit"}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {["Spicy food (chili, pepper)", "Excessive coffee", "Alcohol", "Lamb and heavy meats", "Deep-fried food", "Excessive ginger/garlic"].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2/70 text-sm mt-4">
          {"Notice the pattern? These aren't random rules. Spicy and fried foods literally add heat to your system. For someone with Yin Deficiency, that's like pouring gasoline on a fire that's already struggling to contain itself."}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"A Simple Cooling Evening Routine"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"You don't need to change everything. Start with this: a small bowl of lily bulb and pear soup, 2-3 hours before bed. It's a classic TCM remedy that's been used for centuries, and most people find it genuinely helps within a week or two."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Here's how to make it: slice half a pear (any kind works, but Asian pear is traditional). Add a handful of dried lily bulb (available at Asian grocery stores). Simmer in 2 cups of water for 20-30 minutes, until the pear is soft. Drink the liquid warm, and eat the pear if you like. No sugar needed — the pear is naturally sweet."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Then, if you can, avoid screens for the last hour before bed. The blue light stimulates Yang energy when it should be winding down. For someone with Yin Deficiency, that's working against your body's natural rhythm. Read a book instead, or just sit quietly. You might notice the difference faster than you expect."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-do-i-have-night-sweats" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Night Sweats"}</h3>
            <p className="text-text2 text-sm">{"Waking up drenched in sweat is the defining symptom of this pattern"}</p>
          </Link>
          <Link href="/patterns/internal-heat" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Internal Heat"}</h3>
            <p className="text-text2 text-sm">{"Night sweats are often caused by internal heat escaping through the skin at night"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Related Conditions You Might Also Notice"}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Yin Deficiency rarely travels alone. If night sweats sound familiar, you might also recognize some of these patterns:"}
        </p>
        <ul className="space-y-2">
          {[
            { text: "Insomnia — especially the kind where you fall asleep fine but wake up at 2-3 AM with your mind racing. That's the internal heat disturbing your spirit.", href: "/wellness/insomnia-chinese-medicine" },
            { text: "Anxiety and restlessness — that keyed-up feeling, especially in the evening. Yin Deficiency and anxiety often go hand in hand.", href: "/wellness/anxiety-chinese-medicine" },
            { text: "Dry skin and eyes — when Yin (the moistening force) is low, your body prioritizes essential organs. Skin and eyes get what's left, which isn't much.", href: "/wellness/chinese-medicine-body-types" },
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

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"When to See a Doctor"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is for wellness and self-awareness, not medical diagnosis. Night sweats can also be caused by menopause, infections (including tuberculosis), thyroid disorders, or certain medications. If night sweats are drenching, persistent, or accompanied by fever or weight loss, consult a doctor immediately."}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["night-sweats-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
