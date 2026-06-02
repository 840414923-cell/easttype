"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyOverthinkArticle() {
  const slug = "why-do-i-overthink-everything"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Overthinking</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Overthink Everything? The Mind That Won't Put the Pen Down
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You replay conversations. Not the big ones. The small ones. Someone said "sure" instead of "yes" and now you're 45 minutes into analyzing what it meant. You write and delete the same text four times. You plan out scenarios that will probably never happen. You know you're doing it, you know it's not helping, but the thinking has its own momentum and you can't find the brakes.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Overthinking isn't the same as being thoughtful. Thoughtful people consider things carefully and then make a decision. Overthinkers consider things endlessly and then feel paralyzed. The difference isn't intelligence or caring. It's something happening in your body that keeps your mind spinning in circles.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a surprisingly specific explanation for why some people can't stop thinking. It connects overthinking to energy that's stuck in your head rather than flowing through your whole body. And it has practical suggestions that have nothing to do with meditation apps.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Overthinking Looks Like
        </h2>
        <ul className="space-y-2">
          {[
            "Replaying conversations long after they're over",
            "Writing and rewriting simple messages",
            "Planning for scenarios that are unlikely to happen",
            "Difficulty making decisions because every option has too many branches",
            "Your mind races at night when your body is tired",
            "You analyze other people's words and expressions for hidden meanings",
            "You know you're overthinking but can't stop the loop",
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
          The Modern Causes (Still Relevant)
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Social media trains us to overthink. When every word you say can be screenshotted and analyzed, caution becomes hypervigilance. Remote work means fewer casual interactions, so every email and message carries more weight than it should. Information overload gives your brain too much to process, and it responds by trying to think about everything at once.
        </p>
        <p className="text-text2 leading-relaxed">
          Anxiety disorders and OCD involve patterns of intrusive, repetitive thinking. If your overthinking includes unwanted thoughts, compulsive checking, or significant distress, please see a mental health professional. This article addresses the constitutional tendency toward overthinking, not clinical conditions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Overthinking
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, the Liver is responsible for smooth energy flow throughout the body, including the flow of thoughts. When Liver Qi flows well, thoughts move through your mind naturally: you think something, you process it, you move on. When Liver Qi is stagnant (Qi Stagnation), thoughts get stuck the same way energy gets stuck. They loop, repeat, and circle back instead of moving forward.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          There's a second mechanism too. The Spleen in TCM is associated with thinking and concentration. When Spleen Qi is weak (Qi Deficiency), your thinking becomes unfocused and scattered rather than sharp and clear. You can't hold a single thought long enough to resolve it, so your mind jumps from one incomplete thought to the next.
        </p>
        <p className="text-text2 leading-relaxed">
          The most stubborn overthinking often involves both patterns: Qi Stagnation creating the loop, and Qi Deficiency preventing you from having the mental clarity to break out of it. It's like a record player with a scratch. The needle is stuck (Stagnation) and the motor is weak (Deficiency), so the same few seconds play over and over.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Body Type Behind the Overthinking
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Stagnant type (气郁质) is the classic overthinker. About 8% of people have this pattern. Their energy tends to pool and stagnate rather than flow freely, and this creates a mental quality of fixation and rumination. The stuck energy keeps the mind looping on the same thoughts, unable to let go and move on.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">Qi Stagnant Type →</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Quiet the Mind
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Move your body. This is the single most effective way to break a thought loop when the cause is Qi Stagnation. The mind and body are connected through energy. When your body moves, stuck energy starts flowing, and the mental loop loosens. A 20-minute walk, dancing in your kitchen, stretching, even just standing up and shaking your arms. Physical movement literally moves the energy that's feeding the loop.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Externalize your thoughts. Write them down. Not in a journaling-for-insight way, but in a brain-dump way. Get the loop out of your head and onto paper where you can see it. Once it's external, it often looks smaller and more manageable than it felt spinning in your mind.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Drink teas that encourage smooth energy flow. Rose tea is the traditional choice for moving stuck Liver Qi. Tangerine peel tea helps with chest tightness and the feeling of something being stuck. Chamomile is gentle and calming without being sedating.
        </p>
        <p className="text-text2 leading-relaxed">
          Limit the inputs. If your mind is already overprocessing, adding more information (scrolling, news, podcasts) is like throwing wood on a fire. Give your brain less to work with for a while and see if the loops start to quiet down on their own.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">When to See a Doctor</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your overthinking involves unwanted intrusive thoughts, compulsive behaviors, severe anxiety, or is significantly affecting your quality of life, please consult a licensed mental health professional. Cognitive behavioral therapy and other evidence-based approaches can be very effective for these patterns.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Pattern</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/stuck-energy" className="text-sm text-accent no-underline hover:underline">Stuck Energy Pattern →</Link>
          <span className="text-text2/40">·</span>
          <Link href="/patterns/high-sensitivity" className="text-sm text-accent no-underline hover:underline">High Sensitivity Pattern →</Link>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">Related Symptoms</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">Why Do I Feel Anxious?</Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-are-my-moods-all-over-the-place" className="text-sm text-accent no-underline hover:underline">Why Are My Moods All Over the Place?</Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
