import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from "docx"
import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { SYMPTOMS } from "../src/lib/symptoms-data.js"
import { generateSymptomCard } from "../src/lib/prompt-generator.js"

const allSlugs = Object.keys(SYMPTOMS)
const CTA_OPTIONS: Array<"none" | "brand" | "cta"> = ["none", "brand", "cta"]
const RATIO: "9:16" = "9:16"

const sections: Paragraph[] = []

let index = 1
for (const slug of allSlugs) {
  const card = generateSymptomCard(slug, "none", RATIO, [])
  if (!card) continue

  const ctaBrand = generateSymptomCard(slug, "brand", RATIO, [])
  const ctaCta = generateSymptomCard(slug, "cta", RATIO, [])

  sections.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({ text: `${index}. ${card.title}`, bold: true, size: 28, color: "C9A355" }),
      ],
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `Slug: ${slug}`, size: 18, color: "7a6e5e" }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `Cause: ${card.cause}`, size: 20, color: "b5a890" }),
      ],
      spacing: { after: 50 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `Symptoms: ${card.symptoms.join(" · ")}`, size: 20, color: "b5a890" }),
      ],
      spacing: { after: 50 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `Foods: ${card.foods.map((f) => `${f.en} (${f.zh})`).join(", ")}`, size: 20, color: "b5a890" }),
      ],
      spacing: { after: 200 },
    }),
  )

  for (const ctaType of CTA_OPTIONS) {
    const c = ctaType === "none" ? card : ctaType === "brand" ? ctaBrand! : ctaCta!
    const labelMap = { none: "纯价值图（无CTA）", brand: "品牌图", cta: "CTA图" }

    sections.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [
          new TextRun({ text: `Image2 画图提示词 — ${labelMap[ctaType]}`, bold: true, size: 22, color: "C9A355" }),
        ],
        spacing: { before: 200, after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: c.imagePrompt, size: 18, color: "b5a890" }),
        ],
        spacing: { after: 200 },
      }),
    )
  }

  sections.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [
        new TextRun({ text: "Pinterest 文案 + 标签", bold: true, size: 22, color: "C9A355" }),
      ],
      spacing: { before: 200, after: 50 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: card.caption, size: 18, color: "b5a890" }),
      ],
      spacing: { after: 50 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: card.hashtags, size: 16, color: "7a6e5e" }),
      ],
      spacing: { after: 400 },
    }),
    new Paragraph({
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 1, color: "2a2418" },
      },
      spacing: { after: 200 },
      children: [],
    }),
  )

  index++
}

const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: { top: 720, bottom: 720, left: 720, right: 720 },
      },
    },
    children: [
      new Paragraph({
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "EastType 症状卡生成器 — 70条完整输出", bold: true, size: 36, color: "C9A355" }),
        ],
        spacing: { after: 100 },
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: `共 ${allSlugs.length} 个症状 · 每条包含3种CTA的画图提示词 + Pinterest文案`, size: 22, color: "7a6e5e" }),
        ],
        spacing: { after: 400 },
      }),
      ...sections,
    ],
  }],
})

async function main() {
  const buffer = await Packer.toBuffer(doc)
  const outputPath = join(process.cwd(), "output", "70-symptom-cards.docx")
  writeFileSync(outputPath, buffer)
  console.log(`Done! Saved to: ${outputPath}`)
  console.log(`Total symptoms: ${allSlugs.length}`)
}

main().catch(console.error)
