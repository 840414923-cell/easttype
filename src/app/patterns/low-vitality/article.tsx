"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function LowVitalityArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "low-vitality"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Patterns", "模式", "パターン")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Low Vitality", "低活力", "低活力")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Low Vitality Pattern: Why Your Battery Never Reaches Full",
          "低活力體質：為什麼你的電池永遠充不滿",
          "低活力パターン：バッテリーが満タンにならない理由"
        )}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {l("9 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約9分鐘 · 基於3000年東方身體智慧", "約9分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Some people wake up tired. They sleep 8 hours and still feel like they didn't sleep at all. They drag themselves through the morning, hit a wall around 2 PM, and by evening they're running on fumes. It's not laziness. It's not depression. Something deeper is going on.",
            "有些人醒來就累。睡8小時還是覺得沒睡。早上拖著身體，下午兩點撞牆，晚上靠意志力撐。不是懶。不是憂鬱。有更深的東西在發生。",
            "目覚めた時から疲れている人がいます。8時間寝ても全く寝ていない気がする。朝を引きずり、午後2時に壁にぶつかり、夜は気力だけで動いている。怠けではない。うつでもない。もっと深いところで何かが起きている。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Traditional Chinese Medicine, this cluster of symptoms — chronic fatigue, low energy, afternoon crashes, and low motivation — forms a pattern. It's not random. These symptoms show up together so often that Chinese medicine gave them a name: Qi Deficiency. In everyday language, we call it the Low Vitality pattern.",
            "在中醫裡，這一群症狀 — 慢性疲勞、低能量、下午崩潰、動力不足 — 形成一個模式。不是隨機的。這些症狀經常一起出現，中醫給了它們一個名字：氣虛。用日常的話說，我們叫它低活力體質。",
            "伝統的な中国医学では、この症状のグループ — 慢性疲労、低エネルギー、午後の低下、モチベーション不足 — がパターンを形成します。ランダムではありません。これらの症状は一緒に現れることが多く、中医学は「気虚」と名付けました。日常的な言葉で言えば、低活力パターンです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What the Low Vitality Pattern Looks Like", "低活力體質長什麼樣", "低活力パターンはどんな感じか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Most people with this pattern recognize 3 or more of these signs:",
            "這種體質的人通常認同3項以上：",
            "このパターンの人は通常3つ以上共感します："
          )}
        </p>
        <ul className="space-y-2">
          {[
            l("You're tired even after a full night's sleep", "睡滿了還是累", "十分眠ても疲れている"),
            l("You hit a wall every afternoon around 2 to 3 PM", "每天下午兩三點撞牆", "毎日午後2〜3時に壁にぶつかる"),
            l("Your motivation is low even for things you enjoy", "連喜歡的事都提不起勁", "好きなことへのモチベーションも低い"),
            l("Your voice is soft and you talk less than you think", "聲音輕柔，想的比說的多", "声が小さく、話すより考える方が多い"),
            l("You catch colds more easily than others around you", "比周圍的人更容易感冒", "周りの人より風邪を引きやすい"),
            l("You sweat easily, even with light activity", "稍微活動就出汗", "少し動くとすぐ汗をかく"),
            l("You've drafted your resignation in your head by 10 AM every Monday", "每週一早上十點就在心裡寫辭職信", "毎週月曜10時には心の中で退職届を書いている"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Think of It Like This", "這樣理解", "こう考えてみてください")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Imagine your body is a phone. Western medicine checks if the screen is broken. Chinese medicine checks the battery. The Low Vitality pattern means your battery is at 5%. The phone still works, but everything is slow, the screen dims, and it shuts down unexpectedly.",
            "想像你的身體是手機。西醫檢查螢幕有沒有壞。中醫檢查電池。低活力體質就是你的電池只剩5%。手機還能用，但一切都很慢，螢幕變暗，還會突然關機。",
            "体をスマホだと想像してください。西洋医学は画面が壊れていないか確認します。中医学はバッテリーを確認します。低活力パターンはバッテリーが5%という意味。スマホは機能するが、全てが遅く、画面が暗くなり、突然シャットダウンします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "No amount of closing apps fixes a small battery. You need to charge it properly, with the right charger, for long enough. In TCM terms, that means eating the right foods, getting enough rest, and avoiding things that drain your Qi further.",
            "關再多app也修不好小電池。你需要用正確的充電器，充夠時間。用中醫的話說，就是吃對食物、充分休息、避開進一步消耗氣的事情。",
            "アプリをいくつ閉じても小さいバッテリーは直りません。正しい充電器で、十分な時間充電する必要があります。中医学で言えば、正しい食材を食べ、十分休み、気をさらに消耗するものを避けることです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The TCM Concept Behind This Pattern", "這個模式背後的中醫概念", "このパターンの背後にある中医学の概念")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine calls this Qi Deficiency (气虚, pronounced \"chee-shoo\"). Qi is your body's vital energy — the fuel that powers everything from digestion to clear thinking. When Qi is low, nothing breaks exactly, but everything costs more energy than it should.",
            "中醫稱之為氣虛（气虚）。氣是你身體的生命能量 — 驅動從消化到清晰思考一切的燃料。氣低時，東西不會壞，但每件事都比別人費力。",
            "中医学ではこれを気虚（ききょ）と呼びます。気とは体の生命エネルギー — 消化から明確な思考まで全てを動かす燃料。気が低いと、何か壊れるわけではないが、全てに人より多くのエネルギーが必要になります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Qi Deficiency often develops slowly. Months of stress, recovering from an illness that your body never fully bounced back from, eating too many cold and raw foods, or simply a constitutional tendency you were born with. The good news is that Qi can be rebuilt over time with the right approach.",
            "氣虛通常發展得很慢。幾個月的壓力、生病後身體沒完全恢復、吃了太多生冷食物、或單純是天生的體質傾向。好消息是，氣可以通過正確的方法隨時間重建。",
            "気虚は通常ゆっくり発展します。数ヶ月のストレス、体が完全に回復しきっていない病後、冷たい生食の摂りすぎ、または生まれつきの体質的傾向。良いニュースは、正しいアプローチで気は時間をかけて再構築できることです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That May Help (and Harm)", "可能有幫助的食物（和有害的）", "役立つ食材（と悪い食材）")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("Qi-Supporting Foods", "補氣食物", "気を補う食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Congee (rice porridge)", "米粥", "お粥"),
                l("Jujube dates (red dates)", "紅棗", "なつめ"),
                l("Sweet potato", "地瓜", "さつまいも"),
                l("Ginger tea", "薑茶", "しょうが茶"),
                l("Goji berries", "枸杞", "クコの実"),
                l("Chicken broth", "雞湯", "鶏スープ"),
                l("Chinese yam", "山藥", "長芋"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("Qi-Draining Foods", "耗氣食物", "気を消耗する食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Ice water and cold drinks", "冰水和冷飲", "氷水と冷たい飲み物"),
                l("Raw salads", "生沙拉", "生野菜サラダ"),
                l("Excessive caffeine", "過量咖啡因", "過度なカフェイン"),
                l("Cold smoothies", "冰沙", "冷たいスムージー"),
                l("Bitter melon", "苦瓜", "ゴーヤ"),
                l("Excessive raw food", "過量生食", "過度な生食"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Simple Changes That May Help", "可能有幫助的簡單改變", "役立つかもしれないシンプルな変化")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Start your day with congee instead of dry cereal. Congee is the number one recovery food in Chinese households because it takes almost zero digestive effort and delivers steady nourishment. Add warm ginger tea with a few jujube dates on the side.",
            "用粥代替乾麥片開始你的一天。粥是中國家庭頭號恢復食物，因為幾乎不需要消化努力，提供穩定營養。加溫薑茶配幾顆紅棗。",
            "乾燥したシリアルの代わりにお粥で一日を始めてください。お粥は中国家庭でNo.1の回復食です。ほぼ消化の労力なしで安定した栄養を届けます。温かいしょうが茶となつめを添えて。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Cut back on caffeine. TCM views coffee as borrowing energy from tomorrow to spend today. It doesn't create new Qi. Over time, the debt catches up. Try replacing some cups with warm ginger tea or ginseng tea.",
            "減少咖啡因。中醫認為咖啡是借明天的能量花今天。不創造新氣。長期下來債務會追上你。試試用溫薑茶或人參茶替換。",
            "カフェインを減らしてください。中医学ではコーヒーは明日のエネルギーを借りて今日使うと考えます。新しい気を作るわけではない。長期的に借金が追いつきます。温かいしょうが茶や人参茶に替えてみてください。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Move gently. Heavy workouts can drain Qi further if you're already depleted. Walking, gentle yoga, tai chi, or 15 minutes of slow stretching. The goal is circulation, not exhaustion.",
            "輕柔運動。已經虛了再做劇烈運動會進一步消耗氣。散步、輕柔瑜伽、太極或15分鐘慢伸展。目標是循環，不是精疲力竭。",
            "優しく動いてください。すでに消耗している場合、激しい運動は気をさらに奪います。散歩、軽いヨガ、太極拳、15分のゆっくりストレッチ。目標は循環で、疲労困憊ではありません。"
          )}
        </p>
      </section>

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

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <p className="text-text2 text-sm mb-3">
          {l(
            "These symptom guides explore specific signs connected to the Low Vitality pattern:",
            "這些症狀指南探討與低活力體質相關的具體信號：",
            "これらの症状ガイドは低活力パターンに関連する具体的なサインを探ります："
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Tired?", "為什麼我總是累？", "なぜいつも疲れているのか？")}
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Sleepy?", "為什麼我總是想睡？", "なぜいつも眠いのか？")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Body Type", "相關體質", "関連する体質")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Qi Deficient Type →", "氣虛體質 →", "気虚タイプ →")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
