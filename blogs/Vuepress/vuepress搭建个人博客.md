---
title: vuepress 搭建个人博客
date: 2020-11-06
tags:
- "前端"
- "博客"
categories:
- "Vuepress"
---

> 使用 [vuepress](https://vuepress.vuejs.org/zh/) 搭建个人博客，主题使用 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

<!-- more -->

<Boxx/>

一直以来都想要搭建一个自己的博客网站，为此买了阿里云的ECS，随后又斥巨资（9块）购买了一年的域名使用权。于是，就开始了搭建博客之旅。

## 1 搭建工具

### Vuepress

VuePress 是尤雨溪（Vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 Vue 的 SPA 应用，内置 Webpack，可以用来写文档。(详见[Vuepress官网](https://vuepress.vuejs.org/zh/))

VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

### Vuepress-theme-reco

vuepress博客主题—vuepress-theme-reco是一款简洁而优雅的 vuepress 博客&文档主题。它既可以成为简洁而又不失美观的主题，又可以书写你的项目文档，看起来更有逼格。

### Vuepress的优势

+ 为技术文档而优化的内置Markdown拓展
+ 在Markdown文件中使用Vue组件的能力
+ Vue驱动的自定义主题系统
+ 自动生成Service Worker(支持PWA)
+ Google Analytics集成
+ 基于Git的"最后更新时间"
+ 多语言支持
+ 响应式布局

### 对比其他工具

#### Nuxt

VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。

#### Docsify / Docute

这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！

#### Hexo

Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。

#### GitBook

我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。

## 2 搭建流程

项目使用vuepress-theme-reco的作者提供的脚手架搭建，可以快速搭建基于Vuepress的博客网站，省去繁杂的配置。

### 如何安装主题

:::: tabs type:board-card

::: tab npx
```bash
npx @vuepress-reco/theme-cli init
```
:::

::: tab npm
```bash
npm install @vuepress-reco/theme-cli -g

theme-cli init
```
:::

::: tab yarn
```bash
yarn global add @vuepress-reco/theme-cli

theme-cli init
```
:::

::::

之后要求输入博客名称和描述，可以在这里写，也可以最后在config.js里写，所以我就直接敲回车，等以后在配置。选择项目类型为blog。拉取代码完成，我们就基本完成了安装步骤。接着执行

```bash
cd 你的项目名

yarn 

yarn dev
```

在浏览器访问[http://localhost：8080](http://localhost：8080)看到主题的效果。

### 配置文件

参考[Config.js 配置](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html)

项目的主要配置文件在`.vuepress/config.js`。由于配置文件中导航栏 nav、侧边栏 sidebar、插件 plugins 的配置内容较多，因此将它们抽离出来放到单独的 js 中。这里以 nav 为例，看看如何将他们分离出去吧。

1. 首先新建文件`.vuepress/config/nav.js`，里面写的啥？

```js
module.exports = [
  {
    text: '主页',
    link: '/',
    icon: 'reco-home',
  },
  {
    text: '时间线',
    link: '/timeline/',
    icon: 'reco-date',
  },
  {
    text: '文档',
    icon: 'reco-message',
    items: [
      {
        text: 'vuepress-reco',
        link: '/docs/theme-reco/',
      },
    ],
  },
  {
    text: '快速访问',
    icon: 'reco-menu',
    items: [
      {
        text: 'iconfont-阿里巴巴矢量图标库',
        link: 'https://www.iconfont.cn',
      },
    ],
  },
  {
    text: '联系我',
    icon: 'reco-message',
    items: [
      {
        text: 'GitHub',
        link: 'https://github.com/GYINGAO',
        icon: 'reco-github',
      },
    ],
  },
];
```

2. 在`config.js`中引入`nav.js`

```js
const nav = require('./config/nav/');
```

3. 替换`config.js`中的相应内容

```js
const nav = require('./config/nav/');
const sidebar = require('./config/sidebar/');
const plugins = require('./config/plugins/');

module.exports = {
  // ...
  themeConfig: {
    // ...
    nav,
    sidebar,
  }  
  plugins,
};

```

至此，nav 已经从`config.js`中分离出去了。完整的`config.js`如下：

```js
const nav = require('./config/nav/');
const sidebar = require('./config/sidebar/');
const plugins = require('./config/plugins/');

module.exports = {
  title: "Rick's blog",
  description: '',
  dest: 'dist',
  locales: {
    '/': {
      lang: 'zh-CN', // 设置语言
    },
  },
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js',
      },
    ],
    // 引入鼠标点击脚本
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/js/MouseClickEffect.js',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // 是否自动展开右侧子导航
    subSidebar: 'auto',
    nav,
    sidebar,
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    // 评论
    valineConfig: {
      appId: 'GPT27fD1xiOvrrpHbUkuvIUK-gzGzoHsz', // your appId
      appKey: 'pz1P2yNeAqowXKtmGqdBA75U', // your appKey
      placeholder: '客官，发表一下意见吧~',
      avatar: 'robohash',
      visitor: true,
      requiredFields: ['nick'],
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com',
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新时间',
    author: 'Rick',
    authorAvatar: '/img/avatar.png',
    record: '蜀ICP备2021026631号',
    recordLink: 'http://www.rickgy.ltd',
    // cyberSecurityRecord: ' 公安网备案号',
    // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=备案号',
    startYear: '2020',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
  },
  plugins,
  markdown: {
    lineNumbers: true,
  },
};

```

### 编写主页README.md文件

参考[首页配置](https://vuepress-theme-reco.recoluan.com/views/1.x/home.html)

简单说明：
+ `home`参数表示是否显示为主页
+ `heroText`和`tagline`参数设置主页的标题和副标题

```md
---
home: true
heroText: 百学须先立志
tagline: 博学之，审问之，慎思之，明辨之，笃行之
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: {
  height: '450px'
}
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
# features:
# - title: Yesterday
#   details: 开发一款看着开心、写着顺手的 vuepress 博客主题
# - title: Today
#   details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
# - title: Tomorrow
#   details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---

```

效果如下

![](http://r1snha2jc.hn-bkt.clouddn.com//imgimage-20211107232319868.png)



### 配置插件

参考[reco插件](https://vuepress-theme-reco.recoluan.com/views/plugins/)

vuepress可以使用插件来提供额外的功能。如果你有一个已经发布在 `npm` 的喜欢的插件，你可以使用以下命令来下载并安装它

```bash
yarn add <packageName> -D
```

::: danger 注意
这里的包名需要全称，并不能省略 `vuepress-plugin-`
:::

使用插件，可以写成：
```js
module.exports = [
  ['vuepress-plugin-xxx', {
    // 插件相关的配置
  }]
]
```
你甚至可以省略掉 `vuepress-plugin-`
```js
module.exports = [
  ['xxx', {
    // 插件相关的配置
  }]
]
```
::: tip
你可以通过这种方式来对主题内置插件的配置进行覆盖，甚至禁用一个内置插件。
只需将 Options 设置成 false 便可禁用该插件。

就像这样

```js
module.exports = {
  plugins: [
    ["@vuepress-reco/back-to-top", false] // disabled.
  ]
};
```
:::




