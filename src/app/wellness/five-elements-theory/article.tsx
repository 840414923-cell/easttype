import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"
import InlineQuizCta from "@/components/inline-quiz-cta"

export default function FiveElementsTheoryArticle() {
  const slug = "five-elements-theory"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">Five Elements Theory</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Five Elements Theory in Chinese Medicine: Wood, Fire, Earth, Metal, Water
      </h1>
      <p className="text-text2 text-sm mb-6">11 min read · How 3,000 years of Chinese medicine reads the connections in your body</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          The Five Elements (Wu Xing) theory is a framework in Chinese medicine that connects everything in nature to five archetypes: Wood, Fire, Earth, Metal, and Water. Each element corresponds to specific organs, emotions, seasons, tastes, colors, and body functions. Understanding which element may be out of balance can help explain recurring patterns in your health, mood, and energy. To see which element tends to dominate for you, try our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          Where <Link href="/wellness/yin-and-yang" className="text-accent hover:underline">Yin and Yang</Link> describe a single spectrum from cool and still to warm and active, the Five Elements theory goes a step further. It describes how different parts of your body and mind relate to each other and to the world outside. It is one of the oldest organizing ideas in Chinese medicine, and it still shapes how practitioners read symptoms today.
        </p>
        <p className="text-text2 leading-relaxed">
          This guide walks through what each element means, how the elements feed and check each other, and how you might use the framework to make sense of patterns that keep coming back, like stress that settles in your digestion, or sadness that lingers as frequent colds.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Is the Five Elements Theory?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The theory is more than two thousand years old. In Chinese it is called Wu Xing (五行). Wu means five. Xing is often translated as element, but a closer translation is movement or phase. This matters. These are not static building blocks like the classical Western elements of earth, air, fire, and water. They are dynamic processes, each one always acting on the others.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The five phases are Wood, Fire, Earth, Metal, and Water. They relate through two repeating cycles. In the generating cycle (Sheng), each element feeds the next. In the controlling cycle (Ke), each element keeps another in check so no single phase runs wild.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A helpful metaphor traces the generating cycle through nature. Wood feeds Fire. Fire, when it burns down, creates Earth in the form of ash. Earth, over long time, bears Metal in its ores. Metal carries Water, as a cold surface gathers condensation. And Water nourishes Wood, as rain feeds roots and new growth begins again.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The five phases were never meant to be taken as literal chemistry. They are a way of grouping qualities that move together. Spring growth, the color green, the sour taste, the Liver, and the feeling of anger all share a Wood quality: upward, outward, pushing forward. Summer heat, the color red, the bitter taste, the Heart, and the feeling of joy all share a Fire quality: warmth, brightness, expansion. The other elements group the same way, each one a cluster of qualities that tend to rise and fall together.
        </p>
        <p className="text-text2 leading-relaxed">
          What makes this useful for medicine is that the same logic applies inside the body. Each element maps to a pair of organs, a core emotion, a season, a taste, and a set of functions. When one element struggles, the effects ripple outward along these cycles. For a look at how the elements relate to the body&apos;s vital energy, see our guide on <Link href="/wellness/what-is-qi" className="text-accent hover:underline">what qi is</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          The Five Elements and Your Body
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Each element is tied to a Yin-Yang organ pair, a feeling that tends to live there, the season it peaks in, the taste that supports it, its associated color, and the job it does for the whole system. Knowing these links may help you notice which element is asking for attention.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Element</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Organ (Yin / Yang)</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Emotion</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Season</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Taste</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Color</th>
                <th className="text-left py-2 text-text font-medium">Key Function</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Wood</td><td className="py-2 pr-3 text-text2">Liver / Gallbladder</td><td className="py-2 pr-3 text-text2">Anger</td><td className="py-2 pr-3 text-text2">Spring</td><td className="py-2 pr-3 text-text2">Sour</td><td className="py-2 pr-3 text-text2">Green</td><td className="py-2 text-text2">Planning &amp; flow</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Fire</td><td className="py-2 pr-3 text-text2">Heart / Small Intestine</td><td className="py-2 pr-3 text-text2">Joy</td><td className="py-2 pr-3 text-text2">Summer</td><td className="py-2 pr-3 text-text2">Bitter</td><td className="py-2 pr-3 text-text2">Red</td><td className="py-2 text-text2">Spirit &amp; circulation</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Earth</td><td className="py-2 pr-3 text-text2">Spleen / Stomach</td><td className="py-2 pr-3 text-text2">Worry</td><td className="py-2 pr-3 text-text2">Late Summer</td><td className="py-2 pr-3 text-text2">Sweet</td><td className="py-2 pr-3 text-text2">Yellow</td><td className="py-2 text-text2">Digestion &amp; energy</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Metal</td><td className="py-2 pr-3 text-text2">Lungs / Large Intestine</td><td className="py-2 pr-3 text-text2">Grief</td><td className="py-2 pr-3 text-text2">Autumn</td><td className="py-2 pr-3 text-text2">Pungent</td><td className="py-2 pr-3 text-text2">White</td><td className="py-2 text-text2">Boundaries &amp; immunity</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Water</td><td className="py-2 pr-3 text-text2">Kidneys / Bladder</td><td className="py-2 pr-3 text-text2">Fear</td><td className="py-2 pr-3 text-text2">Winter</td><td className="py-2 pr-3 text-text2">Salty</td><td className="py-2 pr-3 text-text2">Black / Blue</td><td className="py-2 text-text2">Willpower &amp; reserves</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 leading-relaxed mb-4">
          A few examples show how the table works in practice. If you tend to feel frustrated and irritable under stress, notice tension around your eyes, and your symptoms flare in spring, Wood may be the element to watch. If you feel anxious, sleep poorly, and get palpitations before important events, Fire may be involved.
        </p>
        <p className="text-text2 leading-relaxed">
          If you feel heavy and tired after eating, worry in loops, and slump in late summer or damp weather, Earth may be asking for support. Frequent colds, dry skin, and a lingering sense of loss often point to Metal. Lower back ache, deep tiredness, and fear-based worry can be associated with Water. None of this is a diagnosis, but the patterns can be a useful starting point.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Elements Interact
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The elements never sit still. They are always feeding and restraining each other along two cycles, and a lot of Chinese diagnosis comes down to reading where a cycle has broken.
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">The Generating Cycle</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Each element feeds the next in a circle: Wood feeds Fire, Fire creates Earth, Earth bears Metal, Metal carries Water, and Water nourishes Wood. When this cycle runs smoothly, the system has a steady supply of energy from one phase to the next. When one link is weak, the element downstream may go hungry. For example, weak Water can leave Wood underfed, which can show up as tired, brittle energy and brittle nails or hair.
            </p>
          </div>

          <div className="border border-border rounded-xl p-4 bg-cream/20">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">The Controlling Cycle</h3>
            <p className="text-text2 text-sm leading-relaxed">
              Each element also keeps another in check so no phase grows too strong. Wood restrains Earth, Earth controls Water, Water puts out Fire, Fire melts Metal, and Metal chops Wood. When a controlling link fails, one element overacts on another. A classic example is Wood overacting on Earth. In the body this is often described as the Liver invading the Spleen, which is a traditional way of saying that stress and frustration spill into digestion, causing bloating, loose stools, or nausea after meals. This is closely related to the pattern we cover in <Link href="/wellness/liver-qi-stagnation" className="text-accent hover:underline">Liver Qi Stagnation</Link> and <Link href="/wellness/spleen-qi-deficiency" className="text-accent hover:underline">Spleen Qi Deficiency</Link>.
            </p>
          </div>
        </div>

        <p className="text-text2 leading-relaxed mt-4">
          Reading the cycles is why a Chinese medicine practitioner may ask about your digestion when you came in complaining about stress, or about your sleep when you mention sadness. The symptom and its cause do not always live in the same element.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Which Element Is Your Weakness?
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          A quick self-check can point you toward the element that tends to struggle first when you are run down. Read the clusters below and notice which one sounds most like you under pressure.
        </p>
        <ul className="space-y-2 text-text2 leading-relaxed mb-4 pl-5 list-disc">
          <li><span className="text-accent font-medium">Wood: </span>easily frustrated or irritable, tension headaches, PMS or eye strain, symptoms that flare with stress.</li>
          <li><span className="text-accent font-medium">Fire: </span>anxiety, trouble falling asleep, palpitations, feeling easily startled. If anxiety is your main concern, see <Link href="/symptoms/why-do-i-feel-anxious" className="text-accent hover:underline">why you might feel anxious</Link>.</li>
          <li><span className="text-accent font-medium">Earth: </span>bloating, tiredness after eating, sweet cravings, looping worry, soft stools.</li>
          <li><span className="text-accent font-medium">Metal: </span>frequent colds, dry skin or dry cough, a sense of grief that lingers, setting rules then breaking them.</li>
          <li><span className="text-accent font-medium">Water: </span>lower back or knee ache, deep fatigue, fear-based worry, frequent night waking, weak willpower.</li>
        </ul>
        <p className="text-text2 leading-relaxed">
          Most people have one element that struggles first and a second that follows. The <Link href="/quiz" className="text-accent hover:underline">free 5-minute body type quiz</Link> may help you sort out which pair fits you and which foods tend to support it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods for Each Element
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Chinese dietary therapy pairs foods to elements partly through taste and partly through the organ each food tends to support. Eating with your weak element in mind may gently shore it up over time. These are supportive habits, not quick fixes.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Element</th>
                <th className="text-left py-2 text-text font-medium">Foods That May Support It</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Wood</td><td className="py-2 text-text2">Green vegetables, sour foods, lemon, mint</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Fire</td><td className="py-2 text-text2">Bitter greens, green tea, lotus seed</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Earth</td><td className="py-2 text-text2">Sweet potato, rice, pumpkin, ginger</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Metal</td><td className="py-2 text-text2">Pear, white fungus, almonds, onion</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-3 font-medium">Water</td><td className="py-2 text-text2">Black beans, walnuts, seaweed, sesame</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          A simple way to start is to add one or two supportive foods for your weak element, keep eating your normal meals, and watch how you feel over a few weeks before adjusting.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Balancing the Elements in Daily Life
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Food is one lever, but the elements also respond to rhythm, rest, and movement. Because each element ties to a season and an emotion, simple timing and habit shifts may support the phase that tends to slip first. The aim is not to chase perfect balance, which never holds for long. The aim is to give the struggling element a little more room.
        </p>
        <ul className="space-y-2 text-text2 leading-relaxed mb-4 pl-5 list-disc">
          <li><span className="text-accent font-medium">Wood (spring, anger): </span>build in movement after long sitting, take breaks when frustration builds, and eat your biggest meal earlier in the day when Liver energy is naturally stronger.</li>
          <li><span className="text-accent font-medium">Fire (summer, joy): </span>protect midday rest in hot weather, limit overstimulation from screens late at night, and let yourself laugh, since Fire thrives on warm connection.</li>
          <li><span className="text-accent font-medium">Earth (late summer, worry): </span>eat warm, cooked meals at regular times, chew slowly, and avoid working through meals, since Earth hates being rushed.</li>
          <li><span className="text-accent font-medium">Metal (autumn, grief): </span>do breathing exercises in fresh air, keep the chest warm in cool wind, and give grief room to move rather than holding it in.</li>
          <li><span className="text-accent font-medium">Water (winter, fear): </span>rest more in winter, keep the lower back and feet warm, and protect sleep, since Water rebuilds its reserves in deep rest.</li>
        </ul>
        <p className="text-text2 leading-relaxed">
          Pair these habits with the supportive foods above and a steady bedtime, and you may notice the struggling element settle over a few weeks. None of this replaces medical care for serious symptoms, but it can be associated with steadier energy and mood.
        </p>
      </section>

      <InlineQuizCta />

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"Medical Disclaimer"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is based on traditional Chinese philosophy and is provided for informational purposes only. It is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for medical concerns."}
        </p>
      </section>
    </main>
  )
}
