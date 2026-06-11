export interface TcmFact {
  en: string
  zh: string
  tags: string[]
}

export const TCM_FACTS: TcmFact[] = [
  { en: "In TCM, the body has 12 main meridians — energy highways that connect your organs to your skin, muscles, and emotions.", zh: "中医认为人体有12条正经，是连接脏腑与皮肤、肌肉、情绪的能量通道。", tags: ["meridian", "basics"] },
  { en: "Waking up at 3 AM every night? TCM says your Liver meridian is most active between 1–3 AM. Something may be stuck.", zh: "每天凌晨3点醒？中医说肝经在凌晨1-3点最活跃，可能是气血不畅。", tags: ["sleep", "liver"] },
  { en: "Cold hands and feet aren't just poor circulation. In TCM, it means your Yang energy — your inner furnace — is running low.", zh: "手脚冰凉不只是循环差。中医认为这是阳气不足，体内的火炉在减弱。", tags: ["yang", "cold"] },
  { en: "Ginger isn't good for everyone. If your body runs hot, ginger can make acne, inflammation, and irritability worse.", zh: "姜不是对所有人都好。如果你的体质偏热，姜可能让痘痘、炎症和烦躁更严重。", tags: ["ginger", "heat", "food"] },
  { en: "TCM identified 9 body constitutions 2,000 years ago. Modern research confirmed these patterns exist in populations today.", zh: "中医2000年前就识别了9种体质。现代研究证实这些体质在当今人群中确实存在。", tags: ["constitution", "history"] },
  { en: "That 3 PM energy crash? In TCM, the Bladder meridian peaks at 3–5 PM. If your Qi is low, you'll feel it hardest then.", zh: "下午三点的崩溃？中医说膀胱经在下午3-5点最旺，气虚的人这时候最难受。", tags: ["fatigue", "energy"] },
  { en: "Craving sweets every night? TCM says your Spleen — the organ responsible for digestion — is asking for help.", zh: "每晚想吃甜的？中医说你的脾胃在求救。", tags: ["cravings", "spleen"] },
  { en: "TCM treats the person, not the disease. Two people with the same headache might get completely different treatments.", zh: "中医治人，不治病。同样的头痛，两个人可能完全不同的治法。", tags: ["philosophy", "personalized"] },
  { en: "Your digestion is strongest between 7–11 AM. That's why breakfast matters most in TCM — your body is ready to absorb.", zh: "消化能力在上午7-11点最强。所以中医最看重早餐——身体这时候最准备好吸收。", tags: ["digestion", "morning"] },
  { en: "Feeling anxious for no reason? In TCM, the Liver manages the smooth flow of emotions. When it's stuck, anxiety appears.", zh: "莫名焦虑？中医说肝负责情绪的顺畅流动，肝气郁结就会出现焦虑。", tags: ["anxiety", "liver", "emotion"] },
  { en: "Night sweats aren't always menopause. In TCM, they often signal Yin deficiency — your cooling system is undercharged.", zh: "夜间盗汗不一定是更年期。中医认为这常是阴虚——你的冷却系统电量不足。", tags: ["sweat", "yin", "heat"] },
  { en: "TCM says your tongue tells the truth your blood test can't. A pale tongue = low energy. Red tip = internal heat.", zh: "中医说舌头能告诉你验血查不出的真相。淡白=能量低，舌尖红=内热。", tags: ["tongue", "diagnosis"] },
  { en: "Your body type doesn't change — but how you care for it can transform how you feel every single day.", zh: "你的体质不会变，但你照顾它的方式能改变你每天的感觉。", tags: ["constitution", "lifestyle"] },
  { en: "In TCM, the Stomach loves warm food. Ice water literally extinguishes your digestive fire.", zh: "中医说胃喜欢温热的食物。冰水真的会浇灭你的消化之火。", tags: ["food", "stomach", "cold"] },
  { en: "Lower back pain every morning? TCM connects the lower back to Kidney energy — your body's deepest battery.", zh: "每天早上腰疼？中医把腰和肾气连在一起——那是你身体最深的电池。", tags: ["back pain", "kidney"] },
  { en: "TCM doesn't separate body and mind. Your emotions live in your organs. Grief lives in the Lungs. Anger lives in the Liver.", zh: "中医不分身心。情绪住在脏腑里。悲伤住在肺，愤怒住在肝。", tags: ["emotion", "philosophy"] },
  { en: "Bloated after every meal? Your Spleen may be too weak to transform food into energy. It's not what you eat — it's what you absorb.", zh: "每次吃完都胀？可能是脾太弱，无法把食物转化为能量。关键不是吃什么，是吸收什么。", tags: ["bloating", "spleen", "digestion"] },
  { en: "Acne on your jawline? In TCM, that area connects to hormonal and Kidney imbalances — not just skincare.", zh: "下巴长痘？中医认为那里对应激素和肾的失调——不只是皮肤问题。", tags: ["acne", "kidney", "skin"] },
  { en: "TCM has a concept called \"dampness\" — a heavy, sticky feeling in your body. It's why some people always feel sluggish.", zh: "中医有个概念叫「湿气」——一种沉重黏腻的感觉。这就是有些人总是迟钝的原因。", tags: ["dampness", "sluggish"] },
  { en: "Some bodies need warming foods (ginger, cinnamon, lamb). Others need cooling foods (mung bean, watermelon, tofu). Know which one you are.", zh: "有些体质需要温热食物（姜、肉桂、羊肉），有些需要清凉食物（绿豆、西瓜、豆腐）。了解你是哪种。", tags: ["food", "constitution"] },
  { en: "In TCM, insomnia between 11 PM – 1 AM means your Gallbladder energy is disturbed. Your body is trying to process something.", zh: "中医说晚上11点到凌晨1点失眠，是胆气不安。你的身体在试图消化什么。", tags: ["sleep", "gallbladder"] },
  { en: "Your face is a map in TCM. Forehead = digestion. Nose = heart. Chin = hormones. Cheeks = lungs and liver.", zh: "在中医里，脸是一张地图。额头=消化，鼻子=心脏，下巴=激素，脸颊=肺和肝。", tags: ["face", "diagnosis"] },
  { en: "TCM says \"the same illness, different treatment.\" That's why your friend's miracle diet might make you feel worse.", zh: "中医说「同病异治」。所以你朋友的奇迹饮食可能让你感觉更差。", tags: ["philosophy", "personalized"] },
  { en: "Always getting sick when seasons change? Your Wei Qi — your body's protective shield — may be too thin.", zh: "一换季就生病？你的卫气——身体的保护盾——可能太薄了。", tags: ["immunity", "seasons"] },
  { en: "In TCM, sweating without exertion is a sign that your Qi can't hold the pores closed. Your body's door is ajar.", zh: "中医说不动就出汗，是气不能固摄毛孔。你身体的门关不严了。", tags: ["sweat", "qi"] },
  { en: "Dry eyes, dry skin, dry mouth? In TCM, your Yin — the cooling, moistening energy — is depleted.", zh: "眼干、皮肤干、口干？中医说你的阴——滋润冷却的能量——被消耗了。", tags: ["dry", "yin"] },
  { en: "TCM says anger stagnates in the Liver. If you find yourself snapping at people, your Liver might need attention.", zh: "中医说愤怒郁在肝里。如果你发现自己总对人发火，可能你的肝需要关注。", tags: ["anger", "liver", "emotion"] },
  { en: "Why do you bruise easily? In TCM, healthy blood flows smoothly. Easy bruising means the flow is too slow.", zh: "为什么容易淤青？中医说健康的血是流动的。容易淤青意味着流动太慢。", tags: ["bruising", "blood"] },
  { en: "Your constitution is like your fingerprint — unique to you. Once you know it, everything about your body starts making sense.", zh: "你的体质就像指纹——独一无二。一旦了解它，你身体的一切都开始说得通了。", tags: ["constitution", "self-knowledge"] },
  { en: "TCM says the best medicine isn't herbs. It's knowing your body so well that you prevent illness before it starts.", zh: "中医说最好的药不是草药。是足够了解你的身体，在疾病开始之前就预防它。", tags: ["prevention", "philosophy"] },
]
