"use client"

import { useState, useEffect } from "react"
import { useLocale } from "@/components/locale-provider"

const CONSENT_KEY = "et_consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { locale } = useLocale()

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const t = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined")
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[rgba(10,15,30,0.97)] border-t border-[rgba(201,169,110,0.15)] backdrop-blur-xl safe-bottom">
      <div className="max-w-4xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-sm text-text2 leading-relaxed flex-1">
          {t(
            "We use essential cookies to run this site. No tracking, no ads. By continuing, you agree to our cookie use.",
            "我們使用必要的 Cookie 來運行此網站。無追蹤、無廣告。繼續使用即表示您同意我們的 Cookie 政策。",
            "当サイトは必要なCookieを使用しています。追跡や広告はありません。継続することでCookieの使用に同意したことになります。"
          )}
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-medium text-text2 border border-card-border rounded-lg cursor-pointer transition-colors hover:text-text hover:border-[rgba(201,169,110,0.3)]"
          >
            {t("Decline", "拒絕", "拒否")}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_20px_rgba(201,163,85,0.2)]"
          >
            {t("Accept", "接受", "同意")}
          </button>
        </div>
      </div>
    </div>
  )
}
