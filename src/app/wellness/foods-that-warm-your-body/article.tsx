"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

export default function FoodsThatWarmArticle() {
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
        <span className="text-text2">{l("Foods That Warm Your Body", "溫暖身體的食物", "体を温める食材")}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Foods That Warm Your Body: A Chinese Medicine Guide",
          "溫暖身體的食物：中醫指南",
          "体を温める食材：中医学ガイド"
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
            "In Traditional Chinese Medicine (TCM), Yang Deficiency (阳虚, pronounced \"yang-shoo\") means your inner furnace is underpowered. Yang is your body's warmth and fire — the force that keeps your metabolism humming, your limbs warm, and your digestion strong. Without enough Yang, everything runs cold and slow. Warming foods are medicine for this type — they don't just comfort you, they literally add fire to your system.",
            "在中醫在中醫裡，陽虛意味著你內在的火爐動力不足。陽是你身體的溫暖與火力 — 維持代謝運轉、四肢溫暖、消化有力的力量。陽不足時，一切運行得又冷又慢。溫熱性食物就是這種體質的良藥 — 它們不只是安慰你，而是真正為你的系統添火。",
            "伝統的な中国医学（TCM）では、陽虚（ようきょ）とは体内の暖炉の出力が不足している状態です。陽とは体の温かさと火 — 代謝を回し、四肢を温め、消化を強く保つ力です。陽が不足すると、全てが冷たく遅くなります。温性食材はこの体質の薬 — 単に慰めるだけでなく、文字通り体に火を加えます。"
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
            "Imagine a house with underpowered heating in the middle of winter. You can bundle up in three sweaters, drink hot tea all day, and sit right next to the radiator — but you're still always a little cold. The real fix isn't more blankets. It's upgrading the furnace. Warming foods are like upgrading your body's heating system — they add fire from the inside, so the warmth comes from you, not just from what's around you.",
            "想像一棟冬天暖氣不足的房子。你可以穿三件毛衣、整天喝熱茶、貼著暖氣片坐 — 但你還是覺得有點冷。真正的解決方法不是加毯子，而是升級暖爐。溫熱性食物就像升級你身體的供暖系統 — 從內部加火，讓溫暖來自你自己，而不只是來自周圍的環境。",
            "真冬に暖房の出力が足りない家を想像してください。セーターを3枚重ね、一日中お茶を飲み、暖房のすぐそばに座っても — まだ少し寒い。本当の解決は毛布を増やすことではなく、暖炉をアップグレードすること。温性食材は体の暖房システムのアップグレード — 内側から火を加え、温かさが周囲ではなく自分自身から生まれるようにします。"
          )}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {l("Signs of Yang Deficiency — Do You Recognize These?", "陽虛的跡象 — 你有這些嗎？", "陽虚のサイン — これらに覚えがありますか？")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}
        </p>
        <ul className="space-y-2">
          {[
            l("Cold hands and feet, especially in winter", "手腳冰冷，尤其是冬天", "手足が冷たい、特に冬"),
            l("Prefer hot food and drinks over cold", "偏好熱食熱飲，不喜冷食", "冷たいものより温かい食べ物・飲み物を好む"),
            l("Feel worse in cold or damp weather", "寒冷或潮濕天氣時更難受", "寒いや湿った天気で調子が悪くなる"),
            l("Frequent urination, especially at night", "頻尿，尤其是夜間", "頻尿、特に夜間"),
            l("Lower back or knee soreness that worsens with cold", "腰膝痠軟，遇冷加重", "腰や膝のだるさが寒さで悪化"),
            l("Have a personal vendetta against whoever invented air conditioning", "對發明冷氣的人有私人恩怨", "エアコンを発明した人に個人的な恨みがある"),
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
            "Western medicine says \"just dress warmer\" or checks your thyroid. If your thyroid panel comes back normal, you're told there's nothing wrong. But TCM says the problem isn't the external temperature — it's your body's internal heating capacity. Your Yang is low, meaning your body can't generate and maintain its own warmth. Warming foods don't just feel nice — they literally add Yang energy to your system, stoking the fire from within.",
            "西醫會說「多穿點」或檢查甲狀腺。如果甲狀腺指標正常，醫生會說你沒問題。但中醫說問題不在外部溫度 — 而是你身體內部的產熱能力。你的陽氣不足，意味著身體無法自行產生和維持溫暖。溫熱性食物不只是感覺舒服 — 它們真正為你的系統補充陽氣，從內部點火。",
            "西洋医学は「もっと厚着を」と言うか、甲状腺を検査します。甲状腺の数値が正常なら、問題ないと言われます。しかし中医学は、問題は外部の気温ではなく、体の内部の発熱能力だと言います。陽気が不足している、つまり体が自らの温かさを生み出し維持できないのです。温性食材は単に心地よいだけでなく — 文字通り陽のエネルギーを体に加え、内側から火を起こします。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Yang Deficiency", "陽虛體質的食物：該吃與不該吃", "陽虚を助ける（悪化させる）食材")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("✓ Warming Foods", "✓ 溫熱食物", "✓ 温性食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Ginger", "生薑", "しょうが"),
                l("Cinnamon", "肉桂", "シナモン"),
                l("Lamb", "羊肉", "羊肉"),
                l("Beef", "牛肉", "牛肉"),
                l("Black pepper", "黑胡椒", "黒胡椒"),
                l("Roasted nuts", "烤堅果", "ローストナッツ"),
                l("Fennel", "茴香", "フェンネル"),
                l("Onion", "洋蔥", "玉ねぎ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("✗ Cooling Foods", "✗ 寒涼食物", "✗ 寒性食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Raw salads", "生沙拉", "生野菜サラダ"),
                l("Ice water", "冰水", "氷水"),
                l("Watermelon", "西瓜", "スイカ"),
                l("Cucumber", "黃瓜", "きゅうり"),
                l("Cold smoothies", "冰沙", "冷たいスムージー"),
                l("Excessive tropical fruits", "過量熱帶水果", "過度な熱帯果物"),
                l("Mint", "薄荷", "ミント"),
                l("Tofu", "豆腐", "豆腐"),
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
            "This information is for wellness and self-awareness, not medical diagnosis. If your cold intolerance is severe, sudden, or accompanied by significant weight changes, heart palpitations, or extreme fatigue, please consult a licensed healthcare provider immediately. Thyroid disorders and other conditions can mimic Yang Deficiency patterns.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的怕冷嚴重、突然發生，或伴隨明顯體重變化、心悸、極度疲勞，請立即諮詢合格醫療專業人員。甲狀腺疾病等狀況可能與陽虛表現相似。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。寒がりが激しい、突然、著しい体重変化、動悸、極度の疲労を伴う場合は、直ちに医療専門家にご相談ください。甲状腺障害などの疾患は陽虚のパターンと似ることがあります。"
          )}
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">
          {l(
            "Cold hands, frequent urination, and aversion to cold are key signs of the Yang Deficient body type.",
            "手腳冰冷、頻尿、怕冷是陽虛體質的關鍵信號。",
            "冷たい手足、頻尿、寒さへの嫌悪は陽虚タイプの主要なサインです。"
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
