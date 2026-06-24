import type { ConstitutionId } from "./types"
import { SYMPTOMS, type SymptomPage } from "./symptoms-data"
import { getFoodsForTypes, type FoodItem } from "./food-map"

export type CtaType = "none" | "brand" | "cta"
export type AspectRatio = "9:16" | "2:3" | "1:1"
export type ScriptType = "daily" | "mythbust"

export interface GeneratedCard {
  slug: string
  title: string
  cause: string
  symptoms: string[]
  foods: FoodItem[]
  imagePrompt: string
  caption: string
  hashtags: string
  igCaption: string
  igHashtags: string
  xCaption: string
  xHashtags: string
  ctaType: CtaType
  ratio: AspectRatio
}

export interface GeneratedScript {
  slug: string
  type: ScriptType
  en: string
  zh: string
}

const EMOTION_MAP: Record<string, string> = {
  "why-am-i-always-tired": "lazy",
  "why-am-i-always-cold": "weak",
  "why-do-i-wake-up-at-3am": "broken",
  "always-bloated-after-eating": "greedy",
  "why-am-i-always-sleepy": "lazy",
  "why-do-i-have-night-sweats": "sick",
  "why-do-i-feel-anxious": "overreacting",
  "why-do-i-have-brain-fog": "slow",
  "why-cant-i-fall-asleep": "wired",
  "why-do-i-keep-gaining-weight": "lazy",
  "why-are-my-moods-all-over-the-place": "crazy",
  "why-do-i-get-sick-so-often": "weak",
  "why-do-my-hands-and-feet-go-numb": "dramatic",
  "why-is-my-skin-so-dry": "neglectful",
  "why-do-i-crave-sweets": "undisciplined",
  "why-do-i-overthink-everything": "crazy",
  "why-am-i-always-unmotivated": "lazy",
  "why-do-i-keep-breaking-out": "dirty",
  "why-is-my-hair-falling-out": "aging",
  "why-am-i-so-irritable": "mean",
  "why-cant-i-lose-weight": "lazy",
  "why-do-i-have-acid-reflux": "gluttonous",
  "why-do-i-have-headaches": "dramatic",
  "why-do-i-feel-dizzy": "weak",
  "why-am-i-always-thirsty": "dramatic",
  "why-do-i-have-lower-back-pain": "aging",
  "why-do-i-have-eczema": "dirty",
  "why-do-i-sweat-so-much": "gross",
  "why-do-i-have-joint-pain": "aging",
  "why-am-i-always-thirsty-at-night": "sick",
  "why-do-i-have-hot-flashes": "aging",
  "why-do-i-have-water-retention": "lazy",
  "why-am-i-always-constipated": "sick",
  "why-is-my-libido-low": "broken",
  "why-do-i-have-pms": "crazy",
  "why-is-my-metabolism-so-slow": "lazy",
  "why-do-i-have-poor-circulation": "weak",
  "why-do-i-have-seasonal-allergies": "weak",
  "why-do-i-have-dark-circles": "tired",
  "why-am-i-always-hungry": "greedy",
  "why-do-i-have-period-cramps": "dramatic",
  "why-is-my-period-irregular": "broken",
  "why-is-my-period-so-heavy": "sick",
  "why-do-i-have-breast-tenderness": "dramatic",
  "why-do-i-have-menopause-symptoms": "aging",
  "why-do-i-have-nausea": "sick",
  "why-do-i-have-diarrhea": "sick",
  "why-do-i-feel-sick-after-eating": "weak",
  "why-do-i-have-bad-breath": "dirty",
  "why-is-my-face-so-oily": "dirty",
  "why-do-i-have-rosacea": "sick",
  "why-do-i-have-brittle-nails": "neglectful",
  "why-is-my-complexion-dull": "tired",
  "why-do-i-have-cellulite": "lazy",
  "why-do-i-have-neck-pain": "aging",
  "why-are-my-shoulders-always-tense": "stressed",
  "why-do-i-have-stomach-pain": "sick",
  "why-am-i-always-stiff": "aging",
  "why-do-i-keep-forgetting-things": "slow",
  "why-cant-i-focus": "lazy",
  "why-do-i-cry-so-easily": "overreacting",
  "why-do-i-have-no-patience": "mean",
  "why-do-i-have-a-chronic-cough": "sick",
  "why-do-i-always-have-a-sore-throat": "sick",
  "why-do-i-have-post-nasal-drip": "sick",
  "why-do-i-wake-up-to-pee": "aging",
  "why-do-i-have-tinnitus": "crazy",
  "why-am-i-so-sensitive-to-heat": "dramatic",
  "why-do-i-wake-up-tired": "lazy",
  "why-do-i-have-cold-sweats": "sick",
}

interface RemedySuggestion {
  en: string
  zh: string
  timing_en: string
  timing_zh: string
}

