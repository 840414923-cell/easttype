import type { ConstitutionId } from "./types"

export interface TypeViral {
  nickname: string
  cardHeadline: string
  tagSomeone: string
  predictions: [string, string, string]
}

export const TYPE_VIRAL: Record<ConstitutionId, TypeViral> = {
  balanced: {
    nickname: "The Annoyingly Normal Person",
    cardHeadline: "You've never understood those 'I need a vacation' posts",
    tagSomeone: "@ that friend who seems to have it all figured out",
    predictions: [
      "You'll pretend to be stressed so your coworkers don't hate you",
      "Your partner secretly suspects you're an alien because nothing bothers you",
      "You've never understood those 'I need a vacation' posts",
    ],
  },
  qi_deficient: {
    nickname: "5% Battery Life",
    cardHeadline: "Your battery icon is always red",
    tagSomeone: "@ that friend who's always tired",
    predictions: [
      "You've mentally drafted your resignation at 10 AM every Monday this year",
      "You fall in love with people who have energy (because you want to absorb it)",
      "Your ideal workout is 'a gentle stroll to the mailbox'",
    ],
  },
  yang_deficient: {
    nickname: "Human Space Heater Required",
    cardHeadline: "You have a personal vendetta against air conditioning",
    tagSomeone: "@ that friend who's always cold",
    predictions: [
      "You have a personal vendetta against whoever invented air conditioning",
      "You're the partner who wants to cuddle under three blankets in July",
      "You've considered moving to a country that doesn't have winter",
    ],
  },
  yin_deficient: {
    nickname: "Looks Zen, Actually Volcano",
    cardHeadline: "You've reheated the same tea four times today",
    tagSomeone: "@ your late-night overthinking buddy",
    predictions: [
      "Your best ideas come at midnight and your worst decisions come at noon",
      "You're attracted to calm people because they cool you down (literally and emotionally)",
      "You've reheated the same cup of tea four times today",
    ],
  },
  phlegm_damp: {
    nickname: "Walking Sponge",
    cardHeadline: "Your bed has a gravitational pull stronger than Jupiter",
    tagSomeone: "@ that friend whose bed is their best friend",
    predictions: [
      "You've been told 'just exercise more' so many times you want to scream",
      "Your love language is 'I made you food, now let's sit'",
      "Your bed has a gravitational pull stronger than Jupiter",
    ],
  },
  damp_heat: {
    nickname: "Human Humidifier",
    cardHeadline: "You've been told 'you're a lot' at least 17 times",
    tagSomeone: "@ the most intense person you know",
    predictions: [
      "You walk into a room and people either love you or need a minute",
      "Your exes still think about you (and their dermatologist bills)",
      "You've been told 'you're a lot' at least 17 times in your life",
    ],
  },
  blood_stasis: {
    nickname: "Bruise Named Kevin",
    cardHeadline: "You still have a bruise from 2019",
    tagSomeone: "@ that friend who remembers every detail from 2019",
    predictions: [
      "You remember every slight from 2009 and you WILL bring it up",
      "You love deeply, forgive slowly, and never forget a birthday (or an argument)",
      "You've had that one bruise on your leg for so long you've named it",
    ],
  },
  qi_stagnant: {
    nickname: "Professional Deep Sigher",
    cardHeadline: "You've sighed so deeply your cat looked concerned",
    tagSomeone: "@ that friend who sighs in every conversation",
    predictions: [
      "You've written and deleted the same email 12 times",
      "You fall in love with people you can have 3-hour conversations with at 2 AM",
      "You've sighed so deeply today that your cat looked concerned",
    ],
  },
  sensitive: {
    nickname: "Can Smell WiFi",
    cardHeadline: "You can smell someone's new laundry detergent from across the room",
    tagSomeone: "@ that friend who can tell when something's off before anyone else",
    predictions: [
      "You can tell when the office vibe changes before anyone says anything",
      "You need 2–3 dates to decide if someone's energy is compatible with yours",
      "You can smell someone's new laundry detergent from across the room",
    ],
  },
}
