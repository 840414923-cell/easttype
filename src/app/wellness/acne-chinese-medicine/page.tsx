import type { Metadata } from "next"
import Article from "./article"

export const metadata: Metadata = {
  title: "Acne & Chinese Medicine: Why Breakouts Aren't Just a Skin Problem | EastType",
  description:
    "Chinese medicine sees acne as internal heat and dampness rising to the surface — not just clogged pores. Learn which body type is prone to breakouts and which foods calm the heat from the inside.",
  openGraph: {
    title: "Acne & Chinese Medicine: Why Breakouts Aren't Just a Skin Problem",
    description: "Acne is internal heat rising to the surface. Chinese medicine explains why and what to eat to calm it from the inside.",
    url: "https://myeasterntype.com/wellness/acne-chinese-medicine",
    type: "article",
    siteName: "EastType",
  },
  twitter: { card: "summary_large_image", title: "Acne & Chinese Medicine", description: "Breakouts aren't just clogged pores. Chinese medicine sees internal heat rising to the surface." },
  alternates: { canonical: "https://myeasterntype.com/wellness/acne-chinese-medicine" },
}

export default function AcnePage() { return <Article /> }