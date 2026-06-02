import type { Metadata } from "next"
import TermsContent from "./terms-content"

const TITLE = "Terms of Service — EastType"
const DESC = "Terms governing your use of EastType. Includes disclaimers, payment terms, refund policy, and intellectual property notices."
const URL = "https://myeasterntype.com/terms"

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

export default function TermsPage() {
  return <TermsContent />
}
