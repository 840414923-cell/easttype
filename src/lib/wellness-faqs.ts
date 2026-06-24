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
}
