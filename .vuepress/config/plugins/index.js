module.exports = [
  // 流程图插件
  ['flowchart'],
  // 标签加强
  ['boxx'],
  // 动态标题
  [
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: '欢迎帅哥美女！',
      hideIcon: '/favicon.ico',
      hideText: '呜呜，不要走嘛！！',
      recoverTime: 2000,
    },
  ],
  // 代码复制弹窗插件
  [
    'nuggets-style-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!',
      },
    },
  ],
  // 音乐插件
  [
    'meting',
    {
      //metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        server: 'netease', // 音乐平台  可选值： "netease" | "tencent" | "xiami"
        type: 'playlist', // 资源类型（播放列表、单曲、专辑等）  可选值： "song" | "album" | "artist" | "playlist"
        mid: '2658047965', // 资源 ID
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
  // 鼠标点击特效
  [
    'cursor-effects',
    {
      size: 2,
      shape: 'star', // 点击形状: 'star', 'star' | 'circle'
      zIndex: 999999999,
    },
  ],
  // 阅读进度条
  ['reading-progress'],
  // 背景色带
  [
    'ribbon-animation',
    {
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
    },
  ],
  // 看板娘
  ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {}],
  // 上次更新时间，基于git commit
  ['@vuepress/last-updated'],
  // 将中文路径转换为拼音路径
  [
    'permalink-pinyin',
    {
      lowercase: true, // Converted into lowercase, default: true
      separator: '-', // Separator of the slug, default: '-'
    },
  ],
  // 百度站点自动推送 Vuepress 插件
  ['baidu-autopush'],
  // markdown Tabs
  ['element-tabs'],
  // 页面滚动时自动激活侧边栏链接的插件
  ['@vuepress/active-header-links'],
  // 一个基于 nprogress (opens new window)的进度条插件
  ['@vuepress/nprogress'],
  [
    'copyright',
    {
      disabled: true,
      noCopy: false, // 选中的文字将无法被复制
      minLength: 100, // 如果长度超过 100 个字符
      authorName: 'Rick',
      clipboardComponent: '.vuepress/components/clipboardComponent.vue',
    },
  ],
  // // 自动生成sidebar
  // [
  //   'vuepress-plugin-auto-sidebar',
  //   {
  //     sidebarDepth: 1,
  //     collapse: {
  //       open: true,
  //     },
  //     sort: {
  //       // 更多选项:
  //       // `asc`、`desc`、`created_time_asc`、`created_time_desc`
  //       mode: 'asc',
  //     },
  //   },
  // ],
];
