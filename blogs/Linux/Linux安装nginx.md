---
title: Linux 安装 Nginx
date: 2021-10-24 18:00:00
tags:
 - 服务器
 - 环境
 - 教程
 - Nginx
 - 防火墙
categories:
 - Linux
---

##  简介
nginx是一款高性能的HTTP反向代理服务器。

**优点**

+ 支持高并发连接
+ 配置文件简洁
+ 占用内存少
+ 内部有健康检查功能
+ 支持Rewrite重写：可根据不同的域名、URL将请求转发至后端不同的服务群
+ 支持热部署
+ 稳定性高

**主要功能**

+ 正向代理

nginx可以做正向代理进行上网等功能。加入将局域网外的网络想象成是一个大的资源库，如果想要访问局域网外的资源库，则需要通过代理服务器来访问外部资源。

+ 反向代理

反向代理，其实客户端对反向代理服务器是无感的，客户端访问反向代理服务器，反向代理服务器再将请求转发至目标服务器，只需要暴露代理服务器的地址即可，隐藏了真实的服务器地址。

+ 负载均衡

对于多个请求，nginx将请求分发至不同的服务器上，从而来减轻服务器压力。

+ 动静分离

为了加快网站的解析速度，可以把动态资源（jsp、servlet）和静态资源（js、HTML等）由不同的服务器来解析，加快解析速度。降低原来单个服务器的压力。

## 安装

### 1 安装依赖包

安装 Nginx 需要先将官网下载的源码进行编译，编译依赖 `gcc` 环境
```bash
yum install gcc-c++
```
Nginx 的 `Rewrite` 模块和 `HTTP` 核心模块会使用到PCRE正则表达式语法。这里需要安装两个安装包 `pcre` 和 `pcre-devel`。第一个安装包提供编译版本的库，而第二个提供开发阶段的头文件和编译项目的源代码
```bash
yum install -y pcre pcre-devel
```

`zlib` 库提供了开发人员的压缩算法，在Nginx的各种模块中需要使用 `gzip` 压缩
```bash
yum install -y zlib zlib-devel
```

nginx不仅支持 `http` 协议，还支持 `https`（即在 `ssl` 协议上传输 `http`），如果使用了 `https`，需要安装 `OpenSSL` 库
```bash
yum install -y openssl openssl-devel
```

### 2 下载并解压安装包

```bash
cd /usr/local # 下载tar包
wget http://nginx.org/download/nginx-1.20.1.tar.gz
tar -zxvf nginx-1.20.1.tar.gz # 解压
```

### 3 使用默认配置

```bash
cd nginx-1.20.1 # 进入解压目录
./configure
```

::: tip 额外说明
如果需要开始 `https` 支持，这里请不要直接执行 `./configure` ，即不要直接执行该脚本，而是在该脚本后面加上SSL模块，请执行 `./configure --with-http_ssl_module`
:::

### 4 编译安装
```bash
make
make install
```

### 5 相关操作

``` bash
# 进入Nginx安装目录
cd /usr/local/nginx/sbin 

# 启动Nginx
./nginx 

# 关闭Nginx
./nginx -s quit  或者 ./nginx -s stop

# 重启Nginx
./nginx -s reload

# 查看nginx进程
ps aux|grep nginx
```

::: tip 
设置nginx开机启动，只需在 `/etc/rc.local` 底部增加 `/usr/local/nginx/sbin/nginx` 即可
:::

### 6 防火墙

+ 启动 `systemctl start firewalld`
+ 查看状态 `systemctl status firewalld`
+ 关闭 `systemctl stop firewalld`
+ 禁用 `systemctl disable firewalld`
+ 重启 `systemctl restart firewalld.service`
+ 添加端口 `firewall-cmd --zone=public --add-port=80/tcp --permanent`
+ 重新载入 `firewall-cmd --reload`
+ 查看所有打开的端口 `firewall-cmd --zone=public --list-ports`




