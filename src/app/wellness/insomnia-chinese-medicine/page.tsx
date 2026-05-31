import type { Metadata } from "next"
import WellnessArticle from "./article"

export const metadata: Metadata = {
  title: "Insomnia & Chinese Medicine: Why You Can't Fall (or Stay) Asleep | EastType",
  description:
    "Chinese medicine explains insomnia as Yin Deficiency — your body's cooling force is low, so internal heat builds up at night. Learn the signs, causes, and which foods can help you sleep naturally.",
  openGraph: {
    title: "Insomnia & Chinese Medicine: Why You Can't Fall (or Stay) Asleep",
    description:
      "Western medicine prescribes melatonin. Chinese medicine asks: why is your body generating excess heat at night? Here's what Yin Deficiency means and what to do about it.",
    url: "https://myeasterntype.com/wellness/insomnia-chinese-medicine",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insomnia & Chinese Medicine: Why You Can't Fall (or Stay) Asleep",
    description:
      "Western medicine prescribes melatonin. Chinese medicine asks: why is your body generating excess heat at night?",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/insomnia-chinese-medicine",
  },
}

export default function InsomniaChineseMedicinePage() {
  return <WellnessArticle />
}
