import type { ConstitutionId } from "./types"
import { SYMPTOMS, type SymptomPage } from "./symptoms-data"
import { getFoodsForTypes, type FoodItem } from "./food-map"

export type CtaType = "none" | "brand" | "cta"
export type AspectRatio = "9:16" | "2:3" | "1:1"

export interface GeneratedCard {
  slug: string
  title: string
  cause: string
  symptoms: string[]
  foods: FoodItem[]
  imagePrompt: string
  caption: string
  hashtags: string
  ctaType: CtaType
  ratio: AspectRatio
}

const CAUSE_MAP: Record<string, string> = {
  "why-am-i-always-tired": "Your body is running on the wrong fuel.",
  "why-am-i-always-cold": "Your inner furnace has run out of firewood.",
  "why-do-i-wake-up-at-3am": "Your Liver is doing overtime on the night shift.",
  "always-bloated-after-eating": "Your digestion engine is too cold to process fuel.",
  "why-am-i-always-sleepy": "Your body's battery won't hold a charge.",
  "why-do-i-have-night-sweats": "Your body's cooling system is leaking.",
  "why-do-i-feel-anxious": "Your chest is holding energy that can't move.",
  "why-do-i-have-brain-fog": "Your body is a sponge that can't drain.",
  "why-cant-i-fall-asleep": "Your engine is overheating but the coolant is gone.",
  "why-do-i-keep-gaining-weight": "It's not the calories — it's the moisture your body can't drain.",
  "why-are-my-moods-all-over-the-place": "Your emotional steering wheel is disconnected.",
  "why-do-i-get-sick-so-often": "Your immune shield has cracks.",
  "why-do-my-hands-and-feet-go-numb": "Your circulation river has run dry.",
  "why-is-my-skin-so-dry": "Your body's internal moisturizer is empty.",
  "why-do-i-crave-sweets": "Your Spleen is begging for quick fuel.",
  "why-do-i-overthink-everything": "Your mind is a pressure cooker with no valve.",
  "why-am-i-always-unmotivated": "Your engine has fuel but no spark.",
  "why-do-i-keep-breaking-out": "Your skin is an emergency exit for internal heat.",
  "why-is-my-hair-falling-out": "Your deepest energy reserves are running on empty.",
  "why-am-i-so-irritable": "Your Liver is stuck and taking it out on your mood.",
  "why-cant-i-lose-weight": "Your body is holding water like a broken container.",
  "why-do-i-have-acid-reflux": "Internal heat is pushing acid where it shouldn't go.",
  "why-do-i-have-headaches": "Heat or stuck energy is pressurizing your head.",
  "why-do-i-feel-dizzy": "Your brain isn't getting enough upward fuel.",
  "why-am-i-always-thirsty": "Your body's internal reservoir has evaporated.",
  "why-do-i-have-lower-back-pain": "Your deepest battery is dying.",
  "why-do-i-have-eczema": "Internal heat and dampness are pushing through your skin.",
  "why-do-i-sweat-so-much": "Your pores can't close because the heat keeps pushing out.",
  "why-do-i-have-joint-pain": "Cold and dampness are camping in your joints.",
  "why-am-i-always-thirsty-at-night": "Your cooling system is undercharged and overheating at night.",
  "why-do-i-have-hot-flashes": "Your body's thermostat is broken.",
  "why-do-i-have-water-retention": "Your drainage system is clogged.",
  "why-am-i-always-constipated": "Your intestines don't have the energy to push.",
  "why-is-my-libido-low": "Your body's deepest fire has burned down to embers.",
  "why-do-i-have-pms": "Energy is stuck in your chest and lower abdomen.",
  "why-is-my-metabolism-so-slow": "Your internal furnace is barely lit.",
  "why-do-i-have-poor-circulation": "Your blood river has too many dams.",
  "why-do-i-have-seasonal-allergies": "Your body's border patrol is underfunded.",
  "why-do-i-have-dark-circles": "Your kidney battery is visibly draining.",
  "why-am-i-always-hungry": "Your body can't absorb what you eat, so it keeps asking.",
  "why-do-i-have-period-cramps": "Cold and stuck blood can't flow freely.",
  "why-is-my-period-irregular": "Your body's clock is running on low energy.",
  "why-is-my-period-so-heavy": "Your body can't hold what it should keep.",
  "why-do-i-have-breast-tenderness": "Stuck energy is pooling in your chest.",
  "why-do-i-have-menopause-symptoms": "Your cooling and warming systems are both running low.",
  "why-do-i-have-nausea": "Your stomach's energy is flowing in the wrong direction.",
  "why-do-i-have-diarrhea": "Your Spleen can't hold what it should contain.",
  "why-do-i-feel-sick-after-eating": "Your digestion engine stalls when you give it fuel.",
  "why-do-i-have-bad-breath": "Internal heat is cooking in your stomach.",
  "why-is-my-face-so-oily": "Internal heat is pushing oil through your skin.",
  "why-do-i-have-rosacea": "Blood and heat are trapped in your face.",
  "why-do-i-have-brittle-nails": "Your blood doesn't have enough to nourish the edges.",
  "why-is-my-complexion-dull": "Your blood and energy can't reach the surface.",
  "why-do-i-have-cellulite": "Dampness is pooling under your skin.",
  "why-do-i-have-neck-pain": "Stuck energy is knotting in your neck.",
  "why-are-my-shoulders-always-tense": "Stress and stuck energy are camping in your shoulders.",
  "why-do-i-have-stomach-pain": "Your stomach energy is blocked or flowing backward.",
  "why-am-i-always-stiff": "Cold and dampness have frozen your joints.",
  "why-do-i-keep-forgetting-things": "Your brain isn't getting enough fuel from your Kidney.",
  "why-cant-i-focus": "Dampness is fogging up your mental windshield.",
  "why-do-i-cry-so-easily": "Your heart's energy is fragile and overflowing.",
  "why-do-i-have-no-patience": "Your Liver heat is making everything feel urgent.",
  "why-do-i-have-a-chronic-cough": "Your lungs are dry and irritated from internal heat.",
  "why-do-i-always-have-a-sore-throat": "Internal heat is burning your throat from below.",
  "why-do-i-have-post-nasal-drip": "Dampness is dripping down from your sinuses.",
  "why-do-i-wake-up-to-pee": "Your kidney's water gate can't stay closed at night.",
  "why-do-i-have-tinnitus": "Your kidney energy is too low to nourish your ears.",
  "why-am-i-so-sensitive-to-heat": "Your cooling system is undercharged.",
  "why-do-i-wake-up-tired": "Your body repaired all night but couldn't recharge.",
  "why-do-i-have-cold-sweats": "Your body is leaking warmth it can't hold onto.",
}

