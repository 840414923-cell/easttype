"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"
import type { LocaleCode, LocaleData } from "@/lib/i18n/types"
import en from "@/lib/i18n/en"
import zhTW from "@/lib/i18n/zh-TW"
import ja from "@/lib/i18n/ja"

const LOCALES: Record<LocaleCode, LocaleData> = {
  en,
  "zh-TW": zhTW,
  ja,
}

const LOCALE_KEYS: LocaleCode[] = ["en", "zh-TW", "ja"]

function detectLocale(): LocaleCode {
  if (typeof window === "undefined") return "en"
  const saved = localStorage.getItem("easttype-locale") as LocaleCode | null
  if (saved && LOCALES[saved]) return saved
  const nav = navigator.language || ""
  if (nav.startsWith("zh") || nav.startsWith("zh-TW") || nav.startsWith("zh-Hant")) return "zh-TW"
  if (nav.startsWith("ja")) return "ja"
  return "en"
}

interface LocaleContextValue {
  locale: LocaleData
  localeCode: LocaleCode
  setLocaleCode: (code: LocaleCode) => void
  localeKeys: LocaleCode[]
  locales: Record<LocaleCode, LocaleData>
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<LocaleCode>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setCode(detectLocale())
    setMounted(true)
  }, [])

  // Update html lang attribute when locale changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      const langMap: Record<LocaleCode, string> = { en: "en", "zh-TW": "zh-TW", ja: "ja" }
      document.documentElement.lang = langMap[code] ?? "en"
    }
  }, [code])

  const setLocaleCode = (newCode: LocaleCode) => {
    setCode(newCode)
    localStorage.setItem("easttype-locale", newCode)
  }

  if (!mounted) {
    return (
      <LocaleContext.Provider
        value={{ locale: LOCALES.en, localeCode: "en", setLocaleCode, localeKeys: LOCALE_KEYS, locales: LOCALES }}
      >
        {children}
      </LocaleContext.Provider>
    )
  }

  return (
    <LocaleContext.Provider
      value={{
        locale: LOCALES[code],
        localeCode: code,
        setLocaleCode,
        localeKeys: LOCALE_KEYS,
        locales: LOCALES,
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    return { locale: LOCALES.en, localeCode: "en" as LocaleCode, setLocaleCode: () => {}, localeKeys: LOCALE_KEYS, locales: LOCALES }
  }
  return ctx
}
