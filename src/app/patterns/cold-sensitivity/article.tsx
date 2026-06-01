"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function ColdSensitivityArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "cold-sensitivity"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Patterns", "模式", "パターン")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Cold Sensitivity", "怕冷", "冷え性")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Cold Sensitivity Pattern: Why Your Inner Furnace Is Underpowered",
          "怕冷體質：為什麼你的內在火爐動力不足",
          "冷え性パターン：内側の暖炉の出力が低い理由"
        )}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {l("9 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約9分鐘 · 基於3000年東方身體智慧", "約9分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You're wearing a jacket indoors. Your hands are ice cubes. You sleep with socks on even in summer. Everyone else says the room is fine, and you're starting to wonder if something is wrong with you.",
            "你在室內穿外套。手像冰塊。夏天也穿襪子睡覺。別人說房間溫度正常，你開始懷疑是不是自己有問題。",
            "室内でジャケットを着ている。手が氷塊。夏でも靴下を履いて寝る。他の人が部屋は快適だと言う。自分に何か問題があるのか疑い始めている。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Here's the thing: your blood work is probably fine. Your thyroid is normal. Your circulation tests come back clear. But you're still cold. All the time. That gap between \"normal test results\" and \"I'm freezing\" is exactly where Eastern body wisdom has something useful to say.",
            "事實是：你的血液檢查可能正常。甲狀腺正常。循環檢查沒問題。但你還是冷。一直冷。「正常檢查結果」和「我快凍死了」之間的鴻溝，正是東方身體智慧有話說的地方。",
            "実は：血液検査はおそらく正常。甲状腺も正常。循環検査も問題なし。でもまだ寒い。ずっと。「正常な検査結果」と「凍えそう」のギャップこそ、東洋の体の知恵が役立つ場所です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "In Traditional Chinese Medicine, this pattern of chronic cold sensitivity is called Yang Deficiency. In everyday language, we call it the Cold Sensitivity pattern. Your body has a heating system, but it's running on low power.",
            "在中醫裡，這種長期怕冷的模式叫陽虛。用日常的話說，我們叫它怕冷體質。你的身體有暖氣系統，但在低功率運行。",
            "伝統的な中国医学では、この慢性的な寒がりのパターンを陽虚と呼びます。日常的な言葉で言えば、冷え性パターンです。体には暖房システムがあるが、低出力で稼働しています。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What the Cold Sensitivity Pattern Looks Like", "怕冷體質長什麼樣", "冷え性パターンはどんな感じか")}
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
            l("Your hands and feet are often cold, especially in winter", "手腳常常冰冷，尤其是冬天", "手足がよく冷たい、特に冬"),
            l("You prefer hot food and drinks over cold ones", "偏好熱食熱飲，不愛冷的", "冷たいものより温かい食事・飲み物が好き"),
            l("You feel worse in cold or damp weather", "冷或潮濕的天氣讓你更不舒服", "寒さや湿気で調子が悪くなる"),
            l("You urinate frequently, especially at night", "頻尿，尤其是夜間", "トイレが近い、特に夜"),
            l("Your lower back or knees feel sore and worse with cold", "腰膝酸痛，遇冷加重", "腰や膝がだるく、冷えると悪化"),
            l("You have slow digestion and feel heavy after meals", "消化慢，飯後覺得沉重", "消化が遅く、食後重く感じる"),
            l("You have a personal vendetta against whoever invented air conditioning", "你跟發明冷氣的人有私人恩怨", "エアコンを発明した人を個人的に許していない"),
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
            "Your body is a house. Yang is the heating system. When the furnace is underpowered, it keeps the living room warm but the bedrooms stay freezing. No amount of blankets fixes a broken furnace. You need to turn up the heat from the inside.",
            "你的身體是一棟房子。陽是暖氣系統。火爐功率不足時，客廳暖但臥室冰。蓋再多的被子也修不好火爐。你需要從內部升溫。",
            "体は家のようなもの。陽は暖房システム。暖炉の出力が足りないと、リビングは暖かいが寝室は寒いまま。布団を何枚かけても壊れた暖炉は直らない。内側から熱を上げる必要があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This is why putting on more layers or turning up the thermostat helps temporarily but never solves the problem. The cold is coming from inside, not outside. You need to stoke your internal furnace, and food is the fuel.",
            "這就是為什麼多穿衣服或調高溫度暫時有幫助但永遠不解決問題。冷是從裡面來的，不是外面。你需要點燃內在的火爐，而食物就是燃料。",
            "だから服を重ねたりサーモスタットを上げても一時的にしか効かず、問題は解決しない。寒さは外からではなく内側から来ている。内側の暖炉を火起こしする必要があり、食べ物が燃料です。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The TCM Concept Behind This Pattern", "這個模式背後的中醫概念", "このパターンの背後にある中医学の概念")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine calls this Yang Deficiency (阳虚, pronounced \"yang-shoo\"). Yang is your body's warming, activating force — your internal furnace. When Yang is low, your body prioritizes keeping your core organs warm and cuts circulation to your extremities. That's why your hands and feet get cold first.",
            "中醫稱之為陽虛（阳虚）。陽是你身體的溫暖和活化力量 — 你的內在火爐。陽低時，身體優先保持核心器官的溫暖，減少四肢的循環。這就是為什麼手腳先冷。",
            "中医学ではこれを陽虚（ようきょ）と呼びます。陽とは体を温め活性化する力 — 内側の暖炉。陽が低いと、体は核心臓器の保温を優先し、四肢の循環を減らします。だから手足が先に冷たくなるのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Yang Deficiency can develop from prolonged exposure to cold environments, eating too many cold and raw foods over time, recovering from illness that depleted your reserves, or a constitutional tendency you were born with. Like Qi, Yang can be supported and strengthened through warming foods and lifestyle habits.",
            "陽虛可能來自長期處於寒冷環境、長期吃太多生冷食物、生病後儲備耗盡、或天生體質傾向。跟氣一樣，陽可以通過溫性食物和生活習慣來支持和加強。",
            "陽虚は長期間の寒い環境への露出、長期的な冷たい生食の摂取、病後の蓄えの消耗、または生まれつきの体質的傾向から発展する可能性があります。気と同様に、陽は温性食材と生活習慣でサポート・強化できます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Warming Foods That May Help (and Cooling Foods to Limit)", "可能有幫助的溫性食物（和應限制的寒性食物）", "役立つ温性食材（と控えるべき冷性食材）")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("Warming Foods", "溫性食物", "温性食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Ginger", "生薑", "しょうが"),
                l("Cinnamon", "肉桂", "シナモン"),
                l("Lamb", "羊肉", "羊肉"),
                l("Beef", "牛肉", "牛肉"),
                l("Onion and leek", "洋蔥與韭菜", "玉ねぎとニラ"),
                l("Walnuts", "核桃", "クルミ"),
                l("Black pepper", "黑胡椒", "黒胡椒"),
                l("Roasted nuts", "烤堅果", "ローストナッツ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("Cooling Foods to Limit", "應限制的寒性食物", "控えるべき冷性食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Ice water and cold drinks", "冰水和冷飲", "氷水と冷たい飲み物"),
                l("Raw vegetables", "生蔬菜", "生野菜"),
                l("Watermelon", "西瓜", "スイカ"),
                l("Excessive fruit", "過量水果", "過度な果物"),
                l("Seaweed", "海藻", "海藻"),
                l("Excessive green tea", "過量綠茶", "緑茶の飲みすぎ"),
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
            "Start adding warming ingredients to your meals. A slice of fresh ginger in hot water is the simplest starting point. Add cinnamon to your oatmeal. Use black pepper liberally. These small additions stack up over time.",
            "開始在餐點裡加溫性食材。一片新鮮薑泡熱水是最簡單的起點。燕麥裡加肉桂。大方使用黑胡椒。這些小的添加隨時間累積。",
            "食事に温性食材を加え始めてください。湯切り生姜スライスが最もシンプルな出発点。オートミールにシナモン。黒胡椒をたっぷり。これらの小さな追加は時間とともに積み重なります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Avoid cold and raw foods as much as possible. If you love salads, try lightly stir-frying or blanching your vegetables instead. The difference in how your body processes warm food versus cold food is significant when you're already running low on Yang.",
            "盡量避免寒涼生食。如果你愛沙拉，試試輕炒或燙青菜代替。當你陽氣不足時，身體處理溫食和冷食的差異是顯著的。",
            "冷たい生食をできるだけ避けてください。サラダが好きなら、軽く炒めるか湯通ししてみてください。すでに陽が不足している場合、体が温かい食べ物と冷たい食べ物を処理する違いは大きいです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Warm baths and foot soaks are not just pampering in TCM — they're practical tools. Soaking your feet in warm water with a handful of ginger slices for 15 minutes before bed can help stoke your Yang energy overnight.",
            "在中醫裡，溫水澡和泡腳不只是享受 — 是實用工具。睡前用一把薑片泡腳15分鐘可以幫助夜間補充陽氣。",
            "温かいお風呂と足湯は中医学では贅沢ではなく実用的なツールです。寝る前にしょうがのスライスを一掴み入れたお湯で15分足を浸けると、夜間の陽のエネルギーをサポートできます。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Cold extremities can also be caused by Raynaud's, thyroid issues, or circulatory problems. If your fingers turn white or blue, or if coldness is sudden and one-sided, consult a licensed healthcare provider immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。手腳冰冷也可能是雷諾氏症、甲狀腺問題或循環問題。如果手指變白或變藍，或冰冷是突然且單側的，請立即諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。冷えはレイノー現象、甲状腺の問題、循環器の問題が原因の場合もあります。指が白や青になる、突然の片側の冷えがある場合は、直ちに医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <p className="text-text2 text-sm mb-3">
          {l(
            "These symptom guides explore specific signs connected to the Cold Sensitivity pattern:",
            "這些症狀指南探討與怕冷體質相關的具體信號：",
            "これらの症状ガイドは冷え性パターンに関連する具体的なサインを探ります："
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-cold" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Cold?", "為什麼我總是冷？", "なぜいつも寒いのか？")}
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            {l("Why Do I Wake Up at 3AM?", "為什麼我凌晨三點會醒？", "なぜ午前3時に目が覚める？")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Body Type", "相關體質", "関連する体質")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Yang Deficient Type →", "陽虛體質 →", "陽虚タイプ →")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
