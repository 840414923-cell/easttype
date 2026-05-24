import { Checkout } from "@creem_io/nextjs"

const checkoutHandler = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: process.env.NODE_ENV !== "production",
  defaultSuccessUrl: "https://myeasterntype.com/success",
})

export const GET = checkoutHandler
