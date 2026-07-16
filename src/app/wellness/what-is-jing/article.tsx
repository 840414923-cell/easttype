import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function WhatIsJingArticle() {
  const slug = "what-is-jing"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">What Is Jing</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        What Is Jing in Chinese Medicine? Your Vital Essence Explained
      </h1>
      <p className="text-text2 text-sm mb-6">Overview</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Jing (精) is often translated as &quot;essence.&quot; It is your deepest, most fundamental energy reserve. You are born with a fixed amount, called Pre-Heaven Jing, and you supplement it throughout life through food and lifestyle, which builds Post-Heaven Jing. Jing governs growth, reproduction, aging, and longevity. When Jing is abundant, you tend to age slowly and recover well. When Jing is depleted, you may age faster, feel deeply tired, and notice changes in hair, bones, knees, lower back, and reproductive health. The foods and habits that nourish Jing may help preserve this deep reserve. To see where your constitution sits, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Jing?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Jing is one of the Three Treasures in Chinese medicine, alongside Qi and Shen. Where Qi is the day-to-day energy that moves the body, and Shen is the spirit that animates the mind, Jing is the deepest reserve of all. It is stored in the Kidneys and is often described as the essence that governs growth, reproduction, development, and aging. The character 精 (jīng) carries the sense of something refined, distilled, essential. Jing is the part of you that is most fundamental, the slow-burning fuel behind a long and steady life.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine distinguishes two forms of Jing. The first is Pre-Heaven Jing, also called Pre-Heaven essence. This is the Jing you inherited from your parents at conception. It sets the constitutional baseline of your life. It determines how robust your early development was, how thick your hair grows, how strong your bones are, and how your body tends to age. Pre-Heaven Jing cannot be replaced once it is spent. You can only try to preserve what you were given.
        </p>
        <p className="text-text2 leading-relaxed">
          The second form is Post-Heaven Jing. This is the Jing extracted each day from food, drink, rest, and a balanced life. Because the body can draw on Post-Heaven Jing for its daily needs, it can spare Pre-Heaven Jing from being spent too quickly. A common metaphor compares Pre-Heaven Jing to a trust fund you&apos;re born with, and Post-Heaven Jing to your daily income. The goal of longevity practice in Chinese medicine is to live off the income and protect the trust fund, so the deep reserve lasts as long as possible. To understand how this fits into the broader picture of vital energy, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi means in Chinese medicine</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Signs of Jing Depletion
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because Jing governs growth and aging, the signs of depletion tend to show up in the parts of the body most tied to those processes: hair, teeth, bones, knees, lower back, and reproductive function. The signs also tend to unfold in stages that roughly mirror the arc of life. Noticing where you sit on this map can help you decide whether your deep reserves need more support, and which habits or foods might be most worth adding.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Stage</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Life Phase</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Abundant Jing</td>
                <td className="px-3 py-2">Strong growth, quick recovery, thick hair, strong bones, boundless energy</td>
                <td className="px-3 py-2">Childhood and youth</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mild depletion</td>
                <td className="px-3 py-2">Slower recovery, lower baseline energy, occasional hair thinning</td>
                <td className="px-3 py-2">30s to 40s</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Significant depletion</td>
                <td className="px-3 py-2">Premature graying, weak knees and lower back, lower libido, reduced fertility</td>
                <td className="px-3 py-2">40s to 60s</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Severe depletion</td>
                <td className="px-3 py-2">Brittle bones, deep exhaustion, dental issues, marked fragility</td>
                <td className="px-3 py-2">Advanced age or chronic depletion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Some of these signs overlap with related patterns. If knee or lower back weakness, deep fatigue, or reproductive changes sound familiar, you may also want to read about <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link> and <Link href="/wellness/kidney-yang-deficiency" className="text-accent hover:underline">Kidney Yang Deficiency</Link>. Because Jing depletion often surfaces as exhaustion, see our guide on <Link href="/symptoms/why-am-i-always-tired" className="text-accent hover:underline">why you are always tired</Link>, and because the hair is one of the first places essence shows itself, our piece on <Link href="/symptoms/why-is-my-hair-falling-out" className="text-accent hover:underline">why your hair may be falling out</Link> can help. To see whether your constitution leans toward an essence-depleting pattern, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Depletes Jing?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Jing is meant to be spent slowly across a lifetime. The trouble begins when the body is forced to draw on the deep reserve faster than Post-Heaven Jing can refill it. The patterns below are the most common reasons that spending outpaces saving. Most people who feel their Jing declining can recognize more than one of them at work.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Overwork</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Pushing past exhaustion, year after year, draws directly on the Kidney essence. The body can borrow from Jing for a season of intense demand, but it cannot do so indefinitely. Long hours, skipped meals, and a habit of ignoring fatigue all quietly transfer the cost from daily Qi to deep Jing. Over time the borrowing shows up as slower recovery, graying hair, and a sense of running on a thinner and thinner reserve.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Insufficient Sleep</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Sleep is when the body rebuilds Post-Heaven Jing and spares Pre-Heaven Jing from being spent. Chinese medicine places special weight on the hours before midnight, when the body is said to do some of its deepest restoration. Routinely going to bed late, or sleeping too few hours, may force the body to lean on essence reserves instead of replenishing them.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Excessive Sexual Activity</h3>
        <p className="text-text2 leading-relaxed mb-4">
          In the traditional view, reproductive fluid is considered a direct expression of Kidney essence. Very frequent ejaculation or, in some texts, repeated pregnancy without recovery is said to tax the Jing. This is one of the more debated points in modern practice, yet the broader principle is still useful. Any output the body cannot keep up with, it eventually borrows from the deep reserve.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Substance Abuse</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Alcohol and recreational drugs ask the liver and kidneys to clear extra load, and chronic use can wear down essence reserves over time. The depletion often shows up slowly, as dullness, lower vitality, and slower recovery, until the deeper signs of Jing depletion begin to appear.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Severe or Chronic Illness</h3>
        <p className="text-text2 leading-relaxed mb-4">
          A long illness, or a severe acute illness, may force the body to draw on its deepest reserves to heal. Chinese medicine describes this as essence being consumed by disease. The fatigue that lingers for months after a major illness can be associated with this kind of Jing drawdown.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Constitutional Factors</h3>
        <p className="text-text2 leading-relaxed">
          Some people are born with less Pre-Heaven Jing than others. They may have been frail as children, recovered slowly from illness, or aged earlier than their peers. This constitutional starting point is not a verdict, but it does mean that preservation matters even more, since the trust fund began smaller.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Nourish Jing
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The foods below have a long history in Chinese dietary therapy for supporting Kidney essence. Many of them share a dark color, which traditional practice associates with the Kidney, and a dense, building quality. They are best eaten in moderation, cooked gently, and combined with rest and sleep. As with all food therapy, consistency matters more than quantity, and small regular amounts tend to work better than occasional large doses.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame seeds</td>
                <td className="px-3 py-2">Traditionally used to support Kidney essence and the hair</td>
                <td className="px-3 py-2">Toasted and sprinkled on congee, rice, or porridge</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">A building food linked in practice to Kidney support</td>
                <td className="px-3 py-2">Slow-cooked in soups and stews until very soft</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Said to support the Kidneys, brain, and lower back</td>
                <td className="px-3 py-2">Eaten raw, lightly toasted, or stirred into congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shan yao)</td>
                <td className="px-3 py-2">Gently supports Kidney and Spleen, helps rebuild reserves</td>
                <td className="px-3 py-2">Steamed, boiled in soup, or sliced into congee</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries (gou qi zi)</td>
                <td className="px-3 py-2">Nourishes Kidney Yin and Jing together</td>
                <td className="px-3 py-2">A small handful in tea, congee, or warm water</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mulberry (sang shen)</td>
                <td className="px-3 py-2">Used to support essence, blood, and the hair</td>
                <td className="px-3 py-2">Eaten fresh or dried, or brewed as a tea</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Bone marrow / bone broth</td>
                <td className="px-3 py-2">A traditional building food for deep reserves</td>
                <td className="px-3 py-2">Long-simmered with root vegetables into a rich broth</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Seaweed / kelp</td>
                <td className="px-3 py-2">Associated with Kidney support and gentle mineral intake</td>
                <td className="px-3 py-2">Added to soups, stews, or cooked with beans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits to Preserve Jing
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because Jing cannot be rebuilt the way Qi can, preservation matters more than stimulation. The habits below are the ones Chinese medicine most often recommends for slowing the draw on essence. They are quiet by design. Their aim is to reduce what you spend from the trust fund while letting daily income cover the cost of living.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Sleep before 11 PM.</strong> The hours before midnight are traditionally seen as the most restorative, so an early bedtime can help spare the deep reserve.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Avoid pushing through exhaustion.</strong> When the body asks for rest, listening is one of the simplest ways to keep Jing from being spent.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Eat nourishing, warm foods.</strong> Warm, cooked meals are easier to turn into Post-Heaven Jing than raw or cold food.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice gentle exercise, not exhausting training.</strong> Tai chi, qi gong, walking, and easy cycling build energy; relentless high-intensity training may drain it.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Manage stress.</strong> Long-standing stress keeps the body in a state of quiet output, which over time draws on essence.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Avoid fasting or extreme diets.</strong> Severely restricted intake leaves too little raw material to build Post-Heaven Jing.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Pace yourself in work and life.</strong> Long, sustainable rhythms protect the reserve far better than bursts of intense effort followed by collapse.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Some signs of Jing depletion can overlap with medical conditions. Premature hair loss, persistent fatigue, low libido, or changes in fertility may point to thyroid disorders, hormonal imbalances, iron or vitamin deficiencies, or other treatable issues. If these signs are severe, persistent, or getting worse, please see a qualified healthcare professional for proper testing. Chinese medicine food therapy and lifestyle changes may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
