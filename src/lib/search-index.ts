import { SYMPTOMS } from "./symptoms-data"
import { PATTERNS } from "./pattern-data"
import { FOOD_COMBO_PAGES } from "./food-combo-data"

export interface SearchItem {
  title: string
  url: string
  category: string
  keywords: string
}

const WELLNESS_ARTICLES: { slug: string; title: string; excerpt: string }[] = [
  { slug: "spleen-qi-deficiency", title: "Spleen Qi Deficiency: Signs, Causes, and Foods", excerpt: "Fatigue after meals, bloating, and brain fog" },
  { slug: "kidney-yin-deficiency", title: "Kidney Yin Deficiency: Signs, Causes, and Cooling Foods", excerpt: "Night sweats, hot flashes, dry mouth" },
  { slug: "liver-qi-stagnation", title: "Liver Qi Stagnation: Signs, Causes, and Foods for Relief", excerpt: "Irritability, sighing, breast tenderness" },
  { slug: "kidney-yang-deficiency", title: "Kidney Yang Deficiency: Signs, Causes, and Warming Foods", excerpt: "Always cold, frequent night urination" },
  { slug: "lung-qi-deficiency", title: "Lung Qi Deficiency: Signs, Causes, and Strengthening Foods", excerpt: "Shortness of breath, weak voice, frequent colds" },
  { slug: "stomach-heat", title: "Stomach Heat: Signs, Causes, and Cooling Foods", excerpt: "Bad breath, acid reflux, mouth ulcers" },
  { slug: "heart-yin-deficiency", title: "Heart Yin Deficiency: Signs, Causes, and Calming Foods", excerpt: "Insomnia, palpitations, anxiety" },
  { slug: "spleen-dampness", title: "Spleen Dampness: Signs, Causes, and Drying Foods", excerpt: "Heavy, sluggish, foggy, bloated" },
  { slug: "liver-fire", title: "Liver Fire: Signs, Causes, and Cooling Approaches", excerpt: "Red eyes, headaches, irritability" },
  { slug: "blood-deficiency", title: "Blood Deficiency: Signs, Causes, and Nourishing Foods", excerpt: "Pale skin, dizziness, brittle nails" },
  { slug: "chinese-medicine-for-insomnia", title: "Chinese Medicine for Insomnia", excerpt: "Can't sleep, four insomnia patterns" },
  { slug: "chinese-medicine-for-anxiety", title: "Chinese Medicine for Anxiety", excerpt: "Racing thoughts, chest tightness" },
  { slug: "chinese-medicine-for-weight-loss", title: "Chinese Medicine for Weight Loss", excerpt: "Stubborn weight, dampness, metabolism" },
  { slug: "chinese-medicine-for-acne", title: "Chinese Medicine for Acne", excerpt: "Internal heat, damp-heat, skin health" },
  { slug: "chinese-medicine-for-fatigue", title: "Chinese Medicine for Fatigue", excerpt: "Always tired, Qi deficiency, energy foods" },
  { slug: "chinese-medicine-for-menopause", title: "Chinese Medicine for Menopause", excerpt: "Hot flashes, night sweats, cooling Yin" },
  { slug: "chinese-medicine-for-constipation", title: "Chinese Medicine for Constipation", excerpt: "Moistening foods, patterns, regularity" },
  { slug: "chinese-medicine-for-pcos", title: "Chinese Medicine for PCOS", excerpt: "Dampness, phlegm, hormonal balance" },
  { slug: "chinese-medicine-for-digestion", title: "Chinese Medicine for Digestion", excerpt: "Spleen health, gut foods, bloating" },
  { slug: "chinese-medicine-for-hot-flashes", title: "Chinese Medicine for Hot Flashes", excerpt: "Cooling Yin, reducing internal heat" },
  { slug: "chinese-medicine-for-acid-reflux", title: "Chinese Medicine for Acid Reflux", excerpt: "Stomach heat, cooling foods" },
  { slug: "chinese-medicine-for-bloating", title: "Chinese Medicine for Bloating", excerpt: "Spleen Qi, gas relief foods" },
  { slug: "yin-and-yang", title: "Yin and Yang in Chinese Medicine", excerpt: "Balance, foods, body types" },
  { slug: "five-elements-theory", title: "Five Elements Theory", excerpt: "Wood, Fire, Earth, Metal, Water" },
  { slug: "meridians-chinese-medicine", title: "Meridians in Chinese Medicine", excerpt: "Energy pathways explained" },
  { slug: "what-is-dampness", title: "What Is Dampness in Chinese Medicine?", excerpt: "Signs, causes, drying foods" },
  { slug: "what-is-shen", title: "What Is Shen in Chinese Medicine?", excerpt: "Mind-body connection, spirit" },
  { slug: "what-is-jing", title: "What Is Jing in Chinese Medicine?", excerpt: "Vital essence explained" },
  { slug: "chinese-herbs-for-energy", title: "Chinese Herbs for Energy", excerpt: "Top herbs to fight fatigue" },
  { slug: "tcm-diet", title: "TCM Diet: Complete Guide", excerpt: "Eating according to Chinese medicine" },
  { slug: "chinese-medicine-for-cold-hands", title: "Chinese Medicine for Cold Hands and Feet", excerpt: "Causes, warming foods" },
  { slug: "chinese-medicine-for-night-sweats", title: "Chinese Medicine for Night Sweats", excerpt: "Causes, cooling foods" },
  { slug: "chinese-medicine-for-brain-fog", title: "Chinese Medicine for Brain Fog", excerpt: "Causes, clarity foods" },
  { slug: "food-therapy-chinese-medicine", title: "Food Therapy in Chinese Medicine", excerpt: "Healing with everyday meals" },
  { slug: "what-is-chinese-medicine", title: "What Is Chinese Medicine? A Complete Beginner's Guide", excerpt: "Everything you need to know about TCM" },
  { slug: "chinese-medicine-for-beginners", title: "Chinese Medicine for Beginners", excerpt: "Practical starter guide" },
  { slug: "chinese-medicine-body-types", title: "The 9 Chinese Medicine Body Types", excerpt: "Complete guide to 9 constitutions" },
  { slug: "tcm-tongue-diagnosis", title: "Tongue Diagnosis in Chinese Medicine", excerpt: "What your tongue reveals" },
  { slug: "cooling-foods-chinese-medicine", title: "Cooling Foods in Chinese Medicine", excerpt: "What to eat when you run hot" },
  { slug: "eastern-vs-western-medicine", title: "Eastern vs Western Medicine", excerpt: "What each system does best" },
  { slug: "what-is-qi", title: "What Is Qi (Chi) Energy?", excerpt: "Chinese medicine's core concept" },
  { slug: "foods-that-warm-your-body", title: "Foods That Warm Your Body", excerpt: "From the inside" },
  { slug: "chinese-medicine-foods-for-energy", title: "Chinese Medicine Foods for Energy", excerpt: "What to eat when you're always tired" },
]

