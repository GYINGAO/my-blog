---
title: Vuepress 写作技巧
date: 2021-11-07
tags:
 - "博客"
 - "前端"
 - "技巧"

categories:
 - "Vuepress"
---

::: tip
+ 参考 [Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)
:::

在用Markdown写文章时，除了基本的Markdown语法外，Vuepress 还给我们提供了额外的功能，来丰富我们的写作。

## Front Matter

参考
+ [Vuepress Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)
+ [reco Front Matter](https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html)

VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持。任何包含 `YAML front matter` 的 `Markdown` 文件都将由 [gray-matter](https://github.com/jonschlinkert/gray-matter) 处理。`front matter` 必须是 `markdown` 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

```md
---
title: Blogging Like a Hacker
lang: en-US
---
```

在这些三条虚线之间，你可以设置预定义变量，甚至可以创建自己的自定义变量。 然后，您可以使用 [`$frontmatter`](https://vuepress.vuejs.org/zh/guide/global-computed.html#frontmatter) 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。

::: tip 提示
在 VuePress 中，Front matter 是 **可选的**。
:::

### 常用变量

| 名称          | 类型              | 描述                         |
| ------------- | ----------------- | ---------------------------- |
| title         | String            | 当前页面的标题               |
| lang          | String            | 当前页面的语言               |
| description   | String            | 当前页面的描述               |
| layout        | String            | 设置当前页面的布局组件       |
| permalink     | String            | 永久链接                     |
| metaTitle     | String            | 重写默认的 meta title        |
| meta          | Array             | 指定额外的要注入的 meta 标签 |
| navbar        | Boolean           | 是否显示导航栏               |
| sidebar       | Boolean or 'auto' | 是否显示侧边栏               |
| prev          | Boolean or String | 上一篇链接                   |
| next          | Boolean or String | 下一篇链接                   |
| search        | Boolean           | 是否显示搜索栏               |
| tags          | Array             | 设置文章标签                 |
| date          | Date              | 文章创建日期                 |
| categories    | Array             | 所属分类                     |
| keys          | Array             | 文章加密密码                 |
| publish       | Boolean           | 文章是否发布                 |
| sticky        | Number            | 文章置顶                     |
| isTimeLine    | Boolean           | 是否在时间线中显示           |
| isShowComment | Boolean           | 是否显示评论                 |
| sidebarDepth  | Number            | 侧边栏显示深度               |

### 完整示例

```md
---
title: 烤鸭的做法
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys:
 - '123456'
 - 'rick'
publish: false
sticky: 1
sidebar: false
sidebarDepth: 2
isTimeLine: false
isShowComment: true
---
```

## Container 容器

[vuepress-plugin-container](https://vuepress-community.netlify.app/zh/plugins/container/) 允许你可以使用来自定义一个容器，主题利用该插件内置了三个简单易用的块容器，你可以通过以下方式来启用

**输入**

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger 注意
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

## Emoji 表情

**输入**

```md
:tada: 
:100:
```

**输出**

:tada: 
:100:

在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的Emoji

## 目录

**输入**

```md
[[toc]]
```

**输出**

[[toc]]

## 代码块中的行高亮

**输入**

```md
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
/```
```

**输出**

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行以外，你也可指定多行，行数区间，或是两者都指定。
+ 行数区间: 例如 {5-8}, {3-10}, {10-17}
+ 多个单行: 例如 {4,7,9}
+ 行数区间与多个单行: 例如 {4,7-13,16,23-27,40}
