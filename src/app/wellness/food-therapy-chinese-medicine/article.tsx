import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function FoodTherapyChineseMedicineArticle() {
  const slug = "food-therapy-chinese-medicine"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Food Therapy</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Food Therapy in Chinese Medicine: Healing with Everyday Meals
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Food therapy, known as Shi Liao, is the oldest and most accessible branch of Chinese medicine. Before herbs or acupuncture, there is food. The principle is simple: every food has energetic properties, such as warming, cooling, moistening, or drying, that affect the body. Choosing the right foods for your constitution and condition may help prevent and ease imbalances over time. This guide covers the core principles, how foods are classified, and how to start. If you want personal direction, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can point you to the foods that suit you.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is Food Therapy in TCM?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is one of the six branches of Chinese medicine, alongside acupuncture, herbal medicine, tuina massage, qigong, and lifestyle guidance. The Chinese term Shi Liao literally means food healing. The core idea is that food is the first medicine, taken every day, in a form the body already knows how to use. Because meals repeat, small shifts in food can gently steer the body over weeks and months without the stronger action of herbs or needles.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The classic texts place food first in the order of treatment. Sun Simiao, the famous Tang dynasty physician, captured this in a line still quoted today: a good doctor first tries food therapy, and only when that fails does he turn to medicine. The reasoning was practical. Food is mild, familiar, and safe for daily use, so it makes sense to begin with the gentlest tool that reaches the root of a pattern. Herbs are stronger and more targeted, and they are reserved for when food is not enough.
        </p>
        <p className="text-text2 leading-relaxed">
          In daily life this means food therapy is not a short diet or a quick fix. It is the steady practice of matching what you eat to your body type, your current condition, and the season. A person who runs cold may add warming foods in winter, while a person who runs warm may choose cooling foods in summer. The same dish can be helpful or unhelpful depending on who eats it and when. A bowl of warming lamb soup that steadies one person in January might leave another person overheated and restless on the same day, and that gap is exactly what food therapy tries to read.
        </p>
        <p className="text-text2 leading-relaxed">
          Food therapy also pays close attention to how a meal is prepared. Long, slow cooking tends to make a dish easier on the Spleen, while raw, cold, and deep-fried preparation adds strain. A vegetable steamed until soft carries a gentler effect than the same vegetable blended into an iced drink. Even the order of eating matters to some practitioners, who suggest beginning a meal with something warm and liquid to wake the digestive fire before heavier foods arrive. None of this requires rare ingredients. Most of the work happens with ordinary pantry staples, simply chosen and prepared with the body in mind. For the wider context, see our guide on <Link href="/wellness/what-is-chinese-medicine" className="text-accent hover:underline">what Chinese medicine is</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Foods Are Classified in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese medicine does not sort foods only by calories or nutrients. It sorts them by their energetic effect on the body. Three qualities are used: temperature, taste, and direction. Together they describe what a food tends to do once it is inside you. These descriptions come from centuries of observation rather than laboratory analysis, and they are meant to guide everyday choices.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Temperature refers to the warming or cooling nature of a food, not the temperature at which it is served. Ginger is warming even when drunk as cold tea, and watermelon is cooling even at room temperature. A good way to sense this is to notice your own response a short while after eating. Warming foods may bring a subtle feeling of internal warmth or a slight flush, while cooling foods may leave a sense of lightness or mild clearing. These are soft signals rather than strong ones, and over time they become easier to read. Taste describes the five flavors and the action each one tends to have on the body. Direction describes where a food tends to move energy, whether upward, downward, inward, or outward. The table below gathers the main groups.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Classification</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Examples</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Effect</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Hot and warm</td>
                <td className="px-3 py-2">Ginger, cinnamon, lamb, leek, chili</td>
                <td className="px-3 py-2">Warms the body, speeds circulation</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Neutral</td>
                <td className="px-3 py-2">Rice, pork, beef, Chinese yam, carrot</td>
                <td className="px-3 py-2">Steady, gentle nourishment for daily use</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Cool and cold</td>
                <td className="px-3 py-2">Mung beans, pear, watermelon, cucumber</td>
                <td className="px-3 py-2">Clears heat, cools and moistens</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Sweet</td>
                <td className="px-3 py-2">Dates, sweet potato, rice, honey</td>
                <td className="px-3 py-2">Tones and harmonizes, builds energy</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Sour</td>
                <td className="px-3 py-2">Plum, lemon, vinegar, hawthorn</td>
                <td className="px-3 py-2">Astringes and holds fluids in</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Bitter</td>
                <td className="px-3 py-2">Bitter greens, celery, green tea</td>
                <td className="px-3 py-2">Dries dampness and clears heat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pungent</td>
                <td className="px-3 py-2">Onion, garlic, mint, pepper</td>
                <td className="px-3 py-2">Moves Qi and opens the surface</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Salty</td>
                <td className="px-3 py-2">Seaweed, kelp, miso, saltwater fish</td>
                <td className="px-3 py-2">Softens hardness and draws downward</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Upward</td>
                <td className="px-3 py-2">Green onion, mint</td>
                <td className="px-3 py-2">Lifts energy toward the head and surface</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Downward</td>
                <td className="px-3 py-2">Sesame, seaweed, pear</td>
                <td className="px-3 py-2">Draws energy and heat lower in the body</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Inward and outward</td>
                <td className="px-3 py-2">Sour foods inward, pungent and warm outward</td>
                <td className="px-3 py-2">Holds in or releases through the surface</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These groups overlap in real foods. A pear is cool and sweet, while ginger is warm and pungent. The deeper ideas behind these pairings sit in <Link href="/wellness/yin-and-yang" className="text-accent hover:underline">Yin and Yang</Link> and <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what Qi is</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Core Principles of Food Therapy
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The classifications only help when paired with a few steady principles. These seven guidelines appear again and again in traditional food therapy. They are simple, but most of the benefit comes from applying them consistently rather than memorizing long food lists.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Match food to your body type.</strong> A warming diet suits a cold constitution and a cooling diet suits a warm one. There is no single healthy menu for everyone.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Eat seasonally.</strong> Choose warming foods in cold months and cooling foods in warm months, so the food works with the body rather than against the weather.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Favor warm and cooked over cold and raw.</strong> Cooked food eases the work of the Spleen and is usually easier to turn into steady energy.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Moderate variety beats excess of one food.</strong> A mix of foods gives a broad range of effects and avoids overloading any single property.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Regular timing matters as much as food choice.</strong> Meals at predictable hours support the rhythm the Spleen prefers for steady output.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Eat slowly and mindfully.</strong> Calm chewing aids digestion and helps the body register fullness, which keeps portions balanced.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Stop at 70 percent full.</strong> Leaving a little room lets the Spleen work without strain and may prevent the heavy, foggy feeling after meals.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Food Therapy for Common Conditions
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The same principles apply across many everyday complaints. The table below pairs a few common conditions with foods that may support them and foods that may get in the way. Use it as a starting point, and adjust based on how your body responds. These are general directions, not prescriptions, and a single food list never replaces a full assessment.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Condition</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Key Foods</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Foods to Limit</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Fatigue</td>
                <td className="px-3 py-2">Congee, jujube dates, sweet potato</td>
                <td className="px-3 py-2">Ice water, raw salads</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Insomnia</td>
                <td className="px-3 py-2">Lotus seed, lily bulb, wheat</td>
                <td className="px-3 py-2">Coffee, alcohol</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Bloating</td>
                <td className="px-3 py-2">Ginger, fennel, millet</td>
                <td className="px-3 py-2">Dairy, cold drinks</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Acne</td>
                <td className="px-3 py-2">Mung beans, green tea, cucumber</td>
                <td className="px-3 py-2">Spicy food, dairy</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Cold hands</td>
                <td className="px-3 py-2">Lamb, ginger, cinnamon</td>
                <td className="px-3 py-2">Ice water, watermelon</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          For a deeper look at matching meals to your constitution, our guides on the <Link href="/wellness/chinese-medicine-body-types" className="text-accent hover:underline">Chinese medicine body types</Link> and the <Link href="/wellness/tcm-diet" className="text-accent hover:underline">TCM diet</Link> go further.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How to Start Food Therapy Today
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          You do not need a long shopping list to begin. A few simple swaps can shift the body over time. Try these five steps for a week or two and notice how you feel.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Switch from cold to warm water.</strong> Sip warm or room-temperature water through the day to support steady function without chilling the Spleen.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Add ginger tea to your morning.</strong> A small cup of warm ginger tea gently supports digestion and circulation to start the day.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Replace raw salad with cooked vegetables.</strong> Steamed or lightly stir-fried vegetables are easier to process and deliver steadier energy.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Eat breakfast between 7 and 9 AM.</strong> This window lines up with the Spleen and Stomach peak, when a warm meal is most useful.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Stop at 70 percent full.</strong> Leaving a little room eases the digestive load and may reduce after-meal heaviness.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Food Therapy vs Herbal Medicine
        </h2>
        <p className="text-text2 leading-relaxed">
          Food therapy is gentle, slow, and preventive. It works best for everyday imbalances and for long-term support, and it can be done daily by anyone. Herbal medicine is stronger and more targeted. Herbs are used when food is not enough or when a pattern needs a sharper push in a specific direction. Because herbs carry more force, they usually need guidance from a trained practitioner to match the pattern and the dose correctly. Food therapy, by contrast, sits in the kitchen and works in the background of daily life.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to Seek Professional Help
        </h2>
        <p className="text-text2 leading-relaxed">
          Food therapy is educational and preventive, not a replacement for medical care. For diagnosed conditions, ongoing symptoms, or anything that worsens, consult both a qualified medical doctor and a licensed TCM practitioner. A practitioner can read your pattern more precisely and tailor food and herb guidance to your specific situation. Our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can give you a starting point before that conversation.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(200,16,46,0.03)] border border-[rgba(200,16,46,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
