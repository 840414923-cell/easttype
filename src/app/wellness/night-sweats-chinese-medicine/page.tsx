import type { Metadata } from "next"
import NightSweatsArticle from "./article"

export const metadata: Metadata = {
  title: "Night Sweats: A Chinese Medicine Explanation | EastType",
  description:
    "Waking up hot and sweaty? Chinese medicine calls it Yin Deficiency — your body's cooling system is undercharged. Learn the signs, causes, and cooling foods that help.",
  openGraph: {
    title: "Night Sweats: A Chinese Medicine Explanation",
    description: "Your body's cooling system is undercharged. Here's what Chinese medicine says about night sweats and internal heat.",
    url: "https://myeasterntype.com/wellness/night-sweats-chinese-medicine",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Night Sweats: A Chinese Medicine Explanation",
    description: "Waking up hot and sweaty? Chinese medicine says your cooling system is undercharged.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/night-sweats-chinese-medicine",
  },
}

export default function NightSweatsPage() {
  return <NightSweatsArticle />
}