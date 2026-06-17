const META_UPDATES: Record<string, { title: string; desc: string }> = {
  "why-am-i-always-tired": {
    title: "Always Tired? You're Not Lazy — Your Body Type May Be Why",
    desc: "Sleep 8 hours and still exhausted? It might be your body type, not your sleep. Simple food changes may help more than coffee. Free 5-min quiz."
  },
  "why-am-i-always-cold": {
    title: "Always Cold? It's Not Just Winter — Your Body Type Matters",
    desc: "Wearing 3 layers while others are fine? Your inner furnace might need help. See which warming foods may help. Free body type quiz."
  },
  "why-do-i-wake-up-at-3am": {
    title: "Wake Up at 3AM Every Night? Your Body Is Sending a Signal",
    desc: "Same time every night? In Eastern wellness, 3AM means something specific. A simple tea may help you sleep through. Free quiz."
  },
  "always-bloated-after-eating": {
    title: "Bloated After Every Meal? It's Not What You Eat — It's Your Body Type",
    desc: "Feel like a balloon after normal meals? Your digestion might be running cold. One tea before meals may help. Free 5-min quiz."
  },
  "why-am-i-always-sleepy": {
    title: "Always Sleepy During the Day? Your Body Type Drains Your Battery",
    desc: "Can't stay awake even after sleeping? It might be your body type, not your sleep schedule. Simple foods may help. Free quiz."
  },
  "why-do-i-have-night-sweats": {
    title: "Night Sweats Every Night? Your Body Is Overheating From Within",
    desc: "Waking up drenched but the room isn't hot? Your body type may be running too warm internally. Cooling foods may help. Free quiz."
  },
  "why-do-i-feel-anxious": {
    title: "Anxious for No Reason? Your Chest Might Be Holding Something",
    desc: "Racing heart, tight chest, can't sit still? It might not be stress. Your body type could be the cause. Free 5-min quiz."
  },
  "why-do-i-have-brain-fog": {
    title: "Brain Fog Won't Lift? Your Body Type Might Be Clouding Your Mind",
    desc: "Can't think clearly? Forgetting what you were saying? Your body type might be the reason, not just lack of sleep. Free quiz."
  },
  "why-cant-i-fall-asleep": {
    title: "Can't Fall Asleep? Your Body Type Won't Let Your Mind Shut Off",
    desc: "Body exhausted but mind won't stop? It might be your body type running too hot. One calming tea may help. Free quiz."
  },
  "why-do-i-keep-gaining-weight": {
    title: "Keep Gaining Weight? It Might Not Be the Calories",
    desc: "Eating the same but the scale keeps climbing? Your body type might be holding water, not fat. Draining foods may help. Free quiz."
  },
  "why-are-my-moods-all-over-the-place": {
    title: "Mood Swings Out of Nowhere? Your Body Type Might Be the Storm",
    desc: "Fine one minute, furious the next? It might not be hormones alone. Your body type could be driving the swings. Free quiz."
  },
  "why-do-i-get-sick-so-often": {
    title: "Always Getting Sick? Your Body Type Might Have Weak Defenses",
    desc: "Catching every cold that goes around? Your body type might mean your immune shield has gaps. Simple foods may help. Free quiz."
  },
  "why-do-my-hands-and-feet-go-numb": {
    title: "Numb Hands and Feet? Your Circulation Might Be Too Slow",
    desc: "Tingling, numbness, pins and needles? Your body type might be why blood can't reach your extremities. Warming foods may help. Free quiz."
  },
  "why-is-my-skin-so-dry": {
    title: "Dry Skin That Lotion Won't Fix? The Problem Is From Within",
    desc: "Moisturizing every day and still flaky? Your body type might mean your internal hydration is empty. Certain foods may help. Free quiz."
  },
  "why-do-i-crave-sweets": {
    title: "Can't Stop Craving Sweets? Your Body Type Might Be Begging for Fuel",
    desc: "Need dessert every night? 3PM sugar crash? Your body type might be driving the craving, not your willpower. Free quiz."
  },
  "why-do-i-overthink-everything": {
    title: "Can't Stop Overthinking? Your Body Type Won't Let Your Mind Rest",
    desc: "Thoughts looping endlessly? Can't make decisions? Your body type might be why your brain won't power down. Free quiz."
  },
  "why-am-i-always-unmotivated": {
    title: "No Motivation? You're Not Lazy — Your Body Type Might Be Why",
    desc: "Can't get going no matter what? Your body type might mean your engine has fuel but no spark. Simple foods may help. Free quiz."
  },
  "why-do-i-keep-breaking-out": {
    title: "Breaking Out Nonstop? Your Skin Is an Exit Door for Internal Heat",
    desc: "Tried every skincare product? Your breakouts might be coming from inside. Cooling foods may help where creams can't. Free quiz."
  },
  "why-is-my-hair-falling-out": {
    title: "Hair Falling Out? Your Deepest Energy Reserves Might Be Running Low",
    desc: "More hair on your brush than your head? Your body type might be why. Nourishing foods may help from within. Free quiz."
  },
  "why-am-i-so-irritable": {
    title: "Always Irritable? Your Body Type Might Be the Short Fuse",
    desc: "Snapping at everyone? Everything annoys you? Your body type might be why patience feels impossible. Free 5-min quiz."
  },
  "why-cant-i-lose-weight": {
    title: "Can't Lose Weight? It Might Be Water, Not Fat",
    desc: "Dieting but the scale won't move? Your body type might be holding water, not fat. Draining foods may help. Free quiz."
  },
  "why-do-i-have-acid-reflux": {
    title: "Acid Reflux Won't Quit? Internal Heat Might Be Pushing It Up",
    desc: "Burning chest after meals? Your body type might be running too hot. Cooling foods may help where antacids only mask it. Free quiz."
  },
  "why-do-i-have-headaches": {
    title: "Frequent Headaches? Pressure Might Be Building From Within",
    desc: "Headaches keep coming back? Your body type might be why tension or heat is collecting in your head. Free quiz."
  },
  "why-do-i-feel-dizzy": {
    title: "Dizzy Spells? Your Brain Might Not Be Getting Enough Fuel",
    desc: "Lightheaded standing up? Room spinning? Your body type might be why energy can't reach your head. Free quiz."
  },
  "why-am-i-always-thirsty": {
    title: "Always Thirsty? Water Might Not Be the Answer",
    desc: "Can't quench your thirst no matter how much you drink? Your body type might be why moisture can't stay inside. Free quiz."
  },
  "why-do-i-have-lower-back-pain": {
    title: "Lower Back Pain? Your Deepest Energy Battery Might Be Draining",
    desc: "Back aches but nothing showed on the scan? Your body type might be why your foundation feels weak. Free quiz."
  },
  "why-do-i-have-eczema": {
    title: "Eczema Keeps Coming Back? The Trigger Might Be Inside",
    desc: "Cream after cream but it keeps returning? Your body type might be why heat and dampness push through your skin. Free quiz."
  },
  "why-do-i-sweat-so-much": {
    title: "Sweating Too Much? Your Internal Thermostat Might Be Stuck",
    desc: "Sweating through your shirt when others are fine? Your body type might be why your pores won't close. Free quiz."
  },
  "why-do-i-have-joint-pain": {
    title: "Aching Joints? Cold and Dampness Might Be Camping Inside",
    desc: "Joints ache but no arthritis? Your body type might be why stiffness settles in. Warming foods may help. Free quiz."
  },
  "why-am-i-always-thirsty-at-night": {
    title: "Thirsty All Night? Your Body Dries Out While You Sleep",
    desc: "Waking up parched every night? Your body type might be why your cooling system runs dry overnight. Free quiz."
  },
  "why-do-i-have-hot-flashes": {
    title: "Hot Flashes? Your Body Type Sends Heat Without Warning",
    desc: "Sudden heat rushing through your body? Your body type might be why your thermostat keeps spiking. Free quiz."
  },
  "why-do-i-have-water-retention": {
    title: "Puffy and Swollen? Your Body Might Be Holding Water It Can't Drain",
    desc: "Rings tight, face puffy, legs heavy? Your body type might be why your drainage system is clogged. Free quiz."
  },
  "why-am-i-always-constipated": {
    title: "Always Constipated? Your Intestines Might Not Have Enough Energy",
    desc: "Fiber and water but still stuck? Your body type might be why your digestion can't push things through. Free quiz."
  },
  "why-is-my-libido-low": {
    title: "Low Libido? Your Body's Deepest Fire Might Be Burning Low",
    desc: "Desire just disappeared? Your body type might be why your deepest energy reserves are running on empty. Free quiz."
  },
  "why-do-i-have-pms": {
    title: "Severe PMS Every Month? Your Body Type Might Be the Storm",
    desc: "Mood swings, bloating, cramps before every period? Your body type might be why PMS hits you so hard. Free quiz."
  },
  "why-is-my-metabolism-so-slow": {
    title: "Slow Metabolism? Your Internal Furnace Might Be Barely Lit",
    desc: "Eating less but still not losing weight? Your body type might be why your metabolism is stuck in first gear. Free quiz."
  },
  "why-do-i-have-poor-circulation": {
    title: "Poor Circulation? Your Blood River Might Have Too Many Dams",
    desc: "Cold hands, cold feet, bruises easily? Your body type might be why blood can't flow freely. Free quiz."
  },
  "why-do-i-have-seasonal-allergies": {
    title: "Allergies Won't Quit? Your Body Type Might Be Overreacting",
    desc: "Every spring your body fights pollen like a war? Your body type might be why your defenses overreact. Free quiz."
  },
  "why-do-i-have-dark-circles": {
    title: "Dark Circles Won't Go Away? It's Not Just Lack of Sleep",
    desc: "Sleeping fine but still look exhausted? Your body type might be why those shadows won't fade. Free quiz."
  },
  "why-am-i-always-hungry": {
    title: "Always Hungry? Your Body Might Not Be Absorbing What You Eat",
    desc: "Just ate but already thinking about food? Your body type might be why your stomach never sends the full signal. Free quiz."
  },
  "why-do-i-have-period-cramps": {
    title: "Painful Period Cramps? Cold Might Be Freezing the Flow",
    desc: "Curled up in bed every month? Your body type might be why cold and stuck blood makes your period painful. Free quiz."
  },
  "why-is-my-period-irregular": {
    title: "Irregular Periods? Your Body Clock Might Be Running Low on Energy",
    desc: "Never know when your period will come? Your body type might be why your cycle can't stay on schedule. Free quiz."
  },
  "why-is-my-period-so-heavy": {
    title: "Heavy Periods? Your Body Might Not Be Holding What It Should",
    desc: "Soaking through pads every month? Your body type might be why your body can't contain the flow. Free quiz."
  },
  "why-do-i-have-breast-tenderness": {
    title: "Breast Tenderness Before Your Period? Stuck Energy Might Be Pooling",
    desc: "Can't stand your bra the week before your period? Your body type might be why energy gets stuck in your chest. Free quiz."
  },
  "why-do-i-have-menopause-symptoms": {
    title: "Menopause Symptoms? Your Cooling and Warming Systems Might Be Off",
    desc: "Hot flashes, night sweats, mood swings? Your body type might be why the transition feels so rough. Free quiz."
  },
  "why-do-i-have-nausea": {
    title: "Always Nauseous? Your Stomach Energy Might Be Flowing the Wrong Way",
    desc: "Queasy for no clear reason? Your body type might be why your stomach keeps trying to reject food. Free quiz."
  },
  "why-do-i-have-diarrhea": {
    title: "Chronic Diarrhea? Your Digestion Might Be Running Too Fast or Too Hot",
    desc: "Always rushing to the bathroom? Your body type might be why your gut can't slow down. Free quiz."
  },
  "why-do-i-feel-sick-after-eating": {
    title: "Sick After Every Meal? Your Digestion Engine Might Be Stalling",
    desc: "Eating used to feel fine but now it doesn't? Your body type might be why your stomach can't process fuel. Free quiz."
  },
  "why-do-i-have-bad-breath": {
    title: "Bad Breath Won't Go Away? The Problem Might Be In Your Stomach",
    desc: "Brushing and mouthwash but still can't fix it? Your body type might be why heat is cooking inside. Free quiz."
  },
  "why-is-my-face-so-oily": {
    title: "Oily Face by Noon? Internal Heat Might Be Pushing Oil Out",
    desc: "Wash your face and it's oily again? Your body type might be why your skin acts like a grease factory. Free quiz."
  },
  "why-do-i-have-rosacea": {
    title: "Rosacea Won't Fade? Blood and Heat Might Be Trapped in Your Face",
    desc: "Red flushed cheeks that won't go away? Your body type might be why heat collects in your face. Free quiz."
  },
  "why-do-i-have-brittle-nails": {
    title: "Brittle Nails? Your Blood Might Not Be Reaching the Edges",
    desc: "Nails splitting and peeling no matter what? Your body type might be why nourishment can't reach your fingertips. Free quiz."
  },
  "why-is-my-complexion-dull": {
    title: "Dull Complexion? Your Glow Might Be Blocked From Within",
    desc: "Face looks tired and gray even when you're not? Your body type might be why blood can't reach the surface. Free quiz."
  },
  "why-do-i-have-cellulite": {
    title: "Stubborn Cellulite? Dampness Might Be Pooling Under Your Skin",
    desc: "Cellulite that won't budge despite exercise? Your body type might be why moisture collects under the surface. Free quiz."
  },
  "why-do-i-have-neck-pain": {
    title: "Chronic Neck Pain? Stuck Energy Might Be Knotting Your Muscles",
    desc: "Stiff neck that never relaxes? Your body type might be why tension keeps collecting there. Free quiz."
  },
  "why-are-my-shoulders-always-tense": {
    title: "Shoulders Always Tense? Stress Might Be Camping In Your Body",
    desc: "Shoulders living up near your ears? Your body type might be why stress locks into your muscles. Free quiz."
  },
  "why-do-i-have-stomach-pain": {
    title: "Stomach Pain With No Clear Cause? Your Body Is Sending a Signal",
    desc: "Stomach hurts but tests come back normal? Your body type might be why your gut keeps sounding alarms. Free quiz."
  },
  "why-am-i-always-stiff": {
    title: "Always Stiff? Cold and Dampness Might Be Freezing Your Joints",
    desc: "Body feels like concrete every morning? Your body type might be why your joints won't loosen up. Free quiz."
  },
  "why-do-i-keep-forgetting-things": {
    title: "Keep Forgetting Things? Your Brain Might Not Be Getting Enough Fuel",
    desc: "Walking into rooms and forgetting why? Your body type might be why your memory feels like a sieve. Free quiz."
  },
  "why-cant-i-focus": {
    title: "Can't Focus? Dampness Might Be Fogging Your Mental Windshield",
    desc: "Reading the same paragraph three times? Your body type might be why your attention keeps slipping. Free quiz."
  },
  "why-do-i-cry-so-easily": {
    title: "Cry Too Easily? Your Heart's Energy Might Be Fragile and Overflowing",
    desc: "Tears at commercials and small things? Your body type might be why your emotions spill over so fast. Free quiz."
  },
  "why-do-i-have-no-patience": {
    title: "No Patience? Your Body Type Might Be Behind the Short Fuse",
    desc: "Everything and everyone testing your patience? Your body type might be why you can't wait for anything. Free quiz."
  },
  "why-do-i-have-a-chronic-cough": {
    title: "Chronic Cough Won't Stop? Your Lungs Might Be Dry and Irritated",
    desc: "Coughing for weeks and nothing helps? Your body type might be why internal heat keeps your throat irritated. Free quiz."
  },
  "why-do-i-always-have-a-sore-throat": {
    title: "Sore Throat Keeps Coming Back? Internal Heat Might Be Burning Below",
    desc: "Throat always scratchy or raw? Your body type might be why heat keeps rising to your throat. Free quiz."
  },
  "why-do-i-have-post-nasal-drip": {
    title: "Post-Nasal Drip? Dampness Might Be Dripping From Your Sinuses",
    desc: "Always clearing your throat? Your body type might be why mucus keeps collecting in the back. Free quiz."
  },
  "why-do-i-wake-up-to-pee": {
    title: "Waking Up to Pee Every Night? Your Kidney's Water Gate Might Be Leaking",
    desc: "Two, three times a night? Your body type might be why your bladder can't hold through the night. Free quiz."
  },
  "why-do-i-have-tinnitus": {
    title: "Ringing in Your Ears? Your Deepest Energy Might Be Too Low",
    desc: "That buzzing nobody else can hear? Your body type might be why your ears won't go quiet. Free quiz."
  },
  "why-am-i-so-sensitive-to-heat": {
    title: "Always Too Hot? Your Body's Cooling System Might Be Broken",
    desc: "Everyone else is fine but you're melting? Your body type might be why your internal AC can't keep up. Free quiz."
  },
  "why-do-i-wake-up-tired": {
    title: "Wake Up Tired After 8 Hours? Your Body Might Not Be Recharging",
    desc: "Slept all night but still feel drained? Your body type might be why rest doesn't equal recovery. Free quiz."
  },
  "why-do-i-have-cold-sweats": {
    title: "Cold Sweats for No Reason? Your Body Might Be Leaking Warmth",
    desc: "Sweating but feeling cold? Your body type might be why your body can't hold onto its own heat. Free quiz."
  },
}

export { META_UPDATES }
