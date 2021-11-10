const nav = require('./config/nav/');
const sidebar = require('./config/sidebar/');
const plugins = require('./config/plugins/');

module.exports = {
  title: "Rick's blog",
  description: '博学之，审问之，慎思之，明辨之，笃行之',
  dest: 'dist',
  locales: {
    '/': {
      lang: 'zh-CN', // 设置语言
    },
  },
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
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
    // 博客加密
    // keyPage: {
    //   keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983', // 登录页动画线的颜色
    // },
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
    authorAvatar: '/img/avatar.jpg',
    record: '蜀ICP备2021026631号',
    recordLink: 'https://beian.miit.gov.cn/',
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
