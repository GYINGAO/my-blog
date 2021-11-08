---
title: Vuepress 常用插件
date: 2021-11-08
tags:
  - '插件'
  - '前端'
  - '博客'
categories:
  - 'Vuepress'
---

::: tip
本文列举了 Vuepress 常用的插件，详细内容参考

- [Vuepress 插件](https://vuepress.vuejs.org/zh/plugin/)
- [reco 插件](https://vuepress-theme-reco.recoluan.com/views/plugins/)
- [Awesome Vuepress](https://github.com/vuepressjs/awesome-vuepress#plugins)
  :::

<!-- more -->

<Boxx/>

大家知道，插件可以为 Vuepress 提高强大的生态支持，丰富博客功能，美化博客页面。下面就列举一些常用的插件。

## 流程图

`vuepress-plugin-flowchart` 这个插件可以在 markdown 中展示流程图

参考[github 文档](https://github.com/ulivz/vuepress-plugin-flowchart)

**安装**

```bash
yarn add vuepress-plugin-flowchart -D
```

**配置**

```js
module.exports = {
  plugins: [
    ['flowchart']
  ],
};
```

**使用**

```md
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

**效果**
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend

## 随机名人名言

`vuepress-plugin-boxx` 该插件可以在文章内添加随机名人名言

参考[文档](https://zpj80231.gitee.io/znote/views/frontend/vuepress-plugin-boxx.html#%E5%BA%8F%E8%A8%80)

**安装**

```bash
yarn add vuepress-plugin-boxx -D
```

**配置**

```js
module.exports = {
  plugins: [
    ['boxx']
  ],
};
```

**使用**

```md
<!-- xxxx -->
<Boxx/>
```

- 引入：只需在你想要插入的地方加入`<Boxx/>`即可
- 内容：默认随机展示名人名句，支持自定义
- 样式：有三种样式，默认为 tip 样式，支持自定义
- 注意：除`<Boxx/>`这个标签是必须外，标签属性均为可选，如下表所示

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| title   | String | 要展示的 title 的内容，支持 html 标签   |
| content | String | 要展示的 content 的内容，支持 html 标签 |
| type    | String | 设置样式，默认为 tip                    |

## 动态标签栏标题

`vuepress-plugin-dynamic-title` 标签栏选中和离开页面时标签栏标题会有变化

**安装**

```bash
yarn add vuepress-plugin-dynamic-title -D
```

**配置**

```js
module.exports = {
  plugins: [
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      },
    ],
  ],
};
```

## 代码块复制

`vuepress-plugin-nuggets-style-copy` 复制代码块插件

**安装**

```bash
yarn add vuepress-plugin-nuggets-style-copy -D
```

**配置**

```js
[
  'vuepress-plugin-nuggets-style-copy',
  {
    copyText: '复制代码',
    tip: {
      content: '复制成功!',
    },
  },
];
```

## 音乐播放器

目前音乐插件有三种：

1. [bgm-player](https://github.com/vuepress-reco/vuepress-plugin-bgm-player) 一款简洁易用的音乐插件，优势是好看，其他一无是处了
2. [music-bar](https://www.npmjs.com/package/vuepress-plugin-music-bar) 一个程序猿自己开发的插件，除本地，网络音频之外还支持从平台歌单获取链接(目前仅支持网易云音乐)，缺点是丑了点，支持一下这位老哥
3. [meting](https://github.com/moefyit/vuepress-plugin-meting) 功能强大，配置丰富，目前应该最大强大的音乐插件了，我用的就是这个

**安装**

```bash
yarn add vuepress-plugin-meting -D
```

**配置**

```js
[
    'meting',
    {
      //metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        server: 'netease', // 音乐平台  可选值： "netease" | "tencent" | "xiami"
        type: 'playlist', // 资源类型（播放列表、单曲、专辑等）  可选值： "song" | "album" | "artist" | "playlist"
        mid: '5261808563', // 资源 ID
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0,
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      },
    },
  ],
```

## 鼠标点击特效

`vuepress-plugin-cursor-effects` 在鼠标点击的时候会出现漂亮的图案、

**安装**

```bash
yarn add vuepress-plugin-cursor-effects -D
```

**配置**

```js
[
  'cursor-effects',
  {
    size: 2,
    shape: 'star', // 点击形状: 'star', 'star' | 'circle'
    zIndex: 999999999,
  },
];
```

如果需要在鼠标点击的时候出现随机彩色的文字，需要自己引入 js 脚本，下文会讲到。

## 阅读进度条

`vuepress-plugin-reading-progress` 在顶部显示阅读进度

**安装**

```bash
yarn add vuepress-plugin-reading-progress -D
```

**配置**

```js
module.exports = {
  plugins: [
    ['reading-progress']
  ],
};
```

## 背景彩带

`vuepress-plugin-ribbon-animation` 背景彩带动画

**安装**

```bash
yarn add vuepress-plugin-ribbon-animation -D
```

**配置**

```js
module.exports = {
  plugins: [
    ['ribbon-animation'], {
      size: 90, // 默认数据
      opacity: 0.3, //  透明度
      zIndex: -1, //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: '80%',
        // 色带HSL亮度量
        colorBrightness: '60%',
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: 'center',
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true,
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true, // 滑动彩带
    }
  ],
};
```

## 看板娘

参考[github文档](https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang)

`@vuepress-reco/vuepress-plugin-kan-ban-niang` 可以添加看板娘动画人物

**安装**

```bash
yarn add @vuepress-reco/vuepress-plugin-kan-ban-niang -D
```

**配置**

```js
module.exports = {
  plugins: [
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang']
  ],
};
```

## 上次更新时间

`@vuepress/last-updated` 基于`git commit` 的上次更新时间

如果使用默认主题，无需安装本插件，因为 VuePress 的 core 中已经包含此插件，同时，应该直接使用 [themeConfig.lastUpdated](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4) 选项。

**配置**

```js
module.exports = {
  plugins: ['@vuepress/last-updated']
}
```

## 中文路径转换为拼音路径

参考[github文档](https://github.com/viko16/vuepress-plugin-permalink-pinyin)

`vuepress-plugin-permalink-pinyin` 该插件解决了文档路径有中文时无法打开的问题

**安装**

```bash
yarn add vuepress-plugin-permalink-pinyin -D
```

**配置**

```js
module.exports = {
  plugins: ['permalink-pinyin', {
    lowercase: true, // Converted into lowercase, default: true
    separator: '-' // Separator of the slug, default: '-'
    }
  ]
}
```

## 百度站点自动推送

参考[github文档](https://github.com/IOriens/vuepress-plugin-baidu-autopush)

`vuepress-plugin-baidu-autopush`

**安装**

```bash
yarn add -D vuepress-plugin-baidu-autopush
```

**配置**

```js
module.exports = {
  plugins: [
    'vuepress-plugin-baidu-autopush'
  ]
};
```

## markdown Tab 分栏

有时候先把不同语言的代码展示在同一个代码块中，这就需要用到 tabs。目前社区中支持 markdown-tabs 的插件有

- [vuepress-plugin-element-tabs](https://superbiger.github.io/vuepress-plugin-tabs/#preview)
- [vuepress-plugin-tabs](https://github.com/pskordilakis/vuepress-plugin-tabs)
- [@vuepress-reco/extract-code](https://github.com/vuepress-reco/vuepress-plugin-extract-code)


这里我选用的是`vuepress-plugin-element-tabs`，使用步骤如下：

1. 安装
:::: tabs type:board-card

::: tab yarn
```bash
yarn add vuepress-plugin-element-tabs -D
```
:::

::: tab npm
```bash
npm i vuepress-plugin-element-tabs -D
```
:::

:::: 

2. 配置

```js
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-element-tabs'],
};
```

3. tabs 属性

| Attribute    | Description                                           | Type    | Accepted Values       | Default     |
| ------------ | ----------------------------------------------------- | ------- | --------------------- | ----------- |
| type         | type of Tab                                           | String  | card/border-card      | border-card |
| tab-position | position of tabs                                      | String  | top/right/bottom/left | top         |
| stretch      | whether width of tab automatically fits its container | Boolean | -                     | false       |
| Attribute    | Description                                           | Type    | Accepted Values       | Default     |

4. tab 属性

| Attribute | Description                    | Type    | Accepted Values | Default |
| --------- | ------------------------------ | ------- | --------------- | ------- |
| label     | title of the tab               | String  | -               | -       |
| lazy      | whether Tab is lazily rendered | Boolean | -               | false   |

5. 使用

```md
:::: tabs type:board-card
::: tab title lazy
__markdown content__
:::
::::
```

## 点击随机文字

1. 在 `.vuepress\public\js` 文件夹下创建 `MouseClickEffect.js` 文件，填入以下代码：
```js
var a_idx = 0;

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
  $('body').click(function (e) {
    var a = new Array('富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善');
    var $i = $('<span/>').text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      'z-index': 999999999999999999999999999999999999999999999999999999999999999999999,
      top: y - 20,
      left: x,
      position: 'absolute',
      'font-weight': 'bold',
      color: `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
      'user-select': 'none',
      cursor: 'default',
    });
    $('body').append($i);
    $i.animate(
      {
        top: y - 180,
        opacity: 0,
      },
      1500,
      function () {
        $i.remove();
      }
    );
  });
});
```

2. 在主题配置文件 `config.js` 下的 `head` 引入 `MouseClickEffect.js` ，这里的 `jquery` 必须引入，鼠标点击代码才能生效

```js
  head: [
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
```
