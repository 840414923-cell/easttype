"use client"

import { forwardRef } from "react"

type Food = {
  num: number
  name: string
  aka: string
  desc: string
  suits: string
  benefits: string[]
  usage: string[]
  habit: string
}

const FOODS: Food[] = [
  {
    num: 1,
    name: "Ginger",
    aka: "Sheng Jiang (Chinese), Shoga (Japanese), Adrak (Hindi), Khing (Thai)",
    desc: "Ginger is the most widely used warming food in Eastern wellness. If your hands and feet tend to run cold, or if you feel heavy and slow after meals, ginger may be one of the simplest things you can add to your daily routine.",
    suits: "Cold Sensitivity and Low Vitality body types (people who tend to run cold, feel fatigued, or have slow digestion).",
    benefits: [
      "Warming the body from the inside",
      "Supporting digestion after heavy or cold meals",
      "Reducing that heavy, sluggish feeling after eating",
    ],
    usage: [
      "Slice 3 to 4 thin pieces of fresh ginger and steep in hot water for 5 minutes. Drink this in the morning, 20 minutes before breakfast.",
      "Add grated ginger to soups, stews, and stir-fries.",
      "Avoid ginger late at night if you tend to feel hot when trying to sleep.",
    ],
    habit: "Replace your first glass of cold water in the morning with a cup of warm ginger water. This single change can make a noticeable difference in how your digestion feels throughout the day.",
  },
  {
    num: 2,
    name: "Goji Berries",
    aka: "Wolfberries, Gou Qi Zi (Chinese), Kuko no Mi (Japanese), Boxthorn Berries",
    desc: "Goji berries are small, sweet, red dried fruits that look similar to raisins but have a distinct tart-sweet flavor. In Eastern wellness, they are associated with eye health, liver support, and healthy aging.",
    suits: "Internal Heat body types (people who tend to feel warm at night, have dry skin, or wake up between 1 AM and 3 AM). Also suitable for people concerned about eye strain from screens.",
    benefits: [
      "Supporting eye comfort during long screen hours",
      "Nourishing the body's cooling and moistening functions",
      "Providing a gentle energy source without caffeine",
    ],
    usage: [
      "Eat a small handful (about 15 to 20 berries) as a snack.",
      "Add to oatmeal, yogurt, or trail mix.",
      "Steep in hot water with chrysanthemum flowers for a gentle tea.",
    ],
    habit: "Keep a small jar of goji berries at your desk. Eat 10 to 15 berries around 3 PM, when afternoon energy dips tend to hit. They provide a mild, steady energy without the crash that comes with sugar or caffeine.",
  },
  {
    num: 3,
    name: "Red Dates (Jujube)",
    aka: "Chinese Dates, Hong Zao (Chinese), Natsume (Japanese), Injeol (Korean)",
    desc: "Red dates are dried jujube fruits, not related to the Middle Eastern dates you find in most Western supermarkets. They are sweet, slightly chewy, and have been used in Eastern wellness for thousands of years to support calm sleep and steady energy.",
    suits: "Low Vitality and Stuck Energy body types (people who feel chronically tired, anxious, or have trouble falling asleep).",
    benefits: [
      "Supporting calm and restful sleep",
      "Providing a gentle, steady source of energy",
      "Settling an anxious or overactive mind",
    ],
    usage: [
      "Simmer 5 to 6 pitted red dates in water for 15 minutes. Drink the liquid as tea before bed.",
      "Add to rice porridge (congee) for a nourishing breakfast.",
      "Eat 2 to 3 dates as an afternoon snack.",
    ],
    habit: "Brew a small pot of red date tea in the evening. Let it steep while you wind down, and drink it 30 minutes before bed. Many people notice calmer, more settled sleep within the first week.",
  },
  {
    num: 4,
    name: "Black Sesame Seeds",
    aka: "Hei Zhi Ma (Chinese), Kuro Goma (Japanese), Gingili (Indian)",
    desc: "Black sesame seeds look like tiny dark pearls and have a rich, nutty, slightly smoky flavor. In Eastern wellness, their dark color connects them to the body's deepest energy reserves. They are associated with healthy hair, skin, and the body's foundational vitality.",
    suits: "Internal Heat and Blood Stasis body types (people concerned about hair thinning, dry skin, premature aging, or dark circles under the eyes).",
    benefits: [
      "Supporting hair strength and skin moisture",
      "Nourishing the body's deepest energy reserves",
      "Providing healthy fats and minerals",
    ],
    usage: [
      "Grind 2 tablespoons of black sesame seeds and mix with a small amount of honey. Eat one spoonful each morning.",
      "Sprinkle on rice, noodles, salads, or avocado toast.",
      "Use black sesame paste (similar to tahini but made from black sesame) as a spread on toast.",
    ],
    habit: "Buy a small bag of pre-roasted black sesame seeds. Keep it next to your salt shaker. Sprinkle on everything savory. This is one of the easiest ingredients to integrate into Western meals.",
  },
  {
    num: 5,
    name: "Mung Beans",
    aka: "Lu Dou (Chinese), Ryokuto (Japanese), Moong Dal (Hindi), Green Gram (English)",
    desc: "Mung beans are small, green legumes that cook quickly and have a mild, slightly sweet flavor. In Eastern wellness, they are considered one of the most cooling foods available. They are traditionally eaten during hot summer months to help the body manage internal heat.",
    suits: "Damp Heat body types (people who tend to feel hot and sticky, have oily skin, breakouts, or acid reflux). Also suitable for anyone during hot weather.",
    benefits: [
      "Supporting the body's natural cooling processes",
      "Helping the body process and eliminate excess fluids",
      "Soothing skin inflammation from the inside",
    ],
    usage: [
      "Simmer 1 cup of mung beans in 4 cups of water for 30 minutes until soft. Add a little rock sugar for a simple sweet soup.",
      "Sprout mung beans at home for fresh, crunchy bean sprouts (takes 2 to 3 days in a jar).",
      "Cook mung bean soup once a week during summer months.",
    ],
    habit: "During hot weather, replace one meal per week with a simple bowl of mung bean soup. It is light, cooling, and easy to digest. People who tend to break out in summer often notice their skin calms down within 2 to 3 weeks of eating mung beans regularly.",
  },
  {
    num: 6,
    name: "Walnuts",
    aka: "He Tao (Chinese), Kurumi (Japanese), Akhrot (Hindi), Nuez (Spanish)",
    desc: "Walnuts look like tiny brains, and in Eastern wellness, this visual resemblance is taken seriously. Walnuts are associated with brain function, memory, and the body's deepest warmth reserves. They are also one of the most accessible ingredients on this list.",
    suits: "Cold Sensitivity and Internal Heat body types concerned about memory, focus, or lower back discomfort. Also suitable for older adults.",
    benefits: [
      "Supporting memory and mental clarity",
      "Warming and strengthening the lower back and knees",
      "Providing omega-3 fatty acids",
    ],
    usage: [
      "Eat 5 to 8 walnuts per day as a snack. Chew thoroughly.",
      "Add chopped walnuts to oatmeal or yogurt.",
      "Simmer walnuts in porridge with red dates for a nourishing breakfast.",
    ],
    habit: "Keep a small container of walnuts where you work. Eat 5 pieces at 10 AM and 5 pieces at 3 PM. The steady supply of healthy fats supports focus and sustained energy without the spike-and-crash of sugary snacks.",
  },
  {
    num: 7,
    name: "Chinese Yam",
    aka: "Shan Yao (Chinese), Nagaimo (Japanese), Ma (Korean), Mexican Yam",
    desc: "Chinese yam is a long, cylindrical root with a pale interior. When raw, it feels slippery and slightly sticky when cut. When cooked, it becomes tender and mildly sweet. In Eastern wellness, it is one of the most recommended foods for people with sensitive digestion.",
    suits: "Heavy and Sluggish body types (people who bloat after meals, feel heavy and tired, or have irregular digestion). Also suitable for anyone recovering from illness.",
    benefits: [
      "Strengthening digestive function over time",
      "Supporting steady, consistent energy levels",
      "Reducing bloating and heaviness after meals",
    ],
    usage: [
      "Peel, slice, and stir-fry with a little salt and sesame oil for a simple side dish.",
      "Cut into chunks and add to soups or stews.",
      "Slice thinly and steam for 15 minutes. Drizzle with a little honey.",
    ],
    habit: "If you have a sensitive stomach that reacts to raw vegetables, try replacing raw salads with steamed Chinese yam twice a week. Its gentle, starchy nature gives your digestive system a break while still providing nutrients.",
  },
  {
    num: 8,
    name: "Chrysanthemum Flowers",
    aka: "Ju Hua (Chinese), Kikka (Japanese), Gul-e-Daudi (Hindi)",
    desc: "Dried chrysanthemum flowers are brewed into a light, floral tea that has been consumed in East Asia for centuries. The tea is golden-colored, delicate in flavor, and naturally caffeine-free. In Eastern wellness, chrysanthemum is associated with cooling internal heat, especially in the head and eyes.",
    suits: "Internal Heat and Stuck Energy body types (people who get headaches, eye strain, feel hot and irritable, or have trouble sleeping). Also ideal for office workers who stare at screens all day.",
    benefits: [
      "Soothing tired, dry, or strained eyes",
      "Cooling the head and reducing tension headaches",
      "Supporting calm focus without caffeine",
    ],
    usage: [
      "Steep 8 to 10 dried chrysanthemum flowers in hot water for 5 minutes. Drink as is or add a few goji berries.",
      "Drink in the afternoon instead of coffee or green tea.",
      "Can be enjoyed cold in summer with a touch of honey.",
    ],
    habit: "Replace your afternoon coffee with chrysanthemum tea for one week. Many people notice their afternoon energy feels more stable and their eyes feel less strained by the end of the workday. You can find dried chrysanthemum flowers at most Asian grocery stores or online.",
  },
  {
    num: 9,
    name: "Longan",
    aka: "Dragon's Eye, Gui Yuan (Chinese), Ryugan (Japanese), Lamyai (Thai)",
    desc: "Dried longan is a small, round, dark brown fruit that looks like a tiny pearl when shelled. It gets its English name, \"Dragon's Eye,\" from the fresh fruit, which has a dark seed visible through the translucent white flesh. Dried longan is sweet, warm in nature, and has been used in Eastern wellness to support calm energy and restful sleep.",
    suits: "Low Vitality body types (people who feel chronically tired, anxious, or have trouble sleeping due to an overactive mind).",
    benefits: [
      "Supporting calm, settled energy during the day",
      "Helping quiet an overactive mind at night",
      "Providing a gentle, non-stimulating source of sweetness",
    ],
    usage: [
      "Simmer 10 to 15 dried longan in water for 10 minutes. Drink the tea before bed.",
      "Add to rice porridge along with red dates for a nourishing breakfast.",
      "Eat 5 to 6 pieces as a sweet snack.",
    ],
    habit: "If you tend to snack on sweets in the evening, replace candy or chocolate with 8 to 10 dried longan pieces. They satisfy the sweet craving while supporting calm, restful sleep.",
  },
  {
    num: 10,
    name: "Lotus Seeds",
    aka: "Lian Zi (Chinese), Hasu no Mi (Japanese), Bikh (Hindi)",
    desc: "Lotus seeds are small, ivory-colored seeds harvested from the seed pod of the lotus flower. They have a mild, slightly sweet, and slightly nutty flavor. In Eastern wellness, they are associated with calm, steady energy and clear thinking. They are one of the key ingredients in traditional East Asian desserts and savory dishes alike.",
    suits: "Stuck Energy and Heavy and Sluggish body types (people who overthink, feel mentally scattered, or have trouble concentrating).",
    benefits: [
      "Supporting mental calm and clear focus",
      "Helping settle an overactive, racing mind",
      "Supporting steady, even-keeled energy",
    ],
    usage: [
      "Soak dried lotus seeds overnight, then simmer in water for 30 minutes until tender. Add rock sugar for a simple sweet soup.",
      "Add cooked lotus seeds to soups and stews.",
      "Find canned lotus seeds at Asian grocery stores for convenience.",
    ],
    habit: "If your mind races at night and prevents you from sleeping, try a small bowl of lotus seed soup as an evening snack. Its calming quality may help quiet mental chatter and support more settled sleep.",
  },
]

