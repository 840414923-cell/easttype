import type { ConstitutionId } from "./types"

export interface TypeDetail {
  selfCheck: { en: string; "zh-TW": string; ja: string }[]
  essence: { en: string; "zh-TW": string; ja: string }
  bodyStory: { en: string; "zh-TW": string; ja: string }
}

export const TYPE_DETAILS: Record<ConstitutionId, TypeDetail> = {
  balanced: {
    essence: {
      en: "You are the rare baseline — the constitution all others deviate from. Your body self-regulates, your emotions flow without blocking, and your energy stays steady through seasons and stress.",
      "zh-TW": "你是罕見的基準體質 — 所有其他體質都是從你這裡偏移出去的。你的身體能自我調節，情緒流動不阻塞，能量在季節和壓力中保持穩定。",
      ja: "あなたは稀な基準体質 — 他のすべての体質はここから外れたもの。体は自己調節し、感情は滞りなく流れ、季節やストレスを通じてエネルギーは安定しています。",
    },
    bodyStory: {
      en: "You sleep well, eat without drama, and rarely get sick. People come to you in crisis because you stay calm. You don't understand the obsession with supplements or wellness trends — your body just works.",
      "zh-TW": "你睡得好，吃飯不折騰，很少生病。別人在危機時找你，因為你總是冷靜的。你不理解大家為什麼迷保健食品或養生潮流 — 你的身體就是好好的。",
      ja: "よく眠れ、食事も問題なく、めったに病気になりません。危機の時、人々はあなたを頼ります — あなたは冷静だから。サプリやウェルネスブームへの執着が理解できない — 体はただ動いている。",
    },
    selfCheck: [
      { en: "I sleep through the night and wake up refreshed", "zh-TW": "我一覺到天亮，醒來精神好", ja: "朝までぐっすり眠れて、目覚めが良い" },
      { en: "I adapt easily to weather and season changes", "zh-TW": "我很容易適應天氣和季節變化", ja: "天候や季節の変化にすぐ適応できる" },
      { en: "My mood stays relatively stable day to day", "zh-TW": "我的情緒日復一日保持穩定", ja: "日々の気分が比較的安定している" },
      { en: "I rarely get colds or digestive issues", "zh-TW": "我很少感冒或消化不良", ja: "風邪や消化不良はめったにない" },
      { en: "I don't crave specific foods or have strong aversions", "zh-TW": "我不特別渴望某種食物，也沒有強烈忌口", ja: "特定の食べ物への強い渇望や嫌悪がない" },
    ],
  },

  qi_deficient: {
    essence: {
      en: "Your engine runs, but the tank is always low. Qi is your body's fuel — and yours never seems to fill up. You function, but everything costs more energy than it should.",
      "zh-TW": "你的引擎在轉，但油箱永遠是低的。氣是你身體的燃料 — 而你的似乎永遠加不滿。你能運作，但每件事都比別人多花力氣。",
      ja: "エンジンは回るけど、タンクはいつも空に近い。気は体の燃料 — あなたのはいつも満タンにならない。機能するけど、すべてが人よりエネルギーを要する。",
    },
    bodyStory: {
      en: "You've mastered the art of looking fine while running on empty. By 3 PM you're mentally drafting your resignation. You fall asleep on the couch but can't stay asleep. People say 'just exercise more' and you want to scream.",
      "zh-TW": "你精通了空著油箱裝沒事的藝術。下午三點你就在心裡寫辭職信了。你在沙發上睡著但半夜又醒。別人說「多運動就好了」，你很想尖叫。",
      ja: "空っぽなのに元気なふりをするのが上手。午後3時には心の中で退職届を書いている。ソファで眠るけど深夜に目が覚める。「もっと運動すれば」と言われて叫びたい。",
    },
    selfCheck: [
      { en: "I get tired easily, even after a full night's sleep", "zh-TW": "即使睡滿了，我還是容易累", ja: "十分眠ってもすぐ疲れる" },
      { en: "I prefer sitting over standing whenever possible", "zh-TW": "能坐就不站", ja: "立てるなら座りたい" },
      { en: "My voice is soft and I speak less than I think", "zh-TW": "我的聲音輕柔，想的比說的多", ja: "声は小さめ、考える方が話すより多い" },
      { en: "I catch colds more often than others", "zh-TW": "我比別人更容易感冒", ja: "人より風邪をひきやすい" },
      { en: "I sweat easily, even with light activity", "zh-TW": "稍微活動就容易出汗", ja: "少し動くとすぐ汗をかく" },
    ],
  },

  yang_deficient: {
    essence: {
      en: "Your inner furnace is underpowered. Yang is your body's warmth and fire — without enough of it, everything runs cold and slow. Sunlight isn't just nice for you; it's medicine.",
      "zh-TW": "你的內在火爐功率不足。陽是你身體的溫暖和火力 — 不夠的話，一切都又冷又慢。陽光對你不只是舒服，是藥藥。",
      ja: "内側の暖炉の出力が足りない。陽は体の温かさと火 — 足りないと、すべてが冷たく遅くなる。日光は快適さだけでなく、薬です。",
    },
    bodyStory: {
      en: "You have a personal vendetta against whoever invented air conditioning. Your hands and feet are ice blocks by November. You drink your drinks hot, wear layers in summer, and dream of moving to a tropical island.",
      "zh-TW": "你跟發明冷氣的人有私人恩怨。十一月你的手腳就變成冰塊了。飲料只喝熱的，夏天也穿好幾層，夢想搬到熱帶島嶼。",
      ja: "エアコンを発明した人を個人的に許していない。11月には手足が氷塊。飲み物はホットだけ、夏でも重ね着、南の島への移住を夢見る。",
    },
    selfCheck: [
      { en: "My hands and feet are often cold, especially in winter", "zh-TW": "我的手腳常常冰冷，尤其是冬天", ja: "手足がよく冷たい、特に冬" },
      { en: "I prefer hot food and drinks over cold ones", "zh-TW": "我偏好熱食熱飲，不愛冷的", ja: "冷たいものより温かい食事・飲み物が好き" },
      { en: "I feel worse in cold or damp weather", "zh-TW": "冷或潮濕的天氣讓我更不舒服", ja: "寒さや湿気で調子が悪くなる" },
      { en: "I urinate frequently, especially at night", "zh-TW": "我頻尿，尤其是夜間", ja: "トイレが近い、特に夜" },
      { en: "I have lower back or knee soreness that worsens with cold", "zh-TW": "我有腰膝酸痛，遇冷加重", ja: "腰や膝がだるく、冷えると悪化" },
    ],
  },

  yin_deficient: {
    essence: {
      en: "Your surface is calm water; underneath, magma. Yin is your body's cooling, moistening force — when it's low, heat builds up inside. You look serene but feel like a slow-burning ember.",
      "zh-TW": "你的表面是平靜的水；底下是岩漿。陰是你身體的降溫和潤澤力 — 不足時，內熱堆積。你看起來淡定，但感覺像一塊慢燒的炭。",
      ja: "表面は穏やかな水、その下にマグマ。陰は体の冷却・潤い力 — 足りないと内熱が蓄積。穏やかに見えて、中はゆっくり燃える炭。",
    },
    bodyStory: {
      en: "You're the person who reheats the same tea four times because you keep forgetting it. Your best ideas come at midnight, your worst decisions at noon. You're drawn to calm people because they cool you down — literally and emotionally.",
      "zh-TW": "你是那種把同一杯茶熱了四次的人，因為老是忘記喝。最好的點子在半夜，最差的決定在中午。你被冷靜的人吸引，因為他們能讓你降溫 — 物理上和心理上都是。",
      ja: "同じお茶を4回温め直す人。最高のアイデアは深夜、最悪の決断は昼。冷静な人に惹かれる — 物理的にも感情的にも冷やしてくれるから。",
    },
    selfCheck: [
      { en: "I feel warm or flushed, especially in the afternoon and evening", "zh-TW": "我覺得熱或臉紅，尤其是下午和晚上", ja: "特に午後から夜にかけて暑い・のぼせる" },
      { en: "My mouth and throat feel dry, even after drinking water", "zh-TW": "我的口和喉嚨常覺得乾，喝水也沒用", ja: "水を飲んでも口や喉が乾く" },
      { en: "I have trouble staying asleep — I wake up in the night", "zh-TW": "我睡不沉 — 半夜會醒", ja: "眠りが浅い — 夜中に目が覚める" },
      { en: "I prefer cold food and drinks over hot ones", "zh-TW": "我偏好冷食冷飲，不愛熱的", ja: "温かいものより冷たい食事・飲み物が好き" },
      { en: "My skin or eyes sometimes feel dry and irritated", "zh-TW": "我的皮膚或眼睛有時乾澀不適", ja: "肌や目が乾いてイライラすることがある" },
    ],
  },

  phlegm_damp: {
    essence: {
      en: "Your body holds onto moisture like a sponge. Phlegm-Damp is sluggish, heavy, and slow to change. Your mind is sharp but your body moves at its own pace — and that pace is leisurely.",
      "zh-TW": "你的身體像海綿一樣留住水分。痰濕是遲緩的、沉重的、不易改變的。你的腦子靈光，但身體有自己的節奏 — 而那個節奏是慢的。",
      ja: "体はスポンジのように水分を抱え込む。痰湿は遅鈍で重く、変化が遅い。頭は冴えているが体は独自のペースで動く — そしてそのペースはゆっくり。",
    },
    bodyStory: {
      en: "Your bed has a gravitational pull stronger than Jupiter. You've been told 'just exercise more' more times than you can count. Your love language is 'I made you food, now let's sit.' You move through the world like water — slow, steady, impossible to rush.",
      "zh-TW": "你的床的引力比木星還大。你被說過「多運動就好了」的次數多到數不清。你的愛之語言是「我做了飯，然後我們坐著。」你像水一樣穿越世界 — 慢、穩、無法催促。",
      ja: "ベッドの引力は木星より強い。「もっと運動すれば」と言われすぎた。愛の言葉は『ご飯作った、座ろう』。水のように世界を進む — 遅く、着実に、急がせない。",
    },
    selfCheck: [
      { en: "I feel heavy and sluggish, especially in the morning", "zh-TW": "我覺得身體沉重遲緩，尤其是早上", ja: "体が重くだるい、特に朝" },
      { en: "I tend to gain weight easily and lose it slowly", "zh-TW": "我容易發胖，減肥很慢", ja: "太りやすく、痩せにくい" },
      { en: "I feel sticky or humid inside, especially in damp weather", "zh-TW": "我覺得體內黏膩，尤其是潮濕天氣", ja: "体の中がネバネバする、特に湿気の多い日" },
      { en: "I often have a coated tongue or phlegm in my throat", "zh-TW": "我常有舌苔厚或喉嚨有痰", ja: "舌に厚い苔がつく、喉に痰がからむ" },
      { en: "I prefer sitting and resting over physical activity", "zh-TW": "我偏好坐著休息，不愛運動", ja: "運動より座って休む方が好き" },
    ],
  },

  damp_heat: {
    essence: {
      en: "Intensity is your default setting. Damp-Heat is like a tropical greenhouse inside your body — sticky, warm, and charged. You run hot and heavy simultaneously, and it shows.",
      "zh-TW": "強烈是你的出廠設定。濕熱像體內的熱帶溫室 — 黏膩、溫熱、充滿能量。你同時又熱又重，而且藏不住。",
      ja: "激しさがデフォルト。湿熱は体内の熱帯温室 — ネバネバし、温かく、チャージされている。熱と重さが同時に走り、それが表に出る。",
    },
    bodyStory: {
      en: "You walk into a room and people either love you or need a minute. You've been told 'you're a lot' at least 17 times. Your skin breaks out when you're stressed, you can't tolerate heat, and your patience has a very short fuse.",
      "zh-TW": "你走進一個房間，人們要嘛愛死你要嘛需要冷靜一下。你這輩子被說過「你真的很有事」至少17次。壓力大就長痘，受不了熱，耐心很短。",
      ja: "部屋に入ると、みんな惹かれるか一度深呼吸が必要。人生で「お前、濃いな」と17回は言われた。ストレスで肌が荒れ、暑さに耐えられず、忍耐は短い。",
    },
    selfCheck: [
      { en: "I feel hot and sticky, especially in warm or humid weather", "zh-TW": "我覺得又熱又黏，尤其是溫暖潮濕的天氣", ja: "暑くネバネバする、特に蒸し暑い日" },
      { en: "I'm prone to acne, rashes, or skin redness", "zh-TW": "我容易長痘、起疹或皮膚泛紅", ja: "ニキビ、発疹、赤みが出やすい" },
      { en: "I have a bitter or sticky taste in my mouth in the morning", "zh-TW": "早上起來嘴裡有苦味或黏膩感", ja: "朝起きると口が苦い・ネバネバする" },
      { en: "I feel irritable and impatient when it's hot", "zh-TW": "天熱時我容易煩躁不耐煩", ja: "暑いとイライラし、せっかちになる" },
      { en: "My urine is dark and concentrated, especially in summer", "zh-TW": "我的尿色深而濃，尤其是夏天", ja: "尿が濃く色が濃い、特に夏" },
    ],
  },

  blood_stasis: {
    essence: {
      en: "Everything flows — just not fast enough. Blood Stasis means your circulation is sluggish, leaving dark marks, dull pain, and a sense of being stuck. You hold onto things, physically and emotionally.",
      "zh-TW": "一切都在流 — 只是流得不夠快。血瘀意味你的循環遲緩，留下暗沉、鈍痛和一種卡住的感覺。你抓著東西不放，身體上和情感上都是。",
      ja: "すべては流れる — ただ速さが足りない。血瘀は循環の滞り、暗い痕、鈍い痛み、閉塞感。あなたは手放せない — 物理的にも感情的にも。",
    },
    bodyStory: {
      en: "You remember every slight from 2009 and you WILL bring it up. You love deeply, forgive slowly, and never forget a birthday — or an argument. That bruise on your leg has been there so long you've named it. Your skin has a duskiness others notice.",
      "zh-TW": "你記得2009年每一次被得罪的細節，而且你會提起。你愛得很深、原諒得很慢、永遠不忘記生日（和吵架）。腿上那個瘀青太久你幫它取了名字。你的膚色有一種別人注意到的暗沉。",
      ja: "2009年のすべての恨みを覚えてて、必ず話題にする。深く愛し、ゆっくり許し、誕生日も喧嘩も絶対忘れない。足のあざ、もう名前つけた。肌には人目を引く暗さがある。",
    },
    selfCheck: [
      { en: "I bruise easily and marks take a long time to fade", "zh-TW": "我容易瘀青，痕跡很久才退", ja: "あざができやすく、消えるのに時間がかかる" },
      { en: "I have dull, fixed pain (especially during my period)", "zh-TW": "我有固定位置的鈍痛（尤其是經期）", ja: "鈍い固定痛がある（特に生理中）" },
      { en: "My lips or nail beds look darker than others'", "zh-TW": "我的嘴唇或指甲床比別人暗", ja: "唇や爪床が人より暗い色" },
      { en: "I have dark spots or a dull complexion", "zh-TW": "我有暗沉斑或膚色暗啞", ja: "シミやくすんだ肌色がある" },
      { en: "I feel emotionally stuck — I hold onto grievances", "zh-TW": "我情感上卡住 — 放不下委屈", ja: "感情的に滞る — 恨みを手放せない" },
    ],
  },

  qi_stagnant: {
    essence: {
      en: "Your mind races while your body stalls. Qi Stagnation is the constitution of the overthinker — energy builds up but can't flow freely. The result? Tension, sighing, and a body that carries your mind's weight.",
      "zh-TW": "你的腦子狂奔，身體卻卡住。氣鬱是過度思考者的體質 — 能量堆積但無法自由流動。結果？緊繃、嘆息，和一個承載著思想重量的身體。",
      ja: "頭は猛スピードで回るのに体はストップ。気鬱は考えすぎる人の体質 — エネルギーは蓄積するが自由に流れない。結果？緊張、ため息、心の重さを背負う体。",
    },
    bodyStory: {
      en: "You've written and deleted the same email 12 times. You fall in love with people you can have 3-hour conversations with at 2 AM. You've sighed so deeply today that your cat looked concerned. Your chest feels tight, your mood swings like a pendulum, and everyone asks 'are you okay?'",
      "zh-TW": "你把同一封 email 寫了又刪了12次。你會愛上那些能跟你凌晨兩點聊三小時的人。你今天嘆氣嘆得太深，你的貓都一臉擔心。胸口悶、情緒像鐘擺、每個人都問「你還好嗎？」",
      ja: "同じメールを12回書いては消した。深夜2時に3時間話せる人に恋する。今日、ため息つきすぎて猫が心配した。胸が苦しい、気分は振り子、みんな「大丈夫？」と聞く。",
    },
    selfCheck: [
      { en: "I often feel a tightness or heaviness in my chest", "zh-TW": "我常覺得胸悶或胸口沉重", ja: "胸が苦しい・重いことがよくある" },
      { en: "I sigh frequently without realizing it", "zh-TW": "我常常不知不覺就嘆氣", ja: "無意識にため息をつくことが多い" },
      { en: "My mood fluctuates — easily frustrated, then withdrawn", "zh-TW": "我的情緒起伏大 — 易怒然後又退縮", ja: "気分の波が大きい — イライラしてから引きこもる" },
      { en: "I overthink decisions and second-guess myself constantly", "zh-TW": "我過度思考決定，不斷自我懷疑", ja: "決断を考えすぎ、常に自己疑問する" },
      { en: "I feel better after crying or venting", "zh-TW": "哭一場或發洩後我會好一些", ja: "泣いたり吐き出したりすると楽になる" },
    ],
  },

  sensitive: {
    essence: {
      en: "You feel everything everyone else doesn't. The Sensitive constitution reacts to the world with extraordinary intensity — smells, textures, temperatures, emotions. Your threshold is lower, but your perception is deeper.",
      "zh-TW": "你感受到別人感受不到的一切。特稟體質對世界的反應強度非凡 — 氣味、觸感、溫度、情緒。你的閾值更低，但你的感知更深。",
      ja: "他人が感じないものをすべて感じる。特稟体質は世界に並外れた強度で反応 — 匂い、触感、温度、感情。閾値は低いが、知覚は深い。",
    },
    bodyStory: {
      en: "You can tell when the office vibe changes before anyone says anything. You need 2–3 dates to decide if someone's energy is compatible with yours. You can smell someone's new laundry detergent from across the room. Spring makes you sneeze, dust makes you itch, and strong perfume is an assault.",
      "zh-TW": "你能比任何人更早感覺到辦公室的氣氛變了。你需要2-3次約會才能決定某人的能量場是否與你相容。你能從房間另一頭聞到別人換了洗衣精。春天讓你打噴嚏、灰塵讓你癢、濃香水是攻擊。",
      ja: "オフィスの空気が変わったのを誰より早く察知する。デート2-3回しないと相手のエネルギーが合うか判断できない。部屋の向こう側の新しい柔軟剤の匂いがわかる。春はくしゃみ、埃は痒み、強い香水は攻撃。",
    },
    selfCheck: [
      { en: "I have allergies or sensitivities others don't seem to have", "zh-TW": "我有別人似乎沒有的過敏或敏感", ja: "他人にはないアレルギーや過敏さがある" },
      { en: "I react strongly to smells, sounds, or textures", "zh-TW": "我對氣味、聲音或觸感反應強烈", ja: "匂い、音、触感に強く反応する" },
      { en: "I get hives, rashes, or itching easily", "zh-TW": "我容易起蕁麻疹、疹子或發癢", ja: "蕁麻疹、発疹、痒みが出やすい" },
      { en: "Weather changes trigger symptoms (sneezing, congestion, itch)", "zh-TW": "天氣變化會引發症狀（打噴嚏、鼻塞、癢）", ja: "天候変化で症状が出る（くしゃみ、鼻詰まり、痒み）" },
      { en: "I'm emotionally sensitive — I absorb others' moods", "zh-TW": "我情感敏感 — 我會吸收別人的情緒", ja: "感情的に敏感 — 他人の気分を吸収する" },
    ],
  },
}
