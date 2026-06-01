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
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Wellness", "養生", "ウェルネス")}</Link>
        <span className="mx-1.5">›</span><span className="text-text2">{l("Bloating", "腹脹", "腹部の膨満感")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Bloating: What Chinese Medicine Says About That Heavy Feeling", "腹脹：中醫怎麼說那種沉重的感覺", "膨満感：その重い感じについて中医学が言うこと")}
      </h1>
      <p className="text-text2 text-sm mb-6">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <div className="mb-10 bg-accent/8 border border-accent/20 rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-3">{l("TL;DR", "重點摘要", "要約")}</h2>
        <ul className="text-text2 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Chronic bloating with heaviness = Damp accumulation in TCM", "慢性腹脹伴隨沉重感 = 中醫所說的濕氣積聚", "慢性の膨満感と重さ = 中医学の湿気蓄積")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Your digestive \"kitchen\" gets clogged — eating less won't fix it", "你的消化「廚房」堵住了 — 少吃解決不了", "消化の「キッチン」が詰まる — 食べる量を減らしても直らない")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Key remedies: adzuki-coix tea, less cold/sweet foods, movement", "關鍵調理：紅豆薏仁茶、少冷少甜、多活動", "主な対策：小豆ハトムギ茶、冷たい/甘いものを控え、体を動かす")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Common in Phlegm-Damp body type — take the quiz to learn more", "常見於痰濕體質 — 做測驗了解更多", "痰湿タイプに多い — クイズで詳しく")}</span>
          </li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            'In Traditional Chinese Medicine (TCM), chronic bloating — especially when it\'s accompanied by a feeling of heaviness, sluggishness, or "I ate three hours ago but still feel full" — is usually caused by Damp accumulation (湿气, pronounced "she-chee"). Dampness is like a sponge inside your body: it soaks up moisture but can\'t wring it out. Your digestive system gets bogged down, and everything feels heavy and slow.',
            "在中醫裡，慢性腹脹 — 尤其伴隨沉重、遲緩、或「三小時前吃的但還覺得撐」的感覺 — 通常是由濕氣積聚引起的。濕氣就像身體裡的海綿：吸了水但擰不出來。消化系統被拖慢，一切都感覺又重又慢。",
            "伝統的な中国医学（TCM）では、慢性の膨満感 — 特に重さ、だるさ、「3時間前に食べたのにまだ満腹」を伴うもの — は通常、湿気の蓄積が原因です。湿気は体の中のスポンジのようなもの：水分を吸収しても絞り出せない。消化システムが遅くなり、全てが重く遅く感じられます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't the same as gas from eating beans or drinking soda too fast. That kind of bloating passes. Damp-related bloating lingers. It's there when you wake up. It's there after a light meal. Sometimes it's even there when your stomach is technically empty. Sound familiar?",
            "這跟吃豆子或喝汽水太快的那種脹氣不一樣。那種脹氣會過去。濕氣相關的腹脹會 linger。起床時有。吃輕食後也有。有時候明明肚子空空的，脹的感覺還在。聽起來熟悉嗎？",
            "豆を食べたりソーダを急いで飲んだりした時のガスとは違います。その種の膨満感は過ぎ去ります。湿気関連の膨満感は残ります。朝起きた時にある。軽い食事の後もある。時にはお腹が空っぽの時でさえ。聞き覚えがありますか？"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Your digestive system is a kitchen. When it's running smoothly, food comes in, gets processed, and waste goes out. But Dampness is like a clogged drain — water keeps filling up, nothing drains properly, and the whole kitchen gets soggy. No amount of eating less fixes a clogged drain. You need to dry out the system.",
            "你的消化系統是廚房。順暢時，食物進來、處理、廢物排出。但濕氣就像堵住的水管 — 水一直積，排不出去，整個廚房都濕噠噠的。少吃解決不了堵水管，你需要把系統弄乾。",
            "消化システムはキッチン。順調に動いていれば、食べ物が入って処理され、老廃物が出ていきます。しかし湿気は詰まった排水溝のようなもの — 水が溜まり続け、何も適切に排出されず、キッチン全体がびしょ濡れに。食べる量を減らしても詰まった排水溝は直らない。システムを乾かす必要があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Here's the thing though — the kitchen doesn't just process food. In TCM thinking, your Spleen (脾, pí) is the organ responsible for transforming what you eat into energy and transporting that energy throughout your body. When the Spleen gets overwhelmed by too much raw, cold, sweet, or heavy food, it slows down. The moisture that should be processed starts accumulating instead. That's Dampness.",
            "不過有個關鍵 — 廚房不只是處理食物。在中醫思維裡，你的脾負責把吃的轉化成能量，再把能量運送到全身。當脾被太多生冷、甜膩、厚重的食物壓垮時，它就慢下來了。本來該被處理的水分開始堆積。那就是濕氣。",
            "でも、キッチンは食べ物を処理するだけではありません。中医学では、脾臓（脾、pí）が食べたものをエネルギーに変え、そのエネルギーを全身に運ぶ役割を担っています。脾臓が生もの、冷たいもの、甘いもの、重いもので圧倒されると、動きが遅くなります。処理されるはずの水分が蓄積し始める。それが湿気です。"
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
            l("Your mind feels foggy, especially after meals", "飯後腦子容易昏沉", "食後に頭がぼーっとする"),
            l("You crave sweets or carbs when stressed or tired", "累或壓力大時特別想吃甜食或澱粉", "疲れやストレスで甘いものや炭水化物が欲しくなる"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("How It Affects Daily Life", "日常生活的影響", "日常生活への影響")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Living with chronic bloating is... exhausting. Not in a dramatic way, but in a slow, grinding kind of way. You wake up already feeling behind. A normal lunch leaves you wanting a nap by 2pm. You might skip dinner because nothing sounds good, or because you're still \"full\" from lunch. Then by 9pm you're raiding the fridge because suddenly you're starving.",
            "慢性腹脹的生活……很累。不是戲劇性的那種，是那種慢慢磨的累。起床就覺得已經落後了。普通午餐讓你下午兩點就想睡。你可能跳過晚餐，因為沒胃口，或午餐還「撐著」。然後九點又突然餓到翻冰箱。",
            "慢性の膨満感と暮らすのは…疲れます。ドラマチックな疲れではなく、ゆっくりと削られるような疲れ。起きた時から既に遅れを感じている。普通の昼食で午後2時には昼寝したくなる。食欲がわかない、または昼食が「まだお腹にいる」から夕食を抜く。そして夜9時には突然空腹で冷蔵庫を漁る。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Social situations get tricky too. You're at a restaurant, everyone's enjoying themselves, and you're calculating how many hours until you'll feel normal again if you eat that bowl of pasta. Maybe you've started declining dinner invitations. Maybe you've become the person who \"doesn't eat much\" and people think you're dieting, but really you just don't want to deal with the aftermath.",
            "社交場合也變得棘手。在餐廳，大家開開心心，你在算如果吃了那碗義大利麵，幾小時後才會恢復正常。也許你開始拒絕晚餐邀約。也許你變成那個「吃很少」的人，大家以為你在減肥，其實你只是不想處理後果。",
            "社交の場面も難しくなります。レストランでみんなが楽しんでいる中、そのパスタを食べたら何時間後に普通に戻れるか計算している。夕食の誘いを断り始めたかもしれない。「あまり食べない人」になり、ダイエット中だと思われているが、実は後のことを考えたくないだけ。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "The mental fog is real too. In TCM, Dampness can \"cloud the clear yang\" — basically, it makes your thinking sluggish. Ever notice how after a heavy meal, your brain feels as slow as your digestion? That's not just \"food coma.\" That's Dampness affecting your mental clarity.",
            "腦霧也是真的。中醫說濕氣會「蒙蔽清陽」— 簡單說，就是讓思考變遲鈍。有沒有發現吃完大餐後，腦子跟消化一樣慢？那不只是「飯氣攻心」，那是濕氣影響你的精神清晰度。",
            "頭の霧も本物です。中医学では、湿気は「清陽を蒙蔽する」— つまり、思考を鈍くします。重い食事の後、脳が消化と同じくらい遅く感じることに気づいたことがありますか？それは単なる「食後の眠気」ではありません。湿気が精神の明晰さに影響しているのです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Foods That Reduce Dampness", "祛濕食物", "湿気を取り除く食材")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "The good news: you can eat your way out of this. Slowly. TCM isn't about dramatic cleanses or fasting. It's about consistent, small choices that gradually shift your body's balance.",
            "好消息：你可以吃出來。慢慢來。中醫不是戲劇性的排毒或斷食，是持續的小選擇，慢慢調整身體的平衡。",
            "良いニュース：食べ方で改善できます。ゆっくりと。中医学は劇的なデトックスや断食ではありません。体のバランスを徐々にシフトさせる、一貫した小さな選択の積み重ねです。"
          )}
        </p>
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
        <p className="text-text2 text-sm mt-4 italic">
          {l(
            "Note: You don't have to eliminate these foods forever. Just reduce them while you're working on clearing the dampness. Think of it as temporary traffic control while the kitchen drain gets fixed.",
            "註：不用永遠戒掉這些食物。清濕氣期間減少就好。把它想成廚房水管維修時的臨時交通管制。",
            "注：これらの食材を永遠に排除する必要はありません。湿気を取り除いている間だけ減らせば大丈夫。キッチンの排水溝を修理中の一時的な交通規制だと思ってください。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("A Simple Damp-Draining Routine", "簡單祛濕日常", "簡単な湿気除去ルーティン")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Let's be realistic — you probably don't have time to brew complicated herbal decoctions. Here's a routine that actually fits into modern life:",
            "說實話 — 你可能沒時間煮複雜的中藥湯。這是一個能融入現代生活的日常：",
            "正直に言って — 複雑な漢方煎じ液を煮る時間はないでしょう。現代生活に合うルーティンを紹介します："
          )}
        </p>

        <div className="bg-cream/30 border border-border rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-text mb-3">{l("Morning: Adzuki-Coix Tea", "早上：紅豆薏仁茶", "朝：小豆ハトムギ茶")}</h3>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            {l(
              "The classic. 2 tablespoons each of adzuki beans and coix seeds (Job's tears), boiled in 4 cups of water for 30 minutes. Sip throughout the morning.",
              "經典配方。紅豆和薏仁各2湯匙，加4杯水煮30分鐘。整個早上慢慢喝。",
              "定番。小豆とハトムギを各大さじ2杯、4カップの水で30分煮る。午前中かけて少しずつ飲む。"
            )}
          </p>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            {l(
              "Pro tip: Make a big batch on Sunday. Store in the fridge. Reheat a cup each morning. Some people even use a thermos — put the beans and seeds in with boiling water before bed, and by morning it's ready.",
              "小撇步：週日煮一大鍋，放冰箱。每天早上熱一杯。有人用保溫杯 — 睡前把豆子和薏仁放進去加滾水，早上就好了。",
              "ヒント：日曜日に大量に作って冷蔵庫へ。毎朝1杯温める。魔法瓶を使う人も — 寝る前に豆とハトムギを入れて熱湯を注げば、朝には出来上がり。"
            )}
          </p>
          <p className="text-text2 text-sm leading-relaxed">
            {l(
              "Why it works: Adzuki beans drain dampness and support the Spleen. Coix seeds do the same, plus they help with that heavy, sluggish feeling. Together, they're like a gentle drain cleaner for your system.",
              "原理：紅豆祛濕健脾。薏仁也一樣，還能幫助那種沉重遲緩的感覺。兩者一起，就像溫和的通管劑。",
              "なぜ効くか：小豆は湿気を取り除き、脾臓をサポート。ハトムギも同様で、重だるさにも効きます。組み合わせると、システムの優しい排水溝クリーナーのようなもの。"
            )}
          </p>
        </div>

        <div className="bg-cream/30 border border-border rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-text mb-3">{l("After Meals: A Short Walk", "飯後：走一走", "食後：少し歩く")}</h3>
          <p className="text-text2 text-sm leading-relaxed">
            {l(
              "This one's almost too simple, but it matters. In TCM, the Spleen needs movement to function well. A 10-15 minute walk after meals helps your digestion actually process what you ate instead of letting it sit there. No power walking necessary — just strolling is enough.",
              "這個簡單到不行，但很重要。中醫說脾需要活動才能運作好。飯後走10-15分分鐘，幫助消化真正處理你吃的，而不是讓它堆在那裡。不用快走，散步就夠。",
              "シンプルすぎるかもしれませんが、重要です。中医学では、脾臓は動くことでよく機能します。食後10-15分の散歩は、食べたものを座らせずに実際に処理する助けになります。早歩きは不要 — ゆっくり歩くだけで十分。"
            )}
          </p>
        </div>

        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h3 className="font-semibold text-text mb-3">{l("Evening: Skip the Late Snack", "晚上：戒掉宵夜", "夜：夜食をやめる")}</h3>
          <p className="text-text2 text-sm leading-relaxed">
            {l(
              "Your Spleen is weakest in the evening. Eating late forces it to work overtime when it's already running low on energy. That late-night snack isn't just calories — it's creating more dampness that your body has to deal with tomorrow. Try herbal tea instead if you need something warm before bed.",
              "脾在晚上最弱。深夜進食強迫它加班，而它已經快沒電了。宵夜不只是卡路里 — 它製造更多濕氣，明天身體還得處理。睡前需要暖的東西就喝花草茶。",
              "脾臓は夕方に最も弱くなります。夜遅くに食べると、エネルギー不足の状態で残業を強いることに。夜食はカロリーだけでなく、明日体が処理しなければならない湿気を作る。寝る前に温かいものが欲しいなら、ハーブティーを。"
            )}
          </p>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Persistent bloating can also be caused by food intolerances, IBS, celiac disease, or ovarian cysts. If bloating is severe, sudden, or accompanied by pain, weight loss, or blood in stool, consult a doctor immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。持續腹脹也可能是食物不耐症、腸躁症、乳糜瀉或卵巢囊腫。如果腹脹嚴重、突然或伴隨疼痛、體重減輕或便血，請立即看醫生。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。持続的な膨満感は食物不耐症、過敏性腸症候群、セリアック病、卵巣嚢腫が原因の場合もあります。膨満感が激しい、突然、痛み、体重減少、血便を伴う場合は、直ちに医師にご相談ください。"
          )}
        </p>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "Also worth noting: if you've had bloating for years and all your medical tests come back \"normal,\" that doesn't mean nothing is wrong. It might just mean the issue is functional rather than structural — which is exactly where TCM approaches can help.",
            "也值得注意：如果你腹脹多年，所有檢查都「正常」，不代表沒問題。可能只是功能性而非結構性問題 — 這正是中醫能幫忙的地方。",
            "また、何年も膨満感があり、医学検査がすべて「正常」でも、問題がないわけではありません。機能的であって構造的な問題ではないかもしれない — まさに中医学のアプローチが役立つ領域です。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Related Conditions", "相關症狀", "関連する症状")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Dampness doesn't just cause bloating. It's connected to other common issues:", "濕氣不只造成腹脹，它跟其他常見問題也有關：", "湿気は膨満感だけでなく、他の一般的な問題とも関連しています：")}</p>
        <div className="space-y-3">
          <Link href="/wellness/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Why Am I Always Tired?", "為什麼總是累？", "なぜいつも疲れているの？")}</h3>
            <p className="text-text2 text-sm">{l("Dampness is one of the most common causes of chronic fatigue in TCM", "濕氣是中醫裡慢性疲勞最常見的原因之一", "湿気は中医学で慢性疲労の最も一般的な原因の一つ")}</p>
          </Link>
          <Link href="/wellness/acne-chinese-medicine" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Acne & Chinese Medicine", "痘痘與中醫", "ニキビと中医学")}</h3>
            <p className="text-text2 text-sm">{l("Damp-Heat type acne often comes with bloating and oily skin", "濕熱型痘痘常伴隨腹脹和油性肌膚", "湿熱タイプのニキビは膨満感と脂性肌を伴うことが多い")}</p>
          </Link>
          <Link href="/wellness/cold-hands-and-feet" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Cold Hands & Feet", "手腳冰冷", "冷え性")}</h3>
            <p className="text-text2 text-sm">{l("When Dampness blocks circulation, extremities don't get enough warmth", "濕氣阻塞循環時，四肢得不到足夠溫暖", "湿気が循環をブロックすると、末梢が十分な温かさを得られない")}</p>
          </Link>
        </div>
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
