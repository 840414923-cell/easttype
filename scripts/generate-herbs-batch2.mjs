import { readFileSync, writeFileSync } from "node:fs"

const existing = JSON.parse(readFileSync("src/lib/herbs-data.json", "utf-8"))
const existingSlugs = new Set(existing.map(h => h.slug))

function makeActionDetails(nameEn, temperature, taste, channels, actions) {
  return actions.map(action => ({
    action,
    explanation: `In Chinese medicine, this action relates to the herb ${nameEn} and its ${temperature.toLowerCase()} nature with affinity for the ${channels} channels. ${action} means this herb may help regulate functions associated with these organ systems. The ${taste.toLowerCase()} taste contributes to this effect by directing the herb influence in specific ways according to TCM pharmacology principles developed over thousands of years of clinical observation.`
  }))
}

function makeCommonlyUsedFor(nameEn, temperature, taste, channels, conditions) {
  return conditions.map(c => ({
    condition: c,
    tcmInterpretation: `In TCM theory, ${nameEn} addresses imbalances in the ${channels} by leveraging its ${temperature.toLowerCase()} and ${taste.toLowerCase()} properties. This herb may help restore balance to the organ systems involved. Chinese medicine views the body as an interconnected system, so supporting one channel often benefits related organs.`,
    whyItHelps: `${nameEn} enters the ${channels} channels. Its ${temperature.toLowerCase()} temperature and ${taste.toLowerCase()} taste make it suited for patterns where these organs need support. The herb works gradually to restore functional balance rather than forcing immediate change. Consistent use over weeks allows the body to adjust naturally.`
  }))
}

function makePrepNotes(nameEn, temperature) {
  const temp = temperature.toLowerCase()
  if (temp === "cold") {
    return `Because ${nameEn} is cold, it should be used cautiously in people who already run cold. For warming preparations, simmer longer to moderate its cooling effect. For tea, steep 5-10 minutes in hot water. Store in a cool, dry place away from direct sunlight.`
  }
  if (temp === "warm" || temp === "hot") {
    return `Because ${nameEn} is ${temp}, use cautiously in people who run hot. For tea, steep 5-10 minutes. For soup, simmer 30-60 minutes. Avoid overcooking as prolonged heat may reduce active compounds. Store in an airtight container in a cool, dry place.`
  }
  return `${nameEn} is ${temp} in nature, making it balanced for most constitutions. For tea, steep 5-10 minutes. For soup, simmer 30-60 minutes. Store in an airtight container in a cool, dry place for up to 12 months.`
}

function makeDietaryAdvice(nameEn, temperature) {
  const temp = temperature.toLowerCase()
  if (temp === "cold") {
    return `When taking ${nameEn}, avoid very spicy foods that compound its cooling effect. Warm, cooked meals are preferred. If you experience loose stools or chilliness, reduce the dose or add warming foods like ginger tea. Do not take on an empty stomach to avoid digestive discomfort.`
  }
  if (temp === "warm" || temp === "hot") {
    return `When taking ${nameEn}, avoid cold and raw foods that counteract its warming effect. Limit iced drinks and excessive fruit. Warm, cooked meals complement this herb best. If you experience dry mouth or restlessness, reduce the dose or add cooling foods like pear or mung beans to balance the warming effect.`
  }
  return `${nameEn} is ${temp} in temperature and can be taken with most foods. Warm, cooked meals are generally recommended in Chinese medicine. Avoid taking any herb with very cold or icy drinks. Consistent timing (same time each day) helps the body adapt to the herb effects.`
}

function buildHerb(h) {
  return {
    slug: h.slug,
    nameEn: h.nameEn,
    nameZh: h.pinyin,
    nameZhTrad: h.nameZhTrad,
    pinyin: h.pinyin,
    category: h.category,
    temperature: h.temperature,
    taste: h.taste,
    channels: h.channels,
    summary: h.summary,
    actions: h.actions,
    bodyTypes: h.bodyTypes,
    foodPairings: h.foodPairings,
    howToUse: h.howToUse,
    dosage: h.dosage,
    cautions: h.cautions,
    faqs: h.faqs,
    image: `/images/herbs/${h.imageFile}`,
    botanicalName: h.botanicalName,
    therapeuticFocus: h.therapeuticFocus,
    actionDetails: makeActionDetails(h.nameEn, h.temperature, h.taste, h.channels, h.actions),
    commonlyUsedFor: makeCommonlyUsedFor(h.nameEn, h.temperature, h.taste, h.channels, h.commonConditions),
    preparationNotes: makePrepNotes(h.nameEn, h.temperature),
    dietaryAdvice: makeDietaryAdvice(h.nameEn, h.temperature)
  }
}

