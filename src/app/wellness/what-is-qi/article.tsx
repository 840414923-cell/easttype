import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function WhatIsQiArticle() {
  const slug = "what-is-qi"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">What Is Qi?</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        What Is Qi (Chi) Energy? The Concept Behind Everything in Chinese Medicine
      </h1>
      <p className="text-text2 text-sm mb-6">9 min read · The foundation of 3,000 years of Chinese wellness practice</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Qi (pronounced &quot;chee,&quot; also spelled chi) is the Chinese medicine concept of vital energy that flows through your body along specific pathways called meridians. It powers every function: digestion, breathing, thinking, moving, and healing. When qi is strong and flowing smoothly, you feel energized and balanced. When qi is weak or stuck, symptoms appear: fatigue, bloating, pain, mood swings, or poor sleep.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you have ever visited an acupuncturist, a Chinese herbalist, or even just read about Chinese medicine online, you have encountered the word &quot;qi.&quot; It shows up everywhere in Chinese medicine because it is the framework on which everything else hangs. Understanding qi is not about believing in something mystical. It is about recognizing that your body runs on energy, and that energy can be strong or weak, flowing or stuck, hot or cold.
        </p>
        <p className="text-text2 leading-relaxed">
          This guide explains qi in plain English: what it is, how it moves through your body, what happens when it goes wrong, and what you can do about it through food and daily habits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Does Qi Actually Mean?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The Chinese character for qi (气 in simplified, 氣 in traditional) originally depicted steam rising from cooking rice. That image captures the idea well: qi is invisible, but you can see its effects. Steam makes the lid rattle. Qi makes your heart beat, your food digest, your thoughts form. You cannot see it directly, but you know it is there because things happen.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine, qi is defined as the vital energy that animates all life. It is the difference between a living body and a dead one. Same physical structure, same organs, same bones. But one has qi flowing through it and the other does not. That is the most basic definition, and it is one that most people intuitively understand even if they have never studied Chinese medicine.
        </p>
        <p className="text-text2 leading-relaxed">
          There is no single English word that captures the full meaning of qi. &quot;Energy&quot; comes closest but misses the idea that qi also carries information and direction. &quot;Life force&quot; is closer in spirit but sounds more mystical than the concept warrants. Most practitioners simply use the word qi and explain it through examples rather than trying to translate it perfectly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Qi Moves Through Your Body
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine describes a network of pathways called meridians (经络, jīng luò) that carry qi throughout the body. There are 12 primary meridians, each connected to a major organ system: Lung, Large Intestine, Stomach, Spleen, Heart, Small Intestine, Bladder, Kidney, Pericardium, Triple Burner, Gallbladder, and Liver.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Organ System</th>
                <th className="text-left py-2 pr-3 text-text font-medium">What Its Qi Controls</th>
                <th className="text-left py-2 text-text font-medium">Peak Activity Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Lung</td><td className="py-2 pr-3 text-text2">Breathing, skin, immunity</td><td className="py-2 text-text2">3AM - 5AM</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Spleen</td><td className="py-2 pr-3 text-text2">Digestion, energy from food</td><td className="py-2 text-text2">9AM - 11AM</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Heart</td><td className="py-2 pr-3 text-text2">Blood circulation, calm mind</td><td className="py-2 text-text2">11AM - 1PM</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Liver</td><td className="py-2 pr-3 text-text2">Smooth energy flow, mood</td><td className="py-2 text-text2">1AM - 3AM</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Kidney</td><td className="py-2 pr-3 text-text2">Deep energy reserves, willpower</td><td className="py-2 text-text2">5PM - 7PM</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Stomach</td><td className="py-2 pr-3 text-text2">Receiving and breaking down food</td><td className="py-2 text-text2">7AM - 9AM</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          Qi flows through these meridians in a specific sequence, completing a full circuit every 24 hours. This is why Chinese medicine associates different organs with different times of day. Waking up at 3AM consistently, for example, is often linked to Lung qi. Waking at 1-3AM is linked to Liver qi. The body clock is not random; it reflects where qi is concentrated at each hour.
        </p>
        <p className="text-text2 leading-relaxed">
          When qi flows smoothly through all 12 meridians, the body functions well. When qi gets stuck, becomes deficient, or flows in the wrong direction, symptoms appear. This is the core diagnostic logic of Chinese medicine: find where qi is not working right, and address that specific pattern.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 4 Types of Qi Imbalance
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine recognizes four main ways qi can go wrong. Each has a distinct set of symptoms and a different approach to rebalancing.
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">1. Qi Deficiency (气虚, qì xū)</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              Not enough qi. The body is running on low fuel. This is the most common qi pattern and corresponds to the &quot;Low Vitality&quot; body type.
            </p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Signs: </span>chronic fatigue, soft voice, easy sweating, poor appetite, frequently getting sick, feeling weak after exertion.</p>
            <p className="text-text2 text-sm leading-relaxed mt-1"><span className="text-accent font-medium">Food approach: </span>energy-building foods like sweet potato, rice porridge, red dates, chicken broth, and beef.</p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">2. Qi Stagnation (气郁, qì yù)</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              Qi is present but cannot flow freely. It builds up pressure like water behind a dam. This corresponds to the &quot;Stuck Energy&quot; body type.
            </p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Signs: </span>chest tightness, frequent sighing, mood swings, irritability, feeling stuck or frustrated, pain that moves around.</p>
            <p className="text-text2 text-sm leading-relaxed mt-1"><span className="text-accent font-medium">Food approach: </span>flow-supporting foods like chrysanthemum tea, citrus, mint, and rose tea. Sour flavors help.</p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">3. Qi Sinking (气陷, qì xiàn)</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              A more severe form of qi deficiency where qi is so weak it cannot hold organs in their proper position. Think of it as gravity winning over energy.
            </p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Signs: </span>prolapse, frequent urination, heavy sensation in the lower abdomen, chronic diarrhea, feeling like everything is drooping.</p>
            <p className="text-text2 text-sm leading-relaxed mt-1"><span className="text-accent font-medium">Food approach: </span>deeply nourishing foods like astragalus root, Chinese yam, and longan fruit.</p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">4. Rebellious Qi (气逆, qì nì)</h3>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              Qi is flowing in the wrong direction. Stomach qi should move downward to process food. When it rebels upward, you get reflux, nausea, or vomiting.
            </p>
            <p className="text-text2 text-sm leading-relaxed"><span className="text-accent font-medium">Signs: </span>acid reflux, nausea, vomiting, coughing, hiccups, wheezing.</p>
            <p className="text-text2 text-sm leading-relaxed mt-1"><span className="text-accent font-medium">Food approach: </span>cooling and downward-directing foods like mung bean soup, ginger tea (small amounts), and rice porridge.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Where Does Qi Come From?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine identifies three sources of qi:
        </p>
        <div className="space-y-3">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">1. Inherited Qi (元气, yuán qì) — Your Battery at Birth</h3>
            <p className="text-sm text-text2 leading-relaxed">
              You are born with a fixed amount of qi inherited from your parents. Think of it as a battery that comes pre-charged. You cannot recharge it, but you can use it wisely or waste it. This is why some people seem to have naturally strong constitutions while others are more fragile from birth.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">2. Food Qi (谷气, gǔ qì) — Your Daily Recharge</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Every time you eat, your Spleen and Stomach extract qi from food. This is your daily recharge, and it is the source of qi you have the most control over. Eating warm, easily digested foods maximizes the qi you extract. Eating cold, raw, or heavily processed foods wastes digestive energy and yields less qi per meal.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">3. Air Qi (清气, qīng qì) — Your Breath Charge</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Your Lungs extract qi from the air you breathe. Clean air and deep breathing contribute to your qi supply. Shallow breathing, polluted air, and smoking reduce it. This is why practices like qigong and tai chi emphasize breathing: they are literally charging your qi through each breath.
            </p>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          Of these three, food qi is the most practical lever. You cannot change what you inherited, and clean air is not always within your control. But you can choose what you eat every day, and those choices directly affect how much qi your body produces.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That Support Qi
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Different qi patterns benefit from different foods. Here is a quick reference:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Qi Pattern</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Eat More</th>
                <th className="text-left py-2 text-text font-medium">Avoid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Qi Deficient</td><td className="py-2 pr-3 text-text2">Sweet potato, congee, red dates, chicken, beef</td><td className="py-2 text-text2">Cold drinks, raw salads, excess coffee</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Qi Stagnant</td><td className="py-2 pr-3 text-text2">Chrysanthemum tea, citrus, mint, rose tea, vinegar</td><td className="py-2 text-text2">Alcohol, greasy food, skipping meals</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Qi Sinking</td><td className="py-2 pr-3 text-text2">Astragalus, Chinese yam, longan, goji</td><td className="py-2 text-text2">Cold raw food, overexertion</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Rebellious Qi</td><td className="py-2 pr-3 text-text2">Mung beans, ginger (small), rice porridge, oatmeal</td><td className="py-2 text-text2">Spicy food, coffee, heavy late meals</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          For detailed food guides tailored to specific symptoms, see our <Link href="/foods-for" className="text-accent hover:underline">food guides by symptom</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Qi vs Prana vs Ki: Is Qi Unique to Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The concept of vital energy exists in many traditions. Ayurveda calls it prana. Japanese medicine calls it ki. Traditional Korean medicine uses the same character (기, gi). These are all describing the same observation: that living bodies run on something invisible that can be strong or weak, flowing or blocked.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          What makes Chinese medicine&apos;s qi concept distinctive is how detailed and practical it is. Qi is not just a vague life force. It has specific pathways (12 meridians), specific patterns of imbalance (4 types), specific relationships with organs (each organ has its own qi), and specific dietary and lifestyle interventions for each pattern. This level of specificity is what allows Chinese medicine practitioners to make targeted recommendations rather than general &quot;boost your energy&quot; advice.
        </p>
        <p className="text-text2 leading-relaxed">
          If you want to explore how qi relates to your specific body type, the <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link> can help you identify which qi pattern is most relevant to you.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Important Note</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational and educational purposes only and is not medical advice. If you are experiencing chronic fatigue, persistent pain, or other concerning symptoms, please consult a licensed healthcare provider. Qi-based dietary suggestions may complement but should not replace professional medical care.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Articles
        </h2>
        <div className="space-y-3">
          <Link href="/wellness/chinese-medicine-body-types" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">The 9 Chinese Medicine Body Types →</h3>
            <p className="text-text2/70 text-xs mt-1">Each body type has a different qi pattern. Learn which one matches your symptoms.</p>
          </Link>
          <Link href="/foods-for" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Food Guides by Symptom →</h3>
            <p className="text-text2/70 text-xs mt-1">What to eat and what to avoid for common symptoms, based on your qi pattern.</p>
          </Link>
          <Link href="/patterns" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Browse All Patterns →</h3>
            <p className="text-text2/70 text-xs mt-1">Explore the 9 wellness patterns behind recurring symptoms.</p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />
    </main>
  )
}
