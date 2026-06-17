import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { META_UPDATES } from "./meta-updates.js"

const filePath = join(process.cwd(), "src/lib/symptoms-data.ts")
let content = readFileSync(filePath, "utf-8")

let updated = 0
let skipped: string[] = []

for (const [slug, { title, desc }] of Object.entries(META_UPDATES)) {
  // Escape special regex chars in values
  const escTitle = title.replace(/[$()*+.?[\\\]^{|}-]/g, "\\$&")
  const escDesc = desc.replace(/[$()*+.?[\\\]^{|}-]/g, "\\$&")

  // Match the slug block and replace metaTitle within it
  const slugPattern = new RegExp(
    `("${slug.replace(/[$()*+.?[\\\]^{|}-]/g, "\\$&")}":\\s*\\{[\\s\\S]*?metaTitle:\\s*")([^"]*?)("[\\s\\S]*?metaDesc:\\s*")([^"]*?)(")`,
  )

  const newContent = content.replace(
    slugPattern,
    `$1${title}$3${desc}$5`,
  )

  if (newContent !== content) {
    content = newContent
    updated++
  } else {
    skipped.push(slug)
  }
}

writeFileSync(filePath, content, "utf-8")
console.log(`Updated: ${updated}/${Object.keys(META_UPDATES).length}`)
if (skipped.length > 0) {
  console.log(`Skipped (no match): ${skipped.join(", ")}`)
}
