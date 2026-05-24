"use client"

import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function RefundPage() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-2 text-center">
          {l("Refund Policy", "退款政策", "返金ポリシー")}
        </h1>
        <p className="text-center text-text2 text-sm mb-10">
          {l("Last updated: May 2026", "最後更新：2026年5月", "最終更新：2026年5月")}
        </p>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section className="bg-cream border border-border rounded-xl p-6 text-sm leading-relaxed">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("30-Day Money-Back Guarantee", "30 天無條件退款保證", "30日間返金保証")}
            </h2>
            <p>
              {l(
                "We're confident you'll love your EastType report. If for any reason you're not satisfied, contact us within 30 days of purchase for a full refund. No questions asked.",
                "我們相信你會喜歡你的 EastType 報告。如果你因任何原因不滿意，請在購買後 30 天內聯繫我們，我們將全額退款。",
                "EastTypeレポートに満足していただけると確信しています。何らかの理由でご満足いただけない場合は、購入後30日以内にご連絡ください。全額返金いたします。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("How to Request a Refund", "如何申請退款", "返金の申請方法")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                {l(
                  "Email support@easttype.com with your order number",
                  "發送電子郵件至 support@easttype.com，附上你的訂單編號",
                  "support@easttype.com に注文番号を記載してメールでお問い合わせください"
                )}
              </li>
              <li>
                {l(
                  "Include the email address used for your purchase",
                  "提供購買時使用的電子郵件地址",
                  "購入時に使用したメールアドレスをお知らせください"
                )}
              </li>
              <li>
                {l(
                  "No specific reason required — our policy is genuinely no questions asked",
                  "無需提供具體理由 — 我們的政策確實是無條件退款",
                  "具体的な理由は不要 — 真に質問なしのポリシーです"
                )}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Processing Time", "處理時間", "処理期間")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Refunds are processed within 5–10 business days", "退款將在 5–10 個工作日內處理", "返金は5〜10営業日以内に処理されます")}</li>
              <li>{l("Refunded to the original payment method", "退款至原付款方式", "元の支払い方法に返金されます")}</li>
              <li>{l("You'll receive a confirmation email once the refund is processed", "退款處理完成後你將收到確認電子郵件", "返金処理完了後、確認メールをお送りします")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Eligibility", "退款資格", "返金の条件")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Refund request must be within 30 days of purchase", "退款申請必須在購買後 30 天內提出", "返金請求は購入後30日以内である必要があります")}</li>
              <li>{l("One refund per report type (to prevent abuse)", "每種報告類型限退一次（防止濫用）", "レポートタイプごとに1回限りの返金（悪用防止のため）")}</li>
              <li>{l("Digital access to the report may be revoked after refund", "退款後數位報告的訪問權限可能會被撤銷", "返金後、デジタルレポートへのアクセス権は取り消される場合があります")}</li>
            </ul>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Contact Us", "聯繫我們", "お問い合わせ")}
            </h2>
            <p>
              {l(
                "For refund requests or questions, please email support@easttype.com.",
                "退款申請或疑問請發送電子郵件至 support@easttype.com。",
                "返金請求やご質問は support@easttype.com までメールでお問い合わせください。"
              )}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
