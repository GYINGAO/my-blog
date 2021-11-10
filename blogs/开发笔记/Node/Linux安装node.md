---
title: Linux 使用 nvm 安装 Node 环境
date: 2021-10-20 18:00:00
tags:
 - 服务器
 - 环境
 - 教程
 - nvm
 - Linux
 - Node
 - 后端
categories:
 - 开发笔记
---

node的安装方式有两种，一是直接安装指定版本的node，二是通过nvm来管理node。本文采取nvm的方式安装node。


## 安装git

```bash
yum install git -y
```
::: tip
顺便说一下，yum安装git被安装在 `/usr/libexec/git-core` 目录下
:::

## 从github获取[nvm](https://github.com/nvm-sh/nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

## 使环境变量生效

```bash
source ~/.bashrc
```

## 验证是否安装成功

```bash
nvm --version 
```

## nvm 常用命令

### 1 基本命令
```bash
nvm --help # 显示命令行帮助信息
nvm --version # 打印输出已安装的nvm版本号
nvm deactivate # 取消当前nvm命令行效果
```

### 2 下载和安装node
```bash
nvm install [-s] <version> # 从源下载一个版本为<version>的node.js
--reinstall-packages-from=<version> # 安装时重新安装最新版本已安装的包
--lts # 安装时只选择LTS长期支持版本
--lts=<LTS name> # 安装时选择指定的LTS版本
--skip-default-packages # 安装时，跳过默认包文件（若存在）
--latest-npm # 安装时，试图升级最新的npm版本
--no-progress # 禁止任何下载进度条
```

### 3 卸载已安装的node
```bash
nvm uninstall <version> # 卸载一个指定版本的node
nvm uninstall --lts # 卸载长期支持版本的node
nvm uninstall --lts=<LTS name> # 卸载一个指定名称的长期支持版本的node
```

### 4 切换node版本
```bash
nvm use [--silent] <version> # 切换到指定版本的node
--lts # 自动切换到长期支持版本
--lts=<LTS name> # 自动切换到指定名称的node长期支持版本
```

### 5 查看node版本
```bash
nvm current # 查看当前使用的node版本
nvm ls # 查看所有本地可用的node版本
nvm ls <version> # 参看指定版本
nvm ls-remote # 查看所有可用远程版本
--lts # 查看所有长期支持版本
nvm ls-remote <version> # 参看所有node的指定远程版本
--lts # 查看所有node长期支持版本
--lts=<LTS name> # 仅查看指定名称的长期支持版本
```

### 6 运行node
```bash
nvm exec [--silent] [version] [<command>] # 在<version>运行命令<command>
--lts
--lts=<LTS name>
nvm run [--silent] [version] [<args>] # 在<version>以参数<args>运行node
--lts
--lts=<LTS name>
```

### 7 将描述解释到版本
```bash
nvm version <version> # 将给定的描述解析为单个本地版本
nvm version-remote <version> # 将给定的描述解析为单个远程版本
--lts
--lts=<LTS name>
```

### 8 版本别名
```bash
nvm alias [<pattern>] # 显示所有以<pattern>开头的版本别名
nvm alias <name> <version> # 给版本<version>设置一个别名
nvm unalias <name> # 删除<name>的版本别名
```

### 9 nvm和npm
```bash
nvm install-latest-npm # 在当前node版本中，将npm升级到最新版
nvm reinstall-packages <version> # 在全局重新安装npm，从<version>版本到当前版本
```

### 10 卸载npm
```bash
npm unload
```

### 11 nvm缓存
```bash
nvm cache dir // 显示nvm的缓存目录
nvm cache clear // 清楚nvm的缓存目录
```
