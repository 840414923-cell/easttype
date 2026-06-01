import type { Metadata } from "next"
import ResultClient from "./result-client"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ResultPage() {
  return <ResultClient />
}
