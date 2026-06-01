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
  qi_stagnant: { en: { name: "The Clouded Peak", desc: "Mind races while body stalls. Energy builds up but can't flow freely. Tension, sighing, mood swings.", key: "Chest tightness, frequent sighing, mood swings" }, zh: { name: "氣鬱質", desc: "腦子狂奔身體卡住。能量堆積但無法自由流動。緊繃、嘆息、情緒起伏。", key: "胸悶、常嘆息、情緒起伏" }, ja: { name: "気鬱質", desc: "頭は猛スピード、体はストップ。エネルギー蓄積、自由に流れない。緊張、ため息、気分の波。", key: "胸苦しい、ため息、気分の波" } },
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
        <span>{l("Wellness", "養生", "ウェルネス")}</span>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Chinese Medicine Body Types", "中醫體質分類", "中医学の体質タイプ")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("The 9 Chinese Medicine Body Types — A Complete Guide", "中醫9種體質 — 完整指南", "中医学の9つの体質 — 完全ガイド")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("7 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約7分鐘 · 基於3000年東方身體智慧", "約7分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed">
          {l(
            "You've probably heard of Ayurveda's three doshas — Vata, Pitta, Kapha. But Chinese medicine has a more nuanced system: 9 body constitutions, each with distinct physical patterns, emotional tendencies, and ideal foods. This framework has been refined in wellness clinics across Asia for over 3,000 years.",
            "你可能聽過阿育吠陀的三種體質 — Vata、Pitta、Kapha。但中醫有更精密的體系：9種體質，每種有獨特的身體模式、情緒傾向和理想食物。這個框架在亞洲診所裡已經淬鍊了3000多年。",
            "アーユルヴェーダの3つのドーシャ — ヴァータ、ピッタ、カパ — は聞いたことがあるでしょう。しかし中医学にはより精緻なシステムがあります：9つの体質、それぞれに独自の身体パターン、感情的傾向、理想的食材があります。このフレームワークは3,000年以上アジアのクリニックで磨かれてきました。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{l("The 9 Types at a Glance", "9種體質速覽", "9つの体質一覧")}</h2>
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
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Ayurveda vs Chinese Medicine: What's Different?", "阿育吠陀 vs 中醫：有何不同？", "アーユルヴェーダ vs 中医学：何が違う？")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Both systems see your body as having an inherent pattern that determines how you respond to food, weather, and stress. But while Ayurveda groups everyone into 3 broad categories, Chinese medicine identifies 9 — giving you a more precise map of your body's tendencies. Think of it as the difference between a 3-color palette and a 9-color one: more nuance, more precision, more personalized guidance.",
            "兩個體系都認為你的身體有一種先天模式，決定了你對食物、天氣和壓力的反應。但阿育吠陀把所有人分成3大類，中醫分出9種 — 給你更精確的身體傾向地圖。就像3色和9色的差別：更多層次、更精準、更個人化。",
            "両方の体系は体に固有のパターンがあり、食事、天候、ストレスへの反応を決定すると考えています。しかしアーユルヴェーダは3つの大まかなカテゴリーに分け、中医学は9つに識別 — 体の傾向のより正確なマップを提供します。3色と9色のパレットの違い：より微妙、より正確、よりパーソナライズされた指導。"
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