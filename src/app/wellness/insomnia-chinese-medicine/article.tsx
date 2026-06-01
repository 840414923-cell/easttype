"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

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
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">
          {l("Wellness", "養生", "ウェルネス")}
        </Link>
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
      <p className="text-text2 text-sm mb-6">
        {l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      {/* TL;DR Summary */}
      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-2">
          {l("TL;DR", "重點摘要", "要約")}
        </h2>
        <ul className="text-text2 text-sm space-y-1.5">
          {[
            l("TCM sees insomnia as a Yin Deficiency problem — your body lacks the cooling force to settle at night", "中醫認為失眠是陰虛問題 — 身體缺乏夜間安頓的冷卻力量", "中医学では不眠は陰虚の問題 — 夜に落ち着くための冷却力が不足"),
            l("Yin is like your body's internal AC; when it's low, heat builds up and your mind races", "陰就像身體的內部冷氣；不足時，熱氣累積，思緒奔馳", "陰は体の内部エアコンのようなもの；不足すると熱がこもり、心が駆け巡る"),
            l("Cooling foods (lily bulb, pear, lotus seed) help; spicy, fried, and alcoholic foods make it worse", "清涼食物（百合、梨、蓮子）有幫助；辛辣、油炸和酒精會加重", "冷性食材（ユリ根、梨、蓮の実）が助けになり、辛い・揚げ物・アルコールは悪化させる"),
            l("A simple evening routine — warm foot soak, screen cutoff, herbal tea — can shift things noticeably", "簡單的晚間習慣 — 溫水泡腳、關掉螢幕、花草茶 — 能明顯改善", "簡単な夜のルーティン — 足湯、画面オフ、ハーブティー — で目に見える変化が"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent/60 mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The Short Answer", "簡短回答", "端的な答え")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "In Traditional Chinese Medicine (TCM), insomnia that worsens at night is usually caused by Yin Deficiency (阴虚, pronounced \"yeen-shoo\"). Yin is your body's cooling and moistening force — think of it as the water that balances the fire. When Yin is low, internal heat builds up at night when there's no external activity to dissipate it. Your mind becomes overactive because the \"fire\" has no \"water\" to balance it.",
            "在中醫裡，夜間加重的失眠通常是由陰虛引起的。陰是你身體的冷卻和滋潤力量 — 就像平衡火的水。陰不足時，內熱在夜間累積，因為沒有外在活動來消散它。你的思緒過度活躍，因為「火」沒有「水」來平衡。",
            "伝統的な中国医学（TCM）では、夜に悪化する不眠は通常、陰虚（いんきょ）が原因です。陰とは体の冷却と潤いの力 — 火とバランスを取る水のようなもの。陰が不足すると、夜間に発散する活動がないため、体内に熱がこもります。心が過活動になるのは、「火」をバランスする「水」がないからです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't a metaphor TCM invented for convenience. It's a framework that's been tested across literally billions of patient encounters over centuries. Whether you find it poetic or peculiar, the pattern holds: people with Yin deficiency share a remarkably consistent cluster of symptoms, and the same cooling-nourishing approach tends to help them. Coincidence? Maybe. But after three thousand years of observation, it's probably not a random one.",
            "這不是中醫為了方便而發明的比喻。這是一個經過數世紀、數十億次臨床觀察驗證的框架。不管你覺得它詩意還是古怪，規律就是如此：陰虛的人有一組非常一致的症狀群，而同樣的滋陰清熱方法通常能幫助他們。巧合嗎？也許。但經過三千年的觀察，大概不是隨機的巧合。",
            "これは中医学が都合よく作った比喩ではありません。数世紀にわたる文字通り数十億の臨床観察で検証された枠組みです。詩的だろうと奇妙だろうと、パターンは一貫しています：陰虚の人は非常に一貫した症状群を共有し、同じ冷却・滋養アプローチが役立つ傾向があります。偶然？たぶんそう。でも3,000年の観察の後では、おそらくランダムな偶然ではありません。"
          )}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Think of It Like This", "這樣理解", "こう考えてみてください")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Imagine a house with broken air conditioning in summer. During the day, you're distracted by activity — work, conversations, movement. But at night, when everything quiets down, the heat becomes unbearable. You toss and turn, unable to settle. That's exactly what Yin-deficient people experience: the heat was always there, but it only becomes intolerable when the distractions stop.",
            "想像夏天一間冷氣壞掉的房子。白天你被活動分散注意力 — 工作、對話、走動。但到了晚上，一切安靜下來時，熱氣變得難以忍受。你翻來覆去，無法安穩。這正是陰虛的人經歷的：熱一直都在，只是當分心的事情停止時，才變得無法忍受。",
            "夏、エアコンが壊れた家を想像してください。日中は活動 — 仕事、会話、移動 — に気を取られています。しかし夜、全てが静かになると、熱は耐え難いものになります。あなたは寝返りを打ち、落ち着けません。これがまさに陰虚の人が経験すること：熱は常にあったが、気を紛らわすものがなくなって初めて耐え難くなるのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Now here's the part that catches people off guard: cranking the real AC lower doesn't fix it. The problem isn't the room temperature. It's that your body has lost its own ability to regulate internal heat. External cold might feel nice temporarily, but it doesn't replenish the Yin. You need to rebuild the body's own cooling system from the inside. That's where food, herbs, and daily habits come in — not just a thicker blanket or a colder bedroom.",
            "這裡是讓人意外的地方：把冷氣開更強也沒用。問題不是室溫。是你的身體失去了調節內部熱量的能力。外在的冷可能暫時舒服，但不會補充陰。你需要從內部重建身體自己的冷卻系統。這就是食物、草藥和日常習慣的作用 — 不只是更厚的毯子或更冷的臥室。",
            "ここが人を驚かせる部分です：実際のエアコンを強くしても解決しません。問題は室温ではないのです。体が内部の熱を調節する能力を失っていること。外からの冷は一時的に気持ちいいかもしれませんが、陰を補充はしません。体の冷却システムを内側から再構築する必要があります。それが食事、漢方、日常習慣の出番です — 分厚い毛布やより冷たい寝室ではありません。"
          )}
        </p>
      </section>

      {/* Daily Life Impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("How This Affects Your Daily Life", "這如何影響你的日常生活", "これが日常生活にどう影響するか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Yin deficiency doesn't just steal your sleep. It quietly reshapes your entire day, and you might not even notice the connection. You wake up tired — not the refreshing kind of tired from a long hike, but the hollow, wrung-out kind that makes you question whether you slept at all. By mid-morning you're reaching for coffee. By 3 PM you hit a wall so hard you wonder if your body is secretly staging a protest.",
            "陰虛不只偷走你的睡眠。它悄悄地重塑你整天的生活，你可能都沒注意到關聯。你醒來很累 — 不是那種長途健行後舒暢的累，而是空洞的、被擰乾的那種，讓你懷疑自己到底有沒有睡過。上午你就需要咖啡。下午三點你撞牆撞得那麼猛，你懷疑身體是不是在暗中抗議。",
            "陰虚は睡眠を奪うだけではありません。気づかないうちに一日全体を静かに作り変え、その繋がりに気づかないかもしれません。目覚めは疲れた状態 — 長いハイキング後の爽快な疲れではなく、そもそも眠ったのか疑いたくなるような空虚な疲れ。午前中にはコーヒーに手が伸びる。午後3時には壁にぶつかり、体が密かに抗議しているのではと思うほど。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Your patience thins out. Things that normally roll off you suddenly feel personal. A colleague's innocent question feels like an interrogation. Your partner's chewing sounds like a construction site. Sound familiar? That irritability isn't a character flaw — it's your depleted Yin letting internal heat flare into your emotions.",
            "你的耐心變薄了。平常不在意的事突然變得針對你。同事無心的問題像審問。伴侶咀嚼的聲音像工地。聽起來熟悉嗎？那種煩躁不是性格缺陷 — 是你耗盡的陰讓內熱竄入情緒。",
            "忍耐力が薄くなります。普段なら気にならないことが急に個人的に感じられる。同僚の無邪気な質問が尋問のように。パートナーの咀嚼音が建設現場のように。聞き覚えがありますか？そのイライラは性格の欠陥ではなく — 枯渇した陰が内部の熱を感情に噴き上げているのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "And then there's the cruel irony: you're exhausted all day, but the moment your head hits the pillow, your brain decides it's the perfect time to replay every awkward conversation from the past decade. Or plan tomorrow's grocery list in excruciating detail. Or suddenly remember that one thing you said in 2019 that nobody else even recalls. The exhaustion is real, but so is the wired feeling. Both can be true at once, and in TCM, that paradox is the hallmark of Yin deficiency.",
            "然後還有殘酷的諷刺：你整天疲憊，但頭一碰到枕頭，大腦就決定這是重播過去十年每段尷尬對話的完美時機。或者用折磨人的細節規劃明天的購物清單。或者突然想起2019年你說過的那件沒人記得的事。疲憊是真的，但亢奮也是真的。兩者可以同時存在，而在中醫裡，這種矛盾正是陰虛的標誌。",
            "そして残酷な皮肉があります：一日中疲れているのに、頭が枕に触れた瞬間、脳が過去10年のすべての気まずい会話を再生する絶好のタイミングだと決める。または明日の買い物リストを苦痛なほど詳細に計画する。または2019年に言った誰も覚えていないことを突然思い出す。疲労は本物だが、興奮感も本物。両方が同時に真であり得る。中医学では、このパラドックスこそが陰虚の特徴です。"
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
            l("Night sweats — you wake up with damp sheets or a clammy chest, even when the room isn't hot", "夜間盜汗 — 房間不熱也會醒來發現床單潮濕或胸口黏膩", "寝汗 — 部屋が暑くないのにシーツが湿っていたり胸がべたついて目が覚める"),
            l("A vague sense of restlessness in your body — not anxiety exactly, more like your muscles can't fully relax", "身體有種模糊的煩躁感 — 不完全是焦慮，更像是肌肉無法完全放鬆", "体に漠然とした落ち着きのなさ — というより不安ではなく、筋肉が完全にリラックスできない感じ"),
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
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Western medicine typically treats insomnia with melatonin supplements, sleep hygiene protocols, or sedatives. These can help temporarily, but they don't address the root cause. TCM asks: why is your body generating excess heat at night? The answer is Yin deficiency — your body doesn't have enough cooling, moistening force to let you truly rest.",
            "西醫通常用褪黑激素、睡眠衛生建議或鎮靜劑治療失眠。這些能暫時幫助，但沒有解決根本原因。中醫問：為什麼你的身體在夜間產生多餘的熱？答案是陰虛 — 你的身體沒有足夠的冷卻、滋潤力量讓你真正休息。",
            "西洋医学は通常、メラトニンサプリメント、睡眠衛生プロトコル、または鎮静剤で不眠を治療します。これらは一時的に役立ちますが、根本原因には対処しません。中医学は問います：なぜ体は夜に過剰な熱を生成しているのか？答えは陰虚 — 体に真に休むための十分な冷却と潤いの力がないのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "To be fair, Western sleep hygiene advice — dark room, no screens, consistent schedule — is solid. Nobody's arguing against that. The gap is that Western medicine tends to stop at behavioral adjustments. If those don't work, the next step is usually medication. TCM fills the space in between: it looks at what your body is doing wrong internally and tries to correct that pattern before resorting to drugs.",
            "公平地說，西醫的睡眠衛生建議 — 暗房間、不看螢幕、固定作息 — 是好的。沒人反對。差距在於西醫傾向停在行為調整。如果那些沒用，下一步通常是藥物。中醫填補了中間的空間：它看你的身體內部哪裡出了問題，並在訴諸藥物之前嘗試糾正那個模式。",
            "公平に言えば、西洋の睡眠衛生アドバイス — 暗い部屋、画面なし、規則的なスケジュール — は確かです。誰も反対していません。ギャップは、西洋医学が行動調整で止まる傾向があること。それが効かなければ、次は通常、薬です。中医学はその間を埋めます：体が内部で何を間違っているかを見て、薬に頼る前にそのパターンを修正しようとします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Think of it this way. If your car engine is overheating, you could drive with the windows down and the heater off. That might buy you some time. Or you could check whether the coolant reservoir is empty. Western sleep hygiene is the windows-down approach. TCM is checking the coolant.",
            "這樣想吧。如果你的車引擎過熱，你可以開著窗戶、關掉暖氣開。那可能爭取一些時間。或者你可以檢查冷卻液是不是空了。西醫的睡眠衛生是開窗戶的方法。中醫是檢查冷卻液。",
            "こう考えてみてください。車のエンジンが過熱しているなら、窓を開けてヒーターをオフにして運転できます。少し時間は稼げる。またはクーラントのリザーバーが空いていないか確認する。西洋の睡眠衛生は窓を開けるアプローチ。中医学はクーラントを確認すること。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Yin Deficiency", "陰虛體質的食物：該吃與不該吃", "陰虚を助ける（悪化させる）食材")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Food is medicine in TCM — not in a trendy Instagram way, but in a \"this has been prescribed for centuries\" way. What you eat directly feeds or depletes your Yin. The list below isn't exhaustive, but it covers the most impactful items.",
            "在中醫裡食物就是藥 — 不是Instagram流行的那種，而是「這已經被開了幾世紀處方」的那種。你吃的東西直接滋養或消耗你的陰。以下清單不是詳盡的，但涵蓋了最有影響力的項目。",
            "中医学では食事は薬です — インスタグラムのトレンド的な意味ではなく、「何世紀も処方されてきた」という意味で。食べるものが直接陰を養ったり消耗させたりします。以下のリストは網羅的ではありませんが、最も影響の大きい項目をカバーしています。"
          )}
        </p>
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
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          {l(
            "A quick note: you don't need to eat all the cooling foods or ban every heating one forever. That's not realistic, and honestly, it's not necessary. Just tilt the balance. If you've been eating spicy takeout four nights a week, maybe try three. Add a pear after dinner. Small shifts compound over time — that's the TCM philosophy in a nutshell.",
            "快速提醒：你不需要吃所有清涼食物或永遠禁絕所有燥熱食物。那不現實，說實話也沒必要。只要傾斜平衡就好。如果你一週四晚吃辣的外賣，也許試試三晚。晚餐後加個梨。小的改變會隨時間累積 — 這就是中醫哲學的精髓。",
            "簡単な注意：すべての冷性食材を食べたり、すべての熱性食材を永遠に禁止する必要はありません。それは現実的ではないし、正直不要です。バランスを傾けるだけでいい。週4夜スパイシーなデリバリーを食べているなら、3夜にしてみる。夕食後に梨を加える。小さな変化が時間とともに蓄積する — それが中医学の哲学の核心です。"
          )}
        </p>
      </section>

      {/* Simple Sleep Routine */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("A Simple Sleep Routine for Yin Deficiency", "陰虛體質的簡單睡眠習慣", "陰虚のためのシンプルな睡眠ルーティン")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "You've probably read a hundred \"sleep hygiene\" lists. This one is different because it's built specifically around the Yin deficiency pattern. The goal isn't just to fall asleep — it's to help your body rebuild its cooling capacity over time.",
            "你可能讀過一百篇「睡眠衛生」清單。這份不同，因為它是專門針對陰虛體質設計的。目標不只是入睡 — 是幫助你的身體隨時間重建冷卻能力。",
            "「睡眠衛生」のリストは百回読んだことがあるでしょう。これは違います。陰虚パターン専用に設計されているからです。目標は単に眠りにつくことではなく — 体が時間をかけて冷却能力を再構築するのを助けること。"
          )}
        </p>
        <div className="space-y-4">
          {[
            {
              time: l("90 min before bed", "睡前90分鐘", "就寝90分前"),
              action: l(
                "Warm foot soak (15–20 min). This sounds oddly specific, but in TCM the feet are where several Yin-meridians converge. Soaking them in warm water draws heat downward and away from your head — which is exactly where it's keeping you awake. Add a pinch of sea salt if you want to feel fancy about it.",
                "溫水泡腳（15–20分鐘）。聽起來很具體，但在中醫裡腳是多條陰經交匯之處。用溫水泡腳能把熱往下引、遠離頭部 — 而熱正是留在頭部讓你睡不著的。想講究一點可以加一小撮海鹽。",
                "足湯（15〜20分）。妙に具体的に聞こえますが、中医学では足は複数の陰経が集まる場所。ぬるま湯に足をつけると熱を下に引き、頭から遠ざけます — その熱がまさにあなたを眠らせない原因。気分を上げたいなら一つまみの海塩を。"
              ),
            },
            {
              time: l("60 min before bed", "睡前60分鐘", "就寝60分前"),
              action: l(
                "Screens off. Yes, you've heard this before. But for Yin-deficient people it matters more because the blue light doesn't just suppress melatonin — it stokes the internal fire. Your brain interprets that light as daytime, which means it keeps the Yang (active energy) running when it should be winding down. Read a book instead. A paper one. Remember those?",
                "關掉螢幕。是的，你聽過了。但對陰虛的人這更重要，因為藍光不只抑制褪黑激素 — 它還煽動內火。你的大腦把那光解讀為白天，意味著它讓陽（活躍能量）在該收斂時繼續運行。改看書吧。紙本的那種。還記得嗎？",
                "画面オフ。はい、聞いたことがありますね。でも陰虚の人にはさらに重要です。ブルーライトはメラトニンを抑制するだけでなく — 内火を煽るから。脳はその光を昼間と解釈し、収まるべき時に陽（活動エネルギー）を走らせ続けます。代わりに本を読みましょう。紙のやつ。覚えていますか？"
              ),
            },
            {
              time: l("30 min before bed", "睡前30分鐘", "就寝30分前"),
              action: l(
                "A small cup of warm, non-caffeinated tea. Chrysanthemum (Ju Hua) is ideal — it's a classic Yin-nourishing herb that's been used for this exact purpose for centuries. If you can't find chrysanthemum, warm water with a bit of honey works too. The warmth itself is paradoxically cooling in TCM logic: it gently opens your pores and lets surface heat escape. Don't ask me to explain the physics. It just tends to work.",
                "一小杯溫的無咖啡因茶。菊花最理想 — 這是經典的滋陰草藥，幾世紀以來專門用於此目的。找不到菊花的話，溫水加點蜂蜜也行。在中醫邏輯裡，溫熱反而有冷卻效果：它溫和地打開毛孔讓表面熱氣散出。別叫我解釋物理。它就是有效。",
                "小さなカップの温かいカフェインなしのお茶。菊花（菊華）が理想 — まさにこの目的で何世紀も使われてきた古典的な陰滋養ハーブです。菊花が見つからなければ、はちみつ入りのぬるま湯でも。温かさ自体が逆説的に中医学の論理では冷却効果があります：毛穴を穏やかに開き、表面の熱を逃がす。物理の説明は求めないでください。ただ効く傾向があるのです。"
              ),
            },
            {
              time: l("In bed", "躺在床上", "ベッドの中"),
              action: l(
                "Don't try to force sleep. That's the fastest way to guarantee you won't get it. Instead, focus on slow breathing — inhale for 4 counts, exhale for 6. The longer exhale activates your parasympathetic nervous system. If your mind is still racing, let it race — but imagine the thoughts are on a conveyor belt, moving past you without requiring your engagement. Sounds a bit woo-woo, I know. But it beats counting sheep, which is basically just giving your brain more homework.",
                "不要強迫自己睡。那是保證睡不著最快的方法。改為專注慢呼吸 — 吸4拍，呼6拍。較長的呼氣啟動副交感神經。如果思緒還在奔馳，讓它跑 — 但想像那些念頭在輸送帶上，經過你但不需要你參與。聽起來有點玄，我知道。但總比數羊好，數羊基本上是給大腦更多功課。",
                "眠ろうと力まないでください。それが眠れないことを保証する最速の方法です。代わりにゆっくり呼吸に集中 — 4拍で吸い、6拍で吐く。長い呼気は副交感神経を活性化します。心がまだ駆け巡っているなら、そのままに — でも思考をコンベアベルトの上に乗せて、あなたの関与なしに通り過ぎていくと想像してください。ちょっとスピリチュアルに聞こえるのは分かります。でも羊を数えるよりマシです。羊を数えるのは基本的に脳に宿題を増やすようなもの。"
              ),
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-accent font-medium text-sm whitespace-nowrap mt-0.5">{step.time}</span>
              <p className="text-text2 text-sm leading-relaxed">{step.action}</p>
            </div>
          ))}
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

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms & Patterns", "相關症狀與模式", "関連する症状とパターン")}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Waking At 3AM", "凌晨三點醒來", "深夜3時に目覚める")}</h3>
            <p className="text-text2 text-sm">{l("Waking up in the middle of the night is a hallmark of Yin Deficiency insomnia", "半夜醒來是陰虛失眠的標誌", "夜中に目が覚めるのは陰虚不眠の特徴")}</p>
          </Link>
          <Link href="/patterns/internal-heat" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Internal Heat", "內熱", "内熱")}</h3>
            <p className="text-text2 text-sm">{l("Nighttime heat buildup is often the root cause of sleep disturbances", "夜間熱氣堆積常是睡眠障礙的根本原因", "夜間の熱の蓄積は睡眠障害の根本原因となることが多い")}</p>
          </Link>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Conditions", "相關症狀", "関連する症状")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Yin deficiency rarely shows up alone. If insomnia sounds familiar, these related patterns might too:",
            "陰虛很少單獨出現。如果失眠聽起來很熟悉，這些相關模式可能也是：",
            "陰虚は単独で現れることはまれです。不眠に聞き覚えがあれば、これらの関連パターンも当てはまるかもしれません："
          )}
        </p>
        <div className="space-y-3">
          <Link
            href="/wellness/night-sweats-chinese-medicine"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {l("Night Sweats & Chinese Medicine →", "夜間盜汗與中醫 →", "寝汗と中医学 →")}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {l("Waking up drenched? Night sweats and insomnia often share the same Yin-deficient root.", "醒來全身濕透？夜間盜汗和失眠常共享同一個陰虛根源。", "汗びっしょりで目覚める？寝汗と不眠は同じ陰虚の根を共有することが多い。")}
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
              {l("That racing mind at 2 AM? It's not just overthinking — it's internal heat disturbing the Heart-Shen.", "凌晨兩點思緒奔馳？不只是想太多 — 是內熱擾動心神。", "深夜2時の駆け巡る思考？考えすぎではなく — 内熱が心神を乱しているのです。")}
            </p>
          </Link>
          <Link
            href="/wellness/why-am-i-always-tired"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {l("Why Am I Always Tired? →", "為什麼我總是累？ →", "なぜいつも疲れている？ →")}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {l("Poor sleep leads to daytime exhaustion, but the fatigue pattern might point to a different body type.", "睡眠差導致白天疲憊，但疲勞模式可能指向不同的體質。", "睡眠不足は日中の疲労につながりますが、疲労パターンは別の体質を指しているかもしれません。")}
            </p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["insomnia-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
