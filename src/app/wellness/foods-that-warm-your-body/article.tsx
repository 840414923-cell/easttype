"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function FoodsThatWarmArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
          {l("EastType", "EastType", "EastType")}
        </Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">
          {l("Wellness", "養生", "ウェルネス")}
        </Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Foods That Warm Your Body", "溫暖身體的食物", "体を温める食材")}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Foods That Warm Your Body: A Chinese Medicine Guide",
          "溫暖身體的食物：中醫指南",
          "体を温める食材：中医学ガイド"
        )}
      </h1>
      <p className="text-text2 text-sm mb-6">
        {l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      {/* TL;DR */}
      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-3">
          {l("TL;DR", "重點摘要", "要点")}
        </h2>
        <ul className="text-sm text-text2 space-y-2">
          {[
            l("Yang Deficiency (阳虚) means your body's internal furnace is underpowered — you run cold from the inside out", "陽虛意味著你身體內在的火爐動力不足 — 你從裡到外都冷", "陽虚とは体内の暖炉の出力不足 — 内側から外側まで寒い状態"),
            l("Warming foods like ginger, cinnamon, and lamb literally add fire to your system — they're not just comfort food", "生薑、肉桂、羊肉等溫熱食物真正為你的系統添火 — 不只是安慰食物", "しょうが、シナモン、羊肉などの温性食材は文字通り体に火を加える — 単なる慰めの食べ物ではない"),
            l("Cold, raw, and icy foods drain what little Yang you have — cut back on smoothies, ice water, and raw salads", "寒涼生冷食物會消耗你僅有的陽氣 — 少喝冰沙、冰水，少吃生沙拉", "冷たく生の食べ物はわずかな陽気を奪う — スムージー、氷水、生サラダを控える"),
            l("You can feel a real difference in 2–3 weeks of consistent warming food choices — maybe sooner", "持續選擇溫熱食物，2到3週就能感受到差異 — 也許更快", "温性食材を継続的に選べば2〜3週間で違いを実感できる — たぶんもっと早く"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#8226;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The Short Answer", "簡短回答", "端的な答え")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Traditional Chinese Medicine (TCM), Yang Deficiency (阳虚, pronounced \"yang-shoo\") means your inner furnace is underpowered. Yang is your body's warmth and fire — the force that keeps your metabolism humming, your limbs warm, and your digestion strong. Without enough Yang, everything runs cold and slow. Warming foods are medicine for this type — they don't just comfort you, they literally add fire to your system.",
            "在中醫裡，陽虛意味著你內在的火爐動力不足。陽是你身體的溫暖與火力 — 維持代謝運轉、四肢溫暖、消化有力的力量。陽不足時，一切運行得又冷又慢。溫熱性食物就是這種體質的良藥 — 它們不只是安慰你，而是真正為你的系統添火。",
            "伝統的な中国医学（TCM）では、陽虚（ようきょ）とは体内の暖炉の出力が不足している状態です。陽とは体の温かさと火 — 代謝を回し、四肢を温め、消化を強く保つ力です。陽が不足すると、全てが冷たく遅くなります。温性食材はこの体質の薬 — 単に慰めるだけでなく、文字通り体に火を加えます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Think of it this way: some people can eat ice cream in January and feel fine. You? You're the one ordering hot tea in July. That's not a personality trait — that's probably your Yang talking. Or rather, your Yang not talking loud enough.",
            "這樣想吧：有些人一月吃冰淇淋也沒事。你呢？你是七月還在點熱茶的那個人。那不是性格特質 — 那大概是你陽氣在說話。或者說，你的陽氣說得不夠大聲。",
            "こう考えてみてください：1月にアイスクリームを食べて平気な人がいます。あなた？7月にお茶を頼む人です。それは性格ではなく — たぶん陽気の声です。というか、陽気が十分に大きく声を出していないのです。"
          )}
        </p>
      </section>

      {/* Analogy */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Think of It Like This", "這樣理解", "こう考えてみてください")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Imagine a house with underpowered heating in the middle of winter. You can bundle up in three sweaters, drink hot tea all day, and sit right next to the radiator — but you're still always a little cold. The real fix isn't more blankets. It's upgrading the furnace. Warming foods are like upgrading your body's heating system — they add fire from the inside, so the warmth comes from you, not just from what's around you.",
            "想像一棟冬天暖氣不足的房子。你可以穿三件毛衣、整天喝熱茶、貼著暖氣片坐 — 但你還是覺得有點冷。真正的解決方法不是加毯子，而是升級暖爐。溫熱性食物就像升級你身體的供暖系統 — 從內部加火，讓溫暖來自你自己，而不只是來自周圍的環境。",
            "真冬に暖房の出力が足りない家を想像してください。セーターを3枚重ね、一日中お茶を飲み、暖房のすぐそばに座っても — まだ少し寒い。本当の解決は毛布を増やすことではなく、暖炉をアップグレードすること。温性食材は体の暖房システムのアップグレード — 内側から火を加え、温かさが周囲ではなく自分自身から生まれるようにします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Now here's the part most people miss: the house isn't cold because it's winter. It's cold because the furnace can't keep up. Same with your body. The weather isn't the problem — your internal heating capacity is. And just like a furnace, Yang can be strengthened. It's not a fixed trait you're stuck with forever.",
            "多數人忽略了一點：房子冷不是因為冬天，是因為暖爐跟不上。你的身體也一樣。天氣不是問題 — 你內部的產熱能力才是。而且就像暖爐一樣，陽氣是可以補強的。它不是你永遠擺脫不了的固定特質。",
            "多くの人が見落とす点：家が寒いのは冬だからではなく、暖炉が追いつかないからです。体も同じ。天気が問題ではなく — 内部の発熱能力が問題です。そして暖炉と同じく、陽気は強化できます。永遠に変えられない固定された性質ではありません。"
          )}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {l("Signs of Yang Deficiency — Do You Recognize These?", "陽虛的跡象 — 你有這些嗎？", "陽虚のサイン — これらに覚えがありますか？")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}
        </p>
        <ul className="space-y-2">
          {[
            l("Cold hands and feet, especially in winter", "手腳冰冷，尤其是冬天", "手足が冷たい、特に冬"),
            l("Prefer hot food and drinks over cold", "偏好熱食熱飲，不喜冷食", "冷たいものより温かい食べ物・飲み物を好む"),
            l("Feel worse in cold or damp weather", "寒冷或潮濕天氣時更難受", "寒いや湿った天気で調子が悪くなる"),
            l("Frequent urination, especially at night", "頻尿，尤其是夜間", "頻尿、特に夜間"),
            l("Lower back or knee soreness that worsens with cold", "腰膝痠軟，遇冷加重", "腰や膝のだるさが寒さで悪化"),
            l("Have a personal vendetta against whoever invented air conditioning", "對發明冷氣的人有私人恩怨", "エアコンを発明した人に個人的な恨みがある"),
            l("Digestion feels sluggish — bloating after meals, loose stools, or food just seems to sit there", "消化遲緩 — 飯後脹氣、大便稀軟，或食物好像就堵在那裡", "消化が遅い — 食後の膨満感、ゆるい便、食べ物がそこに留まっている感じ"),
            l("Low stamina — you tire easily and recover slowly, even from minor exertion", "體力差 — 容易累且恢復慢，即使只是輕微活動", "スタミナ不足 — 疲れやすく回復が遅い、軽い運動でも"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text2 text-sm mt-4">
          {l(
            "If you're sitting here thinking \"that's literally me\" to four or more of these — well, there's a decent chance Yang Deficiency is part of your picture. Not a guarantee, but a strong hint.",
            "如果你坐在這裡對著四項以上想「這根本是我」— 嗯，陽虛很可能是你的體質之一。不是一定，但很有可能是。",
            "4つ以上に「まさに私」と思っているなら — 陽虚の可能性はかなり高いです。確定ではないけど、強いヒント。"
          )}
        </p>
      </section>

      {/* What Western Medicine Misses */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What Western Medicine Misses", "西醫忽略了什麼", "西洋医学が見落としていること")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Western medicine says \"just dress warmer\" or checks your thyroid. If your thyroid panel comes back normal, you're told there's nothing wrong. But TCM says the problem isn't the external temperature — it's your body's internal heating capacity. Your Yang is low, meaning your body can't generate and maintain its own warmth. Warming foods don't just feel nice — they literally add Yang energy to your system, stoking the fire from within.",
            "西醫會說「多穿點」或檢查甲狀腺。如果甲狀腺指標正常，醫生會說你沒問題。但中醫說問題不在外部溫度 — 而是你身體內部的產熱能力。你的陽氣不足，意味著身體無法自行產生和維持溫暖。溫熱性食物不只是感覺舒服 — 它們真正為你的系統補充陽氣，從內部點火。",
            "西洋医学は「もっと厚着を」と言うか、甲状腺を検査します。甲状腺の数値が正常なら、問題ないと言われます。しかし中医学は、問題は外部の気温ではなく、体の内部の発熱能力だと言います。陽気が不足している、つまり体が自らの温かさを生み出し維持できないのです。温性食材は単に心地よいだけでなく — 文字通り陽のエネルギーを体に加え、内側から火を起こします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Here's the thing — both systems can be right at the same time. Your thyroid might be technically fine, and you can still feel cold all the time. Western medicine calls that \"subclinical.\" TCM calls that Yang Deficiency. Different language, same observation. The difference is TCM actually has a dietary framework to address it — instead of just telling you to wear thicker socks.",
            "重點是 — 兩種體系可能同時是對的。你的甲狀腺可能技術上沒問題，但你還是整天覺得冷。西醫叫「亞臨床」。中醫叫「陽虛」。不同的語言，同樣的觀察。差別在於中醫確實有飲食框架來處理 — 而不只是叫你穿厚一點的襪子。",
            "重要なのは — 両方の体系が同時に正しい可能性があるということ。甲状腺は技術的には正常でも、ずっと寒く感じることはあります。西洋医学は「亜臨床」と呼びます。中医学は「陽虚」と呼びます。違う言葉、同じ観察。違いは中医学には実際に対処する食事の枠組みがあること — 厚い靴下を履けと言うだけではなく。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Yang Deficiency", "陽虛體質的食物：該吃與不該吃", "陽虚を助ける（悪化させる）食材")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "In TCM, every food has a thermal nature — warming, neutral, or cooling. This isn't about the temperature you serve it at. Ice-cold ginger tea is still warming. Hot watermelon soup is still cooling. The thermal nature is intrinsic to the food itself.",
            "在中醫裡，每種食物都有寒熱屬性 — 溫熱、平性、或寒涼。這跟食物的溫度無關。冰薑茶還是溫性的。熱西瓜湯還是寒性的。寒熱屬性是食物本身固有的。",
            "中医学では、すべての食材に熱性があります — 温、平、寒。これは提供する温度とは関係ありません。冷たいしょうが茶でも温性です。温かいスイカスープでも寒性です。熱性は食材そのものに固有のものです。"
          )}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("✓ Warming Foods", "✓ 溫熱食物", "✓ 温性食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Ginger", "生薑", "しょうが"),
                l("Cinnamon", "肉桂", "シナモン"),
                l("Lamb", "羊肉", "羊肉"),
                l("Beef", "牛肉", "牛肉"),
                l("Black pepper", "黑胡椒", "黒胡椒"),
                l("Roasted nuts", "烤堅果", "ローストナッツ"),
                l("Fennel", "茴香", "フェンネル"),
                l("Onion", "洋蔥", "玉ねぎ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("✗ Cooling Foods", "✗ 寒涼食物", "✗ 寒性食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Raw salads", "生沙拉", "生野菜サラダ"),
                l("Ice water", "冰水", "氷水"),
                l("Watermelon", "西瓜", "スイカ"),
                l("Cucumber", "黃瓜", "きゅうり"),
                l("Cold smoothies", "冰沙", "冷たいスムージー"),
                l("Excessive tropical fruits", "過量熱帶水果", "過度な熱帯果物"),
                l("Mint", "薄荷", "ミント"),
                l("Tofu", "豆腐", "豆腐"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4">
          {l(
            "A quick rule of thumb: if it grows in the ground, gets cooked, or has a spice-level kick, it probably leans warming. If it's raw, watery, or comes from a tropical climate, it probably leans cooling. There are exceptions — but this covers maybe 80% of what you'll encounter day to day.",
            "一個簡單原則：長在土裡的、煮熟的、或帶辣味的，大概偏溫熱。生的、水分多的、或來自熱帶的，大概偏寒涼。有例外 — 但這涵蓋了你日常遇到的八成左右。",
            "簡単な目安：土で育つ、調理される、辛みがあるものは温性寄り。生、水分が多い、熱帯気候のものは寒性寄り。例外はあります — でも日常の8割くらいはカバーできます。"
          )}
        </p>
      </section>

      {/* Daily Life Impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("How This Shows Up in Daily Life", "這在日常生活中怎麼表現", "日常生活でどう現れるか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Yang Deficiency isn't just about feeling cold. It seeps into everything — your energy, your mood, your social life. You're the friend who always suggests indoor restaurants. The one who brings a cardigan everywhere, even in summer. The person who takes a hot shower before bed just to feel warm enough to sleep.",
            "陽虛不只是怕冷。它滲透到一切 — 你的精力、情緒、社交生活。你是那個總是建議去室內餐廳的朋友。那個到哪都帶著開襟衫的人，連夏天也是。那個睡前要洗個熱水澡才夠暖能睡著的人。",
            "陽虚は単に寒がりではありません。すべてに染み込みます — エネルギー、気分、社交生活。いつも屋内のレストランを提案する友人。夏でもどこにでもカーディガンを持っていく人。寝る前にお湯のシャワーを浴びないと眠れない人。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Your digestion might be quietly struggling too. Cold slows things down — that's just physics. In TCM terms, a cold spleen and stomach can't transform food efficiently. So you eat, but you don't feel nourished. You might feel bloated after meals, or notice that your stomach gurgles a lot. These aren't random — they're your body asking for warmth.",
            "你的消化可能也在默默掙扎。寒冷讓一切變慢 — 這就是物理。用中醫的話說，寒涼的脾胃無法有效轉化食物。所以你吃了，但不覺得有營養。飯後可能脹氣，或注意到肚子經常咕嚕叫。這些不是隨機的 — 是你的身體在要溫暖。",
            "消化も静かに苦労しているかもしれません。寒さは物事を遅くする — それは物理です。中医学で言えば、冷えた脾臓と胃は食べ物を効率的に変換できません。食べても栄養を感じない。食後に膨満感や胃がゴロゴロすることがある。これらはランダムではなく — 体が温かさを求めているのです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "And the emotional side? It's probably not a coincidence that in Chinese, the word for \"cold\" (冷) also describes emotional distance. When your body runs cold, your energy contracts. You might feel more withdrawn, less motivated, or just... flat. Not depressed exactly, but not exactly firing on all cylinders either. I'm not saying warming foods will fix your whole life. But they might take the edge off in ways you don't expect.",
            "情感方面呢？中文裡「冷」這個字也形容情感疏遠，大概不是巧合。當身體運行偏冷，能量就收縮。你可能更退縮、更沒動力，或就是… 平。不完全是沮喪，但也不是全力運轉。我不是說溫熱食物能修復你整個人生。但它們可能在意想不到的地方讓你好一點。",
            "感情面はどうでしょう？中国語で「冷」という字が感情的な距離も表すのは、たぶん偶然ではありません。体が冷えているとエネルギーが収縮します。引っ込み思案になったり、モチベーションが下がったり、ただ… 平らになる。うつとは違うけど、全開でもない。温性食材が人生全体を直すとは言いません。でも予想外のところで楽になるかもしれません。"
          )}
        </p>
      </section>

      {/* Simple Warming Meal Plan */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("A Simple Warming Meal Plan", "簡單溫熱飲食計劃", "簡単な温性食事プラン")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "You don't need to overhaul everything overnight. Try this for a day and see how you feel. It's not a prescription — just a starting point.",
            "你不需要一夜之間改變一切。試一天看看感覺如何。這不是處方 — 只是起點。",
            "一夜で全てを変える必要はありません。一日試して感じてみてください。処方ではなく — 出発点です。"
          )}
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Breakfast", "早餐", "朝食")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Congee (rice porridge) with sliced ginger and a pinch of cinnamon. Maybe a soft-boiled egg on the side. No cold cereal, no iced lattes — your stomach just woke up, give it something warm to start with.",
                "薑絲肉桂粥。配一顆水煮蛋。不要冷麥片、不要冰拿鐵 — 你的胃剛醒，給它溫暖的東西開始。",
                "しょうがとシナモンのお粥。ゆで卵を添えて。冷たいシリアル、アイスラテは避けて — 胃が起きたばかり、温かいもので始めましょう。"
              )}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Lunch", "午餐", "昼食")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Lamb and carrot soup, or beef stir-fry with black pepper and onion. A bowl of warm rice on the side. Skip the salad bar today — raw greens take more Yang to digest than your body wants to spend right now.",
                "羊肉胡蘿蔔湯，或黑胡椒洋蔥炒牛肉。配一碗熱飯。今天跳過沙拉吧 — 生蔬菜需要更多陽氣來消化，你的身體現在不想花那個。",
                "羊肉とにんじんのスープ、または黒胡椒と玉ねぎの牛肉炒め。温かいご飯を添えて。今日はサラダバーはパス — 生野菜の消化に余分な陽気が必要で、今は使いたくない。"
              )}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Snack", "點心", "おやつ")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "A handful of roasted walnuts or chestnuts. Warm, slightly sweet, and deeply nourishing in TCM terms. Way better than ice cream for your particular constitution.",
                "一把烤核桃或栗子。溫暖、微甜，中醫說深層滋養。對你的體質來說比冰淇淋好多了。",
                "ローストクルミや栗を一握り。温かく、ほんのり甘く、中医学で深い滋養があります。あなたの体質にはアイスクリームよりずっといい。"
              )}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent mb-1">
              {l("Dinner", "晚餐", "夕食")}
            </h3>
            <p className="text-sm text-text2 leading-relaxed">
              {l(
                "Ginger-chicken soup with fennel and a few red dates (jujubes). Simple, warming, and honestly pretty delicious. Drink the broth — that's where the warmth lives.",
                "薑絲茴香紅棗雞湯。簡單、溫暖，而且說真的蠻好喝的。喝湯 — 溫暖都在湯裡。",
                "しょうが、フェンネル、ナツメの鶏スープ。シンプルで温かく、正直かなり美味しい。スープを飲んで — 温かさはスープに宿ります。"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. If your cold intolerance is severe, sudden, or accompanied by significant weight changes, heart palpitations, or extreme fatigue, please consult a licensed healthcare provider immediately. Thyroid disorders and other conditions can mimic Yang Deficiency patterns.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的怕冷嚴重、突然發生，或伴隨明顯體重變化、心悸、極度疲勞，請立即諮詢合格醫療專業人員。甲狀腺疾病等狀況可能與陽虛表現相似。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。寒がりが激しい、突然、著しい体重変化、動悸、極度の疲労を伴う場合は、直ちに医療専門家にご相談ください。甲状腺障害などの疾患は陽虚のパターンと似ることがあります。"
          )}
        </p>
      </section>

      {/* Related Conditions */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Conditions", "相關狀況", "関連する症状")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l(
            "Yang Deficiency often overlaps with other patterns. If any of these sound familiar, it might be worth reading more:",
            "陽虛常與其他體質重疊。如果這些聽起來熟悉，值得多看看：",
            "陽虚は他のパターンと重なることが多いです。これらに聞き覚えがあれば、さらに読んでみてください："
          )}
        </p>
        <div className="space-y-3">
          <Link
            href="/wellness/cold-hands-and-feet"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {l("Cold Hands and Feet", "手腳冰冷", "手足の冷え")}
            </h3>
            <p className="text-xs text-text2 leading-relaxed">
              {l(
                "The most visible sign of Yang Deficiency — and what to do when your extremities never seem to warm up.",
                "陽虛最明顯的信號 — 以及四肢總是暖不起來時該怎麼辦。",
                "陽虚の最も目に見えるサイン — そして四肢が温まらない時にどうするか。"
              )}
            </p>
          </Link>
          <Link
            href="/wellness/why-am-i-always-tired"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {l("Why Am I Always Tired?", "為什麼我總是累？", "なぜいつも疲れているのか？")}
            </h3>
            <p className="text-xs text-text2 leading-relaxed">
              {l(
                "Low Yang often means low energy. If you're always exhausted regardless of how much you sleep, Yang Deficiency could be part of the picture.",
                "陽氣低通常意味著能量低。如果你不管睡多久都累，陽虛可能是原因之一。",
                "陽気が低いとエネルギーも低くなりがち。いくら寝ても疲れているなら、陽虚が関係しているかもしれません。"
              )}
            </p>
          </Link>
          <Link
            href="/wellness/chinese-medicine-foods-for-energy"
            className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <h3 className="text-sm font-semibold text-text mb-1">
              {l("Chinese Medicine Foods for Energy", "中醫補氣食物", "中医学のエネルギー食材")}
            </h3>
            <p className="text-xs text-text2 leading-relaxed">
              {l(
                "Yang and Qi are closely related — if warming foods help but you still feel drained, Qi-supporting foods might be the missing piece.",
                "陽和氣密切相關 — 如果溫熱食物有幫助但你還是覺得虛，補氣食物可能是缺少的那塊。",
                "陽と気は密接に関係 — 温性食材で改善してもまだ疲れるなら、気を補う食材が足りないかもしれません。"
              )}
            </p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["foods-that-warm-your-body"]} />

      {/* CTA */}
      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">
          {l(
            "Cold hands, frequent urination, and aversion to cold are key signs of the Yang Deficient body type.",
            "手腳冰冷、頻尿、怕冷是陽虛體質的關鍵信號。",
            "冷たい手足、頻尿、寒さへの嫌悪は陽虚タイプの主要なサインです。"
          )}
        </p>
        <p className="text-text2 text-sm mb-6">
          {l(
            "There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.",
            "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。",
            "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。"
          )}
        </p>
        <Link
          href="/quiz"
          className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2"
        >
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}