const S = {
  page: {
    width: "780px",
    padding: "50px 55px",
    background: "#FFFFFF",
    color: "#2A1F14",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: "15px",
    lineHeight: "1.65",
  } as React.CSSProperties,
  coverPage: {
    width: "780px",
    minHeight: "1040px",
    padding: "80px 60px",
    background: "linear-gradient(160deg, #1A1410 0%, #2A2218 100%)",
    color: "#E8DCC8",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
  } as React.CSSProperties,
  brand: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "26px",
    fontWeight: 700,
    color: "#C9A355",
    letterSpacing: "2px",
    marginBottom: "40px",
  } as React.CSSProperties,
  coverTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "42px",
    fontWeight: 700,
    color: "#F0E6D4",
    lineHeight: 1.25,
    marginBottom: "20px",
    maxWidth: "520px",
  } as React.CSSProperties,
  coverSub: {
    fontSize: "17px",
    color: "#B5A890",
    marginBottom: "50px",
    fontStyle: "italic",
  } as React.CSSProperties,
  goldLine: {
    width: "80px",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #C9A355, transparent)",
    margin: "0 auto 50px",
  } as React.CSSProperties,
  coverFoot: {
    fontSize: "13px",
    color: "#8A7D6B",
    marginTop: "60px",
  } as React.CSSProperties,
  foodNum: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "56px",
    fontWeight: 700,
    color: "#C9A355",
    lineHeight: 1,
    opacity: 0.85,
  } as React.CSSProperties,
  foodName: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "28px",
    fontWeight: 600,
    color: "#2A1F14",
    marginBottom: "4px",
  } as React.CSSProperties,
  aka: {
    fontSize: "12px",
    color: "#8A7D6B",
    fontStyle: "italic",
    marginBottom: "16px",
    paddingBottom: "14px",
    borderBottom: "1px solid #E8E0D4",
  } as React.CSSProperties,
  label: {
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    color: "#A88740",
    marginBottom: "4px",
    marginTop: "14px",
  } as React.CSSProperties,
  desc: {
    fontSize: "14.5px",
    color: "#3D3226",
    lineHeight: 1.7,
    marginBottom: "8px",
  } as React.CSSProperties,
  bullet: {
    fontSize: "14px",
    color: "#4A3F32",
    lineHeight: 1.65,
    marginBottom: "4px",
    paddingLeft: "16px",
    position: "relative" as const,
  } as React.CSSProperties,
  habitBox: {
    background: "#FAF6F0",
    borderLeft: "3px solid #C9A355",
    borderRadius: "0 6px 6px 0",
    padding: "14px 18px",
    marginTop: "14px",
    fontSize: "14px",
    color: "#3D3226",
    lineHeight: 1.65,
  } as React.CSSProperties,
  habitLabel: {
    fontWeight: 700,
    color: "#A88740",
    fontSize: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    display: "block",
    marginBottom: "4px",
  } as React.CSSProperties,
  endTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "26px",
    fontWeight: 600,
    color: "#2A1F14",
    marginBottom: "16px",
  } as React.CSSProperties,
  stepNum: {
    display: "inline-block",
    width: "28px",
    height: "28px",
    lineHeight: "28px",
    textAlign: "center" as const,
    borderRadius: "50%",
    background: "#C9A355",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: 700,
    marginRight: "12px",
  } as React.CSSProperties,
  disclaimerBox: {
    background: "#F5F0E8",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
    fontSize: "13px",
    color: "#6B5D4D",
    lineHeight: 1.6,
  } as React.CSSProperties,
  ctaBox: {
    textAlign: "center" as const,
    marginTop: "30px",
    padding: "30px",
    background: "linear-gradient(135deg, #1A1410, #2A2218)",
    borderRadius: "10px",
    color: "#E8DCC8",
  } as React.CSSProperties,
  ctaTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#C9A355",
    marginBottom: "8px",
  } as React.CSSProperties,
  ctaText: {
    fontSize: "14px",
    color: "#B5A890",
  } as React.CSSProperties,
  ctaLink: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#C9A355",
    marginTop: "10px",
    display: "block",
  } as React.CSSProperties,
  pageBreak: {
    pageBreakBefore: "always" as const,
    breakBefore: "page" as const,
  } as React.CSSProperties,
}

