import fs from 'node:fs'
import path from 'node:path'

const TITLE_MAP = {
  'why-am-i-always-hungry': 'Why Am I Always Hungry? The Stomach That Never Feels Full',
  'why-am-i-always-stiff': 'Why Am I Always Stiff? The Body That Forgot How to Bend',
  'why-am-i-so-sensitive-to-heat': 'Why Am I So Sensitive to Heat? The AC That Broke Down',
  'why-are-my-shoulders-always-tense': 'Why Are My Shoulders Always Tense? The Earrings You Never Asked For',
  'why-cant-i-focus': "Why Can't I Focus? The Attention That Keeps Changing Channels",
  'why-do-i-always-have-a-sore-throat': 'Why Do I Always Have a Sore Throat? The Fire in the Chimney',
  'why-do-i-cry-so-easily': 'Why Do I Cry So Easily? The Faucet With No Off Switch',
  'why-do-i-feel-sick-after-eating': 'Why Do I Feel Sick After Eating? The Welcome Mat Your Stomach Pulled In',
  'why-do-i-have-a-chronic-cough': 'Why Do I Have a Chronic Cough? The Tickles That Set Up Residence',
  'why-do-i-have-bad-breath': 'Why Do I Have Bad Breath? The Fire Down Below That Rises to the Top',
  'why-do-i-have-breast-tenderness': 'Why Do I Have Breast Tenderness? The Swelling Before the Storm',
  'why-do-i-have-brittle-nails': 'Why Do I Have Brittle Nails? The Twigs at Your Fingertips',
  'why-do-i-have-cellulite': 'Why Do I Have Cellulite? The Dimples That Moved In and Stayed',
  'why-do-i-have-cold-sweats': 'Why Do I Have Cold Sweats? The Chill That Comes With the Drip',
  'why-do-i-have-dark-circles': "Why Do I Have Dark Circles? The Shadows Sleep Won't Erase",
  'why-do-i-have-diarrhea': 'Why Do I Have Diarrhea? The Pipe That Flushes Too Fast',
  'why-do-i-have-menopause-symptoms': 'Why Do I Have Menopause Symptoms? The Transition That Changes Everything',
  'why-do-i-have-nausea': 'Why Do I Have Nausea? The Stomach That Keeps Threatening to Strike',
  'why-do-i-have-neck-pain': 'Why Do I Have Neck Pain? The Pillar That Carries Too Much',
  'why-do-i-have-no-patience': "Why Do I Have No Patience? The Fuse That's Always Short",
  'why-do-i-have-period-cramps': 'Why Do I Have Period Cramps? The Monthly Siege No One Talks About',
  'why-do-i-have-pms': 'Why Do I Have PMS? The Monthly Storm Before the Calm',
  'why-do-i-have-poor-circulation': "Why Do I Have Poor Circulation? When Blood Can't Reach Where It Needs To",
  'why-do-i-have-post-nasal-drip': 'Why Do I Have Post-Nasal Drip? The Drip That Never Stops',
  'why-do-i-have-rosacea': 'Why Do I Have Rosacea? The Blush That Never Fades',
  'why-do-i-have-seasonal-allergies': 'Why Do I Have Seasonal Allergies? The Defense System That Overreacts',
  'why-do-i-have-stomach-pain': 'Why Do I Have Stomach Pain? The Alarm Bell Nobody Can Find',
  'why-do-i-have-tinnitus': 'Why Do I Have Tinnitus? The Bell Nobody Else Can Hear',
  'why-do-i-keep-forgetting-things': 'Why Do I Keep Forgetting Things? The Sieve Between Your Ears',
  'why-do-i-wake-up-tired': "Why Do I Wake Up Tired? The Rest That Doesn't Restore",
  'why-do-i-wake-up-to-pee': "Why Do I Wake Up to Pee? The Bladder's Night Shift",
  'why-is-my-complexion-dull': 'Why Is My Complexion Dull? The Light Behind the Glass That Dimmed',
  'why-is-my-face-so-oily': "Why Is My Face So Oily? The Faucet That Won't Stop Dripping",
  'why-is-my-libido-low': 'Why Is My Libido Low? The Flame That Quietly Went Out',
  'why-is-my-metabolism-so-slow': 'Why Is My Metabolism So Slow? The Engine Running on Low',
  'why-is-my-period-irregular': 'Why Is My Period Irregular? The Clock That Lost Its Rhythm',
  'why-is-my-period-so-heavy': "Why Is My Period So Heavy? The Flow That Won't Slow Down",
}

const base = 'D:/EastType/easttype-app/src/app/symptoms'
let updated = 0
let skipped = 0

for (const [slug, newTitle] of Object.entries(TITLE_MAP)) {
  const pagePath = path.join(base, slug, 'page.tsx')
  if (!fs.existsSync(pagePath)) {
    console.log('MISSING: ' + slug)
    continue
  }
  let content = fs.readFileSync(pagePath, 'utf8')
  
  const oldTitleRegex = /const TITLE = "[^"]*Eastern Body Type Insights"/
  if (oldTitleRegex.test(content)) {
    content = content.replace(oldTitleRegex, 'const TITLE = "' + newTitle + '"')
    fs.writeFileSync(pagePath, content, 'utf8')
    updated++
  } else {
    console.log('NO MATCH: ' + slug)
    skipped++
  }
}

console.log('Updated: ' + updated + ', Skipped: ' + skipped)
