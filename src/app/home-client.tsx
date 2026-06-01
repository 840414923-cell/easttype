"use client"

import Link from "next/link"
import Image from "next/image"
import { TYPES } from "@/lib/constitution-data"
import { useLocale } from "@/components/locale-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function HomeClient() {
  const { locale } = useLocale()
  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

  const typeList = Object.values(TYPES)
  const ll = locale.landing

  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── Part 1+2: Hero + What You'll Discover ── */}
        <section className="relative max-w-4xl mx-auto px-6 pt-12 pb-6 text-center hero-radial dunhuang-border-top">

          <div className="inline-flex items-center gap-2 bg-[rgba(201,163,85,0.06)] border border-[rgba(201,163,85,0.15)] rounded-full px-5 py-2 text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-6">
            <span className="text-accent text-[8px]">◇</span>
            {ll.badge}
            <span className="text-accent text-[8px]">◇</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl mb-4 leading-[1.15] tracking-wide text-text max-w-3xl mx-auto">
            {ll.title1}
          </h1>

          <p className="text-base sm:text-lg text-text2 max-w-xl mx-auto mb-8 leading-relaxed tracking-wide">
            {ll.subtitle}
          </p>

          <div className="flex flex-col items-center gap-2 mb-6">
            <Link
              href="/quiz"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded font-[family-name:var(--font-body)] text-lg font-semibold cursor-pointer no-underline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(201,163,85,0.25)] bg-gradient-to-r from-accent to-accent2 text-bg"
            >
              {ll.cta}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
            <span className="text-sm text-text2 tracking-wide">
              {ll.ctaSub}
            </span>
            <span className="text-xs text-text2/70 tracking-wide">
              {ll.ctaSecondary}
            </span>
          </div>

          {/* What You'll Discover */}
          <div className="max-w-md mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-accent mb-3">
              {ll.discoverTitle}
            </h2>
            <ul className="space-y-2">
              {[
                ll.discover1,
                ll.discover2,
                ll.discover3,
                ll.discover4,
                ll.discover5,
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text2">
                  <span className="text-accent text-xs">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* ── Divider ── */}
        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        {/* ── Part 3: Type Cards Grid ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-6 sm:pb-10">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl mb-2 tracking-wide">
              {ll.archetypeTitle}
            </h2>
            <p className="text-text2 text-sm sm:text-base tracking-wide max-w-lg mx-auto">
              {ll.archetypeLine1}
              <br />
              <span className="text-text2/80">{ll.archetypeLine2}</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
            {typeList.map((t) => {
              const viral = locale.types[t.id]
              const imgSrc = `/types/${t.id}.png`
              return (
                <Link
                  key={t.id}
                  href={`/types/${t.id}`}
                  className="group block"
                >
                  <div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(201,163,85,0.12)] bg-card-bg transition-all duration-500 group-hover:border-[rgba(201,163,85,0.4)] group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                    style={{
                      background: `linear-gradient(170deg, ${t.color}10 0%, #1A1410 40%, #1A1410 100%)`,
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={t.en}
                      width={400}
                      height={600}
                      className="w-full h-auto block opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      sizes="(max-width: 640px) 33vw, 200px"
                      unoptimized
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/90 via-[#1A1410]/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:hidden">
                      <span
                        className="font-[family-name:var(--font-display)] text-xs font-bold block mb-0.5 truncate"
                        style={{ color: t.color }}
                      >
                        {locale.code === "en" ? t.en : locale.code === "zh-TW" ? t.zh.replace("质", "質") : t.zh}
                      </span>
                      <span
                        className="font-[family-name:var(--font-display)] text-xs font-bold"
                        style={{ color: t.color }}
                      >
                        {t.pct}
                      </span>
                      <span className="text-[7px] text-text2/60 ml-0.5">
                        {l("of people", "的人", "の人")}
                      </span>
                    </div>

                    <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-4">
                      <div className="mb-1">
                        <span
                          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide"
                          style={{ color: t.color }}
                        >
                          {locale.code === "en" ? t.en : locale.code === "zh-TW" ? t.zh.replace("质", "質") : t.zh}
                        </span>
                      </div>
                      <div className="text-[11px] text-text2 mb-1.5">
                        {locale.code === "en" ? (
                          <>{t.zh} · {t.zhPy}</>
                        ) : (
                          <>{t.en} · {t.zhPy}</>
                        )}
                      </div>
                      <div className="text-xs text-text/90 font-medium leading-snug mb-2 line-clamp-2">
                        {viral?.cardHeadline ?? ""}
                      </div>
                      <div>
                        <span
                          className="font-[family-name:var(--font-display)] text-lg font-bold"
                          style={{ color: t.color }}
                        >
                          {t.pct}
                        </span>
                        <span className="text-[10px] text-text2 ml-1">
                          {l("of people", "的人", "の人")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        {/* ── Part 4: How It Works ── */}
        <section className="max-w-3xl mx-auto px-6 py-8 sm:py-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide text-center mb-8">
            {ll.howTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            {[
              { num: "1", title: ll.how1Title, desc: ll.how1Desc },
              { num: "2", title: ll.how2Title, desc: ll.how2Desc },
              { num: "3", title: ll.how3Title, desc: ll.how3Desc },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(201,163,85,0.25)] bg-[rgba(201,163,85,0.08)] text-accent font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                  {step.num}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg text-text mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-text2 leading-relaxed">
                  {step.desc}
                </p>
                {step.num !== "3" && (
                  <span className="hidden sm:block text-accent/40 text-xl mt-3">↓</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        {/* ── Part 5: Result Preview ── */}
        <section className="max-w-4xl mx-auto px-6 py-8 sm:py-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide text-center mb-8">
            {ll.previewTitle}
          </h2>

          <div className="max-w-sm mx-auto">
            <div className="border border-[rgba(201,163,85,0.2)] rounded-2xl overflow-hidden bg-card-bg">
              <div className="bg-[rgba(201,163,85,0.08)] px-5 py-2 text-center">
                <span className="text-[10px] text-accent uppercase tracking-[0.15em] font-semibold">{ll.previewBadge}</span>
              </div>
              <div className="px-5 py-6 text-center">
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent mb-5">
                  {ll.previewType}
                </div>

                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-[10px] text-text2 uppercase tracking-wider mb-2">
                      {l("Common Traits", "常見特徵", "一般的な特徴")}
                    </div>
                    <ul className="space-y-1.5">
                      {[ll.previewTrait1, ll.previewTrait2, ll.previewTrait3].map((t) => (
                        <li key={t} className="text-xs text-text/80 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] text-text2 uppercase tracking-wider mb-2">
                      {l("Suggestions", "建議", "アドバイス")}
                    </div>
                    <ul className="space-y-1.5">
                      {[ll.previewSug1, ll.previewSug2, ll.previewSug3].map((s) => (
                        <li key={s} className="text-xs text-text/80 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-text2/70 mt-4">
              {ll.previewSub}
            </p>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        {/* ── Pricing ── */}
        <section className="max-w-3xl mx-auto px-6 py-6 sm:py-8">
          <div className="text-center mb-5">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-wide">
              {l("What's Inside Each Report", "每份報告包含什麼", "各レポートの内容")}
            </h2>
            <p className="text-text2 text-sm mt-1">
              {l("Free quiz, then unlock the depth you want", "免費測驗，再按需解鎖深度報告", "無料クイズ、その後必要な深さをアンロック")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Free */}
            <div className="border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg flex flex-col">
              <div className="text-xs text-text2 font-semibold mb-2 uppercase tracking-wide">{l("Quiz Result", "測驗結果", "クイズ結果")}</div>
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-text mb-0.5">{l("Free", "免費", "無料")}</div>
              <div className="text-[10px] text-text2 mb-4">{l("No credit card needed", "無需信用卡", "クレジットカード不要")}</div>
              <ul className="text-[11px] text-text2 space-y-1.5 flex-1">
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Your primary + secondary type", "你的主要 + 次要體質", "主要 + 二次の体質")}</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Shareable type card", "可分享的體質卡片", "シェア可能なタイプカード")}</li>
                <li className="flex items-start gap-1.5"><span className="text-text2/30 text-[9px] mt-0.5">&#10005;</span><span className="text-text2/50">{l("No food map", "無食物地圖", "フードマップなし")}</span></li>
                <li className="flex items-start gap-1.5"><span className="text-text2/30 text-[9px] mt-0.5">&#10005;</span><span className="text-text2/50">{l("No recipe plan", "無食譜計畫", "レシピプランなし")}</span></li>
              </ul>
            </div>

            {/* Basic $4.99 */}
            <div className="border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg flex flex-col">
              <div className="text-xs text-text2 font-semibold mb-2 uppercase tracking-wide">{locale.ui.planBasicName}</div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-text">$4.99</span>
                <span className="text-xs text-text2">USD</span>
              </div>
              <div className="text-[10px] text-text2 mb-4">{l("One-time payment", "一次性付款", "一回限りの支払い")}</div>
              <ul className="text-[11px] text-text2 space-y-1.5 flex-1">
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Deep type explanation", "體質深度解析", "体質の詳しい解説")}</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Personal Food Map (25+ foods)", "專屬食物地圖（25+ 食物）", "フードマップ（25+食材）")}</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Seasonal guide + daily rhythm", "季節指南 + 每日節奏", "季節ガイド + 1日のリズム")}</li>
                <li className="flex items-start gap-1.5"><span className="text-text2/30 text-[9px] mt-0.5">&#10005;</span><span className="text-text2/50">{l("No 28-day recipe plan", "無28天食譜計畫", "28日レシピプランなし")}</span></li>
              </ul>
            </div>

            {/* Pro $12.99 */}
            <div className="border border-[rgba(201,163,85,0.12)] rounded-xl p-5 bg-card-bg flex flex-col">
              <div className="text-xs text-text2 font-semibold mb-2 uppercase tracking-wide">{locale.ui.planProName}</div>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-text">$12.99</span>
                <span className="text-xs text-text2">USD</span>
              </div>
              <div className="text-[10px] text-text2 mb-4">{l("One-time payment", "一次性付款", "一回限りの支払い")}</div>
              <ul className="text-[11px] text-text2 space-y-1.5 flex-1">
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Everything in Body Profile", "包含體質報告所有內容", "ボディプロファイルの全内容")}</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("28-day TCM recipe plan", "28天中醫食療食譜", "28日中医学レシピプラン")}</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Weekly grocery lists", "每週採購清單", "週間買い物リスト")}</li>
                <li className="flex items-start gap-1.5"><span className="text-accent/70 text-[9px] mt-0.5">&#10003;</span>{l("Seasonal adjustments", "季節性調整建議", "季節調整アドバイス")}</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-[10px] text-text2 mt-3">
            {l("30-day money-back guarantee · Questions? 840414923@qq.com", "30天退款保證 · 有疑问？840414923@qq.com", "30日間返金保証 · 質問は 840414923@qq.com")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="lotus-divider max-w-4xl mx-auto px-6">
          <span className="text-accent text-xs opacity-40">✦</span>
        </div>

        {/* ── Bottom CTA ── */}
        <section className="max-w-3xl mx-auto px-6 py-8 sm:py-12 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl mb-3 tracking-wide">
            {l("Ready to Meet Yourself?", "準備好認識自己了嗎？", "自分に出会う準備はできた？")}
          </h2>
          <p className="text-text2 text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto tracking-wide">
            {ll.readySubtitleBefore}
          </p>
          <Link
            href="/quiz"
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded font-[family-name:var(--font-body)] text-base font-semibold cursor-pointer no-underline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(201,163,85,0.25)] bg-gradient-to-r from-accent to-accent2 text-bg"
          >
            {l("Quick Quiz · ~5 min", "快速測驗 · 約 5 分鐘", "クイック診断 · 約5分")}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
          </Link>
          <span className="text-xs text-text2/70 mt-2 block">
            {l("Free quiz · Detailed reports from $4.99 USD", "免費測驗 · 詳細報告 $4.99 美元起", "無料クイズ · 詳細レポート $4.99 USD から")}
          </span>
        </section>

        {/* ── Part 6: SEO Block + FAQ ── */}
        <section className="max-w-3xl mx-auto px-6 py-8 sm:py-12">
          <div className="mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl tracking-wide mb-4 text-center">
              {ll.seoTitle}
            </h2>
            <div className="space-y-3 text-sm text-text2 leading-relaxed text-center max-w-xl mx-auto">
              <p>{ll.seoP1}</p>
              <p>{ll.seoP2}</p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl tracking-wide mb-6 text-center">
              {ll.faqTitle}
            </h2>
            <div className="space-y-3">
              {[
                { q: ll.faq1Q, a: ll.faq1A },
                { q: ll.faq2Q, a: ll.faq2A },
                { q: ll.faq3Q, a: ll.faq3A },
                { q: ll.faq4Q, a: ll.faq4A },
              ].map((faq) => (
                <details key={faq.q} className="group border border-[rgba(201,163,85,0.12)] rounded-xl bg-card-bg">
                  <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer text-sm text-text font-medium list-none">
                    {faq.q}
                    <span className="text-accent/50 text-xs transition-transform duration-200 group-open:rotate-180">▾</span>
                  </summary>
                  <div className="px-5 pb-3.5 text-sm text-text2 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
