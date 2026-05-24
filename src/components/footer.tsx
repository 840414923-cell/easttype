"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

export function Footer() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <footer className="text-center py-12 px-6 border-t border-[rgba(201,163,85,0.12)] text-sm text-text2 leading-relaxed">
      <div className="mb-4">
        <span className="font-[family-name:var(--font-display)] text-base text-accent tracking-widest">
          ◇ East<span className="text-accent2">Type</span> ◇
        </span>
      </div>
      <div className="mb-4 flex items-center justify-center gap-3 text-xs">
        <Link href="/privacy" className="text-text2 hover:text-accent transition-colors no-underline">
          {l("Privacy Policy", "隱私權政策", "プライバシーポリシー")}
        </Link>
        <span className="text-[rgba(201,163,85,0.2)]">·</span>
        <Link href="/terms" className="text-text2 hover:text-accent transition-colors no-underline">
          {l("Terms of Service", "服務條款", "利用規約")}
        </Link>
        <span className="text-[rgba(201,163,85,0.2)]">·</span>
        <Link href="/refund" className="text-text2 hover:text-accent transition-colors no-underline">
          {l("Refund Policy", "退款政策", "返金ポリシー")}
        </Link>
      </div>
      {locale.ui.footerDisclaimer}
      <br />
      {locale.ui.footerCopyright}
    </footer>
  )
}
