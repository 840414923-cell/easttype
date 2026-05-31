import type { Metadata } from "next"
import WellnessArticle from "./article"

export const metadata: Metadata = {
  title: "Foods That Warm Your Body: A Chinese Medicine Guide | EastType",
  description:
    "Yang Deficiency means your inner furnace is underpowered. Learn which warming foods — ginger, cinnamon, lamb — can stoke your fire, and which cold foods make it worse.",
  openGraph: {
    title: "Foods That Warm Your Body: A Chinese Medicine Guide",
    description:
      "Cold hands, frequent urination, aversion to cold? In Chinese medicine, that's Yang Deficiency — and warming foods are the medicine. Here's what to eat and what to avoid.",
    url: "https://myeasterntype.com/wellness/foods-that-warm-your-body",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foods That Warm Your Body: A Chinese Medicine Guide",
    description:
      "Cold hands, frequent urination, aversion to cold? That's Yang Deficiency. Warming foods are the medicine.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/foods-that-warm-your-body",
  },
}

export default function FoodsThatWarmPage() {
  return <WellnessArticle />
}
