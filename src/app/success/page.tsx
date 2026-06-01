import type { Metadata } from "next"
import { cookies } from "next/headers"
import SuccessClient from "./success-client"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; type?: string; sex?: string }>
}) {
  const params = await searchParams
  const plan = params.plan ?? "basic"

  const cookieStore = await cookies()
  cookieStore.set("et_plan", plan, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: false,
    secure: true,
    sameSite: "lax",
  })

  return <SuccessClient />
}
