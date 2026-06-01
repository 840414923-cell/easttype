"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function InsomniaChineseMedicineArticle() {

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
        <span className="text-text2">{"Insomnia & Chinese Medicine"}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Insomnia & Chinese Medicine: Why You Can't Fall (or Stay) Asleep"}
      </h1>
      <p className="text-text2 text-sm mb-6">
        {"8 min read · Based on 3,000 years of Eastern body wisdom"}
      </p>

      {/* TL;DR Summary */}
      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-2">
          {"TL;DR"}
        </h2>
        <ul className="text-text2 text-sm space-y-1.5">
          {[
            "TCM sees insomnia as a Yin Deficiency problem — your body lacks the cooling force to settle at night",
            "Yin is like your body's internal AC; when it's low, heat builds up and your mind races",
            "Cooling foods (lily bulb, pear, lotus seed) help; spicy, fried, and alcoholic foods make it worse",
            "A simple evening routine — warm foot soak, screen cutoff, herbal tea — can shift things noticeably",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent/60 mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"The Short Answer"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"In Traditional Chinese Medicine (TCM), insomnia that worsens at night is usually caused by Yin Deficiency (阴虚, pronounced \"yeen-shoo\"). Yin is your body's cooling and moistening force — think of it as the water that balances the fire. When Yin is low, internal heat builds up at night when there's no external activity to dissipate it. Your mind becomes overactive because the \"fire\" has no \"water\" to balance it."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This isn't a metaphor TCM invented for convenience. It's a framework that's been tested across literally billions of patient encounters over centuries. Whether you find it poetic or peculiar, the pattern holds: people with Yin deficiency share a remarkably consistent cluster of symptoms, and the same cooling-nourishing approach tends to help them. Coincidence? Maybe. But after three thousand years of observation, it's probably not a random one."}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Think of It Like This"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Imagine a house with broken air conditioning in summer. During the day, you're distracted by activity — work, conversations, movement. But at night, when everything quiets down, the heat becomes unbearable. You toss and turn, unable to settle. That's exactly what Yin-deficient people experience: the heat was always there, but it only becomes intolerable when the distractions stop."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Now here's the part that catches people off guard: cranking the real AC lower doesn't fix it. The problem isn't the room temperature. It's that your body has lost its own ability to regulate internal heat. External cold might feel nice temporarily, but it doesn't replenish the Yin. You need to rebuild the body's own cooling system from the inside. That's where food, herbs, and daily habits come in — not just a thicker blanket or a colder bedroom."}
        </p>
      </section>

      {/* Daily Life Impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"How This Affects Your Daily Life"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Yin deficiency doesn't just steal your sleep. It quietly reshapes your entire day, and you might not even notice the connection. You wake up tired — not the refreshing kind of tired from a long hike, but the hollow, wrung-out kind that makes you question whether you slept at all. By mid-morning you're reaching for coffee. By 3 PM you hit a wall so hard you wonder if your body is secretly staging a protest."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"Your patience thins out. Things that normally roll off you suddenly feel personal. A colleague's innocent question feels like an interrogation. Your partner's chewing sounds like a construction site. Sound familiar? That irritability isn't a character flaw — it's your depleted Yin letting internal heat flare into your emotions."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"And then there's the cruel irony: you're exhausted all day, but the moment your head hits the pillow, your brain decides it's the perfect time to replay every awkward conversation from the past decade. Or plan tomorrow's grocery list in excruciating detail. Or suddenly remember that one thing you said in 2019 that nobody else even recalls. The exhaustion is real, but so is the wired feeling. Both can be true at once, and in TCM, that paradox is the hallmark of Yin deficiency."}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {"Signs of Yin Deficiency — Do You Recognize These?"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Most people with this pattern recognize 3 or more:"}
        </p>
        <ul className="space-y-2">
          {[
            "Warm or flushed feeling, especially in the afternoon or evening",
            "Dry mouth and throat, even after drinking water",
            "Trouble staying asleep — you fall asleep but wake in the night",
            "You prefer cold drinks over hot ones",
            "Skin or eyes sometimes feel dry and irritated",
            "Your best ideas come at midnight, your worst decisions at noon",
            "Night sweats — you wake up with damp sheets or a clammy chest, even when the room isn't hot",
            "A vague sense of restlessness in your body — not anxiety exactly, more like your muscles can't fully relax",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What Western Medicine Misses */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"What Western Medicine Misses"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Western medicine typically treats insomnia with melatonin supplements, sleep hygiene protocols, or sedatives. These can help temporarily, but they don't address the root cause. TCM asks: why is your body generating excess heat at night? The answer is Yin deficiency — your body doesn't have enough cooling, moistening force to let you truly rest."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"To be fair, Western sleep hygiene advice — dark room, no screens, consistent schedule — is solid. Nobody's arguing against that. The gap is that Western medicine tends to stop at behavioral adjustments. If those don't work, the next step is usually medication. TCM fills the space in between: it looks at what your body is doing wrong internally and tries to correct that pattern before resorting to drugs."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Think of it this way. If your car engine is overheating, you could drive with the windows down and the heater off. That might buy you some time. Or you could check whether the coolant reservoir is empty. Western sleep hygiene is the windows-down approach. TCM is checking the coolant."}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Foods That Help (and Harm) Yin Deficiency"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Food is medicine in TCM — not in a trendy Instagram way, but in a \"this has been prescribed for centuries\" way. What you eat directly feeds or depletes your Yin. The list below isn't exhaustive, but it covers the most impactful items."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {"✓ Cooling & Nourishing Foods"}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Lily bulb (Bai He)",
                "Lotus seed",
                "Pear",
                "Watermelon",
                "Mung bean soup",
                "Tremella mushroom",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {"✗ Heating & Drying Foods"}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Spicy foods",
                "Alcohol",
                "Lamb",
                "Excessive coffee",
                "Fried foods",
                "Garlic in large amounts",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          {"A quick note: you don't need to eat all the cooling foods or ban every heating one forever. That's not realistic, and honestly, it's not necessary. Just tilt the balance. If you've been eating spicy takeout four nights a week, maybe try three. Add a pear after dinner. Small shifts compound over time — that's the TCM philosophy in a nutshell."}
        </p>
      </section>

      {/* Simple Sleep Routine */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"A Simple Sleep Routine for Yin Deficiency"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"You've probably read a hundred \"sleep hygiene\" lists. This one is different because it's built specifically around the Yin deficiency pattern. The goal isn't just to fall asleep — it's to help your body rebuild its cooling capacity over time."}
        </p>
        <div className="space-y-4">
          {[
            {
              time: "90 min before bed",
              action: "Warm foot soak (15–20 min). This sounds oddly specific, but in TCM the feet are where several Yin-meridians converge. Soaking them in warm water draws heat downward and away from your head — which is exactly where it's keeping you awake. Add a pinch of sea salt if you want to feel fancy about it.",
            },
            {
              time: "60 min before bed",
              action: "Screens off. Yes, you've heard this before. But for Yin-deficient people it matters more because the blue light doesn't just suppress melatonin — it stokes the internal fire. Your brain interprets that light as daytime, which means it keeps the Yang (active energy) running when it should be winding down. Read a book instead. A paper one. Remember those?",
            },
            {
              time: "30 min before bed",
              action: "A small cup of warm, non-caffeinated tea. Chrysanthemum (Ju Hua) is ideal — it's a classic Yin-nourishing herb that's been used for this exact purpose for centuries. If you can't find chrysanthemum, warm water with a bit of honey works too. The warmth itself is paradoxically cooling in TCM logic: it gently opens your pores and lets surface heat escape. Don't ask me to explain the physics. It just tends to work.",
            },
            {
              time: "In bed",
              action: "Don't try to force sleep. That's the fastest way to guarantee you won't get it. Instead, focus on slow breathing — inhale for 4 counts, exhale for 6. The longer exhale activates your parasympathetic nervous system. If your mind is still racing, let it race — but imagine the thoughts are on a conveyor belt, moving past you without requiring your engagement. Sounds a bit woo-woo, I know. But it beats counting sheep, which is basically just giving your brain more homework.",
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-accent font-medium text-sm whitespace-nowrap mt-0.5">{step.time}</span>
              <p className="text-text2 text-sm leading-relaxed">{step.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {"When to See a Doctor"}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is for wellness and self-awareness, not medical diagnosis. If your insomnia is severe, persistent, or accompanied by chest pain, palpitations, severe anxiety, or thoughts of self-harm, please consult a licensed healthcare provider immediately."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Waking At 3AM"}</h3>
            <p className="text-text2 text-sm">{"Waking up in the middle of the night is a hallmark of Yin Deficiency insomnia"}</p>
          </Link>
          <Link href="/patterns/internal-heat" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Internal Heat"}</h3>
            <p className="text-text2 text-sm">{"Nighttime heat buildup is often the root cause of sleep disturbances"}</p>
          </Link>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Conditions"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Yin deficiency rarely shows up alone. If insomnia sounds familiar, these related patterns might too:"}
        </p>
        <div className="space-y-3">
          <Link
            href="/wellness/night-sweats-chinese-medicine"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {"Night Sweats & Chinese Medicine →"}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {"Waking up drenched? Night sweats and insomnia often share the same Yin-deficient root."}
            </p>
          </Link>
          <Link
            href="/wellness/anxiety-chinese-medicine"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {"Anxiety & Chinese Medicine →"}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {"That racing mind at 2 AM? It's not just overthinking — it's internal heat disturbing the Heart-Shen."}
            </p>
          </Link>
          <Link
            href="/wellness/why-am-i-always-tired"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {"Why Am I Always Tired? →"}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {"Poor sleep leads to daytime exhaustion, but the fatigue pattern might point to a different body type."}
            </p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["insomnia-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
