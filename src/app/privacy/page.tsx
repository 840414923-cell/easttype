"use client"

import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-2 text-center">
          {l("Privacy Policy", "隱私權政策", "プライバシーポリシー")}
        </h1>
        <p className="text-center text-text2 text-sm mb-10">
          {l("Last updated: May 2026", "最後更新：2026年5月", "最終更新：2026年5月")}
        </p>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("1. Information We Collect", "1. 我們收集的資訊", "1. 収集する情報")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Quiz answers — your responses to the body constitution questionnaire, stored only in your browser's local storage", "測驗答案 — 你對體質問卷的回答，僅儲存在你的瀏覽器本地存儲中", "クイズの回答 — 体質診断質問への回答はブラウザのローカルストレージにのみ保存")}</li>
              <li>{l("Language preference — stored in your browser's local storage", "語言偏好 — 儲存在瀏覽器本地存儲中", "言語設定 — ブラウザのローカルストレージに保存")}</li>
              <li>{l("Consent preference — whether you accepted or declined cookies, stored in local storage", "同意偏好 — 你是否接受或拒絕了 Cookie，儲存在本地存儲中", "同意設定 — クッキーの承諾・拒否の選択はローカルストレージに保存")}</li>
              <li>{l("Payment information — processed securely by Creem; we never store your card details", "付款資訊 — 由 Creem 安全處理；我們絕不儲存你的卡片資料", "支払い情報 — Creemにより安全に処理され、カード情報は保存しません")}</li>
              <li>{l("Analytics data — page views and quiz completion rates (anonymized, no personally identifiable information)", "分析數據 — 頁面瀏覽量和測驗完成率（匿名化，無個人身份資訊）", "分析データ — ページビューとクイズ完了率（匿名化、個人を特定する情報は含みません）")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("2. Legal Basis for Processing (GDPR)", "2. 資料處理的法律依據（GDPR）", "2. データ処理の法的根拠（GDPR）")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Consent — analytics cookies and payment processing are processed only after you give explicit consent", "同意 — 分析 Cookie 和付款處理僅在你明確同意後進行", "同意 — 分析クッキーと決済処理は明示的な同意の後にのみ処理")}</li>
              <li>{l("Contract — processing your payment and delivering your purchased report", "合約 — 處理你的付款並交付你購買的報告", "契約 — 支払いの処理と購入レポートの提供")}</li>
              <li>{l("Legitimate interest — improving our service through anonymized analytics", "合法利益 — 通過匿名化分析改善我們的服務", "正当な利益 — 匿名化された分析によるサービス改善")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("3. How We Use Your Information", "3. 我們如何使用你的資訊", "3. 情報の利用方法")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Generate your personalized body constitution report", "生成你的個人體質報告", "パーソナライズされた体質レポートの生成")}</li>
              <li>{l("Deliver purchased reports and process payments", "交付購買的報告並處理付款", "購入レポートの提供と支払い処理")}</li>
              <li>{l("Improve quiz accuracy and user experience via anonymized analytics", "通過匿名化分析提升測驗準確性和用戶體驗", "匿名化分析によるクイズ精度とユーザー体験の向上")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("4. Data Storage & Retention", "4. 資料儲存與保留", "4. データの保存と保持期間")}
            </h2>
            <p className="mb-3">
              {l(
                "EastType is a static website — we do not maintain user accounts or a server-side database. Your quiz results and preferences are stored only in your browser's local storage and remain there until you clear your browser data.",
                "EastType 是一個靜態網站 — 我們不維護用戶帳戶或伺服器端資料庫。你的測驗結果和偏好僅儲存在瀏覽器的本地存儲中，直到你清除瀏覽器資料為止。",
                "EastTypeは静的ウェブサイトであり、ユーザーアカウントやサーバー側のデータベースを維持していません。クイズの結果と設定はブラウザのローカルストレージにのみ保存され、ブラウザデータを消去するまで残ります。"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Quiz data: retained in your browser until you clear it (no server-side retention)", "測驗資料：保留在你的瀏覽器中直到你清除（伺服器端不保留）", "クイズデータ：ブラウザに保存され、消去するまで保持（サーバー側には保持しない）")}</li>
              <li>{l("Payment records: retained by Creem for 7 years per financial regulations", "付款記錄：由 Creem 依據金融法規保留7年", "支払い記録：金融規制によりCreemが7年間保持")}</li>
              <li>{l("Analytics: anonymized and aggregated; retained for 26 months", "分析數據：匿名化和匯總；保留26個月", "分析データ：匿名化・集計済み、26ヶ月間保持")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("5. Third-Party Services", "5. 第三方服務", "5. サードパーティサービス")}
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Vercel — website hosting and delivery (privacy policy: vercel.com/legal/privacy-policy)", "Vercel — 網站託管和分發（隱私政策：vercel.com/legal/privacy-policy）", "Vercel — ウェブサイトのホスティングと配信（プライバシーポリシー：vercel.com/legal/privacy-policy）")}</li>
              <li>{l("Creem — payment processing (privacy policy: lemonsqueezy.com/privacy)", "Creem — 付款處理（隱私政策：lemonsqueezy.com/privacy）", "Creem — 決済処理（プライバシーポリシー：lemonsqueezy.com/privacy）")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("6. Cookies", "6. Cookie", "6. クッキー")}
            </h2>
            <p className="mb-3">
              {l(
                "We use minimal analytics cookies to understand general usage patterns. Your language and consent preferences are stored in your browser's local storage. We do not use advertising cookies or tracking pixels.",
                "我們使用最少的分析 Cookie 來了解一般使用模式。你的語言和同意偏好儲存在瀏覽器的本地存儲中。我們不使用廣告 Cookie 或追蹤像素。",
                "一般的な利用パターンを理解するために最小限の分析クッキーを使用します。言語と同意の設定はブラウザのローカルストレージに保存されます。広告クッキーやトラッキングピクセルは使用しません。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("7. Your Rights Under GDPR", "7. 你在 GDPR 下的權利", "7. GDPRにおけるあなたの権利")}
            </h2>
            <p className="mb-3">
              {l(
                "If you are in the European Economic Area (EEA), you have the following rights regarding your personal data:",
                "如果你位於歐洲經濟區（EEA），你有以下關於個人資料的權利：",
                "欧州経済領域（EEA）にお住まいの場合、個人データに関して以下の権利があります："
              )}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{l("Right of Access (Art. 15) — request a copy of your personal data", "查閱權（第15條）— 要求取得你的個人資料副本", "アクセス権（第15条）— 個人データのコピーを請求")}</li>
              <li>{l("Right to Rectification (Art. 16) — request correction of inaccurate data", "更正權（第16條）— 要求更正不準確的資料", "訂正権（第16条）— 不正確なデータの修正を請求")}</li>
              <li>{l("Right to Erasure (Art. 17) — request deletion of your personal data", "刪除權（第17條）— 要求刪除你的個人資料", "消去権（第17条）— 個人データの削除を請求")}</li>
              <li>{l("Right to Restrict Processing (Art. 18) — request limitation of how your data is used", "限制處理權（第18條）— 要求限制你的資料使用方式", "処理制限権（第18条）— データの使用方法の制限を請求")}</li>
              <li>{l("Right to Data Portability (Art. 20) — receive your data in a structured, machine-readable format", "資料可攜權（第20條）— 以結構化、機器可讀格式接收你的資料", "データポータビリティ権（第20条）— 構造化された機械可読形式でデータの提供を受ける")}</li>
              <li>{l("Right to Object (Art. 21) — object to processing based on legitimate interest", "反對權（第21條）— 反對基於合法利益的資料處理", "異議申し立て権（第21条）— 正当な利益に基づく処理に異議を申し立て")}</li>
              <li>{l("Right to Withdraw Consent (Art. 7) — withdraw consent at any time without affecting the lawfulness of prior processing", "撤回同意權（第7條）— 隨時撤回同意，不影響撤回前處理的合法性", "同意撤回権（第7条）— いつでも同意を撤回可能、それ以前の処理の適法性に影響なし")}</li>
            </ul>
            <p className="mt-3">
              {l(
                "To exercise any of these rights, email us at support@myeasterntype.com. We will respond within 30 days.",
                "要行使以上任何權利，請發送電子郵件至 support@myeasterntype.com。我們將在30天內回覆。",
                "これらの権利を行使するには、support@myeasterntype.com にメールしてください。30日以内に対応いたします。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("8. Age Restriction", "8. 年齡限制", "8. 年齢制限")}
            </h2>
            <p>
              {l(
                "EastType is not intended for use by individuals under the age of 16. If we learn that we have collected personal data from a child under 16, we will delete it promptly. If you are a parent or guardian and believe your child has used our service, please contact us at support@myeasterntype.com.",
                "EastType 不適用於16歲以下的個人。如果我們得知已收集16歲以下兒童的個人資料，我們將立即刪除。如果你是家長或監護人，並認為你的孩子使用了我們的服務，請聯繫 support@myeasterntype.com。",
                "EastTypeは16歳未満の方の使用を想定していません。16歳未満の子供の個人データを収集したことが判明した場合、速やかに削除します。お子様が本サービスを使用したと思われる場合は、support@myeasterntype.com までご連絡ください。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("9. International Data Transfers", "9. 國際資料傳輸", "9. 国際データ転送")}
            </h2>
            <p>
              {l(
                "Our website is hosted on Vercel (United States) and payments are processed by Creem (United States). Data may be transferred to and processed in the United States. Both Vercel and Creem comply with EU-US Data Privacy Framework standards. By using EastType, you acknowledge that your data may be processed in jurisdictions with different data protection laws.",
                "我們的網站由 Vercel（美國）託管，付款由 Creem（美國）處理。資料可能傳輸至美國並在美國處理。Vercel 和 Creem 均遵守 EU-US Data Privacy Framework 標準。使用 EastType 即表示你承認你的資料可能在具有不同資料保護法的司法管轄區處理。",
                "当サイトはVercel（米国）でホストされ、決済はCreem（米国）で処理されます。データは米国に転送・処理される場合があります。VercelとCreemはいずれもEU-US Data Privacy Framework基準に準拠しています。EastTypeの利用により、データが異なるデータ保護法を持つ管轄区域で処理される場合があることを了承したものとみなされます。"
              )}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("10. Supervisory Authority", "10. 監管機構", "10. 監督機関")}
            </h2>
            <p>
              {l(
                "If you are in the EEA and believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection supervisory authority.",
                "如果你位於 EEA 並認為你的資料保護權利受到侵害，你有權向當地的資料保護監管機構投訴。",
                "EEAにお住まいでデータ保護権利が侵害されたと考える場合、現地のデータ保護監督機関に苦情を申し立てる権利があります。"
              )}
            </p>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {l("Contact Us", "聯繫我們", "お問い合わせ")}
            </h2>
            <p>
              {l(
                "If you have any questions about this Privacy Policy, or wish to exercise your data protection rights, please email us at support@myeasterntype.com.",
                "如果你對本隱私權政策有任何疑問，或希望行使資料保護權利，請發送電子郵件至 support@myeasterntype.com。",
                "このプライバシーポリシーについてご質問がある場合、またはデータ保護権利を行使したい場合は、support@myeasterntype.com までメールでお問い合わせください。"
              )}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}