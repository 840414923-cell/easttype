"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import SymptomCta from "@/components/symptom-cta"

export default function WhyAlwaysTiredArticle() {
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
        <span className="text-text2">{l("Why Am I Always Tired?", "為什麼我總是累？", "なぜいつも疲れているのか？")}</span>
      </nav>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l(
          "Why Am I Always Tired? A Chinese Medicine Explanation",
          "為什麼我總是累？中醫的解釋",
          "なぜいつも疲れているのか？中医学の説明"
        )}
      </h1>
      <p className="text-text2 text-sm mb-10">
        {l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}
      </p>

      {/* TL;DR - for AI and scanners */}
      <section className="mb-10 bg-accent/8 border border-accent/20 rounded-xl p-5">
        <p className="text-text/90 leading-relaxed text-[0.95rem]">
          {l(
            "If you're always tired even after sleeping well, Chinese medicine says it's usually Qi Deficiency (气虚) — your body's fuel tank is running low. The fix isn't more sleep. It's eating warm, cooked, Qi-building foods (congee, jujube dates, ginger) and avoiding cold, raw foods that drain the energy you already don't have. About 15% of people have this pattern.",
            "睡飽了還是累的話，中醫通常說是氣虛 — 你身體的油箱快空了。解法不是睡更多，是吃溫熱的補氣食物（米粥、紅棗、薑），避開消耗你能量的生冷食物。大約15%的人有這種體質。",
            "よく寝ても疲れているなら、中医学では通常気虚 — 体のガソリンタンクが空に近いと考えます。解決策はもっと寝ることではなく、温かい気を補う食材（お粥、なつめ、しょうが）を食べ、すでに足りないエネルギーを奪う冷たい生食を避けることです。約15%の人がこのパターンです。"
          )}
        </p>
      </section>

      {/* Direct Answer */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The Short Answer", "簡短回答", "端的な答え")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Traditional Chinese Medicine (TCM), chronic fatigue that doesn't improve with sleep is usually caused by Qi Deficiency (气虚, pronounced \"chee-shoo\"). Qi is your body's vital energy — think of it as the fuel that powers every function. When Qi is low, everything still works, but everything costs more energy than it should.",
            "在中醫裡，睡不飽的慢性疲勞通常是由氣虛引起的。氣是你身體的生命能量 — 就像驅動每個功能的燃料。氣不足時，一切還能運作，但每件事都比別人多花力氣。",
            "伝統的な中国医学（TCM）では、睡眠で改善しない慢性疲労は通常、気虚（ききょ）が原因です。気とは体の生命エネルギー — 全ての機能を動かす燃料のようなもの。気が不足すると、全て機能するが、全てに人より多くのエネルギーを要します。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "This isn't the same as being tired from a bad night's sleep. That kind of tired fixes itself after a good rest. Qi Deficiency tired doesn't. You sleep 8 hours and wake up feeling like you barely slept at all. That's the key difference, and it's the one most doctors miss.",
            "這跟偶爾沒睡好不一樣。那種累，睡一覺就好。氣虛的累不是。你睡8小時醒來還是覺得沒睡飽。這是關鍵差別，也是多數醫生忽略的地方。",
            "これはたまに寝不足の疲れとは違います。その疲れはよく寝れば直ります。気虚の疲れは違う。8時間寝てもほとんど眠っていない気分。これが決定的な違いで、ほとんどの医師が見逃すところです。"
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
            "Imagine your body is a phone. Western medicine checks if the screen is broken. Chinese medicine checks the battery. Qi Deficiency means your battery is at 5% — the phone works, but everything is slow, the screen dims, and it shuts down unexpectedly.",
            "想像你的身體是手機。西醫檢查螢幕有沒有壞。中醫檢查電池。氣虛就是你的電池只剩5% — 手機還能用，但一切都很慢，螢幕變暗，還會突然關機。",
            "体をスマホだと想像してください。西洋医学は画面が壊れていないか確認します。中医学はバッテリーを確認します。気虚とはバッテリーが5% — スマホは機能するが、全てが遅く、画面が暗くなり、突然シャットダウンします。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Now here's the thing: you can't fix a 5% battery by leaving the phone on the charger for longer. The charger works fine — the battery itself has degraded. Chinese medicine's approach is to repair the battery, not just charge it longer. That's why sleeping more doesn't fix Qi Deficiency fatigue.",
            "但重點來了：你無法通過把手機充更久來修復5%的電池。充電器沒問題 — 是電池本身老化了。中醫的做法是修復電池，不是充更久。這就是為什麼睡更多無法解決氣虛的疲勞。",
            "ここがポイント：充電器に長くつないでも5%のバッテリーは直りません。充電器は正常 — バッテリー自体が劣化しているのです。中医学のアプローチはバッテリーを修復すること、長く充電することではありません。だからもっと寝ても気虚の疲労は治らないのです。"
          )}
        </p>
      </section>

      {/* Self-check */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2">
          {l("Signs of Qi Deficiency — Do You Recognize These?", "氣虛的跡象 — 你有這些嗎？", "気虚のサイン — これらに覚えがありますか？")}
        </h2>
        <p className="text-text2 text-sm mb-4">
          {l("Most people with this pattern recognize 3 or more:", "這種體質的人通常認同3項以上：", "この体質の人は通常3つ以上共感します：")}
        </p>
        <ul className="space-y-2">
          {[
            l("You're tired even after a full night's sleep", "睡滿了還是累", "十分眠ても疲れている"),
            l("You prefer sitting over standing whenever possible", "能坐就不站", "立てるなら座りたい"),
            l("Your voice is soft and you speak less than you think", "聲音輕柔，想的比說的多", "声が小さく、話すより考える方が多い"),
            l("You catch colds more easily than others", "比別人更容易感冒", "人より風邪をひきやすい"),
            l("You sweat easily, even with light activity", "稍微活動就出汗", "少し動くとすぐ汗をかく"),
            l("Your limbs feel heavy, like moving through water", "四肢沉重，像在水中移動", "手足が重く、水中を動いているよう"),
            l("You get full quickly when eating — small appetite", "吃一點就飽 — 胃口小", "少し食べるとすぐ満腹 — 食欲が少ない"),
            l("You feel like you've drafted your resignation by 10 AM every Monday", "每週一早上十點就在心裡寫辭職信", "毎週月曜10時には心の中で退職届を書いている"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-text2">
              <span className="text-accent/70 text-sm mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-text2/70 text-sm mt-4">
          {l(
            "If you checked 4 or more, there's a good chance Qi Deficiency is part of your pattern. Not sure? The free quiz at the end gives you a personalized reading across all 9 body types.",
            "如果你勾了4項以上，很可能是氣虛體質。不確定？文末的免費測驗會幫你分析9種體質。",
            "4つ以上当てはまれば、気虚の可能性が高いです。確かではない？最後の無料クイズで9つの体質をパーソナライズ分析できます。"
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
            "Western medicine typically runs blood tests. If your iron, thyroid, and B12 are normal, you're told 'you're fine' or diagnosed with chronic fatigue syndrome. But TCM looks at the pattern beneath the test results — your body's functional energy, not just its chemistry.",
            "西醫通常會做血液檢查。如果你的鐵、甲狀腺和B12都正常，醫生會說「你沒事」或診斷慢性疲勞。但中醫看的是檢測結果之下的模式 — 你身體的功能性能量，不只是化學指標。",
            "西洋医学は通常、血液検査を行います。鉄分、甲状腺、B12が正常なら「問題ない」と言われるか、慢性疲労症候群と診断されます。しかし中医学は検査結果の下にあるパターン — 体の機能的エネルギーを見ます。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Here's a way to think about it: if your car is running sluggishly, a mechanic checks the oil, fuel, and spark plugs. If all those test fine, they might say 'nothing's wrong.' But an experienced mechanic might ask: when did you last change the fuel filter? That's closer to what TCM does — it looks at the systems that keep everything running, not just the parts that show up on a diagnostic test.",
            "這樣想：如果你的車跑得慢，技師檢查機油、燃油和火星塞。如果都正常，他們可能說「沒問題」。但有經驗的技師會問：你上次換燃油濾芯是什麼時候？這更接近中醫做的事 — 它看維持一切運轉的系統，不只是診斷測試上出現的部件。",
            "こう考えましょう：車が遅いなら、整備士はオイル、燃料、スパークプラグを点検します。全て正常なら「問題ない」と言うかもしれません。しかし経験豊富な整備士は聞きます：燃料フィルターはいつ交換しましたか？これが中医学のすることに近い — 診断テストに出る部品だけでなく、全てを動かし続けるシステムを見るのです。"
          )}
        </p>
      </section>

      {/* Daily life impact */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What Qi Deficiency Actually Feels Like Day to Day", "氣虛在日常生活中到底是什麼感覺", "気虚の日常的な感覚")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "It's not just 'being tired.' It colors everything. You start avoiding social plans because the effort feels overwhelming. You choose the elevator over two flights of stairs — and feel a little embarrassed about it. You have ideas and ambitions, but your body won't cooperate. People who don't have this pattern sometimes assume you're lazy. You're not. Your battery is just smaller.",
            "不只是「累」。它影響一切。你開始避開社交計畫，因為那感覺太費力。你搭電梯不爬兩層樓梯 — 還有點不好意思。你有想法和抱負，但身體不配合。沒有這種體質的人有時以為你懶。你不是。你的電池就是比較小。",
            "単に「疲れている」わけではありません。全てに影響します。社交を避ける — 労力が圧倒的に感じるから。2階まで階段ではなくエレベーター — 少し恥ずかしい。アイデアも野心もあるが、体がついてこない。このパターンのない人は怠け者だと思うことも。違います。バッテリーが小さいだけです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Qi Deficiency also tends to creep up slowly. You don't wake up one day depleted. It builds over months or years — often starting after a prolonged period of stress, illness, or pushing too hard without recovering properly. Many people don't realize how low their Qi has gotten until they take a step back.",
            "氣虛通常是慢慢來的。你不是某天突然虛了。它是幾個月或幾年累積的 — 常常開始於長期壓力、生病或沒有好好恢復的過度消耗。很多人直到退一步看，才意識到自己的氣有多低。",
            "気虚はゆっくり進行します。ある日突然枯渇するわけではありません。数ヶ月から数年かけて蓄積 — 長期のストレス、病気、十分な回復なしの無理の後に始まることが多い。多くの人は一歩引いて初めて自分の気の低さに気づきます。"
          )}
        </p>
      </section>

      {/* Foods */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Foods That Help (and Harm) Qi Deficiency", "氣虛體質的食物：該吃與不該吃", "気虚を助ける（悪化させる）食材")}
        </h2>
        <p className="text-text2 leading-relaxed mb-4">
          {l(
            "In TCM, food is the primary medicine for Qi Deficiency. Not supplements, not stimulants — actual food, prepared the right way. The rule of thumb: warm, cooked, and easy to digest. Your body spends less energy processing these foods, which means more energy left for you.",
            "在中醫裡，食物是氣虛的主要藥物。不是保健品，不是興奮劑 — 是真正的食物，用對的方式準備。原則：溫的、煮熟的、好消化的。你的身體花較少能量處理這些食物，意味著更多能量留給你。",
            "TCMでは、食べ物が気虚の主要な薬です。サプリでも刺激物でもなく — 正しく調理された実際の食べ物。基本ルール：温かい、調理済み、消化しやすい。これらの食材の消化に少ないエネルギーで済み、その分あなたにエネルギーが残ります。"
          )}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cream/40 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">
              {l("✓ Nourishing Foods", "✓ 滋養食物", "✓ 滋養の食材")}
            </h3>
            <ul className="text-sm text-text2 space-y-1.5">
              {[
                l("Sweet potato", "地瓜", "さつまいも"),
                l("Rice porridge (congee)", "米粥", "お粥"),
                l("Ginger tea", "薑茶", "しょうが茶"),
                l("Chinese dates (jujube)", "紅棗", "なつめ"),
                l("Goji berries", "枸杞", "クコの実"),
                l("Chicken broth", "雞湯", "鶏スープ"),
                l("Millet porridge", "小米粥", "粟のお粥"),
                l("Shiitake mushrooms", "香菇", "しいたけ"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border/50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-text2/60 mb-2">
              {l("✗ Draining Foods", "✗ 消耗食物", "✗ エネルギーを奪う食材")}
            </h3>
            <ul className="text-sm text-text2/60 space-y-1.5">
              {[
                l("Raw salads (too cold)", "生沙拉（太寒）", "生野菜サラダ（冷たすぎ）"),
                l("Ice water", "冰水", "氷水"),
                l("Excessive caffeine", "過量咖啡因", "過度なカフェイン"),
                l("Cold smoothies", "冰沙", "冷たいスムージー"),
                l("Bitter melon", "苦瓜", "ゴーヤ"),
                l("Excessive raw foods", "過量生食", "過度な生食"),
              ].map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-text2/70 text-sm mt-4">
          {l(
            "Notice the pattern? Cold and raw foods are the enemy of Qi. Your body has to spend energy warming them up before it can even start digesting. For someone already low on Qi, that's energy you simply can't afford to waste.",
            "看到規律了嗎？寒涼和生食是氣的敵人。你的身體要先花能量把它們加熱，才能開始消化。對已經氣虛的人來說，那是你根本浪費不起的能量。",
            "パターンに気づきましたか？冷たいものと生食は気の敵です。体は消化を始める前に温めるエネルギーを使います。すでに気が不足している人には、浪費できないエネルギーです。"
          )}
        </p>
      </section>

      {/* Simple recipe */}
      <section className="mb-10 bg-cream/40 border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("A Simple Qi-Building Morning Routine", "簡單的補氣早晨例行", "簡単な気を補う朝のルーティン")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You don't need to overhaul your entire diet. Start with this: swap your morning iced coffee for a cup of warm ginger-jujube tea. Boil 3 slices of fresh ginger and 5 jujube dates in water for 10 minutes. Sip slowly. It takes 10 minutes to make, and most people with Qi Deficiency notice a difference within a week or two. Not cured — but noticeably less depleted.",
            "你不需要徹底改變飲食。從這個開始：把早上冰咖啡換成一杯溫熱的薑棗茶。3片新鮮生薑和5顆紅棗加水煮10分鐘。慢慢喝。10分鐘就能做好，大多數氣虛的人一兩週內就能感覺到差別。不是治好了 — 但明顯沒那麼虛了。",
            "食事全体を変える必要はありません。ここから始めましょう：朝のアイスコーヒーを温かいしょうが・なつめ茶に替える。新鮮なしょうが3枚となつめ5個を水で10分煮る。ゆっくり飲む。10分で作れ、ほとんどの気虚の人が1〜2週間で違いに気づきます。完治ではない — でも明らかに消耗感が減ります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Then, if you can, add a small bowl of congee (rice porridge) for breakfast instead of dry toast or cereal. Congee is the #1 recovery food in Chinese households for a reason — it takes almost no energy to digest, and it delivers steady, slow-releasing nourishment. Think of it as slow-charging your battery instead of trying to quick-charge it.",
            "然後，如果可以，早餐加一小碗粥代替乾吐司或麥片。米粥是中國家庭第一恢復食物是有原因的 — 幾乎不需要消化能量，提供穩定、慢釋放的滋養。想像成慢充電池，不是快充。",
            "そして、できれば朝食の乾いたトーストやシリアルを小さなお粥に替えてみてください。お粥が中国家庭でNo.1の回復食なのには理由があります — ほぼ消化エネルギー不要で、安定したゆっくり放出される栄養を届けます。急速充電ではなくスロー充電のようなもの。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms & Patterns", "相關症狀與模式", "関連する症状とパターン")}
        </h2>
        <div className="space-y-3">
          <Link href="/symptoms/why-am-i-always-tired" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Always Tired", "總是疲勞", "いつも疲れている")}</h3>
            <p className="text-text2 text-sm">{l("Fatigue that doesn't improve with sleep is the core symptom of Qi Deficiency", "睡眠無法改善的疲勞是氣虛的核心症狀", "睡眠で改善しない疲労は気虚の中核症状")}</p>
          </Link>
          <Link href="/patterns/low-vitality" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{l("Low Vitality", "活力不足", "活力低下")}</h3>
            <p className="text-text2 text-sm">{l("Chronically low energy and weak stamina define this pattern", "長期能量低和體力差是這種模式的定義", "慢性的なエネルギー不足と弱いスタミナがこのパターンを定義する")}</p>
          </Link>
        </div>
      </section>

      {/* Related conditions - internal links */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Conditions You Might Also Notice", "你可能也注意到的相關狀況", "気づいているかもしれない関連する状態")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Qi Deficiency rarely travels alone. If you're always tired, you might also notice some of these patterns:",
            "氣虛很少單獨出現。如果你總是累，可能也會注意到這些模式：",
            "気虚は単独で現れることは稀です。いつも疲れているなら、これらのパターンにも気づくかもしれません："
          )}
        </p>
        <ul className="space-y-2">
          {[
            { text: l("Cold hands and feet — this is Qi Deficiency's cousin, Yang Deficiency. When Qi is low for long enough, the warming energy drops too.", "手腳冰冷 — 這是氣虛的表兄弟，陽虛。氣虛久了，溫暖能量也會跟著降。", "手足の冷え — これは気虚のいとこ、陽虚。気が長く不足すると、温めるエネルギーも下がります。"), href: "/wellness/cold-hands-and-feet" },
            { text: l("Night sweats or feeling hot at night — that's Yin Deficiency, where the cooling system is low. Some people have both Qi and Yin deficiency.", "夜間盜汗或覺得夜裡熱 — 那是陰虛，冷卻系統不足。有些人氣虛和陰虛同時存在。", "寝汗や夜のほてり — それは陰虚、冷却システムの不足。気虚と陰虚の両方を持つ人もいます。"), href: "/wellness/night-sweats-chinese-medicine" },
            { text: l("Bloating and heaviness after eating — that's Damp accumulation, which often develops when Qi is too low to process fluids properly.", "飯後腹脹沉重 — 那是濕氣積聚，氣太低無法正常處理體液時常會發展成這樣。", "食後の膨満感と重さ — それは湿気の蓄積、気が低すぎて体液を正しく処理できない時に発展します。"), href: "/wellness/bloating-chinese-medicine" },
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

      {/* When to see a doctor */}
      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
          {l("When to See a Doctor", "何時該看醫生", "医師に診てもらうべき時")}
        </h2>
        <p className="text-sm text-text2 leading-relaxed">
          {l(
            "This information is for wellness and self-awareness, not medical diagnosis. If your fatigue is severe, sudden, or accompanied by weight loss, fever, or night pain, please consult a licensed healthcare provider immediately. TCM constitution identification complements — but never replaces — professional medical evaluation.",
            "此資訊僅供養生與自我覺察，非醫療診斷。如果你的疲勞嚴重、突然發生，或伴隨體重減輕、發燒、夜間疼痛，請立即諮詢合格醫療專業人員。中醫體質辨識補充但不取代專業醫療評估。",
            "この情報はウェルネスと自己認識のためであり、医療診断ではありません。疲労が激しい、突然、体重減少、発熱、夜間の痛みを伴う場合は、直ちに医療専門家にご相談ください。中医学の体質識別は専門的医療評価を補完するもので、代替するものではありません。"
          )}
        </p>
      </section>

      {/* FAQ */}
      <FaqSection faqs={WELLNESS_FAQS["why-am-i-always-tired"]} />

      <SymptomCta />
    </main>
  )
}
