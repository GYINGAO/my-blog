---
title: jenkins 自动打包部署 Vue 项目
date: 2020-11-01
tags:
 - 教程
 - 服务器
 - 部署
 - Linux
 - Vue
 - 前端
categories:
 - 开发笔记
---


## 1 安装 java

`jenkins` 是运行在 java 环境中的,所以要先安装 java，配置 java 环境变量后才能使用。

### 卸载系统自带的jdk

```bash
# 查找系统jdk 
rpm -qa|grep java 

# 卸载
rpm -e --allmatches --nodeps <jdkName>

# 检查是否卸载干净
 rpm -qa|grep java 
```

### 查找 yum 下可用的 java 列表

```bash
yum -y list java*
# or
yum search jdk
```

### 安装java

```bash
yum install -y java-1.8.0-openjdk.x86_64

# 验证完成安装
java -version
```

### 配置环境变量

用文本编辑器打开 `/etc/profile`

```bash
vi /etc/profile
```

在 `profile` 文件末尾加入
```bash
export JAVA_HOME=/usr/lib/jvm/jre-1.8.0-openjdk
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

使配置文件生效
```bash
source /etc/profile 
source ~/.bash_profile
```

## 2 服务器安装 jenkins

```bash
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo 
yum install jenkins
```
::: tip
默认安装位置 `/usr/lib/jvm`，
配置文件在 `/etc/sysconfig/jenkins`，可以修改用户名端口号等等
```bash
JENKINS_USER="root"
JENKINS_PORT="8888"
```
:::

启动 jenkins 服务
```bash
systemctl start jenkins
```


## 3 本地访问 jenkins

访问 8080 端口，初始密码在 `/var/lib/jenkins/secrets/initialAdminPassword`

## 4 安装插件

## 5 构建任务

点击  `create a job` 输入任务名称，选择构建自由风格的软件项目
