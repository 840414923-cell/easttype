import { W, H, loadBgImage, drawBackground, drawOverlay, drawFooter, initCanvas, canvasToJpg } from "./shared"
import type { ConstitutionId } from "@/lib/types"

export interface SymptomCard {
  question: string
  insight: string
  tip: string
  bgType?: ConstitutionId
}

export const SYMPTOM_CARDS: SymptomCard[] = [
  { question: "Why are you always tired?", insight: "It's not laziness. Your body runs on a fuel type — and you might be using the wrong one.", tip: "Warm, cooked breakfast before 9 AM may help more than coffee.", bgType: "qi_deficient" },
  { question: "Why do you wake up at 3 AM?", insight: "In Eastern medicine, 1–3 AM is Liver time. If something is stuck, your body won't let you sleep.", tip: "Try a 10-minute walk before bed. Movement unsticks what sitting blocks.", bgType: "qi_stagnant" },
  { question: "Why are your hands always cold?", insight: "Your inner furnace might be underpowered. Some bodies are just built for more warmth.", tip: "Add ginger and cinnamon to your morning routine. Small fire, big difference.", bgType: "yang_deficient" },
  { question: "Why can't you fall asleep even when you're exhausted?", insight: "Your body is running hot while your mind is running empty. The cooling system needs a recharge.", tip: "Avoid screens after 9 PM. Your body needs darkness to power down.", bgType: "yin_deficient" },
  { question: "Why are you always bloated?", insight: "Your body holds moisture like a sponge. It's not what you eat — it's what your body can't process.", tip: "Skip ice water with meals. Warm liquids help your digestion work with you, not against you.", bgType: "phlegm_damp" },
  { question: "Why does anxiety show up for no reason?", insight: "In Eastern medicine, that tight feeling in your chest is energy that can't flow. It's not in your head.", tip: "Deep breathing isn't a cliché. 4 slow breaths can physically move stuck energy.", bgType: "qi_stagnant" },
  { question: "Why do you crave sweets every night?", insight: "Your body isn't addicted. It's asking for quick energy because the slow kind isn't working.", tip: "Swap the 10 PM chocolate for warm sweet potato. Same comfort, different fuel.", bgType: "qi_deficient" },
  { question: "Why can't you lose weight no matter what?", insight: "It might not be calories. Some bodies hold moisture that makes everything heavier.", tip: "Try reducing raw, cold foods. Your digestion works better with warmth.", bgType: "phlegm_damp" },
  { question: "Why does your face keep breaking out?", insight: "Your skin is a vent. When internal heat has nowhere to go, it pushes through your face.", tip: "Cut back on spicy, fried food for 2 weeks. Watch what happens.", bgType: "damp_heat" },
  { question: "Why do you get sick every time the seasons change?", insight: "Your body's protective shield might be too thin. Some people need more armor between them and the weather.", tip: "Dress in layers during transitions. Don't let your body fight the season bare-handed.", bgType: "sensitive" },
  { question: "Why do you bruise so easily?", insight: "Everything in your body flows — just not fast enough. Slow circulation means slow recovery.", tip: "Gentle movement beats intense exercise for your type. Think walks, not marathons.", bgType: "blood_stasis" },
  { question: "Why do night sweats wake you up?", insight: "Your cooling system is undercharged. The body is trying to release heat it can't regulate.", tip: "Cooling foods help: mung bean soup, watermelon, pears. Your body needs the opposite of spice.", bgType: "yin_deficient" },
  { question: "Why does your lower back ache every morning?", insight: "In Eastern medicine, the lower back is powered by your deepest energy reserve. When it's low, you feel it first thing.", tip: "Don't stretch cold. Warm your back with a hot towel for 3 minutes before getting up.", bgType: "yang_deficient" },
  { question: "Why does your brain feel foggy all day?", insight: "Fog isn't age. It's often moisture your body can't clear — like a window that won't defog.", tip: "Start the day with warm water and lemon. Help your body clear what it's holding.", bgType: "phlegm_damp" },
  { question: "Why do you overthink everything?", insight: "Your mind races because your energy can't flow. The pressure has to go somewhere.", tip: "Write it down. Not to solve — to release. Your mind needs a pressure valve.", bgType: "qi_stagnant" },
]

export async function renderSymptomCard(idx: number, code?: string): Promise<string | null> {
  const card = SYMPTOM_CARDS[idx]
  if (!card) return null

  const { canvas, ctx } = initCanvas() ?? {}
  if (!canvas || !ctx) return null

  const bgImg = await loadBgImage(card.bgType || "qi_deficient")
  drawBackground(ctx, bgImg)
  drawOverlay(ctx)

  ctx.font = `bold 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.7)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.letterSpacing = "3px"
  ctx.fillText("EASTTYPE", W / 2, 100)

  ctx.font = `bold 64px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 15
  ctx.shadowOffsetY = 4
  ctx.letterSpacing = "0px"

  const qY = 380
  const words = card.question.split(" ")
  const lines: string[] = []
  let current = ""
  for (const w of words) {
    const test = current ? `${current} ${w}` : w
    if (ctx.measureText(test).width > W - 160 && current) {
      lines.push(current)
      current = w
    } else {
      current = test
    }
  }
  if (current) lines.push(current)

  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], W / 2, qY + i * 80)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const qBottom = qY + lines.length * 80 + 40

  ctx.font = `400 26px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.85)"
  ctx.textAlign = "center"
  const insightBottom = wrapAndDraw(ctx, card.insight, W / 2, qBottom, W - 180, 26, 38)

  const tipY = insightBottom + 50

  ctx.fillStyle = "rgba(201,163,85,0.12)"
  const tipPad = 40
  const tipBoxY = tipY - 15
  const tipBoxH = 110
  roundRect(ctx, 80, tipBoxY, W - 160, tipBoxH, 16)
  ctx.fill()
  ctx.strokeStyle = "rgba(201,163,85,0.25)"
  ctx.lineWidth = 1
  roundRect(ctx, 80, tipBoxY, W - 160, tipBoxH, 16)
  ctx.stroke()

  ctx.font = `bold 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.fillText("QUICK TIP", W / 2, tipY + 5)

  ctx.font = `400 20px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.7)"
  wrapAndDraw(ctx, card.tip, W / 2, tipY + 32, W - 240, 20, 30)

  drawFooter(ctx, code)

  return canvasToJpg(canvas)
}

function wrapAndDraw(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number,
): number {
  ctx.font = `${ctx.font}`
  const words = text.split(" ")
  const lines: string[] = []
  let current = ""
  for (const w of words) {
    const test = current ? `${current} ${w}` : w
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current)
      current = w
    } else {
      current = test
    }
  }
  if (current) lines.push(current)
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + i * lineHeight)
  }
  return y + lines.length * lineHeight
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}
