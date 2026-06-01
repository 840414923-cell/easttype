"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function ColdHandsArticle() {
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
        <span className="text-text2">{l("Cold Hands & Feet", "手腳冰冷", "手足の冷え")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Cold Hands and Feet? Chinese Medicine Explains Why", "手腳冰冷？中醫的解釋", "手足の冷え？中医学の説明")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("5 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約5分鐘 · 基於3000年東方身體智慧", "約5分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "In Traditional Chinese Medicine (TCM), chronically cold hands and feet — especially when your blood work is normal — is usually caused by Yang Deficiency (阳虚, pronounced \"yang-shoo\"). Yang is your body's warming, activating force. Think of it as your inner furnace. When Yang is low, your body prioritizes keeping your core warm and cuts off heat to your extremities.",
            "在中醫裡，長期手腳冰冷 — 尤其是血液檢查正常的時候 — 通常是由陽虛引起的。陽是你身體的溫暖和活化力量，就像你的內在火爐。陽不足時，身體優先保護核心器官的溫暖，減少四肢的供熱。",
            "伝統的な中国医学（TCM）では、血液検査が正常なのに慢性的に手足が冷えるのは、通常、陽虚（ようきょ）が原因です。陽とは体を温め活性化する力。内側の暖炉のようなもの。陽が不足すると、体は核心部を温めることを優先し、四肢への熱供給を減らします。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Your body is a house. Yang is the heating system. When the furnace is underpowered, it keeps the living room warm but the bedrooms stay freezing. No amount of blankets fixes a broken furnace — you need to turn up the heat from the inside.",
            "你的身體是一棟房子。陽是暖氣系統。火爐功率不足時，客廳暖但臥室冰。蓋再多的被子也修不好火爐 — 你需要從內部升溫。",
            "体は家のようなもの。陽は暖房システム。暖炉の出力が足りないと、リビングは暖かいが寝室は寒いまま。布団を何枚かけても壊れた暖炉は直らない — 内側から熱を上げる必要があります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Yang Deficiency", "陽虛的跡象", "陽虚のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("Hands and feet are often cold, especially in winter", "手腳常常冰冷，尤其是冬天", "手足がよく冷たい、特に冬"),
            l("You prefer hot food and drinks over cold ones", "偏好熱食熱飲，不愛冷的", "冷たいものより温かい食事・飲み物が好き"),
            l("You feel worse in cold or damp weather", "冷或潮濕的天氣讓你更不舒服", "寒さや湿気で調子が悪くなる"),
            l("You urinate frequently, especially at night", "頻尿，尤其是夜間", "トイレが近い、特に夜"),
            l("Lower back or knee soreness that worsens with cold", "腰膝酸痛，遇冷加重", "腰や膝がだるく、冷えると悪化"),
            l("You have a personal vendetta against whoever invented air conditioning", "你跟發明冷氣的人有私人恩怨", "エアコンを発明した人を個人的に許していない"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Warming Foods for Yang Deficiency", "陽虛體質的溫性食物", "陽虚を温める食材")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Warming Foods", "✓ 溫性食物", "✓ 温性食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Ginger", "生薑", "しょうが"), l("Cinnamon", "肉桂", "シナモン"), l("Lamb", "羊肉", "羊肉"), l("Onion & leek", "洋蔥與韭菜", "玉ねぎとニラ"), l("Walnuts", "核桃", "クルミ"), l("Black pepper", "黑胡椒", "黒胡椒")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Cooling Foods", "✗ 寒性食物", "✗ 冷性食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Ice water & cold drinks", "冰水與冷飲", "氷水と冷たい飲み物"), l("Raw vegetables", "生蔬菜", "生野菜"), l("Watermelon", "西瓜", "スイカ"), l("Excessive fruit", "過量水果", "過度な果物"), l("Seaweed", "海藻", "海藻"), l("Green tea (excessive)", "過量綠茶", "緑茶の飲みすぎ")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Cold extremities can also be caused by Raynaud's, thyroid issues, or circulatory problems. If your fingers turn white or blue, or if coldness is sudden and one-sided, consult a doctor immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。手腳冰冷也可能是雷諾氏症、甲狀腺問題或循環問題。如果手指變白或變藍，或冰冷是突然且單側的，請立即看醫生。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。冷えはレイノー現象、甲状腺の問題、循環器の問題が原因の場合もあります。指が白や青になる、突然の片側の冷えがある場合は、直ちに医師にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["cold-hands-and-feet"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Always cold is one of the key signs of the Yang Deficient body type.", "長期怕冷是陽虛體質的關鍵信號之一。", "いつも寒いのは陽虚タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}