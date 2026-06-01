"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysColdArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "why-am-i-always-cold"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Always Cold", "總是冷", "いつも寒い")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Why Am I Always Cold? The Internal Heater Problem", "為什麼我總是怕冷？內部暖氣的問題", "なぜいつも寒いのか？内部ヒーターの問題")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If you're the person who always brings a sweater everywhere, even in summer, you're not weird. You're not being dramatic. Your body is telling you something. I used to think I was just \"bad with cold\" until I learned that in Chinese medicine, always feeling cold has a specific name and a specific set of solutions.",
            "如果你是那個到哪都帶毛衣的人，連夏天都帶，你不奇怪。你不是在誇大。你的身體在告訴你一些事。我以前以為自己只是「不耐寒」，直到我學到在中醫裡，總是怕冷有一個特定的名字和一組特定的解決方法。",
            "どこに行ってもセーターを持っていく人、夏でも持っていく人、あなたは変ではありません。大げさにしているわけでもありません。体が何かを伝えています。私は以前「寒さに弱いだけ」だと思っていましたが、中医学では常に寒いことに特定の名前と解決法があると知りました。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Maybe you sit on your hands during meetings. Maybe you wear socks to bed year-round. Maybe your partner complains that your feet are like ice blocks when you get under the covers. These aren't just quirks. In Eastern body wisdom, they're clues about how your internal heating system is running.",
            "也許你開會時坐在手上。也許你全年穿襪子睡覺。也許你的伴侶抱怨你上床時腳像冰塊。這些不只是怪癖。在東方身體智慧裡，它們是關於你內部暖氣系統運作狀態的線索。",
            "会議中に手の上に座るかもしれません。一年中靴下を履いて寝るかもしれません。パートナーが布団に入ると足が氷のようだと文句を言うかもしれません。これらは単なる癖ではありません。東洋の体の知恵では、内部暖房システムの動き方についての手がかりです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This page isn't about telling you to \"just wear more layers.\" It's about understanding why your body runs cold when other people are perfectly comfortable, and what you can do about it from the inside out.",
            "這頁不是告訴你「多穿幾層就好」。它是幫你理解為什麼別人覺得舒服你卻覺得冷，以及你可以從內到外做些什麼。",
            "このページは「もっと着ればいい」と言うためのものではありません。他の人が快適なのにあなたが寒い理由を理解し、内側から何ができるかを知るためのものです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What's Behind the Constant Cold Feeling", "持續怕冷背後的原因", "絶え間ない寒さの背後にあるもの")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Sure, sometimes being cold is about not wearing enough layers or sitting in a drafty room. But if you're always cold regardless of the environment, there's something else going on. Your thyroid might be underactive, which is worth checking with your doctor. Low iron or poor circulation could also play a role.",
            "當然，有時怕冷是因為穿得不夠或坐在通風的房間。但如果你不管環境如何都冷，那就是別的問題了。你的甲狀腺可能不夠活躍，值得讓醫生檢查。低鐵或循環不良也可能有影響。",
            "もちろん、寒いのは服が足りないとか風通しの良い部屋にいるからということもあります。でも環境に関わらずいつも寒いなら、別のことが起きています。甲状腺の機能低下の可能性があるので、医師にチェックしてもらう価値があります。鉄分不足や血行不良も関係するかもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "But here's what frustrates a lot of people: the blood work comes back fine. Thyroid is normal. Iron is normal. Vitamin D is fine. Everything checks out. Yet you're still sitting there with freezing hands while your coworker is in a t-shirt. That's the space where Eastern body wisdom offers a different perspective.",
            "但讓很多人挫折的是：血液檢查正常。甲狀腺正常。鐵正常。維生素D也正常。一切看起來都好。但你還是坐在那裡手冰涼，同事卻穿短袖。正是在這個空間裡，東方身體智慧提供了不同的視角。",
            "しかし多くの人をイライラさせるのは：血液検査は正常。甲状腺も正常。鉄も正常。ビタミンDも問題なし。全て異常なし。なのに同僚がTシャツなのにあなたは凍える手で座っている。この空間こそ、東洋の体の知恵が異なる視点を提供する場所です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Chinese medicine doesn't see cold sensitivity as random bad luck. It sees it as a pattern that makes sense once you understand how your body's internal heating works. The key concept here is Yang — the warming, active, energizing force in your body. When Yang is low, your internal furnace underperforms, and you feel it in your fingers, toes, and lower back.",
            "中醫不認為怕冷是隨機的運氣不好。它認為這是一個有道理的模式，一旦你了解身體內部暖氣如何運作。這裡的關鍵概念是陽 — 你體內溫暖、活躍、充滿能量的力量。陽低時，你的內部暖氣表現不佳，你在手指、腳趾和下背部感覺到它。",
            "中医学は寒がりをランダムな不運とは見ません。体の内部暖房がどう機能するか理解すれば筋が通るパターンとして見ます。ここでのキーコンセプトは陽 — 体の温める、活動的で、エネルギッシュな力。陽が低いと内部ヒーターの性能が下がり、指先、つま先、腰でそれを感じます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The TCM View: Yang Deficiency Explained", "中醫觀點：陽虛解析", "中医学の観点：陽虚の解説")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Traditional Chinese Medicine, being cold all the time is most often linked to Yang Deficiency (阳虚). Yang is your body's fire. It warms you, powers your metabolism, keeps things moving. When Yang is running low, your body does something smart but annoying: it prioritizes. It keeps your vital organs warm by pulling heat away from your extremities. Your hands and feet get the short end of the stick.",
            "在中醫裡，一直怕冷通常跟陽虛（阳虚）有關。陽是你身體的火。它溫暖你、驅動新陳代謝、保持東西運行。陽不足時，你的身體做了一件聰明但煩人的事：它排優先順序。它通過從四肢抽走熱量來保持重要器官溫暖。你的手和腳成了犧牲品。",
            "伝統的な中国医学では、ずっと寒いのは多くの場合陽虚（陽虚）と関連しています。陽は体の火です。温め、代謝を動かし、物事を回します。陽が不足すると、体は賢いけど迷惑なことをします：優先順位をつけます。四肢から熱を引き抜いて主要器官を温かく保ちます。手と足が我慢する番になります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Yang Deficiency doesn't usually appear overnight. It can develop slowly after years of eating cold foods (ice water, raw salads, smoothies), living in cold environments without proper warmth, being sick for a long time, or just getting older. Some people are born with a tendency toward it. Think of it like a pilot light that slowly dims over time.",
            "陽虛通常不是一夜之間出現的。它可能慢慢發展，經過多年吃冷食（冰水、生沙拉、冰沙）、住在寒冷環境沒有適當保暖、長期生病、或單純年紀大了。有些人天生就有這種傾向。想像一個慢慢變暗的引火燈。",
            "陽虚は通常一晩で現れません。冷たい食事（氷水、生サラダ、スムージー）を何年も食べる、適切な暖のない寒い環境に住む、長期間の病気、または単に年齢と共にゆっくり発展することがあります。ある人は生まれつきその傾向があります。時間と共にゆっくり薄れるパイロットライトのようなものです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Common signs that might point to Yang Deficiency include cold hands and feet that never seem to warm up, a preference for hot drinks and hot food, needing extra blankets at night, lower back soreness or knee weakness, frequent pale or clear urination, and feeling worse during cold weather. If several of these sound familiar, Yang Deficiency might be part of your picture.",
            "可能指向陽虛的常見跡象包括手腳從不溫暖、偏好熱飲和熱食、晚上需要額外毯子、腰酸或膝蓋無力、頻繁清長小便、天冷時感覺更差。如果其中幾個聽起來很熟悉，陽虛可能是你的一部分。",
            "陽虚を示唆する一般的なサインには、温まらない手足、温かい飲み物と食べ物の好み、夜の追加毛布の必要性、腰の痛みや膝の弱さ、頻繁な透明な尿、寒い天候で悪化する感覚があります。いくつか聞き覚えがあれば、陽虚があなたのパターンの一部かもしれません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Which Body Types Run Cold", "哪些體質容易怕冷", "どの体質が寒がりか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Among the 9 body types in Chinese medicine, two are most often associated with feeling cold all the time.",
            "在中醫的9種體質中，有兩種最常跟一直怕冷有關。",
            "中医学の9つの体質の中で、2つが常に寒いことと最も関連しています。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Yang Deficient type (阳虚质) is the main one. These people feel cold from the inside out. Cold hands, cold feet, cold lower back. They crave warmth and feel their best during summer. About 8% of people have this as their primary type. Their internal furnace simply doesn't produce enough heat, so they're always reaching for another layer.",
            "陽虛體質（阳虚质）是主要的。這些人從裡到外都冷。冷手、冷腳、冷腰。他們渴望溫暖，夏天感覺最好。大約8%的人以這個為主體質。他們的內部暖氣就是不夠熱，所以總是要再多穿一層。",
            "陽虚タイプ（陽虚質）がメインです。この人たちは内側から外側まで寒い。冷たい手、冷たい足、冷たい腰。温かさを求め、夏が一番快適に感じます。約8%の人がこの主要タイプです。内部ヒーターが十分な熱を生み出せず、いつももう一枚着ようとします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Qi Deficient type (气虚质) can also feel cold, but the main complaint is fatigue rather than temperature. Qi is the fuel, and Yang is the fire. You need fuel to make fire, so sometimes low Qi leads to low Yang over time. If you're both tired AND cold, you might have elements of both patterns.",
            "氣虛體質（气虚质）也會怕冷，但主要抱怨是疲勞而不是溫度。氣是燃料，陽是火。你需要燃料才能生火，所以有時氣低會隨時間導致陽低。如果你又累又冷，你可能兩種模式都有。",
            "気虚タイプ（気虚質）も寒さを感じることがありますが、主な悩みは温度より疲労です。気が燃料で陽が火。火を作るには燃料が必要なので、時として気不足が長引くと陽も低下します。疲れていて寒いなら、両方のパターンがあるかもしれません。"
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yang_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Yang Deficient Type →", "陽虛體質 →", "陽虚タイプ →")}
          </Link>
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Qi Deficient Type →", "氣虛體質 →", "気虚タイプ →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Warming Up From the Inside", "從內部開始暖起來", "内側から温まる")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The most direct way to support Yang is through what you eat. Warming foods in TCM include ginger, cinnamon, lamb, beef, black pepper, roasted nuts, fennel, onion, and leek. These aren't randomly chosen. Each one is classified based on centuries of observation about how it affects the body's temperature and energy. Start by adding fresh ginger to your cooking. It's probably the easiest warming food to incorporate, and many people notice a difference within days.",
            "支持陽最直接的方式是通過你吃的東西。中醫的溫性食物包括薑、肉桂、羊肉、牛肉、黑胡椒、烤堅果、茴香、洋蔥和韭菜。這些不是隨便選的。每一個都基於幾個世紀觀察它如何影響身體溫度和能量來分類。從在烹飪中加入新鮮薑開始。它可能是最容易加入的溫性食物，很多人幾天內就感覺到差別。",
            "陽をサポートする最も直接的な方法は食事です。中医学の温性食材にはしょうが、シナモン、羊肉、牛肉、黒胡椒、ローストナッツ、フェンネル、玉ねぎ、ニラがあります。これらはランダムに選ばれたものではありません。それぞれが体の温度とエネルギーにどう影響するか何世紀もの観察に基づいて分類されています。料理に新鮮なしょうがを加えるところから始めてください。おそらく最も取り入れやすい温性食材で、多くの人が数日内に違いに気づきます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Equally important: stop pouring ice on your internal fire. Ice water, cold smoothies, raw salads, watermelon, and excessive fruit all have a cooling effect on the body. You don't have to eliminate them entirely, but cutting back significantly can make a real difference. Try room temperature water instead of ice water. That alone is a meaningful change for Yang Deficient types.",
            "同樣重要：停止往你的內部火上澆冰。冰水、冰沙、生沙拉、西瓜和過量水果都對身體有冷卻效果。你不需要完全消除它們，但大幅減少會有真正的差別。試試常溫水代替冰水。僅此一項對陽虛體質就是一個有意義的改變。",
            "同様に重要：内側の火に氷を注ぐのをやめましょう。氷水、冷たいスムージー、生サラダ、スイカ、過度な果物はすべて体を冷やす効果があります。完全に排除する必要はありませんが、大幅に減らすことで本当の違いが出ます。氷水の代わりに常温の水を試してください。それだけでも陽虚タイプには意味のある変化です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Keep your lower back and belly warm. In TCM, the lower back and lower abdomen are considered the seat of Yang energy in the body. When these areas get cold, your whole system feels it. Try a hot water bottle on your lower back in the evening, or wear a light undershirt that covers your midsection even in summer when air conditioning is blasting.",
            "保持你的下腰和肚子溫暖。在中醫裡，下腰和下腹被認為是身體陽氣的所在。這些區域受寒時，你的整個系統都感覺得到。試試晚上在下腰放個熱水袋，或即使夏天空調猛吹也穿件覆蓋中腹的輕薄內搭。",
            "腰とお腹を温かく保ちましょう。中医学では腰と下腹部が体の陽気の座とされています。ここが冷えると全身に影響します。夜は腰に湯たんぽを試すか、夏でもエアコンが効いている時に腹部を覆う薄いインナーを着てください。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Warm foot soaks before bed can be surprisingly effective. Soak your feet in hot water (as hot as you can comfortably tolerate) for 15 to 20 minutes. Add a few slices of ginger or a handful of mugwort if you have it. This draws warmth down to your extremities and can help you sleep better too, which supports overall recovery.",
            "睡前溫水泡腳出乎意料地有效。用熱水（你可以舒適忍受的熱度）泡腳15到20分鐘。如果有薑片或艾草就加幾片。這把溫暖拉到你的四肢，也能幫你睡得更好，支持整體恢復。",
            "寝る前の足湯は驚くほど効果的です。快適に耐えられる熱さのお湯に15〜20分足を浸してください。しょうがのスライスやヨモギがあれば加えて。これは温かさを四肢に引き下げ、睡眠も改善するので全体的な回復をサポートします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Gentle movement helps, but skip the cold morning jogs if you're Yang Deficient. Exercise that makes you sweat heavily in cold weather can actually deplete Yang further. Try indoor yoga, gentle walking in warm environments, or tai chi. The goal is to generate internal warmth without exhausting yourself in the process.",
            "輕柔運動有幫助，但如果你是陽虛就別在冷天晨跑了。在冷天大量出汗的運動其實會進一步消耗陽。試試室內瑜伽、溫暖環境中輕鬆散步或太極。目標是產生內在溫暖而不是在過程中耗盡自己。",
            "軽い運動は役立ちますが、陽虚なら寒い朝のジョギングは避けてください。寒い中で大量に汗をかく運動は実際に陽をさらに消耗します。室内ヨガ、暖かい環境での軽い散歩、太極拳を試してください。目標は過程で疲弊することなく内側の温かさを生み出すことです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Pattern", "相關模式", "関連パターン")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/cold-sensitivity" className="text-sm text-accent no-underline hover:underline">
            {l("Cold Sensitivity Pattern →", "怕冷體質 →", "冷え性パターン →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-am-i-always-tired" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Tired?", "為什麼我總是累？", "なぜいつも疲れているのか？")}
          </Link>
          <span className="text-text2/40">·</span>
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
