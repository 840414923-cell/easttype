"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function ColdHandsArticle() {
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
        <span className="text-text2">{l("Cold Hands & Feet", "手腳冰冷", "手足の冷え")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Cold Hands and Feet? Chinese Medicine Explains Why", "手腳冰冷？中醫的解釋", "手足の冷え？中医学の説明")}
      </h1>
      <p className="text-text2 text-sm mb-6">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-accent mb-3">{l("TL;DR", "重點摘要", "要点")}</h2>
        <ul className="text-sm text-text2 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Cold hands and feet with normal blood work usually signals Yang Deficiency in TCM", "血液檢查正常卻手腳冰冷，在中醫通常是陽虛的信號", "血液検査が正常なのに手足が冷えるのは、中医学では陽虚のサイン")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Yang is your body's inner furnace — when it's weak, your body cuts heat to extremities to protect vital organs", "陽是身體的內在火爐 — 不足時，身體會減少四肢供熱來保護重要器官", "陽は体の内側の暖炉 — 弱まると、重要臓器を守るために四肢への熱供給を減らす")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("Warming foods like ginger, cinnamon, and lamb can help rebuild Yang over time", "生薑、肉桂、羊肉等溫性食物可以慢慢補陽", "しょうが、シナモン、羊肉などの温性食材で陽を徐々に養える")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>{l("A simple morning ginger-cinnamon tea routine can make a noticeable difference", "簡單的早晨薑桂茶習慣就能帶來明顯改善", "朝のしょうがシナモンティーの習慣で明らかな変化を感じられる")}</span>
          </li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "In Traditional Chinese Medicine (TCM), chronically cold hands and feet — especially when your blood work is normal — is usually caused by Yang Deficiency (阳虚, pronounced \"yang-shoo\"). Yang is your body's warming, activating force. Think of it as your inner furnace. When Yang is low, your body prioritizes keeping your core warm and cuts off heat to your extremities.",
            "在中醫裡，長期手腳冰冷 — 尤其是血液檢查正常的時候 — 通常是由陽虛引起的。陽是你身體的溫暖和活化力量，就像你的內在火爐。陽不足時，身體優先保護核心器官的溫暖，減少四肢的供熱。",
            "伝統的な中国医学（TCM）では、血液検査が正常なのに慢性的に手足が冷えるのは、通常、陽虚（ようきょ）が原因です。陽とは体を温め活性化する力。内側の暖炉のようなもの。陽が不足すると、体は核心部を温めることを優先し、四肢への熱供給を減らします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't just about feeling cold. Yang Deficiency affects your overall energy, digestion, and even how well you recover from illness. Most people with this pattern notice they're the first to reach for a sweater and the last to feel comfortable in air-conditioned spaces.",
            "這不只是怕冷那麼簡單。陽虛會影響你的整體精力、消化，甚至康復速度。這種體質的人通常是最早穿外套、最晚適應冷氣房的那個。",
            "これは単に寒がりというだけではありません。陽虚は全体的なエネルギー、消化、病気からの回復力にも影響します。この体質の人は、一番早く上着を羽織り、エアコンの効いた部屋に最後に慣れる傾向があります。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Your body is a house. Yang is the heating system. When the furnace is underpowered, it keeps the living room warm but the bedrooms stay freezing. No amount of blankets fixes a broken furnace — you need to turn up the heat from the inside.",
            "你的身體是一棟房子。陽是暖氣系統。火爐功率不足時，客廳暖但臥室冰。蓋再多的被子也修不好火爐 — 你需要從內部升溫。",
            "体は家のようなもの。陽は暖房システム。暖炉の出力が足りないと、リビングは暖かいが寝室は寒いまま。布団を何枚かけても壊れた暖炉は直らない — 内側から熱を上げる必要があります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Here's the thing: your body is smart. When Yang is running low, it makes a calculated decision. Your heart, lungs, kidneys, and other vital organs need warmth to function. So your body deliberately restricts blood flow to your hands and feet, sacrificing comfort to keep you alive. It's not a malfunction — it's a survival strategy that's working a little too well.",
            "重點是：你的身體很聰明。陽氣不足時，它會做出計算過的決定。心、肺、腎等重要器官需要溫暖才能運作。所以身體會刻意減少手腳的血流，犧牲舒適來保命。這不是故障 — 是一個運作得太認真的生存策略。",
            "ポイントは、体は賢いということ。陽気が不足すると、体は計算された決断を下します。心臓、肺、腎臓などの重要臓器は機能するために温かさが必要。だから体は意図的に手足への血流を制限し、生存を優先して快適さを犠牲にする。これは故障ではなく、少しうまく働きすぎている生存戦略なのです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("What Yang Deficiency Feels Like Day to Day", "陽虛的日常生活是什麼感覺", "陽虚の日常とは")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Living with Yang Deficiency isn't dramatic. It's a low-grade, persistent discomfort that most people just accept as \"how I am.\" You might wake up already feeling tired, even after a full night's sleep. Getting out of bed feels harder than it should. The morning shower is a negotiation — you stand under the hot water longer than anyone else in your household, dreading the moment you have to step out.",
            "陽虛的生活並不戲劇化。它是一種低強度、持續的不適，大多數人就這樣接受「我就是這樣」。你可能睡滿整晚醒來還是累。起床比應該的更困難。早晨洗澡是一場談判 — 你站在熱水下比家裡任何人都久，害怕踏出來的那一刻。",
            "陽虚との生活は劇的ではありません。多くの人が「自分はこういう体質」と受け入れている、低レベルで持続的な不快感です。たっぷり寝ても朝から疲れていることがあります。ベッドから出るのは思ったより大変。朝のシャワーは交渉ごとのよう — 家族の誰よりも長くお湯に当たり、出る瞬間を怖がっています。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Breakfast? You probably skip it or eat something light because your appetite hasn't really woken up yet. By mid-morning, your hands might be cold even though you're indoors. You keep a cardigan at your desk year-round. Colleagues joke about your personal heater collection.",
            "早餐？你可能跳過或隨便吃點，因為胃口還沒真正醒來。上午過半，手可能已經冷了，明明在室內。你桌上常年放著一件開襟衫。同事開玩笑說你收藏個人暖氣機。",
            "朝食？食欲がまだ目覚めていないので、スキップするか軽く済ませることが多いでしょう。午前中には、室内なのに手が冷えているかもしれません。一年中デスクにカーディガンを置いています。同僚はあなたの個人ヒーターのコレクションを冗談にします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Evenings bring their own challenges. You might find yourself reaching for socks in summer. Sleep is often restless — you wake up cold, or you've kicked off the covers because you got too hot, then wake up freezing an hour later. It's a cycle that leaves you feeling like you never quite rested.",
            "晚上有自己的挑戰。夏天你可能還是找襪子穿。睡眠往往不安穩 — 你冷醒，或者踢開被子因為太熱，一小時後又凍醒。這個循環讓你覺得從來沒真正休息過。",
            "夜にはまた別の課題が。夏でも靴下を探しているかもしれません。睡眠は落ち着かないことが多く — 寒くて目覚めたり、暑くて布団を蹴ってから1時間後に凍えて目覚めたり。このサイクルで、休んだ気がしないのです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Yang Deficiency", "陽虛的跡象", "陽虚のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("Hands and feet are often cold, especially in winter", "手腳常常冰冷，尤其是冬天", "手足がよく冷たい、特に冬"),
            l("You prefer hot food and drinks over cold ones", "偏好熱食熱飲，不愛冷的", "冷たいものより温かい食事・飲み物が好き"),
            l("You feel worse in cold or damp weather", "冷或潮濕的天氣讓你更不舒服", "寒さや湿気で調子が悪くなる"),
            l("You urinate frequently, especially at night", "頻尿，尤其是夜間", "トイレが近い、特に夜"),
            l("Lower back or knee soreness that worsens with cold", "腰膝酸痛，遇冷加重", "腰や膝がだるく、冷えると悪化"),
            l("You have a personal vendetta against whoever invented air conditioning", "你跟發明冷氣的人有私人恩怨", "エアコンを発明した人を個人的に許していない"),
            l("Your digestion feels sluggish, especially after cold foods", "消化緩慢，吃冷食後更明顯", "消化が悪く、冷たい食べ物の後は特に"),
            l("You catch colds easily and recover slowly", "容易感冒且康復緩慢", "風邪を引きやすく、回復が遅い"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Warming Foods for Yang Deficiency", "陽虛體質的溫性食物", "陽虚を温める食材")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Food is one of the most accessible ways to support Yang. The principle is simple: warm foods help build warm energy. This doesn't mean eating everything piping hot — it's about the energetic nature of the food itself. Ginger, for example, is warming even when added to room-temperature dishes.",
            "食物是補陽最容易的方法之一。原則很簡單：溫性食物幫助建立溫暖的能量。這不是說所有東西都要趁熱吃 — 而是食物本身的能量性質。比如生薑，即使加在常溫菜餚裡也是溫性的。",
            "食事は陽を養う最も身近な方法の一つ。原則はシンプル：温性食材は温かいエネルギーを作る。これは全てを熱々で食べるということではなく、食材自体のエネルギー的性質のこと。例えばしょうがは、常温の料理に加えても温性効果がある。"
          )}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Warming Foods", "✓ 溫性食物", "✓ 温性食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Ginger", "生薑", "しょうが"), l("Cinnamon", "肉桂", "シナモン"), l("Lamb", "羊肉", "羊肉"), l("Onion & leek", "洋蔥與韭菜", "玉ねぎとニラ"), l("Walnuts", "核桃", "クルミ"), l("Black pepper", "黑胡椒", "黒胡椒")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Cooling Foods", "✗ 寒性食物", "✗ 冷性食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Ice water & cold drinks", "冰水與冷飲", "氷水と冷たい飲み物"), l("Raw vegetables", "生蔬菜", "生野菜"), l("Watermelon", "西瓜", "スイカ"), l("Excessive fruit", "過量水果", "過度な果物"), l("Seaweed", "海藻", "海藻"), l("Green tea (excessive)", "過量綠茶", "緑茶の飲みすぎ")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          {l(
            "You don't need to eliminate cooling foods entirely. Just be mindful of balance. If you're having a salad on a cold day, add some ginger dressing. Craving watermelon in summer? Have it at noon when Yang is naturally stronger, not in the evening.",
            "不需要完全避開寒性食物。只要注意平衡。冷天吃沙拉時，加點薑汁調味。夏天想吃西瓜？中午陽氣自然較強時吃，不要晚上吃。",
            "冷性食材を完全に排除する必要はありません。バランスを意識すればいい。寒い日にサラダを食べるなら、しょうがドレッシングを。夏にスイカが食べたい？陽気が自然と強い正午に、夕方ではなく。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-accent/30 rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("A Simple Warming Morning Routine", "簡單的早晨暖身習慣", "簡単な朝の温活ルーティン")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Small habits compound over time. Here's a gentle routine that many people find helpful. It takes about 5 minutes and costs almost nothing.",
            "小習慣會隨時間累積。這是一個很多人覺得有用的溫和習慣。大約5分鐘，幾乎不花錢。",
            "小さな習慣は時間とともに積み重なります。多くの人が役立つと感じる、穏やかなルーティンを紹介します。約5分、ほぼ費用はかかりません。"
          )}
        </p>
        <div className="bg-bg/50 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-accent mb-3">{l("Ginger-Cinnamon Morning Tea", "早晨薑桂茶", "朝のしょうがシナモンティー")}</h3>
          <ul className="text-sm text-text2 space-y-2">
            <li className="flex gap-2">
              <span className="text-accent font-medium">1.</span>
              <span>{l("Slice 3-4 thin pieces of fresh ginger (no need to peel)", "切3-4薄片新鮮生薑（不用去皮）", "新鮮なしょうがを薄切りに3-4枚（皮むき不要）")}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">2.</span>
              <span>{l("Add a small cinnamon stick or 1/4 tsp ground cinnamon", "加一小段肉桂棒或1/4茶匙肉桂粉", "シナモンスティック小1本またはパウダー小さじ1/4")}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">3.</span>
              <span>{l("Pour hot water over and steep for 5 minutes", "沖入熱水，浸泡5分鐘", "お湯を注ぎ、5分蒸らす")}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">4.</span>
              <span>{l("Optional: add a small piece of red date (jujube) for sweetness", "可選：加一顆紅棗增加甜味", "お好みで：甘みのためにナツメを1個")}</span>
            </li>
          </ul>
        </div>
        <p className="text-text2 text-sm leading-relaxed">
          {l(
            "Drink this warm, not scalding hot, on an empty stomach if possible. Many people notice they feel warmer within 20-30 minutes. The effect is subtle but builds over weeks of consistent practice. If you have acid reflux or a \"hot\" constitution, check with a practitioner first.",
            "溫熱飲用，不要太燙，最好空腹喝。很多人20-30分鐘內就覺得變暖。效果微妙但持續幾週會累積。如果你有胃酸逆流或「熱性」體質，請先諮詢專業人士。",
            "熱すぎない温かい状態で、できれば空腹時に飲んでください。20-30分以内に体が温まるのを感じる人が多い。効果は控えめですが、数週間続けると積み重なります。逆流性食道炎や「熱性」体質の方は、まず専門家に相談を。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Related Conditions", "相關狀況", "関連する状態")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "Yang Deficiency rarely shows up alone. It often overlaps with other patterns that share similar roots.",
            "陽虛很少單獨出現。它常與其他有相似根源的體質重疊。",
            "陽虚は単独で現れることは稀。似た根源を持つ他のパターンと重なることが多い。"
          )}
        </p>
        <div className="space-y-3">
          <Link href="/wellness/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{l("Why Am I Always Tired?", "為什麼總是疲累？", "なぜいつも疲れている？")}</h3>
            <p className="text-xs text-text2">{l("Fatigue is one of the most common companions of Yang Deficiency — your inner furnace can't generate enough energy", "疲勞是陽虛最常見的夥伴 — 內在火爐無法產生足夠能量", "疲労は陽虚の最も一般的な伴侶 — 内側の暖炉が十分なエネルギーを生み出せない")}</p>
          </Link>
          <Link href="/wellness/foods-that-warm-your-body" className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{l("Foods That Warm Your Body", "溫暖身體的食物", "体を温める食材")}</h3>
            <p className="text-xs text-text2">{l("A deeper dive into warming ingredients and how to incorporate them into daily meals", "深入探討溫性食材以及如何融入日常飲食", "温性食材についてより深く、日常食への取り入れ方を解説")}</p>
          </Link>
          <Link href="/wellness/insomnia-chinese-medicine" className="block bg-cream/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors no-underline">
            <h3 className="text-sm font-semibold text-text mb-1">{l("Insomnia & Chinese Medicine", "失眠與中醫", "不眠と中医学")}</h3>
            <p className="text-xs text-text2">{l("Poor sleep and cold extremities often go together — both can stem from the same underlying imbalance", "睡眠差和手腳冰冷常一起出現 — 兩者可能源自同一失衡", "睡眠不足と手足の冷えはよく同時に現れる — どちらも同じ不調が原因の可能性")}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed mb-3">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Cold extremities can also be caused by Raynaud's, thyroid issues, or circulatory problems. If your fingers turn white or blue, or if coldness is sudden and one-sided, consult a doctor immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。手腳冰冷也可能是雷諾氏症、甲狀腺問題或循環問題。如果手指變白或變藍，或冰冷是突然且單側的，請立即看醫生。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。冷えはレイノー現象、甲状腺の問題、循環器の問題が原因の場合もあります。指が白や青になる、突然の片側の冷えがある場合は、直ちに医師にご相談ください。"
          )}
        </p>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "Also worth noting: if cold hands and feet appeared suddenly rather than gradually over years, or if they're accompanied by other symptoms like unexplained weight changes, hair loss, or skin color changes, that's worth getting checked out. Trust your instincts — you know your body best.",
            "另外值得注意的是：如果手腳冰冷是突然出現而非多年逐漸形成，或伴隨不明原因的體重變化、掉髮、膚色改變等症狀，值得去檢查。相信直覺 — 你最了解自己的身體。",
            "もう一つ：手足の冷えが数年かけてではなく突然現れた場合、または原因不明の体重変化、脱毛、肌の色の変化などの他の症状を伴う場合は、チェックを受ける価値があります。直感を信じて — 自分の体のことは自分が一番よく知っています。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["cold-hands-and-feet"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Always cold is one of the key signs of the Yang Deficient body type.", "長期怕冷是陽虛體質的關鍵信號之一。", "いつも寒いのは陽虚タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}
