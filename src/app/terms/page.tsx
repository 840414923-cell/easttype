"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-2 text-center">
          {l("Terms of Service", "服務條款", "利用規約")}
        </h1>
        <p className="text-center text-text2 text-sm mb-10">
          {l("Last updated: May 2026", "最後更新：2026年5月", "最終更新：2026年5月")}
        </p>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Acceptance of Terms", "接受條款", "規約の同意")}
            </h2>
            <p>
              {l(
                'By accessing and using EastType ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.',
                "訪問和使用 EastType（「本服務」）即表示你同意受這些服務條款的約束。如果你不同意這些條款，請勿使用本服務。",
                "EastType（以下「本サービス」）にアクセスしてご利用いただくことで、本利用規約に同意したものとみなされます。同意できない場合は、本サービスをご利用にならないでください。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Description of Service", "服務說明", "サービスの説明")}
            </h2>
            <p>
              {l(
                "EastType provides a body constitution quiz based on Traditional Chinese Medicine (TCM), personalized reports with food therapy recommendations, seasonal wellness guides, and lifestyle suggestions. The Service includes free and paid report tiers.",
                "EastType 提供基於中醫的體質測驗、包含飲食療法建議的個人化報告、季節性養生指南和生活方式建議。本服務包括免費和付費報告方案。",
                "EastTypeは、伝統的な中国医学（TCM）に基づく体質クイズ、食事療法の提案を含むパーソナライズされたレポート、季節のウェルネスガイド、ライフスタイルの提案を提供します。無料および有料のレポートプランがあります。"
              )}
            </p>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm leading-relaxed">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Important Disclaimer — Not Medical Advice", "重要聲明 — 非醫療建議", "重要な免責事項 — 医療アドバイスではありません")}
            </h2>
            <p className="mb-3">
              {l(
                "EastType is based on traditional Chinese dietary philosophy and is provided for informational and self-discovery purposes only.",
                "EastType 基於東方傳統飲食哲學，僅供資訊參考和自我探索之用。",
                "EastTypeは東洋の伝統的な食哲学に基づいており、情報提供と自己発見の目的のみで提供されています。"
              )}
            </p>
            <p className="mb-3">
              {l(
                "This is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for any medical concerns.",
                "本網站非醫療建議、診斷或治療。如有任何健康問題，請諮詢合格醫療專業人員。",
                "これは医療アドバイス、診断、治療ではありません。健康上の懸念については、必ず医療専門家にご相談ください。"
              )}
            </p>
            <p>
              {l("Individual results may vary.", "個人結果可能有所不同。", "個人の結果は異なる場合があります。")}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Purchases and Payments", "購買與付款", "購入と支払い")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("All prices are listed in US Dollars (USD).", "所有價格以美元（USD）標示。", "すべての価格は米ドル（USD）で表示されています。")}</li>
              <li>{l("Payments are processed securely via LemonSqueezy.", "付款通過 LemonSqueezy 安全處理。", "支払いは LemonSqueezy を通じて安全に処理されます。")}</li>
              <li>{l("All reports are digital products delivered instantly upon payment.", "所有報告為數位產品，付款後即時交付。", "すべてのレポートはデジタル製品で、お支払い後に即時配信されます。")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Intellectual Property", "知識產權", "知的財産権")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("All content, reports, and materials on EastType are owned by EastType.", "EastType 上的所有內容、報告和資料均為 EastType 所有。", "EastTypeのすべてのコンテンツ、レポート、資料はEastTypeの所有物です。")}</li>
              <li>{l("Reports are for personal use only — no redistribution, reselling, or commercial use.", "報告僅供個人使用 — 不得重新分發、轉售或商業使用。", "レポートは個人使用のみ — 再配布、転売、商業利用は禁止されています。")}</li>
              <li>{l("Quiz questions and scoring methodology are proprietary.", "測驗題目和評分方法為專有內容。", "クイズの質問とスコアリング手法は独自のものです。")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Limitation of Liability", "責任限制", "責任の制限")}
            </h2>
            <p className="mb-3">
              {l(
                'The Service is provided "as is" without warranties of any kind, express or implied. EastType shall not be liable for any decisions made based on the reports provided.',
                "本服務按「現狀」提供，不作任何明示或暗示的保證。EastType 對基於所提供報告做出的任何決定不承擔責任。",
                "本サービスは「現状のまま」で提供され、いかなる保証も行いません。EastTypeは、提供されたレポートに基づいて行われた決定について責任を負いません。"
              )}
            </p>
            <p>
              {l(
                "EastType is not responsible for any allergic reactions, health outcomes, or adverse effects resulting from food or lifestyle suggestions in our reports.",
                "EastType 對報告中飲食或生活方式建議引起的任何過敏反應、健康結果或不良影響不承擔責任。",
                "EastTypeは、レポートの食事やライフスタイルの提案に起因するアレルギー反応、健康上の結果、または悪影響について責任を負いません。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Refunds", "退款", "返金")}
            </h2>
            <p>
              {locale.code === "en" ? (
                <>For our full refund policy, please see our <Link href="/refund" className="text-accent hover:underline">Refund Policy</Link> page. We offer a 30-day money-back guarantee on all purchases.</>
              ) : locale.code === "zh-TW" ? (
                <>完整的退款政策請參閱我們的 <Link href="/refund" className="text-accent hover:underline">退款政策</Link> 頁面。我們對所有購買提供 30 天退款保證。</>
              ) : (
                <>完全な返金ポリシーについては、<Link href="/refund" className="text-accent hover:underline">返金ポリシー</Link>ページをご覧ください。すべての購入に30日間の返金保証を提供しています。</>
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Changes to Terms", "條款變更", "規約の変更")}
            </h2>
            <p>
              {l(
                "We reserve the right to update these Terms of Service at any time. Continued use of the Service after changes constitutes acceptance of the updated terms.",
                "我們保留隨時更新這些服務條款的權利。在條款變更後繼續使用本服務即表示你接受更新後的條款。",
                "本利用規約をいつでも更新する権利を留保します。変更後も本サービスを継続してご利用いただくことで、更新された規約に同意したものとみなされます。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Age Restriction", "年齡限制", "年齢制限")}
            </h2>
            <p>
              {l(
                "You must be at least 16 years of age to use this Service. If you are under 16, you may not access or use EastType.",
                "你必須年滿16歲才能使用本服務。如果你未滿16歲，不得訪問或使用 EastType。",
                "本サービスを利用するには16歳以上である必要があります。16歳未満の方はEastTypeにアクセスまたは利用できません。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Governing Law", "適用法律", "準拠法")}
            </h2>
            <p>
              {l(
                "These Terms shall be governed by and construed in accordance with the laws of Taiwan, without regard to conflict of law principles. For EU consumers, the mandatory provisions of your local law remain applicable.",
                "這些條款應受台灣法律管轄並據此解釋，不考慮法律衝突原則。對於歐盟消費者，你當地法律的強制性規定仍然適用。",
                "本規約は法の抵触の原則に関係なく、台湾法に準拠し、同法に従って解釈されるものとします。EU消費者の場合、現地法の強行規定が引き続き適用されます。"
              )}
            </p>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Contact Us", "聯繫我們", "お問い合わせ")}
            </h2>
            <p>
              {l(
                "If you have any questions about these Terms of Service, please email us at support@easttype.com.",
                "如果你對這些服務條款有任何疑問，請發送電子郵件至 support@easttype.com。",
                "本利用規約についてご質問がある場合は、support@easttype.com までメールでお問い合わせください。"
              )}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
