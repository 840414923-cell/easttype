import { Resend } from "resend"

interface WelcomeType {
  name: string
  slug: string
  blurb: string
}

const WELCOME_TYPES: WelcomeType[] = [
  {
    name: "Balanced",
    slug: "balanced",
    blurb:
      "The rare type that may enjoy steady energy, sound sleep, and easy digestion most of the time. You tend to recover quickly and keep an even mood. The work is simply not drifting out of balance through daily habits.",
  },
  {
    name: "Qi Deficient",
    slug: "qi_deficient",
    blurb:
      "Your energy tank tends to run smaller than most. You may tire before the day ends, feel breathless from mild effort, and prefer quiet to conserve energy. Warm, cooked foods and steady rest often refill the tank.",
  },
  {
    name: "Yang Deficient",
    slug: "yang_deficient",
    blurb:
      "You may run cold from the inside out: chilly hands, feet, and a slow-burning inner furnace. Warmth and hot drinks tend to ease discomfort, while cold weather can slow your digestion down.",
  },
  {
    name: "Yin Deficient",
    slug: "yin_deficient",
    blurb:
      "Calm on the outside, but hot and dry on the inside. You may wake at 3 AM with a racing mind, feel parched, and find it hard to switch off. Your internal cooling system tends to run low.",
  },
  {
    name: "Phlegm Damp",
    slug: "phlegm_damp",
    blurb:
      "You may feel weighed down, like wearing a damp blanket, with stubborn weight and foggy mornings. Fluid metabolism tends to pool instead of flow. Light, warm, simple meals often suit you better.",
  },
  {
    name: "Damp Heat",
    slug: "damp_heat",
    blurb:
      "Like a perpetual internal summer: hot, sticky, and easily inflamed. You may deal with recurring breakouts, rashes, and a quick temper. Cooling, less oily foods tend to help.",
  },
  {
    name: "Blood Stasis",
    slug: "blood_stasis",
    blurb:
      "Circulation may move slowly, so things pool and stagnate. You might bruise easily, notice dark circles, and feel things deeply. Gentle movement often encourages flow.",
  },
  {
    name: "Qi Stagnant",
    slug: "qi_stagnant",
    blurb:
      "Your emotions may run intense, but the energy gets trapped rather than flowing. A tight chest, frequent sighing, and shifting moods can feel familiar. Movement and self-expression tend to release the pressure.",
  },
  {
    name: "Sensitive",
    slug: "sensitive",
    blurb:
      "Your defense system may sit on high alert, reacting to pollen, dust, foods, and skincare that others tolerate. You might sense environmental shifts before anyone else. Gentle, simple routines tend to suit you best.",
  },
]

export function generateWelcomeHTML(): string {
  const typeCards = WELCOME_TYPES.map(
    (t) => `
    <div style="background:#fff;border-radius:12px;padding:20px 24px;margin-bottom:12px;border:1px solid #E8E0D0;">
      <h2 style="margin:0 0 8px;">
        <a href="https://www.myeasterntype.com/types/${t.slug}" style="color:#8C2D2A;text-decoration:none;font-size:17px;">
          ${t.name}
        </a>
      </h2>
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0;">
        ${t.blurb}
      </p>
    </div>
  `
  ).join("")

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <h1 style="color:#8C2D2A;font-size:24px;margin:0 0 4px;">Welcome to EastType</h1>
    <p style="color:#999;font-size:13px;margin:0 0 28px;">Let's find your body type</p>

    <p style="color:#444;font-size:15px;line-height:1.7;margin:0 0 24px;">
      There are nine body types in Chinese medicine. Your type is not a diagnosis. It is a pattern of tendencies: how you make energy, handle temperature, process fluids, and respond to stress. Knowing your type may help you choose the foods, habits, and rhythms that suit you.
    </p>

    <p style="color:#444;font-size:15px;line-height:1.7;margin:0 0 24px;">
      Below is a quick tour of all nine. The real goal is to find which one is yours.
    </p>

    ${typeCards}

    <div style="text-align:center;padding:32px 0 16px;">
      <a href="https://www.myeasterntype.com/quiz" style="background:#8C2D2A;color:#fff;padding:14px 36px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:bold;display:inline-block;">
        Take the Free Body Type Quiz
      </a>
    </div>

    <p style="color:#999;font-size:11px;text-align:center;margin-top:32px;line-height:1.6;">
      You are receiving this because you subscribed to EastType.<br>
      <a href="https://www.myeasterntype.com" style="color:#999;">Unsubscribe</a>
    </p>
  </div>
</body>
</html>`
}

export async function sendWelcomeEmail(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return { success: false, error: "RESEND_API_KEY not configured" }
    }

    const resend = new Resend(apiKey)
    const html = generateWelcomeHTML()
    const { error } = await resend.emails.send({
      from: "EastType <hello@myeasterntype.com>",
      to: email,
      subject: "Discover the 9 body types of Chinese medicine",
      html,
    })

    if (error) {
      return { success: false, error: error.message || JSON.stringify(error) }
    }
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err?.message || String(err) }
  }
}
