import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function MeridiansChineseMedicineArticle() {
  const slug = "meridians-chinese-medicine"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Meridians</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Meridians in Chinese Medicine: The Energy Pathways That Connect Your Organs
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read · Overview</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Meridians are the energy pathways that run through your body, linking your internal organs to the surface of your skin. In Chinese medicine, Qi, the vital energy that powers every bodily function, flows along these channels. When that flow is smooth and even, you tend to feel healthy and balanced. When a pathway becomes blocked or weak, pain and other symptoms often appear somewhere along that route. Acupuncture, acupressure, moxibustion, and food therapy all work through this same meridian system, which is one reason a single point on your forearm can be used to influence your chest, your breathing, or your digestion.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you have ever watched an acupuncturist place a needle in your hand to treat your head, or press a point on your foot to ease your back, you have seen the meridian system in action. The idea that the body is wired with channels of flowing energy can sound strange at first, especially if you are used to thinking only in terms of anatomy. Yet this single concept holds together most of Chinese medicine, from acupuncture and acupressure to herbal formulas and dietary therapy.
        </p>
        <p className="text-text2 leading-relaxed">
          This guide explains what meridians are, how the twelve main channels work, what tends to happen when flow is interrupted, and what you can do day to day to keep them open. None of it requires special equipment, and much of it maps onto habits you already understand, like moving your body, eating warm food, and managing stress.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Are Meridians?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The Chinese term for meridians is Jing Luo (经络). Jing can be read as &quot;that which runs through,&quot; and Luo as &quot;that which connects.&quot; Put together, they describe a branching network that functions like a highway system for Qi. Rather than a single straight line, the network loops through the torso, spreads into the limbs, and weaves close to the surface of the skin before dipping back toward the organs it serves.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine recognizes twelve main meridians, each paired with a specific organ. These twelve channels run along the body&apos;s surface, where they can be reached with a needle, a finger, or a warmed herb, and they also connect internally to the organ that shares their name. This dual path, external and internal, is the reason a practitioner can treat an organ like the Lung or the Heart by working on points that sit on the wrist or the forearm.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          It helps to be clear about what meridians are not. They are not blood vessels, and you will not find them on an X-ray or an MRI scan. They are functional pathways rather than physical structures, mapped and refined over thousands of years of clinical observation. Practitioners located them by tracking where tenderness, relief, and symptom shifts tended to appear, generation after generation.
        </p>
        <p className="text-text2 leading-relaxed">
          A useful image is a river system. When the water runs clear and steady, the land around it stays fertile. When a section silts up or a dam forms, areas downstream run dry while areas upstream flood. Chinese medicine reads symptoms in much the same way, as signs that something along a particular channel is not flowing as it should. To see where Qi itself fits into this picture, our guide to <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is</Link> covers the concept in plain English.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 12 Main Meridians
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          At the core of the system sit twelve primary channels. Each one belongs to a specific organ, follows a fixed route across the body, and reaches its peak activity at a particular two-hour window during the day. Chinese medicine calls this rhythm the organ clock, and it is one of the oldest ways practitioners link a symptom, especially one that appears at the same time each day, back to the channel involved.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Meridian</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Organ</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Peak Time</th>
                <th className="text-left px-3 py-2 text-text font-semibold">What It Governs</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lung</td>
                <td className="px-3 py-2">Lung</td>
                <td className="px-3 py-2">3 AM - 5 AM</td>
                <td className="px-3 py-2">Breathing, skin, and immunity</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Large Intestine</td>
                <td className="px-3 py-2">Large Intestine</td>
                <td className="px-3 py-2">5 AM - 7 AM</td>
                <td className="px-3 py-2">Elimination and letting go</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Stomach</td>
                <td className="px-3 py-2">Stomach</td>
                <td className="px-3 py-2">7 AM - 9 AM</td>
                <td className="px-3 py-2">Digestion and receiving food</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Spleen</td>
                <td className="px-3 py-2">Spleen</td>
                <td className="px-3 py-2">9 AM - 11 AM</td>
                <td className="px-3 py-2">Energy production from food</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart</td>
                <td className="px-3 py-2">Heart</td>
                <td className="px-3 py-2">11 AM - 1 PM</td>
                <td className="px-3 py-2">Spirit, circulation, and sleep</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Small Intestine</td>
                <td className="px-3 py-2">Small Intestine</td>
                <td className="px-3 py-2">1 PM - 3 PM</td>
                <td className="px-3 py-2">Sorting and absorption</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Bladder</td>
                <td className="px-3 py-2">Bladder</td>
                <td className="px-3 py-2">3 PM - 5 PM</td>
                <td className="px-3 py-2">Water metabolism and the nervous system</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Kidney</td>
                <td className="px-3 py-2">Kidney</td>
                <td className="px-3 py-2">5 PM - 7 PM</td>
                <td className="px-3 py-2">Reserves, willpower, and aging</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pericardium</td>
                <td className="px-3 py-2">Pericardium</td>
                <td className="px-3 py-2">7 PM - 9 PM</td>
                <td className="px-3 py-2">Protection of the Heart</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Triple Burner</td>
                <td className="px-3 py-2">Triple Burner</td>
                <td className="px-3 py-2">9 PM - 11 PM</td>
                <td className="px-3 py-2">Fluid regulation across body zones</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Gallbladder</td>
                <td className="px-3 py-2">Gallbladder</td>
                <td className="px-3 py-2">11 PM - 1 AM</td>
                <td className="px-3 py-2">Decision-making and judgment</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Liver</td>
                <td className="px-3 py-2">Liver</td>
                <td className="px-3 py-2">1 AM - 3 AM</td>
                <td className="px-3 py-2">Planning and the smooth flow of Qi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          The order matters. The twelve meridians pass Qi to one another in a fixed sequence that repeats every twenty-four hours, beginning with the Lung in the early hours of the morning and ending with the Liver in the deepest part of the night. Waking at the same hour on most nights is a pattern practitioners pay close attention to. Habitually surfacing between 1 and 3 AM may point to the Liver meridian, while a 3 to 5 AM wake-up is often linked to the Lung.
        </p>
        <p className="text-text2 leading-relaxed">
          Beyond the twelve main channels, Chinese medicine also describes eight &quot;extraordinary&quot; meridians that act as reservoirs and regulators for the whole network. The best known are the Ren Mai, which runs up the front midline of the body, and the Du Mai, which runs along the spine. Together the twelve plus the extraordinary vessels form the full network that Qi travels. For a wider view of how these channels sit inside the broader theory of balance, our guide to <Link href="/wellness/yin-and-yang" className="text-accent hover:underline">Yin and Yang</Link> is a good companion read.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Happens When Meridian Flow Is Blocked
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          A meridian rarely fails all at once. More often, flow slows, sticks, or reverses, and the body begins to show signs along the affected channel. Three patterns tend to appear, and they often show up together.
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Pain Along the Pathway</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Where the blockage sits, pain often follows the line of the channel. Headaches along the side of the head may trace the Gallbladder meridian. Pain in the outer shoulder or the side of the ribcage may sit on the Gallbladder or Triple Burner line. Because each route is fixed, the location of the discomfort can offer a hint about which channel is involved, and relief along that line can be associated with the blockage easing.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Organ Symptoms</h3>
            <p className="text-text2 text-sm leading-relaxed">
              The organ at the end of the line also tends to suffer. If the Spleen meridian is sluggish, bloating and loose stools may appear. If the Liver meridian is stuck, the Liver&apos;s job of keeping Qi moving falters, and tightness, irritability, or menstrual pain may result. The internal branch and the surface branch reflect each other, which is why a tender point on the skin and a complaint from the organ so often line up.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Emotional Changes</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Each meridian carries an associated emotion in Chinese medicine. The Liver is linked to anger and frustration, the Heart to joy, the Spleen to worry, the Lung to grief, and the Kidney to fear. When a channel blocks up, its linked emotion may flare or feel stuck. This is one reason emotional shifts and physical symptoms along the same line so often arrive together.
            </p>
          </div>
        </div>

        <p className="text-text2 leading-relaxed mt-4">
          A classic example is Liver meridian blockage, which can be associated with temporal headaches, irritability, breast tenderness, and premenstrual symptoms. Our guide to <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link> explores this pattern in more depth. Stomach meridian blockage may show up differently, as bloating, toothache, or a heavy, dragging sensation in the legs. When Spleen flow runs weak, the pattern often overlaps with low energy and poor appetite, which we cover in the <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link> guide.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Keep Meridians Flowing
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need needles to keep your meridians open. Simple daily habits can be associated with smoother flow across the whole network, and most of them cost nothing.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Stretch, especially the sides of the body.</strong> The Liver and Gallbladder meridians run along the ribs and flanks, and gentle side-bending stretches may help them stay open.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Use acupressure self-massage.</strong> Pressing tender points for a minute or two each day can be associated with relief along the local channel.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Move daily.</strong> Gentle, regular exercise such as walking, qigong, or tai chi keeps Qi circulating rather than pooling in one place.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Favor warm, cooked foods.</strong> Cold and raw items slow the middle of the body, where several key meridians meet, while warm meals support steady flow.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Break up long periods of sitting.</strong> Qi stagnates with stillness, so standing or walking every thirty to sixty minutes may help.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Manage stress.</strong> Strong or sustained emotion is one of the most common causes of meridian blockage, especially in the Liver channel.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Rest in step with the organ clock.</strong> Sleeping before 11 PM may support the Gallbladder and Liver hours, which many practitioners see as the body&apos;s nightly repair window.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Meridians and Your Body Type
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Certain body types tend to run into the same meridian trouble again and again, because the underlying pattern steers Qi toward the same channels. Qi Stagnant types most often struggle with the Liver and Gallbladder meridians, which fits their tendency toward tension, sighing, and mood swings. Qi Deficient types tend to show weakness in the Spleen and Stomach channels, which matches their low energy and delicate digestion. Yin Deficient types more often draw heat into the Kidney and Heart meridians, which fits their night sweats, dryness, and restless sleep.
        </p>
        <p className="text-text2 leading-relaxed">
          Knowing your type may help you focus on the two or three channels most likely to need support, rather than guessing across all twelve. The <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link> is a quick way to find your pattern and the foods that tend to suit it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Meridian-based ideas may help explain patterns that standard tests do not catch, but they do not replace medical diagnosis. Pain that is severe, sudden, or keeps returning in the same spot can sometimes point to an injury or illness that needs prompt attention. Chest pain, neurological symptoms, persistent numbness, weakness, or swelling that worsens should be checked by a licensed healthcare provider before or alongside any self-care. Acupuncture and acupressure may complement professional treatment, but serious symptoms always warrant proper medical evaluation first.
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
