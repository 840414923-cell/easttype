import type { FaqItem } from "@/lib/wellness-faqs"

export const SYMPTOM_FAQS: Record<string, FaqItem[]> = {
  "why-am-i-always-tired": [
    {
      q: { en: "Why do I wake up tired even after 8 hours of sleep?", "zh-TW": "為什麼睡滿8小時醒來還是累？", ja: "なぜ8時間寝ても起きたら疲れている？" },
      a: { en: "If you're sleeping enough but still feel drained, it's probably not a sleep quantity problem. In TCM, this points to Qi Deficiency — your body doesn't have enough fuel to recharge overnight. Sleep refills the tank, but if the tank has a leak or is too small, it never gets full. Warm, cooked foods and gentle movement may help more than extra hours in bed.", "zh-TW": "如果你睡夠了還是覺得虛，可能不是睡眠時間的問題。在中醫看來，這指向氣虛 — 你的身體沒有足夠燃料在夜間充電。睡眠是給油箱加油，但如果油箱有洞或太小，永遠加不滿。溫熱煮熟的食物和輕柔活動可能比多睡幾小時更有幫助。", ja: "十分寝ているのにまだ疲れているなら、睡眠時間の問題ではないかもしれません。中医学ではこれは気虚を指します — 体に夜間に充電する燃料が足りない。睡眠はタンクに給油するようなもの、でもタンクに穴があったり小さすぎたりすると満タンになりません。温かい調理済みの食材と軽い運動が、ベッドで過ごす時間を増やすより役立つかもしれません。" },
    },
    {
      q: { en: "Can changing my diet really fix chronic fatigue?", "zh-TW": "改變飲食真的能改善慢性疲勞嗎？", ja: "食事を変えるだけで慢性疲労は本当に改善する？" },
      a: { en: "It can make a real difference, especially if Qi Deficiency is the root pattern. TCM sees food as the most direct way to influence your body's energy. Switching from cold, raw meals to warm, cooked ones gives your digestive system a break, and foods like congee, jujube dates, and ginger specifically support Qi production. Most people notice changes within 2 to 3 weeks of consistent adjustments.", "zh-TW": "真的可以有差，特別是如果氣虛是根本模式。中醫認為食物是影響身體能量最直接的方式。從寒涼生食換成溫熱熟食讓消化系統喘口氣，像米粥、紅棗和薑這類食物專門支持氣的生成。大多數人在持續調整2到3週內就能感覺到變化。", ja: "本当に変わることがあります、特に気虚が根本のパターンなら。中医学は食べ物が体のエネルギーに影響する最も直接的な方法と考えます。冷たい生食から温かい調理済みの食事に替えることで消化システムが休まり、お粥、なつめ、しょうがなどの食材は気の生成を特別にサポートします。多くの人は2〜3週間の継続で変化に気づきます。" },
    },
    {
      q: { en: "Is being always tired the same as chronic fatigue syndrome?", "zh-TW": "總是累跟慢性疲勞症候群一樣嗎？", ja: "いつも疲れているのは慢性疲労症候群と同じ？" },
      a: { en: "Not necessarily. Chronic fatigue syndrome is a specific medical condition. Being always tired can be a sign of Qi Deficiency in TCM, which is a functional energy pattern, not a medical label. If your fatigue is severe or getting worse, check with a doctor first to rule out underlying conditions. TCM constitution patterns complement but don't replace medical evaluation.", "zh-TW": "不一定。慢性疲勞症候群是特定的醫療狀況。總是累在中醫裡可以是氣虛的表現，這是功能性能量模式，不是醫療標籤。如果你的疲勞嚴重或惡化，先看醫生排除潛在狀況。中醫體質辨識補充但不取代醫療評估。", ja: "必ずしもそうではありません。慢性疲労症候群は特定の医療的状態です。いつも疲れているのは中医学では気虚のサインであることがあり、これは機能的エネルギーパターンで医療的なラベルではありません。疲労が激しい、または悪化している場合は、まず医師に相談して基礎疾患を除外してください。中医学の体質パターンは医療評価を補完するもので、代替するものではありません。" },
    },
    {
      q: { en: "What body type is most associated with being always tired?", "zh-TW": "總是累最可能對應哪種體質？", ja: "いつも疲れているのはどの体質が最も関連？" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match, but the Yang Deficient type (阳虚质) also shows persistent fatigue along with feeling cold. About 15% of people fall into the Qi Deficient pattern. Take the free EastType quiz to see which of the 9 body types matches your current patterns.", "zh-TW": "氣虛體質（气虚质）是主要對應，但陽虛體質（阳虚质）也會表現持續疲勞並伴隨怕冷。大約15%的人屬於氣虛模式。做 EastType 免費測驗，看看9種體質中哪種最符合你目前的狀態。", ja: "気虚タイプ（気虚質）が主な該当ですが、陽虚タイプ（陽虚質）も寒さと共に持続的な疲労を示します。約15%の人が気虚パターンに当てはまります。EastTypeの無料クイズで9つの体質のうちあなたの現在のパターンに合うものを見つけましょう。" },
    },
  ],
  "why-am-i-always-cold": [
    {
      q: { en: "Why am I always cold when everyone else is comfortable?", "zh-TW": "為什麼別人都覺得舒服，我卻總是冷？", ja: "なぜ他の人が快適なのに私だけいつも寒い？" },
      a: { en: "In TCM, this is often linked to Yang Deficiency — your body's internal heater is running on low. Blood tests might come back totally normal because this is a functional energy pattern, not a structural problem. Your body prioritizes keeping your core warm and cuts heat to your hands and feet first.", "zh-TW": "在中醫裡，這通常與陽虛有關 — 你身體的內部暖氣開得太小。血液檢查可能完全正常，因為這是功能性能量模式，不是結構性問題。你的身體優先保持核心溫暖，先減少手腳的供熱。", ja: "中医学では、これは多くの場合陽虚と関連しています — 体の内部ヒーターが弱く稼働している。これは機能的エネルギーパターンで構造的な問題ではないため、血液検査は完全に正常かもしれません。体は核心の保温を優先し、まず手足への熱供給を減らします。" },
    },
    {
      q: { en: "What foods can warm my body from the inside?", "zh-TW": "什麼食物能從內部溫暖身體？", ja: "体を内側から温める食材は？" },
      a: { en: "Ginger, cinnamon, lamb, beef, black pepper, roasted nuts, fennel, and onion are all considered warming foods in TCM. They add Yang energy to your system. On the flip side, ice water, raw salads, watermelon, and excessive fruit tend to cool your body further and may make cold sensitivity worse over time.", "zh-TW": "薑、肉桂、羊肉、牛肉、黑胡椒、烤堅果、茴香和洋蔥都是中醫認為的溫性食物。它們為你的系統補充陽氣。另一方面，冰水、生沙拉、西瓜和過量水果會進一步冷卻身體，可能讓怕冷的情況隨時間惡化。", ja: "しょうが、シナモン、羊肉、牛肉、黒胡椒、ローストナッツ、フェンネル、玉ねぎは中医学で温性食材とされています。これらは体に陽のエネルギーを加えます。逆に、氷水、生野菜サラダ、スイカ、過度な果物は体をさらに冷やし、長期的に寒がりを悪化させる可能性があります。" },
    },
    {
      q: { en: "Could my always feeling cold be a thyroid issue?", "zh-TW": "總是怕冷可能是甲狀腺問題嗎？", ja: "いつも寒いのは甲状腺の問題？" },
      a: { en: "It might be, so it's worth getting your thyroid checked. If your thyroid panel is abnormal, that's a medical condition to address with your doctor. But many people with normal thyroid results still feel cold all the time. TCM calls this Yang Deficiency, and approaches it through warming foods, lifestyle adjustments, and supporting your body's internal heat production.", "zh-TW": "有可能，所以值得檢查甲狀腺。如果甲狀腺指標異常，那是需要和醫生處理的醫療狀況。但很多人甲狀腺正常卻還是總覺得冷。中醫稱之為陽虛，通過溫性食物、生活方式調整和支持身體內部產熱來處理。", ja: "可能性があるので、甲状腺の検査を受ける価値があります。甲状腺の数値が異常なら、医師と対応すべき医療的状態です。しかし甲状腺が正常でも常に寒い人は多くいます。中医学ではこれを陽虚と呼び、温性食材、生活調整、体の内部発熱のサポートでアプローチします。" },
    },
  ],
  "why-do-i-wake-up-at-3am": [
    {
      q: { en: "Why do I always wake up around 3 AM specifically?", "zh-TW": "為什麼我總是在凌晨3點左右醒來？", ja: "なぜいつも午前3時頃に目が覚める？" },
      a: { en: "In TCM, the body clock maps each 2-hour window to a specific organ system. 1 AM to 3 AM belongs to the Liver meridian. If your Liver Qi is stagnant or your Liver Yin is deficient, this meridian becomes overactive during its designated time slot and wakes you up. It's like your body's internal alarm going off on schedule.", "zh-TW": "在中醫裡，身體時鐘把每2小時對應到一個特定器官系統。凌晨1點到3點屬於肝經。如果你的肝氣鬱結或肝陰不足，這條經絡在它的專屬時段會過度活躍，把你叫醒。就像身體的內部鬧鐘按時響了。", ja: "中医学では、体時計は2時間ごとに特定の臓器システムを割り当てます。午前1時〜3時は肝経に属します。肝気が滞っているか肝陰が不足していると、この経絡が割り当てられた時間帯に過活動になり、目を覚まさせます。体の内部アラームが予定通り鳴るようなものです。" },
    },
    {
      q: { en: "Is waking up at 3 AM related to stress?", "zh-TW": "凌晨3點醒來跟壓力有關嗎？", ja: "午前3時に起きるのはストレスと関係ある？" },
      a: { en: "Very often, yes. In TCM, emotional stress and frustration can cause Liver Qi Stagnation — energy that should flow smoothly gets stuck. This stuck energy tends to flare up during the Liver's peak hours (1 to 3 AM). So yes, that deadline stress or unresolved frustration might literally be what's poking you awake.", "zh-TW": "很常有關。在中醫裡，情緒壓力和挫折可能導致肝氣鬱結 — 應該順暢流動的能量卡住了。這股卡住的能量容易在肝的主時（凌晨1到3點）上衝。所以沒錯，截止日期的壓力或未解的鬱悶可能真的就是把你戳醒的東西。", ja: "非常に多くの場合、そうです。中医学では感情的ストレスや不満は肝気鬱結を引き起こす可能性があります — 滑らかに流れるべき気が停滞します。この停滞した気は肝のピーク時間（午前1時〜3時）に上昇しがちです。だから、期限のストレスや未解決の不満が文字通りあなたを起こしているのかもしれません。" },
    },
    {
      q: { en: "What can I do to stop waking up at 3 AM?", "zh-TW": "怎麼做才能不再在凌晨3點醒來？", ja: "午前3時に起きないようにするには？" },
      a: { en: "TCM suggests several approaches. Avoid heavy meals and alcohol in the evening. Try chrysanthemum tea or rose tea after dinner to help Liver Qi flow. Go to bed before 11 PM so your Gallbladder meridian can do its cleanup work. Gentle evening stretching or a short walk may also help release stagnant energy before bed.", "zh-TW": "中醫建議幾個方法。晚餐避免大餐和酒精。飯後試試菊花茶或玫瑰花茶幫助肝氣流通。11點前上床讓膽經做清潔工作。睡前輕柔的伸展或短暫散步也可能幫助釋放停滯的能量。", ja: "中医学はいくつかのアプローチを提案します。夜の重い食事とアルコールを避ける。夕食後に菊茶やローズティーで肝気の流れを助ける。午後11時前に就寝して胆経のクリーアップを可能にする。就寝前の軽いストレッチや短い散歩も停滞した気の放出に役立つかもしれません。" },
    },
  ],
  "always-bloated-after-eating": [
    {
      q: { en: "Why do I get bloated every time I eat?", "zh-TW": "為什麼每次吃飽都脹氣？", ja: "なぜ食べるたびに膨満感になる？" },
      a: { en: "In TCM, this often points to Spleen Qi Deficiency. The Spleen is responsible for turning food into usable energy. When Spleen Qi is weak, food sits in your digestive system instead of being processed efficiently. This creates gas, heaviness, and that stuffed feeling even after small meals.", "zh-TW": "在中醫裡，這通常指向脾氣虛。脾負責把食物轉化為可用的能量。脾氣虛弱時，食物停留在消化系統裡而不是被有效處理。這產生脹氣、沉重感，以及即使少量進食也有飽滯感。", ja: "中医学では、これは多くの場合脾気虚を指します。脾は食べ物を利用可能なエネルギーに変換する役割を持ちます。脾気が弱いと、食べ物が効率的に処理されず消化システムに留まります。これがガス、重さ、少量の食事でも詰まった感覚を生み出します。" },
    },
    {
      q: { en: "Are there specific foods that cause bloating in TCM?", "zh-TW": "中醫認為有特定食物會導致脹氣嗎？", ja: "中医学で膨満感を引き起こす特定の食材は？" },
      a: { en: "Yes. TCM categorizes foods that generate Dampness as common bloating triggers. These include dairy, cold drinks, sweets, fried food, excessive fruit, and beer. Raw foods also require more digestive energy to process. If your Spleen Qi is already low, these foods can make bloating noticeably worse.", "zh-TW": "有的。中醫把產生濕氣的食物歸類為常見的脹氣誘因。包括乳製品、冷飲、甜食、油炸食物、過量水果和啤酒。生食也需要更多消化能量來處理。如果你的脾氣已經虛了，這些食物會讓脹氣明顯加重。", ja: "はい。中医学は湿気を生む食材を一般的な膨満感の引き金として分類します。乳製品、冷たい飲み物、甘いもの、揚げ物、過度な果物、ビールが含まれます。生食もより多くの消化エネルギーを必要とします。すでに脾気が弱っている場合、これらの食材は膨満感を顕著に悪化させる可能性があります。" },
    },
    {
      q: { en: "What body types are most prone to bloating?", "zh-TW": "哪種體質最容易脹氣？", ja: "どの体質が最も膨満感になりやすい？" },
      a: { en: "The Qi Deficient type (气虚质) and Phlegm Damp type (痰湿质) are the two most associated with chronic bloating. Qi Deficient types have weak digestion, while Phlegm Damp types tend to hold onto moisture. About 15% and 10% of people fall into these categories respectively. The free EastType quiz can help you identify which pattern matches you.", "zh-TW": "氣虛體質（气虚质）和痰濕體質（痰湿质）是最常與慢性脹氣相關的兩種。氣虛體質消化弱，痰濕體質容易積水。大約分別有15%和10%的人屬於這兩類。EastType 免費測驗可以幫你確認哪種模式最符合你。", ja: "気虚タイプ（気虚質）と痰湿タイプ（痰湿質）が慢性の膨満感に最も関連しています。気虚タイプは消化が弱く、痰湿タイプは水分を溜め込みがちです。それぞれ約15%と10%の人が該当します。EastTypeの無料クイズであなたに合うパターンを見つけられます。" },
    },
  ],
  "why-am-i-always-sleepy": [
    {
      q: { en: "Why do I feel sleepy all day even though I slept enough?", "zh-TW": "為什麼睡夠了白天還是一直想睡？", ja: "十分寝たのに一日中眠いのはなぜ？" },
      a: { en: "Daytime sleepiness with adequate sleep is often linked to one of two TCM patterns. Qi Deficiency means your body lacks the energy to stay alert. Phlegm Damp creates a heavy, foggy feeling that makes you want to doze off. Sometimes both patterns are present, which makes the drowsiness even stronger.", "zh-TW": "睡夠了還是白天嗜睡，在中醫裡通常對應兩種模式之一。氣虛表示你的身體缺乏保持清醒的能量。痰濕則造成沉重、迷糊的感覺，讓你想打瞌睡。有時兩種模式同時存在，嗜睡就更強烈。", ja: "十分寝ているのに日中眠い場合、中医学では通常2つのパターンのいずれかに関連します。気虚は体が覚醒を保つエネルギーに欠けている状態。痰湿は重くぼんやりした感覚を作り、うたた寝したくなります。両方が同時にあると眠気がさらに強くなります。" },
    },
    {
      q: { en: "Is always feeling sleepy different from always feeling tired?", "zh-TW": "總是想睡跟總是累一樣嗎？", ja: "いつも眠いのといつも疲れているのは違う？" },
      a: { en: "Yes, and TCM distinguishes between them. Being always tired (fatigue) is usually Qi Deficiency — your battery is low. Being always sleepy (drowsiness) often involves Phlegm Damp — there's a fog weighing down your mental clarity. The sleepy feeling is more like heaviness in the head and eyelids, while fatigue is more like heaviness in the whole body. Different root patterns, different food approaches.", "zh-TW": "不一樣，中醫區分兩者。總是累（疲勞）通常是氣虛 — 你的電量低。總是想睡（嗜睡）常涉及痰濕 — 有一層霧壓著你的思緒清晰度。想睡的感覺更像頭和眼皮的沉重，疲勞則更像全身的沉重。不同的根本模式，不同的飲食對策。", ja: "はい、中医学は両者を区別します。いつも疲れている（疲労）は通常気虚 — バッテリーが低い。いつも眠い（嗜眠）は多くの場合痰湿が関与 — 頭の明晰さを押さえつける霧のようなもの。眠い感覚は頭とまぶたの重さに近く、疲労は全身の重さに近い。根本パターンが違えば食事アプローチも違います。" },
    },
    {
      q: { en: "What foods help with daytime sleepiness?", "zh-TW": "什麼食物對白天嗜睡有幫助？", ja: "日中の眠気に効く食材は？" },
      a: { en: "For Qi-related sleepiness, congee, jujube dates, sweet potato, and chicken broth support energy. For Damp-related sleepiness, adzuki beans, coix seed, winter melon, and green tea help drain moisture. If you're not sure which pattern you have, the EastType quiz gives personalized food suggestions based on your body type.", "zh-TW": "氣虛型嗜睡，米粥、紅棗、地瓜和雞湯能支持能量。痰濕型嗜睡，紅豆、薏仁、冬瓜和綠茶幫助排濕。如果不確定你是哪種模式，EastType 測驗會根據你的體質提供個人化的食物建議。", ja: "気に関連する眠気には、お粥、なつめ、さつまいも、鶏スープがエネルギーをサポート。湿気に関連する眠気には小豆、ハトムギ、トウガン、緑茶が水分排出を助けます。自分のパターンが分からない場合、EastTypeクイズが体質に基づいてパーソナライズされた食材を提案します。" },
    },
  ],
  "why-do-i-have-night-sweats": [
    {
      q: { en: "Why do I wake up sweating at night?", "zh-TW": "為什麼我夜間會盜汗？", ja: "なぜ夜に汗をかくのか？" },
      a: { en: "In TCM, night sweats without fever or infection are often linked to Yin Deficiency. Yin is your body's cooling, moistening force. When Yin is low, internal heat builds up at night and your body sweats to cool itself down. It's like an air conditioner that's running low on coolant — it works overtime but can't keep up.", "zh-TW": "在中醫裡，沒有發燒或感染的夜間盜汗通常與陰虛有關。陰是你身體的冷卻和潤澤力量。陰不足時，內熱在夜間累積，身體出汗來降溫。就像冷氣冷媒不夠 — 努力運轉但跟不上。", ja: "中医学では、発熱や感染のない寝汗は多くの場合陰虚と関連しています。陰とは体の冷却・潤いの力。陰が不足すると夜間に内熱が蓄積し、体は冷やすために汗をかきます。冷媒が不足したエアコンのようなもの — 必死に稼働しても追いつきません。" },
    },
    {
      q: { en: "Are night sweats always a medical problem?", "zh-TW": "夜間盜汗一定是醫療問題嗎？", ja: "寝汗は常に医療的な問題ですか？" },
      a: { en: "Not always. Night sweats can have many causes, including room temperature, stress, hormones, or medications. But if they're persistent and not explained by your environment, TCM views them as a sign of Yin Deficiency — a functional energy pattern where your body's cooling system is undercharged. If night sweats are severe, drenching, or accompanied by fever or weight loss, see a doctor first.", "zh-TW": "不一定。夜間盜汗有很多原因，包括室溫、壓力、荷爾蒙或藥物。但如果持續且無法用環境解釋，中醫認為這是陰虛的表現 — 身體冷卻系統充電不足的功能性能量模式。如果盜汗嚴重、浸濕衣物，或伴隨發燒或體重減輕，請先看醫生。", ja: "必ずしもそうではありません。寝室の温度、ストレス、ホルモン、薬剤など多くの原因があります。しかし持続的で環境で説明できない場合、中医学は陰虚のサインと見ます — 体の冷却システムが充電不足の機能的エネルギーパターン。寝汗が激しい、浸透性、発熱や体重減少を伴う場合はまず医師に相談してください。" },
    },
    {
      q: { en: "What foods help with night sweats in Chinese medicine?", "zh-TW": "中醫什麼食物對盜汗有幫助？", ja: "中医学で寝汗に効く食材は？" },
      a: { en: "Yin-nourishing foods may help: pear, lily bulb, black sesame, tofu, mung bean soup, lotus seed, and tremella mushroom. Limit spicy food, alcohol, lamb, excessive coffee, and deep-fried food, which tend to generate more internal heat. The EastType quiz can identify your body type and suggest personalized food options.", "zh-TW": "滋陰食物可能有幫助：梨、百合、黑芝麻、豆腐、綠豆湯、蓮子和白木耳。限制辛辣食物、酒精、羊肉、過量咖啡和油炸食物，它們容易產生更多內熱。EastType 測驗可以辨識你的體質並建議個人化食物。", ja: "陰を養う食材が役立つかもしれません：梨、ゆり根、黒ゴマ、豆腐、緑豆スープ、蓮の実、白キクラゲ。辛い食べ物、アルコール、羊肉、コーヒーの飲みすぎ、揚げ物を制限してください。これらは内熱を生みやすいです。EastTypeクイズで体質を特定し、パーソナライズされた食材を提案できます。" },
    },
  ],
  "why-do-i-feel-anxious": [
    {
      q: { en: "Why do I feel anxious all the time for no reason?", "zh-TW": "為什麼我無緣無故一直焦慮？", ja: "なぜ理由もなく常に不安なのか？" },
      a: { en: "In TCM, chronic anxiety without a clear external cause is often linked to Qi Stagnation. Your body's energy builds up but can't flow freely, creating internal pressure that your mind interprets as anxiety, restlessness, or unease. It's like a pipe system where the water is there but something is blocking the flow.", "zh-TW": "在中醫裡，沒有明確外在原因的慢性焦慮通常與氣鬱有關。身體的能量堆積但無法自由流動，產生內部壓力，心解讀為焦慮、煩躁或不安。就像水管系統裡水在那裡但有東西堵住了。", ja: "中医学では、明確な外部原因のない慢性的な不安は多くの場合気鬱と関連します。体の気が蓄積するが自由に流れず、心が不安、落ち着きのなさ、不快感として解釈する内圧が生まれます。水はあるが流れを塞ぐものがあるパイプシステムのようなものです。" },
    },
    {
      q: { en: "Can food really help with anxiety?", "zh-TW": "食物真的能幫助焦慮嗎？", ja: "食べ物は本当に不安に効く？" },
      a: { en: "TCM sees food as a way to influence energy patterns. For Qi Stagnation, foods that promote smooth energy flow may help: rose tea, citrus fruits, chamomile tea, peppermint, and chrysanthemum tea. Avoiding excessive caffeine, alcohol, very spicy foods, and heavy greasy meals may also reduce the internal pressure that contributes to anxious feelings.", "zh-TW": "中醫認為食物可以影響能量模式。對於氣鬱，促進氣流通的食物可能有幫助：玫瑰花茶、柑橘類、洋甘菊茶、薄荷和菊花茶。避免過量咖啡因、酒精、過辣食物和油膩厚味也可能減少導致焦慮感的內部壓力。", ja: "中医学では食べ物が気のパターンに影響すると考えます。気鬱には、気の流れを促す食材が役立つかもしれません：ローズティー、柑橘類、カモミールティー、ペパーミント、菊茶。過度なカフェイン、アルコール、辛すぎる食べ物、脂っこい食事を避けることも不安感につながる内圧を減らす可能性があります。" },
    },
    {
      q: { en: "Which body type is most associated with chronic anxiety?", "zh-TW": "哪種體質最常與慢性焦慮相關？", ja: "どの体質が慢性的な不安に最も関連？" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match. About 8% of people fall into this category. Common signs include chest tightness, frequent sighing, mood swings, and a feeling that something is stuck inside. Take the free EastType quiz to discover if this is your type.", "zh-TW": "氣鬱體質（气郁质）是主要對應。大約8%的人屬於此類。常見信號包括胸悶、常嘆息、情緒起伏和內部有東西卡住的感覺。做 EastType 免費測驗，確認你的體質。", ja: "気鬱タイプ（気鬱質）が主な該当です。約8%の人がこのカテゴリーに当てはまります。よくあるサインは胸の圧迫感、ため息、気分の波、内側に何かが詰まっている感覚です。EastTypeの無料クイズであなたのタイプを見つけてください。" },
    },
  ],
  "why-do-i-have-brain-fog": [
    {
      q: { en: "What is brain fog in Chinese medicine?", "zh-TW": "", ja: "" },
      a: { en: "TCM doesn't use the term \"brain fog,\" but it describes the same experience as Phlegm Damp clouding the head. When your Spleen can't transform food into clear energy efficiently, a cloudy, heavy substance builds up and obscures your thinking. It's like condensation on a window: the view is still there, but you can't see it clearly until you change the conditions creating the moisture.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is brain fog the same as being tired?", "zh-TW": "", ja: "" },
      a: { en: "Not quite. Fatigue is low energy: your battery is low. Brain fog is poor mental clarity: your battery might be fine, but there's something interfering with the connection. In TCM, fatigue usually points to Qi Deficiency, while brain fog is more strongly associated with Phlegm Damp. Some people have both, which makes both the body and the mind feel sluggish.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help clear brain fog?", "zh-TW": "", ja: "" },
      a: { en: "If Phlegm Damp is the root, foods that drain moisture may help: adzuki beans, coix seed, winter melon, celery, hawthorn tea, and tangerine peel tea. If Qi Deficiency is the root, warm and nourishing foods like congee, sweet potato, jujube dates, and ginger tea support energy production. In both cases, reducing dairy, sweets, fried food, and cold drinks can make a noticeable difference within a few weeks.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with brain fog?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the most common match. Their body holds onto moisture, creating a heavy, foggy feeling in the head. The Qi Deficient type (气虚质) can also experience brain fog from low energy rather than moisture. Take the free EastType quiz to discover which body type matches your current patterns.", "zh-TW": "", ja: "" },
    },
  ],
  "why-cant-i-fall-asleep": [
    {
      q: { en: "Why can't I fall asleep even though I'm exhausted?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, falling asleep requires Yin energy to become dominant over Yang. If your Yin is low (Yin Deficiency) or your Yang is stuck (Qi Stagnation), the transition from wake to sleep doesn't happen smoothly. You feel wired and tired at the same time because the active energy won't step aside for the resting energy.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is trouble falling asleep different from waking up at 3AM?", "zh-TW": "", ja: "" },
      a: { en: "Yes. Trouble falling asleep means your body can't transition into sleep. Waking at 3AM means something interrupted sleep that was already happening. In TCM, they're related but distinct. Not falling asleep often involves Yin Deficiency or Qi Stagnation. Waking at 3AM is more specifically linked to Liver meridian activity. The approaches for each can be different.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can I do to fall asleep faster?", "zh-TW": "", ja: "" },
      a: { en: "Get into bed before 11 PM. In TCM, the Gallbladder meridian activates from 11 PM to 1 AM, and missing this window makes falling asleep much harder. Try chrysanthemum tea if you run warm, or rose tea if you feel emotionally wound up. Keep your room cool (65-68°F). Avoid screens for an hour before bed, and write down tomorrow's tasks so your brain can let go of them.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with trouble falling asleep?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the most common match. Their internal cooling system is undercharged, so Yang stays active at night. The Qi Stagnant type (气郁质) can also struggle with sleep onset due to racing thoughts and emotional pressure. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-keep-gaining-weight": [
    {
      q: { en: "Why am I gaining weight even though I eat the same?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, unexplained weight gain is often linked to Phlegm Damp, a pattern where your body holds onto moisture and metabolic waste instead of processing it efficiently. Your metabolism is like a sink with a slow drain. You can reduce the water coming in (eat less), but until you clear the drain, the water keeps rising.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is this type of weight gain the same as regular fat?", "zh-TW": "", ja: "" },
      a: { en: "Not entirely. TCM distinguishes between fat accumulation and dampness accumulation. Dampness-related weight often feels soft, puffy, and concentrated around the middle. It may fluctuate with the weather (worse in humidity) and improve with foods that drain moisture. Both can exist simultaneously, but the approach for dampness-related weight focuses on supporting metabolism and reducing moisture rather than simply cutting calories.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help with this type of weight gain?", "zh-TW": "", ja: "" },
      a: { en: "For Phlegm Damp: adzuki beans, coix seed, winter melon, celery, hawthorn tea, tangerine peel tea, and modest green tea. Reduce dairy, sweets, fried food, cold drinks, and beer. For Qi Deficiency-related weight gain: warm, cooked meals like congee, sweet potato, and chicken broth. Avoid cold and raw foods that drain energy.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most prone to unexplained weight gain?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match, affecting about 10% of people. The Qi Deficient type (气虚质) can also gain weight due to a slow metabolism. Take the free EastType quiz to discover which pattern matches you.", "zh-TW": "", ja: "" },
    },
  ],
  "why-are-my-moods-all-over-the-place": [
    {
      q: { en: "Why do my moods change so fast for no reason?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, unpredictable mood swings are often linked to Qi Stagnation. Your Liver is responsible for smooth energy flow, and when energy gets stuck, emotions build up like pressure in a sealed pot. When something triggers a release, it all comes out at once. The mood swing isn't about the trigger. It's about the accumulated pressure behind it.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Are mood swings always a hormonal issue?", "zh-TW": "", ja: "" },
      a: { en: "No. While hormones are the most common cause, many people have normal hormone levels and still experience mood instability. TCM views this as an energy flow pattern. If your hormones check out fine but the mood swings persist, the Liver Qi Stagnation framework offers a different explanation and a different set of approaches.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can I do to stabilize my moods?", "zh-TW": "", ja: "" },
      a: { en: "Move your body. This is the single most effective thing for Qi Stagnation. A 20-minute walk works better than an intense gym session. Express what you're feeling: journal, talk to a friend, sing, create. Drink rose tea or tangerine peel tea to encourage smooth energy flow. Reduce caffeine and alcohol, which add pressure to an already pressurized system.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with mood swings?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match. About 8% of people fall into this category. Common signs include chest tightness, frequent sighing, and emotional reactions that feel out of proportion. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
}