const SYMPTOM_LISTS: Record<string, string[]> = {
  "why-am-i-always-tired": ["Constant fatigue", "Low motivation", "Afternoon energy crash", "Difficulty focusing"],
  "why-am-i-always-cold": ["Cold hands and feet", "Lower back aches", "Craving warm drinks", "Needing extra layers"],
  "why-do-i-wake-up-at-3am": ["Waking at the same time nightly", "Racing thoughts", "Can't fall back asleep", "Chest tightness"],
  "always-bloated-after-eating": ["Stomach feels heavy", "Gas after meals", "Clothes feel tight", "No appetite next meal"],
  "why-am-i-always-sleepy": ["Falling asleep at desk", "Heavy eyelids all day", "Need naps to function", "Wake up groggy"],
  "why-do-i-have-night-sweats": ["Drenched sheets", "Hot flashes at night", "Waking up flushed", "Dry mouth by morning"],
  "why-do-i-feel-anxious": ["Racing heart for no reason", "Chest tightness", "Can't sit still", "Overthinking everything"],
  "why-do-i-have-brain-fog": ["Can't think clearly", "Forget what you were saying", "Slow mental processing", "Hard to make decisions"],
  "why-cant-i-fall-asleep": ["Mind won't shut off", "Body feels hot", "Tossing for hours", "Too wired to rest"],
  "why-do-i-keep-gaining-weight": ["Gaining despite eating less", "Feel heavy and puffy", "Slow digestion", "Clothes keep shrinking"],
  "why-are-my-moods-all-over-the-place": ["Happy then sad in minutes", "Easily triggered", "Emotional whiplash", "Can't predict your mood"],
  "why-do-i-get-sick-so-often": ["Catching every cold", "Slow to recover", "Always sniffling", "Season after season"],
  "why-do-my-hands-and-feet-go-numb": ["Tingling fingers", "Cold extremities", "Numb patches", "Poor grip strength"],
  "why-is-my-skin-so-dry": ["Flaky skin", "Itching after shower", "Cracked hands", "Dull rough texture"],
  "why-do-i-crave-sweets": ["Need dessert every night", "3 PM sugar crash", "Can't stop at one bite", "Sweet tooth overrides willpower"],
  "why-do-i-overthink-everything": ["Thoughts loop endlessly", "Can't make decisions", "Analyzing every word", "Mental exhaustion"],
  "why-am-i-always-unmotivated": ["No drive to start things", "Everything feels like effort", "Procrastination loop", "No enthusiasm"],
  "why-do-i-keep-breaking-out": ["Persistent acne", "Oily T-zone", "Breakouts after spicy food", "Skin won't clear"],
  "why-is-my-hair-falling-out": ["More hair on the brush", "Thinning crown", "Dry brittle strands", "Receding hairline"],
  "why-am-i-so-irritable": ["Snapping at people", "Everything annoys you", "Short fuse", "Regret after reacting"],
  "why-cant-i-lose-weight": ["Dieting doesn't work", "Puffy not fat", "Water retention", "Stubborn belly"],
  "why-do-i-have-acid-reflux": ["Burning in chest", "Sour taste in mouth", "Worse after eating", "Worse lying down"],
  "why-do-i-have-headaches": ["Pressure in temples", "Pain behind eyes", "Tension at base of skull", "Worse with stress"],
  "why-do-i-feel-dizzy": ["Lightheaded standing up", "Room spinning", "Unsteady balance", "Vision blurring"],
  "why-am-i-always-thirsty": ["Dry mouth all day", "Water doesn't help", "Waking up thirsty", "Never feels hydrated"],
  "why-do-i-have-lower-back-pain": ["Stiff in morning", "Aching after rest", "Worse with cold weather", "Weak knees"],
  "why-do-i-have-eczema": ["Itchy red patches", "Dry flaking skin", "Worse with stress", "Recurring flare-ups"],
  "why-do-i-sweat-so-much": ["Sweating without effort", "Staining clothes", "Hot all the time", "Night sweating"],
  "why-do-i-have-joint-pain": ["Aching joints", "Worse in cold damp weather", "Stiff in morning", "Swelling"],
  "why-am-i-always-thirsty-at-night": ["Dry mouth waking up", "Needing water by bed", "Never enough water", "Thirst despite drinking"],
  "why-do-i-have-hot-flashes": ["Sudden heat waves", "Flushing face", "Sweating spells", "Heat from inside out"],
  "why-do-i-have-water-retention": ["Puffy face in morning", "Rings feel tight", "Swollen ankles", "Weight fluctuates daily"],
  "why-am-i-always-constipated": ["Few bowel movements", "Hard dry stool", "Straining", "Feeling incomplete"],
  "why-is-my-libido-low": ["No desire", "Exhaustion overrides interest", "Emotional flatness", "Hard to get in the mood"],
  "why-do-i-have-pms": ["Mood swings before period", "Breast tenderness", "Bloating", "Irritability spike"],
  "why-is-my-metabolism-so-slow": ["Gaining on normal calories", "Cold body temperature", "Sluggish after eating", "No energy to move"],
  "why-do-i-have-poor-circulation": ["Cold hands and feet", "Bruising easily", "Numbness", "Slow wound healing"],
  "why-do-i-have-seasonal-allergies": ["Sneezing every spring", "Itchy watery eyes", "Runny nose", "Congestion"],
  "why-do-i-have-dark-circles": ["Purple under eyes", "Looks like exhaustion", "Won't go away with sleep", "Thin under-eye skin"],
  "why-am-i-always-hungry": ["Eating but never full", "Snacking all day", "Empty stomach feeling", "Cravings right after meals"],
  "why-do-i-have-period-cramps": ["Sharp lower belly pain", "Worse with cold", "Clots in flow", "Pain radiating to back"],
  "why-is-my-period-irregular": ["Cycles vary widely", "Skipping months", "Unpredictable timing", "Can't plan around it"],
  "why-is-my-period-so-heavy": ["Soaking through protection", "Lasting too long", "Clots", "Anemia symptoms"],
  "why-do-i-have-breast-tenderness": ["Sore before period", "Lumpy feeling", "Can't lie on stomach", "Worse with stress"],
  "why-do-i-have-menopause-symptoms": ["Hot flashes", "Night sweats", "Mood changes", "Dryness everywhere"],
  "why-do-i-have-nausea": ["Queasy after eating", "Sour stomach", "Loss of appetite", "Gagging easily"],
  "why-do-i-have-diarrhea": ["Urgent bathroom trips", "Loose frequent stools", "Stomach cramping", "Worse with stress"],
  "why-do-i-feel-sick-after-eating": ["Nausea post-meal", "Bloating immediately", "Heavy sluggish feeling", "Regret after normal portions"],
  "why-do-i-have-bad-breath": ["Morning breath persists", "Coated tongue", "Sour taste", "Brushing doesn't fix it"],
  "why-is-my-face-so-oily": ["Shiny T-zone", "Makeup sliding off", "Enlarged pores", "Greasy by noon"],
  "why-do-i-have-rosacea": ["Red flushed cheeks", "Visible blood vessels", "Worse with heat", "Bumps on face"],
  "why-do-i-have-brittle-nails": ["Nails splitting", "Peeling layers", "Slow growth", "Ridges on nails"],
  "why-is-my-complexion-dull": ["No glow", "Grayish tone", "Looks tired", "Skin lacks vibrancy"],
  "why-do-i-have-cellulite": ["Dimpled skin", "Worse on thighs", "Doesn't improve with exercise", "Lumpy texture"],
  "why-do-i-have-neck-pain": ["Stiff neck", "Can't turn head", "Tension at base of skull", "Headaches starting from neck"],
  "why-are-my-shoulders-always-tense": ["Knots in shoulders", "Hunched posture", "Pain between blades", "Can't relax shoulders"],
  "why-do-i-have-stomach-pain": ["Aching after eating", "Cramping", "Pain on pressure", "Worse with cold food"],
  "why-am-i-always-stiff": ["Stiff getting up", "Takes time to loosen", "Joints feel rusty", "Worse in cold"],
  "why-do-i-keep-forgetting-things": ["Walking into rooms and forgetting why", "Losing train of thought", "Missing appointments", "Can't retain new info"],
  "why-cant-i-focus": ["Mind wanders constantly", "Reading same paragraph twice", "Easily distracted", "Can't finish tasks"],
  "why-do-i-cry-so-easily": ["Tears at small things", "Emotional overwhelm", "Can't hold it back", "Feeling fragile"],
  "why-do-i-have-no-patience": ["Everything feels slow", "Interrupting people", "Can't wait", "Frustrated instantly"],
  "why-do-i-have-a-chronic-cough": ["Coughing for weeks", "Dry tickle in throat", "Worse at night", "Unproductive cough"],
  "why-do-i-always-have-a-sore-throat": ["Scratchy throat daily", "Worse in morning", "Swollen feeling", "Voice gets hoarse"],
  "why-do-i-have-post-nasal-drip": ["Mucus in throat", "Constant throat clearing", "Cough from drip", "Gross taste in mouth"],
  "why-do-i-wake-up-to-pee": ["Multiple bathroom trips", "Interrupted sleep", "Urgency at night", "Can't sleep through"],
  "why-do-i-have-tinnitus": ["Ringing in ears", "Buzzing sound", "Worse at night", "Can't find silence"],
  "why-am-i-so-sensitive-to-heat": ["Overheating easily", "Can't handle summer", "Sweating in mild temps", "Seeking AC constantly"],
  "why-do-i-wake-up-tired": ["Groggy every morning", "Sleep didn't recharge", "Need caffeine to start", "Feel worse after sleeping"],
  "why-do-i-have-cold-sweats": ["Sweating without heat", "Clammy skin", "Sudden chills", "Damp feeling"],
}

