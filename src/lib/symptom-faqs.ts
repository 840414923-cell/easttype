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
}
