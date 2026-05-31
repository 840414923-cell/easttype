import type { Metadata } from "next"
import BodyTypesArticle from "./article"

export const metadata: Metadata = {
  title: "The 9 Chinese Medicine Body Types Explained | EastType",
  description:
    "Chinese medicine identifies 9 body constitutions — from Balanced to Sensitive. Each type has unique strengths, weaknesses, and ideal foods. Learn all 9 types and discover yours with a free quiz.",
  openGraph: {
    title: "The 9 Chinese Medicine Body Types Explained",
    description: "Ayurveda has 3 doshas. Chinese medicine has 9 body types. Here's what each one means and how to tell which one you are.",
    url: "https://myeasterntype.com/wellness/chinese-medicine-body-types",
    type: "article",
    siteName: "EastType",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 9 Chinese Medicine Body Types Explained",
    description: "Ayurveda has 3 doshas. Chinese medicine has 9 body types. Here's what each one means.",
  },
  alternates: {
    canonical: "https://myeasterntype.com/wellness/chinese-medicine-body-types",
  },
}

export default function BodyTypesPage() {
  return <BodyTypesArticle />
}