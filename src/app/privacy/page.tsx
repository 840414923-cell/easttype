import type { Metadata } from "next"
import PrivacyContent from "./privacy-content"

const TITLE = "Privacy Policy — EastType"
const DESC = "How EastType handles your data. We store quiz answers locally, process payments via Creem, and use anonymized analytics only."
const URL = "https://myeasterntype.com/privacy"

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

export default function PrivacyPage() {
  return <PrivacyContent />
}
