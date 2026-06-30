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
  // 34. Ba Jiao Da Liao - Star Anise
  {
    slug: "ba-jiao-da-liao",
    nameEn: "Star Anise (Ba Jiao Hui Xiang)",
    nameZhTrad: "八角",
    pinyin: "ba jiao hui xiang",
    category: "Warming Herb",
    temperature: "Warm",
    taste: "Acrid, sweet",
    channels: "Spleen, Stomach, Kidney, Liver",
    botanicalName: "Illicium verum Hook.f.",
    imageFile: "ba-jiao-da-liao.jpg",
    summary: "A warming spice that disperses cold, moves Qi, and relieves pain. The source of shikimic acid used in antiviral drugs.",
    actions: ["Disperses cold and warms the middle", "Moves Qi and relieves pain", "May support digestion", "Natural source of shikimic acid"],
    bodyTypes: ["yang_deficient", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Cold Relief", "Pain Relief"],
    foodPairings: ["fennel", "cinnamon", "ginger", "soy sauce"],
    howToUse: "Add 1-2 whole stars to soup or stew. Simmer 30-60 minutes.",
    dosage: "3-6g per day.",
    cautions: ["Avoid in heat-type conditions", "Not for Yin deficiency with heat", "Allergic reactions in rare cases", "Do not confuse with toxic Japanese star anise"],
    commonConditions: ["Yang Deficient types who run cold", "Qi Stagnant types with cold stomach pain"],
    faqs: [
      { q: "What is star anise good for?", a: "Star anise warms the middle, disperses cold, and aids digestion. It is a common spice in Chinese cooking. Take the body type quiz to check your type." },
      { q: "Can star anise help with colds?", a: "Yes, its warming nature helps disperse cold-type conditions. It is used in warming soups during cold season." },
      { q: "Is it the same as anise seed?", a: "No, they are different plants with similar flavor. Star anise is from a tree, while anise seed is from an herb. Star anise is more common in Chinese cooking." }
    ]
  },
  // 35. Bai Guo Ren - Ginkgo Nut
  {
    slug: "bai-guo-ren-bai-guo-ren",
    nameEn: "Ginkgo Nut (Bai Guo Ren)",
    nameZhTrad: "白果仁",
    pinyin: "bai guo ren",
    category: "Qi Regulating",
    temperature: "Neutral",
    taste: "Sweet, bitter, astringent",
    channels: "Lung",
    botanicalName: "Ginkgo biloba L.",
    imageFile: "bai-guo-ren-bai-guo-ren.jpg",
    summary: "Astringes the Lung, stops wheezing, and reduces urination. The nut of the ancient ginkgo tree, used in both food and medicine.",
    actions: ["Astringes the Lung and stops wheezing", "Reduces urination frequency", "May support cognitive function", "Kills parasites"],
    bodyTypes: ["phlegm_damp", "qi_deficient"],
    therapeuticFocus: ["Respiratory Health", "Cough Relief", "Cognitive Support"],
    foodPairings: ["rice congee", "sugar", "lotus seed", "lily bulb"],
    howToUse: "Remove hard shell and inner skin. Cook 5-10 nuts in soup or congee.",
    dosage: "5-10 nuts per day.",
    cautions: ["Never eat raw, always cook thoroughly", "Limit quantity to avoid toxicity", "Not for children in large amounts", "Avoid in fever conditions"],
    commonConditions: ["Phlegm Damp types with chronic wheezing", "Qi Deficient types with frequent urination"],
    faqs: [
      { q: "What is bai guo?", a: "Ginkgo nut is the seed of the ginkgo tree. In TCM, it astringes the Lung and stops wheezing. Always cook thoroughly before eating. Take the body type quiz to check your type." },
      { q: "Can ginkgo nuts help with asthma?", a: "Yes, in TCM, ginkgo nuts are used for chronic wheezing patterns. They must be cooked. Do not exceed 10 nuts per day." },
      { q: "How to prepare ginkgo nuts?", a: "Crack the shell, remove the inner skin by soaking in hot water, then cook in congee or stir-fry. Never eat raw." }
    ]
  },
  // 36. Hua Jiao - Sichuan Peppercorn
  {
    slug: "hua-jiao-hua-jiao",
    nameEn: "Sichuan Peppercorn (Hua Jiao)",
    nameZhTrad: "花椒",
    pinyin: "hua jiao",
    category: "Warming Herb",
    temperature: "Warm",
    taste: "Acrid",
    channels: "Spleen, Stomach, Kidney",
    botanicalName: "Zanthoxylum bungeanum Maxim.",
    imageFile: "hua-jiao-hua-jiao.jpg",
    summary: "Strongly warming spice that dispels cold, moves Qi, kills parasites, and relieves pain. Creates the signature Sichuan ma (numbing) sensation.",
    actions: ["Warms the middle and dispels cold", "Moves Qi and relieves pain", "Kills intestinal parasites", "Has numbing and anti-inflammatory properties"],
    bodyTypes: ["yang_deficient", "phlegm_damp"],
    therapeuticFocus: ["Digestive Health", "Cold Relief", "Pain Relief"],
    foodPairings: ["ginger", "garlic", "star anise", "soy sauce"],
    howToUse: "Add 2-3g to stir-fry, soup, or stew. Toast briefly for more flavor.",
    dosage: "2-5g per day.",
    cautions: ["Avoid in Yin deficiency with heat", "Not for pregnancy in large amounts", "May irritate stomach ulcers", "Use in moderate amounts"],
    commonConditions: ["Yang Deficient types who run cold", "Phlegm Damp types with cold digestion"],
    faqs: [
      { q: "What is hua jiao?", a: "Sichuan peppercorn is a warming spice known for its unique numbing sensation (ma). In TCM, it warms the middle and dispels cold. Take the body type quiz to check your type." },
      { q: "Why does Sichuan pepper make your mouth numb?", a: "The numbing effect comes from hydroxyl-alpha-sanshool, a compound that stimulates nerve receptors. It is a distinctive feature of Sichuan cuisine." },
      { q: "Can hua jiao help with stomach pain?", a: "Yes, its warming and Qi-moving properties may help cold-type stomach cramps. A few peppercorns in tea can be soothing." }
    ]
  },
  // 37. Mu Ding Xiang - Clove
  {
    slug: "mu-ding-xiang-mu-ding-xiang",
    nameEn: "Clove (Mu Ding Xiang)",
    nameZhTrad: "母丁香",
    pinyin: "mu ding xiang",
    category: "Warming Herb",
    temperature: "Hot",
    taste: "Acrid",
    channels: "Spleen, Stomach, Kidney",
    botanicalName: "Syzygium aromaticum (L.) Merr. & L.M.Perry",
    imageFile: "mu-ding-xiang-mu-ding-xiang.jpg",
    summary: "Strongly warming herb that warms the middle, descends rebellious Qi, and relieves hiccups. Used for impotence in Kidney Yang deficiency.",
    actions: ["Warms the middle and stops vomiting", "Descends Qi and relieves hiccups", "Warms Kidney Yang", "Has antimicrobial properties"],
    bodyTypes: ["yang_deficient", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Cold Relief", "Men's Health"],
    foodPairings: ["ginger", "fennel", "cinnamon", "star anise"],
    howToUse: "Simmer 1-3g in tea or add to cooking.",
    dosage: "1-3g per day.",
    cautions: ["Avoid in heat-type conditions", "Not for pregnancy with heat signs", "May worsen fever", "Do not combine with turmeric in same formula"],
    commonConditions: ["Yang Deficient types who run cold", "Qi Stagnant types with persistent hiccups"],
    faqs: [
      { q: "What is mu ding xiang used for?", a: "Clove is a hot herb that warms the stomach, stops vomiting, and relieves hiccups. Mu ding xiang is the ripe fruit, milder than the flower bud. Take the body type quiz to check your type." },
      { q: "Can cloves help with toothache?", a: "Yes, clove oil contains eugenol, a natural anesthetic. Chewing a clove or applying oil may temporarily relieve toothache pain." },
      { q: "How to use clove in cooking?", a: "Add 1-2 whole cloves to stews, rice, or tea. A little goes a long way due to the strong flavor." }
    ]
  },
  // 38. Huo Xiang Guang - Agastache
  {
    slug: "huo-xiang-guang-huo-xiang",
    nameEn: "Patchouli (Guang Huo Xiang)",
    nameZhTrad: "廣藿香",
    pinyin: "guang huo xiang",
    category: "Dampness Draining",
    temperature: "Slightly warm",
    taste: "Acrid",
    channels: "Spleen, Stomach, Lung",
    botanicalName: "Pogostemon cablin (Blanco) Benth.",
    imageFile: "huo-xiang-guang-huo-xiang.jpg",
    summary: "Resolves dampness, harmonizes the middle, and relieves nausea. The aromatic leaves are used in both medicine and tea.",
    actions: ["Resolves dampness and harmonizes the middle", "Relieves nausea and stops vomiting", "Releases the exterior and stops diarrhea", "May support appetite"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Nausea Relief", "Immune Support"],
    foodPairings: ["fresh ginger", "dried tangerine peel", "poria", "rice"],
    howToUse: "Simmer 5-10g in tea for 15 minutes. Use fresh for stronger aroma.",
    dosage: "5-10g per day.",
    cautions: ["Avoid in Yin deficiency with heat", "Not for dry conditions", "Generally well tolerated", "May reduce iron absorption"],
    commonConditions: ["Phlegm Damp types with nausea", "Qi Stagnant types with bloating"],
    faqs: [
      { q: "What is guang huo xiang?", a: "Patchouli is an aromatic herb that resolves dampness and relieves nausea. It is the main herb in the classic formula Huo Xiang Zheng Qi. Take the body type quiz to check your type." },
      { q: "Can huo xiang help with motion sickness?", a: "Yes, huo xiang is traditionally used for nausea and vomiting. Its aromatic compounds may help settle the stomach. Take the quiz to check your pattern." },
      { q: "How to make huo xiang tea?", a: "Steep 5g of dried leaves in hot water for 10 minutes. It has a pleasant aromatic flavor, often combined with ginger." }
    ]
  },
  // 39. Ji Nei Jin - Chicken Gizzard Lining
  {
    slug: "ji-nei-jin-ji-nei-jin",
    nameEn: "Chicken Gizzard Lining (Ji Nei Jin)",
    nameZhTrad: "雞內金",
    pinyin: "ji nei jin",
    category: "Digestive Support",
    temperature: "Neutral",
    taste: "Sweet",
    channels: "Spleen, Stomach, Small Intestine, Bladder",
    botanicalName: "Gallus gallus domesticus (internal lining)",
    imageFile: "ji-nei-jin-ji-nei-jin.jpg",
    summary: "A unique animal-derived herb that transforms food stagnation, aids digestion, and may dissolve urinary stones.",
    actions: ["Transforms food stagnation", "Strengthens the Spleen and improves digestion", "May dissolve urinary and gallbladder stones", "Reduces abdominal fullness"],
    bodyTypes: ["phlegm_damp", "qi_deficient"],
    therapeuticFocus: ["Digestive Health", "Metabolic Support", "Stomach Comfort"],
    foodPairings: ["rice", "dried tangerine peel", "hawthorn", "poria"],
    howToUse: "Use 3-10g, roasted and ground to powder, or simmer in soup.",
    dosage: "3-10g per day.",
    cautions: ["Avoid in Spleen deficiency without stagnation", "May cause mild nausea in sensitive people", "Generally well tolerated", "Not for cold without food stagnation"],
    commonConditions: ["Phlegm Damp types with bloating", "Qi Deficient types with weak digestion"],
    faqs: [
      { q: "What is ji nei jin?", a: "Chicken gizzard lining is a traditional remedy for food stagnation and weak digestion. It is the inner membrane of a chicken gizzard. Take the body type quiz to check your type." },
      { q: "Can it help with kidney stones?", a: "In TCM, ji nei jin is traditionally used to help dissolve urinary stones. It may support stone elimination. Consult a practitioner." },
      { q: "How to use ji nei jin?", a: "Roast dry until crisp, then grind to powder. Take 3g with warm water, or add 10g to chicken soup for digestive support." }
    ]
  },
  // 40. Zhi Shi - Immature Bitter Orange
  {
    slug: "zhi-shi-zhi-shi",
    nameEn: "Immature Bitter Orange (Zhi Shi)",
    nameZhTrad: "枳實",
    pinyin: "zhi shi",
    category: "Qi Regulating",
    temperature: "Slightly cold",
    taste: "Bitter, acrid, sour",
    channels: "Spleen, Stomach, Large Intestine",
    botanicalName: "Citrus aurantium L.",
    imageFile: "zhi-shi-zhi-shi.jpg",
    summary: "Strongly breaks up stagnant Qi, reduces distension, and resolves phlegm. The unripe fruit is stronger than the nearly ripe form.",
    actions: ["Breaks up stagnant Qi and reduces distension", "Resolves phlegm and opens the chest", "Reduces organ prolapse severity", "May support weight management"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Weight Management", "Circulation"],
    foodPairings: ["dried tangerine peel", "magnolia bark", "fresh ginger", "rice"],
    howToUse: "Simmer 3-9g in tea or decoction for 20 minutes.",
    dosage: "3-9g per day.",
    cautions: ["Avoid in Spleen deficiency without stagnation", "Not for pregnancy", "May stimulate uterus", "Use cautiously with blood pressure medications"],
    commonConditions: ["Phlegm Damp types with bloating", "Qi Stagnant types with chest fullness"],
    faqs: [
      { q: "What is zhi shi used for?", a: "Immature bitter orange breaks up Qi stagnation and reduces abdominal distension. It is stronger than zhi ke (nearly ripe fruit). Take the body type quiz to check your type." },
      { q: "Can zhi shi help with weight loss?", a: "In TCM, zhi shi moves Qi and reduces stagnation. Some modern research has explored its compounds for metabolism. It is not a weight loss drug." },
      { q: "How does zhi shi differ from chen pi?", a: "Zhi shi is unripe bitter orange, stronger and more downward-directing. Chen pi is dried tangerine peel, milder and also transforms phlegm." }
    ]
  },
  // 41. San Qi - Notoginseng
  {
    slug: "san-qi-san-qi",
    nameEn: "Notoginseng (San Qi)",
    nameZhTrad: "三七",
    pinyin: "san qi",
    category: "Blood Tonic",
    temperature: "Warm",
    taste: "Sweet, slightly bitter",
    channels: "Liver, Stomach",
    botanicalName: "Panax notoginseng (Burkill) F.H.Chen",
    imageFile: "san-qi-san-qi.jpg",
    summary: "The premier herb for stopping bleeding while also invigorating blood. Used for trauma, bruising, and internal bleeding.",
    actions: ["Stops bleeding without causing stasis", "Invigorates blood and reduces swelling", "May support cardiovascular health", "Reduces pain from blood stasis"],
    bodyTypes: ["blood_stasis", "qi_stagnant"],
    therapeuticFocus: ["Heart Health", "Wound Healing", "Pain Relief"],
    foodPairings: ["dan shen", "rose", "hawthorn", "licorice"],
    howToUse: "Take 1-3g powder with warm water, or simmer 3-9g in soup.",
    dosage: "1-3g powder, 3-9g in decoction per day.",
    cautions: ["Avoid during pregnancy", "Not for bleeding without stasis", "May interact with blood thinners", "Stop before surgery"],
    commonConditions: ["Blood Stasis types with bruising", "Qi Stagnant types with chest pain"],
    faqs: [
      { q: "What is san qi used for?", a: "Notoginseng is the best herb for stopping bleeding while preventing blood stasis. It is used for wounds, bruising, and cardiovascular support. Take the body type quiz to check your type." },
      { q: "Is san qi good for the heart?", a: "Research suggests san qi may support cardiovascular health by improving circulation. It is a key ingredient in Yunnan Baiyao. Consult your doctor." },
      { q: "How to take san qi powder?", a: "Take 1-3g of fine powder mixed with warm water. For external use, apply powder directly to minor wounds to stop bleeding." }
    ]
  },
  // 42. Yi Mu Cao - Motherwort
  {
    slug: "yi-mu-cao-yi-mu-cao",
    nameEn: "Motherwort (Yi Mu Cao)",
    nameZhTrad: "益母草",
    pinyin: "yi mu cao",
    category: "Blood Tonic",
    temperature: "Slightly cold",
    taste: "Acrid, bitter",
    channels: "Heart, Liver, Bladder",
    botanicalName: "Leonurus japonicus Houtt.",
    imageFile: "yi-mu-cao-yi-mu-cao.jpg",
    summary: "Invigorates blood, regulates menstruation, and promotes urination. The name means 'benefit mother herb' for its use in women's health.",
    actions: ["Invigorates blood and regulates menstruation", "Promotes urination and reduces swelling", "May support postpartum recovery", "Reduces blood stasis pain"],
    bodyTypes: ["blood_stasis", "qi_stagnant"],
    therapeuticFocus: ["Menstrual Support", "Heart Health", "Women's Health"],
    foodPairings: ["dan shen", "rose", "red dates", "ginger"],
    howToUse: "Simmer 10-30g in tea or decoction for 20 minutes.",
    dosage: "10-30g per day.",
    cautions: ["Avoid during pregnancy", "Not for heavy menstrual bleeding", "May lower blood pressure", "Do not use during menstruation in some patterns"],
    commonConditions: ["Blood Stasis types with menstrual pain", "Qi Stagnant types with irregular cycles"],
    faqs: [
      { q: "What is yi mu cao good for?", a: "Motherwort invigorates blood and regulates menstruation. The name literally means 'benefit mother herb'. Take the body type quiz to check your type." },
      { q: "Can yi mu cao help with menstrual pain?", a: "Yes, yi mu cao is one of the most used herbs for blood-stasis type menstrual pain. It promotes blood circulation." },
      { q: "Is yi mu cao safe during pregnancy?", a: "No, yi mu cao should be avoided during pregnancy as it invigorates blood and may stimulate the uterus." }
    ]
  },
  // 43. Gui Hua - Osmanthus
  {
    slug: "gui-hua-gui-hua",
    nameEn: "Osmanthus Flower (Gui Hua)",
    nameZhTrad: "桂花",
    pinyin: "gui hua",
    category: "Warming Herb",
    temperature: "Warm",
    taste: "Acrid",
    channels: "Lung, Large Intestine",
    botanicalName: "Osmanthus fragrans Lour.",
    imageFile: "gui-hua-gui-hua.jpg",
    summary: "A fragrant flower that warms the middle, dispels cold, and freshens the breath. Commonly used in teas and desserts.",
    actions: ["Warms the middle and dispels cold", "Relieves bad breath", "May support digestion", "Has antioxidant properties"],
    bodyTypes: ["yang_deficient", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Fresh Breath", "Mood Balance"],
    foodPairings: ["black tea", "rock sugar", "glutinous rice", "honey"],
    howToUse: "Steep 3-6g dried flowers in hot water for 5 minutes.",
    dosage: "3-6g per day.",
    cautions: ["Generally very safe", "Avoid in heat-type conditions", "Mild herb for gentle use", "Check for allergies to pollen"],
    commonConditions: ["Yang Deficient types with cold stomach", "Qi Stagnant types with bad breath"],
    faqs: [
      { q: "What is gui hua?", a: "Osmanthus flower is a fragrant blossom used in tea, wine, and desserts. In TCM, it warms the middle and freshens breath. Take the body type quiz to check your type." },
      { q: "How to make osmanthus tea?", a: "Steep 3g of dried osmanthus flowers with black tea and rock sugar in hot water for 5 minutes. It has a sweet peach-like aroma." },
      { q: "Can osmanthus help with bad breath?", a: "Yes, the aromatic compounds in osmanthus freshen breath naturally. It is a gentle, pleasant-tasting remedy." }
    ]
  },
  // 44. He Ye Cha - Lotus Leaf Tea
  {
    slug: "he-ye-cha-he-ye-cha",
    nameEn: "Lotus Leaf (He Ye)",
    nameZhTrad: "荷葉",
    pinyin: "he ye",
    category: "Cooling Herb",
    temperature: "Cool",
    taste: "Bitter",
    channels: "Spleen, Stomach, Heart, Liver",
    botanicalName: "Nelumbo nucifera Gaertn.",
    imageFile: "he-ye-cha-he-ye-cha.jpg",
    summary: "Clears summer heat, raises Yang, and may support weight management. Commonly brewed as a daily tea.",
    actions: ["Clears summer heat", "Raises Yang and lifts clear Qi", "May support weight management", "Stops bleeding"],
    bodyTypes: ["damp_heat", "phlegm_damp"],
    therapeuticFocus: ["Weight Management", "Heat Relief", "Digestive Health"],
    foodPairings: ["hawthorn", "cassia seed", "green tea", "rice"],
    howToUse: "Steep 3-9g dried leaf in hot water for 10 minutes.",
    dosage: "3-9g per day.",
    cautions: ["Avoid in cold-type conditions", "Not for Qi deficiency without dampness", "Generally safe", "May interact with weight loss medications"],
    commonConditions: ["Damp Heat types with summer heat", "Phlegm Damp types with weight management"],
    faqs: [
      { q: "What is lotus leaf tea good for?", a: "Lotus leaf clears heat and is traditionally associated with weight management in TCM. It makes a refreshing summer tea. Take the body type quiz to check your type." },
      { q: "Can lotus leaf help with weight loss?", a: "Some research suggests lotus leaf compounds may support metabolism. In TCM, it clears damp-heat associated with weight patterns. Not a miracle cure." },
      { q: "How to make lotus leaf tea?", a: "Rinse 5g of dried lotus leaf, tear into pieces, and steep in boiling water for 10 minutes. Has a mild, earthy flavor." }
    ]
  },
  // 45. Tan Xiang - Sandalwood
  {
    slug: "tan-xiang-tan-xiang",
    nameEn: "Sandalwood (Tan Xiang)",
    nameZhTrad: "檀香",
    pinyin: "tan xiang",
    category: "Qi Regulating",
    temperature: "Warm",
    taste: "Acrid",
    channels: "Spleen, Stomach, Heart, Lung",
    botanicalName: "Santalum album L.",
    imageFile: "tan-xiang-tan-xiang.jpg",
    summary: "Moves Qi, relieves chest pain, and warms the middle. The aromatic wood is also prized for incense and meditation.",
    actions: ["Moves Qi and relieves chest pain", "Warms the middle and stops vomiting", "Calms the mind", "May support cardiovascular health"],
    bodyTypes: ["qi_stagnant", "blood_stasis"],
    therapeuticFocus: ["Heart Health", "Mood Balance", "Pain Relief"],
    foodPairings: ["saffron", "rose", "agarwood", "ginger"],
    howToUse: "Simmer 1-3g shavings in tea for 15 minutes.",
    dosage: "1-3g per day.",
    cautions: ["Avoid in Yin deficiency with heat", "Not for fire-type conditions", "Use in small amounts", "Overharvesting is a concern"],
    commonConditions: ["Qi Stagnant types with chest tightness", "Blood Stasas types with chest pain"],
    faqs: [
      { q: "What is tan xiang used for?", a: "Sandalwood moves Qi and relieves chest pain in TCM. It is also widely used as incense for meditation. Take the body type quiz to check your type." },
      { q: "Can sandalwood help with anxiety?", a: "The aroma of sandalwood is calming and traditionally used for meditation. In TCM, it calms the heart and regulates Qi." },
      { q: "How to use sandalwood medicinally?", a: "Use 1-3g of wood shavings simmered in water for 15 minutes. The tea has a warm, woody aroma." }
    ]
  },
  // 46. Cang Er Zi - Cocklebur
  {
    slug: "cang-er-zi-cang-er-zi",
    nameEn: "Cocklebur Fruit (Cang Er Zi)",
    nameZhTrad: "蒼耳子",
    pinyin: "cang er zi",
    category: "Cooling Herb",
    temperature: "Warm",
    taste: "Acrid, bitter",
    channels: "Lung",
    botanicalName: "Xanthium sibiricum Patr.",
    imageFile: "cang-er-zi-cang-er-zi.jpg",
    summary: "Dispels wind-damp, opens nasal passages, and relieves sinus headaches. The primary herb for allergic rhinitis.",
    actions: ["Dispels wind and opens nasal passages", "Relieves sinus headaches", "Dispels wind-damp from skin", "May support allergy relief"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Sinus Relief", "Allergy Support", "Headache Relief"],
    foodPairings: ["mint", "magnolia flower", "angelica", "green tea"],
    howToUse: "Simmer 3-9g in tea for 20 minutes. Dry-roast before use.",
    dosage: "3-9g per day.",
    cautions: ["Toxic in raw form, always roast before use", "Avoid overdose", "Not for liver disease patients", "May cause headache in high doses"],
    commonConditions: ["Phlegm Damp types with sinus congestion", "Qi Stagnant types with headaches"],
    faqs: [
      { q: "What is cang er zi used for?", a: "Cocklebur fruit is the primary herb for nasal congestion and sinusitis in TCM. Always use roasted, not raw. Take the body type quiz to check your type." },
      { q: "Can it help with allergies?", a: "Yes, cang er zi is commonly used for allergic rhinitis patterns. It opens nasal passages and dispels wind. Consult a practitioner." },
      { q: "Is cang er zi toxic?", a: "Raw cocklebur can be toxic to the liver. Always use properly roasted and processed forms. Do not exceed recommended doses." }
    ]
  },
  // 47. Sang Zhi - Mulberry Twig
  {
    slug: "sang-zhi-sang-zhi",
    nameEn: "Mulberry Twig (Sang Zhi)",
    nameZhTrad: "桑枝",
    pinyin: "sang zhi",
    category: "Qi Regulating",
    temperature: "Neutral",
    taste: "Bitter",
    channels: "Liver",
    botanicalName: "Morus alba L.",
    imageFile: "sang-zhi-sang-zhi.jpg",
    summary: "Dispels wind-damp, unblocks channels, and relieves joint pain. A gentle herb for upper body arthritis.",
    actions: ["Dispels wind-damp and relieves joint pain", "Unblocks channels and collaterals", "Targets upper body joints", "May support mobility"],
    bodyTypes: ["blood_stasis", "phlegm_damp"],
    therapeuticFocus: ["Joint Support", "Circulation", "Pain Relief"],
    foodPairings: ["ginger", "cinnamon", "rice", "acanthopanax"],
    howToUse: "Simmer 10-30g in tea or decoction for 30 minutes.",
    dosage: "10-30g per day.",
    cautions: ["Generally very safe", "Avoid in pregnancy without guidance", "Mild herb, may need longer use", "No significant interactions known"],
    commonConditions: ["Blood Stasis types with joint stiffness", "Phlegm Damp types with upper body pain"],
    faqs: [
      { q: "What is sang zhi good for?", a: "Mulberry twig dispels wind-damp and relieves joint pain, especially in the upper body (shoulders, arms, wrists). Take the body type quiz to check your type." },
      { q: "How is sang zhi different from sang ye?", a: "Sang zhi is the twig, used for joints and circulation. Sang ye is the leaf, used to disperse wind-heat and support blood sugar balance." },
      { q: "Can sang zhi help with arthritis?", a: "Yes, sang zhi is traditionally used for wind-damp type arthritis, particularly when the upper body joints are affected." }
    ]
  },
  // 48. Zi Su - Perilla
  {
    slug: "zi-su-zi-su",
    nameEn: "Perilla Leaf (Zi Su Ye)",
    nameZhTrad: "紫蘇",
    pinyin: "zi su ye",
    category: "Qi Regulating",
    temperature: "Warm",
    taste: "Acrid",
    channels: "Lung, Spleen",
    botanicalName: "Perilla frutescens (L.) Britton",
    imageFile: "zi-su-zi-su.jpg",
    summary: "Releases the exterior, harmonizes the middle, and resolves seafood poisoning. Both leaves and seeds are used medicinally.",
    actions: ["Releases the exterior and disperses cold", "Harmonizes the middle and resolves vomiting", "Detoxifies seafood and crab", "May support respiratory health"],
    bodyTypes: ["qi_stagnant", "phlegm_damp"],
    therapeuticFocus: ["Cold Relief", "Digestive Health", "Allergy Support"],
    foodPairings: ["fresh ginger", "dried tangerine peel", "fish", "rice"],
    howToUse: "Simmer 5-10g in tea for 10 minutes. Add leaves to cooking.",
    dosage: "5-10g per day.",
    cautions: ["Avoid in profuse sweating", "Not for excess heat", "Generally very safe", "Mild herb, widely used in cooking"],
    commonConditions: ["Qi Stagnant types with cold symptoms", "Phlegm Damp types with nausea"],
    faqs: [
      { q: "What is zi su ye used for?", a: "Perilla leaf releases cold-type exterior conditions, harmonizes the middle, and detoxifies seafood. It is widely used in cooking. Take the body type quiz to check your type." },
      { q: "Can perilla help with allergies?", a: "Perilla has anti-inflammatory properties and some research supports its use for allergic conditions. It is a common ingredient in anti-allergy formulas." },
      { q: "How to use perilla in cooking?", a: "Fresh leaves can wrap grilled meats, be added to soups, or tempura-fried. The seeds are pressed for a nutritious oil." }
    ]
  },
  // 49. Guang Chen Pi - Guangdong Tangerine Peel
  {
    slug: "guang-chen-pi-guang-chen-pi",
    nameEn: "Aged Tangerine Peel (Guang Chen Pi)",
    nameZhTrad: "廣陳皮",
    pinyin: "guang chen pi",
    category: "Qi Regulating",
    temperature: "Warm",
    taste: "Acrid, bitter",
    channels: "Spleen, Lung",
    botanicalName: "Citrus reticulata 'Chachi' (aged)",
    imageFile: "guang-chen-pi-guang-chen-pi.jpg",
    summary: "The premium aged tangerine peel from Xinhui, Guangdong. Moves Qi, transforms phlegm, and improves with age like fine wine.",
    actions: ["Moves Qi and reduces abdominal fullness", "Transforms phlegm and descends Qi", "Improves digestion", "May support respiratory health"],
    bodyTypes: ["phlegm_damp", "qi_stagnant"],
    therapeuticFocus: ["Digestive Health", "Respiratory Health", "Circulation"],
    foodPairings: ["rice", "ginger", "hawthorn", "pork"],
    howToUse: "Simmer 3-10g in tea or cooking for 15-20 minutes.",
    dosage: "3-10g per day.",
    cautions: ["Avoid in Yin deficiency with dry cough", "Not for excess heat", "Genuine aged peel is expensive", "Longer aging increases value"],
    commonConditions: ["Phlegm Damp types with bloating", "Qi Stagnant types with chest fullness"],
    faqs: [
      { q: "What makes guang chen pi special?", a: "Guang chen pi is from Xinhui, Guangdong, and is considered the finest tangerine peel. Like wine, it improves with age. Take the body type quiz to check your type." },
      { q: "How old should aged tangerine peel be?", a: "At least 3 years is considered minimum. Premium peels aged 10+ years can be very expensive. Older peel is considered milder and more effective." },
      { q: "How to brew chen pi tea?", a: "Rinse 5g of peel, simmer in water for 15 minutes. It has a warm citrus aroma. Pairs well with pu-erh tea." }
    ]
  }
]

const toAdd = newHerbs.filter(h => !existingSlugs.has(h.slug))
console.log(`Batch 3: Generating ${toAdd.length} new herbs (${newHerbs.length - toAdd.length} already exist)`)

const built = toAdd.map(buildHerb)
const merged = [...existing, ...built]
writeFileSync("src/lib/herbs-data.json", JSON.stringify(merged, null, 2), "utf-8")
console.log(`Done. Total herbs: ${merged.length}`)
