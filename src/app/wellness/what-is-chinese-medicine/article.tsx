import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function WhatIsChineseMedicineArticle() {
  const slug = "what-is-chinese-medicine"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">What Is Chinese Medicine?</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        What Is Chinese Medicine? A Complete Beginner&apos;s Guide to TCM
      </h1>
      <p className="text-text2 text-sm mb-6">12 min read · Everything you need to know about the world&apos;s oldest continuously practiced medical system</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Chinese medicine, also called Traditional Chinese Medicine (TCM), is a complete medical system developed over 3,000 years in China. It treats the whole person rather than isolated symptoms by identifying patterns of imbalance in the body. Instead of asking &quot;what disease do you have?&quot; Chinese medicine asks &quot;what pattern is your body showing?&quot; The same symptom in two people may have different root causes and therefore different treatments. TCM includes five main branches: herbal medicine, acupuncture, dietary therapy, exercise (qigong and tai chi), and massage (tuina).
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you have ever tried ginger tea for nausea, heard about acupuncture for back pain, or seen Chinese dates (jujube) in an Asian market, you have already encountered pieces of Chinese medicine. It is not a single practice but an entire way of understanding how the human body works. Think of it as a different operating system for health: one that has been running, tested, and updated for three millennia.
        </p>
        <p className="text-text2 leading-relaxed">
          This guide explains Chinese medicine in plain English. No prior knowledge needed. By the end, you will understand what TCM is, how it works, how it differs from the medicine you are used to, and whether it might be useful for your own health questions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Does &quot;Chinese Medicine&quot; Actually Mean?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine (中医, zhōng yī, literally &quot;Chinese medicine&quot;) refers to the medical system that originated in ancient China and has been practiced continuously since at least 200 BCE, when the first systematic medical text, the Huangdi Neijing (Yellow Emperor&apos;s Inner Classic), was compiled. The ideas in that book evolved through practical observation across millions of patients over thousands of years.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Traditional Chinese Medicine, or TCM, is the standardized version of this system as it is taught and practiced today. The term was coined in the 1950s by the Chinese government to organize traditional practices into a coherent curriculum. Outside of China, you will see the terms &quot;Chinese medicine,&quot; &quot;TCM,&quot; and &quot;traditional East Asian medicine&quot; used somewhat interchangeably.
        </p>
        <p className="text-text2 leading-relaxed">
          Chinese medicine is not folk wisdom or superstition. It is a structured diagnostic and treatment system with its own logic, vocabulary, and methods. The logic is simply different from the one Western medicine uses. Both can be valid approaches to health.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 5 Branches of Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          TCM is not just herbs or just acupuncture. It is a system with five major treatment branches. Each addresses health from a different angle, and a TCM practitioner may use several together.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Branch</th>
                <th className="text-left py-2 pr-3 text-text font-medium">What It Does</th>
                <th className="text-left py-2 text-text font-medium">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Herbal Medicine</td>
                <td className="py-2 pr-3 text-text2">Uses plant, mineral, and animal-based formulas to correct internal patterns</td>
                <td className="py-2 text-text2">Digestive issues, sleep, menstrual problems, chronic fatigue</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Acupuncture</td>
                <td className="py-2 pr-3 text-text2">Inserts thin needles at specific points to regulate energy (qi) flow</td>
                <td className="py-2 text-text2">Pain, headaches, nausea, anxiety, fertility support</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Dietary Therapy</td>
                <td className="py-2 pr-3 text-text2">Recommends foods based on their thermal nature and effect on body patterns</td>
                <td className="py-2 text-text2">Daily wellness, weight management, digestive health</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Qigong / Tai Chi</td>
                <td className="py-2 pr-3 text-text2">Movement and breathing exercises that build and circulate qi</td>
                <td className="py-2 text-text2">Stress reduction, balance, energy, longevity</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Tuina (Massage)</td>
                <td className="py-2 pr-3 text-text2">Therapeutic bodywork along meridians and acupressure points</td>
                <td className="py-2 text-text2">Muscle tension, joint pain, digestive stagnation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Of these five, dietary therapy is the most accessible for daily self-care. You may not have an acupuncturist nearby, but you eat three times a day. This is why EastType focuses on food-based Chinese medicine: it is the branch you can practice on your own, starting with your next meal.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 5 Core Principles of Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          To understand how TCM thinks, you need to know its foundational principles. These five ideas shape every diagnosis and treatment.
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">1. The Body Is a Whole System</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Western medicine tends to divide the body into parts: a cardiologist for the heart, a gastroenterologist for the gut, a dermatologist for the skin. Chinese medicine sees these as connected. A skin problem may originate from the digestive system. Insomnia may be related to the kidneys. Practitioners look for relationships between symptoms that seem unrelated in the Western model.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">2. Pattern Over Disease</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Two people with the same Western diagnosis, say irritable bowel syndrome, may have completely different TCM patterns. One may have &quot;Spleen Qi Deficiency&quot; (weak digestion with bloating after eating) while another has &quot;Liver Qi Stagnation&quot; (symptoms triggered by stress). Same disease label, different root cause, different treatment. This is called &quot;treating the pattern, not the disease.&quot;
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">3. Balance Between Opposites (Yin and Yang)</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Every function in the body exists on a spectrum between two forces: Yin (cooling, moistening, resting, inward) and Yang (warming, drying, active, outward). Health is when these are proportional to each other. Illness is when one side dominates. Too much Yang: inflammation, restlessness, night sweats. Too much Yin: coldness, fluid retention, sluggishness. Treatment aims to restore proportion, not eliminate one side.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">4. Prevention Before Treatment</h3>
            <p className="text-text2 text-sm leading-relaxed">
              An ancient Chinese saying goes: &quot;The superior physician treats the disease before it appears. The inferior physician treats the disease after it has progressed.&quot; TCM places enormous value on catching imbalances early, through daily food choices, seasonal adjustments, and lifestyle habits. Food therapy is considered the first line of intervention, with herbs and acupuncture reserved for when dietary changes are not enough.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">5. Individualization</h3>
            <p className="text-text2 text-sm leading-relaxed">
              There is no one-size-fits-all recommendation in Chinese medicine. What helps one person feel energized may make another person worse. Your body type, age, season, climate, and current symptoms all factor into what foods and treatments are right for you. This is why TCM practitioners spend significant time asking questions before recommending anything.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 9 Body Types in Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          One of the most practical parts of TCM for everyday people is the body type system. Developed by Dr. Wang Qi and adopted by the Chinese government as a national health standard, the 9 body types classify people based on their constitutional tendencies. Knowing your type helps you choose the right foods, avoid the wrong ones, and understand why certain symptoms keep coming back.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Body Type</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Key Tendency</th>
                <th className="text-left py-2 text-text font-medium">% of People</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Balanced (平和)</td><td className="py-2 pr-3 text-text2">Rarely sick, good sleep and digestion</td><td className="py-2 text-text2">~30%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Qi Deficient (气虚)</td><td className="py-2 pr-3 text-text2">Low energy, gets sick easily</td><td className="py-2 text-text2">~15%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Yang Deficient (阳虚)</td><td className="py-2 pr-3 text-text2">Always cold, cold hands and feet</td><td className="py-2 text-text2">~9%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Yin Deficient (阴虚)</td><td className="py-2 pr-3 text-text2">Runs warm, dry mouth, night sweats</td><td className="py-2 text-text2">~8%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Phlegm Damp (痰湿)</td><td className="py-2 pr-3 text-text2">Heavy feeling, weight gain, oily skin</td><td className="py-2 text-text2">~7%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Damp Heat (湿热)</td><td className="py-2 pr-3 text-text2">Acne, feeling hot and sticky, irritability</td><td className="py-2 text-text2">~8%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Blood Stasis (血瘀)</td><td className="py-2 pr-3 text-text2">Dark spots, sharp pain, poor circulation</td><td className="py-2 text-text2">~7%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Qi Stagnant (气郁)</td><td className="py-2 pr-3 text-text2">Mood swings, chest tightness, sighing</td><td className="py-2 text-text2">~9%</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3">Sensitive (特禀)</td><td className="py-2 pr-3 text-text2">Allergies, sensitive skin, asthma</td><td className="py-2 text-text2">~5%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Most people are a mix of two types: a primary type and a secondary type. Want to know yours? Take the <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link> or read the full <Link href="/wellness/chinese-medicine-body-types" className="text-accent hover:underline">9 Chinese Medicine Body Types guide</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Diagnosis Works
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          A TCM practitioner gathers information through four main methods, often called the &quot;Four Examinations.&quot; No machines required. This process is why a first visit to a TCM doctor often takes 45 minutes or longer.
        </p>
        <div className="space-y-3">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">1. Looking (望, wàng)</h3>
            <p className="text-sm text-text2 leading-relaxed">
              The practitioner observes your face, skin, posture, and most importantly your tongue. Tongue diagnosis is remarkably informative in TCM. The color, shape, coating, and moisture of your tongue each reflect different internal conditions. A pale tongue suggests Qi or Blood deficiency. A red tongue suggests internal heat. A thick white coating suggests dampness. Learn more in our <Link href="/wellness/tcm-tongue-diagnosis" className="text-accent hover:underline">Tongue Diagnosis guide</Link>.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">2. Listening and Smelling (闻, wén)</h3>
            <p className="text-sm text-text2 leading-relaxed">
              The practitioner listens to your voice strength, breathing pattern, and cough. They also notice body odor, which in TCM can indicate internal patterns. A strong, loud voice suggests sufficient qi. A quiet, hesitant voice may indicate Qi deficiency.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">3. Asking (问, wèn)</h3>
            <p className="text-sm text-text2 leading-relaxed">
              A detailed interview covering sleep, appetite, digestion, energy levels, temperature preferences, emotional state, menstrual cycle (for women), and symptom patterns. The questions are thorough because the practitioner is mapping relationships between seemingly separate symptoms.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">4. Touching (切, qiè)</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Pulse diagnosis is the most refined of the four. A TCM practitioner can identify over 28 distinct pulse qualities at three positions and three depths on each wrist. Different pulse qualities correspond to different organ systems and patterns. The pulse provides real-time information about your body&apos;s internal state.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Chinese Medicine vs Western Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          These two systems are not enemies. They are different tools suited for different jobs. Here is how they compare:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Aspect</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Chinese Medicine</th>
                <th className="text-left py-2 text-text font-medium">Western Medicine</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Core Question</td>
                <td className="py-2 pr-3 text-text2">What pattern is the body showing?</td>
                <td className="py-2 text-text2">What disease or pathology is present?</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Strength</td>
                <td className="py-2 pr-3 text-text2">Chronic conditions, prevention, functional issues</td>
                <td className="py-2 text-text2">Acute conditions, infections, surgery, emergencies</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Diagnosis</td>
                <td className="py-2 pr-3 text-text2">Pattern-based (tongue, pulse, symptom history)</td>
                <td className="py-2 text-text2">Disease-based (lab tests, imaging, biopsies)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Treatment</td>
                <td className="py-2 pr-3 text-text2">Individualized (same symptom, different treatment)</td>
                <td className="py-2 text-text2">Standardized (same disease, same protocol)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Timeline</td>
                <td className="py-2 pr-3 text-text2">Gradual change over weeks to months</td>
                <td className="py-2 text-text2">Often faster symptom relief</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Prevention</td>
                <td className="py-2 pr-3 text-text2">Central goal: adjust diet and lifestyle daily</td>
                <td className="py-2 text-text2">Important but less individualized</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          For a deeper comparison, see our <Link href="/wellness/eastern-vs-western-medicine" className="text-accent hover:underline">Eastern vs Western Medicine guide</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Chinese Medicine Can and Cannot Do
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Being honest about what TCM does well and what it does not is important for making informed choices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="border border-accent/30 rounded-xl p-4 bg-accent/5">
            <h3 className="text-sm font-semibold text-accent mb-2">Where Chinese Medicine Excels</h3>
            <ul className="text-sm text-text2 space-y-1.5 leading-relaxed">
              <li>Chronic low-grade symptoms that normal lab results cannot explain</li>
              <li>Digestive issues like bloating, irregular bowel movements, food sensitivities</li>
              <li>Menstrual irregularities, PMS, perimenopausal symptoms</li>
              <li>Chronic fatigue and low energy without a clear medical cause</li>
              <li>Stress-related symptoms: tension, poor sleep, mood swings</li>
              <li>Prevention and daily wellness maintenance</li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-text2 mb-2">Where Western Medicine Excels</h3>
            <ul className="text-sm text-text2 space-y-1.5 leading-relaxed">
              <li>Acute infections requiring antibiotics</li>
              <li>Surgical conditions and emergencies</li>
              <li>Diseases requiring precise diagnosis through imaging</li>
              <li>Conditions needing medication to manage life-threatening levels</li>
              <li>Genetic disorders and conditions with known molecular causes</li>
              <li>Cancer treatment</li>
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Many people use both systems together: Western medicine for acute problems and Chinese medicine for chronic, functional, and preventive care. This combination works well when both practitioners are kept informed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Get Started with Chinese Medicine
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need to see a practitioner to start benefiting from Chinese medicine. The most practical entry point is food. Here are three things you can do this week:
        </p>
        <div className="space-y-3">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">Step 1: Find Out Your Body Type</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Take the <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link>. It asks 27 questions based on traditional TCM constitution indicators and identifies your primary and secondary body types. This tells you which foods support your body and which ones may be working against you.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">Step 2: Learn What Your Tongue Says</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Your tongue is a daily health dashboard. Look at it each morning before eating or drinking. Our <Link href="/wellness/tcm-tongue-diagnosis" className="text-accent hover:underline">Tongue Diagnosis guide</Link> explains what color, coating, and shape mean. You can start tracking changes in under a minute per day.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">Step 3: Eat for Your Pattern</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Once you know your body type, adjust your food choices. If you are always cold (Yang Deficient), add warming foods like ginger, cinnamon, and lamb. If you run warm and sweat at night (Yin Deficient), add cooling foods like pear, mung beans, and lotus root. Browse our <Link href="/foods-for" className="text-accent hover:underline">food guides by symptom</Link> for specific recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Key Concepts to Explore Further
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine has many layers. Here are the most important concepts for beginners:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/wellness/what-is-qi" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Qi (Vital Energy) →</h3>
            <p className="text-text2/70 text-xs mt-1">The force that powers every function in your body. Learn what happens when qi is weak or stuck.</p>
          </Link>
          <Link href="/wellness/cooling-foods-chinese-medicine" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Cooling vs Warming Foods →</h3>
            <p className="text-text2/70 text-xs mt-1">Every food has a thermal nature. Learn which foods cool your body and which ones warm it.</p>
          </Link>
          <Link href="/wellness/eastern-vs-western-medicine" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Eastern vs Western Medicine →</h3>
            <p className="text-text2/70 text-xs mt-1">A practical comparison of what each system does best and how to use both.</p>
          </Link>
          <Link href="/symptoms" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium text-sm">Symptom Guides →</h3>
            <p className="text-text2/70 text-xs mt-1">Browse 70 symptom guides, each explained through the Chinese medicine lens.</p>
          </Link>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Important Note</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This article is for informational and educational purposes only and is not medical advice. Chinese medicine approaches may complement but should not replace professional medical care. If you have a medical condition or are experiencing concerning symptoms, please consult a licensed healthcare provider. Always inform your doctor about any herbs or supplements you are taking, as some may interact with prescription medications.
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />
    </main>
  )
}
