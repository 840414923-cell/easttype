"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function NightSweatsArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "why-do-i-have-night-sweats"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Night Sweats", "盜汗", "寝汗")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Why Do I Have Night Sweats? What Your Body Is Trying to Tell You", "為什麼我會盜汗？你的身體在告訴你什麼", "なぜ寝汗をかく？体が伝えようとしていること")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("7 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約7分鐘 · 基於3000年東方身體智慧", "約7分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You wake up and the sheets are damp. Your pillow has a wet patch. Maybe your pajamas are stuck to your back. You haven't been running a fever. The room isn't that hot. You didn't just have a nightmare about showing up to a meeting unprepared. You're just... sweating. At 2 or 3 in the morning. Again.",
            "你醒來時床單是濕的。枕頭有水漬。也許睡衣黏在背上。你沒有發燒。房間沒有那麼熱。你沒有做關於開會沒準備的噩夢。你就是...流汗。凌晨2、3點。又來了。",
            "目が覚めるとシーツが湿っている。枕に濡れた跡がある。パジャマが背中に張り付いているかもしれない。熱はない。部屋はそんなに暑くない。準備せずに会議に出る悪夢を見たわけでもない。ただ...汗をかいている。深夜の2時か3時。また。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "This is one of those symptoms that sits in an uncomfortable gray zone. Your doctor runs blood work, checks your thyroid, asks about menopause, and everything comes back normal. Which is reassuring in one sense and completely unhelpful in another, because you're still waking up in a puddle.",
            "這是一種坐在不舒服灰色地帶的症狀。醫生抽血、檢查甲狀腺、問更年期，一切都正常。這在某種意義上令人安心，但在另一種意義上完全沒幫助，因為你還是醒在一灘汗水裡。",
            "これは不快なグレーゾーンにいる症状のひとつ。医者が血液検査をし、甲状腺をチェックし、更年期について聞き、全て正常。ある意味で安心だが、別の意味でまったく役に立たない。まだ汗の水たまりで目覚めているから。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Night sweats can be associated with a lot of things: hormonal changes, infections, certain medications, anxiety. If yours are new, severe, or accompanied by fever or weight loss, please talk to your doctor. But if you've been checked out and the answer is \"we can't find anything wrong,\" there's a perspective from Eastern medicine that might make sense of what's happening.",
            "盜汗可能跟很多東西有關：荷爾蒙變化、感染、某些藥物、焦慮。如果你的盜汗是新的、嚴重的、或伴隨發燒或體重減輕，請去看醫生。但如果你檢查過了答案是「找不到什麼問題」，東方醫學有一個角度可能可以解釋正在發生的事。",
            "寝汗は多くのものと関連する可能性があります：ホルモンの変化、感染、特定の薬、不安。新しい、激しい、または発熱や体重減少を伴う場合は医師に相談してください。でも検査を受けて「何も問題がない」という答えなら、東洋医学の観点が起きていることを説明できるかもしれません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What's Really Going On", "到底怎麼回事", "本当は何が起きているのか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Chinese medicine, night sweats are most often linked to a concept called Yin Deficiency. Yin is the cooling, moistening, resting part of your body's energy. It's what keeps things calm and contained. Yang is the warming, active part. They balance each other out, like the cold and hot taps on a faucet.",
            "在中醫裡，盜汗最常跟一個叫陰虛的概念連在一起。陰是你身體能量中冷卻、滋潤、休息的部分。它讓事情保持平靜和內斂。陽是溫暖、活躍的部分。它們互相平衡，像水龍頭的冷水跟熱水。",
            "中医学では、寝汗は陰虚と呼ばれる概念と最もよく結びつきます。陰は体のエネルギーの冷却、潤い、休息の部分。物事を静かに内側に保つもの。陽は温かく活発な部分。蛇口の冷水と熱水のようにバランスを取り合います。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "When Yin is low, there isn't enough cooling force to keep internal heat in check, especially at night when Yang is supposed to retreat. The heat pushes outward, and your body sweats to try to cool itself down. Think of it like a car with a broken radiator. The engine runs fine for a while, but without enough coolant, it starts overheating, especially when it's been running all day.",
            "陰不足時，沒有足夠的冷卻力量控制內熱，特別是在夜裡陽氣應該收斂的時候。熱往外推，身體流汗試圖降溫。把它想成一輛散熱器壞了的車。引擎跑一陣子沒問題，但冷卻液不夠，就開始過熱，特別是跑了一整天之後。",
            "陰が不足すると、特に夜に陽が引っ込むべき時に内部の熱を抑える冷却力が足りません。熱が外に押し出され、体は冷やそうとして汗をかきます。ラジエーターが壊れた車のようなもの。エンジンはしばらく正常に動くが、クーラントが足りないと、特に一日中動いた後、過熱し始めます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This is why night sweats from a TCM perspective often come with other signs: feeling warm at night, dry mouth, restless sleep, maybe a flushed face in the afternoon. These aren't random. They're all part of the same pattern of insufficient cooling capacity.",
            "這就是為什麼中醫角度的盜汗常伴隨其他跡象：夜裡覺得熱、口乾、睡不安寧、也許下午臉發紅。這些不是隨機的。它們都是冷卻能力不足這個模式的一部分。",
            "これが中医学の観点から寝汗が他の兆候を伴う理由です：夜に暑いと感じる、口の渇き、落ち着かない睡眠、午後の顔のほてり。これらはランダムではありません。冷却能力不足という同じパターンの一部です。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Which Body Types Are Most Affected", "哪些體質最受影響", "どの体質が最も影響を受けるか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Yin Deficient type (阴虚质) is the one most associated with night sweats. Roughly 10% of people fall into this category. These are people who tend to run warm, feel dry (dry skin, dry throat, dry eyes), and have a thin build. They often describe themselves as someone who \"can't handle heat\" or \"always feels thirsty.\" Their internal cooling reservoir is simply lower than average, so the body has less margin before heat starts pushing through.",
            "陰虛體質（阴虚质）是跟盜汗最相關的。大約10%的人屬於這個類型。這些人傾向偏熱、感覺乾燥（皮膚乾、喉嚨乾、眼睛乾）、體型偏瘦。他們常形容自己「受不了熱」或「總是口渴」。他們的內部冷卻儲備就是比一般人低，所以身體在熱開始衝出來之前的緩衝比較少。",
            "陰虚タイプ（陰虚質）が最も寝汗と関連しています。約10%の人がこのカテゴリに当てはまります。暑がり、乾燥しやすく（乾燥肌、喉の渇き、目の乾き）、やせ型の傾向があります。自分を「暑さに弱い」や「いつも喉が渇く」と表現することが多い。内部の冷却リザーブが平均より低く、熱が溢れ出すまでの余裕が少ない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Other patterns can also play a role. Someone with Qi Deficiency might sweat from sheer exhaustion, where the body can't hold things in. But the classic \"drenching sweat in the second half of the night\" pattern points most often to Yin Deficiency.",
            "其他模式也可能有影響。氣虛的人可能從純粹的疲憊中出汗，身體兜不住東西。但經典的「後半夜汗透」模式最常指向陰虛。",
            "他のパターンも関与する可能性があります。気虚の人は純粋な消耗から汗をかくことがあり、体が物を内側に保てない。しかし古典的な「夜後半にびっしょり」のパターンは最も多く陰虚を指します。"
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Yin Deficient Type →", "陰虛體質 →", "陰虚タイプ →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Simple Changes That May Help", "可能有幫助的簡單改變", "役立つかもしれない簡単な変更")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Yin-nourishing foods are the foundation here. Pear, lily bulb, black sesame, tofu, and mung bean soup are all traditional choices for supporting the body's cooling and moistening functions. These aren't exotic ingredients in many Asian households, and they're easy to incorporate. A poached pear with rock sugar before bed is a simple old remedy that many people swear by.",
            "滋陰食物是這裡的基礎。梨、百合、黑芝麻、豆腐、綠豆湯都是支持身體冷卻和滋潤功能的傳統選擇。這在許多亞洲家庭不是稀奇食材，很容易加入。睡前一碗冰糖燉梨是很多人信服的簡單老偏方。",
            "陰を養う食材がここでの基礎。梨、ゆり根、黒ごま、豆腐、緑豆スープは体の冷却と潤いの機能をサポートする伝統的な選択。多くのアジアの家庭で珍しい食材ではなく、取り入れやすい。寝る前の冰糖煮梨は多くの人が信頼するシンプルな昔からの偏方です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "On the flip side, some foods may make things worse. Spicy food, alcohol, lamb, and excessive coffee can all add heat to a system that's already struggling to cool down. This doesn't mean you can never have curry or a glass of wine. It means being aware that these tend to nudge things in the wrong direction if night sweats are already an issue.",
            "另一方面，有些食物可能讓情況更糟。辛辣食物、酒精、羊肉和過量咖啡都會給已經在努力降溫的系統加熱。這不代表你不能吃咖哩或喝杯酒。這意味著如果盜汗已經是個問題，這些東西可能把事情推向不好的方向。",
            "逆に物事を悪くする可能性のある食材もあります。辛い食べ物、アルコール、羊肉、過度なコーヒーは、既に冷やそうと頑張っているシステムに熱を加えます。カレーを食べたりワインを飲んだりできないという意味ではありません。寝汗が既に問題なら、これらが方向を間違った方向に押す可能性があるということです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Getting to bed before 11 PM matters more than most people think. In the TCM body clock, the hours before midnight are considered the most important for replenishing Yin. Every hour of sleep before midnight is said to be worth two hours after. Whether that's literally true or not, the general principle lines up: your body does its deepest repair work in the early part of the night.",
            "11點前上床比大多數人想的更重要。在中醫生理時鐘裡，午夜前的時間被認為是補陰最重要的。午夜前的每一小時睡眠據說等於午後的兩小時。不管這是不是字面上真的，基本原則一致：你的身體在夜裡前段做最深層的修復工作。",
            "午後11時前に寝ることはほとんどの人が思うより重要です。中医学の体時計では、真夜中前の時間が陰を補う最も重要な時間とされます。真夜中前の1時間の睡眠は後の2時間に値すると言われています。それが文字通り真実かどうかにかかわらず、基本原則は一致しています：体は夜の前半に最も深い修復を行います。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Cooling down before sleep can also help. A lukewarm (not cold) shower, a few minutes of slow breathing, or even just washing your face with cool water. The idea is to give your body a signal that it's time to shift into rest mode. Screens off, lights low, temperature comfortable. Small signals that add up.",
            "睡前降溫也有幫助。溫水（不是冷水）淋浴、幾分鐘的慢呼吸、或甚至只是用涼水洗個臉。想法是給身體一個信號：該切換到休息模式了。關掉螢幕、燈光調暗、溫度舒適。小信號加在一起。",
            "寝る前に体を冷やすのも役立つことがあります。ぬるめの（冷たくない）シャワー、数分のゆっくりした呼吸、または涼しい水で顔を洗うだけでも。体に休むモードに切り替える時間だという合図を送るのが狙いです。画面を消し、照明を落とし、温度を快適に。小さな合図が積み重なります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("When to See a Doctor", "什麼時候該看醫生", "医師に相談すべき時")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Night sweats can sometimes signal something that needs medical attention. If the sweating is drenching, enough to soak through clothes and sheets regularly, that's worth getting checked. If it's persistent, lasting for weeks without a clear reason, see a doctor. If it comes with fever, unexplained weight loss, or swollen lymph nodes, don't wait. This article is about the common pattern where everything checks out fine and you're still sweating, but the responsible thing is to rule out the serious stuff first.",
            "盜汗有時可能表示需要醫療關注的問題。如果出汗量大到經常濕透衣服和床單，值得去檢查。如果持續數週沒有明確原因，去看醫生。如果伴隨發燒、不明原因的體重減輕或淋巴結腫大，不要等。這篇文章是關於那種檢查都正常但你還是流汗的常見模式，但負責任的做法是先排除嚴重的問題。",
            "寝汗は時に医療の注意が必要なものを示すことがあります。汗が定期的に服やシーツを濡らすほどひどいなら、検査を受けるべき。数週間明確な理由なく続くなら医師に相談。発熱、説明のつかない体重減少、リンパ節の腫れを伴う場合は待たないでください。この記事は検査が全て正常でも汗をかく一般的なパターンについてですが、責任ある做法はまず深刻なものを除外することです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed text-sm">
          {l(
            "This article is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.",
            "本文僅供參考，不能替代專業醫療建議、診斷或治療。",
            "この記事は情報提供のみを目的としており、専門的な医療アドバイス、診断、治療の代わりにはなりません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Pattern", "相關體質", "関連するパターン")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            {l("Internal Heat Pattern →", "內熱體質 →", "内熱パターン →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            {l("Why Do I Wake Up at 3 AM?", "為什麼凌晨3點會醒？", "なぜ午前3時に目が覚める？")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
