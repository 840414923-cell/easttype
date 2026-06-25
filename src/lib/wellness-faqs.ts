export interface FaqItem {
  q: { en: string; "zh-TW": string; ja: string }
  a: { en: string; "zh-TW": string; ja: string }
}

export const WELLNESS_FAQS: Record<string, FaqItem[]> = {
  "why-am-i-always-tired": [
    {
      q: { en: "Can Chinese medicine help with chronic fatigue?", "zh-TW": "中醫能幫助慢性疲勞嗎？", ja: "中医学は慢性疲労に効果がありますか？" },
      a: { en: "Yes. In TCM, chronic fatigue that doesn't improve with sleep is typically Qi Deficiency. Specific foods like congee, jujube dates, and ginger tea can help restore your body's vital energy over time.", "zh-TW": "可以。在中醫裡，睡不飽的慢性疲勞通常是氣虛。特定食物如米粥、紅棗和薑茶可以幫助恢復身體的生命能量。", ja: "はい。TCMでは、睡眠で改善しない慢性疲労は通常気虚です。お粥、なつめ、しょうが茶などの食材が体の生命エネルギーの回復を助けます。" },
    },
    {
      q: { en: "What foods should I eat if I'm always tired?", "zh-TW": "總是累該吃什麼？", ja: "いつも疲れている時、何を食べるべき？" },
      a: { en: "Qi-boosting foods include sweet potato, rice porridge (congee), Chinese dates (jujube), ginger tea, goji berries, and chicken broth. Avoid ice water, raw salads, and excessive caffeine which drain energy.", "zh-TW": "補氣食物包括地瓜、米粥、紅棗、薑茶、枸杞和雞湯。避免冰水、生沙拉和過量咖啡因，它們會消耗能量。", ja: "気を補う食材には、さつまいも、お粥、なつめ、しょうが茶、クコの実、鶏スープがあります。氷水、生野菜サラダ、過度なカフェインは避けてください。" },
    },
    {
      q: { en: "How is Chinese medicine different from Western medicine for fatigue?", "zh-TW": "中醫和西醫治療疲勞有什麼不同？", ja: "疲労に対する中医学と西洋医学の違いは？" },
      a: { en: "Western medicine runs blood tests and if results are normal, says you're fine. TCM looks at functional energy patterns — your body's Qi — and identifies why your energy is low even when lab results look normal.", "zh-TW": "西醫做血液檢查，結果正常就說你沒事。中醫看功能性能量模式 — 你的氣 — 找出為什麼能量低，即使檢查結果正常。", ja: "西洋医学は血液検査を行い、正常なら問題ないとします。中医学は機能的エネルギーパターン — 気 — を見て、検査結果が正常でもエネルギーが低い理由を特定します。" },
    },
    {
      q: { en: "What body type is associated with chronic fatigue?", "zh-TW": "慢性疲勞對應什麼體質？", ja: "慢性疲労はどの体質に関連していますか？" },
      a: { en: "Chronic fatigue is a key sign of the Qi Deficient body type (气虚质). About 15% of people share this type. Take our free 5-minute quiz to discover if this is your type.", "zh-TW": "慢性疲勞是氣虛體質（气虚质）的關鍵信號。約15%的人屬於此類。做我們的免費5分鐘測驗，確認你的體質。", ja: "慢性疲労は気虚タイプ（気虚質）の主要なサインです。約15%の人がこのタイプです。無料の5分クイズであなたの体質を確認してください。" },
    },
  ],
  "cold-hands-and-feet": [
    {
      q: { en: "Why are my hands and feet always cold?", "zh-TW": "為什麼手腳總是冰冷？", ja: "なぜ手足がいつも冷たいのか？" },
      a: { en: "In TCM, chronically cold extremities with normal blood work usually indicate Yang Deficiency — your inner furnace is underpowered. Your body prioritizes core warmth and cuts heat to your limbs.", "zh-TW": "在中醫裡，血液正常但手腳長期冰冷通常表示陽虛 — 你內在的火爐動力不足。身體優先保護核心器官，減少四肢供熱。", ja: "TCMでは、血液検査が正常なのに慢性的に手足が冷えるのは通常、陽虚のサインです。体は核心部の保温を優先し、四肢への熱供給を減らします。" },
    },
    {
      q: { en: "What foods warm your body according to Chinese medicine?", "zh-TW": "中醫說什麼食物能溫暖身體？", ja: "中医学で体を温める食材は？" },
      a: { en: "Warming foods include ginger, cinnamon, lamb, onion, leek, walnuts, and black pepper. Avoid ice water, raw vegetables, watermelon, and excessive fruit which cool the body further.", "zh-TW": "溫性食物包括薑、肉桂、羊肉、洋蔥、韭菜、核桃和黑胡椒。避免冰水、生蔬菜、西瓜和過量水果，它們會讓身體更冷。", ja: "温性食材にはしょうが、シナモン、羊肉、玉ねぎ、ニラ、クルミ、黒胡椒があります。氷水、生野菜、スイカ、過度な果物は体をさらに冷やすので避けてください。" },
    },
    {
      q: { en: "Is cold hands and feet a thyroid problem?", "zh-TW": "手腳冰冷是甲狀腺問題嗎？", ja: "手足の冷えは甲状腺の問題ですか？" },
      a: { en: "It can be. If your thyroid panel is abnormal, that's a medical issue to treat. But if your thyroid is normal and you're still always cold, TCM identifies this as Yang Deficiency — a functional energy pattern that blood tests can't detect.", "zh-TW": "有可能。如果甲狀腺指標異常，那是醫療問題。但如果甲狀腺正常而你還是怕冷，中醫認為這是陽虛 — 一種血液檢查測不到的功能性能量模式。", ja: "可能性があります。甲状腺の数値が異常なら医療的治療が必要です。しかし甲状腺が正常でも常に寒い場合、中医学はこれを陽虚と識別します — 血液検査では検出できない機能的エネルギーパターンです。" },
    },
  ],
  "chinese-medicine-body-types": [
    {
      q: { en: "What are the 9 body types in Chinese medicine?", "zh-TW": "中醫的9種體質是什麼？", ja: "中医学の9つの体質とは？" },
      a: { en: "The 9 types are: Balanced (平和), Qi Deficient (气虚), Yang Deficient (阳虚), Yin Deficient (阴虚), Phlegm Damp (痰湿), Damp Heat (湿热), Blood Stasis (血瘀), Qi Stagnant (气郁), and Sensitive (特禀). Each has distinct physical patterns and ideal foods.", "zh-TW": "9種體質是：平和、氣虛、陽虛、陰虛、痰濕、濕熱、血瘀、氣鬱、特稟。每種有獨特的身體模式和理想食物。", ja: "9つの体質は：平和、気虚、陽虚、陰虚、痰湿、湿熱、血瘀、気鬱、特稟です。それぞれに独自の身体パターンと理想的食材があります。" },
    },
    {
      q: { en: "How is Chinese medicine different from Ayurveda?", "zh-TW": "中醫和阿育吠陀有什麼不同？", ja: "中医学とアーユルヴェーダの違いは？" },
      a: { en: "Ayurveda groups people into 3 doshas (Vata, Pitta, Kapha). Chinese medicine identifies 9 body constitutions, giving more precise and personalized guidance for food, lifestyle, and seasonal adjustments.", "zh-TW": "阿育吠陀把人分成3種體質（Vata、Pitta、Kapha）。中醫分出9種體質，提供更精確和個人化的食物、生活和季節調整指導。", ja: "アーユルヴェーダは3つのドーシャ（ヴァータ、ピッタ、カパ）に分けます。中医学は9つの体質を識別し、より正確でパーソナライズされた指導を提供します。" },
    },
    {
      q: { en: "How do I find out my Chinese medicine body type?", "zh-TW": "如何知道我的中醫體質？", ja: "自分の中医学の体質を知るには？" },
      a: { en: "Take the EastType free 5-minute quiz. It asks 27 questions based on traditional TCM constitution indicators and calculates your primary and secondary body types with personalized food recommendations.", "zh-TW": "做 EastType 免費5分鐘測驗。它基於傳統中醫體質指標問27題，計算你的主要和次要體質，並提供個人化食物建議。", ja: "EastTypeの無料5分クイズを受けてください。伝統的なTCM体質指標に基づく27問で、主要・二次の体質を計算し、パーソナライズされた食材を提案します。" },
    },
  ],
  "night-sweats-chinese-medicine": [
    {
      q: { en: "What causes night sweats in Chinese medicine?", "zh-TW": "中醫認為夜間盜汗是什麼原因？", ja: "中医学で寝汗の原因は？" },
      a: { en: "TCM attributes night sweats (not from menopause or infection) to Yin Deficiency — your body's cooling, moistening force is low. Without enough Yin to balance internal heat, warmth builds up at night.", "zh-TW": "中醫認為夜間盜汗（非更年期或感染引起）是陰虛 — 你身體的降溫和潤澤力量不足。沒有足夠的陰來平衡內熱，夜間熱氣累積。", ja: "TCMでは、寝汗（更年期や感染以外）は陰虚が原因です。体の冷却・潤いの力が不足し、内熱とのバランスが取れず、夜間に熱がこもります。" },
    },
    {
      q: { en: "What foods help with night sweats?", "zh-TW": "什麼食物對夜間盜汗有幫助？", ja: "寝汗に効く食材は？" },
      a: { en: "Yin-nourishing foods include pear, lily bulb, black sesame, tofu, mung bean soup, and room-temperature honey water. Limit spicy food, alcohol, lamb, excessive coffee, and deep-fried food.", "zh-TW": "滋陰食物包括梨、百合、黑芝麻、豆腐、綠豆湯和常溫蜂蜜水。限制辛辣食物、酒精、羊肉、過量咖啡和油炸食物。", ja: "陰を養う食材には梨、ゆり根、黒ゴマ、豆腐、緑豆スープ、常温のはちみつ水があります。辛い食べ物、アルコール、羊肉、コーヒーの飲みすぎ、揚げ物を制限してください。" },
    },
    {
      q: { en: "When should I see a doctor for night sweats?", "zh-TW": "夜間盜汗何時該看醫生？", ja: "寝汗でいつ医師に診てもらうべき？" },
      a: { en: "See a doctor if night sweats are drenching, persistent, or accompanied by fever or weight loss. These can indicate infections, thyroid disorders, or other medical conditions requiring treatment.", "zh-TW": "如果盜汗嚴重浸濕衣物、持續不止，或伴隨發燒或體重減輕，請看醫生。這可能表示感染、甲狀腺疾病或其他需要治療的醫療狀況。", ja: "寝汗がひどく持続する、発熱や体重減少を伴う場合は医師にご相談ください。感染症、甲状腺障害などの治療が必要な疾患の可能性があります。" },
    },
  ],
  "chinese-medicine-foods-for-energy": [
    {
      q: { en: "What are the best Chinese medicine foods for energy?", "zh-TW": "中醫最好的補氣食物是什麼？", ja: "中医学で最も良いエネルギー食材は？" },
      a: { en: "Top Qi-boosting foods: sweet potato, congee (rice porridge), jujube dates, ginger, goji berries, chicken broth, shiitake mushrooms, Chinese yam, millet, and small amounts of beef.", "zh-TW": "最佳補氣食物：地瓜、米粥、紅棗、薑、枸杞、雞湯、香菇、山藥、小米和少量牛肉。", ja: "トップの気を補う食材：さつまいも、お粥、なつめ、しょうが、クコの実、鶏スープ、しいたけ、長芋、粟、少量の牛肉。" },
    },
    {
      q: { en: "Why does Chinese medicine say salad is bad for energy?", "zh-TW": "為什麼中醫說沙拉對能量不好？", ja: "なぜ中医学はサラダがエネルギーに悪いと言うのか？" },
      a: { en: "Raw foods require more digestive energy than cooked foods. If you're already low on Qi, your body wastes energy heating cold food to body temperature. Cooked, warm foods are easier to digest and preserve your energy.", "zh-TW": "生食比熟食需要更多消化能量。如果你已經氣虛，身體要花額外的能量把冷食加熱到體溫。煮熟的溫食更容易消化，保留你的能量。", ja: "生食は調理済み食材より多くの消化エネルギーを必要とします。すでに気が不足している場合、体は冷たい食べ物を体温まで温めるためにエネルギーを浪費します。温かい調理済み食材は消化しやすくエネルギーを節約します。" },
    },
    {
      q: { en: "Does caffeine give you energy in Chinese medicine?", "zh-TW": "中醫認為咖啡因能提供能量嗎？", ja: "中医学ではカフェインはエネルギーを与えますか？" },
      a: { en: "TCM views caffeine as borrowing energy from tomorrow to spend today. It doesn't create new Qi — it stimulants your existing reserves. Over time, excessive caffeine depletes your Qi further, making fatigue worse.", "zh-TW": "中醫認為咖啡因是借明天的能量花在今天。它不創造新氣，而是刺激你現有的儲備。長期過量咖啡因會進一步消耗你的氣，讓疲勞更嚴重。", ja: "中医学ではカフェインは明日のエネルギーを借りて今日使うと見なします。新しい気を作るのではなく、既存の蓄えを刺激します。長期的な過剰摂取は気をさらに消耗し、疲労を悪化させます。" },
    },
  ],
  "bloating-chinese-medicine": [
    {
      q: { en: "What causes bloating in Chinese medicine?", "zh-TW": "中醫認為腹脹是什麼原因？", ja: "中医学で膨満感の原因は？" },
      a: { en: "TCM attributes chronic bloating with heaviness to Damp accumulation — your body holds moisture like a sponge that can't wring out. The digestive system gets bogged down, making everything feel heavy and slow.", "zh-TW": "中醫認為伴隨沉重的慢性腹脹是濕氣積聚 — 身體像海綿吸水但擰不出來。消化系統被拖慢，一切都感覺又重又慢。", ja: "TCMでは、重さを伴う慢性の膨満感は湿気の蓄積が原因です。体はスポンジのように水分を抱え込み絞り出せません。消化システムが遅くなり、全てが重く遅く感じられます。" },
    },
    {
      q: { en: "What foods reduce bloating in Chinese medicine?", "zh-TW": "中醫什麼食物能消脹？", ja: "中医学で膨満感を減らす食材は？" },
      a: { en: "Damp-draining foods: adzuki bean, coix seed (Job's tears), winter melon, celery, moderate green tea, and ginger tea. Avoid dairy, cold drinks, sweets, fried food, excessive fruit, and beer.", "zh-TW": "祛濕食物：紅豆、薏仁、冬瓜、芹菜、適量綠茶和薑茶。避免乳製品、冷飲、甜食、油炸食物、過量水果和啤酒。", ja: "湿気を除く食材：小豆、ハトムギ、トウガン、セロリ、適量の緑茶、しょうが茶。乳製品、冷たい飲み物、甘いもの、揚げ物、過度な果物、ビールを避けてください。" },
    },
    {
      q: { en: "Is bloating always a damp problem in TCM?", "zh-TW": "腹脹在中醫裡都是濕的問題嗎？", ja: "膨満感はTCMで常に湿気の問題ですか？" },
      a: { en: "Not always. Bloating can also involve Qi Stagnation (energy not flowing) or Spleen Qi Deficiency (weak digestion). A TCM practitioner evaluates your full pattern to determine the root cause.", "zh-TW": "不一定。腹脹也可能涉及氣鬱（能量不流動）或脾氣虛（消化弱）。中醫師會評估你的完整模式來判斷根本原因。", ja: "常にではありません。膨満感には気鬱（エネルギーの停滞）や脾気虚（消化の弱さ）も関与します。中医師は全体のパターンを評価し根本原因を特定します。" },
    },
  ],
  "acne-chinese-medicine": [
    {
      q: { en: "Why do I keep getting acne according to Chinese medicine?", "zh-TW": "中醫認為為什麼一直長痘？", ja: "中医学ではなぜニキビが繰り返すのか？" },
      a: { en: "TCM sees persistent acne (especially jawline and back) as Damp Heat — sticky warmth trapped inside your body pushing out through skin. Creams only paint over the cracks; you need to clear internal heat and dampness.", "zh-TW": "中醫認為持續長痘（尤其下巴和背部）是濕熱 — 體內黏膩的熱氣從皮膚往外冒。藥膏只刷了表面，你需要清內熱和濕氣。", ja: "TCMでは持続的なニキビ（特に顎ラインと背中）を湿熱と見ます。体内に閉じ込められたネバネバした熱が皮膚を通じて外に押し出されています。クリームは表面を塗るだけ、内側の熱と湿気を清す必要があります。" },
    },
    {
      q: { en: "What foods help acne in Chinese medicine?", "zh-TW": "中醫什麼食物對痘痘有幫助？", ja: "中医学でニキビに効く食材は？" },
      a: { en: "Heat-clearing foods: mung beans, bitter melon, cucumber, green tea, lotus root, and watermelon. Avoid spicy food, fried food, alcohol, excessive red meat, chocolate, and excessive coffee.", "zh-TW": "清熱食物：綠豆、苦瓜、黃瓜、綠茶、蓮藕和西瓜。避免辛辣食物、油炸食物、酒精、過量紅肉、巧克力和過量咖啡。", ja: "熱を清す食材：緑豆、ゴーヤ、きゅうり、緑茶、レンコン、スイカ。辛い食べ物、揚げ物、アルコール、過度な赤身肉、チョコレート、コーヒーの飲みすぎを避けてください。" },
    },
    {
      q: { en: "Which Chinese medicine body type is prone to acne?", "zh-TW": "哪種中醫體質容易長痘？", ja: "どの中医学の体質がニキビが出やすい？" },
      a: { en: "The Damp Heat body type (湿热质) is most prone to acne. About 8% of people share this type. They feel hot and sticky, especially in warm weather, and experience skin reactions and irritability.", "zh-TW": "濕熱體質（湿热质）最容易長痘。約8%的人屬於此類。他們覺得又熱又黏，尤其是溫暖天氣，容易有皮膚反應和煩躁。", ja: "湿熱タイプ（湿熱質）が最もニキビが出やすいです。約8%の人がこのタイプ。暑くネバネバし、特に蒸し暑い日に肌反応やイライラが出ます。" },
    },
  ],
  "anxiety-chinese-medicine": [
    {
      q: { en: "How does Chinese medicine explain anxiety?", "zh-TW": "中醫怎麼解釋焦慮？", ja: "中医学は不安をどう説明するか？" },
      a: { en: "TCM explains anxiety with chest tightness and mood swings as Qi Stagnation — your vital energy builds up but can't flow freely, creating pressure that your mind interprets as anxiety and restlessness.", "zh-TW": "中醫認為伴隨胸悶和情緒波動的焦慮是氣鬱 — 生命能量堆積但無法自由流動，產生壓力感，心解讀為焦慮和煩躁。", ja: "TCMでは胸の圧迫感と気分の波を伴う不安を気鬱と説明します。生命エネルギーが蓄積するが自由に流れず、心が不安や落ち着きのなさとして解釈する圧力が生まれます。" },
    },
    {
      q: { en: "What foods help anxiety in Chinese medicine?", "zh-TW": "中醫什麼食物對焦慮有幫助？", ja: "中医学で不安に効く食材は？" },
      a: { en: "Flow-promoting foods: rose tea, citrus fruits, chamomile tea, peppermint, chrysanthemum tea, and light soups. Avoid excessive caffeine, alcohol, very spicy foods, heavy greasy meals, and excessive sugar.", "zh-TW": "疏肝食物：玫瑰花茶、柑橘類、洋甘菊茶、薄荷、菊花茶和清淡湯品。避免過量咖啡因、酒精、過辣食物、油膩厚味和過量糖分。", ja: "気を巡らせる食材：ローズティー、柑橘類、カモミールティー、ペパーミント、菊茶、軽いスープ。過度なカフェイン、アルコール、辛すぎる食べ物、脂っこい食事、過度な砂糖を避けてください。" },
    },
    {
      q: { en: "Is anxiety a brain problem or body problem in TCM?", "zh-TW": "中醫認為焦慮是腦的問題還是身的問題？", ja: "TCMでは不安は脳の問題か体の問題か？" },
      a: { en: "TCM sees anxiety as an energy flow problem, not just brain chemistry. The fuel is there (unlike Qi Deficiency), but the pipes are blocked. Medication can dampen the alarm, but clearing the blockage through diet and lifestyle is the TCM approach.", "zh-TW": "中醫認為焦慮是能量流動問題，不只是大腦化學。燃料在那裡（不像氣虛），但管道堵住了。藥物可以壓低警報，但中醫的方法是通過飲食和生活方式疏通堵塞。", ja: "TCMは不安をエネルギーの流れの問題と見ます。燃料はある（気虚とは違う）、しかしパイプが詰まっている。薬は警報を抑えられるが、中医学のアプローチは食事と生活で詰まりを解消することです。" },
    },
  ],
  "insomnia-chinese-medicine": [
    {
      q: { en: "Why can't I sleep according to Chinese medicine?", "zh-TW": "中醫認為為什麼睡不著？", ja: "中医学ではなぜ眠れないのか？" },
      a: { en: "TCM attributes insomnia that worsens at night to Yin Deficiency — your body's cooling force is low. Without enough Yin to balance internal heat, your mind becomes overactive when external distractions stop.", "zh-TW": "中醫認為夜間加重的失眠是陰虛 — 你身體的冷卻力量不足。沒有足夠的陰來平衡內熱，當外在干擾停止時，思緒變得過度活躍。", ja: "TCMでは夜に悪化する不眠を陰虚と見ます。体の冷却力が不足し、内熱とのバランスが取れず、外の気が散るものがなくなると心が過活動になります。" },
    },
    {
      q: { en: "What foods help insomnia in Chinese medicine?", "zh-TW": "中醫什麼食物對失眠有幫助？", ja: "中医学で不眠に効く食材は？" },
      a: { en: "Yin-nourishing foods for sleep: lily bulb, lotus seed, pear, watermelon, mung bean soup, and tremella mushroom. Avoid spicy foods, alcohol, lamb, excessive coffee, fried foods, and large amounts of garlic.", "zh-TW": "滋陰安眠食物：百合、蓮子、梨、西瓜、綠豆湯和白木耳。避免辛辣食物、酒精、羊肉、過量咖啡、油炸食物和大量蒜頭。", ja: "陰を養い眠りを助ける食材：ユリ根、蓮の実、梨、スイカ、緑豆スープ、白キクラゲ。辛い食べ物、アルコール、羊肉、コーヒーの飲みすぎ、揚げ物、大量のニンニクを避けてください。" },
    },
    {
      q: { en: "Is melatonin effective from a TCM perspective?", "zh-TW": "中醫角度看褪黑激素有效嗎？", ja: "TCMの観点からメラトニンは効果的ですか？" },
      a: { en: "Melatonin can help temporarily but doesn't address the root cause. TCM asks why your body generates excess heat at night — the answer is Yin Deficiency. Nourishing Yin through food and lifestyle provides a more lasting solution.", "zh-TW": "褪黑激素能暫時幫助，但沒有解決根本原因。中醫問為什麼身體在夜間產生多餘的熱 — 答案是陰虛。通過食物和生活方式滋陰提供更持久的解決。", ja: "メラトニンは一時的に役立ちますが根本原因には対処しません。中医学はなぜ夜に過剰な熱が生じるかを問います — 答えは陰虚。食事と生活で陰を養うことでより持続的な解決が得られます。" },
    },
  ],
  "foods-that-warm-your-body": [
    {
      q: { en: "What are the best warming foods in Chinese medicine?", "zh-TW": "中醫最好的溫性食物是什麼？", ja: "中医学で最も良い温性食材は？" },
      a: { en: "Top warming foods: ginger, cinnamon, lamb, beef, black pepper, roasted nuts, fennel, and onion. These add Yang energy to your system, stoking your inner furnace from within.", "zh-TW": "最佳溫性食物：薑、肉桂、羊肉、牛肉、黑胡椒、烤堅果、茴香和洋蔥。它們為你的系統補充陽氣，從內部點火。", ja: "トップの温性食材：しょうが、シナモン、羊肉、牛肉、黒胡椒、ローストナッツ、フェンネル、玉ねぎ。これらは陽のエネルギーを体に加え、内側から火を起こします。" },
    },
    {
      q: { en: "Why do I feel cold even when the room is warm?", "zh-TW": "為什麼房間暖我還是覺得冷？", ja: "なぜ部屋が暖かいのに寒いのか？" },
      a: { en: "This suggests Yang Deficiency — your body's internal heating capacity is low. External warmth helps temporarily, but the real fix is building your internal Yang through warming foods and lifestyle habits.", "zh-TW": "這表示陽虛 — 你身體內部的產熱能力低。外部溫暖暫時有幫助，但真正的解決是通過溫性食物和生活習慣建立內在的陽氣。", ja: "これは陽虚を示唆します — 体の内部発熱能力が低い。外部の温かさは一時的に役立ちますが、本当の解決は温性食材と生活習慣で内側の陽気を養うことです。" },
    },
    {
      q: { en: "Should I avoid all cold foods if I'm always cold?", "zh-TW": "如果總是怕冷，要避免所有寒涼食物嗎？", ja: "いつも寒いなら全ての冷たい食材を避けるべき？" },
      a: { en: "You don't need to eliminate all cold foods, but minimize them significantly. Prioritize warm, cooked meals. Even drinking room-temperature water instead of ice water makes a noticeable difference for Yang Deficient types.", "zh-TW": "不需要完全消除寒涼食物，但要大幅減少。優先吃溫熱煮熟的餐點。甚至用常溫水代替冰水，對陽虛體質就有明顯改善。", ja: "全ての冷たい食材を排除する必要はありませんが、大幅に減らしてください。温かい調理済みの食事を優先しましょう。氷水の代わりに常温の水を飲むだけでも、陽虚タイプには顕著な違いがあります。" },
    },
  ],
  "what-is-chinese-medicine": [
    {
      q: { en: "Is Chinese medicine scientifically proven?", "zh-TW": "中醫有科學依據嗎？", ja: "中医学は科学的に証明されていますか？" },
      a: { en: "Parts of Chinese medicine have been studied with modern research methods. Acupuncture has the strongest evidence base, with the WHO recognizing it for dozens of conditions. Herbal medicine research is growing but complex because TCM formulas combine multiple herbs. Dietary therapy aligns with nutritional science in many areas. The system's diagnostic framework is based on 3,000 years of clinical observation across millions of patients, providing empirical evidence rather than experimental evidence.", "zh-TW": "中醫的某些部分已經用現代研究方法進行了研究。針灸的證據基礎最強，WHO認可它用於數十種病症。草藥研究正在增長，但因為中醫處方組合多種草藥而較為複雜。食療在許多方面與營養科學一致。該系統的診斷框架基於3000年跨越數百萬患者的臨床觀察，提供的是經驗證據而非實驗證據。", ja: "中医学の一部は現代の研究方法で研究されています。鍼灸のエビデンスが最も強く、WHOが数十の状態を認めています。漢方薬の研究は成長中ですが、TCM処方は複数の生薬を組み合わせるため複雑です。食療は多くの点で栄養科学と一致します。このシステムの診断フレームワークは3000年にわたる数百万患者の臨床観察に基づいており、実験的証拠ではなく経験的証拠を提供します。" },
    },
    {
      q: { en: "What is the difference between TCM and Ayurveda?", "zh-TW": "中醫和阿育吠陀有什麼區別？", ja: "TCMとアーユルヴェーダの違いは？" },
      a: { en: "Both are traditional medical systems that view the body as a whole and emphasize prevention through diet and lifestyle. Chinese medicine identifies 9 body constitutions, 12 meridians, and 5 diagnostic branches. Ayurveda uses 3 doshas (Vata, Pitta, Kapha). TCM tends to be more specific in its dietary recommendations, classifying foods by thermal nature (warm, cool, neutral) and flavor. Ayurveda places more emphasis on taste (rasa) and post-digestive effect. Both systems share the concept of vital energy (qi in TCM, prana in Ayurveda).", "zh-TW": "兩者都是傳統醫學系統，都將身體視為整體並強調通過飲食和生活方式預防。中醫識別9種體質、12條經絡和5個診療分支。阿育吠陀使用3種dosha（Vata、Pitta、Kapha）。中醫在飲食建議上更具體，將食物按熱性（溫、涼、平）和味道分類。阿育吠陀更強調味道和消化後效應。兩個系統都有生命能量的概念（中醫的氣，阿育吠陀的prana）。", ja: "どちらも体を全体として捉え、食事と生活による予防を重視する伝統医学システムです。中医学は9つの体質、12の経絡、5つの診療分野を識別します。アーユルヴェーダは3つのドーシャ（ヴァータ、ピッタ、カパ）を使用します。中医学は食事の推奨がより具体的で、食材を熱性（温、涼、平）と味で分類します。両システムには生命エネルギーの概念（中医学の気、アーユルヴェーダのプラーナ）があります。" },
    },
    {
      q: { en: "Can I practice Chinese medicine at home without a practitioner?", "zh-TW": "我可以不看中醫師自己在家實踐中醫嗎？", ja: "実践者なしで自宅で中医学を実践できますか？" },
      a: { en: "Yes, for the dietary therapy and lifestyle branches. Food-based Chinese medicine is designed for daily self-care. You can identify your body type, learn which foods support it, adjust your meals accordingly, and practice basic self-assessment like tongue observation. However, herbal medicine and acupuncture require professional training and should only be done by licensed practitioners. Start with food, and see a practitioner if you need more targeted help.", "zh-TW": "可以，食療和生活方式這兩個分支可以自己做。以食物為基礎的中醫就是為日常自我保健設計的。你可以確定自己的體質，了解哪些食物對你有幫助，調整飲食，並練習基本的自我評估如觀察舌頭。但草藥和針灸需要專業訓練，應由執業中醫師操作。從食物開始，如果需要更有針對性的幫助再看中醫師。", ja: "はい、食療とライフスタイルの分野は自宅で実践できます。食事に基づく中医学は日常のセルフケア用に設計されています。自分の体質を特定し、適した食材を学び、食事を調整し、舌の観察などの基本的な自己評価を行えます。ただし漢方薬と鍼灸は専門的な訓練が必要で、有資格者の実践者のみが行えます。食事から始めて、より的確な支援が必要な場合は実践者に相談してください。" },
    },
    {
      q: { en: "What should I expect at my first Chinese medicine appointment?", "zh-TW": "第一次看中醫會怎樣？", ja: "初めての中医学の診察では何が起こりますか？" },
      a: { en: "A first visit typically lasts 45 to 90 minutes. The practitioner will ask detailed questions about your sleep, digestion, energy, temperature, emotional state, and symptom history. They will examine your tongue and take your pulse at multiple positions. They may ask questions that seem unrelated to your main complaint, because TCM looks for connections between symptoms. After the assessment, they will identify your pattern and recommend a treatment plan that may include herbs, acupuncture, and dietary changes.", "zh-TW": "初診通常持續45到90分鐘。中醫師會詳細詢問你的睡眠、消化、精力、體溫、情緒狀態和症狀歷史。他們會檢查你的舌頭並在多個位置把脈。他們可能會問一些看似與你的主訴無關的問題，因為中醫尋找症狀之間的關聯。評估後，他們會確定你的體質模式並推薦治療計劃，可能包括草藥、針灸和飲食調整。", ja: "初診は通常45〜90分かかります。実践者は睡眠、消化、エネルギー、体温、感情状態、症状歴について詳しく質問します。舌を診て複数の位置で脈を取ります。TCMは症状間の関連を探すため、主訴とは無関係に思える質問をする場合があります。評価後、あなたのパターンを特定し、漢方薬、鍼灸、食事変更を含む治療計画を推奨します。" },
    },
    {
      q: { en: "How long does Chinese medicine take to work?", "zh-TW": "中醫治療需要多久才見效？", ja: "中医学の治療はどのくらいで効果が出ますか？" },
      a: { en: "It depends on the condition and how long you have had it. Acute issues may respond within a few days to a week. Chronic conditions that developed over months or years typically take longer, often 2 to 3 months of consistent dietary and lifestyle changes before noticeable improvement. Chinese medicine works gradually by rebalancing internal patterns rather than suppressing symptoms. The changes tend to be lasting because the root cause is being addressed, not just the surface symptoms.", "zh-TW": "取決於病情和持續時間。急性問題可能在幾天到一週內有反應。長期累積的慢性問題通常需要更長時間，往往需要2到3個月持續的飲食和生活方式調整才能看到明顯改善。中醫通過重新平衡內在模式來逐步起效，而不是壓制症狀。這些變化往往是持久的，因為解決的是根本原因，而不只是表面症狀。", ja: "状態と期間によります。急性の問題は数日から1週間で反応することがあります。長期間かけて発症した慢性状態は通常より時間がかかり、顕著な改善には2〜3ヶ月の一貫した食事と生活の変化が必要です。中医学は症状を抑制するのではなく、内側のパターンを再バランスすることで徐々に機能します。根本原因に対処するため、変化は持続する傾向があります。" },
    },
  ],
  "chinese-medicine-for-beginners": [
    {
      q: { en: "Do I need to buy special herbs to start Chinese medicine?", "zh-TW": "開始中醫需要買特殊草藥嗎？", ja: "中医学を始めるのに特別な生薬を買う必要がありますか？" },
      a: { en: "No. The most practical starting point in Chinese medicine is dietary therapy, which uses regular foods from your grocery store. Ginger, cinnamon, pear, mung beans, and rice porridge are all common TCM remedies. You can practice food-based Chinese medicine for years without ever buying herbs. Herbs become relevant when you want more targeted effects that food alone cannot provide, and in that case a qualified practitioner should guide you.", "zh-TW": "不需要。中醫最實用的起點是食療，使用的是雜貨店裡的普通食物。薑、肉桂、梨、綠豆和米粥都是常見的中醫食療。你可以多年只做以食物為基礎的中醫，完全不需要買草藥。當你想要食物無法提供的更有針對性的效果時，草藥才有意義，而且應該由合格的中醫師指導。", ja: "いいえ。中医学の最も実用的な出発点は食療であり、スーパーの一般的な食材を使います。しょうが、シナモン、梨、緑豆、お粥はすべて一般的な中医学療法です。生薬を買わずに何年でも食事に基づく中医学を実践できます。生薬は食事だけでは不十分な場合に関係し、その場合は有資格の実践者に相談してください。" },
    },
    {
      q: { en: "Is Chinese medicine safe to try on my own?", "zh-TW": "中醫自己嘗試安全嗎？", ja: "中医学は自分で試すのに安全ですか？" },
      a: { en: "Dietary therapy and basic lifestyle adjustments are very safe for most people. Choosing warm foods over cold ones, eating cooked vegetables instead of raw, and drinking ginger tea are low-risk changes. The main caution is if you have specific food allergies or medical conditions that restrict certain foods. Herbal medicine and acupuncture carry more risk and should only be used under professional guidance. If you are pregnant, nursing, or taking medications, check with your doctor before making significant dietary changes.", "zh-TW": "食療和基本生活方式調整對大多數人來說非常安全。選擇溫熱食物而非寒冷食物、吃熟蔬菜而非生食、喝薑茶都是低風險的改變。主要注意事項是如果你有特定的食物過敏或需要限制某些食物的醫療狀況。草藥和針灸風險較高，應在專業指導下使用。如果你懷孕、哺乳或正在服藥，在做重大飲食改變前請諮詢醫生。", ja: "食療と基本的なライフスタイルの調整は、ほとんどの人にとって非常に安全です。冷たいものより温かいものを選び、生野菜の代わりに調理済み野菜を食べ、しょうが茶を飲むことは低リスクの変更です。主な注意点は、特定の食品アレルギーや食事制限がある場合です。漢方薬と鍼灸はリスクが高く、専門家の指導の下でのみ使用してください。妊娠中、授乳中、または服薬中の場合は、医師に相談してください。" },
    },
    {
      q: { en: "How is Chinese medicine different from just eating healthy?", "zh-TW": "中醫和只是健康飲食有什麼不同？", ja: "中医学は単なるヘルシーな食事とどう違いますか？" },
      a: { en: "Standard nutrition advice is one-size-fits-all: eat more vegetables, less sugar, enough protein. Chinese medicine adds individualization: WHICH vegetables, prepared HOW, for YOUR specific body type. A salad might be healthy for someone who runs warm, but draining for someone who is always cold. Chinese medicine also considers the thermal nature of food (warming vs cooling), cooking method (raw vs steamed vs fried), and timing (when to eat certain foods based on season and body state). It is a more personalized layer on top of basic healthy eating.", "zh-TW": "標準營養建議是一刀切的：多吃蔬菜、少糖、足夠蛋白質。中醫加入了個性化：什麼蔬菜、怎麼準備、針對你的體質。沙拉可能對體質偏熱的人健康，但對總是怕冷的人消耗精力。中醫還考慮食物的熱性（溫與涼）、烹飪方式（生食vs蒸vs炒）和時間（根據季節和身體狀態何時吃什麼）。它是在基本健康飲食之上更個人化的一層。", ja: "標準的な栄養アドバイスは画一的です：もっと野菜を、糖分を減らす、十分なタンパク質を。中医学は個別化を加えます：どの野菜を、どう調理して、あなたの体質に合わせて。サラダは体が温かい人には健康的かもしれませんが、いつも寒い人にはエネルギーを消耗させます。中医学は食材の熱性（温・涼）、調理法（生・蒸し・炒め）、タイミング（季節と体調に応じていつ何を食べるか）も考慮します。基本的なヘルシーな食事の上に、よりパーソナライズされた層です。" },
    },
    {
      q: { en: "How long until I notice a difference from Chinese medicine foods?", "zh-TW": "中醫食療多久能感覺到效果？", ja: "中医学の食事で効果を感じるまでどのくらいかかりますか？" },
      a: { en: "Some changes happen within days. Switching from ice water to warm water, or from raw salads to cooked vegetables, can reduce bloating and improve energy within the first week. Deeper changes, like improved sleep quality, steadier energy through the afternoon, or reduced chronic symptoms, typically take 2 to 4 weeks of consistent practice. Chinese medicine works gradually because it rebalances underlying patterns rather than masking symptoms. The changes tend to be lasting because you are addressing root causes, not just surface complaints.", "zh-TW": "有些改變幾天內就會發生。從冰水改為溫水，或從生沙拉改為熟蔬菜，可以在第一週內減少脹氣和提升精力。更深層的改變，如改善睡眠品質、下午精力更穩定、或減少慢性症狀，通常需要2到4週的持續實踐。中醫是逐步起效的，因為它重新平衡潛在的模式而不是掩蓋症狀。改變往往是持久的，因為你解決的是根本原因。", ja: "一部の変化は数日以内に起こります。氷水を温水に変えたり、生野菜サラダを調理済み野菜に変えたりすると、最初の1週間で膨満感が減りエネルギーが向上することがあります。睡眠の質の向上、午後のエネルギーの安定、慢性症状の軽減など、より深い変化には通常2〜4週間の一貫した実践が必要です。中医学は根本的なパターンを再バランスすることで徐々に機能するため、変化は持続する傾向があります。" },
    },
  ],
  "what-is-qi": [
    {
      q: { en: "Is qi a real thing or just a philosophical concept?", "zh-TW": "氣是真實的還是哲學概念？", ja: "気は実在するものですか、それとも哲学的概念ですか？" },
      a: { en: "Qi is a practical framework for understanding how your body produces and uses energy. Whether you view it as literal energy flow or as a metaphor for metabolic function, the dietary and lifestyle recommendations based on qi theory have been tested across millions of people over thousands of years. Many modern practitioners see qi as an early way of describing what we now study as cellular metabolism, nervous system function, and circulatory dynamics.", "zh-TW": "氣是理解身體如何產生和使用能量的實用框架。無論你把它看作字面上的能量流動還是代謝功能的隱喻，基於氣理論的飲食和生活方式建議已經經過數千年數百萬人的驗人的驗證。許多現代從業者將氣視為描述細胞代謝、神經系統功能和循環動力學的早期方式。", ja: "気は体がエネルギーを生成・使用する仕組みを理解するための実用的枠組みです。文字通りのエネルギーの流れと見るか、代謝機能の隠喩と見るかにかかわらず、気理論に基づく食事・生活習慣の提案は数千年来何百万もの人々で検証されています。" },
    },
    {
      q: { en: "How is qi different from calories or energy from food?", "zh-TW": "氣和食物的卡路里有什麼不同？", ja: "気はカロリーとどう違いますか？" },
      a: { en: "Calories measure the potential energy stored in food. Qi describes how effectively your body converts that potential energy into usable fuel. Two people can eat the same meal with the same calories, but if one has strong Spleen qi and the other has weak Spleen qi, the first person extracts more energy from the meal. This is why calorie counting alone does not explain why some people feel energized after eating and others feel bloated and tired.", "zh-TW": "卡路里衡量食物中儲存的潛在能量。氣描述你的身體將潛在能量轉化為可用燃料的效率。兩個人可以吃同樣的餐點，但如果一個脾氣強、一個脾氣弱，前者從餐點中提取更多能量。這就是為什麼單靠計算卡路里不能解釋為什麼有些人吃完精力充沛，有些人卻脹氣疲憊。", ja: "カロリーは食材に蓄えられた潜在的エネルギーを測ります。気は体がその潜在的エネルギーを利用可能な燃料に変換する効率を表します。同じ食事でも、脾の気が強い人と弱い人では、前者がより多くのエネルギーを抽出します。" },
    },
    {
      q: { en: "Can I build more qi, or am I stuck with what I was born with?", "zh-TW": "我可以補更多氣嗎，還是天生就定了？", ja: "気を増やすことはできますか？" },
      a: { en: "You cannot increase the inherited qi you were born with, but you can maximize the qi you produce daily from food and air. This is the qi you have the most control over. Eating warm, easily digested meals at regular times, breathing deeply, and avoiding activities that waste qi (like excessive worry, overwork, or eating cold food) all help you get the most from your daily qi production.", "zh-TW": "你無法增加先天的元氣，但可以最大化每天從食物和空氣中產生的氣。這是你最能掌控的氣。按時吃溫熱易消化的餐點、深呼吸、避免耗氣的活動（如過度憂慮、過勞或吃冷食）都有助於最大化日常氣的產生。", ja: "生まれつきの元気を増やすことはできませんが、食事と呼吸から毎日生み出す気を最大化できます。温かく消化の良い食事を規則正しくとり、深呼吸し、気を浪費する活動を避けることで、毎日の気の生産を最大限にできます。" },
    },
    {
      q: { en: "What is the relationship between qi and blood in Chinese medicine?", "zh-TW": "中醫裡氣和血的關係是什麼？", ja: "中医学で気と血の関係は？" },
      a: { en: "Chinese medicine says qi is the commander of blood, and blood is the mother of qi. Qi provides the force that pushes blood through your vessels. Without enough qi, circulation becomes sluggish. Blood, in turn, carries the nutrients that produce qi. They depend on each other in a continuous cycle. This is why qi deficiency and blood deficiency often appear together: weak qi cannot produce enough blood, and insufficient blood cannot nourish the organs that make qi.", "zh-TW": "中醫說氣為血之帥，血為氣之母。氣提供推動血液在血管中流動的力量。氣不足時，循環變得遲緩。血液則攜帶產生氣的營養。它們在持續的循環中互相依賴。這就是為什麼氣虛和血虛常同時出現：弱氣不能產生足夠的血，不足的血不能滋養產生氣的臟腑。", ja: "中医学では「気は血の帥、血は気の母」と言います。気は血を血管内に押し出す力を提供し、血は気を生み出す栄養を運びます。相互依存の継続的なサイクルです。" },
    },
  ],
  "tcm-tongue-diagnosis": [
    {
      q: { en: "Can I diagnose myself by looking at my tongue?", "zh-TW": "我可以通過看舌頭自我診斷嗎？", ja: "舌を見て自己診断できますか？" },
      a: { en: "You can get useful clues from your tongue, but self-diagnosis has limits. A trained practitioner considers the tongue alongside pulse reading, symptom history, and palpation. Your tongue gives one piece of the puzzle, not the whole picture. Use it as a personal wellness indicator, not a definitive diagnosis. If you notice concerning changes, consult a healthcare provider.", "zh-TW": "你可以從舌頭得到有用的線索，但自我診斷有局限。訓練有素的從業者會結合舌診、脈診、症狀歷史和觸診。舌頭只是拼圖的一塊，不是全貌。把它當作個人健康指標，而不是確定性診斷。", ja: "舌から有用な手がかりは得られますが、自己診断には限界があります。訓練された実践者は舌診を脈診、症状歴、触診と併用します。舌はパズルの1ピースに過ぎません。" },
    },
    {
      q: { en: "Why does my tongue look different in the morning vs evening?", "zh-TW": "為什麼早上和晚上的舌頭看起來不同？", ja: "なぜ朝と夜で舌の見た目が違う？" },
      a: { en: "Your tongue is most accurate first thing in the morning before eating or drinking. Throughout the day, food colors, beverages, and physical activity all change how your tongue looks. Coffee darkens the coating. Spicy food reddens the body. Dehydration makes it drier. That is why practitioners prefer morning readings. If you want to track changes over time, look at the same time each day for consistency.", "zh-TW": "舌頭在早上吃東西前最準確。一天中，食物、飲料和體力活動都會改變舌頭的外觀。咖啡使舌苔變深，辛辣食物使舌體變紅，脫水使舌頭變乾。這就是為什麼從業者偏好早上看舌。如果你想追蹤變化，每天同一時間看以保持一致性。", ja: "舌は朝食前が最も正確です。一日を通して、食べ物、飲み物、身体活動が舌の見た目を変えます。コーヒーは舌苔を濃くし、辛い食べ物は舌体を赤くし、脱水は乾燥させます。変化を追跡するなら毎日同じ時間に見てください。" },
    },
    {
      q: { en: "What does a geographic tongue mean in Chinese medicine?", "zh-TW": "地圖舌在中醫裡意味著什麼？", ja: "地図状舌は中医学でどう意味されますか？" },
      a: { en: "A geographic tongue, with patchy areas where the coating is missing, often corresponds to Yin Deficiency in Chinese medicine. The patchy, peeled areas indicate that the protective coating is not being sustained because internal moisture is depleted. This pattern is common in people who run warm at night, have dry mouth, or tend toward anxiety. Moistening foods like tremella, pear, and lily bulb may help.", "zh-TW": "地圖舌，舌苔缺失的斑塊區域，在中醫中常對應陰虛。斑塊狀剝落區域表示保護性舌苔無法維持，因為內部水分耗盡。這種模式常見於夜間偏熱、口乾或容易焦慮的人。銀耳、梨和百合等滋潤食物可能有幫助。", ja: "舌苔が欠けている地図状舌は、中医学では陰虚に対応することが多いです。斑状に剥がれた部分は、内部の水分が枯渇し保護的な舌苔が維持できないことを示します。白木耳、梨、百合根などの潤い食材が役立つかもしれません。" },
    },
    {
      q: { en: "My tongue has a crack down the middle. Is that normal?", "zh-TW": "我的舌頭中間有一條裂紋，這正常嗎？", ja: "舌の真ん中に亀裂があります。正常ですか？" },
      a: { en: "A midline crack is one of the most common tongue features. In Chinese medicine, a shallow crack in the center often relates to Spleen or Stomach patterns, because the center of the tongue corresponds to those organs. A deeper crack may suggest a longer-standing deficiency. Some people have a natural midline groove that is present from childhood, which is simply their baseline. If the crack appeared recently or is deepening, it may be worth paying attention to your digestion and eating warm, nourishing foods.", "zh-TW": "中線裂紋是最常見的舌象之一。在中醫裡，中央淺裂紋常與脾胃模式有關，因為舌中對應這些臟腑。更深的裂紋可能表示更長期的虛損。有些人從小就有天然的中線溝紋，那只是他們的基線。如果裂紋最近出現或正在加深，可能值得關注消化和食用溫熱滋養的食物。", ja: "正中線の亀裂は最も一般的な舌の特徴の一つです。中医学では、中央の浅い亀裂は脾・胃のパターンに関連することが多いです。深い亀裂は長期的な虚損を示唆する可能性があります。最近出現したり深くなっている場合は、消化に注意し温かい滋養食をとることをお勧めします。" },
    },
  ],
  "cooling-foods-chinese-medicine": [
    {
      q: { en: "Are cooling foods the same as cold foods?", "zh-TW": "涼性食物和冷的食物一樣嗎？", ja: "涼性食材は冷たい食べ物と同じですか？" },
      a: { en: "No. In Chinese medicine, 'cooling' refers to the internal thermal effect a food has after digestion, not its physical temperature. A bowl of mung bean soup served warm is still a cooling food. An ice-cold piece of roasted lamb is still a warming food. The cooking method matters too: steaming and boiling are more neutral, while deep-frying adds heat. This is why Chinese medicine often recommends cooking cooling ingredients before eating them rather than eating them raw.", "zh-TW": "不是。在中醫裡，「涼性」指食物消化後對身體產生的內部熱效應，不是物理溫度。一碗溫熱的綠豆湯仍然是涼性食物。冰冷的烤羊肉仍然是溫性食物。烹飪方式也很重要：蒸和煮比較中性，油炸會增加熱性。這就是為什麼中醫常建議涼性食材煮熟吃，而不是生吃。", ja: "いいえ。中医学の「涼性」は消化後に体内に与える熱効果を指し、物理的温度ではありません。温かい緑豆スープも涼性です。冷たいローストラム肉も温性です。調理法も影響します：蒸す・煮るは中性、揚げるは熱性を加えます。" },
    },
    {
      q: { en: "Can I eat cooling foods in winter?", "zh-TW": "冬天可以吃涼性食物嗎？", ja: "冬に涼性食材を食べてもいいですか？" },
      a: { en: "Yes, but in moderation and preferably cooked. If you have a hot body type, you still need cooling foods in winter. The key is adjusting preparation: have warm mung bean soup instead of cold mung bean water. Steam your pear instead of eating it raw. Add a slice of ginger to balance the cooling effect. Your body type does not change with the seasons, but the way you prepare foods can shift to match the weather.", "zh-TW": "可以，但要適量且最好煮熟。如果你是熱性體質，冬天仍然需要涼性食物。關鍵是調整做法：喝溫熱的綠豆湯而不是涼的。蒸梨而不是生吃。加一片薑來平衡涼性。你的體質不會隨季節改變，但食物的準備方式可以配合天氣調整。", ja: "はい、適度に調理して食べるのが良いでしょう。熱性体質なら冬も涼性食材が必要です。準備方法を調整：冷たい緑豆水ではなく温かい緑豆スープに。生の梨ではなく蒸し梨に。涼性効果のバランスにしょうがを一枚追加。" },
    },
    {
      q: { en: "What if I am both cold and hot at different times?", "zh-TW": "如果我同時有時冷有時熱怎麼辦？", ja: "冷えとほてりが交互に来る場合は？" },
      a: { en: "This is common and usually indicates a mixed body type, such as Yin Deficiency with some Yang Deficiency. In practice, this means you may need warming foods in the morning when you feel cold and cooling foods in the evening when you feel hot. Follow your body's signals rather than sticking rigidly to one category. A practitioner can help you identify which pattern is dominant so you know which direction to lean.", "zh-TW": "這很常見，通常表示混合體質，如陰虛合併部分陽虛。實際上，這意味著你可能早上覺得冷時需要溫性食物，晚上覺得熱時需要涼性食物。跟隨身體信號，不要固守一類。從業者可以幫你找出主導模式，知道往哪個方向傾斜。", ja: "これは一般的で、通常は混合体質（陰虚＋一部陽虚など）を示します。朝は温性、夜は涼性というように体の信号に従ってください。実践者が優勢なパターンを特定するのを手伝えます。" },
    },
  ],
  "eastern-vs-western-medicine": [
    {
      q: { en: "Can I use both Eastern and Western medicine at the same time?", "zh-TW": "我可以同時使用中醫和西醫嗎？", ja: "中医学と西洋医学を同時に使えますか？" },
      a: { en: "Yes, and many practitioners encourage it. Use Western medicine for diagnosis and acute conditions. Use Chinese medicine approaches for daily management, prevention, and chronic low-grade symptoms. The key is keeping both practitioners informed about what the other is recommending, especially if you are taking herbs alongside prescription medications, as some interactions are possible.", "zh-TW": "可以，許多從業者鼓勵這樣做。用西醫做診斷和急性問題。用東方養生方法做日常管理、預防和慢性輕微症狀。關鍵是讓兩邊的從業者都知道對方的建議，特別是如果你在服用處方藥的同時使用草藥，因為有些交互作用是可能的。", ja: "はい、多くの実践者が推奨しています。西洋医学は診断と急性症状に。東洋養生法は日常管理、予防、慢性の軽い症状に。両方の実践者に互いの推奨を伝えることが重要です。処方薬とハーブの併用時は相互作用に注意。" },
    },
    {
      q: { en: "Is Eastern medicine scientifically validated?", "zh-TW": "東方醫學有科學驗證嗎？", ja: "東洋医学は科学的に検証されていますか？" },
      a: { en: "Parts of it are being studied and some findings are promising. Acupuncture has the strongest evidence base, with WHO recognizing it for dozens of conditions. Herbal medicine research is growing but complicated by the fact that Chinese medicine rarely uses single herbs in isolation. Food therapy is harder to study in randomized trials but aligns with nutritional science in many areas. The observational framework, refined over 3,000 years across millions of patients, provides a different kind of evidence: empirical rather than experimental. Both types of evidence have value.", "zh-TW": "部分正在被研究，有些發現很有前景。針灸的證據基礎最強，WHO認可它用於數十種病症。草藥研究在增長，但因為中醫很少單獨使用單一草藥而變得複雜。食療在隨機試驗中較難研究，但在許多方面與營養科學一致。觀察框架經過3000年數百萬患者的精煉，提供了不同類型的證據：經驗性的而非實驗性的。兩種證據都有價值。", ja: "一部は研究されており有望な結果もあります。鍼灸のエビデンスが最も強く、WHOが数十の状態に認めています。漢方薬研究は成長中ですが、単独で使われることが少ないため複雑です。食療はランダム化試験が難しいですが、栄養科学と一致する部分が多いです。3000年の観察フレームワークは経験的証拠を提供します。" },
    },
    {
      q: { en: "Why does my doctor dismiss Eastern medicine?", "zh-TW": "為什麼我的醫生不認可東方醫學？", ja: "なぜ医師は東洋医学を否定するのですか？" },
      a: { en: "Most Western-trained doctors have little education in Eastern medicine because it operates outside the framework they were trained in. Their concern is usually about patients delaying proven treatments for unproven alternatives. This is a valid concern. However, an increasing number of doctors are open to complementary approaches, especially for chronic conditions where conventional options are limited. The best approach is honest communication: tell your doctor what Eastern approaches you are trying and why, and listen to their concerns.", "zh-TW": "大多數西醫對東方醫學了解很少，因為它在他們受訓的框架之外。他們的擔憂通常是病人延遲已證實的治療而嘗試未證實的替代方案。這是合理的擔憂。但越來越多的醫生對輔助方法持開放態度，特別是在常規選擇有限的慢性病中。最好的方法是誠實溝通：告訴你的醫生你在嘗試什麼東方方法以及為什麼，並聽取他們的擔憂。", ja: "多くの西洋医学の医師は東洋医学の教育を受けていないためです。懸念は通常、実証された治療を遅らせることについてです。これは妥当な懸念です。しかし慢性疾患では補完的アプローチに開放的な医師も増えています。正直なコミュニケーションが最善です。" },
    },
  ],
  "spleen-qi-deficiency": [
    {
      q: { en: "What are the main symptoms of spleen qi deficiency?", "zh-TW": "脾氣虛的主要症狀是什麼？", ja: "脾気虚の主な症状は？" },
      a: { en: "The most common signs include fatigue after eating, bloating and fullness even after small meals, loose stools, poor appetite, difficulty concentrating, and a pale complexion. You may also feel heaviness in your limbs and have a weak desire to move. These signs tend to worsen with cold drinks, raw foods, and irregular eating patterns.", "zh-TW": "最常見的跡象包括飯後疲勞、即使吃少量也腹脹、大便稀軟、食慾差、注意力不集中和面色蒼白。四肢也可能感到沉重，不想動。喝冷飲、吃生食和不規律飲食會加重這些症狀。", ja: "最も一般的な兆候には、食後の疲労、少量でも満腹感、軟便、食欲不振、集中力の低下、青白い顔色があります。四肢の重さも感じることがあります。冷たい飲み物、生野菜、不規則な食事で悪化する傾向があります。" },
    },
    {
      q: { en: "What foods should I eat for spleen qi deficiency?", "zh-TW": "脾氣虛應該吃什麼食物？", ja: "脾気虚には何を食べるべき？" },
      a: { en: "Focus on warm, cooked, easy-to-digest foods. The best options include rice congee, sweet potato, Chinese dates (jujube), ginger tea, Chinese yam, pumpkin, millet porridge, and chicken broth. Cook all vegetables rather than eating them raw. Drink warm or room-temperature water instead of iced drinks. These foods gently support the Spleen without overwhelming it.", "zh-TW": "以溫熱、煮熟、易消化的食物為主。最佳選擇包括米粥、地瓜、紅棗、薑茶、山藥、南瓜、小米粥和雞湯。蔬菜要煮熟而非生吃。喝溫水或常溫水而非冰飲。這些食物溫和地支持脾臟，不會造成負擔。", ja: "温かく、加熱調理された、消化しやすい食品を中心に。最適な選択肢はお粥、さつまいも、なつめ、しょうが茶、山芋、かぼちゃ、きび粥、鶏スープです。野菜は生ではなく加熱して。氷水ではなく常温の水を飲んでください。" },
    },
    {
      q: { en: "Is spleen qi deficiency the same as IBS?", "zh-TW": "脾氣虛和腸躁症一樣嗎？", ja: "脾気虚は過敏性腸症候群と同じですか？" },
      a: { en: "Not exactly, but they can overlap. IBS is a Western medical diagnosis based on symptom patterns. Spleen Qi Deficiency is a Chinese medicine pattern based on functional energy. Some people with IBS may fit the Spleen Qi Deficiency pattern, especially those with diarrhea-predominant IBS, fatigue after eating, and bloating. Others may fit different TCM patterns. The Chinese medicine approach does not replace medical diagnosis but may offer dietary strategies that complement conventional management.", "zh-TW": "不完全一樣，但可以重疊。腸躁症是基於症狀模式的西醫診斷。脾氣虛是基於功能能量的中醫模式。一些腸躁症患者可能符合脾氣虛的模式，特別是腹瀉型、飯後疲勞和腹脹的人。中醫方法不替代醫學診斷，但可能提供輔助的飲食策略。", ja: "完全には同じではありませんが、重なる部分があります。過敏性腸症候群は西洋医学の診断で、脾気虚は中医学のパターンです。一部の過敏性腸症候群患者、特に下痢型で食後の疲労や膨満感がある人は脾気虚に当てはまることがあります。" },
    },
    {
      q: { en: "Which body type is associated with spleen qi deficiency?", "zh-TW": "脾氣虛對應什麼體質？", ja: "脾気虚はどの体質に関連していますか？" },
      a: { en: "Spleen Qi Deficiency most closely aligns with the Qi Deficient body type (气虚质) in the nine-type system. About 15 percent of people share this type. Key traits include chronic low energy, a soft voice, sweating with little exertion, and a tendency to catch colds easily. Take our free 5-minute quiz to discover if this is your primary type.", "zh-TW": "脾氣虛最接近九種體質中的氣虛質（气虚质）。約15%的人屬於此類。主要特徵包括長期精力不足、聲音低弱、稍微活動就出汗、容易感冒。做我們的免費5分鐘測驗，確認你的主要體質。", ja: "脾気虚は9つの体質の中で気虚タイプ（気虚質）に最も近いです。約15%の人がこのタイプです。主な特徴は慢性的なエネルギー不足、声が小さい、少しの運動で汗をかく、風邪をひきやすいことです。無料の5分クイズであなたの体質を確認してください。" },
    },
    {
      q: { en: "How long does it take to improve spleen qi deficiency with food?", "zh-TW": "用食物改善脾氣虛需要多長時間？", ja: "食事で脾気虚を改善するのにどのくらいかかりますか？" },
      a: { en: "Most people notice improvements in digestion and energy within two to three weeks of consistent dietary changes. Significant improvement in chronic symptoms may take two to three months. The key is consistency: eating warm foods at regular times every day produces better results than occasional perfect meals mixed with old habits. Chinese medicine views food therapy as a gradual process of rebuilding, not a quick fix.", "zh-TW": "大多數人在持續改變飲食兩到三週後注意到消化和精力的改善。慢性症狀的顯著改善可能需要兩到三個月。關鍵是堅持：每天定時吃溫食比偶爾完美一餐效果好得多。中醫認為食療是漸進的重建過程，不是速效方法。", ja: "ほとんどの人は食事の変更を2〜3週間続けると消化とエネルギーの改善に気づきます。慢性的な症状の大幅な改善には2〜3ヶ月かかる場合があります。鍵は継続です。毎日決まった時間に温かい食事をとることが、たまの完璧な食事よりも良い結果をもたらします。" },
    },
  ],
  "kidney-yin-deficiency": [
    {
      q: { en: "What are the main symptoms of Kidney Yin Deficiency?", "zh-TW": "腎陰虛的主要症狀有哪些？", ja: "腎陰虚の主な症状は何ですか？" },
      a: { en: "The most common signs may include night sweats, hot flashes in the afternoon or evening, a dry mouth or throat, low back ache that worsens at night, ringing in the ears, and waking around 3 AM. Some people also notice warm palms and soles or a flushed face. These symptoms tend to appear together over time rather than all at once.", "zh-TW": "最常見的症狀可能包括盜汗、午後或傍晚的潮熱、口乾或喉嚨乾、夜間加重的腰痛、耳鳴，以及凌晨三點左右醒來。有些人也會發現手腳心發熱或臉色潮紅。", ja: "最も一般的な症状には、寝汗、午後や夕方のほてり、口や喉の乾き、夜に悪化する腰痛、耳鳴り、午前3時頃の目覚めが含まれることがあります。" },
    },
    {
      q: { en: "Which foods are best for Kidney Yin Deficiency?", "zh-TW": "腎陰虛最適合吃哪些食物？", ja: "腎陰虚に最適な食べ物は何ですか？" },
      a: { en: "Cooling and moistening foods are preferred. Good choices may include black sesame seeds, goji berries, Chinese yam (shan yao), black beans, mulberries, pears, lotus seeds, duck, and mung beans. Eating small amounts of these regularly tends to be more effective than large occasional servings.", "zh-TW": "涼潤的食物最為適合。好的選擇可能包括黑芝麻、枸杞、山藥、黑豆、桑葚、梨子、蓮子、鴨肉和綠豆。少量經常食用比偶爾大量食用更有效。", ja: "冷性で潤いを与える食べ物が適しています。黒ごま、クコの実、山芋、黒豆、クワの実、梨、蓮の実、鴨肉、緑豆などが良い選択肢です。" },
    },
    {
      q: { en: "How is Kidney Yin Deficiency related to menopause?", "zh-TW": "腎陰虛與更年期有什麼關係？", ja: "腎陰虚は更年期とどのように関係していますか？" },
      a: { en: "In Chinese medicine, Kidney Yin naturally declines with age, and menopause is a classic trigger. As estrogen levels fall, many women experience the signs of empty heat, such as hot flashes and night sweats. TCM frames these changes as a drop in cooling Yin that allows the body's warmth to rise unchecked.", "zh-TW": "在中醫裡，腎陰會隨年齡自然衰退，而更年期是常見的觸發因素。隨著雌激素下降，許多女性會出現虛熱的徵兆，如潮熱和盜汗。", ja: "中医学では、腎陰は年齢とともに自然に衰退し、更年期は典型的な引き金です。エストロゲン値が下がると、ほてりや寝汗などの虚熱のサインが現れる女性が多くいます。" },
    },
    {
      q: { en: "Which body type is associated with Kidney Yin Deficiency?", "zh-TW": "腎陰虛對應哪種體質？", ja: "腎陰虚はどの体質に関連していますか？" },
      a: { en: "Kidney Yin Deficiency is closely linked to the Yin Deficient body type in the nine-constitution system. People with this type tend to run warm, feel dry, and sweat easily at night. You can take our free 5-minute quiz to see if this matches your overall constitution.", "zh-TW": "腎陰虛與九種體質中的陰虛體質密切相關。屬於此類型的人往往怕熱、容易口乾，且從年輕時就容易夜間盜汗。", ja: "腎陰虚は、九つの体質システムの陰虚タイプと密接に関連しています。このタイプの人は、暑がり、乾きやすく、若い頃から夜に寝汗をかきやすい傾向があります。" },
    },
    {
      q: { en: "How long does it take to rebuild Kidney Yin?", "zh-TW": "重建腎陰需要多長時間？", ja: "腎陰を回復させるのにどのくらい時間がかかりますか？" },
      a: { en: "Kidney Yin is considered a deep reserve, so rebuilding it tends to take time. With consistent food therapy, better sleep habits, and reduced stress, many people notice gradual improvement over three to six months. Because the depletion often builds over years, patience and daily consistency matter more than quick fixes.", "zh-TW": "腎陰被視為深層的儲備，因此重建它通常需要時間。透過持續的食療、改善睡眠習慣和減少壓力，許多人在三到六個月內會感受到逐漸改善。", ja: "腎陰は深い備蓄と見なされるため、回復には時間がかかる傾向があります。継続的な食事療法、睡眠習慣の改善、ストレスの軽減により、多くの人は3〜6ヶ月で徐々に改善を実感します。" },
    },
  ],
  "liver-qi-stagnation": [
    {
      q: { en: "What are the main symptoms of Liver Qi Stagnation?", "zh-TW": "肝氣鬱結的主要症狀是什麼？", ja: "肝気鬱結の主な症状は何ですか？" },
      a: { en: "The most common signs include frequent sighing, irritability or a short temper, tightness or aching along the rib sides, breast tenderness before your period, irregular or painful periods, a lump-like feeling in the throat, and bloating that worsens with stress. These signs tend to cluster together and often fluctuate with mood.", "zh-TW": "最常見的症狀包括經常嘆氣、煩躁易怒、兩側肋骨緊繃或脹痛、經前乳房脹痛、月經不規則或痛經、喉嚨有異物感，以及隨情緒加劇的腹脹。", ja: "最も一般的な症状は、ため息、イライラや短気、肋骨沿いの張りや痛み、生理前の乳房の張り、不規則な生理や生理痛、喉のつかえ感、ストレスで悪化するお腹の張りです。" },
    },
    {
      q: { en: "What foods help move Liver Qi?", "zh-TW": "什麼食物有助於疏通肝氣？", ja: "肝気を巡らせる食材は？" },
      a: { en: "Foods that move energy tend to be light, pungent, or aromatic. Helpful options include green tea, mint tea, chrysanthemum tea, a squeeze of lemon in warm water, small amounts of vinegar, celery, radish (daikon), rose petal tea, and kelp or seaweed.", "zh-TW": "有助於行氣的食物通常偏清淡、辛香。包括綠茶、薄荷茶、菊花茶、溫水加檸檬汁、少量醋、芹菜、白蘿蔔、玫瑰花茶，以及海帶或海藻。", ja: "気を巡らせる食材は軽く、辛味や香りのあるものが中心です。緑茶、ミントティー、菊茶、ぬるま湯にレモン、少量のお酢、セロリ、大根、ローズティー、昆布や海藻が役立ちます。" },
    },
    {
      q: { en: "How is Liver Qi Stagnation connected to stress and PMS?", "zh-TW": "肝氣鬱結與壓力和經前症候群有什麼關係？", ja: "肝気鬱結はストレスやPMSとどう関係しますか？" },
      a: { en: "In TCM, the Liver governs the smooth flow of both energy and emotion. Chronic stress, repressed frustration, and bottled-up anger directly stagnate Liver Qi. Because the Liver also regulates the monthly release of blood, this stagnation often shows up as PMS symptoms.", "zh-TW": "中醫認為肝負責氣血和情緒的順暢流動。長期壓力、壓抑的挫折和悶在心裡的憤怒會直接導致肝氣鬱結。", ja: "中医学では、肝は気と感情の両方のスムーズな流れを管理します。慢性的なストレス、抑え込んだ欲求不満、溜め込んだ怒りは肝気を直接鬱滞させます。" },
    },
    {
      q: { en: "Which body type is associated with Liver Qi Stagnation?", "zh-TW": "肝氣鬱結對應哪種中醫體質？", ja: "肝気鬱結はどの中医学の体質に関連しますか？" },
      a: { en: "Liver Qi Stagnation maps most closely to the Qi Stagnant (气郁) body type. People with this type tend to be sensitive to stress, prone to frustration, and hold tension rather than release it. You can check whether this is your type with our free 5-minute body type quiz.", "zh-TW": "肝氣鬱結最接近氣鬱體質。這類型的人通常對壓力敏感、容易煩躁，且傾向把緊張悶在心裡。", ja: "肝気鬱結は気鬱（気鬱質）の体質に最も近いです。このタイプの人はストレスに敏感で、苛立ちやすく、緊張を発散させず溜め込む傾向があります。" },
    },
    {
      q: { en: "How long does it take for Liver Qi Stagnation to improve?", "zh-TW": "肝氣鬱結需要多久才能改善？", ja: "肝気鬱結が改善するまでどのくらいかかりますか？" },
      a: { en: "Because Liver Qi Stagnation is driven heavily by daily stress and lifestyle, it can shift faster than deeply depleted patterns. With regular gentle exercise, emotional release, foods that move Qi, and consistent daily rhythms, many people notice less tension within a few weeks.", "zh-TW": "肝氣鬱結主要受日常壓力和生活習慣影響，因此改善速度可能比深度虛損的體質快。透過規律的溫和運動、情緒釋放、行氣食物和穩定的作息，許多人在幾週內就感到改善。", ja: "肝気鬱結は日々のストレスや生活習慣に大きく左右されるため、深く枯渇した体質より早く改善することもあります。定期的な軽い運動、感情の発散、気を巡らせる食事、規則正しい生活リズムにより、多くの人は数週間で改善を実感します。" },
    },
  ],
  "kidney-yang-deficiency": [
    {
      q: { en: "What are the main symptoms of Kidney Yang Deficiency?", "zh-TW": "腎陽虛的主要症狀有哪些？", ja: "腎陽虚の主な症状は何ですか？" },
      a: { en: "The most common signs include feeling cold, especially in the lower body, low back, and knees, frequent pale urination at night, deep fatigue, low libido, loose stools in the morning, and sometimes swelling in the lower legs. The unifying theme is cold combined with slowing and sinking.", "zh-TW": "最常見的徵兆包括怕冷（尤其是下半身、腰部和膝蓋）、夜間頻尿且尿液清澈、深度疲勞、性慾低落、早晨腹瀉，有時伴隨下肢水腫。", ja: "最も一般的な兆候には、特に下半身、腰部、膝の冷え、夜間の頻尿（淡い尿）、深い疲労、性欲低下、朝の軟便、時には下肢のむくみがあります。" },
    },
    {
      q: { en: "Which foods are best for warming Kidney Yang?", "zh-TW": "哪些食物最能溫補腎陽？", ja: "腎陽を温めるのに最適な食材は？" },
      a: { en: "The most strongly warming foods include lamb, walnuts, cinnamon bark (rou gui), dried ginger, shrimp, leeks and chives, fennel, chestnuts, and venison or beef. Small, regular portions tend to work better than large occasional meals.", "zh-TW": "最能溫補的食物包括羊肉、核桃、肉桂、乾薑、蝦、韭菜、茴香、栗子和鹿肉或牛肉。少量規律地吃比偶爾大量吃更有效。", ja: "最も体を温める食材には、羊肉、クルミ、シナモン、乾燥しょうが、エビ、ニラ、フェンネル、栗、鹿肉や牛肉があります。" },
    },
    {
      q: { en: "What is the difference between Kidney Yang and Kidney Yin deficiency?", "zh-TW": "腎陽虛和腎陰虛有什麼不同？", ja: "腎陽虚と腎陰虚の違いは？" },
      a: { en: "Kidney Yang Deficiency is a pattern of cold: you feel chilled, urinate frequently with pale urine, and lack warming energy. Kidney Yin Deficiency is a pattern of heat: you may experience night sweats, a dry throat, afternoon hot flashes, and restlessness. They are opposite poles of the same Kidney system.", "zh-TW": "腎陽虛是「寒」的體質：怕冷、頻尿且尿液清澈、缺乏溫熱能量。腎陰虛則是「熱」的體質：可能出現盜汗、口乾、午後潮熱和煩躁。", ja: "腎陽虚は「寒」のパターンで、寒がり、淡い尿の頻尿、温める力の不足が見られます。腎陰虚は「熱」のパターンで、寝汗、喉の渇き、午後のほてり、焦燥感が現れることがあります。" },
    },
    {
      q: { en: "Which body type is associated with Kidney Yang Deficiency?", "zh-TW": "腎陽虛對應哪種體質？", ja: "腎陽虚はどの体質に関連しますか？" },
      a: { en: "It can be associated with the Yang Deficient body type, one of the nine constitutions in Chinese medicine. People with this type tend to feel cold easily, prefer warm drinks and food, and recover slowly from chills. The free body type quiz can show whether this is your primary constitution.", "zh-TW": "它可對應中醫九種體質中的陽虛體質。這類型的人容易怕冷、偏好溫熱飲食、受寒後恢復緩慢。", ja: "中医学の九つの体質のひとつ、陽虚タイプ（陽虚質）と関連します。このタイプの人は寒がりで、温かい飲食を好み、冷えからの回復が遅い傾向があります。" },
    },
    {
      q: { en: "How can I warm up Kidney Yang quickly?", "zh-TW": "如何快速溫補腎陽？", ja: "腎陽をすばやく温めるには？" },
      a: { en: "The fastest everyday steps are to drink only warm fluids, eat a cooked warming meal at midday, keep your lower back and abdomen covered, soak your feet in warm water before bed, and get gentle morning movement and sunlight.", "zh-TW": "最快的方法是只喝溫飲、中午吃一頓煮熟的溫熱餐、保暖腰腹、睡前用溫水泡腳，並在早晨做溫和運動和曬太陽。", ja: "最も早い日常の方法は、温かい飲み物だけにする、昼に温かい調理食を食べる、腰と腹部を保温する、寝前に足湯をする、朝に軽い運動と日光浴をする、です。" },
    },
  ],
  "lung-qi-deficiency": [
    {
      q: { en: "What are the main symptoms of lung qi deficiency?", "zh-TW": "肺氣虛的主要症狀是什麼？", ja: "肺気虚の主な症状は？" },
      a: { en: "The most common signs include shortness of breath with light exertion, a weak or low voice that trails off, frequent colds that are slow to clear, spontaneous sweating with little effort, a pale complexion, and a reluctance to speak because talking feels tiring. Some people also notice chronic nasal congestion.", "zh-TW": "最常見的跡象包括稍微活動就氣短、聲音低弱且越說越小聲、頻繁感冒且不易好、稍微動就出汗、面色蒼白，以及不想說話因為開口覺得累。", ja: "最も一般的な兆候は、軽い運動での息切れ、途切れ途切れになる弱い声、なかなか治らない頻繁な風邪、少しの努力で出る発汗、青白い顔色、話すのが疲れて話したがらないことです。" },
    },
    {
      q: { en: "What foods should I eat for lung qi deficiency?", "zh-TW": "肺氣虛應該吃什麼食物？", ja: "肺気虚には何を食べるべき？" },
      a: { en: "Focus on warm, moistening foods. Helpful choices include pear (steamed with honey), lily bulb (bai he), white fungus (yin er), Chinese yam (shan yao), honey in warm water, sweet almond, lotus root, goji berries, and rice congee.", "zh-TW": "以溫熱、潤澤的食物為主。有益的選擇包括梨（加蜂蜜蒸）、百合、銀耳、山藥、溫蜂蜜水、甜杏仁、蓮藕、枸杞和米粥。", ja: "温かく潤いのある食材を中心に。役立つ選択肢は梨（はちみつ蒸し）、ゆり根、白木耳、山芋、温かいはちみつ水、甜杏仁、蓮根、クコの実、お粥です。" },
    },
    {
      q: { en: "Why do I catch colds so often in Chinese medicine?", "zh-TW": "中醫認為為什麼我老是感冒？", ja: "中医学ではなぜよく風邪をひくのか？" },
      a: { en: "In TCM, your ability to block colds depends on Wei Qi, the defensive energy produced by the Lung. When Lung Qi is weak, Wei Qi cannot guard the body's surface well, so external pathogens get through more easily. This is why frequent colds are a hallmark of Lung Qi Deficiency.", "zh-TW": "在中醫裡，抵擋感冒的能力取決於衛氣，這是由肺產生的防禦能量。肺氣虛時，衛氣無法好好保護體表，外邪就容易入侵。", ja: "中医学では、風邪を防ぐ力は肺が作る防御エネルギー、衛気に依存します。肺気が弱いと衛気が体表を十分に守れず、外邪が入りやすくなります。" },
    },
    {
      q: { en: "Which body type is associated with lung qi deficiency?", "zh-TW": "肺氣虛對應什麼體質？", ja: "肺気虚はどの体質に関連していますか？" },
      a: { en: "Lung Qi Deficiency most closely aligns with the Qi Deficient body type (气虚质). About 15 percent of people share this type. Key traits include chronic low energy, a soft voice, sweating with little exertion, and a tendency to catch colds easily.", "zh-TW": "肺氣虛最接近九種體質中的氣虛質（气虚质）。約15%的人屬於此類。", ja: "肺気虚は9つの体質の中で気虚タイプ（気虚質）に最も近いです。約15%の人がこのタイプです。" },
    },
    {
      q: { en: "Do breathing exercises help lung qi deficiency?", "zh-TW": "呼吸練習對肺氣虛有幫助嗎？", ja: "呼吸法は肺気虚に効果がありますか？" },
      a: { en: "Yes, gentle breathing exercises may help. Slow abdominal breathing for five to ten minutes a day can strengthen Lung Qi over time. Let your belly rise on the inhale and fall on the exhale, keeping each breath long and smooth.", "zh-TW": "有幫助。每天五到十分鐘的緩慢腹式呼吸，長期下來可以增強肺氣。吸氣時腹部隆起，呼氣時腹部回落，每次呼吸保持細長平順。", ja: "はい、穏やかな呼吸法が役立つ可能性があります。1日5〜10分のゆっくりした腹式呼吸を続けると、時間とともに肺気が強くなります。" },
    },
  ],
  "stomach-heat": [
    {
      q: { en: "What are the main symptoms of stomach heat in Chinese medicine?", "zh-TW": "中醫裡胃熱的主要症狀是什麼？", ja: "中医学で胃熱の主な症状は？" },
      a: { en: "The most common signs include a burning sensation in the stomach, excessive hunger even after eating, foul bad breath, mouth ulcers or canker sores, acid reflux, a strong thirst for cold drinks, and red or swollen gums that may bleed.", "zh-TW": "最常見的跡象包括胃部灼熱感、即使吃過也一直覺得餓、難聞的口臭、口腔潰瘍或嘴破、胃酸倒流、強烈想喝冷飲，以及牙齦紅腫可能出血。", ja: "最も一般的な兆候は、胃の灼熱感、食べてもすぐ空腹になる、口臭、口内炎やアフタ、胃酸の逆流、冷たい飲み物を強く欲する、赤く腫れた歯ぐきです。" },
    },
    {
      q: { en: "What are the best cooling foods for stomach heat?", "zh-TW": "胃熱最好的清涼食物是什麼？", ja: "胃熱に良い清涼食材は？" },
      a: { en: "Mung beans are considered the strongest cooling food for Stomach Heat. Other helpful options include cucumber, pear, lotus root, watermelon, bitter gourd, green tea, tomato, and millet congee. These foods are best steamed, boiled lightly, or served at room temperature.", "zh-TW": "綠豆被認為是清胃熱最強的食物。其他有益的選擇包括黃瓜、梨、蓮藕、西瓜、苦瓜、綠茶、番茄和小米粥。", ja: "緑豆が胃熱を清す最も強い食材とされています。他にはきゅうり、梨、レンコン、スイカ、ゴーヤ、緑茶、トマト、きび粥が役立ちます。" },
    },
    {
      q: { en: "Is stomach heat the same as acid reflux?", "zh-TW": "胃熱和胃酸倒流一樣嗎？", ja: "胃熱は胃酸の逆流と同じですか？" },
      a: { en: "Not exactly. Acid reflux is a Western medical diagnosis based on stomach acid flowing upward. Stomach Heat is a Chinese medicine pattern of excessive digestive fire. The two often overlap, since reflux is one of the most common signs of Stomach Heat, but they are not identical.", "zh-TW": "不完全一樣。胃酸倒流是西醫的診斷。胃熱是中醫的模式，指消化之火過旺。兩者常重疊，但並不相同。", ja: "正確には違います。胃酸の逆流は西洋医学の診断です。胃熱は中医学のパターンで、消化の火が強すぎる状態です。両者は重なることが多いですが同一ではありません。" },
    },
    {
      q: { en: "Which body type is associated with stomach heat?", "zh-TW": "胃熱對應什麼體質？", ja: "胃熱はどの体質に関連していますか？" },
      a: { en: "Stomach Heat most often appears in people who run warm overall. It can show up as part of the Damp Heat body type, which tends to feel hot and sticky. Take our free 5-minute quiz to find out if a heat-related type matches your constitution.", "zh-TW": "胃熱最常出現在整體偏熱的人身上。它可以是濕熱體質的一部分。做我們的免費5分鐘測驗，看看熱性體質是否符合你的體質。", ja: "胃熱は全体的に暑がりの人に最もよく現れます。湿熱タイプの一部として現れることが多いです。無料の5分クイズで熱関連の体質が当てはまるか確認できます。" },
    },
    {
      q: { en: "How long does it take to cool stomach heat with food?", "zh-TW": "用食物清胃熱需要多久？", ja: "食事で胃熱を清すのにどのくらいかかりますか？" },
      a: { en: "Many people notice less burning and better breath within one to two weeks of consistent dietary changes. Deeper relief, such as fewer mouth ulcers and steadier digestion, may take three to four weeks. The key is consistency.", "zh-TW": "許多人持續改變飲食一到兩週後注意到灼熱感減輕、口氣改善。更深層的改善可能需要三到四週。關鍵是堅持。", ja: "多くの人は食事の変更を1〜2週間続けると灼熱感の軽減や口臭の改善に気づきます。深い改善には3〜4週間かかることがあります。" },
    },
  ],
  "spleen-dampness": [
    {
      q: { en: "What are the main symptoms of Spleen Dampness?", "zh-TW": "脾濕的主要症狀有哪些？", ja: "脾湿の主な症状は何ですか？" },
      a: { en: "The main signs may include a heavy feeling in the body and limbs, brain fog, sticky or sluggish stools, bloating, stubborn weight gain, a thick greasy tongue coating, and cloudy urine. The shared quality is that everything feels heavy, slow, and sticky rather than sharp.", "zh-TW": "主要症狀可能包括身體和四肢沉重、腦霧、黏膩或遲滯的大便、腹脹、頑固的體重增加、厚膩的舌苔和混濁的尿液。", ja: "主な症状には、体と四肢の重さ、脳の霧、ねばついたまたは遅い排便、膨満感、頑固な体重増加、厚くねばついた舌苔、濁った尿が含まれることがあります。" },
    },
    {
      q: { en: "What are the best foods to drain dampness?", "zh-TW": "什麼食物最能祛濕？", ja: "湿気を取り除く最も良い食材は？" },
      a: { en: "The strongest damp-draining foods in Chinese medicine are adzuki beans, coix seed (yi yi ren), and winter melon. Radish, Chinese celery, lotus leaf tea, barley tea, Chen Pi (aged tangerine peel), and ginger tea may also help.", "zh-TW": "中醫裡最強的祛濕食物是紅豆、薏仁和冬瓜。白蘿蔔、芹菜、荷葉茶、大麥茶、陳皮和薑茶也可能有幫助。", ja: "中医学で最も強い祛湿食材は小豆、ハトムギ、トウガンです。大根、セロリ、蓮の葉茶、大麦茶、陳皮、しょうが茶も役立つことがあります。" },
    },
    {
      q: { en: "Is Spleen Dampness related to weight gain?", "zh-TW": "脾濕和體重增加有關嗎？", ja: "脾湿は体重増加と関係ありますか？" },
      a: { en: "It can be. In TCM theory, dampness and phlegm add dense, heavy mass that the body holds onto. This can be associated with weight gain that resists diet and exercise, especially around the middle.", "zh-TW": "有可能。中醫理論中，濕氣和痰會增加身體留住的緻密厚重質量。這可能與節食和運動都難以減掉的體重增加有關。", ja: "関係することがあります。中医学の理論では、湿気と痰は体が保持する密度の高い重い塊を加えます。これは食事や運動でも落ちにくい体重増加に関連することがあります。" },
    },
    {
      q: { en: "Which body type is linked to Spleen Dampness?", "zh-TW": "脾濕對應哪種體質？", ja: "脾湿はどの体質に当てはまりますか？" },
      a: { en: "Spleen Dampness aligns most closely with the Phlegm Damp body type in the nine-type system. People with this type tend to feel heavy, carry extra weight, and react strongly to damp-forming foods like dairy and sweets.", "zh-TW": "脾濕與九種體質中的痰濕體質最為吻合。這類型的人容易覺得沉重、體重偏重，並對乳製品和甜食等生濕食物反應明顯。", ja: "脾湿は9つの体質の中で痰湿体質に最も近いです。このタイプの人は重く感じやすく、体重が増えやすく、乳製品や甘いものに強く反応します。" },
    },
    {
      q: { en: "How long does it take to clear dampness?", "zh-TW": "祛濕需要多長時間？", ja: "湿気を取り除くのにどのくらいかかりますか？" },
      a: { en: "Dampness is sticky and slow, so it usually takes longer to clear than simple fatigue. With consistent dietary and lifestyle changes, many people notice lighter, clearer energy within 2 to 4 weeks, while deeper changes may take 1 to 3 months.", "zh-TW": "濕氣黏膩緩慢，所以通常比單純疲勞需要更久才能清除。持續的飲食和生活方式改變，許多人會在2到4週內感到更輕盈清醒，更深的改變可能需要1到3個月。", ja: "湿気はねばつき遅いため、単なる疲労よりも除くのに時間がかかるのが一般的です。一貫した食事と生活の変化で、多くの人は2〜4週間で軽く澄んだエネルギーを感じます。" },
    },
  ],
  "blood-deficiency": [
    {
      q: { en: "What are the main symptoms of Blood Deficiency?", "zh-TW": "血虛的主要症狀是什麼？", ja: "血虚の主な症状は？" },
      a: { en: "Classic signs include pale lips and complexion, brittle nails, dry hair and skin, dizziness (especially when standing up quickly), numbness or tingling in the limbs, difficulty falling asleep, and poor memory. These can be associated with the nourishing substance not reaching your tissues and mind.", "zh-TW": "典型症狀包括唇色與面色蒼白、指甲易脆、頭髮與皮膚乾燥、頭暈（尤其快速站起時）、四肢麻木或刺痛、難以入睡，以及記憶力差。", ja: "典型的な症状には、蒼白な唇と顔色、割れやすい爪、乾燥した髪と肌、めまい、手足のしびれやピリピリ感、入眠困難、記憶力の低下があります。" },
    },
    {
      q: { en: "What are the best foods to build Blood in Chinese medicine?", "zh-TW": "中醫補血最好的食物是什麼？", ja: "中医学で血を補う最も良い食材は？" },
      a: { en: "Top blood-building foods include red dates (jujube), goji berries, black sesame seeds, bone broth, dark leafy greens like spinach, animal liver, longan fruit, black beans, and cherries. Warm, protein-rich, iron-containing foods that are easy to digest may help most.", "zh-TW": "最佳補血食物包括紅棗、枸杞、黑芝麻、骨頭湯、菠菜等深色葉菜、動物肝臟、龍眼、黑豆和櫻桃。溫熱、富含蛋白質和鐵質且易消化的食物可能最有幫助。", ja: "血を補うトップ食材は、なつめ、クコの実、黒ゴマ、骨スープ、ほうれん草などの濃い色の葉物、レバー、竜眼、黒豆、さくらんぼです。" },
    },
    {
      q: { en: "Is Blood Deficiency the same as iron-deficiency anemia?", "zh-TW": "血虛和缺鐵性貧血一樣嗎？", ja: "血虚は鉄欠乏性貧血と同じですか？" },
      a: { en: "They overlap but are not identical. Iron-deficiency anemia is a medical diagnosis based on low iron and abnormal blood counts. Blood Deficiency is a broader TCM pattern that may include the oxygen-carrying role plus the nourishing and grounding functions. You can have normal iron panels yet still show signs of Blood Deficiency.", "zh-TW": "兩者重疊但不相同。缺鐵性貧血是基於低鐵和異常血液指標的醫學診斷。血虛是更廣義的中醫體質模式。你的鐵指標可能正常卻仍有血虛跡象。", ja: "重なりますが同一ではありません。鉄欠乏性貧血は低鉄と異常な血液数値に基づく医学的診断です。血虚はより広い中医学のパターンです。" },
    },
    {
      q: { en: "Which Chinese medicine body type is linked to Blood Deficiency?", "zh-TW": "血虛和哪種中醫體質有關？", ja: "血虚はどの中医学の体質と関連していますか？" },
      a: { en: "Blood Deficiency often overlaps with the Yin Deficient body type, since both involve a lack of moistening and nourishing reserve. About 10 percent of people share the Yin Deficient type. Take our free 5-minute quiz to see if it matches your constitution.", "zh-TW": "血虛常與陰虛體質重疊，因為兩者都涉及滋潤與滋養儲備不足。約10%的人屬於陰虛體質。", ja: "血虚は陰虚の体質と重なることが多く、どちらも潤いと栄養の蓄えが不足していることが関係します。約10%の人が陰虚タイプです。" },
    },
    {
      q: { en: "How long does it take to rebuild Blood?", "zh-TW": "補血需要多久？", ja: "血を回復するのにどのくらいかかりますか？" },
      a: { en: "It varies. Because Blood is built gradually from food and rest, most people notice changes over 4 to 8 weeks of consistent nourishing meals, adequate protein and iron, and better sleep. Deeper depletion from long-term blood loss may take several months.", "zh-TW": "因人而異。因為血是從食物和休息中逐漸生成的，多數人在持續攝取滋補飲食、充足蛋白質與鐵質，以及改善睡眠後，4到8週內會感受到變化。嚴重耗損可能需要數個月。", ja: "人によります。血は食事と休息から徐々に作られるため、栄養のある食事、十分なタンパク質と鉄分、より良い睡眠を継続すれば、多くの人は4〜8週間で変化を実感します。" },
    },
  ],
  "liver-fire": [
    {
      q: { en: "What are the main symptoms of Liver Fire?", "zh-TW": "肝火的主要症狀是什麼？", ja: "肝火の主な症状は？" },
      a: { en: "The hallmark signs of Liver Fire include red or bloodshot eyes, sharp headaches at the temples or top of the head, intense irritability or sudden rage, a bitter taste in the mouth, dry mouth, loud ringing in the ears, a flushed red face, and insomnia with racing thoughts. These signs tend to feel hot and intense, and they often flare during periods of stress or after poor sleep.", "zh-TW": "肝火的典型症狀包括眼睛紅或血絲、太陽穴或頭頂的劇烈頭痛、強烈煩躁或突然暴怒、口苦、口乾、耳鳴聲大、面部潮紅，以及思緒奔湧的失眠。這些症狀通常感覺燥熱強烈，常在壓力期或睡眠不足後發作。", ja: "肝火の代表的な症状は、赤いまたは充血した目、こめかみや頭頂部の鋭い頭痛、強いイライラや突然の怒り、口の中の苦み、口の渇き、大きな耳鳴り、ほてった赤い顔、思考が止まらない不眠です。これらは暑く激しく感じられ、ストレス時や睡眠不足後に悪化することが多いです。" },
    },
    {
      q: { en: "What are the best cooling foods for Liver Fire?", "zh-TW": "肝火最好的清涼食物是什麼？", ja: "肝火に最適な涼性食材は？" },
      a: { en: "Chrysanthemum tea (ju hua) is considered the classic Liver Fire remedy, prized for cooling heat and soothing the eyes. Other helpful foods include celery, mung beans, bitter gourd, lotus root, pear, seaweed and kelp, cucumber, and watermelon. Prepare them by steaming or light boiling and avoid roasting and deep-frying, which add heat back in. Small amounts taken regularly tend to work best.", "zh-TW": "菊花茶是經典的肝火食療，以清熱明目著稱。其他有益食物包括芹菜、綠豆、苦瓜、蓮藕、梨、海帶海藻、黃瓜和西瓜。以蒸或輕煮方式準備，避免烤和油炸（會增加熱性）。少量經常食用效果最好。", ja: "菊茶（菊花）は肝火の古典的な療法で、熱を冷やし目を和らげることで知られています。他にはセロリ、緑豆、ゴーヤ、レンコン、梨、海藻・昆布、きゅうり、スイカが役立ちます。蒸すか軽く煮て調理し、熱を加える焼き物や揚げ物は避けてください。少量を毎日食べるのが最も効果的です。" },
    },
    {
      q: { en: "How are anger and headaches connected to Liver Fire?", "zh-TW": "憤怒和頭痛與肝火有什麼關係？", ja: "怒りと頭痛は肝火とどう関係していますか？" },
      a: { en: "In TCM, anger is the emotion most closely tied to the Liver. When frustration is held in rather than expressed, Liver Qi stagnates and the pressure generates heat, which becomes Liver Fire. Because heat rises, Liver Fire flares upward to the head, which can show up as sharp headaches at the temples or top of the head along with intense irritability or rage. This is why chronic anger and headache so often appear together in this pattern.", "zh-TW": "中醫認為憤怒與肝關係最密切。當挫敗感被壓抑而非表達時，肝氣鬱結，壓力產生熱，成為肝火。因為熱會上升，肝火往上衝到頭部，表現為太陽穴或頭頂的劇烈頭痛，以及強烈煩躁或暴怒。這就是為什麼長期憤怒和頭痛常同時出現。", ja: "中医学では、怒りは肝に最も密接に関わる感情です。欲求不満を表現せず抱え込むと、肝気のうつ滞が生じて圧力が熱となり、肝火になります。熱は上昇するため肝火は頭に向かい、こめかみや頭頂部の鋭い頭痛と強いイライラや怒りとして現れます。だから慢性的な怒りと頭痛が一緒に現れることが多いのです。" },
    },
    {
      q: { en: "Which body type is associated with Liver Fire?", "zh-TW": "肝火對應什麼體質？", ja: "肝火はどの体質に関連していますか？" },
      a: { en: "Liver Fire most closely aligns with the Damp Heat body type (湿热质) in the nine-constitution system. People of this type tend to run warm, feel sticky in hot weather, and are prone to skin reactions and irritability. The Qi Stagnant type (气郁质) may also develop Liver Fire, since stagnation is the pattern that fire grows out of. Take our free 5-minute quiz to discover your primary type.", "zh-TW": "肝火最接近九種體質中的濕熱質（湿热质）。這類人通常偏熱、在炎熱天氣覺得黏膩，容易有皮膚反應和煩躁。氣鬱質（气郁质）也可能發展成肝火，因為氣鬱是肝火的根源。做我們的免費5分鐘測驗，確認你的主要體質。", ja: "肝火は9つの体質の中で湿熱タイプ（湿熱質）に最も近いです。このタイプは暑がりで蒸し暑い日にネバネバし、肌の反応やイライラが出やすいです。気鬱タイプ（気鬱質）も、気うつが肝火の源であるため肝火を発症しやすいです。無料の5分クイズであなたの主要体質を確認してください。" },
    },
    {
      q: { en: "What is the difference between Liver Fire and Liver Qi Stagnation?", "zh-TW": "肝火和肝氣鬱結有什麼不同？", ja: "肝火と肝気鬱結の違いは？" },
      a: { en: "Liver Qi Stagnation is the earlier stage, where energy is stuck but no real heat has developed yet. It tends to feel like pressure, tightness, sighing, and mood swings. Liver Fire is what happens when that stagnation is left unresolved long enough to ignite. The symptoms shift from tightness to heat: red eyes, sharp headaches, rage, bitter taste, and ringing in the ears. In short, Liver Qi Stagnation is the kindling and Liver Fire is the flame.", "zh-TW": "肝氣鬱結是早期階段，能量堵塞但尚未產生真正的熱。通常感覺像壓力、緊繃、嘆息和情緒波動。肝火是氣鬱長期未解決而點燃的結果。症狀從緊繃轉為燥熱：眼睛紅、劇烈頭痛、暴怒、口苦和耳鳴。簡言之，肝氣鬱結是柴火，肝火是火焰。", ja: "肝気鬱結はより初期の段階で、エネルギーは停滞していますがまだ本当の熱は生じていません。圧力、緊張、ため息、気分の波として感じられます。肝火は、その鬱結が長期間解消されずに点火した状態です。症状は緊張から熱へと変化し、目の充血、鋭い頭痛、激怒、口の苦み、耳鳴りが現れます。要するに、肝気鬱結は薪で、肝火は炎です。" },
    },
  ],
  "heart-yin-deficiency": [
    {
      q: { en: "What are the main symptoms of Heart Yin Deficiency?", "zh-TW": "心陰虛的主要症狀是什麼？", ja: "心陰虚の主な症状は？" },
      a: { en: "The hallmark signs include difficulty falling asleep, palpitations or a fluttering chest, anxiety, vivid dreams, night sweats, and a red flushed face, especially on the cheeks. The mind may feel restless and unable to switch off at night. These signs tend to cluster together and often worsen with stress or during menopause.", "zh-TW": "主要症狀包括入睡困難、心悸或胸口撲通跳、焦慮、多夢、夜間盜汗和面部潮紅（尤其雙頰）。夜間思緒可能煩躁無法平靜。這些症狀常成群出現，並在壓力或更年期時加重。", ja: "主な症状は、入眠困難、動悸や胸のドキドキ、不安、鮮明な夢、寝汗、ほてり（特にもほほ）です。夜は心が落ち着かず休まらない傾向があります。これらは一緒に現れ、ストレスや更年期で悪化することがあります。" },
    },
    {
      q: { en: "Which foods are best for calming Heart Yin Deficiency?", "zh-TW": "哪些食物最能安撫心陰虛？", ja: "心陰虚を鎮めるのに最適な食材は？" },
      a: { en: "Traditional choices include lotus seed (lian zi), lily bulb (bai he), floating wheat, red dates (jujube), longan fruit, and goji berries. These are often simmered into sweet soups or congee taken in the evening. The goal is cooling, calming nourishment rather than heavy or heating foods.", "zh-TW": "傳統選擇包括蓮子、百合、浮小麥、紅棗、龍眼和枸杞。這些常在晚上煮成甜湯或粥。目標是清涼安神的滋養，而非油膩或燥熱的食物。", ja: "伝統的な選択は蓮の実（蓮子）、ゆり根（百合）、浮小麦、なつめ（紅棗）、竜眼肉、クコの実です。これらは夕方に甘いスープやお粥として煮込まれます。ねっとりした暑い食材ではなく、冷やし鎮める滋養が目的です。" },
    },
    {
      q: { en: "How are insomnia and anxiety connected to Heart Yin Deficiency?", "zh-TW": "失眠和焦慮與心陰虛有什麼關係？", ja: "不眠や不安は心陰虚とどう関係していますか？" },
      a: { en: "In TCM, the Heart houses the mind (Shen). Heart Yin is the cooling fluid that keeps the mind settled. When Yin is low, empty heat rises and disturbs the Shen, which can show up as a racing mind at bedtime, anxiety, and broken sleep. This is why Heart Yin Deficiency and nighttime anxiety so often appear together.", "zh-TW": "中醫認為心藏神。心陰是讓心神安定的冷卻液體。陰不足時，虛熱上升擾動心神，表現為睡前思緒奔湧、焦慮和睡眠中斷。這就是心陰虛和夜間焦慮常同時出現的原因。", ja: "中医学では心は神（精神）を蔵します。心陰は心を鎮める冷却液です。陰が不足すると虚熱が上がり神を乱し、寝る前の思考の奔走、不安、途中覚醒として現れます。だから心陰虚と夜間の不安は一緒に現れることが多いのです。" },
    },
    {
      q: { en: "Which body type is associated with Heart Yin Deficiency?", "zh-TW": "心陰虛對應什麼體質？", ja: "心陰虚はどの体質に関連していますか？" },
      a: { en: "Heart Yin Deficiency most closely aligns with the Yin Deficient body type (阴虚质) in the nine-constitution system. People of this type tend to run warm, feel dry, and have a sensitive, active mind. Take our free 5-minute quiz to discover if this is your primary type.", "zh-TW": "心陰虛最接近九種體質中的陰虛質（阴虚质）。這類人通常偏熱、乾燥，心思敏感活躍。做我們的免費5分鐘測驗，確認你的主要體質。", ja: "心陰虚は9つの体質の中で陰虚タイプ（陰虚質）に最も近いです。このタイプは暑がりで乾燥し、感受性が高く活発な心を持ちます。無料の5分クイズであなたの主要体質を確認してください。" },
    },
    {
      q: { en: "How long does it take to rebuild Heart Yin with food?", "zh-TW": "用食物修復心陰需要多長時間？", ja: "食事で心陰を回復するのにどのくらいかかりますか？" },
      a: { en: "Most people notice calmer sleep and less anxiety within two to four weeks of consistent dietary changes, while deeper improvement in night sweats and palpitations may take two to three months. Chinese medicine food therapy works gradually by rebuilding the cooling reserve, so consistency matters more than occasional perfect meals.", "zh-TW": "大多數人在持續改變飲食兩到四週後感到睡眠較安穩、焦慮減輕，而盜汗和心悸的深層改善可能需要兩到三個月。中醫食療通過重建冷卻儲備逐步起效，因此堅持比偶爾完美一餐更重要。", ja: "多くの人は食事を2〜4週間続けると睡眠が穏やかになり不安が軽減しますが、寝汗や動悸の深い改善には2〜3ヶ月かかることがあります。中医学の食療は冷却の蓄えを徐々に再構築するため、たまの完璧な食事より継続が重要です。" },
    },
  ],
  "chinese-medicine-for-insomnia": [
    {
      q: { en: "How does Chinese medicine treat insomnia differently from Western medicine?", "zh-TW": "中醫治療失眠和西醫有什麼不同？", ja: "中医学は不眠を西洋医学とどう違う方法で治療しますか？" },
      a: { en: "Western medicine typically treats insomnia with sleep hygiene, CBT, or medications that target the nervous system. Chinese medicine first identifies the underlying pattern causing the mind to stay restless. For example, Heart Yin Deficiency, Liver Fire, or Blood Deficiency each require different foods and habits. The goal is to restore balance so sleep comes naturally rather than forcing the body to shut down.", "zh-TW": "西醫通常用睡眠衛生、認知行為治療或藥物來治療失眠。中醫則先找出讓心神不寧的根本模式。例如心陰虛、肝火或血虛，每種需要不同的食物和習慣。", ja: "西洋医学は通常、睡眠衛生、認知行動療法、または神経系に作用する薬で不眠を治療します。中医学はまず、心神を落ち着かせない根本的なパターンを特定します。" },
    },
    {
      q: { en: "Why do I keep waking up at 3 AM in Chinese medicine?", "zh-TW": "中醫認為為什麼我老是凌晨三點醒來？", ja: "中医学ではなぜ午前3時に目が覚めるのですか？" },
      a: { en: "In the TCM organ clock, 1 to 3 AM is Liver time. Waking during this window may suggest Liver Fire or Liver Qi Stagnation, where stress and frustration held in the body generate heat that disturbs sleep. Waking around 3 to 5 AM is associated with Lung time. Identifying your exact waking time can help narrow down which pattern is involved.", "zh-TW": "在中醫子午流注中，凌晨1到3點是肝經時間。這時段醒來可能表示肝火或肝氣鬱結。3到5點醒來則與肺經有關。", ja: "中医学の経絡時計では、午前1時から3時は肝の時間です。この時間に目が覚めるのは、肝火や肝気鬱結を示唆することがあります。" },
    },
    {
      q: { en: "What foods help with insomnia in Chinese medicine?", "zh-TW": "中醫裡什麼食物有助於睡眠？", ja: "中医学で不眠に良い食材は？" },
      a: { en: "It depends on the pattern. For Heart Yin Deficiency, lotus seed, lily bulb, and wheat may help. For Blood Deficiency, red dates and longan fruit are classic choices. For Liver Fire, chrysanthemum tea is traditionally used. A small bowl of warm millet porridge 1-2 hours before bed may support digestion and sleep for most patterns.", "zh-TW": "取決於體質。心陰虛可用蓮子、百合和小麥。血虛可用紅棗和龍眼。肝火可用菊花茶。睡前1-2小時一小碗溫小米粥適合大多數體質。", ja: "パターンによります。心陰虚には蓮子、ゆり根、小麦が役立つことがあります。血虚にはなつめと竜眼が古典的な選択です。肝火には菊茶が伝統的に使われます。" },
    },
    {
      q: { en: "Can Chinese medicine cure insomnia completely?", "zh-TW": "中醫能完全治癒失眠嗎？", ja: "中医学で不眠を完全に治せますか？" },
      a: { en: "Chinese medicine does not promise a cure for all types of insomnia. For sleep issues related to stress, dietary habits, aging, or constitutional tendencies, food therapy and lifestyle adjustments may lead to significant improvement over weeks to months. For insomnia caused by medical conditions like sleep apnea or thyroid disorders, professional medical treatment is essential and TCM approaches may only serve as a complement.", "zh-TW": "中醫不保證治癒所有類型的失眠。對於與壓力、飲食、老化或體質相關的睡眠問題，食療和生活方式調整可能在數週到數月內帶來顯著改善。對於睡眠呼吸中止症或甲狀腺疾病等引起的失眠，必須接受專業醫療。", ja: "中医学はあらゆるタイプの不眠の治癒を約束するものではありません。ストレス、食習慣、加齢、体質に関連する睡眠問題には、食事療法と生活習慣の調整が数週間から数ヶ月で大幅な改善をもたらす可能性があります。" },
    },
    {
      q: { en: "Which body type is most prone to insomnia?", "zh-TW": "哪種體質最容易失眠？", ja: "どの体質が最も不眠になりやすいですか？" },
      a: { en: "The Yin Deficient and Qi Stagnant body types are most commonly associated with insomnia. Yin Deficient types tend toward Heart Yin patterns with racing mind and night sweats. Qi Stagnant types more often develop Liver-based insomnia with waking between 1 and 3 AM. Take our free 5-minute quiz to discover your type.", "zh-TW": "陰虛質和氣鬱質最常與失眠相關。陰虛質傾向心陰虛模式，思緒奔湧和盜汗。氣鬱質則常發展為肝型失眠，凌晨1到3點醒來。", ja: "陰虚タイプと気鬱タイプが最も不眠と関連しやすいです。陰虚タイプは心陰虚パターンに傾き、気鬱タイプは午前1時から3時の覚醒を伴う肝型不眠を発症しやすいです。" },
    },
  ],
  "chinese-medicine-for-anxiety": [
    {
      q: { en: "How does Chinese medicine treat anxiety differently from Western medicine?", "zh-TW": "中醫治療焦慮和西醫有什麼不同？", ja: "中医学は不安を西洋医学とどう違う方法で治療しますか？" },
      a: { en: "Western medicine typically treats anxiety with therapy or medications that target neurotransmitters in the brain. Chinese medicine first identifies which organ pattern is involved, such as Liver Qi Stagnation or Heart Yin Deficiency, then uses foods and habits aimed at that specific imbalance. The goal is to restore internal balance so the mind settles naturally, rather than only quieting the alarm signal.", "zh-TW": "西醫通常用心理治療或作用於大腦神經傳導物質的藥物來治療焦慮。中醫則先辨別涉及的臟腑模式，例如肝氣鬱結或心陰虛，再用針對該失衡的食物和習慣來調理。目標是恢復內在平衡，讓心神自然安寧，而不只是壓制警報訊號。", ja: "西洋医学は通常、脳の神経伝達物質に作用する心理療法や薬で不安を治療します。中医学はまず肝気鬱結や心陰虚など、どの臓腑パターンが関与しているかを特定し、その不均衡に合わせた食材と習慣を用います。目的は内側のバランスを整えて心神が自然に落ち着くようにすることであり、警報信号を静めるだけではありません。" },
    },
    {
      q: { en: "What are the best calming foods for anxiety in Chinese medicine?", "zh-TW": "中醫裡什麼食物最能安撫焦慮？", ja: "中医学で不安を鎮める最も良い食材は？" },
      a: { en: "It depends on the pattern. For Liver Qi Stagnation, chrysanthemum tea may help move stuck energy. For Heart Yin Deficiency, lotus seed and lily bulb are traditional choices. For Blood Deficiency, red dates and longan fruit help build the Blood that grounds the mind. Warm, simple meals also support the Spleen, which stabilizes the mind through the day.", "zh-TW": "取決於體質。肝氣鬱結可用菊花茶幫助疏通鬱結的能量。心陰虛可用蓮子和百合。血虛可用紅棗和龍眼來生養安神所需的血。溫熱清淡的餐食也能健運脾胃，讓心神在白天保持安穩。", ja: "パターンによります。肝気鬱結には菊茶が滞った気を動かすのに役立つことがあります。心陰虚には蓮子とゆり根が伝統的な選択です。血虚には、心神を安定させる血を作るなつめと竜眼が役立ちます。温かくシンプルな食事は脾も支え、一日を通して心神を安定させます。" },
    },
    {
      q: { en: "Which body type is most prone to anxiety?", "zh-TW": "哪種體質最容易焦慮？", ja: "どの体質が最も不安になりやすいですか？" },
      a: { en: "The Qi Stagnant body type (气郁质) is most commonly associated with anxiety, especially forms that come with irritability, chest tightness, and mood swings. The Yin Deficient type may also experience anxiety with palpitations and a racing mind at night. Take our free 5-minute quiz to find your type.", "zh-TW": "氣鬱體質（气郁质）最常與焦慮相關，尤其是伴隨煩躁、胸悶和情緒波動的類型。陰虛質也可能出現焦慮，伴隨心悸和夜間思緒奔湧。做我們的免費5分鐘測驗，找出你的體質。", ja: "気鬱タイプ（気鬱質）が最も不安と関連しやすく、特にイライラ、胸の圧迫感、気分の波を伴う場合に多いです。陰虚タイプも動悸や夜間の思考の加速を伴う不安を経験することがあります。無料の5分クイズであなたの体質を確認してください。" },
    },
    {
      q: { en: "Can Chinese medicine replace anxiety medication?", "zh-TW": "中醫能取代焦慮藥物嗎？", ja: "中医学は不安の薬に代われますか？" },
      a: { en: "No. Chinese medicine should not replace prescribed anxiety medication or professional therapy. Anxiety disorders are serious medical conditions. Food therapy and lifestyle adjustments may complement professional care, but any change to medication should always be discussed with your prescribing doctor first.", "zh-TW": "不能。中醫不應取代處方焦慮藥物或專業心理治療。焦慮症是嚴重的醫療狀況。食療和生活方式調整可作為專業治療的輔助，但任何藥物調整都應先與開藥醫師討論。", ja: "いいえ。中医学は処方された不安薬や専門的な心理療法に代わるものではありません。不安障害は深刻な医療状態です。食事療法や生活習慣の調整は専門治療を補完する可能性がありますが、薬の変更は必ず処方医と相談してください。" },
    },
    {
      q: { en: "How long does it take to see improvement with Chinese medicine for anxiety?", "zh-TW": "中醫改善焦慮需要多久？", ja: "中医学で不安が改善するまでどのくらいかかりますか？" },
      a: { en: "Many people notice subtle shifts in sleep and tension within two to four weeks of consistent dietary and lifestyle changes. Deeper improvement in patterns like Heart Yin Deficiency may take two to three months. Chinese medicine food therapy works gradually by rebuilding balance, so steady daily practice matters more than occasional effort.", "zh-TW": "許多人持續調整飲食和生活兩到四週後，會感覺睡眠和緊繃感有細微變化。心陰虛等模式的深層改善可能需要兩到三個月。中醫食療通過重建平衡逐步起效，因此每日穩定堅持比偶爾努力更重要。", ja: "多くの人は食事と生活を2〜4週間続けると睡眠や緊張にわずかな変化を感じます。心陰虚などのパターンの深い改善には2〜3ヶ月かかることがあります。中医学の食療はバランスを徐々に再構築するため、たまの努力より毎日の継続が重要です。" },
    },
  ],
  "chinese-medicine-for-fatigue": [
    {
      q: { en: "How does Chinese medicine treat fatigue differently from Western medicine?", "zh-TW": "中醫治療疲勞和西醫有什麼不同？", ja: "中医学は疲労を西洋医学とどう違う方法で治療しますか？" },
      a: { en: "Western medicine tends to look for a specific disease or deficiency, such as a thyroid disorder or low iron. Chinese medicine first asks which organ system is struggling and why. Chronic tiredness may be Spleen Qi Deficiency, Kidney Yang Deficiency, or another pattern entirely, and each calls for different foods and habits. The goal is to rebuild the body's ability to generate energy rather than only masking the tiredness.", "zh-TW": "西醫傾向尋找特定疾病或缺乏，例如甲狀腺問題或缺鐵。中醫則先問哪個臟腑失調以及原因。慢性疲倦可能是脾氣虛、腎陽虛或其他完全不同的模式，每種都需要不同的食物和習慣。目標是重建身體產生能量的能力，而不只是掩蓋疲倦。", ja: "西洋医学は通常、甲状腺の障害や鉄不足など、特定の疾患や欠乏を探します。中医学はまずどの臓腑が弱っているか、そしてその理由を問います。慢性の疲労は脾気虚、腎陽虚、あるいはまったく別のパターンの可能性があり、それぞれに異なる食材と習慣が必要です。目的は、疲労を隠すことではなく、体がエネルギーを生み出す力を再構築することです。" },
    },
    {
      q: { en: "What are the best energy foods for fatigue in Chinese medicine?", "zh-TW": "中醫裡什麼食物最能補充能量？", ja: "中医学で疲労に最も良いエネルギー食材は？" },
      a: { en: "For most Qi and Yang deficient patterns, warm and easily digested foods are the foundation. Rice congee, sweet potato, Chinese dates (jujube), Chinese yam, and ginger tea are traditional choices. Chicken broth and millet porridge may also support the Spleen. Cold drinks, raw salads, and excessive coffee tend to do the opposite and may worsen tiredness over time.", "zh-TW": "對大多數氣虛和陽虛體質來說，溫熱且易消化的食物是基礎。米粥、地瓜、紅棗、山藥和薑茶是傳統選擇。雞湯和小米粥也能健運脾胃。冰水、生沙拉和過量咖啡則相反，長期可能加重疲倦。", ja: "ほとんどの気虚および陽虚パターンでは、温かく消化しやすい食材が基本です。お粥、さつまいも、なつめ、山芋、しょうが茶が伝統的な選択です。鶏スープやきび粥も脾を支えることがあります。冷水、生野菜サラダ、過度なコーヒーは逆効果となり、長期的には疲労を悪化させる可能性があります。" },
    },
    {
      q: { en: "Why am I always tired even after a full night of sleep?", "zh-TW": "為什麼睡滿一整晚還是累？", ja: "たっぷり眠ったのにいつも疲れているのはなぜですか？" },
      a: { en: "In TCM, sleep does not create new energy by itself; the Spleen creates energy from food, and the Kidneys store the body's reserve. If the Spleen is weak, eating may leave you more tired. If the Kidney reserve is depleted, no amount of sleep feels restorative. This is why tiredness that persists despite sleep can be associated with Qi or Yang Deficiency rather than a lack of hours in bed.", "zh-TW": "在中醫裡，睡眠本身不會產生新能量；脾從食物產生能量，腎則儲存身體的儲備。如果脾弱，吃飯反而更累。如果腎的儲備耗盡，再多的睡眠也不覺得恢復。這就是為什麼睡滿了還是累，可能與氣虛或陽虛有關，而不是臥床時數不夠。", ja: "中医学では、睡眠そのものが新しいエネルギーを作るわけではありません。脾が食材からエネルギーを作り、腎が体の予備を蓄えます。脾が弱ければ、食事の後にさらに疲れを感じることがあります。腎の予備が枯渇していれば、どれほど眠っても回復しません。十分眠っても疲れが残るのは、睡眠時間の不足ではなく気虚や陽虚に関連していることがあります。" },
    },
    {
      q: { en: "Which body type is most prone to chronic fatigue?", "zh-TW": "哪種體質最容易慢性疲勞？", ja: "どの体質が最も慢性疲労になりやすいですか？" },
      a: { en: "The Qi Deficient body type is most commonly associated with chronic low energy, especially tiredness after eating, a soft voice, and easy sweating. The Yang Deficient type may feel exhausted and cold at the same time. Take our free 5-minute quiz to find your type and the foods that match it.", "zh-TW": "氣虛體質最常與慢性低能量相關，尤其是飯後疲倦、聲音低弱和容易出汗。陽虛質則可能同時感到疲憊和怕冷。做我們的免費5分鐘測驗，找出你的體質和適合的食物。", ja: "気虚タイプが最も慢性の低エネルギーと関連しやすく、特に食後の疲労、弱い声、汗をかきやすい傾向があります。陽虚タイプは疲労と同時に寒がりです。無料の5分クイズであなたの体質と合う食材を確認してください。" },
    },
    {
      q: { en: "How long does it take to rebuild Qi and energy with food?", "zh-TW": "靠食療重建氣和能量需要多久？", ja: "食事で気とエネルギーを回復するのにどのくらいかかりますか？" },
      a: { en: "Chinese medicine food therapy works gradually by rebuilding the Spleen's ability to generate energy. Many people notice small shifts in morning energy and post-meal heaviness within two to four weeks of consistent warm meals and regular rhythms. Deeper improvement in long-standing Kidney or Spleen patterns may take two to three months. Steady daily practice matters more than occasional effort.", "zh-TW": "中醫食療通過重建脾產生能量的能力而逐步起效。許多人持續溫熱飲食和規律作息兩到四週後，會感覺早晨精神和飯後沉重感有細微變化。長期腎或脾模式的深層改善可能需要兩到三個月。每日穩定堅持比偶爾努力更重要。", ja: "中医学の食療は、脾がエネルギーを作り出す力を徐々に再構築することで作用します。温かい食事と規則正しいリズムを2〜4週間続けると、朝のエネルギーや食後の重さに小さな変化を感じる人が多いです。長年の腎や脾のパターンの深い改善には2〜3ヶ月かかることがあります。たまの努力より毎日の継続が重要です。" },
    },
  ],
  "chinese-medicine-for-weight-loss": [
    {
      q: { en: "How does Chinese medicine approach weight loss?", "zh-TW": "中醫如何看待減重？", ja: "中医学は減量にどのようにアプローチしますか？" },
      a: { en: "TCM does not focus on calorie counting. It looks at why your body holds onto weight, usually pointing to Spleen Dampness, Yang Deficiency, or Qi Stagnation. Food therapy, warm cooked meals, and habits that move fluids are the main tools, and the goal is steadier energy and lighter limbs rather than rapid loss.", "zh-TW": "中醫不著重計算卡路里。它會找出身體留住體重的原因，通常指向脾濕、陽虛或氣滯。", ja: "中医学はカロリー計算に重点を置きません。体が体重を溜め込む理由を探り、通常は脾湿、陽虚、気鬱を指し示します。" },
    },
    {
      q: { en: "Which foods drain dampness best in Chinese medicine?", "zh-TW": "中醫中哪些食物最能排濕？", ja: "中医学で湿気を除くのに最も適した食材は？" },
      a: { en: "Adzuki beans, coix seed (Job's tears), winter melon, lotus leaf tea, and barley tea are among the most commonly recommended damp-draining foods. They are usually eaten warm and cooked, since raw and cold items can add to the very dampness you are trying to clear.", "zh-TW": "紅豆、薏仁、冬瓜、荷葉茶和大麥茶是最常推薦的排濕食物。", ja: "小豆、ハトムギ、冬瓜、蓮葉茶、麦茶が、湿気を除く食材として最もよく勧められます。" },
    },
    {
      q: { en: "Which Chinese medicine body type tends to hold weight?", "zh-TW": "哪種中醫體質容易囤積體重？", ja: "体重を溜め込みやすい中医学の体質は？" },
      a: { en: "The Phlegm Damp body type is most prone to holding weight, because its constitution processes fluids more slowly and dampness builds easily. Yang Deficient types can also carry cold-type weight, and Qi Stagnant types may gain weight through emotional eating. Our free body type quiz can help identify your pattern.", "zh-TW": "痰濕體質最容易囤積體重。陽虛體質也可能帶有寒性體重，氣鬱體質則可能因情緒性進食而增重。", ja: "痰湿タイプが最も体重を溜め込みやすいです。陽虚タイプも寒性の体重を抱えやすく、気鬱タイプは感情的な食べ過ぎで太ることがあります。" },
    },
    {
      q: { en: "Is acupuncture helpful for weight loss?", "zh-TW": "針灸對減重有幫助嗎？", ja: "鍼灸は減量に効果がありますか？" },
      a: { en: "Acupuncture is sometimes used alongside food therapy to support digestion and reduce cravings, though results vary and it is not a standalone solution. If you try it, look for a licensed practitioner and pair it with diet and lifestyle changes rather than expecting results on its own.", "zh-TW": "針灸有時會與食療搭配，用來支持消化並減少嘴饞，但效果因人而異，並非獨立的解決方案。", ja: "鍼灸は食養生と併せて消化を支え、食欲を抑えるために使われることがありますが、効果には個人差があり、単独の解決策ではありません。" },
    },
    {
      q: { en: "How long does it take to see results with Chinese medicine for weight loss?", "zh-TW": "用中醫減重多久能看到效果？", ja: "中医学での減量は結果が出るまでどのくらいかかりますか？" },
      a: { en: "TCM works gradually, and most people notice changes in energy, digestion, and the feeling of heaviness over several weeks to a few months before seeing shifts on the scale. Rapid loss is not the aim, and consistency with foods and habits matters more than any single remedy.", "zh-TW": "中醫作用溫和，多數人在幾週到幾個月內會先察覺到能量、消化和沉重感改善。快速減重並非目標。", ja: "中医学はゆっくりと働き、ほとんどの人は体重計の変化よりも先に、数週間から数か月でエネルギー、消化、だるさの改善に気づきます。" },
    },
  ],
  "chinese-medicine-for-acne": [
    {
      q: { en: "How does Chinese medicine treat acne differently from Western skincare?", "zh-TW": "中醫治療痘痘和西醫保養有什麼不同？", ja: "中医学はニキビを西洋のスキンケアとどう違う方法で扱いますか？" },
      a: { en: "Western skincare usually targets the surface, drying out each blemish with topical products. Chinese medicine looks at the internal pattern behind the breakout, most often Heat and Damp-Heat rising to the face, and uses cooling foods and habits to address that root. The two approaches can work well together.", "zh-TW": "西醫保養通常針對表面。中醫看痘痘背後的內在模式，最常見的是熱和濕熱上蒸到臉部。", ja: "西洋のスキンケアは通常、表面を狙います。中医学はニキビの背後にある内側のパターンを見ます。" },
    },
    {
      q: { en: "What are the best cooling foods for acne in Chinese medicine?", "zh-TW": "中醫裡對痘痘最好的清熱食物是什麼？", ja: "中医学でニキビに最も良い冷性食材は？" },
      a: { en: "Mung beans, green tea, cucumber, pear, lotus root, bitter gourd, and winter melon are among the most used cooling foods. They help clear Heat and drain Dampness, the two forces most often linked to inflamed breakouts. Small regular portions work better than occasional large ones.", "zh-TW": "綠豆、綠茶、黃瓜、梨、蓮藕、苦瓜和冬瓜是最常用的清熱食物。", ja: "緑豆、緑茶、きゅうり、梨、レンコン、ゴーヤ、トウガンは最もよく使われる冷性食材です。" },
    },
    {
      q: { en: "Which Chinese medicine body type is most prone to acne?", "zh-TW": "哪種中醫體質最容易長痘？", ja: "どの中医学の体質が最もニキビが出やすいですか？" },
      a: { en: "The Damp Heat body type is the constitution most prone to acne. People with this type tend to run warm and slightly sticky, especially in humid weather. About 8 percent of people fall into this group. You can check your own type with our free body type quiz.", "zh-TW": "濕熱體質最容易長痘。約8%的人屬於這一類。", ja: "湿熱タイプが最もニキビが出やすい体質です。約8%の人がこのグループに入ります。" },
    },
    {
      q: { en: "Why do I get acne on my jaw line before my period?", "zh-TW": "為什麼經期前會在顎線長痘？", ja: "なぜ生理前に顎ラインにニキビができるのですか？" },
      a: { en: "In Chinese medicine, the jaw line and chin map to the Liver and Kidney systems, which shift with the menstrual cycle. Hormonal changes before a period can stir up Liver Fire or add to Damp-Heat. Tracking breakouts alongside your cycle may help reduce flare-ups.", "zh-TW": "在中醫裡，下巴和顎線對應肝和腎，會隨月經週期變化。經期前的荷爾蒙波動可能助長肝火或加重濕熱。", ja: "中医学では、顎ラインとあごは肝と腎の系統に対応し、月経周期で変化します。生理前のホルモンの変動が肝火を煽ったり湿熱を加えたりします。" },
    },
    {
      q: { en: "How long does it take to see clearer skin with Chinese medicine foods?", "zh-TW": "吃中醫食療多久能看到膚質改善？", ja: "中医学の食事で肌がきれいになるまでどのくらいかかりますか？" },
      a: { en: "Surface changes, like less oiliness and fewer new blemishes, may appear within one to three weeks of consistent cooling foods and steadier sleep. Deeper changes, such as fewer cystic breakouts and lighter marks, usually take two to three months because the work happens from the inside out.", "zh-TW": "出油減少、新痘痘變少等表面變化，可能在持續一到三週內出現。更深層的改變通常需要兩到三個月。", ja: "皮脂の減少や新しいニキビの減少など表面の変化は、1〜3週間で現れることがあります。より深い変化には通常2〜3ヶ月かかります。" },
    },
  ],
  "chinese-medicine-for-menopause": [
    {
      q: { en: "How does Chinese medicine view menopause?", "zh-TW": "中醫如何看待更年期？", ja: "中医学では更年期をどう捉えていますか？" },
      a: { en: "Chinese medicine sees menopause as a natural transition, not a disease. It is linked to a gradual decline of Kidney Yin, the body's cooling and moistening energy. As Yin thins, internal heat has less restraint, which can produce hot flashes, night sweats, and dryness. Food therapy, rest, and calmer routines are the traditional ways to ease the shift.", "zh-TW": "中醫將更年期視為自然的過渡，而非疾病。它與腎陰逐漸衰退有關。陰一減少，內熱便缺少制約。", ja: "中医学では更年期を病気ではなく自然な移行とみなします。体を冷やし潤すエネルギーである腎陰の低下と関係しています。" },
    },
    {
      q: { en: "What are the best foods for hot flashes in TCM?", "zh-TW": "中醫裡緩解潮熱最好的食物是什麼？", ja: "中医学でほてりに良い食材は何ですか？" },
      a: { en: "Cooling and moistening foods are the first choice. Black sesame seeds, tofu and soy products, goji berries, mung beans, pear, and mulberry may help reduce internal heat. Avoid spicy food, alcohol, and excess coffee.", "zh-TW": "清涼滋潤的食物是首選。黑芝麻、豆腐、枸杞、綠豆、梨子和桑椹。", ja: "体を冷やし潤す食材が第一の選択です。黒ゴマ、豆腐、クコの実、緑豆、梨、クワの実など。" },
    },
    {
      q: { en: "How long does the menopause transition last?", "zh-TW": "更年期過渡期會持續多久？", ja: "更年期の移行期間はどのくらい続きますか？" },
      a: { en: "The transition often lasts several years. Perimenopause can begin in the early 40s, and the full process may span 7 to 10 years. Symptoms tend to peak around the final period and then ease.", "zh-TW": "通常持續數年。圍絕經期可能從四十歲出頭開始。", ja: "移行はたいてい数年続きます。40代前半に始まることもあります。" },
    },
    {
      q: { en: "Which Chinese medicine body type is most linked to menopause symptoms?", "zh-TW": "哪一種中醫體質與更年期症狀最相關？", ja: "更年期症状と最も関連しやすい中医学の体質はどれですか？" },
      a: { en: "The Yin Deficient body type. Women with this constitution tend to run warm, sleep lightly, and sweat easily even before midlife. Take our free body type quiz to see if this matches your baseline.", "zh-TW": "是陰虛體質。這類體質的女性偏怕熱、睡得淺。", ja: "陰虚タイプです。この体質の方は暑がりで眠りが浅い傾向があります。" },
    },
    {
      q: { en: "How is Chinese medicine different from HRT for menopause?", "zh-TW": "中醫與荷爾蒙療法治療更年期有何不同？", ja: "更年期に対する中医学とホルモン補充療法の違いは？" },
      a: { en: "HRT uses estrogen or other hormones to adjust the body's chemistry directly. Chinese medicine instead works with food, lifestyle, and constitution to cool heat and rebuild moistening energy. TCM may complement HRT but does not replace medical treatment.", "zh-TW": "荷爾蒙療法直接調節身體的化學狀態。中醫則透過飲食和生活方式來清熱。中醫可作為輔助。", ja: "ホルモン補充療法はホルモンで直接調整します。中医学は食事と生活習慣で熱を冷やします。" },
    },
  ],
  "chinese-medicine-for-constipation": [
    {
      q: { en: "How does Chinese medicine treat constipation differently from laxatives?", "zh-TW": "中醫治療便秘和吃瀉藥有什麼不同？", ja: "中医学は便秘を下剤とどう違う方法で治療しますか？" },
      a: { en: "Laxatives usually force a bowel movement without asking why it is slow. Chinese medicine first asks which pattern is behind it. Hard dry stools with thirst may point to Heat, straining with fatigue may point to Qi Deficiency, and a tense bloated gut may point to Qi Stagnation. Each calls for different foods.", "zh-TW": "瀉藥直接促進排便而不探究原因。中醫則先找出背後的模式。", ja: "下剤は理由を問わず排便を促します。中医学はまず背後にあるパターンを問います。" },
    },
    {
      q: { en: "What are the best moistening foods for constipation?", "zh-TW": "中醫裡對便秘最好的潤腸食物有哪些？", ja: "中医学で便秘に最も良い潤い食材は？" },
      a: { en: "For dry-type constipation, black sesame seeds, honey in warm water, pear, ripe banana, and sweet almond are among the most used moistening foods. They add fluids to the intestine and help soften the stool.", "zh-TW": "黑芝麻、溫水蜂蜜、梨、熟香蕉和甜杏仁是最常用的潤腸食物。", ja: "黒ごま、ぬるま湯の蜂蜜、梨、熟したバナナ、甜杏仁がよく使われます。" },
    },
    {
      q: { en: "Why am I always constipated according to Chinese medicine?", "zh-TW": "為什麼中醫說我總是便秘？", ja: "中医学では、なぜいつも便秘なのですか？" },
      a: { en: "Chronic constipation in TCM usually traces to too little warmth and moisture, too little Qi to push, or blocked flow from stress and sitting. Identifying which dominates helps guide the right foods and habits.", "zh-TW": "通常源自溫度和水分不足、推動力不夠，或壓力和久坐造成的氣滯。", ja: "温さと水分の不足、気の不足、またはストレスや座りすぎによる気の滞りに遡ります。" },
    },
    {
      q: { en: "Which body type is most prone to constipation?", "zh-TW": "哪種體質最容易便秘？", ja: "どの体質が最も便秘になりやすいですか？" },
      a: { en: "Constipation is common in the Qi Deficient type (low pushing power) and the Qi Stagnant type (tension blocks flow). Dry-type can also show up in types that run warm and dry.", "zh-TW": "氣虛質和氣鬱質最常見。", ja: "気虚タイプと気鬱タイプに多いです。" },
    },
    {
      q: { en: "How long does it take to improve constipation with Chinese medicine foods?", "zh-TW": "用中醫食療改善便秘需要多久？", ja: "中医学の食事で便秘が改善するまでどのくらいかかりますか？" },
      a: { en: "Many people notice small shifts in ease and regularity within one to two weeks. Deeper improvement may take one to two months, since the body is rebuilding fluids and pushing power rather than forcing a result.", "zh-TW": "一到兩週內可能察覺改善。深層改善可能需要一到兩個月。", ja: "1〜2週間で小さな変化を感じることが多いです。深い改善には1〜2ヶ月かかることがあります。" },
    },
  ],
  "chinese-medicine-for-pcos": [
    {
      q: { en: "How does Chinese medicine view PCOS?", "zh-TW": "中醫如何看待 PCOS？", ja: "中医学はPCOSをどう見ていますか？" },
      a: { en: "TCM does not use the term PCOS. It reads the symptom cluster as a Phlegm Dampness pattern obstructing the lower body, often combined with Kidney deficiency and Liver Qi stagnation. A weak Spleen produces dampness that may settle in the pelvic region.", "zh-TW": "中醫不使用 PCOS 這個詞。它把症狀群看成痰濕阻滯下半身。", ja: "TCMはPCOSという言葉を使いません。症状のセットを痰湿のパターンとして読みます。" },
    },
    {
      q: { en: "What are the best damp-draining foods for PCOS?", "zh-TW": "對 PCOS 最好的利濕食物是什麼？", ja: "PCOSに最適な湿を除く食材は？" },
      a: { en: "Adzuki beans, coix seed (Job's tears), winter melon, and barley tea are among the most-used foods for draining dampness. Limiting dairy and refined sugar is just as important as what you add.", "zh-TW": "紅豆、薏仁、冬瓜和大麥茶是最常用的利濕食物。", ja: "小豆、ハトムギ、冬瓜、麦茶がよく使われます。" },
    },
    {
      q: { en: "Can Chinese medicine cure PCOS?", "zh-TW": "中醫能治癒 PCOS 嗎？", ja: "中医学はPCOSを治癒できますか？" },
      a: { en: "No. PCOS requires medical diagnosis and management. TCM food therapy may complement your medical care and support how your body feels, but it does not replace endocrinology care.", "zh-TW": "不能。PCOS 需要醫療診斷和管理。中醫食療可以輔助。", ja: "いいえ。PCOSは医療の診断と管理が必要です。中医学は補助となります。" },
    },
    {
      q: { en: "Which body type is associated with PCOS?", "zh-TW": "PCOS 對應哪種體質？", ja: "PCOSはどの体質に関連していますか？" },
      a: { en: "PCOS is most often associated with the Phlegm Damp body type. Take our free 5-minute quiz to see whether this matches your constitution.", "zh-TW": "最常對應痰濕體質。", ja: "最も多く痰湿タイプに関連します。" },
    },
    {
      q: { en: "How long might it take to see cycle improvement with TCM foods?", "zh-TW": "中醫食療多久可能改善月經週期？", ja: "中医学の食事療法で周期が改善するまでどのくらいかかりますか？" },
      a: { en: "Changes tend to appear over weeks or months. Some people notice lighter fluid retention within weeks, while cycle timing may take months. Results vary, and consistency matters more than any single food.", "zh-TW": "變化通常在幾週到幾個月內出現。", ja: "変化は数週間から数ヶ月で現れる傾向があります。" },
    },
  ],
  "chinese-medicine-for-digestion": [
    {
      q: { en: "How does Chinese medicine treat digestion problems?", "zh-TW": "中醫如何治療消化問題？", ja: "中医学は消化の問題をどのように治療しますか？" },
      a: { en: "TCM treats digestion by strengthening the Spleen and Stomach rather than only easing symptoms. Most cases are Spleen Qi Deficiency, so treatment focuses on warm, cooked foods, regular meal times, and avoiding ice water and raw salads.", "zh-TW": "從健脾和胃著手。多數屬脾氣虛，重點是溫熱熟食和定時用餐。", ja: "脾と胃を強めることで治療します。多くは脾気虚なので、温かい食材と規則正しい食事が中心です。" },
    },
    {
      q: { en: "What are the best Chinese medicine foods for bloating?", "zh-TW": "中醫最好的消脹食物有哪些？", ja: "中医学で膨満感に最も良い食材は？" },
      a: { en: "Warm, cooked foods that strengthen the Spleen and move Qi may help most. Rice congee, ginger tea, fennel seed tea, cooked Chinese yam, and millet porridge are common choices.", "zh-TW": "米粥、薑茶、茴香籽茶、煮熟的山藥和小米粥。", ja: "お粥、しょうが茶、フェンネルティー、山芋、粟粥が一般的です。" },
    },
    {
      q: { en: "Why do I feel tired after eating in Chinese medicine?", "zh-TW": "中醫為什麼飯後會累？", ja: "中医学で食後に疲れるのはなぜ？" },
      a: { en: "Feeling heavy and tired after meals is a classic sign of Spleen Qi Deficiency. The Spleen lacks the strength to process food efficiently. Smaller warm meals and thorough chewing may help.", "zh-TW": "飯後疲倦是脾氣虛的典型表現。少量溫熱餐點和充分咀嚼有幫助。", ja: "食後のだるさは脾気虚の典型的なサインです。" },
    },
    {
      q: { en: "Which body type has the weakest digestion?", "zh-TW": "哪種體質消化最弱？", ja: "消化が最も弱い体質はどれ？" },
      a: { en: "The Qi Deficient body type tends to have the most sensitive digestion, with easy bloating, loose stools, and tiredness after eating. Take our free quiz to check.", "zh-TW": "氣虛體質通常消化最敏感。", ja: "気虚タイプが最も消化が敏感な傾向があります。" },
    },
    {
      q: { en: "How long does it take to fix digestion with Chinese medicine?", "zh-TW": "中醫調理消化要多久？", ja: "中医学で消化を改善するのにどのくらいかかりますか？" },
      a: { en: "Many people notice less bloating within 2 to 4 weeks. Deeper changes like stronger appetite and regular bowel habits may take 2 to 3 months.", "zh-TW": "2到4週內可能減少腹脹。深層改善需要2到3個月。", ja: "2〜4週間で膨満感が軽減することが多いです。深い変化には2〜3ヶ月かかる場合があります。" },
    },
  ],
  "chinese-medicine-for-hot-flashes": [
    {
      q: { en: "What causes hot flashes in Chinese medicine?", "zh-TW": "中醫認為熱潮紅是什麼原因？", ja: "中医学ではほてりの原因は何ですか？" },
      a: { en: "TCM attributes most hot flashes to Yin Deficiency with empty heat. When Kidney Yin runs low, the warming force of Yang has nothing to anchor it, and heat rises upward suddenly. This is most common during perimenopause and menopause.", "zh-TW": "多數來自陰虛伴隨虛熱。腎陰不足時陽熱無所依附。", ja: "多くは陰虚に伴う虚熱に起因します。" },
    },
    {
      q: { en: "What are the best cooling foods for hot flashes?", "zh-TW": "中醫裡對熱潮紅最好的清熱食物是什麼？", ja: "中医学でほてりに最も良い冷性食材は？" },
      a: { en: "Mung beans, cucumber, pear, watermelon, lotus root, black sesame, tofu, mulberry, and mint tea are among the most used cooling foods. Small regular portions work better than large occasional ones.", "zh-TW": "綠豆、黃瓜、梨、西瓜、蓮藕、黑芝麻、豆腐、桑椹和薄荷茶。", ja: "緑豆、きゅうり、梨、スイカ、レンコン、黒ゴマ、豆腐、クワの実、ミント茶です。" },
    },
    {
      q: { en: "How long do hot flashes last?", "zh-TW": "熱潮紅會持續多久？", ja: "ほてりはどのくらい続きますか？" },
      a: { en: "Hot flashes often last several years around menopause. Chinese medicine focuses on rebuilding cooling reserves, since the flashes tend to ease as Yin is gradually restored through food and rest.", "zh-TW": "常在更年期前後持續數年。中醫著重逐步修復降溫儲備。", ja: "更年期前後で数年続くことが多いです。" },
    },
    {
      q: { en: "Which body type is most prone to hot flashes?", "zh-TW": "哪種體質最容易有熱潮紅？", ja: "どの体質が最もほてりが出やすいですか？" },
      a: { en: "The Yin Deficient body type. People with this constitution tend to run warm, feel dry, and sweat easily even before midlife.", "zh-TW": "陰虛體質。偏熱偏乾。", ja: "陰虚タイプです。" },
    },
    {
      q: { en: "What is the difference between hot flashes and night sweats in TCM?", "zh-TW": "中醫裡熱潮紅和夜間盜汗有什麼不同？", ja: "中医学でほてりと寝汗の違いは？" },
      a: { en: "Both stem from empty heat rising when Yin is low. Hot flashes are sudden waves during the day. Night sweats are the same heat breaking out as sweating during sleep.", "zh-TW": "都源自陰虛虛熱。熱潮紅在白天，盜汗在夜間睡眠時。", ja: "どちらも陰虚の虚熱に由来します。ほてりは日中、寝汗は睡眠中です。" },
    },
  ],
  "chinese-medicine-for-acid-reflux": [
    {
      q: { en: "What does Chinese medicine say causes acid reflux?", "zh-TW": "中醫認為胃酸倒流是什麼原因？", ja: "中医学では胃酸逆流の原因を何としていますか？" },
      a: { en: "In TCM, acid reflux usually means the Stomach's downward flow has reversed. The most common patterns are Stomach Heat and Liver Qi invading the Stomach from stress.", "zh-TW": "通常表示胃氣反向上逆。最常見的是胃熱和肝氣犯胃。", ja: "通常、胃の下降流が逆転した状態を意味します。最も多いのは胃熱と肝気の胃への侵入です。" },
    },
    {
      q: { en: "What foods help acid reflux in Chinese medicine?", "zh-TW": "中醫說胃酸倒流吃什麼好？", ja: "中医学で胃酸逆流に良い食材は？" },
      a: { en: "Cooling, moistening foods like mung bean soup, pear, lotus root, and millet porridge may help calm stomach fire. Chinese yam and papaya are gentler options.", "zh-TW": "綠豆湯、梨、蓮藕和小米粥。山藥和木瓜較溫和。", ja: "緑豆スープ、梨、レンコン、粟粥が胃火を鎮めるのに役立ちます。" },
    },
    {
      q: { en: "Is acid reflux always Stomach Heat in TCM?", "zh-TW": "胃酸倒流在中醫一定是胃熱嗎？", ja: "中医学で胃酸逆流は必ず胃熱ですか？" },
      a: { en: "No. Stomach Heat is most common, but reflux can also come from Liver Qi invading the Stomach, food stagnation, or Spleen Qi Deficiency. The right foods depend on the pattern.", "zh-TW": "不一定。也可能是肝氣犯胃、食積或脾氣虛。", ja: "いいえ。肝気の侵入、食滞、脾気虚からも来ます。" },
    },
    {
      q: { en: "What foods should I avoid with acid reflux?", "zh-TW": "胃酸倒流要避免什麼食物？", ja: "胃酸逆流で避けるべき食材は？" },
      a: { en: "Limit spicy food, alcohol, strong coffee, fried dishes, and excessive citrus. Finish dinner at least three hours before bed to reduce night-time reflux.", "zh-TW": "限制辛辣食物、酒精、濃咖啡、油炸食物。睡前至少三小時吃完晚餐。", ja: "辛いもの、アルコール、濃いコーヒー、揚げ物を控えてください。" },
    },
    {
      q: { en: "When should I see a doctor for acid reflux?", "zh-TW": "胃酸倒流何時該看醫生？", ja: "胃酸逆流でいつ医師に診てもらうべき？" },
      a: { en: "See a doctor if reflux is frequent, wakes you at night, or does not improve with diet changes. Chronic acid exposure can be associated with GERD or Barrett's esophagus.", "zh-TW": "如果頻繁、夜間痛醒或改變飲食後仍無改善，請看醫生。", ja: "頻繁な場合や夜間に目が覚める場合は医師にご相談ください。" },
    },
  ],
  "chinese-medicine-for-bloating": [
    {
      q: { en: "Why am I always bloated according to Chinese medicine?", "zh-TW": "中醫認為為什麼總是腹脹？", ja: "中医学では、なぜいつもお腹が張るのですか？" },
      a: { en: "Chronic bloating usually means the Spleen cannot fully process food and fluids. The two main patterns are Spleen Qi Deficiency and Liver Qi Stagnation, each needing different foods.", "zh-TW": "通常表示脾無法完全處理食物和水分。兩大主證是脾氣虛和肝氣鬱結。", ja: "通常、脾が完全に処理できないことを意味します。主な二つは脾気虚と肝気鬱結です。" },
    },
    {
      q: { en: "What foods help reduce bloating in Chinese medicine?", "zh-TW": "中醫說腹脹吃什麼好？", ja: "中医学でお腹の張りに良い食材は？" },
      a: { en: "Warm, cooked, gently moving foods are the main direction. Ginger tea, fennel seed tea, millet porridge, and Chinese yam may help the Spleen digest and move gas.", "zh-TW": "薑茶、茴香籽茶、小米粥和山藥。", ja: "しょうが茶、フェンネルティー、粟粥、山芋などです。" },
    },
    {
      q: { en: "Is bloating a sign of Spleen Qi Deficiency?", "zh-TW": "腹脹是脾氣虛的徵兆嗎？", ja: "お腹の張りは脾気虚の兆候ですか？" },
      a: { en: "It can be. Bloating after eating with fatigue and loose stools may point to Spleen Qi Deficiency. Bloating that fluctuates with mood is more likely Liver Qi Stagnation.", "zh-TW": "有可能。飯後腹脹伴疲勞可能是脾氣虛。隨情緒變化的腹脹更可能是肝氣鬱結。", ja: "可能性があります。食後の張りに疲労を伴う場合は脾気虚のことがあります。" },
    },
    {
      q: { en: "What foods cause bloating in TCM?", "zh-TW": "中醫認為什麼食物會引起腹脹？", ja: "中医学で腹張りの原因となる食材は？" },
      a: { en: "Ice water, raw cold salads, excessive unsoaked beans, dairy, carbonated drinks, and chewing gum tend to cause bloating. Eating too fast and irregular meal times also contribute.", "zh-TW": "冰水、生冷沙拉、豆類、乳製品、碳酸飲料。", ja: "氷水、生野菜サラダ、豆類、乳製品、炭酸飲料などです。" },
    },
    {
      q: { en: "Does stress cause bloating in Chinese medicine?", "zh-TW": "中醫認為壓力會引起腹脹嗎？", ja: "中医学ではストレスは腹張りの原因になりますか？" },
      a: { en: "Yes. The Liver keeps energy flowing and is sensitive to mood. Stress can tighten that flow so energy stagnates around the gut, producing bloating that comes and goes with emotion.", "zh-TW": "會。壓力讓肝氣鬱結，能量在腸胃周圍停滯。", ja: "はい。ストレスが気の流れを締め付け、腸の周りで滞らせます。" },
    },
  ],
}
