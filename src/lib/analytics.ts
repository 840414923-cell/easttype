// GA4 analytics with cookie-consent gating.
// Client-side gtag only loads after the user accepts the cookie banner.
// Server-side Measurement Protocol (used in the Creem webhook) does not depend
// on browser consent because it fires on a payment-success server callback.

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const CONSENT_KEY = "et_consent"

let gtagLoaded = false

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function isConsentGranted(): boolean {
  if (typeof window === "undefined") return false
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted"
  } catch {
    return false
  }
}

// Dynamically inject the gtag.js script. Only runs once, and only when the
// user has granted consent. Safe to call repeatedly (idempotent).
export function initGA(): void {
  if (typeof window === "undefined") return
  if (gtagLoaded) return
  if (!GA_ID) return
  if (!isConsentGranted()) return

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(args)
  }
  window.gtag("js", new Date())
  window.gtag("config", GA_ID, { anonymize_ip: true })

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  gtagLoaded = true
}

// Track a client-side event. Silently no-ops before consent or before gtag
// has loaded, so callers can call it unconditionally.
export function track(
  eventName: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return
  if (!isConsentGranted()) return
  if (!window.gtag) return
  window.gtag("event", eventName, params)
}

// Read the _ga cookie value (set by gtag after consent) so the server-side
// webhook can attribute the purchase to the same client_id. Returns undefined
// when the user has not consented or the cookie is absent.
export function getGaClientId(): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/)
  if (!match) return undefined
  const parts = match[1].split(".")
  if (parts.length >= 2) return parts.slice(-2).join(".")
  return match[1]
}

// Server-side purchase event via GA4 Measurement Protocol. Called from the
// Creem webhook on checkout completion. Does not depend on browser consent.
export async function trackPurchaseServer(params: {
  transactionId: string
  value: number
  currency: string
  plan: string
  clientId?: string
}): Promise<void> {
  const secret = process.env.GA4_MEASUREMENT_PROTOCOL_SECRET
  if (!GA_ID || !secret) return

  const body = {
    client_id: params.clientId || `server.${params.transactionId}`,
    events: [
      {
        name: "purchase",
        params: {
          transaction_id: params.transactionId,
          value: params.value,
          currency: params.currency,
          items: [
            {
              item_id: params.plan,
              item_name:
                params.plan === "pro"
                  ? "Full Transformation Kit"
                  : "Body Profile Report",
              price: params.value,
              quantity: 1,
            },
          ],
        },
      },
    ],
  }

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_ID}&api_secret=${secret}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    )
  } catch {
    // GA4 reporting errors are non-fatal for the purchase flow.
  }
}
