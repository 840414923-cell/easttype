const { Document, Packer, Paragraph, TextRun, AlignmentType } = require("docx")
const { writeFileSync, mkdirSync } = require("node:fs")
const { join } = require("node:path")

const FONT_EN = "Calibri"
const FONT_ZH = "Microsoft YaHei"

const OPEN_EN = "Another signal from your body. Let's see what this one means."
const OPEN_ZH = "\u4f60\u8eab\u4f53\u7684\u53c8\u4e00\u4e2a\u4fe1\u53f7\u3002\u6765\u770b\u770b\u8fd9\u4e2a\u662f\u4ec0\u4e48\u610f\u601d\u3002"
const CLOSE_EN = "Follow me. I'll tell you what your body's been trying to say... in another language."
const CLOSE_ZH = "\u5173\u6ce8\u6211\u3002\u6211\u7528\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u544a\u8bc9\u4f60\u8eab\u4f53\u4e00\u76f4\u5728\u8bf4\u4ec0\u4e48\u3002"

const scripts = [
  {
    num: 1,
    topic: "Fatigue (Version A - Battery Metaphor)",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy are you always tired?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7d2f\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Qi deficiency.\nThat means your body's battery can't hold a charge.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u8eab\u4f53\u7535\u6c60\u5145\u4e0d\u6ee1\u3002" },
      { label: "EXPLAIN", en: "Other people sleep and wake up at 100%. You sleep and wake up at 40%. By 3pm, you're done. Not because you're lazy. Because your battery was never full to begin with.", zh: "\u522b\u4eba\u7761\u4e00\u89c9\u9192100%\u3002\u4f60\u7761\u4e00\u89c9\u919240%\u3002\u5230\u4e0b\u5348\u4e09\u70b9\u4f60\u5c31\u6491\u4e0d\u4f4f\u4e86\u3002\u4e0d\u662f\u56e0\u4e3a\u4f60\u61d2\u3002\u662f\u56e0\u4e3a\u4f60\u7684\u7535\u6c60\u4ece\u4e00\u5f00\u59cb\u5c31\u6ca1\u6ee1\u8fc7\u3002" },
      { label: "TIP", en: "Try warm water with a slice of ginger every morning. Simple. But it might help.", zh: "\u8bd5\u8bd5\u6bcf\u5929\u65e9\u4e0a\u559d\u6e29\u6c34\u52a0\u4e00\u7247\u59dc\u3002\u7b80\u5355\u3002\u4f46\u53ef\u80fd\u6709\u5e2e\u52a9\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 2,
    topic: "Fatigue (Version B - Signal Metaphor)",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy are you always tired?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7d2f\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Qi deficiency.\nThat means your body's signal is weak.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u8eab\u4f53\u4fe1\u53f7\u5f88\u5f31\u3002" },
      { label: "EXPLAIN", en: "You know when your phone has 1 bar of signal? It still works. But everything is slow. Pages won't load. Videos buffer. That's your body on low Qi. You're not broken. You're just on 1 bar.", zh: "\u4f60\u77e5\u9053\u624b\u673a\u53ea\u5269\u4e00\u683c\u4fe1\u53f7\u7684\u65f6\u5019\u5417\uff1f\u8fd8\u80fd\u7528\u3002\u4f46\u4ec0\u4e48\u90fd\u6162\u3002\u7f51\u9875\u6253\u4e0d\u5f00\u3002\u89c6\u9891\u4e00\u76f4\u8f6c\u5708\u3002\u4f60\u7684\u8eab\u4f53\u6c14\u865a\u5c31\u662f\u8fd9\u6837\u3002\u4f60\u6ca1\u6709\u574f\u3002\u4f60\u53ea\u662f\u4e00\u683c\u4fe1\u53f7\u3002" },
      { label: "TIP", en: "Try warm ginger water in the morning. It's like giving your body a signal boost.", zh: "\u8bd5\u8bd5\u65e9\u4e0a\u559d\u6e29\u6c34\u52a0\u59dc\u3002\u5c31\u50cf\u7ed9\u4f60\u7684\u8eab\u4f53\u52a0\u5f3a\u4fe1\u53f7\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 3,
    topic: "Fatigue (Version C - Direct & Powerful)",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy are you always tired?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7d2f\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Qi deficiency.\nThat means your body is running on fumes.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u8eab\u4f53\u5728\u7a7a\u8f6c\u3002" },
      { label: "EXPLAIN", en: "You sleep 8 hours. Still tired. You drink coffee. Still tired. You take a nap. Still tired. Nothing works because the problem isn't sleep. It's energy production. Your body forgot how to make enough of it.", zh: "\u4f60\u77618\u5c0f\u65f6\u3002\u8fd8\u662f\u7d2f\u3002\u4f60\u559d\u5496\u5561\u3002\u8fd8\u662f\u7d2f\u3002\u4f60\u5348\u7761\u3002\u8fd8\u662f\u7d2f\u3002\u4ec0\u4e48\u90fd\u6ca1\u7528\uff0c\u56e0\u4e3a\u95ee\u9898\u4e0d\u5728\u7761\u7720\u3002\u5728\u4e8e\u80fd\u91cf\u751f\u4ea7\u3002\u4f60\u7684\u8eab\u4f53\u5fd8\u4e86\u600e\u4e48\u5236\u9020\u8db3\u591f\u7684\u80fd\u91cf\u3002" },
      { label: "TIP", en: "One thing: stop drinking ice water. Switch to warm. Your body spends less energy heating it up. Small change. But it adds up.", zh: "\u4e00\u4ef6\u4e8b\uff1a\u522b\u559d\u51b0\u6c34\u4e86\u3002\u6539\u559d\u6e29\u7684\u3002\u4f60\u7684\u8eab\u4f53\u4e0d\u7528\u82b1\u989d\u5916\u80fd\u91cf\u53bb\u52a0\u70ed\u5b83\u3002\u5c0f\u6539\u53d8\u3002\u4f46\u6709\u7d2f\u79ef\u6548\u679c\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 4,
    topic: "Sleep - Waking at 3AM",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy do you wake up at 3AM?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u51cc\u66683\u70b9\u9192\uff1f` },
      { label: "TRANSLATE", en: "In another language, 1 to 3AM is liver time.\nThat means your liver is working overtime while you're trying to sleep.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u51cc\u66681\u52303\u70b9\u662f\u809d\u7684\u65f6\u95f4\u3002\n\u610f\u601d\u662f\u4f60\u7684\u809d\u5728\u52a0\u73ed\uff0c\u800c\u4f60\u60f3\u7761\u89c9\u3002" },
      { label: "EXPLAIN", en: "Your liver processes emotions at night. All the stress you pushed down during the day? Your liver handles it at 3AM. That's why you wake up. Not because of insomnia. Because your liver is doing night shift.", zh: "\u4f60\u7684\u809d\u5728\u591c\u95f4\u5904\u7406\u60c5\u7eea\u3002\u4f60\u767d\u5929\u538b\u4e0b\u53bb\u7684\u6240\u6709\u538b\u529b\uff1f\u809d\u51cc\u66683\u70b9\u5e2e\u4f60\u5904\u7406\u3002\u6240\u4ee5\u4f60\u9192\u4e86\u3002\u4e0d\u662f\u5931\u7720\u3002\u662f\u809d\u5728\u505a\u591c\u73ed\u3002" },
      { label: "TIP", en: "Try chrysanthemum tea before bed. It cools the liver. Simple. Old. But it works for a lot of people.", zh: "\u8bd5\u8bd5\u7761\u524d\u559d\u83ca\u82b1\u8336\u3002\u5b83\u80fd\u6e05\u809d\u3002\u7b80\u5355\u3002\u8001\u6d3e\u3002\u4f46\u5bf9\u5f88\u591a\u4eba\u6709\u7528\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 5,
    topic: "Sleep - Can't Fall Asleep",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy can't you fall asleep?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u7761\u4e0d\u7740\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Yin deficiency.\nThat means your body's cooling system is running low.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u9634\u865a\u3002\n\u610f\u601d\u662f\u4f60\u8eab\u4f53\u7684\u51b7\u5374\u7cfb\u7edf\u4e0d\u591f\u7528\u4e86\u3002" },
      { label: "EXPLAIN", en: "Your body runs hot at night because there's not enough cooling fluid. Like an engine overheating with low coolant. Your brain races. Your body won't shut down. You're not wired. You're overheated.", zh: "\u4f60\u7684\u8eab\u4f53\u591c\u95f4\u8fd0\u884c\u8fc7\u70ed\uff0c\u56e0\u4e3a\u51b7\u5374\u6db2\u4e0d\u591f\u3002\u5c31\u50cf\u5f15\u64ce\u51b7\u5374\u6db2\u4e0d\u8db3\u8fc7\u70ed\u3002\u4f60\u7684\u5927\u8111\u505c\u4e0d\u4e0b\u6765\u3002\u8eab\u4f53\u4e0d\u80fd\u5173\u673a\u3002\u4f60\u4e0d\u662f\u5174\u594b\u3002\u4f60\u662f\u8fc7\u70ed\u3002" },
      { label: "TIP", en: "One thing: stop looking at your phone 30 minutes before bed. The blue light adds heat. Read a book instead. Boring is good for sleep.", zh: "\u4e00\u4ef6\u4e8b\uff1a\u7761\u524d30\u5206\u949f\u522b\u770b\u624b\u673a\u3002\u84dd\u5149\u4f1a\u52a0\u70ed\u3002\u6539\u770b\u4e66\u3002\u65e0\u804a\u5bf9\u7761\u7720\u662f\u597d\u4e8b\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 6,
    topic: "Brain Fog",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy does your brain feel foggy?`, zh: `${OPEN_ZH}\n\u4f60\u7684\u8111\u5b50\u4e3a\u4ec0\u4e48\u50cf\u6709\u4e00\u56e2\u96fe\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Dampness clouding the mind.\nThat means your body has trash that hasn't been cleared out.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u75f0\u6e7f\u8499\u853d\u6e05\u7a8d\u3002\n\u610f\u601d\u662f\u4f60\u8eab\u4f53\u91cc\u6709\u5783\u573e\u6ca1\u6e05\u8d70\u3002" },
      { label: "EXPLAIN", en: "Imagine a room that hasn't been aired out in weeks. The air gets thick and stale. That's your brain on Dampness. You're not stupid. Your room just needs airing out.", zh: "\u60f3\u8c61\u4e00\u4e2a\u623f\u95f4\u597d\u51e0\u5468\u6ca1\u901a\u98ce\u3002\u7a7a\u6c14\u53d8\u6d51\u53d8\u95f7\u3002\u8fd9\u5c31\u662f\u75f0\u6e7f\u65f6\u4f60\u7684\u5927\u8111\u3002\u4f60\u4e0d\u662f\u7b28\u3002\u4f60\u7684\u623f\u95f4\u53ea\u662f\u9700\u8981\u901a\u98ce\u3002" },
      { label: "TIP", en: "Two things: less sugar, more movement. Sugar feeds the fog. Sweating clears it. Even a 15-minute walk helps.", zh: "\u4e24\u4ef6\u4e8b\uff1a\u5c11\u5403\u7cd6\uff0c\u591a\u52a8\u3002\u7cd6\u4f1a\u52a0\u91cd\u96fe\u3002\u51fa\u6c57\u80fd\u6e05\u96fe\u3002\u5373\u4f7f\u53ea\u662f15\u5206\u949f\u7684\u6563\u6b65\u4e5f\u6709\u7528\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 7,
    topic: "Bloating",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy do you bloat after eating?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u5403\u5b8c\u5c31\u80c0\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Spleen deficiency.\nThat means your digestion engine is too small for the job.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u813e\u865a\u3002\n\u610f\u601d\u662f\u4f60\u7684\u6d88\u5316\u5f15\u64ce\u592a\u5c0f\u4e86\u3002" },
      { label: "EXPLAIN", en: "Other people eat a full meal and their engine handles it. You eat half a meal and your engine stalls. It's not that you eat too much. Your engine just doesn't have enough power to process what you give it.", zh: "\u522b\u4eba\u5403\u4e00\u987f\u996d\uff0c\u5f15\u64ce\u6b63\u5e38\u8fd0\u8f6c\u3002\u4f60\u5403\u534a\u987f\u5c31\u5835\u4e86\u3002\u4e0d\u662f\u4f60\u5403\u592a\u591a\u3002\u662f\u4f60\u7684\u5f15\u64ce\u529f\u7387\u4e0d\u591f\u3002" },
      { label: "TIP", en: "One thing: eat warm foods. Avoid cold drinks with meals. Cold makes your engine work harder. Warm keeps it running smooth.", zh: "\u4e00\u4ef6\u4e8b\uff1a\u5403\u6e29\u7684\u98df\u7269\u3002\u996d\u65f6\u522b\u559d\u51b0\u996e\u3002\u51b7\u4f1a\u8ba9\u5f15\u64ce\u66f4\u8d39\u529b\u3002\u6e29\u80fd\u8ba9\u5b83\u987a\u7545\u8fd0\u8f6c\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 8,
    topic: "Stress / Anxiety",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy are you always anxious?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u7126\u8651\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Qi stagnation.\nThat means your energy is stuck. It can't flow.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u6c14\u90c1\u3002\n\u610f\u601d\u662f\u4f60\u7684\u80fd\u91cf\u5835\u4f4f\u4e86\u3002\u6d41\u4e0d\u52a8\u3002" },
      { label: "EXPLAIN", en: "Think of a traffic jam. Cars are everywhere. Nobody moves. Everyone's frustrated. That's what happens inside you. Energy builds up but has nowhere to go. So it turns into tight chest, sighing, and that overwhelmed feeling.", zh: "\u60f3\u8c61\u4e00\u573a\u5835\u8f66\u3002\u8f66\u5230\u5904\u90fd\u662f\u3002\u6ca1\u4eba\u52a8\u3002\u6240\u6709\u4eba\u90fd\u7126\u8651\u3002\u8fd9\u5c31\u662f\u4f60\u8eab\u4f53\u91cc\u53d1\u751f\u7684\u4e8b\u3002\u80fd\u91cf\u5806\u79ef\u4f46\u65e0\u5904\u53ef\u53bb\u3002\u6240\u4ee5\u53d8\u6210\u80f8\u95f7\u3001\u53f9\u6c14\u3001\u548c\u90a3\u79cd\u5d29\u6e83\u611f\u3002" },
      { label: "TIP", en: "One thing: take a 10-minute walk. Not for exercise. To get your energy moving again. When energy flows, anxiety drops.", zh: "\u4e00\u4ef6\u4e8b\uff1a\u6563\u6b6510\u5206\u949f\u3002\u4e0d\u662f\u4e3a\u4e86\u8fd0\u52a8\u3002\u662f\u4e3a\u4e86\u8ba9\u80fd\u91cf\u6d41\u8d77\u6765\u3002\u80fd\u91cf\u6d41\u52a8\u4e86\uff0c\u7126\u8651\u5c31\u4e0b\u964d\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 9,
    topic: "Always Cold",
    sections: [
      { label: "OPEN", en: `${OPEN_EN}\nWhy are you always cold?`, zh: `${OPEN_ZH}\n\u4f60\u4e3a\u4ec0\u4e48\u603b\u662f\u51b7\uff1f` },
      { label: "TRANSLATE", en: "In another language, this is called Yang deficiency.\nThat means your body's internal heater is broken.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u8fd9\u53eb\u9633\u865a\u3002\n\u610f\u601d\u662f\u4f60\u8eab\u4f53\u7684\u5185\u90e8\u6696\u6c14\u574f\u4e86\u3002" },
      { label: "EXPLAIN", en: "You know a house with a broken thermostat? The heat never kicks in. No matter how high you set it, the room stays cold. That's your body. The heater is there. It just doesn't turn on.", zh: "\u4f60\u77e5\u9053\u6052\u6e29\u5668\u574f\u4e86\u7684\u623f\u5b50\u5417\uff1f\u6696\u6c14\u6c38\u8fdc\u4e0d\u4f1a\u542f\u52a8\u3002\u4e0d\u7ba1\u4f60\u8c03\u591a\u9ad8\uff0c\u623f\u95f4\u8fd8\u662f\u51b7\u3002\u8fd9\u5c31\u662f\u4f60\u7684\u8eab\u4f53\u3002\u6696\u6c14\u5728\u90a3\u3002\u5b83\u5c31\u662f\u4e0d\u542f\u52a8\u3002" },
      { label: "TIP", en: "Add warming foods: ginger, cinnamon, lamb. Avoid cold drinks and raw salads. Your heater needs fuel, not ice.", zh: "\u52a0\u6e29\u6027\u98df\u7269\uff1a\u59dc\u3001\u6842\u76ae\u3001\u7f8a\u8089\u3002\u5c11\u559d\u51b0\u6c34\u3001\u5c11\u5403\u751f\u6c99\u62c9\u3002\u4f60\u7684\u6696\u6c14\u9700\u8981\u71c3\u6599\uff0c\u4e0d\u662f\u51b0\u3002" },
      { label: "CLOSE", en: CLOSE_EN, zh: CLOSE_ZH },
    ],
  },
  {
    num: 10,
    topic: "Pattern Discovery - Your Symptoms Are Connected",
    sections: [
      { label: "OPEN", en: "Another signal from your body. Actually, several signals.\nLet's see if they're connected.", zh: "\u4f60\u8eab\u4f53\u7684\u53c8\u4e00\u4e2a\u4fe1\u53f7\u3002\u5176\u5b9e\uff0c\u597d\u51e0\u4e2a\u4fe1\u53f7\u3002\n\u6765\u770b\u770b\u5b83\u4eec\u662f\u4e0d\u662f\u6709\u5173\u8054\u3002" },
      { label: "TRANSLATE", en: "In another language, your symptoms aren't random.\nThey're all leaves on the same tree.", zh: "\u6362\u4e00\u79cd\u8bed\u8a00\u6765\u8bf4\uff0c\u4f60\u7684\u75c7\u72b6\u4e0d\u662f\u968f\u673a\u7684\u3002\n\u5b83\u4eec\u662f\u540c\u4e00\u68f5\u6811\u4e0a\u7684\u4e0d\u540c\u53f6\u5b50\u3002" },
      { label: "EXPLAIN", en: "Always tired. Always cold. Poor digestion. Low motivation. Western medicine treats them separately. But what if they're all coming from the same root? Same pattern. Same body type. Fix the root, and the leaves take care of themselves.", zh: "\u603b\u662f\u7d2f\u3002\u603b\u662f\u51b7\u3002\u6d88\u5316\u4e0d\u597d\u3002\u6ca1\u6709\u52a8\u529b\u3002\u897f\u533b\u5206\u5f00\u6cbb\u3002\u4f46\u5982\u679c\u5b83\u4eec\u90fd\u6765\u81ea\u540c\u4e00\u4e2a\u6839\u5462\uff1f\u540c\u4e00\u4e2a\u6a21\u5f0f\u3002\u540c\u4e00\u4e2a\u4f53\u8d28\u3002\u4fee\u597d\u6839\uff0c\u53f6\u5b50\u81ea\u5df1\u5c31\u597d\u4e86\u3002" },
      { label: "TIP", en: "Want to find your root? There's a free body type quiz at myeasterntype.com. 27 questions. 5 minutes. It tells you which pattern is driving your symptoms.", zh: "\u60f3\u627e\u5230\u4f60\u7684\u6839\uff1f\u53bb myeasterntype.com \u505a\u514d\u8d39\u4f53\u8d28\u6d4b\u8bd5\u300227\u9898\u30025\u5206\u949f\u3002\u5b83\u4f1a\u544a\u8bc9\u4f60\u54ea\u4e2a\u6a21\u5f0f\u5728\u9a71\u52a8\u4f60\u7684\u75c7\u72b6\u3002" },
      { label: "CLOSE", en: "Follow me. I'll tell you what your body's been trying to say... in another language.", zh: "\u5173\u6ce8\u6211\u3002\u6211\u7528\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u544a\u8bc9\u4f60\u8eab\u4f53\u4e00\u76f4\u5728\u8bf4\u4ec0\u4e48\u3002" },
    ],
  },
]

function makeDoc(allScripts, outputPath) {
  const children = []

  children.push(new Paragraph({
    children: [new TextRun({ text: "BODY TRANSLATOR \u2014 First 10 Video Scripts", font: FONT_EN, size: 36, bold: true, color: "C9A355" })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "Formula: OPEN \u2192 TRANSLATE \u2192 EXPLAIN \u2192 TIP \u2192 CLOSE", font: FONT_EN, size: 20, color: "888888" })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  }))

  children.push(new Paragraph({
    children: [new TextRun({ text: "Publishing Schedule:", font: FONT_EN, size: 20, bold: true })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
  }))

  const scheduleLines = [
    "Week 1: #1-3 (Fatigue A/B/C) + #4 (Sleep 3AM)",
    "Week 2: #5-6 (Sleep + Brain Fog) + reshoot winner from Week 1",
    "Week 3: #7-9 (Bloating + Stress + Cold) + reshoot winner from Week 2",
    "Week 4: #10 (Pattern \u2192 quiz CTA) + reshoot all with winning style",
  ]
  for (const line of scheduleLines) {
    children.push(new Paragraph({
      children: [new TextRun({ text: line, font: FONT_EN, size: 18, color: "666666" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 30 },
    }))
  }

  children.push(new Paragraph({ children: [new TextRun({ text: "", size: 10 })], spacing: { after: 300 } }))

  for (let i = 0; i < allScripts.length; i++) {
    const script = allScripts[i]

    if (i > 0) {
      children.push(new Paragraph({
        children: [new TextRun({ text: "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501", font: FONT_EN, size: 16, color: "CCCCCC" })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
      }))
    }

    children.push(new Paragraph({
      children: [new TextRun({ text: `#${script.num}  ${script.topic}`, font: FONT_EN, size: 28, bold: true, color: "C9A355" })],
      spacing: { before: 200, after: 300 },
    }))

    for (const section of script.sections) {
      children.push(new Paragraph({
        children: [new TextRun({ text: `[${section.label}]`, font: FONT_EN, size: 22, bold: true, color: "333333" })],
        spacing: { before: 300, after: 100 },
      }))

      const enLines = section.en.split("\n").filter(l => l.trim())
      for (const line of enLines) {
        children.push(new Paragraph({
          children: [new TextRun({ text: line.trim(), font: FONT_EN, size: 22 })],
          spacing: { after: 80 },
        }))
      }

      children.push(new Paragraph({ children: [new TextRun({ text: "", size: 10 })], spacing: { after: 40 } }))

      const zhLines = section.zh.split("\n").filter(l => l.trim())
      for (const line of zhLines) {
        children.push(new Paragraph({
          children: [new TextRun({ text: line.trim(), font: FONT_ZH, size: 21, color: "666666" })],
          spacing: { after: 60 },
        }))
      }
    }
  }

  const doc = new Document({
    sections: [{
      properties: {
        page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
      },
      children,
    }],
  })

  Packer.toBuffer(doc).then(buffer => {
    writeFileSync(outputPath, buffer)
    console.log(`Created: ${outputPath}`)
  })
}

const outDir = "D:\\EastType\\easttype-app\\docs\\video-scripts"
mkdirSync(outDir, { recursive: true })
makeDoc(scripts, join(outDir, "01-first-10-scripts.docx"))
