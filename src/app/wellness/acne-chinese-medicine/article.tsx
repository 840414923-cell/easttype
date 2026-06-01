"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function AcneArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span><span>{l("Wellness", "養生", "ウェルネス")}</span>
        <span className="mx-1.5">›</span><span className="text-text2">{l("Acne", "痘痘", "ニキビ")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Acne & Chinese Medicine: Why Breakouts Start From the Inside", "痘痘與中醫：為什麼長痘是從裡面開始的", "ニキビと中医学：なぜ内側から始まるのか")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("5 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約5分鐘 · 基於3000年東方身體智慧", "約5分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Western dermatology treats acne as a surface problem: clogged pores, bacteria, excess oil. Chinese medicine asks: WHY is there excess oil and inflammation in the first place? In TCM, persistent acne — especially on the lower face, jawline, and back — is usually caused by Damp Heat (湿热, pronounced \"sheh-ruh\"). This means there's sticky warmth trapped inside your body, and it's pushing its way out through your skin.",
            "西方皮膚科把痘痘當表面問題：毛孔堵塞、細菌、油脂過多。中醫問的是：為什麼一開始會油脂過多和發炎？在中醫裡，持續長痘 — 尤其是下半臉、下巴和背部 — 通常是由濕熱引起的。這意味著體內有黏膩的熱氣排不出去，從皮膚表面往外冒。",
            "西洋の皮膚科はニキビを表面の問題として扱います：毛穴の詰まり、細菌、過剰な皮脂。中医学が問うのは：なそもそも過剰な皮脂や炎症があるのか？TCMでは、持続的なニキビ — 特に顔の下半分、顎ライン、背中 — は通常、湿熱が原因です。これは体の中にネバネバした熱が閉じ込められ、皮膚を通じて外に押し出されているということです。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Your body is a house with a furnace (Yang) and a ventilation system (Yin). Damp Heat means the furnace is cranked up, but the vents are clogged with sticky humidity. The heat can't escape through the proper channels, so it bursts through the walls — that's your skin breaking out. Creams and washes only paint over the cracks. To really fix it, you need to turn down the furnace AND clear the vents.",
            "你的身體是房子，有火爐（陽）和通風系統（陰）。濕熱意味著火爐開到最大，但通風口被黏膩的濕氣堵住了。熱排不出去，就從牆壁爆出來 — 那就是你的皮膚長痘。藥膏只刷了牆面。要真正解決，你需要調低火爐並疏通通風口。",
            "体は暖炉（陽）と換気システム（陰）のある家。湿熱とは暖炉が最大にされているが、換気口がネバネバした湿気で詰まっている状態。熱が正常な経路で逃げられず、壁を突き破る — それがニキビ。クリームや洗顔料は壁のひび割れを塗りつぶすだけ。本当に直すには、暖炉を下げて換気口をクリアにする必要があります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Damp Heat", "濕熱的跡象", "湿熱のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("You feel hot and sticky, especially in warm or humid weather", "覺得又熱又黏，尤其是溫暖潮濕的天氣", "暑くネバネバする、特に蒸し暑い日"),
            l("You're prone to acne, rashes, or skin redness", "容易長痘、起疹或皮膚泛紅", "ニキビ、発疹、赤みが出やすい"),
            l("You have a bitter or sticky taste in your mouth in the morning", "早上起來嘴裡有苦味或黏膩感", "朝起きると口が苦い・ネバネバする"),
            l("You feel irritable and impatient when it's hot", "天熱時容易煩躁不耐煩", "暑いとイライラし、せっかちになる"),
            l("You've been told 'you're a lot' at least 17 times in your life", "你這輩子被說過「你真的很有事」至少17次", "人生で「お前、濃いな」と17回は言われた"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Foods That Clear Damp Heat", "清濕熱食物", "湿熱を清す食材")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Heat-Clearing Foods", "✓ 清熱食物", "✓ 熱を清す食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Mung beans", "綠豆", "緑豆"), l("Bitter melon", "苦瓜", "ゴーヤ"), l("Cucumber", "黃瓜", "きゅうり"), l("Green tea", "綠茶", "緑茶"), l("Lotus root", "蓮藕", "レンコン"), l("Watermelon", "西瓜", "スイカ")].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Heat-Adding Foods", "✗ 助熱食物", "✗ 熱を加える食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Spicy food (chili, pepper)", "辛辣食物（辣椒、胡椒）", "辛い食べ物（唐辛子、胡椒）"), l("Fried food", "油炸食物", "揚げ物"), l("Alcohol", "酒精", "アルコール"), l("Excessive red meat", "過量紅肉", "過度な赤身肉"), l("Chocolate & sweets", "巧克力與甜食", "チョコレートと甘いもの"), l("Excessive coffee", "過量咖啡", "コーヒーの飲みすぎ")].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Severe or cystic acne should be evaluated by a dermatologist. If acne is painful, leaving scars, or not responding to over-the-counter treatments, consult a licensed healthcare provider.",
            "此資訊僅供養生與自我覺察，非醫療診斷。嚴重或囊腫型痘痘應由皮膚科醫生評估。如果痘痘疼痛、留疤或對非處方治療無效，請諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。重度または嚢胞性ニキビは皮膚科医の評価を受けるべきです。ニキビが痛い、傷が残る、市販の治療に反応しない場合は、医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["acne-chinese-medicine"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Persistent acne is one of the key signs of the Damp Heat body type.", "持續長痘是濕熱體質的關鍵信號之一。", "持続的なニキビは湿熱タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">{l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}</Link>
      </section>
    </main>
  )
}