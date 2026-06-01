import type { Metadata } from "next"
import ReportClient from "./report-client"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ReportV2Page() {
  return <ReportClient />
}
