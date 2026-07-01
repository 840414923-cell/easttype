export interface SolutionIngredient {
  nameEn: string
  nameZh: string
  amount: string
  role: string
  why: string
  herbSlug?: string
}

export interface SolutionFormula {
  slug: string
  nameEn: string
  namePinyin: string
  nameZh: string
  classicalSource: string
  classicalSourceEn: string
  bodyType: string
  bodyTypeSlug: string
  description: string
  ingredients: SolutionIngredient[]
  preparationSteps: string[]
  prepTime: string
  yield: string
  howToTake: string
  duration: string
  tasteProfile: string
  cautions: string[]
  image: string
}

export interface Solution {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  intro: string
  tcmVsModern: {
    aspect: string
    westernView: string
    tcmView: string
  }[]
  bodyTypeExplanations: {
    bodyType: string
    bodyTypeSlug: string
    tcmExplanation: string
    modernExplanation: string
    symptoms: string[]
    metaphor: string
  }[]
  formulas: SolutionFormula[]
  faqs: { q: string; a: string }[]
}

export const SOLUTIONS: Record<string, Solution> = {
  "chinese-medicine-weight-loss": {
    slug: "chinese-medicine-weight-loss",
    title: "Chinese Medicine Weight Loss: 3 Herbal Teas by Body Type",
    metaTitle: "Chinese Medicine Weight Loss: 3 Herbal Teas by Body Type",
    metaDescription: "Three Chinese medicine herbal tea formulas for weight loss, each suited to a different body type. Learn why TCM sees weight differently and find your match.",
    heroImage: "/images/solutions/weight-loss-hero.jpg",
    intro: "Chinese medicine approaches weight loss by restoring your body's natural fluid metabolism rather than restricting calories. Three common body types may respond to different herbal tea formulas, each targeting a distinct root cause of weight gain.",
    tcmVsModern: [
      {
        aspect: "Root cause of weight gain",
        westernView: "Calorie intake exceeds energy expenditure",
        tcmView: "Spleen cannot transform fluids, leading to dampness accumulating as fat and phlegm",
      },
      {
        aspect: "View of body fat",
        westernView: "Stored excess energy from unused calories",
        tcmView: "Accumulated dampness and phlegm that the body failed to clear",
      },
      {
        aspect: "Primary solution",
        westernView: "Reduce intake and increase exercise",
        tcmView: "Restore Spleen function to transform and transport fluids efficiently",
      },
      {
        aspect: "Role of digestion",
        westernView: "Breaks down food into absorbable nutrients",
        tcmView: "Spleen transforms food into Qi and Blood, Kidney provides metabolic fire",
      },
      {
        aspect: "Why water retention happens",
        westernView: "Sodium imbalance or kidney function issues",
        tcmView: "Kidney and Spleen Yang deficiency fails to vaporize and distribute fluids",
      },
      {
        aspect: "Emotional eating",
        westernView: "Psychological response to stress",
        tcmView: "Liver Qi stagnation disrupts digestive flow, creating craving cycles",
      },
    ],
    bodyTypeExplanations: [
      {
        bodyType: "Phlegm Damp",
        bodyTypeSlug: "phlegm_damp",
        tcmExplanation: "The Spleen is too weak to transform fluids. Instead of being processed and eliminated, fluids accumulate and congeal into phlegm and dampness. Over time, this manifests as weight gain, oiliness, and a feeling of heaviness.",
        modernExplanation: "Your lymphatic drainage and fluid metabolism run slowly. Water accumulates in tissues, creating a puffy, heavy sensation rather than lean definition.",
        symptoms: ["Heavy, sluggish feeling", "Oily skin and hair", "Thick tongue coating", "Snoring or loud breathing", "Feeling worse in humid weather"],
        metaphor: "Imagine a kitchen with a clogged drain. No matter how little water you pour, it still backs up. The solution is not pouring less water, but fixing the drain.",
      },
      {
        bodyType: "Spleen Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        tcmExplanation: "The Spleen lacks the energy to transform food into usable Qi. Food enters but is not efficiently processed, leading to accumulation rather than nourishment. You feel tired because your body cannot extract energy from what you eat.",
        modernExplanation: "Your digestive system is underpowered. You absorb nutrients inefficiently, so you feel hungry and tired despite eating. Your body stores what it cannot process.",
        symptoms: ["Tired after eating", "Bloating and gas", "Loose stools", "Strong sweet cravings", "Weak voice and low stamina"],
        metaphor: "Think of a car engine running on low voltage. The fuel is there, but it cannot burn efficiently. More fuel does not help. You need to fix the electrical system first.",
      },
      {
        bodyType: "Qi Stagnant",
        bodyTypeSlug: "qi_stagnant",
        tcmExplanation: "When emotions and stress cause Liver Qi to stagnate, the free flow of energy throughout the body is blocked. Digestion slows, frustration builds, and eating becomes a way to release pent-up tension.",
        modernExplanation: "Chronic stress disrupts the gut-brain connection. Cortisol spikes drive cravings, and tension in the digestive tract causes bloating and irregular eating patterns.",
        symptoms: ["Irritability and mood swings", "Stress-driven cravings", "Bloating that improves with movement", "Sighing frequently", "Symptoms worsen before periods"],
        metaphor: "Picture a traffic jam on a highway. The road is fine, the cars are fine, but a single bottleneck stops everything from moving. Relieve the bottleneck and flow returns.",
      },
    ],
    formulas: [
      {
        slug: "lotus-leaf-hawthorn-tea",
        nameEn: "Lotus Leaf & Hawthorn Metabolism Tea",
        namePinyin: "He Ye Shan Zha Cha",
        nameZh: "\u8377\u53f6\u5c71\u69d2\u8336",
        classicalSource: "\u300a\u4e39\u6eaa\u5fc3\u6cd5\u300b\u4fdd\u548c\u4e38\u52a0\u51cf",
        classicalSourceEn: "Adapted from Bao He Wan (Preserve Harmony Pill) in Zhu Danxi's Dan Xi Xin Fa (1481)",
        bodyType: "Phlegm Damp",
        bodyTypeSlug: "phlegm_damp",
        description: "This tea targets the root pattern of Phlegm Damp weight gain. Lotus leaf drains dampness and raises clear Yang, while hawthorn helps the body break down and process heavy, fatty foods. Tangerine peel keeps Qi moving so fluids do not re-accumulate.",
        ingredients: [
          {
            nameEn: "Dried Lotus Leaf",
            nameZh: "\u8377\u53f6",
            amount: "5g (about 1 large piece)",
            role: "Primary",
            why: "Drains dampness and helps the body vaporize retained fluids rather than storing them.",
            herbSlug: "he-ye-cha-he-ye-cha",
          },
          {
            nameEn: "Hawthorn Berry",
            nameZh: "\u5c71\u69d2",
            amount: "10g (about 8-10 dried berries)",
            role: "Support",
            why: "Helps digest fats and heavy foods. In TCM, hawthorn is the go-to herb for food stagnation, especially from meat.",
            herbSlug: "shan-zha-shan-zha",
          },
          {
            nameEn: "Aged Tangerine Peel",
            nameZh: "\u9648\u76ae",
            amount: "3g (about 1 small piece)",
            role: "Harmony",
            why: "Moves Qi and transforms phlegm so fluids flow rather than congeal.",
            herbSlug: "dried-tangerine-chen-pi",
          },
        ],
        preparationSteps: [
          "Rinse all ingredients briefly under cool running water.",
          "Place them in a small pot with 500ml (2 cups) of fresh water.",
          "Bring to a boil over medium heat (about 5 minutes).",
          "Reduce to low heat, cover, and simmer for 10 minutes.",
          "Turn off heat and let sit for 2 minutes.",
          "Strain into a cup. The tea should be a light amber color.",
        ],
        prepTime: "20 minutes",
        yield: "500ml (2 cups)",
        howToTake: "Drink one cup (250ml) warm, about 30 minutes after lunch and dinner. The warmth helps the herbs work with your digestive cycle.",
        duration: "Drink daily for 4 consecutive weeks, then pause for 1 full week before resuming. Most people notice lighter digestion and less bloating within 2-3 weeks. Changes in body composition typically require 6-8 weeks of consistent use combined with mindful eating habits.",
        tasteProfile: "Slightly tart and refreshing, with a clean, light finish. The hawthorn adds a fruity sourness while lotus leaf contributes a mild green taste.",
        cautions: [
          "Not suitable during pregnancy. Hawthorn may stimulate uterine contractions.",
          "Avoid if you have stomach ulcers or acid reflux. Hawthorn increases stomach acid.",
          "Consult your doctor if you take blood-thinning medications. Hawthorn may enhance their effect.",
          "Discontinue during acute colds, flu, or fever.",
          "This formula is cooling. If you already feel cold most of the time, use it every other day rather than daily.",
        ],
        image: "/images/solutions/formula-lotus-hawthorn.jpg",
      },
      {
        slug: "coix-seed-poria-soup",
        nameEn: "Coix Seed & Poria Spleen Support Soup",
        namePinyin: "Yi Yi Ren Fu Ling Tang",
        nameZh: "\u858f\u82e1\u4ec1\u832f\u82d5\u6e64",
        classicalSource: "\u300a\u592a\u5e73\u60e0\u6c11\u548c\u5242\u5c40\u65b9\u300b\u53c2\u82d5\u767d\u672f\u6563\u7b80\u5316",
        classicalSourceEn: "Adapted from Shen Ling Bai Zhu San in Tai Ping Hui Min He Ji Ju Fang (1085)",
        bodyType: "Spleen Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        description: "This gentle soup rebuilds the Spleen's ability to transform food and drain fluids. Coix seed and poria work together to remove dampness without depleting energy, while Chinese yam and red dates nourish the Qi that your digestive system needs to function.",
        ingredients: [
          {
            nameEn: "Coix Seed (Job's Tears)",
            nameZh: "\u858f\u82e1\u4ec1",
            amount: "30g (about 3 tablespoons)",
            role: "Primary",
            why: "Strengthens the Spleen and drains dampness. A staple grain in Chinese cooking, available at Asian grocery stores.",
            herbSlug: "coix-seed-yi-yi-ren",
          },
          {
            nameEn: "Poria Mushroom",
            nameZh: "\u832f\u82d5",
            amount: "15g (about 4-5 small pieces)",
            role: "Support",
            why: "Drains dampness through urination while calming the mind. Often sold dried in slices.",
            herbSlug: "poria-fu-ling",
          },
          {
            nameEn: "Chinese Yam",
            nameZh: "\u5c71\u836f",
            amount: "20g (a 5cm piece, fresh or dried)",
            role: "Support",
            why: "Strengthens the Spleen and gently nourishes Qi and Yin. Available fresh at Asian markets or dried online.",
            herbSlug: "chinese-yam-shan-yao",
          },
          {
            nameEn: "Red Dates (Jujube)",
            nameZh: "\u5927\u67a3",
            amount: "3 pieces, pitted",
            role: "Harmony",
            why: "Nourishes blood and harmonizes the formula. Adds natural sweetness.",
            herbSlug: "jujube-da-zao",
          },
        ],
        preparationSteps: [
          "Soak coix seeds in water for 2 hours (or overnight for best results). This softens them and improves digestibility.",
          "If using dried poria, rinse it clean. If using fresh Chinese yam, peel and cut into bite-sized pieces.",
          "Place all ingredients in a pot with 800ml (3.5 cups) of water.",
          "Bring to a boil over medium-high heat (about 8 minutes).",
          "Reduce to low heat, cover, and simmer for 40 minutes until coix seeds are soft and opened.",
          "Remove red date pits if not done earlier. Serve warm as a light soup or congee.",
        ],
        prepTime: "50 minutes (includes soaking)",
        yield: "2 servings",
        howToTake: "Eat one serving (about 400ml) warm, once daily. Best in the morning as a nourishing breakfast or as a light dinner replacement.",
        duration: "Consume 4-5 times per week for up to 3 months. This is a gentle, nourishing formula that works slowly. Expect improved digestion and steadier energy within the first 2 weeks. Weight changes are gradual and typically become noticeable after 4-6 weeks.",
        tasteProfile: "Mild, slightly sweet, and comforting. The red dates provide natural sweetness while coix seeds have a pleasant, chewy texture.",
        cautions: [
          "Generally very safe for long-term use by most people.",
          "If you experience increased urination, reduce to 3 times per week.",
          "Not recommended during the first trimester of pregnancy due to traditional cautions about coix seed.",
          "Best avoided during acute colds with chills and clear mucus.",
          "If using fresh Chinese yam, wear gloves while peeling. Raw yam sap can cause skin irritation in some people.",
        ],
        image: "/images/solutions/formula-coix-poria.jpg",
      },
      {
        slug: "rose-cassia-tea",
        nameEn: "Rose & Cassia Seed Stress-Relief Tea",
        namePinyin: "Mei Gui Hua Jue Ming Zi Cha",
        nameZh: "\u73ab\u7470\u82b1\u51b3\u660e\u5b50\u8336",
        classicalSource: "\u300a\u592a\u5e73\u60e0\u6c11\u548c\u5242\u5c40\u65b9\u300b\u900d\u9065\u6563\u7b80\u5316",
        classicalSourceEn: "Adapted from Xiao Yao San (Free and Easy Wanderer Powder) in Tai Ping Hui Min He Ji Ju Fang (1085)",
        bodyType: "Qi Stagnant",
        bodyTypeSlug: "qi_stagnant",
        description: "When stress and frustration block the free flow of Qi, digestion slows and emotional eating takes over. Rose soothes the Liver and moves stuck energy, cassia seed clears heat and supports the bowel, and tangerine peel keeps everything flowing smoothly.",
        ingredients: [
          {
            nameEn: "Dried Rose Buds",
            nameZh: "\u73ab\u7470\u82b1",
            amount: "5g (about 6-8 buds)",
            role: "Primary",
            why: "Soothes the Liver, moves Qi, and lifts the mood. The signature herb for stress-related patterns in TCM.",
            herbSlug: "rose-mei-gui",
          },
          {
            nameEn: "Cassia Seed",
            nameZh: "\u51b3\u660e\u5b50",
            amount: "10g (about 1 tablespoon)",
            role: "Support",
            why: "Clears Liver heat and supports healthy bowel function. Also traditionally used to support vision.",
            herbSlug: "jue-ming-zi-jue-ming-zi",
          },
          {
            nameEn: "Aged Tangerine Peel",
            nameZh: "\u9648\u76ae",
            amount: "3g (about 1 small piece)",
            role: "Harmony",
            why: "Regulates Qi and prevents the liver-targeting herbs from causing digestive stagnation.",
            herbSlug: "dried-tangerine-chen-pi",
          },
        ],
        preparationSteps: [
          "Lightly crush cassia seeds with the back of a spoon or in a mortar. This releases their active compounds.",
          "Place all ingredients in a teapot or a large heatproof mug.",
          "Pour 400ml (1.5 cups) of water that has just come off the boil over the ingredients.",
          "Cover and let steep for 5-7 minutes. Do not boil, as high heat reduces the delicate rose aroma.",
          "Strain and serve warm. The tea should be a light golden-amber with a visible floral scent.",
        ],
        prepTime: "10 minutes",
        yield: "400ml (1.5 cups)",
        howToTake: "Drink 1-2 cups daily. This tea is especially helpful during stressful periods or 20 minutes before meals to reduce stress-driven cravings.",
        duration: "Use daily for 3-4 weeks, then reassess. Many people find it helpful to keep this tea on hand for particularly stressful days rather than drinking it constantly. Long-term daily use beyond 2 months is not recommended without professional guidance.",
        tasteProfile: "Floral and aromatic from the rose, with a slightly nutty undertone from cassia seeds and a hint of citrus from tangerine peel. Naturally caffeine-free.",
        cautions: [
          "Cassia seed may cause loose stools in sensitive individuals. Start with half the amount and increase gradually.",
          "Not suitable during pregnancy.",
          "Avoid if you have chronic diarrhea or loose stools.",
          "Cassia seed may lower blood pressure. Monitor closely if you take blood pressure medications.",
          "If you experience drowsiness or low blood pressure symptoms, reduce the frequency.",
        ],
        image: "/images/solutions/formula-rose-cassia.jpg",
      },
    ],
    faqs: [
      {
        q: "Can these teas replace diet and exercise?",
        a: "No. These formulas support your body's internal metabolism and fluid balance, but they are not standalone weight loss solutions. Think of them as helping your body function more efficiently so that your diet and exercise efforts produce better results. A person who drinks herbal tea but eats heavily processed food and never moves will see little change.",
      },
      {
        q: "Which formula should I start with?",
        a: "It depends on your body type. If you feel heavy, sluggish, and carry weight mostly around the middle, Formula 1 (Lotus Leaf Tea) may suit you. If you feel tired after eating, bloated, and crave sweets, Formula 2 (Coix Seed Soup) is gentler and better for weak digestion. If stress drives your eating and you feel frustrated and bloated, Formula 3 (Rose Tea) targets the emotional root. The most reliable way to choose is to take our free body type quiz.",
      },
      {
        q: "Are these ingredients easy to find?",
        a: "Yes. All ingredients are food-grade items commonly sold at Asian grocery stores, Chinese herbal shops, and online retailers like Amazon. Coix seed (Job's tears), red dates, and hawthorn are also found in some mainstream supermarkets. None of these herbs require a prescription.",
      },
      {
        q: "How long until I see results?",
        a: "Chinese medicine works gradually by supporting your body's own processes. Most people notice improved digestion, less bloating, and steadier energy within 2-3 weeks. Visible changes in body composition typically require 6-8 weeks of consistent use combined with mindful eating. The goal is sustainable change, not rapid weight loss that rebounds.",
      },
      {
        q: "Can I drink more than one formula at the same time?",
        a: "You can, but it is usually not necessary. Each formula targets a specific body type pattern. Using the one that matches your pattern is more effective than combining all three. If your pattern is mixed or unclear, take the free body type quiz first to get a personalized recommendation.",
      },
    ],
  },
  "chinese-medicine-for-energy": {
    slug: "chinese-medicine-for-energy",
    title: "Chinese Medicine for Energy: 3 Herbal Teas by Body Type",
    metaTitle: "Chinese Medicine for Energy: 3 Herbal Teas by Body Type",
    metaDescription: "Three Chinese medicine herbal tea formulas for chronic fatigue and low energy, each suited to a different body type. Learn why TCM sees tiredness differently and find your match.",
    heroImage: "/images/solutions/energy-hero.png",
    intro: "Chinese medicine does not treat fatigue with stimulants. Instead, it identifies which type of energy your body is lacking and uses specific herbs to rebuild it. Three common body types may respond to different herbal tea formulas, each targeting a distinct root cause of chronic tiredness.",
    tcmVsModern: [
      { aspect: "Root cause of fatigue", westernView: "Poor sleep, nutrient deficiencies, thyroid imbalance, or stress", tcmView: "Qi Deficiency, Yang Deficiency, or Yin Deficiency depending on which energy system is depleted" },
      { aspect: "View of energy", westernView: "Calories converted to ATP through cellular metabolism", tcmView: "Qi is the vital force that powers digestion, circulation, and thinking. It must be generated daily from food and rest" },
      { aspect: "Primary solution", westernView: "Caffeine, B vitamins, iron supplements, or more sleep", tcmView: "Strengthen the Spleen to produce more Qi, warm the Kidney to sustain Yang, or nourish Yin to prevent internal heat from burning out" },
      { aspect: "Role of caffeine", westernView: "A useful stimulant that blocks adenosine receptors", tcmView: "Borrows energy from tomorrow to spend today. Long-term use deepens Qi deficiency without replenishing the source" },
      { aspect: "Role of digestion", westernView: "Breaks down food into absorbable nutrients", tcmView: "The Spleen transforms food into Qi and Blood. A weak Spleen means less energy no matter how much you eat" },
      { aspect: "Why afternoon crashes happen", westernView: "Blood sugar dip after a high-carb meal", tcmView: "Spleen Qi is too weak to sustain energy output through the afternoon. The body literally runs out of fuel between 1 and 3 PM" },
    ],
    bodyTypeExplanations: [
      {
        bodyType: "Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        tcmExplanation: "The Spleen is too weak to transform food into usable Qi. You eat, but your body cannot efficiently convert it into energy. The result is a battery that never fully charges, no matter how much you rest or eat.",
        modernExplanation: "Your digestive system is underpowered. You absorb nutrients inefficiently, so you feel tired despite eating well. Your cells receive less usable fuel, and your body conserves energy by making you feel sluggish.",
        symptoms: ["Tired after eating", "Soft voice and low stamina", "Sweat easily with minimal effort", "Frequent colds and slow recovery", "Prefer sitting over standing"],
        metaphor: "Imagine a phone with a degraded battery. You charge it all night, but by noon it is already at 30 percent. The problem is not the charger. It is the battery itself losing its capacity to hold energy.",
      },
      {
        bodyType: "Yang Deficient",
        bodyTypeSlug: "yang_deficient",
        tcmExplanation: "The Kidney Yang, the body's internal fire, is too low. Without enough warmth, every metabolic process slows down. You feel tired and cold at the same time, because your body is literally running on low heat.",
        modernExplanation: "Your basal metabolic rate runs low. Circulation to the extremities is reduced to protect core warmth. Your body prioritizes survival over energy output, leaving you feeling chronically cold and exhausted.",
        symptoms: ["Cold hands and feet year-round", "Need extra layers even in summer", "Lower back and knee weakness", "Frequent urination, especially at night", "Worse after cold food or drinks"],
        metaphor: "Think of a furnace running low on fuel. The house stays barely warm, and every room far from the heater feels freezing. Adding more wood does not help if the furnace itself is too weak to burn it efficiently.",
      },
      {
        bodyType: "Yin Deficient",
        bodyTypeSlug: "yin_deficient",
        tcmExplanation: "Yin is the body's cooling and moistening principle. When Yin is depleted, the body runs hot and dry. You feel tired not from lack of energy, but from internal heat constantly burning through your reserves. It is like an engine overheating.",
        modernExplanation: "Your body is in a state of low-grade inflammation and overstimulation. Cortisol and stress hormones stay elevated, preventing deep rest. You feel wired but exhausted, unable to fully wind down even when tired.",
        symptoms: ["Tired but wired at night", "Night sweats and hot flashes", "Dry mouth and throat", "Wake between 1 AM and 3 AM", "Feel worse after caffeine"],
        metaphor: "Picture a car engine running hot with low coolant. The engine works, but the lack of cooling fluid causes it to overheat and wear out faster. The solution is not more fuel. It is coolant and rest.",
      },
    ],
    formulas: [
      {
        slug: "ginseng-jujube-recovery-tea",
        nameEn: "Ginseng & Jujube Recovery Tea",
        namePinyin: "Ren Shen Da Zao Cha",
        nameZh: "\u4eba\u53c2\u5927\u67a3\u8336",
        classicalSource: "\u300a\u56db\u541b\u5b50\u6c64\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Si Jun Zi Tang (Four Gentlemen Decoction) in Tai Ping Hui Min He Ji Ju Fang (1085)",
        bodyType: "Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        description: "This tea directly replenishes Qi using two of Chinese medicine's most trusted tonics. Ginseng builds the core energy reservoir while jujube dates nourish the Blood that carries Qi throughout the body. Together they restore the Spleen's ability to generate daily energy.",
        ingredients: [
          { nameEn: "Ginseng", nameZh: "\u4eba\u53c2", amount: "3g (about 5-6 thin slices)", role: "Primary", why: "The foremost Qi tonic in Chinese medicine. Ginseng rebuilds the body's core energy reservoir and strengthens the Spleen's ability to transform food into usable Qi.", herbSlug: "ginseng-ren-shen" },
          { nameEn: "Red Dates (Jujube)", nameZh: "\u5927\u67a3", amount: "5 pieces, pitted", role: "Support", why: "Nourishes Blood and harmonizes the formula. Red dates add natural sweetness and help the body absorb the ginseng more gently.", herbSlug: "jujube-da-zao" },
          { nameEn: "Goji Berries", nameZh: "\u6784\u679e", amount: "10 pieces", role: "Harmony", why: "Gently nourishes Liver and Kidney Yin, preventing the warming ginseng from causing dryness. Adds a pleasant sweetness.", herbSlug: "goji-gou-qi-zi" },
        ],
        preparationSteps: [
          "Rinse ginseng slices and red dates briefly under cool water.",
          "Place all ingredients in a small pot with 500ml (2 cups) of fresh water.",
          "Bring to a boil over medium heat (about 5 minutes).",
          "Reduce to low heat, cover, and simmer for 15 minutes.",
          "Turn off heat and let sit for 5 minutes.",
          "Strain into a cup. The tea should be a warm amber color.",
        ],
        prepTime: "25 minutes",
        yield: "500ml (2 cups)",
        howToTake: "Drink one cup (250ml) warm, in the morning on an empty stomach or 30 minutes before breakfast. This timing aligns with the body's natural Qi production cycle.",
        duration: "Drink daily for 3 consecutive weeks, then pause for 1 week. Most people notice steadier morning energy within 5-7 days. Deeper changes in stamina typically require 4-6 weeks of consistent use.",
        tasteProfile: "Mild, slightly sweet, and earthy. The ginseng adds a subtle bitterness that is balanced by the natural sweetness of red dates and goji berries.",
        cautions: [
          "Not suitable during acute colds, flu, or fever. Ginseng can trap external pathogens inside the body.",
          "Avoid coffee within 2 hours of drinking this tea. Caffeine may counteract the Qi-building effect.",
          "If you experience headaches, irritability, or insomnia, reduce ginseng to 1-2 slices.",
          "Not recommended for those with high blood pressure without consulting a doctor.",
          "This formula is warming. If you already feel hot and restless, choose Formula 3 instead.",
        ],
        image: "/images/solutions/formula-ginseng-jujube.png",
      },
      {
        slug: "astragalus-ginger-warming-tea",
        nameEn: "Astragalus & Ginger Warming Tea",
        namePinyin: "Huang Qi Sheng Jiang Cha",
        nameZh: "\u9ec4\u82aa\u751f\u59dc\u8336",
        classicalSource: "\u300a\u8865\u4e2d\u76ca\u6c14\u6c64\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Bu Zhong Yi Qi Tang (Tonify the Middle and Augment Qi Decoction) by Li Dongyuan, Pi Wei Lun (1249)",
        bodyType: "Yang Deficient",
        bodyTypeSlug: "yang_deficient",
        description: "This warming tea combines astragalus, the premier Qi and Yang tonic, with fresh ginger to kindle the body's internal fire. It is designed for people whose fatigue comes with coldness. The astragalus builds defensive Qi while ginger warms the Spleen and stomach, restoring the metabolic heat needed to sustain energy.",
        ingredients: [
          { nameEn: "Astragalus", nameZh: "\u9ec4\u82aa", amount: "10g (about 5-6 slices)", role: "Primary", why: "The top herb for raising Qi and strengthening the body's external defenses. Astragalus helps the Spleen generate more energy and lifts the overall vitality upward.", herbSlug: "astragalus-huang-qi" },
          { nameEn: "Fresh Ginger", nameZh: "\u751f\u59dc", amount: "3g (about 3 thin slices)", role: "Support", why: "Warms the Spleen and stomach, reviving the digestive fire that converts food into energy. Ginger also helps disperse cold and promotes gentle circulation.", herbSlug: "ginger-sheng-jiang" },
          { nameEn: "Red Dates (Jujube)", nameZh: "\u5927\u67a3", amount: "4 pieces, pitted", role: "Harmony", why: "Nourishes Blood and moderates the drying nature of astragalus and ginger. Adds natural sweetness and supports steady energy release.", herbSlug: "jujube-da-zao" },
        ],
        preparationSteps: [
          "Rinse astragalus slices and red dates under cool water.",
          "Slice fresh ginger into 3 thin pieces.",
          "Place all ingredients in a small pot with 600ml (2.5 cups) of water.",
          "Bring to a boil over medium-high heat (about 8 minutes).",
          "Reduce to low heat, cover, and simmer for 20 minutes. Astragalus needs longer steeping to release its active compounds.",
          "Turn off heat and let sit for 5 minutes.",
          "Strain into a thermos. The tea should be a pale golden color.",
        ],
        prepTime: "30 minutes",
        yield: "500ml (2 cups)",
        howToTake: "Drink one cup (250ml) warm, mid-morning between 9 and 11 AM. This is when Spleen energy is naturally highest according to the Chinese medicine body clock, making it the best window for absorption.",
        duration: "Drink daily for 4 consecutive weeks, then pause for 1 week. Most people feel warmer hands and feet within the first week. Sustained energy improvement typically comes after 3-4 weeks of consistent use.",
        tasteProfile: "Mildly sweet with a gentle warming spice from the ginger. The astragalus contributes an earthy, slightly woody undertone. Comforting and grounding.",
        cautions: [
          "Not suitable during acute colds, flu, or fever, especially with sore throat.",
          "Avoid this formula if you tend to run hot, sweat easily, or have night sweats.",
          "If you experience dry mouth or constipation, reduce ginger to 1 slice.",
          "Not recommended during pregnancy without consulting a healthcare provider.",
          "Astragalus may interact with immunosuppressant medications. Consult your doctor if applicable.",
        ],
        image: "/images/solutions/formula-astragalus-ginger.png",
      },
      {
        slug: "american-ginseng-ophiopogon-tea",
        nameEn: "American Ginseng & Ophiopogon Cooling Tea",
        namePinyin: "Xi Yang Shen Mai Dong Cha",
        nameZh: "\u897f\u6d0b\u53c2\u9ea6\u51ac\u8336",
        classicalSource: "\u300a\u751f\u8109\u6563\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Sheng Mai San (Pulse-Generating Powder) in Yi Qi Bao Ming Ji (1253)",
        bodyType: "Yin Deficient",
        bodyTypeSlug: "yin_deficient",
        description: "This cooling and moistening tea is for the person who is tired but wired. American ginseng replenishes Qi without adding heat, while ophiopogon root restores the body's cooling fluids. Goji berries add gentle nourishment. Together they rebuild the Yin that prevents internal heat from burning through your energy reserves.",
        ingredients: [
          { nameEn: "American Ginseng", nameZh: "\u897f\u6d0b\u53c2", amount: "3g (about 5-6 thin slices)", role: "Primary", why: "Unlike Asian ginseng which is warming, American ginseng replenishes Qi while cooling the body. It is ideal for those who feel exhausted but also run hot or restless.", herbSlug: "hua-qi-shen-hua-qi-shen" },
          { nameEn: "Ophiopogon (Mai Dong)", nameZh: "\u9ea6\u51ac", amount: "5g (about 8-10 small pieces)", role: "Support", why: "Nourishes Yin and generates fluids. Ophiopogon moistens dryness and helps the body retain the cooling moisture that prevents overheating and night sweats." },
          { nameEn: "Goji Berries", nameZh: "\u6784\u679e", amount: "10 pieces", role: "Harmony", why: "Gently nourishes Liver and Kidney Yin, supporting deeper restoration. Adds natural sweetness and antioxidants.", herbSlug: "goji-gou-qi-zi" },
        ],
        preparationSteps: [
          "Rinse American ginseng slices and ophiopogon briefly under cool water.",
          "Place all ingredients in a teapot or heatproof glass.",
          "Pour 400ml (1.5 cups) of water that has just come off the boil over the ingredients.",
          "Cover and let steep for 10 minutes. Do not boil, as high heat reduces the delicate cooling properties.",
          "Strain and serve warm or at room temperature. The tea should be a light, clear golden color.",
        ],
        prepTime: "15 minutes",
        yield: "400ml (1.5 cups)",
        howToTake: "Drink one cup (200ml) warm or at room temperature, in the late afternoon between 3 and 5 PM. This is when the body's Yin naturally begins to take over from Yang, making it the ideal window for Yin nourishment.",
        duration: "Drink daily for 3 consecutive weeks, then pause for 1 week. Most people notice calmer sleep and less nighttime waking within the first week. Deeper energy restoration typically requires 4-6 weeks of consistent use.",
        tasteProfile: "Light, clean, and slightly sweet with a cooling sensation. The American ginseng adds a subtle bitterness balanced by the mild sweetness of goji berries. Ophiopogon contributes a faint floral note.",
        cautions: [
          "Not suitable during acute colds with chills, as this formula is cooling in nature.",
          "If you experience loose stools or digestive discomfort, reduce ophiopogon to half.",
          "Avoid taking this tea with strong coffee or other stimulants on the same day.",
          "If you feel more tired or cold after 3 days, discontinue. You may be Yang deficient rather than Yin deficient.",
          "Not recommended for those with diarrhea or loose stools as a regular pattern.",
        ],
        image: "/images/solutions/formula-american-ginseng-ophiopogon.png",
      },
    ],
    faqs: [
      {
        q: "Can these teas replace my morning coffee?",
        a: "They can reduce your dependence on coffee, but should not be used as a direct swap on day one. The best approach is to gradually replace your afternoon coffee with one of these teas first. Once your body's Qi begins to rebuild over 2-3 weeks, you may find you naturally need less caffeine. Quitting coffee abruptly while starting these teas may cause withdrawal headaches that mask the benefits.",
      },
      {
        q: "Which formula should I start with?",
        a: "It depends on your body type. If you feel tired after eating, have a soft voice, and sweat easily, Formula 1 (Ginseng & Jujube Tea) may suit you. If you feel tired AND cold with cold hands and feet, Formula 2 (Astragalus & Ginger Tea) targets the warmth deficiency. If you feel wired but exhausted, wake at night, and run hot, Formula 3 (American Ginseng & Ophiopogon Tea) replenishes the cooling Yin. The most reliable way to choose is to take our free body type quiz.",
      },
      {
        q: "Are these ingredients easy to find?",
        a: "Yes. All ingredients are food-grade items commonly sold at Asian grocery stores, Chinese herbal shops, and online retailers like Amazon. Ginseng slices, red dates, goji berries, and astragalus are widely available. American ginseng and ophiopogon root may require a trip to a Chinese herbal shop or an online TCM supplier. None of these herbs require a prescription.",
      },
      {
        q: "How long until I feel more energetic?",
        a: "Chinese medicine works gradually by rebuilding your body's own energy systems rather than stimulating them. Most people notice subtle improvements within the first week: steadier mornings, less afternoon crashing, or warmer hands and feet. Meaningful changes in stamina typically require 3-4 weeks of consistent daily use. The goal is sustainable energy restoration, not a quick boost that fades.",
      },
      {
        q: "Can I drink more than one formula at the same time?",
        a: "You can, but it is usually not necessary. Each formula targets a specific energy system. Using the one that matches your body type is more effective than combining all three. If your pattern is mixed or unclear, take the free body type quiz first to get a personalized recommendation. Mixing warming and cooling formulas at the same time may reduce their effectiveness.",
      },
    ],
  },
}

export const SOLUTION_LIST = Object.values(SOLUTIONS)
