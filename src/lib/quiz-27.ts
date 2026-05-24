import type { ConstitutionId } from "./types"

export type LikertQuestion = {
  constitution: ConstitutionId
  q: {
    en: string
    "zh-TW": string
    ja: string
  }
  theory: {
    en: string
    "zh-TW": string
    ja: string
  }
  bridge: {
    en: string
    "zh-TW": string
    ja: string
  }
  reverse?: boolean
}

export const QUIZ_27: LikertQuestion[] = [
  {
    constitution: "balanced",
    reverse: true,
    q: {
      en: "You wake up feeling rested, and your energy stays fairly steady from morning to night — no dramatic crashes or caffeine emergencies.",
      "zh-TW": "你早上醒來感覺充分休息，精力從早到晚都差不多穩定——不會突然崩潰或急需咖啡因救命。",
      ja: "朝起きたとき十分休めたと感じ、朝から晩までエネルギーが安定している — 急なクラッシュやカフェインの緊急補給が必要にならない。",
    },
    theory: {
      en: "Stable energy throughout the day indicates smooth Qi flow and harmonious organ function — the hallmark of a balanced constitution (平和質).",
      "zh-TW": "全天精力穩定代表氣血運行順暢、臟腑協調——這是平和質的核心特徵。",
      ja: "一日を通してエネルギーが安定していることは、気がスムーズに流れ、臓器が調和している証拠 — 平和体質の中心的な特徴です。",
    },
    bridge: {
      en: "Think of your body like a well-tuned car — no engine lights, no weird noises, just smooth cruising from morning to night.",
      "zh-TW": "把你的身體想像成一輛調校良好的車——沒有引擎燈亮、沒有奇怪的噪音，從早到晚順暢巡航。",
      ja: "体をよく調整された車のように想像してみて — 警告灯も変な音もなく、朝から晩までスムーズに走る感じ。",
    },
  },
  {
    constitution: "balanced",
    reverse: true,
    q: {
      en: "You fall asleep within 20 minutes of getting into bed, and when you wake up, you actually feel like you slept — not like you just closed your eyes for a second.",
      "zh-TW": "你躺在床上20分鐘內就能睡著，醒來的時候真的覺得自己睡過了——而不是覺得只是閉了一下眼睛。",
      ja: "ベッドに入って20分以内に眠りにつき、目覚めたとき本当に眠ったと感じる — 一瞬だけ目を閉じたような感覚ではない。",
    },
    theory: {
      en: "The Heart houses the Spirit (Shen). When Heart-blood is sufficient and Yin-Yang transition naturally, deep sleep and refreshed waking follow — the sign of internal harmony.",
      "zh-TW": "心主神明。心血充足、陰陽自然交替時，睡眠深沉、醒來清爽——這是內在平衡的標誌。",
      ja: "心は精神（神）を宿します。心血が十分で、陰陽が自然に切り替わる時、深い眠りとスッキリした目覚めが訪れます — 内側の調和のサイン。",
    },
    bridge: {
      en: "Sleep is your body's nightly software update. If it installs smoothly, you wake up with a fresh system. If it keeps crashing, something's running in the background.",
      "zh-TW": "睡眠是你身體每晚的軟體更新。如果安裝順利，你醒來就是全新系統。如果一直崩潰，就是有東西在背景運行。",
      ja: "睡眠は体の毎晩のソフトウェアアップデート。スムーズにインストールされれば、新しいシステムで目覚めます。クラッシュし続けるなら、バックグラウンドで何か動いています。",
    },
  },
  {
    constitution: "balanced",
    reverse: true,
    q: {
      en: "When something annoying happens — a delayed train, a rude email, a spilled coffee — you get annoyed for a moment and then genuinely move on. It doesn't ruin your whole day.",
      "zh-TW": "當煩人的事情發生時——火車誤點、一封無禮的郵件、咖啡灑了——你煩一下就真的過去了。不會毀掉你一整天。",
      ja: "イヤなことがあった時 — 電車の遅延、失礼なメール、こぼしたコーヒー — 一瞬イラッとして、本当にすぐ忘れる。一日を台無しにしない。",
    },
    theory: {
      en: "Emotional resilience reflects the Liver's ability to maintain free flow of Qi (肝主疏泄). When Liver Qi moves without obstruction, emotional turbulence passes quickly.",
      "zh-TW": "情緒恢復力反映肝主疏泄的功能。肝氣通暢時，情緒波動很快就會過去。",
      ja: "感情的な回復力は肝の疏泄功能を反映します。肝気が滞りなく流れると、感情の波はすぐに過ぎ去ります。",
    },
    bridge: {
      en: "Your emotional system is like a well-drained road — rain comes, but the water runs off instead of flooding. Nothing sticks around long enough to cause damage.",
      "zh-TW": "你的情緒系統就像排水良好的道路——雨來了，水會流走而不會淹水。沒有什麼會留太久造成傷害。",
      ja: "感情のシステムは水はけの良い道路みたい — 雨が降っても水が流れ去り、洪水にはならない。何も長居して被害を出すことはありません。",
    },
  },
  {
    constitution: "qi_deficient",
    q: {
      en: "You feel like your phone battery is always at 15%. You could sleep 8 hours and still feel like you need a nap by 2 PM. People tell you \"you look tired\" more often than you'd like.",
      "zh-TW": "你覺得自己的手機電量永遠在15%。睡了8小時，下午兩點還是想睡午覺。別人說「你看起來很累」的頻率高到你不想承認。",
      ja: "スマホのバッテリーがいつも15%みたい。8時間寝ても午後2時には昼寝したくなる。「疲れてる？」と言われる回数が多すぎる。",
    },
    theory: {
      en: "The Spleen transforms food into Qi (脾為氣血生化之源). When Spleen Qi is weak, energy production drops — sleep cannot replenish what the digestive system fails to generate.",
      "zh-TW": "脾為氣血生化之源。脾氣虛弱時，能量產出下降——睡眠無法補充消化系統未能生成的部分。",
      ja: "脾は気血を生み出す源です。脾気虚弱だとエネルギー生産が低下 — 消化システムが作れない分は睡眠で補えません。",
    },
    bridge: {
      en: "Imagine your body is a phone that never charges past 15% — you can plug it in all night, but the battery itself is degraded. That's what Qi deficiency feels like from the inside.",
      "zh-TW": "想像你的身體是一支永遠充不超過15%的手機——你可以插著充一整晚，但電池本身就老化了。氣虛就是這種感覺。",
      ja: "体が15%以上充電できないスマホだと想像して — 一晩中繋いでもバッテリー自体が劣化している。気虚はそんな感じです。",
    },
  },
  {
    constitution: "qi_deficient",
    q: {
      en: "You sometimes start speaking and your voice just... trails off. Not because you don't have anything to say, but because it feels like talking takes real effort. You'd rather text.",
      "zh-TW": "你有時候說著說著聲音就……淡掉了。不是因為沒話說，而是因為說話感覺真的要用力的。你寧願傳訊息。",
      ja: "話している途中で声が…消えてしまうことがある。言うことがないからではなく、話すのに本当に力が要るから。LINEでいいやと思う。",
    },
    theory: {
      en: "The Lung governs Qi and the voice (肺主氣). When Lung Qi is insufficient, speaking becomes physically taxing — the body quietly rations energy for vital functions.",
      "zh-TW": "肺主氣。肺氣不足時，說話變得消耗體力——身體會悄悄把能量留給更重要的功能。",
      ja: "肺は気を主ります。肺気不足だと、話すだけで体力を消費 — 体は重要な機能のためにエネルギーを節約します。",
    },
    bridge: {
      en: "Your voice is like a speaker running on low battery — it starts fine, then gradually fades to a whisper. Your body isn't out of things to say, it's out of power to say them.",
      "zh-TW": "你的聲音就像低電量的喇叭——開始正常，然後逐漸淡成耳語。你不是沒話說，而是沒有力氣說了。",
      ja: "声はバッテリー残量の少ないスピーカーみたい — 最初は普通、でもだんだんささやきに。言うことがないのではなく、言うパワーがない。",
    },
  },
  {
    constitution: "qi_deficient",
    q: {
      en: "You catch every cold that goes around the office. Someone sneezes two desks away and you're already reaching for the tissues. It takes you two weeks to recover from what others shake off in three days.",
      "zh-TW": "辦公室裡每波感冒你都會中招。兩張桌子外有人打噴嚏，你就已經在拿衛生紙了。別人三天就好的感冒，你要兩週才能恢復。",
      ja: "オフィスで流行る風邪を全部もらう。2つ離れた席でくしゃみされたら、もうティッシュを取っている。他の人が3日で治す風邪を2週間かかる。",
    },
    theory: {
      en: "Wei (defensive) Qi circulates at the body's surface, acting as your immune barrier. When Wei Qi is thin, external pathogens invade easily and recovery is slow.",
      "zh-TW": "衛氣運行於體表，構成免疫屏障。衛氣薄弱時，外邪容易入侵且恢復緩慢。",
      ja: "衛気は体表を巡り、免疫のバリアとして働きます。衛気が薄いと、外邪が侵入しやすく、回復が遅れます。",
    },
    bridge: {
      en: "Your immune system is like a house with a broken front door lock — every germ that walks by can walk right in, and it takes forever to kick them out.",
      "zh-TW": "你的免疫系統就像一棟前門鎖壞了的房子——每個經過的細菌都能直接走進來，而且要很久才能把它們趕走。",
      ja: "免疫システムは壊れた玄関の鍵のある家みたい — 通りがかる菌が全部入ってきて、追い出すのに永遠にかかる。",
    },
  },
  {
    constitution: "yang_deficient",
    q: {
      en: "Your hands and feet are basically ice blocks year-round. You've considered wearing gloves indoors. In July. Your partner has banned you from touching them with your feet in bed.",
      "zh-TW": "你的手腳基本上一年四季都是冰塊。你考慮過在室內戴手套。在七月。你的伴侶已經禁止你在床上用腳碰他們了。",
      ja: "手足が一年中氷の塊。7月なのに室内で手袋を考えたことがある。ベッドで足を触るとパートナーに禁止されている。",
    },
    theory: {
      en: "Yang Qi warms the body and circulates heat to the extremities. When Yang is deficient, the body prioritizes warming the core organs and cuts off heat supply to the limbs.",
      "zh-TW": "陽氣溫煦全身，將熱量輸送至四肢。陽氣虛弱時，身體優先保護核心臟器，削減四肢的熱量供應。",
      ja: "陽気は体を温め、熱を四肢に運びます。陽虚の場合、体は核心の臓器を優先し、四肢への熱供給を削減します。",
    },
    bridge: {
      en: "Your body is a house where the heating system only covers the living room. The core stays warm, but the bedrooms and the garage are permanently freezing.",
      "zh-TW": "你的身體是一棟暖氣只供客廳的房子。核心區域暖和，但臥室和車庫永遠在結冰。",
      ja: "体はリビングだけ暖房のある家。中心は暖かいけど、寝室とガレージは永久に凍っている。",
    },
  },
  {
    constitution: "yang_deficient",
    q: {
      en: "You order hot water at restaurants and people look at you weird. Ice cream makes you physically uncomfortable — not morally, your body literally protests. You'd choose hot soup over a cold salad every single time.",
      "zh-TW": "你在餐廳點熱水，別人會用奇怪的眼神看你。冰淇淋讓你身體不舒服——不是道德上的，是你的身體真的在抗議。你每次都會選熱湯而不是冷沙拉。",
      ja: "レストランで白湯を頼んで変な目で見られる。アイスクリームを食べると体が拒否する — 倫理的にではなく、物理的に。毎回冷たいサラダより熱いスープを選ぶ。",
    },
    theory: {
      en: "Cold food and drink require the body to expend Yang energy to warm them before digestion. For someone already low on Yang, this additional energy cost is felt as physical discomfort.",
      "zh-TW": "冷食冷飲需要身體額外消耗陽氣來加溫後才能消化。陽氣本已不足的人，會直接感受到這額外的能量開銷帶來的不適。",
      ja: "冷たい食べ物や飲み物は、消化前に体が陽のエネルギーを使って温める必要があります。すでに陽が不足している人には、この追加コストが肉体的な不快感として感じられます。",
    },
    bridge: {
      en: "Eating cold food when you're Yang-deficient is like asking someone with an empty gas tank to drive uphill — your body physically can't afford the extra cost.",
      "zh-TW": "陽虛體質吃冷食就像讓油箱空了的人開車上坡——你的身體真的付不起那個額外開銷。",
      ja: "陽虚体質で冷たい食べ物を食べるのは、ガソリン空の車に上り坂を運転させるようなもの — 体にはその追加コストを払う余裕がありません。",
    },
  },
  {
    constitution: "yang_deficient",
    q: {
      en: "Air conditioning is your nemesis. When everyone else says \"it's so nice and cool in here,\" you're sitting there with a sweater, a scarf, and a quiet grudge. You've considered moving somewhere that doesn't have winter.",
      "zh-TW": "冷氣是你的天敵。當其他人說「這裡好涼好舒服」的時候，你穿著毛衣、圍著圍巾、默默記仇。你考慮過搬到一個沒有冬天的國家。",
      ja: "エアコンは天敵。みんなが「涼しくて気持ちいい」って言ってる時、セーターとマフラーを巻いて静かに恨んでいる。冬がない国に引っ越そうか考えたことがある。",
    },
    theory: {
      en: "External cold penetrates through the skin and meridians, directly consuming Yang Qi (寒傷陽氣). Yang-deficient bodies lack the reserves to fight off environmental cold.",
      "zh-TW": "外寒通過皮膚和經脈侵入，直接消耗陽氣。陽虛體質缺乏抵抗環境寒冷的儲備。",
      ja: "外部の冷えは皮膚と経絡を通り抜け、陽気を直接消耗します。陽虚体質は環境の寒さに対抗する蓄えがありません。",
    },
    bridge: {
      en: "Air conditioning for a Yang-deficient body is like someone cranking up the AC in a house with no insulation — the cold goes straight through and there's nothing to stop it.",
      "zh-TW": "冷氣對陽虛體質就像在沒有隔熱層的房子裡開冷氣——冷風直穿而過，什麼也擋不住。",
      ja: "陽虚体質にとってのエアコンは、断熱材のない家で冷房をガンガンにかけるようなもの — 冷気がそのまま通り抜けて、止めるものが何もない。",
    },
  },
  {
    constitution: "yin_deficient",
    q: {
      en: "Your palms and the soles of your feet often feel hot and restless — like they're radiating heat even when the room is cool. You kick off the blankets at night even in winter.",
      "zh-TW": "你的手掌和腳底常常覺得熱、不安份——即使在涼爽的房間裡也像在散發熱量。即使在冬天你也會在夜裡踢掉毯子。",
      ja: "手のひらと足の裏がよく熱くて落ち着かない — 部屋が涼しくても熱を放っている感じ。冬でも夜に布団を蹴飛ばす。",
    },
    theory: {
      en: "Yin provides the body's cooling and moistening function (陰主涼潤). When Yin is deficient, internal heat has no counterbalance — it radiates outward through the palms and soles, known as \"Five-Palm Heat\" (五心煩熱).",
      "zh-TW": "陰主涼潤。陰虛時，內熱無法制衡——熱從手掌和腳底向外輻射，中醫稱為「五心煩熱」。",
      ja: "陰は体を冷やし潤す働きを持ちます。陰虚だと内熱を抑えるものがなく — 手のひらと足の裏から熱が放射されます。中医学では「五心煩熱」と呼びます。",
    },
    bridge: {
      en: "Your body is like a car with a broken radiator — the engine keeps producing heat, but the cooling system is running dry. Heat leaks out wherever it can find an exit.",
      "zh-TW": "你的身體就像散熱器壞了的車——引擎一直在產熱，但冷卻系統乾了。熱從任何能找到的出口漏出去。",
      ja: "体はラジエーターが壊れた車みたい — エンジンは熱を出し続けるけど、冷却システムが空っぽ。熱が出口を探して漏れ出している。",
    },
  },
  {
    constitution: "yin_deficient",
    q: {
      en: "You wake up in the middle of the night with a mouth so dry it feels like you've been chewing on cotton. You keep a water bottle on your nightstand and it's empty by morning. Sometimes you get that hot, flushed feeling in your face and chest for no reason.",
      "zh-TW": "你半夜醒來嘴巴乾得像在嚼棉花。你床頭櫃上放了一瓶水，到早上就空了。有時候你的臉和胸口會莫名其妙地發熱發紅。",
      ja: "夜中に起きたとき口が綿を噛んでいたみたいに乾いている。枕元に水を置いて、朝には空になっている。時々理由もなく顔と胸がカッと熱くなる。",
    },
    theory: {
      en: "Nighttime belongs to Yin (夜屬陰). When Yin is deficient, empty fire (虛火) flares upward at night — causing dry mouth, hot flashes in the face and chest, and restless sleep.",
      "zh-TW": "夜間屬陰。陰虛時，虛火上炎——導致口乾、面部和胸口潮熱、睡眠不安。",
      ja: "夜間は陰に属します。陰虚の場合、虚火が夜に上炎し — 口の乾き、顔と胸ののぼせ、落ち着かない睡眠を引き起こします。",
    },
    bridge: {
      en: "Nighttime is when your body should be in sleep mode — screen off, cooling fan running. But your cooling fan is broken, so the system just keeps overheating in the dark.",
      "zh-TW": "夜晚是身體應該進入睡眠模式的時候——螢幕關閉、風扇運轉。但你的風扇壞了，系統在黑暗中持續過熱。",
      ja: "夜は体がスリープモードに入る時間 — 画面オフ、冷却ファン回転。でもファンが壊れていて、システムは暗闇の中で過熱し続けます。",
    },
  },
  {
    constitution: "yin_deficient",
    q: {
      en: "You're the person who opens a window in December because \"it's stuffy.\" You order iced drinks when everyone else is holding hot lattes. Your friends joke that you're powered by a space heater stuck on high.",
      "zh-TW": "你是那種在十二月開窗因為「太悶了」的人。別人手拿熱拿鐵的時候你點冰飲。你的朋友開玩笑說你體內裝了一台開到最大的電暖器。",
      ja: "12月に「暑苦しい」と窓を開けるタイプ。みんながホットラテを持っている時にアイスドリンクを頼む。友達には「ヒーターが最大でついてる」と言われる。",
    },
    theory: {
      en: "Yin-deficient bodies generate internal heat independently of external temperature (陰虛生內熱). The desire for cold drinks and open windows is the body's attempt to compensate for this self-generated heat.",
      "zh-TW": "陰虛體質會獨立於外界溫度產生內熱。對冷飲和開窗的渴望是身體嘗試代償這種自生熱。",
      ja: "陰虚体質は外気温に関係なく内熱を発生させます。冷たい飲み物や窓を開けたくなるのは、体がこの内生する熱を補おうとする試みです。",
    },
    bridge: {
      en: "Your body is a self-heating oven that forgot how to turn off. No matter what season it is outside, inside it's always July.",
      "zh-TW": "你的身體是一台忘了關的自熱烤箱。不管外面是什麼季節，裡面永遠是七月。",
      ja: "体は止め方を忘れた自分加熱オーブン。外がどんな季節でも、中はいつも7月。",
    },
  },
  {
    constitution: "phlegm_damp",
    q: {
      en: "Your body feels like it's moving through wet concrete. Not \"I'm lazy\" — it's more like gravity is extra strong on you specifically. Getting out of bed in the morning is a negotiation between you and your mattress, and the mattress usually wins.",
      "zh-TW": "你的身體感覺像在濕混凝土裡移動。不是「我很懶」——更像是重力對你特別強。早上起床是你和床墊之間的談判，而且床墊通常會贏。",
      ja: "体が濡れたコンクリートの中を動いているみたい。「怠け者」というより — 自分にだけ重力が強い感じ。朝ベッドから出るのはマットレスとの交渉で、マットレスがたいてい勝つ。",
    },
    theory: {
      en: "The Spleen transforms and transports fluids (脾運化水液). When Spleen Qi is weak, fluids accumulate and congeal into Phlegm-Dampness (痰濕) — a heavy, sticky substance that weighs the body down.",
      "zh-TW": "脾主運化水液。脾氣虛弱時，水液停聚凝結成痰濕——一種沉重的黏稠物，拖垮身體。",
      ja: "脾は水分を運び変えます。脾気虚弱だと水分が溜まり、痰湿に凝結 — 体を重くするネバネバした物質になります。",
    },
    bridge: {
      en: "It's not laziness — it's like trying to run through a swimming pool. Your body isn't weak; it's carrying extra internal weight that nobody else can see.",
      "zh-TW": "不是懶惰——是在游泳池裡跑步的感覺。你的身體不是虛弱；它背著別人看不到的額外內在重量。",
      ja: "怠け者じゃない — プールの中を走ろうとしているようなもの。体は弱いのではなく、誰にも見えない余分な内部の重さを背負っている。",
    },
  },
  {
    constitution: "phlegm_damp",
    q: {
      en: "Your face gets shiny by noon even though you washed it that morning. You feel like there's always something stuck in your throat — not a sore throat, more like a lingering thickness you can't clear. You clear your throat a lot.",
      "zh-TW": "你的臉到中午就出油了，明明早上才洗過。你覺得喉嚨裡一直有東西——不是喉嚨痛，更像是一種清不掉的黏稠感。你常常需要清喉嚨。",
      ja: "朝洗顔したのに昼には顔がテカる。喉に何かが詰まっている感じがする — 喉の痛みではなく、取れない粘り気。よく喉をクリアする。",
    },
    theory: {
      en: "Phlegm-Dampness doesn't only affect the lungs — it rises upward and manifests on the skin as oiliness and in the throat as a persistent sticky sensation (痰濕上泛).",
      "zh-TW": "痰濕不只影響肺——它會上泛，表現在皮膚上為油膩，在喉嚨中為持續的黏稠感。",
      ja: "痰湿は肺だけに影響するのではありません — 上に向かって皮膚にテカテカとして、喉にネバネバ感として現れます。",
    },
    bridge: {
      en: "Your body's internal plumbing is backed up — the grease that should be processed is instead surfacing on your face and collecting in your throat.",
      "zh-TW": "你身體的內部管道堵塞了——本應被處理的油脂反而浮到臉上、積在喉嚨裡。",
      ja: "体の内部の配管が詰まっている — 処理されるべき脂が顔に浮かび、喉に溜まっている。",
    },
  },
  {
    constitution: "phlegm_damp",
    q: {
      en: "Food seems to sit in your stomach for hours after eating. You feel full and puffy, like a balloon that's been inflated slightly past its limit. You gain weight easily and losing it feels like pushing a boulder uphill.",
      "zh-TW": "吃完東西后食物好像在胃裡坐了好幾個小時。你覺得又飽又脹，像一個吹得稍微超過極限的氣球。你很容易增重，減重感覺像在推大石頭上山。",
      ja: "食べた後、食べ物が何時間も胃に居座る感じ。満腹で膨れた感じ — 限界を少し超えて膨らませた風船みたい。太りやすく、痩せるのは岩を山の上に押し上げるみたい。",
    },
    theory: {
      en: "The Spleen transforms food into Qi and Blood (脾主運化). When Dampness obstructs this process, food stagnates, fluids accumulate, and the metabolism slows — weight gain follows as a natural consequence.",
      "zh-TW": "脾主運化。濕氣阻滯此過程時，食物停滯、水液積聚、代謝減慢——體重增加是自然結果。",
      ja: "脾は食べ物を気と血に変えます。湿気がこの過程を阻害すると、食べ物が滞り、水分が蓄積し、代謝が低下 — 体重増加は自然な結果です。",
    },
    bridge: {
      en: "Your digestion engine is like a wet campfire — all the fuel is there, but the dampness keeps it from burning properly. Everything just sits there, smoldering instead of converting to energy.",
      "zh-TW": "你的消化引擎像一堆濕柴火——燃料都在，但濕氣讓它無法正常燃燒。一切都堆在那裡，冒煙而不是轉化成能量。",
      ja: "消化エンジンは濡れた焚き火みたい — 燃料はあるけど、湿気でうまく燃えない。すべてがそこに居座り、エネルギーに変わる代わりに燻っている。",
    },
  },
  {
    constitution: "damp_heat",
    q: {
      en: "Your skin breaks out like a teenager's even though you're well into adulthood. Red, angry bumps that take forever to go away. You've tried every skincare product on the market and nothing works for more than a week.",
      "zh-TW": "你都成年了皮膚還是像青少年一樣長痘。紅紅的、發炎的、永遠不會消。你試過市面上的每一款護膚品，沒有一個有效超過一週。",
      ja: "大人なのに肌が10代みたいに荒れる。赤くて炎症したニキビがなかなか消えない。市販のスキンケアを全部試したけど、1週間以上効果が続いたためしがない。",
    },
    theory: {
      en: "Damp-Heat (濕熱) accumulates in the body and vents through the skin as eruptions. External skincare cannot resolve what originates from internal Damp-Heat trapped beneath the surface.",
      "zh-TW": "濕熱蘊結體內，從皮膚外發為疹瘡。外部護膚無法解決源自內在濕熱的問題。",
      ja: "湿熱が体内に蓄積し、皮膚から吹き出物として排出されます。内部の湿熱に起因する問題は外用スキンケアでは解決できません。",
    },
    bridge: {
      en: "Your skin is like a pot with the lid on too tight — the heat inside has nowhere to go, so it bursts through wherever it can. Creams only fix the lid; we need to turn down the flame.",
      "zh-TW": "你的皮膚像一個蓋子蓋太緊的鍋——裡面的熱無處可去，只好從能找到的地方爆出來。護膚品只是修蓋子；我們需要關小火。",
      ja: "肌は蓋がきつすぎる鍋みたい — 中の熱が逃げ場がなく、どこからでも吹き出す。クリームは蓋を直すだけ。炎を弱める必要があります。",
    },
  },
  {
    constitution: "damp_heat",
    q: {
      en: "You sometimes wake up with a bitter taste in your mouth — like you drank black coffee without sugar in your sleep. Mouthwash doesn't fully fix it. Your breath feels \"heavy\" by midday even if you brushed that morning.",
      "zh-TW": "你有時候醒來嘴裡有苦味——就像在睡夢中喝了一杯不加糖的黑咖啡。漱口水也沒法完全解決。即使早上刷了牙，到中午口氣還是感覺「很重」。",
      ja: "目覚めた時、口の中に苦い味がある — 寝ている間にブラックコーヒーを飲んだみたい。マウスウォッシュでも完全に直らない。朝磨いたのに昼には息が「重い」感じ。",
    },
    theory: {
      en: "A bitter taste in the mouth signals Liver-Gallbladder Heat rising upward (肝膽鬱熱上炎). This internal heat produces a bitter vapor that rises through the mouth, especially during sleep.",
      "zh-TW": "口苦是肝膽鬱熱上炎的信號。內熱產生苦味之氣，從口中上泛，尤其在睡眠期間。",
      ja: "口の中の苦味は肝・胆の鬱熱が上炎しているサインです。この内熱が苦い蒸気を生み、特に睡眠中に口から上がってきます。",
    },
    bridge: {
      en: "Your Liver is like an overheating engine, and that bitter taste is the exhaust fume leaking into the cabin. No amount of air freshener fixes an engine problem.",
      "zh-TW": "你的肝臟就像過熱的引擎，那個苦味是漏進車廂的廢氣。再多的空氣清新劑也修不了引擎問題。",
      ja: "肝はオーバーヒートしたエンジンみたい。その苦味は車内に漏れる排気ガス。どんなに消臭剤を使ってもエンジンの問題は解決しません。",
    },
  },
  {
    constitution: "damp_heat",
    q: {
      en: "You run hot — physically and emotionally. You walk into a room and people either love your energy or need a minute. You sweat easily and your sweat has a strong, distinct smell. Deodorant is your best friend and your worst enemy because it never lasts long enough.",
      "zh-TW": "你運行得很熱——身體上和情緒上都是。你走進一個房間，人們要嘛喜歡你的能量，要嘛需要冷靜一下。你很容易出汗，汗味很重很特別。止汗劑是你最好的朋友也是最差的敵人，因為它永遠不夠持久。",
      ja: "体も感情も熱く動く。部屋に入ると、みんながエネルギーを好きになるか、一瞬落ち着く必要がある。すぐ汗をかき、汗の匂いが強い。デオドラントは親友であり最大の敵 — いつも長持ちしないから。",
    },
    theory: {
      en: "Damp-Heat is like a hot, humid microclimate inside the body (濕熱熏蒸). The body attempts to vent this combination of heat and dampness through sweating, carrying both temperature and stickiness outward.",
      "zh-TW": "濕熱就像體內的炎熱潮濕微氣候。身體試圖通過出汗排出這種熱與濕的組合，將溫度和黏膩一起帶出。",
      ja: "湿熱は体の中の暑く湿った微気候のようなものです。体はこの熱と湿りの組み合わせを発汗によって外に出そうとします。",
    },
    bridge: {
      en: "Your body is running its own tropical climate — hot, humid, and intense. The strong sweat is your body's built-in exhaust system working overtime to vent the heat.",
      "zh-TW": "你的身體在運行自己的熱帶氣候——又熱又潮又強烈。強烈的汗味是你身體的排氣系統在加班散熱。",
      ja: "体は自分自身の熱帯気候を動かしている — 暑く、湿って、強烈。強い汗は体の排気システムがフル稼働して熱を逃がしている証拠。",
    },
  },
  {
    constitution: "blood_stasis",
    q: {
      en: "You find bruises on your legs and have no idea where they came from. They last for weeks and fade through a rainbow of ugly colors. Your lips look darker than most people's, and under your eyes there's a permanent shadow that no amount of sleep seems to fix.",
      "zh-TW": "你在腿上發現瘀青卻不知道哪裡撞的。它們持續好幾週，褪色的過程像一道醜陋的彩虹。你的嘴唇比大多數人暗，眼下有一層永遠的陰影，怎麼睡都消不掉。",
      ja: "足にあざを見つけるけど、どこでぶつけたか分からない。何週間も残り、醜い色の虹のように消えていく。唇が他の人より暗く、目の下にどんなに寝ても消えない影がある。",
    },
    theory: {
      en: "Blood should circulate freely (血行脈中). When Blood stagnates, it pools beneath the skin as dark patches and bruises. Dark lips and persistent under-eye shadows are external signs of internal Blood stasis (血瘀).",
      "zh-TW": "血應在脈中正常運行。血瘀時，血液在皮下積聚成暗斑和瘀青。暗唇和持久的黑眼圈是血瘀的外在表現。",
      ja: "血は脈の中を自由に循環すべきもの。血が停滞すると、皮膚の下に暗い斑点やあざとして溜まります。唇の暗さと目の下のクマは血瘀の外的サインです。",
    },
    bridge: {
      en: "Your bloodstream is like a river with too many dams — blood pools up in certain spots, turns dark, and shows through your skin. Sleep can't fix it because the problem isn't tiredness, it's traffic.",
      "zh-TW": "你的血流像一條水壩太多的河——血液在某些地方積聚、變暗、透出皮膚。睡眠解決不了，因為問題不是疲勞，是交通堵塞。",
      ja: "血流はダムの多すぎる川みたい — 血が特定の場所に溜まり、暗くなり、肌から見える。睡眠で治らないのは、問題が疲労ではなく交通渋滞だから。",
    },
  },
  {
    constitution: "blood_stasis",
    q: {
      en: "You get aches and pains in the same spots over and over — your lower back, your shoulders, that one knee. It's not a general soreness; it's a specific, stabbing pain that shows up in the exact same place like it has a GPS address.",
      "zh-TW": "你在同一個地方反覆疼痛——下背、肩膀、那個膝蓋。不是一般的酸痛；是特定的、像針刺的痛，每次都在同一個位置出現，就像有GPS定位一樣。",
      ja: "同じ場所が何度も痛む — 腰、肩、あの膝。全身の痛みではなく、GPS付きみたいに毎回全く同じ場所に刺すような痛み。",
    },
    theory: {
      en: "\"Where there is no flow, there is pain\" (不通則痛). Stagnant Blood creates localized pressure and blockage, producing sharp, fixed, stabbing pain that resists movement — distinct from generalized soreness.",
      "zh-TW": "「不通則痛」。瘀血造成局部壓力和阻塞，產生尖銳、固定、刺痛——與一般性酸痛不同。",
      ja: "「通じざれば則ち痛む」。鬱血は局所的な圧力と閉塞を作り、鋭く、固定された刺すような痛みを生みます — 一般的な痛みとは異なります。",
    },
    bridge: {
      en: "The pain has a GPS because the blood clot isn't moving — it's parked in one spot like a broken-down car blocking a single lane. Every time blood tries to pass, it hits the same obstacle.",
      "zh-TW": "痛有GPS是因為血塊不移動——它停在一個地方像拋錨的車堵住了單車道。每次血液試圖通過，都撞上同一個障礙。",
      ja: "痛みにGPSがあるのは血塊が動かないから — 故障した車が一車道を塞いで止まっているみたい。血が通ろうとするたびに同じ障害物にぶつかる。",
    },
  },
  {
    constitution: "blood_stasis",
    q: {
      en: "Your skin has a dull, slightly purple-ish undertone — not the \"glow\" everyone talks about. When you press your fingernail and let go, the color takes noticeably longer to come back than other people's. Your complexion looks like you're always slightly under the weather.",
      "zh-TW": "你的皮膚有一種暗沉的、帶點紫色的底色——不是大家說的那種「光澤」。你按壓指甲再鬆開，顏色恢復得比別人明顯慢。你的氣色看起來總是像有一點不舒服。",
      ja: "肌にくすんだ、少し紫がかった色合いがある — みんなが言う「ツヤ」じゃない。爪を押して離すと、色が戻るのが他の人より明らかに遅い。顔色がいつも少し体調が悪そうに見える。",
    },
    theory: {
      en: "Healthy Blood nourishes the skin with a natural rosy complexion (血華於面). When Blood stagnates, the skin loses its vibrancy — a dull, purplish undertone and slow capillary refill are external signs of impaired circulation.",
      "zh-TW": "健康的血為面部帶來自然紅潤。血瘀時，皮膚失去光澤——暗沉帶紫的底色和毛細血管再充盈緩慢是循環不暢的外在表現。",
      ja: "健康な血は肌に自然なバラ色を与えます。血が停滞すると、肌の輝きが失われます — くすんだ紫がかった色合いと遅い毛細血管の再充填は循環不良の外的サインです。",
    },
    bridge: {
      en: "Think of your skin like a garden fed by a sprinkler system. When a pipe gets kinked, that patch of garden turns dull and dry. Your skin is showing you exactly where the flow is blocked.",
      "zh-TW": "把皮膚想像成灑水系統灌溉的花園。水管打折時，那塊花園變得暗沉乾燥。你的皮膚正在告訴你哪裡的血流被堵住了。",
      ja: "肌をスプリンクラーシステムの花園と想像して。パイプが折れ曲がると、その部分の花園がくすんで乾燥する。肌はどこで流れがブロックされているか教えています。",
    },
  },
  {
    constitution: "qi_stagnant",
    q: {
      en: "You sigh — like really sigh — multiple times a day and don't even notice. It's your body's way of letting out pressure that builds up inside. People close to you have started asking \"are you okay?\" more often, and you're not sure how to answer because you're not sad, you're just... heavy.",
      "zh-TW": "你嘆氣——真的很深的嘆氣——一天好幾次但自己都沒注意。那是你的身體釋放內在壓力的方式。身邊的人開始更常問「你還好嗎」，而你不知道怎麼回答，因為你不是難過，只是……沈重。",
      ja: "ため息をつく — 本当に深いため息 — 1日に何度も、自分でも気づかない。体の中に溜まる圧力を出す方法。近い人が「大丈夫？」とよく聞くようになった。悲しいのではなく、ただ…重い。",
    },
    theory: {
      en: "The Liver governs the smooth flow of Qi (肝主疏泄). Deep sighing is the body's instinctive attempt to release stagnant Qi — an emergency venting mechanism when internal pressure builds up.",
      "zh-TW": "肝主疏泄。深嘆氣是身體本能地試圖釋放滯氣——當內壓積聚時的緊急排氣機制。",
      ja: "肝は気のスムーズな流れを主ります。深いため息は体が本能的に滞った気を放出しようとする試み — 内圧が溜まった時の緊急排気メカニズムです。",
    },
    bridge: {
      en: "Sighing is like opening a pressure cooker valve — your body is letting out steam before it blows. You're not sad. Your Qi just needs room to breathe.",
      "zh-TW": "嘆氣就像打開壓力鍋的閥門——你的身體在釋放蒸氣以防爆炸。你不是難過。你的氣只是需要呼吸的空間。",
      ja: "ため息は圧力鍋のバルブを開けるようなもの — 爆発する前に蒸気を出している。悲しいのではない。気が呼吸する余裕が必要なだけ。",
    },
  },
  {
    constitution: "qi_stagnant",
    q: {
      en: "You often feel a tightness in your chest — not pain, more like someone placed a heavy book on your ribcage. You worry about things that haven't happened yet, replay conversations from three days ago, and lie in bed planning for scenarios that have a 2% chance of occurring.",
      "zh-TW": "你常常覺得胸口悶——不是痛，更像是有人在你的肋骨上放了一本厚書。你擔心還沒發生的事，重播三天前的對話，躺在床上規劃只有2%機率會發生的場景。",
      ja: "よく胸が苦しい — 痛みではなく、肋骨の上に重い本を置かれた感じ。まだ起きていないことを心配し、3日前の会話をリプレイし、ベッドで2%の確率のシナリオを計画している。",
    },
    theory: {
      en: "The Liver is responsible for the free movement of Qi throughout the body. When Liver Qi stagnates, Qi jams in the chest, producing a sensation of tightness and constriction (肝氣鬱結).",
      "zh-TW": "肝負責全身氣機的暢通。肝氣鬱結時，氣堵在胸中，產生胸悶和壓迫感。",
      ja: "肝は全身の気の自由な流れを担当します。肝気が停滞すると、気が胸で詰まり、締め付け感と圧迫感を生みます。",
    },
    bridge: {
      en: "Your chest is like a traffic jam at rush hour — too much trying to get through the same bottleneck. The tightness is energy backed up, and the racing thoughts are the honking horns.",
      "zh-TW": "你的胸口像高峰時段的交通堵塞——太多東西試圖通過同一個瓶頸。胸悶是能量回堵，飛轉的思緒是喇叭聲。",
      ja: "胸はラッシュ時の渋滞みたい — 同じボトルネックに多すぎるものが通ろうとしている。胸のつかえはエネルギーの逆流、頭の駆け巡る思考はクラクション。",
    },
  },
  {
    constitution: "qi_stagnant",
    q: {
      en: "Your mind is like a browser with 47 tabs open at all times. You overthink everything — what you said, what you should have said, what they meant by that look. Your mood can flip from fine to terrible because of one ambiguous text message. You've been told you \"think too much\" more times than you can count.",
      "zh-TW": "你的腦袋就像一個同時開了47個分頁的瀏覽器。你想太多——你說了什麼、你應該說什麼、他那個表情是什麼意思。一條模糊的訊息就能讓你從好好的變成糟透了。你被說「想太多」的次數多到數不清。",
      ja: "頭の中が常に47個のタブが開いたブラウザみたい。すべて考えすぎる — 何を言ったか、何を言うべきだったか、あの目は何を意味したか。曖昧なメッセージ一つで機嫌が反転する。「考えすぎ」と数え切れないほど言われた。",
    },
    theory: {
      en: "In TCM, overthinking and mood swings indicate Liver Qi stagnation affecting the Heart-Spirit (肝氣犯心). When Qi cannot move physically, the mind tries to create movement through excessive mental activity.",
      "zh-TW": "中醫認為，想太多和情緒波動是肝氣鬱結影響心神的表現。氣機不能在身體層面流動時，心智就試圖通過過度思考來創造運動。",
      ja: "中医学では、考えすぎと気分の波は肝気鬱結が心神に影響していることを示します。気が身体レベルで動けない時、心は過度な思考で動きを作ろうとします。",
    },
    bridge: {
      en: "Your mind is running 47 tabs because your body's energy is stuck in one. Each overthought scenario is your brain pacing back and forth in a room where the door is jammed shut.",
      "zh-TW": "你的大腦開了47個分頁是因為身體的能量卡住了。每一個過度思考的場景是你的大腦在門被卡住的房間裡來回踱步。",
      ja: "頭に47個のタブが開いているのは、体のエネルギーが一箇所に詰まっているから。考えすぎるシナリオの一つ一つは、ドアが閉まった部屋を行ったり来たりする脳みそのようなもの。",
    },
  },
  {
    constitution: "sensitive",
    q: {
      en: "You're the person who sneezes 15 times in a row when spring hits. You've had a runny nose every April for as long as you can remember. Dust, pollen, pet dander — your body treats all of them like a personal attack. You always carry tissues and antihistamines \"just in case.\"",
      "zh-TW": "你是那種春天一到就連打15個噴嚏的人。你記憶中每年四月都在流鼻水。灰塵、花粉、寵物皮屑——你的身體把它們全部當成個人攻擊。你永遠帶著衛生紙和抗過敏藥「以防萬一」。",
      ja: "春になると15回連続でくしゃみをするタイプ。記憶がある限り毎年4月は鼻水。ほこり、花粉、ペットの毛 — 体が全部を個人攻撃として扱う。ティッシュと抗アレルギー薬を常に「念のため」持ち歩く。",
    },
    theory: {
      en: "Wei (defensive) Qi protects the body's surface. In sensitive constitutions, Wei Qi is unstable and overreacts to harmless substances — treating dust and pollen as invading pathogens (衛氣不固).",
      "zh-TW": "衛氣保護體表。敏感體質的衛氣不穩定，對無害物質過度反應——把灰塵和花粉當成入侵邪氣。",
      ja: "衛気は体表を守ります。敏感体質では衛気が不安定で、無害な物質に過剰反応 — ほこりや花粉を侵入する邪気として扱います。",
    },
    bridge: {
      en: "Your immune system is a security guard who can't tell the difference between a real intruder and a houseplant. Every pollen grain triggers a full lockdown.",
      "zh-TW": "你的免疫系統是一個分不清真正入侵者和盆栽的保安。每一粒花粉都觸發全面封鎖。",
      ja: "免疫システムは本当の侵入者と観葉植物の区別がつかないセキュリティガード。花粉の一粒一粒が全面ロックダウンを引き起こす。",
    },
  },
  {
    constitution: "sensitive",
    q: {
      en: "You can tell when someone changes their laundry detergent from across the room. Strong smells give you an instant headache. You're the first one to notice when the air quality changes, when there's a draft, or when a room \"feels off\" — and you're always right.",
      "zh-TW": "你能從房間另一頭聞到有人換了洗衣精。強烈的氣味讓你立刻頭痛。你總是第一個注意到空氣品質變了、有穿堂風、或者房間「感覺不對」——而且你總是對的。",
      ja: "部屋の向こう側から誰かが洗剤を変えたのが分かる。強い匂いですぐ頭痛がする。空気の質が変わった、隙間風がある、部屋が「何か変」 — いつも最初に気づくし、いつも正しい。",
    },
    theory: {
      en: "The Lung opens into the nose and governs the body's external boundary (肺開竅於鼻，主皮毛). Sensitive Lung Qi detects environmental changes with extraordinary precision — your nose is an early-warning system.",
      "zh-TW": "肺開竅於鼻，主皮毛。敏感的肺氣能以極高的精確度偵測環境變化——你的鼻子是一個預警系統。",
      ja: "肺は鼻に開き、体の外部境界を主ります。敏感な肺気は環境の変化を極めて正確に検知します — 鼻は早期警戒システムです。",
    },
    bridge: {
      en: "You're the canary in the coal mine — your body picks up on things everyone else misses. It's not being picky; it's having extremely sensitive sensors that are always on.",
      "zh-TW": "你是煤礦裡的金絲雀——你的身體捕捉到別人都忽略的東西。不是挑剔；是擁有永遠開啟的超敏感感知器。",
      ja: "あなたは炭鉱のカナリア — 他の人が見逃すものを体がキャッチする。えり好みではなく、常にオンの超敏感センサーを持っている。",
    },
  },
  {
    constitution: "sensitive",
    q: {
      en: "Your skin reacts to everything — new clothes, new soap, a different brand of sunscreen. Red patches, itchiness, or little bumps appear for no apparent reason. You've learned to read ingredient labels like a chemist and your bathroom cabinet looks like a pharmacy.",
      "zh-TW": "你的皮膚對所有東西都有反應——新衣服、新肥皂、不同品牌的防曬霜。紅斑、發癢、或者不明原因的小疹子。你學會了像化學家一樣讀成分標籤，你的浴室櫃看起來像一間藥房。",
      ja: "肌がすべてに反応する — 新しい服、新しい石鹸、違うブランドの日焼け止め。赤い斑点、かゆみ、理由のないぶつぶつ。成分表示を化学者みたいに読むようになり、洗面台の棚が薬局みたい。",
    },
    theory: {
      en: "The Lungs govern the skin and body hair (肺主皮毛). When Lung Qi and Wei Qi are both sensitive, the skin — the body's largest defensive surface — becomes reactive and thin, like an over-sensitive alarm.",
      "zh-TW": "肺主皮毛。肺氣和衛氣都敏感時，皮膚——身體最大的防禦表面——變得薄且過度反應，像一個過敏的警報器。",
      ja: "肺は皮膚と体毛を主ります。肺気と衛気が共に敏感な場合、体最大の防御面である皮膚が過剰反応し、過敏なアラームのようになります。",
    },
    bridge: {
      en: "Your skin's defense system is like an alarm that goes off when a leaf blows past the window. It's not that the threat is real — it's that your alarm threshold is set way too low.",
      "zh-TW": "你的皮膚防禦系統像一片葉子飄過窗戶就會響的警報。不是威脅是真的——是你的警報閾值設得太低了。",
      ja: "肌の防御システムは窓の外を葉が通っただけで鳴るアラームみたい。脅威が本物なのではなく — アラームの閾値が低すぎるだけ。",
    },
  },
]

