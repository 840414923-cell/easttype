"use client"

import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function NightThirstArticle() {
  const slug = "why-am-i-always-thirsty-at-night"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Night Thirst</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Am I Always Thirsty at Night? The Midnight Dry Spell
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          The clock reads 2:47 AM. Your mouth is bone-dry. You reach for the water glass on your nightstand, drink half of it, and lie back down. An hour later, you&apos;re thirsty again. You wake up tired, with a dry throat and a foggy head. The daytime thirst was manageable. The nighttime thirst is relentless.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          This is different from daytime thirst. Daytime thirst can be caused by many things: not drinking enough, hot weather, salty food, exercise. But nighttime thirst, specifically waking at 2 or 3 AM with a dry mouth and throat, follows a different pattern. The body should be resting and replenishing at night, not calling for water.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine sees nighttime thirst as a classic signal of Yin Deficiency. The body&apos;s cooling system is undercharged, so internal heat builds during the night, drying out the mouth and throat. Drinking water helps temporarily, but the real issue is the coolant, not the water supply.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Night Thirst Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Dry mouth and throat that wake you at night",
            "Needing water specifically between 2 and 4 AM",
            "Waking up with a dry, sticky feeling in the mouth",
            "Thirst that returns shortly after drinking water",
            "Dry throat that makes it hard to fall back asleep",
            "Waking with a headache or foggy head from dehydration overnight",
            "Daytime thirst that&apos;s manageable but nighttime thirst that disrupts sleep",
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
          Before exploring Eastern frameworks, make sure you&apos;ve ruled out the basics. Diabetes is the most important one to check. High blood sugar causes excessive thirst at any time of day or night. A simple blood test can rule this out. Sleep apnea with mouth breathing is another common cause. A sleep study can evaluate this.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Medications causing dry mouth are worth reviewing with your doctor. Sjogren&apos;s syndrome, an autoimmune condition, can be checked with specific blood tests. Simple dehydration from not drinking enough during the day is an obvious possibility. Dry bedroom air from heating or air conditioning can also contribute, and a humidifier may help.
        </p>
        <p className="text-text2 leading-relaxed">
          But many people check their blood sugar, review their medications, use a humidifier, and still wake up thirsty at 3 AM. The dryness isn&apos;t from the air or from dehydration. It&apos;s from an internal cooling system that&apos;s running low on coolant. That&apos;s where Chinese medicine offers a different framework.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Night Thirst
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Nighttime thirst is a Yin Deficiency hallmark. Yin is the cooling, moistening principle. Night is when Yin should be dominant, replenishing the body&apos;s moisture reserves. When Yin is deficient, the body can&apos;t cool itself properly at night. Internal heat builds, and the body tries to cool itself by signaling thirst.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s like an air conditioner running low on coolant. The thermostat keeps calling for cooling, but the coolant isn&apos;t there to do the job. The dry mouth and throat aren&apos;t a water shortage. They&apos;re a coolant shortage. Drinking water helps temporarily, but the underlying Yin deficiency keeps the thermostat stuck on &quot;cool.&quot;
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin Deficiency often develops from habits that burn through the body&apos;s cooling reserves. Staying up late is the biggest one. The hours before midnight are when Yin replenishes most efficiently. Every hour of sleep before midnight is worth more than an hour after midnight for rebuilding Yin. Chronic stress, spicy food, and overwork also deplete Yin over time.
        </p>
        <p className="text-text2 leading-relaxed">
          The timing matters. Waking thirsty between 2 and 4 AM isn&apos;t random. In TCM&apos;s body clock, this is when the Liver system is most active. When Yin is deficient, the Liver generates heat during its active period, and the body responds with thirst. The 3 AM wake-up with a dry mouth is a specific signal, not just bad luck.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind Night Thirst
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Chinese medicine identifies 9 body types, and nighttime thirst shows up most clearly in one of them.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) is the primary and clear match. Their cooling system is undercharged. Nighttime thirst, dry mouth, and heat buildup at night are their signature symptoms. These people often run warm internally, have dry skin and eyes, and may experience night sweats alongside the thirst. About 10% of people fall into this category.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The internal dryness of Yin Deficiency isn&apos;t just about thirst. It affects sleep quality, mood, and overall energy. Without enough cooling Yin, the body runs slightly hot at night, which disrupts the deep rest that should replenish the system. The result is a cycle: Yin deficiency causes poor sleep, and poor sleep prevents Yin from replenishing.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Replenish the Midnight Coolant
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Yin-nourishing evening meals are the first line of support. Pear soup, lily bulb porridge, tremella mushroom dessert, and lotus seed congee all specifically support Yin rebuilding during the night hours when Yin should be replenishing. These foods are best eaten in the evening, giving the body the raw materials it needs for overnight repair.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sleep before 11 PM is the single most important intervention. The hours before midnight are when Yin replenishes most efficiently. Staying up past 11 is like making withdrawals from a bank account that&apos;s already low. You can&apos;t build savings if you keep spending, and you can&apos;t build Yin if you keep burning through it at night. This one change can be associated with significant improvement in nighttime thirst.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm, not cold, water at bedtime supports the body&apos;s natural nighttime cooling processes. Cold water shocks the system and can actually impair the body&apos;s ability to regulate temperature. Avoid heat-generating foods after noon: spicy food, alcohol, and coffee all add fuel to a fire that&apos;s already burning at night.
        </p>
        <p className="text-text2 leading-relaxed">
          Bedroom humidity can reduce overnight evaporation from the throat. A humidifier or even a bowl of water near the bed can help. Reduce screen time before bed. The blue light from screens generates internal heat and disrupts Yin replenishment. Reading a physical book or gentle stretching before bed supports the body&apos;s transition into its nighttime cooling mode.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          Nighttime thirst can sometimes indicate serious conditions. If thirst is accompanied by frequent urination, unexplained weight loss, or extreme fatigue, consult a doctor to check for diabetes. If dry mouth is severe and persistent, a doctor can evaluate for Sjogren&apos;s syndrome. This article is for informational purposes only and is not medical advice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            Internal Heat Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-thirsty" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Thirsty?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            Why Do I Wake Up at 3 AM?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Night Sweats?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
