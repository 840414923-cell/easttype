import type { Metadata } from "next"
import Link from "next/link"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { WellnessList } from "./wellness-list"

const TITLE = "Chinese Medicine Guides: Body Types, Foods & Natural Health"
const DESC = "Always tired, cold, or can't sleep? Free Chinese medicine guides explain why in plain English. Find your body type and the foods that may help."
const URL = "https://www.myeasterntype.com/wellness"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "website",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  alternates: { canonical: URL },
}

const articles = [
  {
    slug: "spleen-qi-deficiency",
    title: "Spleen Qi Deficiency: Signs, Causes, and Foods That May Help",
    excerpt: "Fatigue after meals, bloating, and brain fog may point to Spleen Qi Deficiency. Learn the signs, what causes it, and which warm foods can help.",
    tag: "Qi Deficient",
    readTime: "10 min",
  },
  {
    slug: "kidney-yin-deficiency",
    title: "Kidney Yin Deficiency: Signs, Causes, and Cooling Foods",
    excerpt: "Night sweats, hot flashes, dry mouth, and low back pain at night may signal Kidney Yin Deficiency. Learn which cooling foods may help.",
    tag: "Yin Deficient",
    readTime: "10 min",
  },
  {
    slug: "liver-qi-stagnation",
    title: "Liver Qi Stagnation: Signs, Causes, and Foods for Relief",
    excerpt: "Irritability, sighing, breast tenderness, and rib-side tightness may signal Liver Qi Stagnation. Learn which foods and movement can help.",
    tag: "Qi Stagnant",
    readTime: "10 min",
  },
  {
    slug: "kidney-yang-deficiency",
    title: "Kidney Yang Deficiency: Signs, Causes, and Warming Foods",
    excerpt: "Always cold, frequent night urination, and low back ache may signal Kidney Yang Deficiency. Learn which warming foods may help.",
    tag: "Yang Deficient",
    readTime: "10 min",
  },
  {
    slug: "lung-qi-deficiency",
    title: "Lung Qi Deficiency: Signs, Causes, and Strengthening Foods",
    excerpt: "Shortness of breath, weak voice, and frequent colds may signal Lung Qi Deficiency. Learn which foods may support respiratory energy.",
    tag: "Qi Deficient",
    readTime: "10 min",
  },
  {
    slug: "stomach-heat",
    title: "Stomach Heat: Signs, Causes, and Cooling Foods",
    excerpt: "Bad breath, acid reflux, mouth ulcers, and big appetite may signal Stomach Heat. Learn which cooling foods may help.",
    tag: "Damp Heat",
    readTime: "10 min",
  },
  {
    slug: "heart-yin-deficiency",
    title: "Heart Yin Deficiency: Signs, Causes, and Calming Foods",
    excerpt: "Insomnia, palpitations, anxiety, and night sweats may signal Heart Yin Deficiency. Learn which foods may calm your mind.",
    tag: "Yin Deficient",
    readTime: "10 min",
  },
  {
    slug: "spleen-dampness",
    title: "Spleen Dampness: Signs, Causes, and Drying Foods",
    excerpt: "Feeling heavy, sluggish, foggy, and bloated may point to Spleen Dampness. Learn which foods may help dry it out.",
    tag: "Phlegm Damp",
    readTime: "10 min",
  },
  {
    slug: "liver-fire",
    title: "Liver Fire: Signs, Causes, and Cooling Approaches",
    excerpt: "Red eyes, headaches, irritability, and bitter taste may signal Liver Fire. Learn which cooling foods may bring the heat down.",
    tag: "Damp Heat",
    readTime: "10 min",
  },
  {
    slug: "blood-deficiency",
    title: "Blood Deficiency: Signs, Causes, and Nourishing Foods",
    excerpt: "Pale skin, dizziness, brittle nails, and poor sleep may signal Blood Deficiency. Learn which foods may help nourish your Blood.",
    tag: "Yin Deficient",
    readTime: "10 min",
  },
  {
    slug: "chinese-medicine-for-insomnia",
    title: "Chinese Medicine for Insomnia: Why You Can&apos;t Sleep and What May Help",
    excerpt: "Falling asleep or staying asleep? Chinese medicine identifies four insomnia patterns. Learn which foods and habits match your type.",
    tag: "Nutrition",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-anxiety",
    title: "Chinese Medicine for Anxiety: Patterns, Causes, and Calming Foods",
    excerpt: "Racing thoughts and chest tightness may signal Liver Qi Stagnation or Heart Yin Deficiency. Learn which foods may calm the mind.",
    tag: "Qi Stagnant",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-weight-loss",
    title: "Chinese Medicine for Weight Loss: Body Types and Metabolism",
    excerpt: "Stubborn weight may be dampness in Chinese medicine. Learn which body types hold weight and which foods may support healthy metabolism.",
    tag: "Phlegm Damp",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-acne",
    title: "Chinese Medicine for Acne: Internal Heat, Dampness, and Skin Health",
    excerpt: "Acne may signal internal Heat or Damp-Heat. Learn which cooling foods may help clear your skin from within.",
    tag: "Damp Heat",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-fatigue",
    title: "Chinese Medicine for Fatigue: Qi, Spleen, and Energy Foods",
    excerpt: "Always tired even after sleep? Chinese medicine views chronic fatigue as Qi Deficiency. Learn which warm foods may help rebuild energy.",
    tag: "Qi Deficient",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-menopause",
    title: "Chinese Medicine for Menopause: Cooling Heat and Nourishing Yin",
    excerpt: "Hot flashes, night sweats, and mood swings may signal declining Kidney Yin. Learn which cooling foods may help ease the transition.",
    tag: "Yin Deficient",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-constipation",
    title: "Chinese Medicine for Constipation: Patterns and Moistening Foods",
    excerpt: "Constipation may signal Heat, Dryness, or Qi deficiency. Learn which moistening foods may help restore regular digestion.",
    tag: "Qi Deficient",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-pcos",
    title: "Chinese Medicine for PCOS: Dampness, Phlegm, and Hormonal Balance",
    excerpt: "Irregular periods and weight gain with PCOS may relate to Phlegm Dampness. Learn which foods may help support hormonal balance.",
    tag: "Phlegm Damp",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-digestion",
    title: "Chinese Medicine for Digestion: Spleen Health and Gut Foods",
    excerpt: "Bloating and discomfort after eating may signal weak Spleen Qi. Learn which warm foods may help restore comfortable digestion.",
    tag: "Qi Deficient",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-hot-flashes",
    title: "Chinese Medicine for Hot Flashes: Cooling Yin and Reducing Heat",
    excerpt: "Sudden heat and flushing may signal declining Kidney Yin. Learn which cooling foods may help bring your temperature into balance.",
    tag: "Yin Deficient",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-acid-reflux",
    title: "Chinese Medicine for Acid Reflux: Stomach Heat and Cooling Foods",
    excerpt: "Burning chest and sour taste may signal Stomach Heat. Learn which cooling foods may help calm your digestive fire.",
    tag: "Damp Heat",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-depression",
    title: "Chinese Medicine for Depression: Qi Stagnation, Spleen, and Foods That May Help",
    excerpt: "Depression in TCM may involve stuck Liver Qi, Spleen deficiency, or Kidney Yang depletion. Learn which foods may help lift the heaviness.",
    tag: "Qi Stagnant",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-migraines",
    title: "Chinese Medicine for Migraines: Liver Fire, Blood Deficiency, and Foods That May Help",
    excerpt: "Migraines may involve Liver Fire rising upward or Blood Deficiency. Learn which cooling and nourishing foods may help.",
    tag: "Qi Stagnant",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-eczema",
    title: "Chinese Medicine for Eczema: Damp Heat, Blood Deficiency, and Foods That May Help",
    excerpt: "Eczema may signal Damp Heat or Blood Deficiency. Learn which cooling and nourishing foods may help calm the skin from within.",
    tag: "Damp Heat",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-hair-loss",
    title: "Chinese Medicine for Hair Loss: Kidney Essence, Blood, and Foods That May Help",
    excerpt: "Hair loss may signal Kidney Essence depletion or Blood Deficiency. Learn which nourishing foods may help support healthy hair.",
    tag: "Qi Deficient",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-pms",
    title: "Chinese Medicine for PMS: Liver Qi, Blood, and Foods That May Help",
    excerpt: "PMS may involve Liver Qi Stagnation, Blood Deficiency, or Cold in the uterus. Learn which foods may help ease premenstrual symptoms.",
    tag: "Qi Stagnant",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-bloating",
    title: "Chinese Medicine for Bloating: Spleen Qi and Gas Relief Foods",
    excerpt: "Always bloated? Chinese medicine views bloating as weak Spleen Qi or Liver Qi Stagnation. Learn which warm foods may help.",
    tag: "Qi Deficient",
    readTime: "12 min",
  },
  {
    slug: "yin-and-yang",
    title: "Yin and Yang in Chinese Medicine: Balance, Foods and Body Types",
    excerpt: "What is yin and yang? Learn how this ancient concept explains why you feel hot or cold, and which foods may help restore balance.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "five-elements-theory",
    title: "Five Elements Theory: Wood, Fire, Earth, Metal, Water",
    excerpt: "The Five Elements theory connects everything in nature. Learn what each element means for your organs, emotions, and health.",
    tag: "Overview",
    readTime: "12 min",
  },
  {
    slug: "meridians-chinese-medicine",
    title: "Meridians in Chinese Medicine: Energy Pathways Explained",
    excerpt: "What are meridians? Learn how Chinese medicine maps energy pathways through your body and what happens when flow is blocked.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "what-is-dampness",
    title: "What Is Dampness in Chinese Medicine? Signs, Causes and Foods",
    excerpt: "Feeling heavy, foggy, and sluggish? It may be dampness. Learn what causes it and which foods may help clear it.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "what-is-shen",
    title: "What Is Shen in Chinese Medicine? The Mind-Body Connection",
    excerpt: "Shen is the Chinese medicine concept of spirit and consciousness. Learn how it affects sleep, mood, and mental clarity.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "what-is-jing",
    title: "What Is Jing in Chinese Medicine? Your Vital Essence Explained",
    excerpt: "Jing is your deepest energy reserve. Learn how it affects aging and vitality, and which foods may help preserve it.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "chinese-herbs-for-energy",
    title: "Chinese Herbs for Energy: Top Herbs to Fight Fatigue",
    excerpt: "Always tired? Learn which Chinese herbs and foods may help rebuild your energy naturally.",
    tag: "Nutrition",
    readTime: "10 min",
  },
  {
    slug: "tcm-diet",
    title: "TCM Diet: A Complete Guide to Eating According to Chinese Medicine",
    excerpt: "What is a TCM diet? Learn the core principles of Chinese medicine eating and how to match food to your body type.",
    tag: "Nutrition",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-cold-hands",
    title: "Chinese Medicine for Cold Hands and Feet: Causes and Warming Foods",
    excerpt: "Always cold? Chinese medicine says cold extremities may signal Yang Deficiency. Learn which warming foods may help.",
    tag: "Yang Deficient",
    readTime: "10 min",
  },
  {
    slug: "chinese-medicine-for-night-sweats",
    title: "Chinese Medicine for Night Sweats: Causes and Cooling Foods",
    excerpt: "Waking up drenched? Night sweats may signal Yin Deficiency. Learn which cooling foods may help reduce overnight sweating.",
    tag: "Yin Deficient",
    readTime: "10 min",
  },
  {
    slug: "chinese-medicine-for-brain-fog",
    title: "Chinese Medicine for Brain Fog: Causes and Clarity Foods",
    excerpt: "Can&apos;t think clearly? Brain fog may mean Spleen Qi Deficiency or Dampness. Learn which foods may help clear your head.",
    tag: "Qi Deficient",
    readTime: "10 min",
  },
  {
    slug: "food-therapy-chinese-medicine",
    title: "Food Therapy in Chinese Medicine: Healing with Everyday Meals",
    excerpt: "Food therapy is the first line of treatment in Chinese medicine. Learn the core principles and how to start today.",
    tag: "Nutrition",
    readTime: "10 min",
  },
  {
    slug: "what-is-chinese-medicine",
    title: "What Is Chinese Medicine? A Complete Beginner's Guide to TCM",
    excerpt: "Everything you need to know about TCM: what it is, how it works, the 5 branches, 9 body types, and how it differs from Western medicine.",
    tag: "Overview",
    readTime: "12 min",
  },
  {
    slug: "chinese-medicine-for-beginners",
    title: "Chinese Medicine for Beginners: A Practical Starter Guide",
    excerpt: "New to Chinese medicine? Learn the 3 key concepts, 5 must-know foods, a simple 7-day starter plan, and common mistakes to avoid.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "chinese-medicine-body-types",
    title: "The 9 Chinese Medicine Body Types — A Complete Guide",
    excerpt: "Chinese medicine identifies 9 body constitutions — each with unique physical patterns, emotional tendencies, and ideal foods.",
    tag: "Overview",
    readTime: "10 min",
  },
  {
    slug: "what-is-qi",
    title: "What Is Qi (Chi) Energy? Chinese Medicine's Core Concept Explained",
    excerpt: "Qi is the vital energy behind every function in your body. Learn what it is, how it moves, and what happens when it goes wrong.",
    tag: "Overview",
    readTime: "9 min",
  },
  {
    slug: "tcm-tongue-diagnosis",
    title: "Tongue Diagnosis in Chinese Medicine: What Your Tongue Reveals",
    excerpt: "Your tongue is a daily health dashboard. Learn what color, coating, and shape mean in Chinese medicine.",
    tag: "Overview",
    readTime: "8 min",
  },
  {
    slug: "cooling-foods-chinese-medicine",
    title: "Cooling Foods in Chinese Medicine: What to Eat When You Run Hot",
    excerpt: "Mung beans, pear, lotus root, and more. A complete guide to cooling foods and how to use them.",
    tag: "Nutrition",
    readTime: "8 min",
  },
  {
    slug: "eastern-vs-western-medicine",
    title: "Eastern vs Western Medicine: What Each System Does Best",
    excerpt: "A practical comparison of Chinese medicine and Western medicine, and how to use both together.",
    tag: "Overview",
    readTime: "7 min",
  },
  {
    slug: "chinese-medicine-foods-for-energy",
    title: "Chinese Medicine Foods for Energy: What to Eat When You're Always Tired",
    excerpt: "The right foods can rebuild your Qi. Warm, cooked, easy-to-digest meals are the foundation of energy recovery.",
    tag: "Nutrition",
    readTime: "7 min",
  },
  {
    slug: "foods-that-warm-your-body",
    title: "Foods That Warm Your Body From the Inside",
    excerpt: "Ginger, cinnamon, lamb, and other warming foods stoke your inner furnace. Essential for Yang Deficient types.",
    tag: "Nutrition",
    readTime: "7 min",
  },
]

