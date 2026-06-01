import type { Metadata, Viewport } from "next"
import { Playfair_Display, DM_Sans, Noto_Serif_SC } from "next/font/google"
import { LocaleProvider } from "@/components/locale-provider"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
})

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-cjk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#C9A96E",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://myeasterntype.com"),
  verification: {
    google: "MiP1PyAbOojiLM7jlUAb8a1ZiSRPzqdyXJTdgWvGFYQ",
  },
  title: "EastType — What's Your Eastern Type?",
  description:
    "Chinese medicine identified 9 body types centuries ago. Ayurveda has 3. We have 9. Discover yours in ~5 minutes.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "EastType — What's Your Eastern Type?",
    description:
      "Chinese medicine identified 9 body types centuries ago. Discover yours in a free ~5 min quiz.",
    type: "website",
    url: "https://myeasterntype.com",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "EastType — Discover Your Eastern Body Type",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EastType — What's Your Eastern Type?",
    description:
      "Chinese medicine identified 9 body types centuries ago. Discover yours in ~5 min.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <LocaleProvider>{children}</LocaleProvider>
        <CookieConsent />
        <script defer data-domain="myeasterntype.com" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  )
}
