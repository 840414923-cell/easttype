"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"

export default function AnxiousArticle() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const slug = "why-do-i-feel-anxious"

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/symptoms" className="hover:text-accent transition-colors no-underline text-text2/60">{l("Symptoms", "症狀", "症状")}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{l("Anxiety", "焦慮", "不安")}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {l("Why Do I Feel Anxious? What Your Body Is Trying to Tell You", "為什麼我總是焦慮？你的身體在告訴你什麼", "なぜ不安を感じる？体が伝えようとしていること")}
      </h1>
      <p className="text-text2 text-sm mb-10">{l("7 min read · Based on 3,000 years of Eastern body wisdom", "閱讀約7分鐘 · 基於3000年東方身體智慧", "約7分 · 3,000年の東洋の体の知恵に基づく")}</p>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "You're anxious. You know that much. But when you try to pin down why, there's nothing obvious. Your job is fine. Your relationships are fine. Your doctor ran the tests and said you're perfectly healthy. You even tried therapy, and sure, it helped a bit. But that underlying hum of unease keeps coming back, like a song stuck in your head that you can't quite name.",
            "你很焦慮。這你知道。但當你試著找出原因時，沒有什麼明顯的。工作還好。關係還好。醫生做了檢查說你很健康。你甚至試過心理治療，當然有點幫助。但那種潛在的不安感一直回來，像一首卡在腦海裡說不出名字的歌。",
            "不安です。それは分かっています。でも理由を絞り込もうとすると、何も明確なものがない。仕事は問題ない。人間関係も問題ない。医師は検査をして健康だと言った。セラピーも試したし、確かに少しは助けになった。でもその根本的な不安感が戻ってくる。名前のつけられない歌が頭の中で流れ続けるように。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "It's frustrating because you feel like you should be able to fix it. Everything is fine, right? So why does your chest feel tight? Why does your mind race at the worst moments? Why can't you just relax?",
            "這很令人沮喪，因為你覺得你應該能修好它。一切都很好不是嗎？那為什麼胸口悶悶的？為什麼思緒在最糟的時刻奔馳？為什麼就是放鬆不了？",
            "イライラしますよね。直せるはずだと思う。全て問題ないはずなのに。じゃあなぜ胸が苦しい？なぜ最悪のタイミングで頭がぐるぐるする？なぜリラックスできない？"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "What if the anxiety isn't just in your head? Traditional Chinese Medicine has a completely different way of looking at this. It doesn't see anxiety as a brain malfunction. It sees it as energy that's gotten stuck somewhere in your body, trying to move but unable to. And once you understand that frame, a lot of things start clicking into place.",
            "如果焦慮不只是你的心理問題呢？傳統中醫有一個完全不同的看法。它不把焦慮看作大腦故障。它把它看作身體某處卡住的能量，想動卻動不了。一旦你理解這個框架，很多事就開始說得通了。",
            "もし不安が頭の中だけの問題じゃなかったら？伝統的な中医学には全く違う見方があります。不安を脳の故障とは見なしません。体のどこかで引っかかったエネルギーとして見ます。動こうとして動けない。この枠組みを理解すると、多くのことが繋がり始めます。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("What's Really Going On", "到底發生了什麼事", "本当に何が起きているのか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "In Chinese medicine, one of the most common patterns behind unexplained anxiety is something called Qi Stagnation. Qi is your body's basic life energy, the stuff that makes everything run. Normally it flows smoothly through your body along pathways called meridians. But sometimes it gets blocked.",
            "在中醫裡，無法解釋的焦慮背後最常見的模式之一叫氣滯。氣是你身體的基本生命能量，讓一切運行的東西。正常情況下它沿著經絡順暢流動。但有時它會被堵住。",
            "中医学では、説明のつかない不安の背後にある最も一般的なパターンの一つに気滞というものがあります。気は体の基本的生命エネルギーで、全てを動かすもの。通常は経絡と呼ばれる経路に沿って滑らかに流れます。でも時々詰まります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Think of it like a traffic jam inside your body. The fuel is there. The cars are running. But the road is blocked, so everything backs up. That's different from Qi Deficiency, where there isn't enough fuel in the first place. With Qi Stagnation, you actually have the energy. It just can't go anywhere.",
            "把它想成你體內的堵車。燃料在那裡。車子在跑。但路堵了，所以一切塞住。這跟氣虛不同，氣虛是根本不夠燃料。氣滯其實你有能量，它只是去不了任何地方。",
            "体の中の渋滞と考えてください。燃料はある。車は動いている。でも道が塞がれているから全てバックアップする。それは気虚とは違います。気虚は燃料が足りない。気滞の場合、エネルギーは実際にある。ただどこにも行けない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "When energy builds up without an outlet, it creates internal pressure. That pressure shows up as chest tightness, a racing mind, irritability, and that general sense that something is off even though you can't name it. It's not that you're broken. It's that your body's energy system is congested.",
            "當能量累積找不到出口時，它製造內部壓力。那壓力表現為胸悶、思緒奔馳、煩躁，和那種說不上來的哪裡不對勁的感覺。不是你壞掉了。是你身體的能量系統塞住了。",
            "エネルギーが出口なく蓄積すると、内部圧力が生まれます。その圧力は胸の苦しさ、頭の回転、イライラ、名前のつけられない違和感として現れます。壊れているわけではありません。体のエネルギーシステムが詰まっているだけ。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Which Body Types Are Most Affected", "哪些體質最常受影響", "どの体質が最も影響を受けるか")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "The Qi Stagnant type (气郁质) makes up roughly 8% of the population. If you're this type, things tend to feel stuck. Your chest tightens when you're stressed. You sigh without meaning to. Your mood can swing from fine to irritated in a matter of minutes. Your mind races with plans and worries while your body feels like it's standing still, unable to act on any of it.",
            "氣鬱體質（气郁质）大約佔人口的8%。如果你是這種體質，事情容易覺得卡卡的。壓力大時胸口發緊。你不自覺地嘆氣。情緒幾分鐘內就能從好好的變得很煩。腦袋裡計畫和擔憂轉個不停，身體卻像靜止不動，什麼都做不了。",
            "気鬱タイプ（気鬱質）は人口の約8%を占めます。このタイプの場合、物事が詰まっている感じがします。ストレスを感じると胸が苦しくなる。無意識にため息をつく。気分が数分で平気からイライラに変わる。頭の中は計画と心配で回っているのに、体は立ち止まったままで何もできない。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "This type is especially prone to anxiety because the stuck energy has nowhere to go but inward. The frustration builds, the chest tightens, the thoughts loop. It's a pattern that feeds on itself. And it can be made worse by suppressing emotions, sitting too much, or eating foods that further clog the system.",
            "這種體質特別容易焦慮，因為卡住的能量無處可去只能往內。挫折感累積、胸口變緊、思緒循環。這是一個自我餵養的模式。而壓抑情緒、久坐、或吃進一步堵塞系統的食物，會讓情況更糟。",
            "このタイプは特に不安になりやすい。停滞したエネルギーが行き場なく内側に向かうから。不満が蓄積し、胸が苦しくなり、思考がループする。それは自分自身を増幅するパターン。感情を抑え込む、座りすぎる、システムをさらに詰まらせる食べ物は状況を悪化させる可能性があります。"
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/types/qi_stagnant" className="text-sm text-accent no-underline hover:underline">
            {l("Qi Stagnant Type →", "氣鬱體質 →", "気鬱タイプ →")}
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Simple Changes That May Help", "可能有幫助的簡單改變", "助けになるかもしれない簡単な変化")}
        </h2>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "What you drink matters. Rose tea is one of the oldest recommendations in Chinese medicine for moving stuck energy. It has a gentle, upward quality that helps ease emotional tension. Citrus teas, especially those made from dried tangerine peel (chenpi), can also help get things flowing again. Chamomile, peppermint, and chrysanthemum tea are all reasonable choices for calming the mind and encouraging smooth energy flow.",
            "你喝什麼很重要。玫瑰花茶是中醫裡疏通卡住能量最古老的建議之一。它有一種溫和向上的特質，能幫助舒緩情緒緊繃。柑橘類茶，尤其是陳皮做的，也能幫助讓東西重新流動。洋甘菊、薄荷和菊花茶都是安定心神、促進能量順暢流動的合理選擇。",
            "何を飲むかは重要です。ローズティーは停滞した気を動かすための中医学で最も古いおすすめの一つ。穏やかで上向きの性質があり、感情的緊張を和らげます。柑橘系の茶、特に乾燥したみかんの皮（陳皮）で作ったものも、流れを取り戻す助けになります。カモミール、ペパーミント、菊茶はいずれも心を静め、エネルギーの流れを促す合理的な選択です。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Some things are worth cutting back on. Excessive caffeine can amplify the internal pressure that Qi Stagnation already creates. Alcohol might feel like it takes the edge off, but it actually adds heat and dampness to the system, which can make the stagnation worse over time. Very spicy foods can have a similar effect, pushing energy upward and outward in a way that doesn't help the underlying blockage.",
            "有些東西值得減量。過量咖啡因會放大氣滯已經製造的內部壓力。酒精可能覺得能緩和，但它其實給系統加入熱和濕，長期可能讓鬱結更嚴重。非常辛辣的食物也有類似效果，把能量往上往外推，對底下的堵塞沒有幫助。",
            "減らした方がいいものもあります。過剰なカフェインは気滞がすでに作っている内部圧力を増幅する可能性があります。アルコールは気を紛らわせるように感じるかもしれませんが、実際はシステムに熱と湿り気を加え、長期的には停滞を悪化させる可能性があります。非常に辛い食べ物も同様の効果があり、根本の詰まりに役立たない方法でエネルギーを上や外に押しやります。"
          )}
        </p>
        <p className="text-text2 leading-relaxed mb-3">
          {l(
            "Gentle movement can make a real difference. You don't need intense workouts. Walking, stretching, or even just standing up and moving around when you feel tension building can help get that stuck energy moving. The key is consistency over intensity. A 20-minute walk most days may do more for this pattern than an exhausting gym session once a week.",
            "溫和的運動可能真的有差。你不需要激烈的運動。散步、伸展，或甚至只是感覺緊繃時站起來走動，都能幫助卡住的能量動起來。關鍵是持續而非激烈。大部分日子散步20分鐘可能比一週一次讓人累垮的健身房更有用。",
            "穏やかな運動は本当に違いを生む可能性があります。激しい運動は必要ありません。散歩、ストレッチ、または緊張を感じた時に立ち上がって動き回るだけでも、停滞したエネルギーを動かす助けになります。ポイントは激しさより一貫性。週1の疲れるジムより、ほぼ毎日の20分の散歩の方がこのパターンに効果的かもしれません。"
          )}
        </p>
        <p className="text-text2 leading-relaxed">
          {l(
            "And perhaps the most important one: find ways to express what you're feeling. Qi Stagnation feeds on suppression. Bottling things up is like putting a lid on a pot that's already boiling. It doesn't stop the boil. It just pressurizes it. Talk to someone. Write it down. Sing loudly in the car. Whatever gets it out of your body and into the world.",
            "也許最重要的是：找到方式表達你的感受。氣滯靠壓抑壯大。把東西憋住就像在已經沸騰的鍋上蓋蓋子。它不會停止沸騰，只會加壓。找人說。寫下來。在車裡大聲唱歌。任何能把東西從你身體裡釋放到世界裡的方法。",
            "そしておそらく最も重要なこと：感じていることを表現する方法を見つけてください。気滞は抑圧によって増幅します。感情を溜め込むのは、すでに沸騰している鍋に蓋をするようなもの。沸騰は止まらない。ただ圧力が上がるだけ。誰かに話す。書き出す。車の中で大声で歌う。体の中から世界に出すものなら何でも。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("When to See a Doctor", "何時該看醫生", "医師に相談するタイミング")}
        </h2>
        <p className="text-text2 leading-relaxed">
          {l(
            "This article is for informational purposes only and is not medical advice. If your anxiety is severe, interfering with your daily life, or accompanied by panic attacks, chest pain, or other concerning symptoms, please see a healthcare professional. There is no shame in getting help, and sometimes anxiety is connected to conditions that need proper medical attention, such as thyroid issues, vitamin deficiencies, or hormonal imbalances.",
            "本文僅供參考，不構成醫療建議。如果你的焦慮嚴重、干擾日常生活、或伴隨恐慌發作、胸痛或其他令人擔心的症狀，請看醫療專業人員。求助沒有什麼好羞恥的，有時焦慮跟需要適當醫療關注的狀況有關，例如甲狀腺問題、維生素缺乏或荷爾蒙失調。",
            "この記事は情報提供のみを目的としており、医療アドバイスではありません。不安が激しい、日常生活に支障がある、またはパニック発作、胸の痛み、その他の気になる症状を伴う場合は、医療専門家に相談してください。助けを求めることは恥ではなく、不安は甲状腺の問題、ビタミン欠乏、ホルモンバランスの乱れなど、適切な医療が必要な状態と関連していることもあります。"
          )}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {l("Related Symptoms", "相關症狀", "関連する症状")}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/symptoms/why-do-i-wake-up-at-3am" className="text-sm text-accent no-underline hover:underline">
            {l("Why Do I Wake Up at 3 AM?", "為什麼凌晨3點會醒？", "なぜ午前3時に目が覚める？")}
          </Link>
          <span className="text-text2/40">·</span>
          <span className="text-xs text-text2/50">{l("(3 AM wakeups are linked to Liver Qi Stagnation)", "（凌晨3點醒來與肝氣鬱結有關）", "（午前3時覚醒は肝気鬱結と関連）")}</span>
        </div>
      </section>

      <FaqSection faqs={SYMPTOM_FAQS[slug]} />
      <SymptomCta />
    </main>
  )
}
