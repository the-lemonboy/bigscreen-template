# Tailwind CSS px-to-viewport

<div align="center">

![npm version](https://img.shields.io/npm/v/tailwindcss-px-to-viewport)
![license](https://img.shields.io/npm/l/tailwindcss-px-to-viewport)
![downloads](https://img.shields.io/npm/dm/tailwindcss-px-to-viewport)

**用 Tailwind 写大屏，直接写设计稿的像素值就够了**

[GitHub](https://github.com/the-lemonboy/tailwindcss-px-to-viewport) · [NPM](https://www.npmjs.com/package/tailwindcss-px-to-viewport) · [问题反馈](https://github.com/the-lemonboy/tailwindcss-px-to-viewport/issues)

</div>

---

## 这是什么？

做可视化大屏的时候，你是不是也遇到过这样的问题：

- 设计稿给的是 `400px`，你得手动算成 `20.833vw`（400/1920*100）
- 换个分辨率，又要重新算一遍
- 代码里一堆小数，根本不知道对应设计稿的哪个值

这个插件就是来解决这个问题的。**你直接用 Tailwind 写设计稿的像素值，插件会自动帮你转成 vh/vw，适配不同屏幕。**

## 效果演示

下面这个视频展示了同一个大屏在不同分辨率下的适配效果：

![适配演示](./example.gif)

可以看到，无论屏幕是 1920×1080 还是 3840×2160，布局都能自动适配，而且代码里写的都是设计稿的原始像素值。

## 为什么用它？

### 之前：手动换算，容易出错

```vue
<!-- 设计稿：宽度 400px，高度 300px，上边距 20px -->
<div style="width: 20.833vw; height: 27.778vh; margin-top: 1.852vh;">
  <!-- 这些数字怎么来的？400/1920*100 = 20.833... 算起来太麻烦了 -->
</div>
```

### 现在：直接写设计稿的值

```vue
<!-- 设计稿：宽度 400px，高度 300px，上边距 20px -->
<div class="pw-w-[400] ph-h-[300] ph-mt-[20]">
  <!-- 就这么简单，直接写 400、300、20，插件帮你转 -->
</div>
```

**好处很明显：**
- 代码和设计稿一一对应，一眼就能看懂
- 不用算来算去，写代码更快
- 改设计稿尺寸？改个配置就行，代码不用动

## 怎么用？

### 安装

```bash
npm install tailwindcss-px-to-viewport --save-dev
```

### 配置

在 `tailwind.config.js` 里加上：

```javascript
import pxToViewport from 'tailwindcss-px-to-viewport';

export default {
  theme: {
    extend: {
      pxToViewPort: {
        PresetScreen: {
          width: 1920,  // 你的设计稿宽度
          height: 1080, // 你的设计稿高度
        },
      },
    },
  },
  plugins: [pxToViewport()],
};
```

### 写代码

设计稿上写的是 `400px`，你就写 `pw-w-[400]`；写的是 `300px`，你就写 `ph-h-[300]`。

- `pw-` 开头的会转成 `vw`（基于宽度）
- `ph-` 开头的会转成 `vh`（基于高度）

就这么简单，没了。

## 实际例子

假设设计稿是这样的：

```
标题区域：高度 60px，左右内边距 40px，上下内边距 20px
内容区域：宽度 1800px，高度 900px，左右外边距 60px
```

用这个插件，代码就是：

```vue
<div class="ph-h-[60] pw-px-[40] ph-py-[20]">
  <h1>标题</h1>
</div>

<div class="pw-w-[1800] ph-h-[900] pw-mx-[60]">
  内容
</div>
```

数值和设计稿完全一致，不需要任何换算。

## 适用场景

- 数据大屏（1920×1080、3840×2160 等）
- 需要适配多种分辨率的项目
- 不想手动算 vh/vw 的开发者

## 更多信息

- 📖 [完整文档](https://github.com/the-lemonboy/tailwindcss-px-to-viewport)
- 🐛 [问题反馈](https://github.com/the-lemonboy/tailwindcss-px-to-viewport/issues)

---

<div align="center">

**Made with ❤️ by [the-lemonboy](https://github.com/the-lemonboy)**

如果对你有帮助，给个 ⭐ 支持一下

</div>
