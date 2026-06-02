
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function BrainFogArticle() {
  const slug = "why-do-i-have-brain-fog"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Brain Fog</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Brain Fog? When Your Head Lives in a Cloud
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You know the feeling. You walk into a room and forget why. You read the same paragraph three times and still can't tell someone what it said. Your thoughts feel like they're moving through wet concrete. It's not that you can't think. It's that thinking takes so much more effort than it used to.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          People call it brain fog, and it's become one of the most common complaints in wellness clinics and internet forums alike. But unlike a headache or a rash, brain fog is hard to measure. Blood tests come back normal. Brain scans look fine. Your doctor says there's nothing wrong, and you go home feeling like maybe it's all in your head.
        </p>
        <p className="text-text2 leading-relaxed">
          It's not in your head. Well, it is, but not in the way you think. Traditional Chinese Medicine has been describing this exact collection of symptoms for centuries, and it connects brain fog to patterns that go deeper than "you need more sleep."
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Brain Fog Actually Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Most people with brain fog recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Trouble concentrating, even on things you usually enjoy",
            "Forgetting words mid-sentence or losing your train of thought",
            "Feeling like your head is stuffed with cotton or underwater",
            "Slow mental processing — everything takes a beat longer than it should",
            "Difficulty making decisions that would normally be easy",
            "Reading something multiple times without absorbing it",
            "Feeling mentally exhausted after short periods of focus",
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
          Before looking at Eastern frameworks, make sure you've ruled out the basics. Poor sleep is the most common cause. If you're regularly getting less than 7 hours, that alone could explain the fog. Dehydration is another one that people underestimate. Your brain is roughly 75% water, and even mild dehydration can slow your thinking.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Other common culprits: vitamin B12 deficiency, iron deficiency, thyroid dysfunction, certain medications (especially antihistamines and anxiety medications), post-viral effects, and blood sugar instability from eating too much sugar or refined carbs. If you haven't had basic blood work done recently, that's a good starting point.
        </p>
        <p className="text-text2 leading-relaxed">
          But here's the thing. A lot of people have normal test results and still feel foggy. Their sleep is fine. Their vitamins are fine. Everything checks out, and the fog persists. That's where Traditional Chinese Medicine offers a different lens.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Brain Fog
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine doesn't have a concept called "brain fog." But it does have a concept that describes the exact same experience: Phlegm Damp clouding the head. In TCM theory, your Spleen is responsible for transforming food into clear energy and transporting that energy upward to your brain. When your Spleen is weak, or when you're eating foods that create excess moisture, the transformation doesn't happen cleanly. Instead of clear energy rising to your head, you get a cloudy, sticky, heavy substance that Chinese medicine calls Phlegm Damp.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like this. Your brain is a window. Normally it's clean and clear, and you can see through it easily. Phlegm Damp is like condensation building up on that window. The view is still there, but it's obscured. Wiping the outside of the window doesn't help because the condensation is coming from inside. You need to change the conditions that are creating the moisture in the first place.
        </p>
        <p className="text-text2 leading-relaxed">
          There's also a second pattern that contributes to brain fog: Qi Deficiency. When your body's overall energy is low, your brain simply doesn't have enough fuel to run at full speed. This creates a different quality of fog, more like dimming the lights than clouding the window. Some people have both patterns simultaneously, which is why their brain fog feels so stubborn.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind the Fog
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and brain fog shows up most in two of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Phlegm Damp type (痰湿质) is the classic brain fog type. Their body holds onto moisture like a sponge that never fully wrings out. Everything feels heavy, slow, and clouded. They often carry weight around their middle, feel worse in humid weather, and notice that their thinking gets even slower after heavy meals. About 10% of people fall into this category. For them, the fog is thick and persistent, like a damp morning that lasts all day.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) experiences brain fog differently. Their fog comes from running on low power. The brain is there, the thoughts are there, but everything takes more effort. It's like a computer with too many tabs open and not enough RAM. About 15% of people have this pattern. Their fog tends to get worse as the day goes on, especially in the afternoon.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            Phlegm Damp Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Clearing the Fog: What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Phlegm Damp is the main issue, the approach is about drying out the system. Foods that help drain moisture include adzuki beans, coix seed (Job's tears), winter melon, celery, and modest amounts of green tea. Hawthorn tea and tangerine peel tea are traditional choices for cutting through the fog. Equally important is cutting back on foods that add moisture: dairy, sweets, fried food, cold drinks, beer, and excessive fruit.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Qi Deficiency is behind your fog, the focus shifts to building energy. Warm, cooked, easy-to-digest meals are the foundation. Congee (rice porridge), sweet potato, jujube dates, ginger tea, and chicken broth all support energy production. Cold and raw foods drain what little energy you have, so those are best minimized.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          One thing that helps both patterns: movement. Not intense, draining workouts. Gentle, consistent movement like walking, light jogging, or stretching. Getting your blood flowing helps in two ways: it moves stagnant energy and it helps your body process excess moisture. Even a 15-minute walk after meals can make a real difference.
        </p>
        <p className="text-text2 leading-relaxed">
          Start your morning with warm water instead of coffee. Coffee gives a temporary boost but may worsen both patterns over time. Warm water wakes up your digestive system gently and sets up clearer thinking for the rest of the day. Add ginger if you suspect Qi Deficiency, or a few dried tangerine peels if Dampness seems more like your issue.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your brain fog is severe, getting worse, or accompanied by other symptoms like headaches, vision changes, numbness, or confusion, please consult a licensed healthcare provider. Brain fog can sometimes be connected to conditions that need proper medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            Heavy & Sluggish Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Sleepy?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            Always Bloated After Eating
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
