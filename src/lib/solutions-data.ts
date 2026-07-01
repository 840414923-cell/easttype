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
    heroImage: "/images/solutions/weight-loss-hero.png",
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
  "chinese-medicine-for-sleep": {
    slug: "chinese-medicine-for-sleep",
    title: "Chinese Medicine for Sleep: 3 Herbal Teas by Body Type",
    metaTitle: "Chinese Medicine for Sleep: 3 Herbal Teas by Body Type",
    metaDescription: "Three Chinese medicine herbal tea formulas for insomnia and poor sleep, each suited to a different body type. Learn why TCM sees sleep differently and find your match.",
    heroImage: "/images/solutions/sleep-hero.png",
    intro: "Chinese medicine does not sedate the mind into sleep. Instead, it asks why the mind refuses to settle. Three common body types may struggle with sleep for completely different reasons, and each requires a different herbal approach.",
    tcmVsModern: [
      { aspect: "Root cause of insomnia", westernView: "Stress, anxiety, poor sleep hygiene, or melatonin imbalance", tcmView: "Heart-Spleen deficiency, Heart-Kidney disharmony, or Liver fire depending on which organ system is out of balance" },
      { aspect: "View of sleep", westernView: "A neurological state driven by circadian rhythms and neurotransmitters", tcmView: "When Yang energy naturally descends and Yin energy rises, the mind settles. Insomnia means this transition is blocked" },
      { aspect: "Primary solution", westernView: "Melatonin supplements, sleep hygiene, or prescription sedatives", tcmView: "Nourish the Heart and Spleen, bridge Heart and Kidney, or clear Liver fire so the mind can naturally settle" },
      { aspect: "Role of the mind", westernView: "Racing thoughts are a psychological problem to be managed", tcmView: "Racing thoughts reflect a physical organ imbalance. When the Heart lacks nourishment, the mind has no anchor" },
      { aspect: "Why waking at specific times matters", westernView: "Not typically considered in diagnosis", tcmView: "Waking at 1-3 AM points to Liver, 3-5 AM to Lung, 11 PM-1 AM to Gallbladder. Each time tells a different story" },
      { aspect: "Role of caffeine", westernView: "Blocks adenosine receptors, delays sleep onset", tcmView: "Coffee generates internal heat that keeps the Liver agitated and the Heart restless, making natural sleep harder" },
    ],
    bodyTypeExplanations: [
      {
        bodyType: "Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        tcmExplanation: "The Spleen cannot produce enough Blood to nourish the Heart. When the Heart lacks Blood, the mind has nowhere to rest. You fall asleep but wake frequently, or you lie in bed exhausted but your mind keeps spinning with trivial thoughts.",
        modernExplanation: "Your body is too depleted to sustain the deep relaxation needed for sleep. Low blood sugar, mild anemia, or chronic fatigue can keep your nervous system in a low-grade alert state, preventing deep sleep cycles.",
        symptoms: ["Fall asleep but wake at 2-3 AM", "Exhausted but mind won't stop", "Vivid dreams and nightmares", "Palpitations when lying down", "Poor appetite and fatigue"],
        metaphor: "Imagine a house with a weak foundation. The lights work, the doors close, but the structure itself is too fragile to fully settle. No amount of locking the doors will make it feel stable. You need to reinforce the foundation first.",
      },
      {
        bodyType: "Yin Deficient",
        bodyTypeSlug: "yin_deficient",
        tcmExplanation: "The Kidney Yin is too low to anchor the Heart's fire. Normally, the cooling Kidney energy rises to meet and cool the warming Heart energy. When Yin is depleted, Heart fire burns uncontrolled upward, keeping the mind agitated and the body hot.",
        modernExplanation: "Your body is stuck in a mild fight-or-flight state with elevated cortisol. The cooling, moistening systems are undercharged, so your internal temperature and stress hormones stay too high for deep sleep.",
        symptoms: ["Can't fall asleep at all", "Feel hot and restless at night", "Night sweats", "Dry mouth and throat", "Worse after caffeine or stress"],
        metaphor: "Picture a pot of water boiling with no lid. The heat escapes upward nonstop. You can try to push the steam down, but it will keep rising until you either reduce the fire or add more water to absorb the heat.",
      },
      {
        bodyType: "Qi Stagnant",
        bodyTypeSlug: "qi_stagnant",
        tcmExplanation: "Frustration and stress cause Liver Qi to stagnate and transform into fire. This Liver fire rises and disturbs the Heart, creating a loop of irritability, overthinking, and inability to unwind. You feel physically tense, especially in the chest and jaw.",
        modernExplanation: "Chronic stress keeps your sympathetic nervous system activated. Muscle tension, elevated adrenaline, and a hyperactive mind make it impossible to transition from alertness to rest. Alcohol and late screens make it worse.",
        symptoms: ["Can't unwind after work", "Jaw clenching and chest tightness", "Wake at 1-3 AM and can't go back", "Feel frustrated lying in bed", "Worse after stressful days"],
        metaphor: "Think of a traffic jam at rush hour. Nothing is broken, but the flow is completely stuck. Honking the horn does not help. You need to relieve the bottleneck so traffic can move naturally again.",
      },
    ],
    formulas: [
      {
        slug: "sour-jujube-longan-tea",
        nameEn: "Sour Jujube & Longan Calm Tea",
        namePinyin: "Suan Zao Ren Long Yan Rou Cha",
        nameZh: "\u9178\u67a3\u4ec1\u9f99\u773c\u8089\u8336",
        classicalSource: "\u300a\u5f52\u813e\u6c64\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Gui Pi Tang (Restore the Spleen Decoction) in Ji Sheng Fang (1253)",
        bodyType: "Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        description: "This tea nourishes the Heart and Spleen so the mind has a place to rest. Sour jujube seed is the premier calm-sleep herb in Chinese medicine, while longan fruit nourishes Heart Blood. Poria grounds the formula and helps the mind settle into deep rest.",
        ingredients: [
          { nameEn: "Sour Jujube Seed", nameZh: "\u9178\u67a3\u4ec1", amount: "10g (about 1 tablespoon)", role: "Primary", why: "The most trusted herb for calming the mind and promoting sleep in Chinese medicine. Sour jujube seed nourishes Heart Blood and anchors the mind so it can settle.", herbSlug: "suan-zao-ren-suan-zao-ren" },
          { nameEn: "Longan", nameZh: "\u9f99\u773c\u8089", amount: "8 pieces, dried", role: "Support", why: "Nourishes Heart Blood and gently calms the spirit. Longan adds natural sweetness and works synergistically with sour jujube seed to replenish the Heart.", herbSlug: "longan-gui-yuan" },
          { nameEn: "Poria", nameZh: "\u832f\u82b2", amount: "5g (about 4-5 small pieces)", role: "Harmony", why: "Strengthens the Spleen and calms the mind. Poria helps the body process the other herbs without causing dampness.", herbSlug: "poria-fu-ling" },
        ],
        preparationSteps: [
          "Lightly crush sour jujube seeds with the back of a spoon to release their active compounds.",
          "Place all ingredients in a small pot with 500ml (2 cups) of fresh water.",
          "Bring to a boil over medium heat (about 5 minutes).",
          "Reduce to low heat, cover, and simmer for 15 minutes.",
          "Turn off heat and let sit for 5 minutes.",
          "Strain into a cup. The tea should be a light amber color with a subtle fragrance.",
        ],
        prepTime: "25 minutes",
        yield: "500ml (2 cups)",
        howToTake: "Drink one cup (250ml) warm, 45 to 60 minutes before bed. This gives the herbs time to take effect as you begin your wind-down routine.",
        duration: "Drink daily for 3 consecutive weeks, then pause for 1 week. Most people notice deeper, less interrupted sleep within 5-7 days. Long-term sleep pattern improvement typically requires 4-6 weeks of consistent use.",
        tasteProfile: "Mildly sweet and slightly tart, with a comforting warmth. The longan provides a honey-like sweetness while the sour jujube adds a subtle tang.",
        cautions: [
          "Not suitable during acute colds or flu.",
          "If you experience drowsiness the next morning, reduce sour jujube seed to half the amount.",
          "Avoid driving or operating machinery within 2 hours of drinking this tea.",
          "Not recommended for those with acute diarrhea or bloating.",
          "This formula is calming in nature. If you feel more sluggish during the day, use every other day instead.",
        ],
        image: "/images/solutions/formula-sour-jujube-longan.png",
      },
      {
        slug: "lily-lotus-heart-tea",
        nameEn: "Lily & Lotus Heart-Calming Tea",
        namePinyin: "Bai He Lian Zi Xin Cha",
        nameZh: "\u767e\u5408\u83b2\u5b50\u5fc3\u8336",
        classicalSource: "\u300a\u4ea4\u6cf0\u4e38\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Jiao Tai Wan (Harmony-Pill) in Han Shi Yi Tong (1720)",
        bodyType: "Yin Deficient",
        bodyTypeSlug: "yin_deficient",
        description: "This cooling tea bridges the Heart and Kidney so fire and water can communicate again. Lily bulb moistens and cools, lotus seeds calm the mind, and the gentle combination helps the body transition from restless heat into restful cool.",
        ingredients: [
          { nameEn: "Lily Bulb", nameZh: "\u767e\u5408", amount: "10g (about 8-10 dried petals)", role: "Primary", why: "Cooling and moistening, lily bulb nourishes Lung and Heart Yin. It helps clear the empty heat that keeps the mind restless at night.", herbSlug: "lily-bulb-bai-he" },
          { nameEn: "Lotus Seeds", nameZh: "\u83b2\u5b50", amount: "15g (about 10 seeds)", role: "Support", why: "Calms the mind and strengthens the Spleen. Lotus seeds help anchor the mind and support the body's ability to hold energy rather than scatter it.", herbSlug: "lotus-seed-lian-zi" },
          { nameEn: "Poria", nameZh: "\u832f\u82b2", amount: "5g (about 4-5 small pieces)", role: "Harmony", why: "Calms the Heart and supports fluid metabolism. Poria helps the body process the nourishing herbs without creating dampness.", herbSlug: "poria-fu-ling" },
        ],
        preparationSteps: [
          "Rinse all ingredients briefly under cool water.",
          "Soak lotus seeds in warm water for 30 minutes if they are very hard.",
          "Place all ingredients in a small pot with 500ml (2 cups) of fresh water.",
          "Bring to a boil over medium heat (about 5 minutes).",
          "Reduce to low heat, cover, and simmer for 20 minutes.",
          "Turn off heat and let sit for 5 minutes.",
          "Strain into a cup. The tea should be a clear, pale golden color.",
        ],
        prepTime: "30 minutes",
        yield: "500ml (2 cups)",
        howToTake: "Drink one cup (250ml) warm, 45 minutes before bed. This tea is naturally caffeine-free and will not cause morning grogginess when taken at this timing.",
        duration: "Drink daily for 3 consecutive weeks, then pause for 1 week. Most people notice less nighttime waking and cooler body temperature within the first week. Deeper sleep restoration typically requires 4-6 weeks of consistent use.",
        tasteProfile: "Light, clean, and slightly sweet with a delicate floral note from the lily bulb. The lotus seeds add a mild, starchy sweetness. Calming and gentle on the palate.",
        cautions: [
          "Not suitable during acute colds with chills, as this formula is cooling in nature.",
          "If you experience loose stools, reduce lotus seeds to half the amount.",
          "Avoid taking this tea with spicy or very hot food on the same evening.",
          "If you feel more cold or tired after 3 days, discontinue. You may be Yang deficient rather than Yin deficient.",
          "Not recommended for those with chronic loose stools or cold-type digestion.",
        ],
        image: "/images/solutions/formula-lily-lotus.png",
      },
      {
        slug: "rose-chrysanthemum-unwind-tea",
        nameEn: "Rose & Chrysanthemum Unwind Tea",
        namePinyin: "Mei Gui Hua Ju Hua Cha",
        nameZh: "\u73ab\u7470\u82b1\u83ca\u82b1\u8336",
        classicalSource: "\u300a\u900d\u9065\u6563\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Xiao Yao San (Free and Easy Wanderer Powder) in Tai Ping Hui Min He Ji Ju Fang (1085)",
        bodyType: "Qi Stagnant",
        bodyTypeSlug: "qi_stagnant",
        description: "This tea releases stuck Liver energy and clears the heat that comes from frustration. Rose moves Qi and soothes the Liver, chrysanthemum clears heat from the head, and tangerine peel keeps everything flowing. It is the tea to drink when stress is the reason you can't sleep.",
        ingredients: [
          { nameEn: "Rose Petals", nameZh: "\u73ab\u7470\u82b1", amount: "5g (about 6-8 dried buds)", role: "Primary", why: "Soothes the Liver and moves stuck Qi. Rose is the signature herb for stress-related patterns, helping release the emotional tension that keeps the mind spinning at night.", herbSlug: "rose-mei-gui" },
          { nameEn: "Chrysanthemum", nameZh: "\u83ca\u82b1", amount: "5g (about 8-10 dried flowers)", role: "Support", why: "Clears heat from the Liver and head. Chrysanthemum helps cool the agitation that rises from Liver fire, making it easier for the mind to settle.", herbSlug: "chrysanthemum-ju-hua" },
          { nameEn: "Aged Tangerine Peel", nameZh: "\u9648\u76ae", amount: "3g (about 1 small piece)", role: "Harmony", why: "Regulates Qi and supports digestion. Tangerine peel prevents the other herbs from causing stagnation and helps move energy smoothly through the body.", herbSlug: "dried-tangerine-chen-pi" },
        ],
        preparationSteps: [
          "Rinse all ingredients briefly under cool water.",
          "Place all ingredients in a teapot or large heatproof mug.",
          "Pour 400ml (1.5 cups) of water that has just come off the boil over the ingredients.",
          "Cover and let steep for 7 minutes. Do not boil, as high heat reduces the delicate floral properties.",
          "Strain and serve warm. The tea should be a light golden color with a visible floral aroma.",
        ],
        prepTime: "10 minutes",
        yield: "400ml (1.5 cups)",
        howToTake: "Drink one cup (200ml) warm, 30 to 45 minutes before bed. This tea is especially helpful on high-stress days. You can also drink a half cup after work to begin the unwinding process earlier.",
        duration: "Use daily for 3-4 weeks, then reassess. Many people find it helpful to keep this tea on hand for particularly stressful periods rather than drinking it every night. If stress-driven sleep issues persist beyond 2 months of regular use, consult a qualified practitioner.",
        tasteProfile: "Floral, aromatic, and refreshing. The rose provides a delicate sweetness, the chrysanthemum adds a clean floral note, and the tangerine peel contributes a hint of citrus warmth. Naturally caffeine-free.",
        cautions: [
          "Not suitable during pregnancy without consulting a healthcare provider.",
          "If you experience loose stools, reduce the amount of tangerine peel.",
          "Avoid this tea if you have very low blood pressure, as rose may lower it slightly.",
          "If you feel more energized rather than calmer, drink it earlier in the evening, right after dinner.",
          "Not recommended for those with severe Qi deficiency as a primary pattern.",
        ],
        image: "/images/solutions/formula-rose-chrysanthemum.png",
      },
    ],
    faqs: [
      {
        q: "Can these teas replace melatonin or sleeping pills?",
        a: "These teas support your body's natural sleep process rather than forcing sleep. If you currently take prescription sleep medication, do not stop abruptly. These teas can be used alongside melatonin, and over time you may find you need less. For prescription sedatives, consult your doctor before making any changes.",
      },
      {
        q: "Which formula should I start with?",
        a: "It depends on why you can't sleep. If you fall asleep but wake at 2-3 AM with a racing mind, Formula 1 (Sour Jujube & Longan Tea) nourishes the Heart and Spleen. If you can't fall asleep at all and feel hot and restless, Formula 2 (Lily & Lotus Tea) cools and bridges Heart and Kidney. If stress and frustration keep you tense and awake, Formula 3 (Rose & Chrysanthemum Tea) releases stuck Liver energy. The most reliable way to choose is to take our free body type quiz.",
      },
      {
        q: "Are these ingredients easy to find?",
        a: "Yes. All ingredients are food-grade items commonly sold at Asian grocery stores, Chinese herbal shops, and online retailers like Amazon. Sour jujube seed, longan, lily bulb, lotus seeds, and chrysanthemum are widely available. Poria and rose buds may require a trip to a Chinese herbal shop or an online TCM supplier. None of these herbs require a prescription.",
      },
      {
        q: "How long until I sleep better?",
        a: "Chinese medicine works gradually by rebalancing the organ systems that govern sleep. Most people notice subtle improvements within the first week: falling asleep slightly faster, fewer nighttime wakings, or feeling more rested on waking. Meaningful sleep pattern changes typically require 3-4 weeks of consistent daily use. The goal is restoring natural sleep architecture, not forcing sedation.",
      },
      {
        q: "Can I drink more than one formula at the same time?",
        a: "You can, but it is usually not necessary. Each formula targets a specific organ pattern. Using the one that matches your body type is more effective than combining all three. If your pattern is mixed or unclear, take the free body type quiz first to get a personalized recommendation. Combining warming and cooling formulas at the same time may reduce their effectiveness.",
      },
    ],
  },
  "chinese-medicine-for-digestion": {
    slug: "chinese-medicine-for-digestion",
    title: "Chinese Medicine for Digestion: 3 Herbal Teas by Body Type",
    metaTitle: "Chinese Medicine for Digestion: 3 Herbal Teas by Body Type",
    metaDescription: "Three Chinese medicine herbal tea formulas for bloating, indigestion, and weak digestion, each suited to a different body type. Learn why TCM sees digestion differently and find your match.",
    heroImage: "/images/solutions/digestion-hero.png",
    intro: "Chinese medicine sees the digestive system as a cooking pot. If the fire under the pot is too weak, food sits and ferments. If the pot is too hot, fluids dry up. If the flow is stuck, pressure builds. Three common body types need three completely different approaches to digestion.",
    tcmVsModern: [
      { aspect: "Root cause of indigestion", westernView: "Acid reflux, H. pylori, food intolerances, or stress", tcmView: "Spleen Qi deficiency, Stomach heat, or Liver Qi invading the Stomach depending on the pattern" },
      { aspect: "View of digestion", westernView: "Mechanical breakdown of food by stomach acid and enzymes", tcmView: "The Spleen transforms food into Qi and Blood using digestive fire. The Stomach receives and breaks down. They must work together" },
      { aspect: "Primary solution", westernView: "Antacids, proton pump inhibitors, or digestive enzymes", tcmView: "Strengthen Spleen Qi, clear Stomach heat, or regulate Liver Qi so the digestive system can function naturally" },
      { aspect: "Role of temperature", westernView: "Not typically considered important for digestion", tcmView: "Cold and raw foods douse the digestive fire. Warm cooked foods support it. Temperature is as important as nutrition" },
      { aspect: "Why bloating happens", westernView: "Excess gas production from bacteria or food fermentation", tcmView: "Spleen Qi is too weak to move food downward. Food sits, ferments, and creates pressure and bloating" },
      { aspect: "Role of emotions", westernView: "Stress may worsen symptoms but is not the root cause", tcmView: "Frustration and stress cause Liver Qi to stagnate and invade the Stomach, directly disrupting digestion" },
    ],
    bodyTypeExplanations: [
      {
        bodyType: "Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        tcmExplanation: "The Spleen lacks the energy to transform food efficiently. Food enters but is not properly processed, leading to bloating, gas, and fatigue after meals. The digestive fire is simply too low to cook the food in the pot.",
        modernExplanation: "Your digestive enzymes and gut motility are underpowered. Food moves slowly through the system, fermenting and producing gas. You absorb nutrients poorly, which is why you feel tired after eating.",
        symptoms: ["Bloating after meals", "Tired after eating", "Loose stools or undigested food in stool", "Crave sweets and carbs", "Weak appetite, feel full quickly"],
        metaphor: "Imagine a stove on low heat trying to cook a heavy pot of stew. No matter how long you wait, the food never fully cooks. The solution is not adding more food. It is turning up the heat.",
      },
      {
        bodyType: "Yin Deficient",
        bodyTypeSlug: "yin_deficient",
        tcmExplanation: "Stomach Yin is depleted, meaning the cooling, moistening fluids that protect the stomach lining are too low. The stomach becomes dry and hot. You feel hungry but get full quickly, or have acid reflux because there is not enough moisture to buffer the heat.",
        modernExplanation: "Your stomach lining lacks adequate protective mucus. This can resemble mild gastritis or acid reflux. The digestive tract is dry and irritated, making it sensitive to spicy and hot foods.",
        symptoms: ["Dry mouth and thirst", "Acid reflux or heartburn", "Hungry but full quickly", "Constipation with dry stools", "Worse after spicy or hot food"],
        metaphor: "Think of a non-stick pan that has lost its coating. Food sticks and burns easily. Adding more food does not help. You need to re-season the pan with a layer of protective oil.",
      },
      {
        bodyType: "Qi Stagnant",
        bodyTypeSlug: "qi_stagnant",
        tcmExplanation: "Stress and frustration cause Liver Qi to stagnate. Instead of flowing smoothly, this stuck energy presses sideways into the digestive system, disrupting the Stomach's downward flow. The result is bloating, hiccups, and symptoms that shift location.",
        modernExplanation: "Chronic stress disrupts the gut-brain axis. Your enteric nervous system is locked in tension, causing irregular contractions, trapped gas, and discomfort that moves around. Symptoms flare up during stressful periods.",
        symptoms: ["Bloating that moves around", "Hiccups or belching", "Chest or rib-side tightness", "Symptoms worse with stress", "Irregular appetite"],
        metaphor: "Picture a highway where one lane is blocked. Traffic backs up in all directions. Honking does not help. You need to clear the blockage so the natural flow can resume.",
      },
    ],
    formulas: [
      {
        slug: "yam-poria-strengthening-porridge",
        nameEn: "Chinese Yam & Poria Strengthening Porridge",
        namePinyin: "Shan Yao Fu Ling Zhou",
        nameZh: "\u5c71\u836f\u832f\u82b2\u7ca5",
        classicalSource: "\u300a\u53c2\u82b3\u767d\u672f\u6563\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Shen Ling Bai Zhu San (Ginseng, Poria, and Atractylodes Powder) in Tai Ping Hui Min He Ji Ju Fang (1085)",
        bodyType: "Qi Deficient",
        bodyTypeSlug: "qi_deficient",
        description: "This gentle porridge rebuilds the Spleen's transformative power. Chinese yam strengthens the digestive core, poria drains dampness without depleting energy, and coix seed adds a second layer of dampness-draining support. Red dates sweeten and nourish the Blood that the Spleen needs to function.",
        ingredients: [
          { nameEn: "Chinese Yam", nameZh: "\u5c71\u836f", amount: "30g (about 5cm piece, fresh or dried)", role: "Primary", why: "The top food-herb for strengthening the Spleen and stomach. Chinese yam is gentle, non-drying, and suitable for long-term use to rebuild digestive energy.", herbSlug: "chinese-yam-shan-yao" },
          { nameEn: "Poria", nameZh: "\u832f\u82b2", amount: "15g (about 4-5 small pieces)", role: "Support", why: "Drains dampness through urination while calming the mind. Poria helps remove the fluid accumulation that comes from weak digestion.", herbSlug: "poria-fu-ling" },
          { nameEn: "Coix Seed (Job's Tears)", nameZh: "\u858f\u8584\u4ec1", amount: "30g (about 3 tablespoons)", role: "Support", why: "Strengthens the Spleen and drains dampness. A staple grain in Chinese cooking that is both food and medicine for weak digestion.", herbSlug: "coix-seed-yi-yi-ren" },
          { nameEn: "Red Dates (Jujube)", nameZh: "\u5927\u67a3", amount: "3 pieces, pitted", role: "Harmony", why: "Nourishes Blood and harmonizes the formula. Red dates add natural sweetness and support the Spleen's ability to produce Blood from food.", herbSlug: "jujube-da-zao" },
        ],
        preparationSteps: [
          "Soak coix seeds in water for 2 hours (or overnight for best results).",
          "If using fresh Chinese yam, peel and cut into small pieces. Wear gloves, as raw yam sap can irritate skin.",
          "Rinse poria and red dates under cool water.",
          "Place all ingredients in a pot with 800ml (3.5 cups) of water.",
          "Bring to a boil over medium-high heat (about 8 minutes).",
          "Reduce to low heat, cover, and simmer for 40 minutes until coix seeds and yam are soft.",
          "Remove red date pits if not done earlier. Serve warm as a light porridge.",
        ],
        prepTime: "50 minutes (includes soaking)",
        yield: "2 servings",
        howToTake: "Eat one serving (about 400ml) warm, once daily. Best in the morning as a nourishing breakfast or as a light dinner replacement. Eating it warm is essential, as cold food weakens the Spleen.",
        duration: "Consume 4-5 times per week for up to 3 months. This is a gentle, nourishing formula that works slowly. Expect reduced bloating and steadier energy within the first 2 weeks. Deeper digestive improvement typically requires 4-6 weeks of consistent use.",
        tasteProfile: "Mild, slightly sweet, and comforting. The Chinese yam and red dates provide natural sweetness, while coix seeds have a pleasant, chewy texture. The poria is virtually tasteless, adding only a subtle earthy note.",
        cautions: [
          "Generally very safe for long-term use by most people.",
          "If you experience increased urination, reduce to 3 times per week.",
          "Not recommended during the first trimester of pregnancy due to traditional cautions about coix seed.",
          "Best avoided during acute colds with chills and clear mucus.",
          "If using fresh Chinese yam, wear gloves while peeling. Raw yam sap can cause skin irritation in some people.",
        ],
        image: "/images/solutions/formula-yam-poria.png",
      },
      {
        slug: "dendrobium-ophiopogon-stomach-tea",
        nameEn: "Dendrobium & Ophiopogon Stomach Tea",
        namePinyin: "Shi Hu Mai Dong Cha",
        nameZh: "\u77f3\u659b\u9ea6\u51ac\u8336",
        classicalSource: "\u300a\u76ca\u80c3\u6c64\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Yi Wei Tang (Benefit the Stomach Decoction) in Wen Bing Tiao Bian (1798)",
        bodyType: "Yin Deficient",
        bodyTypeSlug: "yin_deficient",
        description: "This cooling and moistening tea replenishes the Stomach's protective fluids. Dendrobium is the premier herb for nourishing Stomach Yin, while ophiopogon adds deep moistening. Goji berries provide gentle nourishment and natural sweetness. Together they restore the cooling moisture that protects the stomach lining.",
        ingredients: [
          { nameEn: "Dendrobium (Shi Hu)", nameZh: "\u77f3\u659b", amount: "5g (about 3-4 small pieces)", role: "Primary", why: "The foremost herb for nourishing Stomach Yin in Chinese medicine. Dendrobium generates fluids and cools the stomach, helping restore the protective moisture lining.", herbSlug: "shi-hu-shi-hu" },
          { nameEn: "Ophiopogon (Mai Dong)", nameZh: "\u9ea6\u51ac", amount: "5g (about 8-10 small pieces)", role: "Support", why: "Nourishes Yin and generates fluids. Ophiopogon works alongside dendrobium to restore the body's cooling, moistening systems.", herbSlug: "mai-dong-mai-dong" },
          { nameEn: "Goji Berries", nameZh: "\u6784\u679e", amount: "10 pieces", role: "Harmony", why: "Gently nourishes Liver and Kidney Yin while adding natural sweetness. Goji berries support the deeper Yin reserves that feed Stomach Yin.", herbSlug: "goji-gou-qi-zi" },
        ],
        preparationSteps: [
          "Rinse all ingredients briefly under cool water.",
          "Place all ingredients in a teapot or heatproof glass.",
          "Pour 400ml (1.5 cups) of water that has just come off the boil over the ingredients.",
          "Cover and let steep for 10 minutes. Do not boil, as high heat reduces the delicate moistening properties.",
          "Strain and serve warm or at room temperature. The tea should be a clear, pale golden color.",
        ],
        prepTime: "15 minutes",
        yield: "400ml (1.5 cups)",
        howToTake: "Drink one cup (200ml) warm or at room temperature, mid-morning or mid-afternoon. Avoid drinking it ice cold, as cold temperature can shock the stomach even if the herbs are cooling in nature.",
        duration: "Drink daily for 3 consecutive weeks, then pause for 1 week. Most people notice less dry mouth and reduced acid reflux within the first week. Deeper stomach Yin restoration typically requires 4-6 weeks of consistent use.",
        tasteProfile: "Light, clean, and slightly sweet with a cooling sensation. The dendrobium adds a subtle herbal note, the ophiopogon contributes a faint floral quality, and the goji berries provide a gentle sweetness.",
        cautions: [
          "Not suitable during acute colds with chills, as this formula is cooling in nature.",
          "If you experience loose stools or digestive discomfort, reduce ophiopogon to half.",
          "Avoid spicy, very hot, or drying foods while using this formula.",
          "If you feel more cold or bloated after 3 days, discontinue. You may be Qi or Yang deficient rather than Yin deficient.",
          "Not recommended for those with chronic loose stools or cold-type digestion.",
        ],
        image: "/images/solutions/formula-dendrobium-ophiopogon.png",
      },
      {
        slug: "tangerine-peel-regulating-tea",
        nameEn: "Aged Tangerine Peel & Hawthorn Regulating Tea",
        namePinyin: "Chen Pi Shan Zha Cha",
        nameZh: "\u9648\u76ae\u5c71\u69d0\u8336",
        classicalSource: "\u300a\u67f4\u80e1\u758f\u809d\u6563\u300b\u52a0\u51cf",
        classicalSourceEn: "Adapted from Chai Hu Shu Gan San (Bupleurum Liver-Soothing Powder) in Jing Yue Quan Shu (1624)",
        bodyType: "Qi Stagnant",
        bodyTypeSlug: "qi_stagnant",
        description: "This tea releases stuck energy and helps food move through the digestive tract. Aged tangerine peel regulates Qi and prevents stagnation, hawthorn helps break down accumulated food, and the combination is especially effective when stress is causing your bloating and discomfort.",
        ingredients: [
          { nameEn: "Aged Tangerine Peel", nameZh: "\u9648\u76ae", amount: "5g (about 2 small pieces)", role: "Primary", why: "The signature herb for regulating Qi and supporting digestion. Aged tangerine peel moves stuck energy in the digestive tract and prevents food from sitting and fermenting.", herbSlug: "dried-tangerine-chen-pi" },
          { nameEn: "Hawthorn (Shan Zha)", nameZh: "\u5c71\u69d0", amount: "10g (about 8-10 dried berries)", role: "Support", why: "Helps digest fats and heavy foods. In TCM, hawthorn is the go-to herb for food stagnation, especially from meat and rich meals.", herbSlug: "shan-zha-shan-zha" },
          { nameEn: "Patchouli (Guang Huo Xiang)", nameZh: "\u5e7f\u85ff\u9999", amount: "3g (about 1 small pinch)", role: "Harmony", why: "Transforms dampness and harmonizes the middle. Patchouli helps settle the stomach when stress has disrupted its normal rhythm.", herbSlug: "huo-xiang-guang-huo-xiang" },
        ],
        preparationSteps: [
          "Rinse all ingredients briefly under cool water.",
          "Place all ingredients in a small pot with 500ml (2 cups) of fresh water.",
          "Bring to a boil over medium heat (about 5 minutes).",
          "Reduce to low heat, cover, and simmer for 10 minutes.",
          "Turn off heat and let sit for 3 minutes.",
          "Strain into a cup. The tea should be a warm reddish-amber color with a citrus aroma.",
        ],
        prepTime: "20 minutes",
        yield: "500ml (2 cups)",
        howToTake: "Drink one cup (250ml) warm, 20 to 30 minutes after meals. This timing helps the herbs work with your digestive cycle, moving food through before it can stagnate and ferment.",
        duration: "Drink daily for 2-3 weeks, then reassess. Many people find this tea helpful to keep on hand for heavy meals or stressful periods rather than drinking it continuously. If symptoms persist beyond 4 weeks of regular use, consult a qualified practitioner.",
        tasteProfile: "Warm citrus aroma with a tangy, slightly sour edge from the hawthorn. The tangerine peel adds a bright, refreshing note, while the patchouli contributes a subtle herbal depth. Comforting and settling.",
        cautions: [
          "Not suitable during pregnancy without consulting a healthcare provider. Hawthorn may stimulate uterine contractions.",
          "Avoid if you have stomach ulcers or severe acid reflux. Hawthorn increases stomach acid.",
          "If you experience loose stools, reduce hawthorn to half the amount.",
          "Consult your doctor if you take blood-thinning medications. Hawthorn may enhance their effect.",
          "This formula is regulating in nature. If you feel more tired after 3 days, switch to Formula 1 instead.",
        ],
        image: "/images/solutions/formula-tangerine-hawthorn.png",
      },
    ],
    faqs: [
      {
        q: "Can these teas replace antacids or digestive enzymes?",
        a: "These teas support your digestive system's natural function rather than overriding it. If you currently take prescription antacids or enzymes, do not stop abruptly. These teas can be used alongside your current regimen, and over time you may find you need less. For prescription medications, consult your doctor before making any changes.",
      },
      {
        q: "Which formula should I start with?",
        a: "It depends on your symptoms. If you feel bloated and tired after eating with loose stools, Formula 1 (Yam & Poria Porridge) strengthens the Spleen. If you have acid reflux, dry mouth, and feel hungry but full quickly, Formula 2 (Dendrobium & Ophiopogon Tea) nourishes Stomach Yin. If your bloating moves around and gets worse with stress, Formula 3 (Tangerine Peel & Hawthorn Tea) regulates stuck Qi. The most reliable way to choose is to take our free body type quiz.",
      },
      {
        q: "Are these ingredients easy to find?",
        a: "Most ingredients are food-grade items sold at Asian grocery stores and online. Chinese yam, coix seed, red dates, and goji berries are widely available. Dendrobium and ophiopogon may require a trip to a Chinese herbal shop or online TCM supplier. Aged tangerine peel (chenpi) and hawthorn are commonly found at Asian markets. None of these herbs require a prescription.",
      },
      {
        q: "How long until my digestion improves?",
        a: "Chinese medicine works gradually by rebuilding your digestive system's own strength. Most people notice less bloating and better energy within the first week. Meaningful changes in digestion quality typically require 3-4 weeks of consistent use. The goal is restoring your digestive function permanently, not masking symptoms temporarily.",
      },
      {
        q: "Can I drink more than one formula at the same time?",
        a: "You can, but it is usually not necessary. Each formula targets a specific digestive pattern. Using the one that matches your body type is more effective than combining all three. If your pattern is mixed or unclear, take the free body type quiz first to get a personalized recommendation.",
      },
    ],
  },
}

export const SOLUTION_LIST = Object.values(SOLUTIONS)
