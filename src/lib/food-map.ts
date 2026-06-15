import type { ConstitutionId } from "./types"

export interface FoodItem {
  en: string
  zh: string
  benefit: string
}

export const FOOD_MAP: Record<ConstitutionId, FoodItem[]> = {
  balanced: [
    { en: "Millet", zh: "小米", benefit: "gentle daily nourishment" },
    { en: "Yam", zh: "山药", benefit: "maintains digestive balance" },
    { en: "Red dates", zh: "红枣", benefit: "steady gentle energy" },
    { en: "Goji berries", zh: "枸杞", benefit: "supports eye health" },
    { en: "Lotus seeds", zh: "莲子", benefit: "maintains calm focus" },
    { en: "Honey", zh: "蜂蜜", benefit: "gentle immune support" },
    { en: "Lily bulb", zh: "百合", benefit: "supports restful sleep" },
    { en: "Chinese cabbage", zh: "大白菜", benefit: "light daily cleansing" },
    { en: "Carrots", zh: "胡萝卜", benefit: "supports vision and skin" },
    { en: "Apples", zh: "苹果", benefit: "daily gentle hydration" },
  ],

  qi_deficient: [
    { en: "Sweet potato", zh: "红薯", benefit: "steady energy without the crash" },
    { en: "Red dates", zh: "红枣", benefit: "builds gentle energy" },
    { en: "Honey", zh: "蜂蜜", benefit: "easy-to-absorb fuel" },
    { en: "Millet", zh: "小米", benefit: "nourishes without burdening digestion" },
    { en: "Chicken", zh: "鸡肉", benefit: "gentle protein that builds strength" },
    { en: "Beef", zh: "牛肉", benefit: "deep energy replenishment" },
    { en: "Glutinous rice", zh: "糯米", benefit: "warming fuel for low energy" },
    { en: "Longan", zh: "桂圆", benefit: "calms the mind, lifts the body" },
    { en: "Astragalus", zh: "黄芪", benefit: "builds the body's shield" },
    { en: "Yam", zh: "山药", benefit: "strengthens the digestion engine" },
    { en: "Walnuts", zh: "核桃", benefit: "supports focus and deep energy" },
    { en: "Lentils", zh: "扁豆", benefit: "light protein for weak digestion" },
    { en: "Shiitake mushrooms", zh: "香菇", benefit: "builds stamina gently" },
    { en: "Chestnuts", zh: "栗子", benefit: "nourishes the deepest energy reserves" },
    { en: "Pumpkin", zh: "南瓜", benefit: "sweet, steady energy source" },
  ],

  yang_deficient: [
    { en: "Ginger", zh: "生姜", benefit: "nature's internal heater" },
    { en: "Cinnamon", zh: "肉桂", benefit: "ignites warmth from within" },
    { en: "Walnuts", zh: "核桃", benefit: "warms and strengthens the core" },
    { en: "Lamb", zh: "羊肉", benefit: "the deepest warming food" },
    { en: "Leek", zh: "韭菜", benefit: "warms the lower body" },
    { en: "Shrimp", zh: "虾", benefit: "warming protein for cold types" },
    { en: "Red dates", zh: "红枣", benefit: "warms and builds blood" },
    { en: "Chestnuts", zh: "栗子", benefit: "warms the kidney energy" },
    { en: "Black pepper", zh: "黑胡椒", benefit: "sparks the inner fire" },
    { en: "Cumin", zh: "孜然", benefit: "warming spice for cold digestion" },
    { en: "Onion", zh: "洋葱", benefit: "circulates warmth through the body" },
    { en: "Fennel", zh: "茴香", benefit: "warms and moves stuck energy" },
    { en: "Chicken", zh: "鸡肉", benefit: "gentle warming nourishment" },
    { en: "Mutton bone broth", zh: "羊骨汤", benefit: "deep warmth for the coldest type" },
    { en: "Brown sugar", zh: "红糖", benefit: "warms and moves circulation" },
  ],

  yin_deficient: [
    { en: "Goji berries", zh: "枸杞", benefit: "nourishes the cooling system" },
    { en: "Tremella", zh: "银耳", benefit: "deep hydration from within" },
    { en: "Pear", zh: "梨", benefit: "the humidifier you can eat" },
    { en: "Lily bulb", zh: "百合", benefit: "cools and calms the heart" },
    { en: "Duck", zh: "鸭肉", benefit: "cooling protein for internal heat" },
    { en: "Black sesame", zh: "黑芝麻", benefit: "nourishes deepest cooling reserves" },
    { en: "Mulberry", zh: "桑葚", benefit: "cools and builds blood" },
    { en: "Ophiopogon", zh: "麦冬", benefit: "moistens what's dry and hot" },
    { en: "Honey", zh: "蜂蜜", benefit: "gentle cooling nourishment" },
    { en: "Tofu", zh: "豆腐", benefit: "cooling and easy to digest" },
    { en: "Seaweed", zh: "海带", benefit: "clears heat and softens what's hard" },
    { en: "Watermelon", zh: "西瓜", benefit: "fast-acting internal coolant" },
    { en: "Mung beans", zh: "绿豆", benefit: "clears the deepest heat" },
    { en: "Chrysanthemum", zh: "菊花", benefit: "cools the head and eyes" },
    { en: "White fungus", zh: "白木耳", benefit: "long-term hydration investment" },
    { en: "Lotus root", zh: "莲藕", benefit: "cools blood and stops bleeding" },
  ],

  phlegm_damp: [
    { en: "Yam", zh: "山药", benefit: "strengthens the drainage engine" },
    { en: "Job's tears (Coix)", zh: "薏米", benefit: "drains dampness like nothing else" },
    { en: "Adzuki beans", zh: "赤小豆", benefit: "the de-bloat secret" },
    { en: "White radish", zh: "白萝卜", benefit: "cuts through heaviness" },
    { en: "Winter melon", zh: "冬瓜", benefit: "drains excess water gently" },
    { en: "Lotus leaf", zh: "荷叶", benefit: "lifts the heavy, sluggish feeling" },
    { en: "Dried tangerine peel", zh: "陈皮", benefit: "moves what's stuck in digestion" },
    { en: "Poria", zh: "茯苓", benefit: "quietly drains what bloats you" },
    { en: "Lentils", zh: "扁豆", benefit: "gentle dampness drainage" },
    { en: "Celery", zh: "芹菜", benefit: "clears damp heat from the body" },
    { en: "Mung beans", zh: "绿豆", benefit: "clears heat and drains dampness" },
    { en: "Hawthorn", zh: "山楂", benefit: "breaks down what digestion can't" },
    { en: "Ginger", zh: "生姜", benefit: "warms digestion to dry dampness" },
    { en: "Green tea", zh: "绿茶", benefit: "light and draining for heavy bodies" },
    { en: "Bok choy", zh: "小白菜", benefit: "light cleansing for sluggish systems" },
  ],

  damp_heat: [
    { en: "Mung beans", zh: "绿豆", benefit: "the strongest cooling food" },
    { en: "Job's tears (Coix)", zh: "薏米", benefit: "drains dampness and heat together" },
    { en: "Bitter melon", zh: "苦瓜", benefit: "the bitter taste that clears heat" },
    { en: "Winter melon", zh: "冬瓜", benefit: "cools and drains simultaneously" },
    { en: "Chrysanthemum", zh: "菊花", benefit: "clears heat from the head" },
    { en: "Adzuki beans", zh: "赤小豆", benefit: "drains damp heat from the body" },
    { en: "Celery", zh: "芹菜", benefit: "clears heat and moves stuck energy" },
    { en: "Lotus root", zh: "莲藕", benefit: "cools blood and clears heat" },
    { en: "Cucumber", zh: "黄瓜", benefit: "simple cooling hydration" },
    { en: "Water chestnut", zh: "荸荠", benefit: "clears heat and moistens" },
    { en: "Green tea", zh: "绿茶", benefit: "light and cooling for breakouts" },
    { en: "Seaweed", zh: "海带", benefit: "clears heat and dissolves phlegm" },
    { en: "Tofu", zh: "豆腐", benefit: "cooling protein without the fire" },
    { en: "Pear", zh: "梨", benefit: "moistens and cools from within" },
    { en: "Mint", zh: "薄荷", benefit: "clears heat and opens the pores" },
  ],

  blood_stasis: [
    { en: "Black sesame", zh: "黑芝麻", benefit: "nourishes and moves blood" },
    { en: "Hawthorn", zh: "山楂", benefit: "breaks through stagnant blood" },
    { en: "Safflower", zh: "红花", benefit: "the classic blood mover" },
    { en: "Peach kernel", zh: "桃仁", benefit: "breaks through what's stuck" },
    { en: "Black wood ear", zh: "黑木耳", benefit: "cleans and moves the blood" },
    { en: "Turmeric", zh: "姜黄", benefit: "the traffic cop for your blood" },
    { en: "Vinegar", zh: "醋", benefit: "softens and disperses stagnation" },
    { en: "Rose", zh: "玫瑰花", benefit: "moves blood and lifts mood" },
    { en: "Red wine (small amount)", zh: "红酒(少量)", benefit: "warms and moves circulation" },
    { en: "Ginger", zh: "生姜", benefit: "warms the blood to help it flow" },
    { en: "Cinnamon", zh: "肉桂", benefit: "warms and moves cold blood" },
    { en: "Brown sugar", zh: "红糖", benefit: "warms and invigorates blood flow" },
    { en: "Chives", zh: "韭菜", benefit: "warms and moves stagnant blood" },
    { en: "Eggplant", zh: "茄子", benefit: "helps disperse old blood" },
    { en: "Onion", zh: "洋葱", benefit: "warms and circulates blood" },
  ],

  qi_stagnant: [
    { en: "Chrysanthemum", zh: "菊花", benefit: "cools the head, calms the chest" },
    { en: "Rose", zh: "玫瑰花", benefit: "moves stuck energy and lifts mood" },
    { en: "Citrus (mandarin orange)", zh: "柑橘", benefit: "moves energy with every bite" },
    { en: "Lotus root", zh: "莲藕", benefit: "clears heat and moves stuck energy" },
    { en: "Radish", zh: "萝卜", benefit: "pushes stuck energy downward" },
    { en: "Buddha's hand", zh: "佛手", benefit: "the classic mood-lifting food" },
    { en: "Kumquat", zh: "金桔", benefit: "moves energy and brightens mood" },
    { en: "Silktree flower", zh: "合欢花", benefit: "eases emotional tightness" },
    { en: "Lotus seeds", zh: "莲子", benefit: "calms the racing mind" },
    { en: "Dried tangerine peel", zh: "陈皮", benefit: "moves energy through the chest" },
    { en: "Mint", zh: "薄荷", benefit: "opens the chest and clears the head" },
    { en: "Bergamot", zh: "佛手柑", benefit: "moves stuck liver energy" },
    { en: "Green tea", zh: "绿茶", benefit: "clears and moves gently" },
    { en: "Celery", zh: "芹菜", benefit: "clears liver heat and frustration" },
    { en: "Longan", zh: "桂圆", benefit: "settles the anxious heart" },
  ],

  sensitive: [
    { en: "Honey", zh: "蜂蜜", benefit: "gentle immune supporter" },
    { en: "Astragalus", zh: "黄芪", benefit: "builds the body's defensive shield" },
    { en: "Red dates", zh: "红枣", benefit: "strengthens what's fragile" },
    { en: "Yam", zh: "山药", benefit: "calms the overreacting system" },
    { en: "Lily bulb", zh: "百合", benefit: "soothes the reactive lungs" },
    { en: "Reishi mushroom", zh: "灵芝", benefit: "the deep immune balancer" },
    { en: "Ginger", zh: "生姜", benefit: "warms the body's border patrol" },
    { en: "Millet", zh: "小米", benefit: "nourishes without triggering" },
    { en: "Job's tears (Coix)", zh: "薏米", benefit: "drains what the body overreacts to" },
    { en: "White fungus", zh: "白木耳", benefit: "moistens and calms the lungs" },
    { en: "Pear", zh: "梨", benefit: "cools and soothes the respiratory tract" },
    { en: "Lotus seeds", zh: "莲子", benefit: "strengthens what's oversensitive" },
    { en: "Adzuki beans", zh: "赤小豆", benefit: "drains reactive dampness" },
    { en: "Tremella", zh: "银耳", benefit: "deep lung hydration" },
    { en: "Schisandra", zh: "五味子", benefit: "astringes what the body leaks" },
  ],
}

export function getFoodsForType(typeId: ConstitutionId, count: number, exclude: string[] = []): FoodItem[] {
  const pool = FOOD_MAP[typeId].filter((f) => !exclude.includes(f.en))
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getFoodsForTypes(typeIds: ConstitutionId[], count: number, exclude: string[] = []): FoodItem[] {
  const allFoods: FoodItem[] = []
  const seen = new Set<string>(exclude)
  for (const typeId of typeIds) {
    for (const food of FOOD_MAP[typeId]) {
      if (!seen.has(food.en)) {
        allFoods.push(food)
        seen.add(food.en)
      }
    }
  }
  const shuffled = allFoods.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
