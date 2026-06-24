import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function BeginnersGuideArticle() {
  const slug = "chinese-medicine-for-beginners"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Chinese Medicine for Beginners</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Beginners: A Practical Starter Guide
      </h1>
      <p className="text-text2 text-sm mb-6">10 min read · No experience needed. Start applying TCM wisdom today.</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Starting Chinese medicine does not require herbs, needles, or a practitioner. It starts with understanding three simple ideas: your body runs on energy (qi), that energy has a temperature (yin and yang), and your body has a type that determines which foods help you and which ones work against you. Once you know your type, you can make better food choices starting with your very next meal.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          If you landed here, you are probably curious about Chinese medicine but not sure where to begin. Maybe a friend recommended ginger tea for your digestion. Maybe you saw something about body types on social media. Or maybe your doctor said your lab results are normal but you still feel tired all the time.
        </p>
        <p className="text-text2 leading-relaxed">
          This guide is written for absolute beginners. No jargon, no theory, no requirements to buy anything. By the end, you will have a simple 7-day plan to start feeling the effects of Chinese medicine through food alone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          You Already Know More Than You Think
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Before we get into new concepts, consider what you already intuitively understand. Chinese medicine is built on everyday observations that everyone can relate to:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="text-accent font-medium">You know that </span>
              a hot bowl of soup feels more satisfying on a cold day than a cold salad. Chinese medicine says: warm foods support your digestive fire. Cold foods drain it.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="text-accent font-medium">You know that </span>
              some people are always cold while others are always warm. Chinese medicine says: this reflects your internal temperature balance (yin and yang).
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="text-accent font-medium">You know that </span>
              stress affects your stomach, making you feel tight or nauseous. Chinese medicine says: emotions and digestion are physically connected through energy pathways.
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="text-accent font-medium">You know that </span>
              coffee gives you a boost now but you crash later. Chinese medicine says: caffeine borrows energy from tomorrow, it does not create new energy.
            </p>
          </div>
        </div>
        <p className="text-text2 leading-relaxed">
          See? Chinese medicine is not as foreign as it sounds. It simply gives names and frameworks to things your body already knows.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The 3 Concepts That Change Everything
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need to learn the entire TCM system to benefit from it. These three concepts are enough to get started.
        </p>

        <div className="space-y-5">
          <div className="border border-border rounded-xl p-5 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
              Concept 1: Qi (Your Energy)
            </h3>
            <p className="text-text2 text-sm leading-relaxed mb-3">
              Qi (pronounced &quot;chee&quot;) is your body&apos;s energy. Every time you digest food, breathe, think, or move, you are spending qi. When you eat, your body extracts new qi from the food. When you sleep, your body restores qi.
            </p>
            <p className="text-text2 text-sm leading-relaxed mb-2">
              <span className="text-accent font-medium">What this means for you: </span>
              If you are always tired, your qi is likely low (Qi Deficient). The fix is not caffeine. The fix is eating warm, easily digested foods that give your body more energy per meal with less digestive effort.
            </p>
            <p className="text-text2 text-sm leading-relaxed">
              <Link href="/wellness/what-is-qi" className="text-accent hover:underline">Learn more about qi →</Link>
            </p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
              Concept 2: Yin and Yang (Your Temperature)
            </h3>
            <p className="text-text2 text-sm leading-relaxed mb-3">
              Your body maintains a balance between two forces. Yang is warm, active, and drying. Yin is cool, moist, and resting. When they are in balance, you feel comfortable. When one dominates, symptoms appear.
            </p>
            <p className="text-text2 text-sm leading-relaxed mb-3">
              <span className="text-accent font-medium">Simple test: </span>
              Are you usually cold, especially hands and feet? That leans toward Yang Deficiency (not enough warmth). Are you usually warm, with dry mouth and night sweats? That leans toward Yin Deficiency (not enough cooling).
            </p>
            <p className="text-text2 text-sm leading-relaxed">
              <span className="text-accent font-medium">What this means for you: </span>
              If you are cold, eat more warming foods (ginger, lamb, cinnamon). If you run warm, eat more cooling foods (pear, mung beans, cucumber). Matching food to your temperature is half of Chinese dietary therapy.
            </p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
              Concept 3: Your Body Type
            </h3>
            <p className="text-text2 text-sm leading-relaxed mb-3">
              Chinese medicine identifies 9 body constitutions. Each type has different tendencies, strengths, and vulnerabilities. Two people can eat the same food and feel completely different effects because their body types are different.
            </p>
            <p className="text-text2 text-sm leading-relaxed mb-3">
              <span className="text-accent font-medium">What this means for you: </span>
              Stop following generic health advice. What helps your friend may not help you. Find out your type, then eat and live accordingly.
            </p>
            <p className="text-text2 text-sm leading-relaxed">
              <Link href="/quiz" className="text-accent hover:underline">Take the free body type quiz →</Link>
              {" · "}
              <Link href="/wellness/chinese-medicine-body-types" className="text-accent hover:underline">Read about all 9 types →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          5 Foods Every Beginner Should Know
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          If you only learn about 5 foods from Chinese medicine, learn these. Each one addresses a common pattern, and all of them are easy to find at any grocery store.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Food</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Thermal Nature</th>
                <th className="text-left py-2 text-text font-medium">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Ginger</td>
                <td className="py-2 pr-3 text-text2">Warm</td>
                <td className="py-2 text-text2">Nausea, cold hands, weak digestion. Add a few slices to hot water.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Red Dates (Jujube)</td>
                <td className="py-2 pr-3 text-text2">Warm</td>
                <td className="py-2 text-text2">Low energy, poor sleep. Boil 5 to 6 in water for tea.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Pear</td>
                <td className="py-2 pr-3 text-text2">Cool</td>
                <td className="py-2 text-text2">Dry throat, feeling warm, cough. Eat raw or steamed with honey.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Mung Beans</td>
                <td className="py-2 pr-3 text-text2">Cool</td>
                <td className="py-2 text-text2">Acne, feeling hot and sticky, skin irritation. Boil into a soup.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Chinese Yam (Shanyao)</td>
                <td className="py-2 pr-3 text-text2">Neutral</td>
                <td className="py-2 text-text2">Weak digestion, low energy, frequent urination. Steam or add to soups.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          The principle is simple: warm foods for cold patterns, cool foods for hot patterns, neutral foods for everyday balance. For more, browse our <Link href="/foods-for" className="text-accent hover:underline">food guides by symptom</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Your First Week: A Simple 7-Day Starter Plan
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need to change everything at once. This plan introduces one small change per day. By the end of the week, you will have built five TCM-friendly habits without feeling overwhelmed.
        </p>
        <div className="space-y-3">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 1: Switch to Warm Water</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Replace ice water with room temperature or warm water. In Chinese medicine, ice-cold drinks shock your digestive system and waste qi reheating the water to body temperature. Warm water supports digestion. This single change is the easiest TCM habit to adopt.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 2: Check Your Tongue</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Before eating breakfast, look at your tongue in natural light. Note the color (pale? pink? red?), the coating (thick? thin? white? yellow?), and any marks. This takes 10 seconds. You now have a baseline. Repeat daily to notice changes. <Link href="/wellness/tcm-tongue-diagnosis" className="text-accent hover:underline">Learn what your tongue means →</Link>
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 3: Add One Warming Food</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Pick one warming food to add to your day. Ginger tea with breakfast. Cinnamon in your oatmeal. A bowl of hot soup for lunch. Just one. Notice how you feel an hour later compared to a cold meal.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 4: Cook Your Vegetables</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Raw salads require more digestive energy than cooked vegetables. For one day, replace raw salads with steamed, stir-fried, or roasted vegetables. Many people notice less bloating and more energy from the same foods, just prepared differently.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 5: Take the Body Type Quiz</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Now that you have felt the effects of warm vs cold foods and observed your tongue, take the <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link>. The results will make much more sense after a few days of paying attention to your body.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 6: Eat for Your Type</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Based on your quiz result, make one meal that suits your type. If you are Qi Deficient: congee or chicken soup. If you are Yang Deficient: lamb stew with ginger. If you are Yin Deficient: pear with honey or mung bean soup. <Link href="/foods-for" className="text-accent hover:underline">Browse food guides →</Link>
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="text-sm font-semibold text-accent mb-1">Day 7: Review and Adjust</h3>
            <p className="text-sm text-text2 leading-relaxed">
              Look at your tongue again. Compare it to Day 2. Think about how your energy, digestion, and sleep have been over the week. Small changes from food tend to build gradually. Keep what works and adjust what does not.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          5 Common Beginner Mistakes
        </h2>
        <div className="space-y-3">
          <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="font-medium text-text">1. Treating Chinese medicine like Western medicine.</span>
              <br />
              Western medicine says: &quot;Take this pill for this symptom.&quot; Chinese medicine says: &quot;What pattern caused this symptom, and what food or habit will correct that pattern?&quot; TCM is not about quick fixes. It works through gradual rebalancing.
            </p>
          </div>
          <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="font-medium text-text">2. Copying someone else&apos;s diet.</span>
              <br />
              Your friend swears by drinking hot ginger water every morning. But if you run warm (Yin Deficient), too much ginger may make you feel hotter and more irritable. Chinese medicine is individualized. What healed your friend might not be right for you.
            </p>
          </div>
          <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="font-medium text-text">3. Going to extremes.</span>
              <br />
              Some beginners eliminate all cold foods overnight, buy 20 herbs, and change their entire lifestyle in one weekend. This usually lasts about a week. Chinese medicine favors moderation and consistency. One small change that you sustain for months beats ten changes that you drop in a week.
            </p>
          </div>
          <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="font-medium text-text">4. Ignoring your body&apos;s signals.</span>
              <br />
              If a TCM-recommended food makes you feel worse, stop eating it. Chinese medicine says to listen to your body, not to follow rules blindly. Body types can shift over time, and what worked last year may not be what your body needs now.
            </p>
          </div>
          <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4">
            <p className="text-sm text-text2 leading-relaxed">
              <span className="font-medium text-text">5. Using TCM to replace necessary medical care.</span>
              <br />
              Chinese medicine is excellent for prevention, chronic issues, and functional imbalances. It is not a replacement for emergency care, serious infections, or conditions requiring surgery. If you have a medical condition, keep seeing your doctor and use TCM as a complement.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Self-Care vs Seeing a Practitioner
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          One question every beginner asks: &quot;Do I need to see a Chinese medicine practitioner?&quot; The answer depends on what you want to achieve.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">What You Can Do Yourself</th>
                <th className="text-left py-2 text-text font-medium">When to See a Practitioner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 text-text2">Find your body type with a quiz</td>
                <td className="py-2 text-text2">Symptoms persist after 2 to 3 months of dietary changes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 text-text2">Choose foods based on your type</td>
                <td className="py-2 text-text2">You want a custom herbal formula (not over-the-counter)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 text-text2">Observe your tongue daily</td>
                <td className="py-2 text-text2">You want acupuncture treatment for pain or other conditions</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 text-text2">Adjust cooking methods (steamed, warm, cooked)</td>
                <td className="py-2 text-text2">You have a complex mix of symptoms that is hard to self-assess</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 text-text2">Use simple remedies like ginger tea or pear soup</td>
                <td className="py-2 text-text2">You are on medications and want to add herbs safely</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          For most people, starting with food and lifestyle is enough. You may never need to see a practitioner if your symptoms improve with dietary changes. But if you feel stuck, a qualified TCM practitioner can offer deeper insight.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Recommended Learning Path
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Ready to go deeper? Here is the suggested reading order for beginners:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 border border-border rounded-xl p-4 bg-cream/20">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-accent shrink-0">1</span>
            <div>
              <Link href="/wellness/what-is-chinese-medicine" className="text-text font-medium text-sm hover:text-accent no-underline">What Is Chinese Medicine? (Complete Guide) →</Link>
              <p className="text-text2/70 text-xs mt-1">Get the big picture: history, 5 branches, and core principles.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border border-border rounded-xl p-4 bg-cream/20">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-accent shrink-0">2</span>
            <div>
              <Link href="/quiz" className="text-text font-medium text-sm hover:text-accent no-underline">Take the Body Type Quiz →</Link>
              <p className="text-text2/70 text-xs mt-1">5 minutes to find your type. The most practical starting point.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border border-border rounded-xl p-4 bg-cream/20">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-accent shrink-0">3</span>
            <div>
              <Link href="/wellness/what-is-qi" className="text-text font-medium text-sm hover:text-accent no-underline">What Is Qi? →</Link>
              <p className="text-text2/70 text-xs mt-1">Understand the energy concept behind fatigue, motivation, and digestion.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border border-border rounded-xl p-4 bg-cream/20">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-accent shrink-0">4</span>
            <div>
              <Link href="/wellness/tcm-tongue-diagnosis" className="text-text font-medium text-sm hover:text-accent no-underline">Tongue Diagnosis Guide →</Link>
              <p className="text-text2/70 text-xs mt-1">Learn to read your tongue as a daily health check.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border border-border rounded-xl p-4 bg-cream/20">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-accent shrink-0">5</span>
            <div>
              <Link href="/foods-for" className="text-text font-medium text-sm hover:text-accent no-underline">Food Guides by Symptom →</Link>
              <p className="text-text2/70 text-xs mt-1">Find specific food recommendations for your symptoms and body type.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">Important Note</h2>
        <p className="text-sm text-text2 leading-relaxed">
          This guide is for informational and educational purposes only and is not medical advice. Dietary changes based on Chinese medicine may complement but should not replace professional medical care. If you have a health condition, are pregnant, or take prescription medications, please consult a licensed healthcare provider before making significant dietary changes.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />
    </main>
  )
}
