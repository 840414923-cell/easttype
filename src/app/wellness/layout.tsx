import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "EastType Wellness — Eastern Body Type Guides",
  description: "Free wellness guides based on Chinese medicine. Understand your body's signals through 3,000 years of body type wisdom.",
}

export default function WellnessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}