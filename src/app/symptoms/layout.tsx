import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function SymptomsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
