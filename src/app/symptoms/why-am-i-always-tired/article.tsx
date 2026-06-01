"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysTiredArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "why-am-i-always-tired"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Always Tired", "總是累", "いつも疲れている")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Why Am I Always Tired? What Your Body Is Trying to Tell You", "為什麼我總是累？你的身體在告訴你什麼", "なぜいつも疲れているのか？体が伝えようとしていること")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If you're always tired even after a full night's sleep, you're not alone. You've probably heard \"get more sleep\" or \"exercise more\" so many times it makes you want to scream. But what if the problem isn't how much you sleep? What if your body is just running low on something sleep can't fix?",
            "如果你睡滿了還是累，你不是一個人。你大概聽過無數次「多睡一點」或「多運動」，聽到想尖叫。但如果問題不在於你睡多少呢？如果你的身體缺的是睡眠補不了的東西呢？",
            "十分眠てもいつも疲れているなら、あなただけではありません。「もっと寝なさい」「もっと運動しなさい」と何度も聞いて叫びたくなったでしょう。でも問題が睡眠量でないとしたら？体に睡眠では補えないものが足りないとしたら？"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "I spent years thinking I was just \"not a morning person\" or \"lazy.\" Turns out, my body was low on Qi — the energy that powers everything from digestion to thinking clearly. Once I understood this pattern, things started making sense in a way they never had before.",
            "我花了多年以為自己只是「不是晨型人」或「懶」。原來是我的氣不足 — 那種驅動從消化到清醒思考一切的能量的氣。了解這個模式後，一切突然說得通了。",
            "私は長年「朝型じゃないだけ」「怠け者なんだ」と思っていました。実は気が不足していただけ — 消化から明確な思考まで全てを動かすエネルギーである気が。このパターンを理解してから、今まで意味不明だったことがすべて繋がりました。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't about being dramatic. Chronic low energy affects your work, your relationships, your willingness to try new things. It quietly shrinks your life. Let's talk about what might actually be going on underneath.",
            "這不是誇大。持續的低能量影響你的工作、人際關係、嘗試新事物的意願。它悄悄縮小了你的生活。讓我們來談談底下到底可能是怎麼回事。",
            "大げさに言っているわけではありません。慢性的な低エネルギーは仕事、人間関係、新しいことに挑戦する意欲に影響します。静かにあなたの生活を縮めていく。何が本当に起きているのか話しましょう。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What's Really Behind the Constant Tiredness", "持續疲勞背後到底是什麼", "絶え間ない疲労の本当の理由")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Let's be honest: being tired all the time isn't normal, even though it's common. The usual suspects are poor sleep, bad diet, too much screen time, or not enough exercise. And sure, those things matter. But many people fix all of those and still feel like a phone stuck on 5% battery. That's when it's worth looking deeper.",
            "說實話：一直累並不正常，雖然很普遍。常見嫌疑犯是睡眠差、飲食不好、太多螢幕時間或不夠運動。當然那些有影響。但很多人把這些都改了還是覺得像手機卡在5%電量。那時就值得深入看看了。",
            "正直に言うと：いつも疲れているのは正常ではありません、一般的だけど。よくある原因は睡眠不足、食事、スクリーン時間、運動不足。もちろん重要です。でも全て改善してもまだスマホの5%バッテリーのように感じる人がいます。そこでもう少し深く見る価値があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Sometimes it's low iron, thyroid issues, or vitamin deficiencies. Your doctor can check those. But here's the thing a lot of people run into: the blood work comes back totally fine, and you're told everything looks normal. Great. But you still feel like garbage. That gap between \"normal test results\" and \"I can barely get through the afternoon\" is exactly where Eastern body wisdom has something useful to say.",
            "有時是缺鐵、甲狀腺問題或維生素不足。醫生可以檢查那些。但很多人碰到的是：血液檢查完全正常，醫生說一切看起來沒問題。太好了。但你還是覺得很糟。「正常檢查結果」和「我下午撐不過去」之間的鴻溝，正是東方身體智慧有話說的地方。",
            "時に鉄分不足、甲状腺の問題、ビタミン不足が原因です。医師はそれらをチェックできます。しかし多くの人が直面するのは：血液検査は完全に正常で、「全て問題ない」と言われる。素晴らしい。でもまだ最悪の気分。「正常な検査結果」と「午後を乗り切れない」の間のギャップこそ、東洋の体の知恵が役立つ場所です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Chinese medicine doesn't look at your blood. It looks at how your body functions — how well you digest, how warm your hands are, whether you sweat easily, how your voice sounds. These seemingly random details form a pattern, and that pattern tells a story about what your body needs.",
            "中醫不看你的血液。它看你身體的功能 — 你消化好不好、手溫不溫、是否容易出汗、聲音聽起來怎樣。這些看似隨機的細節形成一個模式，那個模式說出你的身體需要什麼的故事。",
            "中医学は血液を見ません。体の機能を見ます — 消化がどれくらい良いか、手が温かいか、汗をかきやすいか、声がどう聞こえるか。これらの一見ランダムな詳細がパターンを形成し、そのパターンが体に何が必要かの物語を語ります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("How Chinese Medicine Views Chronic Fatigue", "中醫怎麼看慢性疲勞", "中医学が慢性疲労をどう見るか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Traditional Chinese Medicine, the most common pattern behind \"always tired\" is called Qi Deficiency (气虚). Qi is your body's vital energy — think of it as the fuel running every single function, from your heartbeat to your thoughts. When Qi is low, nothing breaks exactly, but everything runs slower and costs more effort.",
            "在中醫裡，「總是累」最常見的模式叫氣虛（气虚）。氣是你身體的生命能量 — 想像成驅動每個功能的燃料，從心跳到思緒。氣低時，東西不會壞，但一切跑得更慢、更費力。",
            "伝統的な中国医学では、「いつも疲れている」の最も一般的なパターンは気虚（ききょ）と呼ばれます。気とは体の生命エネルギー — 心拍から思考まで全ての機能を動かす燃料と考えてください。気が低いと、何も壊れませんが、全てが遅くなり、より多くの労力が必要になります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Here's a useful comparison. Imagine your body is a car. Western medicine checks the oil, the fuel, the spark plugs. If those test fine, the car is \"healthy.\" Chinese medicine goes a step further and asks: but how does the engine feel when you drive it? Does it struggle on hills? Does it idle roughly? Those functional experiences matter, even if the diagnostics say everything is fine.",
            "一個有用的比喻。想像你的身體是一輛車。西醫檢查機油、燃油、火星塞。如果都正常，車子就是「健康」的。中醫多走一步問：但開起來引擎感覺如何？爬坡吃力嗎？怠速抖嗎？那些功能性的體驗很重要，即使診斷說一切正常。",
            "役立つ比喩があります。体を車だと想像してください。西洋医学はオイル、燃料、スパークプラグを点検します。正常なら車は「健康」です。中医学は一歩進んで聞きます：でも運転中にエンジンはどう感じますか？坂道で苦労しますか？アイドリングが荒いですか？診断が正常でも、その機能的な体験は重要です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Qi Deficiency is often linked to a few root causes: prolonged stress that wears you down over months, recovering from an illness that your body never fully bounced back from, eating too many cold and raw foods that force your digestive system to work overtime, or simply a constitutional tendency you were born with. The good news is that Qi can be supported and built up over time with the right approach.",
            "氣虛通常跟幾個根源有關：長期壓力把你幾個月慢慢磨掉、生病後身體沒完全恢復、吃了太多生冷食物讓消化系統加班、或單純就是你天生的體質傾向。好消息是，氣可以通過正確的方法隨時間支持和建立起來。",
            "気虚はいくつかの根本原因に関連することが多い：数ヶ月かけてあなたをすり減らす長期的なストレス、体が完全に回復しきっていない病後の状態、消化システムに残業を強いる冷たい生食の摂りすぎ、または生まれつきの体質的傾向。良いニュースは、正しいアプローチで気は時間をかけてサポートし、蓄積できるということです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Which Body Types Are Most Affected", "哪些體質最受影響", "どの体質が最も影響を受けるか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine identifies 9 distinct body types, and chronic fatigue shows up most often in two of them.",
            "中醫辨識9種不同的體質，慢性疲勞最常出現在其中兩種。",
            "中医学は9つの異なる体質を識別し、慢性疲労はそのうち2つに最も多く現れます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Qi Deficient type (气虚质) is the primary one. About 15% of people fall into this pattern. The hallmark is feeling wiped out even after adequate rest. People with this type often have a soft voice, sweat easily, catch colds more often, and prefer sitting over standing. It's like their battery is genuinely smaller than other people's.",
            "氣虛體質（气虚质）是主要的。大約15%的人屬於這種模式。標誌是即使充分休息也覺得精疲力竭。這種體質的人通常聲音輕柔、容易出汗、更常感冒、能坐就不站。就像他們的電池真的比別人的小。",
            "気虚タイプ（気虚質）が主なものです。約15%の人がこのパターンに当てはまります。特徴は十分休んでもへばり感じること。このタイプの人は声が小さい、汗をかきやすい、風邪を引きやすい、立てるなら座りたいことが多い。まるでバッテリーが他の人より本当に小さいかのよう。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Yang Deficient type (阳虚质) is the second. These folks feel tired AND cold. Their internal heater is underpowered, so their body cuts circulation to the extremities to protect core warmth. If you're always tired and your hands are like ice cubes, this might be your pattern.",
            "陽虛體質（阳虚质）是第二種。這些人又累又冷。他們的內部暖氣動力不足，所以身體減少四肢循環來保護核心溫暖。如果你總是累而且手像冰塊，這可能是你的模式。",
            "陽虚タイプ（陽虚質）が2番目。この人たちは疲れていて寒い。内部ヒーターの出力が低く、体が核心の保温のために四肢の循環を減らします。いつも疲れていて手が氷のようななら、これがあなたのパターンかもしれません。"
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Qi Deficient Type →", "氣虛體質 →", "気虚タイプ →")}
          </Link>
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Yang Deficient Type →", "陽虛體質 →", "陽虚タイプ →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Simple Changes That May Help", "可能有幫助的簡單改變", "役立つかもしれないシンプルな変化")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You don't need to flip your life upside down. Small shifts can stack up surprisingly fast. The biggest one: switch from cold, raw foods to warm, cooked meals. Your digestive system in TCM is like a cooking pot. If you throw ice-cold ingredients in, the pot has to spend energy heating everything up before it can even start digesting. For someone already low on Qi, that's energy you simply can't afford to waste.",
            "你不需要把生活翻轉過來。小的改變可以出乎意料地快速累積。最大的改變：從寒涼生食換成溫熱熟食。中醫裡你的消化系統像一個鍋子。如果你丟進冰冷的食材，鍋子要花能量把所有東西加熱才能開始消化。對已經氣虛的人來說，那是你浪費不起的能量。",
            "生活を完全に変える必要はありません。小さな変化が驚くほど早く積み重なります。最も大きいのは：冷たい生食から温かい調理済みの食事に替えること。中医学では消化システムは鍋のようなもの。冷たい食材を投げ込むと、鍋は消化を始める前に全てを温めるエネルギーを使います。すでに気が低い人にとって、それは浪費できないエネルギーです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Try starting your day with a bowl of congee (rice porridge) instead of dry cereal or toast. Congee is the number one recovery food in Chinese households because it takes almost zero digestive effort and delivers steady nourishment. Add a cup of warm ginger tea with a few jujube dates on the side. Most people with Qi Deficiency notice a real difference within two weeks of this simple swap.",
            "試試用一碗粥代替乾麥片或吐司開始你的一天。粥是中國家庭頭號恢復食物，因為它幾乎不需要消化努力，提供穩定的營養。加一杯溫薑茶配幾顆紅棗。大多數氣虛的人在這個簡單替換的兩週內就會感覺到真正的差別。",
            "乾燥したシリアルやトーストの代わりにお粥で一日を始めてみてください。お粥は中国家庭でNo.1の回復食です。ほぼ消化の労力なしで安定した栄養を届けるから。温かいしょうが茶となつめをいくつか添えて。ほとんどの気虚の人がこのシンプルな変更で2週間以内に本当の違いに気づきます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Go easy on caffeine. I know, I know. But TCM views coffee as borrowing energy from tomorrow to spend today. It doesn't create new Qi. It just stimulates what's already there. Over time, the debt catches up with you. If you can't quit entirely, try cutting back by half and replacing some cups with warm ginger tea or ginseng tea.",
            "少碰咖啡因。我知道，我知道。但中醫認為咖啡是借明天的能量花今天。它不創造新氣。只是刺激已經在那裡的。長期下來，債務會追上你。如果不能完全戒掉，試試減半，用溫薑茶或人參茶替換部分杯數。",
            "カフェインは控えめに。分かっています、分かっています。でも中医学ではコーヒーは明日のエネルギーを借りて今日使うと考えます。新しい気を作るわけではない。すでにあるものを刺激するだけ。長期的には借金が追いついてきます。完全にやめられないなら、半分に減らして温かいしょうが茶や人参茶に替えてみてください。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Move, but gently. Heavy workouts can actually drain Qi further if you're already depleted. Think walking, gentle yoga, tai chi, or even just 15 minutes of slow stretching. The goal is circulation, not exhaustion. You want to wake your body up, not beat it into submission.",
            "動，但要輕柔。如果你已經虛了，劇烈運動其實會進一步消耗氣。散步、輕柔瑜伽、太極，甚至15分鐘的慢伸展都可以。目標是循環，不是精疲力竭。你要喚醒身體，不是打到它服從。",
            "動いてください、でも優しく。激しい運動はすでに消耗している場合は気をさらに奪う可能性があります。散歩、軽いヨガ、太極拳、または15分のゆっくりストレッチ。目標は循環で、疲労困憊ではありません。体を叩きのめすのではなく、目覚めさせたいのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Get to bed before 11 PM. In TCM, the body clock matters. The hours before midnight are considered the most restorative for your Qi. Staying up past 11 consistently is like trying to fill a bucket with a hole in it. You can catch up later, but you'll never quite recover what you lost during those prime hours.",
            "11點前上床。在中醫裡，生理時鐘很重要。午夜前的幾小時被認為是對氣最有恢復力的。持續超過11點不睡就像試圖裝滿一個有洞的桶子。你可以之後補回來，但你永遠無法完全恢復在那些黃金時段失去的東西。",
            "午後11時前に寝てください。中医学では体時計が重要です。真夜中前の時間は気にとって最も回復的とされます。一貫して11時を過ぎて起きているのは、穴の開いたバケツに水を入れようとするようなもの。後で追いつけても、主要な時間に失ったものは完全には取り戻せません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Pattern", "相關模式", "関連パターン")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/low-vitality" className="text-sm text-accent no-underline hover:underline">
            {l("Low Vitality Pattern →", "低活力體質 →", "低活力パターン →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Sleepy?", "為什麼我總是想睡？", "なぜいつも眠いのか？")}
          </Link>
          <span className="text-text2/40">·</span>
          <Link href="/symptoms/why-do-i-feel-anxious" className="text-sm text-accent no-underline hover:underline">
            {l("Why Do I Feel Anxious?", "為什麼我會焦慮？", "なぜ不安を感じるのか？")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
