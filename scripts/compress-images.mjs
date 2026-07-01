import fs from "fs"
import path from "path"
import sharp from "sharp"

async function compressDir(dir, maxWidth = 800, quality = 80) {
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const filePath = path.join(dir, file)
    const before = fs.statSync(filePath).size
    totalBefore += before

    const ext = path.extname(file).toLowerCase()
    const outFile = ext === ".png" ? filePath : filePath
    const tempFile = filePath + ".tmp"

    const img = sharp(filePath).rotate()
    const meta = await img.metadata()
    const shouldResize = meta.width > maxWidth

    if (shouldResize) {
      img.resize(maxWidth, null, { fit: "inside", withoutEnlargement: true })
    }

    if (ext === ".png") {
      await img.png({ quality, compressionLevel: 9, palette: true }).toFile(tempFile)
    } else {
      await img.jpeg({ quality, mozjpeg: true }).toFile(tempFile)
    }

    const afterSize = fs.statSync(tempFile).size
    if (afterSize < before) {
      fs.unlinkSync(filePath)
      fs.renameSync(tempFile, outFile)
    } else {
      fs.unlinkSync(tempFile)
    }
    totalAfter += Math.min(afterSize, before)
  }

  return { count: files.length, totalBefore, totalAfter }
}

const dirs = [
  { path: "public/images/herbs", maxWidth: 800, quality: 78 },
  { path: "public/images/solutions", maxWidth: 1200, quality: 82 },
]

let grandBefore = 0
let grandAfter = 0

for (const d of dirs) {
  console.log(`\nProcessing ${d.path}...`)
  const result = await compressDir(d.path, d.maxWidth, d.quality)
  grandBefore += result.totalBefore
  grandAfter += result.totalAfter
  console.log(`  Files: ${result.count}`)
  console.log(`  Before: ${(result.totalBefore / 1024 / 1024).toFixed(1)} MB`)
  console.log(`  After:  ${(result.totalAfter / 1024 / 1024).toFixed(1)} MB`)
  console.log(`  Saved:  ${((1 - result.totalAfter / result.totalBefore) * 100).toFixed(1)}%`)
}

console.log(`\n=== TOTAL ===`)
console.log(`Before: ${(grandBefore / 1024 / 1024).toFixed(1)} MB`)
console.log(`After:  ${(grandAfter / 1024 / 1024).toFixed(1)} MB`)
console.log(`Saved:  ${((1 - grandAfter / grandBefore) * 100).toFixed(1)}%`)
