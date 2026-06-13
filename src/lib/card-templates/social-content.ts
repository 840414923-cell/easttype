import type { ConstitutionId } from "@/lib/types"

export type TemplateType = "fact" | "symptom" | "food" | "which" | "quote" | "chinglish"

export interface SocialContent {
  type: TemplateType
  headline: string
  subtext: string
  emoji: string
  bgType?: ConstitutionId
  zh: string
}

export const TEMPLATE_META: Record<TemplateType, { label: string; icon: string }> = {
  fact: { label: "反常识卡", icon: "🫚" },
  symptom: { label: "症状解码卡", icon: "😩" },
  food: { label: "食物即药卡", icon: "🍯" },
  which: { label: "对号入座卡", icon: "😴" },
  quote: { label: "一句话真相卡", icon: "✨" },
  chinglish: { label: "中式英语梗", icon: "🤣" },
}

export const SOCIAL_CONTENT: SocialContent[] = [
  // ═══ Fact 反常识卡 — 核心公式：反直觉 + 你一直做错了 ═══
  { type: "fact", headline: "You've been drinking water wrong your whole life.", subtext: "Ice water kills your digestion. Warm water activates it. Your stomach is a fire, not a freezer.", emoji: "🧊", bgType: "yang_deficient", zh: "你一辈子喝水都喝错了" },
  { type: "fact", headline: "Ginger is making some people sick.", subtext: "If your body runs hot, ginger fuels the fire. More acne. More anger. More inflammation.", emoji: "🫚", bgType: "damp_heat", zh: "姜正在让某些人生病" },
  { type: "fact", headline: "Your morning smoothie is destroying your energy.", subtext: "Cold + raw = digestion nightmare. Your body spends all its energy just warming the food up.", emoji: "🥤", bgType: "yang_deficient", zh: "你的早间奶昔正在摧毁你的能量" },
  { type: "fact", headline: "Coffee doesn't give you energy. It steals from tomorrow.", subtext: "That 3 PM crash? That's your body collecting the debt. The energy was never yours.", emoji: "☕", bgType: "qi_deficient", zh: "咖啡不给你能量，它偷的是明天的" },
  { type: "fact", headline: "90% of diets fail because they ignore body type.", subtext: "Your friend lost weight with keto? You might gain weight with it. Same food, different body, opposite result.", emoji: "🍽️", bgType: "balanced", zh: "90%的饮食失败因为忽略了体质" },
  { type: "fact", headline: "8 hours of sleep means nothing if your body type is wrong.", subtext: "You can sleep 10 hours and still wake up exhausted. The problem isn't sleep. It's your internal clock.", emoji: "😴", bgType: "yin_deficient", zh: "体质不对，睡8小时也白搭" },
  { type: "fact", headline: "The exercise that's making you weaker.", subtext: "If your Qi is low, intense workouts drain what little you have left. Sometimes the gym is the last place you need to be.", emoji: "🏃", bgType: "qi_deficient", zh: "让你越来越弱的运动" },
  { type: "fact", headline: "Your salad is not healthy. For you.", subtext: "Raw, cold food is the hardest thing for weak digestion to process. Warm, cooked food heals what salad breaks.", emoji: "🥗", bgType: "yang_deficient", zh: "你的沙拉对你来说并不健康" },
  { type: "fact", headline: "Why Chinese people don't drink ice water.", subtext: "3,000 years of observation showed one thing: cold kills digestion. Warm water is the simplest health hack nobody in the West knows.", emoji: "🇨🇳", bgType: "yang_deficient", zh: "为什么中国人不喝冰水" },
  { type: "fact", headline: "Your face is a map of your organs.", subtext: "Acne on forehead = gut issues. Nose = heart heat. Chin = hormones. Your skin has been trying to tell you something.", emoji: "🗺️", bgType: "balanced", zh: "你的脸是器官的地图" },
  { type: "fact", headline: "Why anger lives in your liver.", subtext: "In Eastern medicine, every emotion has an address. Can't stop snapping? Your Liver energy is stuck. It's not your personality.", emoji: "😤", bgType: "qi_stagnant", zh: "为什么愤怒住在你的肝里" },
  { type: "fact", headline: "The health mistake 1 billion people make every morning.", subtext: "Drinking ice water first thing. It's like pouring water on a campfire that's just starting. Warm water. Always warm.", emoji: "🌅", bgType: "yang_deficient", zh: "10亿人每天早上犯的健康错误" },
  { type: "fact", headline: "Your blood test is normal. Your body is not.", subtext: "TCM reads what blood tests can't: energy levels, organ relationships, emotional patterns. You're not fine. You're just not diagnosed.", emoji: "🩸", bgType: "balanced", zh: "验血正常不代表身体正常" },
  { type: "fact", headline: "The 3 AM wake-up call your doctor ignores.", subtext: "Waking at the same time every night isn't insomnia. In TCM, your Liver is talking. 1-3 AM = Liver time. Something is stuck.", emoji: "⏰", bgType: "qi_stagnant", zh: "医生忽略的凌晨3点警报" },
  { type: "fact", headline: "Why your tongue is the best health check you're not using.", subtext: "Pale = low energy. Red tip = internal heat. Thick white coat = dampness. It takes 5 seconds and costs nothing.", emoji: "👅", bgType: "balanced", zh: "为什么舌头是你没用过的最好的体检" },

  // ═══ Symptom 症状解码卡 — 核心公式：你的身体在说X + 这才是真正原因 ═══
  { type: "symptom", headline: "ALWAYS TIRED? Your body is using the wrong fuel.", subtext: "You're not lazy. You're not old. Your engine just needs a different kind of gas. Warm, cooked breakfast before 9 AM.", emoji: "😩", bgType: "qi_deficient", zh: "总是累？你的身体用错了燃料" },
  { type: "symptom", headline: "WAKING AT 3 AM? Your Liver is screaming.", subtext: "1-3 AM is Liver time. Something is stuck that needs to move. Try a 10-minute walk before bed. Not melatonin — movement.", emoji: "🌙", bgType: "qi_stagnant", zh: "凌晨3点醒？你的肝在尖叫" },
  { type: "symptom", headline: "COLD HANDS? Your inner furnace is broken.", subtext: "It's not poor circulation. Your Yang energy — the body's heater — is running on empty. Ginger + cinnamon. Every morning.", emoji: "🥶", bgType: "yang_deficient", zh: "手脚冰凉？你体内的炉子坏了" },
  { type: "symptom", headline: "BRAIN FOG? Your body is holding moisture like a sponge.", subtext: "Fog isn't age. It's not burnout. Your body can't clear what it's holding. Warm water + lemon. First thing. Every day.", emoji: "🧠", bgType: "phlegm_damp", zh: "脑雾？你的身体像海绵一样吸满了湿气" },
  { type: "symptom", headline: "ANXIOUS FOR NO REASON? Your chest is holding stuck energy.", subtext: "It's not in your head. It's in your chest. That tight feeling is energy that can't move. 4 deep breaths can physically push it through.", emoji: "😰", bgType: "qi_stagnant", zh: "莫名焦虑？你的胸口卡住了能量" },
  { type: "symptom", headline: "CAN'T LOSE WEIGHT? It's not the calories.", subtext: "Some bodies hold moisture that makes everything heavier. You're not fat. You're waterlogged. Cut the raw, cold food.", emoji: "⏳", bgType: "phlegm_damp", zh: "瘦不下来？不是卡路里的锅" },
  { type: "symptom", headline: "FACE KEEPS BREAKING OUT? Your skin is an emergency exit.", subtext: "Internal heat has nowhere to go. It pushes through your face. 2 weeks without spicy, fried food. Watch what happens.", emoji: "😤", bgType: "damp_heat", zh: "老长痘？皮肤是紧急出口" },
  { type: "symptom", headline: "SICK EVERY SEASON? Your immune shield has holes.", subtext: "Your Wei Qi — the body's border patrol — is too thin. You need armor, not vitamin C. Start with warm food and layered clothing.", emoji: "🤧", bgType: "sensitive", zh: "一换季就病？你的免疫盾有漏洞" },
  { type: "symptom", headline: "LOWER BACK PAIN EVERY MORNING? Your deepest battery is dying.", subtext: "In TCM, the lower back runs on Kidney energy — your body's oldest, deepest reserve. When it's low, you feel it before anything else.", emoji: "🦴", bgType: "yang_deficient", zh: "每天早上腰疼？你最深的电池在耗尽" },
  { type: "symptom", headline: "BRUISING EASILY? Your blood is moving too slow.", subtext: "It's not clumsy. It's circulation that can't keep up. Walking works better than running for your type.", emoji: "🩹", bgType: "blood_stasis", zh: "容易淤青？你的血流太慢了" },
  { type: "symptom", headline: "NIGHT SWEATS? Your body's AC is broken.", subtext: "Your cooling system is undercharged. The body is desperately releasing heat it can't regulate. Mung bean soup. Watermelon. Pears.", emoji: "💦", bgType: "yin_deficient", zh: "盗汗？你身体的空调坏了" },
  { type: "symptom", headline: "ALWAYS BLOATED? Your body is a sponge that can't drain.", subtext: "It's not what you eat. It's what your body can't process. Stop the ice water. Start warm liquids with every meal.", emoji: "🫠", bgType: "phlegm_damp", zh: "总是胀？你的身体是排不干的海绵" },
  { type: "symptom", headline: "CAN'T SLEEP EVEN WHEN EXHAUSTED? Your body is running hot on empty.", subtext: "The engine is overheating but the coolant is gone. Screens after 9 PM pour gas on the fire. You need dark. You need cool.", emoji: "😵", bgType: "yin_deficient", zh: "累但睡不着？身体在空转过热" },
  { type: "symptom", headline: "OVERTHINKING EVERYTHING? Your mind is a pressure cooker.", subtext: "The energy in your chest can't flow, so it pressurizes into thoughts. Write it down — not to solve, to release the valve.", emoji: "🌀", bgType: "qi_stagnant", zh: "总想太多？你的脑子是高压锅" },
  { type: "symptom", headline: "CRAVING SWEETS EVERY NIGHT? Your Spleen is begging.", subtext: "It's not addiction. It's not weakness. Your body is asking for quick fuel because the slow kind isn't working. Sweet potato, not chocolate.", emoji: "🍫", bgType: "qi_deficient", zh: "每晚想吃甜？你的脾在求救" },

  // ═══ Food 食物即药卡 — 核心公式：X是大自然的Y + 具体怎么吃 ═══
  { type: "food", headline: "Ginger: nature's heater you already own.", subtext: "2 thin slices in morning tea. Warms from the inside out. Cold hands? This is your fix.", emoji: "🫚", bgType: "yang_deficient", zh: "姜：你已经拥有的天然暖气" },
  { type: "food", headline: "Honey: the cough medicine in your kitchen.", subtext: "1 spoon in warm water. Moistens dry throat, calms the lungs. Not in hot water — it kills the medicine.", emoji: "🍯", bgType: "yin_deficient", zh: "蜂蜜：厨房里的止咳药" },
  { type: "food", headline: "Mung bean: the skin clearer nobody told you about.", subtext: "Boil into soup. Clears heat from the inside. Your breakouts may vanish before your next dermatologist appointment.", emoji: "🫘", bgType: "damp_heat", zh: "绿豆：没人告诉你的祛痘神器" },
  { type: "food", headline: "Sweet potato: the dessert that heals your gut.", subtext: "Bake or steam. Strengthens digestion, kills sweet cravings naturally. This is why your grandmother ate them.", emoji: "🍠", bgType: "qi_deficient", zh: "地瓜：能治肠道的甜品" },
  { type: "food", headline: "Walnut: the brain food that's actually medicine.", subtext: "3-5 a day. In TCM, walnuts nourish the Kidney, strengthen lower back, and improve memory. Your snack just got an upgrade.", emoji: "🌰", bgType: "yang_deficient", zh: "核桃：真的是药的脑食物" },
  { type: "food", headline: "Cinnamon: a pinch that changes everything.", subtext: "Add to morning tea or oatmeal. Ignites your inner warmth. If you're always cold, this is your spark plug.", emoji: "🫙", bgType: "yang_deficient", zh: "肉桂：一撮改变一切" },
  { type: "food", headline: "Goji berries: eye drops you can eat.", subtext: "A small handful in warm water. Nourishes the Liver, brightens vision. Not a superfood — a 2,000-year-old prescription.", emoji: "🔴", bgType: "yin_deficient", zh: "枸杞：可以吃的眼药水" },
  { type: "food", headline: "Red dates: the blood builder your grandma swore by.", subtext: "3-5 a day in tea or soup. Builds blood, calms anxiety, gives energy. There's a reason every Chinese grandmother pushes these.", emoji: "🫘", bgType: "qi_deficient", zh: "红枣：你奶奶发誓的造血片" },
  { type: "food", headline: "Lotus seed: the sleep aid with zero side effects.", subtext: "Simmer with red dates before bed. Calms the heart, stops the racing thoughts. No grogginess. No dependency. Just rest.", emoji: "🪷", bgType: "qi_stagnant", zh: "莲子：零副作用的安眠药" },
  { type: "food", headline: "Chrysanthemum tea: the headache cure in a teacup.", subtext: "Brew 5-6 flowers in hot water. Clears heat from the head, soothes red eyes, eases the pressure. 5 minutes to relief.", emoji: "🌼", bgType: "damp_heat", zh: "菊花茶：杯子里的头痛药" },
  { type: "food", headline: "Turmeric: the traffic cop for your blood.", subtext: "Add to warm milk (golden milk). Moves stagnant blood, eases aching joints. It's not a trend. It's 4,000 years old.", emoji: "🧡", bgType: "blood_stasis", zh: "姜黄：你血液的交警" },
  { type: "food", headline: "Pear: the humidifier you can eat.", subtext: "Steam with rock sugar. Moistens the lungs, clears dry heat. The TCM remedy for dry cough that actually works.", emoji: "🍐", bgType: "yin_deficient", zh: "梨：可以吃的加湿器" },
  { type: "food", headline: "Yam: the de-puffer hiding in the produce aisle.", subtext: "Steam or stir-fry. Strengthens the Spleen so your body stops storing moisture. Less puffy. Less heavy. More you.", emoji: "🥔", bgType: "phlegm_damp", zh: "山药：菜摊里的消水肿神器" },
  { type: "food", headline: "Adzuki beans: the de-bloat secret in every Chinese kitchen.", subtext: "Boil into soup. Drains dampness like nothing else. If you wake up puffy, this is your morning medicine.", emoji: "🫘", bgType: "phlegm_damp", zh: "红豆：每个中国厨房里的消胀秘密" },
  { type: "food", headline: "Longan: the anti-anxiety snack that actually works.", subtext: "5-8 in warm tea. Nourishes heart blood, stops palpitations, calms the mind. Better than scrolling before bed.", emoji: "🟤", bgType: "qi_deficient", zh: "桂圆：真的管用的抗焦虑零食" },

  // ═══ WhichType 对号入座卡 — 核心公式：数字 + 你属于哪种？ ═══
  { type: "which", headline: "5 signs you're the Qi-Deficient type", subtext: "Always tired · Voice too quiet · Sweat without effort · Stomach always off · Crave sweets at night", emoji: "😩 💤 💧 🍫 😶", bgType: "qi_deficient", zh: "5个信号说明你是气虚质" },
  { type: "which", headline: "5 signs you're the Yang-Deficient type", subtext: "Cold hands and feet · Lower back aches · Need warm drinks · Urge to pee at night · Can't handle cold weather", emoji: "🥶 🦴 ☕ 🌙 🧊", bgType: "yang_deficient", zh: "5个信号说明你是阳虚质" },
  { type: "which", headline: "5 signs you're the Yin-Deficient type", subtext: "Night sweats · Can't fall asleep · Dry mouth and skin · Feel hot inside · Easily irritated", emoji: "💦 😵 🏜️ 🔥 😤", bgType: "yin_deficient", zh: "5个信号说明你是阴虚质" },
  { type: "which", headline: "5 signs you're the Phlegm-Damp type", subtext: "Can't lose weight · Always bloated · Brain fog · Wake up puffy · Feel heavy in your body", emoji: "⏳ 🫠 🧠 💧 🪨", bgType: "phlegm_damp", zh: "5个信号说明你是痰湿质" },
  { type: "which", headline: "5 signs you're the Damp-Heat type", subtext: "Face breaks out · Body feels sticky · Smelly sweat · Always irritated · Hate humid weather", emoji: "😤 🫠 💢 🌡️ 🤮", bgType: "damp_heat", zh: "5个信号说明你是湿热质" },
  { type: "which", headline: "5 signs you're the Qi-Stagnant type", subtext: "Anxious for no reason · Wake at 3 AM · Chest feels tight · Snap easily · Overthink everything", emoji: "😰 🌙 🫁 😠 🌀", bgType: "qi_stagnant", zh: "5个信号说明你是气郁质" },
  { type: "which", headline: "5 signs you're the Blood-Stasis type", subtext: "Bruise easily · Dark spots on skin · Period pain with clots · Aching that won't quit · Lips look dark", emoji: "🩹 🟤 😣 💢 👄", bgType: "blood_stasis", zh: "5个信号说明你是血瘀质" },
  { type: "which", headline: "5 signs you're the Sensitive type", subtext: "Sick every season · Allergies all year · Sneezing in the morning · Skin reacts to everything · Can't tolerate change", emoji: "🤧 🌸 💨 🧴 🌡️", bgType: "sensitive", zh: "5个信号说明你是特禀质" },
  { type: "which", headline: "3 types of people who wake at 3 AM", subtext: "Liver stuck · Yin running low · Yang trapped inside", emoji: "😴 😤 🥶", bgType: "qi_stagnant", zh: "3种凌晨3点醒的人" },
  { type: "which", headline: "3 types of people who can never lose weight", subtext: "Spleen too weak to process · Dampness stuck in tissues · Yang not burning fuel", emoji: "⏳ 🫠 🔥", bgType: "phlegm_damp", zh: "3种永远瘦不下来的人" },

  // ═══ Quote 一句话真相卡 — 核心公式：金句 + 有点扎心 ═══
  { type: "quote", headline: "Your body has been whispering. You just haven't learned its language.", subtext: "", emoji: "", bgType: "balanced", zh: "你的身体一直在说悄悄话，你只是还没学会它的语言" },
  { type: "quote", headline: "What healed your friend may be poisoning you.", subtext: "", emoji: "", bgType: "balanced", zh: "治好你朋友的可能正在毒害你" },
  { type: "quote", headline: "You don't have a weak body. You have a mismatched lifestyle.", subtext: "", emoji: "", bgType: "balanced", zh: "你不是身体弱，你是生活方式不匹配" },
  { type: "quote", headline: "Every symptom is a message. Most people just delete it.", subtext: "", emoji: "", bgType: "balanced", zh: "每个症状都是一条消息，大多数人只是删除它" },
  { type: "quote", headline: "Your body is not a machine. It's a garden.", subtext: "", emoji: "", bgType: "balanced", zh: "你的身体不是机器，是花园" },
  { type: "quote", headline: "3,000 years of observation. 9 body types. One you.", subtext: "", emoji: "", bgType: "balanced", zh: "3000年观察，9种体质，唯一的你" },
  { type: "quote", headline: "Your body type is your fingerprint. Once you know it, everything makes sense.", subtext: "", emoji: "", bgType: "balanced", zh: "体质就像指纹，了解后一切都说得通" },
  { type: "quote", headline: "The best medicine isn't herbs. It's knowing your body before it breaks.", subtext: "", emoji: "", bgType: "balanced", zh: "最好的药不是草药，是在身体崩溃前了解它" },
  { type: "quote", headline: "Health isn't the absence of illness. It's the presence of balance.", subtext: "", emoji: "", bgType: "balanced", zh: "健康不是没有疾病，是平衡的存在" },
  { type: "quote", headline: "In the East, food is the first medicine. In the West, it's the last resort.", subtext: "", emoji: "", bgType: "balanced", zh: "在东方食物是第一味药，在西方它是最后的手段" },
  { type: "quote", headline: "Stop treating your body like a machine. Start treating it like a garden.", subtext: "", emoji: "", bgType: "balanced", zh: "别再把身体当机器，开始把它当花园" },
  { type: "quote", headline: "What you crave is a clue. What you avoid is a signal.", subtext: "", emoji: "", bgType: "balanced", zh: "你渴望的是线索，你回避的是信号" },
  { type: "quote", headline: "Your blood test is normal. Your body is not.", subtext: "", emoji: "", bgType: "balanced", zh: "验血正常。你的身体不正常。" },
  { type: "quote", headline: "You've been treating the symptom. The cause has been your body type all along.", subtext: "", emoji: "", bgType: "balanced", zh: "你一直在治症状，原因一直是你的体质" },
  { type: "quote", headline: "The same illness. Different treatment. That's why your diet doesn't work for your friend.", subtext: "", emoji: "", bgType: "balanced", zh: "同病异治。这就是你的饮食对你朋友没用的原因" },

  // ═══ Chinglish 中式英语养生梗 — 核心公式：语法离谱 + 道理不假 + 笑着转发 ═══
  { type: "chinglish", headline: "Cold water = enemy of stomach.\nWarm water = best friend forever.", subtext: "Your stomach is fire. Ice water kill fire. Simple science.", emoji: "🧊", bgType: "yang_deficient", zh: "冰水是胃的敌人，温水是一辈子好朋友" },
  { type: "chinglish", headline: "No sleep at 3 AM?\nYour liver is doing overtime.", subtext: "1-3 AM is liver shift. You no sleep, liver no rest. Liver get angry. You get anxious.", emoji: "🌙", bgType: "qi_stagnant", zh: "3点不睡？你的肝在加班" },
  { type: "chinglish", headline: "Eat ginger, body say \"thank you.\"\nEat ice cream, body say \"why you do this.\"", subtext: "Warm food = body happy. Cold food = body confused. Listen to body.", emoji: "🫚", bgType: "yang_deficient", zh: "吃姜身体说谢谢，吃冰淇淋身体说为什么" },
  { type: "chinglish", headline: "Your qi is very lazy today.\nNeed to wake up!", subtext: "Qi-deficient people: body say \"I tired\" but brain say \"I must go.\" Compromise: warm soup.", emoji: "😴", bgType: "qi_deficient", zh: "你的气今天很懒，需要叫醒！" },
  { type: "chinglish", headline: "Ginger not for everyone.\nIf you already on fire, why add fire?", subtext: "Hot body + ginger = volcano. Cool body + ginger = sunshine. Know yourself first.", emoji: "🌋", bgType: "damp_heat", zh: "姜不是给所有人的，你已经着火了为什么还加火？" },
  { type: "chinglish", headline: "Your tongue is honest.\nBlood test is lying.", subtext: "Western doctor say \"you fine.\" Your tongue say \"no I not.\" Trust tongue.", emoji: "👅", bgType: "balanced", zh: "你的舌头很诚实，验血在撒谎" },
  { type: "chinglish", headline: "Coffee is borrowing.\nNot earning.", subtext: "3 PM crash = body collecting debt. You borrow energy from tomorrow. Tomorrow say \"pay me back.\"", emoji: "☕", bgType: "qi_deficient", zh: "咖啡是借不是赚" },
  { type: "chinglish", headline: "Salad is healthy?\nFor your body, salad is betray.", subtext: "Raw cold food enter warm stomach. Stomach say \"what is this nonsense.\" Cook your vegetables. Be kind.", emoji: "🥗", bgType: "yang_deficient", zh: "沙拉健康？对你身体来说沙拉是背叛" },
  { type: "chinglish", headline: "Angry all the time?\nLiver say: \"I stuck, help me.\"", subtext: "In TCM, anger live in liver. Liver energy stuck = you become angry person. Not personality. Just stuck liver.", emoji: "😤", bgType: "qi_stagnant", zh: "总是生气？肝说：我堵了，帮我" },
  { type: "chinglish", headline: "Why Chinese grandma always say\n\"drink warm water\"?", subtext: "Because 3,000 years of observation prove: warm water = digestion good. Cold water = digestion crying. Grandma know.", emoji: "👵", bgType: "yang_deficient", zh: "为什么中国奶奶总说喝温水？" },
  { type: "chinglish", headline: "Night sweat = body's AC broken.\nNeed cool down, cannot cool down.", subtext: "Yin is your coolant. Yin low = engine hot, no water in radiator. Mung bean soup. Pear. Not spicy.", emoji: "💦", bgType: "yin_deficient", zh: "盗汗 = 身体空调坏了，需要冷却但冷却不了" },
  { type: "chinglish", headline: "Always bloated?\nYour body is wet sponge.\nNeed to squeeze.", subtext: "Dampness = heavy, sticky, no energy. Body hold water like camel but you not in desert. Warm food. No ice.", emoji: "🫠", bgType: "phlegm_damp", zh: "总是胀？你的身体是湿海绵，需要挤" },
  { type: "chinglish", headline: "Every season you sick?\nYour shield got hole.\nNeed repair.", subtext: "Wei Qi = invisible shield. When thin, wind and cold walk right in. Eat warm. Layer up. Build wall.", emoji: "🤧", bgType: "sensitive", zh: "每个季节都病？你的盾有洞，需要修补" },
  { type: "chinglish", headline: "You not fat.\nYou just holding water\nlike wrong container.", subtext: "Phlegm-damp body: every drop of water stay inside. Not your fault. Just wrong plumbing. Fix with warm food and patience.", emoji: "⏳", bgType: "phlegm_damp", zh: "你不是胖，你只是像错误的容器一样存着水" },
  { type: "chinglish", headline: "Friend diet work for friend.\nSame diet for you = disaster.", subtext: "TCM say: same illness different treatment. Your body is different species. Treat it different.", emoji: "🍽️", bgType: "balanced", zh: "朋友的饮食对朋友有用，对你=灾难" },
  { type: "chinglish", headline: "Brain fog?\nHead is cloud.\nBody is humid room.\nOpen window!", subtext: "Dampness fog up brain like shower mirror. Warm water + lemon = squeegee for mind.", emoji: "🌫️", bgType: "phlegm_damp", zh: "脑雾？头是云，身体是潮湿房间，开窗！" },
  { type: "chinglish", headline: "Craving sweets every night?\nSpleen sending SOS.", subtext: "Spleen say: \"I need fuel but I too weak to process slow fuel. Give me quick fuel.\" Answer: sweet potato, not Snickers.", emoji: "🍫", bgType: "qi_deficient", zh: "每晚想吃甜？脾在发求救信号" },
  { type: "chinglish", headline: "Back pain every morning?\nKidney battery = 1%.", subtext: "Lower back powered by deepest energy reserve. When low, you feel first thing in morning. Charge with walnuts and sleep.", emoji: "🦴", bgType: "yang_deficient", zh: "每天早上腰疼？肾电池1%" },
  { type: "chinglish", headline: "Overthink everything?\nYour liver doing backflip\ninside your chest.", subtext: "Stuck energy = spinning thoughts. Body cannot move energy, so brain move thoughts instead. Walk. Breathe. Unstick.", emoji: "🌀", bgType: "qi_stagnant", zh: "总想太多？你的肝在胸口后空翻" },
  { type: "chinglish", headline: "You think you tired?\nNo. Your body type tired.\nBig difference.", subtext: "Same sleep, same food, different energy. Because your engine is diesel, not gasoline. Stop using wrong fuel.", emoji: "⛽", bgType: "qi_deficient", zh: "你以为你累？不，是你的体质累，大不同" },
  { type: "chinglish", headline: "Ice cream in winter?\nThat is crime against body.", subtext: "Your body already cold. You add ice? This is betrayal. Warm dessert exist. Red bean soup. Rice porridge. Join team warm.", emoji: "🍨", bgType: "yang_deficient", zh: "冬天吃冰淇淋？那是虐待身体" },
  { type: "chinglish", headline: "Your face = map of inside.\nAcne on chin = hormone angry.\nForehead = gut crying.", subtext: "Western medicine say \"use cream.\" TCM say \"fix inside, outside will follow.\" Root cause, not band-aid.", emoji: "🗺️", bgType: "balanced", zh: "你的脸=内部地图，下巴痘=激素生气，额头=肠子在哭" },
  { type: "chinglish", headline: "8 hour sleep but still zombie?\nWrong sleep at wrong time = no sleep.", subtext: "TCM body clock: liver repair at 1-3 AM. You sleep 3-11 AM? That is wrong shift. Body confused.", emoji: "🧟", bgType: "yin_deficient", zh: "睡8小时还是僵尸？错的时间睡等于没睡" },
  { type: "chinglish", headline: "Chinese medicine:\nFix root, not fruit.\nWestern medicine:\nFix fruit, ignore root.", subtext: "Symptom is fruit. Body type is root. Cut fruit, new fruit grow. Fix root, no more fruit.", emoji: "🌳", bgType: "balanced", zh: "中医治根不治果，西医治果不管根" },
  { type: "chinglish", headline: "Body is garden,\nnot machine.\nYou cannot upgrade GPU.\nBut you can change soil.", subtext: "Your body type = your soil. Some grow roses, some grow cactus. Know your soil. Plant right seed.", emoji: "🌱", bgType: "balanced", zh: "身体是花园不是机器，你不能换显卡但可以换土壤" },
]

export function getContentByType(type: TemplateType): SocialContent[] {
  return SOCIAL_CONTENT.filter((c) => c.type === type)
}

export function getContentByBgType(bgType: ConstitutionId): SocialContent[] {
  return SOCIAL_CONTENT.filter((c) => c.bgType === bgType)
}
