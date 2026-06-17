export interface FoodComboDetail {
  name: string
  emoji: string
  whyItHelps: string
  howToUse: string
  bestFor: string
}

export interface AvoidFoodItem {
  name: string
  reason: string
}

export interface DailyGuideItem {
  time: string
  suggestion: string
}

export interface FoodComboFaq {
  q: string
  a: string
}

export interface FoodComboPageData {
  slug: string
  metaTitle: string
  metaDesc: string
  h1: string
  intro: string
  quickAnswer: string
  foods: FoodComboDetail[]
  avoidFoods: AvoidFoodItem[]
  dailyGuide: DailyGuideItem[]
  bonusTip: { title: string; content: string }
  faqs: FoodComboFaq[]
  relatedSymptomSlug: string
  relatedTypeIds: string[]
  readTime: string
  datePublished: string
}

export const FOOD_COMBO_PAGES: Record<string, FoodComboPageData> = {
  "when-youre-always-tired": {
    slug: "when-youre-always-tired",
    metaTitle: "5 Foods That May Help When You're Always Tired (Free Body Type Quiz)",
    metaDesc: "Tired all the time no matter how much you sleep? Warming foods like congee, sweet potato, and red date tea may help your body convert meals into steady energy. Free quiz.",
    h1: "5 Foods That May Help When You're Always Tired",
    intro: "Fatigue that sleep does not fix often points to a digestive system struggling to convert food into usable energy. In Eastern wellness, this pattern relates to qi deficiency: your body has fuel but cannot extract it efficiently. The foods below are chosen because they require minimal digestive effort while providing maximum building material.",
    quickAnswer: "If you are always tired, warming and easily digested foods like rice porridge, sweet potato, and red date tea may help your body extract more energy from meals. The key is choosing foods that require little digestive effort so your body can focus on recovery instead of processing.",
    foods: [
      {
        name: "Sweet Potato",
        emoji: "🍠",
        whyItHelps: "Sweet potatoes are warming and naturally sweet, which in Eastern wellness means they build steady energy without the crash. They break down slowly and evenly, making them gentle on a tired digestive system.",
        howToUse: "Roast wedges with a drizzle of honey, or steam and mash as a side dish. Eat 3-4 times per week.",
        bestFor: "Qi-deficient types",
      },
      {
        name: "Chicken Bone Broth",
        emoji: "🍲",
        whyItHelps: "Bone broth has been used for centuries as a recovery food. The long cooking process extracts nutrients in a form that requires almost no digestive work, which matters when your energy is already low.",
        howToUse: "Simmer chicken bones with ginger for 2 to 3 hours. Sip a small bowl before meals, or use as a soup base daily.",
        bestFor: "Qi and yang-deficient types",
      },
      {
        name: "Red Date and Goji Tea",
        emoji: "🍵",
        whyItHelps: "Red dates build gentle energy while goji berries support the blood. Together they create a mild, naturally sweet tea that feels like fuel without the jittery spike of caffeine.",
        howToUse: "Simmer 5 pitted red dates and a small handful of goji berries in hot water for 10 minutes. Drink in place of afternoon coffee.",
        bestFor: "Qi and blood-deficient types",
      },
      {
        name: "Rice Porridge (Congee)",
        emoji: "🍚",
        whyItHelps: "Congee is rice cooked with extra water until soft and creamy. Eastern wellness considers it the ultimate recovery food because the long cooking process pre-digests the grain for you.",
        howToUse: "Cook 1 part white rice in 8 parts water on low heat for 1 to 2 hours. Add fresh ginger and a pinch of salt.",
        bestFor: "All deficient types",
      },
      {
        name: "Beef",
        emoji: "🥩",
        whyItHelps: "Beef provides deep energy replenishment. It is considered one of the most strengthening meats for people whose reserves feel genuinely depleted after prolonged fatigue.",
        howToUse: "Slow-cook in stews with root vegetables. Avoid heavy grilling or frying, which make the meat harder to process.",
        bestFor: "Qi and blood-deficient types",
      },
    ],
    avoidFoods: [
      {
        name: "Ice-cold drinks",
        reason: "Cold liquids slow your digestive system. Think of your digestion as a warm oven: pouring in ice water lowers the temperature and makes everything work harder for less result.",
      },
      {
        name: "Raw salads in large portions",
        reason: "Raw vegetables require significant digestive energy to break down. When you are already tired, that energy cost is too high and leaves you more fatigued after eating.",
      },
      {
        name: "Excessive coffee",
        reason: "Coffee borrows energy from tomorrow to spend today. It feels helpful in the moment but deepens the fatigue cycle over time, especially when used as a substitute for real food.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Warm congee with ginger and a soft-boiled egg" },
      { time: "Lunch", suggestion: "Chicken soup with root vegetables and a small bowl of rice" },
      { time: "Afternoon", suggestion: "A cup of red date and goji tea instead of coffee" },
      { time: "Dinner", suggestion: "Steamed sweet potato with lightly cooked leafy greens" },
    ],
    bonusTip: {
      title: "The 70% Rule",
      content: "Eastern wellness recommends stopping eating when you feel about 70% full. This leaves room for your stomach to move and digest comfortably, which means less energy spent on processing and more available for you to actually feel alive.",
    },
    faqs: [
      {
        q: "How long until these foods make a difference?",
        a: "Most people notice changes within 2 to 3 weeks of consistent eating. Energy built through food is gradual but sustainable, unlike the quick spike and crash of caffeine. The first sign is usually waking up feeling slightly less heavy.",
      },
      {
        q: "Can I still drink coffee?",
        a: "One cup in the morning is usually fine for most people. The issue arises when coffee becomes the primary energy source and replaces actual nourishment. Try replacing your afternoon cup with red date tea for a week and notice the difference.",
      },
      {
        q: "Why are warm foods specifically recommended?",
        a: "In Eastern wellness, warm foods require less energy to process because your body does not need to heat them up first. Cold food forces your digestive system to spend energy warming it before any nutrition can be extracted. For tired people, that wasted energy adds up.",
      },
      {
        q: "Should I exercise if I am this tired?",
        a: "Gentle movement like walking or stretching is better than intense workouts when your energy is genuinely depleted. Very intense exercise can temporarily worsen fatigue in qi-deficient states. As your energy improves through food, you can gradually increase activity.",
      },
    ],
    relatedSymptomSlug: "why-am-i-always-tired",
    relatedTypeIds: ["qi_deficient", "yang_deficient"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-you-cant-fall-asleep": {
    slug: "when-you-cant-fall-asleep",
    metaTitle: "Foods That May Help You Fall Asleep Faster (Eastern Wellness Guide)",
    metaDesc: "Body exhausted but mind won't stop at night? Calming foods like lily bulb soup, warm milk with honey, and walnuts may quiet your nervous system. Free body type quiz.",
    h1: "5 Foods That May Help When You Can't Fall Asleep",
    intro: "Lying in bed with your body exhausted but your mind racing is one of the most frustrating experiences. Eastern wellness often links this pattern to internal heat that keeps your nervous system from settling. The foods below are chosen for their cooling, calming properties.",
    quickAnswer: "If you cannot fall asleep, cooling and calming foods like lily bulb soup, warm milk with honey, and walnuts may help quiet an overactive mind. Eating a light early dinner and avoiding stimulating foods after midday can also make a significant difference.",
    foods: [
      {
        name: "Lily Bulb",
        emoji: "🌸",
        whyItHelps: "Lily bulb has been used in Eastern wellness for centuries to calm the mind and support restful sleep. It has a mild, slightly sweet taste and is traditionally cooked into simple bedtime soups.",
        howToUse: "Simmer dried lily bulbs with rock sugar and water for 20 minutes. Drink the warm liquid 30 minutes before bed.",
        bestFor: "Yin-deficient types",
      },
      {
        name: "Warm Milk with Honey",
        emoji: "🥛",
        whyItHelps: "Warm milk is a near-universal sleep remedy, and Eastern wellness agrees. The warmth soothes the digestive system, while honey adds a gentle sweetness that the tradition associates with grounding and settling.",
        howToUse: "Heat milk gently without boiling. Stir in one teaspoon of honey. Drink slowly 30 minutes before lying down.",
        bestFor: "All types",
      },
      {
        name: "Walnuts",
        emoji: "🥜",
        whyItHelps: "Walnuts are warming and nourishing. They are said to support the brain and deep energy reserves, which matters when your mind keeps running after your body wants to stop.",
        howToUse: "Eat 4 to 5 walnuts as an evening snack, or grind a small handful into your dinner porridge.",
        bestFor: "Yang and qi-deficient types",
      },
      {
        name: "Banana",
        emoji: "🍌",
        whyItHelps: "Bananas are easy to digest and contain magnesium, which supports muscle relaxation. Eastern wellness views them as moistening and gently calming to the nervous system.",
        howToUse: "Eat half a banana with a cup of warm water an hour before bed.",
        bestFor: "All types",
      },
      {
        name: "Tremella Mushroom Dessert",
        emoji: "🍄",
        whyItHelps: "Tremella is a pale, gelatinous mushroom prized for its moisturizing and cooling properties. When your body runs too warm at night, tremella may help bring that internal temperature down to a level where sleep becomes possible.",
        howToUse: "Soak dried tremella for 1 hour, then cook with goji berries and rock sugar into a soft dessert.",
        bestFor: "Yin-deficient types",
      },
    ],
    avoidFoods: [
      {
        name: "Spicy food after 5pm",
        reason: "Spicy foods add internal heat. If your sleep trouble stems from excess heat keeping your mind active, a spicy dinner is like adding fuel to a fire you are trying to put out.",
      },
      {
        name: "Caffeine after noon",
        reason: "Caffeine has a long half-life. A 2pm coffee or tea may still be circulating in your system at 10pm, keeping your nervous system on alert when it should be winding down.",
      },
      {
        name: "Heavy protein dinners",
        reason: "A large portion of meat at dinner requires hours of digestive work. Your body stays active processing the food instead of shifting into the rest mode needed for sleep.",
      },
    ],
    dailyGuide: [
      { time: "Breakfast", suggestion: "Oatmeal with walnuts and a drizzle of honey" },
      { time: "Lunch", suggestion: "Your normal balanced meal with adequate protein" },
      { time: "Dinner (by 6pm)", suggestion: "Light vegetable soup or congee with a small piece of steamed fish" },
      { time: "9pm", suggestion: "A small cup of warm milk with honey or lily bulb soup" },
    ],
    bonusTip: {
      title: "The Foot Soak Ritual",
      content: "Soaking your feet in warm water for 15 minutes before bed is a practice from Eastern wellness for drawing energy down from the head. When your mind races at night, warmth at the feet signals the body that it is safe to rest. Try adding a few slices of ginger to the water for extra warming effect.",
    },
    faqs: [
      {
        q: "Does warm milk actually work or is it just a myth?",
        a: "There is both traditional wisdom and modern reasoning behind it. Milk contains tryptophan, and the warmth itself helps relax the digestive system. Eastern wellness values warm milk for its grounding, cooling nature, which helps settle an overactive mind before sleep.",
      },
      {
        q: "What about a glass of wine before bed?",
        a: "Wine may help you fall asleep faster initially, but it tends to disrupt the second half of sleep when your body processes the alcohol. From an Eastern wellness perspective, alcohol adds heat and dampness that can worsen sleep quality over time.",
      },
      {
        q: "What is the best dinner time for good sleep?",
        a: "Aim to finish dinner by 6pm, or at least 3 hours before you plan to lie down. This gives your body time to complete the heaviest part of digestion before it needs to shift into rest mode.",
      },
      {
        q: "Can I take melatonin along with these foods?",
        a: "These foods are gentle and generally compatible with supplements. However, the goal of Eastern wellness is to need less external help over time as your body type comes into better balance through food. Talk to your doctor about supplement interactions.",
      },
    ],
    relatedSymptomSlug: "why-cant-i-fall-asleep",
    relatedTypeIds: ["yin_deficient"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-youre-always-cold": {
    slug: "when-youre-always-cold",
    metaTitle: "Always Cold? 5 Warming Foods That May Help (Eastern Wellness)",
    metaDesc: "Wearing 3 layers while others are fine? Warming foods like ginger, lamb, and cinnamon may rebuild your internal heat. See which foods match your body type. Free quiz.",
    h1: "5 Foods That May Help When You're Always Cold",
    intro: "Feeling cold when everyone around you is comfortable is more than a preference for warmer weather. In Eastern wellness, this often signals that your internal heating system, what the tradition calls yang energy, is underpowered. The foods below add warmth from the inside out.",
    quickAnswer: "If you are always cold, warming foods like ginger, lamb, and cinnamon may help rebuild your internal heat. Eating cooked warm meals consistently and avoiding raw cold foods is just as important as which specific warming ingredients you choose.",
    foods: [
      {
        name: "Fresh Ginger",
        emoji: "🫚",
        whyItHelps: "Ginger is considered nature's internal heater in Eastern wellness. It warms from the center of the body outward and is one of the most accessible and versatile warming ingredients you can find.",
        howToUse: "Grate fresh ginger into hot water for morning tea, or add thin slices to soups, stews, and stir-fries.",
        bestFor: "All cold types",
      },
      {
        name: "Lamb Stew",
        emoji: "🍖",
        whyItHelps: "Lamb is one of the warmest meats available. It provides deep warmth and building material for people whose internal fire feels persistently low, making it ideal for cold winters and cold body types.",
        howToUse: "Slow-cook lamb with ginger, carrots, and a cinnamon stick for 2 hours. Eat once or twice per week.",
        bestFor: "Yang-deficient types",
      },
      {
        name: "Cinnamon",
        emoji: "🟤",
        whyItHelps: "Cinnamon warms the interior and supports circulation to the hands and feet. Even a small daily amount can make a noticeable difference over a few weeks.",
        howToUse: "Add a pinch to morning oatmeal, tea, or warm milk. A small amount goes a long way.",
        bestFor: "Yang-deficient types",
      },
      {
        name: "Leeks",
        emoji: "🧅",
        whyItHelps: "Leeks are warming and gently stimulate circulation. They share some of the warming properties of garlic and onion but with a milder, sweeter taste that is easier to include regularly.",
        howToUse: "Stir-fry with eggs for breakfast, or add to soups and stews in place of onions.",
        bestFor: "Yang-deficient types",
      },
      {
        name: "Bone Marrow Broth",
        emoji: "🦴",
        whyItHelps: "Broth from beef or lamb bones is considered a deep warming tonic in Eastern wellness. The marrow provides concentrated nourishment for people who feel cold from the inside out, not just on the surface.",
        howToUse: "Simmer marrow bones with ginger and a splash of vinegar for 4 to 6 hours. Sip a cup daily.",
        bestFor: "All deficient types",
      },
    ],
    avoidFoods: [
      {
        name: "Ice water and cold drinks",
        reason: "Every glass of ice water cools your core temperature. Your body then has to spend energy warming back up, which for a cold body type means less available warmth for hands, feet, and daily function.",
      },
      {
        name: "Large portions of raw vegetables",
        reason: "Raw foods are cooling by nature. For someone who is always cold, a big raw salad works against the warming foods you are trying to add. Lightly cook or steam your vegetables instead.",
      },
      {
        name: "Watermelon and cucumber",
        reason: "These are among the most cooling foods in the Eastern wellness system. They are refreshing in peak summer heat but can chill an already cold body further when eaten regularly.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Ginger tea on waking, followed by warm oatmeal with cinnamon" },
      { time: "Lunch", suggestion: "Lamb soup or beef stew with a bowl of rice" },
      { time: "Snack", suggestion: "Roasted chestnuts or a handful of walnuts" },
      { time: "Dinner", suggestion: "Stir-fried leeks with eggs over ginger rice" },
    ],
    bonusTip: {
      title: "The Ginger Foot Soak",
      content: "Add a few slices of fresh ginger to a basin of warm water and soak your feet for 15 minutes before bed. This warming practice helps circulate heat to your extremities and is especially helpful during winter months when cold hands and feet are most uncomfortable.",
    },
    faqs: [
      {
        q: "Why am I colder than everyone around me?",
        a: "In Eastern wellness, feeling chronically cold is often associated with yang deficiency, meaning your internal warming system is underpowered compared to other people. This can be influenced by diet, constitutional tendencies, and lifestyle factors over time.",
      },
      {
        q: "Do cooking methods really matter?",
        a: "Yes. Slow-cooked, simmered, and roasted foods are considered warmer in nature than raw, steamed, or quickly boiled foods. For cold body types, the cooking method adds another layer of warmth beyond the ingredient itself.",
      },
      {
        q: "Will exercise help me feel warmer?",
        a: "Gentle to moderate exercise like brisk walking can generate warmth and support circulation. However, very intense or exhausting workouts may temporarily deplete your warming energy if you are already running cold. Balance movement with rest and warming foods.",
      },
      {
        q: "How long until I stop feeling so cold?",
        a: "With consistent dietary changes, many people notice improvement within 3 to 4 weeks. Deeper shifts in baseline body temperature may take 2 to 3 months of regular warm-food eating combined with avoiding cold drinks.",
      },
    ],
    relatedSymptomSlug: "why-am-i-always-cold",
    relatedTypeIds: ["yang_deficient"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-youre-bloated": {
    slug: "when-youre-bloated",
    metaTitle: "Bloated After Every Meal? 5 Foods That May Help Your Digestion",
    metaDesc: "Feel like a balloon after normal meals? Millet porridge, fennel tea, and ginger can reduce the burden on your digestion. Simple food swaps that may help. Free body type quiz.",
    h1: "5 Foods That May Help When You're Always Bloated",
    intro: "That uncomfortable balloon feeling after meals is not always about what you ate. It is often about whether your digestive system had enough energy to process it properly. Eastern wellness calls this spleen qi deficiency, and the foods below are chosen to lighten the digestive workload.",
    quickAnswer: "If you feel bloated after eating, warm and easily digested foods like millet porridge, fennel tea, and cooked vegetables may reduce the burden on your digestion. Eating slowly and choosing cooked over raw foods makes the biggest immediate difference for most people.",
    foods: [
      {
        name: "Millet Porridge",
        emoji: "🌾",
        whyItHelps: "Millet is one of the most easily digested grains in Eastern wellness. It is gentle, warming, and requires very little digestive effort, making it an ideal first food when your stomach feels swollen and sensitive.",
        howToUse: "Cook millet with extra water into a soft porridge. Add a pinch of salt and a slice of fresh ginger.",
        bestFor: "Qi-deficient types",
      },
      {
        name: "Fennel Seeds",
        emoji: "🌿",
        whyItHelps: "Fennel seeds have been used across cultures to relieve bloating and gas. Eastern wellness values them for their warming, moving quality that helps trapped air and discomfort pass through the digestive tract.",
        howToUse: "Crush half a teaspoon of fennel seeds and steep in hot water for 5 minutes. Drink after every meal.",
        bestFor: "All types",
      },
      {
        name: "Ginger Tea",
        emoji: "🍵",
        whyItHelps: "Ginger warms the digestive system and helps it function more efficiently. For bloating specifically, the warmth of ginger tea can help your stomach process food that feels stuck and heavy.",
        howToUse: "Slice fresh ginger, steep in just-boiled water for 5 minutes. Sip slowly after meals, not during.",
        bestFor: "Cold and qi-deficient types",
      },
      {
        name: "Chicken Soup",
        emoji: "🍗",
        whyItHelps: "Well-cooked chicken soup is soothing and easy to process. The warmth and liquid help food move through your system rather than sitting heavy and fermenting in the stomach.",
        howToUse: "Simmer chicken with carrots, ginger, and a small amount of rice. Keep the ingredients simple and avoid heavy seasoning.",
        bestFor: "Qi-deficient types",
      },
      {
        name: "Cooked Carrots",
        emoji: "🥕",
        whyItHelps: "Cooked carrots are soft, sweet, and gentle on the digestive tract. The cooking process breaks down the fiber that can cause bloating from raw carrots, making the nutrients easier to absorb.",
        howToUse: "Steam or roast until very soft. Add to soups or serve as a simple side dish.",
        bestFor: "All types",
      },
    ],
    avoidFoods: [
      {
        name: "Cold raw salads",
        reason: "Raw vegetables are significantly harder to break down than cooked ones. When your digestion is weak, raw fiber sits in the stomach longer and ferments, creating gas and that swollen feeling.",
      },
      {
        name: "Dairy products",
        reason: "Dairy is considered damp-forming in Eastern wellness. For someone already prone to bloating, dairy can increase the heavy, sluggish, stuck feeling after meals.",
      },
      {
        name: "Unsoaked beans and legumes",
        reason: "Beans are notoriously gas-producing if not prepared correctly. Always soak dried beans overnight and cook them thoroughly with warming spices like ginger to reduce this effect.",
      },
      {
        name: "Carbonated drinks",
        reason: "Fizzy drinks literally add trapped air to your digestive system. If bloating is a recurring problem, sparkling water and soda are directly working against your comfort.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Millet porridge with a dash of fresh ginger" },
      { time: "Lunch", suggestion: "Chicken soup with soft-cooked vegetables and a little rice" },
      { time: "Afternoon", suggestion: "Fennel seed tea, no heavy snacks" },
      { time: "Dinner", suggestion: "Steamed fish with soft-cooked root vegetables (early, before 7pm)" },
    ],
    bonusTip: {
      title: "Chew More, Bloat Less",
      content: "Eastern wellness recommends chewing each bite 20 to 30 times. This sounds excessive, but thorough chewing begins the digestive process in your mouth through enzymes in your saliva. Many people find bloating decreases significantly within days just from this one change, without altering what they eat at all.",
    },
    faqs: [
      {
        q: "Why does cooked food matter more than raw for bloating?",
        a: "Cooking is essentially pre-digestion. Heat breaks down tough fibers and plant cell walls, so your stomach receives food that is already partially broken down. Less digestive work means less gas production and less bloating.",
      },
      {
        q: "Should I eat smaller portions when bloated?",
        a: "Yes. Smaller, more regular meals are often much easier on a sensitive digestive system than three large meals. Aim for about 70% full rather than stuffed, and never skip meals entirely as irregular eating weakens digestion.",
      },
      {
        q: "Is bloating always caused by food?",
        a: "Not always. Stress, eating too quickly, irregular meal times, and eating while distracted can all contribute. Eastern wellness treats digestion as a system that needs both the right food and the right conditions to function well.",
      },
      {
        q: "Can probiotic supplements help with bloating?",
        a: "Probiotics may help some people, but Eastern wellness focuses first on the temperature and quality of food. Warming, cooked foods often resolve bloating without needing supplements. If you do try probiotics, combine them with the food changes above.",
      },
    ],
    relatedSymptomSlug: "always-bloated-after-eating",
    relatedTypeIds: ["qi_deficient", "phlegm_damp"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-you-have-brain-fog": {
    slug: "when-you-have-brain-fog",
    metaDesc: "Can't think clearly? Foods that clear dampness like white radish soup, green tea, and Job's tears may lift the fog from within. Plus what to cut out. Free quiz.",
    metaTitle: "Brain Fog? 5 Foods That May Help Clear Your Mind Naturally",
    h1: "5 Foods That May Help When You Have Brain Fog",
    intro: "When your thoughts feel cloudy and your focus keeps slipping, the problem may not be in your head alone. Eastern wellness connects mental clarity directly to the digestive system, specifically to how well your body processes and clears what it calls dampness: heavy, sluggish internal moisture that weighs down thinking.",
    quickAnswer: "If you have brain fog, foods that help clear dampness may lift the cloud. White radish soup, green tea, and Job's tears porridge support your body in processing the heavy residues that cloud your thinking. Cutting sugar and fried foods is equally important.",
    foods: [
      {
        name: "White Radish",
        emoji: "🥬",
        whyItHelps: "White radish is one of the most respected vegetables in Eastern wellness for clearing phlegm and dampness. It has a pungent quality that helps move stagnant fluids and clear the heavy cloudiness from the head.",
        howToUse: "Slice into soups with ginger, or grate and add to cooked dishes. Avoid raw if your digestion is weak.",
        bestFor: "Phlegm-damp types",
      },
      {
        name: "Green Tea",
        emoji: "🌿",
        whyItHelps: "Green tea provides a mild stimulating effect without the heaviness of coffee. Eastern wellness considers it clearing and light, helping to cut through mental fog while also supporting digestion.",
        howToUse: "Drink 2 to 3 cups throughout the morning. Avoid after 2pm if you are sensitive to caffeine.",
        bestFor: "All types",
      },
      {
        name: "Job's Tears (Coix Seed)",
        emoji: "🫘",
        whyItHelps: "Job's tears is a grain-like seed used specifically to drain dampness from the body. It has a mild, pleasant taste and is one of the primary foods recommended for mental heaviness linked to digestion.",
        howToUse: "Cook into porridge with water, or add to soups. Available dried at Asian grocery stores.",
        bestFor: "Phlegm-damp types",
      },
      {
        name: "Walnuts",
        emoji: "🥜",
        whyItHelps: "Walnuts resemble the human brain and have long been used in Eastern wellness to support mental function. They provide healthy oils that the brain needs while being warming and grounding.",
        howToUse: "Eat a small handful (6 to 8) daily, or grind into your morning porridge.",
        bestFor: "All types",
      },
      {
        name: "Aged Tangerine Peel (Chenpi)",
        emoji: "🍊",
        whyItHelps: "Dried tangerine peel is a classic ingredient for moving stuck energy and clearing phlegm. It has a fragrant, slightly bitter taste that cuts through heaviness and supports clearer thinking.",
        howToUse: "Add a small piece to hot water for tea, or cook into congee and savory porridge.",
        bestFor: "Phlegm-damp and qi-stagnant types",
      },
    ],
    avoidFoods: [
      {
        name: "Sugar and sweets",
        reason: "Sugar directly creates dampness in the body. If your brain fog is linked to dampness, sugar is the primary fuel for the fog. This includes hidden sugars in sauces, drinks, and processed snacks.",
      },
      {
        name: "Fried and greasy foods",
        reason: "Greasy foods are the heaviest and most damp-forming category in Eastern wellness. They slow digestion and create the internal heaviness that shows up as mental cloudiness within hours of eating.",
      },
      {
        name: "Regular dairy consumption",
        reason: "Dairy is considered damp-forming and phlegm-producing. For brain fog linked to internal dampness, reducing or eliminating dairy can make a noticeable difference within a week for many people.",
      },
      {
        name: "Refined carbohydrates",
        reason: "White bread, pastries, and refined-flour noodles behave similarly to sugar in the body. They create rapid blood sugar spikes followed by crashes that worsen brain fog.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Green tea with a small bowl of Job's tears porridge" },
      { time: "Lunch", suggestion: "White radish soup with rice and steamed vegetables" },
      { time: "Snack", suggestion: "A few walnuts and a cup of chenpi tea" },
      { time: "Dinner", suggestion: "Light vegetable soup with fish, no heavy sauces or fried food" },
    ],
    bonusTip: {
      title: "The Morning Clear-Out",
      content: "Start each day with a cup of warm water and a thin slice of fresh ginger before eating anything. This simple habit gently wakes your digestive system and helps it prepare to process the day's food efficiently, reducing the damp residue that fogs your thinking.",
    },
    faqs: [
      {
        q: "How is brain fog connected to my digestion?",
        a: "Eastern wellness views the mind and digestive system as one connected network. When digestion is sluggish, internal dampness accumulates, and this heaviness can manifest as cloudy thinking, poor concentration, and that stuck mental feeling.",
      },
      {
        q: "Will cutting sugar really help my focus?",
        a: "Many people report clearer thinking within 1 to 2 weeks of significantly reducing sugar. Sugar creates rapid energy spikes followed by crashes, and the dampness it generates can cloud mental clarity. The effect is often quite noticeable.",
      },
      {
        q: "Is coffee making my brain fog worse?",
        a: "Coffee can temporarily sharpen focus but may worsen fog long-term if it depletes your energy reserves. Green tea provides a gentler, more sustained lift that supports clarity without the same crash.",
      },
      {
        q: "Should I eat breakfast when I have brain fog?",
        a: "Yes, but choose a warm, light breakfast rather than cold cereal or pastries. Congee, oatmeal, or eggs with toast are good options. Skipping breakfast entirely can weaken digestion over time, which may worsen fog.",
      },
    ],
    relatedSymptomSlug: "why-do-i-have-brain-fog",
    relatedTypeIds: ["phlegm_damp"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-you-feel-anxious": {
    slug: "when-you-feel-anxious",
    metaTitle: "Anxious for No Reason? 5 Calming Foods From Eastern Wellness",
    metaDesc: "Racing heart and tight chest with no obvious cause? Calming foods like lotus seeds, longan, and bone broth may steady your nervous system from within. Free body type quiz.",
    h1: "5 Foods That May Help When You Feel Anxious",
    intro: "Anxiety that appears without a clear trigger can feel overwhelming and confusing. Eastern wellness offers a different perspective: it often links ungrounded anxiety to the heart and digestive system not receiving enough steady, calm nourishment. The foods below are chosen for their grounding and settling properties.",
    quickAnswer: "If you feel anxious for no clear reason, calming and grounding foods like lotus seeds, whole grains, and bone broth may help steady your nervous system. Limiting caffeine and sugar is often the single most impactful dietary change for reducing anxiety symptoms.",
    foods: [
      {
        name: "Lotus Seeds",
        emoji: "🪷",
        whyItHelps: "Lotus seeds have been used for centuries to calm the mind and support the heart in Eastern wellness. They have a mild, slightly sweet taste and are traditionally cooked into both sweet desserts and savory dishes.",
        howToUse: "Cook into porridge with red dates, or add to soups. Available dried at Asian markets.",
        bestFor: "All anxious types",
      },
      {
        name: "Whole Wheat",
        emoji: "🌾",
        whyItHelps: "Whole wheat is said to calm the heart and steady the spirit in Eastern wellness. This aligns with its B vitamin content, which modern nutrition recognizes as important for nervous system function.",
        howToUse: "Choose whole wheat bread, pasta, or cooked wheat berries as your regular grain.",
        bestFor: "All types",
      },
      {
        name: "Longan Fruit",
        emoji: "🍇",
        whyItHelps: "Longan is a small tropical fruit prized in Eastern wellness for nourishing the heart and easing worry. It has a sweet, floral taste and is usually sold dried, making it easy to keep on hand.",
        howToUse: "Snack on a small handful of dried longan, or steep in hot water with red dates for a calming tea.",
        bestFor: "Qi and blood-deficient types",
      },
      {
        name: "Oysters",
        emoji: "🦪",
        whyItHelps: "Oysters are valued in Eastern wellness for their grounding quality. They provide zinc and other trace minerals that support nervous system stability and resilience under stress.",
        howToUse: "Eat fresh or canned oysters once or twice a week. If you dislike them, pumpkin seeds offer similar minerals.",
        bestFor: "Yin-deficient types",
      },
      {
        name: "Bone Broth",
        emoji: "🍲",
        whyItHelps: "Bone broth provides minerals and amino acids in an easily absorbed form. Eastern wellness considers it deeply nourishing for people whose anxiety stems from being run down and depleted over time.",
        howToUse: "Sip a warm cup daily between meals, or use as a base for cooking grains and soups.",
        bestFor: "All deficient types",
      },
    ],
    avoidFoods: [
      {
        name: "Caffeine in all forms",
        reason: "Caffeine directly stimulates the nervous system. For anxiety-prone people, even one cup of coffee can trigger physical symptoms like racing heart, shallow breathing, and a sense of unease that feels identical to a stress response.",
      },
      {
        name: "Sugar and blood sugar crashes",
        reason: "When blood sugar drops rapidly after a sugar spike, your body releases stress hormones that can trigger anxiety symptoms. Eating regular meals with protein prevents these crashes.",
      },
      {
        name: "Alcohol",
        reason: "Alcohol may temporarily dull anxiety but disrupts sleep quality and depletes the nervous system, often making anxiety noticeably worse the following day.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Oatmeal with dried longan and honey, with herbal tea instead of coffee" },
      { time: "Lunch", suggestion: "Rice with steamed fish and cooked vegetables" },
      { time: "Snack", suggestion: "Lotus seed soup or a handful of pumpkin seeds" },
      { time: "Dinner", suggestion: "Chicken soup with root vegetables, eaten early and calmly without screens" },
    ],
    bonusTip: {
      title: "The 4-7-8 Breath with Tea",
      content: "Eastern wellness pairs food with mindful practices. Before drinking your calming tea, breathe in slowly for 4 counts, hold gently for 7, and exhale smoothly for 8. Repeat three times. This activates your parasympathetic nervous system and enhances the grounding effect of the food.",
    },
    faqs: [
      {
        q: "Can foods really help with anxiety?",
        a: "Foods alone may not eliminate anxiety, but they can significantly reduce its intensity and frequency. The connection between caffeine intake, blood sugar stability, and anxiety symptoms is well documented. Eastern wellness adds the dimension of body type to personalize food choices further.",
      },
      {
        q: "How is eating food different from taking supplements?",
        a: "Supplements isolate individual nutrients, while whole foods provide a complex matrix that your body processes holistically. Eastern wellness prefers food because it works gently and sustainably, and because the act of eating warm meals at regular times is itself calming to the system.",
      },
      {
        q: "When should I see a doctor about anxiety?",
        a: "If anxiety interferes with your daily life, sleep, work, or relationships, please consult a healthcare professional. Food choices are supportive but are not a replacement for professional care when anxiety is severe.",
      },
      {
        q: "How long until I notice a difference?",
        a: "Reducing caffeine can produce noticeable results within a few days. Deeper changes from nourishing foods like lotus seeds and bone broth typically take 2 to 4 weeks of consistent daily practice.",
      },
    ],
    relatedSymptomSlug: "why-do-i-feel-anxious",
    relatedTypeIds: ["qi_deficient", "yin_deficient"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-you-cant-lose-weight": {
    slug: "when-you-cant-lose-weight",
    metaTitle: "Can't Lose Weight? 5 Foods That May Help (It May Be Water)",
    metaDesc: "Dieting but the scale won't move? Your body might be holding water, not fat. Draining foods like adzuki beans and Job's tears may help release it. Free body type quiz.",
    h1: "5 Foods That May Help When You Can't Lose Weight",
    intro: "When the scale will not move despite eating carefully, Eastern wellness suggests looking at a different question entirely: is your body holding water and dampness rather than storing excess fat? The foods below help your body release retained fluid and support a more efficient metabolism.",
    quickAnswer: "If you cannot lose weight despite careful eating, foods that drain dampness like adzuki beans, Job's tears, and winter melon may help your body release retained water. Avoiding cold drinks and eating warm meals at regular times supports your metabolism from another angle.",
    foods: [
      {
        name: "Adzuki Beans",
        emoji: "🫘",
        whyItHelps: "Adzuki beans are one of the primary damp-draining foods in Eastern wellness. They help the body eliminate excess water through natural pathways and are often paired with Job's tears for maximum draining effect.",
        howToUse: "Cook into a soup or tea. Boil half a cup of adzuki beans in water for 30 minutes and sip the liquid throughout the day.",
        bestFor: "Phlegm-damp types",
      },
      {
        name: "Job's Tears (Coix Seed)",
        emoji: "🌾",
        whyItHelps: "Job's tears specifically targets dampness and fluid retention without depleting energy. It is a staple in Eastern wellness weight management because it helps the body release water while keeping you nourished.",
        howToUse: "Cook into porridge, or boil with adzuki beans for a draining tea that you can drink daily.",
        bestFor: "Phlegm-damp types",
      },
      {
        name: "Winter Melon",
        emoji: "🍈",
        whyItHelps: "Winter melon is cooling and naturally diuretic. It helps the body release retained water gently, without the harshness or mineral loss associated with pharmaceutical diuretics.",
        howToUse: "Slice into soups with ginger. The mild taste absorbs whatever flavors you cook it with.",
        bestFor: "Damp-heat types",
      },
      {
        name: "Hawthorn Tea",
        emoji: "🍵",
        whyItHelps: "Hawthorn is used in Eastern wellness to help the body digest fats and support metabolism. It has a tart, fruity taste and is commonly consumed as a tea after heavy meals in many Asian households.",
        howToUse: "Steep a small handful of dried hawthorn slices in hot water for 10 minutes. Drink after lunch.",
        bestFor: "Phlegm-damp types",
      },
      {
        name: "Brown Rice",
        emoji: "🍚",
        whyItHelps: "Brown rice provides steadier energy and more fiber than white rice. It supports regular digestion and helps prevent the energy crashes that lead to cravings and overeating later in the day.",
        howToUse: "Substitute for white rice in daily meals. Soak for 30 minutes before cooking for easier digestion.",
        bestFor: "All types",
      },
    ],
    avoidFoods: [
      {
        name: "Cold and iced drinks",
        reason: "Cold drinks slow your digestive metabolism over time. Eastern wellness views repeated cold intake as one of the primary causes of weight that will not respond to calorie reduction, because it weakens the system responsible for processing fluids.",
      },
      {
        name: "Sweets and pastries",
        reason: "Sugar directly creates dampness and phlegm in the body. For weight linked to fluid retention rather than fat, sugar is the main obstacle preventing your body from releasing what it holds.",
      },
      {
        name: "Regular dairy intake",
        reason: "Dairy is damp-forming and can contribute to the heavy, water-retained feeling that does not respond to portion control or exercise. Try reducing dairy for two weeks and observe.",
      },
      {
        name: "Late-night eating",
        reason: "Eating late forces your body to process food when it should be resting and repairing. The result is often poor digestion, increased water retention, and a heavier feeling the next morning.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Job's tears and adzuki bean porridge, warm" },
      { time: "Lunch", suggestion: "Brown rice with steamed vegetables and a small portion of fish" },
      { time: "Afternoon", suggestion: "Hawthorn tea after lunch to support fat digestion" },
      { time: "Dinner (before 7pm)", suggestion: "Winter melon soup with a small bowl of brown rice" },
    ],
    bonusTip: {
      title: "Switch to Warm Water",
      content: "Changing from cold or iced water to warm or room-temperature water is one of the simplest yet most impactful changes for damp-type weight. Warm water supports your digestion and metabolism. Cold water slows them down and contributes to the fluid retention you are trying to release.",
    },
    faqs: [
      {
        q: "Why can I not lose weight even with regular exercise?",
        a: "If your weight is linked to water retention and dampness rather than excess body fat, exercise alone may not address the root cause. Eastern wellness focuses on helping the body release retained fluids through specific foods, which can then make exercise more effective.",
      },
      {
        q: "Is this water weight or actual fat?",
        a: "It can be both. Eastern wellness does not separate them as strictly as Western nutrition does. The approach is to improve your body's overall fluid management and metabolism through food, which addresses both types of weight over time.",
      },
      {
        q: "How long until I see results?",
        a: "Many people notice reduced bloating and a lighter feeling within 1 to 2 weeks of cutting cold drinks and adding draining foods. More visible weight changes typically take 4 to 8 weeks of consistent practice.",
      },
      {
        q: "Should I still count calories?",
        a: "You can if it helps you stay mindful, but Eastern wellness prioritizes the quality, temperature, and timing of food over strict calorie counting. Eating warm, appropriate foods at regular times may naturally regulate your intake without the stress of counting.",
      },
    ],
    relatedSymptomSlug: "why-cant-i-lose-weight",
    relatedTypeIds: ["phlegm_damp", "yang_deficient"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-your-skin-is-dry": {
    slug: "when-your-skin-is-dry",
    metaTitle: "Dry Skin That Lotion Won't Fix? 5 Foods for Internal Moisture",
    metaDesc: "Moisturizing every day and still flaky? Your body may lack internal moisture. Tremella, black sesame, and pears hydrate from within in ways lotion cannot. Free quiz.",
    h1: "5 Foods That May Help When Your Skin Is Always Dry",
    intro: "Moisturizers help temporarily, but if your skin stays dry no matter how much lotion you apply, the issue is likely internal. Eastern wellness often links chronic dry skin to a lack of internal moisture that comes from specific nourishing foods, not from drinking more water alone.",
    quickAnswer: "If your skin is persistently dry, moistening foods like tremella soup, black sesame paste, and steamed pears may help hydrate from within. These foods provide a type of internal moisture that plain water and topical lotion cannot replicate.",
    foods: [
      {
        name: "Tremella Mushroom",
        emoji: "🍄",
        whyItHelps: "Tremella is sometimes called the beauty mushroom because of its remarkable moisturizing properties. Eastern wellness considers it one of the single best foods for hydrating the skin from within, and it is a staple in many traditional beauty recipes.",
        howToUse: "Soak dried tremella for 1 hour, then cook with goji berries and rock sugar into a soft, gelatinous soup. Eat 3 times per week.",
        bestFor: "Yin-deficient types",
      },
      {
        name: "Black Sesame",
        emoji: "🟤",
        whyItHelps: "Black sesame seeds are rich in oils that nourish both skin and hair. Eastern wellness views them as deeply moisturizing and supportive of healthy aging, and they are a common ingredient in traditional beauty foods.",
        howToUse: "Toast lightly and grind into a paste. Spread on toast in the morning, or stir a spoonful into warm milk or porridge.",
        bestFor: "Blood and yin-deficient types",
      },
      {
        name: "Pear",
        emoji: "🍐",
        whyItHelps: "Pears are moistening and cooling in Eastern wellness. They provide hydration in a form that your body can direct to the skin rather than processing as waste, which is why they are recommended specifically for dryness.",
        howToUse: "Eat raw at room temperature in summer, or steam with rock sugar and goji berries in winter for a warming moistening dessert.",
        bestFor: "Yin-deficient types",
      },
      {
        name: "Avocado",
        emoji: "🥑",
        whyItHelps: "Avocado is not traditional in Eastern wellness, but its healthy fat content aligns perfectly with the principle of moistening foods. It provides building blocks for skin that can retain hydration naturally.",
        howToUse: "Eat half an avocado daily, mashed on whole wheat toast or sliced into salads.",
        bestFor: "All types",
      },
      {
        name: "Duck",
        emoji: "🦆",
        whyItHelps: "Duck is considered moistening in Eastern wellness, unlike chicken which is more neutral in nature. For dry skin linked to internal dryness, duck provides moisture along with quality protein that supports skin repair.",
        howToUse: "Roast or braise duck with ginger and red dates. Eat in moderation, once or twice per week.",
        bestFor: "Yin-deficient types",
      },
    ],
    avoidFoods: [
      {
        name: "Spicy, drying foods",
        reason: "Spicy foods like chili peppers are heating and drying by nature. If your skin is already dry, they pull moisture from your body and can make flakiness worse over time.",
      },
      {
        name: "Excessive coffee",
        reason: "Coffee is diuretic and drying. Multiple cups per day can contribute to systemic dryness that shows up first on your skin, regardless of how much water you drink.",
      },
      {
        name: "Alcohol",
        reason: "Alcohol dehydrates the body and generates internal heat. For dry skin, regular alcohol intake works directly against the moistening foods you are trying to add to your diet.",
      },
      {
        name: "Dry roasted snacks",
        reason: "Crackers, chips, and dry-roasted nuts are physically and energetically dry. Eastern wellness recommends soups and stews over dry snacks for people whose skin needs internal moisture.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Oatmeal with a spoonful of black sesame paste and a steamed pear" },
      { time: "Lunch", suggestion: "Duck soup with tremella and goji berries" },
      { time: "Snack", suggestion: "Half an avocado on toast with a cup of warm water" },
      { time: "Dinner", suggestion: "Steamed fish with vegetables and a side of rice" },
    ],
    bonusTip: {
      title: "Internal Moisture Is Not the Same as Drinking Water",
      content: "Drinking more water helps but is not the same as eating moistening foods. Eastern wellness distinguishes between water that passes quickly through the body and moisture that is retained and directed to the skin and tissues. Foods like tremella and pear contain compounds that help your body hold onto the second kind.",
    },
    faqs: [
      {
        q: "I drink lots of water but my skin is still dry. Why?",
        a: "Eastern wellness distinguishes between water that passes through the body quickly and moisture that stays in your tissues. Foods like tremella and pear contain gelatinous compounds that help your body retain and direct moisture to the skin, which plain water cannot do.",
      },
      {
        q: "How long until my skin improves with food changes?",
        a: "Skin renews itself roughly every 28 days. With consistent daily intake of moistening foods, you may notice improvement within one full skin cycle. The first changes are usually reduced tightness and flakiness.",
      },
      {
        q: "Should I stop using moisturizer?",
        a: "No. External skincare and internal nutrition work together as a team. The goal is to need less lotion over time as your skin becomes better hydrated from within. Continue your normal skincare routine while adding these foods.",
      },
      {
        q: "Are fish oil capsules the same as eating whole fish?",
        a: "Fish oil provides concentrated omega-3s but lacks the full matrix of nutrients and moisture found in whole fish. Eastern wellness prefers food over isolated supplements when possible, as the whole food offers benefits beyond any single extract.",
      },
    ],
    relatedSymptomSlug: "why-is-my-skin-so-dry",
    relatedTypeIds: ["yin_deficient", "blood_stasis"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-you-have-acid-reflux": {
    slug: "when-you-have-acid-reflux",
    metaTitle: "Acid Reflux? 5 Cooling Foods That May Calm the Burn Naturally",
    metaDesc: "Burning chest after meals? Internal heat may be pushing acid upward. Cooling foods like mung bean soup, oatmeal, and banana may help where antacids only mask it. Free quiz.",
    h1: "5 Foods That May Help When You Have Acid Reflux",
    intro: "That burning sensation rising from your stomach is more than just uncomfortable. Eastern wellness often views acid reflux as internal heat pushing upward when it should be moving down. The foods below are chosen for their cooling, soothing properties that help redirect that energy.",
    quickAnswer: "If you have acid reflux, cooling and soothing foods like mung bean soup, oatmeal, and ripe banana may help calm the heat rising from your stomach. Eating earlier and lighter dinners while avoiding spicy food can bring noticeable relief within days.",
    foods: [
      {
        name: "Mung Beans",
        emoji: "🫘",
        whyItHelps: "Mung beans are one of the most cooling foods in the Eastern wellness system. They help clear stomach heat, which is often identified as the root cause of acid reflux in this tradition.",
        howToUse: "Boil mung beans in water for 20 minutes and drink the green liquid as a cooling tea. Or cook into a light soup.",
        bestFor: "Damp-heat types",
      },
      {
        name: "Oatmeal",
        emoji: "🥣",
        whyItHelps: "Oatmeal is bland, gently warming without being hot, and easy on an irritated digestive lining. It absorbs excess stomach acid and provides a soothing start to the day without triggering reflux.",
        howToUse: "Cook with water (not milk if dairy-sensitive) and a drizzle of honey. Avoid adding nuts or dried fruits if they trigger symptoms.",
        bestFor: "All types",
      },
      {
        name: "Banana",
        emoji: "🍌",
        whyItHelps: "Bananas are soft, moistening, and coat the digestive tract gently. Eastern wellness considers them cooling and soothing, which is exactly what an irritated stomach needs.",
        howToUse: "Eat a ripe banana between meals as a snack, or blend into a simple smoothie with almond milk.",
        bestFor: "All types",
      },
      {
        name: "Lotus Root",
        emoji: "🪷",
        whyItHelps: "Lotus root is cooling and soothing to the digestive system. It has a crisp texture when fresh and becomes soft and starchy when cooked, making it versatile for different preferences.",
        howToUse: "Slice into soups, or juice fresh lotus root for a concentrated cooling drink if available.",
        bestFor: "Heat-type constitutions",
      },
      {
        name: "Plain Rice Porridge",
        emoji: "🍚",
        whyItHelps: "Plain white rice cooked as congee is bland, neutral, and extremely easy on an irritated stomach. It is one of the safest and most comforting foods during an active acid reflux flare-up.",
        howToUse: "Cook 1 part white rice in 8 parts water on low heat for 1 to 2 hours. Add nothing but a pinch of salt.",
        bestFor: "All types",
      },
    ],
    avoidFoods: [
      {
        name: "Spicy food",
        reason: "Spicy food directly adds heat to a system that is already running too hot. For acid reflux, this is the very first category to eliminate. Even mild spices can trigger a flare-up in sensitive people.",
      },
      {
        name: "Coffee",
        reason: "Coffee is acidic and stimulating. It increases stomach acid production and can relax the muscular valve that should keep that acid from rising into the esophagus.",
      },
      {
        name: "Greasy and fried food",
        reason: "Greasy foods take much longer to digest and sit heavy in the stomach. The longer food stays in the stomach, the greater the chance of acid backing up into the esophagus.",
      },
      {
        name: "Late dinners close to bedtime",
        reason: "Lying down with a full stomach lets gravity work against you. Acid can flow upward freely when you are horizontal. Eating at least 3 hours before lying down is one of the most effective changes you can make.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Oatmeal with banana and a cup of mung bean water" },
      { time: "Lunch", suggestion: "Rice porridge with steamed vegetables and white fish" },
      { time: "Snack", suggestion: "A ripe banana" },
      { time: "Dinner (by 6pm)", suggestion: "Lotus root soup with plain rice, at least 3 hours before bed" },
    ],
    bonusTip: {
      title: "Raise the Head of Your Bed",
      content: "Raise the head end of your bed by 4 to 6 inches using blocks under the legs or a wedge pillow. This uses gravity to keep stomach acid where it belongs while you sleep. Combined with earlier dinners, this simple physical change can dramatically reduce nighttime reflux without any medication.",
    },
    faqs: [
      {
        q: "Why do I always get acid reflux at night?",
        a: "Nighttime reflux is usually caused by eating too close to bedtime. When you lie down with food still in your stomach, acid can flow upward without gravity to hold it down. Finishing dinner by 6pm and avoiding all snacks afterward is the first and most effective fix.",
      },
      {
        q: "What about apple cider vinegar for reflux?",
        a: "Some people report relief from very dilute apple cider vinegar, but Eastern wellness would consider it too sour and potentially irritating for a stomach that is already overheated. If you want to try it, use extreme dilution and pay close attention to whether symptoms improve or worsen.",
      },
      {
        q: "Is acid reflux caused by too much stomach acid?",
        a: "It can be, but Eastern wellness views it more as heat and energy moving in the wrong direction. The goal is not only to reduce acid but to help your digestive energy flow downward as it naturally should, which is why both food choices and timing matter.",
      },
      {
        q: "When should I see a doctor about reflux?",
        a: "If reflux occurs more than twice a week despite dietary changes, or if you experience difficulty swallowing, unintended weight loss, or chest pain, please consult a doctor. Persistent reflux can damage the esophagus over time if left unaddressed.",
      },
    ],
    relatedSymptomSlug: "why-do-i-have-acid-reflux",
    relatedTypeIds: ["damp_heat", "qi_stagnant"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },

  "when-youre-irritable": {
    slug: "when-youre-irritable",
    metaTitle: "Always Irritable? 5 Foods That May Help You Stay Calm Naturally",
    metaDesc: "Snapping at everyone and everything annoys you? Your body type might be behind the short fuse. Chrysanthemum tea, citrus peel, and mint may help. Free body type quiz.",
    h1: "5 Foods That May Help When You're Always Irritable",
    intro: "When everything gets on your nerves and patience feels impossible, Eastern wellness looks to the liver rather than the mind. In this tradition, irritability often stems from energy that should flow smoothly getting stuck and creating internal pressure that leaks out as anger and frustration.",
    quickAnswer: "If you feel constantly irritable, foods that help energy flow smoothly like chrysanthemum tea, aged citrus peel, and mint may relieve internal pressure. Sour flavors and regular meal timing are particularly important for keeping the system that governs mood running smoothly.",
    foods: [
      {
        name: "Chrysanthemum Tea",
        emoji: "🌼",
        whyItHelps: "Chrysanthemum is the classic Eastern wellness tea for irritability and tension. It has a light, floral taste and is said to cool and soothe the system most associated with mood and emotional regulation.",
        howToUse: "Steep a small handful of dried chrysanthemum flowers in hot water for 5 minutes. Drink 2 to 3 cups daily.",
        bestFor: "Heat and qi-stagnant types",
      },
      {
        name: "Aged Tangerine Peel (Chenpi)",
        emoji: "🍊",
        whyItHelps: "Chenpi helps energy move in the right direction. For irritability linked to stuck energy creating pressure, its aromatic quality helps release that pressure and restore a sense of internal flow.",
        howToUse: "Add a small piece to hot water for tea, or cook into porridge and savory dishes for a subtle citrus note.",
        bestFor: "Qi-stagnant types",
      },
      {
        name: "Warm Lemon Water",
        emoji: "🍋",
        whyItHelps: "Sour flavors are associated with the system that governs mood in Eastern wellness. Warm lemon water provides a gentle sour taste that supports smooth energy flow first thing in the morning.",
        howToUse: "Squeeze half a lemon into warm (not hot) water. Drink on an empty stomach before breakfast.",
        bestFor: "All types",
      },
      {
        name: "Buddha's Hand Citron",
        emoji: "🍈",
        whyItHelps: "Buddha's hand is an unusual citrus fruit used specifically in Eastern wellness for moving stuck energy. It has a powerful fragrant aroma and almost no bitter pith, making it one of the most pleasant mood-supporting foods available.",
        howToUse: "Slice thinly and steep as a tea, or candy the peel for a sweet treat. Available at Asian markets seasonally.",
        bestFor: "Qi-stagnant types",
      },
      {
        name: "Fresh Mint Tea",
        emoji: "🌿",
        whyItHelps: "Mint has a cooling, moving quality that helps release tension and pressure. For irritability that feels like something building up inside, mint tea offers gentle, quick relief without any drowsiness.",
        howToUse: "Steep fresh or dried mint leaves in hot water for 5 minutes. Drink after meals or whenever tension builds.",
        bestFor: "Heat types",
      },
    ],
    avoidFoods: [
      {
        name: "Alcohol",
        reason: "Alcohol creates heat and dampness that worsen internal congestion. It may feel relaxing in the moment but often increases irritability the next day, creating a cycle that is hard to break.",
      },
      {
        name: "Spicy and greasy food together",
        reason: "The combination of spicy heat and heavy grease is particularly difficult for the system that governs mood. It adds both heat and burden, making the internal congestion worse.",
      },
      {
        name: "Skipping meals",
        reason: "Irregular eating disrupts the smooth flow of energy that Eastern wellness associates with emotional balance. Eating at consistent times each day is surprisingly important for maintaining an even mood.",
      },
      {
        name: "More than one or two coffees per day",
        reason: "Caffeine overstimulates the nervous system and can make irritability feel more intense and harder to control. If you notice worsening mood after coffee, try cutting back gradually.",
      },
    ],
    dailyGuide: [
      { time: "Morning", suggestion: "Warm lemon water, then oatmeal with a cup of chrysanthemum tea" },
      { time: "Lunch", suggestion: "Rice with steamed chicken and cooked leafy greens" },
      { time: "Snack", suggestion: "Chenpi tea and a few fresh kumquats if available" },
      { time: "Dinner", suggestion: "Light fish soup with fresh mint, eaten calmly and early" },
    ],
    bonusTip: {
      title: "Add Something Sour to Every Meal",
      content: "Eastern wellness associates sour flavors with the system that governs the smooth flow of energy and emotions. Try adding a small amount of sour taste to each meal: a squeeze of lemon, a splash of rice vinegar, or a few slices of pickle. This simple daily habit gently supports the system most involved in irritability.",
    },
    faqs: [
      {
        q: "Can food really change how irritable I feel?",
        a: "Food is not the only factor in mood, but Eastern wellness has long observed a connection between what you eat and how you feel emotionally. People who remove alcohol and add mood-supporting foods like chrysanthemum tea often report feeling more even-tempered within two to three weeks.",
      },
      {
        q: "Why are sour foods recommended for irritability specifically?",
        a: "In Eastern wellness theory, each flavor corresponds to an organ system. Sour flavors are associated with the liver, which governs the smooth flow of energy and emotions. Gentle sour tastes help keep that system functioning smoothly, which directly affects mood stability.",
      },
      {
        q: "How is this different from just managing stress?",
        a: "Stress management and food choices work together rather than separately. Eastern wellness sees stress and diet as two inputs to the same system. Addressing both at the same time tends to give better and longer-lasting results than focusing on either one alone.",
      },
      {
        q: "Do I need to give up coffee completely?",
        a: "Not necessarily. One cup in the morning is usually fine for most people. If you notice your irritability worsening after coffee, try switching to chrysanthemum or green tea for one week and observe the difference. Your body will tell you fairly quickly.",
      },
    ],
    relatedSymptomSlug: "why-am-i-so-irritable",
    relatedTypeIds: ["qi_stagnant"],
    readTime: "7 min",
    datePublished: "2026-06-17",
  },
}

export const FOOD_COMBO_SLUGS = Object.keys(FOOD_COMBO_PAGES)
