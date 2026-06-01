"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function NightSweatsArticle() {
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
        <span className="text-text2">{l("Night Sweats", "夜間盜汗", "寝汗")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Night Sweats: What Chinese Medicine Says About Waking Up Hot", "夜間盜汗：中醫怎麼說", "寝汗：中医学はどう説明するか")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("5 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約5分鐘 · 基於3000年東方身體智慧", "約5分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "In Traditional Chinese Medicine (TCM), night sweats — especially when they're not caused by room temperature, menopause, or infection — are usually a sign of Yin Deficiency (阴虚, pronounced \"een-shoo\"). Yin is your body's cooling, moistening force. When Yin is low, there's not enough \"water\" to balance the \"fire,\" so internal heat builds up, especially at night when Yang energy should be resting.",
            "在中醫裡，夜間盜汗 — 尤其不是因為室溫、更年期或感染引起的 — 通常是陰虛的信號。陰是你身體的降溫和潤澤力量。陰不足時，沒有足夠的「水」來平衡「火」，所以內熱堆積，尤其是夜間陽氣本該休息的時候。",
            "伝統的な中国医学（TCM）では、室温、更年期、感染が原因ではない寝汗は、通常、陰虚（いんきょ）のサインです。陰とは体を冷やし潤す力。陰が不足すると、「水」が「火」のバランスを取れず、内熱が蓄積し、特に夜間に陽気が休むべき時に顕著になります。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Your body is an engine. Yang is the gas pedal, Yin is the coolant. If your coolant is low, the engine overheats — not because you're pressing the gas too hard, but because there's nothing to absorb the heat. That's why you wake up at 3 AM feeling like a slow-burning ember: the daytime heat hasn't been absorbed and released.",
            "你的身體是引擎。陽是油門，陰是冷卻液。冷卻液不足時引擎過熱 — 不是因為你踩油門太猛，而是因為沒有東西吸收熱量。所以你凌晨3點醒來感覺像一塊慢燒的炭：白天的熱沒被吸收和釋放。",
            "体はエンジン。陽はアクセル、陰はクーラント。クーラントが少ないとエンジンは過熱 — アクセルを踏みすぎたからではなく、熱を吸収するものがないから。だから深夜3時にゆっくり燃える炭のように目が覚める：昼間の熱が吸収・放出されていない。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Yin Deficiency", "陰虛的跡象", "陰虚のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("You feel warm or flushed, especially in the afternoon and evening", "覺得熱或臉紅，尤其是下午和晚上", "特に午後から夜にかけて暑い・のぼせる"),
            l("Your mouth and throat feel dry, even after drinking water", "口和喉嚨常覺得乾，喝水也沒用", "水を飲んでも口や喉が乾く"),
            l("You have trouble staying asleep — you wake up in the night", "睡不沉 — 半夜會醒", "眠りが浅い — 夜中に目が覚める"),
            l("You prefer cold food and drinks over hot ones", "偏好冷食冷飲，不愛熱的", "温かいものより冷たい食事・飲み物が好き"),
            l("Your skin or eyes sometimes feel dry and irritated", "皮膚或眼睛有時乾澀不適", "肌や目が乾いてイライラする"),
            l("Your best ideas come at midnight and your worst decisions come at noon", "最好的點子在半夜，最差的決定在中午", "最高のアイデアは深夜、最悪の決断は昼に来る"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Cooling Foods for Yin Deficiency", "陰虛體質的涼潤食物", "陰虚を冷ます・潤す食材")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Nourishing (Moistening) Foods", "✓ 滋陰潤燥食物", "✓ 滋陰潤燥の食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Pear", "梨", "梨"), l("Lily bulb", "百合", "ゆり根"), l("Black sesame", "黑芝麻", "黒ゴマ"), l("Tofu", "豆腐", "豆腐"), l("Mung bean soup", "綠豆湯", "緑豆スープ"), l("Honey water (room temp)", "蜂蜜水（常溫）", "はちみつ水（常温）")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Heating Foods to Limit", "✗ 應限制的燥熱食物", "✗ 制限すべき燥熱食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Spicy food (chili, pepper)", "辛辣食物（辣椒、胡椒）", "辛い食べ物（唐辛子、胡椒）"), l("Excessive coffee", "過量咖啡", "コーヒーの飲みすぎ"), l("Alcohol", "酒精", "アルコール"), l("Lamb and heavy meats", "羊肉和厚重肉類", "羊肉や重い肉類"), l("Deep-fried food", "油炸食物", "揚げ物"), l("Excessive ginger/garlic", "過量薑蒜", "しょうが・にんにくの摂りすぎ")].map((food, i) => (
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
            "This information is for wellness and self-awareness, not medical diagnosis. Night sweats can also be caused by menopause, infections (including tuberculosis), thyroid disorders, or certain medications. If night sweats are drenching, persistent, or accompanied by fever or weight loss, consult a doctor immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。夜間盜汗也可能是更年期、感染（包含結核病）、甲狀腺疾病或某些藥物引起的。如果盜汗嚴重浸濕衣物、持續不止，或伴隨發燒或體重減輕，請立即看醫生。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。寝汗は更年期、感染症（結核を含む）、甲状腺障害、特定の薬剤が原因の場合もあります。寝汗がひどく持続する、発熱や体重減少を伴う場合は、直ちに医師にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["night-sweats-chinese-medicine"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Night sweats are one of the key signs of the Yin Deficient body type.", "夜間盜汗是陰虛體質的關鍵信號之一。", "寝汗は陰虚タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}