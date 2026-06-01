"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function AnxietyChineseMedicineArticle() {
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
        <span className="text-text2">{l("Anxiety & Chinese Medicine", "焦慮與中醫", "不安と中医学")}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Anxiety & Chinese Medicine: Why Your Mind Races While Your Body Stalls",
          "焦慮與中醫：為什麼你的腦袋狂轉，身體卻動不了",
          "不安と中医学：なぜ頭は駆け巡るのに体は動かないのか"
        )}
      </h1>
      <p className="text-text2 text-sm mb-6">
        {l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      {/* TL;DR Summary */}
      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-2">
          {l("TL;DR", "重點摘要", "要点")}
        </h2>
        <ul className="text-sm text-text2 space-y-1.5">
          <li>
            <strong className="text-text">{l("The pattern:", "體質模式：", "パターン：")}</strong>{" "}
            {l("Anxiety with chest tightness = Qi Stagnation (氣鬱)", "焦慮伴胸悶 = 氣鬱體質", "胸の圧迫感を伴う不安 = 気鬱")}
          </li>
          <li>
            <strong className="text-text">{l("The root:", "根本原因：", "根本原因：")}</strong>{" "}
            {l("Energy builds up but can't flow freely — like a traffic jam in your chest", "能量堆積但無法自由流動 — 像胸口的交通堵塞", "エネルギーが蓄積するが自由に流れない — 胸の渋滞のようなもの")}
          </li>
          <li>
            <strong className="text-text">{l("Key signs:", "關鍵跡象：", "主要サイン：")}</strong>{" "}
            {l("Frequent sighing, mood swings, overthinking, better after venting", "頻繁嘆氣、情緒波動、想太多、發洩後好轉", "頻繁なため息、気分の波、考えすぎ、吐き出すと楽になる")}
          </li>
          <li>
            <strong className="text-text">{l("What helps:", "改善方法：", "改善法：")}</strong>{" "}
            {l("Rose tea, citrus, movement, breathing exercises — anything that gets Qi moving", "玫瑰花茶、柑橘、運動、呼吸練習 — 任何讓氣流動的事", "ローズティー、柑橘、運動、呼吸法 — 気を動かすもの全て")}
          </li>
        </ul>
      </div>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The Short Answer", "簡短回答", "端的な答え")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "In Traditional Chinese Medicine (TCM), anxiety that comes with chest tightness, frequent sighing, and mood swings is usually caused by Qi Stagnation (气郁, pronounced \"chee-yoo\"). Qi is your body's vital energy — it should flow smoothly like a river. When Qi stagnates, the energy builds up but can't move freely. It gets stuck, especially in the chest and ribcage, creating a pressure that your mind interprets as anxiety, restlessness, and that constant feeling that something isn't right.",
            "在中醫裡，伴隨胸悶、頻繁嘆氣和情緒波動的焦慮，通常是由氣鬱引起的。氣是你身體的生命能量 — 應該像河流一樣順暢流動。當氣鬱結時，能量堆積卻無法自由流動，尤其卡在胸脅部位，產生一種壓力感，讓你的心解讀為焦慮、煩躁，以及那種揮之不去的不對勁感。",
            "伝統的な中国医学（TCM）では、胸の圧迫感、頻繁のため息、気分の波を伴う不安は通常、気鬱（きうつ）が原因です。気とは体の生命エネルギー — 川のようにスムーズに流れるべきもの。気が鬱滞すると、エネルギーは蓄積するが自由に動けません。特に胸と脇肋に詰まり、心が不安や落ち着きのなさ、何かがおかしいという感覚として解釈する圧力が生まれます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Here's the thing — you're not running on empty. That's the key difference between Qi Stagnation and Qi Deficiency. With Qi Deficiency, you're genuinely tired, your voice is weak, you catch colds easily. With Qi Stagnation? You have energy. Sometimes too much energy. It's just... stuck. The engine is revving, but the car is in neutral.",
            "重點來了 — 你不是油箱見底。這是氣鬱和氣虛的關鍵差異。氣虛的人是真的累，聲音虛弱，容易感冒。氣鬱呢？你有能量。有時候能量還太多。只是……卡住了。引擎在轟，但車子打空檔。",
            "重要なのは — エネルギーが尽きているわけではないということ。これが気鬱と気虚の重要な違いです。気虚の人は本当に疲れていて、声が弱く、風邪を引きやすい。気鬱は？エネルギーはある。時には多すぎるほど。ただ……詰まっている。エンジンは唸っているが、車はニュートラルのまま。"
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
            "Imagine a traffic jam on a six-lane highway. The cars (your energy) are all there — the fuel is fine, the engines are running. But nothing moves. The pressure builds. Horns blare. Everyone gets frustrated. That's Qi Stagnation. Your body has the energy it needs, but it's stuck in a bottleneck. The frustration you feel in traffic? That's exactly what your body feels when Qi can't flow. Your mind races because the energy has nowhere to go, and your body stalls because the signal to move never gets through.",
            "想像六車道高速公路上的大塞車。車子（你的能量）都在那裡 — 油夠、引擎也在跑。但什麼都動不了。壓力不斷累積，喇叭聲此起彼落，每個人都越來越煩躁。這就是氣鬱。你的身體有需要的能量，但卡在瓶頸裡。你在塞車時感受到的焦躁？那就是氣無法流動時你身體的感受。腦袋狂轉是因為能量無處可去，身體動不了是因為前進的信號傳不過去。",
            "6車線の高速道路の渋滞を想像してください。車（あなたのエネルギー）は全部そこにある — 燃料も問題なく、エンジンも動いている。でも何も動けない。圧力が蓄積し、クラクションが鳴り響き、誰もがイライラする。それが気鬱です。体には必要なエネルギーがあるが、ボトルネックに詰まっている。渋滞で感じる苛立ち？それは気が流れない時の体の感覚そのもの。頭が駆け巡るのはエネルギーの行き場がないから、体が動かないのは進めという信号が届かないから。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Or think of a garden hose with a kink in it. The water pressure builds up behind the bend. Eventually, something has to give — either the hose bursts, or you unkink it. In your body, that \"bursting\" shows up as emotional outbursts, crying spells, or that moment when you snap at someone and immediately feel bad about it. The good news? Once you unkink the hose, the water flows freely again.",
            "或者想像一條打結的園藝水管。水壓在彎折處後面不斷累積。最後總要解決 — 要麼水管爆裂，要麼你把結解開。在你的身體裡，「爆裂」表現為情緒爆發、突然哭出來，或那種對人發火後立刻後悔的時刻。好消息是？一旦解開結，水又順暢流動了。",
            "あるいは、結ばれたホースを想像してください。結び目の後ろで水圧が高まります。最終的にどちらかが起こる — ホースが破裂するか、結びを解くか。体の中では、「破裂」は感情の爆発、突然の涙、人に当た散ってすぐ後悔する瞬間として現れます。良いニュースは？結びを解けば、水はまた自由に流れる。"
          )}
        </p>
      </section>

      {/* Daily Life Impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("How This Shows Up in Daily Life", "日常生活中的影響", "日常生活への影響")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Qi Stagnation doesn't just live in your chest. It leaks into everything. You might find yourself lying in bed at 2 AM, replaying a conversation from three days ago. Or standing in front of the fridge, hungry but unable to decide what to eat. Or snapping at your partner because they chewed too loudly — and then feeling terrible about it.",
            "氣鬱不只停留在胸口。它滲透到一切。你可能發現自己凌晨兩點躺在床上，重播三天前的對話。或站在冰箱前，餓但無法決定吃什麼。或因為伴侶咀嚼聲太大而發火 — 然後覺得很糟。",
            "気鬱は胸の中だけに留まりません。全てに染み出します。深夜2時にベッドで、3日前の会話を反芻しているかもしれません。冷蔵庫の前に立って、お腹は空いているのに何を食べるか決められない。パートナーが咀嚼音を立てただけでイライラして — その後ひどく自己嫌悪に陥る。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "The tricky part? You might look fine on the outside. Your blood tests come back normal. Your doctor says you're healthy. But inside, there's this constant hum of pressure that never quite resolves. It's like carrying a backpack full of rocks — you get used to the weight, forget it's there, until someone points out your posture is off.",
            "麻煩的是？你外表看起來可能好好的。血液檢查正常。醫生說你很健康。但內在，那種壓力的嗡嗡聲從未真正消散。像背著一袋石頭 — 你習慣了重量，忘了它的存在，直到有人指出你的姿勢不對。",
            "厄介なのは？外見は元気に見えるかもしれない。血液検査は正常。医師は健康だと言う。でも内側には、決して解消されない圧力の持続的な唸りがある。石の入ったリュックを背負っているようなもの — 重さに慣れて、存在を忘れ、誰かが姿勢が悪いと指摘するまで気づかない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Work becomes harder too. Not because you can't do the tasks — you absolutely can — but because starting feels impossible. The energy is there, revving, but the clutch won't engage. You scroll, you procrastinate, you tell yourself you'll start in five minutes. Five minutes becomes fifty. The pressure builds. Sound familiar?",
            "工作也變得更難。不是因為你做不來 — 你絕對做得到 — 而是因為開始感覺不可能。能量在那裡，轟著，但離合器接不上。你滑手機，你拖延，你告訴自己五分鐘後開始。五分鐘變成五十分鐘。壓力累積。聽起來熟悉嗎？",
            "仕事も難しくなります。タスクができないからではない — できる、絶対に — でも始めることが不可能に感じる。エネルギーはある、唸っているが、クラッチがつながらない。スクロールし、先延ばしし、あと5分で始めると自分に言い聞かせる。5分が50分になる。圧力が高まる。聞き覚えがありますか？"
          )}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {l("Signs of Qi Stagnation — Do You Recognize These?", "氣鬱的跡象 — 你有這些嗎？", "気鬱のサイン — これらに覚えがありますか？")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}
        </p>
        <ul className="space-y-2">
          {[
            l("Chest tightness or a feeling of pressure in your ribcage", "胸悶或脅肋部有壓迫感", "胸の圧迫感や脇肋の締め付け"),
            l("Frequent sighing — it feels like you can't get a full breath", "頻繁嘆氣 — 總覺得吸不到底", "頻繁のため息 — 深く息が吸えない感覚"),
            l("Mood swings that seem to come out of nowhere", "情緒波動來得莫名其妙", "理由なく気分が激しく変わる"),
            l("Overthinking even small decisions until you're paralyzed", "連小事都想太多，想到動彈不得", "小さな決定さえ考えすぎて動けなくなる"),
            l("You feel noticeably better after crying or venting", "哭一場或發洩後明顯好轉", "泣いたり吐き出したりすると明らかに楽になる"),
            l("You've sighed so deeply your cat looked concerned", "你嘆氣嘆得太深，連貓都擔心地看了你一眼", "ため息が深すぎて猫が心配そうに見てきた"),
            l("Lying in bed, tired but mind won't stop racing", "躺在床上很累但腦袋停不下來", "ベッドで疲れているのに頭が止まらない"),
            l("Irritable over small things, then immediately feel guilty", "小事也煩躁，然後立刻內疚", "些細なことにイライラし、すぐ罪悪感を感じる"),
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
            "Western medicine typically treats anxiety as a brain chemistry problem — low serotonin, overactive amygdala, neural misfiring. The solution? SSRIs to rebalance the chemicals. And for some people, that helps. But TCM sees anxiety differently: it's an energy flow problem. The fuel is there — you're not running on empty like Qi Deficiency. The pipes are blocked. Your body has plenty of energy, but it's trapped, creating pressure that manifests as racing thoughts, chest tightness, and that suffocating feeling of being stuck. Medication can dampen the alarm, but it doesn't clear the blockage.",
            "西醫通常把焦慮當成大腦化學問題 — 血清素不足、杏仁核過度活躍、神經訊號異常。解法？用SSRI重新平衡化學物質。對某些人來說確實有幫助。但中醫的看法不同：這是能量流動的問題。燃料在那裡 — 你不像氣虛那樣油箱見底。是管道堵住了。你的身體有充足的能量，但被困住了，產生壓力，表現為思緒奔馳、胸悶，以及那種令人窒息的卡住感。藥物可以壓低警報，但無法疏通堵塞。",
            "西洋医学は通常、不安を脳の化学的問題として扱います — セロトニン不足、扁桃体の過活動、神経信号の異常。解決策？SSRIで化学バランスを整える。一部の人には効果があります。しかし中医学は不安を別の角度から見ます：それはエネルギーの流れの問題です。燃料はある — 気虚のように空っぽではない。パイプが詰まっている。体には十分なエネルギーがあるが、閉じ込められ、思考の奔走、胸の圧迫、動けないという窒息感として現れる圧力が生まれます。薬は警報を抑えられても、詰まりを解消はしません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't about choosing one over the other. Western medicine excels at acute crises and structural problems. TCM excels at functional patterns — things that don't show up on tests but still make you feel terrible. If your anxiety is severe, medication might be necessary. But understanding the energy pattern gives you additional tools: foods, movements, breathing techniques that help unkink the hose from the inside.",
            "這不是二選一的問題。西醫擅長急性危機和結構性問題。中醫擅長功能性模式 — 那些檢查不出來但讓你很難受的問題。如果你的焦慮嚴重，藥物可能是必要的。但了解能量模式給你額外的工具：食物、運動、呼吸技巧，從內部解開結。",
            "どちらかを選ぶ問題ではありません。西洋医学は急性の危機と構造的問題に優れています。中医学は機能的パターンに優れています — 検査に出ないけど辛いもの。不安が激しい場合、薬が必要かもしれません。でもエネルギーパターンを理解すれば、追加のツールが得られます：食材、運動、呼吸法、内側から結びを解く助けになる。"
          )}
        </p>
      </section>

      {/* Simple Flow-Restoring Routine */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("A Simple Flow-Restoring Routine", "簡單的疏氣日常", "気を巡らせるシンプルなルーティン")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "You don't need to overhaul your life. Small things, done consistently, can gradually unkink the hose. Here's a gentle routine that many people find helpful:",
            "你不需要徹底改變生活。小事，持續做，可以慢慢解開結。這是一個很多人覺得有用的溫和日常：",
            "人生を一新する必要はありません。小さなことを一貫して行うことで、徐々に結びを解けます。多くの人が役立つと感じる穏やかなルーティンを紹介します："
          )}
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Morning: Rose Tea", "早晨：玫瑰花茶", "朝：ローズティー")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Start your day with a cup of rose tea. In TCM, rose moves Qi and gently lifts the spirit. It's not a magic cure, but it sets a different tone for the day. Plus, the ritual itself — boiling water, steeping, smelling the floral steam — is a small act of self-care that signals to your nervous system: you matter.",
                "用一杯玫瑰花茶開始你的一天。在中醫裡，玫瑰行氣，溫和地提振精神。不是神奇解藥，但為一天定下不同的基調。而且，儀式本身 — 燒水、浸泡、聞花香蒸氣 — 是一個小小的自我照顧行為，對你的神經系統發出信號：你很重要。",
                "ローズティーで一日を始めましょう。中医学では、ローズは気を巡らせ、穏やかに精神を高揚させます。魔法の治療ではありませんが、一日のトーンを変えます。さらに、儀式そのもの — お湯を沸かし、蒸らし、花の香りの蒸気を嗅ぐ — は小さなセルフケアの行為で、神経系に「あなたは大切だ」と伝えます。"
              )}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Midday: Movement Break", "中午：動一動", "昼：体を動かす休憩")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Qi Stagnation hates stillness. If you sit at a desk all day, the stagnation gets worse. Set a timer for every two hours. Stand up. Stretch your arms overhead. Do five shoulder rolls in each direction. Walk to the water cooler and back. Nothing dramatic — just enough to remind your Qi that it's allowed to move.",
                "氣鬱討厭靜止。如果你整天坐在桌前，鬱結會更嚴重。每兩小時設個鬧鐘。站起來。雙手過頭伸展。肩膀前後各轉五圈。走到飲水機再走回來。沒什麼大不了的 — 只是提醒你的氣：你可以流動。",
                "気鬱は静止を嫌います。一日中デスクに座っていると、鬱滞は悪化します。2時間ごとにタイマーを設定。立ち上がる。腕を頭上に伸ばす。肩を前後に各5回回す。給水機まで歩いて戻る。大げさなことは何も — 気に「動いてもいいんだ」と思い出させるだけで十分。"
              )}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Evening: 4-7-8 Breathing", "晚上：4-7-8 呼吸法", "夜：4-7-8呼吸法")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Before bed, try this simple breathing technique: inhale for 4 counts, hold for 7, exhale slowly for 8. Do this four times. The extended exhale activates your parasympathetic nervous system — the \"rest and digest\" mode that Qi Stagnation keeps switched off. It's not a permanent fix, but it can help you fall asleep when your mind won't stop racing.",
                "睡前試試這個簡單的呼吸技巧：吸氣4拍，憋氣7拍，慢慢吐氣8拍。做四次。延長的吐氣會啟動你的副交感神經系統 — 氣鬱一直關掉的「休息消化」模式。不是永久解決，但可以在腦袋停不下來時幫你入睡。",
                "寝る前に、このシンプルな呼吸法を試してください：4カウントで吸い、7カウント止め、8カウントでゆっくり吐く。これを4回。延長された吐息は副交感神経系 — 気鬱がずっとオフにしている「休息と消化」モード — を活性化します。永続的な解決ではありませんが、頭が止まらない時に眠りにつく助けになります。"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Qi Stagnation", "氣鬱體質的食物：該吃與不該吃", "気鬱を助ける（悪化させる）食材")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Food is one of the gentlest ways to influence Qi. The right foods help move energy; the wrong ones add to the traffic jam.",
            "食物是影響氣最溫和的方式之一。對的食物幫助能量流動；錯的食物加重塞車。",
            "食事は気に影響を与える最も穏やかな方法の一つ。正しい食材はエネルギーを動かし、間違った食材は渋滞を悪化させます。"
          )}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("✓ Flow-Promoting Foods", "✓ 疏肝食物", "✓ 気を巡らせる食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Rose tea", "玫瑰花茶", "ローズティー"),
                l("Citrus fruits", "柑橘類", "柑橘類"),
                l("Chamomile tea", "洋甘菊茶", "カモミールティー"),
                l("Peppermint", "薄荷", "ペパーミント"),
                l("Chrysanthemum tea", "菊花茶", "菊茶"),
                l("Light soups", "清淡湯品", "軽いスープ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("✗ Stagnation-Worsening Foods", "✗ 加重氣鬱的食物", "✗ 気鬱を悪化させる食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Excessive caffeine", "過量咖啡因", "過度なカフェイン"),
                l("Alcohol", "酒精", "アルコール"),
                l("Very spicy foods", "過辣食物", "辛すぎる食べ物"),
                l("Heavy greasy meals", "油膩厚味", "脂っこい重い食事"),
                l("Excessive sugar", "過量糖分", "過度な砂糖"),
                l("Processed foods", "加工食品", "加工食品"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4">
          {l(
            "A note on alcohol: it might feel like it helps in the moment — that glass of wine does loosen things up. But alcohol is tricky. It moves Qi temporarily, then creates more stagnation afterward. It's like taking a loan from tomorrow's peace to pay for tonight's relief. The interest is high.",
            "關於酒精的註記：當下可能覺得有幫助 — 那杯酒確實讓人放鬆。但酒精很狡猾。它暫時行氣，之後製造更多鬱結。像從明天的平靜借貸來付今晚的解脫。利息很高。",
            "アルコールについて：その瞬間は助かるように感じるかもしれません — ワイン1杯で確かにリラックスします。でもアルコールは厄介です。一時的に気を巡らせ、その後さらに鬱滞を生みます。明日の平穏から借金して今夜の安らぎを払うようなもの。利息は高いです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms & Patterns", "相關症狀與模式", "関連する症状とパターン")}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-do-i-feel-anxious" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Anxious", "焦慮", "不安")}</h3>
            <p className="text-text2 text-sm">{l("Anxiety and chest tightness often go hand in hand with Qi Stagnation", "焦慮和胸悶常與氣鬱一起出現", "不安と胸の圧迫感は気鬱とよく一緒に現れる")}</p>
          </Link>
          <Link href="/patterns/internal-heat" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Internal Heat", "內熱", "内熱")}</h3>
            <p className="text-text2 text-sm">{l("Stagnant Qi can generate internal heat that agitates the mind", "鬱結的氣會產生內熱，擾動心神", "鬱滞した気は内熱を生み、心をかき乱す")}</p>
          </Link>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Conditions", "相關狀況", "関連する状態")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Qi Stagnation often overlaps with other patterns. If you recognize yourself here, these related articles might help:",
            "氣鬱常與其他模式重疊。如果你在這裡認出自己，這些相關文章可能有幫助：",
            "気鬱は他のパターンと重なることが多いです。自分に当てはまるなら、これらの関連記事が役立つかもしれません："
          )}
        </p>
        <div className="space-y-3">
          <Link
            href="/wellness/insomnia-chinese-medicine"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {l("Insomnia & Chinese Medicine", "失眠與中醫", "不眠と中医学")}
            </h3>
            <p className="text-xs text-text2">
              {l(
                "Can't sleep because your mind won't stop? This often involves Yin Deficiency combined with Qi Stagnation.",
                "腦袋停不下來所以睡不著？這通常涉及陰虛合併氣鬱。",
                "頭が止まらなくて眠れない？これは陰虚と気鬱の組み合わせのことが多いです。"
              )}
            </p>
          </Link>
          <Link
            href="/wellness/bloating-chinese-medicine"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {l("Bloating & Chinese Medicine", "腹脹與中醫", "膨満感と中医学")}
            </h3>
            <p className="text-xs text-text2">
              {l(
                "Digestive issues with mood swings? Qi Stagnation often affects the digestive system too.",
                "消化問題伴隨情緒波動？氣鬱也常影響消化系統。",
                "気分の波と消化器の問題？気鬱は消化器系にも影響することが多いです。"
              )}
            </p>
          </Link>
        </div>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. If your anxiety is severe, persistent, or accompanied by panic attacks, heart palpitations, or thoughts of self-harm, please consult a licensed healthcare provider immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的焦慮嚴重、持續不退，或伴隨恐慌發作、心悸、自我傷害的念頭，請立即諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。不安が激しい、持続する、またはパニック発作、動悸、自傷の念を伴う場合は、直ちに医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["anxiety-chinese-medicine"]} />

      <SymptomCta />
    </main>
  )
}
