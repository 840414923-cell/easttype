"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function WhyAlwaysTiredArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
          {l("EastType", "EastType", "EastType")}
        </Link>
        <span className="mx-1.5">›</span>
        <span>{l("Wellness", "養生", "ウェルネス")}</span>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Why Am I Always Tired?", "為什麼我總是累？", "なぜいつも疲れているのか？")}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Why Am I Always Tired? A Chinese Medicine Explanation",
          "為什麼我總是累？中醫的解釋",
          "なぜいつも疲れているのか？中医学の説明"
        )}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {l("6 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約6分鐘 · 基於3000年東方身體智慧", "約6分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The Short Answer", "簡短回答", "端的な答え")}
        </h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "In Traditional Chinese Medicine (TCM), chronic fatigue that doesn't improve with sleep is usually caused by Qi Deficiency (气虚, pronounced \"chee-shoo\"). Qi is your body's vital energy — think of it as the fuel that powers every function. When Qi is low, everything still works, but everything costs more energy than it should.",
            "在中醫裡，睡不飽的慢性疲勞通常是由氣虛引起的。氣是你身體的生命能量 — 就像驅動每個功能的燃料。氣不足時，一切還能運作，但每件事都比別人多花力氣。",
            "伝統的な中国医学（TCM）では、睡眠で改善しない慢性疲労は通常、気虚（ききょ）が原因です。気とは体の生命エネルギー — 全ての機能を動かす燃料のようなもの。気が不足すると、全て機能するが、全てに人より多くのエネルギーを要します。"
          )}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Think of It Like This", "這樣理解", "こう考えてみてください")}
        </h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Imagine your body is a phone. Western medicine checks if the screen is broken. Chinese medicine checks the battery. Qi Deficiency means your battery is at 5% — the phone works, but everything is slow, the screen dims, and it shuts down unexpectedly.",
            "想像你的身體是手機。西醫檢查螢幕有沒有壞。中醫檢查電池。氣虛就是你的電池只剩5% — 手機還能用，但一切都很慢，螢幕變暗，還會突然關機。",
            "体をスマホだと想像してください。西洋医学は画面が壊れていないか確認します。中医学はバッテリーを確認します。気虚とはバッテリーが5% — スマホは機能するが、全てが遅く、画面が暗くなり、突然シャットダウンします。"
          )}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {l("Signs of Qi Deficiency — Do You Recognize These?", "氣虛的跡象 — 你有這些嗎？", "気虚のサイン — これらに覚えがありますか？")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}
        </p>
        <ul className="space-y-2">
          {[
            l("You're tired even after a full night's sleep", "睡滿了還是累", "十分眠っても疲れている"),
            l("You prefer sitting over standing whenever possible", "能坐就不站", "立てるなら座りたい"),
            l("Your voice is soft and you speak less than you think", "聲音輕柔，想的比說的多", "声が小さく、話すより考える方が多い"),
            l("You catch colds more easily than others", "比別人更容易感冒", "人より風邪をひきやすい"),
            l("You sweat easily, even with light activity", "稍微活動就出汗", "少し動くとすぐ汗をかく"),
            l("You feel like you've drafted your resignation by 10 AM every Monday", "每週一早上十點就在心裡寫辭職信", "毎週月曜10時には心の中で退職届を書いている"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What Western Medicine Misses */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What Western Medicine Misses", "西醫忽略了什麼", "西洋医学が見落としていること")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Western medicine typically runs blood tests. If your iron, thyroid, and B12 are normal, you're told 'you're fine' or diagnosed with chronic fatigue syndrome. But TCM looks at the pattern beneath the test results — your body's functional energy, not just its chemistry.",
            "西醫通常會做血液檢查。如果你的鐵、甲狀腺和B12都正常，醫生會說「你沒事」或診斷慢性疲勞。但中醫看的是檢測結果之下的模式 — 你身體的功能性能量，不只是化學指標。",
            "西洋医学は通常、血液検査を行います。鉄分、甲状腺、B12が正常なら「問題ない」と言われるか、慢性疲労症候群と診断されます。しかし中医学は検査結果の下にあるパターン — 体の機能的エネルギーを見ます。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Qi Deficiency", "氣虛體質的食物：該吃與不該吃", "気虚を助ける（悪化させる）食材")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("✓ Nourishing Foods", "✓ 滋養食物", "✓ 滋養の食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Sweet potato", "地瓜", "さつまいも"),
                l("Rice porridge (congee)", "米粥", "お粥"),
                l("Ginger tea", "薑茶", "しょうが茶"),
                l("Chinese dates (jujube)", "紅棗", "なつめ"),
                l("Goji berries", "枸杞", "クコの実"),
                l("Chicken broth", "雞湯", "鶏スープ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("✗ Draining Foods", "✗ 消耗食物", "✗ エネルギーを奪う食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Raw salads (too cold)", "生沙拉（太寒）", "生野菜サラダ（冷たすぎ）"),
                l("Ice water", "冰水", "氷水"),
                l("Excessive caffeine", "過量咖啡因", "過度なカフェイン"),
                l("Cold smoothies", "冰沙", "冷たいスムージー"),
                l("Bitter melon", "苦瓜", "ゴーヤ"),
                l("Excessive raw foods", "過量生食", "過度な生食"),
            ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. If your fatigue is severe, sudden, or accompanied by weight loss, fever, or night pain, please consult a licensed healthcare provider immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的疲勞嚴重、突然發生，或伴隨體重減輕、發燒、夜間疼痛，請立即諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。疲労が激しい、突然、体重減少、発熱、夜間の痛みを伴う場合は、直ちに医療専門家にご相談ください。"
          )}
        </p>
      </section>

      {/* FAQ */}
      <FaqSection faqs={WELLNESS_FAQS["why-am-i-always-tired"]} />

      {/* FAQ */}
      <FaqSection faqs={WELLNESS_FAQS["why-am-i-always-tired"]} />

      {/* CTA */}
      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">
          {l(
            "Chronic fatigue is one of the key signs of the Qi Deficient body type.",
            "慢性疲勞是氣虛體質的關鍵信號之一。",
            "慢性疲労は気虚タイプの主要なサインの一つです。"
          )}
        </p>
        <p className="text-text2 text-sm mb-6">
          {l(
            "There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.",
            "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。",
            "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。"
          )}
        </p>
        <Link
          href="/quiz"
          className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2"
        >
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}