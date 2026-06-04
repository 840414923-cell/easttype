
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysStiffArticle() {
  const slug = "why-am-i-always-stiff"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Stiffness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Stiff? The Body That Forgot How to Bend
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You wake up and your body feels like it was poured from concrete overnight. It takes 20 minutes of shuffling around before your joints remember how to move. Every morning is the same. You stretch, you groan, you slowly loosen up. By afternoon you feel almost normal, but the next morning the stiffness is back like it never left.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People tell you it&apos;s just aging. Your doctor says your joints look fine on the X-ray. You stretch more, drink more water, take supplements. Nothing really changes. The stiffness keeps showing up every morning like an alarm clock you can&apos;t turn off.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine sees morning stiffness differently than just wear and tear. It&apos;s not necessarily about how old your joints are. It&apos;s about whether your body has enough warmth and circulation to keep things supple overnight. When the internal heater runs low, things stiffen up. When circulation gets sluggish, things lock down. The good news is that both of these can be addressed without waiting for the stiffness to get worse.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Stiffness Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Waking up stiff and needing 15 to 30 minutes to loosen up",
            "Stiffness that improves with movement and warmth",
            "Tight muscles and joints that feel rigid rather than painful",
            "Stiffness that&apos;s worse in cold weather or cold rooms",
            "Difficulty bending down, reaching up, or turning your body first thing",
            "Feeling better after a warm shower or bath",
            "Stiffness that returns after sitting still for too long",
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
          Before looking at Eastern patterns, check the basics first. Lack of regular movement is the most common cause of stiffness. If you sit at a desk all day and don&apos;t exercise, your muscles and connective tissues adapt to that limited range of motion. Dehydration makes muscles and fascia less pliable, so drinking enough water matters.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Poor sleep position or a mattress that doesn&apos;t support you can leave you stiff in the morning. Some medications, including statins and certain blood pressure drugs, can cause muscle stiffness as a side effect. If the stiffness is in specific joints rather than your whole body, it&apos;s worth checking for arthritis with your doctor.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people are active, hydrated, well-slept, and still wake up stiff every day. Their blood work is normal. Their joints look fine on imaging. Yet their body feels like it&apos;s been cast in plaster every morning. That&apos;s the gap where Chinese medicine has a useful perspective.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Stiffness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, chronic stiffness is most often linked to Yang Deficiency or Blood Stasis. Both create rigidity in the body, but through different mechanisms.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yang is your body&apos;s internal warmth. It keeps your muscles supple, your joints lubricated, and your circulation flowing. Think of your muscles like rubber bands. When they&apos;re warm, they stretch easily. When they&apos;re cold, they get rigid and brittle. Yang is what keeps the rubber band warm. When Yang is too low, your body can&apos;t maintain enough warmth overnight to keep your muscles and joints flexible. You wake up feeling like you were poured from concrete because, in a sense, your tissues cooled and contracted while you slept.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This isn&apos;t about your age. Plenty of young people with low Yang wake up stiff, and plenty of older people with strong Yang don&apos;t. It&apos;s about how much warming energy your body has available. The stiffness is your body telling you the internal heater is struggling.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Blood Stasis is the other common cause. When blood doesn&apos;t circulate well enough, the tissues don&apos;t get the nourishment they need to stay flexible. This kind of stiffness often comes with other signs: dull aches that linger in one spot, a purplish tint to the tongue or lips, or pain that&apos;s worse with pressure. The muscles are stiff because they&apos;re literally underfed by sluggish circulation, not because of any structural damage.
        </p>
        <p className="text-text2 leading-relaxed">
          Both patterns tend to be worse in the morning because your circulation slows down during sleep. If your Yang or your blood flow is already borderline, that overnight slowdown is enough to tip things into stiffness territory. Movement and warmth help because they temporarily boost circulation, which is why you feel better after shuffling around for 20 minutes or taking a warm shower.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Chronic Stiffness
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most associated with chronic stiffness.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the most common. Their internal heater runs low, so their body can&apos;t maintain enough warmth to keep muscles and joints supple. They&apos;re also often cold, especially their hands, feet, and lower back. They feel their best during summer and their worst during cold, damp weather. About 8% of people have this pattern.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Blood Stasis type (血瘀质) also experiences stiffness, but it&apos;s more localized and comes with other signs of sluggish circulation like easy bruising, dull aches in fixed locations, or a dusky complexion. Their stiffness is less about temperature and more about blood not reaching the tissues effectively. About 6% of people fall into this category.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
          <Link href="/types/blood_stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Loosen Things Up
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Warm ginger tea first thing in the morning can be associated with a noticeable difference. Ginger warms the body from the inside and supports circulation. Slice fresh ginger into hot water and drink it before you start your day. It&apos;s not a magic cure, but for Yang Deficient types, it&apos;s one of the most consistently helpful habits you can build.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          A warm shower before stretching makes the stretching actually work. Cold muscles don&apos;t stretch well. They resist, and if you push too hard, they tighten up more. Spend five minutes under warm water first, then do your stretches while your tissues are still warm. You&apos;ll get more range of motion with less effort and less risk of pulling something.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Tai chi and gentle qi gong are ideal movement practices for this pattern. They combine slow, continuous movement with deep breathing, which builds warmth and promotes circulation without overtaxing your system. Even 10 minutes of gentle flowing movement in the morning can be associated with less stiffness throughout the day. You don&apos;t need to learn a full form. Simple arm circles, gentle torso twists, and slow knee bends while breathing deeply will do.
        </p>
        <p className="text-text2 leading-relaxed">
          Don&apos;t sleep in cold rooms. This sounds obvious, but it&apos;s one of the most impactful changes for Yang Deficient stiffness. Your body temperature drops during sleep, and if the room is cold too, your Yang has to work overtime to keep things warm. Keep your bedroom warm enough that you&apos;re not shivering when you get out from under the covers. Warm sleepwear and socks can also help your body maintain enough warmth overnight to prevent that concrete-body feeling in the morning.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your stiffness is severe, getting progressively worse, or accompanied by joint swelling, redness, or fever, please consult a licensed healthcare provider. Stiffness that lasts more than an hour after waking, or that affects only specific joints, should be evaluated for inflammatory or autoimmune conditions.
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
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Cold?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-joint-pain" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Joint Pain?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
