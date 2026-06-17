import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const MAPPING: Record<string, string> = {
  "why-am-i-always-tired": "when-youre-always-tired",
  "why-cant-i-fall-asleep": "when-you-cant-fall-asleep",
  "why-am-i-always-cold": "when-youre-always-cold",
  "always-bloated-after-eating": "when-youre-bloated",
  "why-do-i-have-brain-fog": "when-you-have-brain-fog",
  "why-do-i-feel-anxious": "when-you-feel-anxious",
  "why-cant-i-lose-weight": "when-you-cant-lose-weight",
  "why-is-my-skin-so-dry": "when-your-skin-is-dry",
  "why-do-i-have-acid-reflux": "when-you-have-acid-reflux",
  "why-am-i-so-irritable": "when-youre-irritable",
}

const SNIPPET = (foodSlug: string) => `
      <section className="mt-10 mb-4">
        <div className="bg-cream/30 border border-border rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
            What Foods May Help
          </h2>
          <p className="text-text2 text-sm leading-relaxed mb-3">
            We put together a full food guide for this symptom, including what to eat, what to avoid, and a simple daily meal plan.
          </p>
          <Link href="/foods-for/${foodSlug}" className="text-accent hover:underline text-[0.95rem] font-medium">
            See the food guide →
          </Link>
        </div>
      </section>
`

let updated = 0
let skipped: string[] = []

for (const [symptomSlug, foodSlug] of Object.entries(MAPPING)) {
  const filePath = join(process.cwd(), "src/app/symptoms", symptomSlug, "article.tsx")
  
  let content: string
  try {
    content = readFileSync(filePath, "utf-8")
  } catch {
    skipped.push(`${symptomSlug} (file not found)`)
    continue
  }

  if (content.includes("/foods-for/")) {
    skipped.push(`${symptomSlug} (already has food link)`)
    continue
  }

  const snippet = SNIPPET(foodSlug)
  const newContent = content.replace(
    /(\s*<SymptomCta\s*\/?>)/,
    `\n${snippet}\n$1`,
  )

  if (newContent !== content) {
    writeFileSync(filePath, newContent, "utf-8")
    updated++
    console.log(`Updated: ${symptomSlug}`)
  } else {
    skipped.push(`${symptomSlug} (no <SymptomCta> found)`)
  }
}

console.log(`\nUpdated: ${updated}/${Object.keys(MAPPING).length}`)
if (skipped.length > 0) {
  console.log(`Skipped: ${skipped.join(", ")}`)
}
