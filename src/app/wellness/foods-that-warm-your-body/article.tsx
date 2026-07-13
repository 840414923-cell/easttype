
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function FoodsThatWarmArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
          {"EastType"}
        </Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">
          {"Wellness"}
        </Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Foods That Warm Your Body"}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"Foods That Warm Your Body: A Chinese Medicine Guide"}
      </h1>
      <p className="text-text2 text-sm mb-6">
        {"8 min read · Based on 3,000 years of Eastern body wisdom"}
      </p>

      {/* TL;DR */}
      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-3">
          {"TL;DR"}
        </h2>
        <ul className="text-sm text-text2 space-y-2">
          {[
            "Yang Deficiency (阳虚) means your body's internal furnace is underpowered — you run cold from the inside out",
            "Warming foods like ginger, cinnamon, and lamb literally add fire to your system — they're not just comfort food",
            "Cold, raw, and icy foods drain what little Yang you have — cut back on smoothies, ice water, and raw salads",
            "You can feel a real difference in 2–3 weeks of consistent warming food choices — maybe sooner",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#8226;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"The Short Answer"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"In Traditional Chinese Medicine (TCM), Yang Deficiency (阳虚, pronounced \"yang-shoo\") means your inner furnace is underpowered. Yang is your body's warmth and fire — the force that keeps your metabolism humming, your limbs warm, and your digestion strong. Without enough Yang, everything runs cold and slow. Warming foods are medicine for this type — they don't just comfort you, they literally add fire to your system."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Think of it this way: some people can eat ice cream in January and feel fine. You? You're the one ordering hot tea in July. That's not a personality trait — that's probably your Yang talking. Or rather, your Yang not talking loud enough."}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Think of It Like This"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Imagine a house with underpowered heating in the middle of winter. You can bundle up in three sweaters, drink hot tea all day, and sit right next to the radiator — but you're still always a little cold. The real fix isn't more blankets. It's upgrading the furnace. Warming foods are like upgrading your body's heating system — they add fire from the inside, so the warmth comes from you, not just from what's around you."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Now here's the part most people miss: the house isn't cold because it's winter. It's cold because the furnace can't keep up. Same with your body. The weather isn't the problem — your internal heating capacity is. And just like a furnace, Yang can be strengthened. It's not a fixed trait you're stuck with forever."}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {"Signs of Yang Deficiency — Do You Recognize These?"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Most people with this pattern recognize 3 or more:"}
        </p>
        <ul className="space-y-2">
          {[
            "Cold hands and feet, especially in winter",
            "Prefer hot food and drinks over cold",
            "Feel worse in cold or damp weather",
            "Frequent urination, especially at night",
            "Lower back or knee soreness that worsens with cold",
            "Have a personal vendetta against whoever invented air conditioning",
            "Digestion feels sluggish — bloating after meals, loose stools, or food just seems to sit there",
            "Low stamina — you tire easily and recover slowly, even from minor exertion",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text2 text-sm mt-4">
          {"If you're sitting here thinking \"that's literally me\" to four or more of these — well, there's a decent chance Yang Deficiency is part of your picture. Not a guarantee, but a strong hint."}
        </p>
      </section>

      {/* What Western Medicine Misses */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"What Western Medicine Misses"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Western medicine says \"just dress warmer\" or checks your thyroid. If your thyroid panel comes back normal, you're told there's nothing wrong. But TCM says the problem isn't the external temperature — it's your body's internal heating capacity. Your Yang is low, meaning your body can't generate and maintain its own warmth. Warming foods don't just feel nice — they literally add Yang energy to your system, stoking the fire from within."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Here's the thing — both systems can be right at the same time. Your thyroid might be technically fine, and you can still feel cold all the time. Western medicine calls that \"subclinical.\" TCM calls that Yang Deficiency. Different language, same observation. The difference is TCM actually has a dietary framework to address it — instead of just telling you to wear thicker socks."}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Foods That Help (and Harm) Yang Deficiency"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"In TCM, every food has a thermal nature — warming, neutral, or cooling. This isn't about the temperature you serve it at. Ice-cold ginger tea is still warming. Hot watermelon soup is still cooling. The thermal nature is intrinsic to the food itself."}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {"✓ Warming Foods"}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                "Ginger",
                "Cinnamon",
                "Lamb",
                "Beef",
                "Black pepper",
                "Roasted nuts",
                "Fennel",
                "Onion",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {"✗ Cooling Foods"}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                "Raw salads",
                "Ice water",
                "Watermelon",
                "Cucumber",
                "Cold smoothies",
                "Excessive tropical fruits",
                "Mint",
                "Tofu",
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4">
          {"A quick rule of thumb: if it grows in the ground, gets cooked, or has a spice-level kick, it probably leans warming. If it's raw, watery, or comes from a tropical climate, it probably leans cooling. There are exceptions — but this covers maybe 80% of what you'll encounter day to day."}
        </p>
      </section>

      {/* Daily Life Impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"How This Shows Up in Daily Life"}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {"Yang Deficiency isn't just about feeling cold. It seeps into everything — your energy, your mood, your social life. You're the friend who always suggests indoor restaurants. The one who brings a cardigan everywhere, even in summer. The person who takes a hot shower before bed just to feel warm enough to sleep."}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {"Your digestion might be quietly struggling too. Cold slows things down — that's just physics. In TCM terms, a cold spleen and stomach can't transform food efficiently. So you eat, but you don't feel nourished. You might feel bloated after meals, or notice that your stomach gurgles a lot. These aren't random — they're your body asking for warmth."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"And the emotional side? It's probably not a coincidence that in Chinese, the word for \"cold\" (冷) also describes emotional distance. When your body runs cold, your energy contracts. You might feel more withdrawn, less motivated, or just... flat. Not depressed exactly, but not exactly firing on all cylinders either. I'm not saying warming foods will fix your whole life. But they might take the edge off in ways you don't expect."}
        </p>
      </section>

      {/* Simple Warming Meal Plan */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"A Simple Warming Meal Plan"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"You don't need to overhaul everything overnight. Try this for a day and see how you feel. It's not a prescription — just a starting point."}
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Breakfast"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Congee (rice porridge) with sliced ginger and a pinch of cinnamon. Maybe a soft-boiled egg on the side. No cold cereal, no iced lattes — your stomach just woke up, give it something warm to start with."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Lunch"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Lamb and carrot soup, or beef stir-fry with black pepper and onion. A bowl of warm rice on the side. Skip the salad bar today — raw greens take more Yang to digest than your body wants to spend right now."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Snack"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"A handful of roasted walnuts or chestnuts. Warm, slightly sweet, and deeply nourishing in TCM terms. Way better than ice cream for your particular constitution."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {"Dinner"}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Ginger-chicken soup with fennel and a few red dates (jujubes). Simple, warming, and honestly pretty delicious. Drink the broth — that's where the warmth lives."}
            </p>
          </div>
        </div>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {"When to See a Doctor"}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This information is for wellness and self-awareness, not medical diagnosis. If your cold intolerance is severe, sudden, or accompanied by significant weight changes, heart palpitations, or extreme fatigue, please consult a licensed healthcare provider immediately. Thyroid disorders and other conditions can mimic Yang Deficiency patterns."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-am-i-always-cold" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Always Cold"}</h3>
            <p className="text-text2 text-sm">{"Always feeling cold is the primary symptom that warming foods address"}</p>
          </Link>
          <Link href="/patterns/cold-sensitivity" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Cold Sensitivity"}</h3>
            <p className="text-text2 text-sm">{"Understanding this pattern helps guide your warming food choices"}</p>
          </Link>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Conditions"}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {"Yang Deficiency often overlaps with other patterns. If any of these sound familiar, it might be worth reading more:"}
        </p>
        <div className="space-y-3">
          <Link
            href="/symptoms/why-am-i-always-cold"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {"Cold Hands and Feet"}
            </h3>
            <p className="text-xs text-text2 leading-relaxed">
              {"The most visible sign of Yang Deficiency — and what to do when your extremities never seem to warm up."}
            </p>
          </Link>
          <Link
            href="/symptoms/why-am-i-always-tired"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {"Why Am I Always Tired?"}
            </h3>
            <p className="text-xs text-text2 leading-relaxed">
              {"Low Yang often means low energy. If you're always exhausted regardless of how much you sleep, Yang Deficiency could be part of the picture."}
            </p>
          </Link>
          <Link
            href="/wellness/chinese-medicine-foods-for-energy"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {"Chinese Medicine Foods for Energy"}
            </h3>
            <p className="text-xs text-text2 leading-relaxed">
              {"Yang and Qi are closely related — if warming foods help but you still feel drained, Qi-supporting foods might be the missing piece."}
            </p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["foods-that-warm-your-body"]} />

      <SymptomCta />
    </main>
  )
}
