import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function ChineseMedicineForTinnitusArticle() {
  const slug = "chinese-medicine-for-tinnitus"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/wellness" className="hover:text-accent transition-colors no-underline text-text2/60">Wellness</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Chinese Medicine for Tinnitus</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Chinese Medicine for Tinnitus: Kidney Health, Liver Fire, and Foods That May Ease Ringing
      </h1>
      <p className="text-text2 text-sm mb-6">8 min read</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          Quick Answer
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          TCM connects tinnitus to two main organ systems. The Kidneys are said to open into the ears, so chronic, slow, low-pitched ringing often points to Kidney Yin or Yang deficiency, especially when it comes with aging, fatigue, or lower back weakness. Sudden, loud, high-pitched ringing usually signals excess heat, typically Liver Fire rising upward. The approach depends on the pattern: nourishing foods like black sesame, walnuts, and goji berries for deficiency, and cooling foods like chrysanthemum tea and celery for heat. This kind of ringing can be associated with the <Link href="/types/yin_deficient" className="text-accent hover:underline">Yin Deficient body type</Link>, and you can check your overall constitution with our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link>.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          How Chinese Medicine Views Tinnitus
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          In Chinese medicine the ears are not seen as standalone organs. They are described as the openings of the Kidneys, and Kidney essence is believed to rise upward to nourish them. Picture the Kidneys as a battery that powers the ears. When that battery runs low, the ears lose their steady supply and begin to ring. Several meridians also travel through and around the ears, including the three yang channels of the head, which is why other organs, especially the Liver and Gallbladder, can disturb hearing as well.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          The quality of the sound is one of the most useful clues. A low, faint, slow ringing that has crept in over months or years and gets louder when you are tired usually points to deficiency. Kidney Jing and Yin naturally decline with age, overwork, and long illness, and as the supply drops the ears lose their nourishment. This kind of ringing often travels with a sore lower back, weak knees, waking to urinate at night, and a general sense of wear. The deeper pattern is covered in our guide to <Link href="/wellness/kidney-yin-deficiency" className="text-accent hover:underline">Kidney Yin Deficiency</Link>, and the everyday experience of the symptom is explored on our page about <Link href="/symptoms/why-do-i-have-tinnitus" className="text-accent hover:underline">why you have tinnitus</Link>.
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          A sudden, loud, high-pitched ringing tells a very different story. That is usually excess heat flaring upward, most often Liver Fire. When stress, frustration, or held-in anger build up, Liver energy heats and rises toward the head, and the ears pick up the disturbance. This type may come on quickly, affect both ears, and sit alongside irritability, a flushed face, a bitter taste in the mouth, or headaches. A bout of Wind Heat from a cold can also stir up a temporary ringing that fades as the cold clears.
        </p>
        <p className="text-text2 leading-relaxed">
          Because the two directions are almost opposites, one calling for nourishment and the other for clearing, the food approach has to match the pattern. Warming and moistening foods suit a depleted Kidney, while cooling foods suit a hot, rising Liver. The sections below lay out the main patterns, the foods that fit each, and the daily habits that protect the ears over time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Tinnitus Patterns
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Because tinnitus has more than one root, it pays to know which pattern is driving yours. The foods that soothe a deficiency pattern can feed a heat pattern, and some that warm a cold Kidney can pour oil on Liver Fire. The table below describes the four main tinnitus patterns, the kind of ringing each produces, the other signs that tend to ride along, and the food direction each one responds to.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Pattern</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Ringing Type</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Other Signs</th>
                <th className="text-left px-3 py-2 text-text font-semibold">Food Direction</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Kidney Yin Deficiency</td>
                <td className="px-3 py-2">Low, chronic ringing, worse at night</td>
                <td className="px-3 py-2">Dry mouth, night sweats, lower back ache</td>
                <td className="px-3 py-2">Nourish Kidney Yin with moistening foods</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Kidney Yang Deficiency</td>
                <td className="px-3 py-2">Faint ringing, worse with cold</td>
                <td className="px-3 py-2">Cold limbs, frequent urination, fatigue</td>
                <td className="px-3 py-2">Warm Kidney Yang with warming foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Liver Fire</td>
                <td className="px-3 py-2">Sudden loud ringing, often in both ears</td>
                <td className="px-3 py-2">Irritability, red face, bitter taste, headache</td>
                <td className="px-3 py-2">Clear heat with cooling foods</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Phlegm-Fire</td>
                <td className="px-3 py-2">Ringing with a full or blocked sensation</td>
                <td className="px-3 py-2">Dizziness, heavy head, nausea</td>
                <td className="px-3 py-2">Clear phlegm and heat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          If you are unsure which pattern fits, our <Link href="/quiz" className="text-accent hover:underline">free body type quiz</Link> can point you toward your overall constitution.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          What Causes or Worsens Tinnitus
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Tinnitus rarely has a single cause. More often it is the combined effect of a few habits and life events wearing down the Kidneys or stoking the Liver. The five triggers below are the most common.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Loud Noise</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Sustained loud sound is one of the fastest ways to damage Kidney Jing in the TCM view. Concerts, power tools, gunfire, and loud headphones all count. The ears take the hit directly, and over time the delicate supply that feeds them thins out.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Chronic Stress and Anger</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The Liver thrives on smooth flow and hates being blocked. Long-term frustration, resentment, and anger cause Liver Qi to stagnate, heat up, and rise. That rising heat is a classic driver of sudden, loud ringing.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Aging</h3>
        <p className="text-text2 leading-relaxed mb-4">
          Kidney Jing naturally declines as we get older, which is why tinnitus becomes more common with age. The decline is gradual, and the ringing that comes with it tends to be low, chronic, and accompanied by other signs of depletion like weaker knees and a sore lower back.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Poor Sleep</h3>
        <p className="text-text2 leading-relaxed mb-4">
          The body restores its Yin during deep rest. Repeated late nights and broken sleep slowly deplete Yin, which allows heat to build and rise toward the head. Poor sleep and tinnitus often feed each other in a loop, since the ringing itself makes rest harder.
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-base text-text mb-2">Excessive Salt and Caffeine</h3>
        <p className="text-text2 leading-relaxed">
          Very salty food can burden the Kidneys over time, and heavy caffeine can agitate the Liver and push energy upward. Neither is harmful in small amounts, but in excess they can nudge a borderline case into a constant ring.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods That May Help
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          The food direction for tinnitus depends on the pattern, but the general split is simple. Deficiency patterns call for foods that nourish and moisten the Kidneys, while heat patterns call for foods that cool and clear. Black sesame and walnuts are classic Kidney tonics, chrysanthemum and celery clear Liver Heat, and a few neutral foods support both. Small, regular meals and steady hydration matter as much as the ingredients, since a depleted system does best with gentle, predictable care. The eight foods below are among the most used in Chinese medicine food therapy for supporting the ears.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                <th className="text-left px-3 py-2 text-text font-semibold">Food</th>
                <th className="text-left px-3 py-2 text-text font-semibold">TCM Property</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How It May Help</th>
                <th className="text-left px-3 py-2 text-text font-semibold">How to Prepare</th>
              </tr>
            </thead>
            <tbody className="text-text2">
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Black sesame</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Kidney Yin and blood</td>
                <td className="px-3 py-2">Toasted, 1 tablespoon daily</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Walnuts</td>
                <td className="px-3 py-2">Warm, sweet</td>
                <td className="px-3 py-2">Warms Kidney Yang, supports the brain</td>
                <td className="px-3 py-2">2 to 3 daily, chewed well</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Goji berries</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Nourishes Kidney and Liver Yin</td>
                <td className="px-3 py-2">In tea, congee, or eaten whole</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Chrysanthemum</td>
                <td className="px-3 py-2">Cool, sweet and bitter</td>
                <td className="px-3 py-2">Clears Liver Heat, cools the head</td>
                <td className="px-3 py-2">Steeped as tea</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Celery</td>
                <td className="px-3 py-2">Cool, sweet and bitter</td>
                <td className="px-3 py-2">Clears heat, supports Liver function</td>
                <td className="px-3 py-2">In soup or stir-fried</td>
              </tr>
              <tr className="border-b border-border/50 bg-card-bg/30">
                <td className="px-3 py-2 font-medium text-text">Mung beans</td>
                <td className="px-3 py-2">Cool, sweet</td>
                <td className="px-3 py-2">Clears heat and detoxifies</td>
                <td className="px-3 py-2">In soup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-medium text-text">Chinese yam (shanyao)</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Strengthens Kidney and Spleen</td>
                <td className="px-3 py-2">In soup or steamed</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-text">Black beans</td>
                <td className="px-3 py-2">Neutral, sweet</td>
                <td className="px-3 py-2">Supports Kidney function</td>
                <td className="px-3 py-2">In soup or stew</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Foods to Limit
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          For a tendency toward ringing, the foods below may add fuel to Liver Fire, burden the Kidneys, or weaken the Spleen that supports them. Cutting back for a few weeks may give the nourishing foods room to work.
        </p>
        <ul className="space-y-2 text-text2">
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive caffeine.</strong> It can stoke Liver Fire and push energy upward toward the head.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Alcohol.</strong> It generates heat and dampness and tends to aggravate ringing.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Very spicy foods.</strong> They add internal heat that rises to the ears.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Excessive salt.</strong> It can burden the Kidneys over time.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent mt-0.5">{'\u2022'}</span><span><strong className="text-text">Ice cold drinks.</strong> They weaken the Spleen and reduce the support it sends to the Kidneys.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          Daily Habits
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          Foods work best when the habits around them also protect the Kidneys and calm the Liver. These habits focus on drawing energy down from the head, resting the ears, and keeping the Liver smooth.
        </p>
        <ol className="space-y-3 text-text2">
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">1.</span><span><strong className="text-text">Ear massage.</strong> Rub your palms together until warm, cup them over the ears for a few seconds, then release. A few rounds bring gentle circulation to the area.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">2.</span><span><strong className="text-text">Cut back on caffeine and alcohol.</strong> Both can feed the heat patterns behind sudden ringing.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">3.</span><span><strong className="text-text">Manage stress.</strong> Held-in anger and frustration are the main fuel for Liver Fire, so regular outlets matter.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">4.</span><span><strong className="text-text">Sleep before 11 PM.</strong> In the TCM body clock, 11 PM to 3 AM is when the Liver and Gallbladder restore themselves.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">5.</span><span><strong className="text-text">Warm foot soaks before bed.</strong> Drawing warmth down to the feet pulls energy away from the head and calms a restless, ringing mind.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">6.</span><span><strong className="text-text">Keep headphone volume low.</strong> Sustained loud sound directly depletes the Kidney supply that feeds the ears.</span></li>
          <li className="flex items-start gap-3"><span className="text-accent font-bold flex-shrink-0">7.</span><span><strong className="text-text">Gentle exercise.</strong> Slow movement like qi gong or walking keeps Liver Qi flowing without exhausting a depleted system.</span></li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">
          When to See a Doctor
        </h2>
        <p className="text-text2 leading-relaxed">
          Most occasional ringing fades on its own and is tied to a loud event, a stressful week, or a cold. Tinnitus that is sudden, one-sided, constant, or getting worse should be assessed by a qualified healthcare professional. Please see a doctor promptly if you notice sudden hearing loss, ringing in only one ear, pulsatile tinnitus that beats in time with your pulse, or ringing paired with dizziness, vertigo, or balance problems. These signs can be associated with conditions that need proper diagnosis and care. Chinese medicine food therapy may complement, but should never replace, guidance from a licensed medical provider.
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS[slug]} />

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
