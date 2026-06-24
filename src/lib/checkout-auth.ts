import { createHmac, timingSafeEqual } from "node:crypto"

const SECRET = process.env.CREEM_WEBHOOK_SECRET ?? "et-dev-fallback-secret"

interface CheckoutPayload {
  plan: string
  type: string
  sex: string
  exp: number
}

export function signCheckout(plan: string, type: string, sex: string): string {
  const payload: CheckoutPayload = {
    plan,
    type,
    sex,
    exp: Date.now() + 3_600_000,
  }
  const data = JSON.stringify(payload)
  const hmac = createHmac("sha256", SECRET).update(data).digest("hex")
  return Buffer.from(`${data}:${hmac}`).toString("base64url")
}

export function verifyCheckout(token: string): CheckoutPayload | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString()
    const sep = decoded.lastIndexOf(":")
    if (sep === -1) return null
    const data = decoded.slice(0, sep)
    const sig = decoded.slice(sep + 1)
    const expectedSig = createHmac("sha256", SECRET).update(data).digest("hex")
    if (sig.length !== expectedSig.length) return null
    if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) return null
    const payload = JSON.parse(data) as CheckoutPayload
    if (Date.now() > payload.exp) return null
    return payload
  } catch {
    return null
  }
}
