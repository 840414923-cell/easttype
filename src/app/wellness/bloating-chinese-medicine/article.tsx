"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function BloatingArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span><span>{l("Wellness", "養生", "ウェルネス")}</span>
        <span className="mx-1.5">›</span><span className="text-text2">{l("Bloating", "腹脹", "腹部の膨満感")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Bloating: What Chinese Medicine Says About That Heavy Feeling", "腹脹：中醫怎麼說那種沉重的感覺", "膨満感：その重い感じについて中医学が言うこと")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("5 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約5分鐘 · 基於3000年東方身體智慧", "約5分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            'In Traditional Chinese Medicine (TCM), chronic bloating — especially when it\'s accompanied by a feeling of heaviness, sluggishness, or "I ate three hours ago but still feel full" — is usually caused by Damp accumulation (湿气, pronounced "she-chee"). Dampness is like a sponge inside your body: it soaks up moisture but can\'t wring it out. Your digestive system gets bogged down, and everything feels heavy and slow.',
            "在中醫裡，慢性腹脹 — 尤其伴隨沉重、遲緩、或「三小時前吃的但還覺得撐」的感覺 — 通常是由濕氣積聚引起的。濕氣就像身體裡的海綿：吸了水但擰不出來。消化系統被拖慢，一切都感覺又重又慢。",
            "伝統的な中国医学（TCM）では、慢性の膨満感 — 特に重さ、だるさ、「3時間前に食べたのにまだ満腹」を伴うもの — は通常、湿気の蓄積が原因です。湿気は体の中のスポンジのようなもの：水分を吸収しても絞り出せない。消化システムが遅くなり、全てが重く遅く感じられます。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Your digestive system is a kitchen. When it's running smoothly, food comes in, gets processed, and waste goes out. But Dampness is like a clogged drain — water keeps filling up, nothing drains properly, and the whole kitchen gets soggy. No amount of eating less fixes a clogged drain. You need to dry out the system.",
            "你的消化系統是廚房。順暢時，食物進來、處理、廢物排出。但濕氣就像堵住的水管 — 水一直積，排不出去，整個廚房都濕噠噠的。少吃解決不了堵水管，你需要把系統弄乾。",
            "消化システムはキッチン。順調に動いていれば、食べ物が入って処理され、老廃物が出ていきます。しかし湿気は詰まった排水溝のようなもの — 水が溜まり続け、何も適切に排出されず、キッチン全体がびしょ濡れに。食べる量を減らしても詰まった排水溝は直らない。システムを乾かす必要があります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Damp Accumulation", "濕氣積聚的跡象", "湿気蓄積のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("You feel heavy and sluggish, especially in the morning", "覺得身體沉重遲緩，尤其是早上", "体が重くだるい、特に朝"),
            l("You tend to gain weight easily and lose it slowly", "容易發胖，減肥很慢", "太りやすく、痩せにくい"),
            l("You feel sticky or humid inside, especially in damp weather", "覺得體內黏膩，尤其是潮濕天氣", "体の中がネバネバする、特に湿気の多い日"),
            l("You often have a coated tongue or phlegm in your throat", "常有舌苔厚或喉嚨有痰", "舌に厚い苔がつく、喉に痰がからむ"),
            l("Your love language is 'I made you food, now let's sit'", "你的愛之語言是「我做了飯，然後我們坐著」", "愛の言葉は『ご飯作った、座ろう』"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Foods That Reduce Dampness", "祛濕食物", "湿気を取り除く食材")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Damp-Draining Foods", "✓ 祛濕食物", "✓ 湿気を除く食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Adzuki bean", "紅豆", "小豆"), l("Coix seed (Job's tears)", "薏仁", "ハトムギ"), l("Winter melon", "冬瓜", "トウガン"), l("Celery", "芹菜", "セロリ"), l("Green tea (moderate)", "綠茶（適量）", "緑茶（適量）"), l("Ginger tea", "薑茶", "しょうが茶")].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Damp-Creating Foods", "✗ 生濕食物", "✗ 湿気を作る食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Dairy products", "乳製品", "乳製品"), l("Cold drinks & ice water", "冷飲與冰水", "冷たい飲み物と氷水"), l("Sweets & sugar", "甜食與糖", "甘いものと砂糖"), l("Fried food", "油炸食物", "揚げ物"), l("Excessive fruit", "過量水果", "過度な果物"), l("Beer & alcohol", "啤酒與酒精", "ビールとアルコール")].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("A Simple Damp-Draining Recipe", "簡單祛濕食譜", "簡単な湿気除去レシピ")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Adzuki bean and coix seed tea: Boil 2 tablespoons each of adzuki beans and coix seeds in 4 cups of water for 30 minutes. Sip throughout the day. This is one of the most commonly recommended remedies in Chinese households for reducing dampness and bloating.",
            "紅豆薏仁茶：各2湯匙紅豆和薏仁加4杯水煮30分鐘。全天飲用。這是中國家庭最常推薦的祛濕消脹方子之一。",
            "小豆とハトムギの茶：小豆とハトムギを各大さじ2杯を4カップの水で30分煮る。一日中少しずつ飲む。中国家庭で最もよく推奨される湿気・膨満感の改善法の一つです。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Persistent bloating can also be caused by food intolerances, IBS, celiac disease, or ovarian cysts. If bloating is severe, sudden, or accompanied by pain, weight loss, or blood in stool, consult a doctor immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。持續腹脹也可能是食物不耐症、腸躁症、乳糜瀉或卵巢囊腫。如果腹脹嚴重、突然或伴隨疼痛、體重減輕或便血，請立即看醫生。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。持続的な膨満感は食物不耐症、過敏性腸症候群、セリアック病、卵巣嚢腫が原因の場合もあります。膨満感が激しい、突然、痛み、体重減少、血便を伴う場合は、直ちに医師にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["bloating-chinese-medicine"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Chronic bloating is one of the key signs of the Phlegm Damp body type.", "慢性腹脹是痰濕體質的關鍵信號之一。", "慢性の膨満感は痰湿タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">{l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}</Link>
      </section>
    </main>
  )
}