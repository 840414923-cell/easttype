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

---

## 第二批：Chinese Herbs for Acne / PMS / Hair Loss

### Hero 图（3 张，1536x864，深色背景扁平设计）

**痤疮 acne-hero.png:**
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). A circular face shape shown in two halves divided by a subtle gold vertical line. Left half: the face surface is covered with red inflamed spots and blemishes, rendered in muted red-pink gradient blocks, small jagged red geometric shapes representing heat and inflammation erupting upward. Right half: the same face surface smooth and clear, rendered in warm gold-cream gradient blocks, small soft circular particles drifting downward representing cooled and settled skin. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic similar to Headspace or Calm. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

**经前综合症 pms-hero.png:**
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). A female torso silhouette shown in two halves divided by a subtle gold vertical line. Left half: the figure is tense and contracted with shoulders raised, rendered in muted purple-grey gradient blocks, small jagged angular shapes radiating outward from the chest representing tension and irritability. Right half: the same figure relaxed and open with shoulders lowered, rendered in warm gold-rose gradient blocks, small soft curved lines flowing downward representing released tension and smooth energy flow. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic similar to Headspace or Calm. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

**脱发 hair-loss-hero.png:**
```
Flat design illustration on dark warm background (#1A1410 deep brown-black). A tree shown in two halves divided by a subtle gold vertical line. Left half: the tree has sparse thin branches with few leaves, rendered in muted grey-brown gradient blocks, small leaf shapes falling downward representing hair shedding and depletion. Right half: the same tree with full lush branches and abundant leaves, rendered in warm gold-green gradient blocks, small leaf shapes growing upward representing restored nourishment and growth. Minimalist flat geometric shapes, no facial features, no outlines, smooth gradients, modern wellness app aesthetic similar to Headspace or Calm. Gold accent (#C9A355). 16:9 aspect ratio. No text, no watermark, no words, no letters.
```

### 配方图（9 张，1536x864，浅色背景实拍俯拍）

**痤疮 配方1 - 金银花蒲公英茶 (Damp Heat):**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried honeysuckle flowers (small white-yellow tubular flowers, left), dried dandelion leaves and root pieces (dark green-brown, center), and dried chrysanthemum flowers (small yellow-white flower heads, right). Each ingredient has a thin handwritten-style label. A clear glass cup of pale golden-green tea sits behind the plate. Soft natural light, light cream marble background, minimalist food photography style, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: pale gold, soft green, cream, dried flower tones. Bottom text: "Formula 1: Heat-Clearing Skin Tea" Small label: "For Damp Heat body type"
```

**痤疮 配方2 - 丹参桃胶茶 (Blood Stasis):**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried salvia root slices (dark red-brown thin slices, left), soaked peach gum (translucent amber gelatinous pieces, center), and saffron threads (deep red-orange thin threads, right). Each ingredient has a thin handwritten-style label. A clear glass cup of deep golden-red tea sits behind the plate. Soft natural light, light cream marble background, minimalist food photography style, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: deep amber, warm gold, translucent amber, red-brown tones. Bottom text: "Formula 2: Blood-Moving Complexion Tea" Small label: "For Blood Stasis body type"
```

**痤疮 配方3 - 玫瑰薄荷茶 (Qi Stagnant):**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried rose petals (deep pink-red dried petals, left), fresh mint leaves (bright green fresh leaves, center), and roasted cassia seeds (dark brown small angular seeds, right). Each ingredient has a thin handwritten-style label. A clear glass cup of light pink-tinged tea sits behind the plate. Soft natural light, light cream marble background, minimalist food photography style, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: soft pink, fresh green, warm cream, brown seed tones. Bottom text: "Formula 3: Stress-Breakout Calming Tea" Small label: "For Qi Stagnant body type"
```

**PMS 配方1 - 玫瑰香附茶 (Qi Stagnant):**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried rose buds (small pink-red dried flower buds, left), dried cyperus rhizome slices (brown thin oval slices, center), and dried white peony root slices (creamy white thin slices, right). Each ingredient has a thin handwritten-style label. A clear glass cup of pale pink-tinged tea sits behind the plate. Soft natural light, light cream linen background, comforting and feminine aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: soft pink, warm cream, light brown, white tones. Bottom text: "Formula 1: Liver-Soothing Balance Tea" Small label: "For Qi Stagnant body type"
```

**PMS 配方2 - 当归红枣茶 (Blood Deficient):**
```
A warm, inviting overhead photograph of three ingredients arranged on a white ceramic plate: dried dong quai slices (light brown thin root slices, left), dried red dates (dark red oval fruits, center), and dried longan flesh (translucent brown-black flesh pieces, right). Each ingredient has a thin handwritten-style label. A clear glass cup of rich amber-brown tea sits behind the plate. Soft natural light, light cream linen background, comforting home-cooking aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: warm amber, deep red-brown, cream, golden tones. Bottom text: "Formula 2: Blood-Nourishing Flow Tea" Small label: "For Blood Deficient body type"
```

