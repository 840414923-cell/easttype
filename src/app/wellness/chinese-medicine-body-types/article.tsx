"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"

const TYPE_SUMMARY: Record<ConstitutionId, { en: { name: string; desc: string; key: string }; zh: { name: string; desc: string; key: string }; ja: { name: string; desc: string; key: string } }> = {
  balanced: { en: { name: "The Still Lake", desc: "Self-regulating, steady energy, emotionally resilient. The rare baseline — only ~30% of people.", key: "Sleeps well, adapts easily, rarely sick" }, zh: { name: "平和質", desc: "自我調節、能量穩定、情緒韌性強。罕見基準體質，約30%的人。", key: "睡得好、適應力強、很少生病" }, ja: { name: "平和質", desc: "自己調節、安定エネルギー、感情的回復力。稀な基準体質、約30%", key: "よく眠れ、適応力強、病気になりにくい" } },
  qi_deficient: { en: { name: "The Gentle Breeze", desc: "Engine runs but the tank is always low. Everything costs more energy than it should.", key: "Always tired, soft voice, easy sweating" }, zh: { name: "氣虛質", desc: "引擎在轉但油箱永遠是低的。每件事都比別人多花力氣。", key: "總是累、聲音輕、容易出汗" }, ja: { name: "気虚質", desc: "エンジンは回るがタンクはいつも空。全てに人より多くのエネルギーを要する。", key: "いつも疲れ、声小さく、汗かきやすい" } },
  yang_deficient: { en: { name: "The Moonlit Garden", desc: "Inner furnace is underpowered. Cold extremities, prefers warmth, sunlight is medicine.", key: "Cold hands/feet, prefers heat, frequent urination" }, zh: { name: "陽虛質", desc: "內在火爐功率不足。四肢冰冷、偏好溫暖、陽光就是藥。", key: "手腳冰冷、偏好熱、頻尿" }, ja: { name: "陽虚質", desc: "内側暖炉の出力不足。手足が冷たい、温かいもの好き、日光が薬。", key: "手足が冷たい、温かいもの好き、頻尿" } },
  yin_deficient: { en: { name: "The Volcanic Spring", desc: "Calm surface, volcanic inside. Heat builds up internally without enough cooling moisture.", key: "Night heat, dry mouth, insomnia" }, zh: { name: "陰虛質", desc: "表面平靜，內在火山。內熱堆積，缺乏足夠的降溫潤澤。", key: "夜間發熱、口乾、失眠" }, ja: { name: "陰虚質", desc: "表面穏やか、中は火山。内熱が蓄積、冷却・潤いが不足。", key: "夜のほてり、口渇、不眠" } },
  phlegm_damp: { en: { name: "The Mossy Stone", desc: "Holds moisture like a sponge. Mind is sharp but body moves at its own leisurely pace.", key: "Heavy feeling, weight gain, sluggish mornings" }, zh: { name: "痰濕質", desc: "像海綿留住水分。腦子靈光但身體有自己的慢節奏。", key: "身體沉重、易胖、早上遲緩" }, ja: { name: "痰湿質", desc: "スポンジのように水分を抱え込む。頭は冴えて体は独自のゆっくりペース。", key: "体が重い、太りやすい、朝だるい" } },
  damp_heat: { en: { name: "The Summer Storm", desc: "Intensity is the default setting. Sticky warmth inside, skin reactions, irritability in heat.", key: "Hot/sticky feeling, acne, irritability" }, zh: { name: "濕熱質", desc: "強烈是出廠設定。體內黏膩溫熱、皮膚反應、遇熱煩躁。", key: "又熱又黏、長痘、遇熱煩躁" }, ja: { name: "湿熱質", desc: "激しさがデフォルト。内側ネバネバ温かく、肌反応、暑さでイライラ。", key: "暑くネバネバ、ニキビ、暑さでイライラ" } },
  blood_stasis: { en: { name: "The Frozen Stream", desc: "Everything flows, just not fast enough. Sluggish circulation, easy bruising, emotional holding.", key: "Easy bruising, dark spots, fixed pain" }, zh: { name: "血瘀質", desc: "一切在流只是不夠快。循環遲緩、易瘀青、情感上放不下。", key: "易瘀青、暗沉斑、固定鈍痛" }, ja: { name: "血瘀質", desc: "全て流れるが速さが足りない。循環の滞り、あざやすい、感情的執着。", key: "あざやすい、シミ、固定痛" } },
  qi_stagnant: { en: { name: "The Clouded Peak", desc: "Mind races while body stalls. Energy builds up but can't flow freely. Tension, sighing, mood swings.", key: "Chest tightness, frequent sighing, mood swings" }, zh: { name: "氣鬱質", desc: "腦子狂奔身體卡住。能量堆積但無法自由流動。緊。緊繃、嘆息、情緒起伏。", key: "胸悶、常嘆息、情緒起伏" }, ja: { name: "気鬱質", desc: "頭は猛スピード、体はストップ。エネルギー蓄積、自由に流れない。緊張、ため息、気分の波。", key: "胸苦しい、ため息、気分の波" } },
  sensitive: { en: { name: "The Wild Orchid", desc: "Feels everything everyone else doesn't. Extraordinary sensory perception, allergies, emotional depth.", key: "Allergies, strong reactions, emotional sensitivity" }, zh: { name: "特稟質", desc: "感受到別人感受不到的一切。非凡的感官感知、過敏、情感深度。", key: "過敏、反應強烈、情感敏感" }, ja: { name: "特稟質", desc: "他人が感じないものを全て感じる。並外れた感覚知覚、アレルギー、感情の深さ。", key: "アレルギー、強い反応、感情的敏感" } },
}

