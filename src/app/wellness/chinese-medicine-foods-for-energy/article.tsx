"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function FoodsForEnergyArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Wellness", "養生", "ウェルネス")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Foods for Energy", "補氣食物", "エネルギーのための食材")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Chinese Medicine Foods for Energy: What to Eat When You're Always Tired", "中醫補氣食物：總是累的時候該吃什麼", "中医学のエネルギー食材：いつも疲れている時に食べるもの")}
      </h1>
      <p className="text-text2 text-sm mb-6">{l("9 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約9分鐘 · 基於3000年東方身體智慧", "約9分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-text leading-relaxed">
          {l(
            "TL;DR — Chinese medicine says fatigue isn't one thing. It's a pattern. Qi deficiency, Yang deficiency, Dampness — each needs different foods. Sweet potato, congee, jujube, and ginger are top Qi-builders. Cold drinks and raw salads drain energy if you're already running low. The right food for YOUR body type matters more than generic \"healthy\" eating. Take a body type quiz to find your match.",
            "摘要 — 中醫說疲勞不是一種東西，是一種模式。氣虛、陽虛、痰濕 — 各需要不同食物。地瓜、粥、紅棗、生薑是首選補氣食物。冷飲和生沙拉在氣虛時會消耗能量。吃對你體質的食物比吃「健康」食物更重要。做體質測驗找到你的匹配。",
            "要約 — 中医学では疲労は一つではなくパターン。気虚、陽虚、痰湿 — それぞれ異なる食材が必要。さつまいも、お粥、なつめ、しょうがは気補充のトップ。冷たい飲み物や生サラダは気が不足している時にエネルギーを奪う。自分の体質に合った食材が「健康的」な一般論より重要。体質クイズで自分に合うものを見つけよう。"
          )}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Why Chinese Medicine Approaches Energy Differently", "中醫為什麼從不同角度看能量", "中医学がエネルギーを違う視点から捉える理由")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Western energy advice is usually: sleep more, drink water, exercise. Solid advice, honestly. But Chinese medicine asks a different question: WHY is your energy low? Because in TCM, fatigue isn't one thing — it's a pattern. And different patterns need different foods.",
            "西方的能量建議通常是：多睡、喝水、運動。說實話，這些建議不錯。但中醫問的問題不同：你為什麼能量低？因為在中醫裡，疲勞不是一種東西 — 是一種模式。不同的模式需要不同的食物。",
            "西洋のエネルギーアドバイスは通常：もっと寝る、水を飲む、運動する。正直、悪いアドバイスではありません。でも中医学は別の質問をします：なぜエネルギーが低いのか？TCMでは、疲労は一つではなく、パターン。異なるパターンには異なる食材が必要です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Think of it this way. Two people walk into a clinic both saying \"I'm exhausted.\" One feels cold all the time, craves warmth, and gets tired after eating. The other feels wired-but-tired, gets afternoon crashes, and wakes up at 3am. Same complaint. Totally different patterns. Same \"energy-boosting\" advice won't work for both.",
            "這樣想吧。兩個人走進診所都說「我好累」。一個人總是怕冷、渴望溫暖、飯後疲倦。另一個人覺得累但精神緊繃、下午崩潰、凌晨三點醒來。同樣的抱怨。完全不同的模式。同樣的「補能量」建議對兩人不會都有效。",
            "こう考えてみてください。二人が診療所に来て、どちらも「疲れている」と言います。一人はいつも寒がり、温かさを求め、食後に疲れる。もう一人は疲れているけど神経が高ぶり、午後にクラッシュし、夜中の3時に目が覚める。同じ訴え。全く違うパターン。同じ「エネルギーブースト」アドバイスは両方には効きません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "If your Qi (vital energy) is low, you need Qi-boosting foods. If your Yang (warming energy) is low, you need warming foods. If Dampness is weighing you down, you need foods that dry and drain. Eating the wrong foods for your pattern can actually make you MORE tired. It's like putting diesel in a gas engine — the fuel might be \"good,\" but it's wrong for the system.",
            "如果你的氣（生命能量）低，你需要補氣食物。如果你的陽（溫暖能量）低，你需要溫性食物。如果痰濕拖累你，你需要燥濕的食物。吃錯體質的食物反而會讓你更累。就像把柴油加進汽油引擎 — 燃料可能「好」，但對這個系統是錯的。",
            "もし気（生命エネルギー）が低ければ、気を補う食材が必要。陽（温めるエネルギー）が低ければ、温性食材が必要。痰湿が重くのしかかっているなら、乾かして排出する食材が必要。自分のパターンに合わない食材は、逆にさらに疲れさせる。ガソリンエンジンに軽油を入れるようなもの — 燃料は「良い」かもしれないが、システムに合わない。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{l("Top 10 Qi-Boosting Foods (Backed by 3,000 Years of Use)", "10大補氣食物（3000年實踐驗證）", "10の気を補う食材（3,000年の実践に基づく）")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "These foods have been used across generations — in home kitchens, in herbal formulas, in postpartum recovery meals. They're not exotic. Most of them are probably in your pantry right now. What makes them special is how they work WITH your digestion instead of against it.",
            "這些食物世代相傳 — 在家庭廚房、草藥方子、產後恢復餐中都有。它們不稀奇。大多數可能就在你的廚房裡。它們特別的地方在於跟你的消化系統合作，而不是對抗。",
            "これらの食材は世代を超えて使われてきました — 家庭のキッチン、漢方処方、産後の回復食など。珍しいものではありません。たぶん今あなたの台所にもあるはず。特別なのは、消化に逆らわずに協力して働くことです。"
          )}
        </p>
        <div className="space-y-3">
          {[
            { food: l("Sweet potato", "地瓜", "さつまいも"), why: l("Gentle, easy to digest, steadily builds Qi without overstimulating. Roasted, steamed, in soup — it's hard to get wrong.", "溫和好消化，穩定補氣不刺激。烤的、蒸的、煮湯 — 很難出錯。", "穏やかで消化しやすく、気を安定して補う。焼く、蒸す、スープに入れる — 失敗しにくい。") },
            { food: l("Rice porridge (congee)", "米粥", "お粥"), why: l("The #1 recovery food in Chinese households — easy on the stomach, deeply nourishing. When someone's sick, tired, or recovering, this is what gets made.", "中國家庭第一恢復食物 — 養胃深層滋養。生病、疲勞、恢復期，就煮這個。", "中国家庭の回復食No.1 — 胃に優しく深く滋養。病気、疲労、回復期にはこれ。") },
            { food: l("Chinese dates (jujube)", "紅棗", "なつめ"), why: l("Used in nearly every Qi tonic recipe — mildly sweet, builds blood and energy. Simmer them in tea, toss them in soup, or just snack on a few.", "幾乎每個補氣方子都有 — 微甜，補血補氣。泡茶、煮湯、或直接當零食。", "ほぼ全ての気補充レシピに使用 — まろやかで血と気を補う。お茶に入れる、スープに加える、そのままおやつに。") },
            { food: l("Ginger", "生薑", "しょうが"), why: l("Warms the stomach, improves absorption of all other foods — the catalyst. A few slices in hot water is maybe the simplest Qi-boosting habit you can start today.", "暖胃，促進所有其他食物的吸收 — 催化劑。幾片薑加熱水，可能是今天就能開始的最簡單補氣習慣。", "胃を温め、他の食材の吸収を促進 — 触媒。熱湯に数切れ入れるだけで、今日始められる最もシンプルな気補強習慣。") },
            { food: l("Goji berries", "枸杞", "クコの実"), why: l("Gentle Qi and Yin tonic — perfect for tired eyes and brain fog. Don't eat handfuls though; a small pinch in tea or soup is the traditional way.", "溫和的補氣滋陰良品 — 適合眼疲勞和腦霧。但別抓一把吃；傳統用法是茶或湯裡放一小撮。", "穏やかな気・陰補強 — 目の疲れや脳の霧に最適。ただし手掴みで食べないこと。伝統的にはお茶やスープに一つまみ。") },
            { food: l("Chicken broth", "雞湯", "鶏スープ"), why: l("Warm, protein-rich, easy to absorb — the original energy drink. Slow-simmered with ginger and jujube is the classic combination.", "溫暖、高蛋白、好吸收 — 原始的能量飲料。加薑和紅棗慢燉是經典搭配。", "温かくタンパク質豊富で吸収しやすい — 元祖エナジードリンク。しょうがとなつめと一緒にじっくり煮込むのが定番。") },
            { food: l("Shiitake mushrooms", "香菇", "しいたけ"), why: l("Strengthens the spleen (the organ that makes Qi from food). Dried shiitake has a more concentrated effect — soak and add to soups or stir-fries.", "健脾（從食物產生氣的器官）。乾香菇效果更集中 — 泡發後加到湯或炒菜裡。", "脾を強める（食事から気を作る臓器）。乾燥しいたけの方が効果が凝縮 — 戻してスープや炒め物に。") },
            { food: l("Yam (Chinese yam)", "山藥", "長芋/山芋"), why: l("Mild and stabilizing — builds Qi while calming the digestion. It's one of those foods that seems boring but quietly does a lot of good.", "溫和穩定 — 補氣同時安撫消化。看起來不起眼，但默默做了很多好事。", "穏やかで安定 — 気を補いながら消化を落ち着かせる。地味に見えるけど、静かにたくさんの良いことをする食材。") },
            { food: l("Millet", "小米", "粟"), why: l("The grain for tired people — easy to digest, warming, nourishing. Cook it as porridge with a few jujubes and you've got a proper Qi-building breakfast.", "疲勞者的穀物 — 好消化、溫暖、滋養。加幾顆紅棗煮粥，就是正經的補氣早餐。", "疲れた人向けの穀物 — 消化しやすく温かく滋養あり。なつめを数個入れてお粥にすれば、本格的な気補強の朝食に。") },
            { food: l("Beef (in small amounts)", "牛肉（少量）", "牛肉（少量）"), why: l("Rich in Qi-building nutrients — but don't overdo it, heavy meats can slow digestion. A few thin slices in noodle soup is the sweet spot.", "富含補氣營養 — 但不要過量，厚重的肉會減減緩消化。麵湯裡加幾片薄牛肉剛剛好。", "気を作る栄養豊富 — ただし取りすぎると消化が遅くなる。麺スープに薄切りを数枚入れるのがちょうどいい。") },
          ].map((item, i) => (
            <div key={i} className="bg-cream/20 border border-border/50 rounded-xl p-4">
              <span className="font-semibold text-accent text-sm">{item.food}</span>
              <p className="text-sm text-text2 mt-1 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Foods That Drain Your Energy", "消耗你能量的食物", "エネルギーを奪う食材")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "These aren't \"bad\" foods — but if you're already low on Qi, they make things worse by forcing your body to spend energy it doesn't have:",
            "這些不是「壞」食物 — 但如果你已經氣虛，它們會強迫身體花掉本來就沒有的能量，讓情況更糟：",
            "これらは「悪い」食材ではありません — しかしすでに気が不足している場合、持っていないエネルギーを消費させ、状況を悪化させます："
          )}
        </p>
        <ul className="space-y-2">
          {[
            l("Ice water and cold drinks — your body wastes Qi heating them up to body temperature. Room temperature or warm is just... easier on your system.", "冰水和冷飲 — 身體要花氣把它加熱到體溫。室溫或溫的對身體更輕鬆。", "氷水と冷たい飲み物 — 体はそれを体温まで温めるために気を浪費する。常温か温かい方が体への負担が少ない。"),
            l("Raw salads in excess — raw food requires more digestive energy than cooked food. A little is fine. A giant bowl every day might not be.", "過量生沙拉 — 生食比熟食需要更多消化能量。少量可以。每天一大碗可能不行。", "生野菜サラダの過剰摂取 — 生食は調理済み食材より消化エネルギーが必要。少しは大丈夫。毎日大盛りはどうかも。"),
            l("Too much caffeine — borrows energy from tomorrow to spend today. That afternoon crash? That's the loan coming due.", "過量咖啡因 — 借明天的能量花在今天。下午的崩潰？那就是貸款到期了。", "カフェインの摂りすぎ — 明日のエネルギーを借りて今日使う。午後のクラッシュ？それはローンの返済期日。"),
            l("Cold smoothies — same problem as ice water, but disguised as healthy. Your body still has to warm it up. That takes energy you might not have.", "冰沙 — 和冰水一樣的問題，只是偽裝成健康的。身體還是要把它加溫。那需要你可能沒有的能量。", "冷たいスムージー — 氷水と同じ問題、健康そうに見えるだけ。体はやはり温めなければならない。それはあなたにないかもしれないエネルギーを必要とする。"),
            l("Excessive sugar — gives a quick spike then a deeper dip. In TCM terms, it creates temporary heat that leaves you more depleted afterward.", "過量糖分 — 快速飆升然後更深跌落。中醫來說，它產生短暫的熱，之後讓你更虛。", "過剰な砂糖 — 急上昇の後により深い低下。TCMの言葉で言えば、一時的な熱を作り、その後さらに消耗させる。"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-text2/40 text-sm mt-0.5 flex-shrink-0">–</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("What It's Like When You Eat Wrong for Your Type", "吃錯體質是什麼感覺", "自分の体質に合わない食べ方をするとどうなるか")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Maybe this sounds familiar. You wake up already tired. You grab a smoothie because it's \"healthy\" — but an hour later you feel even more sluggish. Lunch is a big raw salad. You feel virtuous for about 20 minutes, then the brain fog rolls in and you can barely keep your eyes open at your desk.",
            "也許這聽起來很熟悉。你醒來就已經累了。你拿一杯冰沙因為它「健康」— 但一小時後你覺得更遲鈍。午餐是一大碗生沙拉。你覺得很自律大概20分鐘，然後腦霧來了，在桌前幾乎睜不開眼。",
            "これに聞き覚えがあるかもしれません。起きた時すでに疲れている。「健康的」だからスムージーを飲む — でも1時間後にもっとだるくなる。昼食は大きな生サラダ。約20分間は良い気分、その後脳の霧が来てデスクでまぶたが開かない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "By 3pm you're reaching for coffee or something sweet. It works for a bit. Then you crash harder. Dinner is whatever's easy — maybe cold leftovers, maybe takeout. You go to bed feeling heavy and wake up feeling like you didn't sleep at all.",
            "下午三點你伸手拿咖啡或甜的東西。撐了一下。然後摔得更重。晚餐隨便吃 — 可能是冷剩菜，可能是外賣。上床時覺得沉重，醒來覺得好像根本沒睡。",
            "午後3時にはコーヒーや甘いものに手が伸びる。しばらく効く。その後もっと激しくクラッシュ。夕食は簡単なもの — 冷たい残り物かテイクアウト。重い感じで寝て、全く寝ていない感じで目が覚める。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "The thing is, none of these foods are evil. But if you're running on low Qi — and a lot of people are — cold, raw, and sugary foods are like pouring water on a dim fire. You keep eating \"right\" by conventional standards and feeling worse. That disconnect is frustrating. Chinese medicine offers a reason: you're eating for someone else's body type, not yours.",
            "問題是，這些食物都不是邪惡的。但如果你氣虛 — 很多人都是 — 冷的、生的、甜的食物就像往微弱的火上澆水。你按照常規標準吃「對」卻感覺更差。那種脫節令人沮喪。中醫給了一個理由：你在吃別人體質該吃的，不是你的。",
            "問題は、これらの食材が悪いわけではないということ。でも気が不足しているなら — 多くの人がそう — 冷たい、生の、甘い食材は弱い火に水をかけるようなもの。一般的な基準で「正しく」食べているのに悪化する。そのズレはフラストレーションになる。中医学は理由を示す：自分ではなく他人の体質に合った食事をしている。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Simple Energy Meal Plan: A Sample Day of Qi-Building Meals", "簡單能量餐計畫：補氣一日範例", "シンプルエネルギー食事プラン：気補強の1日例")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "This isn't a prescription — just a rough template for someone with Qi deficiency. Adjust based on what you actually like and what's available. The idea is warm, cooked, easy-to-digest meals throughout the day.",
            "這不是處方 — 只是氣虛體質的粗略模板。根據你實際喜歡的和能取得的來調整。重點是一整天吃溫的、煮熟的、好消化的餐食。",
            "これは処方ではなく — 気虚の人向けの大まかなテンプレート。実際に好きなものや手に入るものに合わせて調整してください。ポイントは1日を通して温かく、調理済みで、消化しやすい食事。"
          )}
        </p>
        <div className="space-y-3">
          {[
            { meal: l("Morning", "早上", "朝"), desc: l("Warm water with a few slices of fresh ginger. Then millet porridge with 3-4 jujubes and a small handful of goji berries. Simple, warming, and your stomach will thank you.", "溫水加幾片新鮮生薑。然後小米粥加3-4顆紅棗和一小把枸杞。簡單、溫暖，你的胃會感謝你。", "新鮮なしょうがを数切れ入れた白湯。その後、なつめ3-4個とクコの実一掴みを入れた粟粥。シンプルで温かく、胃が喜ぶ。") },
            { meal: l("Mid-morning", "上午", "午前"), desc: l("A small sweet potato — steamed or roasted. Maybe a cup of warm jujube tea if you're feeling fancy. No snacking rules here, just eat when you're genuinely hungry.", "一個小地瓜 — 蒸的或烤的。講究的話來杯溫紅棗茶。沒有什麼零食規則，真的餓了就吃。", "小さなさつまいも1個 — 蒸すか焼く。気分が向いたら温かいなつめ茶を。おやつのルールはない、本当に空腹なら食べる。") },
            { meal: l("Lunch", "午餐", "昼食"), desc: l("Rice with chicken broth soup, shiitake mushrooms, and a few slices of beef. Add some cooked greens — bok choy or spinach. Try to eat slowly. Your digestion needs time as much as it needs the right food.", "米飯配雞湯、香菇、幾片牛肉。加一些煮熟的青菜 — 青江菜或菠菜。慢慢吃。你的消化需要時間，跟需要對的食物一樣。", "ご飯に鶏スープ、しいたけ、牛肉の薄切り。茹でた青菜 — チンゲン菜やほうれん草も。ゆっくり食べて。消化には正しい食材と同じくらい時間が必要。") },
            { meal: l("Afternoon", "下午", "午後"), desc: l("Instead of coffee, try warm water with goji berries and jujube. If you need something more substantial, a small bowl of congee. The 3pm slump is real — but caffeine isn't the only answer.", "別喝咖啡，試試溫水加枸杞和紅棗。需要更飽的話，一小碗粥。下午三點的崩潰是真的 — 但咖啡因不是唯一答案。", "コーヒーの代わりに、クコの実となつめを入れた白湯を。もっとしっかり必要ならお粥を小さな一杯。午後3時のスランプは本当 — でもカフェインだけが答えではない。") },
            { meal: l("Dinner", "晚餐", "夕食"), desc: l("Congee with Chinese yam and shiitake. Light, warm, easy to digest before bed. Keep dinner smaller than lunch if you can — your body repairs at night, and a heavy meal gets in the way.", "山藥香菇粥。清淡、溫暖、睡前好消化。可以的話晚餐比午餐少 — 身體在夜間修復，太飽會礙事。", "長芋としいたけのお粥。軽く温かく、寝る前に消化しやすい。できれば昼食より夕食は少なめに — 体は夜に修復し、重い食事は邪魔になる。") },
          ].map((item, i) => (
            <div key={i} className="bg-cream/20 border border-border/50 rounded-xl p-4">
              <span className="font-semibold text-accent text-sm">{item.meal}</span>
              <p className="text-sm text-text2 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("The Key Insight", "關鍵洞察", "重要な気づき")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "Eating the right food for YOUR body type matters more than eating \"healthy\" food in general. A salad that energizes one person can exhaust another. Chinese medicine gives you a personalized map — not generic advice. And honestly? That map might not look like what Instagram wellness tells you. That's okay. Your body runs on its own logic.",
            "吃對你體質的食物，比吃「健康」食物更重要。一份讓某人有精神的沙拉，可能讓另一個人精疲力竭。中醫給你一張個人化的地圖 — 不是通用建議。說實話？那張地圖可能跟 Instagram 上的養生建議不一樣。沒關係。你的身體有自己的邏輯。",
            "自分の体質に合った食材を食べることは、一般的に「健康的」な食材を食べること以上に重要です。ある人を元気にするサラダが、別の人を疲れさせることもあります。中医学は汎用的なアドバイスではなく、パーソナライズされたマップを提供します。正直？そのマップはInstagramのウェルネスが言うことと違うかもしれない。それでいい。あなたの体には独自の論理がある。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("Medical Disclaimer", "醫療聲明", "医療免責事項")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is based on traditional Chinese dietary philosophy and is provided for informational purposes only. It is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for medical concerns.",
            "此資訊基於東方傳統飲食哲學，僅供資訊參考。非醫療建議、診斷或治療。如有健康疑慮，請諮詢合格醫療專業人員。",
            "この情報は東洋の伝統的な食哲学に基づき、情報提供のみを目的としています。医療アドバイス、診断、治療ではありません。健康上の懸念については、必ず医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-foods-for-energy"]} />

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms & Patterns", "相關症狀與模式", "関連する症状とパターン")}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Always Tired", "總是疲勞", "いつも疲れている")}</h3>
            <p className="text-text2 text-sm">{l("Chronic fatigue that doesn't improve with sleep often points to Qi Deficiency", "睡眠無法改善的慢性疲勞常指向氣虛", "睡眠で改善しない慢性疲労は気虚を指すことが多い")}</p>
          </Link>
          <Link href="/patterns/low-vitality" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Low Vitality", "活力不足", "活力低下")}</h3>
            <p className="text-text2 text-sm">{l("Low energy and weak stamina are hallmarks of the Low Vitality pattern", "能量低和體力差是活力不足模式的特徵", "エネルギー不足と弱いスタミナは活力低下パターンの特徴")}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{l("Related Articles", "相關文章", "関連記事")}</h2>
        <div className="space-y-3">
          <Link href="/wellness/why-am-i-always-tired" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{l("Why Am I Always Tired? A Chinese Medicine Perspective", "為什麼我總是累？中醫觀點", "なぜいつも疲れているのか？中医学の視点")}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{l("Understand the root patterns behind chronic fatigue — and why more sleep alone might not fix it.", "了解慢性疲勞背後的根本模式 — 為什麼光多睡可能不夠。", "慢性的な疲労の背後にある根本パターンを理解 — ただ睡眠を増やすだけでは解決しない理由。")}</p>
          </Link>
          <Link href="/wellness/foods-that-warm-your-body" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{l("Foods That Warm Your Body: A Guide for Cold Types", "溫暖身體的食物：寒性體質指南", "体を温める食材：寒がりタイプのガイド")}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{l("If cold hands and feet are your constant companion, these warming foods can help from the inside out.", "如果手腳冰冷是你的常態，這些溫性食物可以從內到外幫助你。", "冷たい手と足がいつも気になるなら、これらの温性食材が内側から助けてくれる。")}</p>
          </Link>
          <Link href="/wellness/chinese-medicine-body-types" className="block bg-cream/20 border border-border/50 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <span className="font-semibold text-accent text-sm">{l("The 9 Chinese Medicine Body Types: Which One Are You?", "中醫九種體質：你是哪一種？", "中医学の9つの体質：あなたはどれ？")}</span>
            <p className="text-sm text-text2 mt-1 leading-relaxed">{l("A complete guide to the 9 body constitutions — the foundation for all personalized TCM dietary advice.", "九種體質完整指南 — 所有個人化中醫飲食建議的基礎。", "9つの体質の完全ガイド — パーソナライズされたTCM食事アドバイスの基盤。")}</p>
          </Link>
        </div>
      </section>

      <SymptomCta />
    </main>
  )
}
