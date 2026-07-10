import type { CampMeta, DailyPlan, ShoppingCategory } from "../types"

export const energyRecoveryCamp: CampMeta = {
  slug: "energy-recovery",
  title: "30-Day Energy Recovery Camp",
  subtitle: "Rebuild your vitality with TCM food therapy",
  description:
    "A guided 30-day program that uses Chinese medicine food therapy to address chronic fatigue at its root. Each day you receive a personalized meal plan, wellness tea recipe, and lifestyle tip tailored to your body type. No supplements, no extreme diets, just practical food-based guidance rooted in 3,000 years of Eastern body wisdom.",
  duration: 30,
  bodyTypes: ["qi_deficient"],
  priceWithQuiz: 59.99,
  priceWithoutQuiz: 29.99,
  heroImage: "/images/solutions/energy-hero.jpg",
  weeks: [
    {
      week: 1,
      theme: "Understanding Your Energy",
      description:
        "Week 1 focuses on warming the digestive system and establishing a steady daily rhythm. Your spleen, the organ that converts food into usable energy, needs gentle, easy-to-digest meals before it can start building real vitality.",
      unlockDay: 1,
    },
    {
      week: 2,
      theme: "Building Qi Through Food",
      description:
        "Week 2 introduces qi-building foods and teas. As your digestion stabilizes, we add specific ingredients that directly replenish the energy reserves you have been running low on.",
      unlockDay: 5,
    },
    {
      week: 3,
      theme: "Deep Nourishment",
      description:
        "Week 3 goes deeper, addressing the kidney energy that serves as your body's foundational battery. The meals become more nourishing, and the teas target your deepest energy reserves.",
      unlockDay: 12,
    },
    {
      week: 4,
      theme: "Consolidation and Lifestyle",
      description:
        "Week 4 consolidates your progress and establishes sustainable habits. The focus shifts from intensive nourishment to maintaining the energy you have rebuilt.",
      unlockDay: 19,
    },
  ],
}

export const energyRecoveryShoppingList: ShoppingCategory[] = [
  {
    category: "Wellness Tea Materials",
    store: "Online TCM shops or Asian grocery stores",
    items: [
      { name: "Astragalus (Huang Qi)", amount: "100g bag", note: "The main qi-building herb for the entire camp" },
      { name: "Red Dates (Da Zao)", amount: "200g bag", note: "Sweet blood and qi tonic, used daily" },
      { name: "Goji Berries (Gou Qi Zi)", amount: "100g bag", note: "Nourishes liver and kidney" },
      { name: "Dried Longan (Gui Yuan)", amount: "100g bag", note: "Calms the spirit, builds blood" },
      { name: "Fresh Ginger", amount: "2-3 pieces", note: "Available at any grocery store" },
      { name: "Dried Tangerine Peel (Chen Pi)", amount: "50g bag", note: "Optional but recommended for digestion" },
      { name: "American Ginseng (Hua Qi Shen)", amount: "30g slices", note: "For weeks 3-4, gentler than Asian ginseng" },
    ],
  },
  {
    category: "Weekly Grocery (Fresh)",
    store: "Regular grocery store",
    items: [
      { name: "Rolled oats", amount: "500g", note: "Base for daily breakfast" },
      { name: "Brown rice", amount: "1kg", note: "Base for lunches and dinners" },
      { name: "Sweet potato", amount: "3-4 medium", note: "Warming, spleen-friendly carb" },
      { name: "Chicken breast or thigh", amount: "500g per week" },
      { name: "Eggs", amount: "1 dozen" },
      { name: "Spinach or kale", amount: "2 bunches per week" },
      { name: "Carrots", amount: "500g" },
      { name: "Onion and garlic", amount: "As needed" },
      { name: "Honey", amount: "1 jar", note: "Natural sweetener for tea" },
      { name: "Cinnamon", amount: "1 bottle", note: "Warming spice" },
      { name: "Walnuts or almonds", amount: "200g", note: "Kidney-nourishing nuts" },
    ],
  },
  {
    category: "Optional Chinese Ingredients",
    store: "Asian grocery stores or online",
    items: [
      { name: "Chinese Yam (Shan Yao)", amount: "500g", note: "Gentle qi tonic, excellent for congee" },
      { name: "Millet (Xiao Mi)", amount: "500g", note: "Warming grain, base for congee" },
      { name: "Lotus Seeds (Lian Zi)", amount: "100g", note: "Strengthens spleen, calms mind" },
      { name: "Poria (Fu Ling)", amount: "50g", note: "Drains dampness, supports spleen" },
    ],
  },
]
