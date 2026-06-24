import type { Metadata } from "next"
import ResultClient from "./result-client"
import { signCheckout } from "@/lib/checkout-auth"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ primary?: string; secondary?: string; sex?: string }>
}) {
  const params = await searchParams
  const primaryId = params.primary ?? "balanced"
  const sex = params.sex ?? "female"

  const proToken = signCheckout("pro", primaryId, sex)
  const basicToken = signCheckout("basic", primaryId, sex)

  return <ResultClient proToken={proToken} basicToken={basicToken} />
}
