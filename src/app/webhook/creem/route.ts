import { Webhook } from "@creem_io/nextjs"

const webhookHandler = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onCheckoutCompleted: async (data) => {
    console.log("Checkout completed:", data.webhookEventType, data.product?.name)
  },
  onRefundCreated: async (data) => {
    console.log("Refund created:", data.webhookEventType)
  },
})

export const POST = webhookHandler
