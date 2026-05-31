"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

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
        <span>{l("Wellness", "養生", "ウェルネス")}</span>
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
            "In Traditional Chinese Medicine (TCM), anxiety that comes with chest tightness, frequent sighing, and mood swings is usually caused by Qi Stagnation (气郁, pronounced \"chee-yoo\"). Qi is your body's vital energy — it should flow smoothly like a river. When Qi stagnates, the energy builds up but can't move freely. It gets stuck, especially in the chest and ribcage, creating a pressure that your mind interprets as anxiety, restlessness, and that constant feeling that something isn't right.",
            "在中醫裡，伴隨胸悶、頻繁嘆氣和情緒波動的焦慮，通常是由氣鬱引起的。氣是你身體的生命能量 — 應該像河流一樣順暢流動。當氣鬱結時，能量堆積卻無法自由流動，尤其卡在胸脅部位，產生一種壓力感，讓你的心解讀為焦慮、煩躁，以及那種揮之不去的不對勁感。",
            "伝統的な中国医学（TCM）では、胸の圧迫感、頻繁のため息、気分の波を伴う不安は通常、気鬱（きうつ）が原因です。気とは体の生命エネルギー — 川のようにスムーズに流れるべきもの。気が鬱滞すると、エネルギーは蓄積するが自由に動けません。特に胸と脇肋に詰まり、心が不安や落ち着きのなさ、何かがおかしいという感覚として解釈する圧力が生まれます。"
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
            "Imagine a traffic jam on a six-lane highway. The cars (your energy) are all there — the fuel is fine, the engines are running. But nothing moves. The pressure builds. Horns blare. Everyone gets frustrated. That's Qi Stagnation. Your body has the energy it needs, but it's stuck in a bottleneck. The frustration you feel in traffic? That's exactly what your body feels when Qi can't flow. Your mind races because the energy has nowhere to go, and your body stalls because the signal to move never gets through.",
            "想像六車道高速公路上的大塞車。車子（你的能量）都在那裡 — 油夠、引擎也在跑。但什麼都動不了。壓力不斷累積，喇叭聲此起彼落，每個人都越來越煩躁。這就是氣鬱。你的身體有需要的能量，但卡在瓶頸裡。你在塞車時感受到的焦躁？那就是氣無法流動時你身體的感受。腦袋狂轉是因為能量無處可去，身體動不了是因為前進的信號傳不過去。",
            "6車線の高速道路の渋滞を想像してください。車（あなたのエネルギー）は全部そこにある — 燃料も問題なく、エンジンも動いている。でも何も動けない。圧力が蓄積し、クラクションが鳴り響き、誰もがイライラする。それが気鬱です。体には必要なエネルギーがあるが、ボトルネックに詰まっている。渋滞で感じる苛立ち？それは気が流れない時の体の感覚そのもの。頭が駆け巡るのはエネルギーの行き場がないから、体が動かないのは進めという信号が届かないから。"
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
            "Western medicine typically treats anxiety as a brain chemistry problem — low serotonin, overactive amygdala, neural misfiring. The solution? SSRIs to rebalance the chemicals. And for some people, that helps. But TCM sees anxiety differently: it's an energy flow problem. The fuel is there — you're not running on empty like Qi Deficiency. The pipes are blocked. Your body has plenty of energy, but it's trapped, creating pressure that manifests as racing thoughts, chest tightness, and that suffocating feeling of being stuck. Medication can dampen the alarm, but it doesn't clear the blockage.",
            "西醫通常把焦慮當成大腦化學問題 — 血清素不足、杏仁核過度活躍、神經訊號異常。解法？用SSRI重新平衡化學物質。對某些人來說確實有幫助。但中醫的看法不同：這是能量流動的問題。燃料在那裡 — 你不像氣虛那樣油箱見底。是管道堵住了。你的身體有充足的能量，但被困住了，產生壓力，表現為思緒奔馳、胸悶，以及那種令人窒息的卡住感。藥物可以壓低警報，但無法疏通堵塞。",
            "西洋医学は通常、不安を脳の化学的問題として扱います — セロトニン不足、扁桃体の過活動、神経信号の異常。解決策？SSRIで化学バランスを整える。一部の人には効果があります。しかし中医学は不安を別の角度から見ます：それはエネルギーの流れの問題です。燃料はある — 気虚のように空っぽではない。パイプが詰まっている。体には十分なエネルギーがあるが、閉じ込められ、思考の奔走、胸の圧迫、動けないという窒息感として現れる圧力が生まれます。薬は警報を抑えられても、詰まりを解消はしません。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Qi Stagnation", "氣鬱體質的食物：該吃與不該吃", "気鬱を助ける（悪化させる）食材")}
        </h2>
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

      {/* CTA */}
      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">
          {l(
            "Anxiety and chest tightness are key signs of the Qi Stagnant body type.",
            "焦慮和胸悶是氣鬱體質的關鍵信號。",
            "不安と胸の圧迫感は気鬱タイプの主要なサインです。"
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
