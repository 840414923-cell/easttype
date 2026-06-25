import type { Metadata, Viewport } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { CookieConsent } from "@/components/cookie-consent"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#C9A96E",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myeasterntype.com"),
  verification: {
    google: "MiP1PyAbOojiLM7jlUAb8a1ZiSRPzqdyXJTdgWvGFYQ",
  },
  title: "EastType — Chinese Medicine Body Types & Wellness Guides",
  description:
    "Chinese medicine identifies 9 body types — each with unique patterns and needs. Discover yours in a free 5-minute body type quiz with personalized food maps.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "EastType — Chinese Medicine Body Types & Wellness Guides",
    description:
      "Chinese medicine identifies 9 body types. Discover yours in a free 5-minute quiz with personalized food maps and TCM wellness guidance.",
    type: "website",
    url: "https://www.myeasterntype.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EastType — Chinese Medicine Body Types & Wellness Quiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EastType — Chinese Medicine Body Types & Wellness Guides",
    description:
      "Chinese medicine identifies 9 body types. Discover yours in a free 5-minute quiz with personalized food maps.",
    images: ["/og-image.png"],
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <meta name="p:domain_verify" content="82661edd6f43ed8e5c001734b3736525" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("et-theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}else{document.documentElement.classList.add("dark");}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
        <Analytics />
        <CookieConsent />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
