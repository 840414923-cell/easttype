import type { Metadata } from "next"
import QuizClient from "./quiz-client"

const TITLE = "Discover Your Eastern Body Type — Free 5-Minute Assessment"
const DESC = "Eastern wellness identifies 9 body types — each with unique patterns, foods, and lifestyle needs. Take this free 5-minute assessment to find yours."
const URL = "https://www.myeasterntype.com/quiz"

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
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  alternates: { canonical: URL },
}

export default function QuizPage() {
  return <QuizClient />
}
