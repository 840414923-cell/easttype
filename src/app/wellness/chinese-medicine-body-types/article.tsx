
import Link from "next/link"
import FaqSection from "@/components/faq-section"
import { WELLNESS_FAQS } from "@/lib/wellness-faqs"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"
import SymptomCta from "@/components/symptom-cta"

const TYPE_SUMMARY: Record<ConstitutionId, { en: { name: string; desc: string; key: string }; zh: { name: string; desc: string; key: string }; ja: { name: string; desc: string; key: string } }> = {
  balanced: { en: { name: "The Still Lake", desc: "Self-regulating, steady energy, emotionally resilient. The rare baseline — only ~30% of people.", key: "Sleeps well, adapts easily, rarely sick" }, zh: { name: "平和質", desc: "自我調節、能量穩定、情緒韌性強。罕見基準體質，約30%的人。", key: "睡得好、適應力強、很少生病" }, ja: { name: "平和質", desc: "自己調節、安定エネルギー、感情的回復力。稀な基準体質、約30%", key: "よく眠れ、適応力強、病気になりにくい" } },
  qi_deficient: { en: { name: "The Gentle Breeze", desc: "Engine runs but the tank is always low. Everything costs more energy than it should.", key: "Always tired, soft voice, easy sweating" }, zh: { name: "氣虛質", desc: "引擎在轉但油箱永遠是低的。每件事都比別人多花力氣。", key: "總是累、聲音輕、容易出汗" }, ja: { name: "気虚質", desc: "エンジンは回るがタンクはいつも空。全てに人より多くのエネルギーを要する。", key: "いつも疲れ、声小さく、汗かきやすい" } },
  yang_deficient: { en: { name: "The Moonlit Garden", desc: "Inner furnace is underpowered. Cold extremities, prefers warmth, sunlight is medicine.", key: "Cold hands/feet, prefers heat, frequent urination" }, zh: { name: "陽虛質", desc: "內在火爐功率不足。四肢冰冷、偏好溫暖、陽光就是藥。", key: "手腳冰冷、偏好熱、頻尿" }, ja: { name: "陽虚質", desc: "内側暖炉の出力不足。手足が冷たい、温かいもの好き、日光が薬。", key: "手足が冷たい、温かいもの好き、頻尿" } },
  yin_deficient: { en: { name: "The Volcanic Spring", desc: "Calm surface, volcanic inside. Heat builds up internally without enough cooling moisture.", key: "Night heat, dry mouth, insomnia" }, zh: { name: "陰虛質", desc: "表面平靜，內在火山。內熱堆積，缺乏足夠的降溫潤澤。", key: "夜間發熱、口乾、失眠" }, ja: { name: "陰虚質", desc: "表面穏やか、中は火山。内熱が蓄積、冷却・潤いが不足。", key: "夜のほてり、口渇、不眠" } },
  phlegm_damp: { en: { name: "The Mossy Stone", desc: "Holds moisture like a sponge. Mind is sharp but body moves at its own leisurely pace.", key: "Heavy feeling, weight gain, sluggish mornings" }, zh: { name: "痰濕質", desc: "像海綿留住水分。腦子靈光但身體有自己的慢節奏。", key: "身體沉重、易胖、早上遲緩" }, ja: { name: "痰湿質", desc: "スポンジのように水分を抱え込む。頭は冴えて体は独自のゆっくりペース。", key: "体が重い、太りやすい、朝だるい" } },
  damp_heat: { en: { name: "The Summer Storm", desc: "Intensity is the default setting. Sticky warmth inside, skin reactions, irritability in heat.", key: "Hot/sticky feeling, acne, irritability" }, zh: { name: "濕熱質", desc: "強烈是出廠設定。體內黏膩溫熱、皮膚反應、遇熱煩躁。", key: "又熱又黏、長痘、遇熱煩躁" }, ja: { name: "湿熱質", desc: "激しさがデフォルト。内側ネバネバ温かく、肌反応、暑さでイライラ。", key: "暑くネバネバ、ニキビ、暑さでイライラ" } },
  blood_stasis: { en: { name: "The Frozen Stream", desc: "Everything flows, just not fast enough. Sluggish circulation, easy bruising, emotional holding.", key: "Easy bruising, dark spots, fixed pain" }, zh: { name: "血瘀質", desc: "一切在流只是不夠快。循環遲緩、易瘀青、情感上放不下。", key: "易瘀青、暗沉斑、固定鈍痛" }, ja: { name: "血瘀質", desc: "全て流れるが速さが足りない。循環の滞り、あざやすい、感情的執着。", key: "あざやすい、シミ、固定痛" } },
  qi_stagnant: { en: { name: "The Clouded Peak", desc: "Mind races while body stalls. Energy builds up but can't flow freely. Tension, sighing, mood swings.", key: "Chest tightness, frequent sighing, mood swings" }, zh: { name: "氣鬱質", desc: "腦子狂奔身體卡住。能量堆積但無法自由流動。緊。緊繃、嘆息、情緒起伏。", key: "胸悶、常嘆息、情緒起伏" }, ja: { name: "気鬱質", desc: "頭は猛スピード、体はストップ。エネルギー蓄積、自由に流れない。緊張、ため息、気分の波。", key: "胸苦しい、ため息、気分の波" } },
  sensitive: { en: { name: "The Wild Orchid", desc: "Feels everything everyone else doesn't. Extraordinary sensory perception, allergies, emotional depth.", key: "Allergies, strong reactions, emotional sensitivity" }, zh: { name: "特稟質", desc: "感受到別人感受不到的一切。非凡的感官感知、過敏、情感深度。", key: "過敏、反應強烈、情感敏感" }, ja: { name: "特稟質", desc: "他人が感じないものを全て感じる。並外れた感覚知覚、アレルギー、感情の深さ。", key: "アレルギー、強い反応、感情的敏感" } },
}

