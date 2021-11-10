#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 推送源码到github
git add .
git commit -m 'deploy'
git push

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
#  echo 'www.rickgy.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:GYINGAO/GYINGAO.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:GYINGAO/problog.git master:gh-pages

# 如果发布到 https://<USERNAME>.gitee.io/<REPO>
# git push -f git@gitee.com:Rickgy/myblog.git master:gh-pages

# 如果发布到自定义服务器的git仓库
git push -f git@39.103.236.222:/home/git/blog.git master

cd -