const newHerbs = [
  // 1. Chai Hu - Bupleurum
  {
    slug: "chai-hu-chai-hu",
    nameEn: "Bupleurum (Chai Hu)",
    nameZhTrad: "柴胡",
    pinyin: "chai hu",
    category: "Qi Regulating",
    temperature: "Cool",
    taste: "Bitter, acrid",
    channels: "Liver, Gallbladder",
    botanicalName: "Bupleurum chinense DC.",
    imageFile: "chai-hu-chai-hu.jpg",
    summary: "The premier herb for soothing Liver Qi stagnation. Relieves stress, irritability, and mood-related digestive issues.",
    actions: ["Soothes Liver Qi and relieves stagnation", "Resolves Shaoyang disorders", "Lifts Yang and raises spleen Qi", "May reduce stress and irritability"],
    bodyTypes: ["qi_stagnant"],
    therapeuticFocus: ["Stress Relief", "Mood Balance", "Digestive Comfort"],
    foodPairings: ["white peony root", "mint", "tangerine peel", "poria"],
    howToUse: "Simmer 3-10g in tea or soup for 20 minutes.",
    dosage: "3-10g per day.",
    cautions: ["Avoid in Yin deficiency with rising Yang", "Not for liver Yang rising headaches", "May cause sweating", "Avoid long-term high doses"],
    commonConditions: ["Qi Stagnant types with stress", "Damp Heat types with irritability"],
    faqs: [
      { q: "What is chai hu best for?", a: "Chai hu is most valued for soothing Liver Qi stagnation, which in TCM is linked to stress, frustration, and mood swings. Take our free body type quiz to see if you have Qi stagnation." },
      { q: "Can chai hu help with depression?", a: "In TCM practice, chai hu appears in formulas for mood-related patterns. It is not a replacement for professional mental health care. Take the body type quiz to learn about your pattern." },
      { q: "Is chai hu safe for daily use?", a: "Chai hu is typically used in formulas rather than alone, for limited periods. Consult a qualified practitioner for extended use." }
    ]
  },
  // 2. Dan Shen - Salvia
  {
    slug: "dan-shen-dan-shen",
    nameEn: "Salvia Root (Dan Shen)",
    nameZhTrad: "丹參",
    pinyin: "dan shen",
    category: "Blood Tonic",
    temperature: "Slightly cold",
    taste: "Bitter",
    channels: "Heart, Liver, Pericardium",
    botanicalName: "Salvia miltiorrhiza Bunge",
    imageFile: "dan-shen-dan-shen.jpg",
    summary: "Invigorates blood circulation and clears heat from the heart. One of the most studied Chinese herbs for cardiovascular support.",
    actions: ["Invigorates blood and removes stasis", "Clears heart heat and calms the mind", "May support cardiovascular health", "Reduces inflammation"],
    bodyTypes: ["blood_stasis", "damp_heat"],
    therapeuticFocus: ["Heart Health", "Menstrual Support", "Mental Clarity"],
    foodPairings: ["rose", "saffron", "hawthorn", "red dates"],
    howToUse: "Simmer 5-15g in tea or soup for 30 minutes.",
    dosage: "5-15g per day.",
    cautions: ["Avoid during pregnancy", "Not for bleeding disorders", "May interact with blood thinners", "Avoid before surgery"],
    commonConditions: ["Blood Stasis types with poor circulation", "Qi Stagnant types with chest tightness"],
    faqs: [
      { q: "Is dan shen good for the heart?", a: "Modern research suggests dan shen may support cardiovascular function. In TCM, it invigorates blood circulation. Take the body type quiz to learn if blood stasis is your pattern." },
      { q: "Can dan shen help with menstrual pain?", a: "Yes, dan shen is commonly used for blood stasis related menstrual discomfort in TCM. It promotes blood movement. Check your type with our quiz." },
      { q: "Does dan shen interact with medications?", a: "Dan shen may interact with blood-thinning medications. Consult your doctor before combining with any prescription drugs." }
    ]
  },
  // 3. Hua Qi Shen - American Ginseng
  {
    slug: "hua-qi-shen-hua-qi-shen",
    nameEn: "American Ginseng (Hua Qi Shen)",
    nameZhTrad: "花旗參",
    pinyin: "hua qi shen",
    category: "Qi Tonic",
    temperature: "Cool",
    taste: "Sweet, bitter",
    channels: "Heart, Lung, Kidney",
    botanicalName: "Panax quinquefolius L.",
    imageFile: "hua-qi-shen-hua-qi-shen.jpg",
    summary: "A cooling Qi tonic, gentler than Asian ginseng. Nourishes Yin, clears heat, and supports energy without causing excess warmth.",
    actions: ["Tonifies Qi and nourishes Yin", "Clears Lung heat and generates fluids", "Calms the mind", "May support blood sugar balance"],
    bodyTypes: ["qi_deficient", "yin_deficient"],
    therapeuticFocus: ["Energy Support", "Immune Support", "Mental Clarity"],
    foodPairings: ["goji berries", "ophiopogon", "red dates", "honey"],
    howToUse: "Steep 2-4 thin slices in hot water for 10 minutes.",
    dosage: "2-4g per day.",
    cautions: ["Avoid during colds with chills", "Do not brew with iron containers", "Avoid radish on same day", "Not for damp conditions"],
    commonConditions: ["Qi Deficient types with chronic fatigue", "Yin Deficient types with heat signs"],
    faqs: [
      { q: "How is American ginseng different from Asian ginseng?", a: "American ginseng is cooling and nourishes Yin, while Asian ginseng is warming and strongly tonifies Yang. Take the body type quiz to see which suits you." },
      { q: "Can I take American ginseng in summer?", a: "Yes, its cooling nature makes American ginseng better suited for warm weather than Asian ginseng. Take the quiz to check your type." },
      { q: "Good for fatigue from overwork?", a: "Yes, American ginseng gently restores Qi without causing heat buildup. Take the body type quiz to see if Qi deficiency is your pattern." }
    ]
  },
  // 4. Ge Gen - Kudzu Root
  {
    slug: "ge-gen-ge-gen",
    nameEn: "Kudzu Root (Ge Gen)",
    nameZhTrad: "葛根",
    pinyin: "ge gen",
    category: "Cooling Herb",
    temperature: "Cool",
    taste: "Sweet, acrid",
    channels: "Spleen, Stomach",
    botanicalName: "Pueraria lobata (Willd.) Ohwi",
    imageFile: "ge-gen-ge-gen.jpg",
    summary: "Releases muscle tension, generates fluids, and raises Spleen Yang. Used for neck stiffness and thirst in fevers.",
    actions: ["Releases muscle tension and spasms", "Generates fluids and quenches thirst", "Raises Yang and stops diarrhea", "May support alcohol metabolism"],
    bodyTypes: ["damp_heat", "qi_stagnant"],
    therapeuticFocus: ["Muscle Relaxation", "Digestive Health", "Hydration"],
    foodPairings: ["rice", "ginger", "jujube", "ophiopogon"],
    howToUse: "Simmer 5-15g in tea or soup for 30 minutes.",
    dosage: "5-15g per day.",
    cautions: ["Avoid in cold-type diarrhea without muscle tension", "Not for Spleen Yang collapse", "Generally well tolerated", "Use cautiously in summer colds"],
    commonConditions: ["Qi Stagnant types with neck tension", "Damp Heat types with thirst"],
    faqs: [
      { q: "Does ge gen help with neck pain?", a: "Yes, ge gen is traditionally used to release tension in the neck and upper back muscles. Take the body type quiz to check your pattern." },
      { q: "Can ge gen help with hangovers?", a: "Research suggests kudzu compounds may support alcohol metabolism. In TCM, it clears heat generated by alcohol. Consult a practitioner." },
      { q: "How to prepare ge gen tea?", a: "Simmer 10g of ge gen in water for 30 minutes. It has a mild starchy, slightly sweet taste." }
    ]
  },
  // 5. Gan Jiang - Dried Ginger
  {
    slug: "gan-jiang-gan-jiang",
    nameEn: "Dried Ginger (Gan Jiang)",
    nameZhTrad: "乾薑",
    pinyin: "gan jiang",
    category: "Warming Herb",
    temperature: "Hot",
    taste: "Acrid",
    channels: "Spleen, Stomach, Heart, Lung",
    botanicalName: "Zingiber officinale Roscoe",
    imageFile: "gan-jiang-gan-jiang.jpg",
    summary: "Strongly warms the Spleen and Stomach, rescues devastated Yang, and warms the Lung. Hotter and drier than fresh ginger.",
    actions: ["Warms the Spleen and disperses cold", "Rescues devastated Yang", "Warms the Lung and transforms phlegm", "May reduce cold-type diarrhea"],
    bodyTypes: ["yang_deficient", "phlegm_damp"],
    therapeuticFocus: ["Digestive Health", "Cold Relief", "Circulation"],
    foodPairings: ["red dates", "cinnamon", "brown sugar", "licorice"],
    howToUse: "Simmer 3-6g in tea or soup for 10-15 minutes.",
    dosage: "3-6g per day.",
    cautions: ["Avoid in Yin deficiency with heat", "Not for pregnancy with heat signs", "May worsen dry mouth", "Avoid in bleeding conditions"],
    commonConditions: ["Yang Deficient types who run cold", "Phlegm Damp types with cold digestion"],
    faqs: [
      { q: "How is dried ginger different from fresh ginger?", a: "Dried ginger (gan jiang) is hotter and deeper-acting, warming the interior organs. Fresh ginger (sheng jiang) is milder and promotes sweating. Take the body type quiz to learn your temperature profile." },
      { q: "Good for cold hands and feet?", a: "Yes, gan jiang strongly warms from the inside. It suits Yang deficient types with internal cold. Check your type with the quiz." },
      { q: "Can I cook with dried ginger daily?", a: "Small amounts in cooking are fine for cold types. Avoid if you tend to run hot or have dry conditions." }
    ]
  },
  // 6. Gao Liang Jiang - Galangal
  {
    slug: "gao-liang-jiang-gao-liang-jiang",
    nameEn: "Galangal (Gao Liang Jiang)",
    nameZhTrad: "高良薑",
    pinyin: "gao liang jiang",
    category: "Warming Herb",
    temperature: "Hot",
    taste: "Acrid",
    channels: "Spleen, Stomach",
    botanicalName: "Alpinia officinarum Hance",
    imageFile: "gao-liang-jiang-gao-liang-jiang.jpg",
    summary: "A strong warming herb for cold-type stomach pain. Closely related to ginger but with a more pungent, peppery profile.",
    actions: ["Warms the middle and dispels cold", "Relieves stomach pain from cold", "Stops vomiting and hiccups", "May support digestion"],
    bodyTypes: ["yang_deficient", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Cold Relief", "Pain Relief"],
    foodPairings: ["fresh ginger", "fennel", "dried tangerine peel", "red dates"],
    howToUse: "Simmer 3-6g in tea or soup for 15 minutes.",
    dosage: "3-6g per day.",
    cautions: ["Avoid in stomach heat or ulcers", "Not for Yin deficiency", "May worsen acid reflux in hot types", "Use in small amounts"],
    commonConditions: ["Yang Deficient types who run cold", "Qi Stagnant types with cold stomach pain"],
    faqs: [
      { q: "Is galangal the same as ginger?", a: "No, galangal (gao liang jiang) is a different plant with a more pungent taste. It is hotter and specifically targets cold stomach pain. Take the body type quiz to learn your pattern." },
      { q: "Good for stomach aches?", a: "Yes, especially cold-type stomach pain that feels better with warmth. Take the quiz to check if you have a cold-type pattern." },
      { q: "Can I use galangal in cooking?", a: "Yes, it is a common spice in Southeast Asian cuisine. Small amounts in soup or curry are fine for cold-type constitutions." }
    ]
  },
  // 7. Sha Shen - Glehnia
  {
    slug: "sha-shen-sha-shen",
    nameEn: "Glehnia Root (Sha Shen)",
    nameZhTrad: "沙參",
    pinyin: "sha shen",
    category: "Yin Tonic",
    temperature: "Slightly cold",
    taste: "Sweet",
    channels: "Lung, Stomach",
    botanicalName: "Glehnia littoralis F. Schmidt ex Miq.",
    imageFile: "sha-shen-sha-shen.jpg",
    summary: "Nourishes Lung and Stomach Yin, clears heat, and generates fluids. Used for dry cough and dry throat.",
    actions: ["Nourishes Lung Yin and moistens dryness", "Nourishes Stomach Yin and generates fluids", "Clears Lung heat", "May support respiratory health"],
    bodyTypes: ["yin_deficient"],
    therapeuticFocus: ["Respiratory Health", "Dry Skin Relief", "Throat Relief"],
    foodPairings: ["ophiopogon", "lily bulb", "snow pear", "white fungus"],
    howToUse: "Simmer 5-10g in soup or tea for 30 minutes.",
    dosage: "5-10g per day.",
    cautions: ["Avoid in cold-type cough with clear phlegm", "Not for Spleen deficiency with damp", "May cause loose stools", "Use cautiously in cold types"],
    commonConditions: ["Yin Deficient types with dry cough", "Qi Deficient types with dry throat"],
    faqs: [
      { q: "What is sha shen good for?", a: "Sha shen nourishes Yin and moistens dryness, especially in the Lung and Stomach. It suits dry cough and dry throat patterns. Take the body type quiz to check your type." },
      { q: "Can sha shen help with dry skin?", a: "Indirectly, yes. By nourishing body fluids, sha shen may help with systemic dryness. Yin deficient types often have dry skin." },
      { q: "How to cook sha shen?", a: "Add 10g to pork or chicken soup and simmer 1-2 hours. It pairs well with lily bulb and ophiopogon." }
    ]
  },
  // 8. Tian Dong - Asparagus
  {
    slug: "tian-dong-tian-dong",
    nameEn: "Asparagus Root (Tian Dong)",
    nameZhTrad: "天冬",
    pinyin: "tian dong",
    category: "Yin Tonic",
    temperature: "Cold",
    taste: "Sweet, bitter",
    channels: "Lung, Kidney",
    botanicalName: "Asparagus cochinchinensis (Lour.) Merr.",
    imageFile: "tian-dong-tian-dong.jpg",
    summary: "Strongly nourishes Lung and Kidney Yin, clears heat, and generates fluids. Colder and more moisturizing than ophiopogon.",
    actions: ["Nourishes Lung and Kidney Yin", "Generates fluids and moistens dryness", "Clears deficiency heat", "May support respiratory health"],
    bodyTypes: ["yin_deficient"],
    therapeuticFocus: ["Respiratory Health", "Dry Skin Relief", "Throat Relief"],
    foodPairings: ["ophiopogon", "lily bulb", "white fungus", "snow pear"],
    howToUse: "Simmer 6-12g in soup or tea for 30 minutes.",
    dosage: "6-12g per day.",
    cautions: ["Avoid in Spleen deficiency with cold diarrhea", "Not for damp conditions", "May cause loose stools", "Not for cold without dryness"],
    commonConditions: ["Yin Deficient types with dry cough", "Yin Deficient types with night sweats"],
    faqs: [
      { q: "Is tian dong the same as asparagus vegetable?", a: "No, tian dong is the dried root tuber of a related species. It is used medicinally, not as a vegetable. Take the body type quiz to check if Yin deficiency is your pattern." },
      { q: "How is tian dong different from mai dong?", a: "Both nourish Yin, but tian dong is colder and also targets the Kidney, while mai dong is gentler and focuses on the Lung and Heart." },
      { q: "Good for dry mouth?", a: "Yes, tian dong generates fluids and is used for Yin deficient dry mouth. Take the quiz to check your type." }
    ]
  },
  // 9. Shan Zhu Yu - Cornus
  {
    slug: "shan-zhu-yu-shan-zhu-yu",
    nameEn: "Asiatic Cornelian Cherry (Shan Zhu Yu)",
    nameZhTrad: "山茱萸",
    pinyin: "shan zhu yu",
    category: "Yang Tonic",
    temperature: "Slightly warm",
    taste: "Sour",
    channels: "Liver, Kidney",
    botanicalName: "Cornus officinalis Siebold & Zucc.",
    imageFile: "shan-zhu-yu-shan-zhu-yu.jpg",
    summary: "Astringes Kidney Qi and Liver Yin, stops sweating, and secures essence. Key ingredient in Liu Wei Di Huang Wan.",
    actions: ["Tonifies Liver and Kidney", "Astringes sweat and secures essence", "May support urinary control", "Strengthens lower back and knees"],
    bodyTypes: ["yin_deficient", "qi_deficient"],
    therapeuticFocus: ["Energy Support", "Menstrual Support", "Men's Health"],
    foodPairings: ["rehmannia", "dioscorea", "goji berries", "schisandra"],
    howToUse: "Simmer 5-10g in tea or soup for 20 minutes.",
    dosage: "5-10g per day.",
    cautions: ["Avoid in damp-heat with difficult urination", "Not for acute infections", "May worsen urinary retention", "Use cautiously with kidney stones"],
    commonConditions: ["Yin Deficient types with excessive sweating", "Qi Deficient types with frequent urination"],
    faqs: [
      { q: "What is shan zhu yu used for?", a: "Shan zhu yu tonifies Liver and Kidney and astringes leakage. It is used for excessive sweating, frequent urination, and lower back weakness. Take the body type quiz to check your pattern." },
      { q: "Can it help with night sweats?", a: "Yes, shan zhu yu is commonly combined with rehmannia for Yin deficient night sweats. Take the quiz to see if Yin deficiency applies to you." },
      { q: "Is it related to corn dogwood fruit?", a: "Yes, shan zhu yu comes from the Asiatic cornelian cherry, a relative of dogwood. The dried fruit is used medicinally." }
    ]
  },
  // 10. Sha Ji - Sea Buckthorn
  {
    slug: "sha-ji-sha-ji",
    nameEn: "Sea Buckthorn (Sha Ji)",
    nameZhTrad: "沙棘",
    pinyin: "sha ji",
    category: "Yin Tonic",
    temperature: "Neutral",
    taste: "Sour",
    channels: "Spleen, Stomach, Lung",
    botanicalName: "Hippophae rhamnoides L.",
    imageFile: "sha-ji-sha-ji.jpg",
    summary: "A nutrient-dense berry that generates fluids, aids digestion, and may support skin and cardiovascular health.",
    actions: ["Generates fluids and quenches thirst", "Aids digestion and reduces food stagnation", "May support skin health", "Rich in vitamin C and antioxidants"],
    bodyTypes: ["yin_deficient", "qi_deficient"],
    therapeuticFocus: ["Skin Health", "Immune Support", "Digestive Comfort"],
    foodPairings: ["honey", "goji berries", "jujube", "apple"],
    howToUse: "Brew 5-10g dried berries in hot water for 10 minutes.",
    dosage: "5-10g per day.",
    cautions: ["Generally well tolerated", "May interact with blood thinners", "Not for cold-type diarrhea", "Acidic, avoid on empty stomach"],
    commonConditions: ["Yin Deficient types with dry skin", "Qi Deficient types with low immunity"],
    faqs: [
      { q: "What does sea buckthorn taste like?", a: "Sea buckthorn has a tart, citrus-like flavor. It is rich in vitamin C and beneficial oils. Take the body type quiz to check your type." },
      { q: "Good for skin?", a: "Sea buckthorn oil is widely used for skin nourishment. In TCM, it generates fluids that may help Yin deficient dryness." },
      { q: "Can I drink sea buckthorn tea daily?", a: "Yes, moderate daily use as tea is generally safe and provides antioxidants and vitamin C." }
    ]
  },
  // 11. Hong Jing Tian - Rhodiola
  {
    slug: "hong-jing-tian-hong-jing-tian",
    nameEn: "Rhodiola (Hong Jing Tian)",
    nameZhTrad: "紅景天",
    pinyin: "hong jing tian",
    category: "Qi Tonic",
    temperature: "Cold",
    taste: "Sweet, bitter",
    channels: "Lung, Heart",
    botanicalName: "Rhodiola crenulata (Hook.f. & Thomson) H.Ohba",
    imageFile: "hong-jing-tian-hong-jing-tian.jpg",
    summary: "An adaptogenic herb from high-altitude regions. Tonifies Qi, clears heat, and may support oxygen utilization and stamina.",
    actions: ["Tonifies Qi and supports stamina", "Clears Lung heat", "May support altitude adaptation", "Calms the mind"],
    bodyTypes: ["qi_deficient", "yin_deficient"],
    therapeuticFocus: ["Energy Support", "Mental Clarity", "Respiratory Health"],
    foodPairings: ["ginseng", "goji berries", "jujube", "honey"],
    howToUse: "Simmer 3-9g in tea for 15 minutes.",
    dosage: "3-9g per day.",
    cautions: ["Avoid in cold-type deficiency without heat", "May cause insomnia if taken late", "Not for pregnancy", "Start with low doses"],
    commonConditions: ["Qi Deficient types with chronic fatigue", "Yin Deficient types with heat signs"],
    faqs: [
      { q: "What is hong jing tian used for?", a: "Rhodiola is used as an adaptogen to support stamina, mental clarity, and resilience to stress. Take the body type quiz to check your type." },
      { q: "Good for altitude sickness?", a: "Traditional use and some research suggest rhodiola may support oxygen utilization at altitude. It is not a substitute for proper altitude acclimatization." },
      { q: "Can I take rhodiola with coffee?", a: "Both are stimulating. Combining may cause overstimulation or insomnia. Consider taking rhodiola in the morning without caffeine." }
    ]
  },
  // 12. Wu Jia Pi - Acanthopanax
  {
    slug: "wu-jia-pi-wu-jia-pi",
    nameEn: "Acanthopanax Bark (Wu Jia Pi)",
    nameZhTrad: "五加皮",
    pinyin: "wu jia pi",
    category: "Yang Tonic",
    temperature: "Warm",
    taste: "Acrid, bitter",
    channels: "Liver, Kidney",
    botanicalName: "Acanthopanax gracilistylus W.W.Sm.",
    imageFile: "wu-jia-pi-wu-jia-pi.jpg",
    summary: "Dispels wind-damp, strengthens tendons and bones, and supports water metabolism. Used for joint stiffness and edema.",
    actions: ["Dispels wind-damp and relieves joint pain", "Strengthens tendons and bones", "Promotes urination and reduces swelling", "May support liver health"],
    bodyTypes: ["phlegm_damp", "blood_stasis"],
    therapeuticFocus: ["Joint Support", "Circulation", "Pain Relief"],
    foodPairings: ["rice wine", "eucommia bark", "cinnamon", "ginger"],
    howToUse: "Simmer 5-10g in tea or soak in wine for 2 weeks.",
    dosage: "5-10g per day.",
    cautions: ["Avoid in Yin deficiency with heat", "Not for dry-type joint conditions", "Overuse may cause toxicity", "Avoid during pregnancy"],
    commonConditions: ["Phlegm Damp types with joint heaviness", "Blood Stasis types with chronic pain"],
    faqs: [
      { q: "What is wu jia pi good for?", a: "Wu jia pi dispels wind-damp patterns causing joint pain and stiffness. It also strengthens tendons. Take the body type quiz to check your pattern." },
      { q: "Is it the same as Siberian ginseng?", a: "They are from the same plant family but different species. Wu jia pi is the root bark used for joint and damp conditions." },
      { q: "Can I soak wu jia pi in wine?", a: "Yes, wine extraction is a traditional method. Soak 30g in 500ml rice wine for 2 weeks. Take 10-20ml daily." }
    ]
  },
  // 13. Ren Shen Pian - Red Ginseng Slice
  {
    slug: "ren-shen-pian-hong-shen-pian",
    nameEn: "Red Ginseng Slice (Hong Shen Pian)",
    nameZhTrad: "紅參片",
    pinyin: "hong shen pian",
    category: "Qi Tonic",
    temperature: "Warm",
    taste: "Sweet, slightly bitter",
    channels: "Spleen, Lung, Heart",
    botanicalName: "Panax ginseng C.A. Mey. (steamed)",
    imageFile: "ren-shen-pian-hong-shen-pian.jpg",
    summary: "Steamed ginseng root slices with enhanced warming properties. Stronger than white ginseng for restoring deep deficiency.",
    actions: ["Strongly tonifies Qi", "Warms and restores Yang", "Improves mental function", "May support recovery from illness"],
    bodyTypes: ["qi_deficient", "yang_deficient"],
    therapeuticFocus: ["Energy Support", "Immune Support", "Mental Clarity"],
    foodPairings: ["red dates", "goji berries", "astragalus", "honey"],
    howToUse: "Steep 2-4 slices in hot water for 10 minutes, or simmer in soup.",
    dosage: "2-4g per day.",
    cautions: ["Avoid during colds, flu, or fever", "Not for high blood pressure", "Do not combine with radish", "May cause insomnia at night"],
    commonConditions: ["Qi Deficient types with chronic fatigue", "Yang Deficient types who run cold"],
    faqs: [
      { q: "What is the difference between red and white ginseng?", a: "Red ginseng is steamed, making it warmer and more potent for severe deficiency. White ginseng is sun-dried, milder and cooler. Take the body type quiz to find your match." },
      { q: "How many slices should I use?", a: "Start with 2-3 slices per cup. You can resteep the same slices 2-3 times throughout the day." },
      { q: "Can red ginseng raise blood pressure?", a: "Red ginseng may affect blood pressure. Consult your doctor if you have hypertension before use." }
    ]
  },
  // 14. Tao Jiao - Peach Gum
  {
    slug: "tao-jiao-tao-jiao",
    nameEn: "Peach Gum (Tao Jiao)",
    nameZhTrad: "桃膠",
    pinyin: "tao jiao",
    category: "Yin Tonic",
    temperature: "Neutral",
    taste: "Sweet",
    channels: "Lung, Stomach, Large Intestine",
    botanicalName: "Prunus persica (L.) Batsch (resin)",
    imageFile: "tao-jiao-tao-jiao.jpg",
    summary: "A natural resin from peach trees that nourishes Yin, moistens dryness, and is prized for skin-beautifying properties.",
    actions: ["Nourishes Yin and generates fluids", "Moistens skin from within", "May support digestive lining", "Rich in plant polysaccharides"],
    bodyTypes: ["yin_deficient"],
    therapeuticFocus: ["Skin Health", "Digestive Health", "Hydration"],
    foodPairings: ["white fungus", "snow pear", "rock sugar", "papaya"],
    howToUse: "Soak 10g overnight, then simmer with rock sugar for 30 minutes.",
    dosage: "10-15g per serving, 2-3 times per week.",
    cautions: ["Generally well tolerated", "Soak thoroughly before cooking", "Not for Spleen cold with diarrhea", "Avoid during early pregnancy"],
    commonConditions: ["Yin Deficient types with dry skin", "Qi Deficient types with dryness"],
    faqs: [
      { q: "What is peach gum?", a: "Peach gum is a natural resin that oozes from peach tree bark. In TCM, it is valued for nourishing Yin and beautifying skin. Take the body type quiz to check your type." },
      { q: "How do I prepare peach gum?", a: "Soak in cold water overnight (it expands greatly). Rinse, then simmer with rock sugar and white fungus for a nourishing dessert soup." },
      { q: "Good for skin?", a: "Peach gum is popular in Chinese beauty traditions for its moisturizing properties. It is rich in plant polysaccharides that may support skin hydration." }
    ]
  },
  // 15. Mu Er - Wood Ear Mushroom
  {
    slug: "mu-er-mu-er",
    nameEn: "Wood Ear Mushroom (Mu Er)",
    nameZhTrad: "木耳",
    pinyin: "mu er",
    category: "Blood Tonic",
    temperature: "Neutral",
    taste: "Sweet",
    channels: "Spleen, Stomach, Large Intestine",
    botanicalName: "Auricularia auricula-judae (Bull.) J.Schröt.",
    imageFile: "mu-er-mu-er.jpg",
    summary: "A common edible mushroom that nourishes blood, moistens the Lung, and may support circulation and cholesterol balance.",
    actions: ["Nourishes blood and stops bleeding", "Moistens the Lung and dry intestine", "May support circulation", "Rich in fiber and iron"],
    bodyTypes: ["blood_stasis", "qi_deficient"],
    therapeuticFocus: ["Heart Health", "Digestive Health", "Skin Health"],
    foodPairings: ["red dates", "jujube", "ginger", "pork"],
    howToUse: "Soak dried mushrooms until soft, then stir-fry or simmer in soup.",
    dosage: "10-30g dried per day.",
    cautions: ["Avoid in fresh colds or flu", "Soak thoroughly before cooking", "May slow blood clotting", "Not for Spleen cold with diarrhea"],
    commonConditions: ["Blood Stasis types with poor circulation", "Qi Deficient types with dry constipation"],
    faqs: [
      { q: "Is wood ear good for you?", a: "Yes, wood ear mushroom is rich in fiber and iron. In TCM, it nourishes blood and moistens the intestines. Take the body type quiz to check your type." },
      { q: "How to cook wood ear?", a: "Soak in warm water for 20 minutes, trim the hard base, then stir-fry with eggs, pork, or add to soup. It has a mild taste and crunchy texture." },
      { q: "Can wood ear help with constipation?", a: "Yes, its fiber content and moistening properties may help dry-type constipation. It pairs well with sesame oil for this purpose." }
    ]
  },
  // 16. Wu Hua Guo - Fig
  {
    slug: "wu-hua-guo-wu-hua-guo",
    nameEn: "Fig (Wu Hua Guo)",
    nameZhTrad: "無花果",
    pinyin: "wu hua guo",
    category: "Yin Tonic",
    temperature: "Neutral",
    taste: "Sweet",
    channels: "Spleen, Stomach, Lung, Large Intestine",
    botanicalName: "Ficus carica L.",
    imageFile: "wu-hua-guo-wu-hua-guo.jpg",
    summary: "Moistens the Lung, relieves sore throat, and supports digestion. A gentle fruit-herb for dry cough and constipation.",
    actions: ["Moistens the Lung and relieves sore throat", "Aids digestion and soothes the stomach", "May relieve dry-type constipation", "Mild detoxifying effect"],
    bodyTypes: ["yin_deficient", "qi_stagnant"],
    therapeuticFocus: ["Throat Relief", "Digestive Health", "Respiratory Health"],
    foodPairings: ["snow pear", "honey", "lily bulb", "rock sugar"],
    howToUse: "Simmer 15-30g dried figs in water or soup for 30 minutes.",
    dosage: "15-30g dried per day.",
    cautions: ["Generally well tolerated", "May cause loose stools in large amounts", "Not for cold-type diarrhea", "High in natural sugars"],
    commonConditions: ["Yin Deficient types with dry throat", "Qi Stagnant types with constipation"],
    faqs: [
      { q: "Are dried figs good for sore throat?", a: "Yes, in TCM, figs moisten the Lung and relieve throat dryness. Simmer 2-3 dried figs in water for 20 minutes. Take the body type quiz to check your type." },
      { q: "Can figs help with constipation?", a: "Yes, figs are naturally rich in fiber and have a moistening quality that may help dry-type constipation." },
      { q: "How to use dried figs in cooking?", a: "Add to pork soup with Chinese yam, or simmer with rock sugar and snow pear for a lung-moistening dessert." }
    ]
  },
  // 17. Luo Han Guo - Monk Fruit
  {
    slug: "luo-han-guo-luo-han-guo",
    nameEn: "Monk Fruit (Luo Han Guo)",
    nameZhTrad: "羅漢果",
    pinyin: "luo han guo",
    category: "Cooling Herb",
    temperature: "Cool",
    taste: "Sweet",
    channels: "Lung, Large Intestine",
    botanicalName: "Siraitia grosvenorii (Swingle) C.Jeffrey ex A.M.Lu & Zhi Y.Zhang",
    imageFile: "luo-han-guo-luo-han-guo.jpg",
    summary: "A natural zero-calorie sweetener that moistens the Lung, relieves sore throat, and clears heat. Popular for dry cough.",
    actions: ["Moistens the Lung and relieves cough", "Clears heat and generates fluids", "Soothes sore throat", "Natural sugar substitute"],
    bodyTypes: ["yin_deficient", "damp_heat"],
    therapeuticFocus: ["Throat Relief", "Respiratory Health", "Sugar Balance"],
    foodPairings: ["snow pear", "chrysanthemum", "mint", "honey"],
    howToUse: "Crack one fruit, simmer in 1L water for 20 minutes.",
    dosage: "Half to one fruit per day.",
    cautions: ["Generally very safe", "Avoid in cold-type cough", "May cause mild loose stools", "Not for Spleen Yang deficiency"],
    commonConditions: ["Yin Deficient types with dry cough", "Damp Heat types with sore throat"],
    faqs: [
      { q: "What does monk fruit taste like?", a: "Monk fruit is intensely sweet (about 200-300 times sweeter than sugar) with a mild fruity flavor. A small piece is enough for a pot of tea." },
      { q: "Is monk fruit good for diabetics?", a: "Monk fruit sweeteners (mogrosides) do not raise blood sugar and are considered a safe sugar substitute. Consult your doctor for individual guidance." },
      { q: "How to make monk fruit tea?", a: "Crack one dried fruit and simmer in 1 liter of water for 20 minutes. The resulting tea can be drunk warm or cold throughout the day." }
    ]
  }
]

const toAdd = newHerbs.filter(h => !existingSlugs.has(h.slug))
console.log(`Generating ${toAdd.length} new herbs (${newHerbs.length - toAdd.length} already exist)`)

const built = toAdd.map(buildHerb)
const merged = [...existing, ...built]
writeFileSync("src/lib/herbs-data.json", JSON.stringify(merged, null, 2), "utf-8")
console.log(`Done. Total herbs: ${merged.length}`)
