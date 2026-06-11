import { W, H, loadBgImage, drawBackground, drawOverlay, drawBrandFooter, drawWrappedText, initCanvas, canvasToJpg } from "./shared"
import type { ConstitutionId } from "@/lib/types"
import { TYPES } from "@/lib/constitution-data"

interface SymptomMapping {
  question: string
  types: { id: ConstitutionId; reason: string }[]
}

const SYMPTOM_MAPPINGS: SymptomMapping[] = [
  { question: "Why are you always tired?", types: [
    { id: "qi_deficient", reason: "Your engine runs, but the fuel tank is always low" },
    { id: "yang_deficient", reason: "Your inner furnace is underpowered" },
    { id: "phlegm_damp", reason: "Your body holds heavy moisture that drains energy" },
  ]},
  { question: "Why can't you fall asleep?", types: [
    { id: "yin_deficient", reason: "Your cooling system can't power down at night" },
    { id: "qi_stagnant", reason: "Your mind won't stop racing" },
    { id: "blood_stasis", reason: "Everything circulates, just not fast enough to rest" },
  ]},
  { question: "Why do you feel anxious for no reason?", types: [
    { id: "qi_stagnant", reason: "Energy is stuck in your chest — it can't flow freely" },
    { id: "yin_deficient", reason: "Internal heat creates restlessness" },
    { id: "blood_stasis", reason: "Slow circulation affects your heart's calm" },
  ]},
  { question: "Why are you always cold?", types: [
    { id: "yang_deficient", reason: "Your body lacks the warming energy it needs" },
    { id: "qi_deficient", reason: "Not enough energy to generate warmth" },
    { id: "blood_stasis", reason: "Blood can't carry warmth to your extremities" },
  ]},
  { question: "Why are you always bloated?", types: [
    { id: "phlegm_damp", reason: "Your body holds moisture like a sponge" },
    { id: "qi_deficient", reason: "Your digestion doesn't have enough energy to process" },
    { id: "qi_stagnant", reason: "Energy isn't flowing, so food just sits there" },
  ]},
  { question: "Why do you crave sweets every night?", types: [
    { id: "qi_deficient", reason: "Your Spleen is asking for quick energy" },
    { id: "phlegm_damp", reason: "Dampness confuses your body's hunger signals" },
    { id: "sensitive", reason: "Your body overreacts to blood sugar dips" },
  ]},
  { question: "Why does your skin keep breaking out?", types: [
    { id: "damp_heat", reason: "Heat and moisture push toxins through your skin" },
    { id: "yin_deficient", reason: "Internal heat rises to your face" },
    { id: "blood_stasis", reason: "Poor circulation means toxins aren't clearing" },
  ]},
  { question: "Why do you wake up at 3 AM?", types: [
    { id: "qi_stagnant", reason: "Your Liver energy is stuck — it peaks at 1-3 AM" },
    { id: "yin_deficient", reason: "Night heat wakes you up" },
    { id: "blood_stasis", reason: "Your body can't settle into deep rest" },
  ]},
  { question: "Why can't you lose weight?", types: [
    { id: "phlegm_damp", reason: "Your body holds moisture and metabolizes slowly" },
    { id: "yang_deficient", reason: "Low fire means slow metabolism" },
    { id: "qi_deficient", reason: "Not enough energy to process and move" },
  ]},
]

export { SYMPTOM_MAPPINGS }

export async function renderSymptomCard(mappingIdx: number, bgTypeId: ConstitutionId, code: string): Promise<string | null> {
  const mapping = SYMPTOM_MAPPINGS[mappingIdx]
  if (!mapping) return null

  const { canvas, ctx } = initCanvas() ?? {}
  if (!canvas || !ctx) return null

  const bgImg = await loadBgImage(bgTypeId)
  drawBackground(ctx, bgImg)
  drawOverlay(ctx, 0.05)

  ctx.font = `bold 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("EASTTYPE · SYMPTOM DECODER", W / 2, 80)

  ctx.font = `bold 56px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 12
  ctx.shadowOffsetY = 3
  const qBottom = drawWrappedText(ctx, mapping.question, W / 2, 150, W - 120, 56, 72)
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const labelY = qBottom + 50
  ctx.font = `bold 20px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.fillText("IT COULD BE...", W / 2, labelY)

  let y = labelY + 50
  for (let i = 0; i < mapping.types.length; i++) {
    const mt = mapping.types[i]
    const ct = TYPES[mt.id]

    ctx.fillStyle = "rgba(201,163,85,0.06)"
    ctx.fillRect(60, y, W - 120, 140)
    ctx.strokeStyle = `${ct.color}40`
    ctx.lineWidth = 2
    ctx.strokeRect(60, y, W - 120, 140)

    ctx.font = `bold 32px "Playfair Display", Georgia, serif`
    ctx.fillStyle = ct.color
    ctx.textAlign = "left"
    ctx.fillText(`#${i + 1}  ${ct.en}`, 100, y + 20)

    ctx.font = `400 18px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.4)"
    ctx.fillText(`${ct.zh} · ${ct.pct} of people`, 100, y + 60)

    ctx.font = `400 20px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.7)"
    ctx.fillText(mt.reason, 100, y + 95)

    y += 160
  }

  ctx.font = `bold 24px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.fillText("Take the free quiz to find out which one you are →", W / 2, y + 20)

  drawBrandFooter(ctx, code, y + 60)

  return canvasToJpg(canvas)
}
