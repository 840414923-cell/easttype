"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function WhyWakeAt3AmArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "why-do-i-wake-up-at-3am"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Waking at 3 AM", "凌晨3點醒", "午前3時に起きる")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Why Do I Wake Up at 3 AM? Your Liver Has Something to Say", "為什麼凌晨3點會醒？你的肝有事要說", "なぜ午前3時に目が覚める？肝が伝えたいこと")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("8 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約8分鐘 · 基於3000年東方身體智慧", "約8分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "If you're one of those people who checks the clock at 3 AM and thinks \"great, this again,\" you're definitely not alone. This is weirdly specific and weirdly common. You fall asleep fine. You sleep well for a few hours. Then boom, wide awake at 2:45 or 3:15, staring at the ceiling, mind racing about everything from work deadlines to that embarrassing thing you said in 2016.",
            "如果你是那種凌晨3點看時鐘然後想「又來了」的人，你絕對不是一個人。這奇怪地特定又奇怪地普遍。你入睡沒問題。前幾個小時睡得很好。然後砰，2:45或3:15完全清醒，盯著天花板，腦袋從工作截止日期跑到2016年你說的那句尷尬話。",
            "午前3時に時計を見て「またか」と思う人、あなただけではありません。これは奇妙に具体的で、奇妙に一般的。すんなり眠れる。最初の数時間はよく眠れる。そしてドカン、2:45か3:15に完全に目が覚め、天井を見つめ、仕事の締め切りから2016に言った恥ずかしいことまで全てについて頭が回る。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "I used to blame stress, or caffeine, or \"just one of those things.\" But when it happens consistently at the same time window, night after night, it's not random. Chinese medicine has a surprisingly specific explanation for this, and it involves something called the body clock.",
            "我以前怪壓力、或咖啡因、或「就是這樣」。但當它夜復一夜在同一個時間段發生，那就不是隨機的。中醫對此有一個出人意料地具體的解釋，涉及到一種叫生理時鐘的東西。",
            "私は以前、ストレスやカフェインや「そういうもの」のせいにしていました。でも毎晩同じ時間帯に続けて起きるなら、それはランダムではありません。中医学には驚くほど具体的な説明があり、体時計と呼ばれるものが関係しています。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Before we get into it: yes, waking at 3 AM can sometimes be related to blood sugar drops, sleep apnea, or other medical issues. If this is new, severe, or affecting your daily life, definitely check with your doctor first. But if you've been checked out and everything is \"normal,\" keep reading. Eastern body wisdom has a genuinely interesting angle on this.",
            "在深入之前：對，凌晨3點醒來有時可能跟血糖下降、睡眠呼吸中止或其他醫療問題有關。如果這是新的、嚴重的或影響你日常生活的，一定要先看醫生。但如果你檢查過了都是「正常」的，繼續讀。東方身體智慧對此有一個真正有趣的角度。",
            "詳しく話す前に：はい、午前3時に起きるのは時に血糖値の低下、睡眠時無呼吸、他の医療問題に関連することがあります。これが新しい、激しい、または日常生活に影響するなら、まず医師に相談してください。でも検査を受けて「正常」なら、読み続けてください。東洋の体の知恵には本当に面白い視角があります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What's Causing the 3 AM Wake-Up Call", "凌晨3點醒來的原因", "午前3時に起こす原因")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The obvious culprits are stress, anxiety, late-night eating, too much screen time before bed, and that after-dinner espresso you knew you'd regret. All of these are real factors. But when the wake-up time is consistent, it's worth looking at something most people have never heard of: the TCM body clock.",
            "明顯的嫌疑犯是壓力、焦慮、深夜進食、睡前太多螢幕時間，和那杯你知道會後悔的晚餐濃縮咖啡。這些都是真正的因素。但當醒來的時間很一致時，值得看看大多數人從沒聽過的東西：中醫生理時鐘。",
            "明らかな原因はストレス、不安、夜遅い食事、寝る前のスクリーン時間、そして後悔すると分かっていた夕食後のエスプレッソ。これら全てが実際の要因です。しかし起きる時間が一定している場合、ほとんどの人が聞いたことのないものを見る価値があります：TCM体時計です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Blood sugar is another common factor. Your blood sugar naturally dips in the middle of the night, and if it drops too low, your body releases cortisol and adrenaline to compensate, which wakes you up. This is especially common if you eat dinner early or have a high-sugar dinner. A small protein-rich snack before bed might help stabilize things.",
            "血糖是另一個常見因素。你的血糖在半夜自然下降，如果降得太低，身體會釋放皮質醇和腎上腺素來補償，這會把你弄醒。如果你晚餐吃得很早或高糖晚餐，這尤其常見。睡前一點富含蛋白質的小點心可能有助於穩定。",
            "血糖ももう一つの一般的な要因です。血糖は夜中に自然に下がり、下がりすぎると体がコルチゾールとアドレナリンを放出して補償し、目を覚まさせます。夕食が早い、または高糖質の夕食の場合に特に一般的です。寝る前の少量のタンパク質豊富なスナックが安定させるかもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Hormonal shifts during perimenopause and menopause are also a major reason for middle-of-night waking. If you're in that life stage, the 3 AM wake-up might be part of a broader hormonal picture. That said, the TCM perspective below applies regardless of the initial trigger, because it focuses on what your body is doing with that energy once it wakes up.",
            "更年期前後的荷爾蒙變化也是半夜醒來的一大原因。如果你在那個人生階段，凌晨3點醒來可能是更廣泛荷爾蒙圖景的一部分。話雖如此，下面的中醫視角無論初始觸發因素是什麼都適用，因為它關注的是你的身體醒來後如何處理那個能量。",
            "更年期前後のホルモンの変化も夜中に目が覚める大きな理由です。その人生の段階にいれば、午前3時の覚醒はより広いホルモンの状態の一部かもしれません。とはいえ、以下の中医学の観点は最初の引き金が何であれ適用されます。体が目覚めた後、そのエネルギーで何をしているかに焦点を当てるからです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("The TCM Body Clock: Why 3 AM Specifically", "中醫生理時鐘：為什麼偏偏是凌晨3點", "TCM体時計：なぜ午前3時なのか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Here's where it gets interesting. Chinese medicine maps the body's energy meridians to a 24-hour clock. Each 2-hour block is associated with a specific organ system. The Liver meridian gets the 1 AM to 3 AM slot. During this time, Liver energy is supposed to be doing its maintenance work: processing emotions, regulating blood flow, and planning for the next day.",
            "有趣的地方來了。中醫把身體的經絡能量對應到24小時時鐘。每2小時對應一個特定的器官系統。肝經拿到凌晨1點到3點這個時段。在這段時間，肝的能量應該在做維護工作：處理情緒、調節血流、為隔天做準備。",
            "ここから面白くなります。中医学は体のエネルギー経絡を24時間時計にマッピングします。各2時間ブロックは特定の臓器システムに関連します。肝経は午前1時〜3時のスロットです。この時間、肝のエネルギーは保守作業を行うべき：感情の処理、血流の調整、翌日の準備。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "When everything is balanced, you sleep right through it. But two things can disturb this peaceful process. First is Liver Qi Stagnation (肝气郁结). If you've been stressed, frustrated, irritable, or holding in emotions, your Liver Qi gets stuck instead of flowing. During its peak hours, that stuck energy creates a kind of internal commotion that wakes you up. It's like a traffic jam at rush hour. The Liver is trying to do its job, but nothing is moving.",
            "一切平衡時，你會睡過去。但有兩件事會干擾這個和平過程。第一是肝氣鬱結。如果你一直有壓力、挫折、煩躁或壓抑情緒，你的肝氣卡住不流動。在它的尖峰時段，那股卡住的能量製造一種內部騷動把你弄醒。就像高峰時段的堵車。肝在試著做它的工作，但什麼都不動。",
            "全てがバランスしていれば、そのまま眠れます。しかし2つのことがこの平穏な過程を妨げる可能性があります。1つ目は肝気鬱結。ストレス、不満、イライラ、感情を抑え込んでいると、肝気が流れる代わりに停滞します。ピーク時間帯にその停滞した気が一種の内部騒ぎを作り、目を覚まさせます。ラッシュアワーの渋滞のようなもの。肝は仕事をしようとしているが、何も動いていない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The second is Liver Yin Deficiency (肝阴虚). Yin is the cooling, calming, resting part of your energy. When Liver Yin is low, there's not enough cooling force to keep the Liver quiet during its active period. It's like a fan that's supposed to keep a room comfortable, but the fan is broken, so the room gets hot and restless. This pattern is often linked to staying up late regularly, eating spicy or greasy food frequently, or long periods of mental overwork.",
            "第二是肝陰虛。陰是你能量中冷靜、安靜、休息的部分。肝陰不足時，沒有足夠的冷卻力量讓肝在活躍期保持安靜。就像一個應該讓房間舒適的風扇，但風扇壞了，房間變得又熱又不安寧。這個模式通常跟經常晚睡、頻繁吃辛辣油膩食物、或長期腦力過勞有關。",
            "2つ目は肝陰虚です。陰はエネルギーの冷却、鎮静、休息の部分。肝陰が不足すると、活発な時間帯に肝を静かに保つ冷却力が足りません。部屋を快適に保つべき扇風機が壊れて、部屋が暑く落ち着かなくなるようなもの。このパターンは常に遅くまで起きている、辛く脂っこい食事、長期的な頭脳過労と関連することが多いです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "Either way, the result is the same: your Liver meridian gets noisy at its designated time, and you wake up. The specific time is actually a gift because it tells you exactly which system is out of balance. It's your body's way of leaving a very precise sticky note on your forehead.",
            "無論哪種，結果都一樣：你的肝經在指定時間吵鬧，然後你就醒了。這個特定時間其實是個禮物，因為它告訴你哪個系統失衡了。這是你身體在你額頭上貼了一張非常精確的便利貼。",
            "どちらにせよ結果は同じ：肝経が指定された時間にうるさくなり、目が覚めます。この特定の時間は実際に贈り物です。どのシステムが不均衡か正確に教えてくれます。体があなたの額にとても正確な付箋を貼ったようなものです。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Which Body Types Are Most Prone to 3 AM Wake-Ups", "哪些體質最容易凌晨3點醒", "どの体質が午前3時覚醒になりやすいか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Two body types are most associated with this specific pattern.",
            "兩種體質跟這個特定模式最相關。",
            "2つの体質がこの特定のパターンと最も関連しています。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Yin Deficient type (阴虚质) runs hot and dry. These people often feel warm at night, experience night sweats, and have a restless mind that won't shut off. Their cooling system is under-resourced, so when the body's internal clock activates a meridian, there's not enough Yin to keep things calm. Waking between 1 and 3 AM is a classic sign of this pattern.",
            "陰虛體質（阴虚质）又熱又乾。這些人常覺得夜裡溫暖、盜汗、思緒不安靜停不下來。他們的冷卻系統資源不足，所以當體內時鐘激活一條經絡時，沒有足夠的陰來保持平靜。凌晨1到3點之間醒來是這個模式的經典跡象。",
            "陰虚タイプ（陰虚質）は熱く乾燥しています。この人たちは夜に温かさを感じ、寝汗をかき、頭が止まらない。冷却システムのリソースが不足し、体内時計が経絡を活性化する時、物事を静かに保つ陰が足りません。午前1時〜3時の間に目覚めるのはこのパターンの典型的なサインです。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Qi Stagnant type (气郁质) carries tension and frustration. Things don't flow smoothly for them, whether it's emotions, digestion, or energy. They tend to sigh a lot, feel stuck in life, and have mood swings. When stress builds up, the Liver meridian takes the hit, and 3 AM becomes their recurring appointment with the ceiling.",
            "氣鬱體質（气郁质）帶著緊繃和挫折感。他們的東西不順暢流動，不管是情緒、消化還是能量。他們常嘆氣、覺得人生卡住、情緒波動。當壓力累積時，肝經首當其衝，凌晨3點成了他們跟天花板的固定約會。",
            "気鬱タイプ（気鬱質）は緊張と不満を抱えています。感情も消化もエネルギーも滑らかに流れない。ため息が多く、人生が詰まっている感じ、気分の波があります。ストレスが蓄積すると肝経が打撃を受け、午前3時が天井との定期的な約束になります。"
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/yin_deficient" className="text-sm text-accent no-underline hover:underline">
            {l("Yin Deficient Type →", "陰虛體質 →", "陰虚タイプ →")}
          </Link>
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            {l("Qi Stagnant Type →", "氣鬱體質 →", "気鬱タイプ →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Practical Steps to Sleep Through the Night", "一覺到天亮的實用步驟", "朝まで眠るための実践ステップ")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "First, look at your evenings. Heavy meals, alcohol, and intense arguments close to bedtime are all fuel for Liver Qi Stagnation. Try to eat dinner at least 3 hours before bed and keep it relatively light. Save the big steak and wine for lunch, not dinner. Your Liver will thank you.",
            "首先，看看你的晚上。太接近睡覺的重餐、酒精和激烈爭吵都是肝氣鬱結的燃料。試著晚餐至少在睡前3小時吃完，保持相對清淡。大牛排和紅酒留到午餐，不是晚餐。你的肝會感謝你。",
            "まず夜の過ごし方を見てください。寝る前の重い食事、アルコール、激しい言い争いは肝気鬱結の燃料です。夕食は寝る3時間以上前に済ませ、比較的軽くしましょう。大きなステーキとワインは夕食でなくランチに。肝が感謝するでしょう。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Try a cup of chrysanthemum tea or rose tea after dinner. Both are traditional choices for supporting Liver Qi flow. Chrysanthemum clears heat and calms the mind. Rose moves stuck energy and smooths emotions. Neither contains caffeine, so they won't keep you up. Sip slowly and let the process itself be a small wind-down ritual.",
            "試試飯後一杯菊花茶或玫瑰花茶。兩者都是支持肝氣流通的傳統選擇。菊花清熱安神。玫瑰疏通卡住的能量、舒緩情緒。兩者都不含咖啡因，不會讓你睡不著。慢慢啜飲，讓過程本身成為一個小小的放鬆儀式。",
            "夕食後に菊茶かローズティーを試してください。どちらも肝気の流れをサポートする伝統的な選択です。菊は熱を清し心を静めます。バラは停滞した気を動かし感情を和らげます。どちらもカフェインを含まないので眠れなくなることはありません。ゆっくり飲み、プロセス自体を小さなリラックス儀式にしましょう。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Get to bed before 11 PM. The Gallbladder meridian runs from 11 PM to 1 AM, and it works closely with the Liver. If you're still awake during this window, the Gallbladder can't do its job properly, which creates a knock-on effect for the Liver at 1 AM. Think of it as prep work: the Gallbladder clears the way so the Liver can work smoothly. If you're still scrolling your phone at midnight, the whole system gets backed up.",
            "11點前上床。膽經從晚上11點到凌晨1點運行，它跟肝密切合作。如果你在這個時段還醒著，膽無法好好做它的工作，這對凌晨1點的肝產生連鎖效應。把它想成準備工作：膽清出一條路讓肝能順暢工作。如果你午夜還在滑手機，整個系統就堵住了。",
            "午後11時前に寝てください。胆経は午後11時〜午前1時に稼働し、肝と密接に協力します。この時間帯にまだ起きていると、胆が適切に仕事ができず、午前1時の肝への連鎖効果が生まれます。準備作業と考えてください：胆が道を開いて肝がスムーズに動けるように。真夜中にまだスマホを見ていたら、システム全体が詰まります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "If you do wake up, don't look at your phone. The blue light tells your brain it's morning, and the content (even if it's \"relaxing\") stimulates your mind further. Instead, try slow belly breathing. Put one hand on your belly and feel it rise and fall. Count to 4 on the inhale, 6 on the exhale. This simple breathing pattern activates your parasympathetic nervous system and can help quiet the Liver's midnight commotion.",
            "如果你真的醒了，不要看手機。藍光告訴大腦是早上了，內容（即使「放鬆」的）也進一步刺激你的思緒。相反，試試慢速腹式呼吸。一手放在肚子上感受起伏。吸氣數到4，呼氣數到6。這個簡單的呼吸模式激活副交感神經系統，可以幫助安靜肝的半夜騷動。",
            "もし起きてしまったら、スマホを見ないでください。ブルーライトが脳に朝だと伝え、内容（「リラックス」するものでも）がさらに頭を刺激します。代わりにゆっくり腹式呼吸を試してください。片手をお腹に置き、膨らみと収縮を感じる。吸う時に4、吐く時に6数える。このシンプルな呼吸パターンは副交感神経を活性化し、肝の真夜中の騒ぎを鎮める助けになります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Pattern", "相關模式", "関連パターン")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/patterns/internal-heat" className="text-sm text-accent no-underline hover:underline">
            {l("Internal Heat Pattern →", "內熱體質 →", "内熱パターン →")}
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
