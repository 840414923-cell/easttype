import { Checkout } from "@creem_io/nextjs"

const checkoutHandler = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: process.env.CREEM_TEST_MODE === "true",
  defaultSuccessUrl: "https://myeasterntype.com/success",
})

export const GET = checkoutHandler
