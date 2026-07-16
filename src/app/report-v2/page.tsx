import type { Metadata } from "next"
import { cookies } from "next/headers"
import ReportClient from "./report-client"
import { signCheckout, verifyReportAccess } from "@/lib/checkout-auth"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function ReportV2Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; sex?: string }>
}) {
  const params = await searchParams
  const type = params.type ?? "qi_deficient"
  const sex = params.sex ?? "female"

  const cookieStore = await cookies()
  const accessCookie = cookieStore.get("et_plan")
  const access = accessCookie?.value ? verifyReportAccess(accessCookie.value) : null

  const isPro = access?.plan === "pro"
  const hasAccess = access?.plan === "basic" || access?.plan === "pro"

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text2 text-center px-6">
        <div>
          <p className="text-lg mb-2">This report requires a purchase.</p>
          <a
            href={`/result?primary=${type}&sex=${sex}`}
            className="text-accent underline"
          >
            Take the quiz to get your result
          </a>
        </div>
      </div>
    )
  }

  const upgradeToken = signCheckout("pro", type, sex)

  return <ReportClient isPro={isPro} upgradeToken={upgradeToken} />
}
