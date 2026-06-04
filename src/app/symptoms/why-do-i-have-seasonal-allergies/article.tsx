import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhySeasonalAllergiesArticle() {
  const slug = "why-do-i-have-seasonal-allergies"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Immunity</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Have Seasonal Allergies? The Body That Overreacts to Every Season
      </h1>
      <p className="text-text2 text-sm mb-10">
        8 min read · Based on 3,000 years of Eastern body wisdom
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Spring arrives and your body treats it like an invasion. Trees bloom and your nose turns into a faucet. The sun is shining, everyone is outside, and you&apos;re inside with the windows shut, surrounded by crumpled tissues, wondering why your body can&apos;t just chill out about some pollen.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;ve tried the antihistamines. They help, sort of, but they make you drowsy or dry you out or stop working after a while. Every year it&apos;s the same battle. You start dreading the season change instead of looking forward to it. That&apos;s not how it should be.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine looks at seasonal allergies differently. Instead of asking &quot;what are you allergic to,&quot; it asks &quot;why is your body overreacting.&quot; The pollen isn&apos;t the problem. Pollen has been around forever. The problem is your body&apos;s threshold for handling it has dropped. Let&apos;s talk about why that happens and what you can do to raise that threshold back up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What Seasonal Allergies Actually Feel Like Beyond Sneezing
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If seasonal allergies hit you hard, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Sneezing fits that come in bursts of ten or more",
            "Runny or stuffy nose that shifts back and forth throughout the day",
            "Itchy, watery, red eyes that make you look like you&apos;ve been crying",
            "An itchy throat or roof of your mouth that drives you crazy",
            "Brain fog and fatigue that set in during peak pollen season",
            "Sinus pressure or headaches that feel like your head is in a vice",
            "Feeling completely drained by midday even though you haven&apos;t done much",
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
          Seasonal allergies happen when your immune system misidentifies harmless substances like pollen, mold spores, or grass as dangerous invaders. It releases histamine, which causes all the sneezing, itching, and congestion. Allergy testing can pinpoint your specific triggers, and that&apos;s useful information to have.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Genetics play a role. If your parents had allergies, you&apos;re more likely to have them too. Environmental factors matter: early childhood exposure (or lack thereof) to various allergens, air quality, and the hygiene hypothesis (too-clean environments may impair immune development). Stress, poor sleep, and a diet high in processed foods can all worsen allergic responses.
        </p>
        <p className="text-text2 leading-relaxed">
          Conventional treatments work for many people: antihistamines, nasal sprays, eye drops, and immunotherapy. But what about the people who still suffer despite all of these? The ones who spend three months of every year in a fog, cycling through medications? That&apos;s where Chinese medicine offers a complementary approach.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How Chinese Medicine Explains Seasonal Allergies
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In TCM, allergies aren&apos;t seen as a problem with the external world. They&apos;re seen as a problem with your Wei Qi, which is your body&apos;s defensive energy. Think of Wei Qi as your body&apos;s security system. When it&apos;s working properly, it can tell the difference between a real threat and a harmless visitor. Pollen walks in, Wei Qi says &quot;you&apos;re fine, move along.&quot;
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          But when Wei Qi is weak or dysregulated, it starts overreacting. It treats everything like a threat. Pollen walks in and the alarm goes off, the sprinklers activate, and the whole building goes into lockdown. That overreaction is what you experience as allergy symptoms: the sneezing, the watering eyes, the congestion. Your body&apos;s security system is doing too much.
        </p>
        <p className="text-text2 leading-relaxed">
          Wei Qi is produced by your Lung system and nourished by your Spleen. So when either your Lungs are weak or your Spleen isn&apos;t producing enough defensive energy, your Wei Qi drops. Chinese medicine also connects allergies to the concept of &quot;Wind.&quot; External Wind carries allergens into your body, and if your Wei Qi can&apos;t repel it, the Wind gets in and stirs up symptoms. That&apos;s why allergy symptoms often come on suddenly and change rapidly, just like wind.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Most Prone to Allergies
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, one is especially vulnerable to seasonal allergies.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Sensitive type (特禀质) is the classic allergy-prone body type. These people&apos;s bodies react to things that pass right through other people without a problem. Pollen, dust, certain foods, temperature changes, even emotional shifts. Their threshold for external stimuli is simply lower. Their security system is jumpy, like a smoke detector that goes off when you toast bread.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Sensitive types often have a history of allergies, asthma, or eczema going back to childhood. They may also be emotionally sensitive, picking up on other people&apos;s moods easily and getting overwhelmed in crowded or chaotic environments. Their body and their emotions are both finely tuned instruments that pick up signals others miss.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/sensitive" className="text-sm text-accent no-underline hover:underline">
            Sensitive Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Calm the Overreaction
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The long game is strengthening your Wei Qi. Foods that support Lung function include pears, lily bulb, white fungus, and almonds. Foods that support Spleen function (which produces Wei Qi) include sweet potato, rice, jujube dates, and warm cooked meals. A daily congee with a few jujube dates and goji berries is a simple, traditional way to support both systems.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          In the weeks before allergy season starts, be proactive. Reduce sugar, dairy, and cold foods, all of which create mucus and make congestion worse when pollen season hits. Start drinking chrysanthemum tea and mint tea, both of which help clear Wind-Heat from the head. Think of it as prepping your defenses before the invasion arrives.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          During peak allergy season, foods that may help include green tea (natural antihistamine properties), local honey (some people find it helps with local pollen, though evidence is mixed), pineapple (contains bromelain, which may reduce nasal swelling), and warm bone broth (nourishing without creating mucus). Avoid dairy, cold drinks, and excessive sweets, which thicken mucus and make symptoms worse.
        </p>
        <p className="text-text2 leading-relaxed">
          Gentle outdoor exercise when pollen counts are low can help. It builds Lung capacity and circulates Wei Qi. But avoid exercising outdoors on high-pollen days or in cold, windy weather, which introduces more Wind into your system and can trigger symptoms.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your allergy symptoms are severe, worsening each year, accompanied by wheezing or shortness of breath, or if over-the-counter medications aren&apos;t helping, please consult a licensed healthcare provider. Severe allergic reactions can sometimes be associated with asthma or anaphylaxis, which need proper medical management.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Pattern
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/high-sensitivity" className="text-sm text-accent no-underline hover:underline">
            High Sensitivity Pattern →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Related Symptoms
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-get-sick-so-often" className="text-sm text-accent no-underline hover:underline">
            Why Do I Get Sick So Often?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-eczema" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have Eczema?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
