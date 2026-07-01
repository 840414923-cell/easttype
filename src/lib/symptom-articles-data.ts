export interface SymptomBodyType {
  name: string
  slug: string
  percentage?: string
  description: string
  keySigns: string[]
}

export interface SymptomHelpCard {
  title: string
  description: string
}

export interface SymptomTcmVsModern {
  aspect: string
  westernView: string
  tcmView: string
}

export interface SymptomArticleData {
  slug: string
  title: string
  tag: string
  readTime: string
  intro: string[]
  tcmExplanation: string[]
  metaphor?: string
  bodyTypes: SymptomBodyType[]
  tcmVsModern?: SymptomTcmVsModern[]
  whatMayHelp: SymptomHelpCard[]
  whenToSeeDoctor?: string
  relatedPattern?: { name: string; slug: string }
  relatedSymptoms: { slug: string; title: string }[]
  foodsForSlug?: string
}

export const SYMPTOM_ARTICLES: Record<string, SymptomArticleData> = {
  "why-am-i-always-tired": {
    slug: "why-am-i-always-tired",
    title: "Why Am I Always Tired? What Your Body Is Trying to Tell You",
    tag: "Fatigue",
    readTime: "8 min",
    intro: [
      "If you're always tired even after a full night's sleep, you're not alone. You've probably heard \"get more sleep\" or \"exercise more\" so many times it makes you want to scream. But what if the problem isn't how much you sleep? What if your body is just running low on something sleep can't fix?",
      "I spent years thinking I was just \"not a morning person\" or \"lazy.\" Turns out, my body was low on Qi, the energy that powers everything from digestion to thinking clearly. Once I understood this pattern, things started making sense in a way they never had before.",
      "This isn't about being dramatic. Chronic low energy affects your work, your relationships, your willingness to try new things. It quietly shrinks your life. Let's talk about what might actually be going on underneath.",
    ],
    tcmExplanation: [
      "Let's be honest: being tired all the time isn't normal, even though it's common. The usual suspects are poor sleep, bad diet, too much screen time, or not enough exercise. And sure, those things matter. But many people fix all of those and still feel like a phone stuck on 5% battery. That's when it's worth looking deeper.",
      "Sometimes it's low iron, thyroid issues, or vitamin deficiencies. Your doctor can check those. But here's the thing a lot of people run into: the blood work comes back totally fine, and you're told everything looks normal. Great. But you still feel like garbage. That gap between \"normal test results\" and \"I can barely get through the afternoon\" is exactly where Eastern body wisdom has something useful to say.",
      "Chinese medicine doesn't look at your blood. It looks at how your body functions: how well you digest, how warm your hands are, whether you sweat easily, how your voice sounds. These seemingly random details form a pattern, and that pattern tells a story about what your body needs.",
      "In Traditional Chinese Medicine, the most common pattern behind \"always tired\" is called Qi Deficiency. Qi is your body's vital energy, think of it as the fuel running every single function, from your heartbeat to your thoughts. When Qi is low, nothing breaks exactly, but everything runs slower and costs more effort.",
      "Qi Deficiency is often linked to a few root causes: prolonged stress that wears you down over months, recovering from an illness that your body never fully bounced back from, eating too many cold and raw foods that force your digestive system to work overtime, or simply a constitutional tendency you were born with. The good news is that Qi can be supported and built up over time with the right approach.",
    ],
    metaphor: "Imagine your body is a car. Western medicine checks the oil, the fuel, the spark plugs. If those test fine, the car is \"healthy.\" Chinese medicine goes a step further and asks: but how does the engine feel when you drive it? Does it struggle on hills? Does it idle roughly? Those functional experiences matter, even if the diagnostics say everything is fine.",
    bodyTypes: [
      {
        name: "Qi Deficient",
        slug: "qi_deficient",
        percentage: "About 15% of people",
        description: "The primary type behind chronic fatigue. The hallmark is feeling wiped out even after adequate rest. People with this type often have a soft voice, sweat easily, catch colds more often, and prefer sitting over standing. It's like their battery is genuinely smaller than other people's.",
        keySigns: ["Soft voice", "Easy sweating", "Frequent colds", "Prefers sitting", "Pale complexion"],
      },
      {
        name: "Yang Deficient",
        slug: "yang_deficient",
        description: "These folks feel tired AND cold. Their internal heater is underpowered, so their body cuts circulation to the extremities to protect core warmth. If you're always tired and your hands are like ice cubes, this might be your pattern.",
        keySigns: ["Cold hands and feet", "Prefers warm drinks", "Pale complexion", "Slow digestion", "Water retention"],
      },
    ],
    tcmVsModern: [
      {
        aspect: "What is being measured",
        westernView: "Blood tests, hormone levels, vitamin panels",
        tcmView: "How the body functions: digestion, warmth, energy levels, voice strength",
      },
      {
        aspect: "Definition of \"healthy\"",
        westernView: "All test results within normal range",
        tcmView: "Body functions smoothly with energy to spare, not just absence of disease",
      },
      {
        aspect: "View of fatigue",
        westernView: "Symptom to be linked to a diagnosable condition",
        tcmView: "Pattern indicating the body's energy system needs support",
      },
      {
        aspect: "Approach",
        westernView: "Treat the diagnosed condition if found",
        tcmView: "Support Qi production through diet, lifestyle, and body type awareness",
      },
    ],
    whatMayHelp: [
      {
        title: "Switch to Warm, Cooked Foods",
        description: "Your digestive system in TCM is like a cooking pot. Cold, raw ingredients force it to spend energy heating everything up before digesting. For someone already low on Qi, that's energy you can't afford to waste. Warm soups, stews, and congee are much easier on your system.",
      },
      {
        title: "Start Your Day with Congee",
        description: "Congee (rice porridge) is the number one recovery food in Chinese households because it takes almost zero digestive effort and delivers steady nourishment. Add a cup of warm ginger tea with a few jujube dates on the side. Most people with Qi Deficiency notice a real difference within two weeks.",
      },
      {
        title: "Go Easy on Caffeine",
        description: "TCM views coffee as borrowing energy from tomorrow to spend today. It doesn't create new Qi. It just stimulates what's already there. Over time, the debt catches up. Try cutting back by half and replacing some cups with warm ginger tea or ginseng tea.",
      },
      {
        title: "Move, But Gently",
        description: "Heavy workouts can actually drain Qi further if you're already depleted. Think walking, gentle yoga, tai chi, or even just 15 minutes of slow stretching. The goal is circulation, not exhaustion. You want to wake your body up, not beat it into submission.",
      },
      {
        title: "Get to Bed Before 11 PM",
        description: "In TCM, the body clock matters. The hours before midnight are considered the most restorative for your Qi. Staying up past 11 consistently is like trying to fill a bucket with a hole in it. You can catch up later, but you'll never quite recover what you lost during those prime hours.",
      },
    ],
    whenToSeeDoctor: "If your fatigue is severe, worsening, or accompanied by unexplained weight loss, dizziness, or shortness of breath, see a doctor first to rule out underlying medical conditions. TCM constitution patterns complement but do not replace medical evaluation.",
    relatedPattern: { name: "Low Vitality", slug: "low-vitality" },
    relatedSymptoms: [
      { slug: "why-am-i-always-sleepy", title: "Why Am I Always Sleepy?" },
      { slug: "why-do-i-feel-anxious", title: "Why Do I Feel Anxious?" },
    ],
    foodsForSlug: "when-youre-always-tired",
  },
}
