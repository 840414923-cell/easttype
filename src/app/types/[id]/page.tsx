import type { Metadata } from "next"
import { TYPES, TYPE_IDS } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"
import TypeDetailClient from "./detail-client"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

const SEO_TITLES: Record<ConstitutionId, { en: string; zh: string; ja: string }> = {
  balanced: { en: "The Still Lake — Balanced Constitution (Ping He)", zh: "平和質 — 你是那1/10的天選之人", ja: "平和質 — バランスのとれた体質" },
  qi_deficient: { en: "The Gentle Breeze — Qi Deficient Constitution (Qi Xu)", zh: "氣虛質 — 電量永遠不夠的體質", ja: "気虚質 — バッテリー残量不足の体質" },
  yang_deficient: { en: "The Moonlit Garden — Yang Deficient Constitution (Yang Xu)", zh: "陽虛質 — 陽光是你超能力的體質", ja: "陽虚質 — 太陽光が超能力の体質" },
  yin_deficient: { en: "The Volcanic Spring — Yin Deficient Constitution (Yin Xu)", zh: "陰虛質 — 外表佛系內心火山的體質", ja: "陰虚質 — 仏の顔、中身は火山の体質" },
  phlegm_damp: { en: "The Mossy Stone — Phlegm Damp Constitution (Tan Shi)", zh: "痰濕質 — 床的引力比木星大的體質", ja: "痰湿質 — ベッドの引力が木星より強い体質" },
  damp_heat: { en: "The Summer Storm — Damp Heat Constitution (Shi Re)", zh: "濕熱質 — 強烈是出廠設定的體質", ja: "湿熱質 — 激しさがデフォルトの体質" },
  blood_stasis: { en: "The Frozen Stream — Blood Stasis Constitution (Xue Yu)", zh: "血瘀質 — 一切在流只是不夠快的體質", ja: "血瘀質 — すべて流れるが速さが足りない体質" },
  qi_stagnant: { en: "The Clouded Peak — Qi Stagnant Constitution (Qi Yu)", zh: "氣鬱質 — 腦子狂奔身體卡住的體質", ja: "気鬱質 — 頭は猛スピード、体はストップの体質" },
  sensitive: { en: "The Wild Orchid — Sensitive Constitution (Te Bing)", zh: "特稟質 — 感受到別人感受不到的一切", ja: "特稟質 — 他人が感じないものをすべて感じる体質" },
}

