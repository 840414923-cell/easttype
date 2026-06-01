"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function FoodsForEnergyArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <span>{l("Wellness", "養生", "ウェルネス")}</span>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Foods for Energy", "補氣食物", "エネルギーのための食材")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Chinese Medicine Foods for Energy: What to Eat When You're Always Tired", "中醫補氣食物：總是累的時候該吃什麼", "中医学のエネルギー食材：いつも疲れている時に食べるもの")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("6 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約6分鐘 · 基於3000年東方身體智慧", "約6分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Why Chinese Medicine Approaches Energy Differently", "中醫為什麼從不同角度看能量", "中医学がエネルギーを違う視点から捉える理由")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Western energy advice is usually: sleep more, drink water, exercise. Chinese medicine asks a different question: WHY is your energy low? Because in TCM, fatigue isn't one thing — it's a pattern. And different patterns need different foods.",
            "西方的能量建議通常是：多睡、喝水、運動。中醫問的問題不同：你為什麼能量低？因為在中醫裡，疲勞不是一種東西 — 是一種模式。不同的模式需要不同的食物。",
            "西洋のエネルギーアドバイスは通常：もっと寝る、水を飲む、運動する。中医学は別の質問をします：なぜエネルギーが低いのか？TCMでは、疲労は一つではなく、パターン。異なるパターンには異なる食材が必要です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "If your Qi (vital energy) is low, you need Qi-boosting foods. If your Yang (warming energy) is low, you need warming foods. Eating the wrong foods for your pattern can actually make you MORE tired.",
            "如果你的氣（生命能量）低，你需要補氣食物。如果你的陽（溫暖能量）低，你需要溫性食物。吃錯體質的食物反而會讓你更累。",
            "もし気（生命エネルギー）が低ければ、気を補う食材が必要。陽（温めるエネルギー）が低ければ、温性食材が必要。自分のパターンに合わない食材は、逆にさらに疲れさせる可能性があります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{l("Top 10 Qi-Boosting Foods (Backed by 3,000 Years of Use)", "10大補氣食物（3000年實踐驗證）", "10の気を補う食材（3,000年の実践に基づく）")}</h2>
        <div className="space-y-3">
          {[
            { food: l("Sweet potato", "地瓜", "さつまいも"), why: l("Gentle, easy to digest, steadily builds Qi without overstimulating", "溫和好消化，穩定補氣不刺激", "穏やかで消化しやすく、気を安定して補う") },
            { food: l("Rice porridge (congee)", "米粥", "お粥"), why: l("The #1 recovery food in Chinese households — easy on the stomach, deeply nourishing", "中國家庭第一恢復食物 — 養胃深層滋養", "中国家庭の回復食No.1 — 胃に優しく深く滋養") },
            { food: l("Chinese dates (jujube)", "紅棗", "なつめ"), why: l("Used in nearly every Qi tonic recipe — mildly sweet, builds blood and energy", "幾乎每個補氣方子都有 — 微甜，補血補氣", "ほぼ全ての気補充レシピに使用 — まろやかで血と気を補う") },
            { food: l("Ginger", "生薑", "しょうが"), why: l("Warms the stomach, improves absorption of all other foods — the catalyst", "暖胃，促進所有其他食物的吸收 — 催化劑", "胃を温め、他の食材の吸収を促進 — 触媒") },
            { food: l("Goji berries", "枸杞", "クコの実"), why: l("Gentle Qi and Yin tonic — perfect for tired eyes and brain fog", "溫和的補氣滋陰良品 — 適合眼疲勞和腦霧", "穏やかな気・陰補強 — 目の疲れや脳の霧に最適") },
            { food: l("Chicken broth", "雞湯", "鶏スープ"), why: l("Warm, protein-rich, easy to absorb — the original energy drink", "溫暖、高蛋白、好吸收 — 原始的能量飲料", "温かくタンパク質豊富で吸収しやすい — 元祖エナジードリンク") },
            { food: l("Shiitake mushrooms", "香菇", "しいたけ"), why: l("Strengthens the spleen (the organ that makes Qi from food)", "健脾（從食物產生氣的器官）", "脾を強める（食事から気を作る臓器）") },
            { food: l("Yam (Chinese yam)", "山藥", "長芋/山芋"), why: l("Mild and stabilizing — builds Qi while calming the digestion", "溫和穩定 — 補氣同時安撫消化", "穏やかで安定 — 気を補いながら消化を落ち着かせる") },
            { food: l("Millet", "小米", "粟"), why: l("The grain for tired people — easy to digest, warming, nourishing", "疲勞者的穀物 — 好消化、溫暖、滋養", "疲れた人向けの穀物 — 消化しやすく温かく滋養あり") },
            { food: l("Beef (in small amounts)", "牛肉（少量）", "牛肉（少量）"), why: l("Rich in Qi-building nutrients — but don't overdo it, heavy meats can slow digestion", "富含補氣營養 — 但不要過量，厚重的肉會減緩消化", "気を作る栄養豊富 — ただし取りすぎると消化が遅くなる") },
          ].map((item, i) => (
            <div key={i} className="bg-cream/20 border border-border/50 rounded-xl p-4">
              <span className="font-semibold text-accent text-sm">{item.food}</span>
              <p className="text-sm text-text2 mt-1 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Foods That Drain Your Energy", "消耗你能量的食物", "エネルギーを奪う食材")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "These aren't \"bad\" foods — but if you're already low on Qi, they make things worse by forcing your body to spend energy it doesn't have:",
            "這些不是「壞」食物 — 但如果你已經氣虛，它們會強迫身體花掉本來就沒有的能量，讓情況更糟：",
            "これらは「悪い」食材ではありません — しかしすでに気が不足している場合、持っていないエネルギーを消費させ、状況を悪化させます："
          )}
        </p>
        <ul className="space-y-2">
          {[
            l("Ice water and cold drinks — your body wastes Qi heating them up to body temperature", "冰水和冷飲 — 身體要花氣把它加熱到體溫", "氷水と冷たい飲み物 — 体はそれを体温まで温めるために気を浪費する"),
            l("Raw salads in excess — raw food requires more digestive energy than cooked food", "過量生沙拉 — 生食比熟食需要更多消化能量", "生野菜サラダの過剰摂取 — 生食は調理済み食材より消化エネルギーが必要"),
            l("Too much caffeine — borrows energy from tomorrow to spend today", "過量咖啡因 — 借明天的能量花在今天", "カフェインの摂りすぎ — 明日のエネルギーを借りて今日使う"),
            l("Cold smoothies — same problem as ice water, but disguised as healthy", "冰沙 — 和冰水一樣的問題，只是偽裝成健康的", "冷たいスムージー — 氷水と同じ問題、健康そうに見えるだけ"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("The Key Insight", "關鍵洞察", "重要な気づき")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "Eating the right food for YOUR body type matters more than eating \"healthy\" food in general. A salad that energizes one person can exhaust another. Chinese medicine gives you a personalized map — not generic advice.",
            "吃對你體質的食物，比吃「健康」食物更重要。一份讓某人有精神的沙拉，可能讓另一個人精疲力竭。中醫給你一張個人化的地圖 — 不是通用建議。",
            "自分の体質に合った食材を食べることは、一般的に「健康的」な食材を食べること以上に重要です。ある人を元気にするサラダが、別の人を疲れさせることもあります。中医学は汎用的なアドバイスではなく、パーソナライズされたマップを提供します。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("Medical Disclaimer", "醫療聲明", "医療免責事項")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is based on traditional Chinese dietary philosophy and is provided for informational purposes only. It is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for medical concerns.",
            "此資訊基於東方傳統飲食哲學，僅供資訊參考。非醫療建議、診斷或治療。如有健康疑慮，請諮詢合格醫療專業人員。",
            "この情報は東洋の伝統的な食哲学に基づき、情報提供のみを目的としています。医療アドバイス、診断、治療ではありません。健康上の懸念については、必ず医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-foods-for-energy"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("The right food for YOUR body type makes all the difference.", "吃對你體質的食物，天差地別。", "自分の体質に合った食材で全く違う結果に。")}</p>
        <p className="text-text2 text-sm mb-6">{l("Chinese medicine identifies 9 body types. Take the free 5-minute quiz and discover which foods actually fuel YOU.", "中醫有9種體質。花5分鐘做免費測驗，發現哪些食物真正給你能量。", "中医学は9つの体質を識別します。無料の5分クイズで自分に合った食材を発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}