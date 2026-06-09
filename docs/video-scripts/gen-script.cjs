const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = require("docx")
const { writeFileSync, mkdirSync } = require("node:fs")
const { join } = require("node:path")

const FONT_EN = "Calibri"
const FONT_ZH = "Microsoft YaHei"

function makeScriptDoc(topic, scripts, outputPath) {
  const children = []

  children.push(new Paragraph({
    children: [new TextRun({ text: "BODY TRANSLATOR \u2014 Video Scripts", font: FONT_EN, size: 36, bold: true, color: "C9A355" })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: `Topic: ${topic}`, font: FONT_EN, size: 28, bold: true })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "Formula: OPEN \u2192 TRANSLATE \u2192 EXPLAIN \u2192 TIP \u2192 CLOSE", font: FONT_EN, size: 20, color: "888888" })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 },
  }))

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i]

    if (i > 0) {
      children.push(new Paragraph({
        children: [new TextRun({ text: "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501", font: FONT_EN, size: 16, color: "CCCCCC" })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
      }))
    }

    children.push(new Paragraph({
      children: [new TextRun({ text: `Version ${script.version}`, font: FONT_EN, size: 28, bold: true, color: "C9A355" })],
      spacing: { before: 200, after: 300 },
    }))

    for (const section of script.sections) {
      children.push(new Paragraph({
        children: [new TextRun({ text: `[${section.label}]`, font: FONT_EN, size: 22, bold: true, color: "333333" })],
        spacing: { before: 300, after: 100 },
      }))

      const enLines = section.en.split("\n").filter(l => l.trim())
      for (const line of enLines) {
        children.push(new Paragraph({
          children: [new TextRun({ text: line.trim(), font: FONT_EN, size: 22 })],
          spacing: { after: 80 },
        }))
      }

      children.push(new Paragraph({
        children: [new TextRun({ text: "", size: 10 })],
        spacing: { after: 40 },
      }))

      const zhLines = section.zh.split("\n").filter(l => l.trim())
      for (const line of zhLines) {
        children.push(new Paragraph({
          children: [new TextRun({ text: line.trim(), font: FONT_ZH, size: 21, color: "666666" })],
          spacing: { after: 60 },
        }))
      }
    }
  }

  children.push(new Paragraph({
    children: [new TextRun({ text: "", size: 10 })],
    spacing: { before: 400 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501", font: FONT_EN, size: 16, color: "CCCCCC" })],
    alignment: AlignmentType.CENTER,
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "POSTING SCHEDULE", font: FONT_EN, size: 22, bold: true, color: "333333" })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 100 },
  }))

  const schedule = [
    `Version ${scripts[0].version} \u2014 Day 1 (Monday)`,
    `Version ${scripts[1].version} \u2014 Day 3 (Wednesday)`,
    `Version ${scripts[2].version} \u2014 Day 5 (Friday)`,
  ]
  for (const s of schedule) {
    children.push(new Paragraph({
      children: [new TextRun({ text: s, font: FONT_EN, size: 20, color: "666666" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
    }))
  }

  children.push(new Paragraph({
    children: [new TextRun({ text: "Space them out. Do not post all 3 on the same day.", font: FONT_EN, size: 18, color: "999999" })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 100 },
  }))

  const doc = new Document({
    sections: [{
      properties: {
        page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
      },
      children,
    }],
  })

  Packer.toBuffer(doc).then(buffer => {
    writeFileSync(outputPath, buffer)
    console.log(`Created: ${outputPath}`)
  })
}

const topic = "Why Are You Always Tired?"

const scripts = [
  {
    version: "A",
    sections: [
      {
        label: "OPEN",
        en: "Another signal from your body. Let's see what this one means.\nWhy are you always tired?",
        zh: "\u4f60\u8eab\u4f53\u7684\u53c8\u4e00\u4e2a\u4fe1\u53f7\u3002\u6765\u770b\u770b\u8fd9\u4e2a\u662f\u4ec0\u4e48\u610f\u601d\u3002\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7d2f\uff1f",
      },
      {
        label: "TRANSLATE",
        en: "In another language, this is called Qi deficiency.\nThat means your body's battery can't hold a charge.",
        zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u8eab\u4f53\u7535\u6c60\u5145\u4e0d\u6ee1\u3002",
      },
      {
        label: "EXPLAIN",
        en: "Other people sleep and wake up at 100%. You sleep and wake up at 40%. By 3pm, you're done. Not because you're lazy. Because your battery was never full to begin with.",
        zh: "\u522b\u4eba\u7761\u4e00\u89c9\u9192100%\u3002\u4f60\u7761\u4e00\u89c9\u919240%\u3002\u5230\u4e0b\u5348\u4e09\u70b9\u4f60\u5c31\u6491\u4e0d\u4f4f\u4e86\u3002\u4e0d\u662f\u56e0\u4e3a\u4f60\u61d2\u3002\u662f\u56e0\u4e3a\u4f60\u7684\u7535\u6c60\u4ece\u4e00\u5f00\u59cb\u5c31\u6ca1\u6ee1\u8fc7\u3002",
      },
      {
        label: "TIP",
        en: "Try warm water with a slice of ginger every morning. Simple. But it might help.",
        zh: "\u8bd5\u8bd5\u6bcf\u5929\u65e9\u4e0a\u559d\u6e29\u6c34\u52a0\u4e00\u7247\u59dc\u3002\u7b80\u5355\u3002\u4f46\u53ef\u80fd\u6709\u5e2e\u52a9\u3002",
      },
      {
        label: "CLOSE",
        en: "Follow me. I'll tell you what your body's been trying to say... in another language.",
        zh: "\u5173\u6ce8\u6211\u3002\u6211\u7528\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u544a\u8bc9\u4f60\u8eab\u4f53\u4e00\u76f4\u5728\u8bf4\u4ec0\u4e48\u3002",
      },
    ],
  },
  {
    version: "B",
    sections: [
      {
        label: "OPEN",
        en: "Another signal from your body. Let's see what this one means.\nWhy are you always tired?",
        zh: "\u4f60\u8eab\u4f53\u7684\u53c8\u4e00\u4e2a\u4fe1\u53f7\u3002\u6765\u770b\u770b\u8fd9\u4e2a\u662f\u4ec0\u4e48\u610f\u601d\u3002\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7d2f\uff1f",
      },
      {
        label: "TRANSLATE",
        en: "In another language, this is called Qi deficiency.\nThat means your body's signal is weak.",
        zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u8eab\u4f53\u4fe1\u53f7\u5f88\u5f31\u3002",
      },
      {
        label: "EXPLAIN",
        en: "You know when your phone has 1 bar of signal? It still works. But everything is slow. Pages won't load. Videos buffer. That's your body on low Qi. You're not broken. You're just on 1 bar.",
        zh: "\u4f60\u77e5\u9053\u624b\u673a\u53ea\u5269\u4e00\u683c\u4fe1\u53f7\u7684\u65f6\u5019\u5417\uff1f\u8fd8\u80fd\u7528\u3002\u4f46\u4ec0\u4e48\u90fd\u6162\u3002\u7f51\u9875\u6253\u4e0d\u5f00\u3002\u89c6\u9891\u4e00\u76f4\u8f6c\u5708\u3002\u4f60\u7684\u8eab\u4f53\u6c14\u865a\u5c31\u662f\u8fd9\u6837\u3002\u4f60\u6ca1\u6709\u574f\u3002\u4f60\u53ea\u662f\u4e00\u683c\u4fe1\u53f7\u3002",
      },
      {
        label: "TIP",
        en: "Try warm ginger water in the morning. It's like giving your body a signal boost.",
        zh: "\u8bd5\u8bd5\u65e9\u4e0a\u559d\u6e29\u6c34\u52a0\u59dc\u3002\u5c31\u50cf\u7ed9\u4f60\u7684\u8eab\u4f53\u52a0\u5f3a\u4fe1\u53f7\u3002",
      },
      {
        label: "CLOSE",
        en: "Follow me. I'll tell you what your body's been trying to say... in another language.",
        zh: "\u5173\u6ce8\u6211\u3002\u6211\u7528\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u544a\u8bc9\u4f60\u8eab\u4f53\u4e00\u76f4\u5728\u8bf4\u4ec0\u4e48\u3002",
      },
    ],
  },
  {
    version: "C",
    sections: [
      {
        label: "OPEN",
        en: "Another signal from your body. Let's see what this one means.\nWhy are you always tired?",
        zh: "\u4f60\u8eab\u4f53\u7684\u53c8\u4e00\u4e2a\u4fe1\u53f7\u3002\u6765\u770b\u770b\u8fd9\u4e2a\u662f\u4ec0\u4e48\u610f\u601d\u3002\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7d2f\uff1f",
      },
      {
        label: "TRANSLATE",
        en: "In another language, this is called Qi deficiency.\nThat means your body is running on fumes.",
        zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u8eab\u4f53\u5728\u7a7a\u8f6c\u3002",
      },
      {
        label: "EXPLAIN",
        en: "You sleep 8 hours. Still tired. You drink coffee. Still tired. You take a nap. Still tired. Nothing works because the problem isn't sleep. It's energy production. Your body forgot how to make enough of it.",
        zh: "\u4f60\u77618\u5c0f\u65f6\u3002\u8fd8\u662f\u7d2f\u3002\u4f60\u559d\u5496\u5561\u3002\u8fd8\u662f\u7d2f\u3002\u4f60\u5348\u7761\u3002\u8fd8\u662f\u7d2f\u3002\u4ec0\u4e48\u90fd\u6ca1\u7528\uff0c\u56e0\u4e3a\u95ee\u9898\u4e0d\u5728\u7761\u7720\u3002\u5728\u4e8e\u80fd\u91cf\u751f\u4ea7\u3002\u4f60\u7684\u8eab\u4f53\u5fd8\u4e86\u600e\u4e48\u5236\u9020\u8db3\u591f\u7684\u80fd\u91cf\u3002",
      },
      {
        label: "TIP",
        en: "One thing: stop drinking ice water. Switch to warm. Your body spends less energy heating it up. Small change. But it adds up.",
        zh: "\u4e00\u4ef6\u4e8b\uff1a\u522b\u559d\u51b0\u6c34\u4e86\u3002\u6539\u559d\u6e29\u7684\u3002\u4f60\u7684\u8eab\u4f53\u4e0d\u7528\u82b1\u989d\u5916\u80fd\u91cf\u53bb\u52a0\u70ed\u5b83\u3002\u5c0f\u6539\u53d8\u3002\u4f46\u6709\u7d2f\u79ef\u6548\u679c\u3002",
      },
      {
        label: "CLOSE",
        en: "Follow me. I'll tell you what your body's been trying to say... in another language.",
        zh: "\u5173\u6ce8\u6211\u3002\u6211\u7528\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u544a\u8bc9\u4f60\u8eab\u4f53\u4e00\u76f4\u5728\u8bf4\u4ec0\u4e48\u3002",
      },
    ],
  },
]

const outDir = "D:\\EastType\\easttype-app\\docs\\video-scripts"
mkdirSync(outDir, { recursive: true })
const outFile = join(outDir, "01-fatigue-3-versions.docx")
makeScriptDoc(topic, scripts, outFile)