export default function BodyTypesArticle() {

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">›</span>
        <Link href="/wellness/chinese-medicine-body-types" className="hover:text-accent transition-colors no-underline text-text2/60">{"Wellness"}</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text2">{"Chinese Medicine Body Types"}</span>
      </nav>

      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
        {"The 9 Chinese Medicine Body Types — A Complete Guide"}
      </h1>
      <p className="text-text2 text-sm mb-6">{"10 min read · Based on 3,000 years of Chinese medicine practice"}</p>

      <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-accent mb-3">
          {"Quick Answer"}
        </h2>
        <p className="text-text leading-relaxed text-[0.95rem]">
          {"Chinese medicine identifies 9 body constitutions (平和, 氣虚, 阳虚, 阴虚, 痰湿, 湿热, 血瘀, 气郁, 特禀) — each with distinct patterns in energy, digestion, temperature preference, emotional tendencies, and dietary needs. Unlike Ayurveda's 3 doshas, this system offers 9 categories for more precise personalization. Most people have one dominant type with secondary influences."}
        </p>
      </div>

      <section className="mb-10">
        <p className="text-text2 leading-relaxed mb-4">
          {"You've probably heard of Ayurveda's three doshas — Vata, Pitta, Kapha. But Chinese medicine has a more nuanced system: 9 body constitutions, each with distinct physical patterns, emotional tendencies, and ideal foods. This framework has been refined in wellness clinics across Asia for over 3,000 years."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"The thing is, most people don't fit neatly into just one category. You might recognize yourself in 2 or 3 of these types — that's completely normal. One is usually dominant, shaping your baseline tendencies, while others show up as secondary influences. Think of it like a color palette: you have a primary hue, but there are undertones that shift how it appears in different lights."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"Why 9 Types Matter: More Nuance, Better Guidance"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"You might wonder: why does Chinese medicine need 9 types when Ayurveda works with just 3? It's a fair question. The answer comes down to precision. Think about it this way — if you were trying to understand the weather, you could work with three categories (hot, cold, mild) and get a rough sense of what to wear. Or you could use a more detailed system that accounts for humidity, wind, seasonal shifts, and time of day. Both work. One just gives you better information to work with."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"In practical terms, this means more personalized recommendations. A Qi Deficient person and a Yang Deficient person might both feel tired, but the root cause is different — and so are the solutions. One needs energy-building foods; the other needs warming foods. Same symptom, different engine under the hood. The 9-type system helps you see that difference and address it more precisely."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"This isn't about one system being \"better\" than another. Both Ayurveda and Chinese medicine have been tested across millions of lives over thousands of years. They're just different maps for the same territory. Some people resonate more with the Ayurvedic framework; others find the Chinese medicine approach more intuitive. There's no wrong choice — just different lenses for understanding your body."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-4">{"The 9 Types at a Glance"}</h2>
        <p className="text-text2 text-sm mb-4">
          {"Each type has a poetic name that captures its essence, along with practical signs you can recognize in yourself. Remember: most people are a mix, so you might see yourself in several of these."}
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 text-text font-medium">Type</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Core Pattern</th>
                <th className="text-left py-2 pr-3 text-text font-medium">Key Signs</th>
                <th className="text-left py-2 text-text font-medium">Food Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Still Lake (Balanced)</td>
                <td className="py-2 pr-3 text-text2">Self-regulating, steady</td>
                <td className="py-2 pr-3 text-text2">Sleeps well, adapts easily</td>
                <td className="py-2 text-text2">Variety, moderation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Gentle Breeze (Qi Deficient)</td>
                <td className="py-2 pr-3 text-text2">Low energy, easily depleted</td>
                <td className="py-2 pr-3 text-text2">Always tired, soft voice</td>
                <td className="py-2 text-text2">Energy-building, sweet</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Moonlit Garden (Yang Deficient)</td>
                <td className="py-2 pr-3 text-text2">Underpowered inner furnace</td>
                <td className="py-2 pr-3 text-text2">Cold hands/feet, prefers heat</td>
                <td className="py-2 text-text2">Warming, yang foods</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Volcanic Spring (Yin Deficient)</td>
                <td className="py-2 pr-3 text-text2">Internal heat, low moisture</td>
                <td className="py-2 pr-3 text-text2">Night heat, dry mouth</td>
                <td className="py-2 text-text2">Cooling, moistening</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Mossy Stone (Phlegm Damp)</td>
                <td className="py-2 pr-3 text-text2">Holds moisture, sluggish</td>
                <td className="py-2 pr-3 text-text2">Heavy feeling, weight gain</td>
                <td className="py-2 text-text2">Draining, drying</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Summer Storm (Damp Heat)</td>
                <td className="py-2 pr-3 text-text2">Hot and sticky internally</td>
                <td className="py-2 pr-3 text-text2">Acne, irritability in heat</td>
                <td className="py-2 text-text2">Cooling, draining</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Frozen Stream (Blood Stasis)</td>
                <td className="py-2 pr-3 text-text2">Sluggish circulation</td>
                <td className="py-2 pr-3 text-text2">Easy bruising, dark spots</td>
                <td className="py-2 text-text2">Circulation-supporting</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Clouded Peak (Qi Stagnant)</td>
                <td className="py-2 pr-3 text-text2">Stuck energy, tension</td>
                <td className="py-2 pr-3 text-text2">Chest tightness, mood swings</td>
                <td className="py-2 text-text2">Flow-supporting, sour</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium">Wild Orchid (Sensitive)</td>
                <td className="py-2 pr-3 text-text2">Heightened reactivity</td>
                <td className="py-2 pr-3 text-text2">Allergies, strong reactions</td>
                <td className="py-2 text-text2">Gentle, stabilizing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-4">
          {Object.entries(TYPES).map(([id, t]) => {
            const summary = TYPE_SUMMARY[id as ConstitutionId].en
            return (
              <div key={id} className="border border-border rounded-xl p-4 bg-cream/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold" style={{ color: t.color }}>{summary.name}</span>
                  <span className="text-xs text-text2">{t.pct}</span>
                </div>
                <p className="text-sm text-text2 leading-relaxed mb-2">{summary.desc}</p>
                <p className="text-xs text-text2/70">{"Key signs:"} {summary.key}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"How to Identify Your Type"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"You don't need a doctor to get a rough sense of your constitution. The body is constantly broadcasting signals — you just need to know what to listen for. Here's what practitioners look for, and what you can observe yourself."}
        </p>
        <div className="space-y-4">
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"Physical Signs"}</h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Start with the basics: Are you usually cold or warm? Do you sweat easily or rarely? How's your energy — steady, or does it crash in the afternoon? What about your digestion — comfortable after meals, or bloated and heavy? These seem like small details, but together they paint a picture of your internal landscape."}
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"Emotional Patterns"}</h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Your emotional tendencies are just as revealing. Do you tend toward worry, or anger, or sadness? How do you handle stress — do you push through, or shut down? Some types are naturally more resilient; others feel everything deeply. Neither is better — they're just different operating systems."}
            </p>
          </div>
          <div className="bg-cream/30 border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-accent mb-2">{"Food Responses"}</h3>
            <p className="text-sm text-text2 leading-relaxed">
              {"Pay attention to how different foods make you feel. Does spicy food energize you or make you irritable? Do you feel heavy after dairy, or fine? Does a warm soup comfort you more than a cold salad? Your body's responses to food are some of the clearest signals about your constitution."}
            </p>
          </div>
        </div>
        <p className="text-text2 text-sm mt-4 leading-relaxed">
          {"If this feels overwhelming, don't worry. You don't need to figure it all out at once. The quiz helps by asking targeted questions and calculating your likely dominant type. From there, you can explore the nuances over time as you pay attention to how your body responds to different foods, seasons, and situations."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Ayurveda vs Chinese Medicine: What's Different?"}</h2>
        <p className="text-text2 leading-relaxed mb-4">
          {"Both systems see your body as having an inherent pattern that determines how you respond to food, weather, and stress. But while Ayurveda groups everyone into 3 broad categories, Chinese medicine identifies 9 — giving you a more precise map of your body's tendencies. Think of it as the difference between a 3-color palette and a 9-color one: more nuance, more precision, more personalized guidance."}
        </p>
        <p className="text-text2 leading-relaxed mb-4">
          {"There's also a philosophical difference worth noting. Ayurveda emphasizes the five elements (earth, water, fire, air, ether) and how they combine into the three doshas. Chinese medicine works with Yin-Yang theory and the five phases (wood, fire, earth, metal, water), which connect to organs, seasons, emotions, and even times of day. Both are sophisticated systems. They just use different vocabulary to describe similar observations about how bodies work."}
        </p>
        <p className="text-text2 leading-relaxed">
          {"Practically speaking, if you've tried Ayurveda and found the three doshas too broad to capture your experience, the 9-type system might feel more specific. Conversely, if Ayurveda resonates with you, there's no need to switch — both systems can complement each other. Some practitioners even use both frameworks with the same patient, looking for overlapping patterns."}
        </p>
      </section>

      <section className="mb-10 bg-cream/30 border border-border rounded-xl p-5">
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">{"Important Note"}</h2>
        <p className="text-sm text-text2 leading-relaxed">
          {"This framework is for wellness and self-awareness, not medical diagnosis. Body type identification should complement — not replace — professional medical advice. Always consult a qualified healthcare provider for any health concerns."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
          {"Related Symptoms & Patterns"}
        </h2>
        <div className="space-y-3">
          <Link href="/foods-for" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Food Guides by Symptom"}</h3>
            <p className="text-text2 text-sm">{"What to eat and what to avoid for common symptoms, based on your body type"}</p>
          </Link>
          <Link href="/symptoms" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Browse All Symptoms"}</h3>
            <p className="text-text2 text-sm">{"Explore all symptoms to find which ones match your body type"}</p>
          </Link>
          <Link href="/patterns" className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline">
            <h3 className="text-text font-medium mb-1">{"Browse All Patterns"}</h3>
            <p className="text-text2 text-sm">{"Discover your dominant pattern through our comprehensive pattern guide"}</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">{"Related Articles"}</h2>
        <p className="text-text2 text-sm mb-4">
          {"Each body type connects to specific wellness challenges. If you want to dive deeper into how these patterns show up in daily life, these articles explore common symptoms through the lens of Chinese medicine:"}
        </p>
        <div className="space-y-3">
          <Link
            href="/symptoms/why-cant-i-fall-asleep"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {"Insomnia & Chinese Medicine →"}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {"Can't sleep? Night heat and racing thoughts often point to Yin Deficiency — one of the 9 types."}
            </p>
          </Link>
          <Link
            href="/symptoms/why-am-i-always-cold"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {"Cold Hands & Feet →"}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {"Always cold, even when others are comfortable? This is a classic Yang Deficiency pattern."}
            </p>
          </Link>
          <Link
            href="/symptoms/why-do-i-feel-anxious"
            className="block bg-cream/30 border border-border/60 rounded-xl p-4 hover:border-accent/40 transition-colors no-underline"
          >
            <span className="text-text font-medium text-sm">
              {"Anxiety & Chinese Medicine →"}
            </span>
            <p className="text-text2/70 text-xs mt-1">
              {"Chest tightness and mood swings often signal Qi Stagnation — when energy builds up but can't flow freely."}
            </p>
          </Link>
        </div>
      </section>

      <FaqSection faqs={WELLNESS_FAQS["chinese-medicine-body-types"]} />

      <SymptomCta />
    </main>
  )
}
