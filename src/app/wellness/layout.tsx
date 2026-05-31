import type { Metadata } from "next"
import WellnessLayoutClient from "./layout-client"

export const metadata: Metadata = {
  title: "EastType Wellness — Chinese Medicine Health Guides",
  description: "Free wellness guides based on Traditional Chinese Medicine. Understand your body's signals through 3,000 years of Eastern wisdom.",
}

export default function WellnessLayout({ children }: { children: React.ReactNode }) {
  return <WellnessLayoutClient>{children}</WellnessLayoutClient>
}