**PMS 配方3 - 藏红花当归茶 (Blood Stasis):**
```
An elegant overhead photograph of three ingredients arranged on a white ceramic plate: saffron threads (deep red-orange thin threads, left), dried dong quai slices (light brown thin root slices, center), and a small mound of dark brown sugar pieces (right). A few slices of fresh ginger sit beside the plate. Each ingredient has a thin handwritten-style label. A clear glass cup of deep golden-red tea sits behind the plate. Soft natural light, light cream marble background, warm and soothing aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: deep red-gold, warm amber, cream, brown sugar tones. Bottom text: "Formula 3: Comfort Flow Tea" Small label: "For Blood Stasis body type"
```

**脱发 配方1 - 何首乌熟地茶 (Yin Deficient):**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried he shou wu slices (dark brown-black root slices, left), dried prepared rehmannia pieces (glossy black soft pieces, center), and dried goji berries (small red-orange berries, right). Each ingredient has a thin handwritten-style label. A clear glass cup of deep dark amber tea sits behind the plate. Soft natural light, light cream marble background, grounding and earthy aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: deep dark brown, warm amber, red-orange, cream tones. Bottom text: "Formula 1: Essence-Building Hair Tea" Small label: "For Yin Deficient body type"
```

**脱发 配方2 - 当归黑枣茶 (Blood Deficient):**
```
A warm overhead photograph of three ingredients arranged on a white ceramic plate: dried dong quai slices (light brown thin root slices, left), dried red dates (dark red oval fruits, center), and dried black jujubes (wrinkled black-skinned fruits, right). A small handful of goji berries scattered between. Each ingredient has a thin handwritten-style label. A clear glass cup of warm amber-brown tea sits behind the plate. Soft natural light, light cream linen background, nourishing and comforting aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: warm amber, deep red, dark brown, cream tones. Bottom text: "Formula 2: Blood-Nourishing Hair Tea" Small label: "For Blood Deficient body type"
```

**脱发 配方3 - 黄芪何首乌茶 (Qi Deficient):**
```
A clean overhead photograph of three ingredients arranged on a white ceramic plate: dried astragalus slices (pale yellow-white root slices, left), dried he shou wu slices (dark brown-black root slices, center), and dried Chinese yam slices (white starchy oval slices, right). Dried red dates beside. Each ingredient has a thin handwritten-style label. A clear glass cup of pale golden tea sits behind the plate. Soft natural light, light cream marble background, simple and grounding aesthetic, shallow depth of field. Right side or bottom area left clean for text overlay. Color palette: pale gold, warm cream, dark brown, white tones. Bottom text: "Formula 3: Qi-Supporting Hair Tea" Small label: "For Qi Deficient body type"
```

### 图片文件名清单

| 文件名 | 类型 | 对应页面 |
|---|---|---|
| `acne-hero.png` | Hero | chinese-herbs-for-acne |
| `pms-hero.png` | Hero | chinese-herbs-for-pms |
| `hair-loss-hero.png` | Hero | chinese-herbs-for-hair-loss |
| `formula-honeysuckle-dandelion.png` | 配方 | acne Formula 1 |
| `formula-dan-shen-peach-gum.png` | 配方 | acne Formula 2 |
| `formula-rose-mint.png` | 配方 | acne Formula 3 |
| `formula-rose-cyperus.png` | 配方 | PMS Formula 1 |
| `formula-dong-quai-jujube.png` | 配方 | PMS Formula 2 |
| `formula-saffron-dong-quai.png` | 配方 | PMS Formula 3 |
| `formula-he-shou-wu-rehmannia.png` | 配方 | hair loss Formula 1 |
| `formula-dong-quai-black-jujube.png` | 配方 | hair loss Formula 2 |
| `formula-astragalus-he-shou-wu.png` | 配方 | hair loss Formula 3 |

### 数据文件待更新路径

图片画好后，需要把 solutions-data.ts 中的 image 路径从占位图改为新文件名：

- acne heroImage: `/images/solutions/digestion-hero.png` -> `/images/solutions/acne-hero.png`
- acne formula 1 image: -> `/images/solutions/formula-honeysuckle-dandelion.png`
- acne formula 2 image: -> `/images/solutions/formula-dan-shen-peach-gum.png`
- acne formula 3 image: -> `/images/solutions/formula-rose-mint.png`
- PMS heroImage: `/images/solutions/anxiety-hero.png` -> `/images/solutions/pms-hero.png`
- PMS formula 1 image: -> `/images/solutions/formula-rose-cyperus.png`
- PMS formula 2 image: -> `/images/solutions/formula-dong-quai-jujube.png`
- PMS formula 3 image: -> `/images/solutions/formula-saffron-dong-quai.png`
- hair loss heroImage: `/images/solutions/energy-hero.png` -> `/images/solutions/hair-loss-hero.png`
- hair loss formula 1 image: -> `/images/solutions/formula-he-shou-wu-rehmannia.png`
- hair loss formula 2 image: -> `/images/solutions/formula-dong-quai-black-jujube.png`
- hair loss formula 3 image: -> `/images/solutions/formula-astragalus-he-shou-wu.png`
