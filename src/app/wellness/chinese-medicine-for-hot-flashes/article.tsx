import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForHotFlashesArticle() {
  const slug = "chinese-medicine-for-hot-flashes"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Hot Flashes</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Hot Flashes: Cooling the Empty Heat Within
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          Hot flashes in Chinese medicine are described as &ldquo;empty heat&rdquo; rising upward. When Kidney Yin, the body&apos;s cooling reserve, runs low, the natural warmth within the body has nothing to hold it down. Heat then flares upward suddenly, bringing redness in the face and neck, sweating, and a strong feeling of internal warmth. This is the most common explanation for hot flashes during perimenopause and the years that follow, and the same mechanism can be associated with night sweats and dryness. Cooling and moistening foods such as mung beans, pear, and black sesame may help replenish that cooling reserve over time. If this pattern sounds familiar, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help confirm it.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The Mechanism Behind Hot Flashes in TCM
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          To understand hot flashes, Chinese medicine draws a clear line between two kinds of heat: real heat and empty heat. Real heat arrives from outside the body or from an active excess. A spicy meal, a fever, or an acute infection are classic sources of real heat. In those cases the body is generating or taking in more heat than it needs, and the warmth is genuinely excessive. Empty heat is different. It does not come from an outside source or an oversupply of warmth. It appears when the cooling, anchoring force within the body drops too low to keep the warming force settled. That cooling force is Yin, and the warming force is Yang.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A simple image helps. Picture a pot of water resting on a steady flame. The water is Yin, and the flame is Yang. As long as the water level stays adequate, the pot holds a calm, even temperature. The flame has not changed. But if the water slowly evaporates and the level falls, that same flame now overheats the pot. Nothing was added to the fire. The cooling layer simply thinned, and the existing warmth became too much for what remained. This is the core of empty heat, and it is why hot flashes feel like sudden waves of internal warmth rather than a steady fever.
        </p>
        <p className="text-text2 leading-relaxed">
          When Kidney Yin thins, as it tends to during the years around midlife, Yang loses its partner and begins to drift upward and outward. The chest, face, and neck feel the surge first. A hot flash can be understood as that unanchored warmth rising quickly to the surface, breaking out as flushing and sweat before it fades. Because the root is a shortage of cooling rather than a surplus of heat, the strategy is not to fight the warmth aggressively. It is to rebuild and protect the cooling reserve so the warming force has something to settle into again. For a deeper look at this pattern, see our guide on <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Types of Hot Flashes
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Not every hot flash follows the same rhythm. Chinese medicine sorts them by the organ system involved and by the qualities that travel with the heat. Paying attention to what else shows up alongside the flash, the time of day it strikes, and the sensations that precede it can point toward the right food and lifestyle direction. The four patterns below cover most cases, though it is common for two to overlap, especially during perimenopause.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          When flashes cluster in the late afternoon or evening and arrive with night sweats, dizziness, or a dry mouth, Kidney Yin Deficiency is usually the center of the picture. This is the pattern most often linked to the midlife transition, and it reflects the cooling reserve running low. When a flash surges together with anger, a very red face, a bitter taste in the mouth, or a feeling of pressure in the head, Liver Fire may be at work. Stress, frustration, and held-in emotion tend to feed this type, and the heat feels sharper and more agitated.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          Some flashes come paired with palpitations, a racing sensation in the chest, anxiety, and broken sleep. These often reflect Heart Yin Deficiency, in which heat disturbs the spirit and unsettles the mind. Others arrive with a strong appetite, bad breath, gum swelling, or a heavy feeling in the stomach, which can point to Stomach Fire. The table below maps these patterns and the direction each one suggests.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Flash Characteristics</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Approach</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Afternoon and evening flashes, night sweats</td>
                <td className="px-3 py-2">Dizziness, dry mouth, low back ache</td>
                <td className="px-3 py-2">Nourish Yin and gently cool</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Liver Fire</td>
                <td className="px-3 py-2">Flashes with anger or frustration</td>
                <td className="px-3 py-2">Very red face, bitter taste, headache</td>
                <td className="px-3 py-2">Clear Liver Fire and move Qi</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Heart Yin Deficiency</td>
                <td className="px-3 py-2">Flashes with palpitations</td>
                <td className="px-3 py-2">Insomnia, anxiety, restless mind</td>
                <td className="px-3 py-2">Calm the Heart and nourish Yin</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Stomach Fire</td>
                <td className="px-3 py-2">Flashes with strong hunger</td>
                <td className="px-3 py-2">Bad breath, gum swelling, thirst</td>
                <td className="px-3 py-2">Clear Stomach heat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          These patterns are not fixed labels. If several signs above sound familiar, our <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link> guide explains the constitution most often tied to this heat. You can read more about <Link href="/symptoms/why-do-i-have-hot-flashes" className="text-accent hover:underline">why hot flashes happen</Link> and <Link href="/symptoms/why-do-i-have-night-sweats" className="text-accent hover:underline">why night sweats arrive with them</Link>. For the wider context of the midlife transition, our guide on <Link href="/wellness/chinese-medicine-for-menopause" className="text-accent hover:underline">Chinese medicine for menopause</Link> goes deeper. And our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can help you see which pattern matches your constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Triggers or Worsens Hot Flashes
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Certain foods, drinks, and conditions can tip the balance and bring on a flash or make one stronger. Knowing your personal triggers is often one of the fastest ways to reduce how often they come. The four below come up most often.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Spicy and Heating Foods</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Chili, curry, hot peppers, and ginger in large amounts are strongly warming in Chinese medicine terms. When cooling reserves are already thin, adding more heat can tip the body into a flush within minutes. A heavy spicy dinner is a common trigger for nighttime flashes and sweating. Small amounts of warming spice may be fine for some, but generous portions tend to add fuel to a system that is already running warm.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Alcohol and Coffee</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Both alcohol and coffee are considered heating and stimulating. Alcohol generates internal heat and can dry fluids, while caffeine drives the nervous system harder and may intensify the feeling of a flash. A glass of wine in the evening is a frequent trigger for night sweats, and coffee on an empty stomach can set off a morning flush for some women. Cutting back, rather than quitting abruptly, is usually enough to notice a difference.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Stress and Anger</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Emotional pressure has a direct line to the Liver in Chinese medicine. When frustration, resentment, or anger build without release, Liver Qi stagnates and can convert into Liver Fire. This is why a stressful meeting or an argument can be followed closely by a sudden wave of heat and a flushed face. Building in small moments to decompress through the day may lower how often these stress-driven flashes arrive.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Hot Weather and Saunas</h3>
        <p className="text-text2 leading-relaxed">
          External heat compounds internal heat. A hot day, a warm room, a sauna, or a hot bath can all push an already warm system past its threshold. Many women notice flashes arrive more often in summer or after time in a heated space. Choosing cooler environments and cooler water, especially in the evening, can ease the load on a system that is already producing its own heat.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Cooling Foods That May Help Hot Flashes
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food therapy is one of the most accessible tools for working with hot flashes. The principle is to choose foods that are cool or cold in nature, moistening, and gently nourishing to Yin, while stepping back from anything that adds warmth. These foods have been used for generations to help clear heat and rebuild the cooling reserve. They might take several weeks of regular use before the difference is noticeable, so patience and consistency matter. Small regular portions across the week tend to work better than a single large serving, and pairing two or three that match your main symptoms is more useful than relying on one.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Use</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">One of the strongest cooling foods; clears empty heat</td>
                <td className="px-3 py-2">Cooked as a thin soup or congee</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Cucumber</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cooling and hydrating; gently clears heat</td>
                <td className="px-3 py-2">Eaten raw in moderation or in light soups</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Pear</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Moistens dryness and cools the lungs</td>
                <td className="px-3 py-2">Eaten raw or poached with rock sugar</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Watermelon</td>
                <td className="px-3 py-2">Cold, sweet</td>
                <td className="px-3 py-2">Cools heat quickly and hydrates tissues</td>
                <td className="px-3 py-2">Eaten fresh in small portions</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Lotus root</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears heat and supports fluids</td>
                <td className="px-3 py-2">Sliced into soups or stir-fries</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Kidney Yin and moistens dryness</td>
                <td className="px-3 py-2">Ground into porridge or sprinkled on rice</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Tofu and soy</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cooling, moistening, and gentle on the system</td>
                <td className="px-3 py-2">Added to soups, stews, or stir-fries</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mulberry</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Cools heat and nourishes Blood</td>
                <td className="px-3 py-2">Eaten fresh or dried as a snack</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Mint tea</td>
                <td className="px-3 py-2">Cool, aromatic</td>
                <td className="px-3 py-2">Cools the surface and moves stuck Qi</td>
                <td className="px-3 py-2">Steeped as a light tea, warm or cooled</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          Because hot flashes and night sweats often travel together, the same cooling foods may ease both. The aim is not to eat everything on the list but to choose a few that fit your taste and your most bothersome moments, then include them often.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods and Habits to Avoid
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because hot flashes reflect too much heat and too little cooling moisture, the items below may deepen the imbalance by adding warmth, drying fluids, or pushing an already stretched system harder.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Spicy foods.</strong> Chili, hot peppers, and heavy curries are strongly heating and may intensify flashes and sweating.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> Considered heating and drying in Chinese medicine; regular drinking may trigger night sweats and slowly drain cooling reserves.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excess coffee.</strong> Caffeine is stimulating and drying and may worsen both flashes and the broken sleep that often comes with them.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Lamb, cinnamon, and dried ginger.</strong> These are among the most warming foods and may add to internal heat when used often.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Saunas and hot baths.</strong> External heat compounds internal heat and can bring on a flash or make one stronger.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very heavy late meals.</strong> A large, rich dinner forces digestion to run hot through the night and may set the stage for evening flashes.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Practices for Cooling Down
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food choices matter, but daily habits carry equal weight. The practices below focus on staying cool, protecting sleep, and reducing the constant strain that slowly wears down cooling reserves.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Dress in layers you can remove.</strong> Lightweight, breathable fabrics let you shed heat quickly when a flash arrives, which can shorten its hold.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Keep the bedroom cool at night.</strong> A lower room temperature and light bedding may reduce night sweats and the broken sleep they cause.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Drink room-temperature water through the day.</strong> Sip steadily rather than gulping ice water, which can shock a system already running dry.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Practice slow breathing when a flash starts.</strong> Long, slow exhales may calm the nervous system and take the edge off the surge.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Avoid exercising in the midday heat.</strong> Move gently in the morning or evening, since hard training in the heat can burn through cooling reserves.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Reduce stress proactively.</strong> Because held-in frustration feeds Liver Fire, daily decompression through walking, breathing, or quiet rest may calm the pattern.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Try a warm foot soak before bed.</strong> A short, warm soak can gently draw heat downward and away from the upper body, which may ease night flashes.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Hot flashes can also relate to conditions beyond the midlife transition. Thyroid disorders, medication side effects, infections, and other medical issues may produce similar waves of heat and should be evaluated by a qualified healthcare professional. Severe or disruptive hot flashes that interfere with sleep, work, or daily life warrant medical attention. Hormone therapy and other medical treatments may be appropriate for some women, depending on history and risk factors. Chinese medicine food therapy and lifestyle changes may complement conventional care, but they should never replace diagnosis or treatment from a licensed medical provider.
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
