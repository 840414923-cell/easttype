"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function InternalHeatArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "internal-heat"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Patterns", "模式", "パターン")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Internal Heat", "內熱", "内熱")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Internal Heat Pattern: Why Your Body's Cooling System Is Undercharged",
          "內熱體質：為什麼你的身體冷卻系統充電不足",
          "内熱パターン：体の冷却システムが充電不足の理由"
        )}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {l("9 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約9分鐘 · 基於3000年東方身體智慧", "約9分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You wake up hot. Your pillow is damp. Your mouth is dry even though you drank water before bed. The room is a normal temperature, but your body feels like it's running a fever from the inside. Not menopause, not infection — just unexplained heat that shows up when the sun goes down.",
            "你醒來時覺得熱。枕頭是濕的。睡前明明喝了水，嘴巴還是乾的。房間溫度正常，但你的身體像從裡面發燒。不是更年期，不是感染 — 只是太陽下山後出現的不明熱感。",
            "目が覚めると暑い。枕が濡れている。寝る前に水を飲んだのに口が乾いている。部屋は普通の温度なのに、体は内側から熱を出している感じ。更年期でも感染症でもない — 太陽が沈むと現れる理由不明の熱。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What the Internal Heat Pattern Looks Like", "內熱體質長什麼樣", "内熱パターンはどんな感じか")}
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
            l("You wake up sweaty even in cool rooms", "即使在涼爽的房間裡也出汗醒來", "涼しい部屋でも汗をかいて目が覚める"),
            l("Your mouth and throat feel dry at night", "夜裡口乾喉嚨乾", "夜に口と喉が乾く"),
            l("You feel hot when others are comfortable", "別人覺得舒適時你卻覺得熱", "他の人が快適な時に暑く感じる"),
            l("Your cheeks flush easily, especially in the evening", "臉頰容易泛紅，尤其是傍晚", "頬がすぐに赤らむ、特に夕方"),
            l("You have trouble falling asleep because your mind is too active", "因為思緒太活躍而難以入睡", "頭が活発すぎて寝付けない"),
            l("You prefer cold drinks and cool environments", "偏好冷飲和涼爽的環境", "冷たい飲み物と涼しい環境を好む"),
            l("You've considered installing a personal fan at your desk... and your bed", "你考慮過在辦公桌裝個人風扇……還有床上", "デスクに…そしてベッドに個人用扇風機の設置を検討したことがある"),
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
            "Your body has an internal air conditioner. Yin is the coolant. When Yin is low, the AC runs but can't cool properly. The engine heats up, especially at night when external distractions fade and you notice the heat more. No amount of turning down the thermostat fixes a coolant leak.",
            "你的身體有一台內部空調。陰是冷媒。陰不足時，空調在運轉但無法正常冷卻。引擎升溫，尤其是夜晚外界干擾消退時你更容易察覺到熱。調低恆溫器修不好冷媒洩漏。",
            "体には内部のエアコンがある。陰は冷媒。陰が足りないと、エアコンは動いても正しく冷やせない。エンジンが熱くなる。特に夜、外の気晴らしが消えて熱が気になりやすくなる。サーモスタットをいくら下げても冷媒漏れは直らない。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The TCM Concept Behind This Pattern", "這個模式背後的中醫概念", "このパターンの背後にある中医学の概念")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine calls this Yin Deficiency (阴虚, pronounced \"yin-shoo\"). Yin is your body's cooling, moistening force. Yang is the heating, activating force. They need each other. When Yin drops, Yang has nothing to balance it, and heat builds up.",
            "中醫稱之為陰虛（阴虚）。陰是你身體的冷卻和滋潤力量。陽是加熱和活化的力量。它們互相需要。陰下降時，陽沒有東西平衡它，熱就累積起來。",
            "中医学ではこれを陰虚（いんきょ）と呼びます。陰は体を冷やし潤す力。陽は温め活性化する力。両者は互いに必要です。陰が下がると、陽をバランスするものがなくなり、熱が蓄積します。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Cooling Foods That May Help (and Heating Foods to Limit)", "可能有幫助的涼性食物（和應限制的熱性食物）", "役立つ涼性食材（と控えるべき熱性食材）")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("Cooling Foods", "涼性食物", "涼性食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Pear", "梨子", "梨"),
                l("Lily bulb", "百合", "ゆり根"),
                l("Lotus seed", "蓮子", "蓮の実"),
                l("Black sesame", "黑芝麻", "黒ごま"),
                l("Tofu", "豆腐", "豆腐"),
                l("Mung bean soup", "綠豆湯", "緑豆スープ"),
                l("Tremella mushroom", "銀耳", "白木耳"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("Heating Foods to Limit", "應限制的熱性食物", "控えるべき熱性食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Spicy food", "辛辣食物", "辛い食べ物"),
                l("Alcohol", "酒精", "アルコール"),
                l("Lamb", "羊肉", "羊肉"),
                l("Deep-fried food", "油炸食物", "揚げ物"),
                l("Excessive coffee", "過量咖啡", "コーヒーの飲みすぎ"),
                l("Garlic in large amounts", "大量大蒜", "大量のニンニク"),
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
            "Eat Yin-nourishing foods regularly. A bowl of mung bean soup, pear slices with honey, or a simple tofu dish — these are the kinds of everyday choices that may gently support your body's cooling system over time.",
            "經常吃滋陰食物。一碗綠豆湯、蜂蜜梨片或簡單的豆腐料理 — 這些日常選擇隨時間可能溫和支持身體的冷卻系統。",
            "定期的に陰を養う食材を食べてください。緑豆スープ、蜂蜜かけ梨の薄切り、シンプルな豆腐料理 — これらの日常の選択が時間をかけて体の冷却システムを穏やかにサポートする可能性があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Avoid adding fuel to the fire. Spicy, fried, and caffeine-heavy foods and drinks may feel satisfying in the moment but tend to intensify internal heat. Cutting back doesn't mean cutting out — just being more intentional.",
            "避免火上澆油。辛辣、油炸和高咖啡因的飲食可能當下滿足，但往往加劇內熱。減少不代表完全不吃 — 只是更有意識地選擇。",
            "火に油を注ぐのは避けてください。辛い、揚げた、カフェインの多い食べ物や飲み物はその瞬間は満足感があっても、内熱を強める傾向があります。減らすことは排除することではなく、より意識的になることです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Cool down before bed — but not with exercise. A short walk, light stretching, or a few minutes of slow breathing may help signal to your body that it's time to wind down. Vigorous workouts late at night tend to do the opposite.",
            "睡前降溫 — 但不是靠運動。短暫散步、輕度伸展或幾分鐘的慢呼吸可能有助於告訴身體是時候放鬆了。深夜的劇烈運動往往適得其反。",
            "寝る前に体を冷ます — でも運動ではなく。短い散歩、軽いストレッチ、数分のゆっくりした呼吸は、体にリラックスの時間だと知らせるのに役立つかもしれません。夜遅い激しい運動は逆効果になりがちです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Go to bed before 11 PM. In TCM, the hours before midnight are considered especially important for replenishing Yin. Staying up late night after night may be one of the fastest ways to deplete it further.",
            "晚上11點前上床睡覺。在中醫裡，午夜前的時間被認為對補充陰氣尤為重要。連續熬夜可能是進一步耗損陰氣最快的方式之一。",
            "午後11時前に寝てください。中医学では、深夜零時前の時間は陰を補うのに特に重要とされています。夜更かしを繰り返すことは、陰をさらに消耗する最も早い方法の一つかもしれません。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Night sweats and feeling hot at night can also be caused by thyroid conditions, infections, hormonal changes, or other medical issues. If your night sweats are severe, persistent, or accompanied by unexplained weight loss or fever, consult a licensed healthcare provider.",
            "此資訊僅供養生與自我覺察，非醫療診斷。夜間盜汗和夜間發熱也可能是甲狀腺疾病、感染、荷爾蒙變化或其他醫療問題。如果盜汗嚴重、持續或伴有不明原因的體重減輕或發燒，請諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。寝汗や夜間のほてりは甲状腺の疾患、感染症、ホルモンの変化、その他の医学的問題が原因の場合もあります。寝汗がひどい、持続する、または説明のできない体重減少や発熱を伴う場合は、医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <p className="text-text2 text-sm mb-3">
          {l(
            "These symptom guides explore specific signs connected to the Internal Heat pattern:",
            "這些症狀指南探討與內熱體質相關的具體信號：",
            "これらの症状ガイドは内熱パターンに関連する具体的なサインを探ります："
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            {l("Why Do I Wake Up at 3AM?", "為什麼我凌晨三點會醒？", "なぜ午前3時に目が覚める？")}
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-have-night-sweats" className="text-sm text-accent no-underline hover:underline">
            {l("Why Do I Have Night Sweats?", "為什麼我會盜汗？", "なぜ寝汗をかくのか？")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Body Type", "相關體質", "関連する体質")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Yin Deficient Type →", "陰虛體質 →", "陰虚タイプ →")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