const SEO_DESCS: Record<ConstitutionId, { en: string; zh: string; ja: string }> = {
  balanced: { en: "The balanced constitution (平和质) is the rare baseline — only ~30% of people have it. Self-regulating, steady energy, emotionally resilient. Take the free quiz to find out if this is your type.", zh: "平和質是最罕見的基準體質，僅約30%的人屬於此類。自我調節、能量穩定、情緒韌性強。免費測驗確認你的體質。", ja: "平和質は稀な基準体質、約30%の人のみ。自己調節、安定エネルギー、感情的回復力。無料クイズであなたの体質を確認。" },
  qi_deficient: { en: "Qi deficient constitution (气虚质) — your engine runs but the tank is always low. ~15% of people share this type. Chronic fatigue, weak voice, easy sweating. Free quiz to discover yours.", zh: "氣虛質 — 引擎在轉但油箱永遠是低的。約15%的人屬於此類。慢性疲勞、聲音低弱、容易出汗。免費測驗確認你的體質。", ja: "気虚質 — エンジンは回るがタンクはいつも空。約15%の人がこのタイプ。慢性疲労、声が小さい、汗かきやすい。無料クイズで確認。" },
  yang_deficient: { en: "Yang deficient constitution (阳虚质) — your inner furnace is underpowered. ~10% of people share this type. Cold hands/feet, prefers heat, frequent urination. Free quiz to discover yours.", zh: "陽虛質 — 內在火爐功率不足。約10%的人屬於此類。手足冰冷、偏好溫熱、頻尿。免費測驗確認你的體質。", ja: "陽虚質 — 内側の暖炉出力不足。約10%の人がこのタイプ。手足が冷たい、温かいもの好き、頻尿。無料クイズで確認。" },
  yin_deficient: { en: "Yin deficient constitution (阴虚质) — calm surface, volcanic inside. ~10% of people share this type. Night heat, dry mouth, insomnia. Free quiz to discover yours.", zh: "陰虛質 — 表面平靜，內在火山。約10%的人屬於此類。夜間發熱、口乾、失眠。免費測驗確認你的體質。", ja: "陰虚質 — 表面穏やか、中は火山。約10%の人がこのタイプ。夜のほてり、口渇、不眠。無料クイズで確認。" },
  phlegm_damp: { en: "Phlegm damp constitution (痰湿质) — your body holds moisture like a sponge. ~8% of people share this type. Heavy feeling, weight gain, sluggish mornings. Free quiz to discover yours.", zh: "痰濕質 — 身體像海綿留住水分。約8%的人屬於此類。身體沉重、易胖、早上遲緩。免費測驗確認你的體質。", ja: "痰湿質 — スポンジのように水分を抱え込む。約8%の人がこのタイプ。体が重い、太りやすい、朝だるい。無料クイズで確認。" },
  damp_heat: { en: "Damp heat constitution (湿热质) — intensity is your default setting. ~8% of people share this type. Hot/sticky feeling, acne, irritability in heat. Free quiz to discover yours.", zh: "濕熱質 — 強烈是出廠設定。約8%的人屬於此類。又熱又黏、長痘、遇熱煩躁。免費測驗確認你的體質。", ja: "湿熱質 — 激しさがデフォルト。約8%の人がこのタイプ。暑くネバネバ、ニキビ、暑さでイライラ。無料クイズで確認。" },
  blood_stasis: { en: "Blood stasis constitution (血瘀质) — everything flows, just not fast enough. ~6% of people share this type. Easy bruising, dark spots, fixed pain. Free quiz to discover yours.", zh: "血瘀質 — 一切在流只是不夠快。約6%的人屬於此類。易瘀青、暗沉斑、固定位置鈍痛。免費測驗確認你的體質。", ja: "血瘀質 — すべて流れるが速さが足りない。約6%の人がこのタイプ。あざやすい、シミ、固定痛。無料クイズで確認。" },
  qi_stagnant: { en: "Qi stagnant constitution (气郁质) — your mind races while your body stalls. ~8% of people share this type. Chest tightness, frequent sighing, mood swings. Free quiz to discover yours.", zh: "氣鬱質 — 腦子狂奔身體卡住。約8%的人屬於此類。胸悶、常嘆息、情緒起伏。免費測驗確認你的體質。", ja: "気鬱質 — 頭は猛スピード、体はストップ。約8%の人がこのタイプ。胸苦しい、ため息、気分の波。無料クイズで確認。" },
  sensitive: { en: "Sensitive constitution (特禀质) — you feel everything everyone else doesn't. ~5% of people share this type. Allergies, strong reactions to smells/sounds, emotional sensitivity. Free quiz to discover yours.", zh: "特稟質 — 感受到別人感受不到的一切。約5%的人屬於此類。過敏、對氣味聲音反應強、情感敏感。免費測驗確認你的體質。", ja: "特稟質 — 他人が感じないものをすべて感じる。約5%の人がこのタイプ。アレルギー、匂い・音に強く反応、感情的敏感。無料クイズで確認。" },
}

export async function generateStaticParams() {
  return TYPE_IDS.map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const typeId = id as ConstitutionId
  if (!TYPES[typeId]) return {}

  const titles = SEO_TITLES[typeId]
  const descs = SEO_DESCS[typeId]
  const type = TYPES[typeId]
  const url = `https://myeasterntype.com/types/${id}`

  return {
    title: `EastType — ${titles.en}`,
    description: descs.en,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `EastType — ${titles.en}`,
      description: descs.en,
      url,
      siteName: "EastType",
      type: "article",
      images: [{ url: `/types/${id}.png`, width: 400, height: 600, alt: titles.en }],
    },
    twitter: {
      card: "summary_large_image",
      title: `EastType — ${titles.en}`,
      description: descs.en,
      images: [`/types/${id}.png`],
    },
  }
}

export default async function TypeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const typeId = id as ConstitutionId
  const titles = SEO_TITLES[typeId]
  const descs = SEO_DESCS[typeId]
  const url = `https://myeasterntype.com/types/${id}`

  const jsonLd = TYPES[typeId]
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `EastType — ${titles.en}`,
          description: descs.en,
          url,
          datePublished: "2026-06-01",
          dateModified: "2026-06-01",
          image: `https://myeasterntype.com/types/${id}.png`,
          author: {
            "@type": "Organization",
            name: "EastType",
            url: "https://myeasterntype.com",
          },
          publisher: {
            "@type": "Organization",
            name: "EastType",
            url: "https://myeasterntype.com",
            logo: {
              "@type": "ImageObject",
              url: "https://myeasterntype.com/favicon.svg",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        },
        buildBreadcrumbJsonLd([
          { name: "EastType", url: "https://myeasterntype.com" },
          { name: titles.en, url },
        ]),
      ]
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <TypeDetailClient params={params} />
    </>
  )
}
