"use client"

import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const { locale } = useLocale()

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-8 text-center">
          {locale.code === "en" ? "About EastType" : locale.code === "zh-TW" ? "關於 EastType" : "EastTypeについて"}
        </h1>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {locale.code === "en" ? "What is EastType?" : locale.code === "zh-TW" ? "EastType 是什麼？" : "EastTypeとは？"}
            </h2>
            <p className="mb-4">
              {locale.code === "en"
                ? "EastType is a body constitution discovery platform based on Traditional Chinese Medicine (TCM) — a wellness framework that has been refined over 3,000 years."
                : locale.code === "zh-TW"
                  ? "EastType 是一個基於中醫的身體體質發現平台——一套被淬鍊了 3,000 年的養生智慧。"
                  : "EastTypeは、伝統的な中国医学（TCM）に基づく体質発見プラットフォームです。3,000年以上にわたり磨かれてきたウェルネスの枠組みです。"}
            </p>
            <p>
              {locale.code === "en"
                ? "While Ayurveda identifies 3 body types (doshas), Chinese medicine identifies 9. Each type describes a unique pattern of how your body processes energy, food, emotions, and the world around you."
                : locale.code === "zh-TW"
                  ? "阿育吠陀有 3 種體質（doshas），中醫有 9 種。每種體質描述了你的身體如何處理能量、食物、情緒和周圍世界的獨特模式。"
                  : "アーユルヴェーダは3つの体質（ドーシャ）を識別しますが、中国医学は9つを識別します。それぞれのタイプは、あなたの体がエネルギー、食べ物、感情、周囲の世界をどのように処理するかのユニークなパターンを表しています。"}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {locale.code === "en" ? "Where does this come from?" : locale.code === "zh-TW" ? "這套理論從哪來？" : "どこから来たの？"}
            </h2>
            <p className="mb-4">
              {locale.code === "en"
                ? "The 9 body constitution framework was formalized by Professor Wang Qi at Beijing University of Chinese Medicine, building on foundations from the Yellow Emperor's Inner Canon, one of the oldest medical texts in the world, dating back over two millennia."
                : locale.code === "zh-TW"
                  ? "9 種體質分類由北京中醫藥大學王琦教授正式確立，其基礎可追溯到《黃帝內經》——世界上最古老的醫學典籍之一，歷史超過兩千年。"
                  : "9つの体質フレームワークは、北京中医薬大学の王琦教授によって体系化されました。その基礎は、世界最古の医学書の一つである『黄帝内経』に遡ります。"}
            </p>
            <p>
              {locale.code === "en"
                ? "This isn't folklore — the Chinese government has included body constitution identification in its national public health policy since 2009. It's a framework used by millions of practitioners worldwide."
                : locale.code === "zh-TW"
                  ? "這不是民間偏方——中國政府自 2009 年起已將體質辨識納入國家公共衛生政策。全球有數百萬從業者使用這套框架。"
                  : "これは民間伝承ではありません。中国政府は2009年から体質識別を国家公衆衛生政策に組み込んでいます。世界中で数百万人の実践者が使用しているフレームワークです。"}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {locale.code === "en" ? "Important Disclaimer" : locale.code === "zh-TW" ? "重要聲明" : "重要な免責事項"}
            </h2>
            <div className="bg-cream border border-border rounded-xl p-6 text-sm leading-relaxed">
              <p className="mb-3">
                {locale.code === "en"
                  ? "EastType is based on traditional Chinese dietary philosophy and is provided for informational and self-discovery purposes only."
                  : locale.code === "zh-TW"
                    ? "EastType 基於東方傳統飲食哲學，僅供資訊參考和自我探索之用。"
                    : "EastTypeは東洋の伝統的な食哲学に基づいており、情報提供と自己発見の目的のみで提供されています。"}
              </p>
              <p className="mb-3">
                {locale.code === "en"
                  ? "This is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for any medical concerns."
                  : locale.code === "zh-TW"
                    ? "本網站非醫療建議、診斷或治療。如有任何健康問題，請諮詢合格醫療專業人員。"
                    : "これは医療アドバイス、診断、治療ではありません。健康上の懸念については、必ず医療専門家にご相談ください。"}
              </p>
              <p>
                {locale.code === "en" ? "Individual results may vary." : locale.code === "zh-TW" ? "個人結果可能有所不同。" : "個人の結果は異なる場合があります。"}
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              {locale.code === "en" ? "30-Day Money-Back Guarantee" : locale.code === "zh-TW" ? "30天無條件退款保證" : "30日間返金保証"}
            </h2>
            <p>
              {locale.code === "en"
                ? "We're confident you'll love your EastType report. If for any reason you're not satisfied, email us within 30 days for a full refund. No questions asked."
                : locale.code === "zh-TW"
                  ? "我們相信你會喜歡你的 EastType 報告。如果你因任何原因不滿意，請在購買後30天內 email 我們，我們將全額退款。"
                  : "EastTypeレポートに満足していただけると確信しています。何らかの理由でご満足いただけない場合は、30日以内にメールでご連絡ください。全額返金いたします。"}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
