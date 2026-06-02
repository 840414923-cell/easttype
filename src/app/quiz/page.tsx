import type { Metadata } from "next"
import QuizClient from "./quiz-client"

const TITLE = "Free Body Type Quiz — Discover Your Eastern Constitution | EastType"
const DESC = "Chinese medicine identified 9 body types centuries ago. Take this free 5-minute assessment to discover your constitution type, personalized food suggestions, and lifestyle tips."
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
