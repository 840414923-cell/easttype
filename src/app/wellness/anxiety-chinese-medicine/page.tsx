import type { Metadata } from "next"
import WellnessArticle from "./article"

export const metadata: Metadata = {
  title: "Anxiety & Chinese Medicine: Why Your Mind Races While Your Body Stalls | EastType",
  description:
    "Chinese medicine explains anxiety as Qi Stagnation — your energy builds up but can't flow freely, causing chest tightness and mood swings. Learn the signs, causes, and which foods can help restore your energy flow naturally.",
  openGraph: {
    title: "Anxiety & Chinese Medicine: Why Your Mind Races While Your Body Stalls",
    description:
      "Western medicine treats anxiety as a brain chemistry problem. Chinese medicine sees it as an energy flow problem — the fuel is there but the pipes are blocked. Here's what that means and what to do about it.",
    url: "https://myeasterntype.com/wellness/anxiety-chinese-medicine",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Chinese Medicine: Why Your Mind Races While Your Body Stalls",
    description:
      "Western medicine treats anxiety as a brain chemistry problem. Chinese medicine sees it as an energy flow problem — the fuel is there but the pipes are blocked.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/anxiety-chinese-medicine",
  },
}

export default function AnxietyChineseMedicinePage() {
  return <WellnessArticle />
}
