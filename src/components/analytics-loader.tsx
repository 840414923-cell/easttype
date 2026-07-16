"use client"

import { useEffect } from "react"
import { initGA } from "@/lib/analytics"

// Invisible client component. On mount it loads GA4 if consent was already
// granted (e.g. returning visitor). It also listens for live consent changes
// from the cookie banner so GA4 loads the moment a visitor clicks Accept.
export function AnalyticsLoader() {
  useEffect(() => {
    initGA()
    const handler = () => initGA()
    window.addEventListener("et-consent-changed", handler)
    return () => window.removeEventListener("et-consent-changed", handler)
  }, [])

  return null
}
