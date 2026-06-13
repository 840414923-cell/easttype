import type { ConstitutionId } from "@/lib/types"

export type TemplateType = "fact" | "symptom" | "food" | "which" | "quote"

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
}

export const SOCIAL_CONTENT: SocialContent[] = [
  // ═══ Fact 反常识卡 ═══
  { type: "fact", headline: "Ginger isn't good for everyone.", subtext: "If your body runs hot, ginger can make acne, inflammation, and irritability worse.", emoji: "🫚", bgType: "damp_heat", zh: "姜不是对所有人都好" },
  { type: "fact", headline: "Ice water extinguishes your digestive fire.", subtext: "In TCM, the Stomach loves warmth. Cold drinks weaken digestion over time.", emoji: "🧊", bgType: "yang_deficient", zh: "冰水会浇灭你的消化之火" },
  { type: "fact", headline: "8 hours of sleep doesn't fix the wrong body type.", subtext: "If your internal clock is misaligned, no amount of sleep feels enough.", emoji: "😴", bgType: "yin_deficient", zh: "8小时睡眠修不好错误的体质" },
  { type: "fact", headline: "More exercise can make some people worse.", subtext: "If your Qi is already low, intense workouts drain what little energy you have left.", emoji: "🏃", bgType: "qi_deficient", zh: "多运动可能让人更糟" },
  { type: "fact", headline: "Craving sweets isn't weakness — it's your body begging for fuel.", subtext: "Your Spleen is asking for quick energy because the slow kind isn't working.", emoji: "🍫", bgType: "qi_deficient", zh: "想吃甜食不是懦弱，是身体在求救" },
  { type: "fact", headline: "Salad isn't healthy for everyone.", subtext: "Cold, raw food is hard on weak digestion. Some bodies need warmth, not roughage.", emoji: "🥗", bgType: "yang_deficient", zh: "沙拉不是对所有人都健康" },
  { type: "fact", headline: "Drinking more water can make bloating worse.", subtext: "If your body holds dampness, extra water just adds weight you can't process.", emoji: "💧", bgType: "phlegm_damp", zh: "多喝水可能让腹胀更严重" },
  { type: "fact", headline: "Your face is a map of your organs.", subtext: "Forehead = digestion. Nose = heart. Chin = hormones. Cheeks = lungs and liver.", emoji: "🗺️", bgType: "balanced", zh: "你的脸是器官的地图" },
  { type: "fact", headline: "Anger lives in your Liver.", subtext: "In TCM, emotions live in organs. If you're always irritable, your Liver might need attention.", emoji: "😤", bgType: "qi_stagnant", zh: "愤怒住在你的肝里" },
  { type: "fact", headline: "Night sweats aren't always menopause.", subtext: "In TCM, they often signal Yin deficiency — your cooling system is undercharged.", emoji: "💦", bgType: "yin_deficient", zh: "夜间盗汗不一定是更年期" },
  { type: "fact", headline: "Your tongue tells the truth your blood test can't.", subtext: "A pale tongue = low energy. Red tip = internal heat. Thick coating = dampness.", emoji: "👅", bgType: "balanced", zh: "舌头说出了验血查不出的真相" },
  { type: "fact", headline: "Stretching cold makes tight bodies tighter.", subtext: "If your blood flows slowly, aggressive stretching can cause micro-tears. Warm up first.", emoji: "🤸", bgType: "blood_stasis", zh: "冷身拉伸会让紧绷的身体更紧" },
  { type: "fact", headline: "Your friend's miracle diet might make you worse.", subtext: "TCM says 'same illness, different treatment.' What heals one body can harm another.", emoji: "🍽️", bgType: "balanced", zh: "朋友的奇迹饮食可能让你更差" },
  { type: "fact", headline: "Allergies aren't just about pollen.", subtext: "In TCM, they mean your protective shield (Wei Qi) is too thin. The problem is inside, not outside.", emoji: "🤧", bgType: "sensitive", zh: "过敏不只是花粉的问题" },
  { type: "fact", headline: "Coffee doesn't give you energy. It borrows from tomorrow.", subtext: "For Qi-deficient types, that afternoon crash isn't fatigue — it's debt collection.", emoji: "☕", bgType: "qi_deficient", zh: "咖啡不给你能量，它借的是明天的" },

  // ═══ Symptom 症状解码卡 ═══
  { type: "symptom", headline: "ALWAYS TIRED?", subtext: "Your body runs on a fuel type — and you might be using the wrong one. Warm, cooked breakfast before 9 AM may help more than coffee.", emoji: "😩", bgType: "qi_deficient", zh: "总是累？" },
  { type: "symptom", headline: "CAN'T SLEEP AT 3 AM?", subtext: "1–3 AM is Liver time in TCM. Something is stuck that needs to move. Try a 10-minute walk before bed.", emoji: "🌙", bgType: "qi_stagnant", zh: "凌晨3点醒？" },
  { type: "symptom", headline: "COLD HANDS AGAIN?", subtext: "Your inner furnace is underpowered. Some bodies are built for more warmth. Add ginger and cinnamon to your mornings.", emoji: "🥶", bgType: "yang_deficient", zh: "手又冷了？" },
  { type: "symptom", headline: "BRAIN FOG ALL DAY?", subtext: "Fog isn't age. It's moisture your body can't clear — like a window that won't defog. Start the day with warm water and lemon.", emoji: "🧠", bgType: "phlegm_damp", zh: "整天脑雾？" },
  { type: "symptom", headline: "ANXIOUS FOR NO REASON?", subtext: "That tight feeling in your chest is energy that can't flow. It's not in your head. Deep breathing physically moves stuck energy.", emoji: "😰", bgType: "qi_stagnant", zh: "莫名焦虑？" },
  { type: "symptom", headline: "ALWAYS BLOATED?", subtext: "Your body holds moisture like a sponge. It's not what you eat — it's what your body can't process. Skip ice water with meals.", emoji: "🫠", bgType: "phlegm_damp", zh: "总是胀气？" },
  { type: "symptom", headline: "FACE KEEPS BREAKING OUT?", subtext: "Your skin is a vent. When internal heat has nowhere to go, it pushes through your face. Cut back on spicy, fried food for 2 weeks.", emoji: "😤", bgType: "damp_heat", zh: "脸上老长痘？" },
  { type: "symptom", headline: "CAN'T LOSE WEIGHT?", subtext: "It might not be calories. Some bodies hold moisture that makes everything heavier. Try reducing raw, cold foods.", emoji: "⏳", bgType: "phlegm_damp", zh: "瘦不下来？" },
  { type: "symptom", headline: "LOWER BACK ACHES EVERY MORNING?", subtext: "In TCM, the lower back is powered by your deepest energy reserve. When it's low, you feel it first thing.", emoji: "🦴", bgType: "yang_deficient", zh: "每天早上腰疼？" },
  { type: "symptom", headline: "BRUISE EASILY?", subtext: "Everything in your body flows — just not fast enough. Slow circulation means slow recovery. Gentle movement beats intense exercise.", emoji: "🩹", bgType: "blood_stasis", zh: "容易淤青？" },
  { type: "symptom", headline: "SICK EVERY SEASON CHANGE?", subtext: "Your body's protective shield might be too thin. Dress in layers during transitions. Don't fight the season bare-handed.", emoji: "🤧", bgType: "sensitive", zh: "一换季就病？" },
  { type: "symptom", headline: "NIGHT SWEATS WAKE YOU?", subtext: "Your cooling system is undercharged. The body is trying to release heat it can't regulate. Try cooling foods: mung bean, watermelon, pears.", emoji: "💦", bgType: "yin_deficient", zh: "盗汗惊醒？" },
  { type: "symptom", headline: "OVERTHINK EVERYTHING?", subtext: "Your mind races because your energy can't flow. The pressure has to go somewhere. Write it down — not to solve, to release.", emoji: "🌀", bgType: "qi_stagnant", zh: "总想太多？" },
  { type: "symptom", headline: "DRY MOUTH, DRY SKIN, DRY EYES?", subtext: "Your Yin — the cooling, moistening energy — is depleted. Your body is running without coolant.", emoji: "🏜️", bgType: "yin_deficient", zh: "口干皮肤干眼干？" },
  { type: "symptom", headline: "CAN'T FALL ASLEEP EVEN WHEN EXHAUSTED?", subtext: "Your body is running hot while your mind is running empty. The cooling system needs a recharge. Avoid screens after 9 PM.", emoji: "😵", bgType: "yin_deficient", zh: "累但睡不着？" },

  // ═══ Food 食物即药卡 ═══
  { type: "food", headline: "Ginger is nature's heater.", subtext: "Warms the body, moves cold out. Perfect for cold hands and morning stiffness.", emoji: "🫚", bgType: "yang_deficient", zh: "姜是天然暖气片" },
  { type: "food", headline: "Honey is nature's soother.", subtext: "Moistens dryness, calms the lungs. Ideal for dry throat and dry cough.", emoji: "🍯", bgType: "yin_deficient", zh: "蜂蜜是天然润喉片" },
  { type: "food", headline: "Mung bean is nature's coolant.", subtext: "Clears internal heat, detoxifies the body. Your skin may thank you.", emoji: "🫘", bgType: "damp_heat", zh: "绿豆是天然清凉片" },
  { type: "food", headline: "Sweet potato is nature's comfort.", subtext: "Strengthens the Spleen, satisfies sweet cravings naturally.", emoji: "🍠", bgType: "qi_deficient", zh: "地瓜是天然慰藉片" },
  { type: "food", headline: "Walnut is nature's brain food.", subtext: "In TCM, it nourishes the Kidney and strengthens the lower back.", emoji: "🌰", bgType: "yang_deficient", zh: "核桃是天然补脑片" },
  { type: "food", headline: "Cinnamon is nature's spark.", subtext: "Ignites warmth from the inside. A pinch in morning tea may change your whole day.", emoji: "🫙", bgType: "yang_deficient", zh: "肉桂是天然火种" },
  { type: "food", headline: "Goji berry is nature's eye drop.", subtext: "Nourishes the Liver and brightens the eyes. Soak in warm water or add to soup.", emoji: "🔴", bgType: "yin_deficient", zh: "枸杞是天然眼药水" },
  { type: "food", headline: "Red date is nature's blood builder.", subtext: "In TCM, red dates build blood and calm the mind. Perfect for pale, tired, and anxious.", emoji: "🫘", bgType: "qi_deficient", zh: "红枣是天然造血片" },
  { type: "food", headline: "Lotus seed is nature's sleep aid.", subtext: "Calms the heart, stops overthinking. Simmer with red dates for a bedtime tea.", emoji: "🪷", bgType: "qi_stagnant", zh: "莲子是天然安眠药" },
  { type: "food", headline: "Yam is nature's sponge for dampness.", subtext: "Strengthens the Spleen, helps your body process moisture instead of storing it.", emoji: "🥔", bgType: "phlegm_damp", zh: "山药是天然吸湿片" },
  { type: "food", headline: "Chrysanthemum is nature's chill pill.", subtext: "Clears heat from the head, soothes red eyes and headaches. Brew as tea.", emoji: "🌼", bgType: "damp_heat", zh: "菊花是天然降火片" },
  { type: "food", headline: "Adzuki bean is nature's de-puffer.", subtext: "Drains dampness, reduces swelling. Boil into soup for a lighter, less puffy feeling.", emoji: "🫘", bgType: "phlegm_damp", zh: "红豆是天然消水肿片" },
  { type: "food", headline: "Longan is nature's heart calmer.", subtext: "Nourishes heart blood, eases palpitations and anxiety. Add to warm tea.", emoji: "🟤", bgType: "qi_deficient", zh: "桂圆是天然安心片" },
  { type: "food", headline: "Turmeric is nature's traffic cop.", subtext: "Moves stagnant blood, eases aching and stiffness. Golden milk isn't just trendy — it works.", emoji: "🧡", bgType: "blood_stasis", zh: "姜黄是天然交警" },
  { type: "food", headline: "Pear is nature's humidifier.", subtext: "Moistens the lungs, clears dry heat. Steam with rock sugar for a classic TCM remedy.", emoji: "🍐", bgType: "yin_deficient", zh: "梨是天然加湿器" },

  // ═══ WhichType 对号入座卡 ═══
  { type: "which", headline: "3 types of people who wake at 3 AM", subtext: "Liver stuck · Yin running low · Yang trapped inside", emoji: "😴 😤 🥶", bgType: "qi_stagnant", zh: "3种凌晨3点醒的人" },
  { type: "which", headline: "3 types of people who are always cold", subtext: "Yang too low · Qi too weak · Blood moving slow", emoji: "🥶 😰 🥶", bgType: "yang_deficient", zh: "3种总是冷的人" },
  { type: "which", headline: "3 types of people who are always tired", subtext: "Qi running empty · Dampness weighing you down · Blood not reaching the brain", emoji: "😩 🫠 😶", bgType: "qi_deficient", zh: "3种总是累的人" },
  { type: "which", headline: "3 types of people who snap easily", subtext: "Liver energy stuck · Heat rising up · Fire with no outlet", emoji: "😠 🤯 💢", bgType: "qi_stagnant", zh: "3种容易发火的人" },
  { type: "which", headline: "3 types of people who always break out", subtext: "Damp heat pushing up · Blood flowing slow · Fire trapped inside", emoji: "🫠 😤 😈", bgType: "damp_heat", zh: "3种总长痘的人" },
  { type: "which", headline: "3 types of people who can't lose weight", subtext: "Spleen too weak · Dampness stuck · Yang not burning", emoji: "⏳ 🫠 🔥", bgType: "phlegm_damp", zh: "3种瘦不下来的人" },
  { type: "which", headline: "3 types of people who always get sick", subtext: "Protective Qi too thin · Lungs too weak · Allergies running wild", emoji: "🤧 😷 🌬️", bgType: "sensitive", zh: "3种总生病的人" },
  { type: "which", headline: "3 types of people who bruise easily", subtext: "Blood moving slow · Cold blocking flow · Qi not pushing hard enough", emoji: "🩹 🥶 💨", bgType: "blood_stasis", zh: "3种容易淤青的人" },
  { type: "which", headline: "3 types of people who can't stop thinking", subtext: "Liver energy stuck · Heart blood too thin · Spleen not grounding", emoji: "🌀 😰 💭", bgType: "qi_stagnant", zh: "3种停不下来想的人" },
  { type: "which", headline: "3 types of people who wake up puffy", subtext: "Dampness stored overnight · Kidney Yang low · Spleen too weak to drain", emoji: "🫠 🥶 💧", bgType: "phlegm_damp", zh: "3种起床浮肿的人" },

  // ═══ Quote 一句话真相卡 ═══
  { type: "quote", headline: "Your body has been whispering. You just haven't learned its language.", subtext: "", emoji: "", bgType: "balanced", zh: "你的身体一直在说悄悄话，你只是还没学会它的语言" },
  { type: "quote", headline: "The same illness, different treatment. That's Eastern medicine.", subtext: "", emoji: "", bgType: "balanced", zh: "同病异治，这就是东方医学" },
  { type: "quote", headline: "Your body type is your fingerprint. Once you know it, everything makes sense.", subtext: "", emoji: "", bgType: "balanced", zh: "体质就像指纹，了解后一切都说得通" },
  { type: "quote", headline: "The best medicine isn't herbs. It's knowing your body before it gets sick.", subtext: "", emoji: "", bgType: "balanced", zh: "最好的药不是草药，是在生病前就了解你的身体" },
  { type: "quote", headline: "Your tongue tells the truth your blood test can't.", subtext: "", emoji: "", bgType: "balanced", zh: "舌头说出了验血查不出的真相" },
  { type: "quote", headline: "Your body doesn't make mistakes. It makes adjustments.", subtext: "", emoji: "", bgType: "balanced", zh: "你的身体不会犯错，它只是在调整" },
  { type: "quote", headline: "What you crave is a clue. What you avoid is a signal.", subtext: "", emoji: "", bgType: "balanced", zh: "你渴望的是线索，你回避的是信号" },
  { type: "quote", headline: "You don't have a weak body. You have a mismatched lifestyle.", subtext: "", emoji: "", bgType: "balanced", zh: "你不是身体弱，你是生活方式不匹配" },
  { type: "quote", headline: "Stop fighting your body. Start understanding it.", subtext: "", emoji: "", bgType: "balanced", zh: "别再对抗你的身体，开始理解它" },
  { type: "quote", headline: "3,000 years of observation. 9 body types. One you.", subtext: "", emoji: "", bgType: "balanced", zh: "3000年观察，9种体质，唯一的你" },
  { type: "quote", headline: "In the East, food is the first medicine.", subtext: "", emoji: "", bgType: "balanced", zh: "在东方，食物是第一味药" },
  { type: "quote", headline: "Health isn't the absence of illness. It's the presence of balance.", subtext: "", emoji: "", bgType: "balanced", zh: "健康不是没有疾病，而是平衡的存在" },
  { type: "quote", headline: "Every symptom is a message. Most people just delete it.", subtext: "", emoji: "", bgType: "balanced", zh: "每个症状都是一条消息，大多数人只是删除它" },
  { type: "quote", headline: "Your body is not a machine. It's a garden.", subtext: "", emoji: "", bgType: "balanced", zh: "你的身体不是机器，是花园" },
  { type: "quote", headline: "What heals your friend may harm you. Know your type.", subtext: "", emoji: "", bgType: "balanced", zh: "治好你朋友的可能伤害你，了解你的类型" },
]

export function getContentByType(type: TemplateType): SocialContent[] {
  return SOCIAL_CONTENT.filter((c) => c.type === type)
}

export function getContentByBgType(bgType: ConstitutionId): SocialContent[] {
  return SOCIAL_CONTENT.filter((c) => c.bgType === bgType)
}