const REMEDY_MAP: Record<string, RemedySuggestion> = {
  "why-am-i-always-tired": { en: "sweet potato and red dates tea", zh: "红薯红枣茶", timing_en: "after breakfast", timing_zh: "早饭后喝" },
  "why-am-i-always-cold": { en: "ginger cinnamon tea", zh: "生姜肉桂茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-wake-up-at-3am": { en: "chrysanthemum and dried tangerine peel tea", zh: "菊花陈皮茶", timing_en: "after dinner", timing_zh: "晚饭后喝" },
  "always-bloated-after-eating": { en: "dried tangerine peel and ginger tea", zh: "陈皮生姜茶", timing_en: "after meals", timing_zh: "饭后喝" },
  "why-am-i-always-sleepy": { en: "astragalus and red dates tea", zh: "黄芪红枣茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-night-sweats": { en: "goji and lily bulb tea", zh: "枸杞百合茶", timing_en: "before bed", timing_zh: "睡前喝" },
  "why-do-i-feel-anxious": { en: "chrysanthemum and dried tangerine peel tea", zh: "菊花陈皮茶", timing_en: "after lunch", timing_zh: "午饭后喝" },
  "why-do-i-have-brain-fog": { en: "job's tears and poria soup", zh: "薏米茯苓汤", timing_en: "at lunch", timing_zh: "午饭时喝" },
  "why-cant-i-fall-asleep": { en: "lily bulb and lotus seed tea", zh: "百合莲子茶", timing_en: "an hour before bed", timing_zh: "睡前一小时喝" },
  "why-do-i-keep-gaining-weight": { en: "job's tears and adzuki bean tea", zh: "薏米赤小豆茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-are-my-moods-all-over-the-place": { en: "rose and longan tea", zh: "玫瑰花桂圆茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-get-sick-so-often": { en: "astragalus and red dates tea", zh: "黄芪红枣茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-my-hands-and-feet-go-numb": { en: "black sesame and walnut drink", zh: "黑芝麻核桃糊", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-is-my-skin-so-dry": { en: "tremella and goji soup", zh: "银耳枸杞汤", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-crave-sweets": { en: "yam and red dates porridge", zh: "山药红枣粥", timing_en: "for breakfast", timing_zh: "当早餐吃" },
  "why-do-i-overthink-everything": { en: "rose and lotus seed tea", zh: "玫瑰莲子茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-am-i-always-unmotivated": { en: "astragalus and honey tea", zh: "黄芪蜂蜜茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-keep-breaking-out": { en: "mung bean and chrysanthemum tea", zh: "绿豆菊花茶", timing_en: "after lunch", timing_zh: "午饭后喝" },
  "why-is-my-hair-falling-out": { en: "black sesame and mulberry tea", zh: "黑芝麻桑葚茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-am-i-so-irritable": { en: "chrysanthemum and mint tea", zh: "菊花薄荷茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-cant-i-lose-weight": { en: "job's tears and winter melon tea", zh: "薏米冬瓜茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-acid-reflux": { en: "mung bean and pear tea", zh: "绿豆梨水", timing_en: "after meals", timing_zh: "饭后喝" },
  "why-do-i-have-headaches": { en: "chrysanthemum and mint tea", zh: "菊花薄荷茶", timing_en: "when it starts", timing_zh: "头痛时喝" },
  "why-do-i-feel-dizzy": { en: "red dates and longan tea", zh: "红枣桂圆茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-am-i-always-thirsty": { en: "goji and ophiopogon tea", zh: "枸杞麦冬茶", timing_en: "throughout the day", timing_zh: "白天随时喝" },
  "why-do-i-have-lower-back-pain": { en: "chestnut and walnut soup", zh: "栗子核桃汤", timing_en: "at dinner", timing_zh: "晚饭时喝" },
  "why-do-i-have-eczema": { en: "mung bean and lotus root soup", zh: "绿豆莲藕汤", timing_en: "at lunch", timing_zh: "午饭时喝" },
  "why-do-i-sweat-so-much": { en: "goji and lily bulb tea", zh: "枸杞百合茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-have-joint-pain": { en: "ginger and brown sugar tea", zh: "生姜红糖茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-am-i-always-thirsty-at-night": { en: "lily bulb and ophiopogon tea", zh: "百合麦冬茶", timing_en: "before bed", timing_zh: "睡前喝" },
  "why-do-i-have-hot-flashes": { en: "goji and chrysanthemum tea", zh: "枸杞菊花茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-have-water-retention": { en: "job's tears and adzuki bean tea", zh: "薏米赤小豆茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-am-i-always-constipated": { en: "honey and ginger tea", zh: "蜂蜜生姜茶", timing_en: "on an empty stomach", timing_zh: "空腹喝" },
  "why-is-my-libido-low": { en: "black sesame and chestnut porridge", zh: "黑芝麻栗子粥", timing_en: "for breakfast", timing_zh: "当早餐吃" },
  "why-do-i-have-pms": { en: "rose and brown sugar tea", zh: "玫瑰红糖茶", timing_en: "a week before your period", timing_zh: "经期前一周喝" },
  "why-is-my-metabolism-so-slow": { en: "ginger and cinnamon tea", zh: "生姜肉桂茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-poor-circulation": { en: "ginger and brown sugar tea", zh: "生姜红糖茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-seasonal-allergies": { en: "astragalus and schisandra tea", zh: "黄芪五味子茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-dark-circles": { en: "goji and black sesame tea", zh: "枸杞黑芝麻茶", timing_en: "before bed", timing_zh: "睡前喝" },
  "why-am-i-always-hungry": { en: "yam and millet porridge", zh: "山药小米粥", timing_en: "for breakfast", timing_zh: "当早餐吃" },
  "why-do-i-have-period-cramps": { en: "ginger and brown sugar tea", zh: "生姜红糖茶", timing_en: "when it starts", timing_zh: "痛的时候喝" },
  "why-is-my-period-irregular": { en: "red dates and longan tea", zh: "红枣桂圆茶", timing_en: "daily in the morning", timing_zh: "每天早上喝" },
  "why-is-my-period-so-heavy": { en: "lotus seed and lily bulb tea", zh: "莲子百合茶", timing_en: "during your period", timing_zh: "经期喝" },
  "why-do-i-have-breast-tenderness": { en: "rose and dried tangerine peel tea", zh: "玫瑰陈皮茶", timing_en: "a week before your period", timing_zh: "经期前一周喝" },
  "why-do-i-have-menopause-symptoms": { en: "goji and lily bulb tea", zh: "枸杞百合茶", timing_en: "twice a day", timing_zh: "每天两次" },
  "why-do-i-have-nausea": { en: "ginger and tangerine peel tea", zh: "生姜陈皮茶", timing_en: "when nauseous", timing_zh: "恶心时喝" },
  "why-do-i-have-diarrhea": { en: "yam and millet porridge", zh: "山药小米粥", timing_en: "for breakfast", timing_zh: "当早餐吃" },
  "why-do-i-feel-sick-after-eating": { en: "dried tangerine peel and ginger tea", zh: "陈皮生姜茶", timing_en: "before meals", timing_zh: "饭前喝" },
  "why-do-i-have-bad-breath": { en: "mung bean and mint tea", zh: "绿豆薄荷茶", timing_en: "after meals", timing_zh: "饭后喝" },
  "why-is-my-face-so-oily": { en: "chrysanthemum and mung bean tea", zh: "菊花绿豆茶", timing_en: "after lunch", timing_zh: "午饭后喝" },
  "why-do-i-have-rosacea": { en: "mung bean and lotus root tea", zh: "绿豆莲藕茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-have-brittle-nails": { en: "black sesame and red dates tea", zh: "黑芝麻红枣茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-is-my-complexion-dull": { en: "red dates and goji tea", zh: "红枣枸杞茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-cellulite": { en: "job's tears and winter melon tea", zh: "薏米冬瓜茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-have-neck-pain": { en: "rose and mint tea", zh: "玫瑰薄荷茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-are-my-shoulders-always-tense": { en: "chrysanthemum and rose tea", zh: "菊花玫瑰花茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-have-stomach-pain": { en: "ginger and brown sugar tea", zh: "生姜红糖茶", timing_en: "when it hurts", timing_zh: "痛的时候喝" },
  "why-am-i-always-stiff": { en: "ginger and cinnamon tea", zh: "生姜肉桂茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-do-i-keep-forgetting-things": { en: "walnut and goji tea", zh: "核桃枸杞茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-cant-i-focus": { en: "job's tears and poria soup", zh: "薏米茯苓汤", timing_en: "at lunch", timing_zh: "午饭时喝" },
  "why-do-i-cry-so-easily": { en: "rose and lotus seed tea", zh: "玫瑰莲子茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-have-no-patience": { en: "chrysanthemum and mint tea", zh: "菊花薄荷茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-have-a-chronic-cough": { en: "pear and lily bulb tea", zh: "梨百合茶", timing_en: "throughout the day", timing_zh: "白天随时喝" },
  "why-do-i-always-have-a-sore-throat": { en: "pear and honey tea", zh: "梨蜂蜜水", timing_en: "when it's dry", timing_zh: "嗓子干时喝" },
  "why-do-i-have-post-nasal-drip": { en: "job's tears and dried tangerine peel tea", zh: "薏米陈皮茶", timing_en: "after lunch", timing_zh: "午饭后喝" },
  "why-do-i-wake-up-to-pee": { en: "goji and schisandra tea", zh: "枸杞五味子茶", timing_en: "in the afternoon, not before bed", timing_zh: "下午喝，别睡前喝" },
  "why-do-i-have-tinnitus": { en: "black sesame and mulberry tea", zh: "黑芝麻桑葚茶", timing_en: "in the morning", timing_zh: "早上喝" },
  "why-am-i-so-sensitive-to-heat": { en: "mung bean and chrysanthemum tea", zh: "绿豆菊花茶", timing_en: "afternoon", timing_zh: "下午喝" },
  "why-do-i-wake-up-tired": { en: "red dates and longan tea", zh: "红枣桂圆茶", timing_en: "before bed", timing_zh: "睡前喝" },
  "why-do-i-have-cold-sweats": { en: "astragalus and red dates tea", zh: "黄芪红枣茶", timing_en: "in the morning", timing_zh: "早上喝" },
}

interface MythbustContrast {
  slug: string
  symptom_en: string
  symptom_zh: string
  typeA_en: string
  typeA_zh: string
  causeA_en: string
  causeA_zh: string
  fixA_en: string
  fixA_zh: string
  typeB_en: string
  typeB_zh: string
  causeB_en: string
  causeB_zh: string
  fixB_en: string
  fixB_zh: string
}

const MYTHBUST_CONTRASTS: MythbustContrast[] = [
  {
    slug: "why-am-i-always-tired",
    symptom_en: "always tired", symptom_zh: "总是累",
    typeA_en: "your body has no charge", typeA_zh: "身体没电了",
    causeA_en: "You sleep fine but still wake up drained", causeA_zh: "睡了还是醒不来",
    fixA_en: "sweet potato and red dates tea to slowly recharge", fixA_zh: "红薯红枣茶慢慢充电",
    typeB_en: "your body has no fire", typeB_zh: "身体没火了",
    causeB_en: "You're always cold on top of being tired", causeB_zh: "累的同时还总是冷",
    fixB_en: "ginger cinnamon tea to reignite the inner furnace", fixB_zh: "生姜肉桂茶重新点燃内火",
  },
  {
    slug: "why-cant-i-fall-asleep",
    symptom_en: "can't fall asleep", symptom_zh: "睡不着",
    typeA_en: "your body is too hot inside", typeA_zh: "身体内部太热",
    causeA_en: "You feel hot and restless under the covers", causeA_zh: "盖被子觉得热，翻来覆去",
    fixA_en: "lily bulb and lotus seed tea to cool down", fixA_zh: "百合莲子茶降降火",
    typeB_en: "your mind can't stop running", typeB_zh: "脑子停不下来",
    causeB_en: "Your body is tired but your thoughts keep spinning", causeB_zh: "身体很累但脑子一直转",
    fixB_en: "rose and longan tea to settle the mind", fixB_zh: "玫瑰桂圆茶安安心",
  },
  {
    slug: "why-do-i-wake-up-at-3am",
    symptom_en: "waking up at 3am", symptom_zh: "凌晨3点醒",
    typeA_en: "something is stuck in your chest", typeA_zh: "胸口堵着东西",
    causeA_en: "You wake up with racing thoughts and chest tightness", causeA_zh: "醒来脑子乱转，胸口闷",
    fixA_en: "chrysanthemum and tangerine peel tea to unblock", fixA_zh: "菊花陈皮茶疏通一下",
    typeB_en: "your body is burning from the inside", typeB_zh: "身体内部在烧",
    causeB_en: "You wake up hot and dry, mouth parched", causeB_zh: "醒来觉得热，嘴巴干",
    fixB_en: "goji and lily bulb tea to cool and moisturize", fixB_zh: "枸杞百合茶滋阴降火",
  },
  {
    slug: "why-am-i-always-cold",
    symptom_en: "always cold", symptom_zh: "总是冷",
    typeA_en: "your inner furnace has gone out", typeA_zh: "内在火炉灭了",
    causeA_en: "Cold from the inside out, lower back aches, craving warm drinks", causeA_zh: "从里冷到外，腰酸，想喝热饮",
    fixA_en: "ginger cinnamon tea to restart the furnace", fixA_zh: "生姜肉桂茶重新生火",
    typeB_en: "your blood can't circulate", typeB_zh: "血液循环不了",
    causeB_en: "Cold hands and feet, bruising easily, numb patches", causeB_zh: "手脚冰凉，容易淤青，发麻",
    fixB_en: "brown sugar and ginger tea to get blood moving", fixB_zh: "红糖生姜茶让血动起来",
  },
  {
    slug: "why-do-i-keep-breaking-out",
    symptom_en: "breaking out", symptom_zh: "长痘",
    typeA_en: "internal heat pushing through your skin", typeA_zh: "内部热气往外冒",
    causeA_en: "Oily skin, worse after spicy food, red inflamed pimples", causeA_zh: "皮肤出油，吃辣更严重，红肿痘痘",
    fixA_en: "mung bean and chrysanthemum tea to clear the heat", fixA_zh: "绿豆菊花茶清清热",
    typeB_en: "stagnation trapped under the skin", typeB_zh: "堵在皮肤下面出不来",
    causeB_en: "Dark spots, slow healing, dull complexion with breakouts", causeB_zh: "暗沉痘印，好得慢，脸色发暗",
    fixB_en: "hawthorn and rose tea to unblock from within", fixB_zh: "山楂玫瑰花茶从内部疏通",
  },
  {
    slug: "why-do-i-keep-gaining-weight",
    symptom_en: "gaining weight", symptom_zh: "体重增加",
    typeA_en: "your body is holding water it can't drain", typeA_zh: "身体积水排不出",
    causeA_en: "Puffy not fat, heavy and sluggish, worse in humid weather", causeA_zh: "肿不是胖，身体沉重，潮湿天更严重",
    fixA_en: "job's tears and adzuki bean tea to drain the water", fixA_zh: "薏米赤小豆茶排排水",
    typeB_en: "your metabolism is too cold to burn", typeB_zh: "代谢太冷烧不动",
    causeB_en: "Always cold, gaining on small portions, no energy to move", causeB_zh: "总是冷，吃得少也胖，不想动",
    fixB_en: "ginger and cinnamon tea to warm up the engine", fixB_zh: "生姜肉桂茶把引擎暖起来",
  },
  {
    slug: "always-bloated-after-eating",
    symptom_en: "bloated after eating", symptom_zh: "饭后胀气",
    typeA_en: "your digestion is too cold to process", typeA_zh: "消化太冷运不动",
    causeA_en: "Heavy feeling after meals, no appetite for the next one, worse with cold food", causeA_zh: "饭后觉得重，下一顿没胃口，吃冷的更严重",
    fixA_en: "tangerine peel and ginger tea to warm up digestion", fixA_zh: "陈皮生姜茶暖一暖消化",
    typeB_en: "energy is stuck in your chest and won't go down", typeB_zh: "气堵在胸口下不去",
    causeB_en: "Bloating with mood swings, sighing a lot, worse when stressed", causeB_zh: "胀气加情绪波动，老叹气，压力大更严重",
    fixB_en: "rose and mint tea to move the energy down", fixB_zh: "玫瑰薄荷茶把气往下顺",
  },
  {
    slug: "why-do-i-feel-anxious",
    symptom_en: "anxious for no reason", symptom_zh: "无缘无故焦虑",
    typeA_en: "something is stuck in your chest", typeA_zh: "胸口堵着气",
    causeA_en: "Racing heart, can't sit still, overthinking everything", causeA_zh: "心跳加速，坐不住，脑子停不下来",
    fixA_en: "chrysanthemum and tangerine peel tea to unblock", fixA_zh: "菊花陈皮茶疏通一下",
    typeB_en: "your heart is running too hot", typeB_zh: "心火太旺",
    causeB_en: "Night sweats, hot palms, can't fall asleep", causeB_zh: "盗汗，手心烫，睡不着",
    fixB_en: "lily bulb and lotus seed tea to cool the heart", fixB_zh: "百合莲子茶给心降降温",
  },
  {
    slug: "why-do-i-have-period-cramps",
    symptom_en: "period cramps", symptom_zh: "经期疼痛",
    typeA_en: "cold is freezing the blood", typeA_zh: "冷把血冻住了",
    causeA_en: "Worse with cold, dark clots, pain radiating to back", causeA_zh: "受冷更痛，有血块，痛到后腰",
    fixA_en: "ginger brown sugar tea to warm and unblock", fixA_zh: "生姜红糖茶暖一暖通一通",
    typeB_en: "blood is stuck and can't flow", typeB_zh: "血堵住了流不动",
    causeB_en: "Sharp stabbing pain, dark blood, getting worse over time", causeB_zh: "刺痛，颜色暗，越来越严重",
    fixB_en: "rose and hawthorn tea to get blood moving", fixB_zh: "玫瑰山楂茶活血化瘀",
  },
  {
    slug: "why-do-i-have-headaches",
    symptom_en: "headaches", symptom_zh: "头痛",
    typeA_en: "heat is rising to your head", typeA_zh: "热气往上冲",
    causeA_en: "Pressure behind eyes, worse when hot, red face", causeA_zh: "眼眶胀痛，热的时候更痛，脸红",
    fixA_en: "chrysanthemum and mint tea to bring the heat down", fixA_zh: "菊花薄荷茶把热降下来",
    typeB_en: "stagnation is pressurizing your head", typeB_zh: "堵住了，头在加压",
    causeB_en: "Stiff neck, tension at base of skull, worse with stress", causeB_zh: "脖子僵硬，后脑勺紧，压力大更痛",
    fixB_en: "rose and tangerine peel tea to release the pressure", fixB_zh: "玫瑰陈皮茶释放压力",
  },
  {
    slug: "why-do-i-have-brain-fog",
    symptom_en: "brain fog", symptom_zh: "脑子不清醒",
    typeA_en: "your brain is wrapped in moisture", typeA_zh: "脑子被湿气蒙住了",
    causeA_en: "Heavy head, can't think clearly, worse in humid weather", causeA_zh: "头重，想不清，潮湿天更严重",
    fixA_en: "job's tears and poria soup to drain the fog", fixA_zh: "薏米茯苓汤散散雾",
    typeB_en: "your brain isn't getting enough fuel", typeB_zh: "脑子供不上能量",
    causeB_en: "Forgetful, can't focus, worse when tired", causeB_zh: "健忘，集中不了，累的时候更严重",
    fixB_en: "walnut and goji tea to fuel the brain", fixB_zh: "核桃枸杞茶给大脑加加油",
  },
  {
    slug: "why-do-i-sweat-so-much",
    symptom_en: "sweating too much", symptom_zh: "爱出汗",
    typeA_en: "internal heat is pushing sweat out", typeA_zh: "内部热气逼汗出来",
    causeA_en: "Hot all the time, sweating without effort, night sweats", causeA_zh: "总是热，不动也出汗，晚上盗汗",
    fixA_en: "goji and lily bulb tea to cool from within", fixA_zh: "枸杞百合茶从内部降温",
    typeB_en: "your pores can't close properly", typeB_zh: "毛孔关不上",
    causeB_en: "Sweating from slight movement, cold after sweating, easily winded", causeB_zh: "稍微一动就出汗，出汗后怕冷，容易喘",
    fixB_en: "astragalus and red dates tea to strengthen the door", fixB_zh: "黄芪红枣茶把门加固",
  },
  {
    slug: "why-am-i-always-thirsty",
    symptom_en: "always thirsty", symptom_zh: "总是口渴",
    typeA_en: "your internal reservoir has evaporated", typeA_zh: "内部水库蒸发了",
    causeA_en: "Dry mouth, water doesn't help, waking up thirsty", causeA_zh: "嘴巴干，喝水不管用，醒来就渴",
    fixA_en: "goji and ophiopogon tea to refill the reservoir", fixA_zh: "枸杞麦冬茶把水库加满",
    typeB_en: "heat is baking your body dry", typeB_zh: "热气把身体烤干了",
    causeB_en: "Thirst with bitter taste, yellow urine, feeling hot", causeB_zh: "口渴还口苦，尿黄，觉得热",
    fixB_en: "mung bean and chrysanthemum tea to clear the heat", fixB_zh: "绿豆菊花茶清清热",
  },
  {
    slug: "why-do-i-get-sick-so-often",
    symptom_en: "getting sick often", symptom_zh: "经常感冒",
    typeA_en: "your shield has cracks in it", typeA_zh: "防护盾有裂缝",
    causeA_en: "Catching every cold, slow to recover, always sniffling", causeA_zh: "每次感冒都中招，恢复慢，总在抽鼻子",
    fixA_en: "astragalus and red dates tea to patch the shield", fixA_zh: "黄芪红枣茶修补防护盾",
    typeB_en: "your shield overreacts to everything", typeB_zh: "防护盾反应过度",
    causeB_en: "Allergies, sneezing, itchy eyes, reacting to everything", causeB_zh: "过敏，打喷嚏，眼睛痒，什么都反应",
    fixB_en: "schisandra and yam tea to calm the system", fixB_zh: "五味子山药茶让系统安静下来",
  },
  {
    slug: "why-do-i-have-lower-back-pain",
    symptom_en: "lower back pain", symptom_zh: "腰痛",
    typeA_en: "your deepest battery is dying", typeA_zh: "最深处的电池快没电了",
    causeA_en: "Aching after rest, worse in cold, weak knees too", causeA_zh: "休息后酸痛，冷天更严重，膝盖也软",
    fixA_en: "chestnut and walnut soup to recharge the battery", fixA_zh: "栗子核桃汤给电池充电",
    typeB_en: "something is blocked in your lower back", typeB_zh: "腰那里堵住了",
    causeB_en: "Sharp pain, worse with pressure, dark bruises easily", causeB_zh: "刺痛，按压更痛，容易淤青",
    fixB_en: "hawthorn and rose tea to unblock the area", fixB_zh: "山楂玫瑰茶通一通",
  },
  {
    slug: "why-is-my-skin-so-dry",
    symptom_en: "dry skin", symptom_zh: "皮肤干",
    typeA_en: "your internal moisturizer is empty", typeA_zh: "内部保湿器空了",
    causeA_en: "Dry all over, itchy after shower, drinking water doesn't help", causeA_zh: "全身干，洗澡后痒，喝水没用",
    fixA_en: "tremella and goji soup to moisturize from within", fixA_zh: "银耳枸杞汤从内部保湿",
    typeB_en: "moisture can't reach the surface", typeB_zh: "水分到不了皮肤表面",
    causeB_en: "Dry with dark spots, dull complexion, cold hands", causeB_zh: "干还长斑，脸色暗，手脚冷",
    fixB_en: "rose and brown sugar tea to get moisture moving", fixB_zh: "玫瑰红糖茶让水分流动起来",
  },
  {
    slug: "why-am-i-always-hungry",
    symptom_en: "always hungry", symptom_zh: "总是饿",
    typeA_en: "your body can't absorb what you eat", typeA_zh: "吃进去吸收不了",
    causeA_en: "Eating but never full, snacking all day, still empty after meals", causeA_zh: "吃了不饱，一天到晚零食，饭后还空",
    fixA_en: "yam and millet porridge to strengthen absorption", fixA_zh: "山药小米粥增强吸收",
    typeB_en: "your stomach is burning through food too fast", typeB_zh: "胃火太旺烧太快",
    causeB_en: "Hungry right after eating, mouth dry, craving cold drinks", causeB_zh: "刚吃完就饿，口干，想喝冷饮",
    fixB_en: "pear and mung bean tea to cool the stomach fire", fixB_zh: "梨绿豆水降降胃火",
  },
  {
    slug: "why-do-i-have-diarrhea",
    symptom_en: "diarrhea", symptom_zh: "拉肚子",
    typeA_en: "your intestines don't have the energy to hold", typeA_zh: "肠子没力气兜住",
    causeA_en: "Loose stools after eating cold, worse when tired, no pain", causeA_zh: "吃冷的后拉，累的时候更严重，不太痛",
    fixA_en: "yam and millet porridge to strengthen the gut", fixA_zh: "山药小米粥把肠子加固",
    typeB_en: "heat and dampness are rushing downward", typeB_zh: "湿热往下冲",
    causeB_en: "Urgent, burning sensation, foul smell, worse with spicy food", causeB_zh: "急，灼热感，味道重，吃辣更严重",
    fixB_en: "job's tears and mung bean tea to clear and drain", fixB_zh: "薏米绿豆茶清热排水",
  },
  {
    slug: "why-am-i-so-irritable",
    symptom_en: "irritable", symptom_zh: "爱发火",
    typeA_en: "something is stuck and pressing on your mood", typeA_zh: "堵着的东西压着情绪",
    causeA_en: "Snapping at people, sighing a lot, chest tightness", causeA_zh: "对人发火，老叹气，胸口闷",
    fixA_en: "chrysanthemum and mint tea to release the pressure", fixA_zh: "菊花薄荷茶释放压力",
    typeB_en: "your body is running too hot", typeB_zh: "身体跑太热了",
    causeB_en: "Hot tempered, red face, can't sleep, dry mouth", causeB_zh: "脾气暴，脸红，睡不着，口干",
    fixB_en: "lily bulb and chrysanthemum tea to cool down", fixB_zh: "百合菊花茶降降温",
  },
  {
    slug: "why-is-my-period-irregular",
    symptom_en: "irregular period", symptom_zh: "经期不规律",
    typeA_en: "your body doesn't have enough energy to run on schedule", typeA_zh: "身体没力气按时运行",
    causeA_en: "Skipping months, light flow, exhausted all the time", causeA_zh: "跳月，量少，总是累",
    fixA_en: "red dates and longan tea to build up energy", fixA_zh: "红枣桂圆茶补补能量",
    typeB_en: "something is blocking the flow", typeB_zh: "有什么东西堵住了",
    causeB_en: "Dark clots, painful, unpredictable timing, mood swings", causeB_zh: "有血块，痛，时间不定，情绪波动",
    fixB_en: "rose and hawthorn tea to unblock the path", fixB_zh: "玫瑰山楂茶把路通开",
  },
]

const CAUSE_MAP: Record<string, string> = {
  "why-am-i-always-tired": "Your body is running on the wrong fuel.",
  "why-am-i-always-cold": "Your inner furnace has run out of firewood.",
  "why-do-i-wake-up-at-3am": "Your Liver is doing overtime on the night shift.",
  "always-bloated-after-eating": "Your digestion engine is too cold to process fuel.",
  "why-am-i-always-sleepy": "Your body's battery won't hold a charge.",
  "why-do-i-have-night-sweats": "Your body's cooling system is leaking.",
  "why-do-i-feel-anxious": "Your chest is holding energy that can't move.",
  "why-do-i-have-brain-fog": "Your body is a sponge that can't drain.",
  "why-cant-i-fall-asleep": "Your engine is overheating but the coolant is gone.",
  "why-do-i-keep-gaining-weight": "It's not the calories — it's the moisture your body can't drain.",
  "why-are-my-moods-all-over-the-place": "Your emotional steering wheel is disconnected.",
  "why-do-i-get-sick-so-often": "Your immune shield has cracks.",
  "why-do-my-hands-and-feet-go-numb": "Your circulation river has run dry.",
  "why-is-my-skin-so-dry": "Your body's internal moisturizer is empty.",
  "why-do-i-crave-sweets": "Your Spleen is begging for quick fuel.",
  "why-do-i-overthink-everything": "Your mind is a pressure cooker with no valve.",
  "why-am-i-always-unmotivated": "Your engine has fuel but no spark.",
  "why-do-i-keep-breaking-out": "Your skin is an emergency exit for internal heat.",
  "why-is-my-hair-falling-out": "Your deepest energy reserves are running on empty.",
  "why-am-i-so-irritable": "Your Liver is stuck and taking it out on your mood.",
  "why-cant-i-lose-weight": "Your body is holding water like a broken container.",
  "why-do-i-have-acid-reflux": "Internal heat is pushing acid where it shouldn't go.",
  "why-do-i-have-headaches": "Heat or stuck energy is pressurizing your head.",
  "why-do-i-feel-dizzy": "Your brain isn't getting enough upward fuel.",
  "why-am-i-always-thirsty": "Your body's internal reservoir has evaporated.",
  "why-do-i-have-lower-back-pain": "Your deepest battery is dying.",
  "why-do-i-have-eczema": "Internal heat and dampness are pushing through your skin.",
  "why-do-i-sweat-so-much": "Your pores can't close because the heat keeps pushing out.",
  "why-do-i-have-joint-pain": "Cold and dampness are camping in your joints.",
  "why-am-i-always-thirsty-at-night": "Your cooling system is undercharged and overheating at night.",
  "why-do-i-have-hot-flashes": "Your body's thermostat is broken.",
  "why-do-i-have-water-retention": "Your drainage system is clogged.",
  "why-am-i-always-constipated": "Your intestines don't have the energy to push.",
  "why-is-my-libido-low": "Your body's deepest fire has burned down to embers.",
  "why-do-i-have-pms": "Energy is stuck in your chest and lower abdomen.",
  "why-is-my-metabolism-so-slow": "Your internal furnace is barely lit.",
  "why-do-i-have-poor-circulation": "Your blood river has too many dams.",
  "why-do-i-have-seasonal-allergies": "Your body's border patrol is underfunded.",
  "why-do-i-have-dark-circles": "Your kidney battery is visibly draining.",
  "why-am-i-always-hungry": "Your body can't absorb what you eat, so it keeps asking.",
  "why-do-i-have-period-cramps": "Cold and stuck blood can't flow freely.",
  "why-is-my-period-irregular": "Your body's clock is running on low energy.",
  "why-is-my-period-so-heavy": "Your body can't hold what it should keep.",
  "why-do-i-have-breast-tenderness": "Stuck energy is pooling in your chest.",
  "why-do-i-have-menopause-symptoms": "Your cooling and warming systems are both running low.",
  "why-do-i-have-nausea": "Your stomach's energy is flowing in the wrong direction.",
  "why-do-i-have-diarrhea": "Your Spleen can't hold what it should contain.",
  "why-do-i-feel-sick-after-eating": "Your digestion engine stalls when you give it fuel.",
  "why-do-i-have-bad-breath": "Internal heat is cooking in your stomach.",
  "why-is-my-face-so-oily": "Internal heat is pushing oil through your skin.",
  "why-do-i-have-rosacea": "Blood and heat are trapped in your face.",
  "why-do-i-have-brittle-nails": "Your blood doesn't have enough to nourish the edges.",
  "why-is-my-complexion-dull": "Your blood and energy can't reach the surface.",
  "why-do-i-have-cellulite": "Dampness is pooling under your skin.",
  "why-do-i-have-neck-pain": "Stuck energy is knotting in your neck.",
  "why-are-my-shoulders-always-tense": "Stress and stuck energy are camping in your shoulders.",
  "why-do-i-have-stomach-pain": "Your stomach energy is blocked or flowing backward.",
  "why-am-i-always-stiff": "Cold and dampness have frozen your joints.",
  "why-do-i-keep-forgetting-things": "Your brain isn't getting enough fuel from your Kidney.",
  "why-cant-i-focus": "Dampness is fogging up your mental windshield.",
  "why-do-i-cry-so-easily": "Your heart's energy is fragile and overflowing.",
  "why-do-i-have-no-patience": "Your Liver heat is making everything feel urgent.",
  "why-do-i-have-a-chronic-cough": "Your lungs are dry and irritated from internal heat.",
  "why-do-i-always-have-a-sore-throat": "Internal heat is burning your throat from below.",
  "why-do-i-have-post-nasal-drip": "Dampness is dripping down from your sinuses.",
  "why-do-i-wake-up-to-pee": "Your kidney's water gate can't stay closed at night.",
  "why-do-i-have-tinnitus": "Your kidney energy is too low to nourish your ears.",
  "why-am-i-so-sensitive-to-heat": "Your cooling system is undercharged.",
  "why-do-i-wake-up-tired": "Your body repaired all night but couldn't recharge.",
  "why-do-i-have-cold-sweats": "Your body is leaking warmth it can't hold onto.",
}

const SYMPTOM_LISTS: Record<string, string[]> = {
  "why-am-i-always-tired": ["Constant fatigue", "Low motivation", "Afternoon energy crash", "Difficulty focusing"],
  "why-am-i-always-cold": ["Cold hands and feet", "Lower back aches", "Craving warm drinks", "Needing extra layers"],
  "why-do-i-wake-up-at-3am": ["Waking at the same time nightly", "Racing thoughts", "Can't fall back asleep", "Chest tightness"],
  "always-bloated-after-eating": ["Stomach feels heavy", "Gas after meals", "Clothes feel tight", "No appetite next meal"],
  "why-am-i-always-sleepy": ["Falling asleep at desk", "Heavy eyelids all day", "Need naps to function", "Wake up groggy"],
  "why-do-i-have-night-sweats": ["Drenched sheets", "Hot flashes at night", "Waking up flushed", "Dry mouth by morning"],
  "why-do-i-feel-anxious": ["Racing heart for no reason", "Chest tightness", "Can't sit still", "Overthinking everything"],
  "why-do-i-have-brain-fog": ["Can't think clearly", "Forget what you were saying", "Slow mental processing", "Hard to make decisions"],
  "why-cant-i-fall-asleep": ["Mind won't shut off", "Body feels hot", "Tossing for hours", "Too wired to rest"],
  "why-do-i-keep-gaining-weight": ["Gaining despite eating less", "Feel heavy and puffy", "Slow digestion", "Clothes keep shrinking"],
  "why-are-my-moods-all-over-the-place": ["Happy then sad in minutes", "Easily triggered", "Emotional whiplash", "Can't predict your mood"],
  "why-do-i-get-sick-so-often": ["Catching every cold", "Slow to recover", "Always sniffling", "Season after season"],
  "why-do-my-hands-and-feet-go-numb": ["Tingling fingers", "Cold extremities", "Numb patches", "Poor grip strength"],
  "why-is-my-skin-so-dry": ["Flaky skin", "Itching after shower", "Cracked hands", "Dull rough texture"],
  "why-do-i-crave-sweets": ["Need dessert every night", "3 PM sugar crash", "Can't stop at one bite", "Sweet tooth overrides willpower"],
  "why-do-i-overthink-everything": ["Thoughts loop endlessly", "Can't make decisions", "Analyzing every word", "Mental exhaustion"],
  "why-am-i-always-unmotivated": ["No drive to start things", "Everything feels like effort", "Procrastination loop", "No enthusiasm"],
  "why-do-i-keep-breaking-out": ["Persistent acne", "Oily T-zone", "Breakouts after spicy food", "Skin won't clear"],
  "why-is-my-hair-falling-out": ["More hair on the brush", "Thinning crown", "Dry brittle strands", "Receding hairline"],
  "why-am-i-so-irritable": ["Snapping at people", "Everything annoys you", "Short fuse", "Regret after reacting"],
  "why-cant-i-lose-weight": ["Dieting doesn't work", "Puffy not fat", "Water retention", "Stubborn belly"],
  "why-do-i-have-acid-reflux": ["Burning in chest", "Sour taste in mouth", "Worse after eating", "Worse lying down"],
  "why-do-i-have-headaches": ["Pressure in temples", "Pain behind eyes", "Tension at base of skull", "Worse with stress"],
  "why-do-i-feel-dizzy": ["Lightheaded standing up", "Room spinning", "Unsteady balance", "Vision blurring"],
  "why-am-i-always-thirsty": ["Dry mouth all day", "Water doesn't help", "Waking up thirsty", "Never feels hydrated"],
  "why-do-i-have-lower-back-pain": ["Stiff in morning", "Aching after rest", "Worse with cold weather", "Weak knees"],
  "why-do-i-have-eczema": ["Itchy red patches", "Dry flaking skin", "Worse with stress", "Recurring flare-ups"],
  "why-do-i-sweat-so-much": ["Sweating without effort", "Staining clothes", "Hot all the time", "Night sweating"],
  "why-do-i-have-joint-pain": ["Aching joints", "Worse in cold damp weather", "Stiff in morning", "Swelling"],
  "why-am-i-always-thirsty-at-night": ["Dry mouth waking up", "Needing water by bed", "Never enough water", "Thirst despite drinking"],
  "why-do-i-have-hot-flashes": ["Sudden heat waves", "Flushing face", "Sweating spells", "Heat from inside out"],
  "why-do-i-have-water-retention": ["Puffy face in morning", "Rings feel tight", "Swollen ankles", "Weight fluctuates daily"],
  "why-am-i-always-constipated": ["Few bowel movements", "Hard dry stool", "Straining", "Feeling incomplete"],
  "why-is-my-libido-low": ["No desire", "Exhaustion overrides interest", "Emotional flatness", "Hard to get in the mood"],
  "why-do-i-have-pms": ["Mood swings before period", "Breast tenderness", "Bloating", "Irritability spike"],
  "why-is-my-metabolism-so-slow": ["Gaining on normal calories", "Cold body temperature", "Sluggish after eating", "No energy to move"],
  "why-do-i-have-poor-circulation": ["Cold hands and feet", "Bruising easily", "Numbness", "Slow wound healing"],
  "why-do-i-have-seasonal-allergies": ["Sneezing every spring", "Itchy watery eyes", "Runny nose", "Congestion"],
  "why-do-i-have-dark-circles": ["Purple under eyes", "Looks like exhaustion", "Won't go away with sleep", "Thin under-eye skin"],
  "why-am-i-always-hungry": ["Eating but never full", "Snacking all day", "Empty stomach feeling", "Cravings right after meals"],
  "why-do-i-have-period-cramps": ["Sharp lower belly pain", "Worse with cold", "Clots in flow", "Pain radiating to back"],
  "why-is-my-period-irregular": ["Cycles vary widely", "Skipping months", "Unpredictable timing", "Can't plan around it"],
  "why-is-my-period-so-heavy": ["Soaking through protection", "Lasting too long", "Clots", "Anemia symptoms"],
  "why-do-i-have-breast-tenderness": ["Sore before period", "Lumpy feeling", "Can't lie on stomach", "Worse with stress"],
  "why-do-i-have-menopause-symptoms": ["Hot flashes", "Night sweats", "Mood changes", "Dryness everywhere"],
  "why-do-i-have-nausea": ["Queasy after eating", "Sour stomach", "Loss of appetite", "Gagging easily"],
  "why-do-i-have-diarrhea": ["Urgent bathroom trips", "Loose frequent stools", "Stomach cramping", "Worse with stress"],
  "why-do-i-feel-sick-after-eating": ["Nausea post-meal", "Bloating immediately", "Heavy sluggish feeling", "Regret after normal portions"],
  "why-do-i-have-bad-breath": ["Morning breath persists", "Coated tongue", "Sour taste", "Brushing doesn't fix it"],
  "why-is-my-face-so-oily": ["Shiny T-zone", "Makeup sliding off", "Enlarged pores", "Greasy by noon"],
  "why-do-i-have-rosacea": ["Red flushed cheeks", "Visible blood vessels", "Worse with heat", "Bumps on face"],
  "why-do-i-have-brittle-nails": ["Nails splitting", "Peeling layers", "Slow growth", "Ridges on nails"],
  "why-is-my-complexion-dull": ["No glow", "Grayish tone", "Looks tired", "Skin lacks vibrancy"],
  "why-do-i-have-cellulite": ["Dimpled skin", "Worse on thighs", "Doesn't improve with exercise", "Lumpy texture"],
  "why-do-i-have-neck-pain": ["Stiff neck", "Can't turn head", "Tension at base of skull", "Headaches starting from neck"],
  "why-are-my-shoulders-always-tense": ["Knots in shoulders", "Hunched posture", "Pain between blades", "Can't relax shoulders"],
  "why-do-i-have-stomach-pain": ["Aching after eating", "Cramping", "Pain on pressure", "Worse with cold food"],
  "why-am-i-always-stiff": ["Stiff getting up", "Takes time to loosen", "Joints feel rusty", "Worse in cold"],
  "why-do-i-keep-forgetting-things": ["Walking into rooms and forgetting why", "Losing train of thought", "Missing appointments", "Can't retain new info"],
  "why-cant-i-focus": ["Mind wanders constantly", "Reading same paragraph twice", "Easily distracted", "Can't finish tasks"],
  "why-do-i-cry-so-easily": ["Tears at small things", "Emotional overwhelm", "Can't hold it back", "Feeling fragile"],
  "why-do-i-have-no-patience": ["Everything feels slow", "Interrupting people", "Can't wait", "Frustrated instantly"],
  "why-do-i-have-a-chronic-cough": ["Coughing for weeks", "Dry tickle in throat", "Worse at night", "Unproductive cough"],
  "why-do-i-always-have-a-sore-throat": ["Scratchy throat daily", "Worse in morning", "Swollen feeling", "Voice gets hoarse"],
  "why-do-i-have-post-nasal-drip": ["Mucus in throat", "Constant throat clearing", "Cough from drip", "Gross taste in mouth"],
  "why-do-i-wake-up-to-pee": ["Multiple bathroom trips", "Interrupted sleep", "Urgency at night", "Can't sleep through"],
  "why-do-i-have-tinnitus": ["Ringing in ears", "Buzzing sound", "Worse at night", "Can't find silence"],
  "why-am-i-so-sensitive-to-heat": ["Overheating easily", "Can't handle summer", "Sweating in mild temps", "Seeking AC constantly"],
  "why-do-i-wake-up-tired": ["Groggy every morning", "Sleep didn't recharge", "Need caffeine to start", "Feel worse after sleeping"],
  "why-do-i-have-cold-sweats": ["Sweating without heat", "Clammy skin", "Sudden chills", "Damp feeling"],
}

const TYPE_HASHTAGS: Record<ConstitutionId, string[]> = {
  balanced: ["balanced", "wellness", "healthylifestyle"],
  qi_deficient: ["lowvitality", "qideficient", "fatigue", "lowenergy"],
  yang_deficient: ["coldtype", "yangdeficient", "coldhands", "warmfood"],
  yin_deficient: ["internalheat", "yindeficient", "nightsweats", "cooling"],
  phlegm_damp: ["dampness", "phlegmdamp", "bloating", "heavysluggish"],
  damp_heat: ["dampheat", "breakouts", "oilyskin", "coolingfood"],
  blood_stasis: ["bloodstasis", "poorcirculation", "bruising", "bloodflow"],
  qi_stagnant: ["stuckenergy", "qistagnant", "anxiety", "overthinking"],
  sensitive: ["sensitive", "allergies", "immunity", "weakshield"],
}

const RATIO_MAP: Record<AspectRatio, string> = {
  "9:16": "vertical 9:16 layout",
  "2:3": "vertical 2:3 layout (Pinterest pin)",
  "1:1": "square 1:1 layout (Instagram post)",
}

const IG_BROAD_HASHTAGS = [
  "wellness", "holistichealth", "naturalremedies", "healthylifestyle",
  "wellnessjourney", "selfcare", "mindbodyhealth", "foodasmedicine",
  "holisticwellness", "womenshealth", "healthtips", "wellnesstips",
  "nutritiontips", "healthyhabits", "alternativewellness",
  "energysupport", "healingfoods", "bodywisdom", "wellnessblogger",
  "dailymotivation", "healyourbody", "nourishyourbody",
]

function buildCtaLine(ctaType: CtaType): string {
  if (ctaType === "none") return ""
  if (ctaType === "brand") return "\n\nFooter: EastType · myeasterntype.com"
  return "\n\nFooter: Find your body type → myeasterntype.com"
}

function buildCaptionCta(ctaType: CtaType): string {
  if (ctaType === "none") return ""
  if (ctaType === "brand") return "\n\nmyeasterntype.com"
  return "\n\nFind your body type → myeasterntype.com"
}

export function generateSymptomCard(
  slug: string,
  ctaType: CtaType,
  ratio: AspectRatio,
  excludeFoods: string[] = []
): GeneratedCard | null {
  const symptom = SYMPTOMS[slug]
  if (!symptom) return null

  const title = symptom.h1.en.split("?")[0] + "?"
  const cause = CAUSE_MAP[slug] || "Your body type is creating this pattern."
  const symptoms = SYMPTOM_LISTS[slug] || [symptom.title.en.replace("Why Do I ", "").replace("Why Am I ", "").replace("Why Is My ", "").replace("?", "")]

  const typeIds = symptom.relatedTypes as ConstitutionId[]
  const foods = getFoodsForTypes(typeIds, 4, excludeFoods)

  const foodNames = foods.map((f) => f.en).join(", ")
  const ctaLine = buildCtaLine(ctaType)
  const ratioDesc = RATIO_MAP[ratio]

  const imagePrompt = `Clean modern wellness explanation card UI, ${ratioDesc}.

Top headline:
"${title.toUpperCase()}"

Subheadline:
"The hidden pattern behind your body signals"

Section 1 (CAUSE):
"${cause}"

Section 2 (SYMPTOMS):
- ${symptoms.join("\n- ")}

Section 3 (WHAT HELPS):
Simple daily food support:
${foods.map((f) => f.en).join(", ")}
${ctaLine}

Style:
modern medical wellness app UI, clean editorial infographic, high readability, structured like a health explanation card, calm neutral aesthetic, soft beige background, minimal green accents, lots of white space. Include small realistic food photos for each item in WHAT HELPS section, arranged in a neat horizontal row with labels below each food. No people, no clutter, Instagram shareable, UI-based design.

IMPORTANT: ALL TEXT MUST BE IN ENGLISH ONLY. No Chinese characters. No Japanese. No Korean. Every single word on this card must be in English.`

  const foodBenefitLines = foods.map((f) => `${f.en} — ${f.benefit}`).join("\n")
  const typeHashtags = typeIds.flatMap((t) => TYPE_HASHTAGS[t] || [])
  const uniqueHashtags = [...new Set([...typeHashtags, "easternwellness", "bodytype", "wellness", "naturalhealth"])]
  const hashtagStr = uniqueHashtags.map((h) => `#${h}`).join(" ")

  const captionCta = buildCaptionCta(ctaType)
  const caption = `${title} ${cause}\n\nWhat helps:\n${foodBenefitLines}${captionCta}`

  const igFoodLines = foods.map((f) => `✨ ${f.en} — ${f.benefit}`).join("\n")
  const igCtaMap: Record<CtaType, string> = {
    none: "\n\nWhat's your body telling you? 👇",
    brand: "\n\n— EastType · link in bio",
    cta: "\n\nDiscover your body type → link in bio 🔗",
  }
  const igCaption = `Ever wonder "${title.toLowerCase()}"\n\n${cause}\n\nHere's what may help your body rebalance:\n${igFoodLines}${igCtaMap[ctaType]}`

  const igHashtagPool = [...new Set([...IG_BROAD_HASHTAGS, ...typeHashtags, "easternwellness", "bodytype", "foodasmedicine", "wellnesstips"])]
  const igHashtagStr = igHashtagPool.slice(0, 25).map((h) => `#${h}`).join(" ")

  const foodShort = foods.map((f) => f.en).join(", ")
  const xCtaMap: Record<CtaType, string> = {
    none: "",
    brand: "\n\n— EastType",
    cta: "\n\nFind your body type → myeasterntype.com",
  }
  const xCaption = `You're not broken.\n\n${cause}\n\nFoods that may help:\n${foods.map((f) => `→ ${f.en}`).join("\n")}${xCtaMap[ctaType]}`
  const xHashtags = typeHashtags.slice(0, 2).map((h) => `#${h}`).join(" ")

  return {
    slug,
    title,
    cause,
    symptoms,
    foods,
    imagePrompt,
    caption,
    hashtags: hashtagStr,
    igCaption,
    igHashtags: igHashtagStr,
    xCaption,
    xHashtags,
    ctaType,
    ratio,
  }
}

export function getRandomUnusedSlug(doneSlugs: Set<string>): string | null {
  const allSlugs = Object.keys(SYMPTOMS)
  const unused = allSlugs.filter((s) => !doneSlugs.has(s))
  if (unused.length === 0) return null
  return unused[Math.floor(Math.random() * unused.length)]
}

export function getSlugsByType(typeId: ConstitutionId, doneSlugs: Set<string>): string[] {
  return Object.entries(SYMPTOMS)
    .filter(([_, s]) => s.relatedTypes.includes(typeId) && !doneSlugs.has(_))
    .map(([slug]) => slug)
}

export function generateVideoScript(slug: string, type: ScriptType): GeneratedScript | null {
  const symptom = SYMPTOMS[slug]
  if (!symptom) return null

  const title = symptom.h1.en.split("?")[0] + "?"

  if (type === "daily") {
    const cause = CAUSE_MAP[slug] || "Your body type is creating this pattern."
    const symptoms = SYMPTOM_LISTS[slug] || []
    const twoSymptoms = symptoms.slice(0, 2).map((s) => s.toLowerCase())
    const emotion = EMOTION_MAP[slug] || "broken"
    const remedy = REMEDY_MAP[slug]

    const remedyLine = remedy
      ? `Try this: ${remedy.en}, ${remedy.timing_en}, ${cause.split(".")[0].toLowerCase() === cause.split(".")[0] ? "to help your body rebalance" : "to help your body rebalance"}.`
      : "Try adjusting your daily food to match what your body actually needs."

    const remedyLineZh = remedy
      ? `试试这个：${remedy.zh}，${remedy.timing_zh}，帮身体调一调。`
      : "试试调整每天的食物，给身体真正需要的。"

    const en = `${title}\nAnother body signal — let's decode it.\n${twoSymptoms.join(". And ")}.\n${cause}\n${remedyLine}\nRemember — you're not ${emotion}. Your body is sending you a signal.\nOne body signal decoded every day. Follow me.`

    const zh = `${symptom.title["zh-TW"]}\n又是一个身体信号，我们来解读一下。\n${twoSymptoms.join("，")}。\n${cause}\n${remedyLineZh}\n记住——你不是${emotion}，是身体在给你发信号。\n每天解读一个身体信号，关注我。`

    return { slug, type, en, zh }
  }

  const contrast = MYTHBUST_CONTRASTS.find((c) => c.slug === slug)
  if (!contrast) return null

  const en = `Everyone thinks ${contrast.symptom_en} is just one thing. It's not.\nIn Chinese medicine, ${contrast.symptom_en} can come from two completely different causes.\nOne: ${contrast.typeA_en}. ${contrast.causeA_en}. The fix? ${contrast.fixA_en}.\nTwo: ${contrast.typeB_en}. ${contrast.causeB_en}. The fix? ${contrast.fixB_en}.\nSame symptom. Completely different body. Completely different fix.\nKnow your body type first. Everything else follows.\nI'm practicing using English to translate my body. You can tell me if my English is off, but trust the logic.`

  const zh = `大家都以为${contrast.symptom_zh}就一种情况。不是的。\n在中式养生里，${contrast.symptom_zh}可能来自两种完全不同的原因。\n第一种：${contrast.typeA_zh}。${contrast.causeA_zh}。怎么办？${contrast.fixA_zh}。\n第二种：${contrast.typeB_zh}。${contrast.causeB_zh}。怎么办？${contrast.fixB_zh}。\n同一个症状，完全不同的身体，完全不同的解法。\n先搞懂你的体质，其他的才有意义。\n我在练习用英语来做身体的翻译，你可以告诉我我的英语哪里不好，但是要相信我讲的道理。`

  return { slug, type, en, zh }
}
