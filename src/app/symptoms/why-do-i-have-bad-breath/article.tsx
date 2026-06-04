
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyBadBreathArticle() {
  const slug = "why-do-i-have-bad-breath"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Oral</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Bad Breath? The Fire Down Below That Rises to the Top
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          You brush. You floss. You use mouthwash. You carry mints everywhere. And yet, an hour later, the bad breath is back. You can taste it. You can feel it. And you&apos;re pretty sure other people can too. It&apos;s embarrassing, frustrating, and honestly kind of exhausting to deal with every single day.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The standard approach is all about the mouth. Better brushing technique, tongue scraping, flossing more, using antibacterial mouthwash, maybe seeing a dentist for a deep clean. These things help temporarily. But if the bad breath keeps returning no matter how diligent your oral hygiene is, the problem might not be starting in your mouth at all.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine has a saying: the mouth is the opening of the Stomach. What happens in your digestive system can show up on your breath. If there&apos;s heat and stagnation below, it rises upward and comes out as bad breath. Fix the mouth all you want. If the source is digestive, it keeps coming back.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Chronic Bad Breath Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Bad breath that returns within an hour of brushing",
            "A persistent sour, bitter, or metallic taste in your mouth",
            "Breath that feels hot or dry",
            "Worse after heavy, greasy, or spicy meals",
            "Accompanied by a coated tongue, especially yellow or thick white",
            "Mouthwash and mints only mask it temporarily",
            "You may also have bloating, acid reflux, or a feeling of fullness",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Poor oral hygiene is the number one cause: inadequate brushing, not flossing, and tongue coating buildup. Gum disease (gingivitis or periodontitis) creates pockets where bacteria thrive. Tooth decay and infected dental work can produce persistent odor.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Dry mouth (xerostomia), often caused by medications, reduces saliva&apos;s natural cleaning action. Tonsil stones are another common but overlooked cause. Sinus infections, post-nasal drip, and acid reflux can all contribute to bad breath from the throat and digestive tract.
        </p>
        <p className="text-text2 leading-relaxed">
          If your dentist says your teeth and gums are healthy, your oral hygiene is solid, and the bad breath persists, that&apos;s a strong signal that the source is further down. Chinese medicine would look at the Stomach and digestive system as the root.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Bad Breath
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Chinese medicine, the Stomach meridian connects directly to the mouth. When everything is working well, the Stomach&apos;s energy flows downward, food is processed smoothly, and your breath is neutral. But when something goes wrong in the digestive system, that energy can rebel upward, carrying heat and stagnation with it, and that&apos;s what shows up as bad breath.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The most common pattern behind chronic bad breath is Damp Heat in the Stomach. Think of your digestive system like a kitchen sink drain. When it&apos;s clean and flowing, everything works fine. But when grease and food particles build up in the drain, they start to decompose. The water still goes down, slowly, but there&apos;s a lingering smell that comes back no matter how many times you clean the outside of the sink. That&apos;s Damp Heat. The Dampness is the sludge building up, and the Heat is the decomposition creating warmth and odor.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is why brushing your teeth only helps temporarily. You&apos;re cleaning the outside of the sink while the drain is still clogged. The odor keeps coming back because the source hasn&apos;t been addressed.
        </p>
        <p className="text-text2 leading-relaxed">
          Damp Heat in the Stomach often comes with other digestive symptoms: a feeling of fullness after meals, acid reflux, a bitter or sour taste, a thick coated tongue, and sometimes nausea. These are all signs that the digestive system is struggling to process things efficiently and heat is building up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Bad Breath
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and bad breath shows up most in one specific type.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Damp Heat type (湿热质) is the primary match. Their body naturally tends toward both Dampness and Heat, which is exactly the combination that creates chronic bad breath. They run warm, feel sticky in humid weather, and may have oily skin, acne, or strong body odor alongside the breath issue. About 8% of people fall into this category. If you&apos;re this type, your bad breath probably gets worse after spicy, greasy, or heavy meals, and you might notice a thick yellow coating on your tongue.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/damp_heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Clear Things Up
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Since the root is Damp Heat, the approach is two-pronged: drain the Dampness and clear the Heat. You&apos;re essentially cleaning out the kitchen sink drain instead of just wiping the outside of the sink.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Mint tea can help on a day-to-day basis. It has a cooling nature in TCM and may help clear heat from the Stomach while freshening breath from the inside. Celery is another traditional recommendation. It&apos;s crisp, cooling, and helps drain dampness. Cucumber, mung bean soup, and modest amounts of green tea also support the clearing process.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          On the avoidance side, the big ones are spicy food, alcohol, deep-fried food, lamb, and excessive dairy and sweets. These are the foods that add fuel to the fire and sludge to the drain. You don&apos;t have to eliminate everything forever, but reducing these while you work on clearing the pattern can make a real difference.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Drink warm water instead of cold. Warm water helps the digestive system process things more efficiently. Cold water congeals the fats and makes the drain even slower. Think about pouring cold water down a greasy drain versus warm water. Warm cuts through; cold makes the grease solidify.
        </p>
        <p className="text-text2 leading-relaxed">
          Keep up your oral hygiene. It still matters. But if you&apos;ve been doing everything right at the surface level and the smell keeps returning, the Damp Heat approach addresses the source rather than just the symptom.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your bad breath is accompanied by persistent dry mouth, gum bleeding, loose teeth, difficulty swallowing, chronic acid reflux, or unexplained weight loss, please consult a licensed healthcare provider. These can sometimes indicate conditions that need medical attention.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/damp-heat" className="text-sm text-accent no-underline hover:underline">
            Damp Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-have-acid-reflux" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Acid Reflux?
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
