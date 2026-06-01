"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function InsomniaChineseMedicineArticle() {
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
        <span className="text-text2">{l("Insomnia & Chinese Medicine", "失眠與中醫", "不眠症と中医学")}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Insomnia & Chinese Medicine: Why You Can't Fall (or Stay) Asleep",
          "失眠與中醫：為什麼你睡不著或睡不好",
          "不眠症と中医学：なぜ眠れないのか、または眠りが浅いのか"
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
            "In Traditional Chinese Medicine (TCM), insomnia that worsens at night is usually caused by Yin Deficiency (阴虚, pronounced \"yeen-shoo\"). Yin is your body's cooling and moistening force — think of it as the water that balances the fire. When Yin is low, internal heat builds up at night when there's no external activity to dissipate it. Your mind becomes overactive because the \"fire\" has no \"water\" to balance it.",
            "在中醫裡，夜間加重的失眠通常是由陰虛引起的。陰是你身體的冷卻和滋潤力量 — 就像平衡火的水。陰不足時，內熱在夜間累積，因為沒有外在活動來消散它。你的思緒過度活躍，因為「火」沒有「水」來平衡。",
            "伝統的な中国医学（TCM）では、夜に悪化する不眠は通常、陰虚（いんきょ）が原因です。陰とは体の冷却と潤いの力 — 火とバランスを取る水のようなもの。陰が不足すると、夜間に発散する活動がないため、体内に熱がこもります。心が過活動になるのは、「火」をバランスする「水」がないからです。"
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
            "Imagine a house with broken air conditioning in summer. During the day, you're distracted by activity — work, conversations, movement. But at night, when everything quiets down, the heat becomes unbearable. You toss and turn, unable to settle. That's exactly what Yin-deficient people experience: the heat was always there, but it only becomes intolerable when the distractions stop.",
            "想像夏天一間冷氣壞掉的房子。白天你被活動分散注意力 — 工作、對話、走動。但到了晚上，一切安靜下來時，熱氣變得難以忍受。你翻來覆去，無法安穩。這正是陰虛的人經歷的：熱一直都在，只是當分心的事情停止時，才變得無法忍受。",
            "夏、エアコンが壊れた家を想像してください。日中は活動 — 仕事、会話、移動 — に気を取られています。しかし夜、全てが静かになると、熱は耐え難いものになります。あなたは寝返りを打ち、落ち着けません。これがまさに陰虚の人が経験すること：熱は常にあったが、気を紛らわすものがなくなって初めて耐え難くなるのです。"
          )}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {l("Signs of Yin Deficiency — Do You Recognize These?", "陰虛的跡象 — 你有這些嗎？", "陰虚のサイン — これらに覚えがありますか？")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}
        </p>
        <ul className="space-y-2">
          {[
            l("Warm or flushed feeling, especially in the afternoon or evening", "午後或傍晚特別容易覺得熱或臉紅", "午後や夕方に特に暑さやほてりを感じる"),
            l("Dry mouth and throat, even after drinking water", "口乾喉嚨乾，喝水也不解渴", "水を飲んでも口や喉が乾く"),
            l("Trouble staying asleep — you fall asleep but wake in the night", "睡著了但半夜會醒來", "眠りにつくが夜中に目が覚める"),
            l("You prefer cold drinks over hot ones", "喜歡喝冷飲多於熱飲", "温かい飲み物より冷たい飲み物を好む"),
            l("Skin or eyes sometimes feel dry and irritated", "皮膚或眼睛有時乾澀不適", "肌や目が時々乾燥して不快"),
            l("Your best ideas come at midnight, your worst decisions at noon", "最好的點子在半夜，最差的決定在中午", "最高のアイデアは深夜、最悪の決断は昼に出る"),
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
            "Western medicine typically treats insomnia with melatonin supplements, sleep hygiene protocols, or sedatives. These can help temporarily, but they don't address the root cause. TCM asks: why is your body generating excess heat at night? The answer is Yin deficiency — your body doesn't have enough cooling, moistening force to let you truly rest.",
            "西醫通常用褪黑激素、睡眠衛生建議或鎮靜劑治療失眠。這些能暫時幫助，但沒有解決根本原因。中醫問：為什麼你的身體在夜間產生多餘的熱？答案是陰虛 — 你的身體沒有足夠的冷卻、滋潤力量讓你真正休息。",
            "西洋医学は通常、メラトニンサプリメント、睡眠衛生プロトコル、または鎮静剤で不眠を治療します。これらは一時的に役立ちますが、根本原因には対処しません。中医学は問います：なぜ体は夜に過剰な熱を生成しているのか？答えは陰虚 — 体に真に休むための十分な冷却と潤いの力がないのです。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Yin Deficiency", "陰虛體質的食物：該吃與不該吃", "陰虚を助ける（悪化させる）食材")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("✓ Cooling & Nourishing Foods", "✓ 滋陰清熱食物", "✓ 陰を養い熱を冷ます食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Lily bulb (Bai He)", "百合", "ユリ根"),
                l("Lotus seed", "蓮子", "蓮の実"),
                l("Pear", "梨", "梨"),
                l("Watermelon", "西瓜", "スイカ"),
                l("Mung bean soup", "綠豆湯", "緑豆スープ"),
                l("Tremella mushroom", "白木耳", "白キクラゲ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("✗ Heating & Drying Foods", "✗ 辛熱燥烈食物", "✗ 熱を生じ乾燥させる食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Spicy foods", "辛辣食物", "辛い食べ物"),
                l("Alcohol", "酒精", "アルコール"),
                l("Lamb", "羊肉", "羊肉"),
                l("Excessive coffee", "過量咖啡", "過度なコーヒー"),
                l("Fried foods", "油炸食物", "揚げ物"),
                l("Garlic in large amounts", "大量蒜頭", "大量のニンニク"),
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
            "This information is for wellness and self-awareness, not medical diagnosis. If your insomnia is severe, persistent, or accompanied by chest pain, palpitations, severe anxiety, or thoughts of self-harm, please consult a licensed healthcare provider immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的失眠嚴重、持續，或伴隨胸痛、心悸、嚴重焦慮或自傷念頭，請立即諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。不眠が激しい、持続的、または胸の痛み、動悸、激しい不安、自傷の念を伴う場合は、直ちに医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["insomnia-chinese-medicine"]} />

      {/* FAQ */}
      <FaqSection faqs={WELLNESS_FAQS["insomnia-chinese-medicine"]} />

      {/* CTA */}
      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">
          {l(
            "Insomnia and night heat are key signs of the Yin Deficient body type.",
            "失眠和夜間燥熱是陰虛體質的關鍵信號。",
            "不眠と夜間のほてりは陰虚タイプの主要なサインです。"
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
