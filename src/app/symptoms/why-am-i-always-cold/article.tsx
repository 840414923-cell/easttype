
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysColdArticle() {
  const slug = "why-am-i-always-cold"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Always Cold</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Cold? The Internal Heater Problem
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          If you're the person who always brings a sweater everywhere, even in summer, you're not weird. You're not being dramatic. Your body is telling you something. I used to think I was just "bad with cold" until I learned that in Chinese medicine, always feeling cold has a specific name and a specific set of solutions.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Maybe you sit on your hands during meetings. Maybe you wear socks to bed year-round. Maybe your partner complains that your feet are like ice blocks when you get under the covers. These aren't just quirks. In Eastern body wisdom, they're clues about how your internal heating system is running.
        </p>
        <p className="text-text2 leading-relaxed">
          This page isn't about telling you to "just wear more layers." It's about understanding why your body runs cold when other people are perfectly comfortable, and what you can do about it from the inside out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What's Behind the Constant Cold Feeling
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Sure, sometimes being cold is about not wearing enough layers or sitting in a drafty room. But if you're always cold regardless of the environment, there's something else going on. Your thyroid might be underactive, which is worth checking with your doctor. Low iron or poor circulation could also play a role.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          But here's what frustrates a lot of people: the blood work comes back fine. Thyroid is normal. Iron is normal. Vitamin D is fine. Everything checks out. Yet you're still sitting there with freezing hands while your coworker is in a t-shirt. That's the space where Eastern body wisdom offers a different perspective.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine doesn't see cold sensitivity as random bad luck. It sees it as a pattern that makes sense once you understand how your body's internal heating works. The key concept here is Yang — the warming, active, energizing force in your body. When Yang is low, your internal furnace underperforms, and you feel it in your fingers, toes, and lower back.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          The TCM View: Yang Deficiency Explained
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, being cold all the time is most often linked to Yang Deficiency (阳虚). Yang is your body's fire. It warms you, powers your metabolism, keeps things moving. When Yang is running low, your body does something smart but annoying: it prioritizes. It keeps your vital organs warm by pulling heat away from your extremities. Your hands and feet get the short end of the stick.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yang Deficiency doesn't usually appear overnight. It can develop slowly after years of eating cold foods (ice water, raw salads, smoothies), living in cold environments without proper warmth, being sick for a long time, or just getting older. Some people are born with a tendency toward it. Think of it like a pilot light that slowly dims over time.
        </p>
        <p className="text-text2 leading-relaxed">
          Common signs that might point to Yang Deficiency include cold hands and feet that never seem to warm up, a preference for hot drinks and hot food, needing extra blankets at night, lower back soreness or knee weakness, frequent pale or clear urination, and feeling worse during cold weather. If several of these sound familiar, Yang Deficiency might be part of your picture.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Which Body Types Run Cold
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most often associated with feeling cold all the time.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the main one. These people feel cold from the inside out. Cold hands, cold feet, cold lower back. They crave warmth and feel their best during summer. About 8% of people have this as their primary type. Their internal furnace simply doesn't produce enough heat, so they're always reaching for another layer.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Qi Deficient type (气虚质) can also feel cold, but the main complaint is fatigue rather than temperature. Qi is the fuel, and Yang is the fire. You need fuel to make fire, so sometimes low Qi leads to low Yang over time. If you're both tired AND cold, you might have elements of both patterns.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            Yang Deficient Type →
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            Qi Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Warming Up From the Inside
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most direct way to support Yang is through what you eat. Warming foods in TCM include ginger, cinnamon, lamb, beef, black pepper, roasted nuts, fennel, onion, and leek. These aren't randomly chosen. Each one is classified based on centuries of observation about how it affects the body's temperature and energy. Start by adding fresh ginger to your cooking. It's probably the easiest warming food to incorporate, and many people notice a difference within days.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Equally important: stop pouring ice on your internal fire. Ice water, cold smoothies, raw salads, watermelon, and excessive fruit all have a cooling effect on the body. You don't have to eliminate them entirely, but cutting back significantly can make a real difference. Try room temperature water instead of ice water. That alone is a meaningful change for Yang Deficient types.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Keep your lower back and belly warm. In TCM, the lower back and lower abdomen are considered the seat of Yang energy in the body. When these areas get cold, your whole system feels it. Try a hot water bottle on your lower back in the evening, or wear a light undershirt that covers your midsection even in summer when air conditioning is blasting.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm foot soaks before bed can be surprisingly effective. Soak your feet in hot water (as hot as you can comfortably tolerate) for 15 to 20 minutes. Add a few slices of ginger or a handful of mugwort if you have it. This draws warmth down to your extremities and can help you sleep better too, which supports overall recovery.
        </p>
        <p className="text-text2 leading-relaxed">
          Gentle movement helps, but skip the cold morning jogs if you're Yang Deficient. Exercise that makes you sweat heavily in cold weather can actually deplete Yang further. Try indoor yoga, gentle walking in warm environments, or tai chi. The goal is to generate internal warmth without exhausting yourself in the process.
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
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Tired?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3 AM?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />

      <section className="mt-10 mb-4">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
            What Foods May Help
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            We put together a full food guide for this symptom, including what to eat, what to avoid, and a simple daily meal plan.
          </p>
          <Link href="/foods-for/when-youre-always-cold" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>


      <SymptomCta />
    </main>
  )
}
