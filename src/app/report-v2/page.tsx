import type { Metadata } from "next"
import { cookies } from "next/headers"
import ReportClient from "./report-client"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function ReportV2Page({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; type?: string; sex?: string }>
}) {
  const params = await searchParams
  const plan = params.plan ?? "basic"
  const type = params.type ?? "qi_deficient"
  const sex = params.sex ?? "female"

  if (plan === "pro") {
    const cookieStore = await cookies()
    const purchased = cookieStore.get("et_plan")
    if (!purchased || purchased.value !== "pro") {
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
  }

  return <ReportClient />
}