const TYPE_HASHTAGS: Record<ConstitutionId, string[]> = {
  balanced: ["balanced", "wellness", "healthylifestyle"],
  qi_deficient: ["lowvitality", "qideficient", "fatigue", "lowenergy"],
  yang_deficient: ["coldtype", "yangdeficient", "coldhands", "warmfood"],
  yin_deficient: ["internalheat", "yindeficient", "nightsweats", "cooling"],
  phlegm_damp: ["dampness", "phlegmdamp", "bloating", "heavysluggish"],
  damp_heat: ["dampheat", "breakouts", "oilyskin", "coolingfood"],
  blood_stasis: ["bloodstasis", "poorcirculation", "bruising", "bloodflow"],
  qi_stagnant: ["stuckenergy", "qistagnant", "anxiety", "overthinking"],
  sensitive: ["sensitive", "allergies", "immunity", "weakshield"],
}

const RATIO_MAP: Record<AspectRatio, string> = {
  "9:16": "vertical 9:16 layout",
  "2:3": "vertical 2:3 layout (Pinterest pin)",
  "1:1": "square 1:1 layout (Instagram post)",
}

function buildCtaLine(ctaType: CtaType): string {
  if (ctaType === "none") return ""
  if (ctaType === "brand") return "\n\nFooter: EastType · myeasterntype.com"
  return "\n\nFooter: Find your body type → myeasterntype.com"
}

