# Solutions 专题配图提示词模板

每次新增 Solutions 专题需要 4 张图：1 张 Hero 概念图 + 3 张配方实拍图。

图片放在 `public/images/solutions/`，文件名格式：
- `{topic}-hero.png` — Hero 图
- `formula-{ingredient1}-{ingredient2}.png` — 配方图

图片尺寸：1536x864 (16:9)

## Hero 图提示词模板

Hero 图是**深色背景扁平设计概念图**，表达"问题→解决"的转变。

模板格式：
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). [主体元素] shown in two halves divided by a subtle gold vertical line. Left half: [问题状态描述], rendered in muted [冷色] gradient blocks, [问题相关的小元素] representing [问题的象征]. Right half: [解决状态描述], rendered in warm gold-[暖色] gradient blocks, [解决相关的小元素] representing [解决的象征]. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic similar to Headspace or Calm. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

### 已完成的 Hero 提示词

**减肥 (weight-loss):**
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). A woman shown in two halves divided by a subtle gold vertical line. Left half: her body is round and heavy, rendered in muted teal-green gradient blocks, surrounded by small bloated circle shapes representing fluid retention and dampness. Right half: the same woman slim and upright, rendered in warm gold gradient blocks, surrounded by small floating particles drifting upward representing released moisture. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic similar to Headspace or Calm. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

**疲劳 (energy):**
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). A seated figure shown in two halves divided by a subtle gold vertical line. Left half: the figure slumped and drooping, rendered in muted grey-blue gradient blocks, a small empty battery icon floating above the head representing depletion. Right half: the same figure sitting upright and tall, rendered in warm gold-orange gradient blocks, a small full glowing battery icon above the head representing restored energy. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

**失眠 (sleep):**
参考疲劳风格，主题为"辗转反侧→安详入睡"

**消化 (digestion):**
参考疲劳风格，主题为"腹胀拥堵→通畅消化"

**便秘 (constipation):**
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). A section of pipe shown in two halves divided by a subtle gold vertical line. Left half: the pipe is dry, cracked, and blocked, rendered in muted grey-brown gradient blocks, small dried cracked earth fragments accumulating inside representing stagnation and dryness. Right half: the same pipe smooth, moist, and flowing, rendered in warm gold-blue gradient blocks, small water droplets flowing downward freely representing restored moisture and movement. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic similar to Headspace or Calm. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

## 配方图提示词模板

配方图是**浅色背景实拍食材俯视图**，统一风格。

模板格式：
```
A [形容词] overhead photograph of [食材们] arranged on a [餐具]. [每个食材的描述和位置]. Each ingredient has a thin handwritten-style label. A clear glass cup of [茶色] tea sits behind the plate. [额外道具如蜂蜜罐]. Soft [光线类型], [背景描述], [美学风格], shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: [色调]. Bottom text: "Formula [N]: [配方英文名]" Small label: "For [体质名] body type"
```

### 已完成的配方图提示词

**减肥 配方1 — 荷叶山楂茶:**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried lotus leaf (green-brown, large flat piece on left), dried hawthorn berries (dark red, small round, center), and aged tangerine peel (orange-brown curled piece, right). Each ingredient has a thin handwritten-style label. A clear glass cup of amber-colored tea sits behind the plate. Soft natural light, light cream marble background, minimalist food photography style, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: warm amber, cream, dried herb tones. Bottom text: "Formula 1: Lotus Leaf & Hawthorn Tea" Small label: "For Phlegm Damp body type"
```

**便秘 配方1 — 火麻仁杏仁茶:**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: hemp seeds (small round greenish-brown seeds, left), apricot kernels (flat beige oval kernels, center), and dried ophiopogon root (thin translucent white strips, right). Each ingredient has a thin handwritten-style label. A clear glass cup of pale golden tea sits behind the plate with a small jar of honey beside it. Soft natural light, light cream marble background, minimalist food photography style, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: warm cream, pale gold, soft beige, honey tones. Bottom text: "Formula 1: Hemp Seed & Apricot Kernel Tea" Small label: "For Yin Deficient body type"
```

**便秘 配方2 — 决明子红枣茶:**
```
A warm, inviting overhead photograph of a clear glass cup filled with amber-colored cassia seed tea. Several red jujube dates and goji berries float in the tea. Roasted cassia seeds (dark brown angular seeds) visible at the bottom of the cup. A small ceramic dish beside the cup holds roasted cassia seeds, dried goji berries, and red jujube dates as ingredient display. A small piece of licorice root rests near the dish. Soft diffused light, warm cream linen background, comforting home-cooking aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: warm amber, cream, soft gold, dried herb tones. Bottom text: "Formula 2: Cassia Seed & Jujube Tea" Small label: "For Qi Deficient body type"
```

**便秘 配方3 — 陈皮杏仁茶:**
```
An elegant close-up photograph of a clear glass cup filled with light orange-gold tangerine peel tea. Aged tangerine peel strips (orange-brown curled pieces) float on the surface along with apricot kernels and a few fennel seeds scattered at the bottom. A small ceramic dish beside the cup holds dried aged tangerine peel, apricot kernels, and fennel seeds as ingredient display. A small jar of honey sits nearby. Warm afternoon light creating soft shadows. Light cream background, calming and aromatic aesthetic, soft bokeh, food photography style. Right side or bottom area left clean for text overlay. Color palette: warm orange, gold, cream, soft brown. Bottom text: "Formula 3: Tangerine Peel & Apricot Kernel Tea" Small label: "For Qi Stagnant body type"
```

## 规则总结

1. **Hero 图**：深色背景 #1A1410，扁平设计，左半边问题状态（冷色），右半边解决状态（金色暖色），中间金色分割线，无文字无水印
2. **配方图**：浅色奶油色背景，实拍食材俯拍，手写标签，玻璃杯茶汤，底部留文字区，浅景深
3. **配色**：Hero 用金色 #C9A355 强调；配方图用 warm cream / soft gold / 食材本色
4. **尺寸**：全部 1536x864 (16:9)
5. **文件命名**：`{topic}-hero.png` 和 `formula-{ingredient1}-{ingredient2}.png`
6. **存放位置**：`public/images/solutions/`

## 下次做新专题时

1. 先确定主题和3个体质/配方
2. 按模板写 Hero 提示词（选一个比喻：人体/管道/容器/自然物，左问题右解决）
3. 按模板写3个配方提示词（俯拍食材+茶汤+手写标签+底部文字）
4. 用 image2 生成，1536x864
5. 压缩后放入 public/images/solutions/
6. 更新 solutions-data.ts 中的 image 路径
