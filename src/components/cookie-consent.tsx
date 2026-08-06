"use client"

import { useSyncExternalStore } from "react"

const CONSENT_KEY = "et_consent"

function subscribeConsent(callback: () => void) {
  window.addEventListener("et-consent-changed", callback)
  return () => window.removeEventListener("et-consent-changed", callback)
}

function getConsentHiddenClient() {
  return localStorage.getItem(CONSENT_KEY) !== null
}

function getConsentHiddenServer() {
  return true
}

export function CookieConsent() {
  const hidden = useSyncExternalStore(subscribeConsent, getConsentHiddenClient, getConsentHiddenServer)

  if (hidden) return null

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    window.dispatchEvent(new Event("et-consent-changed"))
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined")
    window.dispatchEvent(new Event("et-consent-changed"))
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[rgba(10,15,30,0.97)] border-t border-[rgba(140,45,42,0.15)] backdrop-blur-xl safe-bottom">
      <div className="max-w-4xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-sm text-text2 leading-relaxed flex-1">
          We use essential cookies to run this site. With your consent, we also use analytics to understand how visitors use the site so we can improve it. No ads.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-medium text-text2 border border-card-border rounded-lg cursor-pointer transition-colors hover:text-text hover:border-[rgba(140,45,42,0.3)]"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_20px_rgba(140,45,42,0.2)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