const tagColors: Record<string, string> = {
  "Overview": "bg-accent/15 text-accent",
  "Qi Deficient": "bg-amber-900/20 text-amber-400",
  "Yang Deficient": "bg-sky-900/20 text-sky-400",
  "Yin Deficient": "bg-red-900/20 text-red-400",
  "Phlegm Damp": "bg-emerald-900/20 text-emerald-400",
  "Damp Heat": "bg-orange-900/20 text-orange-400",
  "Qi Stagnant": "bg-purple-900/20 text-purple-400",
  "Nutrition": "bg-lime-900/20 text-lime-400",
}

export default function WellnessIndexPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Wellness", url: "https://www.myeasterntype.com/wellness" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-5xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">
          EastType
        </Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">Wellness</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        Wellness Guides
      </h1>
      <p className="text-text2 text-base mb-10 leading-relaxed max-w-xl">
        Free Chinese medicine guides. Understand your body&apos;s signals through 3,000 years of TCM body type wisdom, explained in plain English.
      </p>

      <WellnessList articles={articles} />

      <div className="mt-12 text-center">
        <p className="text-text2 text-sm mb-4">
          Not sure which guide is for you? Discover your body type first.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_30px_rgba(140,45,42,0.2)]"
        >
          Take the Free Quiz →
        </Link>
      </div>
    </main>
    </>
  )
}
