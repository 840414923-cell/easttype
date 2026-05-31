import type { Metadata } from "next"
import WellnessArticle from "./article"

export const metadata: Metadata = {
  title: "Why Am I Always Tired? A Chinese Medicine Explanation | EastType",
  description:
    "Chinese medicine explains chronic fatigue as Qi Deficiency — your body's fuel is low. Learn the signs, causes, and which foods can help restore your energy naturally.",
  openGraph: {
    title: "Why Am I Always Tired? A Chinese Medicine Explanation",
    description:
      "Western medicine says 'get more sleep.' Chinese medicine says 'your fuel is low.' Here's what that means and what to do about it.",
    url: "https://myeasterntype.com/wellness/why-am-i-always-tired",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Am I Always Tired? A Chinese Medicine Explanation",
    description:
      "Western medicine says 'get more sleep.' Chinese medicine says 'your fuel is low.' Here's what that means.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/why-am-i-always-tired",
  },
}

export default function WhyAlwaysTiredPage() {
  return <WellnessArticle />
}