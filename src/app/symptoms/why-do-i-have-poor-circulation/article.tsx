import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyPoorCirculationArticle() {
  const slug = "why-do-i-have-poor-circulation"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Circulation</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Poor Circulation? The River That Slowed to a Trickle
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your feet are numb. Your hands have a faint bluish tint. You press your fingernail and it takes forever for the color to come back. Your doctor says your circulation is fine, but you know something isn&apos;t right. You feel it every time you sit down for too long or wake up with pins and needles in your hands.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Poor circulation is one of those things that sounds minor until you live with it. It makes your extremities cold, your skin discolored, your muscles achy, and your energy low. It&apos;s like your body is a city where the water pressure keeps dropping. The downtown core gets enough, but the neighborhoods at the edges are running dry.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a beautifully simple way of looking at circulation: Blood follows Qi, and Qi follows warmth. If you&apos;re cold and your energy is low, your blood is going to move slowly. Let&apos;s break down what that means for your body type and what you can do about it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Poor Circulation Actually Feels Like Day to Day
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If your circulation is sluggish, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Cold hands and feet that never seem to warm up, even in warm weather",
            "Tingling, pins and needles, or numbness in your extremities",
            "Skin that looks pale, bluish, or mottled, especially on fingers and toes",
            "Slow capillary refill when you press on your fingernails",
            "Feeling heavy, achy, or stiff in your legs after sitting",
            "Swelling in your ankles or feet at the end of the day",
            "Getting lightheaded when standing up quickly",
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
          Before looking at Eastern perspectives, rule out the medical basics. Peripheral artery disease narrows blood vessels and restricts flow to your limbs. Diabetes can damage blood vessels and nerves over time. Raynaud&apos;s syndrome causes blood vessels in your fingers and toes to spasm in response to cold or stress. Varicose veins can impair return blood flow from your legs. Sitting or standing for long periods without moving is a lifestyle factor that slows circulation significantly.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Smoking is one of the worst things for circulation. It constricts blood vessels and damages their inner lining. Dehydration thickens your blood and makes it harder to pump. Being sedentary means your muscles aren&apos;t helping push blood back toward your heart. If you&apos;re on any of these factors, addressing them is the first step.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people with poor circulation have clean arteries, normal blood sugar, and no varicose veins. The plumbing is intact, but the flow is still slow. It&apos;s like having a perfectly good highway with a speed limit of 20. Nothing is broken, but nothing is moving well either. That&apos;s where Chinese medicine comes in.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Poor Circulation
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, Blood doesn&apos;t move on its own. It needs Qi to push it and warmth to keep it flowing. Think of your blood vessels as rivers. The water (Blood) needs a current (Qi) and a temperature warm enough to keep it from freezing. When either Qi or warmth is lacking, the river slows down. Sediment builds up. The flow gets sluggish. Areas furthest from the source, your fingers and toes, are the first to feel it.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The most common pattern is Yang Deficiency. Yang is your body&apos;s warming, activating force. When Yang is low, your body is literally running cold, and cold causes things to contract and slow down. Your body prioritizes keeping your core organs warm, so it pulls warmth and blood away from your extremities. That&apos;s why cold hands and cold feet are the most common signs of poor circulation in TCM.
        </p>
        <p className="text-text2 leading-relaxed">
          The second pattern is Blood Stasis. This is when blood has become thick or stagnant enough that it can&apos;t flow freely even when Qi and warmth are adequate. Think of it like a river that&apos;s gotten muddy and clogged. Blood Stasis often develops over time and can cause more severe symptoms: purplish discoloration, sharp fixed pain, varicose veins, and menstrual clots. It&apos;s a more advanced stage of the same basic problem.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types With Sluggish Flow
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, two are most associated with poor circulation.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yang Deficient type (阳虚质) is the primary match. Their internal furnace is running on low, so everything runs cold. Their hands and feet are like ice cubes, they need extra blankets, and they feel their best during summer. About 8% of people fall into this category. Their poor circulation is a direct result of not enough internal warmth to keep the blood moving well.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Blood Stasis type is the second pattern. These people have blood that&apos;s thick or sluggish. It&apos;s not that they&apos;re cold necessarily, it&apos;s that the blood itself has become harder to move. They may have a dusky or dull complexion, dark lips, and their skin might have a slightly purplish tint in certain areas. Their circulation problems tend to be more localized and more persistent.
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
          What May Help Get Things Moving
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          If Yang Deficiency is the issue, warming is the priority. Ginger, cinnamon, lamb, beef, black pepper, roasted nuts, and warm soups should be daily staples. Stop drinking ice water. Switch to warm or room temperature water. A simple ginger tea (fresh ginger slices boiled for 10 minutes) every morning can make a noticeable difference within a week or two. It&apos;s like turning up the thermostat on your internal heater.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          If Blood Stasis is the pattern, foods that invigorate blood circulation are the focus. Hawthorn, black fungus, peach kernel, turmeric, and modest amounts of dark chocolate or red wine are traditional choices. Movement is especially important for Blood Stasis because physical activity literally pushes blood through your vessels. Even a brisk 20-minute walk can help.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm foot soaks are a simple, surprisingly effective habit for both patterns. Soak your feet in hot water with fresh ginger slices or Epsom salt for 15 to 20 minutes before bed. This draws warmth and blood flow to your extremities, helps you sleep better, and over time can significantly improve circulation in your legs and feet.
        </p>
        <p className="text-text2 leading-relaxed">
          Avoid sitting for more than an hour without getting up and moving. If you work at a desk, set a timer. Stand up, stretch, walk around for two minutes, sit back down. Your muscles are your circulatory system&apos;s assistants. When they contract, they squeeze blood back toward your heart. Without that help, blood pools in your legs and your circulation suffers.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If you experience sudden numbness, loss of feeling, skin color changes to white or blue, non-healing wounds on your feet or legs, or pain in your legs when walking that stops when you rest, please consult a licensed healthcare provider immediately. Poor circulation can sometimes be associated with serious vascular conditions that need medical treatment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Patterns
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">
            Cold Sensitivity Pattern →
          </Link>
          <Link href="/patterns/blood-stasis" className="text-sm text-accent no-underline hover:underline">
            Blood Stasis Pattern →
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
          <Link href="/symptoms/why-do-my-hands-and-feet-go-numb" className="text-sm text-accent no-underline hover:underline">
            Why Do My Hands and Feet Go Numb?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