function buildCaptionCta(ctaType: CtaType): string {
  if (ctaType === "none") return ""
  if (ctaType === "brand") return "\n\nmyeasterntype.com"
  return "\n\nFind your body type → myeasterntype.com"
}

export function generateSymptomCard(
  slug: string,
  ctaType: CtaType,
  ratio: AspectRatio,
  excludeFoods: string[] = []
): GeneratedCard | null {
  const symptom = SYMPTOMS[slug]
  if (!symptom) return null

  const title = symptom.h1.en.split("?")[0] + "?"
  const cause = CAUSE_MAP[slug] || "Your body type is creating this pattern."
  const symptoms = SYMPTOM_LISTS[slug] || [symptom.title.en.replace("Why Do I ", "").replace("Why Am I ", "").replace("Why Is My ", "").replace("?", "")]

  const typeIds = symptom.relatedTypes as ConstitutionId[]
  const foods = getFoodsForTypes(typeIds, 4, excludeFoods)

  const foodNames = foods.map((f) => f.en).join(", ")
  const ctaLine = buildCtaLine(ctaType)
  const ratioDesc = RATIO_MAP[ratio]

  const imagePrompt = `Clean modern wellness diagnostic card UI, ${ratioDesc}.

Title: ${title.toUpperCase().replace("?", "?")}

Cause: ${cause}

Symptoms:
- ${symptoms.join("\n- ")}

WHAT HELPS:
${foodNames}
${ctaLine}

Style: minimal medical wellness app UI, soft beige background, clean typography, high readability, no people, no illustrations, Instagram shareable layout.`

  const foodBenefitLines = foods.map((f) => `${f.en} — ${f.benefit}`).join("\n")
  const typeHashtags = typeIds.flatMap((t) => TYPE_HASHTAGS[t] || [])
  const uniqueHashtags = [...new Set([...typeHashtags, "easternwellness", "bodytype", "wellness", "naturalhealth"])]
  const hashtagStr = uniqueHashtags.map((h) => `#${h}`).join(" ")

  const captionCta = buildCaptionCta(ctaType)
  const caption = `${title} ${cause}\n\nWhat helps:\n${foodBenefitLines}${captionCta}`

  return {
    slug,
    title,
    cause,
    symptoms,
    foods,
    imagePrompt,
    caption,
    hashtags: hashtagStr,
    ctaType,
    ratio,
  }
}

export function getRandomUnusedSlug(doneSlugs: Set<string>): string | null {
  const allSlugs = Object.keys(SYMPTOMS)
  const unused = allSlugs.filter((s) => !doneSlugs.has(s))
  if (unused.length === 0) return null
  return unused[Math.floor(Math.random() * unused.length)]
}

export function getSlugsByType(typeId: ConstitutionId, doneSlugs: Set<string>): string[] {
  return Object.entries(SYMPTOMS)
    .filter(([_, s]) => s.relatedTypes.includes(typeId) && !doneSlugs.has(_))
    .map(([slug]) => slug)
}
