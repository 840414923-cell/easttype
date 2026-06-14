import type { Metadata } from "next"
import WhyNoPatienceArticle from "./article"
import { SYMPTOM_FAQS } from "@/lib/symptom-faqs"
import { buildArticleJsonLd } from "@/lib/json-ld"

const SLUG = "why-do-i-have-no-patience"
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`
const TITLE = "No Patience? Your Body Type Might Be Behind the Short Fuse"
const DESC = "Everything and everyone getting on your nerves? Your Eastern body type may explain chronic impatience. Learn which Eastern body types are linked to a short fuse."

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: "One more slow walker and you're going to lose it? Your body type may explain why your patience tank is always empty.", url: URL, type: "article", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: "One more slow walker and you're going to lose it? Your body type may explain why your patience tank is always empty." },
  alternates: { canonical: URL },
}

const jsonLd = buildArticleJsonLd({
  title: TITLE, description: DESC, url: URL, datePublished: "2026-06-04",
  faqs: SYMPTOM_FAQS[SLUG],
  breadcrumb: [
    { name: "EastType", url: "https://www.myeasterntype.com" },
    { name: "Symptoms", url: "https://www.myeasterntype.com/symptoms" },
    { name: TITLE, url: URL },
  ],
})

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhyNoPatienceArticle />
    </>
  )
}
