export type PromptCategory =
  | "symptom-hook"
  | "food-single"
  | "bodytype-deep"
  | "seasonal"
  | "recipe"
  | "daily-habit"
  | "fun-fact"

export interface PromptEntry {
  id: string
  category: PromptCategory
  titleZh: string
  prompt: string
  size: string
  sizeNote: string
  platforms: string[]
  caption: string
  hashtags: string
}

export const CATEGORY_META: Record<PromptCategory, { label: string; icon: string; desc: string }> = {
  "symptom-hook": { label: "症状 Hook 图", icon: "😩", desc: "症状 → 体质洞察，制造好奇心缺口" },
  "food-single": { label: "食材单品图", icon: "🫚", desc: "1种食材 + 适合体质 + 用法" },
  "bodytype-deep": { label: "体质深度图", icon: "🧬", desc: "1个体质完整拆解：症状+食物+习惯" },
  seasonal: { label: "季节养生图", icon: "🌸", desc: "春夏秋冬对应食材和调理" },
  recipe: { label: "做法食谱图", icon: "🍵", desc: "步骤式养生茶/粥/汤做法" },
  "daily-habit": { label: "日常习惯图", icon: "☀️", desc: "对比/替换/时间线式小贴士" },
  "fun-fact": { label: "冷知识问答图", icon: "💡", desc: "东方养生冷知识，互动率高" },
}

const STYLE =
  "Premium dark warm background (#1A1410 deep brown-black), gold accent (#C8102E), Chinese medicine aesthetic, elegant serif font for headlines, clean sans-serif for body text, gold foil decorative line elements, luxury wellness brand style, high contrast, minimalist layout with breathing space"

const PIN_SIZE = "1000×1500px (2:3)"
const IG_SIZE = "1080×1080px (1:1)"
const IG_STORY = "1080×1920px (9:16)"
const X_SIZE = "1600×900px (16:9)"

