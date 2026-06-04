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
  "why-do-i-get-sick-so-often": [
    {
      q: { en: "Why do I catch every cold that goes around?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, this points to weak Wei Qi (defensive energy). Wei Qi circulates at your body's surface like an invisible shield. When Qi or Yang is low, your body can't produce enough Wei Qi to keep pathogens out. You're not unlucky. Your defenses are understaffed.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can food really strengthen my immune system?", "zh-TW": "", ja: "" },
      a: { en: "Yes, especially in the TCM framework. Qi-building foods like congee with jujube dates and ginger, chicken broth, and sweet potato support the energy your body needs to produce defensive Qi. Warming foods like ginger and cinnamon help if Yang Deficiency is part of your pattern. Most people notice fewer colds within a month of consistent dietary changes.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type gets sick most often?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) and Yang Deficient type (阳虚质) are both prone to frequent illness. Qi Deficiency means low defensive energy. Yang Deficiency means poor circulation of that energy. About 15% and 10% of people fall into these categories respectively. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-my-hands-and-feet-go-numb": [
    {
      q: { en: "Are numb hands and feet always a circulation problem?", "zh-TW": "", ja: "" },
      a: { en: "Not always, but circulation is the most common cause. In TCM, numbness occurs when Qi and Blood don't reach an area adequately. This can be due to Yang Deficiency (not enough warmth to push circulation to the extremities) or Qi Deficiency (not enough pumping power). Both are functional patterns, not structural problems.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "How is this different from Raynaud's?", "zh-TW": "", ja: "" },
      a: { en: "Raynaud's is a specific vascular condition where blood vessels in the fingers and toes spasm in response to cold. TCM's explanation is broader: any constitution with low Yang or low Qi can experience reduced circulation to the extremities. Some people with Raynaud's may have a Yang Deficient pattern, but not all numbness is Raynaud's.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can help with numb extremities?", "zh-TW": "", ja: "" },
      a: { en: "For Yang Deficiency: warming foods (ginger, cinnamon, lamb), regular warm foot soaks, and dressing warmly around wrists and ankles. For Qi Deficiency: energy-building foods (congee, jujube dates, chicken broth) and gentle movement to improve circulation. For both: avoid cold drinks and raw foods.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-skin-so-dry": [
    {
      q: { en: "Why won't moisturizer fix my dry skin?", "zh-TW": "", ja: "" },
      a: { en: "Because the problem isn't on the surface. In TCM, chronic dry skin is often caused by Yin Deficiency: your body lacks the internal moistening force that keeps skin hydrated from within. Moisturizer is like watering a plant by misting the leaves when the real problem is that the roots can't reach the water table.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods help with dry skin from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Yin-nourishing foods: pear, black sesame, lily bulb, tremella mushroom, lotus seed, tofu, and cucumber. Avoid spicy food, alcohol, and deep-fried food, which generate internal heat and further deplete Yin. Going to bed before 11 PM is one of the most effective things you can do, because Yin is replenished during sleep.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most prone to dry skin?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match. About 10% of people have this pattern. They tend to run warm, especially at night, and may also experience night sweats, dry mouth, and a thin body type. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-crave-sweets": [
    {
      q: { en: "Why do I crave sweets specifically after meals?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, the sweet flavor corresponds to the Spleen. When your Spleen is weak, it sends a signal asking for sweet things to support itself. The craving after meals is your Spleen saying it needs help digesting. Refined sugar makes the problem worse. Natural sweets like sweet potato and dates support the Spleen without creating the crash.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is craving sweets the same as sugar addiction?", "zh-TW": "", ja: "" },
      a: { en: "Not necessarily. Sugar addiction involves dopamine and reward pathways in the brain. TCM looks at sweet cravings as a Spleen signal. They can overlap: a weak Spleen craves sweets, refined sugar weakens the Spleen further, creating a cycle. Breaking the cycle works best when you replace refined sugar with natural Spleen-supporting sweets rather than trying to quit all sweet foods at once.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type craves sweets most?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) and Qi Deficient type (气虚质) both tend to crave sweets. Phlegm Damp types crave sweets because of Spleen weakness. Qi Deficient types crave sweets for quick energy. Take the free EastType quiz to discover which pattern drives your cravings.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-overthink-everything": [
    {
      q: { en: "Is overthinking the same as anxiety?", "zh-TW": "", ja: "" },
      a: { en: "Not exactly. Anxiety involves fear and worry about future events. Overthinking involves repetitive analysis and rumination that can happen without fear. In TCM, anxiety and overthinking share a root (Qi Stagnation) but are different expressions. Anxiety is the pressure pushing outward. Overthinking is the energy circling without moving forward.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does overthinking get worse at night?", "zh-TW": "", ja: "" },
      a: { en: "During the day, physical activity and external stimuli help move stagnant energy. At night, when you're still and quiet, the stagnation becomes more noticeable. The stuck energy has nothing to distract it, so it intensifies as mental looping. This is why movement during the day and a wind-down routine before bed are both important.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What's the fastest way to stop an overthinking loop?", "zh-TW": "", ja: "" },
      a: { en: "Move your body. Stand up, walk, stretch, shake your arms. Physical movement directly moves stagnant Qi. Then write down the looping thought to get it out of your head. Finally, drink rose tea or tangerine peel tea, which traditionally support smooth Liver Qi flow. The combination of movement, externalization, and tea works better than any single approach alone.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most prone to overthinking?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match. About 8% of people have this pattern. Their energy tends to pool and stagnate, creating mental fixation and rumination. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-always-unmotivated": [
    {
      q: { en: "Is low motivation the same as laziness?", "zh-TW": "", ja: "" },
      a: { en: "No. Laziness is choosing not to do something because you don't feel like it. Low motivation is wanting to do something but feeling like you physically can't get yourself started. In TCM, this is often a Qi problem, not a character problem. Your body doesn't have enough energy to initiate action, even when your mind wants to. It's like a car with a dead battery: the engine is fine, but it can't turn over.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why can I push through for others but not for myself?", "zh-TW": "", ja: "" },
      a: { en: "This is very common with Qi Deficiency. You have a limited energy budget each day, and external obligations (work, family, deadlines) force you to spend it. By the time you get to things that are just for you, the tank is empty. It's not that you don't care about your own goals. It's that your Qi runs out before you get to them.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help restore motivation?", "zh-TW": "", ja: "" },
      a: { en: "Qi-building foods are the foundation: congee with jujube dates and ginger, chicken broth, sweet potato, and goji berries. If you also run cold (Yang Deficiency), add warming foods like lamb, cinnamon, and black pepper. The key shift is from cold, raw, and sugary foods to warm, cooked, and nourishing ones. Most people feel a difference in their drive within 2 to 3 weeks.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with low motivation?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match. Their battery is genuinely smaller. The Yang Deficient type (阳虚质) can also feel unmotivated because their internal furnace is underpowered, making everything feel like it takes more effort than it should. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-keep-breaking-out": [
    {
      q: { en: "Why does my acne keep coming back in the same places?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, recurring acne in the same area often points to an internal pattern rather than a surface problem. The forehead is linked to the Heart and may signal internal heat or stress. The chin and jawline are linked to the Kidneys and reproductive system, where hormonal fluctuations interact with Phlegm Damp. The cheeks connect to the Lung and Spleen, where dampness and heat pool. Topical products clean the outside, but the inside keeps generating the same conditions.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is acne always hormonal?", "zh-TW": "", ja: "" },
      a: { en: "Not always, though hormones play a role in many cases. TCM looks at acne through a different lens: it's often a combination of Dampness (which creates the oiliness and swelling) and Heat (which creates the redness and inflammation). Hormones can fan the flames, but if the underlying Damp-Heat pattern isn't addressed, the breakouts return regardless of what hormones are doing.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What dietary changes may help with breakouts?", "zh-TW": "", ja: "" },
      a: { en: "Reduce dairy, sugar, fried food, and alcohol. These are the top Damp-Heat generators in TCM. Add foods that drain dampness (adzuki beans, coix seed, celery) and foods that gently clear heat (mung bean soup, cucumber, green tea in moderation). If Qi Deficiency is part of your pattern, don't go overboard with cold, raw \"detox\" foods, as they can weaken your digestion further.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with persistent acne?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the most common match. Their body holds onto moisture, creating the oily, swollen quality of persistent breakouts. The Qi Deficient type (气虚质) may also break out because their skin isn't getting enough energy to renew itself efficiently. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-hair-falling-out": [
    {
      q: { en: "Is hair loss always genetic?", "zh-TW": "", ja: "" },
      a: { en: "Genetics play a significant role in pattern hair loss, but not all hair thinning is genetic. TCM views hair as an extension of Blood and Kidney energy. When these are depleted, the hair loses its nourishment and falls out. Even if you have a genetic predisposition, the rate and severity of hair loss may be influenced by your body's internal state.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does hair seem to fall out more at certain times?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, hair health is closely tied to the Kidneys and Liver Blood. Periods of intense stress, poor sleep, or illness deplete these systems. Seasonal shifts can also play a role. Many people notice more shedding after prolonged heat (which consumes Yin) or during recovery from an illness (which depletes Qi and Blood). If the shedding comes in waves rather than a steady trickle, it's worth looking at what was happening in your life 2 to 3 months before.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with hair thinning from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Blood-nourishing foods: black sesame, goji berries, spinach, beetroot, and bone broth. Yin-nourishing foods if you also run warm at night: pear, black fungus, lotus seed, and tremella mushroom. Avoid excessive spicy food, alcohol, and very salty foods, which may deplete the fluids that keep your hair rooted. Go to bed before 11 PM, as sleep is when Blood and Yin are replenished.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with hair loss?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match. Their internal cooling system is undercharged, which dries out the fluids that nourish hair follicles. The Qi Deficient type (气虚质) may also experience hair thinning because Blood circulation to the scalp is weak. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-so-irritable": [
    {
      q: { en: "Is irritability the same as anger?", "zh-TW": "", ja: "" },
      a: { en: "Not quite. Anger is a full-blown emotion directed at something specific. Irritability is a baseline state of being easily annoyed, where small things set you off that normally wouldn't. In TCM, irritability is often the early warning sign of Liver Qi Stagnation, before it develops into full anger or mood swings. Think of it as a pot on medium heat. Anger is the boil. Irritability is the simmer.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why am I more irritable in the morning?", "zh-TW": "", ja: "" },
      a: { en: "If you wake up already irritated, TCM points to Liver Qi Stagnation. Between 1 AM and 3 AM, the Liver meridian is most active. If your Liver Qi is stuck, this overnight processing doesn't complete properly, and you wake up with pent-up energy that has nowhere to go. The irritability is your body's way of saying something didn't move when it should have.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can I do in the moment when irritability spikes?", "zh-TW": "", ja: "" },
      a: { en: "Breathe out longer than you breathe in. This directly moves stagnant Qi. Then drink something warm: rose tea, chrysanthemum tea, or even just warm water. Avoid coffee when you're already irritable, as it adds fuel to the internal pressure. If you can, take a 10-minute walk without your phone. Movement plus warm fluids plus breathing is the TCM version of hitting the reset button.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with chronic irritability?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match. About 8% of people have this pattern. Their energy tends to pool and press outward as irritability, sighing, or chest tightness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-cant-i-lose-weight": [
    {
      q: { en: "Why can't I lose weight even though I'm eating less?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, the issue often isn't how much you eat but how well your body processes what you eat. When Phlegm Damp is present, your metabolism is like a sink with a slow drain. Reducing the water (eating less) helps a little, but until you clear the drain, the water keeps rising. Calorie restriction alone may not work because the underlying pattern keeps your body in storage mode.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is this different from just needing more exercise?", "zh-TW": "", ja: "" },
      a: { en: "Yes. If the problem were simply too many calories, eating less and moving more would work reliably. But many people do both and still can't lose weight. TCM sees this as a functional pattern: Phlegm Damp blocks your body's ability to metabolize efficiently, and Qi Deficiency means you lack the energy to power a healthy metabolism. Until those patterns shift, exercise may just make you more tired without moving the scale.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with stubborn weight from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Damp-draining foods are the foundation: adzuki beans, coix seed, winter melon, celery, and modest green tea. Warm, cooked meals support the Spleen, which is the organ responsible for metabolizing fluids. Avoid dairy, sweets, fried food, cold drinks, and beer, which add moisture to a system that's already struggling to drain it. For Qi Deficiency-related weight issues, add congee, sweet potato, and ginger tea to build the energy your metabolism needs.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with stubborn weight?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match. Their body holds onto moisture and metabolic waste. The Qi Deficient type (气虚质) can also struggle because their metabolism runs on low power. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-acid-reflux": [
    {
      q: { en: "Is acid reflux the same as GERD?", "zh-TW": "", ja: "" },
      a: { en: "Acid reflux is the symptom: stomach acid flowing backward into the esophagus. GERD (Gastroesophageal Reflux Disease) is the chronic form, where reflux happens frequently enough to be classified as a condition. If you experience reflux more than twice a week, a doctor may diagnose GERD. TCM doesn't use either term, but it treats the same symptoms through a different lens: heat rising when it should be staying down.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does reflux get worse at night?", "zh-TW": "", ja: "" },
      a: { en: "When you lie flat, gravity stops helping keep stomach contents down. In TCM, nighttime reflux also points to Stomach Heat, which tends to rise when your body is horizontal. Eating late gives your body less time to digest before you lie down, and the heat from a heavy meal has nowhere to go but up. Try finishing your last meal at least 3 hours before bed and sleeping with your head slightly elevated.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with acid reflux from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Cooling, easy-to-digest foods: congee, steamed vegetables, pear, and cucumber. Ginger tea in small amounts can help if the reflux involves cold and dampness. Avoid spicy food, alcohol, coffee, fried food, and very sour foods, which generate the heat that rises as reflux. Eating smaller, warmer meals at regular times helps your Stomach process food without creating the upward pressure that causes reflux.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with acid reflux?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the most common match. Dampness creates the heavy, sluggish quality that allows stomach contents to rise. The Damp Heat type (湿热质) may also experience reflux because heat naturally rises, and when combined with dampness, it pushes upward as heartburn. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-headaches": [
    {
      q: { en: "Are recurring headaches normal?", "zh-TW": "", ja: "" },
      a: { en: "Common, but not normal. TCM distinguishes between occasional headaches from obvious causes (dehydration, lack of sleep, too much screen time) and recurring headaches that keep coming back without a clear trigger. The latter usually points to an internal pattern, most commonly Qi Stagnation (energy stuck in the head) or Yin Deficiency (insufficient cooling fluid to keep the head comfortable). If your headaches are frequent, severe, or changing in pattern, see a doctor first to rule out structural causes.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why do I get headaches when I'm stressed?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, stress causes Liver Qi Stagnation. When Qi gets stuck, it creates pressure, and that pressure often collects in the head because it's the highest point. Think of it like a pipe system where a blockage causes pressure to build upstream. The headache isn't really about your head. It's about the energy that can't flow smoothly through your body. This is why the headaches often come with neck and shoulder tension.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can I do to prevent recurring headaches?", "zh-TW": "", ja: "" },
      a: { en: "Move regularly. Gentle movement prevents Qi from stagnating. A 20-minute walk can prevent a headache better than painkillers for some people. Drink rose tea or chrysanthemum tea to support smooth Liver Qi flow. Avoid skipping meals, which weakens your system and makes it harder to move stagnant energy. If Yin Deficiency is part of your pattern (you also run warm at night), prioritize sleep and add cooling foods like pear and black sesame.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with recurring headaches?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match. Their energy tends to pool and create pressure, especially in the head. The Yin Deficient type (阴虚质) may also experience headaches from internal heat rising to the head. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-feel-dizzy": [
    {
      q: { en: "Is dizziness the same as vertigo?", "zh-TW": "", ja: "" },
      a: { en: "Not exactly. Vertigo is a specific type of dizziness where you feel like you or your surroundings are spinning. General dizziness includes lightheadedness, unsteadiness, or feeling like you might faint. TCM addresses both but distinguishes between them. Vertigo often involves more Phlegm Damp obstructing the head. General dizziness is more commonly linked to Qi or Blood not reaching the brain adequately.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why do I feel dizzy when I stand up quickly?", "zh-TW": "", ja: "" },
      a: { en: "This is one of the most common presentations of Qi Deficiency. When you stand, your body needs to quickly redirect Blood upward to your brain. If your Qi is too weak to move Blood that fast, there's a brief gap where your brain doesn't get enough. The dizziness is your brain saying it needs a moment. In TCM, this is a clear sign that your Qi isn't strong enough to manage the basic transitions your body goes through daily.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with dizziness from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "For Qi Deficiency-related dizziness: congee, jujube dates, sweet potato, ginger tea, and chicken broth to build energy. For Yin Deficiency-related dizziness (accompanied by feeling warm or dry): black sesame, goji berries, pear, and lotus seed to replenish fluids. In both cases, warm cooked meals are better than cold raw foods, which drain the energy your body needs to keep Blood flowing upward to your head.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with dizziness?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match. They lack the energy to move Blood to the head efficiently. The Yin Deficient type (阴虚质) may also experience dizziness when internal heat disturbs the head. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-always-thirsty": [
    {
      q: { en: "Is being always thirsty the same as diabetes?", "zh-TW": "", ja: "" },
      a: { en: "No, but excessive thirst is one of the classic signs of diabetes, so it's worth getting your blood sugar checked. If your glucose levels are normal and you're still constantly thirsty, TCM offers a different explanation. In TCM, unquenchable thirst is often a sign of Yin Deficiency: your body lacks the cooling, moistening force that keeps your mouth and throat comfortable. You're not actually dehydrated. You're internally dry.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does drinking more water not fix the thirst?", "zh-TW": "", ja: "" },
      a: { en: "Because the problem isn't water volume. It's moisture distribution. In TCM, Yin is the force that holds and distributes moisture throughout your body. When Yin is deficient, you can drink gallons and still feel dry because your body can't retain or distribute the fluid properly. It's like pouring water into a colander. The water goes through but doesn't stay where it's needed.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with constant thirst from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Yin-nourishing foods that help your body retain moisture: pear, lily bulb, tremella mushroom, lotus seed, black sesame, and cucumber. Drink warm or room-temperature water instead of ice-cold water, which shocks your Spleen and makes it harder to process fluids. Avoid spicy food, alcohol, coffee, and deep-fried food, which generate internal heat and further dry out your body. Going to bed before 11 PM is one of the most effective things you can do, because Yin is replenished during sleep.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with constant thirst?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match. Their internal cooling system is undercharged, which creates internal dryness and the sensation of unquenchable thirst. About 10% of people have this pattern. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-lower-back-pain": [
    {
      q: { en: "Is lower back pain always a structural problem?", "zh-TW": "", ja: "" },
      a: { en: "Not always. Herniated discs, spinal stenosis, and kidney stones are structural causes that show up on scans. But many people have normal MRIs and still live with chronic lower back pain. TCM looks at this differently: the lower back is the home of the Kidneys in Chinese medicine, and pain there often points to Kidney Yang or Kidney Yin Deficiency. The structure is fine, but the energy supporting it is undercharged.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does my lower back hurt more when it's cold?", "zh-TW": "", ja: "" },
      a: { en: "This is a classic sign of Yang Deficiency. Cold causes contraction and slows circulation. If your Kidney Yang is already low, your lower back doesn't have enough warmth to maintain flexibility and blood flow. Cold weather makes the area tighter, stiffer, and more painful. This is why TCM often recommends warm ginger compresses and avoiding cold drinks for lower back pain that worsens in winter.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with lower back pain from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Kidney-warming foods are the foundation: black beans, walnuts, chestnuts, lamb, and goji berries. Ginger and cinnamon tea can help if the pain worsens with cold. Bone broth is particularly valued because it directly supports the bones and connective tissue. Avoid ice-cold drinks, excessive raw foods, and too much salt, which can strain the Kidneys in TCM theory.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with chronic lower back pain?", "zh-TW": "", ja: "" },
      a: { en: "The Yang Deficient type (阳虚质) is the primary match. Their internal heater is underpowered, and the lower back is the first place that feels it. The Qi Deficient type (气虚质) may also experience lower back aching from sheer lack of energy to support the muscles. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-eczema": [
    {
      q: { en: "Is eczema the same as dermatitis?", "zh-TW": "", ja: "" },
      a: { en: "They overlap significantly. Eczema (atopic dermatitis) is a specific type of dermatitis characterized by dry, itchy, inflamed skin that comes and goes in cycles. TCM doesn't use either term, but it recognizes the pattern: flare-ups that correspond to internal heat, dampness, or both. The flare-up is the visible tip of an internal pattern that's been building underneath.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does eczema keep coming back?", "zh-TW": "", ja: "" },
      a: { en: "Because most treatments address the surface, not the root. Creams suppress the inflammation, but they don't change the internal conditions that created it. In TCM, recurring eczema is often a Damp Heat pattern. Dampness creates the oozing and itchiness. Heat creates the redness and inflammation. Creams cool the surface temporarily, but the dampness and heat keep regenerating from inside. Until those patterns shift, the eczema returns.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What dietary changes may help with eczema?", "zh-TW": "", ja: "" },
      a: { en: "For Damp Heat-related eczema: reduce dairy, alcohol, spicy food, fried food, and shellfish, which generate both heat and moisture. Add cooling, damp-draining foods: mung bean soup, coix seed, celery, cucumber, and winter melon. For Yin Deficiency-related eczema (dry, cracking skin): pear, black sesame, tremella mushroom, and lotus seed to rebuild internal moisture. In both cases, reducing sugar can make a noticeable difference within weeks.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with eczema?", "zh-TW": "", ja: "" },
      a: { en: "The Damp Heat type (湿热质) is the primary match. Their body runs hot and sticky, creating the perfect conditions for skin flare-ups. The Sensitive type (特禀质) may also experience eczema because their body reacts to environmental triggers more intensely. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-sweat-so-much": [
    {
      q: { en: "Is excessive sweating always hyperhidrosis?", "zh-TW": "", ja: "" },
      a: { en: "No. Hyperhidrosis is a specific medical diagnosis where sweating is excessive and unrelated to temperature or exercise. Many people sweat more than average without meeting the clinical criteria. TCM offers a different distinction: daytime sweating with minimal effort often points to Qi Deficiency, while night sweats point to Yin Deficiency. Figuring out when you sweat tells you what pattern may be behind it.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why do I sweat during the day but not at night?", "zh-TW": "", ja: "" },
      a: { en: "This is the hallmark of Qi Deficiency sweating. In TCM, your Wei Qi (defensive energy) acts like a gatekeeper at your skin's surface. It decides when to open your pores (to release heat) and when to close them (to keep warmth in). When Qi is weak, the gate doesn't close properly. Minor exertion like climbing stairs or eating a warm meal opens the floodgates. Night sweats, by contrast, are usually Yin Deficiency, where internal heat builds when your body should be cooling down.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can I do to reduce excessive sweating?", "zh-TW": "", ja: "" },
      a: { en: "For Qi-related daytime sweating: build Qi with congee, jujube dates, sweet potato, and gentle movement. Avoid overexertion that drains what little Qi you have. For Yin-related night sweating: nourish Yin with pear, black sesame, lily bulb, and tremella mushroom. Go to bed before 11 PM. For both patterns, avoid spicy food, alcohol, and coffee, which generate internal heat that your body tries to release through sweating.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with excessive sweating?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the most common match for daytime sweating. Their defensive energy can't regulate the pores properly. The Yin Deficient type (阴虚质) is the most common match for night sweats. Their internal heat builds at night. Some people have both patterns, which means sweating around the clock. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-joint-pain": [
    {
      q: { en: "Is joint pain always arthritis?", "zh-TW": "", ja: "" },
      a: { en: "No. Arthritis is a specific structural diagnosis involving joint inflammation or degeneration that shows up on X-rays and blood tests. Many people have joint pain that doesn't meet the criteria for any type of arthritis. In TCM, joint pain without structural damage often falls under a category called Bi Syndrome, which literally means 'obstruction.' Something is blocking the normal flow of Qi and Blood through the joint. Remove the blockage, and the pain often improves.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does my joint pain get worse in cold or damp weather?", "zh-TW": "", ja: "" },
      a: { en: "This is one of the most validated observations in TCM. Cold causes contraction, which tightens the tissues around joints. Dampness creates heaviness and swelling. When both are present, your joints feel like they're packed in wet sand. People with Yang Deficiency are especially sensitive to cold-related joint pain. People with Phlegm Damp are especially sensitive to humidity-related joint pain. Knowing which one you are helps you choose the right approach.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with joint pain from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "For cold-type joint pain: ginger, cinnamon, black pepper, lamb, and warming soups to improve circulation. For damp-type joint pain: adzuki beans, coix seed, winter melon, and celery to drain moisture. For blood stasis-related joint pain (fixed, stabbing pain): turmeric, hawthorn, vinegar, and rose tea to encourage circulation. In all cases, regular gentle movement is more important than any specific food. Joints need motion to stay lubricated.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with joint pain?", "zh-TW": "", ja: "" },
      a: { en: "The Yang Deficient type (阳虚质) is the primary match. Their body lacks the warmth to keep joints supple and well-circulated. The Blood Stasis type (血瘀质) may also experience joint pain from poor circulation to the extremities. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-always-thirsty-at-night": [
    {
      q: { en: "Is being thirsty at night different from being thirsty during the day?", "zh-TW": "", ja: "" },
      a: { en: "Yes, and the distinction matters. Daytime thirst can have many causes: not drinking enough, dry air, high salt intake, or hot weather. Nighttime thirst is more specific in TCM. It often points to Yin Deficiency, because nighttime is when Yin should be dominant. If your Yin is low, internal heat builds during the night, drying out your mouth and throat. Waking up thirsty at 2 or 3 AM is a classic Yin Deficiency signal.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Could nighttime thirst be a sign of diabetes?", "zh-TW": "", ja: "" },
      a: { en: "It could be, so getting your blood sugar checked is the right first step. Excessive thirst and frequent urination, especially at night, are classic diabetes symptoms. But if your blood sugar is normal and you're still waking up parched, TCM offers a different framework. Yin Deficiency creates internal dryness that peaks at night because your body's cooling system is undercharged. The thirst is real. The cause may not be what you think.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can I do to stop waking up thirsty?", "zh-TW": "", ja: "" },
      a: { en: "Go to bed before 11 PM. This is the single most important change for Yin-related nighttime thirst. Yin replenishes during sleep, especially the hours before midnight. Eat Yin-nourishing foods in the evening: pear soup, lily bulb, tremella mushroom, or lotus seed porridge. Avoid spicy food, alcohol, and coffee after noon, as they generate internal heat that builds through the night. Keep a glass of warm (not cold) water by your bed.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with nighttime thirst?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match. Their internal moisture is low, and the dryness peaks at night when Yin should be replenishing but can't keep up. About 10% of people have this pattern. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-hot-flashes": [
    {
      q: { en: "Are hot flashes only a menopause thing?", "zh-TW": "", ja: "" },
      a: { en: "No. Hot flashes are most commonly associated with menopause, and that association is valid. But hot flashes can happen at any age, and in both men and women. In TCM, hot flashes aren't defined by hormones. They're defined by a pattern: Yin Deficiency. When your body's cooling system is undercharged, internal heat builds up and periodically bursts through, creating that sudden flushing sensation. Whether you're 25 or 55, the underlying pattern can be the same.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What's happening in my body during a hot flash?", "zh-TW": "", ja: "" },
      a: { en: "In TCM terms, a hot flash is Yang rising uncontrollably because Yin can't anchor it. Yin is the cooling, grounding force. Yang is the heating, rising force. Normally they balance each other. When Yin is low, Yang has nothing holding it down, and it surges upward as a wave of heat through your chest, face, and neck. It's like a pot boiling over because there isn't enough liquid to absorb the heat.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with hot flashes?", "zh-TW": "", ja: "" },
      a: { en: "Yin-nourishing foods are the foundation: pear, black sesame, lily bulb, tremella mushroom, lotus seed, and cucumber. These help rebuild the cooling system. Avoid the main heat generators: spicy food, alcohol, coffee, lamb, and deep-fried food. These add fuel to the fire. Cooling teas like chrysanthemum and peppermint may provide relief during a flash. Eating smaller, cooler meals in the evening may reduce nighttime hot flashes.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with hot flashes?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match. Their cooling system is undercharged, so internal heat builds and surges periodically. The Damp Heat type (湿热质) may also experience heat surges, but these tend to feel sticky and oppressive rather than sudden and dry. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-water-retention": [
    {
      q: { en: "Is water retention the same as edema?", "zh-TW": "", ja: "" },
      a: { en: "Water retention is the general term for excess fluid in the body. Edema is the medical term for visible, measurable swelling from fluid accumulation. You can have water retention without it being severe enough to be called edema. In TCM, the distinction matters less than the pattern. Whether it's mild puffiness or visible swelling, TCM traces it back to the Spleen's inability to transform and transport fluids, and the Kidneys' inability to regulate water metabolism.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why do I feel puffier in humid weather?", "zh-TW": "", ja: "" },
      a: { en: "This is a hallmark of the Phlegm Damp pattern. Your body is already holding onto moisture internally. When the external environment is also humid, your body can't evaporate or drain fluids as efficiently, and the internal moisture gets worse. It's like wearing a wet raincoat on a rainy day. You were already damp, and now there's nowhere for the moisture to go. Air conditioning and dehumidifiers can help, but the real fix is improving your body's internal drainage capacity.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with water retention?", "zh-TW": "", ja: "" },
      a: { en: "Damp-draining foods are the answer: adzuki beans (the single most effective food for water retention in TCM), coix seed, winter melon, celery, cucumber, and modest amounts of green tea. These help your body process and eliminate excess moisture. Reduce salt, dairy, sweets, fried food, and cold drinks, which either add moisture or slow down your body's ability to drain it. Warm, cooked meals support the Spleen's fluid-processing function.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with water retention?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match. Their body holds onto moisture and metabolic waste instead of processing it efficiently. About 10% of people fall into this category. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-always-constipated": [
    {
      q: { en: "Is chronic constipation always a fiber problem?", "zh-TW": "", ja: "" },
      a: { en: "No. Increasing fiber helps some people, but it makes others worse. In TCM, constipation isn't one problem. It's several different patterns that produce the same symptom. If you have dry-type constipation (hard, pellet-like stools), you need moisture, not fiber. Fiber without moisture is like adding more cargo to a ship that's already run aground. If you have sluggish-type constipation (infrequent but normal-texture stools), your intestines lack the energy to move things along. Fiber might help here, but addressing the underlying energy deficit works better.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does constipation get worse when I'm stressed?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, stress causes Liver Qi Stagnation. The Liver is responsible for smooth flow throughout the body, including the intestines. When Liver Qi is stuck, everything downstream slows down. The Liver and the Spleen (digestion) have a close relationship. When the Liver is agitated, it overcontrols the Spleen, and the Spleen's ability to move things through the digestive tract weakens. This is why stress-related constipation often comes with bloating and irritability.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with constipation from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "For dry-type constipation (Yin Deficiency): pear, black sesame, honey, banana, and warm water first thing in the morning. These add moisture and lubrication. For sluggish-type constipation (Qi Deficiency or Phlegm Damp): sweet potato, steamed vegetables, and warm, cooked meals that are easy to digest. For stress-related constipation: rose tea, tangerine peel tea, and citrus to move Liver Qi. In all cases, warm water on an empty stomach in the morning can trigger the digestive reflex.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with chronic constipation?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the most common match for sluggish constipation. Their digestion is slow and heavy. The Yin Deficient type (阴虚质) is the most common match for dry constipation. Their intestines lack the moisture to move stool smoothly. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-libido-low": [
    {
      q: { en: "Can body type really affect libido?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, libido is closely tied to your overall energy reserve and internal warmth. The Kidney system governs reproductive energy, and when it's underfueled, desire is one of the first things to go quiet. It's not a psychological issue. It's your body deprioritizing non-essential functions when resources are low.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why did my libido disappear suddenly?", "zh-TW": "", ja: "" },
      a: { en: "It rarely disappears overnight, even if it feels that way. More likely, chronic stress, poor sleep, or a diet that doesn't support your constitution has been quietly draining your reserves for months or years. Libido is like the canary in the coal mine: when overall energy drops, it's one of the first signals.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help restore desire from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Warming, nourishing foods that support the Kidney system: walnuts, black sesame, goji berries, lamb (for Yang Deficient types), and dark-colored beans. Avoid ice-cold drinks and excessive raw food, which directly deplete the warmth your reproductive system needs. Consistent warm meals over 2-4 weeks may make more difference than you expect.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with low libido?", "zh-TW": "", ja: "" },
      a: { en: "Yang Deficient (阳虚质) and Qi Deficient (气虚质) types are the most common matches. Both run low on the warmth and fuel that reproductive energy depends on. The Yang Deficient type may also have cold hands and lower back soreness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-pms": [
    {
      q: { en: "Why do I get moody and bloated before every period?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, the premenstrual phase is when Qi and Blood are gathering in the lower abdomen. If your Qi flows smoothly, this transition happens without drama. If your Qi is stuck, it builds pressure like a blocked pipe. That pressure shows up as mood swings, breast tenderness, bloating, and irritability. The key is that PMS severity reflects how freely your energy moves the rest of the month.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can changing my diet really reduce PMS?", "zh-TW": "", ja: "" },
      a: { en: "It can make a noticeable difference. Foods that support smooth Qi flow include citrus fruits, rose tea, fennel, and leafy greens. Foods that make Qi stagnation worse include excessive caffeine, alcohol, and very greasy meals. Starting these changes 1-2 weeks before your period may reduce the intensity of symptoms.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is severe PMS normal?", "zh-TW": "", ja: "" },
      a: { en: "Mild changes before your period are common. But if PMS disrupts your relationships, work, or daily functioning, that's your body asking for attention. In TCM, severe PMS often points to significant Qi Stagnation. Gentle movement, warm meals, and stress management may help. If symptoms are extreme, check with a healthcare provider to rule out PMDD or other conditions.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with PMS?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match. Their energy tends to get stuck, and the premenstrual phase amplifies this pattern. They may also experience mood swings, frequent sighing, and chest tightness. Take the free EastType quiz to discover your type and learn personalized suggestions.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-metabolism-so-slow": [
    {
      q: { en: "Is a slow metabolism just about getting older?", "zh-TW": "", ja: "" },
      a: { en: "Age plays a role, but it's not the whole story. In TCM, metabolic speed is tied to how well your Spleen transforms food into energy and how efficiently your body moves fluids. When your Spleen is weak or your system is bogged down with dampness, your metabolism slows regardless of age. Many people in their 20s and 30s already have patterns that slow metabolism.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why does eating less not speed up my metabolism?", "zh-TW": "", ja: "" },
      a: { en: "Because eating less without eating right is like putting less gas in a car with a clogged engine. The problem isn't fuel quantity. It's fuel processing. In TCM, your Spleen needs warmth and the right types of food to function well. Cold, raw, and restrictive diets weaken the Spleen further, which actually slows metabolism more.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help boost metabolism from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Ginger, cinnamon, brown rice, adzuki beans, and warm cooked meals support your Spleen and help clear dampness. Avoid cold drinks, raw salads, excessive dairy, and very sweet foods, which contribute to the sluggishness. Consistent meal times matter more than portion control for this pattern.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with a slow metabolism?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match. Their body holds onto moisture and weight. The Qi Deficient type (气虚质) also struggles because their body lacks the energy to run metabolic processes efficiently. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-poor-circulation": [
    {
      q: { en: "Is poor circulation just about cold hands and feet?", "zh-TW": "", ja: "" },
      a: { en: "Cold extremities are the most obvious sign, but poor circulation in TCM is a broader pattern. It may also show up as numbness or tingling, slow wound healing, easy bruising, a pale complexion, and feeling mentally foggy. Your body is rationing blood flow, pulling it from the edges to protect the core.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can poor circulation improve without medication?", "zh-TW": "", ja: "" },
      a: { en: "In many cases, yes. If the underlying cause is a constitutional pattern like Yang Deficiency or Blood Stasis, warming foods, regular gentle movement, and specific daily habits may significantly improve circulation over 4-8 weeks. Ginger, cinnamon, and foods that promote blood movement like hawthorn berry and turmeric may be helpful.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why is my circulation worse in winter?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, cold contracts and slows things down. If your internal warmth is already low (Yang Deficiency), external cold makes it worse. Your body goes into deeper conservation mode, pulling even more warmth from your extremities. This is why warming strategies like foot soaks, ginger tea, and thermal underwear may help more than you'd expect.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with poor circulation?", "zh-TW": "", ja: "" },
      a: { en: "The Yang Deficient type (阳虚质) runs cold and has underpowered circulation. The Blood Stasis type (血瘀质) has circulation that flows but too slowly, leading to stagnation. Both types benefit from warmth and movement. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-seasonal-allergies": [
    {
      q: { en: "Why do I get allergies every year at the same time?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, seasonal allergies are not primarily about pollen. They are about your body's defensive energy (Wei Qi) being too weak to handle seasonal transitions. When your protective barrier is thin, things that shouldn't bother you, like tree pollen or grass, trigger an overreaction. The allergies are real. The root cause is a defensive system that's under-resourced.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can diet really help with seasonal allergies?", "zh-TW": "", ja: "" },
      a: { en: "It may help more than you expect. In TCM, foods that support your protective energy include jujube dates, astragalus root (in soup), ginger, and warm bone broth. Foods that weaken your defenses include excessive cold drinks, sugar, and dairy during allergy season. Starting these dietary shifts 4-6 weeks before your typical allergy season may reduce severity.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Are allergies a sign of weak immunity?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, allergies are a sign of dysregulated immunity, not necessarily weak immunity. Your immune system is overreacting to harmless substances. This is why the TCM approach focuses on regulation and balance rather than simply boosting immunity. The Sensitive constitution is especially prone to this pattern.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with seasonal allergies?", "zh-TW": "", ja: "" },
      a: { en: "The Sensitive type (特禀质) is the primary match. Their body overreacts to environmental triggers of all kinds, including pollen, dust, and temperature changes. They may also have food sensitivities and skin reactions. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-dark-circles": [
    {
      q: { en: "Are dark circles always a sleep problem?", "zh-TW": "", ja: "" },
      a: { en: "Not always. Poor sleep makes them worse, but many people with dark circles sleep just fine. In TCM, dark circles under the eyes are often linked to Kidney energy depletion. The area under the eyes corresponds to the Kidney system in TCM facial mapping. When Kidney reserves are low, darkness and puffiness show up there regardless of how much you sleep.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can diet help reduce dark circles?", "zh-TW": "", ja: "" },
      a: { en: "It may help, especially if the root is Kidney depletion or poor circulation. Black sesame, walnuts, goji berries, and dark-colored beans support the Kidney system. Warm, nourishing soups and adequate water intake help circulation. The key is consistency over weeks, not a quick fix. Cold drinks and excessive salt make them worse.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why do my dark circles look worse some days?", "zh-TW": "", ja: "" },
      a: { en: "Fatigue, stress, poor circulation on cold days, and high-salt meals can all make dark circles more visible. In TCM, anything that further depletes your Kidney energy or slows blood flow will show up under your eyes first. Late nights, emotional stress, and skipped meals are the most common triggers.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with dark circles?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match because Yin depletion directly affects the Kidney system. The Qi Deficient type (气虚质) is the second match because poor circulation leads to blood pooling under the eyes. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-always-hungry": [
    {
      q: { en: "Why am I hungry right after eating a full meal?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, this often means your Spleen is not properly transforming food into usable energy. You ate, but your body didn't extract what it needed, so it sends the hunger signal again. It's like filling a bucket with a hole in the bottom. The solution isn't more food. It's food your body can actually use: warm, cooked, and easy to digest.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is constant hunger the same as having a fast metabolism?", "zh-TW": "", ja: "" },
      a: { en: "Not necessarily. A fast metabolism burns what you eat efficiently and asks for more. In TCM, constant hunger is often the opposite: your body is inefficient at converting food into energy, so it keeps asking for more input. This is especially common in the Phlegm Damp pattern, where the Spleen is overwhelmed and underperforming.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help control constant hunger?", "zh-TW": "", ja: "" },
      a: { en: "Warm, cooked meals with complex carbohydrates (brown rice, sweet potato), adequate protein, and foods that support the Spleen (Chinese yam, millet, ginger soup). Avoid snacking on cold, sugary, or processed foods, which spike hunger rather than satisfy it. Eating at consistent times helps regulate the hunger signal.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with constant hunger?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match because their Spleen struggles to process food efficiently. The Yin Deficient type (阴虚质) may also experience hunger because their body lacks the internal moisture to feel satisfied. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-period-cramps": [
    {
      q: { en: "Why do my cramps feel worse than everyone else's?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, painful cramps often point to Qi Stagnation or Blood Stasis. When energy and blood don't flow smoothly through the lower abdomen, pressure builds and causes sharp, gripping pain. It's not about pain tolerance. Your body is literally struggling to move things along. Ginger tea, warmth on your lower belly, and gentle movement may help more than you expect.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can what I eat really affect period pain?", "zh-TW": "", ja: "" },
      a: { en: "It may make more difference than you think. Cold and raw foods directly slow circulation in your lower abdomen. Ice water, salads, and cold smoothies during the week before your period may worsen cramping. Warm, cooked meals and ginger-based teas support blood flow and may reduce the intensity.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is severe period pain normal?", "zh-TW": "", ja: "" },
      a: { en: "Mild cramping is common. But if your pain forces you to cancel plans, miss work, or rely heavily on painkillers every month, that's your body asking for attention. In TCM, this severity often points to significant Qi or Blood stagnation. If pain is extreme or suddenly gets worse, check with a doctor to rule out conditions like endometriosis.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with period cramps?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match because their energy tends to get stuck, causing pressure and pain. The Blood Stasis type (血瘀质) also experiences cramps because blood flow is sluggish. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-period-irregular": [
    {
      q: { en: "What counts as an irregular period?", "zh-TW": "", ja: "" },
      a: { en: "A typical cycle is 21 to 35 days. If yours varies by more than a week each month, comes less than 8 times a year, or skips months entirely, it's considered irregular. In TCM, this variability points to either stuck energy (Qi Stagnation) or cold slowing things down (Yang Deficiency). Both are common and respond well to dietary and lifestyle changes.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can stress really make my period late?", "zh-TW": "", ja: "" },
      a: { en: "Absolutely. Stress is one of the most common causes of irregular cycles in TCM. When you're stressed, Liver Qi gets stuck, and the Liver is responsible for smooth menstrual flow. It's like a traffic jam on the highway to your uterus. Once the stress eases and Qi starts flowing again, your cycle often regulates on its own.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help regulate my cycle?", "zh-TW": "", ja: "" },
      a: { en: "Warm, cooked foods support regular cycles. Ginger tea, rose tea, and fennel may help move Qi. Avoid excessive cold drinks, especially the week before your expected period. If cold is the culprit (your periods are often late and you feel cold), warming foods like lamb, cinnamon, and ginger are especially helpful.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with irregular periods?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the most common match because stuck energy disrupts the regular rhythm. The Yang Deficient type (阳虚质) also experiences irregularity because cold slows everything down. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-period-so-heavy": [
    {
      q: { en: "How heavy is too heavy for a period?", "zh-TW": "", ja: "" },
      a: { en: "If you're soaking through a pad or tampon every hour for several hours, passing clots larger than a coin, or your period lasts longer than 7 days, that's considered heavy. In TCM, heavy bleeding often relates to Blood Stasis (blood that doesn't move gets pushed out in large volume) or Qi Deficiency (too weak to hold the blood in its proper channels).", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can diet affect how heavy my period is?", "zh-TW": "", ja: "" },
      a: { en: "It may. Foods that support blood movement, like hawthorn berry and dark-colored beans, may help if Blood Stasis is the root cause. Foods that build energy, like jujube dates and sweet potato, may help if Qi Deficiency is the issue. Excessive spicy food and alcohol may worsen heavy bleeding in some patterns.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Should I be worried about heavy periods?", "zh-TW": "", ja: "" },
      a: { en: "If heavy bleeding is new, getting worse, or causing fatigue and dizziness, see a doctor to rule out fibroids, thyroid issues, or other conditions. TCM constitutional patterns can coexist with these conditions. The constitutional approach complements but doesn't replace medical evaluation.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with heavy periods?", "zh-TW": "", ja: "" },
      a: { en: "The Blood Stasis type (血瘀质) is the primary match because sluggish blood flow leads to heavier discharge. The Qi Deficient type (气虚质) may also experience heavy bleeding because their body lacks the energy to manage blood flow properly. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-breast-tenderness": [
    {
      q: { en: "Why do my breasts hurt before every period?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, the breasts are on the Liver and Stomach meridians. Before your period, Qi and Blood gather in the lower abdomen. If your Liver Qi is stuck, that gathering creates upstream pressure in the breasts. The tenderness is essentially a traffic jam in your meridian system.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What may help with premenstrual breast tenderness?", "zh-TW": "", ja: "" },
      a: { en: "Rose tea and citrus peel tea may help move Liver Qi and reduce the pressure. Avoid caffeine and salty foods the week before your period, as both may worsen fluid retention in breast tissue. A warm compress on your chest and gentle arm movement may also provide relief.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is breast tenderness a sign of something serious?", "zh-TW": "", ja: "" },
      a: { en: "Cyclic tenderness that comes and goes with your period is common and usually benign in TCM terms. But if the pain is constant, one-sided, or you feel a lump, get it checked by a doctor. TCM patterns and medical conditions can coexist.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with breast tenderness?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match because stuck Liver Qi directly affects the breast area. They may also experience mood swings, frequent sighing, and chest tightness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-menopause-symptoms": [
    {
      q: { en: "Can TCM really help with menopause?", "zh-TW": "", ja: "" },
      a: { en: "Many women find TCM-based dietary and lifestyle adjustments helpful during menopausal transition. The TCM view is that menopause represents a natural decline in Yin, which leads to relative excess of heat. Supporting Yin with cooling, moistening foods may help smooth the transition. It's not about reversing menopause. It's about making the ride less bumpy.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with hot flashes from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Cooling and moistening foods: tofu, pear, mung bean soup, black sesame, lily bulb, and tremella mushroom. Avoid spicy food, excessive caffeine, and alcohol, which all add heat to an already hot system. Room-temperature or cool water instead of hot tea may also help during a flash.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is menopause a disease in Chinese medicine?", "zh-TW": "", ja: "" },
      a: { en: "No. TCM views menopause as a natural transition, not a disease. The symptoms (hot flashes, night sweats, mood changes) are signs that your body's Yin reserves are declining and need support. It's similar to a bank account: you're withdrawing more than you're depositing. The goal is to slow the withdrawal rate and top up where possible.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most affected by menopause?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) tends to have the most intense menopausal symptoms because their cooling system was already undercharged before menopause started. The Qi Stagnant type (气郁质) may struggle more with the emotional swings. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-nausea": [
    {
      q: { en: "Why do I feel nauseous even when I haven't eaten anything bad?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, nausea without food poisoning often points to Phlegm Damp. Your Spleen is too weak to process fluids properly, and the moisture backs up, creating a heavy, queasy feeling in your stomach. It's like a sink with a slow drain. The water doesn't flow, it pools, and eventually you feel sick from it.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with chronic nausea from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Ginger is the single most useful food here. Fresh ginger tea or water with thin ginger slices may settle your stomach within minutes. Warm, easy-to-digest foods like congee and steamed vegetables give your Spleen less work. Avoid cold drinks, greasy food, and dairy, which all add to the dampness.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can stress cause nausea?", "zh-TW": "", ja: "" },
      a: { en: "Yes. Stress causes Liver Qi to stagnate, and the Liver sits right next to the Stomach in TCM theory. When Liver energy gets stuck, it pushes against the Stomach, creating upward pressure that feels like nausea. This is why stress-related nausea often comes with a tight feeling in your chest.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with chronic nausea?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match. Their Spleen struggles with fluid metabolism, creating the internal conditions for recurring nausea. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-diarrhea": [
    {
      q: { en: "Why do I have diarrhea but no infection?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, chronic loose stools without infection often point to either Cold in the digestive system (Yang Deficiency) or Damp Heat. Cold-type diarrhea is watery and painless, often worse in the morning. Heat-type diarrhea is urgent, burning, and may come with a sense of incomplete emptying. The treatment for each is opposite, so identifying which pattern you have matters.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can what I drink cause diarrhea?", "zh-TW": "", ja: "" },
      a: { en: "Ice water and cold drinks are a common trigger in TCM. Cold directly weakens your Spleen's ability to process fluids. Over time, your digestive system becomes so underpowered that water passes through without being properly absorbed. Switching to warm water or ginger tea may make a noticeable difference within days.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is chronic diarrhea serious?", "zh-TW": "", ja: "" },
      a: { en: "If it persists for weeks, causes weight loss, or contains blood, see a doctor. These may indicate inflammatory bowel disease, celiac, or other conditions that need medical attention. TCM patterns can coexist with these conditions but shouldn't delay proper investigation.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with chronic diarrhea?", "zh-TW": "", ja: "" },
      a: { en: "The Yang Deficient type (阳虚质) is the most common match for cold-type diarrhea. Their internal warmth is too low to process food and fluids. The Damp Heat type (湿热质) is the match for heat-type diarrhea. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-feel-sick-after-eating": [
    {
      q: { en: "Why does eating make me feel worse instead of better?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, this is a classic sign of Spleen weakness. Your Spleen is supposed to transform food into energy. When it's underpowered, food arrives but your body can't process it efficiently. Instead of feeling nourished, you feel burdened. The food sits there like unprocessed mail in an inbox.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods are easiest on a weak digestive system?", "zh-TW": "", ja: "" },
      a: { en: "Congee (rice porridge), steamed vegetables, sweet potato, and well-cooked soups. These are predigested through cooking, so your Spleen barely has to work. Think of it as giving a tired worker the easiest possible tasks. Avoid raw salads, cold smoothies, and heavy greasy meals.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Should I eat less if eating makes me sick?", "zh-TW": "", ja: "" },
      a: { en: "Not less, but different. Eating less weakens your Spleen further. Instead, eat warm, cooked, easy-to-digest meals at consistent times. The regularity matters as much as the food itself. Your Spleen loves routine and hates surprises.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with feeling sick after eating?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match because their digestive system lacks the energy to process meals. The Phlegm Damp type (痰湿质) is the second match because accumulated moisture makes digestion sluggish. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-bad-breath": [
    {
      q: { en: "Why does my breath smell even though I brush and floss?", "zh-TW": "", ja: "" },
      a: { en: "If oral hygiene isn't the issue, the smell may be coming from your digestive system. In TCM, bad breath often points to Damp Heat in the Stomach. Heat creates odor, and dampness carries it upward. It's like a slow drain in your kitchen sink that hasn't been cleaned. The smell comes from inside the pipes, not the surface.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with bad breath from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Mint tea, celery, and moderate amounts of green tea may help clear Stomach heat. Avoid spicy food, heavy fried meals, garlic-heavy dishes, and excessive coffee, which feed the heat. Drinking warm water throughout the day helps your system flush instead of stagnate.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is bad breath always a gut problem?", "zh-TW": "", ja: "" },
      a: { en: "Not always. Dental issues, tonsil stones, and dry mouth can all cause persistent breath issues. If you've ruled out dental causes, the digestive angle is worth exploring. TCM connects the mouth directly to the Stomach and Spleen, so chronic breath issues often have a digestive root.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with bad breath?", "zh-TW": "", ja: "" },
      a: { en: "The Damp Heat type (湿热质) is the primary match. Their Stomach generates heat and dampness that rises as odor. They may also experience acne, acid reflux, and a feeling of internal stickiness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-face-so-oily": [
    {
      q: { en: "Why is my face oily just one hour after washing?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, excess facial oil often points to Damp Heat. Your body is producing oil faster than your skin can manage it. It's like a faucet with a worn-out washer. No matter how many times you wipe the sink, the drip keeps coming because the problem is inside the fixture, not on the surface.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Does oily skin mean I should avoid moisturizer?", "zh-TW": "", ja: "" },
      a: { en: "Counterintuitively, skipping moisturizer can make oiliness worse. When your skin feels dry, it pumps out more oil to compensate. Use a light, water-based moisturizer instead. From a TCM perspective, the goal is to address the internal dampness causing the overproduction, not just mop up the result.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can what I eat affect how oily my face is?", "zh-TW": "", ja: "" },
      a: { en: "Very much so. Fried food, dairy, sugar, and excessive cold drinks may feed the dampness that drives oil production. Warm, cooked meals with moderate protein and plenty of steamed vegetables may help your body process fluids more efficiently. Green tea and chrysanthemum tea are also traditionally used to clear heat.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with oily skin?", "zh-TW": "", ja: "" },
      a: { en: "The Damp Heat type (湿热质) is the primary match. The Phlegm Damp type (痰湿质) may also experience oiliness, though usually with less redness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-rosacea": [
    {
      q: { en: "Can TCM explain why my face turns red so easily?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, rosacea-like redness is often linked to Heat in the Blood or Damp Heat rising to the face. Your body has accumulated too much internal heat, and it finds its escape route through your skin. Think of it as a pot boiling over. The lid (your skin) can't contain what's building up underneath.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What triggers rosacea flares from an Eastern perspective?", "zh-TW": "", ja: "" },
      a: { en: "Spicy food, alcohol, emotional stress, and overheated environments all add fuel to internal heat. Sun exposure may also trigger flares because external heat joins internal heat. Cooling foods like cucumber, watermelon (in moderation), and mung bean soup may help take the edge off between flares.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is rosacea the same as acne?", "zh-TW": "", ja: "" },
      a: { en: "No. Acne involves clogged pores and is more closely tied to Damp Heat with phlegm. Rosacea is more about Blood Heat and is characterized by flushing, visible blood vessels, and sensitivity. The treatments in TCM differ because the root pattern is different, even though both show up on your face.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with rosacea?", "zh-TW": "", ja: "" },
      a: { en: "The Damp Heat type (湿热质) is the primary match because heat and dampness create the perfect conditions for facial redness and inflammation. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-brittle-nails": [
    {
      q: { en: "What do nails represent in TCM?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, nails are considered the extension of Blood and are governed by the Liver. When Blood is insufficient or Liver Qi is weak, the nails don't get the nourishment they need. They become thin, ridged, and prone to breaking. Think of nails as the leaves of a tree. If the roots (Blood and Liver) aren't healthy, the leaves show it first.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can supplements fix brittle nails?", "zh-TW": "", ja: "" },
      a: { en: "Biotin and collagen supplements may help, but they only address part of the picture. If your body can't absorb or transport those nutrients efficiently, the supplements go in but don't reach the nails. TCM focuses on strengthening the Spleen (digestion and absorption) and nourishing Blood so your body can actually use what you give it.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods support nail health in TCM?", "zh-TW": "", ja: "" },
      a: { en: "Dark leafy greens, black sesame seeds, goji berries, jujube dates, and bone broth are all traditionally used to nourish Blood and support the Liver. These foods provide the raw materials your body needs to build strong nails from the inside out. Consistency matters more than quantity.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with brittle nails?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) lacks the energy to produce strong nails. The Yin Deficient type (阴虚质) lacks the fluids and moisture to keep them flexible. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-is-my-complexion-dull": [
    {
      q: { en: "Why does my skin look gray even though I sleep enough?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, a dull complexion often means Blood isn't reaching the face properly. Either Qi is too weak to push Blood upward, or Blood is stagnant and pooled somewhere else. Imagine a house where the water pressure is fine but half the pipes are clogged. The faucets at the end get barely a trickle.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can face creams fix a dull complexion?", "zh-TW": "", ja: "" },
      a: { en: "They can help temporarily by hydrating the surface, but dullness from within needs an internal approach. If Blood isn't nourishing your face, no amount of topical product will create lasting change. TCM focuses on moving Blood and boosting Qi so your complexion gets the nourishment it needs from the inside.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is dull skin a sign of anemia?", "zh-TW": "", ja: "" },
      a: { en: "It might be, so a blood test is worth doing. If your iron and hemoglobin are normal but your complexion is still lifeless, TCM would look at Blood Stasis or Qi Deficiency as the pattern. You can have enough Blood in volume but poor circulation of it, which gives the same visible result.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with a dull complexion?", "zh-TW": "", ja: "" },
      a: { en: "The Blood Stasis type (血瘀质) is the primary match because blood isn't circulating to the face. The Qi Deficient type (气虚质) is the secondary match because weak Qi can't push blood upward. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-cellulite": [
    {
      q: { en: "Does TCM have a concept of cellulite?", "zh-TW": "", ja: "" },
      a: { en: "TCM doesn't use the word cellulite, but it recognizes the pattern: phlegm and dampness accumulating under the skin. When your Spleen can't process fluids efficiently, the excess gets stored in tissues as damp deposits. Think of it like a sponge that's been sitting in a puddle. It soaks up water and gets heavy and lumpy.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can dry brushing or massage help cellulite from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Yes, both may help because they promote circulation and move stagnant fluids. In TCM terms, dry brushing stimulates Qi and Blood flow through the meridians near the skin surface. Cupping massage is also traditionally used to break up stuck dampness in localized areas. These work best when combined with internal changes to diet.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is cellulite just about being overweight?", "zh-TW": "", ja: "" },
      a: { en: "Not at all. Thin people get cellulite too. In TCM, it's more about fluid metabolism than body weight. If your Spleen is weak and dampness accumulates, cellulite can appear regardless of your size. The issue is how your body processes and eliminates fluids, not how much fat you carry.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with cellulite?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match because their body tends to store excess fluids in tissues. They may also experience bloating, water retention, and a feeling of heaviness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-neck-pain": [
    {
      q: { en: "Why does my neck hurt when there's no injury?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, unexplained neck pain often signals Qi Stagnation in the area. The neck is a narrow bridge between your head and body, and when energy gets stuck there, it creates tension and pain. Emotional stress and suppressed frustration are the most common culprits. The pain isn't from damage, it's from stuck energy.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why is neck pain worse when I'm stressed?", "zh-TW": "", ja: "" },
      a: { en: "Stress directly affects the Liver meridian, which is responsible for smooth energy flow throughout the body. When you're stressed, Liver Qi stagnates, and the neck and shoulders are where it often shows up first. It's like a traffic jam. The bottleneck happens at the narrowest point, and your neck is that point.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can help neck pain from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Gentle neck rolls, shoulder shrugs, and deep breathing may help move stuck Qi. Peppermint tea and green tea support the Liver's ability to circulate energy. Avoid hunching over screens for long periods. In TCM, movement is medicine for stagnation. Even five minutes of gentle stretching can make a difference.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with neck pain?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match because their energy tends to get stuck, especially in the neck and shoulder area. They may also experience mood swings, sighing, and a feeling of something stuck in the throat. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-are-my-shoulders-always-tense": [
    {
      q: { en: "Why do my shoulders live near my ears?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, chronic shoulder tension is a hallmark of Qi Stagnation. Your shoulders are carrying emotional weight that hasn't been processed. Frustration, worry, and unexpressed feelings all accumulate there. It's like wearing a backpack you forgot you had. You've been carrying it so long it feels normal, but your muscles are exhausted.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is shoulder tension always from stress?", "zh-TW": "", ja: "" },
      a: { en: "Emotional stress is the most common cause in TCM, but physical habits like poor posture, too much screen time, and shallow breathing also contribute. The Liver meridian governs free flow, and the Gallbladder meridian runs through the shoulders. Both get disrupted by tension, creating a feedback loop of tightness.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can stretching fix shoulder tension permanently?", "zh-TW": "", ja: "" },
      a: { en: "Stretching provides temporary relief but doesn't address why your shoulders keep tightening up. In TCM, lasting improvement comes from moving Liver Qi. This means addressing emotional patterns, not just physical ones. Combining regular movement with stress management and foods that support the Liver may give more lasting results.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with shoulder tension?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match because their emotional energy gets stuck in the upper body. They may also experience frequent sighing, chest tightness, and irritability. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-stomach-pain": [
    {
      q: { en: "Why does my stomach hurt but tests show nothing wrong?", "zh-TW": "", ja: "" },
      a: { en: "This is very common in TCM. Functional stomach pain means the organ is working poorly but isn't diseased. The two main patterns are Qi Stagnation (stress-related gripping pain that moves around) and Phlegm Damp (heavy, dull ache after eating). The alarm is real, even if the medical scans can't find the fire.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is stomach pain connected to my emotions?", "zh-TW": "", ja: "" },
      a: { en: "Very much so. In TCM, worry knots the Spleen and anger stagnates the Liver, which then attacks the Stomach. If your stomach pain gets worse during stressful periods, this connection is worth paying attention to. Calming your mind may calm your stomach more effectively than antacids alone.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What should I eat when my stomach hurts?", "zh-TW": "", ja: "" },
      a: { en: "Warm, simple, easy-to-digest foods. Congee, steamed vegetables, and mild soups give your Stomach a rest while still providing nourishment. Avoid cold, raw, spicy, and greasy foods during a flare. Ginger tea may help if the pain feels better with warmth, which suggests a cold pattern.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with stomach pain?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) often gets stress-related stomach pain. The Phlegm Damp type (痰湿质) may experience dull, heavy stomach discomfort after meals. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-always-stiff": [
    {
      q: { en: "Why am I stiff in the morning even though I'm young?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, morning stiffness isn't about age. It's about Yang energy being too low to warm and loosen your muscles after a night of inactivity. When Yang is deficient, your body literally doesn't have enough internal warmth to keep tissues supple during sleep. You wake up feeling like you were poured from concrete.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is stiffness the same as arthritis?", "zh-TW": "", ja: "" },
      a: { en: "Not necessarily. Arthritis involves joint damage visible on imaging. Generalized stiffness without joint damage may be a circulation issue. In TCM, Blood Stasis and Yang Deficiency can both cause stiffness without any structural damage. If you haven't had imaging done, it's worth checking with a doctor.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What helps morning stiffness from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Warm ginger tea first thing in the morning may help. A warm shower before stretching loosens things faster than stretching cold. Gentle movement like tai chi or slow walking gets Qi and Blood flowing again. Avoid sleeping in cold rooms or with a fan directly on you, as cold worsens Yang Deficiency.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with stiffness?", "zh-TW": "", ja: "" },
      a: { en: "The Yang Deficient type (阳虚质) is the primary match because they lack internal warmth to keep muscles flexible. The Blood Stasis type (血瘀质) is the secondary match because poor circulation leaves tissues undernourished. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-keep-forgetting-things": [
    {
      q: { en: "Is forgetfulness just a normal part of getting older?", "zh-TW": "", ja: "" },
      a: { en: "Some decline is normal, but if you're forgetting things more than your peers, it's worth investigating. In TCM, the Kidneys govern the brain and memory, and the Heart houses the mind. When Kidney Yin declines or Heart Blood is insufficient, memory suffers. Age may be a factor, but it's not the whole story.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can diet improve memory?", "zh-TW": "", ja: "" },
      a: { en: "It may help, especially if Qi or Yin deficiency is the root pattern. Walnuts, black sesame seeds, goji berries, and dark leafy greens are traditionally used in TCM to support brain function. These foods nourish Kidney Yin and Heart Blood, which are the foundations of memory in TCM theory.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is poor memory connected to poor sleep?", "zh-TW": "", ja: "" },
      a: { en: "Often, yes. Sleep is when the Brain consolidates memories and when the body produces Blood and Yin. If you're sleeping poorly, you're robbing your memory of the raw materials it needs. Addressing sleep quality may improve memory more directly than any brain supplement.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with forgetfulness?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) lacks the energy to sustain mental focus. The Yin Deficient type (阴虚质) lacks the cooling fluids that keep the brain calm and clear. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-cant-i-focus": [
    {
      q: { en: "Why can't I focus even on things I care about?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, focus requires a steady supply of Qi to the head. When Qi is deficient, your mental energy flickers like a candle in the wind. You can focus for a moment, then it's gone. The issue isn't willpower. It's fuel. Your brain is running on fumes and keeps stalling.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is poor focus the same as ADHD?", "zh-TW": "", ja: "" },
      a: { en: "No. ADHD is a specific neurodevelopmental condition. Poor focus without an ADHD diagnosis may be a functional issue related to Qi Deficiency in TCM. If your focus problems are new or getting worse, consult a healthcare provider. TCM body typing complements but doesn't replace medical evaluation.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can help improve focus from a TCM perspective?", "zh-TW": "", ja: "" },
      a: { en: "Regular meal times with warm, cooked foods stabilize Qi production. Light physical movement between mental tasks prevents stagnation. Ginseng tea (if appropriate for your type) may provide a gentle boost. Avoid multitasking and cold foods, both of which scatter your Qi in different directions at once.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with poor focus?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match because their mental energy runs out quickly. They may also experience fatigue, pale complexion, and a soft voice. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-cry-so-easily": [
    {
      q: { en: "Is crying easily a sign of weakness?", "zh-TW": "", ja: "" },
      a: { en: "Not at all. In TCM, easy crying often indicates that your Liver Qi is stagnant and your Heart is overactive. Emotions that should flow through you are getting stuck and overflowing through your tear ducts. It's not weakness. It's a pressure release valve on a system that's too full.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why do I cry more before my period?", "zh-TW": "", ja: "" },
      a: { en: "Before menstruation, Blood moves downward and Liver Qi tends to rise. This creates an internal tension that makes emotional regulation harder. In TCM, this is classic Liver Qi Stagnation affecting the Heart. Many women experience heightened emotional sensitivity in the days before their period for this exact reason.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can food or herbs help with being overly emotional?", "zh-TW": "", ja: "" },
      a: { en: "Rose tea and chrysanthemum tea are traditionally used to soothe the Liver and calm the Heart. Foods that nourish Blood, like jujube dates and dark leafy greens, may also help stabilize emotions. Avoid excessive coffee and alcohol, which agitate the Heart and Liver.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with crying easily?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match because their emotional energy gets bottled up and overflows. The Qi Deficient type (气虚质) is the secondary match because they lack the energy to contain their emotions. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-no-patience": [
    {
      q: { en: "Is impatience a personality trait or a body pattern?", "zh-TW": "", ja: "" },
      a: { en: "It can be both. In TCM, chronic impatience and irritability often signal Liver Qi Stagnation or Liver Fire. When energy should flow smoothly but gets stuck, it generates internal friction that manifests as a short temper. Your personality plays a role, but your internal energy pattern can turn up the volume significantly.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why am I more impatient when I don't sleep well?", "zh-TW": "", ja: "" },
      a: { en: "Poor sleep depletes Yin, and when Yin is low, Yang heat rises unchecked. This excess heat in the Liver makes irritability spike. It's like a stove with the flame turned up too high. Without enough cooling Yin to balance it, everything burns faster, including your patience.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can changing my diet help with impatience?", "zh-TW": "", ja: "" },
      a: { en: "It may. Avoiding spicy food, fried food, alcohol, and excessive coffee can reduce Liver heat. Adding cooling foods like celery, cucumber, and mung bean soup may help. In TCM, the Liver is the organ most affected by what you eat and drink, and irritability is often the first sign that something is off.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with no patience?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Stagnant type (气郁质) is the primary match because their stuck energy creates internal pressure that leaks out as irritability. They may also experience mood swings and chest tightness. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-a-chronic-cough": [
    {
      q: { en: "Why won't my cough go away even after the cold is gone?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, a lingering cough often means the initial illness damaged your Lung Yin. The Lungs are like a delicate sponge that needs to stay moist. When Yin is depleted, the sponge dries out and becomes irritated, triggering a dry, ticklish cough that doesn't produce much. The cold left, but the dryness stayed.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What type of cough points to what TCM pattern?", "zh-TW": "", ja: "" },
      a: { en: "A dry, ticklish cough with no phlegm often points to Yin Deficiency. A wet cough with lots of phlegm suggests Phlegm Damp. A cough worse at night may indicate Yin Deficiency. A cough worse in the morning with lots of clearing may indicate Phlegm. The character of the cough tells the story.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can honey and pear help a chronic cough?", "zh-TW": "", ja: "" },
      a: { en: "Yes, both are traditionally used in TCM to moisten the Lungs. Steamed pear with rock sugar and honey is a classic remedy for dry cough. Asian pear is preferred because it's more hydrating. These work best for the dry, Yin-deficient type of cough, not for the wet, phlegmy type.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with chronic cough?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) gets dry, lingering coughs. The Phlegm Damp type (痰湿质) gets wet, productive coughs with lots of phlegm. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-always-have-a-sore-throat": [
    {
      q: { en: "Why does my throat hurt when I'm not sick?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, a recurring sore throat without infection often points to Yin Deficiency. Your body lacks enough cooling moisture, so heat accumulates in the upper body. The throat is one of the first places this internal heat shows up. It's like a chimney that's too dry. The smallest spark of heat creates irritation.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Why is my throat worse in the morning?", "zh-TW": "", ja: "" },
      a: { en: "During sleep, Yin is supposed to replenish. If your Yin is deficient, overnight recovery falls short, and heat builds up by morning. Mouth breathing at night can worsen it, but the root is often internal dryness. Sipping warm water with honey first thing may help more than you'd expect.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Should I drink cold water for a sore throat?", "zh-TW": "", ja: "" },
      a: { en: "Cold water feels good temporarily but may actually worsen the root problem. In TCM, cold impairs the Spleen's ability to produce fluids, which feeds the dryness cycle. Warm or room temperature water with honey, loquat, or licorice root is more supportive. The goal is to moisten, not just numb.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with sore throat?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match because they lack the cooling moisture that protects the throat. They may also experience night sweats, dry mouth, and feeling warm. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-post-nasal-drip": [
    {
      q: { en: "What is post-nasal drip in TCM terms?", "zh-TW": "", ja: "" },
      a: { en: "TCM calls this Phlegm rising upward. When the Spleen can't process fluids properly, the excess moisture gets transformed into phlegm, and it drips down from the nasal passages into the throat. It's like a gutter that overflows because the downpipe is blocked. The water finds its own path down.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is post-nasal drip the same as a sinus infection?", "zh-TW": "", ja: "" },
      a: { en: "Not necessarily. A sinus infection involves active inflammation and often thick, colored discharge. Post-nasal drip can be chronic and low-grade, with clear or thin mucus. If yours has been going on for months without other signs of infection, the TCM pattern is more likely Phlegm Damp than an active infection.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Can dairy make post-nasal drip worse?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, dairy is considered phlegm-generating. Milk, cheese, and ice cream may increase mucus production, especially in someone with a Phlegm Damp constitution. Reducing dairy for 2 to 3 weeks and observing whether your symptoms change is a simple way to test this connection for yourself.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with post-nasal drip?", "zh-TW": "", ja: "" },
      a: { en: "The Phlegm Damp type (痰湿质) is the primary match because their body tends to generate excess phlegm. They may also experience sinus congestion, a feeling of heaviness, and bloating. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-wake-up-to-pee": [
    {
      q: { en: "How many times is normal to wake up to pee?", "zh-TW": "", ja: "" },
      a: { en: "Once may be normal for some. Two or more times every night is worth looking into. In TCM, frequent nighttime urination often points to Kidney Yang Deficiency. Your Kidneys can't hold fluids overnight, so what should be stored gets released. Think of a leaky bucket. You fill it at bedtime but it empties before morning.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is waking up to pee the same as an enlarged prostate?", "zh-TW": "", ja: "" },
      a: { en: "For men, prostate issues are one possible cause and should be checked. But many people, including women, wake up to pee without any structural cause. In TCM, Kidney Yang Deficiency is the most common pattern. The body lacks the warmth to hold and process fluids overnight.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can help reduce nighttime urination?", "zh-TW": "", ja: "" },
      a: { en: "Stop drinking fluids 2 hours before bed. Avoid cold drinks entirely in the evening. Warm water or a small cup of ginger tea at dinner may actually help by supporting Kidney Yang. Walnuts and black sesame seeds are traditionally used to strengthen the Kidneys. Consistency over weeks matters more than any single remedy.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with nighttime urination?", "zh-TW": "", ja: "" },
      a: { en: "The Yang Deficient type (阳虚质) is the primary match because they lack the internal warmth that helps the Kidneys hold fluids at night. They may also feel cold, have low back pain, and prefer hot drinks. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-tinnitus": [
    {
      q: { en: "What does ringing in the ears mean in TCM?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, tinnitus is most often linked to Kidney Yin Deficiency. The Kidneys open into the ears, and when Kidney Yin is low, empty heat rises to the head and creates the sensation of ringing. Low-pitched ringing often suggests Kidney deficiency, while high-pitched ringing may indicate Liver Fire rising.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is tinnitus always permanent?", "zh-TW": "", ja: "" },
      a: { en: "Not necessarily. Tinnitus from loud noise exposure may be permanent, but tinnitus related to internal patterns in TCM may improve when the underlying imbalance is addressed. If your tinnitus comes and goes, or gets worse when you're tired or stressed, the internal pattern approach is worth exploring.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What foods may help with tinnitus?", "zh-TW": "", ja: "" },
      a: { en: "Black sesame seeds, walnuts, goji berries, and bone broth are traditionally used to nourish Kidney Yin. Avoiding excessive salt, coffee, and alcohol may also help because these deplete Yin and aggravate the heat that causes ringing. Think of feeding the roots so the leaves (ears) stop rustling.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with tinnitus?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match because their internal heat rises to the head and creates the ringing sensation. They may also experience night sweats, dry mouth, and feeling warm at night. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-am-i-so-sensitive-to-heat": [
    {
      q: { en: "Why can't I handle warm weather when others are fine?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, heat intolerance often points to Yin Deficiency. Yin is your body's cooling system. When it's low, your internal temperature regulation struggles. Everyone else is comfortable, but your body's AC is broken. You may also notice you feel warmest in the afternoon and evening when Yang naturally peaks.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is heat sensitivity the same as hot flashes?", "zh-TW": "", ja: "" },
      a: { en: "Related but different. Hot flashes are sudden surges of heat, often linked to hormonal changes. General heat sensitivity is a constant state of running warm. Both may involve Yin Deficiency in TCM, but hot flashes are more intense and episodic while heat sensitivity is a steady background condition.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What can help with heat sensitivity?", "zh-TW": "", ja: "" },
      a: { en: "Cooling foods like cucumber, watermelon, mung bean soup, and mint tea may help. Avoid spicy food, heavy fried meals, and alcohol, which add heat. Staying hydrated with room temperature or cool (not ice-cold) water supports your body's natural cooling. The goal is to nourish Yin so your internal AC works better.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with heat sensitivity?", "zh-TW": "", ja: "" },
      a: { en: "The Yin Deficient type (阴虚质) is the primary match because they lack the cooling moisture that regulates body temperature. They may also experience night sweats, dry skin, and a preference for cold drinks. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-wake-up-tired": [
    {
      q: { en: "Why do I wake up tired after sleeping 8 hours?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, sleep quantity doesn't equal sleep quality if your Qi is deficient. Your body may go through the motions of sleeping but doesn't have enough energy to do the actual repair work. It's like charging a phone with a damaged battery. It sits on the charger for hours but barely holds any charge.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Is waking up tired a sign of sleep apnea?", "zh-TW": "", ja: "" },
      a: { en: "It might be, especially if you snore or wake up gasping. Sleep apnea should be evaluated by a doctor. If you've been tested and it's negative, the TCM angle is worth exploring. Qi Deficiency can produce the same exhausted-on-waking feeling without any breathing obstruction.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "What time should I go to bed according to TCM?", "zh-TW": "", ja: "" },
      a: { en: "TCM recommends being asleep by 11 PM. The Gallbladder meridian is most active from 11 PM to 1 AM, and the Liver from 1 AM to 3 AM. These hours are when your body does its deepest repair and detox work. Missing this window consistently may explain why you wake up tired even after enough hours.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with waking up tired?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match because their body can't convert rest into energy efficiently. They may also experience shortness of breath, poor appetite, and easy sweating. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
  "why-do-i-have-cold-sweats": [
    {
      q: { en: "What are cold sweats in TCM terms?", "zh-TW": "", ja: "" },
      a: { en: "In TCM, cold sweats indicate that your defensive Qi (Wei Qi) is too weak to hold your pores closed. Your body is sweating but the sweat isn't warm because there isn't enough Yang energy behind it. It's like a door that won't stay shut because the latch is broken. Moisture escapes when it shouldn't.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Are cold sweats the same as night sweats?", "zh-TW": "", ja: "" },
      a: { en: "They're related but different. Night sweats happen during sleep and are more associated with Yin Deficiency. Cold sweats can happen anytime and are more associated with Qi or Yang Deficiency. If your sweat feels clammy and cold to the touch, that's the Qi Deficient pattern. If you wake up drenched in warm sweat, that's more Yin Deficient.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Should I be worried about cold sweats?", "zh-TW": "", ja: "" },
      a: { en: "If cold sweats are new, sudden, or accompanied by chest pain, dizziness, or fainting, seek medical attention immediately. Chronic cold sweats without acute symptoms are more likely a constitutional pattern. In TCM, they point to Qi Deficiency and may improve with supportive foods and lifestyle changes.", "zh-TW": "", ja: "" },
    },
    {
      q: { en: "Which body type is most associated with cold sweats?", "zh-TW": "", ja: "" },
      a: { en: "The Qi Deficient type (气虚质) is the primary match because their energy is too weak to regulate sweating properly. They may also experience spontaneous daytime sweating, fatigue, and a weak voice. Take the free EastType quiz to discover your type.", "zh-TW": "", ja: "" },
    },
  ],
}
