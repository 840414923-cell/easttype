import type { Metadata } from "next"
import FoodsForEnergyArticle from "./article"

export const metadata: Metadata = {
  title: "Chinese Medicine Foods for Energy: What to Eat When You're Always Tired | EastType",
  description:
    "Chinese medicine says fatigue is often a Qi problem — your body's fuel is low. These 10+ foods have been used for centuries to restore energy naturally. Plus: foods that secretly drain your energy.",
  openGraph: {
    title: "Chinese Medicine Foods for Energy",
    description: "Always tired? Chinese medicine says your fuel is low. These traditional foods restore energy from the inside out.",
    url: "https://myeasterntype.com/wellness/chinese-medicine-foods-for-energy",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Medicine Foods for Energy",
    description: "Always tired? These traditional foods restore energy from the inside out.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/chinese-medicine-foods-for-energy",
  },
}

export default function FoodsForEnergyPage() {
  return <FoodsForEnergyArticle />
}