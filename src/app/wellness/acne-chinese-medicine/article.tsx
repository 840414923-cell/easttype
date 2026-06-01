"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function AcneArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Wellness", "養生", "ウェルネス")}</Link>
        <span className="mx-1.5">›</span><span className="text-text2">{l("Acne", "痘痘", "ニキビ")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Acne & Chinese Medicine: Why Breakouts Start From the Inside", "痘痘與中醫：為什麼長痘是從裡面開始的", "ニキビと中医学：なぜ内側から始まるのか")}
      </h1>
      <p className="text-text2 text-sm mb-6">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <p className="text-text2 leading-relaxed text-sm">
          {l(
            "TL;DR — Persistent acne (especially jawline, lower face, back) is usually Damp Heat in Chinese medicine: sticky warmth trapped inside, pushing out through skin. Creams only paint the surface. Real improvement comes from cooling and draining the interior — through food, daily habits, and simple routines like mung bean soup. This article walks you through the signs, the foods, a 3-day heat-clearing routine, and when to see a doctor.",
            "太長不看 — 持續長痘（尤其是下巴、下半臉、背部）在中醫通常是濕熱：體內黏膩的熱排不出去，從皮膚冒出來。藥膏只刷表面。真正改善要從內部清熱排水 — 透過飲食、日常習慣、綠豆湯這類簡單方法。這篇文章帶你看跡象、食物、3天清熱日常、何時該看醫生。",
            "要約 — 持続的なニキビ（特に顎ライン、顔の下半分、背中）は中医学では通常、湿熱：体内に閉じ込められたネバネバした熱が皮膚から押し出されている状態。クリームは表面を塗るだけ。本当の改善は内側から熱を冷まし排出すること — 食事、日常習慣、緑豆スープのような簡単な方法で。この記事ではサイン、食材、3日間の清熱ルーティン、医師に診てもらうタイミングを解説。"
          )}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Western dermatology treats acne as a surface problem: clogged pores, bacteria, excess oil. Chinese medicine asks: WHY is there excess oil and inflammation in the first place? In TCM, persistent acne — especially on the lower face, jawline, and back — is usually caused by Damp Heat (湿热, pronounced \"sheh-ruh\"). This means there's sticky warmth trapped inside your body, and it's pushing its way out through your skin.",
            "西方皮膚科把痘痘當表面問題：毛孔堵塞、細菌、油脂過多。中醫問的是：為什麼一開始會油脂過多和發炎？在中醫裡，持續長痘 — 尤其是下半臉、下巴和背部 — 通常是由濕熱引起的。這意味著體內有黏膩的熱氣排不出去，從皮膚表面往外冒。",
            "西洋の皮膚科はニキビを表面の問題として扱います：毛穴の詰まり、細菌、過剰な皮脂。中医学が問うのは：なそもそも過剰な皮脂や炎症があるのか？TCMでは、持続的なニキビ — 特に顔の下半分、顎ライン、背中 — は通常、湿熱が原因です。これは体の中にネバネバした熱が閉じ込められ、皮膚を通じて外に押し出されているということです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {l(
            "It's probably not just one thing, though. Damp Heat doesn't appear out of nowhere — it tends to build up slowly from a combination of diet, stress, and maybe even your environment. Some people seem more prone to it than others, and the reasons aren't always obvious. What Chinese medicine tries to do is look at the whole picture rather than zeroing in on a single cause.",
            "不過大概也不只是單一原因。濕熱不是憑空出現的 — 通常是由飲食、壓力、甚至環境慢慢累積的。有些人似乎比別人更容易這樣，原因也不總是很明顯。中醫想做的，是看整體而不是只盯著單一原因。",
            "でもおそらく一つの原因だけではないでしょう。湿熱はどこからともなく現れるわけではなく — 食事、ストレス、環境の組み合わせからゆっくり蓄積される傾向があります。人によってかかりやすさも違うし、理由はいつも明確とは限りません。中医学がしようとするのは、単一の原因に絞るより全体像を見ることです。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Your body is a house with a furnace (Yang) and a ventilation system (Yin). Damp Heat means the furnace is cranked up, but the vents are clogged with sticky humidity. The heat can't escape through the proper channels, so it bursts through the walls — that's your skin breaking out. Creams and washes only paint over the cracks. To really fix it, you need to turn down the furnace AND clear the vents.",
            "你的身體是房子，有火有火爐（陽）和通風系統（陰）。濕熱意味著火爐開到最大，但通風口被黏膩的濕氣堵住了。熱排不出去，就從牆壁爆出來 — 那就是你的皮膚長痘。藥膏只刷了牆面。要真正解決，你需要調低火爐並疏通通風口。",
            "体は暖炉（陽）と換気システム（陰）のある家。湿熱とは暖炉が最大にされているが、換気口がネバネバした湿気で詰まっている状態。熱が正常な経路で逃げられず、壁を突き破る — それがニキビ。クリームや洗顔料は壁のひび割れを塗りつぶすだけ。本当に直すには、暖炉を下げて換気口をクリアにする必要があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {l(
            "Now, this analogy isn't perfect — bodies are messier than houses. But it gives you a rough sense of why slapping cream on a breakout might help temporarily, yet the next one keeps coming back in the same spot. The source is still inside, doing its thing.",
            "當然，這個比喻不完全準確 — 身體比房子複雜多了。但它大概能讓你理解，為什麼塗藥膏可能暫時有用，但下一顆痘還是在同樣的地方冒出來。源頭還在裡面，繼續作怪。",
            "もちろん、この比喩は完璧ではありません — 体は家より複雑です。でも、クリームを塗っても一時的に効くだけで、次のニキビが同じ場所にでき続ける理由がなんとなく分かると思います。源はまだ内側にあって、そのまま動いているのです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Damp Heat", "濕熱的跡象", "湿熱のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("You feel hot and sticky, especially in warm or humid weather", "覺得又熱又黏，尤其是溫暖潮濕的天氣", "暑くネバネバする、特に蒸し暑い日"),
            l("You're prone to acne, rashes, or skin redness", "容易長痘、起疹或皮膚泛紅", "ニキビ、発疹、赤みが出やすい"),
            l("You have a bitter or sticky taste in your mouth in the morning", "早上起來嘴裡有苦味或黏膩感", "朝起きると口が苦い・ネバネバする"),
            l("You feel irritable and impatient when it's hot", "天熱時容易煩躁不耐煩", "暑いとイライラし、せっかちになる"),
            l("You've been told 'you're a lot' at least 17 times in your life", "你這輩子被說過「你真的很有事」至少17次", "人生で「お前、濃いな」と17回は言われた"),
            l("Your urine tends to be dark yellow with a strong smell", "尿色偏深黃、氣味較重", "尿が濃い黄色で匂いが強い傾向がある"),
            l("You often feel heavy and sluggish, like your body is weighed down", "常覺得身體沉重、提不起勁，像被什麼壓著", "体が重だるく、何かに押さえつけられているように感じる"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("How Damp Heat Affects Daily Life", "濕熱如何影響日常生活", "湿熱が日常生活にどう影響するか")}</h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "Damp Heat doesn't just show up on your face. It kind of seeps into everything — or at least, that's how a lot of people describe it. You might wake up already feeling like the day is too much, even before anything has happened. The afternoon slump hits harder, and it's not just sleepiness — it's more like your whole body is wading through something thick.",
            "濕熱不只是出現在臉上。它好像會滲入所有事情 — 至少很多人是這樣描述的。你可能早上醒來就覺得今天已經太多了，什麼都還沒發生。下午的昏沉更嚴重，不只是想睡 — 更像整個身體在什麼黏稠的東西裡跋涉。",
            "湿熱は顔に現れるだけではありません。なんだかすべてに染み込んでくる — 少なくとも多くの人がそう表現します。何も起きていないのに、朝起きた時点でもう今日はしんどいと感じるかもしれません。午後のだるさはより深刻で、ただ眠いというより — 体全体が何かネバネバしたものの中を歩いているような感覚です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {l(
            "Social situations can feel extra draining. When you're already running hot and sticky inside, being in a crowded room or a warm restaurant can push you over some invisible edge. You might snap at people without meaning to, then feel bad about it five minutes later. It's not that you're a difficult person — your internal thermostat is just stuck on 'too much.'",
            "社交場合可能特別耗損。當你裡面已經又熱又黏，待在擁擠的房間或溫暖的餐廳可能會把你推過某個看不見的臨界點。你可能無意中對人發脾氣，五分鐘後又覺得抱歉。不是你這個人難相處 — 是你的內部恆溫器卡在「太多了」。",
            "社交の場は特にエネルギーを消耗するかもしれません。内側がすでに暑くネバネバしている時、混雑した部屋や暖かいレストランにいると、見えない限界を超えてしまう感覚。意図せず人に当たってしまい、5分後に後悔する。あなたが難しい人なのではなく — 内側のサーモスタットが「多すぎ」で止まっているだけなのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mt-4">
          {l(
            "Sleep can be oddly restless too. You'd think being tired would make you sleep well, but Damp Heat has a way of keeping you half-awake, maybe sweating a little, maybe having vivid dreams that leave you more tired in the morning. It's frustrating — and that frustration itself might add more heat to the mix. A not-so-great cycle, if you think about it.",
            "睡眠也可能莫名不安穩。你以為累就會睡得好，但濕熱會讓你半睡半醒，也許微微出汗，也許做很鮮明的夢，醒來反而更累。很挫折 — 而那挫折感本身可能又加了更多熱進去。想想的話，是個不太好的循環。",
            "睡眠も妙に落ち着かないことがあります。疲れていればよく眠れるはずなのに、湿熱はあなたを半覚醒状態に保ち、少し汗をかいたり、鮮やかな夢を見て朝により疲れて起きたりする。イライラする — そしてそのイライラ自体がさらに熱を加えてしまう。考えると、あまり良くない循環です。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Foods That Clear Damp Heat", "清濕熱食物", "湿熱を清す食材")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Food is probably the most accessible lever you have. It's not a magic switch, but shifting your diet even a little toward cooling, draining foods can make a noticeable difference over a few weeks — or at least, that's what many practitioners have observed.",
            "飲食大概是你最容易操作的槓桿。不是什麼神奇開關，但稍微多偏向清熱排濕的食物，幾週下來可能會有明顯差別 — 至少很多中醫師是這樣觀察到的。",
            "食事はおそらく最も手近な手段です。魔法のスイッチではありませんが、冷まし排出する食材に少しシフトするだけで、数週間で目立つ違いが出るかもしれません — 少なくとも多くの中医師がそう観察しています。"
          )}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Heat-Clearing Foods", "✓ 清熱食物", "✓ 熱を清す食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Mung beans", "綠豆", "緑豆"), l("Bitter melon", "苦瓜", "ゴーヤ"), l("Cucumber", "黃瓜", "きゅうり"), l("Green tea", "綠茶", "緑茶"), l("Lotus root", "蓮藕", "レンコン"), l("Watermelon", "西瓜", "スイカ")].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Heat-Adding Foods", "✗ 助熱食物", "✗ 熱を加える食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Spicy food (chili, pepper)", "辛辣食物（辣椒、胡椒）", "辛い食べ物（唐辛子、胡椒）"), l("Fried food", "油炸食物", "揚げ物"), l("Alcohol", "酒精", "アルコール"), l("Excessive red meat", "過量紅肉", "過度な赤身肉"), l("Chocolate & sweets", "巧克力與甜食", "チョコレートと甘いもの"), l("Excessive coffee", "過量咖啡", "コーヒーの飲みすぎ")].map((food, i) => (<li key={i}>{food}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("A Simple Heat-Clearing Routine", "簡單清熱日常", "簡単な清熱ルーティン")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "You don't need to overhaul your entire life. Even small, consistent adjustments can help — though, to be honest, results vary from person to person. Here's a gentle 3-day routine you could try, just to see how your body responds.",
            "你不需要翻轉整個生活。即使小而持續的調整也可能有幫助 — 不過老實說，效果因人而異。這裡有個溫和的3天日常，你可以試試看身體怎麼反應。",
            "人生を全面的に変える必要はありません。小さく一貫した調整でも役立つかもしれません — でも正直、効果は人それぞれです。体がどう反応するか試すための、穏やかな3日間ルーティンを紹介します。"
          )}
        </p>

        <div className="space-y-4">
          <div className="bg-cream/40 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("Day 1 — Start Cooling", "第1天 — 開始清熱", "1日目 — 冷まし始める")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              <li>{l("Morning: Swap coffee for green tea (it's gentler and naturally cooling)", "早上：把咖啡換成綠茶（比較溫和，天然清熱）", "朝：コーヒーを緑茶に替える（より穏やかで自然に冷ます）")}</li>
              <li>{l("Lunch: Add a side of cucumber or bitter melon to your meal", "午餐：加一碟黃瓜或苦瓜", "昼食：きゅうりやゴーヤを一品追加")}</li>
              <li>{l("Evening: Take a short walk after dinner — movement helps circulate stuck heat", "晚餐後：散個步 — 動一動有助於疏通鬱熱", "夕食後：軽く散歩 — 動くことで滞った熱を巡らせる")}</li>
            </ul>
          </div>

          <div className="bg-cream/40 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("Day 2 — Drain Dampness", "第2天 — 排濕", "2日目 — 湿気を排出")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              <li>{l("Morning: Drink a cup of warm water with a slice of fresh ginger (sounds counterintuitive, but ginger can actually help 'open' the vents)", "早上：喝一杯溫水加一片生薑（聽起來矛盾，但薑其實能幫助「打開」通風口）", "朝：生姜1枚入りのお湯を1杯（逆に思えるが、生姜は換気口を「開く」のを助ける）")}</li>
              <li>{l("Meals: Keep things light — congee, steamed vegetables, maybe some lotus root soup", "餐食：清淡為主 — 粥、蒸蔬菜、也許來碗蓮藕湯", "食事：軽く — お粥、蒸し野菜、レンコンスープなど")}</li>
              <li>{l("Evening: Avoid heavy, fried, or spicy food — give your digestion a break", "晚上：避免油膩、油炸或辛辣 — 讓消化休息一下", "夜：重いもの、揚げ物、辛いものを避ける — 消化を休ませる")}</li>
            </ul>
          </div>

          <div className="bg-cream/40 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("Day 3 — Mung Bean Soup Day", "第3天 — 綠豆湯日", "3日目 — 緑豆スープの日")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              <li>{l("Make a batch of mung bean soup (recipe below) and have a bowl with lunch and another in the evening", "煮一鍋綠豆湯（食譜如下），午餐和晚上各喝一碗", "緑豆スープを作り（レシピは下）、昼と夕方に1杯ずつ飲む")}</li>
              <li>{l("Continue the light eating pattern from Day 2", "延續第2天的清淡飲食", "2日目の軽い食事パターンを続ける")}</li>
              <li>{l("Before bed: soak your feet in warm water for 10 minutes — it sounds odd, but drawing heat downward can help", "睡前：溫水泡腳10分鐘 — 聽起來奇怪，但把熱往下引可能有幫助", "就寝前：お湯で10分足湯 — 変に聞こえるが、熱を下に引くのが役立つかも")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-accent/8 border border-accent/20 rounded-xl p-5">
          <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("Mung Bean Soup Recipe", "綠豆湯食譜", "緑豆スープのレシピ")}</h3>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            {l(
              "This is about as simple as it gets. Mung beans are one of the most classic heat-clearing foods in Chinese medicine — they've been used this way for centuries, give or take.",
              "這大概是最簡單的了。綠豆是中醫最經典的清熱食物之一 — 這樣用了好幾百年了，大概吧。",
              "これくらいシンプルなものはありません。緑豆は中医学で最も古典的な清熱食材の一つ — こうやって何世紀も使われてきました、たぶん。"
            )}
          </p>
          <ul className="text-sm text-text2 space-y-1.5 mb-3">
            <li>{l("1 cup dried mung beans, rinsed", "乾綠豆1杯，洗淨", "乾燥緑豆1カップ、洗う")}</li>
            <li>{l("6 cups water", "水6杯", "水6カップ")}</li>
            <li>{l("Rock sugar or honey to taste (optional — skip if you want it strictly cooling)", "冰糖或蜂蜜適量（可省 — 如果要嚴格清熱就跳過）", "氷砂糖や蜂蜜お好みで（省略可 — 厳密に冷ましたいなら省く）")}</li>
          </ul>
          <p className="text-sm text-text2 leading-relaxed mb-1">
            {l("Bring the beans and water to a boil, then reduce heat and simmer for about 40–50 minutes until the beans split open and the liquid turns slightly cloudy. Add sweetener if you like. Drink warm or at room temperature — iced isn't ideal because extreme cold can actually slow down the draining process, which seems a bit unfair but there it is.", "豆子和水煮開後轉小火，燉40–50分鐘直到豆子裂開、湯汁微濁。喜歡的話加甜味。溫的或室溫喝 — 冰的反而不好，因為極冷會拖慢排濕速度，有點不公平但就是這樣。", "豆と水を沸騰させ、弱火で40–50分煮て、豆が割れて液体が少し濁るまで。甘味を加えるならお好みで。温かいか常温で飲む — 氷はあまり良くない。極端な冷たさは排出プロセスを遅くするから。ちょっと不公平ですが、そういうものです。")}
          </p>
          <p className="text-sm text-text2 leading-relaxed">
            {l("Store leftovers in the fridge for up to 2 days. Some people say it tastes better the next day — your mileage may vary.", "剩的放冰箱最多2天。有人說隔天更好喝 — 看個人吧。", "残りは冷蔵庫で2日まで。翌日の方が美味しいという人も — 好みによります。")}
          </p>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Severe or cystic acne should be evaluated by a dermatologist. If acne is painful, leaving scars, or not responding to over-the-counter treatments, consult a licensed healthcare provider.",
            "此資訊僅供養生與自我覺察，非醫療診診斷。嚴重或囊腫型痘痘應由皮膚科醫生評估。如果痘痘疼痛、留疤或對非處方治療無效，請諮詢合格醫療專業人員。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。重度または嚢胞性ニキビは皮膚科医の評価を受けるべきです。ニキビが痛い、傷が残る、市販の治療に反応しない場合は、医療専門家にご相談ください。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Related Conditions", "相關狀況", "関連する状態")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Damp Heat rarely travels alone. If this sounds like you, you might also recognize yourself in these related patterns:",
            "濕熱很少單獨出現。如果這聽起來像你，你也可能在這些相關體質中看到自己：",
            "湿熱はめったに単独では現れません。これがあなたに当てはまるなら、以下の関連パターンでも自分を見つけるかもしれません："
          )}
        </p>
        <div className="space-y-3">
          <Link href="/wellness/bloating-chinese-medicine" className="block bg-cream/40 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{l("Bloating & Chinese Medicine", "脹氣與中醫", "膨満感と中医学")}</h3>
            <p className="text-xs text-text2">{l("Dampness often shows up as bloating and digestive heaviness — another vent that's clogged.", "濕氣常以脹氣和消化沉重出現 — 另一個堵住的通風口。", "湿気は膨満感や消化の重さとして現れる — もう一つの詰まった換気口。")}</p>
          </Link>
          <Link href="/wellness/anxiety-chinese-medicine" className="block bg-cream/40 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{l("Anxiety & Chinese Medicine", "焦慮與中醫", "不安と中医学")}</h3>
            <p className="text-xs text-text2">{l("Heat can agitate the mind as much as the skin — irritability and restlessness often go hand in hand with breakouts.", "熱能攪動心神也能攪動皮膚 — 煩躁和不安常跟長痘一起來。", "熱は皮膚と同じように心をかき乱す — イライラと落ち着きのなさはニキビとよく一緒に現れる。")}</p>
          </Link>
          <Link href="/wellness/insomnia-chinese-medicine" className="block bg-cream/40 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{l("Insomnia & Chinese Medicine", "失眠與中醫", "不眠と中医学")}</h3>
            <p className="text-xs text-text2">{l("That restless, half-awake sleep we mentioned? It might be worth looking into the insomnia pattern too.", "前面提到的那種半睡半醒？也許值得看看失眠的體質。", "前に触れた落ち着かない睡眠？不眠のパターンも見てみる価値があるかも。")}</p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["acne-chinese-medicine"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Persistent acne is one of the key signs of the Damp Heat body type.", "持續長痘是濕熱體質的關鍵信號之一。", "持続的なニキビは湿熱タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">{l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}</Link>
      </section>
    </main>
  )
}
