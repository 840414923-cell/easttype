"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"

export default function NightSweatsArticle() {
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
        <span className="text-text2">{l("Night Sweats", "夜間盜汗", "寝汗")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Night Sweats: What Chinese Medicine Says About Waking Up Hot", "夜間盜汗：中醫怎麼說", "寝汗：中医学はどう説明するか")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10 bg-accent/8 border border-accent/20 rounded-xl p-5">
        <p className="text-text/90 leading-relaxed text-[0.95rem]">
          {l(
            "If you wake up sweaty and hot — but your room isn't — Chinese medicine says it's usually Yin Deficiency (阴虚). Your body's cooling system is running low. The fix isn't just turning down the thermostat. It's eating moistening, cooling foods (pear, lily bulb, mung bean soup) and avoiding spicy, heating foods that add fuel to the fire. About 10-15% of people have this pattern, and it tends to show up more after 40.",
            "如果你醒來一身汗 — 但房間不熱 — 中醫通常說是陰虛。你身體的冷卻系統快沒了。解法不是把冷氣開強。是吃滋陰涼潤的食物（梨、百合、綠豆湯），避開辛辣燥熱的食物。大約10-15%的人有這種體質，40歲後更常見。",
            "目覚めると汗をかいている — でも部屋は暑くない — 中医学では通常陰虚と考えます。体の冷却システムが不足しています。解決策はエアコンを強くすることではありません。潤い・冷ます食材（梨、ゆり根、緑豆スープ）を食べ、火に油を注ぐ辛い・熱を生じる食材を避けることです。約10〜15%の人がこのパターンで、40歳以降に多く現れます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("The Short Answer", "簡短回答", "端的な答え")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Traditional Chinese Medicine (TCM), night sweats — especially when they're not caused by room temperature, menopause, or infection — are usually a sign of Yin Deficiency (阴虚, pronounced \"een-shoo\"). Yin is your body's cooling, moistening force. When Yin is low, there's not enough \"water\" to balance the \"fire,\" so internal heat builds up, especially at night when Yang energy should be resting.",
            "在中醫裡，夜間盜汗 — 尤其不是因為室溫、更年期或感染引起的 — 通常是陰虛的信號。陰是你身體的降溫和潤澤力量。陰不足時，沒有足夠的「水」來平衡「火」，所以內熱堆積，尤其是夜間陽氣本該休息的時候。",
            "伝統的な中国医学（TCM）では、室温、更年期、感染が原因ではない寝汗は、通常、陰虚（いんきょ）のサインです。陰とは体を冷やし潤す力。陰が不足すると、「水」が「火」のバランスを取れず、内熱が蓄積し、特に夜間に陽気が休むべき時に顕著になります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Here's what confuses a lot of people: you might feel perfectly fine during the day. Maybe even a little cold. But when night comes and your body should be cooling down, something misfires. The heat that was absorbed during the day has nowhere to go. So it pushes out through your skin — as sweat.",
            "讓很多人困惑的是：你白天可能感覺完全正常。甚至有點怕冷。但到了晚上，身體該降溫的時候，出了問題。白天吸收的熱無處可去。所以它從皮膚推出來 — 變成汗。",
            "多くの人が混乱する点：日中は全く問題ないかもしれません。寒がりですらある。しかし夜、体が冷えるべき時に何かがうまくいかない。日中に吸収された熱が逃げ場を失う。だから皮膚から押し出される — 汗として。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Think of It Like This", "這樣理解", "こう考えてみてください")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Your body is an engine. Yang is the gas pedal, Yin is the coolant. If your coolant is low, the engine overheats — not because you're pressing the gas too hard, but because there's nothing to absorb the heat. That's why you wake up at 3 AM feeling like a slow-burning ember: the daytime heat hasn't been absorbed and released.",
            "你的身體是引擎。陽是油門，陰是冷卻液。冷卻液不足時引擎過熱 — 不是因為你踩油門太猛，而是因為沒有東西吸收熱量。所以你凌晨3點醒來感覺像一塊慢燒的炭：白天的熱沒被吸收和釋放。",
            "体はエンジン。陽はアクセル、陰はクーラント。クーラントが少ないとエンジンは過熱 — アクセルを踏みすぎたからではなく、熱を吸収するものがないから。だから深夜3時にゆっくり燃える炭のように目が覚める：昼間の熱が吸収・放出されていない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Most people find this analogy helpful because it explains something counterintuitive: you can have \"internal heat\" while feeling cold on the surface. The heat is trapped inside, and at night, when your body tries to rest, it escapes the only way it can — through sweating.",
            "大多數人覺得這個比喻有幫助，因為它解釋了一件反直覺的事：你可以「內熱」但表面怕冷。熱被困在裡面，晚上身體想休息時，它用唯一的方式逃出來 — 流汗。",
            "多くの人がこの比喩を役立つと感じます。直感に反することを説明できるから：表面は寒がりなのに「内熱」がある。熱は内側に閉じ込められ、夜、体が休もうとすると、唯一の逃げ道 — 発汗 — を通じて放出されます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">{l("Signs of Yin Deficiency", "陰虛的跡象", "陰虚のサイン")}</h2>
        <p className="text-text2 text-sm mb-4">{l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}</p>
        <ul className="space-y-2">
          {[
            l("You feel warm or flushed, especially in the afternoon and evening", "覺得熱或臉紅，尤其是下午和晚上", "特に午後から夜にかけて暑い・のぼせる"),
            l("Your mouth and throat feel dry, even after drinking water", "口和喉嚨常覺得乾，喝水也沒用", "水を飲んでも口や喉が乾く"),
            l("You have trouble staying asleep — you wake up in the night", "睡不沉 — 半夜會醒", "眠りが浅い — 夜中に目が覚める"),
            l("You prefer cold food and drinks over hot ones", "偏好冷食冷飲，不愛熱的", "温かいものより冷たい食事・飲み物が好き"),
            l("Your skin or eyes sometimes feel dry and irritated", "皮膚或眼睛有時乾澀不適", "肌や目が乾いてイライラする"),
            l("Your best ideas come at midnight and your worst decisions come at noon", "最好的點子在半夜，最差的決定在中午", "最高のアイデアは深夜、最悪の決断は昼に来る"),
            l("You feel restless or anxious in the evening, like your mind won't quiet down", "晚上覺得煩躁或焦慮，腦子靜不下來", "夜に落ち着かない・不安、頭が静まらない"),
            l("Your palms and soles sometimes feel hot for no reason", "手心腳心有時無故發熱", "手のひら・足の裏が時々理由なく熱くなる"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text2/70 text-sm mt-4">
          {l(
            "If you checked 4 or more, there's a good chance Yin Deficiency is part of your pattern. The free quiz at the end gives you a personalized reading across all 9 body types.",
            "如果你勾了4項以上，很可能是陰虛體質。文末的免費測驗會幫你分析9種體質。",
            "4つ以上当てはまれば、陰虚の可能性が高いです。最後の無料クイズで9つの体質をパーソナライズ分析できます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("What Yin Deficiency Actually Feels Like Day to Day", "陰虛在日常生活中到底是什麼感覺", "陰虚の日常的な感覚")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "It's not just about night sweats. Yin Deficiency colors your whole day, often in ways you might not connect. You might notice that you get irritable in the late afternoon, when your internal heat peaks. Or that you crave cold drinks constantly, even in winter. Some people with this pattern find they're most creative at night but completely foggy in the morning — that's the \"fire\" burning bright when it should be dimming.",
            "不只是夜間盜汗。陰虛影響你的一整天，常常是你沒聯想到的方式。你可能會發現傍晚特別煩躁，那是內熱高峰的時候。或者你一直想喝冷飲，冬天也是。有些這種體質的人發現晚上最有創意，早上卻完全迷糊 — 那是「火」該暗時還在燒。",
            "寝汗だけではありません。陰虚は一日中、気づかない形で影響します。夕方、内熱がピークの時にイライラするかもしれません。冬でも冷たい飲み物を常に欲しがる。このパターンの人の中には、夜に最も創造的で朝は完全に霧の中という人も — それは「火」が暗くなるべき時に明るく燃えているから。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Sleep becomes a particular struggle. You fall asleep fine, but then you wake up around 2 or 3 AM — hot, sweaty, mind racing. The sweat isn't the kind you get from exercise or a hot room. It's more like a damp film on your skin. You might have to change your pajamas or even your sheets. And when you finally get back to sleep, you wake up feeling like you barely rested.",
            "睡眠變成特別的掙扎。你入睡沒問題，但凌晨2、3點醒來 — 熱、汗、腦子轉個不停。那汗不是運動或熱房間那種。更像皮膚上的一層濕膜。你可能得換睡衣甚至床單。好不容易再睡著，醒來還是覺得沒休息到。",
            "睡眠は特に苦労します。寝つきは良いが、深夜2〜3時に目が覚める — 暑い、汗、頭が回転。その汗は運動や暑い部屋の汗とは違う。皮膚の湿った膜のようなもの。パジャマやシーツを替えなければならないかもしれません。やっと眠りに戻っても、ほとんど休んでいない気分で目が覚めます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Yin Deficiency tends to develop slowly, often over years. It's common after periods of prolonged stress, after having children, or simply as we age. In TCM theory, Yin naturally declines with age — which is why night sweats and hot flashes become more common after 40, even outside of menopause.",
            "陰虛通常慢慢發展，常常是幾年。長期壓力後、生孩子後、或單純年紀大了都常見。中醫理論裡，陰本來就會隨年齡下降 — 這就是為什麼盜汗和潮熱在40歲後更常見，不只在更年期。",
            "陰虚はゆっくり、数年かけて発展することが多い。長期ストレス後、出産後、または単に加齢とともに。中医学の理論では、陰は年齢とともに自然に減少 — これが更年期以外でも40歳以降に寝汗やほてりが増える理由です。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Cooling Foods for Yin Deficiency", "陰虛體質的涼潤食物", "陰虚を冷ます・潤す食材")}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "In TCM, food is your first line of defense. Not supplements, not herbs — everyday food, chosen wisely. The principle is simple: add moistening, cooling foods; reduce heating, drying ones. You're not just eating for nutrition. You're eating to restore the water-to-fire ratio in your body.",
            "在中醫裡，食物是第一道防線。不是保健品，不是藥草 — 是日常食物，明智選擇。原則很簡單：加滋陰涼潤的食物；減燥熱的。你不只是為營養吃。你是為了恢復身體的水火比例。",
            "中医学では、食べ物が最初の防御線です。サプリでも漢方でもなく — 毎日の食べ物を賢く選ぶ。原則はシンプル：潤い・冷ます食材を増やし、熱を生じ・乾燥させるものを減らす。栄養のためだけでなく、体の水と火のバランスを回復するために食べるのです。"
          )}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{l("✓ Nourishing (Moistening) Foods", "✓ 滋陰潤燥食物", "✓ 滋陰潤燥の食材")}</h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[l("Pear", "梨", "梨"), l("Lily bulb", "百合", "ゆり根"), l("Black sesame", "黑芝麻", "黒ゴマ"), l("Tofu", "豆腐", "豆腐"), l("Mung bean soup", "綠豆湯", "緑豆スープ"), l("Honey water (room temp)", "蜂蜜水（常溫）", "はちみつ水（常温）"), l("Tremella mushroom", "白木耳", "白キクラゲ"), l("Lotus root", "蓮藕", "レンコン")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">{l("✗ Heating Foods to Limit", "✗ 應限制的燥熱食物", "✗ 制限すべき燥熱食材")}</h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[l("Spicy food (chili, pepper)", "辛辣食物（辣椒、胡椒）", "辛い食べ物（唐辛子、胡椒）"), l("Excessive coffee", "過量咖啡", "コーヒーの飲みすぎ"), l("Alcohol", "酒精", "アルコール"), l("Lamb and heavy meats", "羊肉和厚重肉類", "羊肉や重い肉類"), l("Deep-fried food", "油炸食物", "揚げ物"), l("Excessive ginger/garlic", "過量薑蒜", "しょうが・にんにくの摂りすぎ")].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2/70 text-sm mt-4">
          {l(
            "Notice the pattern? These aren't random rules. Spicy and fried foods literally add heat to your system. For someone with Yin Deficiency, that's like pouring gasoline on a fire that's already struggling to contain itself.",
            "看到規律了嗎？這些不是隨便的規則。辛辣和油炸食物真的會給你的系統加熱。對陰虛的人來說，就像在已經很難控制的火上澆汽油。",
            "パターンに気づきましたか？これらはランダムなルールではありません。辛いものや揚げ物は文字通り体に熱を加えます。陰虚の人にとって、それはすでに制御に苦労している火にガソリンを注ぐようなもの。"
          )}
        </p>
      </section>

      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("A Simple Cooling Evening Routine", "簡單的涼潤晚間例行", "簡単な冷ます夜のルーティン")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You don't need to change everything. Start with this: a small bowl of lily bulb and pear soup, 2-3 hours before bed. It's a classic TCM remedy that's been used for centuries, and most people find it genuinely helps within a week or two.",
            "你不需要改變一切。從這個開始：睡前2-3小時，一小碗百合梨湯。這是用了幾世紀的中醫經典，大多數人一兩週內就會發現真的有幫助。",
            "全てを変える必要はありません。ここから始めましょう：寝る2〜3時間前に小さな百合根と梨のスープ。何世紀も使われてきた中医学の定番で、ほとんどの人が1〜2週間で本当に効果を感じます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Here's how to make it: slice half a pear (any kind works, but Asian pear is traditional). Add a handful of dried lily bulb (available at Asian grocery stores). Simmer in 2 cups of water for 20-30 minutes, until the pear is soft. Drink the liquid warm, and eat the pear if you like. No sugar needed — the pear is naturally sweet.",
            "做法：半顆梨切片（任何梨都可以，亞洲梨是傳統）。加一把乾百合（亞洲超市有賣）。用兩杯水燉20-30分鐘，到梨變軟。溫熱喝湯，梨可吃可不吃。不用加糖 — 梨本身夠甜。",
            "作り方：梨半分をスライス（何でもいいが、アジアの梨が伝統的）。乾燥ゆり根一握り（アジア食材店で入手可）を加える。水2カップで20〜30分、梨が柔らかくなるまで煮る。温かい汁を飲み、梨はお好みで。砂糖不要 — 梨は自然に甘いです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Then, if you can, avoid screens for the last hour before bed. The blue light stimulates Yang energy when it should be winding down. For someone with Yin Deficiency, that's working against your body's natural rhythm. Read a book instead, or just sit quietly. You might notice the difference faster than you expect.",
            "然後，如果可以，睡前最後一小時避開螢幕。藍光會刺激該下降的陽氣。對陰虛的人來說，那是在跟身體的自然節奏對抗。改成看書，或靜靜坐著。你可能會發現差別比預期快。",
            "そして、できれば寝る前の1時間は画面を避けてください。ブルーライトは下がるべき陽気を刺激します。陰虚の人にとって、それは体の自然なリズムに逆らっています。代わりに本を読むか、静かに座ってください。予想より早く違いに気づくかもしれません。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{l("Related Conditions You Might Also Notice", "你可能也注意到的相關狀況", "気づいているかもしれない関連する状態")}</h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Yin Deficiency rarely travels alone. If night sweats sound familiar, you might also recognize some of these patterns:",
            "陰虛很少單獨出現。如果夜間盜汗聽起來很熟悉，你可能也會認出這些模式：",
            "陰虚は単独で現れることは稀です。寝汗に聞き覚えがあれば、これらのパターンにも気づくかもしれません："
          )}
        </p>
        <ul className="space-y-2">
          {[
            { text: l("Insomnia — especially the kind where you fall asleep fine but wake up at 2-3 AM with your mind racing. That's the internal heat disturbing your spirit.", "失眠 — 尤其是那種入睡沒問題但凌晨2-3點醒來腦子轉個不停的。那是內熱擾動你的心神。", "不眠 — 特に寝つきは良いが深夜2〜3時に頭が回転して目が覚めるタイプ。それは内熱が心神を乱しているから。"), href: "/wellness/insomnia-chinese-medicine" },
            { text: l("Anxiety and restlessness — that keyed-up feeling, especially in the evening. Yin Deficiency and anxiety often go hand in hand.", "焦慮和煩躁 — 那種緊繃的感覺，尤其是晚上。陰虛和焦慮常常一起出現。", "不安と落ち着きのなさ — その張り詰めた感覚、特に夜に。陰虚と不安はよくセットで現れます。"), href: "/wellness/anxiety-chinese-medicine" },
            { text: l("Dry skin and eyes — when Yin (the moistening force) is low, your body prioritizes essential organs. Skin and eyes get what's left, which isn't much.", "皮膚和眼睛乾澀 — 當陰（潤澤力量）不足，身體會優先供應重要器官。皮膚和眼睛只能用剩下的，沒多少。", "乾燥肌とドライアイ — 陰（潤す力）が不足すると、体は重要器官を優先します。肌と目には残りが行き、それは多くありません。"), href: "/wellness/chinese-medicine-body-types" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">→</span>
              <Link href={item.href} className="leading-relaxed hover:text-accent transition-colors no-underline text-text2">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. Night sweats can also be caused by menopause, infections (including tuberculosis), thyroid disorders, or certain medications. If night sweats are drenching, persistent, or accompanied by fever or weight loss, consult a doctor immediately.",
            "此資訊僅供養生與自我覺察，非醫療診斷。夜間盜汗也可能是更年期、感染（包含結核病）、甲狀腺疾病或某些藥物引起的。如果盜汗嚴重浸濕衣物、持續不止，或伴隨發燒或體重減輕，請立即看醫生。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。寝汗は更年期、感染症（結核を含む）、甲状腺障害、特定の薬剤が原因の場合もあります。寝汗がひどく持続する、発熱や体重減少を伴う場合は、直ちに医師にご相談ください。"
          )}
        </p>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["night-sweats-chinese-medicine"]} />

      <section className="text-center py-10 border-t border-border">
        <p className="text-text mb-2 font-medium">{l("Night sweats are one of the key signs of the Yin Deficient body type.", "夜間盜汗是陰虛體質的關鍵信號之一。", "寝汗は陰虚タイプの主要なサインです。")}</p>
        <p className="text-text2 text-sm mb-6">{l("There are 9 body types in Chinese medicine. Take the free 5-minute quiz to discover yours.", "中醫有9種體質。花5分鐘做免費測驗，發現你的體質。", "中医学には9つの体質があります。無料の5分クイズであなたのタイプを発見。")}</p>
        <Link href="/quiz" className="inline-block px-10 py-3.5 rounded-full font-medium text-bg hover:opacity-90 transition text-lg bg-gradient-to-r from-accent to-accent2">
          {l("Take the Free Quiz →", "免費測驗 →", "無料クイズ →")}
        </Link>
      </section>
    </main>
  )
}
