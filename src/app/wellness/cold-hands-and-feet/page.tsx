import type { Metadata } from "next"
import ColdHandsArticle from "./article"

export const metadata: Metadata = {
  title: "Cold Hands and Feet: Chinese Medicine Explains Why | EastType",
  description:
    "Always cold? Chinese medicine calls it Yang Deficiency — your inner furnace is underpowered. Learn the signs, warming foods, and why sunlight is literally medicine for your type.",
  openGraph: {
    title: "Cold Hands and Feet: Chinese Medicine Explains Why",
    description: "Your inner furnace is underpowered. Here's what Chinese medicine says about always being cold — and what to eat to warm up naturally.",
    url: "https://myeasterntype.com/wellness/cold-hands-and-feet",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Hands and Feet: Chinese Medicine Explains Why",
    description: "Your inner furnace is underpowered. Here's what Chinese medicine says about always being cold.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/cold-hands-and-feet",
  },
}

export default function ColdHandsPage() {
  return <ColdHandsArticle />
}