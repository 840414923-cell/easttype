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
    heroImage: "/images/solutions/weight-loss-hero.svg",
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
        image: "/images/solutions/formula-lotus-hawthorn.svg",
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
        image: "/images/solutions/formula-coix-poria.svg",
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
        image: "/images/solutions/formula-rose-cassia.svg",
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
}

export const SOLUTION_LIST = Object.values(SOLUTIONS)
