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
  // 18. Huang Bo - Phellodendron
  {
    slug: "huang-bo-huang-bo",
    nameEn: "Phellodendron Bark (Huang Bo)",
    nameZhTrad: "黃柏",
    pinyin: "huang bo",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Bitter",
    channels: "Kidney, Bladder",
    botanicalName: "Phellodendron amurense Rupr.",
    imageFile: "huang-bo-huang-bo.jpg",
    summary: "Clears damp-heat from the lower body, drains kidney deficiency fire, and may support urinary tract health.",
    actions: ["Clears damp-heat from the lower body", "Drains kidney deficiency fire", "May support urinary tract health", "Reduces inflammation and swelling"],
    bodyTypes: ["damp_heat", "yin_deficient"],
    therapeuticFocus: ["Digestive Health", "Skin Health", "Urinary Health"],
    foodPairings: ["anemarrhena", "rehmannia", "poria", "alisma"],
    howToUse: "Simmer 3-10g in tea or decoction for 20 minutes.",
    dosage: "3-10g per day.",
    cautions: ["Avoid in Spleen and Stomach cold deficiency", "Not for cold-type diarrhea", "May reduce appetite", "Avoid during pregnancy"],
    commonConditions: ["Damp Heat types with skin issues", "Yin Deficient types with deficiency heat"],
    faqs: [
      { q: "What is huang bo used for?", a: "Huang bo clears damp-heat, especially from the lower body. It is used for urinary, skin, and lower-body inflammatory conditions. Take the body type quiz to check your pattern." },
      { q: "How is huang bo different from huang lian?", a: "Both clear damp-heat, but huang bo targets the lower body (Kidney, Bladder) while huang lian targets the middle body (Heart, Stomach)." },
      { q: "Can huang bo help with acne?", a: "Yes, huang bo is used in both internal formulas and topical preparations for damp-heat type skin conditions." }
    ]
  },
  // 19. Huang Zhi Zi - Cape Jasmine
  {
    slug: "huang-zhi-zi-huang-zhi-zi",
    nameEn: "Cape Jasmine Fruit (Huang Zhi Zi)",
    nameZhTrad: "黃梔子",
    pinyin: "huang zhi zi",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Bitter",
    channels: "Heart, Lung, Stomach, Triple Burner",
    botanicalName: "Gardenia jasminoides J.Ellis",
    imageFile: "huang-zhi-zi-huang-zhi-zi.jpg",
    summary: "Clears heat, drains damp-heat, cools blood, and reduces irritability. Used for fever, jaundice, and restless conditions.",
    actions: ["Clears heat and vents it outward", "Drains damp-heat", "Cools the blood and stops bleeding", "Reduces irritability and calms the heart"],
    bodyTypes: ["damp_heat", "qi_stagnant"],
    therapeuticFocus: ["Heat Relief", "Mood Balance", "Digestive Health"],
    foodPairings: ["scutellaria", "phellodendron", "honeysuckle", "chrysanthemum"],
    howToUse: "Simmer 3-10g in tea for 15 minutes. Crush before brewing.",
    dosage: "3-10g per day.",
    cautions: ["Avoid in Spleen cold with loose stools", "Not for cold-type conditions", "May cause digestive upset", "Use cautiously in pregnancy"],
    commonConditions: ["Damp Heat types with irritability", "Qi Stagnant types with chest heat"],
    faqs: [
      { q: "What is huang zhi zi good for?", a: "Cape jasmine clears heat and calms irritability. It is used for damp-heat patterns and restless conditions. Take the body type quiz to check your type." },
      { q: "Can it help with sleep?", a: "When heat-related restlessness prevents sleep, huang zhi zi may help by clearing heart heat. It is not a sedative. Take the quiz to see if heat is your issue." },
      { q: "How do I prepare it?", a: "Crush 5g of dried fruits and simmer in water for 15 minutes. It has a bitter taste, so add honey if desired." }
    ]
  },
  // 20. Xia Ku Cao - Prunella
  {
    slug: "xia-ku-cao-xia-ku-cao",
    nameEn: "Prunella Spike (Xia Ku Cao)",
    nameZhTrad: "夏枯草",
    pinyin: "xia ku cao",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Bitter, acrid",
    channels: "Liver, Gallbladder",
    botanicalName: "Prunella vulgaris L.",
    imageFile: "xia-ku-cao-xia-ku-cao.jpg",
    summary: "Clears liver fire, dissipates nodules, and may support thyroid and breast health. Used for headaches and eye issues.",
    actions: ["Clears liver fire and brightens the eyes", "Dissipates nodules and reduces swelling", "May support thyroid health", "Lowers blood pressure"],
    bodyTypes: ["qi_stagnant", "damp_heat"],
    therapeuticFocus: ["Eye Health", "Mood Balance", "Thyroid Support"],
    foodPairings: ["chrysanthemum", "cassia seed", "honeysuckle", "licorice"],
    howToUse: "Simmer 9-15g in tea or soup for 20 minutes.",
    dosage: "9-15g per day.",
    cautions: ["Avoid in Qi deficiency with cold", "Not for Spleen deficiency", "May lower blood pressure", "Avoid during pregnancy"],
    commonConditions: ["Qi Stagnant types with headaches", "Damp Heat types with eye redness"],
    faqs: [
      { q: "What is xia ku cao used for?", a: "Prunella clears liver fire and is used for headaches, eye redness, and nodules. It is a common ingredient in cooling herbal teas. Take the body type quiz to check your type." },
      { q: "Can it help with high blood pressure?", a: "Some research suggests prunella may support healthy blood pressure. It is not a replacement for medication. Consult your doctor." },
      { q: "Is xia ku cao a common tea?", a: "Yes, prunella is commonly brewed as a summer cooling tea in southern China, often combined with sugar cane or honey." }
    ]
  },
  // 21. Yin Chen - Artemisia Capillaris
  {
    slug: "yin-chen-yin-chen",
    nameEn: "Capillary Wormwood (Yin Chen)",
    nameZhTrad: "茵陳",
    pinyin: "yin chen",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Bitter, acrid",
    channels: "Liver, Spleen, Gallbladder",
    botanicalName: "Artemisia capillaris Thunb.",
    imageFile: "yin-chen-yin-chen.jpg",
    summary: "The primary herb for clearing damp-heat and jaundice. Promotes bile flow and supports liver health.",
    actions: ["Clears damp-heat and resolves jaundice", "Promotes liver and gallbladder function", "May support bile flow", "Reduces skin itching from heat"],
    bodyTypes: ["damp_heat"],
    therapeuticFocus: ["Liver Health", "Skin Health", "Digestive Health"],
    foodPairings: ["cape jasmine", "scutellaria", "poria", "rice"],
    howToUse: "Simmer 10-30g in tea or soup for 20 minutes.",
    dosage: "10-30g per day.",
    cautions: ["Avoid in cold-type jaundice", "Not for Spleen Yang deficiency", "May cause mild nausea", "Use for limited periods"],
    commonConditions: ["Damp Heat types with skin issues", "Damp Heat types with digestive discomfort"],
    faqs: [
      { q: "What is yin chen used for?", a: "Yin chen is the main herb for clearing damp-heat and jaundice in TCM. It supports liver and gallbladder function. Take the body type quiz to check if damp heat is your pattern." },
      { q: "Can yin chen help with eczema?", a: "For damp-heat type skin conditions, yin chen is often included in formulas. It may help reduce itching and inflammation." },
      { q: "When is the best time to harvest yin chen?", a: "In tradition, yin chen is harvested in early spring when the shoots are tender. This is when it is considered most effective for liver conditions." }
    ]
  },
  // 22. Da Qing Ye - Isatis Leaf
  {
    slug: "da-qing-ye-da-qing-ye",
    nameEn: "Isatis Leaf (Da Qing Ye)",
    nameZhTrad: "大青葉",
    pinyin: "da qing ye",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Bitter",
    channels: "Heart, Stomach",
    botanicalName: "Isatis indigotica Fortune",
    imageFile: "da-qing-ye-da-qing-ye.jpg",
    summary: "A potent antiviral herb that clears heat, cools blood, and resolves toxicity. Used for epidemic fevers and sore throat.",
    actions: ["Clears heat and resolves toxicity", "Cools the blood", "May support antiviral defense", "Reduces fever and inflammation"],
    bodyTypes: ["damp_heat", "qi_deficient"],
    therapeuticFocus: ["Immune Support", "Throat Relief", "Heat Relief"],
    foodPairings: ["isatis root", "honeysuckle", "forsythia", "licorice"],
    howToUse: "Simmer 10-30g in tea for 20 minutes.",
    dosage: "10-30g per day.",
    cautions: ["Avoid in Spleen cold deficiency", "Not for cold without heat signs", "May cause digestive upset", "Use for short-term only"],
    commonConditions: ["Damp Heat types with sore throat", "Qi Deficient types with recurrent infections"],
    faqs: [
      { q: "What is da qing ye good for?", a: "Isatis leaf clears heat and toxicity, making it useful for fevers, sore throats, and viral conditions. Take the body type quiz to check your type." },
      { q: "How is it different from ban lan gen?", a: "Da qing ye is the leaf and ban lan gen is the root of the same isatis plant. Both clear heat and toxicity but the root is slightly more common in prescriptions." },
      { q: "Can I take da qing ye for prevention?", a: "Isatis is used during active heat-toxin conditions. Long-term preventive use is not recommended due to its cold nature." }
    ]
  },
  // 23. Zhe Er Gen - Houttuynia
  {
    slug: "zhe-er-gen-zhe-er-gen",
    nameEn: "Houttuynia (Zhe Er Gen)",
    nameZhTrad: "折耳根",
    pinyin: "zhe er gen",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Acrid",
    channels: "Lung",
    botanicalName: "Houttuynia cordata Thunb.",
    imageFile: "zhe-er-gen-zhe-er-gen.jpg",
    summary: "Clears heat, resolves toxicity, and drains pus from the Lung. A pungent herb valued for respiratory support.",
    actions: ["Clears heat and toxicity from the Lung", "Drains pus and reduces abscesses", "May support respiratory health", "Promotes urination"],
    bodyTypes: ["damp_heat", "phlegm_damp"],
    therapeuticFocus: ["Respiratory Health", "Immune Support", "Skin Health"],
    foodPairings: ["rice", "chili", "garlic", "soy sauce"],
    howToUse: "Simmer 15-30g fresh in tea or stir-fry as vegetable.",
    dosage: "15-30g fresh, 10-15g dried per day.",
    cautions: ["Avoid in cold-type cough", "Strong fishy smell may be off-putting", "Not for Spleen cold deficiency", "Rare allergic reactions possible"],
    commonConditions: ["Damp Heat types with respiratory issues", "Phlegm Damp types with cough"],
    faqs: [
      { q: "What is zhe er gen?", a: "Houttuynia, also called fish mint, is a pungent herb used in both cooking and medicine in southwest China. It clears heat from the Lung. Take the body type quiz to check your type." },
      { q: "Why does it smell like fish?", a: "Houttuynia contains compounds that give it a distinctive fishy aroma. It is a beloved ingredient in Guizhou cuisine despite the unusual smell." },
      { q: "Can it help with cough?", a: "Yes, houttuynia clears Lung heat and resolves phlegm. It is especially useful for yellow phlegm cough. Check your type with the quiz." }
    ]
  },
  // 24. Ma Chi Xian - Purslane
  {
    slug: "ma-chi-xian-ma-chi-xian",
    nameEn: "Purslane (Ma Chi Xian)",
    nameZhTrad: "馬齒莧",
    pinyin: "ma chi xian",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Sour",
    channels: "Large Intestine, Liver",
    botanicalName: "Portulaca oleracea L.",
    imageFile: "ma-chi-xian-ma-chi-xian.jpg",
    summary: "Clears heat, resolves toxicity, and cools blood. A common edible weed rich in omega-3 fatty acids.",
    actions: ["Clears heat and resolves toxicity", "Cools blood and stops bleeding", "May support digestive health", "Rich in omega-3 fatty acids"],
    bodyTypes: ["damp_heat", "blood_stasis"],
    therapeuticFocus: ["Skin Health", "Digestive Health", "Heart Health"],
    foodPairings: ["garlic", "sesame oil", "rice", "mung beans"],
    howToUse: "Use 30-60g fresh as vegetable, or 10-15g dried in tea.",
    dosage: "10-30g per day.",
    cautions: ["Avoid in cold-type diarrhea", "Not for pregnancy", "May worsen Spleen cold", "Contains oxalates"],
    commonConditions: ["Damp Heat types with skin rashes", "Damp Heat types with dysentery"],
    faqs: [
      { q: "Is purslane edible?", a: "Yes, purslane is a nutritious edible plant rich in omega-3s. It is eaten raw in salads or cooked in soups. Take the body type quiz to check your type." },
      { q: "Can purslane help with skin issues?", a: "Purslane clears heat and toxicity, which may help damp-heat type skin conditions. It can be used internally and topically." },
      { q: "How to eat purslane?", a: "Lightly blanch and dress with garlic and sesame oil, or add to soups. The leaves are slightly tangy and crunchy." }
    ]
  },
  // 25. Lu Hui - Aloe
  {
    slug: "lu-hui-lu-hui",
    nameEn: "Aloe (Lu Hui)",
    nameZhTrad: "蘆薈",
    pinyin: "lu hui",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Bitter",
    channels: "Liver, Large Intestine",
    botanicalName: "Aloe vera (L.) Burm.f.",
    imageFile: "lu-hui-lu-hui.jpg",
    summary: "Purges heat, clears liver fire, and kills intestinal parasites. The concentrated dried gel is used internally and externally.",
    actions: ["Purges heat and promotes bowel movement", "Clears liver fire", "May support skin healing", "Has antimicrobial properties"],
    bodyTypes: ["damp_heat", "blood_stasis"],
    therapeuticFocus: ["Skin Health", "Digestive Health", "Heat Relief"],
    foodPairings: ["honey", "aloe juice", "rock sugar", "pear"],
    howToUse: "Take 1-2g of dried powder, or apply fresh gel topically.",
    dosage: "1-2g dried powder per day. External use as needed.",
    cautions: ["Avoid during pregnancy", "Not for cold-type diarrhea", "May cause cramping", "Do not exceed recommended dose"],
    commonConditions: ["Damp Heat types with constipation", "Damp Heat types with skin issues"],
    faqs: [
      { q: "Can I eat aloe vera?", a: "Only the inner gel is edible. The latex layer can cause severe cramping. Use processed aloe products. Take the body type quiz to check your type." },
      { q: "Good for burns?", a: "Yes, fresh aloe gel is widely used topically for minor burns and skin irritation. It has a cooling, soothing effect." },
      { q: "Can aloe help with constipation?", a: "Yes, aloe has a strong laxative effect for heat-type constipation. Use sparingly and do not take long-term." }
    ]
  },
  // 26. Chuan Bei - Sichuan Fritillary
  {
    slug: "chuan-bei-chuan-bei",
    nameEn: "Sichuan Fritillary Bulb (Chuan Bei)",
    nameZhTrad: "川貝",
    pinyin: "chuan bei",
    category: "Yin Tonic",
    temperature: "Slightly cold",
    taste: "Bitter, sweet",
    channels: "Lung, Heart",
    botanicalName: "Fritillaria cirrhosa D.Don",
    imageFile: "chuan-bei-chuan-bei.jpg",
    summary: "Moistens the Lung, transforms phlegm, and stops cough. The premium herb for dry, chronic cough with sticky sputum.",
    actions: ["Transforms phlegm and stops cough", "Moistens Lung dryness", "Clears heat and dissipates nodules", "May support respiratory health"],
    bodyTypes: ["yin_deficient", "phlegm_damp"],
    therapeuticFocus: ["Respiratory Health", "Throat Relief", "Cough Relief"],
    foodPairings: ["snow pear", "honey", "loquat", "lily bulb"],
    howToUse: "Grind 3-9g to powder, or simmer whole in pear.",
    dosage: "3-9g per day.",
    cautions: ["Avoid in cold-type cough with clear sputum", "Not for damp-type cough", "Do not combine with aconite", "Use in small doses"],
    commonConditions: ["Yin Deficient types with dry cough", "Phlegm Damp types with sticky sputum"],
    faqs: [
      { q: "What is chuan bei best for?", a: "Chuan bei is the premier herb for dry, chronic cough with scanty or sticky sputum. It moistens the Lung while clearing phlegm. Take the body type quiz to check your type." },
      { q: "How to make chuan bei pear tea?", a: "Core a snow pear, add 3g chuan bei powder and rock sugar inside. Steam for 30 minutes. This classic remedy is for dry cough." },
      { q: "Is chuan bei safe for children?", a: "Chuan bei pear tea is traditionally given to children for dry cough. Consult a pediatric practitioner for proper dosing." }
    ]
  },
  // 27. Xing Ren - Apricot Kernel
  {
    slug: "xing-ren-xing-ren",
    nameEn: "Apricot Kernel (Xing Ren)",
    nameZhTrad: "杏仁",
    pinyin: "xing ren",
    category: "Qi Regulating",
    temperature: "Slightly warm",
    taste: "Bitter, slightly sweet",
    channels: "Lung, Large Intestine",
    botanicalName: "Prunus armeniaca L.",
    imageFile: "xing-ren-xing-ren.jpg",
    summary: "Stops cough, calms wheezing, and moistens the intestines. Used for both respiratory and digestive conditions.",
    actions: ["Stops cough and calms wheezing", "Moistens the intestines and relieves constipation", "Transforms phlegm", "May support respiratory health"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Respiratory Health", "Cough Relief", "Digestive Health"],
    foodPairings: ["snow pear", "honey", "lily bulb", "white fungus"],
    howToUse: "Simmer 5-10g in tea for 15 minutes. Crush before brewing.",
    dosage: "5-10g per day.",
    cautions: ["Contains amygdalin, do not exceed dose", "Avoid in infants", "Not for diarrhea", "Bitter and sweet varieties have different uses"],
    commonConditions: ["Phlegm Damp types with chronic cough", "Qi Stagnant types with constipation"],
    faqs: [
      { q: "What is xing ren good for?", a: "Apricot kernel stops cough, calms wheezing, and moistens the intestines. It is a versatile herb for respiratory and digestive patterns. Take the body type quiz to check your type." },
      { q: "Are apricot kernels safe to eat?", a: "Bitter apricot kernels contain amygdalin which can release cyanide. Use only in recommended doses (5-10g). Sweet apricot kernels are safer for cooking." },
      { q: "How to make apricot kernel tea?", a: "Crush 5g of kernels and simmer in water for 15 minutes. Add honey for taste. Good for dry cough and dry constipation." }
    ]
  },
  // 28. Gua Lou - Trichosanthes
  {
    slug: "gua-lou-gua-lou",
    nameEn: "Trichosanthes Fruit (Gua Lou)",
    nameZhTrad: "瓜蔞",
    pinyin: "gua lou",
    category: "Qi Regulating",
    temperature: "Cold",
    taste: "Sweet",
    channels: "Lung, Stomach, Large Intestine",
    botanicalName: "Trichosanthes kirilowii Maxim.",
    imageFile: "gua-lou-gua-lou.jpg",
    summary: "Clears heat, transforms phlegm, and moistens dryness. The whole fruit, seeds, and root are all used medicinally.",
    actions: ["Clears heat and transforms phlegm", "Moistens Lung dryness", "Reduces chest pain from phlegm-heat", "Promotes bowel movement"],
    bodyTypes: ["phlegm_damp", "damp_heat"],
    therapeuticFocus: ["Respiratory Health", "Heart Health", "Digestive Health"],
    foodPairings: ["snow pear", "honey", "scallion", "rice"],
    howToUse: "Simmer 10-20g whole fruit, or use seeds separately.",
    dosage: "10-20g per day.",
    cautions: ["Avoid in cold-type cough", "Not for Spleen deficiency", "May cause loose stools", "Do not combine with aconite"],
    commonConditions: ["Phlegm Damp types with chest congestion", "Damp Heat types with constipation"],
    faqs: [
      { q: "What is gua lou used for?", a: "Trichosanthes clears heat phlegm and relieves chest tightness. It is used for respiratory and chest conditions. Take the body type quiz to check your type." },
      { q: "Can gua lou help with chest pain?", a: "Yes, gua lou is a key herb for chest bi syndrome where phlegm-heat blocks the chest. It is often combined with allium and pinellia." },
      { q: "Are the seeds different from the fruit?", a: "Yes, gua lou ren (seeds) are especially good for moistening the intestines, while the whole fruit is better for clearing phlegm from the chest." }
    ]
  },
  // 29. Zhu Ye - Bamboo Leaf
  {
    slug: "zhu-ye-zhu-ye",
    nameEn: "Bamboo Leaf (Zhu Ye)",
    nameZhTrad: "竹葉",
    pinyin: "zhu ye",
    category: "Cooling Herb",
    temperature: "Cold",
    taste: "Sweet, bland",
    channels: "Heart, Stomach, Small Intestine",
    botanicalName: "Phyllostachys nigra (Lodd. ex Lindl.) Munro",
    imageFile: "zhu-ye-zhu-ye.jpg",
    summary: "Clears heart heat, generates fluids, and promotes urination. A mild, pleasant-tasting herb for summer heat.",
    actions: ["Clears heart heat and irritability", "Generates fluids and quenches thirst", "Promotes urination", "May support mouth ulcer healing"],
    bodyTypes: ["damp_heat", "qi_stagnant"],
    therapeuticFocus: ["Heat Relief", "Mental Clarity", "Urinary Health"],
    foodPairings: ["licorice", "ophiopogon", "rice", "rock sugar"],
    howToUse: "Simmer 6-15g in hot water for 10 minutes as tea.",
    dosage: "6-15g per day.",
    cautions: ["Generally very safe", "Avoid in cold-type conditions", "Mild diuretic", "Not for Yang deficiency"],
    commonConditions: ["Damp Heat types with mouth ulcers", "Qi Stagnant types with irritability"],
    faqs: [
      { q: "What is zhu ye good for?", a: "Bamboo leaf clears heart heat, making it useful for mouth ulcers, irritability, and summer heat. Take the body type quiz to check your type." },
      { q: "Can bamboo leaf tea help with mouth sores?", a: "Yes, zhu ye is traditionally used for heart-fire mouth ulcers. Brew 10g in hot water and drink throughout the day." },
      { q: "Is bamboo leaf tea safe daily?", a: "Yes, it is mild and safe for regular use in warm weather. It has a light, pleasant flavor." }
    ]
  },
  // 30. Ban Xia - Pinellia
  {
    slug: "ban-xia-ban-xia",
    nameEn: "Pinellia Tuberr (Ban Xia)",
    nameZhTrad: "半夏",
    pinyin: "ban xia",
    category: "Dampness Draining",
    temperature: "Warm",
    taste: "Acrid",
    channels: "Spleen, Stomach, Lung",
    botanicalName: "Pinellia ternata (Thunb.) Makino",
    imageFile: "ban-xia-ban-xia.jpg",
    summary: "The most important herb for transforming phlegm and stopping vomiting. Always processed before use to reduce toxicity.",
    actions: ["Transforms phlegm and stops vomiting", "Dries dampness and descends rebellious Qi", "Reduces nodules and dissolves phlegm", "Calms the spirit"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Respiratory Health", "Nausea Relief"],
    foodPairings: ["fresh ginger", "dried tangerine peel", "poria", "rice"],
    howToUse: "Use only processed (zhi) forms. Simmer 3-9g for 20 minutes.",
    dosage: "3-9g per day (processed only).",
    cautions: ["Never use raw, always processed", "Avoid in pregnancy", "Not for dry cough with blood", "Do not combine with aconite"],
    commonConditions: ["Phlegm Damp types with nausea", "Qi Stagnant types with chest fullness"],
    faqs: [
      { q: "What is ban xia used for?", a: "Pinellia is the primary herb for phlegm, nausea, and vomiting in TCM. It is always processed before use. Take the body type quiz to check your type." },
      { q: "Why must ban xia be processed?", a: "Raw pinellia contains compounds that irritate the throat. Processing with ginger, alum, or licorice neutralizes this toxicity." },
      { q: "Can ban xia help with morning sickness?", a: "Processed ban xia is used in formulas for nausea, but it should only be used during pregnancy under professional supervision." }
    ]
  },
  // 31. Qian Hu - Peucedanum
  {
    slug: "qian-hu-qian-hu",
    nameEn: "Peucedanum Root (Qian Hu)",
    nameZhTrad: "前胡",
    pinyin: "qian hu",
    category: "Qi Regulating",
    temperature: "Slightly cold",
    taste: "Bitter, acrid",
    channels: "Lung",
    botanicalName: "Peucedanum praeruptorum Dunn",
    imageFile: "qian-hu-qian-hu.jpg",
    summary: "Descends Lung Qi, transforms phlegm, and disperses wind-heat. Used for cough with thick sputum and chest fullness.",
    actions: ["Descends Lung Qi and stops cough", "Transforms phlegm and clears heat", "Disperses wind-heat", "May support respiratory health"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Respiratory Health", "Cough Relief", "Throat Relief"],
    foodPairings: ["pinellia", "scutellaria", "almond", "licorice"],
    howToUse: "Simmer 3-10g in tea or decoction for 20 minutes.",
    dosage: "3-10g per day.",
    cautions: ["Avoid in cold-type cough without phlegm", "Not for dry cough with blood", "Generally well tolerated", "Use cautiously with anticoagulants"],
    commonConditions: ["Phlegm Damp types with cough", "Qi Stagnant types with chest tightness"],
    faqs: [
      { q: "What is qian hu good for?", a: "Peucedanum descends Lung Qi and transforms phlegm, making it useful for cough with thick sputum. Take the body type quiz to check your type." },
      { q: "How does qian hu differ from qian ceng ta?", a: "They are different herbs. Qian hu is a root for cough and phlegm. Qian ceng ta (clubmoss) is used for different purposes." },
      { q: "Can qian hu help with chronic bronchitis?", a: "In TCM practice, qian hu is included in formulas for phlegm-heat cough patterns. Consult a practitioner for guidance." }
    ]
  },
  // 32. Sheng Ma - Cimicifuga
  {
    slug: "sheng-ma-sheng-ma",
    nameEn: "Cimicifuga (Sheng Ma)",
    nameZhTrad: "升麻",
    pinyin: "sheng ma",
    category: "Cooling Herb",
    temperature: "Slightly cold",
    taste: "Acrid, sweet",
    channels: "Lung, Spleen, Stomach, Large Intestine",
    botanicalName: "Cimicifuga heracleifolia Kom.",
    imageFile: "sheng-ma-sheng-ma.jpg",
    summary: "Releases exterior rashes, clears heat and toxicity, and lifts Yang. Used for mouth ulcers and prolapse.",
    actions: ["Releases the exterior and vents rashes", "Clears heat and resolves toxicity", "Lifts Yang and raises Qi", "May support oral health"],
    bodyTypes: ["qi_deficient", "qi_stagnant"],
    therapeuticFocus: ["Immune Support", "Digestive Health", "Skin Health"],
    foodPairings: ["bupleurum", "ginseng", "astragalus", "jujube"],
    howToUse: "Simmer 3-6g in tea or decoction for 20 minutes.",
    dosage: "3-6g per day.",
    cautions: ["Avoid in Yin deficiency with ascending fire", "Not for excess heat rising", "May cause headache in high doses", "Use cautiously in hypertension"],
    commonConditions: ["Qi Deficient types with fatigue", "Qi Stagnant types with skin issues"],
    faqs: [
      { q: "What is sheng ma used for?", a: "Cimicifuga vents rashes, clears heat, and lifts Yang Qi. It is used for mouth sores and prolapse patterns. Take the body type quiz to check your type." },
      { q: "Can sheng ma help with mouth ulcers?", a: "Yes, sheng ma clears heat and toxicity from the Stomach channel which connects to the mouth. It is commonly used for stubborn mouth ulcers." },
      { q: "What does lift Yang mean?", a: "In TCM, lifting Yang means raising the upward-moving energy. This can help with organ prolapse and fatigue in Qi deficient types." }
    ]
  },
  // 33. Mu Hu Die - Oroxylum
  {
    slug: "mu-hu-die-mu-hu-die",
    nameEn: "Oroxylum Seed (Mu Hu Die)",
    nameZhTrad: "木蝴蝶",
    pinyin: "mu hu die",
    category: "Qi Regulating",
    temperature: "Cool",
    taste: "Bitter, sweet",
    channels: "Lung, Liver",
    botanicalName: "Oroxylum indicum (L.) Kurz",
    imageFile: "mu-hu-die-mu-hu-die.jpg",
    summary: "Moistens the Lung, soothes the throat, and regulates Liver Qi. Known for its large butterfly-shaped seeds.",
    actions: ["Clears Lung heat and moistens the throat", "Soothes the Liver and regulates Qi", "May support voice recovery", "Reduces inflammation"],
    bodyTypes: ["qi_stagnant", "yin_deficient"],
    therapeuticFocus: ["Throat Relief", "Respiratory Health", "Mood Balance"],
    foodPairings: ["chrysanthemum", "mint", "honey", "licorice"],
    howToUse: "Steep 3-6g in hot water for 10 minutes as tea.",
    dosage: "3-6g per day.",
    cautions: ["Generally very safe", "Avoid in cold-type sore throat", "Mild herb, not for severe conditions", "No known significant interactions"],
    commonConditions: ["Qi Stagnant types with throat tightness", "Yin Deficient types with dry throat"],
    faqs: [
      { q: "What is mu hu die?", a: "Oroxylum seed, also called butterfly seed, is a thin papery herb that soothes the throat and moistens the Lung. Take the body type quiz to check your type." },
      { q: "Good for sore throat?", a: "Yes, mu hu die is one of the best herbs for chronic sore throat and hoarseness. Steep 5g in hot water as tea." },
      { q: "Can it help with voice problems?", a: "Yes, mu hu die is traditionally used by singers and speakers to protect the voice and soothe vocal strain." }
    ]
  }
]

const toAdd = newHerbs.filter(h => !existingSlugs.has(h.slug))
console.log(`Batch 2: Generating ${toAdd.length} new herbs (${newHerbs.length - toAdd.length} already exist)`)

const built = toAdd.map(buildHerb)
const merged = [...existing, ...built]
writeFileSync("src/lib/herbs-data.json", JSON.stringify(merged, null, 2), "utf-8")
console.log(`Done. Total herbs: ${merged.length}`)
