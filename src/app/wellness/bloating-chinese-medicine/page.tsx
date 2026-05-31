import type { Metadata } from "next"
import Article from "./article"

export const metadata: Metadata = {
  title: "Bloating & Chinese Medicine: Why You Feel Heavy After Eating | EastType",
  description:
    "Always bloated? Chinese medicine calls it Damp accumulation — your body holds moisture like a sponge. Learn the signs, causes, and which foods reduce bloating naturally.",
  openGraph: {
    title: "Bloating & Chinese Medicine: Why You Feel Heavy After Eating",
    description: "Your body holds moisture like a sponge. Here's what Chinese medicine says about chronic bloating and how to reduce it with food.",
    url: "https://myeasterntype.com/wellness/bloating-chinese-medicine",
    type: "article",
    siteName: "EastType",
  },
  twitter: { card: "summary_large_image", title: "Bloating & Chinese Medicine", description: "Always bloated? Your body holds moisture like a sponge." },
  alternates: { canonical: "https://myeasterntype.com/wellness/bloating-chinese-medicine" },
}

export default function BloatingPage() { return <Article /> }