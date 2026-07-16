import type { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import SuccessClient from "./success-client"
import { verifyCheckout, signReportAccess } from "@/lib/checkout-auth"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; type?: string; sex?: string; token?: string }>
}) {
  const params = await searchParams

  if (!params.token) {
    redirect("/")
  }

  const payload = verifyCheckout(params.token)

  if (!payload) {
    redirect("/")
  }

  const cookieStore = await cookies()
  cookieStore.set("et_plan", signReportAccess(payload.plan, payload.type, payload.sex), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  })

  return <SuccessClient />
}
