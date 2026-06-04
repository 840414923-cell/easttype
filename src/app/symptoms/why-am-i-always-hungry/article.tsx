import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysHungryArticle() {
  const slug = "why-am-i-always-hungry"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Appetite</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Hungry? The Stomach That Never Sends the &apos;Full&apos; Signal
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You just finished lunch twenty minutes ago and your stomach is already rumbling again. You look around wondering if anyone else feels this way, but everyone else seems fine. It&apos;s frustrating, a little embarrassing, and honestly exhausting. You start thinking about food the way some people think about their phones: always checking, always needing a recharge.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          I used to think I just had no willpower. That I loved food too much. But then I noticed something odd: I wasn&apos;t hungry for anything specific. I was just hungry in general, like a bottomless pit that no amount of pasta could fill. That&apos;s when I started looking into what Chinese medicine says about constant hunger, and it turned out to be one of those &quot;oh, that explains everything&quot; moments.
        </p>
        <p className="text-text2 leading-relaxed">
          This page is for people who eat well, eat enough, and still feel like their stomach missed the memo. Let&apos;s talk about why that happens and what your body might be trying to tell you.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Constant Hunger Actually Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this sounds like you, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Finishing a full meal and feeling hungry again within an hour",
            "Never reaching that satisfied, content feeling after eating",
            "Thinking about the next meal while still eating the current one",
            "Waking up in the middle of the night with hunger pangs",
            "Snacking constantly but never feeling like you ate anything real",
            "Feeling shaky, irritable, or anxious when you go too long without food",
            "Eating large portions that seem to vanish without leaving you full",
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
          Before exploring Eastern perspectives, let&apos;s cover the usual suspects. Not eating enough protein or healthy fats is a big one. If your meals are mostly carbs, your blood sugar spikes and crashes like a rollercoaster, and each crash screams &quot;feed me.&quot; Dehydration can also masquerade as hunger. Your brain sometimes confuses thirst signals with hunger signals, and by the time you figure it out, you&apos;ve already eaten a whole bag of chips.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other possibilities: an overactive thyroid, blood sugar instability, certain medications that increase appetite, not enough sleep (sleep deprivation spikes ghrelin, your hunger hormone), and high-intensity exercise without adequate refueling. If you&apos;re constantly hungry alongside weight loss, rapid heartbeat, or anxiety, get your thyroid checked.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get normal results on all these checks and still feel like a walking appetite. Their meals are balanced, their blood work is fine, their sleep is decent. The hunger just doesn&apos;t quit. That&apos;s when Chinese medicine offers a different angle.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Constant Hunger
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, the stomach is like a cooking pot. Food goes in, gets &quot;cooked&quot; by your digestive fire, and turns into energy and nourishment. When that fire is too weak, food passes through without being properly processed. Your body gets the calories but not the nourishment, so it keeps sending the &quot;I&apos;m still hungry&quot; signal. It&apos;s like putting wood on a fire that&apos;s too small to burn it. The wood is there, but you&apos;re still cold.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is often tied to Spleen Qi Deficiency. The Spleen in TCM is responsible for transforming food into usable energy. When it&apos;s running below capacity, you eat more but absorb less. Your body keeps requesting fuel because the fuel it&apos;s getting isn&apos;t being converted properly. Think of a leaky fuel tank. You keep filling it, but it never stays full because something is draining it from the bottom.
        </p>
        <p className="text-text2 leading-relaxed">
          There&apos;s another pattern called Stomach Fire or Stomach Heat, where the digestive fire is actually too strong. Instead of being hungry because you&apos;re not absorbing, you&apos;re hungry because the fire is burning through food too fast. People with this pattern often feel hungry soon after eating, have a strong appetite, may experience acid reflux or bad breath, and feel warm overall. It&apos;s like a furnace that burns too hot and consumes everything you throw in.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Bottomless Stomach
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and constant hunger shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) may seem like an odd match for hunger since they often carry extra weight, but their hunger is real. Their digestive system is sluggish and inefficient, so even though they&apos;re eating, their body isn&apos;t extracting nourishment properly. The result is a weird combination: feeling hungry all the time while also feeling heavy and bloated. About 10% of people fall into this pattern. Their hunger is like a car that&apos;s getting plenty of gas but the engine can&apos;t burn it efficiently.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) experiences hunger from a different angle. Yin is the cooling, moistening, nourishing aspect of your body. When Yin is low, there&apos;s a relative excess of heat, and that heat can translate into a strong appetite. These folks often feel warm, have dry mouth, and may experience night sweats alongside their constant hunger. Their internal fire is burning too bright.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Calm the Hunger
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If your hunger comes from weak digestion (Spleen Qi Deficiency), the approach is about strengthening your digestive fire. Warm, cooked, easy-to-digest meals are your best friend. Think soups, stews, congee, and steamed vegetables. Avoid ice-cold drinks and raw foods, which force your digestive system to work overtime just to warm everything up before it can process it. Add ginger, fennel, and cardamom to your cooking. These are warming spices that support digestion in TCM.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If your hunger comes from excess heat (Yin Deficiency), the focus shifts to cooling and moistening. Foods like pear, lotus root, lily bulb, tremella mushroom, and mung bean soup are traditional choices. Avoid spicy food, fried food, and excessive alcohol, all of which add heat to an already overheated system. Warm (not hot) water with a little honey can be soothing.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Eat slowly and chew thoroughly. This sounds obvious, but in TCM, digestion starts in your mouth. The more you break food down before swallowing, the less work your Spleen has to do. People who eat fast often eat more because the &quot;full&quot; signal doesn&apos;t have time to register before they&apos;re already reaching for seconds.
        </p>
        <p className="text-text2 leading-relaxed">
          Try eating your main meal at midday. In the Chinese body clock, your Stomach and Spleen are most active between 7 AM and 11 AM, with peak digestive fire around noon. Eating a good lunch and a lighter dinner works with your body&apos;s natural rhythm instead of against it.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your constant hunger is new, severe, or accompanied by unexplained weight loss, rapid heartbeat, excessive thirst, frequent urination, or anxiety, please consult a licensed healthcare provider. Constant hunger can sometimes be associated with conditions like hyperthyroidism, diabetes, or other medical issues that need proper evaluation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy &amp; Sluggish Pattern →
          </Link>
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            Internal Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-crave-sweets" className="text-sm text-accent no-underline hover:underline">
            Why Do I Crave Sweets?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-keep-gaining-weight" className="text-sm text-accent no-underline hover:underline">
            Why Do I Keep Gaining Weight?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
