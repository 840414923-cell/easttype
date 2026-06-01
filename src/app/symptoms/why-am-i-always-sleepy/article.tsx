"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyAlwaysSleepyArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "why-am-i-always-sleepy"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Always Sleepy", "總是想睡", "いつも眠い")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Why Am I Always Sleepy? The Fog That Won't Lift", "為什麼我總是想睡？散不去的霧", "なぜいつも眠いのか？晴れない霧")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If you're fighting to keep your eyes open by 2 PM every day, even though you slept fine the night before, you know how this goes. The eyelids get heavy. Your head feels like it's stuffed with cotton. You'd give almost anything for a 20-minute nap, and sometimes you sneak one in your car during lunch. This isn't laziness. Something in your body is making you drowsy, and it's worth figuring out what.",
            "如果你每天下午2點就在努力不讓眼睛閉上，即使昨晚睡得很好，你知道這是什麼感覺。眼皮變重。腦袋像塞了棉花。你幾乎願意做任何事換一個20分鐘的小睡，有時午餐時間在車裡偷睡一下。這不是懶。你身體裡有東西讓你嗜睡，值得弄清楚是什麼。",
            "前夜によく眠れたのに、毎日午後2時に目を開けていようと戦っているなら、これがどういうことか分かるでしょう。まぶたが重い。頭に綿が詰まっているよう。20分の昼寝ならほとんど何でもする、時はお昼休みに車の中でこっそり寝る。これは怠けではありません。体の中の何かがあなたを眠くさせている、それが何か知る価値があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Here's the thing that might surprise you: being sleepy all the time is different from being tired all the time. They feel similar, but in Chinese medicine, they come from different root patterns and need different approaches. Tired is your body saying \"I'm out of gas.\" Sleepy is more like your body saying \"something heavy is sitting on my engine.\" Same outcome, different cause.",
            "可能讓你驚訝的是：一直想睡跟一直累是不同的。它們感覺相似，但在中醫裡，它們來自不同的根源模式，需要不同的對策。累是你的身體說「我沒油了」。想睡更像是你的身體說「有什麼重的東西壓在我的引擎上」。同樣的結果，不同的原因。",
            "驚くかもしれませんが：ずっと眠いのとずっと疲れているのは違います。似ているように感じますが、中医学では異なる根本パターンから来て、異なるアプローチが必要です。疲れは体が「ガソリンがない」と言っています。眠いのは体が「エンジンに重いものが乗っている」と言っているようなもの。同じ結果、違う原因。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This distinction matters because the approach that helps with one won't necessarily help with the other. Taking a nap might temporarily fix the sleepy feeling, but if the root pattern is Dampness, you'll wake up feeling just as groggy. Let's dig into what's actually going on.",
            "這個區別很重要，因為幫助其中一個的方法不一定幫助另一個。小睡可能暫時解決嗜睡感，但如果根源模式是濕氣，你醒來還是會覺得一樣迷糊。讓我們來深入了解到底怎麼回事。",
            "この区別は重要です。一方に効くアプローチがもう一方に効くとは限らないからです。昼寝は一時的に眠気を解決するかもしれませんが、根本パターンが湿気なら、起きても同じようにぼんやりしています。何が実際に起きているか掘り下げましょう。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What's Behind the Constant Sleepiness", "持續嗜睡背後的原因", "絶え間ない眠気の背後にあるもの")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The obvious reasons first: not enough sleep, poor sleep quality, sleep apnea, certain medications, and blood sugar crashes from eating too many refined carbs. All real possibilities. Sleep apnea in particular is underdiagnosed and worth checking for if you snore, wake up gasping, or feel like you barely slept despite being in bed for 8 hours.",
            "先說明顯的原因：睡眠不足、睡眠品質差、睡眠呼吸中止、某些藥物、和吃太多精製碳水造成的血糖崩跌。都是真正的可能性。睡眠呼吸中止尤其被低估，如果你打鼾、醒來喘氣或覺得在床上躺了8小時但幾乎沒睡，值得檢查。",
            "まず明白な理由から：睡眠不足、睡眠の質の低下、睡眠時無呼吸、特定の薬、精製炭水化物の摂りすぎによる血糖値の急降下。全て実際の可能性です。睡眠時無呼吸は特に診断不足で、いびきをかく、息切れで目覚める、8時間寝てもほとんど眠っていない気がする場合は検査する価値があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "But if you've addressed all of those and still feel like you're walking through molasses every afternoon, there might be something else happening. Some people find that no matter how much sleep they get, no matter how clean their diet is, the drowsiness persists. That's when looking at your body's constitutional patterns can open up a whole new set of options.",
            "但如果你解決了所有這些問題，每天下午還是覺得像在糖蜜裡走路，可能還有別的事情。有些人發現不管睡多少、飲食多乾淨，嗜睡就是不走。那時看看你身體的體質模式可以打開一整套全新的選項。",
            "でもそれら全てに対処しても毎日午後に糖蜜の中を歩いているような感じなら、何か別のことが起きているかもしれません。どれだけ寝ても、食事がどれだけきれいでも眠気が続く人がいます。その時、体の体質パターンを見ることで全く新しい選択肢が開けます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "In Chinese medicine, chronic daytime sleepiness that doesn't respond to more sleep usually comes down to two patterns: Qi Deficiency (not enough energy to stay alert) or Phlegm Damp (a heavy, foggy, wet quality weighing down your mental clarity). Sometimes both are present, creating a double-whammy of low energy plus heavy fog.",
            "在中醫裡，對多睡覺沒反應的慢性白天嗜睡通常歸結為兩種模式：氣虛（沒有足夠能量保持清醒）或痰濕（一種沉重、模糊、濕潤的品質壓著你的思緒清晰度）。有時兩者同時存在，造成低能量加重霧的雙重打擊。",
            "中医学では、もっと寝ても反応しない慢性的な日中の眠気は通常2つのパターンに帰着します：気虚（覚醒を保つエネルギー不足）または痰湿（重く、ぼんやりとした湿った性質が頭の明晰さを押さえつける）。時に両方があり、低エネルギーと重い霧のダブルパンチになります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("How Chinese Medicine Explains Daytime Sleepiness", "中醫怎麼解釋白天嗜睡", "中医学が日中の眠気をどう説明するか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Let's start with Qi Deficiency, since it's the more straightforward one. Your body needs Qi to stay alert and functional. When Qi is low, your brain doesn't have enough fuel to maintain clear consciousness. It's like a laptop in power-saving mode. The screen dims, the processor slows down, and everything takes longer. You're not broken, just underpowered.",
            "先說氣虛，因為它比較直接。你的身體需要氣來保持清醒和運作。氣低時，你的大腦沒有足夠燃料維持清醒的意識。就像省電模式的筆電。螢幕變暗，處理器變慢，一切花更長時間。你不是壞了，只是動力不足。",
            "まず気虚から始めましょう。より直接的だからです。体は覚醒と機能を保つために気が必要です。気が低いと、脳は明確な意識を維持する燃料が足りません。省電力モードのノートPCのようなもの。画面が暗くなり、プロセッサが遅くなり、全てに時間がかかる。壊れているのではなく、パワー不足なだけ。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Now the more interesting one: Phlegm Damp (痰湿). This is where Chinese medicine gets really specific about sleepiness. Phlegm Damp is basically moisture that has accumulated and thickened in your body, creating a heavy, sticky quality. When Phlegm Damp affects your head, it literally clouds your thinking and makes you drowsy. Think of it like fog rolling in over a landscape. Everything is still there, but you can't see clearly, and the weight of it makes you want to close your eyes.",
            "現在更有趣的：痰濕（痰湿）。這是中醫對嗜睡非常具體的地方。痰濕基本上是身體裡積累和變稠的水分，造成一種沉重黏膩的品質。當痰濕影響你的頭部時，它真的遮蔽你的思緒讓你嗜睡。想像霧籠罩一片風景。一切都還在，但你看得不清晰，它的重量讓你想閉上眼睛。",
            "そしてより面白いもの：痰湿（痰湿）。ここで中医学は眠気について非常に具体的になります。痰湿は基本的に体内に蓄積し濃縮された水分で、重くねばねばした性質を作ります。痰湿が頭に影響すると、文字通り思考を曇らせ眠くさせます。風景に霧がかかるようなもの。全てまだそこにあるが、はっきり見えず、その重さで目を閉じたくなる。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "What creates Phlegm Damp? Mostly diet and digestion. Eating too many Damp-producing foods (dairy, sweets, fried food, cold drinks, excessive fruit) when your digestion is already weak gives your body more moisture than it can process. Over time, that excess moisture thickens into Phlegm. Some people are constitutionally prone to this pattern, meaning their body naturally holds onto moisture more than others.",
            "什麼產生痰濕？主要是飲食和消化。消化已經弱時吃太多生濕食物（乳製品、甜食、油炸食物、冷飲、過量水果），給身體超過它能處理的水分。隨時間推移，多餘的水分變稠成痰。有些人在體質上就容易有這種模式，意味著他們的身體天生比別人更容易留住水分。",
            "痰湿は何が作る？主に食事と消化。消化がすでに弱っている時に湿気を生む食材（乳製品、甘いもの、揚げ物、冷たい飲み物、過度な果物）を食べすぎると、体が処理できる以上の水分が与えられます。時間と共に余剰水分が濃縮されて痰になります。ある人は体質的にこのパターンになりやすく、体が自然に他の人より水分を保持しやすいことを意味します。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Phlegm Damp sleepiness has a distinct quality. It's not just \"I need more sleep.\" It's more like \"I feel like my head is wrapped in a wet towel.\" There's a heaviness, a fogginess, a sense that your brain is wading through mud. You might also notice a coated tongue (especially thick and greasy), a feeling of fullness in your chest or stomach, and a general sense that everything takes more effort than it should.",
            "痰濕型嗜睡有一個獨特的品質。不只是「我需要多睡一點」。更像「我覺得頭上包了一條濕毛巾」。有一種沉重、模糊的感覺，一種大腦在泥裡跋涉的感覺。你可能也注意到舌苔（特別厚膩）、胸悶或胃脹滿感、和一切都比應該的更費力的整體感覺。",
            "痰湿の眠気には独特の性質があります。単に「もっと寝たい」ではありません。むしろ「頭に濡れたタオルが巻かれている感じ」。重さ、ぼんやり感、脳が泥の中を歩いている感覚。舌苔（特に厚くねばねば）、胸や胃の満腹感、全てが本来より努力を要する感覚にも気づくかもしれません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Body Types Behind the Sleepiness", "嗜睡背後的體質", "眠気の背後にある体質")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine identifies 9 body types, and daytime sleepiness shows up most in two of them.",
            "中醫辨識9種體質，白天嗜睡在兩種中最常出現。",
            "中医学は9つの体質を識別し、日中の眠気はそのうち2つに最も多く現れます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Qi Deficient type (气虚质) is sleepy because they're running on empty. Their battery is small and drains fast. They need frequent recharging and don't have the energy reserves to stay sharp all day. About 15% of people have this pattern. They tend to be the ones who crash hard in the afternoon and need that midday pick-me-up just to function.",
            "氣虛體質（气虚质）嗜睡是因為他們快空了。他們的電池小且消耗快。他們需要頻繁充電，沒有足夠的能量儲備整天保持敏銳。大約15%的人有這種模式。他們通常是下午猛跌、需要午間提神才能運作的人。",
            "気虚タイプ（気虚質）が眠いのは空に近いからです。バッテリーが小さくすぐなくなる。頻繁な充電が必要で、一日中シャープでいられるエネルギー予備がありません。約15%の人がこのパターン。午後にガクンと落ち、機能するために昼のリフレッシュが必要な人たち。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Phlegm Damp type (痰湿质) is sleepy because of the fog. They have energy, but it's buried under layers of moisture. These folks often carry weight around their middle, have oily skin, feel worse in humid weather, and experience that characteristic head-in-a-cloud feeling. About 10% of people fit this type. Coffee doesn't really help them because the problem isn't low stimulation, it's that the stimulation can't get through the fog.",
            "痰濕體質（痰湿质）嗜睡是因為那層霧。他們有能量，但埋在水分層下面。這些人通常腰圍較粗、皮膚油膩、潮濕天氣更差、有那種典型的頭在雲裡的感覺。大約10%的人符合這種類型。咖啡對他們沒什麼幫助，因為問題不是刺激不夠，是刺激穿不過那層霧。",
            "痰湿タイプ（痰湿質）が眠いのは霧のせい。エネルギーはあるが湿気の層の下に埋もれている。腹部に脂肪があり、脂性肌、蒸し暑い日に悪化、頭が雲の中にある特徴的な感覚。約10%の人がこのタイプ。コーヒーはあまり効かない。問題は刺激不足ではなく、刺激が霧を通り抜けられないから。"
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Qi Deficient Type →", "氣虛體質 →", "気虚タイプ →")}
          </Link>
          <Link href="/types/phlegm_damp" className="text-sm text-accent no-underline hover:underline">
            {l("Phlegm Damp Type →", "痰濕體質 →", "痰湿タイプ →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Clearing the Fog: Practical Steps", "清除迷霧：實用步驟", "霧を晴らす：実践ステップ")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If Qi Deficiency is your main pattern, the approach is about building energy. Warm, cooked, easily digestible foods are your friend. Congee (rice porridge), sweet potato, jujube dates, ginger tea, and chicken broth are all solid choices. Avoid cold, raw foods that drain what little energy you have. Get to bed before 11 PM, and add gentle movement like walking or tai chi rather than exhausting workouts.",
            "如果氣虛是你的主要模式，做法是建立能量。溫熱、煮熟、好消化的食物是你的朋友。米粥、地瓜、紅棗、薑茶和雞湯都是好選擇。避免消耗你僅有能量的寒涼生食。11點前上床，加上散步或太極等輕柔運動，而不是消耗性的鍛鍊。",
            "気虚が主なパターンなら、エネルギーを蓄えることがアプローチです。温かく、調理済みで、消化しやすい食材が味方。お粥、さつまいも、なつめ、しょうが茶、鶏スープが良い選択。わずかなエネルギーを奪う冷たい生食を避けて。午後11時前に就寝し、消耗する運動ではなく散歩や太極拳などの軽い運動を。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If Phlegm Damp is more your issue, the focus shifts to draining moisture. Adzuki beans, coix seed (Job's tears), winter melon, celery, and modest amounts of green tea are traditionally used to help the body process and release excess dampness. You also want to seriously limit the foods that create more: dairy, sweets, fried food, beer, and excessive fruit. It's not about deprivation. It's about giving your body less moisture to deal with while it clears the backlog.",
            "如果痰濕更是你的問題，重點轉為排濕。紅豆、薏仁、冬瓜、芹菜和適量綠茶是傳統上幫助身體處理和排出多餘濕氣的。你也要認真限制產生更多濕氣的食物：乳製品、甜食、油炸食物、啤酒和過量水果。不是剝奪。是給你的身體更少的水分去處理，同時清理積壓。",
            "痰湿がより問題なら、重点は湿気の排出に移ります。小豆、ハトムギ、トウガン、セロリ、適量の緑茶は伝統的に体が過剰な湿気を処理・排出するのを助けます。また湿気を作る食材を真剣に制限する：乳製品、甘いもの、揚げ物、ビール、過度な果物。我慢するのではありません。体が蓄積を片付ける間、扱う湿気を減らすこと。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "One practical habit that helps both patterns: start your day with warm water, not coffee. I know, coffee feels like the only thing keeping you going. But caffeine is a short-term fix that may worsen both Qi Deficiency and Phlegm Damp over time. Warm water in the morning wakes up your digestive system gently. Add a slice of ginger if you have Qi Deficiency, or a small handful of coix seed if Dampness is your main concern.",
            "一個幫助兩種模式的實用習慣：用溫水開始你的一天，不是咖啡。我知道，咖啡感覺是唯一讓你撐下去的東西。但咖啡因是短期解藥，長期可能讓氣虛和痰濕都更差。早上的溫水輕柔地喚醒你的消化系統。如果你是氣虛加一片薑，如果濕氣是主要問題加一小撮薏仁。",
            "両方のパターンに役立つ実践的な習慣：朝をコーヒーではなく温かい水で始める。分かっています、コーヒーだけが頑張れるもの。でもカフェインは短期的な解決策で、長期的には気虚も痰湿も悪化させる可能性があります。朝の温かい水は消化システムを優しく目覚めさせます。気虚ならしょうがのスライスを、湿気が主な悩みなら少量のハトムギを。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Avoid napping if you can, especially long ones. A 20-minute power nap might help temporarily, but longer naps can make the fogginess worse and create a cycle where you can't sleep at night, which makes you more drowsy the next day. If you absolutely need a nap, set an alarm for 20 minutes max and get up immediately when it goes off.",
            "可以的話避免午睡，特別是長的。20分鐘的小睡可能暫時有幫助，但更長的午睡可能讓迷霧更嚴重，形成晚上睡不著、隔天更嗜睡的循環。如果真的需要午睡，設定最多20分鐘的鬧鐘，響了馬上起來。",
            "昼寝は避けてください、特に長いものは。20分のパワーナップは一時的に役立つかもしれませんが、長い昼寝はぼんやり感を悪化させ、夜眠れなくなり翌日さらに眠くなるサイクルを作ります。絶対に昼寝が必要なら、最大20分のアラームをセットし、鳴ったらすぐ起きてください。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Movement helps clear both low energy and fog, but the right kind matters. Intense workouts might wipe you out further. Try brisk walking, light jogging, or dancing to music you enjoy. The goal is to get your blood moving and your body warm without depleting yourself. For Phlegm Damp types, sweating a little through gentle exercise is one of the best ways to help your body process and release that excess moisture.",
            "運動有助於清除低能量和迷霧，但正確的類型很重要。劇烈運動可能讓你更虛。試試快走、輕鬆慢跑或跳舞到你喜歡的音樂。目標是讓血液流動、身體溫暖，而不是耗盡自己。對痰濕體質來說，通過輕度運動微微出汗是幫助身體處理和釋放多餘水分最好的方式之一。",
            "運動は低エネルギーも霧もクリアにする助けになりますが、正しいタイプが重要です。激しい運動はさらに消耗させるかもしれません。速足の散歩、軽いジョギング、好きな音楽に踊るを試してください。目標は消耗することなく血流を良くし体を温めること。痰湿タイプにとって、軽い運動で少し汗をかくことは体が過剰な湿気を処理・排出する最善の方法の一つです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Pattern", "相關模式", "関連パターン")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/heavy-and-sluggish" className="text-sm text-accent no-underline hover:underline">
            {l("Heavy & Sluggish Pattern →", "沉重遲緩體質 →", "重だるいパターン →")}
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
          <Link href="/symptoms/always-bloated-after-eating" className="text-sm text-accent no-underline hover:underline">
            {l("Always Bloated After Eating", "吃完飯總是脹", "食後いつも膨満感")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
