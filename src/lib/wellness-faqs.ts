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
      a: { en: "Yes, and many practitioners encourage it. Use Western medicine for diagnosis and acute conditions. Use Eastern wellness approaches for daily management, prevention, and chronic low-grade symptoms. The key is keeping both practitioners informed about what the other is recommending, especially if you are taking herbs alongside prescription medications, as some interactions are possible.", "zh-TW": "可以，許多從業者鼓勵這樣做。用西醫做診斷和急性問題。用東方養生方法做日常管理、預防和慢性輕微症狀。關鍵是讓兩邊的從業者都知道對方的建議，特別是如果你在服用處方藥的同時使用草藥，因為有些交互作用是可能的。", ja: "はい、多くの実践者が推奨しています。西洋医学は診断と急性症状に。東洋養生法は日常管理、予防、慢性の軽い症状に。両方の実践者に互いの推奨を伝えることが重要です。処方薬とハーブの併用時は相互作用に注意。" },
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
}
