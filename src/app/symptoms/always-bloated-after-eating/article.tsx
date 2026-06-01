"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function AlwaysBloatedArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "always-bloated-after-eating"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Bloated After Eating", "吃完飯就脹", "食べた後膨れる")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Always Bloated After Eating? Your Spleen Might Be Asking for Help", "吃完飯總是脹？你的脾可能在求救", "食べた後いつも膨れる？脾が助けを求めているかも")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If you feel like a balloon after every meal, even small ones, you know how frustrating this gets. You eat something healthy and feel stuffed for hours. You're scared to eat before going out because you don't want to deal with the uncomfortable fullness. Sound familiar?",
            "如果你每餐飯後都像氣球一樣，連小餐都一樣，你就知道這有多挫折。你吃了健康的東西然後脹了好幾小時。你不敢出門前吃東西因為不想面對那種不舒服的飽脹感。聽起來熟悉嗎？",
            "毎食後、少量でも風船のように膨れるなら、これがどれほどイライラするか分かるでしょう。健康的なものを食べても何時間も詰まった感じ。外出前に食べるのが怖い。聞き覚えがありますか？"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "I spent years thinking I just had a \"sensitive stomach\" or that certain foods didn't agree with me. I tried cutting out gluten, then dairy, then FODMAPs. Some things helped a little, but nothing really solved it. The bloating kept coming back like an uninvited guest who shows up at every meal.",
            "我花了好多年以為自己只是「腸胃敏感」或某些食物跟我合不來。我試過不吃麩質、然後乳製品、然後FODMAP。有些有一點幫助，但沒什麼真正解決了。脹氣像個不速之客一樣每餐都出現。",
            "私は長年「敏感な胃」や特定の食べ物が合わないだけだと思っていました。グルテンを抜き、乳製品を抜き、FODMAPを試しました。少しは役立ったものもありましたが、本当に解決したものはありませんでした。膨満感は招かれざる客のように毎食現れ続けました。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Eastern body wisdom looks at bloating differently from what you might expect. It's less about which specific food is the trigger and more about why your digestive system is struggling to process food in the first place. That shift in perspective made a huge difference for me, and it might for you too.",
            "東方身體智慧對腹脹的看法跟你可能預期的不同。它比較少關注哪個特定食物是觸發物，更多關注為什麼你的消化系統一開始就在掙扎處理食物。這個視角的轉換對我幫助很大，對你也許也是。",
            "東洋の体の知恵は膨満感を予想とは異なる視点で見ます。どの食材が引き金かより、なぜ消化システムがそもそも食材の処理に苦労しているかに焦点を当てます。この視点の転換は私に大きな違いをもたらしました。あなたにもそうかもしれません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Common Reasons for Post-Meal Bloating", "飯後脹氣的常見原因", "食後の膨満感の一般的な理由")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The usual explanations you'll hear: food intolerances, eating too fast, too much salt, swallowed air, IBS, or SIBO. These are all valid possibilities, and it's worth checking with your doctor if bloating is severe, painful, or accompanied by weight loss or blood in your stool.",
            "你通常聽到的解釋：食物不耐受、吃太快、太多鹽、吞了空氣、腸躁症或小腸菌叢過度增生。這些都是合理的可能性，如果脹氣嚴重、疼痛或伴隨體重減輕或便血，值得看醫生。",
            "よく聞く説明：食物不耐性、食べすぎ、塩分過多、空気嚥下、過敏性腸症候群、SIBO。これらは全て有効な可能性であり、膨満感が激しい、痛い、体重減少や血便を伴う場合は医師に相談する価値があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "But here's what doesn't get talked about enough: you can be \"fine\" on all the standard tests and still bloat after every single meal. Your digestive enzymes are normal. Your gut bacteria are supposedly fine. No food allergies detected. Yet there you are, unbuttoning your jeans at 2 PM because lunch is staging a protest.",
            "但不夠被談論的是：你所有標準測試都「正常」，但每餐飯後還是脹。你的消化酶正常。你的腸道菌據說也正常。沒測到食物過敏。然而你就是那個下午2點解開牛仔褲釦子的人，因為午餐在抗議。",
            "しかし十分に語られないことがあります：全ての標準検査が「正常」でも毎食後に膨れることがあります。消化酵素は正常。腸内細菌も問題ないらしい。食物アレルギーも検出されず。なのに午後2時にジーンズのボタンを外している。ランチが抗議しているから。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chinese medicine would say the problem isn't what you're eating. It's that your digestive \"engine\" doesn't have enough power to process it efficiently. Food goes in, but your body can't break it down and move it through fast enough, so it sits there. And sits there. Producing gas, pressure, and that miserable stuffed feeling.",
            "中醫會說問題不在你吃了什麼。而是你的消化「引擎」沒有足夠的力量有效處理它。食物進去了，但你的身體無法快速分解和推動它，所以它就坐在那裡。坐在那裡。產生氣體、壓力和那個悲慘的飽脹感。",
            "中医学は問題が何を食べているかではないと言います。消化の「エンジン」がそれを効率的に処理するパワーがないということ。食べ物は入るが、体が素早く分解して通過させられないのでそこに留まる。留まり続ける。ガス、圧力、あのみじめな詰まった感覚を生み出して。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Think of it like a washing machine that's lost its spin cycle. The clothes go in, the water goes in, but the machine just agitates weakly without ever really cleaning properly. That's what sluggish digestion looks like from the TCM perspective.",
            "把它想成一台失去脫水功能的洗衣機。衣服進去了，水進去了，但機器只是無力地攪動，從未真正洗乾淨。從中醫的角度來看，那就是消化遲鈍的樣子。",
            "脱水機能を失った洗濯機と想像してください。服が入り、水が入るが、機械は弱く攪拌するだけで本当にきれいに洗えない。それが中医学の観点から見た消化不良の姿です。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("How TCM Understands Bloating: The Spleen and Dampness", "中醫怎麼理解脹氣：脾與濕氣", "中医学が膨満感をどう理解するか：脾と湿気")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Chinese medicine, digestion is primarily the job of the Spleen (脾). Not your anatomical spleen, but a functional system that includes your stomach, intestines, and the entire process of turning food into energy. When the Spleen is strong, food goes in, gets processed efficiently, and you feel energized. When the Spleen is weak, food goes in, sits around, creates gas and heaviness, and you feel worse after eating instead of better.",
            "在中醫裡，消化主要是脾的工作。不是你解剖學上的脾臟，而是一個功能系統，包括胃、腸道和將食物轉化為能量的整個過程。脾強時，食物進去，高效處理，你覺得有活力。脾弱時，食物進去，賴在那裡，產生氣體和沉重感，你吃完反而更差。",
            "中医学では消化は主に脾（ひ）の仕事です。解剖学的な脾臓ではなく、胃、腸、食べ物をエネルギーに変換する全過程を含む機能システム。脾が強いと、食べ物が入り、効率的に処理され、活力を感じます。脾が弱いと、食べ物が入り、留まり、ガスと重さを生み、食べた後により悪く感じます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The specific pattern behind most chronic bloating is Spleen Qi Deficiency. When Spleen Qi is low, your digestive fire is weak. It's like trying to cook a meal on a stove where only one burner works on low. Things take forever, and they don't cook evenly. Your body knows something isn't right, and it lets you know through bloating, gas, brain fog, and that heavy feeling in your gut.",
            "大多數慢性脹氣背後的特定模式是脾氣虛。脾氣低時，你的消化火弱。就像試圖在一台只有一個爐子低功率運作的爐子上做飯。東西花很長時間，煮不均勻。你的身體知道哪裡不對，通過脹氣、排氣、腦霧和腸道沉重感來告訴你。",
            "慢性的な膨満感の背後にある特定のパターンは脾気虚です。脾気が低いと消化の火が弱くなります。弱火で一つだけ動くコンロで料理しようとするようなもの。時間がかかり、均等に火が通りません。体は何かがおかしいと知り、膨満感、ガス、頭のぼんやり感、胃の重さで知らせます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "When Spleen Qi is weak for a while, something else tends to develop: Dampness (湿). Dampness is like water that accumulates in places it shouldn't. It makes everything feel heavy, slow, and stuck. In TCM, Dampness is often compared to a sponge that's soaked through and can't be wrung out. It's behind that bloated, puffy, heavy sensation that gets worse with certain foods and humid weather.",
            "脾氣虛弱了一段時間後，另一個東西容易發展：濕氣。濕氣像是在不該積水的地方積了水。它讓一切感覺沉重、緩慢、卡住。在中醫裡，濕氣常被比作一塊吸滿水擰不出來的海綿。它就是那種脹、腫、重的感覺的來源，在吃某些食物和潮濕天氣時更嚴重。",
            "脾気が長く弱いと、別のものが発展しやすくなります：湿気です。湿気は水があってはいけない場所に溜まるようなもの。全てを重く、遅く、詰まらせます。中医学では湿気は水を吸い込んで絞れないスポンジに例えられます。ある食材と蒸し暑い天気で悪化する、膨れた、むくんだ、重い感覚の原因です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Foods that create Dampness include dairy products, cold drinks, sweets, fried food, excessive fruit, and beer. If you've noticed that ice cream, beer, or a big plate of pasta makes your bloating noticeably worse, you're already experiencing the Dampness pattern in action. It's not in your head. Your body is having a very real response.",
            "產生濕氣的食物包括乳製品、冷飲、甜食、油炸食物、過量水果和啤酒。如果你注意到冰淇淋、啤酒或一大盤義大利麵讓你的脹氣明顯加重，你已經在體驗濕氣模式了。這不是你的想像。你的身體有一個非常真實的反應。",
            "湿気を作る食材には乳製品、冷たい飲み物、甘いもの、揚げ物、過度な果物、ビールがあります。アイスクリーム、ビール、大きなパスタの皿で膨満感が明らかに悪化するなら、すでに湿気パターンを体験しています。気のせいではありません。体は非常に現実的な反応をしています。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Body Types Most Prone to Bloating", "最容易脹氣的體質", "最も膨満感になりやすい体質")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If you're always bloated, you might see yourself in one of these two body types.",
            "如果你總是脹，你可能會在以下兩種體質中看到自己。",
            "いつも膨れているなら、以下の2つの体質のいずれかに当てはまるかもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Qi Deficient type (气虚质) has a weak digestive engine overall. They bloat because their body simply doesn't have the energy to process food efficiently. They also tend to feel tired, have a soft voice, and sweat easily. For them, bloating is part of a bigger picture of low energy that affects the whole system.",
            "氣虛體質（气虚质）整體消化引擎虛弱。他們脹是因為身體就是沒有能量高效處理食物。他們也傾向覺得累、聲音輕柔、容易出汗。對他們來說，脹氣是低能量影響全身的更大圖景的一部分。",
            "気虚タイプ（気虚質）は全体的に消化エンジンが弱い。体が効率的に食べ物を処理するエネルギーがないため膨れます。疲れを感じ、声が小さく、汗をかきやすい傾向があります。彼らにとって膨満感は全身に影響する低エネルギーの大きな全体像の一部です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Phlegm Damp type (痰湿质) is the one most directly associated with bloating and heaviness. About 10% of people have this as their primary type. They tend to carry extra weight around the middle, feel heavy and sluggish, have oily skin, and notice that humid weather makes everything worse. Their body holds onto moisture like a waterlogged field that never quite dries out.",
            "痰濕體質（痰湿质）是跟脹氣和沉重感最直接相關的。大約10%的人以這個為主體質。他們傾向在腰圍多肉、覺得沉重遲鈍、皮膚油膩、注意到潮濕天氣讓一切更糟。他們的身體留住水分，像一塊永遠不乾的水澇田。",
            "痰湿タイプ（痰湿質）は膨満感と重さに最も直接関連します。約10%の人がこの主要タイプ。腹部に脂肪がつきやすく、重くだるく、脂性肌で、蒸し暑い天候で全てが悪化する傾向があります。体は水分を保持し、決して乾かない水浸しの畑のようなもの。"
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
          {l("What You Can Do About It", "你可以怎麼做", "何ができるか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Let's start with the biggest lever: stop eating cold and raw foods. I know, salad feels healthy. But if you're bloating after meals, your digestive system is telling you it can't handle that much raw material right now. Cook your vegetables. Drink warm or room-temperature water. Skip the ice. Your Spleen will notice the difference almost immediately.",
            "從最大的槓桿開始：停止吃寒涼和生食。我知道，沙拉感覺很健康。但如果你飯後脹，你的消化系統在告訴你它現在處理不了那麼多生食。把蔬菜煮熟。喝溫的或常溫的水。不加冰。你的脾幾乎立刻就會感覺到差別。",
            "最大のレバーから始めましょう：冷たい生食をやめる。サラダは健康的に感じるのは分かります。でも食後に膨れるなら、消化システムは今そんなに多くの生食材を扱えないと伝えています。野菜は調理してください。温かいか常温の水を飲む。氷はなし。脾はほぼすぐに違いに気づくでしょう。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Foods that help drain Dampness and support the Spleen include adzuki beans, coix seed (Job's tears), winter melon, celery, and moderate amounts of green tea. On the warming side, ginger tea after meals can help get things moving. A small cup of warm ginger water 20 minutes before eating may also prime your digestive system for the meal ahead.",
            "幫助排濕和支持脾的食物包括紅豆、薏仁、冬瓜、芹菜和適量綠茶。在溫暖方面，飯後薑茶可以幫助推動東西。餐前20分鐘一小杯溫薑水也可以幫你的消化系統為即將到來的餐點做準備。",
            "湿気を排出し脾をサポートする食材には小豆、ハトムギ、トウガン、セロリ、適量の緑茶があります。温める面では食後のしょうが茶が物事を動かす助けになります。食事の20分前に温かいしょうが湯の小さなカップも消化システムの準備に役立つかもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Eat smaller meals more frequently rather than three large meals. A weak Spleen handles small loads better than big ones. Think of it like a small engine pulling a cart. It can move the cart, just not when it's overloaded. Four smaller meals spread throughout the day might feel much better than three big ones.",
            "少量多餐取代三大餐。弱的脾處理小負載比大負載好。把它想成小引擎拉車。它能移動車，只是不能超載。全天分佈的四小餐可能比三大餐感覺好得多。",
            "3回の大きな食事より、少量を頻繁に食べてください。弱った脾は大きな負荷より小さな負荷をうまく処理します。小さなエンジンが荷車を引くようなもの。荷車は動かせるが、過積載では無理。1日を通して4回の小さな食事が3回の大きな食事よりずっと快適かもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Chew more. I know this sounds almost too simple, but Chinese medicine puts a lot of emphasis on the mouth being the first step of digestion. When you chew food thoroughly, you're doing a big chunk of the Spleen's work before the food even reaches your stomach. Put your fork down between bites. Actually taste your food. It's not just etiquette, it's medicine for a weak Spleen.",
            "多嚼幾口。我知道這聽起來太簡單了，但中醫非常強調口腔是消化的第一步。當你徹底咀嚼食物，你在食物到達胃之前就做了脾的大量工作。每口之間放下叉子。真正品嚐你的食物。這不只是禮儀，對弱的脾來說是良方。",
            "よく噛んでください。あまりにシンプルに聞こえるかもしれませんが、中医学は口が消化の第一歩であることを重視します。食べ物をよく噛むと、食べ物が胃に届く前に脾の仕事の大部分を済ませています。一口ごとにフォークを置く。本当に味わう。マナーだけでなく、弱い脾にとっての薬です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "A short walk after meals can help too. Not a power walk, just 10 to 15 minutes of gentle strolling. Movement helps your digestive system do its job. Sitting or lying down right after a big meal is one of the worst things you can do for a Spleen that's already struggling. Give gravity and gentle movement a chance to help.",
            "飯後短暫散步也有幫助。不是快走，就10到15分鐘輕鬆散步。運動幫助你的消化系統做它的工作。大餐後立刻坐下或躺下是你對已經掙扎的脾能做的最糟糕的事之一。讓重力和輕柔運動有機會幫忙。",
            "食後の短い散歩も役立ちます。パワーウォークではなく、10〜15分のゆっくり散歩。運動は消化システムの仕事を助けます。大きな食事の後すぐに座ったり横になったりするのは、すでに苦労している脾にとって最悪のことの一つ。重力と軽い運動に助けるチャンスを与えてください。"
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
          <Link href="/symptoms/why-am-i-always-sleepy" className="text-sm text-accent no-underline hover:underline">
            {l("Why Am I Always Sleepy?", "為什麼我總是想睡？", "なぜいつも眠いのか？")}
          </Link>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
