import type { FaqItem } from "./wellness-faqs"

export const PATTERN_FAQS: Record<string, FaqItem[]> = {
  "low-vitality": [
    {
      q: { en: "What is the Low Vitality pattern in Chinese medicine?", "zh-TW": "什麼是中醫的低活力體質？", ja: "中医学の低活力パターンとは？" },
      a: { en: "The Low Vitality pattern is the everyday-language name for what Chinese medicine calls Qi Deficiency. It describes a state where your body's vital energy is consistently low. Nothing is broken, but everything takes more effort than it should. Think of it as running on a smaller battery than other people.", "zh-TW": "低活力體質是中醫「氣虛」的日常說法。它描述一種生命能量持續偏低的狀態。沒有東西壞掉，但每件事都比別人費力。想像你用的是比別人小的電池。", ja: "低活力パターンは、中医学で「気虚」と呼ばれる状態の日常的な表現です。体の生命エネルギーが常に低い状態を指します。壊れているわけではないが、全てに人より多くの労力が必要。他人より小さいバッテリーで動いていると考えてください。" },
    },
    {
      q: { en: "How is the Low Vitality pattern different from just being tired?", "zh-TW": "低活力體質跟單純的累有什麼不同？", ja: "低活力パターンと単なる疲労の違いは？" },
      a: { en: "Everyone gets tired. The Low Vitality pattern is different because the fatigue is persistent, doesn't improve much with sleep, and comes with other signs like a soft voice, easy sweating, frequent colds, and low motivation. It's a cluster of symptoms that form a pattern, not a single complaint.", "zh-TW": "每個人都會累。低活力體質不同，因為疲勞是持續的、睡覺改善有限，還伴隨聲音輕柔、容易出汗、常感冒、動力低等其他信號。它是一群症狀組成的模式，不是單一抱怨。", ja: "誰でも疲れます。低活力パターンが違うのは、疲労が持続的で睡眠であまり改善せず、声が小さい、汗をかきやすい、風邪を引きやすい、モチベーションが低いなどのサインを伴う点です。単一の不調ではなく、症状のクラスターがパターンを形成しています。" },
    },
    {
      q: { en: "Can the Low Vitality pattern be improved through food?", "zh-TW": "低活力體質可以通過食物改善嗎？", ja: "低活力パターンは食事で改善できますか？" },
      a: { en: "Yes, food is considered the primary tool in TCM for supporting Qi. Warm, cooked, easy-to-digest meals like congee, soups, and stews form the foundation. Specific Qi-supporting foods include jujube dates, sweet potato, ginger, goji berries, and chicken broth. Most people notice a real difference within 2 to 3 weeks of consistent dietary changes.", "zh-TW": "可以，中醫認為食物是補氣的主要工具。溫熱、煮熟、易消化的餐點如粥、湯和燉菜是基礎。特定的補氣食物包括紅棗、地瓜、薑、枸杞和雞湯。大多數人在持續飲食調整2到3週內能感覺到真正的改變。", ja: "はい、中医学では食べ物が気をサポートする主要な手段とされています。温かい調理済みで消化しやすい食事（お粥、スープ、シチュー）が基礎です。気を補う特定の食材にはなつめ、さつまいも、しょうが、クコの実、鶏スープがあります。多くの人は2〜3週間の継続で本当の変化に気づきます。" },
    },
    {
      q: { en: "Which body type is most connected to the Low Vitality pattern?", "zh-TW": "低活力體質最對應哪種體質？", ja: "低活力パターンに最も関連する体質は？" },
      a: { en: "The Qi Deficient body type (气虚质) is the primary match. About 15% of people fall into this category. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "氣虛體質（气虚质）是主要對應。大約15%的人屬於此類。做 EastType 免費測驗，確認你的體質並獲得個人化食物建議。", ja: "気虚タイプ（気虚質）が主な該当です。約15%の人がこのカテゴリーに当てはまります。EastTypeの無料クイズであなたのタイプを見つけ、パーソナライズされた食材を入手してください。" },
    },
  ],
  "cold-sensitivity": [
    {
      q: { en: "What is the Cold Sensitivity pattern in Chinese medicine?", "zh-TW": "什麼是中醫的怕冷體質？", ja: "中医学の冷え性パターンとは？" },
      a: { en: "The Cold Sensitivity pattern is the everyday-language name for what Chinese medicine calls Yang Deficiency. Yang is your body's warming, activating force. When Yang is low, your body prioritizes keeping your core warm and cuts heat to your hands and feet. The result is chronically cold extremities even when the room is comfortable.", "zh-TW": "怕冷體質是中醫「陽虛」的日常說法。陽是你身體的溫暖和活化力量。陽不足時，身體優先保持核心溫暖，減少手腳的供熱。結果就是即使在舒適的房間裡，四肢也長期冰冷。", ja: "冷え性パターンは、中医学で「陽虚」と呼ばれる状態の日常的な表現です。陽とは体を温め活性化する力。陽が不足すると、体は核心部の保温を優先し、手足への熱供給を減らします。結果として、部屋が快適でも四肢が慢性的に冷たくなります。" },
    },
    {
      q: { en: "Why are my hands and feet always cold but my blood tests are normal?", "zh-TW": "為什麼手腳總是冰冷但血液檢查正常？", ja: "なぜ手足がいつも冷たいのに血液検査は正常？" },
      a: { en: "This is actually very common. Blood tests measure structural health — iron levels, thyroid function, vitamin status. Yang Deficiency is a functional energy pattern. Your body works, but its heating system is running on low power. Think of it as a house with a functioning heater that's just too small for the space.", "zh-TW": "這其實很常見。血液檢查測量的是結構性健康 — 鐵含量、甲狀腺功能、維生素狀態。陽虛是功能性能量模式。身體能用，但暖氣系統在低功率運行。想像一棟房子有暖氣但太小了。", ja: "これは実際に非常に一般的です。血液検査は構造的健康を測定します — 鉄分レベル、甲状腺機能、ビタミン状態。陽虚は機能的エネルギーパターンです。体は機能するが、暖房システムが低出力で稼働している。空間に対して小さすぎる暖房機のある家を想像してください。" },
    },
    {
      q: { en: "What foods help with the Cold Sensitivity pattern?", "zh-TW": "什麼食物對怕冷體質有幫助？", ja: "冷え性パターンに効く食材は？" },
      a: { en: "Warming foods are key: ginger, cinnamon, lamb, beef, black pepper, roasted nuts, fennel, and onion. Equally important is avoiding cold and raw foods — ice water, raw salads, smoothies, and excessive fruit can make cold sensitivity worse over time.", "zh-TW": "溫性食物是關鍵：薑、肉桂、羊肉、牛肉、黑胡椒、烤堅果、茴香和洋蔥。同樣重要的是避免寒涼生食 — 冰水、生沙拉、冰沙和過量水果會讓怕冷的情況隨時間惡化。", ja: "温性食材が鍵：しょうが、シナモン、羊肉、牛肉、黒胡椒、ローストナッツ、フェンネル、玉ねぎ。同様に重要なのは冷たい生食を避けること — 氷水、生野菜サラダ、スムージー、過度な果物は長期的に冷え性を悪化させる可能性があります。" },
    },
    {
      q: { en: "Which body type is most connected to the Cold Sensitivity pattern?", "zh-TW": "怕冷體質最對應哪種體質？", ja: "冷え性パターンに最も関連する体質は？" },
      a: { en: "The Yang Deficient body type (阳虚质) is the primary match. About 10% of people fall into this category. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "陽虛體質（阳虚质）是主要對應。大約10%的人屬於此類。做 EastType 免費測驗，確認你的體質並獲得個人化食物建議。", ja: "陽虚タイプ（陽虚質）が主な該当です。約10%の人がこのカテゴリーに当てはまります。EastTypeの無料クイズであなたのタイプを見つけ、パーソナライズされた食材を入手してください。" },
    },
  ],
  "internal-heat": [
    {
      q: { en: "What is the Internal Heat pattern in Chinese medicine?", "zh-TW": "什麼是中醫的內熱體質？", ja: "中医学の内熱パターンとは？" },
      a: { en: "The Internal Heat pattern is the everyday-language name for what Chinese medicine calls Yin Deficiency. Yin is your body's cooling, moistening force. When Yin is low, internal heat builds up, especially at night. You might feel hot when others are fine, sweat during sleep, or have a dry mouth that water doesn't fix.", "zh-TW": "內熱體質是中醫「陰虛」的日常說法。陰是你身體的冷卻和潤澤力量。陰不足時，內熱累積，尤其在夜間。你可能別人覺得舒服時你覺得熱、睡覺時出汗、或口乾喝水也沒用。", ja: "内熱パターンは、中医学で「陰虚」と呼ばれる状態の日常的な表現です。陰とは体の冷却・潤いの力。陰が不足すると内熱が蓄積し、特に夜間に強くなります。他の人が快適な時に暑い、睡眠中に汗をかく、水を飲んでも口が渇く、などの症状があります。" },
    },
    {
      q: { en: "How is Internal Heat different from just feeling warm?", "zh-TW": "內熱跟單純覺得熱有什麼不同？", ja: "内熱と単に暑いの違いは？" },
      a: { en: "Feeling warm in a hot room is normal. Internal Heat is a persistent feeling of warmth that comes from inside your body, regardless of the environment. It often peaks at night, causes night sweats, dry mouth, and sometimes a feeling of restlessness. It's heat your body generates internally because its cooling system is undercharged.", "zh-TW": "在熱的房間裡覺得熱是正常的。內熱是持續的從身體內部產生的熱感，不受環境影響。常在夜間加重，導致盜汗、口乾，有時還有煩躁感。那是你的身體因為冷卻系統充電不足而從內部產生的熱。", ja: "暑い部屋で暖かいと感じるのは正常です。内熱は環境に関係なく体の内側から来る持続的な暑さです。夜にピークに達し、寝汗、口の渇き、時には落ち着きのなさを引き起こします。体の冷却システムが充電不足のため内部から熱が生じている状態です。" },
    },
    {
      q: { en: "What foods help cool the Internal Heat pattern?", "zh-TW": "什麼食物能幫助降內熱？", ja: "内熱パターンを冷ます食材は？" },
      a: { en: "Yin-nourishing, cooling foods: pear, lily bulb, lotus seed, black sesame, tofu, mung bean soup, tremella mushroom, and cucumber. Avoid spicy food, alcohol, lamb, deep-fried food, and excessive coffee, which add more fuel to the internal fire.", "zh-TW": "滋陰降熱食物：梨、百合、蓮子、黑芝麻、豆腐、綠豆湯、白木耳和黃瓜。避免辛辣食物、酒精、羊肉、油炸食物和過量咖啡，它們會給內火加燃料。", ja: "陰を養い熱を冷ます食材：梨、ゆり根、蓮の実、黒ゴマ、豆腐、緑豆スープ、白キクラゲ、きゅうり。辛い食べ物、アルコール、羊肉、揚げ物、コーヒーの飲みすぎは内火に燃料を加えるので避けてください。" },
    },
    {
      q: { en: "Which body type is most connected to the Internal Heat pattern?", "zh-TW": "內熱體質最對應哪種體質？", ja: "内熱パターンに最も関連する体質は？" },
      a: { en: "The Yin Deficient body type (阴虚质) is the primary match. About 10% of people fall into this category. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "陰虛體質（阴虚质）是主要對應。大約10%的人屬於此類。做 EastType 免費測驗，確認你的體質並獲得個人化食物建議。", ja: "陰虚タイプ（陰虚質）が主な該当です。約10%の人がこのカテゴリーに当てはまります。EastTypeの無料クイズであなたのタイプを見つけ、パーソナライズされた食材を入手してください。" },
    },
  ],
  "heavy-and-sluggish": [
    {
      q: { en: "What is the Heavy & Sluggish pattern in Chinese medicine?", "zh-TW": "什麼是中醫的沉重遲緩體質？", ja: "中医学の重だるいパターンとは？" },
      a: { en: "The Heavy & Sluggish pattern is the everyday-language name for what Chinese medicine calls Phlegm Damp. It describes a state where your body holds onto moisture like a sponge that can't be wrung out. Everything feels heavy, slow, and foggy. Your digestion is sluggish, you gain weight easily, and you might feel like you're wading through mud all day.", "zh-TW": "沉重遲緩體質是中醫「痰濕」的日常說法。它描述身體像擰不乾的海綿一樣留住水分。一切都覺得沉重、遲緩、迷糊。消化慢、容易發胖、可能整天感覺像在泥裡走路。", ja: "重だるいパターンは、中医学で「痰湿」と呼ばれる状態の日常的な表現です。体が絞れないスポンジのように水分を抱え込む状態を指します。全てが重く、遅く、ぼんやり感じる。消化が遅い、太りやすい、一日中泥の中を歩いているように感じるかもしれません。" },
    },
    {
      q: { en: "Is the Heavy & Sluggish pattern the same as being overweight?", "zh-TW": "沉重遲緩體質跟超重一樣嗎？", ja: "重だるいパターンは太っているのと同じ？" },
      a: { en: "Not necessarily. Some people with this pattern are overweight, but many are not. The pattern is about how your body processes moisture, not your body size. You can be thin and still feel heavy, bloated, and foggy. TCM focuses on the functional pattern — how your body handles dampness — rather than weight alone.", "zh-TW": "不一定。有些這種體質的人超重，但很多不是。這個模式關乎你的身體如何處理水分，不是體型。你可以很瘦但還是覺得沉重、脹氣和迷糊。中醫關注功能模式 — 你的身體如何處理濕氣 — 而不只是體重。", ja: "必ずしもそうではありません。このパターンで太っている人もいますが、多くはそうではありません。パターンは体が水分をどう処理するかについてで、体型ではありません。細くても重く感じ、膨満感があり、ぼんやりすることがあります。中医学は体重だけでなく、体が湿気をどう扱うかという機能的パターンに注目します。" },
    },
    {
      q: { en: "What foods help with the Heavy & Sluggish pattern?", "zh-TW": "什麼食物對沉重遲緩體質有幫助？", ja: "重だるいパターンに効く食材は？" },
      a: { en: "Damp-draining foods: adzuki beans, coix seed (Job's tears), winter melon, celery, moderate green tea, and ginger tea. Avoid dairy, cold drinks, sweets, fried food, excessive fruit, and beer — these add more moisture to a system that's already struggling to drain it.", "zh-TW": "祛濕食物：紅豆、薏仁、冬瓜、芹菜、適量綠茶和薑茶。避免乳製品、冷飲、甜食、油炸食物、過量水果和啤酒 — 這些給已經排不動的系統增加更多水分。", ja: "湿気を除く食材：小豆、ハトムギ、トウガン、セロリ、適量の緑茶、しょうが茶。乳製品、冷たい飲み物、甘いもの、揚げ物、過度な果物、ビールは避けてください — すでに排出に苦労しているシステムにさらに湿気を加えます。" },
    },
    {
      q: { en: "Which body type is most connected to the Heavy & Sluggish pattern?", "zh-TW": "沉重遲緩體質最對應哪種體質？", ja: "重だるいパターンに最も関連する体質は？" },
      a: { en: "The Phlegm Damp body type (痰湿质) is the primary match. About 8% of people fall into this category. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "痰濕體質（痰湿质）是主要對應。大約8%的人屬於此類。做 EastType 免費測驗，確認你的體質並獲得個人化食物建議。", ja: "痰湿タイプ（痰湿質）が主な該当です。約8%の人がこのカテゴリーに当てはまります。EastTypeの無料クイズであなたのタイプを見つけ、パーソナライズされた食材を入手してください。" },
    },
  ],
  "stuck-energy": [
    {
      q: { en: "What is the Stuck Energy pattern in Chinese medicine?", "zh-TW": "", ja: "" },
      a: { en: "The Stuck Energy pattern is the everyday-language name for what Chinese medicine calls Qi Stagnation. It describes a state where your body's energy is present but can't move freely. Think of it as a traffic jam inside your body — the fuel is there, the engine is running, but the road is blocked. Your chest tightens, your mood swings, and you sigh without meaning to because your energy is trying to move but can't.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "How is Stuck Energy different from just being stressed?", "zh-TW": "", ja: "" },
      a: { en: "Stress is a cause. Stuck Energy is the result. Not everyone who is stressed develops Qi Stagnation, but chronic emotional suppression, lack of movement, and irregular routines can cause energy to pool and stagnate. The key difference is that Stuck Energy comes with physical signs — chest tightness, frequent sighing, a feeling of pressure or restriction — that persist even when the stressful event has passed.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help with the Stuck Energy pattern?", "zh-TW": "", ja: "" },
      a: { en: "Foods that encourage smooth energy flow: green tea in moderation, tangerine peel (chenpi), rose tea, mint tea, kumquat, and chamomile. Avoid excessive alcohol, heavy greasy meals, too much coffee, and very spicy food — these can add heat and pressure to a system that's already blocked.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most connected to the Stuck Energy pattern?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant body type (气郁质) is the primary match. About 8% of people fall into this category. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "", ja: "" },
    },
  ],
  "damp-heat": [
    {
      q: { en: "What is the Damp Heat pattern in Chinese medicine?", "zh-TW": "", ja: "" },
      a: { en: "The Damp Heat pattern is what Chinese medicine calls the combination of Dampness and Heat in the body. Dampness creates the heavy, sticky, oily quality. Heat creates the redness, inflammation, and irritability. When both are present, you get a unique set of symptoms: persistent acne, acid reflux, feeling hot and sticky, and irritability that worsens in humid weather. Think of it as a greenhouse in summer: hot, humid, and everything grows too fast, including the things you don't want.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "How is Damp Heat different from just Internal Heat?", "zh-TW": "", ja: "" },
      a: { en: "Internal Heat (Yin Deficiency) is dry heat. You feel hot but not sticky. Night sweats, dry skin, and insomnia are the main signs. Damp Heat adds a layer of moisture and stickiness. You feel hot AND oily AND heavy. Your breakouts are deep and swollen rather than just red. Your digestion feels sluggish and heavy rather than just uncomfortable. The treatments are different: Internal Heat needs cooling and moistening. Damp Heat needs cooling AND drying.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help with the Damp Heat pattern?", "zh-TW": "", ja: "" },
      a: { en: "Foods that both cool and drain moisture: mung bean soup, cucumber, bitter melon, celery, coix seed, and winter melon. Green tea in moderation can help clear heat. Avoid the worst offenders: alcohol, spicy food, fried food, dairy, and sweets. These generate both heat and dampness simultaneously. In humid weather, eat lighter meals and reduce portion sizes. Your body is already struggling to process, so don't overload it.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most connected to the Damp Heat pattern?", "zh-TW": "", ja: "" },
      a: { en: "The Damp Heat body type (湿热质) is the primary match. About 8% of people fall into this category. They tend to run hot, break out easily, and feel irritable in humid conditions. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "", ja: "" },
    },
  ],
  "blood-stasis": [
    {
      q: { en: "What is the Blood Stasis pattern in Chinese medicine?", "zh-TW": "", ja: "" },
      a: { en: "Blood Stasis (血瘀, pronounced \"shway-yoo\") means your blood circulation is sluggish. Things are moving, just not fast enough. The result is dull pain, easy bruising, numbness in the extremities, and sometimes dark spots or a dusky complexion. Chinese medicine sees blood as the river of nourishment in your body. When the river slows, areas downstream don't get what they need, and waste doesn't get cleared away quickly enough.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "How is Blood Stasis different from Cold Sensitivity?", "zh-TW": "", ja: "" },
      a: { en: "They can overlap, but they're different patterns. Cold Sensitivity (Yang Deficiency) is about not having enough warmth to circulate properly. Blood Stasis is about the circulation itself being slow, regardless of temperature. You can have Blood Stasis without feeling cold. In fact, some people with Blood Stasis run warm but still have poor circulation. The key difference is that Cold Sensitivity improves with warming, while Blood Stasis improves with movement and circulation-supporting foods.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help with the Blood Stasis pattern?", "zh-TW": "", ja: "" },
      a: { en: "Foods that support circulation: black pepper, ginger, turmeric, rose tea, chrysanthemum tea, hawthorn, and vinegar in moderation. Dark-colored foods like black sesame, black beans, and red dates are traditionally associated with blood nourishment. Avoid excessive cold foods and drinks, which slow circulation further. Regular movement is actually more important than any specific food for this pattern. Even a daily 20-minute walk can make a noticeable difference.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most connected to the Blood Stasis pattern?", "zh-TW": "", ja: "" },
      a: { en: "The Blood Stasis body type (血瘀质) is the primary match. About 6% of people fall into this category. They bruise easily, experience dull fixed pain, and may have dark spots or a dusky complexion. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "", ja: "" },
    },
  ],
  "high-sensitivity": [
    {
      q: { en: "What is the High Sensitivity pattern in Chinese medicine?", "zh-TW": "", ja: "" },
      a: { en: "The High Sensitivity pattern is the everyday-language name for what Chinese medicine calls the Sensitive constitution (特禀质). It describes a body that reacts to the world with extraordinary intensity. Allergies, strong reactions to smells and sounds, emotional absorption, and skin that flushes or itches for no clear reason. Your threshold is lower than most people's, but your perception is deeper. It's not a weakness. It's a different operating system.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is the High Sensitivity pattern the same as being highly sensitive (HSP)?", "zh-TW": "", ja: "" },
      a: { en: "They overlap significantly but come from different frameworks. HSP is a psychological concept about sensory processing sensitivity. The High Sensitivity pattern in TCM is a constitutional pattern that includes physical symptoms like allergies, skin reactions, and digestive sensitivities alongside emotional sensitivity. The TCM approach focuses on building resilience through food and lifestyle rather than psychological strategies. Both frameworks recognize the same core experience: you feel things others don't.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help with the High Sensitivity pattern?", "zh-TW": "", ja: "" },
      a: { en: "Simple, warm, and gentle foods. Congee, steamed vegetables, mild soups, and rice-based meals. Avoid known triggers: dairy, excess sugar, very spicy food, and highly processed items. Warm water instead of cold. The goal isn't to eliminate everything you react to, but to create a stable, predictable foundation that your body can rely on. When your base is solid, your reactions become less severe and less frequent.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most connected to the High Sensitivity pattern?", "zh-TW": "", ja: "" },
      a: { en: "The Sensitive body type (特禀质) is the primary match. About 5% of people fall into this category. They react strongly to environmental triggers, absorb others' emotions, and tend toward allergies and skin sensitivities. Take the free EastType quiz to discover if this is your type and get personalized food suggestions.", "zh-TW": "", ja: "" },
    },
  ],
}