export const IMAGE_PROMPTS: PromptEntry[] = [
  // ═══ Symptom Hook 系列 ═══
  {
    id: "sh-01",
    category: "symptom-hook",
    titleZh: "总是累 → 气虚质",
    prompt: `${STYLE}. Pinterest infographic pin. Large bold headline at top: "ALWAYS TIRED?" in gold serif. Below: elegant downward arrow in gold. Below arrow: "Your body is using the wrong fuel." in white. Bottom section: "Low Vitality Type" with 3 bullet points: "Warm breakfast before 9 AM", "No raw/cold food", "Ginger water every morning". Small EastType logo and URL at bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，文字占 40%+",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Always tired? It's not laziness — it's your body type. Your engine just needs different fuel. 🫚\n\nDiscover yours → myeasterntype.com",
    hashtags: "#easternwellness #bodytype #alwaystired #chinesemedicine #wellness #qi #vitality #naturalhealth",
  },
  {
    id: "sh-02",
    category: "symptom-hook",
    titleZh: "手脚冰凉 → 阳虚质",
    prompt: `${STYLE}. Pinterest infographic pin. Large bold headline: "COLD HANDS & FEET?" in gold serif. Gold arrow pointing down. "Your inner furnace is broken." in white. Bottom: "Yang Deficient Type" with 3 tips: "Ginger + cinnamon every morning", "No ice water ever", "Warm cooked food only". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Cold hands and feet? Your inner furnace is running on empty. 🔥\n\nFind your body type → myeasterntype.com",
    hashtags: "#easternwellness #coldhands #yangdeficient #warmfood #ginger #wellness #naturalhealing",
  },
  {
    id: "sh-03",
    category: "symptom-hook",
    titleZh: "凌晨3点醒 → 气郁质",
    prompt: `${STYLE}. Pinterest infographic pin. Headline: "WAKING AT 3 AM?" in gold serif. Gold arrow. "Your Liver is screaming." in white. "Stuck Energy Type" with 3 tips: "10-min walk before bed", "Not melatonin — movement", "Chrysanthemum tea at 4 PM". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Waking at 3 AM isn't insomnia. In Chinese medicine, your Liver is talking. 🌙\n\nLearn more → myeasterntype.com",
    hashtags: "#easternwellness #insomnia #3am #liver #chinesemedicine #sleep #wellness",
  },
  {
    id: "sh-04",
    category: "symptom-hook",
    titleZh: "脑雾 → 痰湿质",
    prompt: `${STYLE}. Pinterest infographic pin. Headline: "BRAIN FOG?" in gold serif. Gold arrow. "Your body is a sponge that can't drain." in white. "Heavy & Sluggish Type" with 3 tips: "Warm water + lemon first thing", "Cut raw cold food", "Chinese yam 2x/week". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Brain fog isn't age or burnout. Your body is holding moisture like a sponge. 🧠\n\nDiscover your type → myeasterntype.com",
    hashtags: "#brainfog #easternwellness #dampness #wellness #mentalclarity #naturalhealth",
  },
  {
    id: "sh-05",
    category: "symptom-hook",
    titleZh: "老长痘 → 湿热质",
    prompt: `${STYLE}. Pinterest infographic pin. Headline: "BREAKING OUT?" in gold serif. Gold arrow. "Your skin is an emergency exit for internal heat." in white. "Damp Heat Type" with 3 tips: "Mung bean soup weekly", "No spicy/fried food", "Chrysanthemum tea daily". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Your breakouts aren't a skin problem. They're an internal heat problem. 🌿\n\nFind your body type → myeasterntype.com",
    hashtags: "#acne #breakouts #easternwellness #dampheat #skincare #naturalhealing",
  },
  {
    id: "sh-06",
    category: "symptom-hook",
    titleZh: "莫名焦虑 → 气郁质",
    prompt: `${STYLE}. Pinterest infographic pin. Headline: "ANXIOUS FOR NO REASON?" in gold serif. Gold arrow. "Your chest is holding stuck energy." in white. "Stuck Energy Type" with 3 tips: "4 deep breaths push energy through", "Walk 20 min daily", "Lotus seed tea before bed". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Anxiety isn't always in your head. Sometimes it's stuck energy in your chest. 💭\n\nFree quiz → myeasterntype.com",
    hashtags: "#anxiety #easternwellness #stuckenergy #mentalhealth #wellness #breathe",
  },
  {
    id: "sh-07",
    category: "symptom-hook",
    titleZh: "瘦不下来 → 痰湿质",
    prompt: `${STYLE}. Pinterest infographic pin. Headline: "CAN'T LOSE WEIGHT?" in gold serif. Gold arrow. "It's not the calories. It's the moisture." in white. "Heavy & Sluggish Type" with 3 tips: "Stop raw cold food", "Warm cooked meals only", "Adzuki bean soup drains dampness". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Can't lose weight? It might not be calories. Some bodies hold moisture that makes everything heavier. ⚖️\n\nDiscover your type → myeasterntype.com",
    hashtags: "#weightloss #easternwellness #dampness #metabolism #wellness #naturalhealth",
  },
  {
    id: "sh-08",
    category: "symptom-hook",
    titleZh: "盗汗 → 阴虚质",
    prompt: `${STYLE}. Pinterest infographic pin. Headline: "NIGHT SWEATS?" in gold serif. Gold arrow. "Your body's AC is broken." in white. "Internal Heat Type" with 3 tips: "Mung bean soup in summer", "No spicy food after 5 PM", "Goji berries + chrysanthemum tea". EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Night sweats? Your cooling system is undercharged. The body is desperately releasing heat it can't regulate. 💦\n\nFree quiz → myeasterntype.com",
    hashtags: "#nightsweats #easternwellness #yindeficient #cooling #wellness #sleep",
  },

  // ═══ Food Single 系列 ═══
  {
    id: "fs-01",
    category: "food-single",
    titleZh: "生姜 · 温暖体质",
    prompt: `${STYLE}. Pinterest food card. Beautiful illustration of fresh ginger root at center, warm golden glow around it. Title: "GINGER" in large gold serif above. Subtitle: "Nature's Heater" in smaller white text. Left column: "Best for:" then "Cold Sensitivity", "Low Vitality". Right column: "Avoid if:" then "Internal Heat", "Damp Heat". Bottom: "3-4 thin slices in morning tea" in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，食材插画为主视觉",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Ginger isn't just a spice. It's nature's heater. 🫚\n\nBest for: Cold Sensitivity & Low Vitality types\nSimple habit: Replace your first cold water with warm ginger water\n\nFree 10 foods guide → myeasterntype.com",
    hashtags: "#ginger #easternwellness #warmfood #naturalhealing #bodytype #wellness #foodasmedicine",
  },
  {
    id: "fs-02",
    category: "food-single",
    titleZh: "枸杞 · 滋养眼睛",
    prompt: `${STYLE}. Pinterest food card. Beautiful illustration of red goji berries in a small bowl, soft lighting. Title: "GOJI BERRIES" in large gold serif. Subtitle: "Eye Drops You Can Eat" in white. Left: "Best for:" "Internal Heat", "Screen fatigue". Right: "Avoid if:" "Damp Heat". Bottom: "10-15 berries at 3 PM = steady energy, no crash". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Goji berries: eye drops you can eat. 🔴\n\nBest for: Internal Heat type & screen fatigue\nSimple habit: Keep a jar at your desk, eat 10-15 at 3 PM\n\nFree guide → myeasterntype.com",
    hashtags: "#gojiberries #easternwellness #eyestrain #superfood #bodytype #wellness",
  },
  {
    id: "fs-03",
    category: "food-single",
    titleZh: "红枣 · 安神助眠",
    prompt: `${STYLE}. Pinterest food card. Beautiful illustration of dried red dates (jujube), warm rustic feel. Title: "RED DATES" in large gold serif. Subtitle: "The Calm Sleep Snack" in white. Left: "Best for:" "Low Vitality", "Stuck Energy". Right: "Avoid if:" "Damp Heat". Bottom: "5-6 pitted dates simmered 15 min → drink before bed". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Red dates: the calm sleep snack your grandmother swore by. 🫘\n\nBest for: Low Vitality & Stuck Energy types\nSimple habit: Brew red date tea, drink 30 min before bed\n\nFree guide → myeasterntype.com",
    hashtags: "#reddates #jujube #easternwellness #sleep #calm #bodytype #wellness",
  },
  {
    id: "fs-04",
    category: "food-single",
    titleZh: "绿豆 · 降火清痘",
    prompt: `${STYLE}. Pinterest food card. Beautiful illustration of green mung beans in a ceramic bowl, cool green-gold tones. Title: "MUNG BEANS" in large gold serif. Subtitle: "The Skin Clearer Nobody Told You About" in white. Left: "Best for:" "Damp Heat", "Summer heat". Right: "Avoid if:" "Cold Sensitivity". Bottom: "1 cup beans + 4 cups water, simmer 30 min → sweet soup". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Mung beans: the skin clearer nobody told you about. 🫘\n\nBest for: Damp Heat type & summer heat\nSimple habit: Replace one meal/week with mung bean soup in summer\n\nFree guide → myeasterntype.com",
    hashtags: "#mungbeans #easternwellness #skincare #clearskin #bodytype #wellness",
  },
  {
    id: "fs-05",
    category: "food-single",
    titleZh: "菊花 · 清头火明目",
    prompt: `${STYLE}. Pinterest food card. Beautiful illustration of dried chrysanthemum flowers in a clear tea cup, golden liquid. Title: "CHRYANTHEMUM" in large gold serif. Subtitle: "The Headache Cure in a Teacup" in white. Left: "Best for:" "Internal Heat", "Stuck Energy". Right: "Avoid if:" "Cold Sensitivity". Bottom: "8-10 flowers steeped 5 min → replace afternoon coffee". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Chrysanthemum tea: the headache cure in a teacup. 🌼\n\nBest for: Internal Heat & Stuck Energy types\nSimple habit: Replace afternoon coffee with chrysanthemum tea for 1 week\n\nFree guide → myeasterntype.com",
    hashtags: "#chrysanthemum #easternwellness #headache #tea #bodytype #wellness",
  },
  {
    id: "fs-06",
    category: "food-single",
    titleZh: "黑芝麻 · 养发润肤",
    prompt: `${STYLE}. Pinterest food card. Beautiful illustration of black sesame seeds scattered on a dark surface, mysterious elegant feel. Title: "BLACK SESAME" in large gold serif. Subtitle: "Hair Strength in a Seed" in white. Left: "Best for:" "Internal Heat", "Blood Stasis". Right: "Avoid if:" "Damp Heat". Bottom: "Grind 2 tbsp + honey → 1 spoon each morning". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Black sesame: hair strength and skin moisture in a tiny seed. ✨\n\nBest for: Internal Heat & Blood Stasis types\nSimple habit: Sprinkle on everything savory, like salt\n\nFree guide → myeasterntype.com",
    hashtags: "#blacksesame #easternwellness #hairhealth #skincare #bodytype #wellness",
  },

  // ═══ Body Type Deep 系列 ═══
  {
    id: "bt-01",
    category: "bodytype-deep",
    titleZh: "气虚质 · 完整拆解",
    prompt: `${STYLE}. Pinterest long infographic. Title at top: "LOW VITALITY TYPE" in large gold serif. Subtitle: "The Engine That Won't Start". Section 1 "Key Signs": always tired, soft voice, sweat easily, crave sweets, weak digestion. Section 2 "Best Foods": ginger, red dates, sweet potato, walnuts, longan. Section 3 "Daily Habits": warm breakfast before 9 AM, no cold/raw food, gentle exercise only. Section 4 "Avoid": ice water, intense workouts, skipping meals. EastType logo and URL at bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长信息图，信息密度高",
    platforms: ["Pinterest", "Facebook"],
    caption: "Low Vitality Type — the engine that won't start. 🔋\n\nKey signs: always tired, soft voice, sweat easily, crave sweets\nBest foods: ginger, red dates, sweet potato, walnuts\n\nDiscover your type → myeasterntype.com",
    hashtags: "#lowvitality #qideficient #easternwellness #bodytype #wellness #foodasmedicine",
  },
  {
    id: "bt-02",
    category: "bodytype-deep",
    titleZh: "阳虚质 · 完整拆解",
    prompt: `${STYLE}. Pinterest long infographic. Title: "COLD SENSITIVITY TYPE" in gold serif. Subtitle: "The Inner Furnace Is Broken". Section 1 "Key Signs": cold hands/feet, lower back aches, need warm drinks, night urination, can't handle cold. Section 2 "Best Foods": ginger, cinnamon, walnuts, lamb, leek. Section 3 "Daily Habits": warm water always, no ice ever, layered clothing, foot soaks before bed. Section 4 "Avoid": ice water, raw salads, cold drinks, air conditioning on high. EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长信息图",
    platforms: ["Pinterest", "Facebook"],
    caption: "Cold Sensitivity Type — the inner furnace is broken. 🔥\n\nKey signs: cold hands/feet, lower back aches, need warm drinks\nBest foods: ginger, cinnamon, walnuts\n\nFree quiz → myeasterntype.com",
    hashtags: "#coldtype #yangdeficient #easternwellness #bodytype #warmfood #wellness",
  },
  {
    id: "bt-03",
    category: "bodytype-deep",
    titleZh: "气郁质 · 完整拆解",
    prompt: `${STYLE}. Pinterest long infographic. Title: "STUCK ENERGY TYPE" in gold serif. Subtitle: "The Pressure Cooker Mind". Section 1 "Key Signs": anxious for no reason, wake at 3 AM, chest tightness, snap easily, overthink. Section 2 "Best Foods": chrysanthemum, lotus seed, rose tea, citrus, celery. Section 3 "Daily Habits": 20-min walk daily, write to release, breathe 4 counts, no screens 1hr before bed. Section 4 "Avoid": suppressing emotions, alcohol, excessive sitting. EastType logo bottom.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长信息图",
    platforms: ["Pinterest", "Facebook"],
    caption: "Stuck Energy Type — the pressure cooker mind. 🌀\n\nKey signs: anxious, wake at 3 AM, chest tightness, overthink\nBest foods: chrysanthemum, lotus seed, rose tea\n\nFree quiz → myeasterntype.com",
    hashtags: "#stuckenergy #qistagnant #easternwellness #anxiety #bodytype #wellness",
  },

  // ═══ Seasonal 系列 ═══
  {
    id: "sn-01",
    category: "seasonal",
    titleZh: "春季 · 疏肝理气",
    prompt: `${STYLE}. Pinterest seasonal card. Spring theme with subtle cherry blossom elements. Title: "SPRING" in gold serif. Subtitle: "Time to Move What's Stuck" in white. Content: "Spring = Liver season in Chinese medicine. Your Liver wants to flow. Let it." 3 tips: "Walk 20 min daily", "Add citrus & rose tea", "Light, warm meals — no heavy food". Gold decorative line. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，季节元素",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Spring = Liver season in Chinese medicine. Your Liver wants to flow. Let it. 🌸\n\n3 spring habits: daily walks, citrus & rose tea, light warm meals\n\nDiscover your body type → myeasterntype.com",
    hashtags: "#spring #easternwellness #liver #seasonal #wellness #detox #bodytype",
  },
  {
    id: "sn-02",
    category: "seasonal",
    titleZh: "夏季 · 清热祛湿",
    prompt: `${STYLE}. Pinterest seasonal card. Summer theme with subtle warm sun elements. Title: "SUMMER" in gold serif. Subtitle: "Cool the Fire, Drain the Damp" in white. Content: "Summer = Heart season. Heat rises, dampness accumulates." 3 tips: "Mung bean soup weekly", "Chrysanthemum tea daily", "No ice water — warm water cools better". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Summer = Heart season. Heat rises, dampness accumulates. ☀️\n\n3 summer habits: mung bean soup, chrysanthemum tea, warm water (not ice!)\n\nFree quiz → myeasterntype.com",
    hashtags: "#summer #easternwellness #cooling #dampness #wellness #bodytype",
  },
  {
    id: "sn-03",
    category: "seasonal",
    titleZh: "秋季 · 润燥养阴",
    prompt: `${STYLE}. Pinterest seasonal card. Autumn theme with subtle maple leaf elements. Title: "AUTUMN" in gold serif. Subtitle: "Moisten What's Dry, Protect What's Deep" in white. Content: "Autumn = Lung season. Dryness attacks. Nourish your Yin." 3 tips: "Steamed pear with rock sugar", "Goji berries in warm water", "Sleep before 11 PM". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Autumn = Lung season. Dryness attacks. Nourish your Yin. 🍂\n\n3 autumn habits: steamed pear, goji berries, early sleep\n\nFree quiz → myeasterntype.com",
    hashtags: "#autumn #easternwellness #lung #dryness #yin #wellness #bodytype",
  },
  {
    id: "sn-04",
    category: "seasonal",
    titleZh: "冬季 · 温补藏阳",
    prompt: `${STYLE}. Pinterest seasonal card. Winter theme with subtle snowflake elements. Title: "WINTER" in gold serif. Subtitle: "Store Your Deepest Energy" in white. Content: "Winter = Kidney season. Conserve. Warm. Rest." 3 tips: "Ginger + cinnamon morning tea", "Walnuts & black sesame daily", "Foot soaks before bed, sleep by 10 PM". EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Winter = Kidney season. Conserve. Warm. Rest. ❄️\n\n3 winter habits: ginger-cinnamon tea, walnuts & black sesame, foot soaks + early sleep\n\nFree quiz → myeasterntype.com",
    hashtags: "#winter #easternwellness #kidney #warmfood #wellness #bodytype",
  },

  // ═══ Recipe 系列 ═══
  {
    id: "rc-01",
    category: "recipe",
    titleZh: "姜茶做法",
    prompt: `${STYLE}. Pinterest recipe card. Title: "GINGER WAKE-UP TEA" in gold serif. 3-step visual recipe: Step 1 "Slice 3-4 thin pieces of fresh ginger" with knife illustration hint. Step 2 "Steep in hot water for 5 minutes" with cup illustration hint. Step 3 "Drink 20 min before breakfast" with clock illustration hint. Bottom note: "Best for: Cold Sensitivity & Low Vitality types" in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，步骤式",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Ginger Wake-Up Tea — 3 steps, 5 minutes, biggest digestion game-changer. 🫚\n\n1. Slice 3-4 thin pieces of fresh ginger\n2. Steep in hot water for 5 min\n3. Drink 20 min before breakfast\n\nFree guide → myeasterntype.com",
    hashtags: "#gingertea #recipe #easternwellness #morningroutine #digestion #wellness",
  },
  {
    id: "rc-02",
    category: "recipe",
    titleZh: "红枣茶做法",
    prompt: `${STYLE}. Pinterest recipe card. Title: "RED DATE CALM TEA" in gold serif. 3 steps: Step 1 "Pit 5-6 dried red dates". Step 2 "Simmer in water for 15 minutes". Step 3 "Drink 30 min before bed". Bottom: "Best for: Low Vitality & Stuck Energy types" in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Red Date Calm Tea — the simplest sleep remedy. 🫘\n\n1. Pit 5-6 dried red dates\n2. Simmer in water 15 min\n3. Drink 30 min before bed\n\nMany notice calmer sleep within the first week.\n\nFree guide → myeasterntype.com",
    hashtags: "#reddatetea #sleepremedy #easternwellness #calm #wellness #recipe",
  },
  {
    id: "rc-03",
    category: "recipe",
    titleZh: "绿豆汤做法",
    prompt: `${STYLE}. Pinterest recipe card. Title: "MUNG BEAN COOLING SOUP" in gold serif. 3 steps: Step 1 "Rinse 1 cup mung beans". Step 2 "Simmer in 4 cups water for 30 min until soft". Step 3 "Add rock sugar to taste". Bottom: "Best for: Damp Heat type & summer heat" in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Mung Bean Cooling Soup — summer's best friend. 🫘\n\n1. Rinse 1 cup mung beans\n2. Simmer in 4 cups water 30 min\n3. Add rock sugar to taste\n\nFree guide → myeasterntype.com",
    hashtags: "#mungbeansoup #summerrecipe #easternwellness #cooling #wellness",
  },
  {
    id: "rc-04",
    category: "recipe",
    titleZh: "菊花枸杞茶做法",
    prompt: `${STYLE}. Pinterest recipe card. Title: "CHRYANTHEMUM-GOJI TEA" in gold serif. 3 steps: Step 1 "8-10 dried chrysanthemum flowers + 10 goji berries". Step 2 "Steep in hot water for 5 minutes". Step 3 "Drink in afternoon instead of coffee". Bottom: "Best for: Internal Heat & eye strain" in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "Facebook"],
    caption: "Chrysanthemum-Goji Tea — the afternoon coffee replacement. 🌼\n\n1. 8-10 chrysanthemum flowers + 10 goji berries\n2. Steep in hot water 5 min\n3. Drink in afternoon instead of coffee\n\nFree guide → myeasterntype.com",
    hashtags: "#chrysanthemumtea #gojiberries #easternwellness #tea #wellness #recipe",
  },

  // ═══ Daily Habit 系列 ═══
  {
    id: "dh-01",
    category: "daily-habit",
    titleZh: "温水 vs 冰水",
    prompt: `${STYLE}. Pinterest comparison card. Split layout. Left side: "ICE WATER" with ❌ mark, text: "Kills digestion, shocks stomach, drains energy". Right side: "WARM WATER" with ✅ gold check, text: "Activates digestion, fuels metabolism, gentle on body". Center divider in gold. Bottom: "Your stomach is a fire, not a freezer." in gold italic. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，对比式",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Ice water kills digestion. Warm water activates it. Your stomach is a fire, not a freezer. 🧊→🔥\n\nSimple swap: warm water first thing in the morning.\n\nDiscover your body type → myeasterntype.com",
    hashtags: "#warmwater #icewater #easternwellness #digestion #healthhack #wellness",
  },
  {
    id: "dh-02",
    category: "daily-habit",
    titleZh: "下午3点零食替换",
    prompt: `${STYLE}. Pinterest comparison card. Split layout. Left: "3 PM CANDY/COFFEE" with ❌, text: "Sugar crash, caffeine debt, worse fatigue at 5 PM". Right: "3 PM GOJI BERRIES" with ✅, text: "Steady energy, no crash, eye nourishment, 2000yr track record". Bottom: "Your afternoon snack is either fueling you or draining you." in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，对比式",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "3 PM snack swap: goji berries instead of candy. Steady energy, no crash. 🔴\n\nKeep a jar at your desk. 10-15 berries. Done.\n\nFree guide → myeasterntype.com",
    hashtags: "#healthysnack #gojiberries #afternoonsnack #easternwellness #wellness #energy",
  },
  {
    id: "dh-03",
    category: "daily-habit",
    titleZh: "沙拉 vs 熟食",
    prompt: `${STYLE}. Pinterest comparison card. Split layout. Left: "RAW SALAD" with ❌, text: "Hardest for weak digestion, cold + raw = energy drain, bloating after meals". Right: "WARM COOKED VEG" with ✅, text: "Easy to digest, nutrients absorbed, no bloating, body stays warm". Bottom: "Healthy for one body type can harm another." in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Your salad might not be healthy — for YOUR body type. 🥗→🍲\n\nRaw + cold = digestion nightmare for some types.\nWarm cooked food heals what salad breaks.\n\nFree quiz → myeasterntype.com",
    hashtags: "#salad #cookedfood #easternwellness #digestion #bodytype #wellness",
  },

  // ═══ Fun Fact 系列 ═══
  {
    id: "ff-01",
    category: "fun-fact",
    titleZh: "核桃为什么像大脑",
    prompt: `${STYLE}. Pinterest fun fact card. Large walnut illustration at center with brain overlay hint. Headline: "WHY DO WALNUTS LOOK LIKE BRAINS?" in gold serif. Answer: "In Chinese medicine, this isn't coincidence. It's called 'like shapes nourish like shapes.' Walnuts nourish the brain, strengthen memory, and support the Kidney." in white. Bottom: "3,000 years of observation > 1 coincidence" in gold italic. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，冷知识互动",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Why do walnuts look like brains? In Chinese medicine, it's not coincidence. 🧠\n\n\"Like shapes nourish like shapes.\" Walnuts → brain → memory → Kidney energy.\n\nDiscover your body type → myeasterntype.com",
    hashtags: "#walnuts #brainfood #easternwellness #funfact #chinesemedicine #wellness",
  },
  {
    id: "ff-02",
    category: "fun-fact",
    titleZh: "凌晨3点醒 = 肝在说话",
    prompt: `${STYLE}. Pinterest fun fact card. Clock showing 3 AM in gold. Headline: "WHY 3 AM?" in gold serif. Answer: "In Chinese medicine, 1-3 AM is Liver time. Your Liver is trying to repair but something is stuck. Waking at the same time every night isn't random insomnia — it's your Liver talking." in white. Bottom: "Not melatonin. Movement." in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Waking at 3 AM every night? It's not random insomnia. Your Liver is talking. 🌙\n\n1-3 AM = Liver time in Chinese medicine. Something is stuck.\n\nFree quiz → myeasterntype.com",
    hashtags: "#3am #insomnia #easternwellness #liver #sleep #funfact #wellness",
  },
  {
    id: "ff-03",
    category: "fun-fact",
    titleZh: "脸是内脏的地图",
    prompt: `${STYLE}. Pinterest fun fact card. Face map illustration with zones marked. Headline: "YOUR FACE IS A MAP" in gold serif. Content: "Forehead = Gut issues. Nose = Heart heat. Chin = Hormones. Cheeks = Lung health. Between brows = Liver stress." in white. Bottom: "Your skin has been trying to tell you something." in gold italic. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图，面诊图",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Your face is a map of your organs. 🗺️\n\nForehead → gut. Nose → heart heat. Chin → hormones. Cheeks → lungs.\n\nYour skin has been trying to tell you something.\n\nFree quiz → myeasterntype.com",
    hashtags: "#facemap #easternwellness #skincare #acne #chinesemedicine #wellness",
  },
  {
    id: "ff-04",
    category: "fun-fact",
    titleZh: "咖啡是借不是赚",
    prompt: `${STYLE}. Pinterest fun fact card. Coffee cup illustration with energy arrow going up then crashing down. Headline: "COFFEE IS BORROWING, NOT EARNING" in gold serif. Content: "That 3 PM crash? Your body is collecting the debt. The energy was never yours. You borrowed it from tomorrow." in white. Bottom: "For Low Vitality types, coffee makes the exhaustion worse." in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Coffee doesn't give you energy. It steals from tomorrow. ☕\n\nThat 3 PM crash = your body collecting the debt.\nFor Low Vitality types, coffee makes it worse.\n\nDiscover your type → myeasterntype.com",
    hashtags: "#coffee #energy #easternwellness #crash #bodytype #wellness #quitcoffee",
  },
  {
    id: "ff-05",
    category: "fun-fact",
    titleZh: "舌头是最好的体检",
    prompt: `${STYLE}. Pinterest fun fact card. Tongue illustration with zones. Headline: "YOUR TONGUE IS THE BEST HEALTH CHECK" in gold serif. Content: "Pale = low energy. Red tip = internal heat. Thick white coat = dampness. Teeth marks = weak digestion. Purple = poor circulation." in white. Bottom: "5 seconds. Costs nothing. Tells everything." in gold. EastType logo.`,
    size: PIN_SIZE,
    sizeNote: "Pinterest 长图",
    platforms: ["Pinterest", "Instagram", "X", "Facebook"],
    caption: "Your tongue is the best health check you're not using. 👅\n\nPale → low energy. Red tip → heat. White coat → dampness. Teeth marks → weak digestion.\n\n5 seconds. Costs nothing.\n\nFree quiz → myeasterntype.com",
    hashtags: "#tongue #easternwellness #healthcheck #chinesemedicine #wellness #diyhealth",
  },
]

export function getPromptsByCategory(category: PromptCategory): PromptEntry[] {
  return IMAGE_PROMPTS.filter((p) => p.category === category)
}

export function getPromptCategories(): PromptCategory[] {
  return Object.keys(CATEGORY_META) as PromptCategory[]
}
