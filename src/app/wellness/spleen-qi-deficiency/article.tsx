import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function SpleenQiDeficiencyArticle() {
  const slug = "spleen-qi-deficiency"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Spleen Qi Deficiency</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Spleen Qi Deficiency in Chinese Medicine: Signs, Causes, and Foods That May Help
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          When your body struggles to turn meals into steady energy, TCM often points to Spleen Qi Deficiency. In TCM theory, the Spleen is responsible for converting food into usable energy. When Spleen Qi is weak, your body struggles to extract nutrition from what you eat. The result may include fatigue after meals, bloating, loose stools, poor concentration, and a feeling of heaviness. This pattern overlaps significantly with the Qi Deficient body type. Warm, cooked, easy-to-digest foods like congee, sweet potato, and ginger tea may help support Spleen function over time.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is the Spleen in Chinese Medicine?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Western medicine, the spleen is a specific organ that filters blood and supports immunity. In Chinese medicine, the concept of the Spleen (脾, pí) is much broader. It refers to the entire system responsible for digestion, energy production, and fluid metabolism. When a TCM practitioner talks about the Spleen, they are talking about your body&apos;s ability to take in food, break it down, and convert it into the energy you need to live.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Think of the Spleen as your body&apos;s kitchen. Raw ingredients come in (food and drink). The Spleen cooks them into usable fuel (Qi and Blood). If the kitchen is well-staffed and the stove is hot, every meal produces steady energy. If the kitchen is understaffed and the stove is weak, food sits there half-processed. You feel bloated, heavy, and tired instead of nourished.
        </p>
        <p className="text-text2 leading-relaxed">
          Spleen Qi Deficiency simply means this digestive-fire system is running below its optimal capacity. It is not a disease diagnosis. It is a functional pattern that Chinese medicine has observed and addressed for over two thousand years through food therapy, lifestyle adjustments, and herbal support.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs You May Have Spleen Qi Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The signs of Spleen Qi Deficiency tend to cluster around digestion and energy. You may not have all of these. Even three or four consistent signs may suggest this pattern.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Sign</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What It May Feel Like</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Explanation</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Fatigue after eating</td>
                <td className="px-3 py-2">Need to lie down or nap after meals</td>
                <td className="px-3 py-2">Spleen lacks energy to process food</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bloating and fullness</td>
                <td className="px-3 py-2">Stomach feels swollen, especially after small amounts</td>
                <td className="px-3 py-2">Food sits undigested in the middle</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Loose stools</td>
                <td className="px-3 py-2">Frequent, soft, or urgent bowel movements</td>
                <td className="px-3 py-2">Spleen cannot separate clear from turbid fluids</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Poor appetite</td>
                <td className="px-3 py-2">No real hunger, or hunger that disappears quickly</td>
                <td className="px-3 py-2">Digestive fire is too weak to signal hunger</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Brain fog</td>
                <td className="px-3 py-2">Difficulty concentrating, especially after meals</td>
                <td className="px-3 py-2">Spleen produces Qi that nourishes the mind</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pale complexion</td>
                <td className="px-3 py-2">Face looks washed out, lips are pale</td>
                <td className="px-3 py-2">Spleen produces Blood; less output means less color</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Heavy limbs</td>
                <td className="px-3 py-2">Arms and legs feel weighted, hard to move</td>
                <td className="px-3 py-2">Spleen cannot lift and hold muscles</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you recognize several of these signs, Spleen Qi Deficiency may be worth exploring. Our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see if the Qi Deficient pattern matches your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes Spleen Qi Deficiency?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine identifies three main categories of causes. Most people have a combination of all three.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Dietary Causes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Spleen thrives on warmth and regularity. It struggles with cold, raw, and irregular eating. In modern life, the most common dietary causes include large amounts of iced drinks, raw salads eaten in winter, skipping breakfast, eating while working, and consuming excessive dairy or sweets. Each of these habits forces the Spleen to work harder, and over months and years, the system wears down.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Mental and Emotional Causes</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In TCM theory, the Spleen is associated with the intellect and the emotion of worry. Overthinking, excessive studying, rumination, and chronic anxiety all draw energy away from the Spleen. This is why students and knowledge workers are particularly prone to Spleen Qi Deficiency. The mental work literally consumes the same energy that the Spleen needs for digestion.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Tendency</h3>
        <p className="text-text2 leading-relaxed">
          Some people are simply born with a weaker Spleen system. This shows up early in life as picky eating as a child, frequent stomach aches, or low stamina compared to peers. If you have always been the person who gets full quickly, feels tired after meals, or has a sensitive stomach, your constitutional makeup may include a naturally lower Spleen reserve. This corresponds to the <Link href="/types/qi_deficient" className="text-accent hover:underline">Qi Deficient body type</Link> in the nine-type system.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help Spleen Qi Deficiency
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is the first-line approach in Chinese medicine for Spleen Qi Deficiency. The general principle is simple: eat warm, cooked, mildly sweet foods that are easy to digest. Avoid cold, raw, greasy, and overly complex meals that make the Spleen work overtime.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Why It May Help</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sweet potato</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Steamed or roasted</td>
                <td className="px-3 py-2">Tones Spleen, builds energy steadily</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Rice congee</td>
                <td className="px-3 py-2">Warm, neutral</td>
                <td className="px-3 py-2">Slow-cooked porridge</td>
                <td className="px-3 py-2">Pre-digested grain, minimal effort to absorb</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese dates (jujube)</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">3 to 5 in tea or congee</td>
                <td className="px-3 py-2">Classic Spleen tonic, also calms the mind</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Ginger</td>
                <td className="px-3 py-2">Warm, pungent</td>
                <td className="px-3 py-2">Fresh in tea or cooking</td>
                <td className="px-3 py-2">Warms digestive fire, reduces nausea</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Soups or stir-fried</td>
                <td className="px-3 py-2">Strengthens Spleen and Kidney together</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Pumpkin</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Roasted or in soup</td>
                <td className="px-3 py-2">Supports Spleen and drains dampness</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chicken broth</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Slow-simmered with ginger</td>
                <td className="px-3 py-2">Deeply nourishing, easy to absorb</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Millet</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Cooked as porridge</td>
                <td className="px-3 py-2">Most easily digested grain in TCM</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Carrot</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Cooked in soups or stews</td>
                <td className="px-3 py-2">Strengthens digestion, supports Qi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit or Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          For someone with Spleen Qi Deficiency, the following foods may worsen symptoms by cooling the digestive system, adding dampness, or requiring too much energy to process:
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice water and cold drinks</strong> — cold directly weakens the Spleen&apos;s digestive fire. Drink warm or room-temperature water instead.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Raw salads in cold weather</strong> — raw vegetables require significant digestive energy. Lightly steam or stir-fry vegetables instead.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive dairy</strong> — cheese, milk, and ice cream are considered damp-forming in Chinese medicine and may increase bloating.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Greasy and deep-fried foods</strong> — these are the heaviest category and take the most Spleen energy to process.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Refined sugar in large amounts</strong> — small amounts of natural sweetness (like dates or sweet potato) support the Spleen, but concentrated sugar may weaken it.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Cold fruit, especially watermelon and citrus</strong> — fruits with high water content and cooling properties may drain Spleen energy when eaten in excess.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits That Support Spleen Health
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is only half the picture. These daily habits may help restore Spleen Qi over weeks and months:
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Eat at consistent times.</strong> The Spleen thrives on rhythm. Eating meals at the same time each day trains your digestive system to prepare. Breakfast between 7 and 9 AM is considered the Spleen&apos;s peak time in TCM organ clock theory.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Chew thoroughly.</strong> Chinese medicine recommends 20 to 30 chews per bite. Thorough chewing begins the digestive process in your mouth and reduces the workload on the Spleen.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Stop at 70 percent full.</strong> Leaving space in your stomach allows it to move and process food comfortably. Overeating forces the Spleen to work overtime.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Drink warm water.</strong> Starting your day with a cup of warm water (optionally with a thin slice of fresh ginger) may gently wake the Spleen.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Avoid eating while working.</strong> When your attention is on a screen, your digestive energy is divided. Even five minutes of mindful eating may improve how you feel afterward.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Take a brief walk after meals.</strong> Gentle movement (not exercise) supports the Spleen&apos;s function of moving food through the digestive tract.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Protect your abdomen from cold.</strong> In TCM, cold entering the middle of the body directly affects the Spleen. Keep your midsection warm, especially in air-conditioned environments.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          The signs of Spleen Qi Deficiency overlap with several medical conditions, including celiac disease, irritable bowel syndrome, chronic fatigue syndrome, and thyroid disorders. If your symptoms are severe, persistent, worsening, or accompanied by unintended weight loss, blood in your stool, or severe pain, please consult a healthcare professional for proper evaluation. Chinese medicine food therapy may complement but should never replace professional medical care for serious conditions.
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
