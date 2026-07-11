export type JournalCategory = "seasonal" | "holiday" | "event" | "weather"

export interface JournalTable {
  headers: string[]
  rows: string[][]
}

export interface JournalListItem {
  bold?: string
  text: string
}

export interface JournalStep {
  title: string
  detail: string
}

export interface JournalBarChartItem {
  label: string
  value: number
  displayValue: string
}

export interface JournalSection {
  heading: string
  body?: string
  type?: "text" | "table" | "list" | "image" | "steps" | "cta" | "barchart"
  table?: JournalTable
  list?: JournalListItem[]
  steps?: JournalStep[]
  barchart?: { items: JournalBarChartItem[] }
  imageAlt?: string
  imageDescription?: string
  imagePath?: string
}

export interface JournalFaq {
  q: string
  a: string
}

export interface JournalRelatedLink {
  title: string
  slug: string
  type: "wellness" | "herbs" | "symptoms" | "patterns"
}

export interface JournalArticle {
  slug: string
  title: string
  description: string
  date: string
  category: JournalCategory
  tags: string[]
  excerpt: string
  heroImage?: string
  thumbnail?: string
  sections: JournalSection[]
  relatedLinks?: JournalRelatedLink[]
  faqs?: JournalFaq[]
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "heatwave-survival-by-body-type",
    title: "Heatwave Survival: How Your Body Type Decides How You Handle Extreme Heat",
    description: "When the next heatwave hits, why some people collapse while others barely notice. A TCM guide to the nine body types and their very different relationships with extreme heat.",
    date: "2026-07-11",
    category: "weather",
    tags: ["heatwave", "summer", "body-type", "extreme-heat"],
    excerpt: "A 40 degree day feels different depending on your constitution. Here is how each of the nine body types handles a heatwave, and what may help you stay balanced.",
    thumbnail: "/images/journal/heatwave-cover.jpg",
    sections: [
      {
        heading: "Why Heat Hits Different Bodies Differently",
        body: "When the temperature hits 40 degrees and the air feels like it is pressing down on your skin, everyone suffers. But not everyone suffers the same way. You probably know someone who seems unbothered by heat that makes you feel sick, or someone who starts sweating the moment the mercury climbs past 30. In Chinese medicine, this difference has a name: heat intolerance, and it is shaped by your body type, what TCM calls your constitution. A person running warm internally may feel summer heat as unbearable. Someone who runs cold might actually feel energized. Understanding your type may help you choose the right foods, habits, and precautions when the next heatwave arrives.",
      },
      {
        heading: "The Nine Body Types in a Heatwave",
        type: "image",
        imageAlt: "Heatwave body type risk matrix",
        imageDescription: "An infographic showing all nine body types arranged on a heat gradient from red (high risk) to blue (low risk). Each type has a small icon and a one-line description of how it reacts to extreme heat. Yin Deficient and Damp Heat sit at the red end. Yang Deficient and Balanced sit at the blue end.",
        imagePath: "/images/journal/heatwave-body-type-matrix.jpg",
      },
      {
        heading: "The Nine Body Types in a Heatwave",
        type: "table",
        table: {
          headers: ["Body Type", "Heat Tolerance", "How It Feels", "Heat Risk"],
          rows: [
            ["Yin Deficient", "Very Low", "Internal heat compounds with external heat; night sweats worsen", "★★★★★"],
            ["Damp Heat", "Low", "Heat plus humidity feels sticky, heavy, and suffocating", "★★★★★"],
            ["Qi Stagnant", "Moderate", "Heat worsens frustration, tension, and irritability", "★★★☆☆"],
            ["Phlegm Damp", "Moderate", "Feels sluggish and congested; sweating brings little relief", "★★★☆☆"],
            ["Blood Stasis", "Moderate", "Heat may worsen circulation discomfort and pain patterns", "★★★☆☆"],
            ["Sensitive", "Moderate", "Heat can trigger reactive skin or breathing responses", "★★★☆☆"],
            ["Qi Deficient", "Moderate to High", "Heat drains energy and breath but not unbearable", "★★☆☆☆"],
            ["Yang Deficient", "High", "May feel comfortable or even energized by the warmth", "★☆☆☆☆"],
            ["Balanced", "High", "Adapts well with basic hydration and shade", "★☆☆☆☆"],
          ],
        },
      },
      {
        heading: "Heat Tolerance by Body Type: The Full Spectrum",
        body: "Across the nine body types, nearly two-thirds face moderate to high risk during a heatwave. Only two types, Yang Deficient and Balanced, handle extreme heat with relative ease. In TCM theory, Yin Deficient types have the lowest heat tolerance of all nine constitutions, because their bodies already run warm before the heatwave even begins.",
        type: "barchart",
        barchart: {
          items: [
            { label: "Yin Deficient", value: 2, displayValue: "2/10" },
            { label: "Damp Heat", value: 3, displayValue: "3/10" },
            { label: "Qi Stagnant", value: 5, displayValue: "5/10" },
            { label: "Phlegm Damp", value: 5, displayValue: "5/10" },
            { label: "Blood Stasis", value: 5, displayValue: "5/10" },
            { label: "Sensitive", value: 5, displayValue: "5/10" },
            { label: "Qi Deficient", value: 6, displayValue: "6/10" },
            { label: "Yang Deficient", value: 9, displayValue: "9/10" },
            { label: "Balanced", value: 9, displayValue: "9/10" },
          ],
        },
      },
      {
        heading: "",
        type: "cta",
        body: "Want to know which of the nine body types you are? Take the free 5-minute quiz and find out how your constitution may shape your experience with heat, cold, and everything in between.",
      },
      {
        heading: "The High-Risk Types",
        body: "Two body types account for most heatwave suffering. If you belong to either, a heatwave is not just uncomfortable. It is a signal to slow down, adjust your diet, and pay attention to what your body is telling you.",
      },
      {
        heading: "Yin Deficient: The Human Furnace",
        body: "Yin Deficient types are the people most likely to suffer in a heatwave. If you wake up at 3 AM drenched in sweat, if your throat feels dry no matter how much water you drink, and if the mere thought of a hot summer night makes you dread bedtime, you may well belong to this group. Their bodies already run warm due to a lack of cooling, moistening energy, making them the most heat-intolerant of all nine constitutions. When external heat adds to this internal fire, the result can be intense. Night sweats worsen. Hot flashes become more frequent. Sleep, already fragile for many Yin Deficient types, may become impossible during hot nights. In severe cases, the combination of internal and external heat may produce signs associated with heat exhaustion, including dizziness, nausea, and profound fatigue. What may help: cooling, moistening foods like pear, watermelon, mung bean soup, and lily bulb. Avoid spicy food, alcohol, and late nights.",
      },
      {
        heading: "Damp Heat: The Summer Sticky Trap",
        body: "Damp Heat types face a double burden in summer: heat plus humidity. If your skin breaks out the moment the weather turns hot and sticky, if you feel irritable and heavy for no clear reason, and if your body feels like it is wrapped in a hot, damp cloth that will not come off, this may be your pattern. The heatwave does not just feel hot. It feels suffocating. Urine may become dark and concentrated. What may help: foods that clear heat and drain dampness, like winter melon, coix seed, and green tea. Avoid heavy, greasy, or sweet foods that add more dampness.",
      },
      {
        heading: "The Low-Risk Types",
        body: "Some people barely notice a heatwave. If you are one of them, you are probably Yang Deficient or Balanced. But low risk does not mean no risk. Even comfortable types need to stay hydrated and avoid overexertion, because the body loses fluids in heat regardless of how it feels.",
      },
      {
        heading: "Yang Deficient: The One Who Enjoys It",
        body: "Yang Deficient types are the rare people who actually enjoy a heatwave. Their bodies run cold due to a lack of warming, activating energy. External heat provides a temporary balance to this internal cold. They may feel more energetic, more comfortable, and less bothered by temperatures that make others miserable. However, they should still stay hydrated and avoid overexertion, because the body still loses fluids in heat regardless of how it feels.",
      },
      {
        heading: "Balanced: The Naturally Adaptable",
        body: "Balanced types adapt well to heat, assuming they take basic precautions. Their internal temperature regulation works as it should. They may feel uncomfortable in extreme heat but are unlikely to experience severe symptoms. Staying hydrated, eating light meals, and avoiding the midday sun are usually sufficient.",
      },
      {
        heading: "How to Cool Down: Universal Rules for Every Body Type",
        type: "image",
        imageAlt: "Five universal heatwave survival rules",
        imageDescription: "A checklist-style infographic with 5 key heatwave rules, each with a small icon: a warm water glass, a light bowl of soup, a sun with a clock showing 12pm, a fan for gentle ventilation, and a plate of watermelon and cucumber.",
        imagePath: "/images/journal/heatwave-cooling-rules.jpg",
      },
      {
        heading: "Universal Heatwave Rules",
        type: "list",
        list: [
          { bold: "Drink warm, not ice-cold, water.", text: "Chinese medicine considers ice-cold drinks harmful to the Spleen and Stomach, even in heat. Warm water hydrates without shocking the digestive system." },
          { bold: "Eat light, cooked foods.", text: "Heavy meals generate more internal heat during digestion. Soups, congee, and steamed vegetables are easier on the body when it is already working hard to stay cool." },
          { bold: "Avoid the midday sun.", text: "Between 11 AM and 3 PM, the sun is strongest. If you must go out, cover your head and neck." },
          { bold: "Sleep with ventilation, not freezing air conditioning.", text: "Direct cold air on a sweating body can trap heat inside, a concept TCM calls cold wrapping heat." },
          { bold: "Add cooling foods to your daily meals.", text: "Watermelon, cucumber, mung beans, and lotus root are traditional summer foods for a reason." },
        ],
      },
      {
        heading: "How to Make Mung Bean Soup: A Step-by-Step Cooling Recipe",
        body: "Mung bean soup is arguably the most iconic of all Chinese cooling drinks, a staple in households across East Asia during the summer months. When brewed correctly, the soup stays clear and greenish-yellow, which is when its cooling effect is strongest. Overcooking turns it brown and sweet, making it a dessert but reducing its heat-clearing quality. Here is how to make it the traditional way.",
        type: "steps",
        steps: [
          { title: "Pick the right beans", detail: "Choose mung beans that are plump, bright green, and uniform in size. Avoid beans that look dull, dark, or have tiny holes from insects. The color of the bean directly affects the color and cooling quality of the finished soup." },
          { title: "Soak before cooking", detail: "Rinse the beans thoroughly under running water, then soak them in cold water for 2 to 3 hours. If you are short on time, hot water for 30 minutes works too. Soaking helps the beans cook evenly and release their cooling properties more fully." },
          { title: "Use the right ratio and pot", detail: "One part mung beans to ten parts water is the traditional ratio. For a single serving, that is roughly 50 grams of beans to 500 milliliters of water. Use a clay pot or stainless steel pot. Avoid iron, because iron reacts with the beans and turns the soup dark." },
          { title: "Bring to a boil on high heat", detail: "Put the soaked beans and fresh water in the pot and bring to a rolling boil over high heat. This initial burst of heat helps crack the bean skins open so the cooling essence can release into the water." },
          { title: "Simmer on low heat for 15 to 20 minutes", detail: "Once boiling, reduce to a low simmer and cook for 15 to 20 minutes. The goal is for the beans to just begin splitting open, not to cook them into a paste. If you overcook, the soup turns reddish-brown and loses much of its cooling effect. This is the most common mistake people make." },
          { title: "Stop while the soup is still green", detail: "The ideal mung bean soup is clear and yellowish-green. This is the stage where the cooling properties are strongest. If you prefer a sweeter, softer dessert-style soup, you can cook longer, but for heatwave cooling purposes, stop here and strain the liquid." },
          { title: "Add rock sugar to taste", detail: "Add a small amount of rock sugar and stir until dissolved. Rock sugar is preferred in TCM because it gently moistens the lungs and supports fluid production. Avoid brown sugar, which is warming in nature and may counteract the cooling effect of the mung beans. Let the soup cool to room temperature or chill briefly in the fridge before drinking." },
          { title: "Drink the right amount", detail: "One to two small bowls per day is plenty during a heatwave. Do not drink it ice-cold. Room temperature or slightly warm is best, consistent with the TCM principle of avoiding ice-cold drinks even in summer." },
        ],
      },
      {
        heading: "A Few Things to Keep in Mind About Mung Bean Soup",
        type: "list",
        list: [
          { bold: "Do not drink on an empty stomach.", text: "Mung beans are cooling by nature. On an empty stomach, they may cause discomfort, especially if you have a weak Spleen or tend toward loose stools." },
          { bold: "If you run cold, add ginger.", text: "If you have a Yang Deficient constitution, mung bean soup may be too cooling for you. A thin slice of fresh ginger added during cooking can help balance the coldness." },
          { bold: "The leftover beans are edible.", text: "Do not throw away the cooked beans. They can be eaten as a snack, mashed into a paste, or added to rice porridge the next morning." },
          { bold: "Drink it the same day.", text: "Mung bean soup loses its cooling quality after sitting overnight. Make a fresh batch each day during a heatwave rather than storing large quantities." },
        ],
      },
      {
        heading: "Heatwave Mistakes to Avoid",
        type: "image",
        imageAlt: "Six common heatwave mistakes",
        imageDescription: "An infographic showing 6 common heatwave mistakes with crossed-out icons: a glass of ice water, a heavy greasy meal, a person running in the sun, an AC set to 16 degrees, an empty plate, and a cold beer can.",
        imagePath: "/images/journal/heatwave-mistakes.jpg",
      },
      {
        heading: "Heatwave Mistakes to Avoid",
        type: "list",
        list: [
          { bold: "Drinking ice water after sun exposure.", text: "The cold shocks the Spleen and may trap heat inside the body." },
          { bold: "Eating heavy, greasy meals.", text: "These generate internal heat and slow digestion when the body is already stressed." },
          { bold: "Exercising intensely in the heat.", text: "This depletes Qi and fluids at the same time, leaving the body doubly drained." },
          { bold: "Using air conditioning at very low temperatures.", text: "The extreme temperature gap between outside and inside stresses the body's regulation." },
          { bold: "Skipping meals.", text: "Heat suppresses appetite, but an empty body has fewer resources to regulate temperature." },
          { bold: "Drinking too much cold beer.", text: "Alcohol is heating in TCM, and the cold temperature does not cancel that effect." },
          { bold: "Standing in front of blasting AC while sweating heavily.", text: "The sudden cold on an open, sweating body can trap heat inside and trigger summer colds. TCM calls this cold wrapping heat, and it is one of the most common summer health traps." },
        ],
      },
    ],
    relatedLinks: [
      { title: "Cooling Foods in Chinese Medicine", slug: "cooling-foods-chinese-medicine", type: "wellness" },
      { title: "Kidney Yin Deficiency", slug: "kidney-yin-deficiency", type: "wellness" },
      { title: "Why Am I So Sensitive to Heat", slug: "why-am-i-so-sensitive-to-heat", type: "symptoms" },
      { title: "Why Do I Sweat So Much", slug: "why-do-i-sweat-so-much", type: "symptoms" },
    ],
    faqs: [
      {
        q: "Which body type is most at risk during a heatwave?",
        a: "Yin Deficient and Damp Heat types tend to struggle most, as their internal patterns already involve excess warmth. If you are not sure which type you are, a body type quiz may help you find out.",
      },
      {
        q: "Why do I feel sick in the heat when others seem fine?",
        a: "Your body type may run warmer than average, making external heat compound with internal heat. This is common in Yin Deficient and Damp Heat constitutions.",
      },
      {
        q: "Should I drink ice water to cool down?",
        a: "Chinese medicine generally advises against ice-cold drinks, even in heat. Warm or room-temperature water hydrates without shocking the digestive system.",
      },
      {
        q: "What foods help during a heatwave?",
        a: "Cooling, moistening foods like watermelon, cucumber, mung bean soup, pear, and lotus root are traditional choices for summer heat.",
      },
      {
        q: "Can air conditioning make heat intolerance worse?",
        a: "Direct cold air on a sweating body may trap heat inside, according to TCM. Gradual cooling with ventilation is often preferred over blasting cold air.",
      },
      {
        q: "Why does heat make me irritable?",
        a: "Heat may worsen Liver Qi Stagnation, a pattern associated with frustration and emotional tension. This is one reason why tempers flare during heatwaves.",
      },
      {
        q: "Is it normal to lose my appetite in a heatwave?",
        a: "Yes. Heat redirects the body's energy toward cooling, leaving less for digestion. Eating small, light, cooked meals may help.",
      },
    ],
  },
  {
    slug: "back-to-school-tcm-tips",
    title: "Back to School: TCM Tips for the New Academic Season",
    description: "How Chinese medicine views the transition back to school, and what foods and habits may support focus, energy, and stress balance during the academic year.",
    date: "2026-09-01",
    category: "holiday",
    tags: ["back-to-school", "focus", "students"],
    excerpt: "The return to classrooms demands focus and energy. Here is how TCM may help smooth the transition.",
    sections: [
      {
        heading: "The Transition Back to Routine",
        body: "After weeks of unstructured summer days, returning to a school schedule can be a shock to the system. Chinese medicine views this transition as a shift from the expansive, outward energy of summer to the more concentrated, inward focus of autumn. Supporting this shift with the right foods and sleep habits may help students adjust more smoothly.",
      },
    ],
    relatedLinks: [
      { title: "Chinese Medicine Foods for Energy", slug: "chinese-medicine-foods-for-energy", type: "wellness" },
    ],
    faqs: [
      {
        q: "What foods may help students focus?",
        a: "Foods that gently nourish Qi and support the Spleen, such as sweet potato, rice porridge, and walnuts, may help sustain concentration through the school day.",
      },
    ],
  },
]