export const LIKERT_OPTIONS = [
  { value: 1, en: "Never", "zh-TW": "從來沒有", ja: "全くない" },
  { value: 2, en: "Rarely", "zh-TW": "很少", ja: "めったにない" },
  { value: 3, en: "Sometimes", "zh-TW": "有時候", ja: "ときどき" },
  { value: 4, en: "Often", "zh-TW": "經常", ja: "よくある" },
  { value: 5, en: "Always", "zh-TW": "總是", ja: "いつも" },
]

export function calculate27Scores(answers: number[]): Record<ConstitutionId, number> {
  const raw: Record<ConstitutionId, number[]> = {
    balanced: [], qi_deficient: [], yang_deficient: [], yin_deficient: [],
    phlegm_damp: [], damp_heat: [], blood_stasis: [], qi_stagnant: [], sensitive: [],
  }

  QUIZ_27.forEach((q, i) => {
    if (i < answers.length) {
      let score = answers[i]
      if (q.reverse) score = 6 - score
      raw[q.constitution].push(score)
    }
  })

  const result: Record<ConstitutionId, number> = {} as Record<ConstitutionId, number>
  for (const id of Object.keys(raw) as ConstitutionId[]) {
    const items = raw[id]
    if (items.length === 0) { result[id] = 0; continue }
    const sum = items.reduce((a, b) => a + b, 0)
    result[id] = Math.round(((sum - items.length) / (items.length * 4)) * 100)
  }

  return result
}

export function getPrimaryAndSecondary(
  scores: Record<ConstitutionId, number>
): { primary: ConstitutionId; secondary: ConstitutionId | null } {
  const biased = (Object.keys(scores) as ConstitutionId[])
    .filter((id) => id !== "balanced")
    .sort((a, b) => scores[b] - scores[a])

  const primary = biased[0]
  const secondary = biased[1] && scores[biased[1]] >= 30 ? biased[1] : null

  const balancedScore = scores.balanced
  const allBiasedBelow30 = biased.every((id) => scores[id] < 30)
  if (balancedScore >= 60 && allBiasedBelow30) {
    return { primary: "balanced", secondary: null }
  }

  return { primary, secondary }
}