export const GuidePdfContent = forwardRef<HTMLDivElement>(function GuidePdfContent(_, ref) {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: "-9999px",
        top: 0,
        width: "780px",
        visibility: "visible",
      }}
    >
      <div style={S.coverPage}>
        <div style={S.brand}>EastType</div>
        <div style={S.goldLine} />
        <div style={S.coverTitle}>10 Foods Your Body Type Will Love</div>
        <div style={S.coverSub}>A Practical Eastern Wellness Guide</div>
        <div style={S.goldLine} />
        <div style={{ fontSize: "14px", color: "#8A7D6B", maxWidth: "440px", lineHeight: 1.7 }}>
          Eastern wellness identifies 9 body types. Each type has foods that suit it well.
          This guide covers 10 ingredients used in Eastern wellness traditions for centuries.
        </div>
        <div style={S.coverFoot}>myeasterntype.com</div>
      </div>

      {FOODS.map((food) => (
        <div key={food.num} style={{ ...S.page, ...S.pageBreak }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "0" }}>
            <span style={S.foodNum}>{food.num}</span>
            <div>
              <div style={S.foodName}>{food.name}</div>
            </div>
          </div>
          <div style={S.aka}>Also known as: {food.aka}</div>
          <p style={S.desc}>{food.desc}</p>
          <div style={S.label}>Who It Suits</div>
          <p style={S.desc}>{food.suits}</p>
          <div style={S.label}>What It May Help With</div>
          {food.benefits.map((b, i) => (
            <div key={i} style={S.bullet}>
              <span style={{ position: "absolute", left: 0, color: "#C9A355" }}>&bull;</span>
              {b}
            </div>
          ))}
          <div style={S.label}>How to Use</div>
          {food.usage.map((u, i) => (
            <div key={i} style={S.bullet}>
              <span style={{ position: "absolute", left: 0, color: "#C9A355" }}>&bull;</span>
              {u}
            </div>
          ))}
          <div style={S.habitBox}>
            <span style={S.habitLabel}>Simple Habit</span>
            {food.habit}
          </div>
        </div>
      ))}

      <div style={{ ...S.page, ...S.pageBreak }}>
        <div style={S.endTitle}>How to Start</div>
        <p style={{ ...S.desc, marginBottom: "16px" }}>
          You do not need to buy all 10 ingredients today. Here is a simple way to begin:
        </p>
        {[
          "Take the EastType quiz to learn your body type.",
          "Pick 2 ingredients from this guide that suit your type.",
          'Start with one habit from the "Simple Habit" section of each food.',
          "Give it 2 to 3 weeks. Notice how your body responds.",
          "Adjust from there. Eastern wellness is about consistent, small adjustments, not dramatic overhauls.",
        ].map((step, i) => (
          <div key={i} style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start" }}>
            <span style={S.stepNum}>{i + 1}</span>
            <span style={{ fontSize: "14.5px", color: "#3D3226", lineHeight: 1.65, flex: 1 }}>{step}</span>
          </div>
        ))}

        <div style={{ ...S.endTitle, marginTop: "30px" }}>Where to Find These Ingredients</div>
        {[
          "Asian grocery stores (look for H Mart, 99 Ranch, Mitsuwa, or local equivalents)",
          "Online (Amazon, iHerb, Asian food specialty sites)",
          "Health food stores (ginger, walnuts, and goji berries are widely available)",
          "Regular supermarkets (ginger, walnuts, and mung beans are usually in stock)",
        ].map((item, i) => (
          <div key={i} style={S.bullet}>
            <span style={{ position: "absolute", left: 0, color: "#C9A355" }}>&bull;</span>
            {item}
          </div>
        ))}
        <p style={{ ...S.desc, marginTop: "10px" }}>
          Most of these ingredients cost between $3 and $10 and last for weeks or months.
          Eastern wellness eating does not need to be expensive.
        </p>
      </div>

      <div style={{ ...S.page, ...S.pageBreak }}>
        <div style={S.endTitle}>A Final Note</div>
        <p style={S.desc}>
          This guide is for educational and wellness purposes only. It is not medical advice.
          If you have specific health concerns, food allergies, or are taking medication,
          consult a qualified healthcare provider before making dietary changes.
        </p>
        <p style={S.desc}>
          Individual responses to foods vary. The information in this guide reflects traditional
          Eastern wellness principles, which focus on patterns and tendencies rather than medical diagnoses.
        </p>
        <div style={S.disclaimerBox}>
          Listen to your body. Start small. Be consistent. That is the Eastern wellness way.
        </div>
        <div style={S.ctaBox}>
          <div style={S.ctaTitle}>Ready to Find Your Body Type?</div>
          <div style={S.ctaText}>
            Take the free 5-minute quiz and get personalized food suggestions
            tailored to your constitution.
          </div>
          <div style={S.ctaLink}>myeasterntype.com</div>
        </div>
      </div>
    </div>
  )
})
