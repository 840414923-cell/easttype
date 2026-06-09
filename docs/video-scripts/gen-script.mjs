import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, BorderStyle } from "docx"
import { writeFileSync, mkdirSync } from "node:fs"
import { join } from "node:path"

interface ScriptSection {
  label: string
  en: string
  zh: string
}

interface VideoScript {
  version: string
  topic: string
  sections: ScriptSection[]
}

const FONT_EN = "Calibri"
const FONT_ZH = "Microsoft YaHei"

function makeScriptDoc(topic: string, scripts: VideoScript[], outputPath: string) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
        },
      },
      children: buildChildren(topic, scripts),
    }],
  })

  Packer.toBuffer(doc).then(buffer => {
    writeFileSync(outputPath, buffer)
    console.log(`Created: ${outputPath}`)
  })
}

function buildChildren(topic: string, scripts: VideoScript[]): Paragraph[] {
  const children: Paragraph[] = []

  children.push(new Paragraph({
    children: [new TextRun({ text: "BODY TRANSLATOR — Video Scripts", font: FONT_EN, size: 36, bold: true, color: "C9A355" })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: `Topic: ${topic}`, font: FONT_EN, size: 28, bold: true })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "Formula: OPEN → TRANSLATE → EXPLAIN → TIP → CLOSE", font: FONT_EN, size: 20, color: "888888" })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 },
  }))

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i]

    if (i > 0) {
      children.push(new Paragraph({
        children: [new TextRun({ text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", font: FONT_EN, size: 16, color: "CCCCCC" })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
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
    children: [new TextRun({ text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", font: FONT_EN, size: 16, color: "CCCCCC" })],
    alignment: AlignmentType.CENTER,
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "POSTING SCHEDULE", font: FONT_EN, size: 22, bold: true, color: "333333" })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 100 },
  }))

  const schedule = [
    `Version ${scripts[0].version} — Day 1 (Monday)`,
    `Version ${scripts[1].version} — Day 3 (Wednesday)`,
    `Version ${scripts[2].version} — Day 5 (Friday)`,
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

  return children
}

const topic = "Why Are You Always Tired?"

const scripts: VideoScript[] = [
  {
    version: "A",
    topic: "Fatigue",
    sections: [
      {
        label: "OPEN",
        en: "Another signal from your body. Let's see what this one means.\nWhy are you always tired?",
        zh: "你身体的又一个信号。来看看这个是什么意思。\n你为什么总是累？",
      },
      {
        label: "TRANSLATE",
        en: "In another language, this is called Qi deficiency.\nThat means your body's battery can't hold a charge.",
        zh: "换一种语言来说，这叫气虚。\n意思是你的身体电池充不满。",
      },
      {
        label: "EXPLAIN",
        en: "Other people sleep and wake up at 100%. You sleep and wake up at 40%. By 3pm, you're done. Not because you're lazy. Because your battery was never full to begin with.",
        zh: "别人睡一觉醒来100%。你睡一觉醒来40%。到下午三点你就撑不住了。不是因为你懒。是因为你的电池从一开始就没满过。",
      },
      {
        label: "TIP",
        en: "Try warm water with a slice of ginger every morning. Simple. But it might help.",
        zh: "试试每天早上喝温水加一片姜。简单。但可能有帮助。",
      },
      {
        label: "CLOSE",
        en: "Follow me. I'll tell you what your body's been trying to say... in another language.",
        zh: "关注我。我用另一种语言，告诉你身体一直在说什么。",
      },
    ],
  },
  {
    version: "B",
    topic: "Fatigue",
    sections: [
      {
        label: "OPEN",
        en: "Another signal from your body. Let's see what this one means.\nWhy are you always tired?",
        zh: "你身体的又一个信号。来看看这个是什么意思。\n你为什么总是累？",
      },
      {
        label: "TRANSLATE",
        en: "In another language, this is called Qi deficiency.\nThat means your body's signal is weak.",
        zh: "换一种语言来说，这叫气虚。\n意思是你的身体信号很弱。",
      },
      {
        label: "EXPLAIN",
        en: "You know when your phone has 1 bar of signal? It still works. But everything is slow. Pages won't load. Videos buffer. That's your body on low Qi. You're not broken. You're just on 1 bar.",
        zh: "你知道手机只剩一格信号的时候吗？还能用。但什么都慢。网页打不开。视频一直转圈。你的身体气虚就是这样。你没有坏。你只是一格信号。",
      },
      {
        label: "TIP",
        en: "Try warm ginger water in the morning. It's like giving your body a signal boost.",
        zh: "试试早上喝温水加姜。就像给你的身体加强信号。",
      },
      {
        label: "CLOSE",
        en: "Follow me. I'll tell you what your body's been trying to say... in another language.",
        zh: "关注我。我用另一种语言，告诉你身体一直在说什么。",
      },
    ],
  },
  {
    version: "C",
    topic: "Fatigue",
    sections: [
      {
        label: "OPEN",
        en: "Another signal from your body. Let's see what this one means.\nWhy are you always tired?",
        zh: "你身体的又一个信号。来看看这个是什么意思。\n你为什么总是累？",
      },
      {
        label: "TRANSLATE",
        en: "In another language, this is called Qi deficiency.\nThat means your body is running on fumes.",
        zh: "换一种语言来说，这叫气虚。\n意思是你的身体在空转。",
      },
      {
        label: "EXPLAIN",
        en: "You sleep 8 hours. Still tired. You drink coffee. Still tired. You take a nap. Still tired. Nothing works because the problem isn't sleep. It's energy production. Your body forgot how to make enough of it.",
        zh: "你睡8小时。还是累。你喝咖啡。还是累。你午睡。还是累。什么都没用，因为问题不在睡眠。在于能量生产。你的身体忘了怎么制造足够的能量。",
      },
      {
        label: "TIP",
        en: "One thing: stop drinking ice water. Switch to warm. Your body spends less energy heating it up. Small change. But it adds up.",
        zh: "一件事：别喝冰水了。改喝温的。你的身体不用花额外能量去加热它。小改变。但有累积效果。",
      },
      {
        label: "CLOSE",
        en: "Follow me. I'll tell you what your body's been trying to say... in another language.",
        zh: "关注我。我用另一种语言，告诉你身体一直在说什么。",
      },
    ],
  },
]

const outDir = "D:\\EastType\\easttype-app\\docs\\video-scripts"
mkdirSync(outDir, { recursive: true })
const outFile = join(outDir, "01-fatigue-3-versions.docx")
makeScriptDoc(topic, scripts, outFile)
