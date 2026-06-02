
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function AnxietyChineseMedicineArticle() {
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
        <span className="text-text2">{"Anxiety & Chinese Medicine"}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Anxiety & Chinese Medicine: Why Your Mind Races While Your Body Stalls"}
      </h1>
      <p className="text-text2 text-sm mb-6">
        {"8 min read · Based on 3,000 years of Eastern body wisdom"}
      </p>

      {/* TL;DR Summary */}
      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-2">
          {"TL;DR"}
        </h2>
        <ul className="text-sm text-text2 space-y-1.5">
          <li>
            <strong className="text-text">{"The pattern:"}</strong>{" "}
            {"Anxiety with chest tightness = Qi Stagnation (氣鬱)"}
          </li>
          <li>
            <strong className="text-text">{"The root:"}</strong>{" "}
            {"Energy builds up but can't flow freely — like a traffic jam in your chest"}
          </li>
          <li>
            <strong className="text-text">{"Key signs:"}</strong>{" "}
            {"Frequent sighing, mood swings, overthinking, better after venting"}
          </li>
          <li>
            <strong className="text-text">{"What helps:"}</strong>{" "}
            {"Rose tea, citrus, movement, breathing exercises — anything that gets Qi moving"}
          </li>
        </ul>
      </div>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"The Short Answer"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"In Traditional Chinese Medicine (TCM), anxiety that comes with chest tightness, frequent sighing, and mood swings is usually caused by Qi Stagnation (气郁, pronounced \"chee-yoo\"). Qi is your body's vital energy — it should flow smoothly like a river. When Qi stagnates, the energy builds up but can't move freely. It gets stuck, especially in the chest and ribcage, creating a pressure that your mind interprets as anxiety, restlessness, and that constant feeling that something isn't right."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Here's the thing — you're not running on empty. That's the key difference between Qi Stagnation and Qi Deficiency. With Qi Deficiency, you're genuinely tired, your voice is weak, you catch colds easily. With Qi Stagnation? You have energy. Sometimes too much energy. It's just... stuck. The engine is revving, but the car is in neutral."}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Think of It Like This"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Imagine a traffic jam on a six-lane highway. The cars (your energy) are all there — the fuel is fine, the engines are running. But nothing moves. The pressure builds. Horns blare. Everyone gets frustrated. That's Qi Stagnation. Your body has the energy it needs, but it's stuck in a bottleneck. The frustration you feel in traffic? That's exactly what your body feels when Qi can't flow. Your mind races because the energy has nowhere to go, and your body stalls because the signal to move never gets through."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Or think of a garden hose with a kink in it. The water pressure builds up behind the bend. Eventually, something has to give — either the hose bursts, or you unkink it. In your body, that \"bursting\" shows up as emotional outbursts, crying spells, or that moment when you snap at someone and immediately feel bad about it. The good news? Once you unkink the hose, the water flows freely again."}
        </p>
      </section>

      {/* Daily Life Impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"How This Shows Up in Daily Life"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Qi Stagnation doesn't just live in your chest. It leaks into everything. You might find yourself lying in bed at 2 AM, replaying a conversation from three days ago. Or standing in front of the fridge, hungry but unable to decide what to eat. Or snapping at your partner because they chewed too loudly — and then feeling terrible about it."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"The tricky part? You might look fine on the outside. Your blood tests come back normal. Your doctor says you're healthy. But inside, there's this constant hum of pressure that never quite resolves. It's like carrying a backpack full of rocks — you get used to the weight, forget it's there, until someone points out your posture is off."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Work becomes harder too. Not because you can't do the tasks — you absolutely can — but because starting feels impossible. The energy is there, revving, but the clutch won't engage. You scroll, you procrastinate, you tell yourself you'll start in five minutes. Five minutes becomes fifty. The pressure builds. Sound familiar?"}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {"Signs of Qi Stagnation — Do You Recognize These?"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Most people with this pattern recognize 3 or more:"}
        </p>
        <ul className="space-y-2">
          {[
            "Chest tightness or a feeling of pressure in your ribcage",
            "Frequent sighing — it feels like you can't get a full breath",
            "Mood swings that seem to come out of nowhere",
            "Overthinking even small decisions until you're paralyzed",
            "You feel noticeably better after crying or venting",
            "You've sighed so deeply your cat looked concerned",
            "Lying in bed, tired but mind won't stop racing",
            "Irritable over small things, then immediately feel guilty",
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
          {"Western medicine typically treats anxiety as a brain chemistry problem — low serotonin, overactive amygdala, neural misfiring. The solution? SSRIs to rebalance the chemicals. And for some people, that helps. But TCM sees anxiety differently: it's an energy flow problem. The fuel is there — you're not running on empty like Qi Deficiency. The pipes are blocked. Your body has plenty of energy, but it's trapped, creating pressure that manifests as racing thoughts, chest tightness, and that suffocating feeling of being stuck. Medication can dampen the alarm, but it doesn't clear the blockage."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This isn't about choosing one over the other. Western medicine excels at acute crises and structural problems. TCM excels at functional patterns — things that don't show up on tests but still make you feel terrible. If your anxiety is severe, medication might be necessary. But understanding the energy pattern gives you additional tools: foods, movements, breathing techniques that help unkink the hose from the inside."}
        </p>
      </section>

      {/* Simple Flow-Restoring Routine */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"A Simple Flow-Restoring Routine"}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"You don't need to overhaul your life. Small things, done consistently, can gradually unkink the hose. Here's a gentle routine that many people find helpful:"}
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Morning: Rose Tea"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Start your day with a cup of rose tea. In TCM, rose moves Qi and gently lifts the spirit. It's not a magic cure, but it sets a different tone for the day. Plus, the ritual itself — boiling water, steeping, smelling the floral steam — is a small act of self-care that signals to your nervous system: you matter."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Midday: Movement Break"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Qi Stagnation hates stillness. If you sit at a desk all day, the stagnation gets worse. Set a timer for every two hours. Stand up. Stretch your arms overhead. Do five shoulder rolls in each direction. Walk to the water cooler and back. Nothing dramatic — just enough to remind your Qi that it's allowed to move."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Evening: 4-7-8 Breathing"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Before bed, try this simple breathing technique: inhale for 4 counts, hold for 7, exhale slowly for 8. Do this four times. The extended exhale activates your parasympathetic nervous system — the \"rest and digest\" mode that Qi Stagnation keeps switched off. It's not a permanent fix, but it can help you fall asleep when your mind won't stop racing."}
            </p>
          </div>
        </div>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Foods That Help (and Harm) Qi Stagnation"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Food is one of the gentlest ways to influence Qi. The right foods help move energy; the wrong ones add to the traffic jam."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {"✓ Flow-Promoting Foods"}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Rose tea",
                "Citrus fruits",
                "Chamomile tea",
                "Peppermint",
                "Chrysanthemum tea",
                "Light soups",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {"✗ Stagnation-Worsening Foods"}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Excessive caffeine",
                "Alcohol",
                "Very spicy foods",
                "Heavy greasy meals",
                "Excessive sugar",
                "Processed foods",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4">
          {"A note on alcohol: it might feel like it helps in the moment — that glass of wine does loosen things up. But alcohol is tricky. It moves Qi temporarily, then creates more stagnation afterward. It's like taking a loan from tomorrow's peace to pay for tonight's relief. The interest is high."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-do-i-feel-anxious" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Anxious"}</h3>
            <p className="text-text2 text-sm">{"Anxiety and chest tightness often go hand in hand with Qi Stagnation"}</p>
          </Link>
          <Link href="/patterns/internal-heat" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Internal Heat"}</h3>
            <p className="text-text2 text-sm">{"Stagnant Qi can generate internal heat that agitates the mind"}</p>
          </Link>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Conditions"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Qi Stagnation often overlaps with other patterns. If you recognize yourself here, these related articles might help:"}
        </p>
        <div className="space-y-3">
          <Link
            href="/wellness/insomnia-chinese-medicine"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {"Insomnia & Chinese Medicine"}
            </h3>
            <p className="text-xs text-text2">
              {"Can't sleep because your mind won't stop? This often involves Yin Deficiency combined with Qi Stagnation."}
            </p>
          </Link>
          <Link
            href="/wellness/bloating-chinese-medicine"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {"Bloating & Chinese Medicine"}
            </h3>
            <p className="text-xs text-text2">
              {"Digestive issues with mood swings? Qi Stagnation often affects the digestive system too."}
            </p>
          </Link>
        </div>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {"When to See a Doctor"}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is for wellness and self-awareness, not medical diagnosis. If your anxiety is severe, persistent, or accompanied by panic attacks, heart palpitations, or thoughts of self-harm, please consult a licensed healthcare provider immediately."}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["anxiety-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