export const SEARCH_INDEX: SearchItem[] = [
  ...Object.values(SYMPTOMS).map((s) => ({
    title: s.title.en,
    url: `/symptoms/${s.slug}`,
    category: "Symptom",
    keywords: `${s.title.en} ${s.metaTitle} ${s.tag}`.toLowerCase(),
  })),
  ...WELLNESS_ARTICLES.map((w) => ({
    title: w.title,
    url: `/wellness/${w.slug}`,
    category: "Wellness Guide",
    keywords: `${w.title} ${w.excerpt}`.toLowerCase(),
  })),
  ...Object.values(FOOD_COMBO_PAGES).map((f) => ({
    title: f.h1,
    url: `/foods-for/${f.slug}`,
    category: "Food Guide",
    keywords: `${f.h1} ${f.metaTitle} ${f.intro}`.toLowerCase(),
  })),
  ...Object.values(PATTERNS).map((p) => ({
    title: p.title.en,
    url: `/patterns/${p.slug}`,
    category: "Pattern",
    keywords: `${p.title.en} ${p.metaTitle} ${p.tag}`.toLowerCase(),
  })),
  { title: "Body Type Quiz", url: "/quiz", category: "Quiz", keywords: "quiz body type test free" },
  { title: "All Symptoms", url: "/symptoms", category: "Browse", keywords: "all symptoms browse 70 guides" },
  { title: "All Wellness Guides", url: "/wellness", category: "Browse", keywords: "all wellness guides browse" },
  { title: "All Food Guides", url: "/foods-for", category: "Browse", keywords: "all food guides browse" },
  { title: "All Patterns", url: "/patterns", category: "Browse", keywords: "all patterns browse" },
]

export function searchContent(query: string, limit = 8): SearchItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return SEARCH_INDEX
    .filter((item) => item.keywords.includes(q) || item.title.toLowerCase().includes(q))
    .slice(0, limit)
}
