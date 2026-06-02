"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function JointPainArticle() {
  const slug = "why-do-i-have-joint-pain"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Joint Pain</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Joint Pain? The Hinges That Lost Their Oil
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your knees creak when you stand up. Your shoulders grind when you reach for something on a high shelf. Your fingers feel stiff in the morning until you wiggle them loose. It&apos;s not that you&apos;re old. It&apos;s that your joints are running low on lubrication and circulation.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard approach is to blame wear and tear, or maybe arthritis. And those are real possibilities. But when blood tests for arthritis come back negative and X-rays show no significant damage, the creaking and aching continue without a clear explanation. The joints aren&apos;t broken. They&apos;re just not getting what they need.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine calls this Bi Syndrome, meaning obstruction. Something is blocking the smooth flow of Qi and Blood through the joint area. The joint is like a door hinge left out in the rain. It still swings, but it&apos;s stiff, creaky, and reluctant to move.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Joint Pain Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Stiff joints in the morning that loosen with movement",
            "Aching joints that worsen in cold or damp weather",
            "Joints that creak or grind during movement",
            "Pain that moves between different joints",
            "Swelling or heaviness around the joints",
            "Joints that feel better with warmth and worse with cold",
            "Reduced range of motion",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Osteoarthritis from wear and tear can be seen on X-ray as joint space narrowing. Rheumatoid arthritis is an autoimmune condition that can be identified through blood markers. Gout, caused by uric acid crystals in the joint, can be checked with a blood test.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Injury or overuse typically affects a specific joint with acute onset. Tendinitis or bursitis causes movement-specific pain near the joint. These are all important to evaluate, especially if the pain is severe, sudden, or affects only one joint.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people get their blood tests and X-rays, and everything comes back normal. No arthritis, no gout, no structural damage. Yet the joints keep aching and creaking. That&apos;s where Chinese medicine offers a different perspective on why the hinges lost their oil.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Joint Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, joint pain without structural damage is called Bi Syndrome. Bi means obstruction. Something is blocking the smooth flow of Qi and Blood through the joint area. The three main obstructing forces are Cold Bi, Damp Bi, and Wind Bi, and most people have a combination.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cold Bi makes the joints stiff, worse with cold, and better with warmth. Cold contracts and slows things down. When cold obstructs a joint, the circulation becomes sluggish, and the joint feels like it&apos;s frozen in place. Movement helps because it generates warmth and gets the Qi and Blood flowing again.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Damp Bi makes the joints feel heavy, swollen, and worse in humidity. Dampness is sticky and heavy. It settles into the joints and creates a feeling of sluggishness and swelling. The joint feels like it&apos;s carrying extra weight, and the pain is more of a dull ache than a sharp stab.
        </p>
        <p className="text-text2 leading-relaxed">
          Wind Bi makes the pain move between joints, coming and going quickly. Wind is mobile and changeable. When wind obstructs the joints, the pain doesn&apos;t stay in one place. It migrates, appearing in the knee one day and the shoulder the next. Most people have a combination of these patterns, which is why joint pain often has multiple qualities: stiff and swollen, cold and heavy, moving and fixed all at once.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Joint Pain
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and joint pain shows up most clearly in a few of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the primary match for Cold Bi. Their internal heater is weak, so joints don&apos;t get enough warmth and circulation. These people often have cold extremities alongside the joint pain, and their symptoms worsen dramatically in cold weather. About 8% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Blood Stasis type (血瘀质) is the primary match for fixed, stabbing joint pain. Circulation is sluggish, so joints don&apos;t get fresh blood supply. The pain tends to be sharp and localized in one spot, and the area may appear darker or purplish. These people may also have other signs of poor circulation.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the match for Damp Bi. Their body holds moisture, and joints feel swollen and heavy. These people often feel sluggish overall, may carry extra weight, and their joint pain worsens in humid or rainy weather. The swelling tends to be soft and puffy rather than hard and inflamed.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Type →
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Oil the Hinges
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Warming foods are the foundation for Cold Bi. Ginger, cinnamon, black pepper, lamb, and bone broth all support the internal heater and improve circulation to the joints. These foods are like adding fuel to the furnace so the joints get the warmth they need. Bone broth in particular is valued in TCM for directly nourishing the bones and joints.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Circulation-supporting foods and habits help all types of Bi Syndrome. Turmeric, hawthorn, and rose tea all support blood flow. Regular gentle movement is the single most important habit for joint pain. A daily 15-minute walk does more than occasional intense exercise. Joints need motion to stay lubricated. Think of the door hinge again. Regular use keeps it smooth. Neglect makes it seize up.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Damp-draining foods help when swelling and heaviness are the main complaints. Adzuki beans, coix seed, celery, and winter melon all support the body&apos;s ability to process and eliminate excess moisture. These foods are especially helpful in humid weather or for people whose joint pain worsens with dampness.
        </p>
        <p className="text-text2 leading-relaxed">
          Keep joints warm by dressing warmly around wrists, ankles, and knees. Warm foot soaks before bed draw circulation to the lower extremities and can be associated with reduced morning stiffness. Avoid cold drinks and raw foods, which slow circulation and add internal dampness. The joints need warmth and movement, not cold and stillness.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Joint pain can sometimes indicate serious conditions. If pain is severe, swollen, red, or accompanied by fever, seek medical attention. If a joint suddenly locks or gives way, that may indicate structural damage. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">
            Cold Sensitivity Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-my-hands-and-feet-go-numb" className="text-sm text-accent no-underline hover:underline">
            Why Do My Hands and Feet Go Numb?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Cold?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
