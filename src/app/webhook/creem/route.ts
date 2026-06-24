import { Webhook } from "@creem_io/nextjs"

const webhookHandler = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onCheckoutCompleted: async (data) => {
    try {
      const url = process.env.UPSTASH_REDIS_REST_URL
      const token = process.env.UPSTASH_REDIS_REST_TOKEN
      if (!url || !token) return

      const { Redis } = await import("@upstash/redis")
      const redis = new Redis({ url, token })

      const checkoutId = data.id
      const metadata = data.metadata ?? {}
      const email = typeof data.customer === "string" ? data.customer : data.customer?.email

      const record = {
        plan: (metadata.plan as string) ?? "basic",
        type: (metadata.type as string) ?? "unknown",
        sex: (metadata.sex as string) ?? "unknown",
        email: email ?? "unknown",
        status: "active" as const,
        product: data.product?.name ?? "unknown",
        createdAt: new Date().toISOString(),
      }

      await redis.set(`purchase:${checkoutId}`, JSON.stringify(record))

      if (email && email !== "unknown") {
        await redis.set(`purchase:email:${email}`, checkoutId)
      }
    } catch {
      // Redis errors are non-fatal — webhook still returns 200
    }
  },
  onRefundCreated: async (data) => {
    try {
      const url = process.env.UPSTASH_REDIS_REST_URL
      const token = process.env.UPSTASH_REDIS_REST_TOKEN
      if (!url || !token) return

      const { Redis } = await import("@upstash/redis")
      const redis = new Redis({ url, token })

      const checkoutId = typeof data.checkout === "string"
        ? data.checkout
        : data.checkout?.id

      if (checkoutId) {
        const existing = await redis.get(`purchase:${checkoutId}`)
        if (existing) {
          const parsed = typeof existing === "string" ? JSON.parse(existing) : existing
          parsed.status = "refunded"
          parsed.refundedAt = new Date().toISOString()
          await redis.set(`purchase:${checkoutId}`, JSON.stringify(parsed))
        }
      }
    } catch {
      // Redis errors are non-fatal
    }
  },
})

export const POST = webhookHandler
