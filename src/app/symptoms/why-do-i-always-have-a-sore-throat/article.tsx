
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhySoreThroatArticle() {
  const slug = "why-do-i-always-have-a-sore-throat"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">Symptoms</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Respiratory</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Why Do I Always Have a Sore Throat? The Fire in the Chimney
      </h1>
      <p className="text-text2 text-sm mb-10">8 min read · Based on 3,000 years of Eastern body wisdom</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          Your throat feels raw. Not just today, but most days. You wake up with a scratchy feeling, clear your throat constantly, and by evening your voice is hoarse. It&apos;s not strep. It&apos;s not a cold. It just keeps coming back like an uninvited guest who shows up every few weeks.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          You&apos;ve probably tried it all. Throat lozenges, salt water gargles, honey tea. They help for a little while, then the soreness creeps back. Doctors look at your throat and say it looks a bit red, maybe prescribe something, but nothing really fixes it long-term.
        </p>
        <p className="text-text2 leading-relaxed">
          In Chinese medicine, a throat that&apos;s always sore isn&apos;t just a throat problem. It can be a sign that heat is accumulating in the upper part of your body, like a chimney that&apos;s too dry. The fireplace below is burning fine, but the flue doesn&apos;t have enough moisture to handle the heat rising through it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What a Chronic Sore Throat Feels Like
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If this is your pattern, you probably recognize several of these:
        </p>
        <ul className="space-y-2">
          {[
            "Waking up with a dry, scratchy, or sore throat most mornings",
            "Throat discomfort that improves somewhat during the day",
            "Needing to clear your throat frequently",
            "A raw or burning sensation in the throat",
            "Voice that gets hoarse easily, especially after talking",
            "Throat feels worse after spicy, fried, or heating foods",
            "Soreness that returns repeatedly without a full-blown cold",
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
          Before exploring Eastern perspectives, it&apos;s worth ruling out some common causes. Acid reflux is a big one. Stomach acid can travel up into the throat while you sleep, causing irritation you feel the next morning. If your sore throat is worse in the morning, this might be why. A doctor can check for GERD or LPR (silent reflux).
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Allergies can cause post-nasal drip that irritates the throat. Dry air, especially from heating or air conditioning, can dry out your throat overnight. Mouth breathing at night is another culprit. Vocal strain from talking or singing a lot can keep the throat inflamed. Chronic tonsillitis or tonsil stones might be involved.
        </p>
        <p className="text-text2 leading-relaxed">
          If you&apos;ve checked for these and the sore throat keeps returning, Chinese medicine offers a framework for understanding why the throat never quite heals. It comes down to internal heat and insufficient moisture, a pattern that builds over time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          How TCM Explains a Chronic Sore Throat
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          In Traditional Chinese Medicine, the throat is considered the gateway to the Lungs and is closely connected to several organ systems. A chronically sore throat is most often linked to Yin Deficiency with virtual heat rising upward. Here&apos;s what that means in plain language.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Yin is the cooling, moistening aspect of your body. When Yin is sufficient, it keeps the upper body cool and lubricated. The throat stays comfortable, the mouth stays moist, and things feel balanced. But when Yin runs low, there isn&apos;t enough coolant to keep the system comfortable. Heat that should be balanced starts to rise and collect in the upper body, particularly in the throat.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Think of it like a chimney. Normally, the chimney can handle the heat from the fireplace below because it has a layer of moisture and insulation. But if the chimney dries out, the heat scorches the inside. That&apos;s what a Yin Deficient throat feels like. The &quot;fire&quot; from below rises up and there isn&apos;t enough moisture to buffer it. The result is a throat that always feels raw, dry, or mildly inflamed.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          It&apos;s often worse in the morning because Yin is supposed to replenish during sleep. But if your Yin is already depleted, the overnight repair falls short. You wake up with a throat that&apos;s been slowly drying out all night. The afternoon and evening can bring another wave of discomfort as the day&apos;s activities consume what little Yin you&apos;ve built up.
        </p>
        <p className="text-text2 leading-relaxed">
          This pattern can develop from staying up late regularly, eating too many spicy or fried foods, chronic stress, or simply aging. Women may notice it getting worse during and after menopause when Yin naturally declines. The throat is simply the place where this internal dryness shows up most obviously.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          Body Types Behind a Chronic Sore Throat
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          Among the 9 body types in Chinese medicine, the Yin Deficient type is most commonly associated with recurrent sore throats.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          The Yin Deficient type (阴虚质) tends to run warm internally and lack the moistening resources to keep the upper body comfortable. These people often have a dry mouth, dry eyes, and dry skin alongside their throat issues. They may sleep poorly, feel warm at night, and get irritable when the throat flares up. About 10% of people have this as their primary body type.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          For Yin Deficient people, the throat is like a canary in a coal mine. It&apos;s the first place to complain when internal dryness reaches a certain threshold. The sore throat isn&apos;t the root problem. It&apos;s a symptom of a body that doesn&apos;t have enough cooling, moistening resources to keep everything running smoothly.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            Yin Deficient Type →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          What May Help Soothe the Fire
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          The most important shift is to stop doing things that generate internal heat. Spicy foods, fried foods, alcohol, and excessive coffee all add fuel to the fire that&apos;s already drying out your throat. You don&apos;t have to eliminate them entirely, but reducing them can make a noticeable difference within a week or two.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Warm water with honey is one of the simplest and most effective things you can do. Honey in TCM is considered moistening and soothing to the throat. Don&apos;t use boiling water, as it can destroy some of honey&apos;s beneficial properties. Warm water is ideal. Sip this throughout the day, especially first thing in the morning when your throat is at its driest.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Loquat is a fruit that&apos;s well-known in Chinese medicine for soothing the throat. You can find loquat syrup (called pipa gao) at most Asian grocery stores. It&apos;s a thick, sweet syrup made from loquat leaves and other herbs. A spoonful when your throat feels scratchy can be surprisingly effective. Licorice root (gan cao) is another classic remedy. Simmer a small piece in hot water to make a tea that coats and soothes the throat.
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          Here&apos;s something that surprises many people: stop drinking cold water. In TCM, cold water impairs the Spleen&apos;s ability to produce and distribute fluids. The Spleen is the organ system responsible for transforming what you eat and drink into usable moisture for the body. When you pour cold water into the system, it&apos;s like putting ice on a warm engine. Everything slows down. Your body has to spend energy warming the water before it can use it, and that energy comes from the same resources that should be moisturizing your throat. Switch to room temperature or warm water and see if you notice a difference.
        </p>
        <p className="text-text2 leading-relaxed">
          Getting to bed before 11 PM is critical for Yin Deficient types. The hours before midnight are when the body does its deepest repair work on Yin. If you&apos;re regularly up past midnight, you&apos;re borrowing from tomorrow&apos;s moisture to pay for tonight&apos;s activity. The throat will be the first to let you know.
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          When to See a Doctor
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational purposes only and is not medical advice. If your sore throat is severe, persists beyond two weeks, is accompanied by difficulty swallowing, breathing problems, a persistent lump in the throat, ear pain, or unexplained weight loss, please consult a licensed healthcare provider. Recurrent throat pain can be associated with conditions that need proper medical evaluation.
        </p>
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
          <Link href="/symptoms/why-do-i-have-a-chronic-cough" className="text-sm text-accent no-underline hover:underline">
            Why Do I Have a Chronic Cough?
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-thirsty" className="text-sm text-accent no-underline hover:underline">
            Why Am I Always Thirsty?
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
