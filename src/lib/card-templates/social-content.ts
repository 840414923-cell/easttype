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
  fact: { label: "\u53CD\u5E38\u8BC6\u5361", icon: "\uD83E\uDEDA" },
  symptom: { label: "\u75C7\u72B6\u89E3\u7801\u5361", icon: "\uD83D\uDE29" },
  food: { label: "\u98DF\u7269\u5373\u836F\u5361", icon: "\uD83C\uDF6F" },
  which: { label: "\u5BF9\u53F7\u5165\u5EA7\u5361", icon: "\uD83D\uDE34" },
  quote: { label: "\u4E00\u53E5\u8BDD\u771F\u76F8\u5361", icon: "\u2728" },
}

export const SOCIAL_CONTENT: SocialContent[] = [
  // ── Fact (反常识卡) ──
  { type: "fact", headline: "Ginger isn't good for everyone.", subtext: "If your body runs hot, ginger can make acne, inflammation, and irritability worse.", emoji: "\uD83E\uDEDA", bgType: "damp_heat", zh: "\u59DC\u4E0D\u662F\u5BF9\u6240\u6709\u4EBA\u90FD\u597D" },
  { type: "fact", headline: "Ice water extinguishes your digestive fire.", subtext: "In TCM, the Stomach loves warmth. Cold drinks weaken digestion over time.", emoji: "\uD83E\uDDCA", bgType: "yang_deficient", zh: "\u51B0\u6C34\u4F1A\u6D47\u706D\u4F60\u7684\u6D88\u5316\u4E4B\u706B" },
  { type: "fact", headline: "8 hours of sleep doesn't fix the wrong body type.", subtext: "If your internal clock is misaligned, no amount of sleep feels enough.", emoji: "\uD83D\uDE34", bgType: "yin_deficient", zh: "8\u5C0F\u65F6\u7761\u7720\u4FEE\u4E0D\u597D\u9519\u8BEF\u7684\u4F53\u8D28" },
  { type: "fact", headline: "More exercise can make some people worse.", subtext: "If your Qi is already low, intense workouts drain what little energy you have left.", emoji: "\uD83C\uDFC3", bgType: "qi_deficient", zh: "\u591A\u8FD0\u52A8\u53EF\u80FD\u8BA9\u6709\u4EBA\u66F4\u7CDF" },
  { type: "fact", headline: "Craving sweets isn't weakness \u2014 it's your body begging for fuel.", subtext: "Your Spleen is asking for quick energy because the slow kind isn't working.", emoji: "\uD83C\uDF6B", bgType: "qi_deficient", zh: "\u559C\u6B22\u751C\u98DF\u4E0D\u662F\u61E6\u5F31\uFF0C\u662F\u8EAB\u4F53\u5728\u6C42\u6551" },

  // ── Symptom (症状解码卡) ──
  { type: "symptom", headline: "ALWAYS TIRED?", subtext: "Your body runs on a fuel type \u2014 and you might be using the wrong one. Warm, cooked breakfast before 9 AM may help more than coffee.", emoji: "\uD83D\uDE29", bgType: "qi_deficient", zh: "\u603B\u662F\u7D2F\uFF1F" },
  { type: "symptom", headline: "CAN'T SLEEP AT 3 AM?", subtext: "1\u20133 AM is Liver time in TCM. Something is stuck that needs to move. Try a 10-minute walk before bed.", emoji: "\uD83C\uDF19", bgType: "qi_stagnant", zh: "\u51CC\u66683\u70B9\u9192\uFF1F" },
  { type: "symptom", headline: "COLD HANDS AGAIN?", subtext: "Your inner furnace is underpowered. Some bodies are built for more warmth. Add ginger and cinnamon to your mornings.", emoji: "\uD83E\uDD76", bgType: "yang_deficient", zh: "\u624B\u53C8\u51B7\u4E86\uFF1F" },
  { type: "symptom", headline: "BRAIN FOG ALL DAY?", subtext: "Fog isn't age. It's moisture your body can't clear \u2014 like a window that won't defog. Start the day with warm water and lemon.", emoji: "\uD83E\uDDE0", bgType: "phlegm_damp", zh: "\u6574\u5929\u8111\u96FE\uFF1F" },
  { type: "symptom", headline: "ANXIOUS FOR NO REASON?", subtext: "That tight feeling in your chest is energy that can't flow. It's not in your head. Deep breathing physically moves stuck energy.", emoji: "\uD83D\uDE30", bgType: "qi_stagnant", zh: "\u83AB\u540D\u7126\u8651\uFF1F" },

  // ── Food (食物即药卡) ──
  { type: "food", headline: "Ginger is nature's heater.", subtext: "Warms the body, moves cold out. Perfect for cold hands and morning stiffness.", emoji: "\uD83E\uDEDA", bgType: "yang_deficient", zh: "\u59DC\u662F\u5929\u7136\u6696\u6C14\u7247" },
  { type: "food", headline: "Honey is nature's soother.", subtext: "Moistens dryness, calms the lungs. Ideal for dry throat and dry cough.", emoji: "\uD83C\uDF6F", bgType: "yin_deficient", zh: "\u8702\u871C\u662F\u5929\u7136\u6DA6\u5589\u7247" },
  { type: "food", headline: "Mung bean is nature's coolant.", subtext: "Clears internal heat, detoxifies the body. Your skin may thank you.", emoji: "\uD83E\uDED8", bgType: "damp_heat", zh: "\u7EFF\u8C46\u662F\u5929\u7136\u6E05\u51C9\u7247" },
  { type: "food", headline: "Sweet potato is nature's comfort.", subtext: "Strengthens the Spleen, satisfies sweet cravings naturally.", emoji: "\uD83C\uDF60", bgType: "qi_deficient", zh: "\u5730\u74DC\u662F\u5929\u7136\u6170\u85C9\u7247" },
  { type: "food", headline: "Walnut is nature's brain food.", subtext: "In TCM, it nourishes the Kidney and strengthens the lower back.", emoji: "\uD83C\uDF30", bgType: "yang_deficient", zh: "\u6838\u6843\u662F\u5929\u7136\u8865\u8111\u7247" },

  // ── WhichType (对号入座卡) ──
  { type: "which", headline: "3 types of people who wake at 3 AM", subtext: "Liver stuck \u00B7 Yin running low \u00B7 Yang trapped inside", emoji: "\uD83D\uDE34 \uD83D\uDE24 \uD83E\uDD76", bgType: "qi_stagnant", zh: "3\u79CD\u51CC\u66683\u70B9\u9192\u7684\u4EBA" },
  { type: "which", headline: "3 types of people who are always cold", subtext: "Yang too low \u00B7 Qi too weak \u00B7 Blood moving slow", emoji: "\uD83E\uDD76 \uD83D\uDE30 \uD83E\uDD27", bgType: "yang_deficient", zh: "3\u79CD\u603B\u662F\u51B7\u7684\u4EBA" },
  { type: "which", headline: "3 types of people who are always tired", subtext: "Qi running empty \u00B7 Dampness weighing you down \u00B7 Blood not reaching the brain", emoji: "\uD83D\uDE29 \uD83E\uDEE0 \uD83D\uDE36", bgType: "qi_deficient", zh: "3\u79CD\u603B\u662F\u7D2F\u7684\u4EBA" },
  { type: "which", headline: "3 types of people who snap easily", subtext: "Liver energy stuck \u00B7 Heat rising up \u00B7 Fire with no outlet", emoji: "\uD83D\uDE20 \uD83E\uDD2F \uD83D\uDD25", bgType: "qi_stagnant", zh: "3\u79CD\u5BB9\u6613\u53D1\u706B\u7684\u4EBA" },
  { type: "which", headline: "3 types of people who always break out", subtext: "Damp heat pushing up \u00B7 Blood flowing slow \u00B7 Fire trapped inside", emoji: "\uD83E\uDEE0 \uD83D\uDE24 \uD83D\uDC7F", bgType: "damp_heat", zh: "3\u79CD\u603B\u957F\u75D8\u7684\u4EBA" },

  // ── Quote (一句话真相卡) ──
  { type: "quote", headline: "Your body has been whispering. You just haven't learned its language.", subtext: "", emoji: "", bgType: "balanced", zh: "\u4F60\u7684\u8EAB\u4F53\u4E00\u76F4\u5728\u8BF4\u6084\u6084\u8BDD\uFF0C\u4F60\u53EA\u662F\u8FD8\u6CA1\u5B66\u4F1A\u5B83\u7684\u8BED\u8A00" },
  { type: "quote", headline: "The same illness, different treatment. That's Eastern medicine.", subtext: "", emoji: "", bgType: "balanced", zh: "\u540C\u75C5\u5F02\u6CBB\uFF0C\u8FD9\u5C31\u662F\u4E1C\u65B9\u533B\u5B66" },
  { type: "quote", headline: "Your body type is your fingerprint. Once you know it, everything makes sense.", subtext: "", emoji: "", bgType: "balanced", zh: "\u4F53\u8D28\u5C31\u50CF\u6307\u7EB9\uFF0C\u4E86\u89E3\u540E\u4E00\u5207\u90FD\u8BF4\u5F97\u901A" },
  { type: "quote", headline: "The best medicine isn't herbs. It's knowing your body before it gets sick.", subtext: "", emoji: "", bgType: "balanced", zh: "\u6700\u597D\u7684\u836F\u4E0D\u662F\u8349\u836F\uFF0C\u662F\u5728\u751F\u75C5\u524D\u5C31\u4E86\u89E3\u4F60\u7684\u8EAB\u4F53" },
  { type: "quote", headline: "Your tongue tells the truth your blood test can't.", subtext: "", emoji: "", bgType: "balanced", zh: "\u4F60\u7684\u820C\u5934\u8BF4\u51FA\u4E86\u9A8C\u8840\u67E5\u4E0D\u51FA\u7684\u771F\u76F8" },
]

export function getContentByType(type: TemplateType): SocialContent[] {
  return SOCIAL_CONTENT.filter((c) => c.type === type)
}
