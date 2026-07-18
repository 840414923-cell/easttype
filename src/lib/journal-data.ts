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
    slug: "summer-travel-by-body-type",
    title: "Summer Travel by Body Type: Why the Same Trip Exhausts Some People and Energizes Others",
    description: "Why a holiday invigorates one person and flattens another. A TCM guide to how each of the nine body types handles summer travel, jet lag, and unfamiliar food.",
    date: "2026-07-20",
    category: "holiday",
    tags: ["summer", "travel", "body-type", "jetlag", "vacation"],
    excerpt: "A 10-day holiday can leave you refreshed or completely drained, depending on your constitution. Here is how each of the nine body types responds to summer travel, and what to do about it.",
    thumbnail: "/images/journal/summer-travel-cover.jpg",
    sections: [
      {
        heading: "Two Travelers on the Same Flight",
        body: "Picture two travelers sitting next to each other on a flight from London to Bangkok. Same departure time, same recycled cabin air, same uninspiring meal. One steps off the plane feeling refreshed, ready to drop the bags at the hotel and head straight for the river. The other arrives with a scratchy throat, a faint headache, and a vague sense that something is already off. They will spend the next three days catching up.\n\nWe tend to explain this difference with phrases like good sleeper or bad traveler, but Chinese medicine frames it differently. The body that takes the trip matters more than the trip itself. Each of the nine body types, what TCM calls constitutions, has its own chemistry with change. New time zones, new food, new climate, new daily rhythm. Some constitutions thrive on that stimulus. Others are quietly drained by it.\n\nThis guide is not a list of universal tips. It is a way of reading your own body's travel pattern, so the parts of the trip that will cost you the most energy are not a surprise.",
      },
      {
        heading: "Same Flight, Two Different Bodies",
        type: "image",
        imageAlt: "Side-by-side infographic comparing two travelers on the same flight",
        imageDescription: "A detailed educational infographic showing two fully clothed traveler figures seated side by side in airplane seats. Left figure in cool blue-grey tones labeled YIN DEFICIENT with callouts for dry throat, paper-dry skin, racing mind, restless sleep, lower back fatigue. Right figure in warm gold-cream tones labeled BALANCED with callouts for comfortable temperature and settled mind. Below each figure: three data cards showing Sleep, Hydration, and Energy ratings.",
        imagePath: "/images/journal/summer-travel-two-travelers.jpg",
      },
      {
        heading: "What Travel Actually Does to a Body",
        body: "Before talking about constitutions, it helps to name the five things travel does to any body, regardless of type. Most travel discomfort comes from some combination of these, and most can be prepared for.",
        type: "list",
        list: [
          { bold: "Time zone disruption.", text: "The internal clock, tied to sunlight and meal times, takes several days to fully shift. Eastward flights are usually harder than westward, because shortening the day is harder on the body than lengthening it." },
          { bold: "Cabin dryness.", text: "Airplane humidity sits around 10 to 20 percent, drier than most deserts. Skin, eyes, throat, and lung tissue all lose moisture quietly across a long flight." },
          { bold: "Prolonged sitting.", text: "Hours of immobility stagnate Qi and Blood. The heavy, stiff feeling on arrival is not just fatigue. It is stagnation that has not yet been moved." },
          { bold: "Diet disruption.", text: "New food, irregular meal times, restaurant portions, and unfamiliar ingredients all hit the Spleen at once. Most travelers feel the digestive impact on day two, not day one." },
          { bold: "Climate contrast.", text: "Stepping from a heated airport into tropical heat, or from a warm street into an air-conditioned hotel room, forces the body to constantly recalibrate. Each transition has a small cost." },
        ],
      },
      {
        heading: "Jet Lag: A 36-Hour Timeline",
        body: "Most jet lag advice is a list of vague principles. A timeline is more useful. Below is a sequence for a long eastward flight, the kind most people struggle with. For westward flights, the same steps apply, but with sleep shifted later instead of earlier.",
        type: "steps",
        steps: [
          { title: "The Night Before (Hour -12)", detail: "Start hydrated, well before the airport. Drink more water than usual through the day, and add a pinch of sea salt or a teaspoon of honey to one glass to help the body hold onto it. Skip alcohol the night before a flight. It is heating and damp-generating in TCM, and it disrupts the deep sleep you will need." },
          { title: "At Takeoff (Hour 0)", detail: "Set your watch and phone to the destination time zone the moment you sit down. The mental shift starts on the plane. Decide now whether you should sleep on this flight, based on what time it is where you are going, not where you left." },
          { title: "Mid-Flight (Hour +4)", detail: "Move every two hours, even just to stand and stretch in the aisle. Walk to the back of the plane and back. Drink warm water or herbal tea, never coffee, never alcohol. If it is night at your destination, put on an eye mask and try to sleep. If it is daytime there, stay awake and read." },
          { title: "Wheels Down (Hour +10)", detail: "Once landed, switch fully to local time. Stop calculating what time it is back home. That mental habit extends jet lag by days. Move through customs and baggage with the posture of someone at the destination, not the posture your tired body wants." },
          { title: "First Evening (Hour +16)", detail: "Eat a small, warm, simple meal. Congee, clear soup, or rice with steamed vegetables. Skip the welcome dinner at a famous local restaurant. That pleasure is better saved for day two or three, when your digestion has reset. Take a warm foot soak for ten to fifteen minutes before bed to draw energy down from the head and settle the mind." },
          { title: "Day Two Morning (Hour +24)", detail: "Get sunlight on your face as early as you can. Fifteen to thirty minutes of outdoor light, ideally while walking, resets the internal clock faster than any supplement. Eat a warm breakfast, even if you are not very hungry, to lock in the local rhythm." },
          { title: "Day Two Evening (Hour +36)", detail: "By the second evening, most of the heavy lifting is done. Resist the temptation to celebrate with a heavy meal and drinks. One more early night secures the shift, and from day three onward the new rhythm usually holds." },
        ],
      },
      {
        heading: "Jet Lag Recovery Timeline",
        type: "image",
        imageAlt: "36-hour jet lag recovery timeline infographic",
        imageDescription: "A detailed educational infographic showing a horizontal timeline with seven station cards. Each card has a time label header (Night Before, Takeoff, Mid-Flight, Wheels Down, First Evening, Day 2 Morning, Day 2 Evening), a circular illustrated icon, and a short English instruction. Headers shift from cool blue on the left to warm gold on the right, showing recovery progression.",
        imagePath: "/images/journal/summer-travel-jetlag-timeline.jpg",
      },
      {
        heading: "",
        type: "cta",
        body: "If you are not sure which of the nine body types you are, the free 5-minute quiz may help. The result comes with travel-related pointers for your specific constitution, so the parts of the next trip that will cost you the most are not a surprise.",
      },
      {
        heading: "When the Battery Runs Low: Qi Deficient Travelers",
        body: "There is a particular kind of traveler who falls asleep on the airport bench before the gate is even announced. They start the trip excited, push through the first day with effort, and wake up the next morning feeling as if a week has already passed.\n\nIf that sounds familiar, you likely belong to the Qi Deficient constitution. The internal battery is smaller than average, and every hour of travel draws from it. The cost shows up as heaviness after meals, sensitivity to motion, weak appetite in unfamiliar time zones, and a stubborn tendency to catch whatever cold is circulating in the cabin.\n\nA Qi Deficient traveler is not someone who should avoid long trips. They are someone who should plan as if each travel day costs the energy of two ordinary days. That means sleeping well for several nights before departure, rather than finishing a packed work week and jumping straight on a plane. It means scheduling nothing important on day two. It means carrying ginger tea bags for the nausea that surfaces on long drives and winding mountain roads, and jujube dates for the mid-afternoon energy dip.\n\nThe trap is the temptation to push through. Qi Deficient travelers often describe themselves as lazy, when the truth is their system genuinely runs out of fuel faster than others'. Treating that as information, rather than a personal failing, is the most useful shift they can make before packing.",
      },
      {
        heading: "Dry Air, Dry Body: The Yin Deficient Traveler",
        body: "If your skin feels paper-dry by the end of a long flight, if you wake at 3 AM with a racing mind even in a comfortable hotel bed, and if the back of your throat feels like sandpaper for days after you arrive somewhere warm, you may belong to the Yin Deficient constitution.\n\nAirplane cabins are the first problem. Cabin humidity sits around ten to twenty percent, drier than most deserts, and Yin Deficient travelers feel it before anyone else. Hotel air conditioning continues the work. By the second night, sleep, already fragile for this type, becomes something of a negotiation.\n\nDestination choice matters more for this constitution than for any other. A humid coastal town in midsummer will treat a Yin Deficient traveler gently. A dry inland city at high altitude will quietly deplete them. The same person who thrives on a beach holiday in Thailand can come back from a desert trip in Arizona feeling ten years older.\n\nA few small things reduce the cost. Sip water steadily rather than in occasional big gulps, and add a pinch of sea salt or honey to support absorption. Carry a small bottle of pear or loquat syrup for the throat. Avoid coffee and alcohol in flight, both are drying, and the cold temperature of an iced drink does not cancel that effect. A thin layer of coconut oil inside the nostrils and a light moisturizer on the face feel small but reduce the dried-out drag that builds across a long flight.",
      },
      {
        heading: "The Other Seven Types: A Quick Read",
        body: "Not every constitution needs its own section. The table below covers the seven types that tend to sit between the extremes. They travel with some cost but rarely fall apart completely. The right column is the single most useful thing to know.",
        type: "table",
        table: {
          headers: ["Body Type", "Travel Pattern", "Watch Out For"],
          rows: [
            ["Yang Deficient", "Often feels better on holiday, especially somewhere warm; external heat balances internal cold", "Air-conditioned restaurants and iced breakfasts that quietly undo the benefit of the warmth"],
            ["Phlegm Damp", "Heavy and puffy on long flights; groggy mornings are common", "Rich restaurant food day after day; plain warm meals drain the dampness faster"],
            ["Damp Heat", "Struggles in tropical humidity; skin breakouts and irritability flare within days", "Beach holidays in sticky heat. Dry mountains or deserts suit this type far better"],
            ["Blood Stasis", "Joint stiffness and poor circulation on long-haul flights; swollen ankles are typical", "Compression socks, aisle walks, and stretching matter more for this type than any other"],
            ["Qi Stagnant", "Reacts strongly to delays, crowding, and loss of control; mood drives the experience", "A rigid itinerary. Loose plans and daily walks bleed off the tension before it builds"],
            ["Sensitive", "Picks up on dust, pollen, and unfamiliar food additives quickly; reacts before others notice", "A cotton face mask, familiar tea bags from home, and peppermint oil for mild nausea"],
            ["Balanced", "Adapts well; usually the traveler who never complains and genuinely enjoys the trip", "Overconfidence. Even a strong constitution has limits across several late nights and irregular meals"],
          ],
        },
      },
      {
        heading: "How Fast Each Type Settles In",
        body: "One of the most useful numbers to know about your own constitution is how long it takes to feel normal after arrival. The chart below is a rough estimate based on common patterns. Age, fitness, hydration, and the direction of travel all shift these numbers, but the relative gap between types tends to hold.",
        type: "barchart",
        barchart: {
          items: [
            { label: "Balanced", value: 9, displayValue: "~1 day" },
            { label: "Yang Deficient", value: 8, displayValue: "~1 day" },
            { label: "Blood Stasis", value: 5, displayValue: "~2 days" },
            { label: "Qi Stagnant", value: 5, displayValue: "~2 days" },
            { label: "Phlegm Damp", value: 4, displayValue: "~3 days" },
            { label: "Sensitive", value: 4, displayValue: "~3 days" },
            { label: "Damp Heat", value: 4, displayValue: "~3 days" },
            { label: "Qi Deficient", value: 3, displayValue: "~3-4 days" },
            { label: "Yin Deficient", value: 3, displayValue: "~3-4 days" },
          ],
        },
      },
      {
        heading: "A Small Kit for Each Constitution",
        body: "These are short, type-specific lists. One or two small items per constitution, all easy to source and pack. None of them replace common sense, but each addresses the complaint most likely to surface for that type.",
        type: "list",
        list: [
          { bold: "Qi Deficient:", text: "Ginger tea bags for motion and fatigue, jujube dates for the mid-afternoon dip, and a sleep mask for naps on travel days." },
          { bold: "Yang Deficient:", text: "A thin abdominal wrap or scarf for air-conditioned restaurants, ginger tea, and a small packet of brown sugar for warm drinks." },
          { bold: "Yin Deficient:", text: "Pear or loquat throat syrup, a small jar of honey, and a light facial moisturizer. Skip airplane coffee entirely." },
          { bold: "Phlegm Damp:", text: "Dried tangerine peel (chen pi) for tea, a packet of coix seed powder, and loose comfortable clothing to reduce the heavy feeling." },
          { bold: "Damp Heat:", text: "Green tea bags, mung bean powder for a cooling drink, and a light non-greasy skin cream. Stick to breathable cotton clothing." },
          { bold: "Blood Stasis:", text: "Compression socks for the flight, a small bottle of rose or safflower oil for stiff joints, and a stretch band for short mobility breaks." },
          { bold: "Qi Stagnant:", text: "Rose tea bags, which move Liver Qi, a small notebook for processing tension, and walking shoes you actually like wearing." },
          { bold: "Sensitive:", text: "A silk or cotton face mask for dusty destinations, familiar herbal tea bags from home, and a small bottle of peppermint oil for nausea." },
          { bold: "Balanced:", text: "Ginger tea and a refillable warm water bottle. The basics carry this type a long way." },
        ],
      },
      {
        heading: "Three Holidays, Three Different Stress Patterns",
        type: "image",
        imageAlt: "Three summer holiday scenarios and how each body type responds differently",
        imageDescription: "A three-panel illustration. Panel 1: a tropical beach with a Yang Deficient traveler smiling in the sun and a Damp Heat traveler with red skin patches in the shade. Panel 2: a European city street with a Qi Stagnant traveler walking briskly and a Qi Deficient traveler sitting tired at a cafe table. Panel 3: an airplane cabin at night with a Balanced traveler sleeping peacefully and a Yin Deficient traveler awake with a dry throat. Each panel has a short caption underneath.",
        imagePath: "/images/journal/summer-travel-three-holidays.jpg",
      },
      {
        heading: "One Holiday, Three Different Readings",
        body: "The same summer holiday can mean very different things to different constitutions. The three scenarios below are not mistakes to avoid. They are patterns to recognize. Each one shows how the same situation lands differently depending on the body that meets it.",
      },
      {
        heading: "The Beach Holiday in the Tropics",
        body: "A Yang Deficient traveler arrives at a humid coastal town and feels better than they have in months. The external warmth meets their internal cold and the two balance out. They eat grilled fish and mango, sleep deeply, and return looking younger.\n\nA Damp Heat traveler arrives at the same beach and within 48 hours has a fresh cluster of skin bumps, a heavy feeling behind the eyes, and a creeping irritability they cannot explain. The same humidity that balances one constitution overloads another.\n\nA Yin Deficient traveler does well on the same trip if the air is humid, and struggles if it is dry. The coast of Thailand in July suits them. The coast of California in September does not.\n\nThe trip is not the variable. The body is.",
      },
      {
        heading: "The Long City Weekend",
        body: "A long weekend in Rome, Paris, or New York means hours of walking, late dinners, and irregular meals. A Qi Stagnant traveler thrives here, because the constant movement keeps Liver Qi from settling into frustration. A Balanced traveler handles the pace well, as long as sleep is protected.\n\nA Qi Deficient traveler starts strong and fades by day two. The walking is not the problem. The late dinners and skipped breakfasts are. By Saturday afternoon they are running on fumes, and the Sunday flight home feels like a rescue mission.\n\nA Phlegm Damp traveler feels heavy and puffy across the whole trip. Restaurant food, especially the rich sauces and cheese that define these cuisines, builds dampness faster than their system can clear it. Plain meals and morning walks are the difference between a good weekend and a sluggish one.",
      },
      {
        heading: "The Cross-Time-Zone Trip",
        body: "A long-haul flight to East Asia or the Americas is the ultimate constitution test. Yang Deficient and Balanced travelers usually land, sleep one early night, and are functional the next morning.\n\nQi Deficient travelers need three or four days to feel like themselves again. The fatigue compounds across time zones because they cannot sleep well at the wrong local time, and cannot stay awake at the right one.\n\nYin Deficient travelers struggle most with the dry cabin air and the disrupted sleep cycle. They are the type most likely to come back from a long-haul trip with a cold or a sore throat, because their defensive Qi was thinned across the flight.\n\nKnowing this in advance changes what you pack, what you book for day one, and how early you go to sleep on the first night. None of these are universal tips. They are specific to the constitution taking the trip.",
      },
      {
        heading: "A Note Before You Pack",
        body: "Travel is one of the most reliable tests of constitution. The body that takes the trip is the body that comes home. The same flight, the same meal, the same climate can restore one person and deplete another, and neither is doing it wrong.\n\nIf your last holiday left you flattened for a week, that is information. If your partner comes back glowing while you come back with a sore throat, that is information too. The next trip does not have to be smaller. It just has to be shaped around what your body actually needs. Warm meals where they matter, sleep where it counts, and a destination that suits the constitution taking you there.",
      },
    ],
    relatedLinks: [
      { title: "Cooling Foods in Chinese Medicine", slug: "cooling-foods-chinese-medicine", type: "wellness" },
      { title: "Why Am I Always Tired", slug: "why-am-i-always-tired", type: "symptoms" },
      { title: "Why Do I Feel Sick After Eating", slug: "why-do-i-feel-sick-after-eating", type: "symptoms" },
      { title: "TCM Diet: A Complete Guide", slug: "tcm-diet", type: "wellness" },
    ],
    faqs: [
      {
        q: "Can I figure out my body type from how I react to travel?",
        a: "Partially. Travel reactions are strong clues. Qi Deficient types consistently run out of energy, Yin Deficient types dry out, Damp Heat types flare in humidity. But a full assessment looks at more signals than travel alone. The free body type quiz is the most reliable starting point.",
      },
      {
        q: "Why do I always catch a cold after flying?",
        a: "Long flights combine dry cabin air, irregular meals, and disrupted sleep, all of which temporarily thin the body's defensive Qi. The people most affected are usually Yin Deficient, Qi Deficient, or Sensitive constitutions. A warm meal on arrival, gentle movement, and an early night typically prevent the cold from setting in.",
      },
      {
        q: "Is jet lag worse going east or west?",
        a: "Eastward flights are usually harder on the body, because shortening the day is more disruptive than lengthening it. Westward flights, where the day gets longer, tend to be easier to absorb. The 36-hour timeline in this guide assumes an eastward flight. For westward, the same steps apply but with sleep shifted later instead of earlier.",
      },
      {
        q: "What is the single most useful thing I can pack?",
        a: "For most people, ginger tea bags. Ginger addresses motion sickness, cold-induced nausea, mild digestive upset, and the chill that builds from airplane air conditioning. It is small, light, and addresses more travel complaints than anything else you can carry.",
      },
      {
        q: "Should I exercise on arrival day?",
        a: "Gentle movement, yes. A brisk 20 to 30 minute walk after landing moves stagnant Qi and Blood, reduces leg swelling, and clears the heavy fog of a long flight. Intense workouts in the first 24 hours often deepen the fatigue rather than relieving it.",
      },
    ],
  },

  {
    slug: "office-thermostat-war-by-body-type",
    title: "The Office Thermostat War: Why Your Colleague Freezes While You Sweat",
    description: "The average office is set to one temperature and run by nine different bodies. A TCM guide to why your colleague freezes while you sweat, and how to find a setting that actually works.",
    date: "2026-07-27",
    category: "weather",
    tags: ["office", "air-conditioning", "summer", "body-type", "workplace"],
    excerpt: "One thermostat, nine body types, endless complaints. Here is why your office is always the wrong temperature, and what each constitution can actually do about it.",
    thumbnail: "/images/journal/office-thermostat-cover.jpg",
    sections: [
      {
        heading: "The Average Office Is Set for Nobody",
        body: "The average modern office is set to somewhere between 22 and 24 degrees Celsius. This is supposed to be a neutral temperature. It is not. At that setting, one person at the same desk is sweating through their shirt, another is wrapping a scarf around their shoulders, and a third has quietly bought a portable heater for under their desk. The thermostat on the wall has not moved, yet three people are experiencing three completely different offices.\n\nThe standard explanation is personal preference. Chinese medicine frames it differently. The temperature you find comfortable is largely decided by your constitution, what TCM calls your body type. A Yang Deficient person genuinely runs colder than a Yin Deficient person, in the same way that some people are tall and some are short. No amount of arguing about the thermostat will change that.\n\nThis guide is not about winning the office temperature war. It is about understanding why the war exists in the first place, and what each body type can realistically do to make a shared workspace livable.",
      },
      {
        heading: "Why the Same Temperature Feels Completely Different",
        body: "In Chinese medicine, the body has its own internal temperature baseline, shaped by constitution. A Yin Deficient person runs warm at the core, because the cooling, moistening aspect of their system is lower than average. A Yang Deficient person runs cool, because their warming, activating aspect is lower than average. The same 22 degree room lands on these two systems in very different ways. To the Yin Deficient body it feels warm enough, sometimes too warm. To the Yang Deficient body it feels like a draft that never lets up.\n\nWestern physiology describes the same phenomenon in different language, through metabolic rate, circulation efficiency, and body composition. Both systems are pointing at the same truth: comfortable temperature is not a universal number. It is a personal range, and the range is wider than most office managers assume.\n\nThe practical implication is simple but easily forgotten. When a colleague complains about the temperature, they are probably not being difficult. Their body is sending them a real signal, the same way yours sends you one. The framework that explains why is the same one that runs through all of Chinese medicine. The related guides at the end of this article go deeper if you want the background.",
      },
      {
        heading: "Same Office, Two Different Bodies",
        type: "image",
        imageAlt: "Side-by-side infographic showing how Yang Deficient and Yin Deficient office workers experience the same 22C temperature differently",
        imageDescription: "A detailed educational infographic. Left half shows a fully clothed Yang Deficient office worker feeling cold at 22C with callout labels for cold hands, cold nose, stiff neck, reaches for sweater. Right half shows a fully clothed Yin Deficient worker feeling warm at the same 22C with callouts for warm face, dry throat, removes layer. A small thermometer icon on each side shows the same 22C reading with different color indicators.",
        imagePath: "/images/journal/office-thermostat-two-bodies.jpg",
      },
      {
        heading: "Nine Body Types, Nine Thermostat Preferences",
        body: "The table below maps each of the nine body types to the temperature range they tend to find comfortable, the reaction they typically have to a standard 22 degree air-conditioned office, and the signal that tells you the temperature is wrong for them. The ranges are broad, because individual variation still matters, but the pattern is consistent.",
        type: "table",
        table: {
          headers: ["Body Type", "Comfortable Range", "Reaction to Standard 22C Office", "Early Signal"],
          rows: [
            ["Yang Deficient", "25 to 28C", "Cold hands, cold face, shivering within an hour", "Reaches for a sweater or scarf"],
            ["Qi Deficient", "24 to 26C", "Drowsy, heavy limbs, winded by minor tasks", "Yawns repeatedly after lunch"],
            ["Yin Deficient", "20 to 22C", "Warm face, dry throat, restless by mid-afternoon", "Removes a layer, opens a collar"],
            ["Damp Heat", "20 to 23C", "Sticky skin, irritability, skin flare-ups", "Wipes forehead, sighs heavily"],
            ["Phlegm Damp", "23 to 25C", "Heavy head, groggy, nasal congestion", "Clears throat often, looks puffy"],
            ["Qi Stagnant", "22 to 24C (varies with mood)", "Tension in shoulders, short temper, sighing", "Snaps at small interruptions"],
            ["Blood Stasis", "23 to 25C", "Cold hands and feet despite a warm trunk", "Rubs hands together, stretches wrists"],
            ["Sensitive", "22 to 24C (with stable air flow)", "Sneezing, dry eyes, headaches from cold drafts", "Reaches for tissues, blinks often"],
            ["Balanced", "21 to 25C", "Comfortable across the full range", "Does not complain, rarely adjusts"],
          ],
        },
      },
      {
        heading: "Office Air-Con Survival Map",
        type: "image",
        imageAlt: "Diagram of an office floor plan showing air flow patterns and the best seats for each body type",
        imageDescription: "A detailed educational infographic showing a top-down office floor plan with the air conditioning vents marked. Different zones of the office are shaded to show how air flow, temperature, and draft intensity vary by location. Each zone is labeled with the body types that suit it best. A legend on the right lists the nine body types with their ideal seat positions.",
        imagePath: "/images/journal/office-thermostat-survival-map.jpg",
      },
      {
        heading: "",
        type: "cta",
        body: "If you want to know which of the nine body types you are before reading further, the free 5-minute quiz will tell you. The result comes with workplace-related notes for your specific constitution, so the parts of the office that will cost you the most energy are not a surprise.",
      },
      {
        heading: "Where You Sit Changes Everything",
        body: "Before talking about clothing, tea, or thermostat negotiation, the single most underrated lever in office comfort is the seat itself. In most air-conditioned offices, the temperature at any given point can vary by three to five degrees from the temperature on the thermostat. The thermostat measures one location. The people sitting under a vent are living in a different climate.\n\nThe coldest spots in a typical office are directly under or beside the air-conditioning vents, and within about two meters of the unit. Air at the vent is moving fast and is often below the setpoint temperature, because the sensor is somewhere else. A Yang Deficient or Qi Deficient person sitting in this zone will be miserable within the hour, no matter how many layers they add.\n\nThe warmest spots are usually along interior walls away from vents, near windows that get afternoon sun, and around clusters of people or equipment that generate heat. A Yin Deficient or Damp Heat person does better in the cooler zones, and may actively prefer the vent-adjacent seats that others avoid.\n\nIf you have any flexibility over your seat, choose based on your constitution first and your team proximity second. A desk move is often a more effective fix than any amount of clothing or complaint. A Qi Stagnant person, who tends to be sensitive to drafts and temperature swings, benefits most from a stable corner away from vents and doors. A Sensitive person, who reacts to dust and air dryness as much as to temperature, should sit as far from the vent as possible while still getting fresh air return.",
      },
      {
        heading: "The Layering Strategy: What to Keep at Your Desk",
        body: "Layering is the most reliable fix for a shared office, because it does not require anyone else's cooperation. The goal is not to dress for the office as it is, but to dress for the office as it might become. The list below suggests one or two items per body type that quietly solve the most common complaint.",
        type: "list",
        list: [
          { bold: "Yang Deficient:", text: "A thin wool cardigan in a neutral color, and a large soft scarf that can double as a shoulder wrap. Keep both at the desk permanently." },
          { bold: "Qi Deficient:", text: "A thin vest that warms the core without restricting movement, and woolen socks to swap in when feet go cold." },
          { bold: "Yin Deficient:", text: "A breathable cotton layer you can remove without disruption, and a small bottle of throat-moistening syrup or honey water." },
          { bold: "Damp Heat:", text: "Loose natural-fiber clothing only, and a small pack of oil-blotting sheets. Avoid synthetic layers, which trap heat." },
          { bold: "Phlegm Damp:", text: "Loose comfortable clothing that does not bind at the waist, and a thin layer you can add if the head feels heavy." },
          { bold: "Qi Stagnant:", text: "Comfortable clothing that does not constrict the ribcage or waist. Tight layers worsen the tendency toward frustration." },
          { bold: "Blood Stasis:", text: "Compression socks for under the desk, and fingerless gloves that keep the hands warm while leaving fingers free to type." },
          { bold: "Sensitive:", text: "A silk or cotton face mask for dusty days, eye drops, and a thin layer you can add or remove as the air shifts." },
          { bold: "Balanced:", text: "One light layer kept at the desk for unexpected changes. The basics are usually enough." },
        ],
      },
      {
        heading: "How to Negotiate the Thermostat Without Starting a War",
        body: "Most thermostat conversations fail because they are framed as a battle with a winner and a loser. Raise the temperature and one colleague boils. Lower it and another reaches for a blanket. The pattern repeats because the underlying problem, that one temperature cannot suit nine body types, is never named. The steps below are not about getting your way. They are about getting a workable compromise without souring the working relationship.",
        type: "steps",
        steps: [
          { title: "Lead with the body, not the complaint", detail: "Open with a specific observation about yourself rather than a demand about the thermostat. Saying \"I run cold and my hands go stiff around 3 PM\" lands very differently than \"It is freezing in here, can someone fix the AC.\" The first invites help, the second picks a fight." },
          { title: "Bring one specific, small request", detail: "Vague complaints produce vague responses. Bring a single actionable request. \"Could we try 24 degrees for a week and see how it feels\" is workable. \"The temperature is always wrong\" is not." },
          { title: "Propose a layering-first solution", detail: "Offer to add a layer yourself before asking others to change the setting. \"I will keep a sweater here, and if I am still cold by Thursday, could we nudge it up one degree\" is almost impossible to refuse and almost always effective." },
          { title: "Find your allies before raising it in a group", detail: "If you run cold, two other people in the office probably do too. Ask around privately first. A request from three people is a preference. A request from one person is a complaint. The same applies to running hot." },
          { title: "Address the air flow, not just the number", detail: "Often the problem is not the setpoint but the vent direction. Asking facilities to redirect a vent or install a deflector is usually easier than changing the temperature, because it does not require everyone to agree on a new number." },
          { title: "Escalate to equipment only if all else fails", detail: "Personal desk heaters, small USB fans, and heated mouse pads exist for a reason. They are the last resort, not the first, because they signal that the shared conversation has failed. Use them when nothing else works, not as a substitute for the conversation." },
        ],
      },
      {
        heading: "Office Tea by Body Type",
        body: "What you drink through the workday quietly shapes how the air-conditioning feels. Warm drinks support the Spleen and gently raise internal temperature. Cold drinks lower it. The right tea for your constitution can take the edge off a difficult office in a way that clothing alone cannot. The table below matches each body type to one recommended tea, one drink to limit, and the best time of day to drink it.",
        type: "table",
        table: {
          headers: ["Body Type", "Recommended", "Limit", "Best Time"],
          rows: [
            ["Yang Deficient", "Ginger tea with brown sugar", "Iced water, iced coffee", "Mid-morning, 10 to 11 AM"],
            ["Qi Deficient", "Jujube date tea, lightly sweetened", "Strong coffee, energy drinks", "Mid-morning, replaces second coffee"],
            ["Yin Deficient", "Chrysanthemum tea, lightly honeyed", "Black coffee, spicy teas", "Afternoon, 2 to 4 PM"],
            ["Damp Heat", "Green tea, unsweetened", "Sweet drinks, alcohol at lunch", "Morning, before 11 AM"],
            ["Phlegm Damp", "Aged tangerine peel tea (chen pi)", "Dairy drinks, sweet milk tea", "After meals"],
            ["Qi Stagnant", "Rose tea, or rose and chrysanthemum blend", "Caffeine-heavy drinks", "Mid-afternoon, 3 to 4 PM"],
            ["Blood Stasis", "Rose tea with a few goji berries", "Cold drinks, especially on arrival", "Morning and late afternoon"],
            ["Sensitive", "Warm water with a thin slice of ginger", "Strongly scented or caffeinated teas", "Throughout the day, small sips"],
            ["Balanced", "Any warm tea you enjoy", "Excessive iced drinks", "Any time"],
          ],
        },
      },
      {
        heading: "Three Office Personalities You Will Recognize",
        body: "By this point the pattern should be clear. There is no such thing as a correct office temperature, only a temperature that suits the loudest or most powerful person in the room. The three office personalities below are not exaggerations. If you have spent any time in a shared workspace, you have met all three.",
      },
      {
        heading: "Three Office Personalities, One Shared Office",
        type: "image",
        imageAlt: "Three office personality types shown side by side with their characteristic desk items",
        imageDescription: "A detailed educational infographic with three vertical panels. Panel 1 shows The Cardigan Type (Yang or Qi Deficient) wrapped in layers with steaming tea. Panel 2 shows The Fan Type (Yin Deficient or Damp Heat) with a USB desk fan and open window. Panel 3 shows The Unbothered Type (Balanced) calm with no extra items. Consistent illustration style across all three panels.",
        imagePath: "/images/journal/office-thermostat-three-personalities.jpg",
      },
      {
        heading: "The Colleague Who Always Has a Sweater",
        body: "This is the Yang Deficient or Qi Deficient office worker. They have a cardigan draped over their chair, a thin scarf in their bag, and a quiet dislike of the air-conditioning vent above their desk. They are often the first to arrive and the first to feel the cold that builds through the morning. By 3 PM they are wrapped in three layers and still rubbing their hands together.\n\nTheir mistake is usually not speaking up early enough. The cold accumulates, and by the time they mention it, they are already irritable and the conversation comes out wrong. The fix is to raise it on day one, ideally before the temperature becomes a personal grievance, and to keep a written layering strategy at the desk rather than improvising.",
      },
      {
        heading: "The One Who Keeps a Fan at Their Desk",
        body: "This is the Yin Deficient or Damp Heat worker. They have a small USB fan, a desk that is permanently clear of clutter so air can circulate, and a habit of opening windows that others have quietly closed. They feel the office as warm when everyone else feels it as neutral, and the gap widens through the afternoon.\n\nTheir mistake is assuming everyone shares their experience. The fan that cools them is the same fan that chills the person one desk over. The fix is to direct the fan carefully, to vent the warm air rather than blowing cold air onto a neighbor, and to accept that a personal fan is a better answer than a thermostat battle.",
      },
      {
        heading: "The Lucky Type Who Never Notices",
        body: "This is the Balanced office worker. They wear the same layer all day, drink whatever is closest, and genuinely do not understand what the rest of the team is arguing about. They are the closest thing the office has to a thermostat neutral, and for that reason they often end up in charge of the dial.\n\nTheir blind spot is assuming the rest of the office is like them. It is not. A Balanced person setting the temperature for the team will almost always set it to their own preference, which by definition is wrong for everyone whose constitution runs hotter or colder. The fix is to delegate the dial to the most temperature-sensitive person on the team, not the least.",
      },
      {
        heading: "There Is No Standard Temperature",
        body: "The office thermostat war is one of those problems that looks like a personality clash and is actually a physiology clash. Nine body types sharing one dial are bound to disagree, because the dial is calibrated for an average person who does not exist.\n\nThe way out is not to find the right number. It is to accept that the number will be wrong for someone, and to give that someone the tools, the clothing, the tea, the seat, and the language to make a shared space livable without making it a battleground.\n\nIf your office has a chronic temperature war, that is information. It tells you that the team is constitutionally diverse, which is healthy, and that the workspace has not yet caught up to that diversity, which is fixable. The next conversation about the thermostat does not have to be a fight. It can be the first time the underlying problem gets named out loud.",
      },
    ],
    relatedLinks: [
      { title: "Yin and Yang", slug: "yin-and-yang", type: "wellness" },
      { title: "Why Am I Always Cold", slug: "why-am-i-always-cold", type: "symptoms" },
      { title: "Why Am I So Sensitive to Heat", slug: "why-am-i-so-sensitive-to-heat", type: "symptoms" },
      { title: "Chinese Medicine Body Types", slug: "chinese-medicine-body-types", type: "wellness" },
    ],
    faqs: [
      {
        q: "Why is my office always cold even when the thermostat reads 22 degrees?",
        a: "The thermostat measures the temperature at one location, usually on a wall away from vents and people. The actual temperature at your desk can be three to five degrees lower, especially if you sit near an air-conditioning vent. Body type also plays a role. A Yang Deficient person will feel 22 degrees as cold, while a Yin Deficient person at the same desk will feel it as comfortable.",
      },
      {
        q: "What temperature should the office be set to?",
        a: "There is no single correct number. The commonly cited 22 to 24 degrees Celsius is a compromise that suits no constitution perfectly. A more practical approach is to set the office around 23 to 24 degrees, which is tolerable for most types, and to let individuals adjust through clothing, tea, and desk position rather than fighting over the dial.",
      },
      {
        q: "Which body type struggles most with air conditioning?",
        a: "Yang Deficient and Qi Deficient types feel air-conditioned offices most acutely, because their internal warming system is already running low. Yin Deficient and Damp Heat types tend to prefer cooler settings and rarely complain. A body type quiz can help you identify your own pattern.",
      },
      {
        q: "Is it bad to sit directly under an air-conditioning vent?",
        a: "For most body types, yes. The air at the vent is colder and faster-moving than the rest of the office. Yang Deficient, Qi Deficient, and Sensitive types should avoid vent-adjacent seats. Yin Deficient types often actively prefer them.",
      },
      {
        q: "Does drinking warm drinks actually help with office cold?",
        a: "Yes, modestly but noticeably. Warm drinks support the Spleen in Chinese medicine and gently raise core temperature. Ginger tea, jujube date tea, and warm water with a thin slice of ginger are traditional options for cold-type constitutions. Iced drinks have the opposite effect and tend to make cold-type office workers feel worse.",
      },
      {
        q: "How do I raise the office temperature without annoying my colleagues?",
        a: "Lead with a personal observation rather than a complaint, bring one specific request, offer to layer up yourself first, and find allies before raising it in a group. The full six-step approach is covered earlier in this guide.",
      },
    ],
  },

]