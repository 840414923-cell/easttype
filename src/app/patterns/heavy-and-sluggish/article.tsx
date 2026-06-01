"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { PATTERN_FAQS } from "@/lib/pattern-faqs"

export default function HeavySluggishArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "heavy-and-sluggish"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/patterns" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Patterns", "模式", "パターン")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Heavy & Sluggish", "沉重遲緩", "重だるい")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Heavy & Sluggish Pattern: Why Your Body Holds Moisture Like a Sponge",
          "沉重遲緩體質：為什麼你的身體像海綿吸水",
          "重だるいパターン：体がスポンジのように水分を抱え込む理由"
        )}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {l("9 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約9分鐘 · 基於3000年東方身體智慧", "約9分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You feel heavy. Not sad-heavy — physically heavy. Like your body is made of wet clay. You're bloated after every meal, your brain is foggy, and no amount of sleep clears the sluggishness. Exercise doesn't help. Eating less doesn't help. Something about how your body processes what you consume is fundamentally off.",
            "你覺得沉重。不是難過的那種 — 是物理上的重。像身體是濕泥巴做的。每頓飯後都脹，腦子霧濛濛，睡多久都不清醒。運動沒用。少吃也沒用。你身體處理吃進去的東西的方式，根本上出了問題。",
            "体が重いと感じる。悲しい重さではない — 物理的な重さ。体が濡れた粘土でできているみたい。食後はいつも膨満感があり、頭が霧にかかったようで、いくら寝てもだるさが消えない。運動しても効かない。食事を減らしても効かない。体が摂取したものを処理する仕組みに根本的なズレがある。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What the Heavy & Sluggish Pattern Looks Like", "沉重遲緩體質長什麼樣", "重だるいパターンはどんな感じか")}
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
            l("You feel bloated after most meals", "大部分餐後都覺得脹", "食後によく膨満感がある"),
            l("Your body feels heavy, like wading through water", "身體沉重，像在水中行走", "体が重く、水の中を歩いているよう"),
            l("You're always sleepy, especially after eating", "總是想睡，特別是飯後", "いつも眠い、特に食後"),
            l("You gain weight easily and it's hard to lose", "容易發胖且很難減", "太りやすく痩せにくい"),
            l("Your thinking feels foggy and unclear", "思緒模糊不清晰", "思考がぼんやりして不明確"),
            l("You prefer lying down over standing", "寧可躺著也不想站著", "立つより横になりたい"),
            l("You've mentally renamed your favorite chair \"my permanent address\"", "你已經在心裡把最愛的椅子改名為「我的永久地址」", "お気に入りの椅子を心の中で「マイ永久住所」と呼んでいる"),
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
            "Your body is a sink. When the drain works, water flows through. When it's clogged, water pools, gets stagnant, and everything sitting in it gets soggy and heavy. The Heavy & Sluggish pattern is a clogged drain. The moisture is there, but your body can't move it out.",
            "你的身體是一個水槽。排水口正常時，水流得通。堵住時，水積起來，變死水，泡在裡面的東西都變得濕軟沉重。沉重遲緩體質就是堵住的水槽。水分在那裡，但你的身體排不出去。",
            "体は流し台のようなもの。排水口が機能していれば水は流れます。詰まっていると水が溜まり、滞り、中にあるものがすべてふやけて重くなる。重だるいパターンは詰まった排水口。水分はあるが、体がそれを排出できない。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The TCM Concept Behind This Pattern", "這個模式背後的中醫概念", "このパターンの背後にある中医学の概念")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine calls this Phlegm Damp (痰湿). Not literal phlegm. It's a way of describing moisture that accumulates because your body's \"drainage system\" — the Spleen and digestion — isn't processing efficiently. When the Spleen is sluggish, fluids don't get transformed and transported properly. They sit. They pool. They make everything feel heavy and slow.",
            "中醫稱之為痰濕（痰湿）。不是字面上的痰。它描述的是因為身體的「排水系統」— 脾和消化 — 效率不佳而積累的水分。脾遲鈍時，體液無法正常轉化和輸送。它們停滯、積聚，讓一切感覺沉重緩慢。",
            "中医学ではこれを痰湿（たんしつ）と呼びます。文字通りの痰ではありません。体の「排水システム」— 脾と消化 — が効率よく処理できずに溜まった水分を表現する言葉です。脾が鈍くなると、体液が正常に変換・輸送されず、停滞し、溜まり、すべてを重く遅く感じさせます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Damp-Draining Foods That May Help (and Damp-Creating Foods to Limit)", "利濕食物（和生濕食物）", "湿を除く食材（と湿を生む食材）")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("Damp-Draining Foods", "利濕食物", "湿を除く食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Adzuki beans", "紅豆", "小豆"),
                l("Coix seed (Job's tears)", "薏仁", "ハトムギ"),
                l("Winter melon", "冬瓜", "冬瓜"),
                l("Celery", "芹菜", "セロリ"),
                l("Green tea (moderate)", "綠茶（適量）", "緑茶（適量）"),
                l("Ginger tea", "薑茶", "しょうが茶"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("Damp-Creating Foods to Limit", "生濕食物（少碰）", "湿を生む食材（控える）")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Dairy", "乳製品", "乳製品"),
                l("Cold drinks", "冷飲", "冷たい飲み物"),
                l("Sweets", "甜食", "甘いもの"),
                l("Fried food", "油炸食物", "揚げ物"),
                l("Excessive fruit", "過量水果", "果物の摂りすぎ"),
                l("Beer", "啤酒", "ビール"),
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
            "Swap cold drinks for warm ones. Cold fluids slow down your digestive system the same way cold water makes oil congeal in a pan. Warm water or ginger tea after meals may help your body process what you just ate.",
            "把冷飲換成溫的。冷飲讓消化系統慢下來，就像冷水讓鍋裡的油凝固一樣。飯後溫水或薑茶可能有助於身體處理剛吃的東西。",
            "冷たい飲み物を温かいものに替えてください。冷たい飲み物は消化システムを遅くします。冷水が鍋の油を固めるのと同じ。食後に温かい水やしょうが茶を飲むと、体が食べたものを処理しやすくなるかもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Cook vegetables instead of eating them raw. Raw food takes more digestive energy to break down. If your Spleen is already sluggish, raw salads may be adding to the burden. Lightly stir-fried or steamed vegetables are generally easier on the system.",
            "把蔬菜煮熟而不是生吃。生食需要更多消化能量來分解。脾已經遲鈍了，生沙拉可能加重負擔。輕炒或蒸過的蔬菜通常對系統更溫和。",
            "野菜は生ではなく加熱してください。生食は分解により多くの消化エネルギーを必要とします。脾がすでに鈍っているなら、生サラダは負担を増すだけ。軽く炒めたり蒸したりした野菜のほうが体に優しいことが多いです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Reduce dairy and sweets. Both tend to create dampness in the body according to TCM. You don't have to eliminate them entirely — just notice how you feel after cutting back for a week or two.",
            "減少乳製品和甜食。中醫認為這兩類都容易在體內生濕。不必完全戒掉 — 只是試著減少一兩週，觀察身體的感受。",
            "乳製品と甘いものを減らしてください。中医学ではどちらも体内に湿を生みやすいとされています。完全にやめる必要はありません — 1、2週間減らして体の変化を感じてみてください。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Walk after meals. Even 10 minutes of slow walking after eating may help your body move things along instead of letting them sit and stagnate.",
            "飯後散步。即使飯後慢走10分鐘，也可能幫助身體推動消化，而不是讓東西停滯不動。",
            "食後に散歩してください。食後のゆっくりとした10分の散歩でも、体が滞らずに動かすのに役立つかもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Avoid sleeping right after eating. Lying down with a full stomach is like tipping over that clogged sink — nothing drains properly. Wait at least an hour if you can.",
            "避免飯後立刻睡覺。吃飽躺下就像把堵住的水槽倒過來 — 什麼都排不出去。可以的話至少等一小時。",
            "食後すぐに寝るのは避けてください。満腹で横になるのは詰まった流しをひっくり返すようなもの — 何も排水されない。できれば少なくとも1時間は待ってください。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. If your bloating is severe, persistent, or accompanied by pain, unexplained weight changes, or digestive issues that worsen over time, please consult a licensed healthcare provider.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的脹氣嚴重、持續，或伴隨疼痛、不明原因的體重變化、或隨時間惡化的消化問題，請諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。膨満感が激しい、持続する、または痛み、説明のできない体重変化、時間とともに悪化する消化器の問題を伴う場合は、医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <p className="text-text2 text-sm mb-3">
          {l(
            "These symptom guides explore specific signs connected to the Heavy & Sluggish pattern:",
            "這些症狀指南探討與沉重遲緩體質相關的具體信號：",
            "これらの症状ガイドは重だるいパターンに関連する具体的なサインを探ります："
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            {l("Always Bloated After Eating", "每次吃完都脹", "食べるといつも膨満感")}
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Sleepy?", "為什麼我總是想睡？", "なぜいつも眠いのか？")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Body Type", "相關體質", "関連する体質")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            {l("Phlegm Damp Type →", "痰濕體質 →", "痰湿タイプ →")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={PATTERN_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