export default function BodyTypesArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const getSummary = (id: ConstitutionId) => {
    const s = TYPE_SUMMARY[id]
    return locale.code === "zh-TW" ? s.zh : locale.code === "ja" ? s.ja : s.en
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Wellness", "養生", "ウェルネス")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Chinese Medicine Body Types", "中醫體質分類", "中医学の体質タイプ")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("The 9 Chinese Medicine Body Types — A Complete Guide", "中醫9種體質 — 完整指南", "中医学の9つの体質 — 完全ガイド")}
      </h1>
      <p className="text-text2 text-sm mb-6">{l("10 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約10分鐘 · 基於3000年東方身體智慧", "約10分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-2">
          {l("TL;DR", "重點摘要", "要約")}
        </h2>
        <ul className="text-text2 text-sm space-y-1.5">
          {[
            l("Chinese medicine identifies 9 distinct body constitutions — each with unique physical patterns, emotional tendencies, and dietary needs", "中醫識別出9種不同的體質 — 每種有獨特的身體模式、情緒傾向和飲食需求", "中医学は9つの異なる体質を識別 — それぞれ独自の身体パターン、感情的傾向、食事のニーズがある"),
            l("Unlike Ayurveda's 3 doshas, this system offers more precise personalization for diet, lifestyle, and wellness strategies", "與阿育吠陀的3種體質不同，這個體系在飲食、生活習慣和養生策略上提供更精確的個人化", "アーユルヴェーダの3ドーシャと異なり、このシステムは食事、ライフスタイル、ウェルネス戦略により精密なパーソナライズを提供"),
            l("Most people are a mix — one dominant type with influences from 1-2 others, which can shift with age, season, and lifestyle", "大多數人是混合型 — 一種主導體質加上1-2種其他體質的影響，會隨年齡、季節和生活方式變化", "多くの人はミックス型 — 1つの優勢体質と1-2つの他の体質の影響を持ち、年齢、季節、ライフスタイルで変化する"),
            l("Knowing your type helps you choose foods that support your body and avoid those that create imbalance", "了解你的體質幫你選擇支持身體的食物，避開造成失衡的食物", "自分の体質を知ることで、体を支える食材を選び、不調を招く食材を避けるのに役立つ"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent/60 mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "You've probably heard of Ayurveda's three doshas — Vata, Pitta, Kapha. But Chinese medicine has a more nuanced system: 9 body constitutions, each with distinct physical patterns, emotional tendencies, and ideal foods. This framework has been refined in wellness clinics across Asia for over 3,000 years.",
            "你可能聽過阿育吠陀的三種體質 — Vata、Pitta、Kapha。但中醫有更精密的體系：9種體質，每種有獨特的身體模式、情緒傾向和理想食物。這個框架在亞洲診所裡已經淬鍊了3000多年。",
            "アーユルヴェーダの3つのドーシャ — ヴァータ、ピッタ、カパ — は聞いたことがあるでしょう。しかし中医学にはより精緻なシステムがあります：9つの体質、それぞれに独自の身体パターン、感情的傾向、理想的食材があります。このフレームワークは3,000年以上アジアのクリニックで磨かれてきました。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "The thing is, most people don't fit neatly into just one category. You might recognize yourself in 2 or 3 of these types — that's completely normal. One is usually dominant, shaping your baseline tendencies, while others show up as secondary influences. Think of it like a color palette: you have a primary hue, but there are undertones that shift how it appears in different lights.",
            "問題是，大多數人不會剛好只符合一種類型。你可能會在2或3種類型裡認出自己 — 那完全正常。通常有一種是主導的，塑造你的基本傾向，其他則是次要影響。就像調色盤：你有主色調，但有些底色會在不同光線下改變它的呈現。",
            "実は、ほとんどの人は1つのカテゴリーにきれいに当てはまるわけではありません。2つか3つのタイプに自分を見出すかもしれません — それは完全に正常です。通常1つが優勢で、基本傾向を形作り、他は二次的な影響として現れます。パレットのようなもの：主色があるが、異なる光の下で見え方を変える下地色がある。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{l("Why 9 Types Matter: More Nuance, Better Guidance", "為什麼9種體質重要：更多層次，更好的指引", "なぜ9タイプが重要か：より微妙に、より良い指導")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "You might wonder: why does Chinese medicine need 9 types when Ayurveda works with just 3? It's a fair question. The answer comes down to precision. Think about it this way — if you were trying to understand the weather, you could work with three categories (hot, cold, mild) and get a rough sense of what to wear. Or you could use a more detailed system that accounts for humidity, wind, seasonal shifts, and time of day. Both work. One just gives you better information to work with.",
            "你可能會想：阿育吠陀只用3種就夠了，為什麼中醫需要9種？這是個合理的問題。答案在於精確度。這樣想吧 — 如果你想了解天氣，你可以用三個類別（熱、冷、溫和）來大致知道該穿什麼。或者你可以用更詳細的系統，考慮濕度、風、季節變化和一天中的時間。兩者都行。只是其中一個給你更好的資訊來做決定。",
            "思うかもしれません：アーユルヴェーダは3つで十分なのに、なぜ中医学には9タイプ必要なのか？もっともな質問です。答えは精度にあります。こう考えてみてください — 天気を理解しようとするなら、3つのカテゴリー（暑い、寒い、穏やか）で何を着るか大まかに分かります。または湿度、風、季節の変化、時間帯を考慮した詳細なシステムを使うこともできる。どちらも機能する。ただ片方は、より良い情報を提供する。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "In practical terms, this means more personalized recommendations. A Qi Deficient person and a Yang Deficient person might both feel tired, but the root cause is different — and so are the solutions. One needs energy-building foods; the other needs warming foods. Same symptom, different engine under the hood. The 9-type system helps you see that difference and address it more precisely.",
            "實際上，這意味著更個人化的建議。氣虛的人和陽虛的人可能都覺得累，但根本原因不同 — 解決方法也不同。一個需要補氣的食物；另一個需要溫熱的食物。同樣的症狀，不同的引擎。9種體質的系統幫你看見差異，更精確地處理。",
            "実践的には、よりパーソナライズされた推奨を意味します。気虚の人と陽虚の人はどちらも疲れを感じるかもしれませんが、根本原因は異なり — 解決策も異なります。一方は気を養う食材が必要、他方は温める食材が必要。同じ症状、異なるエンジン。9タイプのシステムはその違いを見せ、より正確に対処するのに役立ちます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't about one system being \"better\" than another. Both Ayurveda and Chinese medicine have been tested across millions of lives over thousands of years. They're just different maps for the same territory. Some people resonate more with the Ayurvedic framework; others find the Chinese medicine approach more intuitive. There's no wrong choice — just different lenses for understanding your body.",
            "這不是說哪個體系「更好」。阿育吠陀和中醫都經過數千年、數百萬人的驗證。它們只是同一塊土地的不同地圖。有些人更認同阿育吠陀的框架；有些人覺得中醫的方法更直觀。沒有錯誤的選擇 — 只是理解身體的不同鏡頭。",
            "これはどちらかのシステムが「優れている」ということではありません。アーユルヴェーダも中医学も、何千年も何百万人もの人生で検証されてきました。同じ領域の異なる地図のようなもの。アーユルヴェーダの枠組みに共鳴する人もいれば、中医学のアプローチがより直感的だと感じる人もいる。間違った選択はない — 体を理解するための異なるレンズがあるだけ。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{l("The 9 Types at a Glance", "9種體質速覽", "9つの体質一覧")}</h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Each type has a poetic name that captures its essence, along with practical signs you can recognize in yourself. Remember: most people are a mix, so you might see yourself in several of these.",
            "每種體質都有一個詩意的名字來捕捉其精髓，以及你可以在自己身上辨認的實際跡象。記住：大多數人是混合型，所以你可能會在好幾種裡看到自己。",
            "各タイプには本質を捉えた詩的な名前と、自分で認識できる実践的なサインがあります。覚えておいて：多くの人はミックス型なので、いくつかに自分を見出すかもしれません。"
          )}
        </p>
        <div className="space-y-4">
          {Object.entries(TYPES).map(([id, t]) => {
            const summary = getSummary(id as ConstitutionId)
            return (
              <div key={id} className="border border-border rounded-xl p-4 bg-cream/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold" style={{ color: t.color }}>{summary.name}</span>
                  <span className="text-xs text-text2">{t.pct}</span>
                </div>
                <p className="text-sm text-text2 leading-relaxed mb-2">{summary.desc}</p>
                <p className="text-xs text-text2/70">{l("Key signs:", "關鍵信號：", "主要サイン：")} {summary.key}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("How to Identify Your Type", "如何辨識你的體質", "自分の体質を見分ける方法")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "You don't need a doctor to get a rough sense of your constitution. The body is constantly broadcasting signals — you just need to know what to listen for. Here's what practitioners look for, and what you can observe yourself.",
            "你不需要醫生就能大致了解自己的體質。身體不斷發送信號 — 你只需要知道該聽什麼。以下是專業者關注的事，以及你可以自己觀察的事。",
            "体質の大まかな感覚を得るのに医師は必要ありません。体は常に信号を発しています — 何に耳を傾けるべきか知るだけです。以下は専門家が見るものと、自分で観察できるものです。"
          )}
        </p>
        <div className="space-y-4">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("Physical Signs", "身體跡象", "身体的サイン")}</h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Start with the basics: Are you usually cold or warm? Do you sweat easily or rarely? How's your energy — steady, or does it crash in the afternoon? What about your digestion — comfortable after meals, or bloated and heavy? These seem like small details, but together they paint a picture of your internal landscape.",
                "從基本開始：你通常怕冷還是怕熱？容易出汗還是很少出汗？精力如何 — 穩定還是下午就崩盤？消化呢 — 飯後舒服還是脹氣沉重？這些看起來是小細節，但加起來描繪出你內在的風景。",
                "基本から始めましょう：普段寒がりですか、暑がりですか？汗をかきやすいですか、あまりかかないですか？エネルギーはどう — 安定している、それとも午後にクラッシュする？消化は — 食後に快適、それとも膨満感や重さがある？これらは小さな詳細に見えますが、一緒になると内側の風景を描き出します。"
              )}
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("Emotional Patterns", "情緒模式", "感情的パターン")}</h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Your emotional tendencies are just as revealing. Do you tend toward worry, or anger, or sadness? How do you handle stress — do you push through, or shut down? Some types are naturally more resilient; others feel everything deeply. Neither is better — they're just different operating systems.",
                "你的情緒傾向同樣有啟發性。你傾向於擔於擔憂、憤怒還是悲傷？你如何處理壓力 — 硬撐還是關機？有些體質天生更有韌性；其他的感受一切很深。沒有哪個更好 — 它們只是不同的作業系統。",
                "感情的傾向も同様に示唆に富みます。心配、怒り、悲しみのどれに傾きますか？ストレスへの対処法は — 押し通す、それともシャットダウンする？あるタイプは自然と回復力があり、他は全てを深く感じる。どちらが良いというわけではない — 単に異なるオペレーティングシステムなだけ。"
              )}
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("Food Responses", "食物反應", "食べ物への反応")}</h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Pay attention to how different foods make you feel. Does spicy food energize you or make you irritable? Do you feel heavy after dairy, or fine? Does a warm soup comfort you more than a cold salad? Your body's responses to food are some of the clearest signals about your constitution.",
                "注意不同食物讓你有什麼感覺。辣的食物讓你有精神還是讓你煩躁？乳製品後覺得沉重還是沒事？溫熱的湯比冷沙拉更讓你舒服嗎？身體對食物的反應是關於體質最清楚的信號之一。",
                "異なる食べ物がどう感じさせるかに注目してください。辛い食べ物は元気を出させる、それともイライラさせる？乳製品の後に重く感じる、それとも大丈夫？温かいスープは冷たいサラダより心地よい？体の食べ物への反応は、体質についての最も明確な信号の一つです。"
              )}
            </p>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          {l(
            "If this feels overwhelming, don't worry. You don't need to figure it all out at once. The quiz helps by asking targeted questions and calculating your likely dominant type. From there, you can explore the nuances over time as you pay attention to how your body responds to different foods, seasons, and situations.",
            "如果這感覺太複雜，別擔心。你不需要一次搞懂。測驗會問針對性的問題並計算你可能的體質。從那裡開始，你可以隨時間探索細微差別，觀察身體對不同食物、季節和情況的反應。",
            "これが圧倒的に感じるなら、心配しないで。一度に全て理解する必要はありません。クイズは的を絞った質問をして、あなたの優勢タイプを計算します。そこから、体が異なる食べ物、季節、状況にどう反応するかに注目しながら、徐々にニュアンスを探求できます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Ayurveda vs Chinese Medicine: What's Different?", "阿育吠陀 vs 中醫：有何不同？", "アーユルヴェーダ vs 中医学：何が違う？")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Both systems see your body as having an inherent pattern that determines how you respond to food, weather, and stress. But while Ayurveda groups everyone into 3 broad categories, Chinese medicine identifies 9 — giving you a more precise map of your body's tendencies. Think of it as the difference between a 3-color palette and a 9-color one: more nuance, more precision, more personalized guidance.",
            "兩個體系都認為你的身體有一種先天模式，決定了你對食物、天氣和壓力的反應。但阿育吠陀把所有人分成3大類，中醫分出9種 — 給你更精確的身體傾向地圖。就像3色和9色的差別：更多層次、更精準、更個人化。",
            "両方の体系は体に固有のパターンがあり、食事、天候、ストレスへの反応を決定すると考えています。しかしアーユルヴェーダは3つの大まかなカテゴリーに分け、中医学は9つに識別 — 体の傾向のより正確なマップを提供します。3色と9色のパレットの違い：より微妙、より正確、よりパーソナライズされた指導。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "There's also a philosophical difference worth noting. Ayurveda emphasizes the five elements (earth, water, fire, air, ether) and how they combine into the three doshas. Chinese medicine works with Yin-Yang theory and the five phases (wood, fire, earth, metal, water), which connect to organs, seasons, emotions, and even times of day. Both are sophisticated systems. They just use different vocabulary to describe similar observations about how bodies work.",
            "還有一個哲學上的差異值得一提。阿育吠陀強調五大元素（地、水、火、風、空）以及它們如何組合成三種體質。中醫則運用陰陽理論和五行（木、火、土、金、水），連結到臟腑、季節、情緒，甚至一天中的時間。兩者都是精密的體系。它們只是用不同的詞彙來描述對身體運作的相似觀察。",
            "哲学的な違いも注目に値します。アーユルヴェーダは五大元素（地、水、火、風、空）とそれらが3つのドーシャにどう組み合わさるかを強調します。中医学は陰陽理論と五行（木、火、土、金、水）を用い、臓器、季節、感情、さらには時間帯に結びつけます。どちらも精緻なシステムです。体がどう機能するかについての似た観察を、異なる語彙で説明しているだけ。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Practically speaking, if you've tried Ayurveda and found the three doshas too broad to capture your experience, the 9-type system might feel more specific. Conversely, if Ayurveda resonates with you, there's no need to switch — both systems can complement each other. Some practitioners even use both frameworks with the same patient, looking for overlapping patterns.",
            "實際上，如果你試過阿育吠陀但覺得三種體質太寬泛無法捕捉你的經驗，9種體質的系統可能感覺更具體。相反地，如果阿育吠陀對你來說很共鳴，也不需要切換 — 兩個體系可以互補。有些專業者甚至對同一個病人同時使用兩個框架，尋找重疊的模式。",
            "実践的には、アーユルヴェーダを試して3つのドーシャが広すぎて自分の経験を捉えきれないと感じたなら、9タイプのシステムはより具体的に感じるかもしれません。逆に、アーユルヴェーダが共鳴するなら、切り替える必要はありません — 両方のシステムは補完し合えます。一部の専門家は同じ患者に両方の枠組みを使い、重なるパターンを探すことさえあります。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("Important Note", "重要說明", "重要な注意")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This framework is for wellness and self-awareness, not medical diagnosis. Body type identification should complement — not replace — professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
            "此框架僅供養生與自我覺察，非醫療診斷。體質辨識應補充而非取代專業醫療建議。如有健康疑慮，請諮詢合格醫療專業人員。",
            "このフレームワークはウェルネスと自己認識のためであり、医療診断ではありません。体質の識別は専門的な医療アドバイスを補完するもので、代替するものではありません。健康上の懸念については、常に資格のある医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Related Articles", "相關文章", "関連記事")}</h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Each body type connects to specific wellness challenges. If you want to dive deeper into how these patterns show up in daily life, these articles explore common symptoms through the lens of Chinese medicine:",
            "每種體質都與特定的健康挑戰相關。如果你想深入了解這些模式在日常生活中如何顯現，這些文章從中醫的角度探討常見症狀：",
            "各体質は特定のウェルネスの課題と結びついています。これらのパターンが日常生活でどう現れるか深く掘り下げたいなら、これらの記事が中医学の観点から一般的な症状を探ります："
          )}
        </p>
        <div className="space-y-3">
          <Link
            href="/wellness/insomnia-chinese-medicine"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {l("Insomnia & Chinese Medicine →", "失眠與中醫 →", "不眠症と中医学 →")}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {l("Can't sleep? Night heat and racing thoughts often point to Yin Deficiency — one of the 9 types.", "睡不著？夜間燥熱和思緒奔馳常指向陰虛 — 9種體質之一。", "眠れない？夜のほてりと駆け巡る思考は陰虚 — 9タイプの1つ — を指すことが多い。")}
            </p>
          </Link>
          <Link
            href="/wellness/cold-hands-and-feet"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {l("Cold Hands & Feet →", "手腳冰冷 →", "手足の冷え →")}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {l("Always cold, even when others are comfortable? This is a classic Yang Deficiency pattern.", "別人覺得舒適你卻總是冷？這是典型的陽虛模式。", "他の人が快適なのにいつも寒い？これは典型的な陽虚パターンです。")}
            </p>
          </Link>
          <Link
            href="/wellness/anxiety-chinese-medicine"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {l("Anxiety & Chinese Medicine →", "焦慮與中醫 →", "不安と中医学 →")}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {l("Chest tightness and mood swings often signal Qi Stagnation — when energy builds up but can't flow freely.", "胸悶和情緒波動常是氣鬱的信號 — 能量堆積卻無法自由流動。", "胸の圧迫感と気分の波は気鬱のサイン — エネルギーが蓄積し自由に流れない状態。")}
            </p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-body-types"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Which of the 9 types are you?", "你是9種體質中的哪一種？", "9つのタイプのどれ？")}</p>
        <p className="text-text2 text-sm mb-6">{l("Take the free 5-minute quiz and get your personalized result.", "花5分鐘做免費測驗，取得你的個人結果。", "無料の5分クイズでパーソナライズされた結果を取得。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}
