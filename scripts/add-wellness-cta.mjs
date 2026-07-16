import fs from 'fs'
import path from 'path'

const group = process.argv[2]
if (!group) {
  console.error('Usage: node scripts/add-wellness-cta.mjs <group1|group2|group3|group4>')
  process.exit(1)
}

const groups = {
  group1: [
    'blood-deficiency','chinese-face-mapping','chinese-herbs-for-energy',
    'chinese-medicine-body-types','chinese-medicine-foods-for-energy',
    'chinese-medicine-for-acid-reflux','chinese-medicine-for-acne',
    'chinese-medicine-for-anxiety','chinese-medicine-for-beginners',
    'chinese-medicine-for-bloating','chinese-medicine-for-brain-fog',
    'chinese-medicine-for-cold-hands','chinese-medicine-for-constipation',
    'chinese-medicine-for-depression',
  ],
  group2: [
    'chinese-medicine-for-digestion','chinese-medicine-for-eczema',
    'chinese-medicine-for-fatigue','chinese-medicine-for-hair-loss',
    'chinese-medicine-for-high-blood-pressure','chinese-medicine-for-hot-flashes',
    'chinese-medicine-for-insomnia','chinese-medicine-for-menopause',
    'chinese-medicine-for-migraines','chinese-medicine-for-nausea',
    'chinese-medicine-for-night-sweats','chinese-medicine-for-pcos',
    'chinese-medicine-for-pms','chinese-medicine-for-tinnitus',
  ],
  group3: [
    'chinese-medicine-for-weight-loss','cooling-foods-chinese-medicine',
    'eastern-vs-western-medicine','five-elements-theory',
    'food-therapy-chinese-medicine','foods-that-warm-your-body',
    'heart-yin-deficiency','kidney-yang-deficiency','kidney-yin-deficiency',
    'liver-fire','liver-qi-stagnation','lung-qi-deficiency',
    'meridians-chinese-medicine',
  ],
  group4: [
    'spleen-dampness','spleen-qi-deficiency','stomach-heat',
    'tcm-body-clock','tcm-diet','tcm-tongue-diagnosis',
    'what-is-blood','what-is-chinese-medicine','what-is-dampness',
    'what-is-jing','what-is-qi','what-is-shen','yin-and-yang',
  ],
}

const slugs = groups[group]
if (!slugs) {
  console.error(`Unknown group: ${group}`)
  process.exit(1)
}

const baseDir = path.resolve('src/app/wellness')
let done = 0
let skipped = 0
let errors = 0

for (const slug of slugs) {
  const filePath = path.join(baseDir, slug, 'article.tsx')

  if (!fs.existsSync(filePath)) {
    console.error(`  NOT FOUND: ${slug}`)
    errors++
    continue
  }

  let content = fs.readFileSync(filePath, 'utf8')

  if (content.includes('InlineQuizCta')) {
    console.log(`  SKIP (already has CTA): ${slug}`)
    skipped++
    continue
  }

  const oldImport = 'import SymptomCta from "@/components/symptom-cta"'
  const newImport = 'import SymptomCta from "@/components/symptom-cta"\nimport InlineQuizCta from "@/components/inline-quiz-cta"'

  if (!content.includes(oldImport)) {
    console.error(`  IMPORT NOT FOUND: ${slug}`)
    errors++
    continue
  }

  content = content.replace(oldImport, newImport)

  const faqPattern = /<FaqSection/
  if (!faqPattern.test(content)) {
    console.error(`  FAQSECTION NOT FOUND: ${slug}`)
    errors++
    continue
  }

  content = content.replace(faqPattern, '<InlineQuizCta />\n\n      <FaqSection')

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`  DONE: ${slug}`)
  done++
}

console.log(`\n${group}: ${done} done, ${skipped} skipped, ${errors} errors`)
