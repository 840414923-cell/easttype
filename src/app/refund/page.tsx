import type { Metadata } from "next"
import RefundContent from "./refund-content"

const TITLE = "Refund Policy — EastType"
const DESC = "EastType offers a 30-day money-back guarantee on all reports. No questions asked. Request a refund via email."
const URL = "https://www.myeasterntype.com/refund"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "website",
    siteName: "EastType",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
  },
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
}

export default function RefundPage() {
  return <RefundContent />
}
