import { Checkout } from "@creem_io/nextjs"

const checkoutHandler = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: false,
  defaultSuccessUrl: "https://www.myeasterntype.com/success",
})

export const GET = checkoutHandler
