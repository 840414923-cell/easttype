
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyColdSweatsArticle() {
  const slug = "why-do-i-have-cold-sweats"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Sweating</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Cold Sweats? The Chill That Comes With the Drip
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;re sweating, but you&apos;re not hot. Your skin is damp and clammy, and instead of feeling the relief that usually comes with sweating, you feel a chill underneath. It&apos;s an uncomfortable contradiction: wet on the outside, cold on the inside. And it happens at times that don&apos;t make obvious sense. Not during a workout, not in a sauna, just randomly during the day or at night when you&apos;re trying to sleep.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Cold sweats are different from the normal sweating you do when you&apos;re hot or exercising. Normal sweat is warm. It&apos;s your body&apos;s cooling mechanism working as intended. Cold sweat is something else. It&apos;s moisture escaping when it shouldn&apos;t, and the fact that it feels cold tells you the body isn&apos;t generating enough internal warmth to balance what&apos;s being lost.
        </p>
        <p className="text-text2 leading-relaxed">
          If this sounds familiar and your doctor hasn&apos;t found a clear cause, the Eastern medicine perspective offers a specific explanation involving your body&apos;s defensive energy and its ability to keep the doors closed when they should be closed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What It Feels Like
        </h2>
        <ul className="space-y-2 mb-3">
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Clammy, damp skin that feels cold to the touch
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Sweating at odd times, not during exertion or heat
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Feeling cold and sweaty at the same time, especially on the forehead or back
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            Sweating that happens with minimal physical effort or during rest
          </li>
          <li className="text-text2 leading-relaxed flex items-start gap-2">
            <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
            A general sense of feeling wiped out or weak alongside the sweating
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The Obvious Stuff First
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Anxiety and panic attacks are probably the most common cause of cold sweats. Your fight-or-flight system kicks in, adrenaline surges, and your body produces a cold sweat even though there&apos;s no physical threat. Low blood sugar can also trigger cold sweats, especially if you&apos;ve gone too long without eating. The body panics when glucose drops and responds with sweating, shakiness, and clamminess.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Infections can cause cold sweats too, as your body cycles through fever and tries to regulate temperature. Motion sickness, pain, and certain medications are other common triggers.
        </p>
        <p className="text-text2 leading-relaxed">
          If your cold sweats are chronic, not tied to anxiety or blood sugar dips, and happen regularly without a clear trigger, that&apos;s the space where Eastern medicine offers an explanation based on your body&apos;s constitutional patterns.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains Cold Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, there&apos;s a specific type of energy called Wei Qi, or Defensive Qi. It circulates just beneath the skin and controls the opening and closing of your pores. Think of it like a door latch on a house. When the latch works properly, the doors stay closed when they should and open when they need to. Heat stays in when it&apos;s cold outside. Moisture stays in when you&apos;re at rest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          When Defensive Qi is too weak, the latch doesn&apos;t hold. The pores open when they shouldn&apos;t, and moisture escapes. Because the body doesn&apos;t have enough energy to both hold the pores closed and maintain internal warmth, what comes out feels cold and clammy. The sweat isn&apos;t from excess heat. It&apos;s from a lack of containment.
        </p>
        <p className="text-text2 leading-relaxed">
          This is different from night sweats, which are usually linked to Yin Deficiency and tend to feel warm. Night sweats happen because there&apos;s too much internal heat pushing outward. Cold sweats happen because the boundary is too weak to keep moisture in. Warm sweat points to excess heat. Cold, clammy sweat points to insufficient energy at the surface.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Get Cold Sweats
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) is the primary pattern associated with cold sweats. These people tend to feel tired easily, have a soft voice, sweat with minimal exertion, and feel like their energy is always running low. Their Defensive Qi isn&apos;t strong enough to keep the pores sealed properly, so moisture leaks out at times it shouldn&apos;t. About 12% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) can also experience cold sweats, since Yang provides the warmth that Qi circulates. When both are low, the sweat comes out cold and the person feels chilled from the loss. If your cold sweats come with cold hands, cold feet, and a preference for warmth, Yang Deficiency may be part of the picture too.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Strengthening Qi is the foundation. Warm, cooked, easy-to-digest foods give your body the fuel it needs without draining energy in the process. Rice porridge (congee), chicken soup, sweet potato, and oats are all gentle on the digestive system and help build Qi over time. The key is consistency, not intensity. Small, regular meals of nourishing food work better than occasional big meals.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Avoid excessive sweating. If you&apos;re already losing moisture through cold sweats, heavy workouts that make you sweat more can drain the system further. This doesn&apos;t mean don&apos;t exercise. It means favoring gentle movement like walking, light yoga, or tai chi over high-intensity sessions that leave you drenched. Save the intense workouts for when your Qi is stronger.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Layer up, especially around the midsection and lower back. Keeping these areas warm supports the Kidney and Spleen, which are the organs most involved in producing Qi. A light undershirt or a scarf around the lower back can make a real difference, especially in air-conditioned environments that drain warmth without you noticing.
        </p>
        <p className="text-text2 leading-relaxed">
          Regular meal times help stabilize blood sugar and support the Spleen&apos;s role in energy production. Skipping meals, especially breakfast, weakens Qi over time. Even something small and warm in the morning, like a bowl of oatmeal or a cup of warm broth, gives your body a signal that it has fuel to work with.
        </p>
      </section>

      <section className="mb-10">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
            When to See a Doctor
          </h2>
          <p className="text-text2 leading-relaxed mb-3">
            Cold sweats that come on suddenly with chest pain, shortness of breath, dizziness, or a feeling of impending doom are a medical emergency. Call emergency services. These can be signs of a heart attack or other serious cardiovascular event.
          </p>
          <p className="text-text2 leading-relaxed mb-3">
            New or persistent cold sweats that don&apos;t have an obvious trigger like anxiety or low blood sugar should be evaluated by a doctor. They can be associated with infections, hormone imbalances, or other conditions that need proper diagnosis.
          </p>
          <p className="text-text2 leading-relaxed text-sm">
            This article is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            Low Vitality Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-sweat-so-much" className="text-sm text-accent no-underline hover:underline">
            Why Do I Sweat So Much?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
